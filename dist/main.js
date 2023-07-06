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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\r\n  const content = document.getElementById(\"content\");\r\n  // a div main container is created under content container\r\n  const mainContainer = document.createElement(\"div\");\r\n  mainContainer.classList.add(\"main-container\");\r\n\r\n  // a contact container is created and appended to main container\r\n  const contactContainer = document.createElement(\"div\");\r\n  contactContainer.classList.add(\"child-container\");\r\n  const contactDetails = document.createElement(\"div\");\r\n  contactDetails.classList.add(\"desc-container\");\r\n\r\n  const heading = document.createElement(\"h2\");\r\n  heading.classList.add(\"heading-text\");\r\n  heading.style.border = \"none\";\r\n  heading.innerText = \"Contact Us\";\r\n  contactContainer.appendChild(heading);\r\n  const name = document.createElement(\"p\");\r\n  name.classList.add(\"text\");\r\n  name.innerText = \"Harsh Kumar\";\r\n  const phone = document.createElement(\"p\");\r\n  phone.classList.add(\"text\");\r\n  phone.innerText = \"7339980606\";\r\n  const address = document.createElement(\"p\");\r\n  address.classList.add(\"text\");\r\n  address.innerText = \"Pune, India\";\r\n\r\n  contactDetails.appendChild(name);\r\n  contactDetails.appendChild(phone);\r\n  contactDetails.appendChild(address);\r\n  contactContainer.appendChild(contactDetails);\r\n\r\n  mainContainer.appendChild(contactContainer);\r\n  content.appendChild(mainContainer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\r\n\n\n//# sourceURL=webpack://restaurant-project/./src/contact.js?");

/***/ }),

