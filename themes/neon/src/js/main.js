import styles from "../css/app.css";
import search from './search';


const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

const mobilemenu = document.getElementById('mobile-menu');
const mobilemenuOpen = document.getElementById('mobile-menu-open');
const mobilemenuClose = document.getElementById('mobile-menu-close');


if (menuOpen) {
  menuOpen.addEventListener('click', function () {
    menu.classList.add('flex');
  }, false)
}

if (menuClose) {
  menuClose.addEventListener('click', function () {
    menu.classList.remove('flex');
  }, false)
}

if (mobilemenuOpen) {
  mobilemenuOpen.addEventListener('click', function () {
    console.log('mobile')
    mobilemenu.classList.add('flex');
  }, false)
}

if (mobilemenuClose) {
  mobilemenuClose.addEventListener('click', function () {
    mobilemenu.classList.remove('flex');
  }, false)
}

const contentBox = document.getElementById('contentBox');
const contentBoxOpenIcon = document.getElementById('contentBox-open');
const contentBoxCloseIcon = document.getElementById('contentBox-close');
const contentBoxToggle = document.getElementById('contentBoxToggle');

if (contentBoxToggle) {
  contentBoxToggle.addEventListener('click', function (e) {
    e.preventDefault();
    contentBox.classList.toggle('hidden-forced');
    contentBoxOpenIcon.classList.toggle('hidden');
    contentBoxCloseIcon.classList.toggle('hidden');

    console.log('click')
  }, false)
}

function removeHoverCSSRule() {
  if ('createTouch' in document) {
    try {
      var ignore = /:hover/;
      for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (!sheet.cssRules) {
          continue;
        }
        for (var j = sheet.cssRules.length - 1; j >= 0; j--) {
          var rule = sheet.cssRules[j];
          if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
            sheet.deleteRule(j);
          }
        }
      }
    }
    catch(e) {
    }
  }
}




let currentScrollY = 0;
var lastKnownScrollY = 0;

function onScroll() {
  const header = document.getElementById('header');

  if (!header) return;

  const body = document.getElementsByTagName('body')[0];

  if (header.classList.contains('opacity-0')) {
    const height = header.clientHeight;
    currentScrollY = window.pageYOffset;
    if (currentScrollY < lastKnownScrollY) {
      header.classList.remove('opacity-0');
      body.style.paddingTop = height;
    }
    lastKnownScrollY = currentScrollY;
  }
}

window.onload = function () {
  document.addEventListener('scroll', onScroll, false);
  removeHoverCSSRule();
}



const searchQuery = document.getElementById('search-query');
const searchOptions = document.getElementById('search-options');



searchQuery.addEventListener('input', function () {
  console.log('focus');
  searchOptions.classList.add('opacity-50');
  if (searchQuery.value === "") {
    searchOptions.classList.remove('opacity-50');
  }
}, false)

