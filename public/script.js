const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('visible');
    menuToggle.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('visible');
      menuToggle.classList.remove('open');
    });
  });
}

const themeToggle = document.getElementById('theme-toggle');
const themeModes = ['system', 'dark', 'light'];

function updateThemeButton(mode) {
  if (themeToggle) {
    themeToggle.textContent = `Theme: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
  }
}

function applyTheme(mode) {
  if (mode === 'system') {
    document.body.removeAttribute('data-theme');
  } else {
    document.body.dataset.theme = mode;
  }
  localStorage.setItem('themeMode', mode);
  updateThemeButton(mode);
}

function initTheme() {
  const storedTheme = localStorage.getItem('themeMode') || 'system';
  applyTheme(storedTheme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = localStorage.getItem('themeMode') || 'system';
    const nextIndex = (themeModes.indexOf(current) + 1) % themeModes.length;
    applyTheme(themeModes[nextIndex]);
  });
}

initTheme();

window.addEventListener('scroll', () => {
  document.body.dataset.scrolled = window.scrollY > 20 ? 'true' : 'false';
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = anchor.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
