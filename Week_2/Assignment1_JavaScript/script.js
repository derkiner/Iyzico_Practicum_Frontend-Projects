// variables 
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const clock = document.querySelector(".clock");
let info = document.querySelector("#myName");


// date set-up
function date() {
  let date = new Date().toLocaleString("tr-TR");
  document.getElementById("myClock").innerHTML = date;
}


// disabled prompt code - when it is active, it will welcome the visitor with his/her name.)
/* let yourName = prompt("Please enter your name!");
info.innerHTML += `${yourName}`;
 */


/* clock set-up */
function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;

  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}



/* clock ripple effect arrangement */
let ripple;

// update every 1s
setInterval(setDate, 1000);

// DOM manipulation & event listeners
clock.addEventListener("mouseenter", (e) => {
  const left = e.clientX - e.target.getBoundingClientRect().left;
  const top = e.clientY - e.target.getBoundingClientRect().top;

  ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = `${left}px`;
  ripple.style.top = `${top}px`;
  clock.prepend(ripple);
});

clock.addEventListener("mouseleave", () => {
  clock.removeChild(ripple);
});





