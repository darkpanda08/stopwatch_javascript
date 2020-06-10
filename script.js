var ms = 0, sec = 0, mins = 59;
var timer;

var stopwatchDisp = document.querySelector('.stopwatch');
var lapsDisp = document.querySelector('.laps');

function start() {
    if(!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    stopwatchDisp.textContent = getTimer();
    ms++;

    if(ms == 100) {
        ms = 0;
        sec++;
    }

    if (sec == 60) {
        sec = 0;
        mins++;
    }
    
    if (mins == 60) {
        stopTimer();
    }
}

function pause() {
    stopTimer();
}

function stop() {
    stopTimer();
    ms = 0;
    sec = 0;
    mins = 0;
    stopwatchDisp.textContent = getTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function getTimer() {
    return (mins < 10 ? "0" + mins : mins) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (ms < 10 ? "0" + ms : ms);
}

function restart() {
    if(timer) {
        stop();
        start();
    }
}

function lap() {
    if(timer) {
        var li = document.createElement('li');
        li.innerText = getTimer();
        lapsDisp.appendChild(li);
    }
}

function resetLaps() {
    lapsContainer.innerHTML = '';
}