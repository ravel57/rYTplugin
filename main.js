let container = document.getElementsByTagName("yt-formatted-string")
let searchStrings = ["Не нравится", "Создать клип", "Поделиться", "Сохранить"]
let hostname = new URL(window.location.href).hostname;
let counter = 0
let func


function titleRemover(refreshIntervalId) {
    for (let i = 0; i < container.length; i++) {
        try {
            if (searchStrings.includes(container[i].innerText)) {
                container[i].remove()
                counter++
            }
        } catch {
            console.log("catch")
        }
        if (counter >= searchStrings.length * 2) {
            clearInterval(refreshIntervalId)
            addEmbedButton()
            break
        }
    }
}

function addEmbedButton() {
    let embedButton = document.createElement('a')
    embedButton.setAttribute("id", "embedButton")
    embedButton.setAttribute("href", "https://www.youtube-nocookie.com/embed/"
        + new URL(window.location.href).searchParams.get('v'))
    embedButton.innerText = "E"
    document.getElementById("actions-inner")
        .childNodes[1].childNodes[0].childNodes[1]
        .appendChild(embedButton)
}

function bannerRemover(refreshIntervalId) {
    document.getElementsByClassName("ytp-pause-overlay")[0].remove()
    clearInterval(refreshIntervalId)
}

window.onload = function () {
    if (hostname.includes("youtube.com"))
        func = titleRemover
    else if (hostname.includes("youtube-nocookie.com"))
        func = bannerRemover

    let refreshIntervalId = setInterval(() => {
        func(refreshIntervalId)
    }, 100)
}