const clock = document.getElementById("clock");
const startBtn = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapList = document.getElementById("lapList");
let milliseconds = 0, seconds = 0, minutes = 0;
let timer;

startBtn.addEventListener('click',startStopWatch);
pauseButton.addEventListener('click',pauseStopWatch);
resetButton.addEventListener('click',resetStopWatch);
lapBtn.addEventListener('click',lapStopWatch);

function startStopWatch(){
    if(!timer){
    timer = setInterval(() =>{
        milliseconds +=10;
        if(milliseconds === 1000){
            milliseconds = 0;
            seconds++
        }
        if(seconds === 60){
            seconds = 0;
            minutes++
        }

        clock.innerText = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${(milliseconds /10 ).toString().padStart(2,"0")}`;
    },10);

    }
};

function pauseStopWatch(){
    clearInterval(timer)
    timer = null;

}

function resetStopWatch(){
    clearInterval(timer);
    timer = null;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    clock.innerText = "00:00:00";
    lapList.innerHTML = "";

}

function lapStopWatch(){
    lapTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${(milliseconds /10 ).toString().padStart(2,"0")}`;
    const li = document.createElement("li");
    li.textContent = lapTime;

    lapList.appendChild(li);
}