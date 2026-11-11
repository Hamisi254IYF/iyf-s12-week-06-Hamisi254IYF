# iyf-s12-week-06-Hamisi254IYF

# Weather Dashboard — Week 6

## Live Demo
https://Hamisi254IYF.github.io/iyf-s12-week-06-Hamisi254IYF/

## Features
- Search weather by city
- Shows temperature, icon, description, feels like, humidity, wind, pressure
- Error handling for invalid cities and network issues
- Recent searches (last 5, stored in localStorage)

## How to Run Locally
1. Clone this repository
2. Copy `config.example.js` to `config.js`
3. Add your OpenWeatherMap API key to `config.js`
4. Serve locally: `python -m http.server 8000`
5. Open http://localhost:8000

## How It Deploys
The `.github/workflows/deploy.yml` workflow writes `config.js` from the
`OPENWEATHER_API_KEY` repository secret during deployment. The API key
is **never committed to git**.

## Daily Challenges
- [Day 1 — Delayed promise](./practice/daily-challenges/day1-delay.js)
- [Day 2 — Promise chain](./practice/daily-challenges/day2-promise-chain.js)
- [Day 3 — Error handling](./practice/daily-challenges/day3-error-handling.js)
- [Day 4 — Async/await rewrite](./practice/daily-challenges/day4-async-rewrite.js)
- [Day 5 — Promise.allSettled](./practice/daily-challenges/day5-allsettled.js)

🧪 How to Run Each File
Each file is standalone:

`node` practice/daily-challenges/day1-delay.js
`node` practice/daily-challenges/day2-promise-chain.js
`node` practice/daily-challenges/day3-error-handling.js
`node` practice/daily-challenges/day4-async-rewrite.js
`node` practice/daily-challenges/day5-allsettled.js

⚠️ Day 3 and Day 5 use fetch — this requires Node or newer (built-in fetch). Check version with node --version.
