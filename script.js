var ms = 0, sec = 0, mins = 0, i=0;
var timer;
var paused;

var stopwatchDisp = document.getElementById('counter');
var lapsDisp = document.querySelector('.laps');
var lapHeading = document.getElementById('lapHeading');

lapHeading.style.display = "none";

function start() {
    if(!timer) {
        timer = setInterval(run, 10);
    }
    paused = false;
}

function run() {
    stopwatchDisp.innerHTML = getTimer();
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
    paused = true;
}

function stop() {
    stopTimer();
    paused = false;
    ms = 0;
    sec = 0;
    mins = 0;
    i = 0;
    stopwatchDisp.innerHTML = getTimer();
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
    if(timer || paused) {
        if (lapHeading.style.display === 'none') {
            lapHeading.style.display = "block";
        }
        i++;
        var list = document.createElement('li');
        list.className += "list-group-item d-flex justify-content-between align-items-center";
        list.innerHTML = i + ") " + getTimer();
        lapsDisp.appendChild(list);
    }
}

function resetLaps() {
    lapsDisp.innerHTML = '';
    i = 0;
}