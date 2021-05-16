var minutes = 25;
var seconds = "00";
var minutes2 = 15;
var seconds2 = "00";


var click= new Audio("start.mp3");
var bell = new Audio("timer-alarm.mp3");
var redo = new Audio("reset.mp3");
var finito = new Audio("break.mp3");


function template () {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML= seconds;
    document.getElementById("minutes2").innerHTML= minutes2;
    document.getElementById("seconds2").innerHTML= seconds2;
    
}

function start() {
    click.play();

    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML= seconds;

    var minutes_invertal = setInterval(minutesTimer, 60000);
    var seconds_invertal = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes; 
    }

    function secondsTimer() {
        seconds = seconds -1;
        document.getElementById("seconds").innerHTML = seconds;


        if(seconds <=0 ) {
            if(minutes <=1 ){
                clearInterval(minutes_invertal);
                clearInterval(seconds_invertal);
                bell.play();

                document.getElementById("done").innerHTML = "Session Completed! Take a Break"
                document.getElementById("done").classList.add("show_message");
           }
            seconds = 60;
            
        }
    }

}

function stop() {
    
}




function stopped() {

    redo.play();

    minutes2 = 14;
    seconds2 = 59;

    document.getElementById("minutes2").innerHTML = minutes2;
    document.getElementById("seconds2").innerHTML= seconds2;
    
    var minutes2_invertal = setInterval(minutesTimer, 60000);
    var seconds2_invertal = setInterval(secondsTimer, 1000);
    function minutesTimer() {
        minutes2 = minutes2 - 1;
        document.getElementById("minutes2").innerHTML = minutes2; 

    }

    function secondsTimer() {
        seconds2 = seconds2 -1;
        document.getElementById("seconds2").innerHTML = seconds2;


        if(seconds2 <=0 ) {
     
            if(minutes2 <=0){
                clearInterval(minutes2_invertal);
                clearInterval(seconds2_invertal);

                finito.play();

                document.getElementById("done2").innerHTML = "Finish Break"
                document.getElementById("done2").classList.add("show_message");
           }
            seconds2 = 60;
            


            
            
        }
    }
}

function alarmstop() {
    finito.pause();
}
