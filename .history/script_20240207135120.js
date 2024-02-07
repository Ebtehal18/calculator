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
// update ui
const updateUi = (value) => {
  result.textContent = !value ? 0 : value;
};
// concat numbers
const concatNumber = (value) => {
  console.log(value);
  console.log(currentNumber);
  if (value === "." && currentNumber.includes(".")) return;
  if (value === "0" && !currentNumber) return;
  currentNumber += value;
  console.log(currentNumber);
  updateUi(currentNumber);
};
// reset btn
const resetBtn = () => {
  currentNumber = "";
  stotredNumber = "";
  operation = "";
  updateUi(currentNumber);
};
// delete btn
const deleteBtn = () => {
  if (!currentNumber || currentNumber === 0) return;
  if (currentNumber.length === 1) {
    currentNumber = "";
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }
  updateUi(currentNumber);
};
// execute
const execution = () => {};
// operation
const operations = (value) => {
  if (value === "+") {
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
      case "Enter":
        execution();
        break;
      default:
        operations(item.dataset.type);
    }
  });
});
