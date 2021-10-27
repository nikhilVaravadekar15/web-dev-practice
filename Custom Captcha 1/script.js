const captcha = document.querySelector(".captcha-text");
const reloadBtn = document.querySelector(".reload-btn");
const inputField = document.querySelector("input");
const checkBtn = document.querySelector(".check-btn");
const statusText = document.querySelector(".status-text");


let allcharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
]

function getCaptcha() {
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
        let randomChar = allcharacters[Math.floor(Math.random() * allcharacters.length)];
        captchaText += ` ${randomChar}`;
    }
    return captchaText;
}

function setCaptcha() {
    captcha.innerHTML = "";
    captcha.innerHTML += getCaptcha();
}

setCaptcha();
reloadBtn.addEventListener("click", () => {
    setCaptcha()
    statusText.style.display = "none";
});

checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    statusText.style.display = "block";
    let inputVal = inputField.value.split("").join(" ");

    if (inputVal == captcha.innerText) {
        statusText.style.color = "#4db2ec";
        statusText.innerText = "";
        statusText.innerText = "Captcha Matched! You're not Robot.";
        setTimeout(() => {
            statusText.style.display = "";
            inputField.value = "";
            setCaptcha();
        }, 4000);
    } else {
        statusText.innerText = "";
        statusText.innerText = "Captcha not matched! Try again.";
    }

})