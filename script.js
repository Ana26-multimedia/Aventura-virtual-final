const cohete = document.getElementById("cohete");

cohete.addEventListener("click", () => {
  cohete.classList.remove("despegar");
  void cohete.offsetWidth; // reinicia animación
  cohete.classList.add("despegar");
});

const cohete = document.getElementById("cohete");
const boton = document.getElementById("launchBtn");

boton.addEventListener("click", () => {
  cohete.classList.remove("despegar");
  void cohete.offsetWidth;
  cohete.classList.add("despegar");
});