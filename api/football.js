// Vercel serverless function for football-data.org.
// The response is normalised so the dashboard can keep the same UI data format.
const competitionCodes = { '39': 'PL', '140': 'PD', '135': 'SA', '78': 'BL1', '61': 'FL1', CL: 'CL' };
const allowedResources = new Set(['standings', 'fixtures', 'topscorers']);

function normalise(resource, payload) {
  if (resource === 'standings') {
    const total = payload.standings?.find((standing) => standing.type === 'TOTAL')?.table || [];
    return { response: [{ league: { standings: [total.map((row) => ({
      rank: row.position, position: row.position,
      team: { name: row.team.name, code: row.team.tla || null },
      all: { played: row.playedGames, win: row.won, draw: row.draw, lose: row.lost }, goalsDiff: row.goalDifference, points: row.points,
    }))] } }] };
  }
  if (resource === 'fixtures') {
    return { response: (payload.matches || []).map((match) => ({
      fixture: { date: match.utcDate, status: { short: match.status === 'SCHEDULED' || match.status === 'TIMED' ? 'NS' : match.status } },
      teams: { home: { name: match.homeTeam.name }, away: { name: match.awayTeam.name } },
    })) };
  }
  // Top-scorer data is not included in football-data.org's free plan.
  return { response: [] };
}

module.exports = async (request, response) => {
  const { resource, league } = request.query;
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;
  const competition = competitionCodes[String(league)];

  if (!apiKey) return response.status(500).json({ error: 'FOOTBALL_DATA_API_KEY is not configured.' });
  if (!allowedResources.has(resource) || !competition) return response.status(400).json({ error: 'Invalid football-data request.' });
  if (resource === 'topscorers') return response.status(200).json(normalise(resource, {}));

  const resourcePath = resource === 'fixtures'
    ? `competitions/${competition}/matches?status=SCHEDULED&limit=3`
    : `competitions/${competition}/standings`;

  try {
    const upstream = await fetch(`https://api.football-data.org/v4/${resourcePath}`, {
      headers: { 'X-Auth-Token': apiKey },
    });
    const payload = await upstream.json();
    if (!upstream.ok) {
      console.error('football-data.org response error:', JSON.stringify(payload));
      response.setHeader('Cache-Control', 'no-store');
      return response.status(upstream.status).json(payload);
    }
    response.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
    return response.status(200).json(normalise(resource, payload));
  } catch {
    return response.status(502).json({ error: 'football-data.org could not be reached.' });
  }
};
