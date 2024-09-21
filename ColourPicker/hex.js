let chars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let container = document.querySelector(".container");
const btn = document.getElementById("btn");
let text = document.querySelector(".colour");

const RandomNumber = () => {
  return Math.floor(Math.random() * chars.length);
};

btn.addEventListener("click", function () {
  let newColour = "#";
  for (let i = 0; i < 6; i++) {
    newColour += chars[RandomNumber()];
  }

  text.textContent = newColour;
  container.style.backgroundColor = newColour;
});
