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

let darkMode = localStorage.getItem('darkMode'); 
const logo = document.querySelector('#logo');
const lightIcon = document.querySelector('#light-button i');
const bodyExcept = document.querySelector('body > :not(.nav)');

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  navList.classList.remove('nav-light');
  navList.classList.add('nav-dark');
  menuIcon.classList.add('menu-icon-dark');
  localStorage.setItem('darkMode', 'enabled');
  logo.src = "./icons/bteam_white.svg";
  lightIcon.classList.add('fa-moon');
  
  // document.body.style.transition = "1s ease-in-out";
  //if you use transition on all body elements u will notice flicker nav background on larger screens, thats why im using exception only on one element
  bodyExcept.style.transition = "1s ease-in-out";
}

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  navList.classList.remove('dark-mode');
  menuIcon.classList.remove('menu-icon-dark');
  navList.classList.add('nav-light');
  navList.classList.remove('nav-dark');
  localStorage.setItem('darkMode', 'disabled');
  logo.src = "./icons/bteam_black.svg";
  lightIcon.classList.remove('fa-moon');
  
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
} else {
  navList.classList.add('nav-light');
}

lightIcon.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});