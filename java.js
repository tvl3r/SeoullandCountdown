'use strict';

var countDown = new Date("May 12, 2022 23:59:59").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10){
      seconds = "0"+seconds;
    }
    if (minutes < 10){
      minutes = "0"+minutes;
    }
    if (hours < 10){
      hours = "0"+hours;
    }
    if (days < 1000){
      days = "0"+days;
    } else if(days < 100) {
      days = "00"+days;
    } else if(days < 10) {
      days = "000" + days;
    }


    document.getElementById('count').innerHTML = days+' - '+hours+' : '+minutes+' : '+seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('count').innerHTML = 'Bye Bye SeoulLand!';
    }

}, 1000);


function aud_play_pause() {
 var myAudio = document.getElementById("myAudio");
 if (myAudio.paused) {
    myAudio.play();
 } else {
    myAudio.pause();
 }
} ;
