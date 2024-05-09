const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const format=(time)=>{
    return time<10? `0${time}`:time;
}
const update=(deadline)=>{
    const currentTime=new Date();
    const diff=currentTime-deadline;
    //csls
    let calcuSecs=Math.floor(diff/1000)%60;
    let calMin=Math.floor(diff/1000/60)%60;
    let calHour=Math.floor(diff/1000/60/60)%24;
    let calDays=Math.floor(diff/1000/60/60/24);
    days.textContent=format(calDays);
    hours.textContent=format(calHour);
    minutes.textContent=format(calMin);
    seconds.textContent=format(calcuSecs);
   
   
   
   




}

const countDown=(targetDate)=>{
 setInterval(()=>update(targetDate),1000)
}
const target=new Date("june 01 2023 07:00");
countDown(target)
