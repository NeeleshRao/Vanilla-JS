let text = document.querySelector(".colour");
let button = document.getElementById("btn");
let colours = ["red", "green", "blue", "orange", "pink", "yellow"];
let container = document.querySelector(".container");

const RandomNumber = () => {
  return Math.floor(Math.random() * colours.length);
};

button.addEventListener("click", function () {
  let newNum = RandomNumber();
  let newColour = colours[newNum];
  text.textContent = newColour;
  container.style.backgroundColor = newColour;
});
