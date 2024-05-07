const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleTryClick(event) {
    event.preventDefault ()
    toggleScreen()
}

function handleResetClick() {
    toggleScreen ()
   
}

btnOpen.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter" && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})