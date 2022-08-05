var seconds=document.getElementById('seconds');
var milliseconds=document.getElementById('milliseconds');
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
var sec = 0;
var millisec =0;
const timer=()=>{
    millisec++;

    if(millisec<9){
        milliseconds.innerHTML="0"+millisec;
    }
    if(millisec>9){
        milliseconds.innerHTML=millisec;
    }
}
