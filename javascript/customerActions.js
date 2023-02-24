"use strict"

const divElement = document.querySelector('#data');
const messageElement = document.querySelector('#message');
const noUserElement = document.querySelector('#noUsersMessage');
const dataElement = document.querySelector('#data');
const spinnerElement = document.querySelector('#spinner');

document.addEventListener('DOMContentLoaded', getUsersLocalStorage);
document.addEventListener('click', errorMessage);

function errorMessage() {
 setTimeout(() => messageElement.innerHTML = '', 5000);
};

function deleteUser(e) {
 const buttonElement = event.target;
 const userContainer = buttonElement.parentElement.parentElement; 
 const userId = userContainer.getAttribute('data-user-id');
 let users = JSON.parse(localStorage.getItem("users")) || [];
 let name = '';
 users = users.filter(user => {
  if (parseInt(user.id) === parseInt(userId)) {
   name = user.name
   return false;
  }
  return true
 });
 dataElement.style.display = 'none';
 spinnerElement.style.display = 'block';
 setTimeout(function() {
  spinnerElement.style.display = 'none';
  dataElement.style.display = 'grid';
  messageElement.innerHTML = `User ${name} deleted!`;
 }, 2000);
 localStorage.setItem("users", JSON.stringify(users));
 userContainer.remove();
 getUsersLocalStorage();
};

function getUsersLocalStorage() {
 document.querySelectorAll('.userContainer').forEach((userElement) => userElement.remove());
 
 let users = JSON.parse(localStorage.getItem("users")) || [];
 if (users.length === 0) {
  noUserElement.innerText += "No users found!";
  return
 }
 users.forEach((user) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'userContainer');
  newDiv.setAttribute('data-user-id', user.id);
  divElement.appendChild(newDiv);
  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('id', 'deleteButtonContainer');
  buttonDiv.innerHTML = `<button type="submit" id="deleteButton" class="deleteButton" onclick="deleteUser(this)">X</button>`;
  newDiv.appendChild(buttonDiv);
  const userInfoDiv = document.createElement('div');
  userInfoDiv.setAttribute('id', 'userInfoContainer');
  const newHeadingThree = document.createElement('h3');
  newHeadingThree.innerHTML += user.name;
  userInfoDiv.appendChild(newHeadingThree);
  const newUlElement = document.createElement('ul');
  const newLiOne = document.createElement('li');
  newLiOne.innerHTML += user.address;
  newUlElement.appendChild(newLiOne);
  userInfoDiv.appendChild(newUlElement)
  const newLiTwo = document.createElement('li');
  newLiTwo.innerHTML += user.phone;
  newUlElement.appendChild(newLiTwo);
  const newLiThree = document.createElement('li');
  newLiThree.innerHTML += user.email;
  newUlElement.appendChild(newLiThree);
  const newLiFour = document.createElement('li');
  newLiFour.innerHTML += user.products;
  newUlElement.appendChild(newLiFour);
  newDiv.appendChild(userInfoDiv);
 });
};