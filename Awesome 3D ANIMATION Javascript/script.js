function newHover(event) {
    console.log(event.pageX, event.pageY);

    let xAxis = ((window.innerWidth / 2) - event.pageX) / 25;
    let yAxis = ((window.innerHeight / 2) - event.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

}
function animateIn(event) {

    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = "none";

    sneaker.style.transform = `translateZ(70px) rotateZ(-15deg)`
    title.style.transform = `translateZ(50px)`
    sizes.style.transform = `translateZ(25px)`
    purchase.style.transform = `translateZ(25px)`
    addToCart.style.transform = `translateZ(25px)`
}

function animateOut(event) {
    card.style.transition = "all";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`
    title.style.transform = `translateZ(0px)`
    description.style.transform = `translateZ(0px)`
    sizes.style.transform = `translateZ(0px)`
    purchase.style.transform = `translateZ(0px)`
    addToCart.style.transform = `translateZ(0px)`
}

// movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
// items
const sneaker = document.querySelector(".sneaker");
const title = document.querySelector(".title");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");
const addToCart = document.querySelector(".add-to-cart");



// addEventListener container
container.addEventListener("mousemove", newHover);
// animateIn card
container.addEventListener("mouseenter", animateIn);
// animateOut card
container.addEventListener("mouseleave", animateOut);

