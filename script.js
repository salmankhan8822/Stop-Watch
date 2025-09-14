

let clock = document.getElementById("clock");
let startBtn = document.querySelector(".btn1");
let stopBtn = document.querySelector(".btn2");
let resetBtn = document.querySelector(".btn3");

let timer = null;

function getCurrentTime() {
  let date = new Date();
  return date.toLocaleTimeString();
}

startBtn.addEventListener("click", () => {
  if (timer === null) {
    timer = setInterval(() => {
      clock.innerHTML = getCurrentTime();
    });
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  clock.innerHTML = "00:00:00";
});
