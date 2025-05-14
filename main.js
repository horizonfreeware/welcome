// Weather: Use a free API like Open-Meteo or OpenWeatherMap (requires API key for some)
async function fetchWeather() {
    const weatherDiv = document.getElementById('weather');
    if (!navigator.geolocation) {
        weatherDiv.innerHTML = '<p>Geolocation not supported.</p>';
        return;
    }
    navigator.geolocation.getCurrentPosition(async pos => {
        const { latitude, longitude } = pos.coords;
        // Example with Open-Meteo (no API key required)
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.current_weather) {
            weatherDiv.innerHTML = `
                <p>${data.current_weather.temperature}°C, ${data.current_weather.weathercode}</p>
            `;
        } else {
            weatherDiv.innerHTML = '<p>Weather unavailable.</p>';
        }
    }, () => {
        weatherDiv.innerHTML = '<p>Unable to get location.</p>';
    });
}

// News: Use a free API like Mediastack, NewsAPI, or a demo RSS-to-JSON service
async function fetchNews() {
    const newsList = document.getElementById('news-list');
    // Example using a demo endpoint (replace with your own API for production)
    const url = 'https://api.currentsapi.services/v1/latest-news?apiKey=demo'; // Replace with your API key
    try {
        const res = await fetch(url);
        const data = await res.json();
        newsList.innerHTML = '';
        (data.news || []).slice(0, 5).forEach(article => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
            newsList.appendChild(li);
        });
    } catch {
        newsList.innerHTML = '<li>Unable to load news.</li>';
    }
}

window.onload = () => {
    fetchWeather();
    fetchNews();
};