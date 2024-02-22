const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const searchEl = document.getElementById("search");
const buttonEl = document.getElementById("button");



let targetDate = "01-01-2025";

function countDown(targetDate){
    const targetDateObj = new Date(targetDate);
    const currentDate = new Date();

    const totalSeconds = (targetDateObj - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const  minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML  = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

buttonEl.addEventListener("click", function(){
    const userInput = searchEl.value;
    const userInputFormatted = userInput.split("-").reverse().join("-");
    const targetDateObj = new Date(userInputFormatted);
    const currentDate = new Date();

    if (targetDateObj < currentDate){
        alert("Please input a date in the future.");
        return;
    }

    targetDate = userInputFormatted;
    
    countDown(targetDate);

});



countDown(targetDate);
setInterval(() => {
    countDown(targetDate)
}, 1000);