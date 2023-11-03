const time_el=document.querySelector('.watch .time');
const start_el=document.getElementById("start");
const stop_el=document.getElementById("stop");
const reset_el=document.getElementById("reset");

let seconds=0;
let intervals=null;

//event listener
start_el.addEventListener('click',start)
stop_el.addEventListener('click',stop)
reset_el.addEventListener('click',reset)
//update the timer
function timer()
{
    seconds++;
    //format the time

    let hrs=Math.floor(seconds/3600);
    let mins=Math.floor((seconds-(hrs*3600))/60);
    let secs=seconds%60;

    if(secs<10)
    {
        secs="0"+secs;
    }
    if(mins<10)
    {
        mins="0"+mins;
    }
    if(hrs<10)
    {
        hrs="0"+hrs;
    }

    time_el.innerText=`${hrs}:${mins}:${secs}`;

}

//start
function start()
{
    if(intervals)
    {
        return;
    }
    intervals=setInterval(timer,1000);
}
//stop
function stop()
{
    clearInterval(intervals)
    intervals=null;
}
//reset
function reset()
{
    stop();
    seconds=0;
    time_el.innerText="00:00:00"
}