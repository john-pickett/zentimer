var timeInMinutes;
var intervalSet;

// Audio files
var chime = new Audio('audio/chime.mp3');
var end = new Audio('audio/end.mp3');

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
};

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  function updateClock(){
    var t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = t.seconds;
    if (t.total % 2525 === 0 && t.total > 0) {
      console.log(t.total + " Chime")
      chime.play();
    } else if (t.total<=0){
      end.play();
      clearInterval(timeinterval);
    }
    }
  updateClock(); // run function once at first to avoid delay
  var timeinterval = setInterval(updateClock,1000);
  };

function meditate(){
  timeInMinutes = parseInt(document.getElementById('lengthInput').value);
  var currentTime = Date.parse(new Date());
  var deadline = new Date(currentTime + timeInMinutes*60*1000);
  initializeClock('clockdiv', deadline);
};

$('#start').click(function (){
  meditate();
});

    // // Initial Countdown Code Starts Here

    //
    // var deadline1 = Date.parse(new Date()) + 8000;
    //
    // function getReady(endtime) {
    // var t = endtime - Date.parse(new Date());
    // var seconds = Math.floor( (t/1000) % 60);
    // return {
    // "total": t,
    // "seconds": seconds
    // };
    // }
    //
    // function initializeClock1(id, endtime) {
    // timeInMinutes = parseInt(document.getElementById('lengthInput').value);
    // var clock = document.getElementById(id);
    // var timeInterval = setInterval(function() {
    // var t = getReady(endtime);
    // clock.innerHTML = "Get Ready: " + t.seconds;
    // if(t.total <= 0){
    //   clearInterval(timeInterval)
    //   $('#clockdiv').toggle();
    //   $('#countdowndiv').remove();
    //   meditate();
    // }
    // })
    // };
