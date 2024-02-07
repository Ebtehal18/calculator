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
const execution = () => {
  if (stotredNumber && currentNumber && operation) {
    switch (operation) {
      case "+":
        stotredNumber = Number(stotredNumber) + Number(currentNumber);
        break;
      case "-":
        stotredNumber = Number(stotredNumber) - Number(currentNumber);
        break;
      case "*":
        stotredNumber = Number(stotredNumber) * Number(currentNumber);
        break;
      case "/":
        stotredNumber = Number(stotredNumber) / Number(currentNumber);
        break;
    }
  }
  currentNumber = "";
  updateUi(stotredNumber);
};
// operation
const operations = (value) => {
  if (!stotredNumber && !currentNumber) return;
  if (currentNumber && !stotredNumber) {
    stotredNumber = currentNumber;
    currentNumber = "";
    operation = value;
  } else if (stotredNumber) {
    operation = value;
  }
  if (currentNumber) {
    execution();
  }
};
numbers.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.type === "number") {
      concatNumber(item.dataset.value);
    } else if (item.dataset.type === "operation") {
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
          if (stotredNumber) {
            execution();
          }
          operations(item.dataset.value);
      }
    }
  });
});
const avaliableNumbers = [
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
  ".",
];
const avlaiableOperations = ["+", "-", "*", "/"];
const avaliableKeys = [
  ...avaliableNumbers,
  ...avlaiableOperations,
  "Enter",
  "Backspace",
  "c",
];
const 