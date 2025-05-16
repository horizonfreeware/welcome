async function fetchWeather() {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function(position) {
            const weatherDiv = document.getElementById('weather')
            const url = `https://wttr.in/${position.coords.latitude},${position.coords.longitude}`
            const res = await fetch(url)
            const data = await res.text()
            weatherDiv.innerHTML = `${data + `<style>pre {font-family: Source Code Pro !important; font-size: 12px;}</style>`}`
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

window.onload = () => {
    document.getElementById('google-search-input').focus()
    fetchWeather()
}
