let randomColor = document.getElementById("randomColor");
let randomColorText = document.getElementById("colorText");
let randomColorChange = document.getElementById("randomChangeColor");

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// function hexToRgb(hex) {
//     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     if (result) {
//         let vals = []
//         vals.push(parseInt(result[1], 16));
//         vals.push(parseInt(result[2], 16));
//         vals.push(parseInt(result[3], 16));
//         return vals;
//     }
//     return null;
// }
// function setRandonColor() {
//     inverseColor = []
//     let rColor = getRandomColor();
//     let rgbColor = hexToRgb(rColor);
//     for (code of rgbColor) {
//         inverseColor.push(255 - code)
//     }
//     randomColor.style.backgroundColor = rColor;
//     randomColorText.innerText = rColor;
//     randomColorText.style.color = `rgba(${inverseColor[0]}, ${inverseColor[1]},${inverseColor[2]})`;
//     console.log("random color => " + rColor);
//     console.log("inverse of random color => " + inverseColor);
// }

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    let color = []
    for (var i = 0; i < 3; i++) {
        color.push(Math.floor(getRandomArbitrary(0, 255)));
    }
    return color;
}

function setRandonColor(event) {
    inverseColor = []
    let rColor = getRandomColor();
    for (code of rColor) {
        inverseColor.push(Math.floor(255 - code))
    }
    randomColor.style.backgroundColor = `rgba(${rColor[0]}, ${rColor[1]}, ${rColor[2]}, ${0.5})`;
    randomColorText.innerText = rColor + " a=0.5";
    randomColorText.style.color = `rgba(${inverseColor[0]}, ${inverseColor[1]}, ${inverseColor[2]})`;

    console.log("random color => " + rColor);
    console.log("inverse random color => " + inverseColor);
}

randomColorText.innerText = `#000` + " a=0.5";
// // button
// randomColorChange.addEventListener("click", setRandonColor);

// // space bar
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        setRandonColor()
    }
})

// // any key
// document.addEventListener('keyup', event => {
//     setRandonColor()
//     console.log("event.code => " + event.code);
// })

// // every refresh
// document.addEventListener('keyup', setRandonColor())