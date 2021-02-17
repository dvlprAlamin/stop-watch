const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const centiSeconds = document.getElementById('centi-seconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');


const isTwoDigit = unit => unit.innerText.length === 1 && (unit.innerText = '0' + unit.innerText);
const resetUnit = (unit,limit) => unit.innerText > limit && (unit.innerText = '00') && unit.previousElementSibling.innerText++;


startBtn.addEventListener('click', () => {
    const interval = setInterval(() => {
        centiSeconds.innerText++;
        resetUnit(centiSeconds,99)
        resetUnit(seconds,59)
        resetUnit(minutes,59)
        isTwoDigit(centiSeconds);
        isTwoDigit(seconds);
        isTwoDigit(minutes);
        isTwoDigit(hours);
    }, 10);
    
    stopBtn.addEventListener('click', () => clearInterval(interval));

    resetBtn.addEventListener('click', () => {
        centiSeconds.innerText = '00';
        seconds.innerText = '00';
        minutes.innerText = '00';
        hours.innerText = '00';
        stopBtn.className === '' && stopBtn.click();
    });
})










// startBtn.addEventListener('click', () => {
//     setTime(centiSeconds,10);
//     setTime(seconds, 1000);
//     setTime(minutes, 60000);
//     setTime(hours, 3600000);
// });

// const setTime = (unit, count) => {
//     let limit;
//     const interval = setInterval(() => {
//         unit.innerText++;
//         unit.innerText.length === 1 && (unit.innerText = '0' + unit.innerText);
//         unit.innerText === limit && (unit.innerText = '00')
//     }, count);
//     unit === seconds || minutes ? limit = '60' : unit === centiSeconds ? limit = '100' : limit = '24';
//     stopBtn.addEventListener('click', () => clearInterval(interval));
//     resetBtn.addEventListener('click', () => {
//         centiSeconds.innerText = '00';
//         seconds.innerText = '00';
//         minutes.innerText = '00';
//         hours.innerText = '00';
//         stopBtn.className === '' && stopBtn.click();
//     });
// };

const toggleBtn = () => startBtn.classList.toggle('d-none') !== stopBtn.classList.toggle('d-none');

