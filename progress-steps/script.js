const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currentActiveCircle = 1;

function onNextClick() {
  if (currentActiveCircle > circles.length) {
    currentActiveCircle = circles.length;
  }

  currentActiveCircle++;
  updateCirclePosition();
}

function onPrevClick() {
  if (currentActiveCircle < 1) {
    currentActiveCircle = 1;
  }

  currentActiveCircle--;
  updateCirclePosition();
}

function updateCirclePosition() {
  circles.forEach((circle, idx) => {
    if (idx <= currentActiveCircle - 1) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActiveCircle === 1) {
    prev.disabled = true;
  } else if (currentActiveCircle === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);
