'use strict';

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll(
  'a:link:not(.footer-link, .web-link)'
);

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var backToTopButtons = document.querySelectorAll('.back-to-top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      backToTopButtons.forEach(function (button) {
        button.style.display = 'block';
      });
    } else {
      backToTopButtons.forEach(function (button) {
        button.style.display = 'none';
      });
    }
  });

  backToTopButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
