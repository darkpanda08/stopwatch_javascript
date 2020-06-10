var ms = 0, sec = 0, mins = 0;
var timer;

var stopwatchDisp = document.getElementById('counter');
var lapsDisp = document.querySelector('.laps');

function start() {
    if(!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    stopwatchDisp.innerText = getTimer();
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
    stopwatchDisp.innerText = getTimer();
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
        var list = document.createElement('li');
        list.className += "list-group-item d-flex justify-content-between align-items-center";
        list.innerText = getTimer();
        lapsDisp.appendChild(list);
    }
}

function resetLaps() {
    lapsDisp.innerHTML = '';
}