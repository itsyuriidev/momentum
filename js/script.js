const myTime = document.querySelector(".time");
const myDate = document.querySelector(".date");
const greet = document.querySelector(".greeting");
const slidePrev = document.querySelector(".slide-prev");
const slideNext = document.querySelector(".slide-next");

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
    const options = {weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('en-US', options);
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
        timeOfDay = "afternoon";
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
const body = document.querySelector(".body");
// body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";

function getRandomNum() {
    return Math.floor(Math.random() * 20);
}

let rundomNum = getRandomNum();

function setBg() {
    const timeOfDay = getTimeOfDay();
    bgNum = String(rundomNum).padStart(2,"0");
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    }
    
}


function getSlideNext() {
    rundomNum++;
    if(rundomNum > 20){
        rundomNum = 1;
    }
    setBg();
    console.log(rundomNum);
}

function getSlidePrev() {
    rundomNum--;
    if(rundomNum < 1) {
        rundomNum = 20;
    }
    
    setBg();
    console.log(rundomNum);
}

slideNext.addEventListener("click", getSlideNext);
slidePrev.addEventListener("click", getSlidePrev);