// DOM Elements
const nav = document.querySelector(".mobile-nav");
const btnMenu = document.getElementById("btnCollapsed");
const btnMenuClose = document.getElementById("btnExpanded");
const dropDownList = document.querySelectorAll(".mobile-nav__links");

// Handler Function
const menuOpen = function () {
  nav.classList.add("open");
};

const menuClose = function () {
  nav.classList.remove("open");
  subMenuClose();
};

const subMenuToggle = function (dropDown, isMenuOpen) {
  const subMenu = dropDown.querySelector("ul");

  subMenu.style.height = 0; // needed for initial animation

  if (!isMenuOpen) {
    dropDown.setAttribute("aria-expanded", true);
    subMenu.style.height = `${subMenu.scrollHeight}px`;
  } else {
    dropDown.setAttribute("aria-expanded", false);
    subMenu.style.height = 0;
  }
};

const subMenuClose = function () {
  const openDropdownMenu = document.querySelectorAll(
    ".mobile-nav__links[aria-expanded='true']"
  );

  openDropdownMenu.forEach(openDropdown => {
    subMenuToggle(openDropdown, true);
  });
};

// Eventlistners
btnMenu.addEventListener("click", menuOpen);

btnMenuClose.addEventListener("click", menuClose);

dropDownList.forEach(dropDown => {
  dropDown.firstElementChild.addEventListener("click", () => {
    const isMenuOpen = dropDown.getAttribute("aria-expanded") === "true";
    subMenuClose();
    subMenuToggle(dropDown, isMenuOpen);
  });
});
