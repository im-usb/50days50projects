const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const pTag = document.createElement("p");
joke.appendChild(pTag);

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", config)
    .then((response) => response.json())
    .then((data) => {
      pTag.innerHTML = data.joke;
    });
}

generateJoke();

jokeBtn.addEventListener("click", generateJoke);
