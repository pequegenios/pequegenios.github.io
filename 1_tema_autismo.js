(() => {
  const numbers = Array.from({length:10},(_,i)=>i+1);
  const colors = ['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5','#2196f3','#03a9f4','#00bcd4','#009688','#4caf50'];
  const board = document.getElementById('board');
  const status = document.getElementById('status');
  const result = document.getElementById('result');
  const completed = document.getElementById('completed');

  const popupHero = document.getElementById('popupHero');
  const heroImg = popupHero.querySelector('img');
  const collectBtn = document.getElementById('collectBtn');

  const collectionPopup = document.getElementById('collectionPopup');
  const collectionDiv = document.getElementById('collection');
  const closeCollection = document.getElementById('closeCollection');

  const resetBtn = document.getElementById('reset');
  const hintBtn = document.getElementById('hint');
  const backBtn = document.getElementById('back');
  const correctSound = document.getElementById('correctSound');
  const wrongSound = document.getElementById('wrongSound');

  const endPopup = document.getElementById('endPopup');
  const retryBtn = document.getElementById('retryBtn');
  const mapBtn = document.getElementById('mapBtn');

  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let unlockedHeroes = [];

  let next=1, errors=0, startTime=Date.now(), hintShown=false;

  function resizeCanvas(){canvas.width=window.innerWidth; canvas.height=window.innerHeight;}
  window.addEventListener('resize',resizeCanvas);
  resizeCanvas();

  function shuffle(arr){return arr.slice().sort(()=>Math.random()-0.5);}

  function render(){
    board.innerHTML='';
    completed.innerHTML='';
    const order = shuffle(numbers);
    order.forEach(n=>{
      const t = document.createElement('button');
      t.className='tile';
      t.textContent=n;
      t.dataset.num=n;
      t.style.background = colors[n-1];
      t.addEventListener('click', onSelect);
      board.appendChild(t);
    });
    next=1; errors=0; startTime=Date.now(); hintShown=false;
    status.textContent='Sigue el orden: comienza con 1';
    result.textContent='';
  }

  function onSelect(e){
    const n = Number(e.currentTarget.dataset.num);
    if(n===next){
      e.currentTarget.classList.add('correct');
      e.currentTarget.disabled=true;
      correctSound.currentTime=0; correctSound.play();
      moveToCompleted(e.currentTarget);
      createParticles(e.currentTarget);
      next++;
      status.textContent=`¡Bien! Sigue con ${next<=10?next:'🎉 Completado!'}`;
      if(next>10) finish();
    } else {
      errors++;
      e.currentTarget.classList.add('wrong');
      setTimeout(()=>e.currentTarget.classList.remove('wrong'),350);
      wrongSound.currentTime=0; wrongSound.play();
      status.textContent=`Ese no es el número correcto. Toca ${next}`;
    }
  }

  function moveToCompleted(tile){
    const rect = tile.getBoundingClientRect();
    const compRect = completed.getBoundingClientRect();
    const dx = compRect.left + compRect.width/2 - (rect.left + rect.width/2);
    const dy = compRect.top + compRect.height/2 - (rect.top + rect.height/2);
    tile.style.transition='transform 0.7s ease-out, opacity 0.7s';
    tile.style.transform=`translate(${dx}px,${dy}px) scale(0.6)`;
    setTimeout(()=>{
      tile.style.transition='none';
      tile.style.transform='none';
      completed.appendChild(tile);
    },700);
  }

  function createParticles(el){
    const rect = el.getBoundingClientRect();
    for(let i=0;i<20;i++){
      particles.push({
        x:rect.left+rect.width/2,
        y:rect.top+rect.height/2,
        vx:(Math.random()-0.5)*6,
        vy:(Math.random()-3)*3,
        size:Math.random()*6+4,
        color:el.style.background,
        alpha:1
      });
    }
  }

  function updateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i)=>{
      p.x+=p.vx; p.y+=p.vy; p.vy+=0.05; p.alpha-=0.02;
      ctx.fillStyle=p.color; ctx.globalAlpha=p.alpha;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,2*Math.PI); ctx.fill();
      if(p.alpha<=0) particles.splice(i,1);
    });
    ctx.globalAlpha=1;
    requestAnimationFrame(updateParticles);
  }
  updateParticles();

  function finish(){
    popupHero.classList.remove('hidden');
    unlockedHeroes.push(heroImg.src);
  }

  collectBtn.addEventListener('click', ()=>{
    popupHero.classList.add('hidden');
    collectionDiv.innerHTML='';
    unlockedHeroes.forEach(src=>{
      const img = document.createElement('img');
      img.src=src;
      collectionDiv.appendChild(img);
    });
    collectionPopup.classList.remove('hidden');
  });

  function showStarsPopup() {
    const starsPopup = document.createElement('div');
    starsPopup.className = 'popup';
    starsPopup.style.background = 'rgba(0,0,0,0.6)';
    starsPopup.style.display = 'flex';
    starsPopup.style.alignItems = 'center';
    starsPopup.style.justifyContent = 'center';
    starsPopup.style.zIndex = 2000;

    const starsContent = document.createElement('div');
    starsContent.style.background = '#fff';
    starsContent.style.padding = '30px';
    starsContent.style.borderRadius = '20px';
    starsContent.style.textAlign = 'center';
    starsContent.style.maxWidth = '350px';
    starsContent.style.boxShadow = '0 12px 24px rgba(0,0,0,0.3)';
    starsPopup.appendChild(starsContent);

    let stars = 1;
    let message = '';
    if(errors <= 2) { stars = 3; message = '¡Increíble! Has completado el nivel casi sin errores 🎉'; }
    else if(errors >= 3 && errors <= 5) { stars = 2; message = '¡Muy bien! Has completado el nivel 👍'; }
    else { stars = 1; message = '¡No te rindas! Puedes intentarlo otra vez 💪'; }

    const msgEl = document.createElement('p');
    msgEl.textContent = message;
    msgEl.style.fontSize = '1.2rem';
    msgEl.style.marginBottom = '16px';
    starsContent.appendChild(msgEl);

    const starsDiv = document.createElement('div');
    starsDiv.style.display = 'flex';
    starsDiv.style.justifyContent = 'center';
    starsDiv.style.gap = '10px';
    starsDiv.style.fontSize = '2.5rem';
    for(let i=0;i<3;i++){
      const star = document.createElement('span');
      star.textContent = i < stars ? '⭐' : '☆';
      star.style.opacity = 0;
      star.style.transform = 'scale(0)';
      starsDiv.appendChild(star);
      setTimeout(()=>{ 
        star.style.transition = 'all 0.5s ease';
        star.style.opacity = 1; 
        star.style.transform = 'scale(1.2)';
        setTimeout(()=>star.style.transform='scale(1)',300);
      }, i*300);
    }
    starsContent.appendChild(starsDiv);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Cerrar';
    closeBtn.className = 'btn link';
    closeBtn.style.marginTop = '20px';
    closeBtn.addEventListener('click',()=>{
      starsPopup.remove();
    });
    starsContent.appendChild(closeBtn);

    document.body.appendChild(starsPopup);
  }

  closeCollection.addEventListener('click', ()=>{
    collectionPopup.classList.add('hidden');
    showStarsPopup(); // aparece inmediatamente
    endPopup.classList.remove('hidden');
  });

  retryBtn.addEventListener('click', ()=>{
    endPopup.classList.add('hidden');
    render();
  });

  mapBtn.addEventListener('click', ()=>{
    localStorage.setItem("nivel_autismo_2", "unlocked");
    window.location.href = 'mapa_autismo.html';
  });

  resetBtn.addEventListener('click', render);

  hintBtn.addEventListener('click',()=>{
    hintShown=!hintShown;
    const tiles=Array.from(board.querySelectorAll('.tile'));
    const target=tiles.find(t=>Number(t.dataset.num)===next);
    if(hintShown && target){
      target.animate([{transform:'scale(1)'},{transform:'scale(1.3)'},{transform:'scale(1)'}],{duration:700});
      status.textContent=`Pista: toca el número ${next}`;
    } else status.textContent=`Sigue con ${next}`;
  });

  backBtn.addEventListener('click',()=>{ window.location.href='mapa_autismo.html'; });

  render();
})();
