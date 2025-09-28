const users = {
  "marling2025": { pass: "MINED310505", grade: "1_grado", profile: "autismo" },
  "marbel2025": { pass: "MINED010101", grade: "1_grado", profile: "discapacidad" },
  "bengee2025": { pass: "MINED020202", grade: "1_grado", profile: "niños" },
  "luis2025": { pass: "MINED030303", grade: "1_grado", profile: "auditiva" }
};

const form = document.getElementById('loginForm');
const userInput = document.getElementById('user');
const passInput = document.getElementById('pass');
const togglePass = document.getElementById('togglePass');
const statusUser = document.querySelector('.status-user');
const pwStrength = document.getElementById('pwStrength');
const pwBars = Array.from(pwStrength.querySelectorAll('.bar'));
const pwTip = document.getElementById('pwTip');
const modal = document.getElementById('modalError');
const modalClose = document.getElementById('modalClose');
const loader = document.getElementById('loaderScreen');
const loginBtn = document.getElementById('loginBtn');
const logoImg = document.getElementById('logoImg');

function beep(freq=440, duration=120, vol=0.07){
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = freq;
    g.gain.value = vol;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    setTimeout(()=>{ o.stop(); ctx.close(); }, duration);
  }catch(e){ /* ignore in older browsers */ }
}

togglePass.addEventListener('click', ()=>{
  const isPwd = passInput.type === 'password';
  passInput.type = isPwd ? 'text' : 'password';
  togglePass.textContent = isPwd ? '🙈' : '👁️';
  togglePass.setAttribute('aria-pressed', isPwd ? 'true' : 'false');
  passInput.focus();
});

userInput.addEventListener('input', ()=>{
  const val = userInput.value.trim();
  if(val.length >= 3 && users[val]) {
    statusUser.textContent = '✅'; statusUser.style.background = 'rgba(16,185,129,0.12)';
  } else if(val.length === 0) {
    statusUser.textContent = ''; statusUser.style.background = 'transparent';
  } else {
    statusUser.textContent = '❓'; statusUser.style.background = 'rgba(245,158,11,0.08)';
  }
});

passInput.addEventListener('input', ()=>{
  const v = passInput.value;
  let score = 0;
  if(v.length >= 6) score++;
  if(/[A-Z]/.test(v)) score++;
  if(/[0-9]/.test(v)) score++;
  score = Math.min(3, Math.max(0, score));
  pwBars.forEach((b,i) => {
    if(i < score) b.classList.add('active'); else b.classList.remove('active');
  });
  // tip
  if(v.length === 0) pwTip.textContent = 'Escribe tu contraseña';
  else if(score < 2) pwTip.textContent = 'Contraseña débil';
  else if(score === 2) pwTip.textContent = 'Contraseña aceptable';
  else pwTip.textContent = 'Contraseña fuerte';
});

// handle submit
form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  loginBtn.disabled = true;
  loginBtn.textContent = 'Verificando…';

  const username = userInput.value.trim();
  const password = passInput.value;

  // pequeña animación: pulse
  loginBtn.animate([{transform:'scale(1)'},{transform:'scale(0.98)'},{transform:'scale(1)'}],{duration:260});

  // Simular tiempo (pero breve) para experiencia
  await delay(600);

  // validar
  if(!users[username] || users[username].pass !== password){
    // error: mostrar modal con shake
    showErrorModal();
    beep(280,150,0.08);
    loginBtn.disabled = false;
    loginBtn.textContent = 'Entrar';
    return;
  }

  // éxito: guardar sesión y mostrar loader animado
  const session = { user: username, grade: users[username].grade, profile: users[username].profile };
  localStorage.setItem('mvp_session', JSON.stringify(session));
  // aseguramos estado inicial
  const key = `mvp_state_${username}`;
  if(!localStorage.getItem(key)){
    localStorage.setItem(key, JSON.stringify({ stars:{}, unlocked:[] }));
  }

  // mostrar loader con logo animado
  showLoader();

  // efecto de carga (mostrar por 1.4s)
  beep(880,120,0.07);
  await delay(1400);

  // redirección según usuario
  let mapPath = "mapa.html"; // valor por defecto
  if (username === "marling2025") {
    mapPath = "mapa_autismo.html";
  } else if (username === "marbel2025") {
    mapPath = "mapa_dificultad.html";
  }

  // final redirect
  window.location.href = mapPath;
});

// helpers
function delay(ms){ return new Promise(res=>setTimeout(res, ms)); }

// modal behavior
function showErrorModal(){
  modal.setAttribute('aria-hidden', 'false');
  // shake
  const card = modal.querySelector('.modal-card');
  card.style.animation = 'shake 480ms';
  setTimeout(()=> card.style.animation = '', 500);
  // set focus on close
  modalClose.focus();
}
modalClose.addEventListener('click', ()=>{
  modal.setAttribute('aria-hidden', 'true');
  userInput.focus();
});

// loader show/hide
function showLoader(){
  loader.setAttribute('aria-hidden','false');
  // small pulse on logo
  const img = loader.querySelector('img');
  if(img) img.animate([{transform:'scale(0.92)'},{transform:'scale(1.06)'},{transform:'scale(1)'}],{duration:1000,iterations:1});
}

// prevent accidental reveal of user list / suggestions (autocomplete off is set)
document.addEventListener('DOMContentLoaded', ()=>{
  // remove any browser suggestions on inputs aggressively
  userInput.setAttribute('autocomplete','off');
  passInput.setAttribute('autocomplete','new-password');

  // small playful animation on brand image
  const bImg = document.querySelector('.brand img');
  if(bImg){
    bImg.animate([{transform:'translateY(-8px) rotate(-2deg)'},{transform:'translateY(0) rotate(0)'}],{duration:1800,iterations:Infinity,easing:'ease-in-out'});
  }
});
