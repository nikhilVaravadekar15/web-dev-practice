let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let toggleInBtn = document.querySelector(".toggleInButton");
let toggleOutBtn = document.querySelector(".toggleOutButton");

let main_content = document.querySelector(".main_content");


btn.onclick = function(){
    sidebar.classList.toggle("active");
    main_content.classList.toggle("active");
}

searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
    main_content.classList.toggle("active");
}

toggleInBtn.onclick = function(){
    sidebar.classList.toggle("active");
    main_content.classList.toggle("active");
}

toggleOutBtn.onclick = function(){
    sidebar.classList.toggle("active");
    main_content.classList.toggle("active");
}

