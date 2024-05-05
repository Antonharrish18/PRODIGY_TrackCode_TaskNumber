let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;
let laps = [];

function formatTime(time) {
let hours = Math.floor(time / 3600);
let minutes = Math.floor((time % 3600) / 60);
let seconds = time % 60;
return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
document.querySelector('.display').textContent = formatTime(elapsedTime);
}

function startTimer() {
if (!isRunning) {
startTime = Date.now() - elapsedTime * 1000;
timer = setInterval(function() {
elapsedTime = Math.floor((Date.now() - startTime) / 1000);
updateDisplay();
}, 1000);
isRunning = true;
}
}

function pauseTimer() {
if (isRunning) {
clearInterval(timer);
isRunning = false;
}
}

function resetTimer() {
pauseTimer();
elapsedTime = 0;
updateDisplay();
laps = [];
document.querySelector('.laps').textContent = '';
}

function lapTimer() {
laps.unshift(elapsedTime);
let lapItem = document.createElement('div');
lapItem.textContent = formatTime(elapsedTime);
document.querySelector('.laps').prepend(lapItem);
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lapTimer);
