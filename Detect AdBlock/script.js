const detect = document.querySelector("#detect");
const wrapper = document.querySelector(".wrapper");
const noAdsBlocker = document.querySelector(".noAdsBlocker");
const textBlock = document.querySelector(".textBlock");
const button = wrapper.querySelector("button");

let adsClass = [
    "ad", "ads", "adsbox", "ad-placement", "doubleclick", "ad-placeholder", "ad-badge"
];

for (let item of adsClass) {
    detect.classList.add(item);
}

button.addEventListener("click", () => {
    wrapper.classList.remove("show");
    textBlock.innerText = "Please Whitelist our website."
    noAdsBlocker.classList.add("display");
    setTimeout(() => {
        wrapper.classList.add("show");
        noAdsBlocker.classList.remove("display")
    }, 5000);
});

let getProperty = window.getComputedStyle(detect).getPropertyValue("display");
console.log(getProperty);

if (getProperty == "none") {
    wrapper.classList.add("show");
    noAdsBlocker.classList.remove("display")
} else {
    wrapper.classList.remove("show");
    textBlock.innerText = "No ad Blocker Detected"
    noAdsBlocker.classList.add("display");
}