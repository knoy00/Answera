// ------- creating popups for the signin page ------
function createPopup(id) {
  let popupNode = document.querySelector(id);
  let overlay = popupNode.querySelector(".overlay");
  let closeBtn = popupNode.querySelector(".close-btn");

  function openPopup() {
    popupNode.classList.add("active");
  }
  function closePopup() {
    popupNode.classList.remove("active");
  }
  overlay.addEventListener("click", closePopup);
  closeBtn.addEventListener("click", closePopup);
  return openPopup;
}
let popup = createPopup("#popup");
document.querySelector("#open-popup").addEventListener("click", popup);
// ------- closing popup using signup button ------
const close = document.getElementById("close");
close.addEventListener("click", () => {
  window.location.href = "Auth.html";
});
// ------- testimonial linear motioon ------

