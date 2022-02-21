const typingText = document.querySelector("typing-text");

function randomParagraph() {
    let randomIndex = Math.floor(Math.random() * paragraphs.length);

    paragraphs[randomIndex].split("").forEach(span => {

        console.log(span);
        let spanTag = `<span>${span}</span>`;
        console.log(spanTag)
        typingText.innerHTML = spanTag;
    });

}

window.onload = function () {
    randomParagraph();
}