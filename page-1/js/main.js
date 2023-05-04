
window.addEventListener("scroll", function() {
  stickyContent(),
  scrollTop()

});

const leftSide = document.getElementsByClassName("left-side");
const navbar = document.getElementById("nav-bar");
const topBtn = document.getElementById("top-btn");
const sticky = navbar.offsetTop;
const menuIcon = document.querySelector('#menu-icon i');
const navList = document.querySelector('.nav');

function stickyContent() {
 
  if (document.documentElement.offsetHeight >= sticky) {
    navbar.classList.add("sticky");
  } 
  else {
    navbar.classList.remove("sticky");
  }
}
topBtn.addEventListener("click", function() {scrollAction()});

function scrollAction() {
  scrollTo(0,0);
}

function scrollTop() {
  let yScrollAxis = document.documentElement.scrollTop;
  if (yScrollAxis >200) {
    topBtn.classList.remove('hidden');
  //   setTimeout(function(){
  //     topBtn.classList.remove('hidden');
  //  }, 1000);
  } else {
    topBtn.classList.add('hidden');
  }
}

let text = gsap.utils.toArray(".text-animation");
text.forEach(element => {
  const anim = gsap.timeline({ 
    scrollTrigger: {
      trigger: element,
      start: "center 70%",
      end: "center 40%",
      // enable if you want to see markers 
      // markers: true, 
      toggleActions: "play none none reverse" }   
});

  anim.fromTo(element, {
          x: -document.documentElement.clientWidth,
          duartion: 1
          }, { x:0
          })
});


function toggleNav() {
menuIcon.classList.toggle('fa-xmark');
navList.classList.toggle('nav-active');
}
menuIcon.addEventListener('click', function() {
toggleNav();
});