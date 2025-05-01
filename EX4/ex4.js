let seconds = 0;
let minutes = 0;
let hours = 0;
let isPaused = true;
let interval;

function play() {
    if(isPaused) {
        isPaused = false;
        interval = setInterval(refresh, 1000);
    }
}

function stop() {
    isPaused = true;
    clearInterval(interval);
}

function refresh() {
    if(!isPaused) {
        seconds++;
        if(seconds >= 60) {
            seconds = 0;
            minutes++;
            if(minutes >= 60) {
                minutes = 0;
                hours++;
                if(hours >= 24) {
                    hours = 0;
                }
            }
        }
        updateDisplay();
    }
}

function updateDisplay() {
    const formattedTime = 
        hours.toString().padStart(2, '0') + ":" + 
        minutes.toString().padStart(2, '0') + ":" + 
        seconds.toString().padStart(2, '0');
    document.getElementById("timer").textContent = formattedTime;
}

// Optional reset function
function reset() {
    stop();
    seconds = minutes = hours = 0;
    updateDisplay();
}
