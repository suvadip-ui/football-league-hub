// Vercel serverless function: keeps API_FOOTBALL_KEY on the server.
const allowedResources = new Set(['standings', 'fixtures', 'topscorers']);

module.exports = async (request, response) => {
  const { resource, league, season } = request.query;
  const apiKey = process.env.API_FOOTBALL_KEY;

  if (!apiKey) {
    return response.status(500).json({ error: 'The API_FOOTBALL_KEY environment variable is not configured.' });
  }
  if (!allowedResources.has(resource) || !/^\d+$/.test(String(league)) || !/^\d{4}$/.test(String(season))) {
    return response.status(400).json({ error: 'Invalid football-data request.' });
  }

  const apiPath = resource === 'topscorers'
    ? 'players/topscorers'
    : resource === 'fixtures'
      ? 'fixtures?next=3'
      : 'standings';
  const joiner = apiPath.includes('?') ? '&' : '?';

  try {
    const upstream = await fetch(
      `https://v3.football.api-sports.io/${apiPath}${joiner}league=${league}&season=${season}`,
      { headers: { 'x-apisports-key': apiKey } },
    );
    const payload = await upstream.json();
    const providerReturnedError = payload.errors && Object.keys(payload.errors).length > 0;
    if (providerReturnedError) console.error('API-Football response error:', JSON.stringify(payload.errors));
    response.setHeader(
      'Cache-Control', upstream.ok && !providerReturnedError
        ? 's-maxage=900, stale-while-revalidate=3600'
        : 'no-store',
    );
    return response.status(upstream.status).json(payload);
  } catch {
    return response.status(502).json({ error: 'Football data provider could not be reached.' });
  }
};
