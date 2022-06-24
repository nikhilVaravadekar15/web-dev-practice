const copyText = document.querySelector(".copy-text")
const copyButton = document.querySelector(".copy-text button")
const copyInput = document.querySelector(".copy-text input")

function dec2hex (dec) {
  return dec.toString(16).padStart(2, "0")
}

function generateId (len) {
  var arr = new Uint8Array((len || 11) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
}

window.addEventListener("load", () => {
	copyInput.value = `https://bit.ly/${generateId(11)}`
})

copyButton.addEventListener("click", () => {
	copyInput.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	setTimeout(() => {
		copyText.classList.remove("active");
	}, 6000);
})
