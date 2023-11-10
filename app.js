// ================== first step get the id ===========================
var start = document.getElementById("start");
var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var counter = document.getElementById("counter");


// =================== second step variable save =======================
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

// ================== third step make function starttimer ===============

function starttimer() {
    timer = true;
    start.disabled = true;
    stopwatch()
}

// ================= fourth step make function of stoptimer ==============

function stoptimer() {
    timer = false;
    start.disabled = false;

}

// ================= fifth step make function of all reset =================

function resettimer() {
    timer = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    counter.innerHTML = "00";
    hr.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
}

//  ================= sixth step make main function of all timer work ===================
 
function stopwatch() {
    if (timer) {
        milliseconds++;

        if (milliseconds == 100) {
            seconds++;
            milliseconds = 0;
        }

        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes == 60) {
            hours++;
            minutes = 0;
            seconds = 0;
        }
        var hrString = hours;
        var minString = minutes;
        var secString = seconds;
        var countString = milliseconds;

        if (hours < 10) {
           hrString = "0" + hrString;
        }

        if (minutes < 10) {
            minString = "0" + minString;
        }

        if (seconds < 10) {
            secString = "0" + secString;
        }

        if (milliseconds < 10) {
            countString = "0" + countString;
        }

        hr.innerHTML = hrString;
        min.innerHTML = minString;
        sec.innerHTML = secString;
        counter.innerHTML = countString;
        setTimeout(stopwatch, 10);
    }

}

