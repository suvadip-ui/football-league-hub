function cleanText(value, limit) {
  return String(value || '').replace(/[\r\n]+/g, ' ').trim().slice(0, limit);
}

module.exports = async (request, response) => {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Use POST to send an approved demo post.' });
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return response.status(500).json({ error: 'SLACK_WEBHOOK_URL is not configured.' });

  try {
    const body = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : (request.body || {});
    if (body.approved !== true) return response.status(400).json({ error: 'A human approval is required before posting.' });

    const title = cleanText(body.title, 120);
    const content = cleanText(body.content, 1000);
    const source = cleanText(body.source, 40);
    const facts = Array.isArray(body.facts) ? body.facts.slice(0, 6).map(fact => ({
      label: cleanText(fact.label, 60),
      value: cleanText(fact.value, 180),
    })).filter(fact => fact.label && fact.value) : [];
    if (!title || !content || !facts.length) return response.status(400).json({ error: 'An approved draft and its checked facts are required.' });

    const fallbackNotice = source === 'template-fallback' ? 'Fact-only template fallback - Gemini was temporarily unavailable.\n\n' : '';
    const factsText = facts.map(fact => `${fact.label}: ${fact.value}`).join('\n');
    const message = `Football League Hub - approved demo post\n${fallbackNotice}${title}\n\n${content}\n\nChecked source facts:\n${factsText}\n\nSent manually after human review. This is a private Slack demo-channel post.`;
    const slackResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: message,
        blocks: [
          { type: 'header', text: { type: 'plain_text', text: 'Football League Hub - Approved Demo Post', emoji: true } },
          { type: 'section', text: { type: 'plain_text', text: `${fallbackNotice}${title}\n\n${content}`, emoji: true } },
          { type: 'context', elements: [{ type: 'plain_text', text: 'Sent manually after human review to the configured private demo channel.', emoji: true }] },
          { type: 'section', text: { type: 'plain_text', text: `Checked source facts\n${factsText}`, emoji: true } },
        ],
      }),
    });

    if (!slackResponse.ok) {
      console.error('Slack post error:', slackResponse.status);
      return response.status(502).json({ error: 'Slack could not accept the demo post right now.' });
    }
    response.setHeader('Cache-Control', 'no-store');
    return response.status(200).json({ posted: true });
  } catch (error) {
    console.error('Slack posting error:', error.message);
    return response.status(500).json({ error: 'The demo post could not be sent.' });
  }
};
