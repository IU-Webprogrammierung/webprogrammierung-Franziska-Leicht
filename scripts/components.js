class TitlebarComponent extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.innerHTML = await fetch('../components/titlebar.html').then(r => r.text());
    }
}

class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.innerHTML = await fetch('../components/footer.html').then(r => r.text());
    }
}

customElements.define("titlebar-component", TitlebarComponent);
customElements.define("footer-component", FooterComponent);