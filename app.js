const demoData = {
  premier: { country: 'ENGLAND', title: 'Premier League', table: [['Arsenal','ARS',10,18,25,'#d71920'],['Manchester City','MCI',10,14,23,'#6cabdd'],['Liverpool','LIV',10,11,21,'#c8102e'],['Chelsea','CHE',10,7,20,'#034694'],['Tottenham','TOT',10,5,18,'#132257'],['Aston Villa','AVL',10,3,17,'#8a1c3f'],['Newcastle','NEW',10,2,16,'#241f20'],['Brighton','BHA',10,1,15,'#0057b8'],['West Ham','WHU',10,-5,11,'#7a263a']], fixtures: [['SAT 13 SEP','12:30','Arsenal','Nottingham Forest','PREVIEW'],['SAT 13 SEP','15:00','Manchester City','Manchester United','MATCHDAY'],['SUN 14 SEP','16:30','Chelsea','Liverpool','FEATURED']], scorers: [['Erling Haaland','Manchester City',10],['Viktor Gyökeres','Arsenal',8],['Mohamed Salah','Liverpool',7],['João Pedro','Chelsea',6]] },
  laliga: { country: 'SPAIN', title: 'La Liga', table: [['Real Madrid','RMA',10,16,26,'#f4b942'],['Barcelona','BAR',10,15,25,'#a50044'],['Atlético Madrid','ATM',10,10,21,'#c8102e'],['Villarreal','VIL',10,7,19,'#f9e300'],['Real Betis','BET',10,5,18,'#00833e'],['Athletic Club','ATH',10,4,17,'#e21c2a'],['Real Sociedad','RSO',10,2,15,'#0067b1'],['Sevilla','SEV',10,0,14,'#e2001a'],['Valencia','VAL',10,-3,12,'#f58220']], fixtures: [['SAT 13 SEP','13:00','Real Madrid','Real Sociedad','PREVIEW'],['SAT 13 SEP','20:00','Atlético Madrid','Villarreal','MATCHDAY'],['SUN 14 SEP','20:00','Barcelona','Valencia','FEATURED']], scorers: [['Kylian Mbappé','Real Madrid',9],['Robert Lewandowski','Barcelona',8],['Julián Álvarez','Atlético Madrid',7],['Ayoze Pérez','Villarreal',6]] },
  seriea: { country: 'ITALY', title: 'Serie A', table: [['Napoli','NAP',10,13,24,'#12a0d7'],['Inter','INT',10,12,23,'#1553a5'],['Juventus','JUV',10,9,21,'#181818'],['AC Milan','MIL',10,8,20,'#d71920'],['Roma','ROM',10,5,18,'#8e1f2d'],['Atalanta','ATA',10,4,17,'#1b4fa3'],['Lazio','LAZ',10,2,15,'#5bb4e5'],['Bologna','BOL',10,0,14,'#bb1f32'],['Fiorentina','FIO',10,-3,12,'#5b227b']], fixtures: [['SAT 13 SEP','17:00','Juventus','Inter','DERBY D’ITALIA'],['SAT 13 SEP','20:45','Napoli','Fiorentina','MATCHDAY'],['SUN 14 SEP','20:45','AC Milan','Roma','FEATURED']], scorers: [['Lautaro Martínez','Inter',9],['Romelu Lukaku','Napoli',8],['Dušan Vlahović','Juventus',7],['Rafael Leão','AC Milan',6]] },
  bundesliga: { country: 'GERMANY', title: 'Bundesliga', table: [['Bayern Munich','BAY',10,20,27,'#dc052d'],['Borussia Dortmund','BVB',10,13,23,'#fdeb00'],['RB Leipzig','RBL',10,10,21,'#dd0741'],['Bayer Leverkusen','B04',10,9,20,'#e32219'],['Eintracht Frankfurt','SGE',10,5,18,'#e1000f'],['Stuttgart','VFB',10,3,17,'#e32219'],['Freiburg','SCF',10,1,15,'#e60012'],['Werder Bremen','SVW',10,-1,14,'#1d9053'],['Wolfsburg','WOB',10,-3,12,'#65b32e']], fixtures: [['FRI 12 SEP','20:30','Bayern Munich','Hamburg','MATCHDAY'],['SAT 13 SEP','15:30','Borussia Dortmund','RB Leipzig','FEATURED'],['SUN 14 SEP','17:30','Bayer Leverkusen','Eintracht Frankfurt','PREVIEW']], scorers: [['Harry Kane','Bayern Munich',11],['Serhou Guirassy','Borussia Dortmund',8],['Patrik Schick','Bayer Leverkusen',7],['Loïs Openda','RB Leipzig',6]] },
  ligue1: { country: 'FRANCE', title: 'Ligue 1', table: [['Paris Saint-Germain','PSG',10,18,26,'#004170'],['Marseille','OM',10,10,22,'#00a8e0'],['Monaco','ASM',10,8,20,'#d3072a'],['Lille','LOS',10,6,19,'#e11837'],['Lyon','OL',10,4,18,'#1e4b9b'],['Nice','OGC',10,2,16,'#000000'],['Lens','RCL',10,1,15,'#f6d40f'],['Strasbourg','RCS',10,-2,13,'#0875be'],['Rennes','SRFC',10,-4,12,'#d20a11']], fixtures: [['FRI 12 SEP','20:45','Paris Saint-Germain','Lens','MATCHDAY'],['SAT 13 SEP','17:00','Marseille','Lille','FEATURED'],['SUN 14 SEP','20:45','Lyon','Monaco','PREVIEW']], scorers: [['Ousmane Dembélé','Paris Saint-Germain',9],['Mason Greenwood','Marseille',8],['Jonathan David','Lille',7],['Alexandre Lacazette','Lyon',6]] },
  championsleague: { country: 'EUROPE', title: 'Champions League', table: [['Real Madrid','RMA',4,9,10,'#f4b942'],['Bayern Munich','BAY',4,8,10,'#dc052d'],['Paris Saint-Germain','PSG',4,7,9,'#004170'],['Liverpool','LIV',4,6,9,'#c8102e'],['Barcelona','BAR',4,5,8,'#a50044'],['Inter','INT',4,4,8,'#1553a5'],['Arsenal','ARS',4,3,7,'#d71920'],['Manchester City','MCI',4,3,7,'#6cabdd'],['Juventus','JUV',4,2,6,'#181818']], fixtures: [['TUE 16 SEP','20:00','Real Madrid','Bayern Munich','UCL NIGHT'],['WED 17 SEP','20:00','Paris Saint-Germain','Barcelona','FEATURED'],['WED 17 SEP','20:00','Liverpool','Inter','UCL NIGHT']], scorers: [['Kylian Mbappé','Real Madrid',6],['Harry Kane','Bayern Munich',5],['Erling Haaland','Manchester City',5],['Raphinha','Barcelona',4]] },
  isl: { country: 'INDIA · SAMPLE DATA', title: 'Indian Super League', table: [['Mohun Bagan','MBSG',10,12,24,'#7a1d3e'],['FC Goa','FCG',10,10,21,'#f58220'],['Mumbai City','MCFC',10,8,20,'#1a4f9c'],['Bengaluru FC','BFC',10,6,18,'#1e5aa8'],['Kerala Blasters','KBFC',10,4,17,'#f4d000'],['Jamshedpur FC','JFC',10,2,15,'#d52427'],['Odisha FC','OFC',10,0,14,'#9b1f41'],['Chennaiyin FC','CFC',10,-2,12,'#1f5a9d'],['Punjab FC','PFC',10,-4,10,'#c6202e']], fixtures: [['FRI 12 SEP','19:30','Mohun Bagan','FC Goa','SAMPLE'],['SAT 13 SEP','19:30','Mumbai City','Bengaluru FC','SAMPLE'],['SUN 14 SEP','19:30','Kerala Blasters','Odisha FC','SAMPLE']], scorers: [['Sample Player','Mohun Bagan',7],['Sample Player','FC Goa',6],['Sample Player','Mumbai City',5],['Sample Player','Bengaluru FC',5]] }
};
const apiLeagueIds = { premier: 39, laliga: 140, seriea: 135, bundesliga: 78, ligue1: 61, championsleague: 'CL' };
const demoOnlyLeagues = new Set(['isl']);
const leaguePalette = { premier: '#16654a', laliga: '#b02743', seriea: '#2372b8', bundesliga: '#d71920', ligue1: '#074f91', championsleague: '#1d4d9d', isl: '#e97828' };
const officialLinks = {
  premier: { standings: 'https://www.premierleague.com/en/tables/premier-league', fixtures: 'https://www.premierleague.com/en/matches/premier-league' },
  laliga: { standings: 'https://www.laliga.com/en-GB/laliga-easports/standing', fixtures: 'https://www.laliga.com/en-GB/laliga-easports/calendar' },
  seriea: { standings: 'https://en.legaseriea.it/serie-a/standings', fixtures: 'https://en.legaseriea.it/serie-a/fixtures-results' },
  bundesliga: { standings: 'https://www.bundesliga.com/en/bundesliga/table', fixtures: 'https://www.bundesliga.com/en/bundesliga/matchday' },
  ligue1: { standings: 'https://ligue1.com/fr/competitions/ligue1mcdonalds/standings', fixtures: 'https://ligue1.com/fr/competitions/ligue1mcdonalds/results' },
  championsleague: { standings: 'https://www.uefa.com/uefachampionsleague/standings/', fixtures: 'https://www.uefa.com/uefachampionsleague/fixtures-results/' },
  isl: { standings: 'https://www.indiansuperleague.com/standings', fixtures: 'https://www.indiansuperleague.com/schedule-fixtures/1000' }
};
const liveData = {};
let currentLeague = 'premier'; let fixtureOffset = 0;
const $ = (selector) => document.querySelector(selector);
function setTheme(theme) {
  document.body.dataset.theme = theme === 'pitch' ? '' : theme;
  localStorage.setItem('footballHubTheme', theme);
  document.querySelectorAll('[data-theme-choice]').forEach(button => button.classList.toggle('selected', button.dataset.themeChoice === theme));
}
function initials(name) { return name.split(' ').map(word => word[0]).join('').slice(0,3).toUpperCase(); }
function currentSeason() { const now = new Date(); return now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1; }
function apiToAppData(key, standingsResponse, fixturesResponse, scorersResponse) {
  const meta = demoData[key];
  const rows = standingsResponse.response?.[0]?.league?.standings?.[0] || [];
  return {
    country: meta.country, title: meta.title,
    table: rows.slice(0, 10).map(row => [row.team.name, initials(row.team.name), row.all.played, row.goalsDiff, row.points, leaguePalette[key]]),
    fixtures: (fixturesResponse.response || []).slice(0, 3).map(match => {
      const date = new Date(match.fixture.date);
      return [date.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'}).toUpperCase(), date.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',hour12:false}), match.teams.home.name, match.teams.away.name, match.fixture.status.short === 'NS' ? 'UPCOMING' : match.fixture.status.short];
    }),
    scorers: (scorersResponse.response || []).slice(0, 4).map(player => [player.player.name, player.statistics?.[0]?.team?.name || '', player.statistics?.[0]?.goals?.total || 0])
  };
}
function renderLeague(key) { currentLeague = key; const d = liveData[key] || demoData[key]; if (!d.table.length) return; $('#leagueCountry').textContent = d.country; $('#leagueTitle').textContent = d.title; $('#fullTableLink').href = `standings.html?league=${key}`; $('#standingsBody').innerHTML = d.table.map((club,i) => `<tr class="${i < 4 ? 'ucl' : i > 7 ? 'relegation' : ''}"><td class="position">${i+1}</td><td><span class="club"><span class="club-badge" style="background:${club[5]}">${club[1]}</span>${club[0]}</span></td><td>${club[2]}</td><td>${club[3] > 0 ? '+' : ''}${club[3]}</td><td class="points">${club[4]}</td></tr>`).join(''); const displayed = d.fixtures.slice(fixtureOffset).concat(d.fixtures.slice(0,fixtureOffset)); $('#fixturesList').innerHTML = displayed.map(f => `<div class="fixture"><time>${f[0]}<br />${f[1]}</time><div class="fixture-teams">${f[2]} <span>vs</span> ${f[3]}</div><span class="fixture-tag">${f[4]}</span></div>`).join(''); $('#scorersList').innerHTML = d.scorers.map(s => `<li><div><strong>${s[0]}</strong><span class="scorer-team">${s[1]}</span></div><span class="goals">${s[2]}</span></li>`).join(''); const links = officialLinks[key]; $('#officialStandings').href = links.standings; $('#officialFixtures').href = links.fixtures; $('#officialStandings').textContent = `↗ ${d.title} standings`; $('#officialFixtures').textContent = `↗ ${d.title} fixtures`; document.querySelectorAll('.league-card').forEach(b => b.classList.toggle('selected',b.dataset.league===key)); $('#matchCount').textContent = d.fixtures.length * 3; $('#analystText').textContent = `${d.table[0][0]} lead ${d.title}, but ${d.table[1][0]} are only ${d.table[0][4]-d.table[1][4]} point${d.table[0][4]-d.table[1][4]===1?'':'s'} back. ${d.fixtures[0][2]} vs ${d.fixtures[0][3]} is the next match to watch.`; }
async function loadLiveData(key) {
  const season = currentSeason(); const leagueId = apiLeagueIds[key];
  $('#updatedAt').textContent = `Loading ${season}/${String(season + 1).slice(-2)} data…`;
  try {
    const fetchResource = async (resource) => {
      const apiPath = resource === 'topscorers' ? 'players/topscorers' : resource === 'fixtures' ? 'fixtures?next=3' : 'standings';
      const separator = apiPath.includes('?') ? '&' : '?';
      const url = `/api/football?resource=${resource}&league=${leagueId}&season=${season}&v=3`;
      const response = await fetch(url);
      const json = await response.json();
      if (!response.ok || json.errors?.length || (json.errors && Object.keys(json.errors).length)) throw new Error(typeof json.errors === 'object' ? Object.values(json.errors).join(' ') : 'Could not load data');
      return json;
    };
    const results = await Promise.allSettled(['standings', 'fixtures', 'topscorers'].map(fetchResource));
    if (results[0].status !== 'fulfilled') throw results[0].reason;
    const standings = results[0].value;
    const fixtures = results[1].status === 'fulfilled' ? results[1].value : {response: []};
    const scorers = results[2].status === 'fulfilled' ? results[2].value : {response: []};
    const data = apiToAppData(key, standings, fixtures, scorers);
    if (!data.table.length) throw new Error('No current-season data was returned for this league.');
    const partialData = !data.fixtures.length || !data.scorers.length;
    if (!data.fixtures.length) data.fixtures = demoData[key].fixtures;
    if (!data.scorers.length) data.scorers = demoData[key].scorers;
    liveData[key] = data; renderLeague(key);
    $('#updatedAt').textContent = partialData ? 'Live standings · some details use demo data' : `Live data · ${new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}`;
  } catch (error) {
    console.warn('Live data could not be loaded:', error);
    $('#updatedAt').textContent = 'Live sync unavailable · showing demo data';
  }
}
function canUseLiveData() { return !['', 'localhost', '127.0.0.1'].includes(location.hostname); }
document.querySelectorAll('.league-card').forEach(b => b.addEventListener('click', async () => { fixtureOffset=0; renderLeague(b.dataset.league); if (demoOnlyLeagues.has(b.dataset.league)) { $('#updatedAt').textContent = 'ISL sample data · live free coverage unavailable'; return; } if (canUseLiveData() && !liveData[b.dataset.league]) await loadLiveData(b.dataset.league); }));
document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => { const view=b.dataset.view; if(view==='fixtures') $('.fixtures-panel').scrollIntoView({behavior:'smooth',block:'center'}); else if(view==='scorers') $('.race-panel').scrollIntoView({behavior:'smooth',block:'center'}); else if(view==='analyst') $('.analyst-card').scrollIntoView({behavior:'smooth',block:'center'}); else window.scrollTo({top:0,behavior:'smooth'}); document.querySelectorAll('.nav-link').forEach(n=>n.classList.toggle('active',n===b)); }));
$('#nextFixtures').addEventListener('click',()=>{fixtureOffset=(fixtureOffset+1)%3;renderLeague(currentLeague)});
const dialog=$('#settingsDialog'); $('#settingsBtn').addEventListener('click',()=>dialog.showModal()); $('#saveKeyBtn').addEventListener('click',async (e)=>{ e.preventDefault(); dialog.close(); await loadLiveData(currentLeague); }); $('#demoBtn').addEventListener('click',()=>{Object.keys(liveData).forEach(key=>delete liveData[key]);$('#updatedAt').textContent='Demo data · updated today';renderLeague(currentLeague)}); $('#analystBtn').addEventListener('click',()=>{const d=liveData[currentLeague] || demoData[currentLeague];$('#analystText').textContent=`${d.table[0][0]} remain in control with ${d.table[0][4]} points. The pressure is on ${d.table[1][0]}, who need a result this weekend. Watch ${d.fixtures[0][2]} vs ${d.fixtures[0][3]}—it could reshape the race.`;});
document.querySelectorAll('[data-theme-choice]').forEach(button => button.addEventListener('click', () => setTheme(button.dataset.themeChoice)));
setTheme(localStorage.getItem('footballHubTheme') || 'pitch');
renderLeague(currentLeague); if (canUseLiveData()) loadLiveData(currentLeague);
