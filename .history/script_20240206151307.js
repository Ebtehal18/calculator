const toggle = document.querySelector(".themes__toggle");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("themes__toggle--isActive");
});
let currentNumber = "";
let stotredNumber = "";
let operation = "";
const result = document.querySelector(".calc__result");
const numbers = document.querySelectorAll("[data-type]");
numbers.forEach((item) => {
  item.addEventListener("click", () => {
    if (currentNumber && currentNumber.includes(".")) return;
    if (currentNumber === "0") {
      result.textContent = currentNumber;
    }
    result.textContent = currentNumber;
  });
});
