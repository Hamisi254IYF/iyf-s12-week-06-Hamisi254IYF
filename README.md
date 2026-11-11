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
