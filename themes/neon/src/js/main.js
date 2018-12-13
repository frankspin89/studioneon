import styles from "../css/app.css";
import search from './search';


const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

const mobilemenu = document.getElementById('mobile-menu');
const mobilemenuOpen = document.getElementById('mobile-menu-open');
const mobilemenuClose = document.getElementById('mobile-menu-close');


menuOpen.addEventListener('click', function() {
  menu.classList.add('flex');
}, false)

menuClose.addEventListener('click', function() {
  menu.classList.remove('flex');
}, false)

mobilemenuOpen.addEventListener('click', function() {
  console.log('mobile')
  mobilemenu.classList.add('flex');
}, false)

mobilemenuClose.addEventListener('click', function() {
  mobilemenu.classList.remove('flex');
}, false)

const contentBox = document.getElementById('contentBox');
const contentBoxOpenIcon = document.getElementById('contentBox-open');
const contentBoxCloseIcon = document.getElementById('contentBox-close');
const contentBoxToggle = document.getElementById('contentBoxToggle');

if(contentBoxToggle) {
contentBoxToggle.addEventListener('click', function(e) {
  e.preventDefault();
  contentBox.classList.toggle('flex');
  contentBoxOpenIcon.classList.toggle('hidden');
  contentBoxCloseIcon.classList.toggle('hidden');

  console.log('click')
}, false)
}




let currentScrollY = 0;
var lastKnownScrollY = 0;

function onScroll() {
  const header = document.getElementById('header');

  if(!header) return;

  const body = document.getElementsByTagName('body')[0];

  if(header.classList.contains('opacity-0')) {
    const height = header.clientHeight;
    currentScrollY = window.pageYOffset;
    if(currentScrollY < lastKnownScrollY) {
      header.classList.remove('opacity-0');
      body.style.paddingTop = height;
    }
    lastKnownScrollY = currentScrollY;
  }
}

window.onload = function(){
  document.addEventListener('scroll', onScroll, false);
}



const searchQuery = document.getElementById('search-query');
const searchOptions = document.getElementById('search-options');



searchQuery.addEventListener('input', function() {
  console.log('focus');
  searchOptions.classList.add('opacity-50');
  if (searchQuery.value === ""){
    searchOptions.classList.remove('opacity-50');
  }
}, false)



