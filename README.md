# Football League Hub

A capstone-ready football dashboard for following Premier League, La Liga, Serie A, Bundesliga, Ligue 1, the UEFA Champions League, and an Indian Super League sample-data view.

## Run it

Open `index.html` in a browser. No installation is required for the polished demo version.

## Included now

- League selector for England, Spain, Italy, Germany, France, the UEFA Champions League, and ISL sample data
- Standings, upcoming fixtures, and top-scorer views
- A demo Matchday Analyst interaction
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

## Suggested project title

**Football League Hub: A Unified Current-Season Dashboard for Europe’s Leading Football Leagues**
