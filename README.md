# Football League Hub

**Designed by Suvadip Kolay [BCA - 2025]**  
**MUJ Roll No.: 251450213249**  
**Email: 251450213249@mujonline.edu.in**

A capstone-ready football dashboard for following Premier League, La Liga, Serie A, Bundesliga, Ligue 1, the UEFA Champions League, and an Indian Super League sample-data view.

## Run it

Open `index.html` in a browser. No installation is required for the polished demo version.

## Included now

- League selector for England, Spain, Italy, Germany, France, the UEFA Champions League, and ISL sample data
- Standings, upcoming fixtures, and top-scorer views
- GoalLine Content Studio: Gemini generates a match preview or social post from a visible, approved fact pack
- Human review and local approval step before a draft is treated as final
- Optional Slack demo-channel post after approval and a separate confirmation click
- Transparent fact-only template fallback if Gemini is temporarily unavailable; it is visibly labelled and still requires human review
- Responsive desktop and mobile layout
- A demo-safe design that works without any key

## Before submission: live data

Without a configured provider, the app deliberately uses demo data, so it can still be reviewed without an account or network connection.

For a public version, use a small backend/serverless function to call the API; never publish a private API key in browser code.

## Share a live version securely (Vercel)

This repository includes a Vercel serverless function at `api/football.js`. It requests current tables and fixtures from football-data.org while keeping your private key on the server.

1. Create a GitHub repository and upload **all** project files, including the `api` folder and `vercel.json`.
2. Sign in to [Vercel](https://vercel.com/) with GitHub, choose **Add New → Project**, and import that repository.
3. Before deploying, open **Environment Variables** and add:
   - Name: `FOOTBALL_DATA_API_KEY`
   - Value: your football-data.org API key
4. Deploy. Vercel will provide a shareable HTTPS link.

Visitors to that link automatically receive current league tables and fixtures; the browser never receives your API key. Top-scorer cards remain sample data because that endpoint is not in the free provider plan.

## Enable the Gemini Content Studio

The Content Studio is a capstone feature for a fictional football-media brand. It creates two draft formats from the displayed current-season facts: a match preview and a social-media post. It deliberately shows its facts, labels every result as a draft, and requires a human approval click. It never publishes content automatically.

In Vercel, add one additional Environment Variable:

- Name: `GEMINI_API_KEY`
- Value: your API key created in Google AI Studio

Optional: set `GEMINI_MODEL` to a Gemini text model available to your key. If omitted, the app uses `gemini-3.8-flash`.

Do not place `GEMINI_API_KEY` in `app.js`, `studio.js`, GitHub, or any browser setting. The key is used only by `api/generate-content.js` on Vercel.

## Optional Slack demo posting

After a human checks and approves a draft, the app can offer a separate **Post to Slack demo channel** button. It asks for confirmation immediately before the external post; generating or approving a draft never posts automatically.

In Vercel, add this Secret Environment Variable:

- Name: `SLACK_WEBHOOK_URL`
- Value: the incoming-webhook URL for your own private Slack demo channel

The webhook is used only by `api/post-to-slack.js`; it is never placed in browser code or GitHub. This is a capstone demonstration feature, not a production publishing system: use it only with a private demo channel and do not use it for important real-world communications.

## Suggested project title

**05. Brand-Safe Content and Campaign Studio: GoalLine Content Studio for Football Media**
