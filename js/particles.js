/**
 * particles.js — Floating ambient particles in hero section
 */

(function () {
  const container = document.getElementById('particles');
  if (!container) return;

  // Skip heavy animation on reduced-motion or mobile
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 600) return;

  const PARTICLE_COUNT = 35;
  const COLORS = ['#00e5ff', '#00ff94', '#00e5ff', '#00e5ff', '#bf5af2'];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size     = Math.random() > 0.6 ? 3 : 2;
    const color    = COLORS[Math.floor(Math.random() * COLORS.length)];
    const duration = 10 + Math.random() * 18;
    const delay    = Math.random() * 15;
    const left     = Math.random() * 100;
    const drift    = (Math.random() - 0.5) * 80;
    const opacity  = 0.25 + Math.random() * 0.45;

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${left}%;
      bottom: -10px;
      box-shadow: 0 0 ${size * 3}px ${color};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      --p-drift: ${drift}px;
      --p-opacity: ${opacity};
    `;

    container.appendChild(p);
  }
})();
