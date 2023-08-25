const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let loadOpacity = 100;
let bgBlur = 100;
let blurInterval = setInterval(blurring, 50);

function blurring() {
  load++;
  loadOpacity--;
  bgBlur--;
  if (load == 100 && loadOpacity == 0) {
    clearInterval(blurInterval);
  }
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = loadOpacity / 100;
  bg.style.filter = `blur(${0.3 * bgBlur}px)`;
}
