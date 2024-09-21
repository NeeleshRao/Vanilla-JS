let value = document.getElementById("number");
let btnList = document.querySelectorAll(".all-btn .btn");
let count = 0;
btnList.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const btnType = event.currentTarget.classList[3];
    if (btnType === "increase") {
      count++;
    } else if (btnType === "decrease") {
      count--;
    } else {
      count = 0;
    }
    if (count <= 0) {
      value.style.color = "red";
    } else {
      value.style.color = "green";
    }
    value.textContent = count;
  });
});
