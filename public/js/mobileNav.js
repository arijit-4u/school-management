// DOM Elements
const nav = document.querySelector(".mobile-nav");
const btnMenu = document.getElementById("btnCollapsed");
const btnMenuClose = document.getElementById("btnExpanded");

// Handler Function
const menuOpen = function () {
  nav.classList.add("open");
};

const menuClose = function () {
  nav.classList.remove("open");
};

// Eventlistners
btnMenu.addEventListener("click", menuOpen);

btnMenuClose.addEventListener("click", menuClose);
