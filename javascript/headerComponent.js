"use strict"

class HeaderComponent extends HTMLElement {
 constructor() {
  super();
  const headerTemplate = document.createElement('template');
  headerTemplate.innerHTML =
   `
    <style>
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    #logo {
     align-content: start;
     margin: 4px;
    }
    </style>
    <div id="logo">
     <a href="index.html"><img src="./images/logo.png" alt="Company Logo" width="100px"></a>
    </div>
   `;
   
   this.attachShadow({ mode: 'open' }).appendChild(headerTemplate.content.cloneNode(true));
 }
};

customElements.define('header-component', HeaderComponent);