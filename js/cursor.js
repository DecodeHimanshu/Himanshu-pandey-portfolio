/**
 * cursor.js — Smooth custom cursor with trailing ring
 */

(function () {
  const dot   = document.getElementById('cursor');
  const ring  = document.getElementById('cursorRing');

  if (!dot || !ring) return;

  // Check touch device
  if (window.matchMedia('(hover: none)').matches) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top  = `${mouseY}px`;
  });

  // Smooth ring animation
  function animateRing () {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.left = `${ringX}px`;
    ring.style.top  = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Scale ring on interactive elements
  const interactives = document.querySelectorAll('a, button, .cert-card, .skill-card, .contact-card, .project-card');

  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      ring.style.width  = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'rgba(0,229,255,0.6)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width  = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(0,229,255,0.4)';
    });
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();