/***/ "./src/createTabs.js":
/*!***************************!*\
  !*** ./src/createTabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst createTabs = () => {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  //navbar created\r\n  const navContainer = document.createElement(\"nav\");\r\n  const navList = document.createElement(\"ul\");\r\n\r\n  const createNavItem = (text, action) => {\r\n    const navItem = document.createElement(\"li\");\r\n    const navLink = document.createElement(\"a\");\r\n    navLink.textContent = text;\r\n    navItem.appendChild(navLink);\r\n    navList.appendChild(navItem);\r\n\r\n    navLink.addEventListener(\"click\", () => {\r\n      clearContent();\r\n      action();\r\n      setActiveTab(navLink);\r\n    });\r\n  };\r\n\r\n  const setActiveTab = (selectedTab) => {\r\n    const navLinks = navList.getElementsByTagName(\"a\");\r\n    for (let i = 0; i < navLinks.length; i++) {\r\n      navLinks[i].style.backgroundColor =\r\n        navLinks[i] === selectedTab\r\n          ? \"rgb(241, 241, 108)\"\r\n          : \"rgb(239, 179, 179)\";\r\n    }\r\n  };\r\n\r\n  createNavItem(\"Home\", _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n  createNavItem(\"Menu\", _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  createNavItem(\"Contact\", _contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\n  const defaultTab = navList.getElementsByTagName(\"a\")[0];\r\n  setActiveTab(defaultTab);\r\n\r\n  navContainer.appendChild(navList);\r\n\r\n  //navbar appended to content container\r\n  content.appendChild(navContainer);\r\n};\r\n\r\nconst clearContent = () => {\r\n  const content = document.querySelector(\"#content\");\r\n  const mainContainer = document.querySelector(\".main-container\");\r\n  content.removeChild(mainContainer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\r\n\n\n//# sourceURL=webpack://restaurant-project/./src/createTabs.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  //main container is created under content\r\n  const mainContainer = document.createElement(\"div\");\r\n  mainContainer.classList.add(\"main-container\");\r\n\r\n  const heading = document.createElement(\"h2\");\r\n  heading.innerText = \"The Hungry Hideaway\";\r\n  heading.classList.add(\"heading-text\");\r\n  mainContainer.appendChild(heading);\r\n\r\n  // description container is created containing description of restaurant\r\n  const descContainer = document.createElement(\"div\");\r\n  descContainer.classList.add(\"child-container\");\r\n  const descText = document.createElement(\"p\");\r\n  descText.classList.add(\"text\");\r\n  descText.innerText =\r\n    \"Discover a hidden gem at The Hungry Hideaway. Our culinary sanctuary offers tantalizing dishes crafted with care, an inviting atmosphere, and attentive service. Experience unforgettable flavors that will satisfy your cravings and leave you hungry for more.\";\r\n  descContainer.appendChild(descText);\r\n\r\n  //Opening hour continer is created containing opening our of the restaurant\r\n  const openingHourContainer = document.createElement(\"div\");\r\n  openingHourContainer.classList.add(\"child-container\");\r\n\r\n  const hourText = document.createElement(\"h4\");\r\n  hourText.classList.add(\"sub-heading\");\r\n  hourText.innerText = \"Hour\";\r\n  \r\n  const scheduleElement = document.createElement(\"div\");\r\n  scheduleElement.classList.add(\"time-table\");\r\n  const schedule = {\r\n    Sunday: \"8am - 8pm\",\r\n    Monday: \"6am - 6pm\",\r\n    Tuesday: \"6am - 6pm\",\r\n    Wednesday: \"6am - 6pm\",\r\n    Thursday: \"6am - 10pm\",\r\n    Friday: \"6am - 10pm\",\r\n    Saturday: \"8am - 10pm\",\r\n  };\r\n\r\n  for (const day in schedule) {\r\n    const scheduleItem = document.createElement(\"p\");\r\n    scheduleItem.style.fontWeight = \"bold\";\r\n    scheduleItem.textContent = `${day}: ${schedule[day]}`;\r\n    scheduleElement.appendChild(scheduleItem);\r\n  }\r\n  openingHourContainer.appendChild(hourText);\r\n  openingHourContainer.appendChild(scheduleElement);\r\n\r\n  //location container contains address of the restaurant\r\n  const locationContainer = document.createElement(\"div\");\r\n  locationContainer.classList.add(\"child-container\");\r\n\r\n  const locationHeadingText = document.createElement(\"h4\");\r\n  locationHeadingText.classList.add(\"sub-heading\");\r\n  locationHeadingText.innerText = \"Location\";\r\n\r\n  const addressText = document.createElement(\"p\");\r\n  addressText.classList.add(\"text\");\r\n  addressText.innerText = \"Pune, India\";\r\n  locationContainer.appendChild(locationHeadingText);\r\n  locationContainer.appendChild(addressText);\r\n\r\n  // all the container are appended to mainContainer and then to content container\r\n  mainContainer.appendChild(descContainer);\r\n  mainContainer.appendChild(openingHourContainer);\r\n  mainContainer.appendChild(locationContainer);\r\n  content.appendChild(mainContainer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\r\n\n\n//# sourceURL=webpack://restaurant-project/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoads */ \"./src/pageLoads.js\");\n\r\n\r\n(0,_pageLoads__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant-project/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  //mainContainer will contain dishes and food items\r\n  const mainContainer = document.createElement(\"div\");\r\n  mainContainer.classList.add(\"main-container\");\r\n\r\n  //this container will contain tea-type and its description\r\n  const teaContainer = document.createElement(\"div\");\r\n  teaContainer.classList.add(\"child-container\");\r\n\r\n  const teaDescContainer = document.createElement(\"div\");\r\n  teaDescContainer.classList.add(\"desc-container\");\r\n\r\n  const honeyTea = document.createElement(\"h4\");\r\n  honeyTea.classList.add(\"sub-heading\");\r\n  honeyTea.innerText = \"Honey Tea\";\r\n\r\n  const honeyTeaDesc = document.createElement(\"p\");\r\n  honeyTeaDesc.classList.add(\"text\");\r\n  honeyTeaDesc.innerText =\r\n    \"Indulge in the exquisite flavors of our Honey Tea, a harmonious blend of natural sweetness and aromatic herbs.\";\r\n\r\n  const honeyTeaPrice = document.createElement(\"p\");\r\n  honeyTeaPrice.classList.add(\"text\");\r\n  honeyTeaPrice.innerText = \"80 Rs\";\r\n\r\n  const honeyTeaImg = document.createElement(\"img\");\r\n  honeyTeaImg.src =\r\n    \"https://www.niir.org/blog/wp-content/uploads/2021/05/gc-200x300.png\";\r\n  honeyTeaImg.alt = \"honeyTea - Image\";\r\n  honeyTeaImg.style.height = \"200px\";\r\n\r\n  teaContainer.appendChild(honeyTeaImg);\r\n  teaDescContainer.appendChild(honeyTea);\r\n  teaDescContainer.appendChild(honeyTeaDesc);\r\n  teaDescContainer.appendChild(honeyTeaPrice);\r\n  teaContainer.appendChild(teaDescContainer);\r\n\r\n  //tea item will be appended to mainContainer\r\n  mainContainer.appendChild(teaContainer);\r\n\r\n  //this container will contains description about fruit items\r\n  const fruitContainer = document.createElement(\"div\");\r\n  fruitContainer.classList.add(\"child-container\");\r\n\r\n  const fruitDescContainer = document.createElement(\"div\");\r\n  fruitDescContainer.classList.add(\"desc-container\");\r\n\r\n  const fruitSalad = document.createElement(\"h4\");\r\n  fruitSalad.classList.add(\"sub-heading\");\r\n  fruitSalad.innerText = \"Fresh Fruit\";\r\n\r\n  const fruitSaladDesc = document.createElement(\"p\");\r\n  fruitSaladDesc.classList.add(\"text\");\r\n  fruitSaladDesc.innerText =\r\n    \"Experience the refreshing burst of nature with our Fresh Fruit selection, a vibrant medley of seasonal delights bursting with juiciness and natural flavors.\";\r\n\r\n  const fruitSaladPrice = document.createElement(\"p\");\r\n  fruitSaladPrice.classList.add(\"text\");\r\n  fruitSaladPrice.innerText = \"150 Rs\";\r\n\r\n  const fruitSaladImg = document.createElement(\"img\");\r\n  fruitSaladImg.src =\r\n    \"https://www.californiastrawberries.com/wp-content/uploads/2021/05/Rainbow-Fruit-Salad-1024-500x500.jpg\";\r\n  fruitSaladImg.alt = \"fruit salad img\";\r\n  fruitSaladImg.style.height = \"200px\";\r\n\r\n  fruitContainer.appendChild(fruitSaladImg);\r\n  fruitDescContainer.appendChild(fruitSalad);\r\n  fruitDescContainer.appendChild(fruitSaladDesc);\r\n  fruitDescContainer.appendChild(fruitSaladPrice);\r\n  fruitContainer.appendChild(fruitDescContainer);\r\n\r\n  //fruit dish container will be appended to main Container\r\n  mainContainer.appendChild(fruitContainer);\r\n  content.appendChild(mainContainer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://restaurant-project/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoads.js":
/*!**************************!*\
  !*** ./src/pageLoads.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _createTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTabs */ \"./src/createTabs.js\");\n\r\n\r\n\r\nconst pageLoad = () => {\r\n  (0,_createTabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\r\n\n\n//# sourceURL=webpack://restaurant-project/./src/pageLoads.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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