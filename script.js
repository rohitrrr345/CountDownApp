const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const cins=document.getElementById('cin');
const btns=document.getElementById('btn')
const format=(time)=>{
    return time<10? `0${time}`:time;
}
const update=(deadline)=>{
    const currentTime=new Date();
    const diff= Math.abs(currentTime-deadline);
    //csls
    let calcuSecs=Math.floor(diff/1000)%60;
    let calMin=Math.floor(diff/1000/60)%60;
    let calHour=Math.floor(diff/1000/60/60)%24;
    let calDays=Math.floor(diff/1000/60/60/24);
    days.textContent=format(calDays);
    hours.textContent=format(calHour);
    minutes.textContent=format(calMin);
    seconds.textContent=format(calcuSecs);//logic to be continued
   
   
   
   




}

const countDown=(targetDate)=>{
    setInterval(()=>update(targetDate),1000)
   }
   
 btns.addEventListener('click',()=>{
    const target=new Date(cins.value);
    countDown(target)
    
 })

