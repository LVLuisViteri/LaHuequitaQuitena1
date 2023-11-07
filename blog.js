const hamburguesaIcono = document.getElementById("hamburguesa-icono");
const menuHamburguesa = document.getElementById("menu-hamburguesa");
const cerrarMenu = document.querySelector(".cerrar-menu");

hamburguesaIcono.addEventListener("click", () => {
    menuHamburguesa.style.left = "0";
});

cerrarMenu.addEventListener("click", () => {
    menuHamburguesa.style.left = "-250px";
});