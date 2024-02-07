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
const deletBtn = (value) => {
  if (!currentNumber || currentNumber === "0") return;
  if (currentNumber.length === 1) {
    currentNumber = "";
    updateNumbers(currentNumber);
  }
  if (currentNumber.length > 1) {
    currentNumber[currentNumber.length - 1] = "";
    updateNumbers(currentNumber);
  }
};
const resetButton = () => {
  storedNumber = "";
  currentNumber = "";
  operation = "";
  updateNumbers(currentNumber);
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
          deletBtn(item.dataset.value);
          break;
      }
    }
  });
};
numbers.forEach(keyElement);

// const restNumber = document.querySelector(".calc__key[data-value=c]");
// restNumber.addEventListener("click", () => {
//   updateNumbers(0);
// });
