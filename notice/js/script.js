"use strict";

// DOM elements
const newsCards = document.querySelectorAll(".news-card");
const eventsList = document.querySelectorAll(".event--small");
const btnNext = document.querySelector(".slider__btn--right");
const btnPrev = document.querySelector(".slider__btn--left");

console.log(eventsList);

let curCard = 0;
const maxCards = newsCards.length;

let curEventItem = 0;
const maxNewsEvents = eventsList.length;

newsCards.forEach(function (newsCard, i) {
  newsCard.style.transform = `translateX(${100 * i}%)`;
});

eventsList.forEach(function (event, i) {
  event.style.transform = `translateY(${100 * i}%)`;
});

btnNext.addEventListener("click", () => {
  curCard = (curCard + 1) % maxCards;
  newsCards.forEach(function (newsCard, i) {
    newsCard.style.transform = `translateX(${100 * (i - curCard)}%)`;
  });
});

btnNext.addEventListener("click", () => {
  curEventItem = (curEventItem + 1) % maxNewsEvents;
  eventsList.forEach(function (event, i) {
    event.style.transform = `translateY(${100 * (i - curEventItem)}%)`;
  });
});

btnPrev.addEventListener("click", () => {
  curCard = curCard === 0 ? maxCards - 1 : curCard - 1;
  newsCards.forEach(function (newsCard, i) {
    newsCard.style.transform = `translateX(${100 * (i - curCard)}%)`;
  });
});

btnPrev.addEventListener("click", () => {});
