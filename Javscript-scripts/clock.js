"use strict";

/*
   CA2 Clock Javascript 
   Author: Muhammad Aril Bin Mohamed Iwan
   Date:   23 July 2023
   
   Filename: clock.js

*/

/* Execute the function to run and display the countdown clock */
runClock();
setInterval(runClock, 1000);

/* Function to create and run the countdown clock */
function runClock() {
   /* Store the current date and time */
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("dateNow").innerHTML = dateStr + "<br/ >" + timeStr;

   /* Calculate the days until September 15 */
   var targetDate = new Date(currentDay.getFullYear(), 8, 15); // 8 represents September
   if (currentDay.getMonth() === 8 && currentDay.getDate() > 15) {
       targetDate.setFullYear(targetDate.getFullYear() + 1);
   }
   var daysLeft = (targetDate - currentDay) / (1000 * 60 * 60 * 24);

   /* Calculate the hours left in the current day */
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   /* Calulate the minutes and seconds left in the current hour */
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   /* Display the time left until September 15 */
   document.getElementById("day").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}