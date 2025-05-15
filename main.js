async function fetchWeather() {
    const weatherDiv = document.getElementById('weather')
    const url = `https://wttr.in/`
    const res = await fetch(url)
    const data = await res.text()
    weatherDiv.innerHTML = `${data + `<style>pre {font-family: Source Code Pro !important; font-size: 12px;}</style>`}`
}

window.onload = () => {
    document.getElementById('google-search-input').focus()
    fetchWeather()
}
