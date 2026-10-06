(function () {
  'use strict';

  const html = document.documentElement;
  html.classList.add('js');

  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('shaip-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  const setTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('shaip-theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      const textEl = themeToggle.querySelector('.theme-toggle-text');
      if (textEl) {
        textEl.textContent = theme === 'dark' ? 'Día' : 'Noche';
      }
    }
  };

  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const action = form.getAttribute('action') || '';
      if (action.includes('XXXXXXXX')) {
        e.preventDefault();
        const formData = new FormData(form);
        const nombre = encodeURIComponent(formData.get('nombre') || '');
        const email = encodeURIComponent(formData.get('email') || '');
        const telefono = encodeURIComponent(formData.get('telefono') || '');
        const mensaje = encodeURIComponent(`Nombre: ${formData.get('nombre') || ''}\nEmail: ${formData.get('email') || ''}\nTeléfono: ${formData.get('telefono') || ''}\n\nMensaje:\n${formData.get('mensaje') || ''}`);
        const subject = encodeURIComponent(`Consulta desde web Shaip Domótica - ${formData.get('nombre') || ''}`);
        window.location.href = `mailto:shaipdomotica@gmail.com?subject=${subject}&body=${mensaje}`;
      }
    });
  }

  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('section, .service-item, .how-list li, .contact-info, .form');
  fadeElements.forEach((el, idx) => {
    el.classList.add('fade-in');
    el.style.setProperty('--delay', (idx * 0.05) + 's');
    observer.observe(el);
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    observer.disconnect();
    fadeElements.forEach((el) => { el.classList.remove('fade-in'); el.classList.add('visible'); });
  }
})();
