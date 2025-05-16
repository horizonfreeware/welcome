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

function activateGreeter() {
    let el = document.getElementById("greeter")
    const currentHour = new Date().getHours()
    let TOD = ""
    if (currentHour >= 0 && currentHour < 5) TOD = "Good Night!"
    else if (currentHour >= 5 && currentHour < 12) TOD = "Good Morning!"
    else if (currentHour >= 12 && currentHour < 17) TOD = "Good Afternoon!"
    else if (currentHour >= 17 && currentHour < 20) TOD = "Good Evening!"
    else if (currentHour >= 20 && currentHour < 24) TOD = "Good Night!"
    el.innerHTML = TOD
}

window.onload = () => {
    document.getElementById('google-search-input').focus()
    fetchWeather()
    activateGreeter()
}
