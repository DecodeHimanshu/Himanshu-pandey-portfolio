/**
 * typing.js — Typewriter cycling effect for hero role text
 */

(function () {
  const el = document.getElementById('typingText');
  if (!el) return;

  const phrases = [
    'CEH v13 Certified | Aspiring SOC Analyst',
    'Threat Detection | SIEM | Incident Response',
    'Blue Team | Log Analysis | Alert Triage',
    'Phishing Analysis | Vulnerability Assessment',
    'Building Safer Systems, One Log at a Time 🛡️',
  ];

  const TYPING_SPEED  = 72;   // ms per character
  const ERASING_SPEED = 35;   // ms per character
  const PAUSE_END     = 2200; // ms to pause at full phrase
  const PAUSE_START   = 400;  // ms before starting new phrase

  let phraseIndex  = 0;
  let charIndex    = 0;
  let isErasing    = false;

  function tick () {
    const current = phrases[phraseIndex];

    if (!isErasing) {
      // Type forward
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        // Reached end — pause then erase
        isErasing = true;
        setTimeout(tick, PAUSE_END);
        return;
      }
      setTimeout(tick, TYPING_SPEED);

    } else {
      // Erase backward
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        // Done erasing — move to next phrase
        isErasing = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, PAUSE_START);
        return;
      }
      setTimeout(tick, ERASING_SPEED);
    }
  }

  // Respect reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = phrases[0];
    return;
  }

  setTimeout(tick, 800);
})();
