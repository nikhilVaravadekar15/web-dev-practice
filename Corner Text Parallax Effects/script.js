function parallaxText(event){
    this.querySelectorAll(".layer").forEach(layer =>{
        let x = (window.innerWidth - event.pageX * 2)/4;
        layer.style.transform = `translateX(${x}px)`;

        console.log(x)
    });
}

document.addEventListener("mousemove", parallaxText);

