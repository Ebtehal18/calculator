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
const numbers = document.querySelectorAll(".calc__key[data-type=number]");
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
const keyElement = (item) => {
  item.addEventListener("click", () => {
    item.dataset.type === "number" && concatNumber(item.dataset.value);
  });
};
numbers.forEach(keyElement);

const restNumber = document.querySelectorAll(".calc__key[data-value=c]");
restNumber.addEventListener("click", () => {
  updateNumbers(0);
});
