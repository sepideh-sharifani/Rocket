const launch = document.querySelector(".launch");
const cancel = document.querySelector(".cancel");
const popUp = document.querySelector("#form");
const reject = document.querySelector(".btnNo");
const accept = document.querySelector(".btnYes");
const countDown = document.querySelector(".countDown");

var timeleft = 10;
var timeInterval;
var blur = document.querySelector(".blur");


launch.addEventListener('click', (e) =>{
  launch.style.display = "none";
  cancel.style.display = "block";
  document.querySelector(".text").innerHTML = "CAN'T WAIT!!!";
  run();
})

cancel.addEventListener('click', (e) => {
  popUp.style.display = "flex";
  activetoggle();
  pause(timeleft);
})

accept.addEventListener('click', (e) =>{
  window.location.reload();
})


reject.addEventListener('click', (e) =>{
  popUp.style.display = "none";
  deactivetoggle();
  run();
  cancel.style.display="none";
})


function run(){
  function updateTimer(){
    if(timeleft <= 0){
      clearInterval(updateTimer);
      countDown.innerHTML = "Here we go!!";
      move();
    } else {
      countDown.innerHTML = timeleft;
    }
    timeleft -= 1;
}
updateTimer();
timeInterval = setInterval(updateTimer,500);
}

function activetoggle(){
  blur.classList.toggle("active");
}

function deactivetoggle(){
  blur.classList.toggle("deactive");
}

function pause(){
  clearInterval(timeInterval);
}


function move(){
  var step =40;
  var y= document.querySelector(".img").offsetTop;
  if(y > 200){
    y = y - step;
    document.querySelector("img").style.top = y + "px";
  } else {
    document.querySelector(".crash").style.display = "block";
    document.querySelector(".img").style.display = "none";
    document.querySelector(".imgboom").style.display = "block";
  }
}


