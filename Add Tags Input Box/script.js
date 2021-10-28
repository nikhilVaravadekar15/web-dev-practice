const ul = document.querySelector("ul");
const input = document.querySelector("input");
const count = document.querySelector(".details span");
const removeAllBtn = document.querySelector(".details button");

let maxTags = 10;
let tags = [];


function addTag(e) {
    if (e.key == "Enter") {
        // remove unwanted spaces
        let tag = e.target.value.replace(/\s+/g, " ");
        if (tag == "") {
            e.target.classList.add("blink");
            setTimeout(() => {
                e.target.classList.remove("blink");
            }, 1000);
        } else if (tag.length > 1 && !tags.includes(tag)) {
            if (tags.length < 10) {
                let arr = tag.split(",");
                arr.forEach(tag => {
                    if (!tags.includes(tag)) {
                        tags.push(tag);
                    }
                });
            } else {
                count.classList.add("blink");
                setTimeout(() => {
                    count.classList.remove("blink");
                }, 1000);
            }
        }
        e.target.value = "";
        createTag();
        countTags();
    }
}


function createTag() {
    const list = ul.querySelectorAll("li");
    list.forEach((li) => {
        li.remove();
    });

    for (let tag of tags) {
        let liTag = `<li>${tag}<i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`
        ul.insertAdjacentHTML("afterbegin", liTag);
    }
}

function remove(element, tag) {
    const index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    createTag();
    countTags();
}

function removeAllTags() {
    tags = [];
    input.value = "";
    createTag();
    countTags();
}

function countTags() {
    input.focus();
    count.innerText = maxTags - tags.length;
}

countTags();
input.addEventListener("keyup", addTag);
removeAllBtn.addEventListener("click", removeAllTags);