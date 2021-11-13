let temp1 = document.querySelector(".argentina")
let divExplorar = document.querySelector(".explorar")
temp1.onmouseover = () => {
    divExplorar.style.display = "block"
    divExplorar.style.marginLeft = "100px"
}
temp1.onmouseleave = () => divExplorar.style.display = "none"