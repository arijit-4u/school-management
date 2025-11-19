import mobileNav from "./utils/mobileNav.js";
import search from "./utils/search.js";

const templateHome = document.createElement("template");
const templateRest = document.createElement("template");
const templateMobileNav = document.createElement("template");

templateHome.innerHTML = `
<header class="container">
  <!-- Info Section -->
  <ul class="top-section section--inline">
    <li>
      <a
        class="text-small-extra-bold"
        href="mailto:info@school.edu.in"
        aria-label="school email address"
      >
        <svg class="sprite sprite--light sprite--normal" role="img">
          <use href="/assets/img/sprite.svg#icon-mail-o"></use>
        </svg>
        info@school.edu.in</a
      >
    </li>
    <li>
      <a
        class="text-small-extra-bold"
        href="tel:+913385858888"
        aria-label="school telephone number"
      >
        <svg class="sprite sprite--light sprite--normal" role="img">
          <use href="/assets/img/sprite.svg#icon-phone-o"></use>
        </svg>
        +91-33-8585-8888</a
      >
    </li>
  </ul>
  <!-- End of Info Section -->

  <!-- Header Navigation -->
  <nav class="main-nav section--inline">
    <div class="left-section">
      <a href="/public/" aria-label="home page">
        <img src="/assets/img/logo.png" alt="logo" class="logo-square" />
        <img
          src="https://dummyimage.com/140x60/eee/aaa "
          alt="logo"
          class="logo-wide"
      /></a>
      <ul class="primary-links fix-white-space">
        <li class="nav-links nav-links--main text-medium-bold">
          <a href="/admission/"
            >ADMISSIONS
            <svg class="sprite sprite--light sprite--normal" role="img">
              <use
                href="/assets/img/sprite.svg#icon-chevron-down-short"
              ></use></svg
          ></a>
          <div class="sub-menu-wrapper">
            <ul class="sub-menu">
              <li><a href="#" class="text-small-extra">List item 1</a></li>
              <li><a href="#" class="text-small-extra">List item 2</a></li>
              <li><a href="#" class="text-small-extra">List item 3</a></li>
              <li><a href="#" class="text-small-extra">List item 4</a></li>
            </ul>
          </div>
        </li>
        <li class="nav-links nav-links--main text-medium-bold">
          <a href="/academics/"
            >ACADEMICS
            <svg class="sprite sprite--light sprite--normal" role="img">
              <use
                href="/assets/img/sprite.svg#icon-chevron-down-short"
              ></use></svg
          ></a>
          <div class="sub-menu-wrapper">
            <ul class="sub-menu">
              <li><a href="#" class="text-small-extra">List item 1</a></li>
              <li><a href="#" class="text-small-extra">List item 2</a></li>
              <li><a href="#" class="text-small-extra">List item 3</a></li>
              <li><a href="#" class="text-small-extra">List item 4</a></li>
            </ul>
          </div>
        </li>
        <li class="nav-links nav-links--main text-medium-bold">
          <a href="/notice/"
            >NOTICE
            <svg class="sprite sprite--light sprite--normal" role="img">
              <use
                href="/assets/img/sprite.svg#icon-chevron-down-short"
              ></use></svg
          ></a>
          <div class="sub-menu-wrapper">
            <ul class="sub-menu">
              <li><a href="#" class="text-small-extra">List item 1</a></li>
              <li><a href="#" class="text-small-extra">List item 2</a></li>
              <li><a href="#" class="text-small-extra">List item 3</a></li>
              <li><a href="#" class="text-small-extra">List item 4</a></li>
            </ul>
          </div>
        </li>
        <li class="nav-links nav-links--main text-medium-bold">
          <a href="/about/"
            >ABOUT
            <svg class="sprite sprite--light sprite--normal" role="img">
              <use
                href="/assets/img/sprite.svg#icon-chevron-down-short"
              ></use></svg
          ></a>
          <div class="sub-menu-wrapper">
            <ul class="sub-menu">
              <li>
                <a href="/about/contact/" class="text-small-extra"
                  >Contact Us</a
                >
              </li>
              <li><a href="#" class="text-small-extra">List item 2</a></li>
              <li><a href="#" class="text-small-extra">List item 3</a></li>
              <li><a href="#" class="text-small-extra">List item 4</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div class="right-section">
      <ul class="secondary-links fix-white-space">
        <li class="nav-links nav-links--alt text-small-extra">
          <a href="#">Staff</a>
          <svg class="sprite sprite--light sprite--small" role="img">
            <use href="/assets/img/sprite.svg#icon-chevron-down-short"></use>
          </svg>
        </li>
        <li class="nav-links nav-links--alt text-small-extra">
          <a href="#">Students</a>
          <svg class="sprite sprite--light sprite--small" role="img">
            <use href="/assets/img/sprite.svg#icon-chevron-down-short"></use>
          </svg>
        </li>
        <li class="nav-links nav-links--alt text-small-extra">
          <a href="#">Parents</a>
          <svg class="sprite sprite--light sprite--small" role="img">
            <use href="/assets/img/sprite.svg#icon-chevron-down-short"></use>
          </svg>
        </li>
      </ul>
      <search>
        <form
          id="searchForm"
          action="/search/"
          method="get"
          class="search-form"
          aria-selected="false"
        >
          <input
            id="searchInput"
            type="search"
            class="search-box text-small-extra"
            placeholder="Search..."
          />
          <button
            id="btnSearch"
            type="submit"
            class="btn--search"
            aria-label="search-button"
          >
            <svg
              class="sprite sprite--bold sprite--light sprite--medium"
              role="img"
            >
              <use href="/assets/img/sprite.svg#search"></use>
            </svg>
          </button>
        </form>
      </search>
      <button class="btn__mobile-nav" id="btnCollapsed">
        <svg class="sprite sprite--light sprite--medium" role="img">
          <use href="/assets/img/sprite.svg#icon-menu"></use>
        </svg>
      </button>
    </div>
  </nav>
  <!-- End of Header Navigation -->
</header>
`;

