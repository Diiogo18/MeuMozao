const canvas = document.getElementById('floresCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flores = [];
let intervaloFlores = null;

function criarFlor() {
  return {
    x: Math.random() * canvas.width,
    y: 0,
    r: 5 + Math.random() * 5,
    d: Math.random() * 1,
    color: `hsl(${Math.random() * 360}, 70%, 80%)`
  };
}

function desenharFlores() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let flor of flores) {
    ctx.beginPath();
    ctx.arc(flor.x, flor.y, flor.r, 0, Math.PI * 2);
    ctx.fillStyle = flor.color;
    ctx.fill();
    flor.y += flor.d + 1;
    if (flor.y > canvas.height) {
      flor.y = 0;
      flor.x = Math.random() * canvas.width;
    }
  }
}

function iniciarSurpresa() {
  if (!intervaloFlores) {
    for (let i = 0; i < 100; i++) {
      flores.push(criarFlor());
    }
    intervaloFlores = setInterval(desenharFlores, 33);
  }
}