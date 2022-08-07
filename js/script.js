const myTime = document.querySelector(".time");
const myDate = document.querySelector(".date");
const greet = document.querySelector(".greeting");


function showTime() {
    const newDate = new Date();
    const currentTime = newDate.toLocaleTimeString();
    myTime.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    showGreeting();
}

showTime();

function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('de-De', options);
    myDate.textContent = currentDate;
}
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay = '';
    if(hours > 0 && hours <= 6) {
        timeOfDay = "night";
    } else if (hours > 6 && hours <= 12) {
        timeOfDay = "morning";
    } else if(hours > 12 && hours <= 18) {
        timeOfDay = "day";
    } else if (hours > 18 && hours <= 24) {
        timeOfDay = "evening";
    }
    return timeOfDay;
}
function showGreeting() {
    const timeOfDay = getTimeOfDay();
    greet.textContent = `Good ${timeOfDay}`;
}


let userName = document.querySelector(".name");

function setLocalStorage() {
    localStorage.setItem('name', userName.value);
  }
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);