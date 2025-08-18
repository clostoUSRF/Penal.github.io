const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let w,h,columns,drops,fontSize=16;
const glyphs = '40K?19D%NW&023N$C0C98@E73J33D;
function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  columns = Math.floor(w / fontSize);
  drops = Array(columns).fill(0);
}
resize();
window.addEventListener('resize', resize);
function draw(){
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  ctx.fillRect(0,0,w,h);
  ctx.fillStyle = '#00ff9c';
  ctx.font = fontSize+'px monospace';
  for(let i=0;i<drops.length;i++){
    const text = glyphs[Math.floor(Math.random()*glyphs.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);
    if(drops[i]*fontSize > h && Math.random() > 0.975) drops[i]=0;
    drops[i]++;
  }
  requestAnimationFrame(draw);
}
draw();


