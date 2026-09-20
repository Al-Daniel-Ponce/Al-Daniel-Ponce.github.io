/* ============================================
   Multimedia Portfolio - Interactions
   ============================================ */

/* Navbar background on scroll */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* Mobile hamburger menu */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

/* Dropdown Menu */
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownBtn.addEventListener('click', function () {
  dropdownMenu.classList.toggle('show');
  dropdownBtn.classList.toggle('open');
});

/* Close dropdown when clicking outside */
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    dropdownMenu.classList.remove('show');
    dropdownBtn.classList.remove('open');
  }
});

/* Close dropdown when a link inside is clicked */
dropdownMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    dropdownMenu.classList.remove('show');
    dropdownBtn.classList.remove('open');
  });
});

/* Close mobile menu when a link is clicked */
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* Active nav link highlighting on scroll */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function highlightNav() {
  const scrollPos = window.scrollY + 120;
  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navItems.forEach((item) => {
        item.classList.toggle('active', item.getAttribute('href') === '#' + section.id);
      });
    }
  });
}

window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);

/* Scroll reveal animations */
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight - 80;
  revealElements.forEach((el) => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* Animate skill bars when the skills section becomes visible */
const skillBars = document.querySelectorAll('.fill');

function animateBars() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100 && !skillBars[0].classList.contains('animated')) {
    skillBars.forEach((bar) => {
      bar.classList.add('animated');
      bar.style.width = bar.dataset.width + '%';
    });
  }
}

window.addEventListener('scroll', animateBars);
window.addEventListener('load', animateBars);

/* Contact form feedback (no backend - just a friendly alert) */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    alert('Thanks, ' + (name || 'friend') + '! Your message is ready to send. Connect with me on social media while this form gets a backend. 😉');
    contactForm.reset();
  });
}
