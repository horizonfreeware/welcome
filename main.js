const linkDictionary = [
    "https://github.com/",
    "https://leetcode.com/",
    "https://reddit.com/",
]

async function fetchWeather() {
    const weatherDiv = document.getElementById('weather')
    const url = `https://wttr.in/`
    const res = await fetch(url)
    const data = await res.text()
    weatherDiv.innerHTML = `${data + `<style>pre {font-family: Source Code Pro !important; font-size: 12px;}</style>`}`
}

function generateLinks() {
    const el = document.getElementById('links')
    linkDictionary.forEach(url => {
        const linkDiv = document.createElement('div')
        const hyperlink = document.createElement('a')
        hyperlink.href = url
        hyperlink.innerHTML = url
        linkDiv.appendChild(hyperlink)
        el.appendChild(linkDiv)
    })
}

window.onload = () => {
    document.getElementById('google-search-input').focus()
    fetchWeather()
    generateLinks()
}
