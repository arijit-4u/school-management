"use strict";

// DOM elements
const slides = document.querySelectorAll(".slide");
const btnPerv = document.querySelector(".slider__btn--left");
const btnNext = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dots");
const imageInfo = document.querySelector(".image-info");
const imageWrapper = document.querySelector(".image-wrapper");
const btnLeft = document.querySelector(".gallery__btn--left");
const btnRight = document.querySelector(".gallery__btn--right");

// Global variables
let curSlide = 0; // the current slide with translateX(0%)
const maxSlides = slides.length;

// Functions
const gotoSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const createDots = function () {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  // Remove active class from all the buttons
  document
    .querySelectorAll(".dots__dot")
    .forEach(dot => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const nextSlide = function () {
  curSlide = (curSlide + 1) % maxSlides; // update current slide
  gotoSlide(curSlide);
  activateDot(curSlide);
  createInfo(curSlide);
};

const prevSlide = function () {
  // Update current slide
  curSlide = curSlide === 0 ? maxSlides - 1 : curSlide - 1;
  gotoSlide(curSlide);
  activateDot(curSlide);
  createInfo(curSlide);
};

const createInfo = function (slide) {
  // Put that into the desc data attribute of imageInfo
  imageInfo.dataset.desc = slides[slide].title;
};

// Event handlers
btnNext.addEventListener("click", nextSlide);

btnPerv.addEventListener("click", prevSlide);

dotsContainer.addEventListener("click", function (e) {
  // Match the target
  if (e.target.classList.contains("dots__dot")) {
    curSlide = Number(e.target.dataset.slide);
    // goto the selected slide
    gotoSlide(curSlide);
    activateDot(curSlide);
    createInfo(curSlide);
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

btnRight.addEventListener("click", function () {
  imageWrapper.style.transform = "translateX(-59.5%)";
  btnLeft.style.transform = "translate(0%, -50%)";
  btnRight.style.transform = "translate(100%, -50%)";
});

btnLeft.addEventListener("click", function () {
  imageWrapper.style.transform = "translateX(0%)";
  btnRight.style.transform = "translate(0%, -50%)";
  btnLeft.style.transform = "translate(-100%, -50%)";
});

// A function to set the initial things up
function init() {
  gotoSlide(0);
  createDots();
  activateDot(0);
  createInfo(0);
}

init();
