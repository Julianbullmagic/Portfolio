
function moveHands() {
  with (new Date()) {
    h = 30 * ((getHours() % 12) + getMinutes() / 60); // 30 degrees hour
    m = 6 * getMinutes(); // 6 degrees every minute
    s = 6 * getSeconds(); // 6 degrees every second
var hours = getHours();
var mins = getMinutes();
var time = hours + ":" + mins;

    // setting the rotate CSS attribute to those degree values -->
    document.getElementById("seconds").style.cssText =
      "-webkit-transform:rotate(" + s + "deg);";
    document.getElementById("minutes").style.cssText =
      "-webkit-transform:rotate(" + m + "deg);";
    document.getElementById("hours").style.cssText =
      "-webkit-transform:rotate(" + h + "deg);";
    document.getElementById("digitaltime").innerText = time;


    if (getHours()/12>1) {
      document.getElementById("ampm").innerHTML = "PM";
  } else {document.getElementById("ampm").innerHTML = "AM";
}

    setTimeout(moveHands, 1000); // calling the function every second
  }
}

window.onload = moveHands; // making sure the function starts on load of webpage
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

//stop the function after pressing the reset button,
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}
