function dragSlider(event){
    
    let xPos = event.layerX;
    let size = inner_container.offsetwidth;
    before.style.width = xPos + "px";
    slider.style.left = xPos + "px";

    //  console.log(event.layerX)
    //  console.log(size)

    if(xPos < 40){
        before.style.width = 0;
        slider.style.left = 0;
    }
    if(xPos+40 > size){
        before.style.width = size + "px";
        slider.style.left = size + "px";
    }
}

const slider = document.querySelector(".slider");
const after = document.querySelector(".image-container-after");
const before = document.querySelector(".image-container-before");
const inner_container = document.querySelector(".inner-container");


inner_container.addEventListener("mousemove", dragSlider);

