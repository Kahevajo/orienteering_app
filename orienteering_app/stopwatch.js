var h1
var seconds = 0
var minutes = 0
var hours = 0
var t;

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

var timer = function() {
    t = setTimeout(add, 1000);
}

var start = function() {
    timer();
}

var stop = function() {
    clearTimeout(t);
}

var clear = function() {
    console.log("CLEAR")
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}