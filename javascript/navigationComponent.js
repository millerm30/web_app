"use strict"

class NavigationComponent extends HTMLElement {
 constructor() {
  super();
  const navTemplate = document.createElement('template');
  navTemplate.innerHTML = `
    <style>
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    #navBar {
     list-style-type: none;
     display: flex;
     justify-content: end;
     background-color: #009370;
    }
    #navBar ul {
     list-style: none;
    }
    #navBar ul li {
     position: relative;
     display: inline-block;
    }
    #navBar ul li a {
     display: block;
     padding: 5px 0px;
     color: #000;
     text-decoration: none;
    }
    nav ul li:hover > .dropMenu {
     display: flex;
    }
    .dropMenu {
     display: none;
     flex-direction: column;
     justify-content: end;
     position: absolute;
     top: 100%;
     right: 0;
     z-index: 1;
     background-color: #fff;
     padding: 10px 0px 0px 0px;;
     min-width: 250px;
     text-align: right;
    }
    .dropMenu a {
     display: block;
     padding: 5px 0px;
     color: #000;
     text-decoration: none;
    }
    #navBar li {
     padding: 10px;
     position: relative;
    }
    #navBar a {
     text-decoration: none;
     text-transform: uppercase;
     padding: 0 6px;
     color: #fff; 
    }
    #navBar li:hover::after {
     transform: scaleX(1);
     transform-origin: bottom center;
    }
    #navBar li::after {
     content: "";
     position: absolute;
     width: 100%;
     transform: scaleX(0);
     height: 4px;
     bottom: 0;
     left: 0;
     background-color: rgb(255,205,0);
     transform-origin: bottom center;
     transition: transform 0.25s ease-out;
    }
    </style>
    <nav id="navmenu">
     <ul id="navBar">
      <li><a href="index.html">Home</a></li>
      <li><a href="customers.html">Customers</a></li>
      <li><a>Services</a>
       <ul class="dropMenu">
        <li><a href="addcustomer.html">Add Customer</a></li>
        <li><a href="phonebook.html">Store Contacts</a></li>
        <li><a href="calendar.html">Calendar</a></li>
        <li><a href="delivery_zones.html">Delivery Zones</a></li>
       </ul>
      </li>
     </ul>
    </nav>
   `;
   this.attachShadow({ mode: 'open' }).appendChild(navTemplate.content.cloneNode(true));
 }
};

customElements.define('navigation-component', NavigationComponent);

