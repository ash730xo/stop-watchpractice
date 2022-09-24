
/* getting  Button ID from HTML and bringin to javascrip */
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const restart = document.getElementById("restart");
/* Getting Timmer ID from HTML */
let appendSeconds = document.getElementById("seconds");
let appendMili = document.getElementById("miliSeconds");

/* Sets seconds and miliseconds to 0 -- later on will combine ID and this together */
let seconds = 0
let mili = 0

//Holding/clearing variable
let interval;



/* on click functions for button */
start.onclick = function() {
    console.log("start!")
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
}

stop.onclick = function () {
    console.log("Stop!")
    //clearnign interval variable
    clearInterval(interval)
}

restart.onclick = function () {
    console.log("Restart!")
    //
    clearInterval(interval)
    mili = 00;
    seconds = 00;
    appendMili.innerHTML = mili;
    appendSeconds.innerHTML = seconds;
}

// Timer Loop
function startTimer(){
// incremening miliseconds 
    mili++;

    /* if miliseconds is less or equal to 9 add the print statement to the P tag
    in the HTML as the output */
    if (mili <= 9 ) {
        appendMili.innerHTML= "0" + mili; 
    // If its greater than 9 keep it the time that its saying until 99 
    } if  (mili > 9 ) {
        appendMili.innerHTML= mili;
    }

    //HANDLEING SECONDS ONCE ITS ABOVE 99 -back to 00 on the right side of clock 

    if (mili > 99 ){
        //starting to increment seconds each time miliseconds has reached 99
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        //resetting miliseconds to 0 since it got to 99
        mili = 0
        appenMili.innerHTML = "0" + 0;
    } if (seconds > 9 ){
        appendSeconds.innerHTML = seconds;
    }
}


