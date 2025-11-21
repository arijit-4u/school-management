const templateSearch = document.createElement("template");

templateSearch.innerHTML = `
<section class="container section search">
  <form action="get" class="search-form-large">
    <input
      type="search"
      name="search-input"
      id="search-input"
      class="text-small"
      placeholder="Can’t Find What You’re Looking For?"
    />
    <button class="text-medium btn-submit">Search</button>
  </form>
</section>
`;

class Search extends HTMLElement {
  constructor() {
    super();
    this.appendChild(templateSearch.content.cloneNode(true));
  }
}

customElements.define("ps-search", Search);
