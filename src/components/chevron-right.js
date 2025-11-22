const template = document.createElement("template");

template.innerHTML = `
<svg class="sprite sprite--dark sprite--normal" role="img">
  <use href="/public/img/sprite.svg#icon-chevron-right"></use>
</svg>
`;

class ChevronRight extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("chevron-right", ChevronRight);
