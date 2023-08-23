const search = document.querySelector(".search");
const searchBtn = document.querySelector(".btn");

function onBtnClick() {
  search.classList.toggle("active");
}

searchBtn.addEventListener("click", onBtnClick);
