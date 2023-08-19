const cards = document.querySelectorAll(".panel");
console.log(cards);

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

function onCardClick(event) {
  const activeClass = event.target.parentElement.classList;
  removeActiveClasses();
  activeClass.add("active");
  console.log(event.target.parentElement.classList);
}

cards.forEach((card) => card.addEventListener("click", onCardClick));
