"use strict"

const calendar = document.querySelector("#calendar");
 const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
 let date = new Date();
 let month = date.getMonth();
 let year = date.getFullYear();

 function renderCalendar() {
  let table = `
   <table>
    <thead>
     <tr>
      <th><button id="previous">Prev</button></th>
      <th colspan="5" id="tableHeader">${months[month]} ${year}</th>
      <th><button id="next">Next</button></th>
     </tr>
     <tr>
      <th>Sun</th>
      <th>Mon</th>
      <th>Tue</th>
      <th>Wed</th>
      <th>Thu</th>
      <th>Fri</th>
      <th>Sat</th>
     </tr>
    </thead>
    <tbody>
    `;

  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  let firstDay = new Date(year, month, 1).getDay();

  let date = 1;
   for (let i = 0; i < 6; i++) {
    table += "<tr>";
     for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
       table += "<td></td>";
      } else if (date > daysInMonth) {
      table += "<td></td>";
      } else {
      let className = "";
       if (
        date === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
       ) {className = "today";}
        table += `<td class="${className}">${date}</td>`;
         date++;
       }
      }
     table += "</tr>";
    }
   table += "</tbody></table>";
 calendar.innerHTML = table;
};

document.addEventListener("click", function(event) {
 if (event.target.id === "previous") {
  month--;
  if (month < 0) {
   month = 11;
   year--;
  }
  renderCalendar();
  } else if (event.target.id === "next") {
   month++;
   if (month > 11) {
    month = 0;
    year ++
   }
  renderCalendar();
 }
});

renderCalendar();