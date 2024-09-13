class CustomFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
          © 2024 Powered by Joaquin's blood, sweat, and tears
        </footer>
        `
    }
}

customElements.define('custom-footer', CustomFooter)
