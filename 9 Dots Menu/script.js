const navigation = document.querySelector(".navigation")

navigation.addEventListener("click" ,(event) => {
    event.preventDefault()
    navigation.classList.toggle("active")
    console.log("clicked")
})