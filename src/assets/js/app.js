window.addEventListener("DOMContentLoaded", () => {
  let btnUp = document.getElementById("btn-burger");
  let btnClose = document.getElementById("btn-close");
  let items = document.querySelectorAll("nav li");
  btnUp.addEventListener("click", () => {
    for (const item of items) {
      item.classList.toggle("hidden");
    }
    btnClose.classList.toggle("hidden");
    btnUp.classList.toggle("hidden");
  });
  btnClose.addEventListener("click", () => {
    for (const item of items) {
      item.classList.toggle("hidden");
    }
    btnClose.classList.toggle("hidden");
    btnUp.classList.toggle("hidden");
  });
});
