<script>
document.addEventListener("DOMContentLoaded", () => {

  // COHETE
  const cohete = document.getElementById("cohete");
  const boton = document.getElementById("launchBtn");

  if (cohete) {
    cohete.addEventListener("click", () => {
      cohete.classList.remove("despegar");
      void cohete.offsetWidth; 
      cohete.classList.add("despegar");
    });
  }

  if (boton && cohete) {
    boton.addEventListener("click", () => {
      cohete.classList.remove("despegar");
      void cohete.offsetWidth;
      cohete.classList.add("despegar");
    });
  }

  // PÁJARO
  const pajaro = document.getElementById("pajaro");
  const pajaro2 = document.querySelector(".pajaro2");

  if (pajaro) {
    pajaro.addEventListener("click", () => {
      pajaro.classList.remove("volando");
      void pajaro.offsetWidth; 
      pajaro.classList.add("volando");

      if (pajaro2) {
        pajaro2.classList.remove("volando2");
        void pajaro2.offsetWidth;
        pajaro2.classList.add("volando2");
      }
    });

    pajaro.addEventListener("animationend", () => {
      window.location.href = "escena2.html";
    });
  }

  // 🎙️ NARRACIÓN
  const btnNarracion = document.getElementById('btn-narracion');
  const narracion = document.getElementById('narracion');

  if (btnNarracion && narracion) {
    btnNarracion.addEventListener('click', () => {
      if (narracion.paused) {
        narracion.play();
        btnNarracion.textContent = "⏸️ Pausar narración";
      } else {
        narracion.pause();
        btnNarracion.textContent = "🎙️ Escuchar narración";
      }
    });
  }

});
</script>