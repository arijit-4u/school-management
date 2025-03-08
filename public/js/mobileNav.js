// DOM Elements
const nav = document.querySelector(".mobile-nav");
const btnMenu = document.getElementById("btnCollapsed");
const btnMenuClose = document.getElementById("btnExpanded");
const subMenuList = document.querySelectorAll(".mobile-nav__links");

// Handler Function
const menuOpen = function () {
  nav.classList.add("open");
};

const menuClose = function () {
  nav.classList.remove("open");
};

const subMenuToggle = function (subMenu) {
  const isMenuOpen = subMenu.getAttribute("aria-expanded");

  if (isMenuOpen === "false") {
    subMenu.setAttribute("aria-expanded", true);
  } else {
    subMenu.setAttribute("aria-expanded", false);
  }
};

// Eventlistners
btnMenu.addEventListener("click", menuOpen);

btnMenuClose.addEventListener("click", menuClose);

subMenuList.forEach(subMenu => {
  subMenu.firstElementChild.addEventListener("click", () => {
    subMenuToggle(subMenu);
  });
});
