const wrapper = document.querySelector(".wrapper")
const side_panel_toggle = document.querySelector(".side-panel-toggle")

side_panel_toggle.addEventListener("click", () => {
	wrapper.classList.toggle("side-panel-open")
})
