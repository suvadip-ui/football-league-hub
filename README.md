# Football League Hub

**Designed by Suvadip Kolay [BCA - 2025]**  
**MUJ Roll No.: 251450213249**  
**Email: 251450213249@mujonline.edu.in**

A capstone-ready football dashboard for following Premier League, La Liga, Serie A, Bundesliga, Ligue 1, the UEFA Champions League, and an Indian Super League sample-data view.

## Run the project

### Recommended: use the deployed app

Open the live project at **https://football-league-hub.vercel.app**. This is the complete version, with current league data, secure Content Studio requests and the full project workflow. No API keys are needed by visitors.

### Supporting submission files

For the university submission, the complete `Project Files` package is shared through the approved [Google Drive folder](https://drive.google.com/drive/folders/1JWnuTTE5VrLe4aVZxUy1MTzRyWSHGpt0?usp=sharing). It is configured for anyone with the link to view and download. Private keys and webhook values are not included.

### Direct live-data check

For a read-only check of current Premier League standings, open or provide this exact public URL to a code-review tool:

**https://football-league-hub.vercel.app/api/football?resource=standings&league=39**

When the Vercel environment variable is configured correctly, it returns JSON containing the live standings. This link is safe to share: it does not expose `FOOTBALL_DATA_API_KEY`, Gemini keys or the Slack webhook. For fixtures, replace `standings` with `fixtures` in the same URL.

### Local preview from the ZIP

Extract the ZIP and open `index.html` in a browser. This is useful for reviewing the interface, theme controls, navigation and safe demo-data layout. A locally opened file cannot access the secure Vercel backend, so it does **not** provide live league data or live Content Studio generation.

### Testing checklist

1. Select a league and review its standings and upcoming fixtures.
2. Open **Full table** and use the arrows to navigate beyond the first 10 teams.
3. Use **Settings** to switch between Pitch Green, Royal Blue, Midnight and Red Matchday themes.
4. Open an **Official standings** or **Official fixtures** link.
5. Open **Suvadip's Content Studio**, inspect the approved fact pack and generate a draft or labelled fact-only fallback template.
6. Review the cited facts before approving the draft.

The optional Slack action is a separate private demonstration step. It requires confirmation and does not need to be used for normal testing.

## Evaluation metrics and deployment limitations

The project can be evaluated with two practical measures: the percentage of drafts approved without a revision request, and the average time from an approved fact pack to a reviewable draft compared with manual writing. These measures can be recorded during a supervised demonstration.

The dashboard supports the content workflow by supplying visible source context; it is not intended to replace editorial judgement. Live league coverage depends on the football-data.org plan, ISL is a clearly labelled sample-data view, and Gemini or Groq may be temporarily unavailable. When a provider fails, the app presents a visibly labelled fact-only template rather than claiming it is AI-generated. A public deployment would require quota monitoring, coverage review and continued human editorial approval.

## Included now

- League selector for England, Spain, Italy, Germany, France, the UEFA Champions League, and ISL sample data
- Standings, upcoming fixtures, and top-scorer views
- Suvadip's Content Studio: Gemini generates a match preview or social post from a visible, approved fact pack
- Human review and local approval step before a draft is treated as final
- Optional Slack demo-channel post after approval and a separate confirmation click
- Transparent fact-only template fallback if Gemini is temporarily unavailable; it is visibly labelled and still requires human review
- Responsive desktop and mobile layout
- A demo-safe design that works without any key

## Background video

The dashboard includes two muted background choices—an abstract football glow and a stadium-pitch animation—plus an animated football badge supplied by the project owner. Each background plays forward, then in reverse, in a continuous cycle; the selected background is saved on the viewer's device. These are decorative visuals, have no audio, and are hidden for reduced-motion users. They must not be replaced with match footage or other third-party media without the necessary rights.

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

## Enable Suvadip's Content Studio

Suvadip's Content Studio is a capstone feature for a supervised sports-journalism workflow. It creates two draft formats from displayed current-season facts: a match preview and a social-media post. It deliberately shows its facts, labels every result as a draft, and requires Suvadip's human editorial approval. It never publishes content automatically.

In Vercel, add one additional Environment Variable:

- Name: `GEMINI_API_KEY`
- Value: your API key created in Google AI Studio

Optional: set `GEMINI_MODEL` to a Gemini text model available to your key. If omitted, the app uses `gemini-3.6-flash`.

Do not place `GEMINI_API_KEY` in `app.js`, `studio.js`, GitHub, or any browser setting. The key is used only by `api/generate-content.js` on Vercel.

### Optional Groq backup

To keep the supervised drafting flow available when Gemini is temporarily busy, add a second Secret Environment Variable in Vercel:

- Name: `GROQ_API_KEY`
- Value: an API key from GroqCloud

When configured, the backend uses Groq first for a fast draft and then tries Gemini if needed. Optional: set `GROQ_MODEL`; otherwise it uses `groq/compound-mini`. Groq receives the same approved fact pack and must pass the same fact-reference validation. If neither provider returns a usable draft, the app shows its clearly labelled fact-only template fallback.

## Optional Slack demo posting

After a human checks and approves a draft, the app can offer a separate **Post to Slack demo channel** button. It asks for confirmation immediately before the external post; generating or approving a draft never posts automatically.

In Vercel, add this Secret Environment Variable:

- Name: `SLACK_WEBHOOK_URL`
- Value: the incoming-webhook URL for your own private Slack demo channel

The webhook is used only by `api/post-to-slack.js`; it is never placed in browser code or GitHub. This is a capstone demonstration feature, not a production publishing system: use it only with a private demo channel and do not use it for important real-world communications.

## Project title

**Football League Hub: Suvadip's Content Studio**
