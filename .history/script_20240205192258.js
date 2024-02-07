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
numbers.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.type === "number") {
      const value = item.dataset.value;
      if (value === "." && currentNumber.includes(".")) {
        return;
      } else {
        currentNumber += currentNumber + value;
      }
      if (value === "0" && !currentNumber) {
        return;
      } else {
        currentNumber += currentNumber + value;
      }
    }
    console.log(currentNumber);
  });
});
