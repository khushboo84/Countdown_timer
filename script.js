const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minsel = document.getElementById("mins");
const secsel = document.getElementById("secs");


const vacation = '28 Sept 2023';

function CountDown(){
  const vacationDate = new Date(vacation);
  const currentDate = new Date();
  const total = vacationDate - currentDate;
  const seconds = Math.floor( (total/1000) % 60 );
  const mins = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );


  // console.log(days, hours, mins, seconds);
daysel.innerHTML = days ;
hoursel.innerHTML = hours;
minsel.innerHTML = mins;
secsel.innerHTML = seconds;

}

CountDown();

setInterval(CountDown, 1000);
