!function(e){var t={};function n(s){if(t[s])return t[s].exports;var c=t[s]={i:s,l:!1,exports:{}};return e[s].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(s,c,function(t){return e[t]}.bind(null,c));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(3);const s=document.getElementById("menu"),c=document.getElementById("menu-open"),o=document.getElementById("menu-close"),i=document.getElementById("mobile-menu"),l=document.getElementById("mobile-menu-open"),r=document.getElementById("mobile-menu-close");c&&c.addEventListener("click",function(){s.classList.add("flex")},!1),o&&o.addEventListener("click",function(){s.classList.remove("flex")},!1),l&&l.addEventListener("click",function(){console.log("mobile"),i.classList.add("flex")},!1),r&&r.addEventListener("click",function(){i.classList.remove("flex")},!1);const a=document.getElementById("contentBox"),u=document.getElementById("contentBox-open"),d=document.getElementById("contentBox-close"),m=document.getElementById("contentBoxToggle");m&&m.addEventListener("click",function(e){e.preventDefault(),a.classList.toggle("hidden-forced"),u.classList.toggle("hidden"),d.classList.toggle("hidden"),console.log("click")},!1);let f=0;var g=0;function h(){const e=document.getElementById("header");if(!e)return;const t=document.getElementsByTagName("body")[0];if(e.classList.contains("opacity-0")){const n=e.clientHeight;(f=window.pageYOffset)<g&&(e.classList.remove("opacity-0"),t.style.paddingTop=n),g=f}}window.onload=function(){document.addEventListener("scroll",h,!1),function(){if("createTouch"in document)try{for(var e=/:hover/,t=0;t<document.styleSheets.length;t++){var n=document.styleSheets[t];if(n.cssRules)for(var s=n.cssRules.length-1;s>=0;s--){var c=n.cssRules[s];c.type===CSSRule.STYLE_RULE&&e.test(c.selectorText)&&n.deleteRule(s)}}}catch(e){}}()};const p=document.getElementById("search-query"),y=document.getElementById("search-options");p.addEventListener("input",function(){console.log("focus"),y.classList.add("opacity-50"),""===p.value&&y.classList.remove("opacity-50")},!1)},function(e,t,n){},,function(e,t){summaryInclude=60;var n={shouldSort:!0,includeMatches:!0,threshold:0,tokenize:!0,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:[{name:"title",weight:.8},{name:"contents",weight:.5},{name:"hero",weight:.3},{name:"klant",weight:.3},{name:"tags",weight:.3},{name:"categories",weight:.3}]},s=function(e){return decodeURIComponent((location.search.split(e+"=")[1]||"").split("&")[0]).replace(/\+/g," ")}("s");function c(e){$.each(e,function(e,t){var c=t.item.contents,o="",i=[];n.tokenize?i.push(s):$.each(t.matches,function(e,t){"tags"==t.key||"categories"==t.key?i.push(t.value):"contents"==t.key&&(start=t.indices[0][0]-summaryInclude>0?t.indices[0][0]-summaryInclude:0,end=t.indices[0][1]+summaryInclude<c.length?t.indices[0][1]+summaryInclude:c.length,o+=c.substring(start,end),i.push(t.value.substring(t.indices[0][0],t.indices[0][1]-t.indices[0][0]+1)))}),o.length<1&&(o+=c.substring(0,2*summaryInclude));var l=function(e,t){var n,s,c,o,i;s=/\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g,c=e;for(;null!==(n=s.exec(e));)c=t[n[1]]?c.replace(n[0],n[2]):c.replace(n[0],"");for(o in e=c,t)i=new RegExp("\\$\\{\\s*"+o+"\\s*\\}","g"),e=e.replace(i,t[o]);return e}($("#search-result-template").html(),{key:e,title:t.item.title,klant:t.item.klant,hero:t.item.hero,link:t.item.permalink,tags:t.item.tags,categories:t.item.categories,snippet:o});$("#search-results").append(l),$.each(i,function(t,n){$("#summary-"+e).mark(n)})})}s?($("#search-query").val(s),function(e){$.getJSON("/index.json",function(t){var s=t,o=new Fuse(s,n),i=o.search(e);if(console.log({matches:i}),i.length>0)c(i);else{$("#search-query").val("");var l=$("<div/>").addClass("bg-orange pin-x clearfix relative min-h-screen-small flex flex-col items-center text-center justify-center z-20 w-full text-white pin-t text-white").html("<div class='px-6'><h1 class='font-medium text-2xl md:text-4xl'>Geen resultaat. Try Again.</h1>");$("#search-results").parent().append(l),$("#search-results").remove()}})}(s)):$("#search-results").append("<p>Please enter a word or phrase above</p>")}]);