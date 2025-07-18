let soundOn = true;
const wave = document.getElementById('curseur');

wave.classList.add('playing');

const menuBtn = document.getElementById('menuBtn');
document.addEventListener('mousemove', (e) => {
  const rect = menuBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;
  const distance = Math.hypot(dx, dy);

  if (distance < 150) {
    menuBtn.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
  } else {
    menuBtn.style.transform = 'translate(0, 0)';
  }
});

document.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 40 + 10;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

    sparkle.style.setProperty('--x', `${offsetX}px`);
    sparkle.style.setProperty('--y', `${offsetY}px`);

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  }
});

let isScrolling = false;
let scrollAmount = 0;

const videoOverlay = document.getElementById('videoOverlay');
const quizVideo = document.getElementById('quizVideo');
const elementsToHide = document.querySelectorAll('header, .bubble, .pagination, .wave');


const container = document.getElementById('scrollContainer');
    window.addEventListener('wheel', function(e) {
      container.scrollLeft += e.deltaY;
    });

const menuOverlay = document.getElementById('menuOverlay');
const menuContent = document.getElementById('menuContent');

menuBtn.addEventListener('click', () => {
  menuOverlay.style.display = 'flex';
});

menuOverlay.addEventListener('click', (e) => {
  if (!menuContent.contains(e.target)) {
    menuOverlay.style.display = 'none';
  }
});