templateRest.innerHTML = `
<header class="container">
  <!-- Header Navigation -->
  <nav class="main-nav section--inline">
    <div class="nav-wrapper">
      <a href="/public/" class="logo-wrapper" aria-label="home page">
        <img src="/assets/img/logo.png" alt="logo" class="logo-square" />
        <img
          src="https://dummyimage.com/140x60/eee/aaa"
          alt="logo"
          class="logo-wide"
        />
      </a>

      <div class="top-container">
        <ul class="fix-white-space">
          <li class="nav-links nav-links--main text-small">
            <a href="/admission/">ADMISSIONS</a>
            <svg class="sprite sprite--light sprite--small" role="img">
              <use href="/assets/img/sprite.svg#icon-chevron-down-short"></use>
            </svg>
          </li>
          <li class="nav-links nav-links--main text-small">
            <a href="/academics/">ACADEMICS</a>
            <svg class="sprite sprite--light sprite--small" role="img">
              <use href="/assets/img/sprite.svg#icon-chevron-down-short"></use>
            </svg>
          </li>
          <li class="nav-links nav-links--main text-small">
            <a href="/notice/">NOTICE</a>
            <svg class="sprite sprite--light sprite--small" role="img">
              <use href="/assets/img/sprite.svg#icon-chevron-down-short"></use>
            </svg>
          </li>
          <li class="nav-links nav-links--main text-small">
            <a href="/about/">ABOUT</a>
            <svg class="sprite sprite--light sprite--small" role="img">
              <use href="/assets/img/sprite.svg#icon-chevron-down-short"></use>
            </svg>
          </li>
        </ul>
      </div>

      <div class="bottom-container">
        <h2 id="pageHeading" class="heading-2 nav-heading">PAGE HEADING</h2>

        <img
          src="/assets/img/SeparatorChevron.png"
          alt=""
          class="separator-img"
        />
        <ul class="fix-white-space">
          <li class="nav-links nav-links--main text-large">
            <a href="#"
              >Link One
              <svg class="sprite sprite--light sprite--normal" role="img">
                <use
                  href="/assets/img/sprite.svg#icon-chevron-down-short"
                ></use></svg
            ></a>
            <div class="sub-menu-wrapper">
              <ul class="sub-menu">
                <li>
                  <a href="#" class="text-small-extra">List item 1</a>
                </li>
                <li>
                  <a href="#" class="text-small-extra">List item 2</a>
                </li>
                <li>
                  <a href="#" class="text-small-extra">List item 3</a>
                </li>
                <li>
                  <a href="#" class="text-small-extra">List item 4</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-links nav-links--main text-large">
            <a href="#"
              >Link Two
              <svg class="sprite sprite--light sprite--normal" role="img">
                <use
                  href="/assets/img/sprite.svg#icon-chevron-down-short"
                ></use></svg
            ></a>
            <div class="sub-menu-wrapper">
              <ul class="sub-menu">
                <li>
                  <a href="#" class="text-small-extra">List item 1</a>
                </li>
                <li>
                  <a href="#" class="text-small-extra">List item 2</a>
                </li>
                <li>
                  <a href="#" class="text-small-extra">List item 3</a>
                </li>
                <li>
                  <a href="#" class="text-small-extra">List item 4</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-links nav-links--main text-large">
            <a href="#"
              >Link Three
              <svg class="sprite sprite--light sprite--normal" role="img">
                <use
                  href="/assets/img/sprite.svg#icon-chevron-down-short"
                ></use></svg
            ></a>
            <div class="sub-menu-wrapper">
              <ul class="sub-menu">
                <li>
                  <a href="#" class="text-small-extra">List item 1</a>
                </li>
                <li>
                  <a href="#" class="text-small-extra">List item 2</a>
                </li>
                <li>
                  <a href="#" class="text-small-extra">List item 3</a>
                </li>
                <li>
                  <a href="#" class="text-small-extra">List item 4</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="search-widget">
        <search>
          <form
            id="searchForm"
            action="/search/"
            method="get"
            class="search-form"
            aria-selected="false"
          >
            <input
              id="searchInput"
              type="search"
              class="search-box text-small-extra"
              placeholder="Search..."
            />
            <button
              id="btnSearch"
              type="submit"
              class="btn--search"
              aria-label="search-button"
            >
              <svg
                class="sprite sprite--bold sprite--light sprite--medium"
                role="img"
              >
                <use href="/assets/img/sprite.svg#search"></use>
              </svg>
            </button>
          </form>
        </search>
        <button class="btn__mobile-nav" id="btnCollapsed">
          <svg class="sprite sprite--light sprite--medium" role="img">
            <use href="/assets/img/sprite.svg#icon-menu"></use>
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <!-- End of Header Navigation -->
</header>
`;

