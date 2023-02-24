"use strict"

const formElement = document.querySelector('.myForm');
const nameInputElement = document.querySelector('#nameInput');
const addressInputElement = document.querySelector('#addressInput');
const phoneInputElement = document.querySelector('#phoneInput');
const emailInputElement = document.querySelector('#emailInput');
const textAreaElement = document.querySelector('#textareaInput');
const messageElement = document.querySelector('#message');
const formSubmitBtn = document.querySelector('#submitBtn');

function uuid() {
 const numbers = Math.random(20);
 return numbers.toFixed(20).slice(2)
};

formElement.addEventListener('submit', errorMessage);

function errorMessage() {
 setTimeout(() => messageElement.innerHTML = '', 5000);
};

formElement.addEventListener('submit', function(e) {
 e.preventDefault();
 if (nameInputElement.value === "" || addressInputElement.value === "" || phoneInputElement.value === "" || textAreaElement.value === "" || emailInputElement === "") {
  messageElement.innerHTML = 'Please enter all fields!';
  return;
 }
 let users = JSON.parse(localStorage.getItem("users")) || [];
 let user = {id: Number(uuid()), name: nameInputElement.value, address: addressInputElement.value, phone: phoneInputElement.value, email: emailInputElement.value, products: textAreaElement.value};
 users.push(user);
 localStorage.setItem("users", JSON.stringify(users));
 let originalButtonText = formSubmitBtn.textContent;
 formSubmitBtn.textContent = 'Adding User...';
 setTimeout(function() {
  formSubmitBtn.textContent = originalButtonText;
  formElement.reset();
  messageElement.innerHTML = `${user.name} added!`;
 }, 2000);
});

