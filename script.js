const daysEl =  document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondEl = document.getElementById('second');

const newYears = '1 JAN 2022';

function countdown(){

    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const seconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(seconds /86400);
    const hours = Math.floor(seconds/3600) % 24;
    const minutes = Math.floor(seconds/60) % 60;
    const sec = Math.floor(seconds) % 60;
    console.log(days,hours,minutes,sec);
    

     daysEl.innerHTML =formatTime(days);
     hoursEl.innerHTML=formatTime(hours);
     minsEl.innerHTML = formatTime(minutes);
     secondEl.innerHTML =formatTime(sec);
    
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : time ;

}

countdown();
setInterval(countdown,1000);


/* 

 60sec = 1min ==> 1sec = 1/24*60*60 day
 60min = 1hr  ==> 1min = 1/24*60 day
 24hr = 1day ==> 1hr = 1/24 day

*/
