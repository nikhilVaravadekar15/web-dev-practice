const container = document.getElementById("container");

window.onmousemove = (e) => {
	let x = e.clientX;
	let y = e.clientY;
	container.style.backgroundPositionX = `${x}px`;
	container.style.backgroundPositionY = `${y}px`;
}
