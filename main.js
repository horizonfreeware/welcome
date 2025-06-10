async function fetchWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function(position) {
            const weatherDiv = document.getElementById('weather')
            const url = `https://wttr.in/${position.coords.latitude.toPrecision(4)},${position.coords.longitude.toPrecision(4)}`
            console.log(position.coords.latitude.toPrecision(4))
            const res = await fetch(url)
            const data = await res.text()
            weatherDiv.innerHTML = `${data + `<style>pre {font-family: Source Code Pro !important; font-size: 12px;}</style>`}`
        },
        function(err) {
            console.log('An error has occurred while fetching the weather')
            console.log(err)
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

function search(param="google-search") {
    let input = document.getElementById('search-input').value,
        url = null


    switch (param) {
        case "google-search":
            url = "https://www.google.com/search?q="
            break
        case "duckduckgo-search":
            url = "https://www.duckduckgo.com/?q="
            break
        case "youtube-search":
            url = "https://www.youtube.com/results?search_query="
            break
        case "reddit-search":
            url = "https://www.reddit.com/search/?q="
            break
        default:
            url = "https://www.google.com/search?q="
            break
    }
    location.href = url + input
}

window.onload = () => {
    let el = document.getElementById('search-input')
    el.focus()
    el.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            search()
        }
    })
    fetchWeather()
    activateGreeter()
}
