!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},t.parcelRequired7c6=r),r.register("iE7OH",(function(n,t){var o,i;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)r[n[t]]=e[n[t]]},i=function(e){var n=r[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r.register("aNJCr",(function(n,t){var o;e(n.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var i={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var n=i[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),i[e]=n),n}})),r("iE7OH").register(JSON.parse('{"EVgbq":"index.545d1934.js","9DZRs":"image-8.fd078479.jpg","71yjo":"image-10.a8d7cd99.jpg","lwCmw":"image 11.30a8b68c.jpg"}'));var s={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuList:document.querySelector(".listMenu")};function c(){s.menu.classList.toggle("is-open")}s.openMenuBtn.addEventListener("click",c),s.closeMenuBtn.addEventListener("click",c),s.menuList.addEventListener("click",c);var a;a=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("9DZRs");var u;u=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("71yjo");var l;l=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("lwCmw");var d=[{id:0,question:"Ваш пол:",options:["Мужчина","Женщина"]},{id:1,question:"Укажите ваш возраст:",options:["До 18","От 18 до 28","От 29 до 35","От 36"]},{id:2,question:"Выберите лишнее:",options:["Дом","Шалаш","Бунгало","Скамейка","Хижина"]},{id:3,question:"Продолжите числовой ряд: 18  20  24  32 ",options:["62","48","74","57","60","77"]},{id:4,question:"Выберите цвет, который сейчас наиболее Вам приятен:",options:["#A8A8A8","#0000A9","#00A701","#F60100","#FDFF19","#A95403","#000000","#850068","#46B2AC"]},{id:5,question:"Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",options:["#A8A8A8","#46B2AC","#A95403","#00A701","#000000","#F60100","#850068","#FDFF19","#0000A9"]},{id:6,question:"Какой из городов лишний?",options:["Вашингтон","Лондон","Париж","Нью-Йорк","Москва","Оттава"]},{id:7,question:"Выберите правильную фигуру из четырёх пронумерованных.",options:["1","2","3","4"],image:n(a)},{id:8,question:"Вам привычнее и важнее:",options:["Наслаждаться каждой минутой проведенного времени","Быть устремленными мыслями в будущее","Учитывать в ежедневной практике прошлый опыт"]},{id:9,question:"Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",options:["Оно остроконечное","Оно устойчиво","Оно-находится в состоянии равновесия"],image:n(u)},{id:10,question:"Вставьте подходящее число",options:["34","36","53","44","66","42"],image:n(l)},{id:11,question:"обработка результатов",options:"Определение стиля мышления.................................................................."}],p={containerEl:document.querySelector(".test"),btnPassTestEl:document.querySelector(".btnPassTest"),brainImageEl:document.querySelector(".brainHeader"),headerTitleEl:document.querySelector(".headerText"),linkFromMenuEl:document.querySelector(".linkPassTest")};p.btnPassTestEl.addEventListener("click",b),p.linkFromMenuEl.addEventListener("click",b);var m,f=0,v=0,g=function(){switch(v){case 4:case 5:m=' <div class="colorWrap">\n        '.concat(d[v].options.map((function(e){return'<input\n          type="checkBox"\n          class="square"\n          name="'.concat(e,'"\n          style="background-color: ').concat(e,'"\n        />')})).join(""),"\n      </div>");break;case 7:case 10:case 11:console.log(d[v].image),m='\n  <img src="'.concat(d[v].image,'" alt="picture" class="imageQuestion"/>\n<div class="checkboxWrap">\n ').concat(d[v].options.map((function(e){return'<input\n          type="checkBox"\n          class="littleSquare"\n          name="'.concat(e,'"\n          \n        />')})).join(""),"</div> ");break;default:m="".concat(d[v].options.map((function(e){return'<div class="wrap">\n      <input id="'.concat(e,'" class="inputCheck" type="checkbox" name="').concat(e,'" />\n      <label for="').concat(e,'" class="label">\n        ').concat(e,"\n      </label>\n    </div>")})).join(""))}return'<div class="container testModal" id="passTest">\n<progress class="progress" max="100" value="'.concat(f,'"></progress>\n<div>\n<h2 class="question">').concat(d[v].question,'</h2>\n<form class="testForm">\n').concat(m,'\n<button type="submit" class="btnNext">ДАЛЕЕ</button>\n</form>\n</div>\n</div>\n')};function b(){p.brainImageEl.style.visibility="visible",p.headerTitleEl.style.visibility="visible",p.containerEl.innerHTML=g(),document.querySelector(".testForm").addEventListener("submit",E)}var E=function(e){e.preventDefault(),v+=1,f+=100/12,p.containerEl.innerHTML=g(),document.querySelector(".testForm").addEventListener("submit",E)}}();
//# sourceMappingURL=index.545d1934.js.map