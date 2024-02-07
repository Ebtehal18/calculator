const toggle = document.querySelector(".themes__toggle");
const toggleFunction = () => {
  toggle.classList.toggle("themes__toggle--isActive");
};
toggle.addEventListener("click", toggleFunction);
// enter toggle
toggle.addEventListener("keydown", (e) => {
  e.key === "Enter" && toggleFunction();
});
let currentNumber = "";
let stotredNumber = "";
let operation = "";
const result = document.querySelector(".calc__result");
const numbers = document.querySelectorAll("[data-type]");
numbers.forEach((item) => {
  item.addEventListener("click", () => {
    currentNumber = item.dataset.value;
    if (currentNumber && currentNumber.includes("."));
    if (currentNumber && currentNumber === "0") {
      result.textContent = currentNumber;
    }
    result.textContent = currentNumber;
  });
});
