# Football League Hub

A capstone-ready football dashboard for following Europe’s five major leagues in one place: Premier League, La Liga, Serie A, Bundesliga, and Ligue 1.

## Run it

Open `index.html` in a browser. No installation is required for the polished demo version.

## Included now

- League selector for England, Spain, Italy, Germany, and France
- Standings, upcoming fixtures, and top-scorer views
- A demo Matchday Analyst interaction
- Responsive desktop and mobile layout
- A data-settings screen that stores an API key locally in the browser

## Before submission: live data

Create a free API-Football account and get its API key. Use the settings cog in the app to store the key locally. The app will then request the current season's standings, next fixtures, and top scorers for each of the three leagues. Without a key it deliberately uses demo data, so it can still be reviewed without an account or network connection.

For a public version, use a small backend/serverless function to call the API; never publish a private API key in browser code.

## Share a live version securely (Vercel)

This repository includes a Vercel serverless function at `api/football.js`. It requests data from API-Football while keeping your private key on the server.

1. Create a GitHub repository and upload **all** project files, including the `api` folder and `vercel.json`.
2. Sign in to [Vercel](https://vercel.com/) with GitHub, choose **Add New → Project**, and import that repository.
3. Before deploying, open **Environment Variables** and add:
   - Name: `API_FOOTBALL_KEY`
   - Value: your API-Football key
4. Deploy. Vercel will provide a shareable HTTPS link.

Visitors to that link automatically receive current football data; the browser never receives your API key. Locally, the dashboard remains in demo mode unless you add your own key via the settings cog.

## Suggested project title

**Football League Hub: A Unified Current-Season Dashboard for Europe’s Leading Football Leagues**
