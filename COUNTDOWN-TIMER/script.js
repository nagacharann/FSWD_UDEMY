const days=document.getElementById("days")
const hours=document.getElementById("hours")
const min=document.getElementById("min")
const secs=document.getElementById("secs")
const formatTome=(time)=>{
    return time<10?`0${time}`:time;
}
const  updateCountDown= (deadline)=>{
    const currentTime=new Date();
    const TimeDifference=deadline - currentTime
    let calcsec=Math.floor(TimeDifference/1000)%60;
    let calcmin=Math.floor(TimeDifference/1000/60)%60;
    let calchour=Math.floor(TimeDifference/1000/60/60) %24 ;
    let calcday = Math.floor(TimeDifference / (1000 * 60 * 60 * 24));

days.textContent=formatTome(calcday)
hours.textContent=formatTome(calchour)
min.textContent=formatTome(calcmin)
secs.textContent=formatTome(calcsec);


}

const countDown=(targetdate)=>{

    setInterval(()=> updateCountDown(targetdate),1000);
}



const targetdate=new Date("October 20 2023 06:30")
countDown(targetdate)


window.onload=()=>{
document.querySelector('#Calculate').onclick=calculate
}

function calculate (){
    const date=document.querySelector('#date').value;
    const time=document.querySelector('#time').value;
    const stop=document.querySelector('#Stop');

    const endtime=new Date(date+ " "+ time)
   const interval= setInterval(()=>calculateTime(endtime),1000)

   stop.addEventListener('click',()=>{
    clearInterval(interval)
   })

}

function calculateTime(endtime){
    const currentTime=new Date();
    const days=document.getElementById("Calculatedays")
const hours=document.getElementById("Calculatehours")
const min=document.getElementById("Calculatemin")
const secs=document.getElementById("Calculatesecs")
    if(endtime>currentTime){
        const timeremain=(endtime-currentTime)/1000;
        Calculatedays.textContent=Math.floor(timeremain / (60 * 60 * 24));
        Calculatehours.textContent=Math.floor((timeremain/(60*60)%24)) ;
        Calculatemin.textContent=Math.floor((timeremain/60)%60);
        Calculatesecs.textContent=Math.floor(timeremain%60);

    }
    else{
        Calculatedays.textContent=0
        Calculatehours.textContent=0
        Calculatemin.textContent=0
        Calculatesecs.textContent=0
    }
}