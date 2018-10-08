import styles from "../css/app.css";



const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');


menuOpen.addEventListener('click', function() {
  menu.classList.add('flex');
}, false)

menuClose.addEventListener('click', function() {
  menu.classList.remove('flex');
}, false)

let currentScrollY = 0;
var lastKnownScrollY = 0;

function onScroll() {
  const header = document.getElementById('header');

  if(header.classList.contains('hidden')) {
    currentScrollY = window.pageYOffset;
    if(currentScrollY < lastKnownScrollY) {
      header.classList.remove('hidden')
    }
    lastKnownScrollY = currentScrollY;
  }
}

window.onload = function(){
  document.addEventListener('scroll', onScroll, false);
}
