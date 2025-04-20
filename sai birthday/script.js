// script.js
// Generate random confetti particles
document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.querySelector('.confetti');
    for (let i = 0; i < 100; i++) {
      const elem = document.createElement('div');
      elem.classList.add('confetti-element');
      elem.style.left = Math.random() * 100 + 'vw';
      elem.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 70%)`;
      elem.style.animationDelay = Math.random() * 5 + 's';
      confettiContainer.appendChild(elem);
    }
  });