// ========================
// Datos Iniciales Estudiantes
// ========================
let estudiantes = [
  {codigo:'MJGR310505120505J',nombre1:'Juan',nombre2:'Miguel',apellido1:'Gómez',apellido2:'Ramírez',fechaNacimiento:'2010-05-12',grado:'1',tutor:'Ana Pérez',telefono:'55512345',parentesco:'Madre',direccion:'Calle 1',grupoSanguineo:'O+',alergias:'Ninguna',seccion:'A',docente:'Prof. López',condiciones:['autismo'],gradoCondicion:'leve',consejos:'Apoyo visual',boletin:[{parcial:1,nota:80} ]},
  {codigo:'LCCR150304150304K',nombre1:'Laura',nombre2:'Carolina',apellido1:'Cruz',apellido2:'Ramírez',fechaNacimiento:'2010-03-15',grado:'1',tutor:'Pedro Cruz',telefono:'55554321',parentesco:'Padre',direccion:'Calle 2',grupoSanguineo:'A+',alergias:'Polen',seccion:'B',docente:'Prof. López',condiciones:['ninguna'],gradoCondicion:'medio',consejos:'Tiempo extra en ejercicios',boletin:[{parcial:1,nota:85} ]},
  {codigo:'MPRA120206120206J',nombre1:'María',nombre2:'Paola',apellido1:'Ramírez',apellido2:'Alvarez',fechaNacimiento:'2010-06-12',grado:'1',tutor:'José Alvarez',telefono:'55567890',parentesco:'Padre',direccion:'Calle 3',grupoSanguineo:'B+',alergias:'Lácteos',seccion:'A',docente:'Prof. López',condiciones:['dificultad_visual'],gradoCondicion:'leve',consejos:'Material con letra grande',boletin:[{parcial:1,nota:90}]},
  {codigo:'JPLS230307230307K',nombre1:'José',nombre2:'Luis',apellido1:'Pérez',apellido2:'Sánchez',fechaNacimiento:'2010-07-23',grado:'1',tutor:'Ana Sánchez',telefono:'55598765',parentesco:'Madre',direccion:'Calle 4',grupoSanguineo:'AB+',alergias:'Ninguna',seccion:'B',docente:'Prof. López',condiciones:['ninguna'],gradoCondicion:'medio',consejos:'Apoyo en matemáticas',boletin:[{parcial:1,nota:78}]},
  {codigo:'MCRL101010101010J',nombre1:'Miguel',nombre2:'Cristian',apellido1:'López',apellido2:'Ruiz',fechaNacimiento:'2010-10-10',grado:'1',tutor:'Carmen Ruiz',telefono:'55511223',parentesco:'Madre',direccion:'Calle 5',grupoSanguineo:'O-',alergias:'Gluten',seccion:'C',docente:'Prof. López',condiciones:['dificultad_auditiva'],gradoCondicion:'leve',consejos:'Usar audífonos',boletin:[{parcial:1,nota:82}]},
  {codigo:'ANMR090901090901K',nombre1:'Ana',nombre2:'María',apellido1:'Núñez',apellido2:'Martínez',fechaNacimiento:'2010-09-09',grado:'1',tutor:'Luis Martínez',telefono:'55533445',parentesco:'Padre',direccion:'Calle 6',grupoSanguineo:'A-',alergias:'Ninguna',seccion:'A',docente:'Prof. López',condiciones:['autismo'],gradoCondicion:'medio',consejos:'Apoyo visual y auditivo',boletin:[{parcial:1,nota:88}]},
  {codigo:'DPFR050505050505J',nombre1:'David',nombre2:'Pablo',apellido1:'Fernández',apellido2:'Rojas',fechaNacimiento:'2010-05-05',grado:'1',tutor:'Elena Rojas',telefono:'55566778',parentesco:'Madre',direccion:'Calle 7',grupoSanguineo:'B-',alergias:'Polen',seccion:'C',docente:'Prof. López',condiciones:['ninguna'],gradoCondicion:'leve',consejos:'Apoyo individual',boletin:[{parcial:1,nota:80}]},
  {codigo:'LCAR020202020202K',nombre1:'Luis',nombre2:'Carlos',apellido1:'Arévalo',apellido2:'Ramírez',fechaNacimiento:'2010-02-02',grado:'1',tutor:'Marta Ramírez',telefono:'55599887',parentesco:'Madre',direccion:'Calle 8',grupoSanguineo:'O+',alergias:'Ninguna',seccion:'B',docente:'Prof. López',condiciones:['dificultad_visual'],gradoCondicion:'medio',consejos:'Material visual aumentado',boletin:[{parcial:1,nota:75}]},
  {codigo:'SMMR121212121212J',nombre1:'Sofía',nombre2:'María',apellido1:'Martínez',apellido2:'Rodríguez',fechaNacimiento:'2010-12-12',grado:'1',tutor:'Miguel Rodríguez',telefono:'55522112',parentesco:'Padre',direccion:'Calle 9',grupoSanguineo:'AB-',alergias:'Lácteos',seccion:'A',docente:'Prof. López',condiciones:['ninguna'],gradoCondicion:'leve',consejos:'Apoyo con calculadora',boletin:[{parcial:1,nota:92}]},
  {codigo:'JCRL030303030303K',nombre1:'Juan',nombre2:'Carlos',apellido1:'Reyes',apellido2:'Luna',fechaNacimiento:'2010-03-03',grado:'1',tutor:'Ana Luna',telefono:'55544556',parentesco:'Madre',direccion:'Calle 10',grupoSanguineo:'B+',alergias:'Ninguna',seccion:'C',docente:'Prof. López',condiciones:['dificultad_auditiva'],gradoCondicion:'medio',consejos:'Instrucciones claras',boletin:[{parcial:1,nota:80}]},
  {codigo:'MNRL070707070707J',nombre1:'Marcos',nombre2:'Nicolás',apellido1:'Rivas',apellido2:'López',fechaNacimiento:'2010-07-07',grado:'1',tutor:'Lucía López',telefono:'55577889',parentesco:'Madre',direccion:'Calle 11',grupoSanguineo:'A+',alergias:'Ninguna',seccion:'B',docente:'Prof. López',condiciones:['ninguna'],gradoCondicion:'leve',consejos:'Refuerzo visual',boletin:[{parcial:1,nota:77}]},
  {codigo:'CPLR060606060606K',nombre1:'Carla',nombre2:'Paola',apellido1:'Pérez',apellido2:'Lara',fechaNacimiento:'2010-06-06',grado:'1',tutor:'Jorge Lara',telefono:'55533456',parentesco:'Padre',direccion:'Calle 12',grupoSanguineo:'O-',alergias:'Ninguna',seccion:'A',docente:'Prof. López',condiciones:['autismo'],gradoCondicion:'moderado',consejos:'Apoyo en matemáticas y lectura',boletin:[{parcial:1,nota:86}]},
  {codigo:'ALMR080808080808J',nombre1:'Ana',nombre2:'Lucía',apellido1:'Martínez',apellido2:'Rivas',fechaNacimiento:'2010-08-08',grado:'1',tutor:'Miguel Rivas',telefono:'55555667',parentesco:'Padre',direccion:'Calle 13',grupoSanguineo:'AB+',alergias:'Polen',seccion:'C',docente:'Prof. López',condiciones:['ninguna'],gradoCondicion:'leve',consejos:'Motivar con juegos',boletin:[{parcial:1,nota:91}]},
  {codigo:'DPRL040404040404K',nombre1:'Daniel',nombre2:'Pablo',apellido1:'Reyes',apellido2:'López',fechaNacimiento:'2010-04-04',grado:'1',tutor:'Ana López',telefono:'55588990',parentesco:'Madre',direccion:'Calle 14',grupoSanguineo:'B-',alergias:'Gluten',seccion:'B',docente:'Prof. López',condiciones:['dificultad_visual'],gradoCondicion:'medio',consejos:'Lupa y material grande',boletin:[{parcial:1,nota:79}]},
  {codigo:'SMCR050505050505J',nombre1:'Sara',nombre2:'María',apellido1:'Cruz',apellido2:'Ramírez',fechaNacimiento:'2010-05-05',grado:'1',tutor:'Pedro Ramírez',telefono:'55511222',parentesco:'Padre',direccion:'Calle 15',grupoSanguineo:'O+',alergias:'Ninguna',seccion:'A',docente:'Prof. López',condiciones:['autismo'],gradoCondicion:'leve',consejos:'Apoyo con pictogramas',boletin:[{parcial:1,nota:83}]},
  // ========================
  // 3 NUEVOS CODIGOS MINED PARA AGREGAR
  // ========================
  {codigo:'NRML010101010101J',nombre1:'Nora',nombre2:'Raquel',apellido1:'Martínez',apellido2:'Lopez',fechaNacimiento:'2010-01-01',grado:'1',tutor:'',telefono:'',parentesco:'',direccion:'',grupoSanguineo:'',alergias:'',seccion:'',docente:'',condiciones:[],gradoCondicion:'',consejos:'',boletin:[]},
  {codigo:'LJCR020202020202K',nombre1:'Luis',nombre2:'José',apellido1:'Cruz',apellido2:'Ramírez',fechaNacimiento:'2010-02-02',grado:'1',tutor:'',telefono:'',parentesco:'',direccion:'',grupoSanguineo:'',alergias:'',seccion:'',docente:'',condiciones:[],gradoCondicion:'',consejos:'',boletin:[]},
  {codigo:'MARC030303030303J',nombre1:'Marcos',nombre2:'Arturo',apellido1:'Ramírez',apellido2:'Cruz',fechaNacimiento:'2010-03-03',grado:'1',tutor:'',telefono:'',parentesco:'',direccion:'',grupoSanguineo:'',alergias:'',seccion:'',docente:'',condiciones:[],gradoCondicion:'',consejos:'',boletin:[]}
];

