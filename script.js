var seconds=document.getElementById('seconds');
var milliseconds=document.getElementById('milliseconds');
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
var sec = 0;
var millisec =0;
var timeInterval;
const timer=()=>{
    millisec++;

    if(millisec<9){
        milliseconds.innerHTML="0"+millisec;
    }
    if(millisec>9){
        milliseconds.innerHTML=millisec;
    }
    if(millisec>99){
        sec++;
        seconds.innerHTML ="0"+sec;
        millisec=0;
        milliseconds.innerHTML="0"+0;

    }
    if (sec>9){
        seconds.innerHTML=sec;
    }
}

//Start button
start.addEventListener('click',()=>{
    timeInterval=setInterval(timer,10);
})

//Stop button