const toggle = document.querySelector(".themes__toggle");
const container = document.querySelector(".container");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("themes__toggle--isActive");
});
