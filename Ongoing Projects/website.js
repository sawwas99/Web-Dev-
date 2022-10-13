//react component
'use strict'; 

//global variables
const e = React.createElement;

var seconds = 00;
var tens = 00;
var minutes = 00;
var hours = 00;
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var appendMinutes = document.getElementById("minutes");
var appendHours = document.getElementById("hours");
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var buttonSkip = document.getElementById('button-skip')
var myInterval;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

window.onload = function () {

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
      appendTens.innerHTML = "0" + 0;
      appendSeconds.innerHTML = "0" + 0;
      appendMinutes.innerHTML = "0" + 0;
      appendHours.innerHTML = "0" + 0;

  }

  buttonSkip.onclick = function () {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
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
      if (seconds > 60){
          minutes++;
          appendMinutes.innerHTML = 
          appendMinutes.innerHTML = "0" + minutes;
          seconds = 0;
          appendSeconds.innerHTML = "0" + 0;
      }
      if (minutes > 9) {
          appendMinutes.innerHTML = minutes;
      }
      if (minutes > 60){
          hours++;
          appendHours.innerHTML = "0" + hours;
          minutes = 0;
          appendMinutes.innerHTML = "0" + 0;
      }

  }

}