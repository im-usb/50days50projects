const labels = document.querySelectorAll(".form-control label");
const loginForm = document.querySelector("form");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
