const toggle = document.querySelector(".themes__toggle");
const toggleFunction = () => {
  toggle.classList.toggle("themes__toggle--isActive");
};
toggle.addEventListener("click", toggleFunction);
// enter toggle
const toggleEnter = (e) => {
  e.key === "Enter" && toggleFunction();
};
toggle.addEventListener("keydown", toggleEnter);
// logic
let currentNumber = "";
let stotredNumber = "";
let operation = "";
const result = document.querySelector(".calc__result");
const numbers = document.querySelectorAll("[data-type]");
const concatNumber = (value) => {
  console.log(value);
  console.log(currentNumber);
  if (value === "." && currentNumber.includes(".")) return;
  if (value === "0" && !currentNumber) return;
  currentNumber += value;
  console.log(currentNumber);
  result.textContent = currentNumber;
};
const resetBtn = () => {
  currentNumber = "";
  stotredNumber = "";
  operation = "";
  result.textContent = 0;
};
const deleteBtn = () => {
  if (!currentNumber || currentNumber === 0) return;
  if (currentNumber.length === 1) {
    currentNumber = "";
  }
};
numbers.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.type === "number") {
      concatNumber(item.dataset.value);
    }
    switch (item.dataset.value) {
      case "c":
        resetBtn();
        break;
      case "Backspace":
        deleteBtn();
        break;
    }
  });
});
