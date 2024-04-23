//Notif masuk web
alert("Hi!!! Welcome to eidenyost Web (:");
// Navigasi Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Lightbox
const images = document.querySelectorAll('#gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

images.forEach(image => {
  image.addEventListener('click', () => {
    lightboxImage.src = image.src;
    lightbox.style.display = 'block';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});