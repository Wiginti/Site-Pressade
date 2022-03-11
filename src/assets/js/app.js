window.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("btn-burger");
  let items = document.querySelectorAll("nav li");
  btn.addEventListener("click", () => {
    for (const item of items) {
      item.classList.toggle("hidden");
    }
  });
});