// ========================
// Selección de elementos
// ========================
const tablaBody = document.querySelector('#tablaEstudiantes tbody');
const modal = document.getElementById('modalEstudiante');
const form = document.getElementById('formEstudiante');
const agregarBtn = document.getElementById('agregarEstudianteBtn');
const cerrarBtn = document.querySelector('.cerrar');
const busquedaInput = document.getElementById('busqueda');
const resultadosBusqueda = document.getElementById('resultadosBusqueda');
const modalTitulo = document.getElementById('modalTitulo');

// ========================
// Funciones para CRUD y render
// ========================
let estudianteActual = null; // Para editar

function renderTabla() {
  tablaBody.innerHTML = '';
  estudiantes.forEach((est, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${est.codigo}</td>
      <td>${est.nombre1} ${est.nombre2} ${est.apellido1} ${est.apellido2}</td>
      <td>${est.grado}</td>
      <td>${est.tutor}</td>
      <td>
        <button class="verBtn" data-index="${index}">Ver</button>
        <button class="editarBtn" data-index="${index}">Editar</button>
        <button class="eliminarBtn" data-index="${index}">Eliminar</button>
      </td>
    `;
    tablaBody.appendChild(tr);
  });
}

renderTabla();

// ========================
// Función para mostrar modal
// ========================
function abrirModal(estudiante = null) {
  modal.style.display = 'block';
  if(estudiante){
    modalTitulo.textContent = 'Editar Estudiante';
    estudianteActual = estudiante;
    Object.keys(estudiante).forEach(key=>{
      const input = document.getElementById(key);
      if(input) input.value = estudiante[key];
    });
  } else {
    modalTitulo.textContent = 'Agregar Estudiante';
    estudianteActual = null;
    form.reset();
  }
}

// ========================
// Cerrar modal
// ========================
cerrarBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target==modal) modal.style.display='none'; };

// ========================
// Agregar estudiante
// ========================
agregarBtn.onclick = () => abrirModal();

// ========================
// Guardar estudiante
// ========================
form.onsubmit = (e) => {
  e.preventDefault();
  let data = {};
  new FormData(form).forEach((v,k)=>data[k]=v);
  if(estudianteActual){
    // Editar
    Object.assign(estudianteActual, data);
  } else {
    // Nuevo estudiante
    let usuario = data.nombre1.toLowerCase()+new Date().getFullYear();
    let contraseña = 'MINED'+data.fechaNacimiento.replace(/-/g,'');
    data.usuario = usuario;
    data.contraseña = contraseña;
    estudiantes.push(data);
    alert(`Estudiante agregado.\nUsuario: ${usuario}\nContraseña: ${contraseña}`);
  }
  renderTabla();
  modal.style.display = 'none';
};

// ========================
// Eliminar estudiante
// ========================
tablaBody.addEventListener('click', e=>{
  if(e.target.classList.contains('eliminarBtn')){
    let idx = e.target.dataset.index;
    if(confirm('¿Eliminar estudiante?')){
      estudiantes.splice(idx,1);
      renderTabla();
    }
  }
  if(e.target.classList.contains('editarBtn')){
    let idx = e.target.dataset.index;
    abrirModal(estudiantes[idx]);
  }
  if(e.target.classList.contains('verBtn')){
    let idx = e.target.dataset.index;
    mostrarInforme(estudiantes[idx]);
  }
});

// ========================
// Búsqueda avanzada
// ========================
busquedaInput.addEventListener('input', ()=>{
  const term = busquedaInput.value.toLowerCase();
  resultadosBusqueda.innerHTML = '';
  if(!term) { resultadosBusqueda.style.display='none'; return; }
  const matches = estudiantes.filter(e=>{
    return e.codigo.toLowerCase().includes(term) ||
           e.nombre1.toLowerCase().includes(term) ||
           e.apellido1.toLowerCase().includes(term);
  });
  matches.forEach(e=>{
    const div = document.createElement('div');
    div.textContent = `${e.codigo} - ${e.nombre1} ${e.nombre2} ${e.apellido1} ${e.apellido2}`;
    div.onclick = ()=> mostrarInforme(e);
    resultadosBusqueda.appendChild(div);
  });
  resultadosBusqueda.style.display = matches.length? 'block':'none';
});

// ========================
// Mostrar informe en PDF
// ========================
function mostrarInforme(est){
  const {codigo,nombre1,nombre2,apellido1,apellido2,tutor,telefono,usuario,contraseña,boletin} = est;
  let info = `Estudiante: ${nombre1} ${nombre2} ${apellido1} ${apellido2}\nCódigo: ${codigo}\nTutor: ${tutor}\nTeléfono: ${telefono}\nUsuario Web: ${usuario||'N/A'}\nContraseña Web: ${contraseña||'N/A'}\n\nBoletín:\n`;
  boletin.forEach(b=> info += `Parcial ${b.parcial}: ${b.nota}\n`);
  alert(info);
}

// ========================
// Ver Boletín (modal aparte)
// ========================
document.getElementById('verHistorial').onclick = ()=>{
  if(estudianteActual){
    let notas = estudianteActual.boletin.map(b=>`Parcial ${b.parcial}: ${b.nota}`).join('\n');
    let nuevaNota = prompt(`Notas actuales:\n${notas}\n\nAgregar nota 2do parcial:`,'');
    if(nuevaNota){
      estudianteActual.boletin.push({parcial:2,nota:nuevaNota});
      alert('Nota agregada!');
    }
  } else alert('Seleccione un estudiante primero.');
};

// ========================
// Exportar PDF con jsPDF
// ========================
document.getElementById('exportPDF').onclick = ()=>{
  if(!estudianteActual) return alert('Seleccione estudiante');
  const {nombre1,nombre2,apellido1,apellido2,codigo,tutor,telefono,boletin} = estudianteActual;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text(`Informe Estudiante: ${nombre1} ${nombre2} ${apellido1} ${apellido2}`,10,20);
  doc.setFontSize(12);
  doc.text(`Código MINED: ${codigo}`,10,30);
  doc.text(`Tutor: ${tutor}`,10,40);
  doc.text(`Teléfono: ${telefono}`,10,50);
  doc.text('Boletín:',10,60);
  boletin.forEach((b,i)=> doc.text(`Parcial ${b.parcial}: ${b.nota}`,10,70+i*10));
  doc.save(`${nombre1}_${apellido1}_Informe.pdf`);
};
