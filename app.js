const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const mileSeconds = document.getElementById('mile-seconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');


// stopBtn.addEventListener('click', () => {
//     mileSeconds.innerText = mileSeconds.innerText;
//     seconds.innerText = seconds.innerText;
//     minutes.innerText = minutes.innerText;
//     mileSeconds.innerText = mileSeconds.innerText;
//     clearInterval();
// })


startBtn.addEventListener('click', () => {
    setTime(mileSeconds,1);
    setTime(seconds,1000);
    setTime(minutes,60000);
    setTime(hours,3600000);
    // setInterval(() => {
    //     mileSeconds.innerText++
    //     if(mileSeconds.innerText === '100'){
    //         mileSeconds.innerText = '00';
    //     }
    // }, 1);
    // setInterval(() => {
    //     seconds.innerText++;
    //     if(seconds.innerText.length === 1){
    //         seconds.innerText = '0'+ seconds.innerText;
    //     }
    //     if(seconds.innerText === '60'){
    //         seconds.innerText = '00';
    //     }
    // }, 1000);
    // setInterval(() => {
    //     minutes.innerText++;
    //     if(minutes.innerText.length === 1){
    //         minutes.innerText = '0'+ minutes.innerText;
    //     }
    //     if(minutes.innerText === '60'){
    //         minutes.innerText = '00';
    //     }
    // }, 60000);
    // setInterval(() => {
    //     hours.innerText++;
    //     if(hours.innerText === '24'){
    //         hours.innerText = '00';
    //     }
    // }, 3600000);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
});

const setTime = (unit,count) => {
    let limit;
    setInterval(() => {
        unit.innerText++;
        if(unit.innerText.length === 1){
            unit.innerText = '0'+ unit.innerText;
        }
        if(unit.innerText === limit){
            unit.innerText = '00';
        }
    }, count);
    // if(unit === mileSeconds){
    //     limit = '100';
    // }
    // else if(unit === seconds || unit === minutes){
    //     limit = '60';
    // }
    // else{
    //     limit = '24';
    // }
    unit === seconds || minutes ? limit = '60' : unit === mileSeconds ? limit = '100' : limit = '24';
}