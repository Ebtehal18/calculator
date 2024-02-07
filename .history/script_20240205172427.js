const toggle = document.querySelector(".themes__toggle");
const theme = () => {
  toggle.classList.toggle("themes__toggle--isActive");
};
toggle.addEventListener("click", theme);
