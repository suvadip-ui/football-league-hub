const competitions = {
  premier: { name: 'Premier League', id: 39 }, laliga: { name: 'La Liga', id: 140 }, seriea: { name: 'Serie A', id: 135 }, bundesliga: { name: 'Bundesliga', id: 78 }, ligue1: { name: 'Ligue 1', id: 61 }, championsleague: { name: 'Champions League', id: 'CL' }
};
const fallbackFacts = {
  competition: { label: 'Competition', value: 'Premier League' }, leader: { label: 'Example leader', value: 'Arsenal are first with 25 points after 10 matches.' }, challenger: { label: 'Example challenger', value: 'Manchester City are second with 23 points after 10 matches.' }, fixture: { label: 'Example fixture', value: 'Arsenal vs Nottingham Forest is the selected matchday fixture.' }
};
const $ = selector => document.querySelector(selector);
let activeFormat = 'preview';
let activeFacts = [];

function season() { const date = new Date(); return date.getMonth() >= 6 ? date.getFullYear() : date.getFullYear() - 1; }
function setStatus(text, type) { const status = $('#factStatus'); status.textContent = text; status.className = `status-pill ${type || ''}`; }
function formatFact(id, label, value) { return { id, label, value }; }
function renderFacts(facts) { $('#factPack').innerHTML = facts.map(fact => `<div class="fact"><small>${fact.label}</small><strong>${fact.value}</strong></div>`).join(''); }
function setGenerateEnabled(enabled) { $('#generateDraft').disabled = !enabled; }

async function loadFactPack() {
  const key = $('#studioLeague').value;
  const competition = competitions[key];
  setGenerateEnabled(false); $('#reviewSection').hidden = true; setStatus('Loading facts');
  try {
    const [standingsResult, fixturesResult] = await Promise.all([fetch(`/api/football?resource=standings&league=${competition.id}&season=${season()}&v=5`), fetch(`/api/football?resource=fixtures&league=${competition.id}&season=${season()}&v=5`)]);
    const standingsData = await standingsResult.json(); const fixturesData = await fixturesResult.json();
    const table = standingsData.response?.[0]?.league?.standings?.[0] || [];
    const fixture = fixturesData.response?.[0];
    if (!standingsResult.ok || table.length < 2) throw new Error('No live standings');
    activeFacts = [formatFact('competition', 'Competition', competition.name), formatFact('leader', 'Current leader', `${table[0].team.name} are first with ${table[0].points} points after ${table[0].all.played} matches.`), formatFact('challenger', 'Closest challenger', `${table[1].team.name} are second with ${table[1].points} points after ${table[1].all.played} matches.`)];
    if (fixture?.teams?.home?.name && fixture?.teams?.away?.name) activeFacts.push(formatFact('fixture', 'Upcoming fixture', `${fixture.teams.home.name} vs ${fixture.teams.away.name} is an upcoming ${competition.name} fixture.`));
    activeFacts.push(formatFact('scope', 'Content scope', 'Use current-season football facts only. Do not add unsupported information.'));
    renderFacts(activeFacts); setStatus('Live facts ready', 'live'); setGenerateEnabled(true);
  } catch (error) {
    activeFacts = Object.entries(fallbackFacts).map(([id, fact]) => formatFact(id, fact.label, key === 'premier' ? fact.value : fact.value.replace('Premier League', competition.name)));
    renderFacts(activeFacts); setStatus('Demo facts - review only', 'demo'); setGenerateEnabled(true);
  }
}

async function generateDraft() {
  const button = $('#generateDraft'); button.disabled = true; button.textContent = 'Creating reviewable draft...';
  try {
    const response = await fetch('/api/generate-content', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ format: activeFormat, facts: activeFacts, reviewNote: $('#reviewNote').value }) });
    const draft = await response.json();
    if (!response.ok) throw new Error(draft.error || 'Could not generate a draft.');
    const fallback = draft.source === 'template-fallback';
    $('#draftFormat').textContent = `${activeFormat === 'preview' ? 'MATCH PREVIEW DRAFT' : 'SOCIAL POST DRAFT'}${fallback ? ' · FACT-ONLY TEMPLATE FALLBACK' : ''}`; $('#draftTitle').textContent = draft.title; $('#draftContent').textContent = draft.content; $('#modelNote').textContent = draft.reviewNote || 'Draft created only from the listed facts.';
    $('#usedFacts').innerHTML = draft.factsUsed.map(fact => `<li><b>${fact.label}:</b> ${fact.value}</li>`).join('');
    $('#reviewSection').classList.toggle('template-fallback', fallback);
    $('#factCheck').checked = false; $('#approveDraft').disabled = true; $('#approvalStatus').textContent = fallback ? 'Template review needed' : 'Needs review'; $('#approvalStatus').className = 'status-pill review-needed'; $('#reviewSection').hidden = false; $('#reviewSection').scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (error) { alert(error.message); }
  finally { button.disabled = false; button.innerHTML = 'Generate fact-checked draft <span>→</span>'; }
}

function initialise() {
  const requested = new URLSearchParams(location.search).get('league');
  $('#studioLeague').innerHTML = Object.entries(competitions).map(([key, competition]) => `<option value="${key}">${competition.name}</option>`).join('');
  $('#studioLeague').value = competitions[requested] ? requested : 'premier';
  $('#studioLeague').addEventListener('change', loadFactPack);
  document.querySelectorAll('[data-format]').forEach(button => button.addEventListener('click', () => { activeFormat = button.dataset.format; document.querySelectorAll('[data-format]').forEach(option => option.classList.toggle('selected', option === button)); }));
  $('#generateDraft').addEventListener('click', generateDraft);
  $('#reviseDraft').addEventListener('click', generateDraft);
  $('#factCheck').addEventListener('change', event => { $('#approveDraft').disabled = !event.target.checked; });
  $('#approveDraft').addEventListener('click', () => { $('#approvalStatus').textContent = 'Approved locally'; $('#approvalStatus').className = 'status-pill approved'; $('#approveDraft').textContent = 'Approved'; $('#approveDraft').disabled = true; });
  loadFactPack();
}
initialise();
