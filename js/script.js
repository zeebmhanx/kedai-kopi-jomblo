// toogle class active
const navbarnav = document.querySelector
('.navbar-nav');

// ketika hambrg menu di klik
document.querySelector('#hambrg-menu').
onclick = () => {
  navbarnav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector
('#hambrg-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove('active');
  }
});