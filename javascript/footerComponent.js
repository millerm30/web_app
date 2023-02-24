"use strict"

class FooterComponent extends HTMLElement {
 constructor() {
  super();
  const template = document.createElement('template');
  template.innerHTML =
   `
    <style>
    * {
     box-sizing: border-box;
     padding: 0;
     margin: 0;
    }
    p {
     text-align: center;
     color: #fff;
     text-transform: uppercase;
    }
    </style>
    <p>Footer Information Goes Here</p>
   `;
   this.attachShadow({ mode: 'closed' }).appendChild(template.content.cloneNode(true));;
 }
};

customElements.define('footer-component', FooterComponent);

