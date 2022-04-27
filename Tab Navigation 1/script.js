const body = document.querySelector("body");
const tabs = document.querySelectorAll(".tab");

const colorArray = [
	"rgba(91, 55,183, 0.5)",
	"rgba(201, 55,157, 0.5)",
	"rgba(230, 169, 25, 0.5)",
	"rgba(28, 150, 162, 0.5)"
]

for (var i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let color = colorArray[i];
    tab.addEventListener("click", () => {
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }
        tab.classList.add("active");
        body.style.background = color;
    })
}
