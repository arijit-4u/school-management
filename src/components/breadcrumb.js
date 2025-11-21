const templateBreadcrumb = document.createElement("template");
const templateBreadcrumbItem = document.createElement("template");

templateBreadcrumb.innerHTML = `
<style>
  .breadcrumb {
    padding-top: var(--small);
    padding-bottom: var(--large-extra);
  }

  .breadcrumb svg {
    vertical-align: bottom;
  }

  .breadcrumb-link {
    display: inline;
  }

  .breadcrumb-link a {
    color: var(--neutral);
    text-transform: uppercase;
  }

  .breadcrumb-link:first-child a {
    color: var(--red);
  }

  .breadcrumb-link:first-child svg {
    fill: var(--red);
  }

  .breadcrumb-link:last-child {
    color: var(--surface-shade);
  }

  .breadcrumb-link:last-child svg {
    fill: var(--surface-shade);
  }
</style>

<nav>
  <ul id="breadcrumb" class="breadcrumb">
    <li class="breadcrumb-link">
      <a href="/" class="text-small-extra-bold">Home</a>
      <svg class="sprite sprite--normal" role="img">
        <use href="/public/img/sprite.svg#icon-chevron-right"></use>
      </svg>
    </li>
  </ul>
</nav>
`;

templateBreadcrumbItem.innerHTML = `
<li class="breadcrumb-link">
  <a href="#" class="text-small-extra">RELATIVE LINK</a>
  <svg class="sprite sprite--dark sprite--normal" role="img">
    <use href="/public/img/sprite.svg#icon-chevron-right"></use>
  </svg>
</li>
`;

class Breadcrumb extends HTMLElement {
  static get observedAttributes() {
    return ["page"];
  }

  constructor() {
    super();
    this.appendChild(templateBreadcrumb.content.cloneNode(true));
  }

  connectedCallback() {}

  attributeChangedCallback(name, _oldVal, newVal) {
    if (name == "page") {
      this.updatePage(newVal);
    }
  }

  updatePage(name) {
    const breadcrumbList = this.querySelector("#breadcrumb");
    const breadcrumbItem = templateBreadcrumbItem.content.cloneNode(true);
    const link = breadcrumbItem.querySelector("a");

    link.innerText = name;
    link.href = "#";

    breadcrumbList.appendChild(breadcrumbItem);
  }
}

customElements.define("ps-breadcrumb", Breadcrumb);
