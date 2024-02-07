const toggle = document.querySelector(".themes__toggle");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("themes__toggle--isActive");
});
const numbers = document.querySelectorAll("[data-type]");
numbers.addEventListener("click", () => {
  console.log(numbers);
});
