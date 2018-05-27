var h1
var seconds = 0
var minutes = 0
var hours = 0
var t;

// Add to timer, time found on internet so not optimized for our usecase.
var add = function() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    h1 = document.getElementById('time')
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}

// Add a timer.
var timer = function() {
    t = setTimeout(add, 1000);
}

// Start timer.
var start = function() {
    timer();
    document.getElementById("stopwatchFunc").style.display = "block";
    document.getElementById("hideClockButton").style.display = "block";
    document.getElementById("startOrCancel").style.display = "none";
    document.getElementById("hideClockButton").style.display = "block";

}

// Stop timer (pause time)
var stop = function() {
    clearTimeout(t);
    document.getElementById("startOrCancel").style.display = "block";
    document.getElementById("hideClockButton").style.display = "none";

}

// Cancel course button, restarts the course.
var cancel = function() {
    startOver();
    resetWatch();
    initMap();
}

// Reset the watch.
var resetWatch = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

// Does the stopping and resetting when done with the course.
var done = function() {  
    resetMap();
    stop();
    resetWatch();
    initMap();
    document.getElementById("stopwatchFunc").style.display = "none";
}