templateMobileNav.innerHTML = `
<nav class="mobile-nav">
  <button class="btn__mobile-nav" id="btnExpanded">
    <svg class="sprite sprite--light sprite--large" role="img">
      <use href="/assets/img/sprite.svg#icon-cross"></use>
    </svg>
  </button>

  <ul class="mobile-nav__menu">
    <li class="mobile-nav__links mobile-nav__primary" aria-expanded="false">
      <a href="#" class="text-medium-bold"
        >ADMISSIONS
        <svg class="sprite sprite--light sprite--normal" role="img">
          <use href="/assets/img/sprite.svg#icon-chevron-down"></use>
        </svg>
      </a>
      <ul>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link One</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Two</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Three</a>
        </li>
      </ul>
    </li>

    <li class="mobile-nav__links mobile-nav__primary" aria-expanded="false">
      <a href="#" class="text-medium-bold"
        >ACADEMICS
        <svg class="sprite sprite--light sprite--normal" role="img">
          <use href="/assets/img/sprite.svg#icon-chevron-down"></use>
        </svg>
      </a>
      <ul>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link One</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Two</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Three</a>
        </li>
      </ul>
    </li>

    <li class="mobile-nav__links mobile-nav__primary" aria-expanded="false">
      <a href="#" class="text-medium-bold"
        >NOTICE

        <svg class="sprite sprite--light sprite--normal" role="img">
          <use href="/assets/img/sprite.svg#icon-chevron-down"></use>
        </svg>
      </a>
      <ul>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link One</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Two</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Three</a>
        </li>
      </ul>
    </li>

    <li class="mobile-nav__links mobile-nav__primary" aria-expanded="false">
      <a href="#" class="text-medium-bold"
        >ABOUT

        <svg class="sprite sprite--light sprite--normal" role="img">
          <use href="/assets/img/sprite.svg#icon-chevron-down"></use>
        </svg>
      </a>
      <ul>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link One</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Two</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Three</a>
        </li>
      </ul>
    </li>

    <li class="mobile-nav__links mobile-nav__secondary" aria-expanded="false">
      <a href="#" class="text-medium-bold"
        >Staff

        <svg class="sprite sprite--light sprite--normal" role="img">
          <use href="/assets/img/sprite.svg#icon-chevron-down"></use>
        </svg>
      </a>
      <ul>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link One</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Two</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Three</a>
        </li>
      </ul>
    </li>

    <li class="mobile-nav__links mobile-nav__secondary" aria-expanded="false">
      <a href="#" class="text-medium-bold"
        >Students

        <svg class="sprite sprite--light sprite--normal" role="img">
          <use href="/assets/img/sprite.svg#icon-chevron-down"></use>
        </svg>
      </a>
      <ul>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link One</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Two</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Three</a>
        </li>
      </ul>
    </li>

    <li class="mobile-nav__links mobile-nav__secondary" aria-expanded="false">
      <a href="#" class="text-medium-bold"
        >Parents

        <svg class="sprite sprite--light sprite--normal" role="img">
          <use href="/assets/img/sprite.svg#icon-chevron-down"></use>
        </svg>
      </a>
      <ul>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link One</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Two</a>
        </li>
        <li class="mobile-nav__sub-links text-small-extra">
          <a href="#">Link Three</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>
`;

class Header extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "page"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    search();
    mobileNav();
  }

  attributeChangedCallback(name, _oldVal, newVal) {
    if (name === "variant") {
      this.updateVariant(newVal);
    }

    if (name === "page") {
      this.updatePageHeading(newVal);
    }
  }

  updatePageHeading(name) {
    this.querySelector("#pageHeading").innerHTML = name;
  }

  updateVariant(type) {
    if (type === "home") {
      this.appendChild(templateHome.content.cloneNode(true));
    }

    if (type === "rest") {
      this.appendChild(templateRest.content.cloneNode(true));
    }

    this.appendChild(templateMobileNav.content.cloneNode(true));
  }
}

customElements.define("ps-header", Header);
