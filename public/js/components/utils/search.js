export default function () {
  const search = document.getElementById("searchForm");
  const btnSearch = document.getElementById("btnSearch");
  const inputBox = document.getElementById("searchInput");

  window.addEventListener("DOMContentLoaded", () => {
    reset(search);
    onResize(search);
  });
  window.addEventListener("resize", () => onResize(search));

  inputBox.addEventListener("focus", () => onFocusIn(search));
  inputBox.addEventListener("blur", () => onFocusOut(search));
  btnSearch.addEventListener("click", e =>
    handleClick(e, search, inputBox, btnSearch)
  );
  search.addEventListener("submit", e => handleSearch(e, inputBox));
}

/**
 * Handler functions
 */

function handleClick(e, s, i, b) {
  e.preventDefault();
  s.setAttribute("aria-selected", true);
  s.setAttribute("aria-expanded", true);
  i.focus();
  if (i.value) s.requestSubmit(b);
}

function handleSearch(e, i) {
  e.preventDefault();
  const keyWord = i.value;
  const query = `${e.target.getAttribute("action")}?q=${keyWord.replace(/ /g, "+")}`;
  window.location.assign(query);
}

function onFocusIn(elm) {
  elm.setAttribute("aria-selected", true);
  elm.setAttribute("aria-expanded", true);
}

function onFocusOut(elm) {
  elm.setAttribute("aria-selected", false);
  elm.setAttribute("aria-expanded", false);
}

function onResize(elm) {
  const screenWidth = document.body.clientWidth;
  if (screenWidth < 1280) {
    elm.setAttribute("aria-expanded", false);
  } else elm.setAttribute("aria-expanded", true);
}

function reset(elm) {
  elm.reset();
}
