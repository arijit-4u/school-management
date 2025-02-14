"use strict";

// DOM elements
const newsCards = document.querySelectorAll(".news-card");
const parentElm = document.querySelector(".news ul");
const eventsList = document.querySelectorAll(".event--small");
const btnNext = document.querySelector(".slider__btn--right");
const btnPrev = document.querySelector(".slider__btn--left");

// Events card scrolling
let curCard = 0;
const maxCards = newsCards.length;

newsCards.forEach(function (newsCard, i) {
  newsCard.style.transform = `translateX(${100 * i}%)`;
});

btnNext.addEventListener("click", () => {
  curCard = (curCard + 1) % maxCards;
  newsCards.forEach(function (newsCard, i) {
    newsCard.style.transform = `translateX(${100 * (i - curCard)}%)`;
  });
});

btnPrev.addEventListener("click", () => {
  curCard = curCard === 0 ? maxCards - 1 : curCard - 1;
  newsCards.forEach(function (newsCard, i) {
    newsCard.style.transform = `translateX(${100 * (i - curCard)}%)`;
  });
});

// Events list scrolling
const eventsArray = [...eventsList];

// Upshift the array
btnNext.addEventListener("click", () => {
  const firstElement = eventsArray.shift();
  eventsArray.push(firstElement);
  parentElm.appendChild(firstElement);
});

// Downshift the array
btnPrev.addEventListener("click", () => {
  const lastElement = eventsArray.pop();
  eventsArray.unshift(lastElement);
  parentElm.insertBefore(lastElement, parentElm.firstChild);
});
