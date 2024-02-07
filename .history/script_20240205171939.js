const toggle = document.querySelector(".themes__toggle");
const container = document.querySelector(".container");
toggle.addEventListener("click", () => {
  container.classList.toggle("");
});
