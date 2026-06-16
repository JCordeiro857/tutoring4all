// ── Mobile Menu ──
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('open');
      document.body.style.overflow = '';
    });
  });
});

// ── FAQ Accordion ──
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').classList.remove('open');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        answer.classList.add('open');
      }
    });
  });
}

// ── Scroll reveal ──
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity .55s ease, transform .55s ease';
    obs.observe(el);
  });
}

// ── Form submit feedback ──
function initForms() {
  document.querySelectorAll('form[data-ajax]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = '✓ Sent! We\'ll be in touch soon.';
      btn.style.background = '#10b981';
      btn.style.color = '#fff';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
        form.reset();
      }, 4000);
    });
  });
}

// ── Large logo above page-hero content on subpages ──
function initHeroLogo() {
  const inner = document.querySelector('.page-hero-inner');
  if (!inner || inner.querySelector('.page-hero-logo')) return;
  const img = document.createElement('img');
  img.src = 'TUTORING-4ALL-transaparent-800x200px-WHITE-writing.png';
  img.alt = 'Tutoring4All';
  img.className = 'page-hero-logo';
  inner.insertBefore(img, inner.firstChild);
}

document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initReveal();
  initForms();
  initHeroLogo();
});
