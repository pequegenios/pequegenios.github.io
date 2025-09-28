document.addEventListener("DOMContentLoaded", () => {
  const nivel1 = document.getElementById("nivel1");
  const nivel2 = document.getElementById("nivel2");
  const nivel3 = document.getElementById("nivel3");

  nivel1.addEventListener("click", () => {
    // Aquí va la ruta del tema 1 para niños normales
    window.location.href = "1_grado/unidad_1/tema_1/Niños/niños.html";
  });

  nivel2.addEventListener("click", () => {
    if (nivel2.classList.contains("desbloqueado")) {
      window.location.href = "1_grado/unidad_2/tema_1/Niños/niños.html";
    } else {
      alert("🔒 Completa primero la Unidad 1 para desbloquear esta.");
    }
  });

  nivel3.addEventListener("click", () => {
    if (nivel3.classList.contains("desbloqueado")) {
      window.location.href = "1_grado/unidad_3/tema_1/Niños/niños.html";
    } else {
      alert("🔒 Completa primero la Unidad 2 para desbloquear esta.");
    }
  });
});
