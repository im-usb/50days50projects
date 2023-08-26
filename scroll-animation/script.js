const boxes = document.querySelectorAll(".box");

checkBoxes();

function checkBoxes() {
  const trigger = window.innerHeight / 2;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", checkBoxes);
