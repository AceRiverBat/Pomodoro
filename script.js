
document.querySelector('#work').onclick = function(){
    testCallBack();
    alert("AU BOULOT")
  };
  document.querySelector('#pause').onclick = function(){
    pause();
    alert("BREAK")
  };
  document.querySelector('#stop').onclick = function(){
    stopTimer();
  };
  function pomodoro() {
    const depart = 25;
    let temps = depart * 60;

    const timer = document.getElementById("timer");
   inter = setInterval(() => {
        let minutes = parseInt(temps / 60, 10);
        let secondes = parseInt(temps % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;

        timer.innerText = `${minutes}:${secondes}`;
        temps = temps <= 0 ? 0 : temps - 1;
    }, 1000);
};

function pause() {
    const start = 5;
    let time = start * 60;
    const timer = document.getElementById("timer");

inter = setInterval(() => {
  let minutes = parseInt(time / 60, 10);
  let secondes = parseInt(time % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timer.innerText = `${minutes}:${secondes}`;
  time = time <= 0 ? 0 : time - 1;
}, 1000);

};

function stopTimer() {
  clearInterval(inter);
};

function testCallBack(){
    setTimeout(()=>{
      stopTimer();
      const audio = new Audio('alarm.mp3');
      audio.play();
      alert("BREAK");
        pause();
    },250000);
    pomodoro();
}

//DRAG AND DROP
let spyro = document.getElementById("spyro");
spyro.onmousedown = function(event) {

  let shiftX = event.clientX - spyro.getBoundingClientRect().left;
  let shiftY = event.clientY - spyro.getBoundingClientRect().top;

  spyro.style.position = 'absolute';
  spyro.style.zIndex = 1000;
  document.body.append(spyro);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    spyro.style.left = pageX - shiftX + 'px';
    spyro.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  spyro.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    spyro.onmouseup = null;
  };

};

spyro.ondragstart = function() {
  return false;
};


