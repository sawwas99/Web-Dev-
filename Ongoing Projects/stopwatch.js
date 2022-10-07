window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var myInterval;

    buttonStart.onclick = function () { //clearInterval built in function, clears timer
        //myInterval uses setInterval, builtin func, to intialize a timer for every 10 seconds
        clearInterval(myInterval); //https://www.w3schools.com/jsref/met_win_clearinterval.asp
        myInterval = setInterval(startTimer, 10); //https://www.w3schools.com/jsref/met_win_setinterval.asp
    }

    buttonStop.onclick = function () {
        clearInterval(myInterval);
    }

    buttonReset.onclick = function () {
        clearInterval(myInterval);
    }

    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }


}