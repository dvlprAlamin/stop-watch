const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const mileSeconds = document.getElementById('mile-seconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

startBtn.addEventListener('click', () => {
    setTime(mileSeconds, 1);
    setTime(seconds, 1000);
    setTime(minutes, 60000);
    setTime(hours, 3600000);
});

const setTime = (unit, count) => {
    let limit;
    const update = () => {
        unit.innerText++;
        unit.innerText.length === 1 && (unit.innerText = '0' + unit.innerText);
        unit.innerText === limit && (unit.innerText = '00');
    }
    const interval = setInterval(update, count);
    unit === seconds || minutes ? limit = '60' : unit === mileSeconds ? limit = '100' : limit = '24';
    stopBtn.addEventListener('click', () => clearInterval(interval));
}

const toggleBtn = () => {
    startBtn.classList.toggle('d-none') != stopBtn.classList.toggle('d-none');
}