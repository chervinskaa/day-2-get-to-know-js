const showBtn = document.getElementById("show-form-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal");

showBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
