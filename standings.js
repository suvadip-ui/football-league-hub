const competitions = {
  premier: { name: 'Premier League', country: 'England', id: 39, official: 'https://www.premierleague.com/en/tables/premier-league' },
  laliga: { name: 'La Liga', country: 'Spain', id: 140, official: 'https://www.laliga.com/en-GB/laliga-easports/standing' },
  seriea: { name: 'Serie A', country: 'Italy', id: 135, official: 'https://en.legaseriea.it/serie-a/standings' },
  bundesliga: { name: 'Bundesliga', country: 'Germany', id: 78, official: 'https://www.bundesliga.com/en/bundesliga/table' },
  ligue1: { name: 'Ligue 1', country: 'France', id: 61, official: 'https://ligue1.com/fr/competitions/ligue1mcdonalds/standings' },
  championsleague: { name: 'Champions League', country: 'Europe', id: 'CL', official: 'https://www.uefa.com/uefachampionsleague/standings/' },
  isl: { name: 'Indian Super League', country: 'India', official: 'https://www.indiansuperleague.com/standings' }
};
const $ = selector => document.querySelector(selector);
const selectedLeague = new URLSearchParams(location.search).get('league');
let currentLeague = competitions[selectedLeague] ? selectedLeague : 'premier';
let allRows = [];
let page = 0;
function season() { const date = new Date(); return date.getMonth() >= 6 ? date.getFullYear() : date.getFullYear() - 1; }
function initials(name) { return name.split(' ').map(word => word[0]).join('').slice(0, 3).toUpperCase(); }
function renderTabs() { $('#competitionTabs').innerHTML = Object.entries(competitions).map(([key, competition]) => `<button class="${key === currentLeague ? 'active' : ''}" data-league="${key}">${competition.name}</button>`).join(''); document.querySelectorAll('[data-league]').forEach(button => button.addEventListener('click', () => { currentLeague = button.dataset.league; page = 0; history.replaceState(null, '', `standings.html?league=${currentLeague}`); loadStandings(); })); }
function renderRows(rows) { $('#fullStandings').innerHTML = rows.map(row => `<tr class="${row.position <= 4 ? 'europe' : row.position > allRows.length - 3 ? 'relegation' : ''}"><td>${row.position}</td><td><span class="club"><b>${initials(row.team.name)}</b>${row.team.name}</span></td><td>${row.all.played}</td><td>${row.all.win}</td><td>${row.all.draw}</td><td>${row.all.lose}</td><td>${row.goalsDiff > 0 ? '+' : ''}${row.goalsDiff}</td><td class="points">${row.points}</td></tr>`).join(''); }
function renderPage() { const start = page * 10; renderRows(allRows.slice(start, start + 10)); $('#pageSummary').textContent = `Teams ${start + 1}–${Math.min(start + 10, allRows.length)} of ${allRows.length}`; $('#previousPage').disabled = page === 0; $('#nextPage').disabled = start + 10 >= allRows.length; }
async function loadStandings() { const competition = competitions[currentLeague]; $('#competitionTitle').textContent = competition.name; $('#status').textContent = `${competition.country.toUpperCase()} · loading current season`; $('#fullStandings').innerHTML = ''; $('#tablePager').hidden = true; $('#islNotice').hidden = currentLeague !== 'isl'; renderTabs(); if (currentLeague === 'isl') { $('#status').textContent = 'Official source available'; return; } try { const response = await fetch(`/api/football?resource=standings&league=${competition.id}&season=${season()}&v=4`); const data = await response.json(); const rows = data.response?.[0]?.league?.standings?.[0] || []; if (!response.ok || !rows.length) throw new Error('No standings returned'); allRows = rows; page = Math.min(page, Math.ceil(rows.length / 10) - 1); renderPage(); $('#tablePager').hidden = rows.length <= 10; $('#status').textContent = `Live table · ${rows.length} teams`; } catch (error) { $('#status').textContent = 'Live table unavailable'; $('#fullStandings').innerHTML = `<tr><td colspan="8" class="empty">Please use the official standings button on the dashboard, or check your Vercel data configuration.</td></tr>`; } }
$('#previousPage').addEventListener('click', () => { if (page > 0) { page--; renderPage(); window.scrollTo({ top: 0, behavior: 'smooth' }); } });
$('#nextPage').addEventListener('click', () => { if ((page + 1) * 10 < allRows.length) { page++; renderPage(); window.scrollTo({ top: 0, behavior: 'smooth' }); } });
loadStandings();
