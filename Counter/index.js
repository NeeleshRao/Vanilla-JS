let textData = document.getElementById("number");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

const currentState = () => {
  let curState = textData.textContent;
  return curState;
};

increaseBtn.addEventListener("click", () => {
  let number = currentState();
  number++;
  textData.textContent = number;
});

decreaseBtn.addEventListener("click", () => {
  let number = currentState();
  number--;
  textData.textContent = number;
});

resetBtn.addEventListener("click", () => {
  textData.textContent = 1;
});
