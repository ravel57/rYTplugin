let container = document.getElementsByTagName("yt-formatted-string")
let searchStrings = ["Не нравится", "Создать клип", "Поделиться", "Сохранить"]
let counter = 0


function titleRemover() {
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

let refreshIntervalId = setInterval(() => titleRemover(), 100)
