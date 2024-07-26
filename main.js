// MENU HAMBURGER

const button = document.getElementById("btn-mobile");

const buttonPressed = (e) => {
  e.target.classList.toggle("is-active");

  if (e.target.classList.contains("is-active")) {
    const menuCategorias = document.getElementById("menu-spande");
    menuCategorias.classList.remove("hidden");
  } else {
    const menuCategorias = document.getElementById("menu-spande");
    menuCategorias.classList.add("hidden");
  }
};

button.addEventListener("click", buttonPressed);