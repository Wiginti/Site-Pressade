window.addEventListener("DOMContentLoaded", () => {
  let btnUp = document.getElementById("btn-burger");
  let btnClose = document.getElementById("btn-close");
  let items = document.querySelectorAll("nav li");

  function hideToggle(x) {
    x.classList.toggle("hidden");
  }
  btnUp.addEventListener("click", () => {
    for (const item of items) {
      hideToggle(item);
      hideToggle(btnClose);
      hideToggle(btnUp);
    }
  });
  btnClose.addEventListener("click", () => {
    for (const item of items) {
      hideToggle(item);
      hideToggle(btnClose);
      hideToggle(btnUp);
    }
  });
});
