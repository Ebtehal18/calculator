const toggle = document.querySelector(".themes__toggle");
const theme = () => {
  toggle.classList.toggle("themes__toggle--isActive");
};
const toggleEnter = (e) => {
  e.key === "Enter" && theme();
};
toggle.addEventListener("click", theme);
toggle.addEventListener("keydown", toggleEnter);

// logic
let storedNumber = "";
let currentNumber = "";
let operation = "";
const numbers = document.querySelectorAll("[data-type]");
const result = document.querySelector(".calc__result");
const updateNumbers = (value) => {
  result.textContent = !value ? 0 : value;
};
// concat numbers
const concatNumber = (value) => {
  if (value === "." && currentNumber.includes(".")) {
    return;
  }
  if (value === "0" && !currentNumber) {
    return;
  }
  currentNumber += value;
  updateNumbers(currentNumber);
};
// delete btn
const deletBtn = () => {
  if (!currentNumber || currentNumber === "0") return;
  if (currentNumber.length === 1) {
    currentNumber = "";
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }
  updateNumbers(currentNumber);
};
// reset btn
const resetButton = () => {
  storedNumber = "";
  currentNumber = "";
  operation = "";
  updateNumbers(currentNumber);
};
// execute operation
const executeOperation = () => {
  if (storedNumber && currentNumber && operation) {
    switch (operation) {
      case "+":
        storedNumber = Number(currentNumber) + Number(storedNumber);
        break;
      case "-":
        storedNumber = Number(storedNumber) - Number(currentNumber);
        break;
      case "*":
        storedNumber = Number(storedNumber) * Number(currentNumber);
        break;
      case "/":
        storedNumber = Number(storedNumber) / Number(currentNumber);
        break;
    }
    currentNumber = "";
    updateNumbers(storedNumber);
  }
};

const operationBtn = (opeerationValue) => {
  if (!currentNumber && !storedNumber) return;
  if (currentNumber && !storedNumber) {
    storedNumber = currentNumber;
    currentNumber = "";
    operation = opeerationValue;
  } else if (storedNumber) {
    operation = opeerationValue;
  }
  if (currentNumber) executeOperation();
  console.log({ currentNumber });
  console.log({ storedNumber });
  console.log({ operation });
};
const keyElement = (item) => {
  item.addEventListener("click", () => {
    const type = item.dataset.type;
    if (type === "number") {
      concatNumber(item.dataset.value);
    } else if (type === "operation") {
      switch (item.dataset.value) {
        case "c":
          resetButton();
          break;
        case "Backspace":
          deletBtn();
          break;
        case "Enter":
          executeOperation();
          break;
        default:
          operationBtn(item.dataset.value);
      }
    }
  });
};
numbers.forEach(keyElement);
// keyboard
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
window.addEventListener("keydown", (e) => {
  console.log(e.key);
});
