var link = document.querySelector(".btn-feedback");

var popup = document.querySelector(".feedback");

var overlay = document.querySelector(".modal-overlay");

var close = popup.querySelector(".feedback-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-show");
  overlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-show")) {
      popup.classList.remove("feedback-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});