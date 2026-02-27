/**
 * reveal.js — IntersectionObserver-based scroll reveal
 */

(function () {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  // Respect reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  reveals.forEach((el) => observer.observe(el));
})();
