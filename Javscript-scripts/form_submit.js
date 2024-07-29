"use strict";

/*
   CA2 Form Submit Javascript 
   Author: Muhammad Aril Bin Mohamed Iwan
   Date:   23 July 2023
   
   Filename: form_submit.js

*/



/* Table script*/

// Function to handle the form submission
document.getElementById("bootstrap_form").addEventListener("submit", function (event) {
   event.preventDefault(); // Prevent form submission to avoid page reload

   // Get form data
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const visitDate = document.getElementById("visit").value;
   const favPage = document.getElementById("favPage").value;
   const rating = document.getElementById("rating").value;
   const comments = document.getElementById("comments").value;

   // Create table row with the collected data
   const newRow = document.createElement("tr");
   newRow.innerHTML = `
     <td>${name}</td>
     <td>${email}</td>
     <td>${visitDate}</td>
     <td>${favPage}</td>
     <td>${rating}</td>
     <td>${comments}</td>
   `;

   // Append the row to the table body
   const tableBody = document.getElementById("feedbackTableBody");
   tableBody.appendChild(newRow);

   // Reset the form after submission
   document.getElementById("bootstrap_form").reset();
});