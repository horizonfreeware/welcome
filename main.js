async function fetchWeather() {
    const weatherDiv = document.getElementById('weather')
    const url = `https://wttr.in/`
    const res = await fetch(url)
    const data = await res.text()
    weatherDiv.innerHTML = `${data + `<style>pre {font-family: Source Code Pro !important; font-size: 12px;}</style>`}`
}

async function fetchNews() {
    const newsList = document.getElementById('news-list')
    // Example using a demo endpoint (replace with your own API for production)
    const url = 'https://api.currentsapi.services/v1/latest-news?apiKey=demo' // Replace with your API key
    try {
        const res = await fetch(url)
        const data = await res.json()
        newsList.innerHTML = ''
        (data.news || []).slice(0, 5).forEach(article => {
            const li = document.createElement('li')
            li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`
            newsList.appendChild(li)
        })
    } catch {
        newsList.innerHTML = '<li>Unable to load news.</li>'
    }
}

window.onload = () => {
    document.getElementById('google-search-input').focus()
    fetchWeather()
    //fetchNews()
}
