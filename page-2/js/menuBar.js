const menuIcon = document.querySelector('#menu-icon i');
const navList = document.querySelector('.nav');

function toggleNav() {
  menuIcon.classList.toggle('fa-xmark');
  navList.classList.toggle('nav-active');
  
  }
  menuIcon.addEventListener('click', function() {
    toggleNav();
    if (menuIcon.classList.contains('fa-xmark')){
      navList.style.display = "flex";
    } 
    else {
      navList.style.display= null; 
    }
  });
