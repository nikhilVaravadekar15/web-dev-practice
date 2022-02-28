const progress_bar = document.getElementById("progress-bar")

const animanteprogressBar = () => {
    const totalHeightOfWebPage = document.body.scrollHeight
    const currentDistanceFromTop = document.documentElement.scrollTop
    const windowHeight = document.documentElement.clientHeight
    let progresswidth = (currentDistanceFromTop / (totalHeightOfWebPage - windowHeight)) * 100
    progresswidth = Math.floor(progresswidth)
    progress_bar.style.width = progresswidth + "%"
}

window.addEventListener("scroll", animanteprogressBar)
