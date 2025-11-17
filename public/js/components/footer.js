const template = document.createElement("template");

template.innerHTML = `
<footer class="container section footer">
  <div class="social-media separator-gradient-block">
    <p class="text-small-bold">CONNECT WITH US</p>
    <span>
      <svg class="sprite sprite--light sprite--medium">
        <use href="/assets/img/sprite.svg#icon-whatsapp-o"></use>
      </svg>
      <svg class="sprite sprite--light sprite--medium">
        <use href="/assets/img/sprite.svg#icon-youtube-o"></use>
      </svg>
      <svg class="sprite sprite--light sprite--medium">
        <use href="/assets/img/sprite.svg#icon-facebook-o"></use>
      </svg>
    </span>
  </div>

  <section class="footer__links">
    <div class="footer-content-wrapper separator-gradient-inline">
      <img src="/assets/img/logo.png" alt="logo" class="logo__footer" />
      <h2 class="heading-2 title__footer">
        Public High School<br />
        (Higher Secondary)
      </h2>
      <div class="location-wrapper">
        <svg class="sprite sprite--light sprite--normal">
          <use href="/assets/img/sprite.svg#icon-location-filled"></use>
        </svg>
        <p class="text-small">
          DUMDUM SOUTH, NORTH<br />TWENTY FOUR PARGANAS<br />West Bengal - 700
          003
        </p>
      </div>
    </div>
    <div class="footer-link-container separator-gradient-inline">
      <h3 class="text-medium-bold">
        Section Header
        <svg class="sprite sprite--light sprite--normal">
          <use href="/assets/img/sprite.svg#icon-chevron-right"></use>
        </svg>
      </h3>
      <ul>
        <li class="text-small">Link One</li>
        <li class="text-small">Link Two</li>
        <li class="text-small">Link Three</li>
      </ul>
    </div>
    <div class="footer-link-container separator-gradient-inline">
      <h3 class="text-medium-bold">
        Section Header
        <svg class="sprite sprite--light sprite--normal">
          <use href="/assets/img/sprite.svg#icon-chevron-right"></use>
        </svg>
      </h3>
      <ul>
        <li class="text-small">Link One</li>
        <li class="text-small">Link Two</li>
        <li class="text-small">Link Three</li>
      </ul>
    </div>
    <div class="footer-link-container">
      <h3 class="text-medium-bold">
        Section Header
        <svg class="sprite sprite--light sprite--normal">
          <use href="/assets/img/sprite.svg#icon-chevron-right"></use>
        </svg>
      </h3>
      <ul>
        <li class="text-small">Link One</li>
        <li class="text-small">Link Two</li>
        <li class="text-small">Link Three</li>
      </ul>
    </div>
  </section>

  <section class="footer__nav separator-gradient-block">
    <p class="text-small-extra">&copy;Public High School 2024</p>
    <nav>
      <ul>
        <li class="text-small-extra">Contact us</li>
        <li class="text-small-extra">About this site</li>
        <li class="text-small-extra">Legal</li>
        <li class="text-small-extra">Privacy Policy</li>
        <li class="text-small-extra">Cookie Settings</li>
        <li class="text-small-extra">Accessibility Statement</li>
      </ul>
    </nav>
  </section>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("ps-footer", Footer);
