let soundOn = true;
const wave = document.getElementById('soundWave');

function toggleSound() {
  if (soundOn) {
    wave.classList.remove('playing');
  } else {
    wave.classList.add('playing');
  }
  soundOn = !soundOn;
}

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

    // Position initiale centrée autour du curseur
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;

    // Mouvement aléatoire vers l'arrière
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 40 + 10;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

    sparkle.style.setProperty('--x', `${offsetX}px`);
    sparkle.style.setProperty('--y', `${offsetY}px`);

    document.body.appendChild(sparkle);

    // Nettoyage après disparition
    setTimeout(() => {
      sparkle.remove();
    }, 600);
  }
});
