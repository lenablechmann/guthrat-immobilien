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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_moduleTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/moduleTest */ \"./src/modules/moduleTest.js\");\n/* harmony import */ var _modules_landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/landing */ \"./src/modules/landing.js\");\n\n\n(0,_modules_landing__WEBPACK_IMPORTED_MODULE_1__.loadLandingPage)();\n\n// this file will load up the initial page,  via exported function. \n// and will have the onclick listeners for the \n// \"Kontakt\" \"Verkauf\" \"Kauf\" buttons, which then\n// will call the functions from the modules with the same names\n\nfunction component() {\n    const element = document.createElement('div');\n  \n    element.innerHTML = (0,_modules_moduleTest__WEBPACK_IMPORTED_MODULE_0__.default)(\"Lewitt\");\n  \n    return element;\n  }\n  \n  document.body.appendChild(component());\n\n\n//# sourceURL=webpack://guthrat-immobilien/./src/index.js?");

/***/ }),

/***/ "./src/modules/landing.js":
/*!********************************!*\
  !*** ./src/modules/landing.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadLandingPage\": () => (/* binding */ loadLandingPage)\n/* harmony export */ });\n// creates landing page in the index html\nfunction loadLandingPage() {\n  class elementHTML {\n    constructor(tag,className, innerHTML) {\n        let element = document.createElement(tag);\n        element.className = className;\n        element.innerHTML = innerHTML;\n\n        return element;\n    }\n}\nlet innerHTML = \"testing this thang\"\nconst testing = new elementHTML('div', 'section-header', innerHTML);\ndocument.body.appendChild(testing)\n\n  // function topNav () {\n  //   const topNav = document.createElement('nav');\n  //   topNav.classList.add('top-nav');\n  //   document.body.appendChild(topNav);\n\n  //   const topNavInfo = document.createElement('div');\n  //   topNavInfo.classList.add('top-nav--upper-info');\n  //   document.topNav.appendChild(topNavInfo);\n  // }\n\n}\n\n//# sourceURL=webpack://guthrat-immobilien/./src/modules/landing.js?");

/***/ }),

/***/ "./src/modules/moduleTest.js":
/*!***********************************!*\
  !*** ./src/modules/moduleTest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst myName = (name) => 'Hi! My name is ' + name;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myName);\n\n\n//# sourceURL=webpack://guthrat-immobilien/./src/modules/moduleTest.js?");

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