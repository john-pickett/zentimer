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


