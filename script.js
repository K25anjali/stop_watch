let displayTime = document.getElementById("displayTime");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let addAnimation = document.getElementById("animation");
let timer=null;
let[seconds,minutes,hours] =[0,0,0];

function stopWatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h = hours<10 ? "0"+hours : hours;
    let m = minutes<10 ? "0"+minutes : minutes;
    let s = seconds<10 ? "0"+seconds : seconds;
    displayTime.innerHTML= `${h}:${m}:${s}`
}

// function to start watch 
function startWatch(){
if(timer!=null)
clearInterval(timer);
timer = setInterval(stopWatch, 1000);
addAnimation.classList.remove("no-animation");
addAnimation.classList.add("box");
}
start.addEventListener('click',startWatch );

//funtion to stop watch
function watchStop(){
    clearInterval(timer);
    addAnimation.classList.add("no-animation");
}
stop.addEventListener('click', watchStop );

//function to reset watch
function resetWatch(){
    clearInterval(timer);
    [seconds,minutes,hours] =[0,0,0];
    displayTime.innerHTML = "00:00:00";
    addAnimation.classList.remove("box");
}
reset.addEventListener('click', resetWatch);