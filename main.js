/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/landing */ \"./src/modules/landing.js\");\n/* harmony import */ var _modules_immobilienkauf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/immobilienkauf */ \"./src/modules/immobilienkauf.js\");\n// this file will load up the initial page,  via exported function. \n// and will have the onclick listeners for the \n// \"Kontakt\" \"Verkauf\" \"Kauf\" buttons, which then\n// will call the functions from the modules with the same names\n\n\n\n(0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.loadLandingPage)();\n\nconst landingLogo = document.getElementById('landingPage');\nlandingLogo.addEventListener('click', function(e) {\n});\n\nconst immobilienKauf = document.getElementById('immobilienKaufPage');\nimmobilienKauf.addEventListener('click', function(e) {\n  (0,_modules_immobilienkauf__WEBPACK_IMPORTED_MODULE_1__.loadImmobilienKaufPage)();\n  e.preventDefault();\n});\n\nconst verkauf = document.getElementById('verkaufPage');\nverkauf.addEventListener('click', function(e) {\n  console.log(\"you've clicked on the verkauf\");\n  e.preventDefault();\n});\n\nconst kontakt = document.getElementById('kontaktPage');\nkontakt.addEventListener('click', function(e) {\n  console.log(\"you've clicked on the kontakt\");\n  e.preventDefault();\n});\n\n//# sourceURL=webpack://guthrat-immobilien/./src/index.js?");

/***/ }),

/***/ "./src/modules/immobilienkauf.js":
/*!***************************************!*\
  !*** ./src/modules/immobilienkauf.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadImmobilienKaufPage\": () => (/* binding */ loadImmobilienKaufPage)\n/* harmony export */ });\n// modifies the middle section of the landing page to display\n// the real estate gallery\nfunction loadImmobilienKaufPage() {\n  console.log(\"you've clicked on the immobilien and this module got triggered\");\n}\n\n//# sourceURL=webpack://guthrat-immobilien/./src/modules/immobilienkauf.js?");

/***/ }),

