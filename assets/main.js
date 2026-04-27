// ── Mobile nav toggle ──────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
}

// ── Active nav link ────────────────────────────
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// ── Scroll-reveal animation ────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ── Contact form ───────────────────────────────
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Sending…';
    setTimeout(() => {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#22c55e';
      form.reset();
    }, 1200);
  });
}
