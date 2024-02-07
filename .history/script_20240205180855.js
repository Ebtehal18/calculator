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
const numbers = document.querySelectorAll(".calc__key");
const result = document.querySelector(".calc__result");
numbers.forEach((item) => {
  if (item.dataset.type === "number") {
  }
  item.addEventListener("click", () => {
    result.textContent = item.dataset.value;
  });
});
