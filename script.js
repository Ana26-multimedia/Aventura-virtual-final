<script>
document.addEventListener("DOMContentLoaded", () => {
  //
  const cohete = document.getElementById("cohete");
  const boton = document.getElementById("launchBtn");

  if (cohete) {
    
    cohete.addEventListener("click", () => {
      cohete.classList.remove("despegar");
      void cohete.offsetWidth; 
      cohete.classList.add("despegar");
    });
  }

  if (boton) {
   
    boton.addEventListener("click", () => {
      cohete.classList.remove("despegar");
      void cohete.offsetWidth;
      cohete.classList.add("despegar");
    });
  }

 
  const pajaro = document.getElementById("pajaro");

  if (pajaro) {
    pajaro.addEventListener("click", () => {
      if (pajaro.classList.contains("volando")) return;

    
      pajaro.classList.add("volando");
    });

  
    pajaro.addEventListener("animationend", () => {
      window.location.href = "escena2.html";
    });
  }
});
</script>