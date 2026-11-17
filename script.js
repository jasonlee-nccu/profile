'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
document.querySelectorAll('#siteNav .nav-link, #siteNav .btn').forEach((link) => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('siteNav');
    if (window.bootstrap && nav.classList.contains('show')) {
      window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});
