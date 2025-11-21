let menu = document.getElementsByClassName("navbar")[0];
let collapse = document.getElementsByClassName("collapse-button")[0];


collapse.addEventListener("click", () => {
    menu.classList.toggle("active");
})