const wrapper = document.querySelector(".wrapper")
const header = document.querySelector(".header")

// movementX, movementY
function onDrag(event){
    let getStyle = window.getComputedStyle(wrapper)

    let wrapperLeft = parseInt(getStyle.left)
    let wrapperTop = parseInt(getStyle.top)

    let wrapperWidth = wrapper.clientWidth
    let wrapperHeight = wrapper.clientHeight

    const windowWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

    wrapper.style.left = `${wrapperLeft + event.movementX}px`
    wrapper.style.top = `${wrapperTop + event.movementY}px`



}

header.addEventListener("mousedown", (event) => {
    event.preventDefault()
    header.classList.add("active")
    header.addEventListener("mousemove", onDrag)
})

header.addEventListener("mouseup", (event) => {
    event.preventDefault()
    header.classList.remove("active")
    header.addEventListener("mousemove", onDrag)
})

