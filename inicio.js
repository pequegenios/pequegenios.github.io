// ============================
// DATOS DE ALUMNOS
// ============================
const alumnos = [
  { nombre: "Ana", tipo: "autismo", hecho: true, errores: 2 },
  { nombre: "Luis", tipo: "dificultad", hecho: false, errores: 0 },
  { nombre: "María", tipo: "autismo", hecho: true, errores: 6 },
  { nombre: "Carlos", tipo: "dificultad", hecho: true, errores: 3 },
  { nombre: "Sofía", tipo: "dificultad", hecho: true, errores: 1 },
  { nombre: "Mateo", tipo: "normal", hecho: true, errores: 0 },
  { nombre: "Valeria", tipo: "normal", hecho: false, errores: 0 },
  { nombre: "Pedro", tipo: "dificultad", hecho: true, errores: 4 },
  { nombre: "Lucía", tipo: "normal", hecho: false, errores: 0 },
  { nombre: "Diego", tipo: "normal", hecho: true, errores: 5 },
  { nombre: "Emma", tipo: "normal", hecho: false, errores: 0 },
  { nombre: "Daniel", tipo: "normal", hecho: true, errores: 1 },
  { nombre: "Carla", tipo: "dificultad", hecho: true, errores: 2 },
  { nombre: "Andrés", tipo: "normal", hecho: true, errores: 0 },
  { nombre: "Camila", tipo: "dificultad", hecho: false, errores: 0 },
  { nombre: "Jorge", tipo: "normal", hecho: true, errores: 3 },
  { nombre: "Paula", tipo: "normal", hecho: false, errores: 0 },
  { nombre: "Ricardo", tipo: "normal", hecho: true, errores: 6 },
  { nombre: "Elena", tipo: "normal", hecho: true, errores: 1 },
  { nombre: "Tomás", tipo: "dificultad", hecho: true, errores: 0 },
  { nombre: "Isabella", tipo: "normal", hecho: false, errores: 0 },
  { nombre: "Miguel", tipo: "normal", hecho: true, errores: 2 },
  { nombre: "Laura", tipo: "normal", hecho: false, errores: 0 },
  { nombre: "Santiago", tipo: "normal", hecho: true, errores: 4 },
  { nombre: "Julia", tipo: "normal", hecho: true, errores: 3 },
];

// ============================
// ELEMENTOS DOM
// ============================
const alumnosContainer = document.getElementById("alumnos-container");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");
const modalBody = document.getElementById("modal-body");
const porcentaje = document.getElementById("porcentaje");
const barra = document.getElementById("barra");
const filtroBtns = document.querySelectorAll(".filtro-btn");

// ============================
// FUNCIONES
// ============================

function generarEstrellas(errores) {
  let estrellas = 3;
  if (errores >= 6) estrellas = 1;
  else if (errores >= 3) estrellas = 2;
  let html = '';
  for (let i = 0; i < estrellas; i++) {
    html += `<div class="estrella" title="Errores: ${errores}"></div>`;
  }
  return html;
}

function mostrarAlumnos(filtro = "todos") {
  alumnosContainer.innerHTML = '';
  const filtrados = alumnos.filter(a => filtro === 'todos' ? true : a.tipo === filtro);

  filtrados.forEach(alumno => {
    const div = document.createElement('div');
    div.classList.add('alumno');
    div.dataset.tipo = alumno.tipo;
    div.innerHTML = `
      <h3>${alumno.nombre}</h3>
      <div class="estado">${alumno.hecho ? '✅ Hecho' : '❌ Por hacer'}</div>
    `;
    div.addEventListener('click', () => mostrarModal(alumno));
    alumnosContainer.appendChild(div);
  });

  actualizarBarra(filtrados);
}

function actualizarBarra(filtrados) {
  const hecho = filtrados.filter(a => a.hecho).length;
  const total = filtrados.length;
  const avance = total ? Math.round((hecho / total) * 100) : 0;
  porcentaje.textContent = `${avance}%`;
  barra.style.width = `${avance}%`;
}

function mostrarModal(alumno) {
  modalBody.innerHTML = '';
  if (alumno.hecho) {
    modalBody.innerHTML = `
      <h2 style="text-align:center;">${alumno.nombre}</h2>
      <p style="text-align:center;">Errores: ${alumno.errores}</p>
      <div class="estrellas">${generarEstrellas(alumno.errores)}</div>
    `;
  } else {
    modalBody.innerHTML = `
      <h2 style="text-align:center;">${alumno.nombre}</h2>
      <p style="font-size:18px; color:red; text-align:center; font-weight:bold;">Tarea aún no realizada</p>
    `;
  }
  modal.style.display = 'block';
}

cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

filtroBtns.forEach(btn => {
  btn.addEventListener('click', () => mostrarAlumnos(btn.dataset.filter));
});

mostrarAlumnos();
