
let d = document

let buttonLeft = d.getElementById("btn1")
let buttonRight = d.getElementById("btn2")
let itemList = d.getElementById("itemlist")
let popUp = d.getElementById("popup")
let popUpcloseBtn = d.getElementById("closepopup")
let playPopUp = d.getElementById("playpopup")

let quest1 = d.getElementById("quest-1")
let quest2 = d.getElementById("quest-2")
let quest3 = d.getElementById("quest-3")
let icon1 = d.getElementById("icon-1")
let icon2 = d.getElementById("icon-2")
let icon3 = d.getElementById("icon-3")

let name = d.getElementById("name")
let email = d.getElementById("email")
let phone = d.getElementById("phone")
let text = d.getElementById("text")
let submit = d.getElementById("submit")


buttonLeft.addEventListener("click", () => {
    buttonLeft.classList.add("active")
    buttonRight.classList.remove("active")
    itemList.classList.remove("margin800")
})

buttonRight.addEventListener("click", () => {
    buttonLeft.classList.remove("active")
    buttonRight.classList.add("active")
    itemList.classList.add("margin800")
})

playPopUp.addEventListener("click", () => {
    popUp.classList.add("show")
})

popUpcloseBtn.addEventListener("click", () => {
    popUp.classList.remove("show")
})

quest1.addEventListener("click", () => {
    quest1.classList.toggle("opentext")
    icon1.classList.toggle("openicon")
    quest2.classList.remove("opentext")
    quest3.classList.remove("opentext")
    icon2.classList.remove("openicon")
    icon3.classList.remove("openicon")
})

quest2.addEventListener("click", () => {
    quest2.classList.toggle("opentext")
    icon2.classList.toggle("openicon")
    quest1.classList.remove("opentext")
    quest3.classList.remove("opentext")
    icon1.classList.remove("openicon")
    icon3.classList.remove("openicon")
})

quest3.addEventListener("click", () => {
    quest3.classList.toggle("opentext")
    icon3.classList.toggle("openicon")
    quest1.classList.remove("opentext")
    quest2.classList.remove("opentext")
    icon1.classList.remove("openicon")
    icon2.classList.remove("openicon")
})

submit.addEventListener("click", () => {
    if (name.value == 0){
        name.classList.add("empty")
    } else {
        name.classList.remove("empty")
    }
    if (email.value == 0){
        email.classList.add("empty")
    } else {
        email.classList.remove("empty")
    }
    if (phone.value == 0){
        phone.classList.add("empty")
    } else {
        phone.classList.remove("empty")
    }
    if (text.value == 0){
        text.classList.add("empty")
    } else {
        text.classList.remove("empty")
    }
})