/***/ "./src/modules/landing.js":
/*!********************************!*\
  !*** ./src/modules/landing.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadLandingPage\": () => (/* binding */ loadLandingPage)\n/* harmony export */ });\n// creates landing page in the index html\nfunction loadLandingPage() {\n\n  class HTMLelement {\n    constructor(tag,className, innerHTML) {\n        let element = document.createElement(tag);\n        element.className = className;\n        if (innerHTML){\n          element.innerHTML = innerHTML;\n        }\n        return element;\n    }\n}\n\n// html creation, using IIFE pattern for keeping namespace clean \n// and separate blocks of html\n(function createTopNav () {\n  const topNav = new HTMLelement ('nav', 'top-nav');\n  document.body.appendChild(topNav);\n\n  const topNavUpper = new HTMLelement ('div', 'top-nav--upper-info');\n  topNav.appendChild(topNavUpper);\n\n  const salePitch = new HTMLelement ('div', 'upper-info--sale-pitch', 'IHR IMMOBILIENMAKLER IN KÖLN');\n  topNavUpper.appendChild(salePitch);\n\n  const infoTel = new HTMLelement ('div', 'upper-info--tel', 'Tel.: 0221-444-5566');\n  topNavUpper.appendChild(infoTel);\n\n  const infoMail = new HTMLelement ('div', 'upper-info--mail', 'E-Mail: guthrat@immobilien.de');\n  topNavUpper.appendChild(infoMail);\n\n  const innerHTMLmenu = `\n            <li class=\"menu--logo\">\n                <a href=\"\" class=\"nav-link\" id=\"landingPage\">GR</a> \n            </li>\n            <li class=\"menu--kaufen\">\n                <a href=\"\" class=\"nav-link\" id=\"immobilienKaufPage\">Immobilienkauf</a> \n            </li>\n            <li class=\"menu--verkaufen\">\n                <a href=\"\" class=\"nav-link\" id=\"verkaufPage\">Verkauf</a> \n            </li>\n            <li class=\"menu--kontakt\">\n                <a href=\"\" class=\"nav-link\" id=\"kontaktPage\">Kontakt</a> \n            </li>\n            `\n  const topNavMenu = new HTMLelement ('ul', 'top-nav--menu', innerHTMLmenu);\n  topNav.appendChild(topNavMenu);\n})();\n\n(function createLandingPicture(){\n  const innerHTMLpicture = `\n        <picture>\n        <source\n          srcset=\"../images/mobileLandingHouse640.jpeg\"\n          type=\"image/jpg\"\n          media=\"all and (max-width:600px)\"\n        />\n        <source\n          srcset=\"../images/wideLandingHouse1366.jpeg\"\n          type=\"image/jpg\"\n          media=\"all and (min-width:601px) and (max-width:1200px)\"\n        />\n        <source\n          srcset=\"../images/wideLandingHouse.jpeg\"\n          type=\"image/jpg\"\n          media=\"all and (min-width:1201px)\"\n        />\n        <!-- default image -->\n        <img class=\"landing-img\" src=\"../images/wideLandingHouse1366.jpeg\" alt=\"idyllic house image\" />\n      </picture>\n            `\n  const landingPicture = new HTMLelement ('div', 'header-picture', innerHTMLpicture);\n  landingPicture.id = \"landingPicture\";\n  document.body.appendChild(landingPicture);\n\n})();\n\n(function createAboutSection(){\n  const innerHTMLabout = `\n        <div class=\"section-header\">Mit Guthrat Immobilien sicher in die Zukunft</div>\n        <section class=\"about--container\">\n            <article class=\"about--container-copywriting\">\n                <p class =\"copywriting--text\">Schon seit über 10 Jahren ist Guthrat der Immobilienmakler des Vertrauens in Raum Köln.\n                Verkauf/Ankauf der Immobilien nimmt viel Zeit und Kenntnisse in Anspruch und kann schnell zu einer heiklen\n                und stressigen Angelegenheit werden. </p>\n                <p class =\"copywriting--text\">Gutrath, der Immobilienmakler der Vertrauens in Raum Köln, nimmt den Stress und Probleme aus dieser\n                Gleichung. Unsere jahrelange Erfahrung im Immobilienmarkt wird auch sie vor Problemen\n                und Risiken schützen. </p>\n            </article>\n            <img src=\"/images/agentPhoto.jpeg\" alt=\"Photo of the real estate agent\" class=\"about--container-agent-photo\">\n        </section>\n            `\n  const aboutSection = new HTMLelement ('section', 'about', innerHTMLabout);\n  aboutSection.id = \"aboutSection\"\n  document.body.appendChild(aboutSection);\n})();\n\n(function createShowcaseReel(){\n  const innerHTMLreel = `\n        <div class=\"section-header\">Immobilienangebote</div>\n        <div class=\"showcase-reel--gallery\">\n            <figure class=\"gallery--frame\">\n                <img src=\"/images/house1.jpeg\" alt=\"red yellow house\" class=\"gallery--photo\">\n            </figure>\n            <figure class=\"gallery--frame\">\n                <img src=\"/images/house2.jpeg\" alt=\"brick house\" class=\"gallery--photo\">\n            </figure>\n            <figure class=\"gallery--frame\">\n                <img src=\"/images/house3.jpeg\" alt=\"colorful city house\" class=\"gallery--photo\">\n            </figure>\n            <figure class=\"gallery--frame\">\n                <img src=\"/images/house4.jpeg\" alt=\"modern house\" class=\"gallery--photo\">\n            </figure>\n            <figure class=\"gallery--frame\">\n                <img src=\"/images/house5.jpeg\" alt=\"white kitchen\" class=\"gallery--photo\">\n            </figure>\n            <figure class=\"gallery--frame\">\n                <img src=\"/images/house6.jpeg\" alt=\"antique roof\" class=\"gallery--photo\">\n            </figure>\n            <figure class=\"gallery--frame\">\n                <img src=\"/images/house7.jpeg\" alt=\"grey blue house\" class=\"gallery--photo\">\n            </figure>\n            <figure class=\"gallery--frame\">\n                <img src=\"/images/house8.jpeg\" alt=\"lush room\" class=\"gallery--photo\">\n            </figure>\n        </div>\n            `\n  const showcaseReel = new HTMLelement ('section', 'showcase-reel', innerHTMLreel);\n  showcaseReel.id = \"showcaseReel\";\n  document.body.appendChild(showcaseReel);\n})();\n(function createBottomNav(){\n  const innerHTMLbtmNav = `\n        <div class=\"bottom-nav--name\">Guthrat Immobilien</div>\n        <ul class=\"bottom-nav--address\">\n            <li class=\"address--street\">Maasdorf Straße 231</li>\n            <li class=\"address--city\">50967 Köln</li>\n            <li class=\"address--country\">Deutschland</li>\n        </ul>\n\n        <ul class=\"bottom-nav--info\">\n            <li class=\"lower-info--tel\">Tel.: 0221-444-5566</li>\n            <li class=\"lower-info--mail\">E-Mail: guthrat@immobilien.de</li>\n        </ul>\n\n        <ul class=\"bottom-nav--link-list\">\n            <li class=\"link-list\">\n                <a href=\"\" class=\"nav-link\">Impressum</a> \n            </li>\n            <li class=\"link-list\">\n                <a href=\"\" class=\"nav-link\">AGB</a> \n            </li>\n            <li class=\"link-list\">\n                <a href=\"\" class=\"nav-link\">Datenschutz</a> \n            </li>\n            <li class=\"link-list\">\n                <a href=\"\" class=\"nav-link\">Cookies</a> \n            </li>\n        </ul>\n            `\n  const bottomNav = new HTMLelement ('section', 'bottom-nav', innerHTMLbtmNav);\n  bottomNav.id = \"bottomNav\";\n  document.body.appendChild(bottomNav);\n})();\n}\n\n//# sourceURL=webpack://guthrat-immobilien/./src/modules/landing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;