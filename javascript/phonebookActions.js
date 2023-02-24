const spanElementOffice = document.querySelector('.infoSpanOne');
const spanElementFloor = document.querySelector('.infoSpanTwo');
const spanElementInstall = document.querySelector('.infoSpanThree');
const spanElementContractor = document.querySelector('.infoSpanFour');
const spanElementCash = document.querySelector('.infoSpanFive');
const spanElementStores = document.querySelector('.infoSpanSix');

document.addEventListener('DOMContentLoaded', addContractor);
document.addEventListener('DOMContentLoaded', addStores);
document.addEventListener('DOMContentLoaded', addInstall);
document.addEventListener('DOMContentLoaded', addOffice);
document.addEventListener('DOMContentLoaded', addFloor);
document.addEventListener('DOMContentLoaded', addCash);

function addCash() {
 cash.forEach((user) => {
  const spanElementTwo = document.createElement('span');
  spanElementTwo.setAttribute('class', 'infoLineSpan');
  const pElementOne = document.createElement('p');
  pElementOne.textContent = user.name;
  const pElementTwo = document.createElement('p');
  pElementTwo.textContent = user.telephone;
  spanElementTwo.appendChild(pElementOne);
  spanElementTwo.appendChild(pElementTwo);
  spanElementCash.appendChild(spanElementTwo);
 });
};

function addOffice() {
 office.forEach((user) => {
  const spanElement = document.createElement('span');
  spanElement.setAttribute('class', 'infoLineSpan');
  const pElementOne = document.createElement('p');
  pElementOne.textContent = `${user.name} - ${user.role}`;
  const pElementTwo = document.createElement('p');
  pElementTwo.textContent = user.telephone;
  spanElement.appendChild(pElementOne);
  spanElement.appendChild(pElementTwo);
  spanElementOffice.appendChild(spanElement);
 });
};

function addFloor() {
 floor.forEach((user) => {
  const spanElementTwo = document.createElement('span');
  spanElementTwo.setAttribute('class', 'infoLineSpan');
  const pElementOne = document.createElement('p');
  pElementOne.textContent = user.name;
  const pElementTwo = document.createElement('p');
  pElementTwo.textContent = user.telephone;
  spanElementTwo.appendChild(pElementOne);
  spanElementTwo.appendChild(pElementTwo);
  spanElementFloor.appendChild(spanElementTwo);
 });
};

function addInstall() {
 install.forEach((user) => {
  const spanElementTwo = document.createElement('span');
  spanElementTwo.setAttribute('class', 'infoLineSpan');
  const pElementOne = document.createElement('p');
  pElementOne.textContent = `${user.name} - ${user.role}`;
  const pElementTwo = document.createElement('p');
  pElementTwo.textContent = user.telephone;
  const pElementThree = document.createElement('p');
  spanElementTwo.appendChild(pElementOne);
  spanElementTwo.appendChild(pElementTwo);
  spanElementInstall.appendChild(spanElementTwo);
 });
};

function addStores() {
 stores.forEach((user) => {
  const spanElementTwo = document.createElement('span');
  spanElementTwo.setAttribute('class', 'infoLineSpan');
  const pElementOne = document.createElement('p');
  pElementOne.textContent = user.name;
  const pElementTwo = document.createElement('p');
  pElementTwo.textContent = user.telephone;
  spanElementTwo.appendChild(pElementOne);
  spanElementTwo.appendChild(pElementTwo);
  spanElementStores.appendChild(spanElementTwo);
 });
};

function addContractor() {
 contractor.forEach((user) => {
  const spanElementTwo = document.createElement('span');
  spanElementTwo.setAttribute('class', 'infoLineSpan');
  const pElementOne = document.createElement('p');
  pElementOne.textContent = `${user.name} - ${user.role}`;
  const pElementTwo = document.createElement('p');
  pElementTwo.textContent = user.telephone;
  spanElementTwo.appendChild(pElementOne);
  spanElementTwo.appendChild(pElementTwo);
  spanElementContractor.appendChild(spanElementTwo);
 });
};