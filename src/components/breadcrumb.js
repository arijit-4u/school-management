const breadCrumbStyle = document.createElement("template");

breadCrumbStyle.innerHTML = `
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
`;

class Breadcrumb extends HTMLElement {
  static get observedAttributes() {
    return ["path"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _oldVal, _newVal) {
    if (name == "page") {
      this.render();
    }
  }

  render() {
    const label = this.childNodes.item(0).textContent;
    const path = this.getAttribute("path") || "";
    const parts = path.split("/").filter(String);

    this.innerHTML = `
    <nav>
      <ul id="breadcrumb" class="breadcrumb">
        <li class="breadcrumb-link">
          <a href="/" class="text-small-extra-bold">Home</a>
          <chevron-right></chevron-right>
        </li>

        ${parts .slice(0, parts.length - 1) .map( (part, idx) => `
        <li class="breadcrumb-link">
          <a
            href="/${parts.slice(0, idx + 1).join(`/`)}"
            class="text-small-extra-bold"
            >${part.replace("-", " ")}</a
          >
          <chevron-right></chevron-right>
        </li>
        ` ) .join("")}

        <li class="breadcrumb-link">
          <span class="text-small-bold">${label}</span>
        </li>
      </ul>
    </nav>
    `;

    this.appendChild(breadCrumbStyle.content.cloneNode(true));
  }
}

customElements.define("ps-breadcrumb", Breadcrumb);
