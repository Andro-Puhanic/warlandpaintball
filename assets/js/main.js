// Helper: smooth scroll to section if element has data-scroll-to
function setupScrollToSection() {
  document.querySelectorAll('[data-scroll-to]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      const targetId = link.getAttribute('data-scroll-to');
      const hash = link.getAttribute('href');
      // Only prevent if on same page anchor
      if (hash && hash.startsWith('#')) {
        event.preventDefault();
      }
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Mobile nav toggle
function setupMobileNav() {
  const toggle = document.querySelector('.ws-nav__toggle');
  const menu = document.querySelector('.ws-nav__menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('ws-nav__menu--open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('ws-nav__menu--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}


// Cookie banner
const COOKIE_KEY = 'wildshot_cookie_consent';

function showCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  banner.classList.add('ws-cookie-banner--visible');
  banner.setAttribute('aria-hidden', 'false');
}

function hideCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  banner.classList.remove('ws-cookie-banner--visible');
  banner.setAttribute('aria-hidden', 'true');
}

function setupCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  const existing = localStorage.getItem(COOKIE_KEY);
  if (!existing) {
    showCookieBanner();
  }

  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, 'accepted');
      hideCookieBanner();
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, 'declined');
      hideCookieBanner();
    });
  }

  // Footer "Postavke kolačića" -> re-open banner
  const settingsTrigger = document.getElementById('cookie-settings-trigger');
  if (settingsTrigger) {
    settingsTrigger.addEventListener('click', function () {
      showCookieBanner();
    });
  }
}


// Footer year
function setupFooterYear() {
  const year = new Date().getFullYear();
  const candidates = [
    'footer-year-text',
    'footer-year-text-contact',
    'footer-year-text-privacy',
    'footer-year-text-cookie'
  ];

  candidates.forEach(function (id) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = '© ' + year + ' Wildshot Paintball. Sva prava pridržana.';
    }
  });
}

// Init
document.addEventListener('DOMContentLoaded', function () {
  setupScrollToSection();
  setupMobileNav();
  setupGalleryFilter();
  setupCookieBanner();
  setupContactFormValidation();
  setupFooterYear();
});
