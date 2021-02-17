const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const centiSeconds = document.getElementById('centi-seconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

// two digit updater
const isTwoDigit = unit => unit.innerText.length === 1 && (unit.innerText = '0' + unit.innerText);

// reset unit after reached max limit
const resetUnit = (unit, limit) => unit.innerText > limit && (unit.innerText = '00') && unit.previousElementSibling.innerText++;

// start button event handler
startBtn.addEventListener('click', () => {
    const setTime = () => {
        centiSeconds.innerText++;
        resetUnit(centiSeconds, 99)
        resetUnit(seconds, 59)
        resetUnit(minutes, 59)
        isTwoDigit(centiSeconds);
        isTwoDigit(seconds);
        isTwoDigit(minutes);
        isTwoDigit(hours);
    }
    const interval = setInterval(setTime, 10);
    // stop button event handler
    stopBtn.addEventListener('click', () => clearInterval(interval));
})

// reset button event handler
const resetAll = () => {
    centiSeconds.innerText = seconds.innerText = minutes.innerText = hours.innerText = '00';
    stopBtn.className === '' && stopBtn.click();
}

// Start and Stop button toggler
const toggleBtn = () => startBtn.classList.toggle('d-none') !== stopBtn.classList.toggle('d-none');
