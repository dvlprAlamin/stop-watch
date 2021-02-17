const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const centiSeconds = document.getElementById('centi-seconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');



startBtn.addEventListener('click', () => {
    const interval = setInterval(() => {
        centiSeconds.innerText++;
        
        centiSeconds.innerText > 99 && (centiSeconds.innerText = '00') && seconds.innerText++;
        seconds.innerText > 59 && (seconds.innerText = '00') && minutes.innerText++;
        minutes.innerText > 59 && (minutes.innerText = '00') && hours.innerText++;

        centiSeconds.innerText.length === 1 && (centiSeconds.innerText = '0' + centiSeconds.innerText);
        seconds.innerText.length === 1 && (seconds.innerText = '0' + seconds.innerText);
        minutes.innerText.length === 1 && (minutes.innerText = '0' + minutes.innerText);
        hours.innerText.length === 1 && (hours.innerText = '0' + hours.innerText);
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

const toggleBtn = () => startBtn.classList.toggle('d-none') != stopBtn.classList.toggle('d-none');

