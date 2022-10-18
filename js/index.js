
window.addEventListener(
    "DOMContentLoaded", ()=>{
        const d= document;
        const menuButtom= d.querySelector("nav button.menu");
        const menuOptions= d.querySelector("nav ul.menu");

        menuButtom.addEventListener("click", ()=> menuOptions.classList.toggle ("active"))
    }
)