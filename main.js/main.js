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

/***/ "./js/animaNumeros.js":
/*!****************************!*\
  !*** ./js/animaNumeros.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  const observer = new MutationObserver(handleMutantion);\n  const numeros = document.querySelectorAll('[data-numero]');\n\n  function animaNumeros() {\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n\n      const timer = setInterval(() => { //\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  function handleMutantion(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n\n  const observerTarget = document.querySelector('.numeros');\n\n  observer.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/animaNumeros.js?");

/***/ }),

/***/ "./js/animaScroll.js":
/*!***************************!*\
  !*** ./js/animaScroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaScroll)\n/* harmony export */ });\nfunction initAnimaScroll() {\n  const sections = document.querySelectorAll('.js-scroll');\n  const windowMetade = window.innerHeight * 0.6;\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top - windowMetade;\n      if (sectionTop < 0) { section.classList.add('ativo'); }\n    });\n  }\n\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/animaScroll.js?");

/***/ }),

/***/ "./js/dropdown.js":
/*!************************!*\
  !*** ./js/dropdown.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\nfunction initDropdownMenu() {\n  const dropdonwMenus = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('ativo');\n    outsideClick(this, () => {\n      this.classList.remove('ativo');\n    });\n  }\n\n  dropdonwMenus.forEach((menu) => {\n    ['click', 'touchstart'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n\n  function outsideClick(element, callback) {\n    const html = document.documentElement;\n    const outside = 'data-outside';\n\n    if (!element.hasAttribute(outside)) {\n      html.addEventListener('click', handleOutsideClick);\n      html.addEventListener('touchstart', handleOutsideClick);\n      element.setAttribute(outside, '');\n    }\n\n    function handleOutsideClick(event) {\n      if (!element.contains(event.target)) {\n        element.removeAttribute(outside);\n        html.removeEventListener('click', handleOutsideClick);\n        html.removeEventListener('touchstart', handleOutsideClick);\n        callback();\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/dropdown.js?");

/***/ }),

/***/ "./js/funcionamento.js":
/*!*****************************!*\
  !*** ./js/funcionamento.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n\n}\n\nconst funcionamento = document.querySelector('[data-semana]');\nconst diasSemana = funcionamento.dataset.semana.split(',').map(Number);\nconst horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n\nconst dataAgora = new Date();\nconst diaAgora = dataAgora.getDay();\nconst horarioAgora = dataAgora.getHours();\n\nconst semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n\nconst horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);\n\nif (semanaAberto && horarioAberto) {\n  funcionamento.classList.add('aberto');\n} else {\n  funcionamento.classList.remove('aberto');\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/funcionamento.js?");

/***/ }),

/***/ "./js/initAccordion.js":
/*!*****************************!*\
  !*** ./js/initAccordion.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll('.js-accordion dt');\n  accordionList[0].classList.add('ativo');\n  accordionList[0].nextElementSibling.classList.add('ativo');\n\n  function activeAccordion() {\n    this.classList.toggle('ativo');\n    this.nextElementSibling.classList.toggle('ativo');\n  }\n\n  accordionList.forEach((item) => {\n    item.addEventListener('click', activeAccordion);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/initAccordion.js?");

/***/ }),

/***/ "./js/menuMobile.js":
/*!**************************!*\
  !*** ./js/menuMobile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\nfunction initMenuMobile() {\n  const btnMenu = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.getElementById('menu');\n\n  function openMenu(event) {\n    event.preventDefault();\n    btnMenu.classList.toggle('ativo');\n    menuList.classList.add('ativo');\n    outsideClick(menuList, ['click', 'touchstart'], () => {\n      menuList.classList.remove('ativo');\n    });\n  }\n\n  btnMenu.addEventListener('click', openMenu);\n\n  function outsideClick(element, events, callback) {\n    const html = document.documentElement;\n    const outside = 'data-outside';\n    if (!element.hasAttribute(outside)) {\n      events.forEach((userEvent) => {\n        setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n      });\n      element.setAttribute(outside, '');\n    }\n    function handleOutsideClick(event) {\n      if (!element.contains(event.target)) {\n        element.removeAttribute(outside);\n        events.forEach((userEvent) => {\n          html.removeEventListener(userEvent, handleOutsideClick);\n        });\n        callback();\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/menuMobile.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle('ativo');\n  }\n\n  function cliqueForaModal(event) {\n    if (event.target === this) toggleModal(event);\n  }\n\n  if (botaoAbrir && botaoFechar && containerModal) {\n    containerModal.addEventListener('click', cliqueForaModal);\n    botaoAbrir.addEventListener('click', toggleModal);\n    botaoFechar.addEventListener('click', toggleModal);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modal.js?");

/***/ }),

/***/ "./js/modules.js":
/*!***********************!*\
  !*** ./js/modules.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navTab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navTab.js */ \"./js/navTab.js\");\n/* harmony import */ var _initAccordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initAccordion.js */ \"./js/initAccordion.js\");\n/* harmony import */ var _scrollSuave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollSuave.js */ \"./js/scrollSuave.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n/* harmony import */ var _toolTip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolTip.js */ \"./js/toolTip.js\");\n/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown.js */ \"./js/dropdown.js\");\n/* harmony import */ var _menuMobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuMobile.js */ \"./js/menuMobile.js\");\n/* harmony import */ var _animaScroll_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animaScroll.js */ \"./js/animaScroll.js\");\n/* harmony import */ var _animaNumeros_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animaNumeros.js */ \"./js/animaNumeros.js\");\n/* harmony import */ var _funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./funcionamento.js */ \"./js/funcionamento.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_navTab_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_initAccordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_scrollSuave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_toolTip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_menuMobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_animaScroll_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_animaNumeros_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules.js?");

/***/ }),

/***/ "./js/navTab.js":
/*!**********************!*\
  !*** ./js/navTab.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navTab)\n/* harmony export */ });\nfunction navTab() {\n  const tabMenu = document.querySelectorAll('.js-menutab li');\n  const tabContent = document.querySelectorAll('.js-menucontent section');\n  tabContent[0].classList.add('ativo');\n\n  function activeTab(index) {\n    tabContent.forEach((section) => {\n      section.classList.remove('ativo');\n    });\n    const direcao = tabContent[index].dataset.anime;\n    tabContent[index].classList.add('ativo', direcao);\n  }\n\n  tabMenu.forEach((itemMenu, index) => {\n    itemMenu.addEventListener('click', () => {\n      activeTab(index);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/navTab.js?");

/***/ }),

/***/ "./js/scrollSuave.js":
/*!***************************!*\
  !*** ./js/scrollSuave.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollSuave)\n/* harmony export */ });\nfunction scrollSuave() {\n  const linksInternos = document.querySelectorAll('.js-menu a[href^=\"#\"]');\n\n  function scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    const topo = section.offsetTop;\n    window.scrollTo({\n      top: topo,\n      behavior: 'smooth',\n    });\n  }\n\n  linksInternos.forEach((link) => {\n    link.addEventListener('click', scrollToSection);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/scrollSuave.js?");

/***/ }),

/***/ "./js/toolTip.js":
/*!***********************!*\
  !*** ./js/toolTip.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-toolTip]');\n\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}'px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}'px`;\n    },\n  };\n\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n    },\n  };\n\n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  function onMouseOver() {\n    const tooltipBox = criarTooltipBox(this);\n\n    this.addEventListener('mousemove', onMouseMove);\n    onMouseMove.tooltipBox = tooltipBox;\n\n    this.addEventListener('mouseleave', onMouseLeave);\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/toolTip.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/modules.js");
/******/ 	
/******/ })()
;