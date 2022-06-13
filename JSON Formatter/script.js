const input = document.getElementById("input")
const output = document.getElementById("output")
const format = document.getElementById("format")
const minify = document.getElementById("minify")
const transform = document.getElementById("transform")

function isJSON(text){
    if (typeof text!=="string"){
        return false;
    }
    try{
        var json = JSON.parse(text);
        return (typeof json === 'object');
    }
    catch (error){
        return false;
    }
}

format.addEventListener("click", () => {
	if (isJSON(input.value)) {
		output.value = JSON.stringify(JSON.parse(input.value), null, 2)
	}else{
		input.value = ""
		output.value = "INVALID JSON"
	}
})

minify.addEventListener("click", () => {
	if (isJSON(input.value)) {
		output.value = JSON.stringify(JSON.parse(input.value))
	}else{
		input.value = ""
		output.value = "INVALID JSON"
	}
})

transform.addEventListener("click", () => {
	if (isJSON(input.value)) {
		let tranformed = "";
		let lines = input.value.split("\n");
		for (var i = 0; i < lines.length; i++) {
			tranformed += lines[i].split("\"").join(`\\"`) + "\\n\t";
	    }
	    output.value = tranformed
	}else{
		input.value = ""
		output.value = "INVALID JSON"
	}
})
