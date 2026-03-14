/* ─────────────────────────────────────────────────────────────
   Sahara Coffee Co. — Main JavaScript
───────────────────────────────────────────────────────────── */

// ── Countdown Timer ─────────────────────────────────────────
const OPENING_DATE = new Date('2026-05-01T08:00:00');

function updateCountdown() {
  const now  = new Date();
  const diff = OPENING_DATE - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<p class="countdown__date" style="font-size:1.4rem;color:var(--gold);font-family:var(--font-serif)">We\'re Open! Come visit us in Milford, CT.</p>';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  const pad = (n) => String(n).padStart(2, '0');

  document.getElementById('cd-days').textContent  = pad(days);
  document.getElementById('cd-hours').textContent = pad(hours);
  document.getElementById('cd-mins').textContent  = pad(mins);
  document.getElementById('cd-secs').textContent  = pad(secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ── Nav: scroll class & smooth close on mobile link click ───
const nav       = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ── Menu Tabs ────────────────────────────────────────────────
const tabs    = document.querySelectorAll('.menu__tab');
const panels  = document.querySelectorAll('.menu__panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('menu__tab--active'));
    tab.classList.add('menu__tab--active');

    panels.forEach(panel => {
      const isTarget = panel.id === `tab-${target}`;
      panel.classList.toggle('menu__panel--hidden', !isTarget);
    });

    // Re-trigger reveal animations for newly shown cards
    document.querySelectorAll(`#tab-${target} .menu-card`).forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(16px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 60);
    });
  });
});

// ── Scroll Reveal ────────────────────────────────────────────
// Add reveal classes to key elements
const revealTargets = [
  { selector: '.about__art',          delay: 0 },
  { selector: '.about__text > *',     delay: 1 },
  { selector: '.menu-card',           delay: 1 },
  { selector: '.visit__card',         delay: 1 },
  { selector: '.visit__connect',      delay: 0 },
];

revealTargets.forEach(({ selector, delay }) => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    if (delay) el.classList.add(`reveal-delay-${Math.min(i + 1, 3)}`);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Smooth anchor scroll (offset for fixed nav) ─────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
