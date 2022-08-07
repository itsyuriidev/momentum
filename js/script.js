const myTime = document.querySelector(".time");
const myDate = document.querySelector(".date");



function showTime() {
    const newDate = new Date();
    const currentTime = newDate.toLocaleTimeString();
    myTime.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
}

showTime();

function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('de-De', options);
    myDate.textContent = currentDate;
}

