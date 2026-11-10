function displayWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} m/s`;
    pressure.textContent = `${data.main.pressure} hPa`;

    weatherDisplay.classList.remove("hidden");
}

function saveToHistory(city) {
    const recent = JSON.parse(localStorage.getItem("recent")) || [];
    const normalized = city.trim();

    // Remove duplicates (case-insensitive), add to front
    const updated = [normalized, ...recent.filter(c =>
        c.toLowerCase() !== normalized.toLowerCase()
    )].slice(0, 5);

    localStorage.setItem("recent", JSON.stringify(updated));
    renderHistory(updated);
}

function loadHistory() {
    const recent = JSON.parse(localStorage.getItem("recent")) || [];
    renderHistory(recent);
}

function renderHistory(cities) {
    const list = document.getElementById("search-history");
    list.innerHTML = "";
    cities.forEach(city => {
        const li = document.createElement("li");
        li.textContent = city;   // user-provided or typed → textContent!
        li.addEventListener("click", () => {
            cityInput.value = city;
            getWeather(city);
        });
        list.appendChild(li);
    });
}