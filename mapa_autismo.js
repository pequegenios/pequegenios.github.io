document.addEventListener("DOMContentLoaded", () => {
  const niveles = [
    { id: "nivel1", url: "1_tema_autismo.html" },
    { id: "nivel2", url: "2_tema_autismo.html" },
    { id: "nivel3", url: "3_tema_autismo.html" }
  ];

  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
  const popupYes = document.getElementById("popupYes");
  const popupNo = document.getElementById("popupNo");
  const closeBtn = document.querySelector(".close");

  // Inicializar intentos y desbloqueos
  niveles.forEach((nivel, index) => {
    if (!localStorage.getItem(`${nivel.id}_intentos`)) localStorage.setItem(`${nivel.id}_intentos`, "0");
    if (!localStorage.getItem(`${nivel.id}_estado`)) localStorage.setItem(`${nivel.id}_estado`, index === 0 ? "desbloqueado" : "bloqueado");
  });

  function actualizarNiveles() {
    niveles.forEach((nivel, index) => {
      const btn = document.getElementById(nivel.id);
      const estado = localStorage.getItem(`${nivel.id}_estado`);
      btn.classList.remove("desbloqueado", "bloqueado", "completado");

      if (estado === "desbloqueado") btn.classList.add("desbloqueado");
      else if (estado === "completado") btn.classList.add("completado");
      else btn.classList.add("bloqueado");
    });
  }

  function abrirNivel(nivel) {
    const estado = localStorage.getItem(`${nivel.id}_estado`);
    const intentos = Number(localStorage.getItem(`${nivel.id}_intentos`));

    if (estado === "bloqueado") {
      popupMessage.textContent = "Nivel aún no desbloqueado. Completa el nivel anterior.";
      popup.style.display = "block";
      popupYes.style.display = "none";
      popupNo.textContent = "Cerrar";
      return;
    }

    if (estado === "completado") {
      popupMessage.textContent = "Ya completaste este nivel. ¿Quieres volver a intentarlo?";
      popupYes.style.display = "inline-block";
      popupNo.textContent = "Regresar";
      popup.style.display = "block";

      popupYes.onclick = () => {
        if (intentos < 3) {
          localStorage.setItem(`${nivel.id}_intentos`, intentos + 1);
          window.location.href = nivel.url;
        } else {
          alert("Has alcanzado el máximo de 3 intentos para este nivel.");
        }
        popup.style.display = "none";
      };

      popupNo.onclick = () => popup.style.display = "none";
      return;
    }

    // Estado desbloqueado
    if (intentos < 3) {
      localStorage.setItem(`${nivel.id}_intentos`, intentos + 1);
      window.location.href = nivel.url;
    } else {
      alert("Has alcanzado el máximo de 3 intentos para este nivel.");
    }
  }

  // Asignar eventos a los botones
  niveles.forEach(nivel => {
    const btn = document.getElementById(nivel.id);
    btn.addEventListener("click", () => abrirNivel(nivel));
  });

  closeBtn.addEventListener("click", () => popup.style.display = "none");

  // Actualizar UI al cargar
  actualizarNiveles();
});
