class BackButton extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="back-button">
          <a href = "index.html">
            <img src="NAV_IMAGES/back_button_big.png" alt="back-button">
          </a>
        </div>
        `
    }
}

customElements.define('back-button', BackButton)