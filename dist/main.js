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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)('.header-modal', '.button', '.header-modal__close', 1);\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)('.services-modal', '.service-button', '.services-modal__close', 4);\r\n\r\nif (document.documentElement.clientWidth > 576) {\r\n    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.sliderDesktop)('benefits', '.benefits__item', 3, '.benefits__arrow--right', '.benefits__arrow--left');\r\n    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.sliderDesktop)('services', '.service-block', 2, '.services__arrow--right', '.services__arrow--left');\r\n} else {\r\n    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.sliderMobile)('benefits', '.benefits__item', '.benefits__arrow--right', '.benefits__arrow--left');\r\n    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.sliderMobile)('services', '.service-block', '.services__arrow--right', '.services__arrow--left');\r\n}\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.timer)('10 march 2022', 'order_1');\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.timer)('10 march 2022', 'order_2');\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\nconst animate = ({ timing, draw, duration }) => {\r\n    let start = performance.now();\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) {\r\n            timeFraction = 1;\r\n        }\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n        draw(progress); // отрисовать её\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n};\r\n\r\n\r\n\r\n/*animate({\r\n    duration: 1000,\r\n    timing(timeFraction) {\r\n      return timeFraction;\r\n    },\r\n    draw(progress) {\r\n      ;\r\n    }\r\n  });*/\r\n\n\n//# sourceURL=webpack://diplom/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst modal = (window, butt, closeButt, numBtn) => {\r\n\r\n    const modalWind = document.querySelector(window);\r\n    const overlay = document.querySelector('.overlay');\r\n    if (numBtn == 1) {\r\n        const button = document.querySelector(butt);\r\n        button.addEventListener('click', (e) => {\r\n            if (e.target.closest('.fancyboxModal')) {\r\n                modalWind.style.display = 'block';\r\n                overlay.style.display = 'block';\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 1000,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        modalWind.style.opacity = progress;\r\n                        overlay.style.opacity = progress;\r\n                    }\r\n                });\r\n            }\r\n        });\r\n    } else {\r\n        const buttons = document.querySelectorAll(butt);\r\n        console.log(buttons);\r\n        buttons.forEach(element => {\r\n            element.addEventListener('click', (e) => {\r\n                if (e.target.closest('.fancyboxModal')) {\r\n                    modalWind.style.display = 'block';\r\n                    overlay.style.display = 'block';\r\n\r\n                    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                        duration: 1000,\r\n                        timing(timeFraction) {\r\n                            return timeFraction;\r\n                        },\r\n                        draw(progress) {\r\n                            modalWind.style.opacity = progress;\r\n                            overlay.style.opacity = progress;\r\n                        }\r\n                    });\r\n                }\r\n            });\r\n        });\r\n\r\n    }\r\n    let idAnimation;\r\n    let opacity = 0;\r\n    const animationShow = function () {\r\n        idAnimation = requestAnimationFrame(animationShow);\r\n        opacity += 0.02;\r\n        modalWind.style.opacity = opacity;\r\n        overlay.style.opacity = opacity * 2;\r\n        if (opacity > 1) {\r\n            cancelAnimationFrame(idAnimation);\r\n        }\r\n    };\r\n    modalWind.addEventListener('click', (e) => {\r\n        if (e.target.closest(closeButt)) {\r\n            modalWind.style.display = 'none';\r\n            overlay.style.display = 'none';\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderDesktop\": () => (/* binding */ sliderDesktop),\n/* harmony export */   \"sliderMobile\": () => (/* binding */ sliderMobile)\n/* harmony export */ });\n\r\nconst sliderDesktop = (container, sliderArray, numSlides, rightArrow, leftArrow) => {\r\n    const sliderContainer = document.getElementById(container);\r\n    const slidesArray = sliderContainer.querySelectorAll(sliderArray);\r\n    if (!sliderContainer || slidesArray.length == 0) {\r\n        console.warn('нет класса слайдера/слайдов!');\r\n        return;\r\n    }\r\n    slidesArray.forEach((element, index) => {\r\n        (index > numSlides - 1) ? element.classList.add('no-active') : element.classList.add('active');\r\n    });\r\n    sliderContainer.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (e.target.closest(rightArrow) || e.target.closest(leftArrow)) {\r\n            slidesArray.forEach(element => {\r\n                element.classList.toggle('no-active');\r\n                element.classList.toggle('active');\r\n            });\r\n        }\r\n    });\r\n}\r\nconst sliderMobile = (container, sliderArray, rightArrow, leftArrow) => {\r\n\r\n    const sliderContainer = document.getElementById(container);\r\n    const slidesArray = sliderContainer.querySelectorAll(sliderArray);\r\n    let current = 0;\r\n\r\n    if (!sliderContainer || slidesArray.length == 0) {\r\n        console.warn('нет класса слайдера/слайдов!');\r\n        return;\r\n    }\r\n\r\n    slidesArray.forEach((element, index) => {\r\n        (index === current) ? element.style.display = 'block' : element.style.display = 'none';\r\n    });\r\n\r\n    sliderContainer.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (e.target.closest(rightArrow)) {\r\n            slidesArray[current].style.display = 'none';\r\n            current++;\r\n            if (current >= slidesArray.length) {\r\n                current = 0;\r\n            }\r\n            slidesArray[current].style.display = 'block';\r\n        } else if (e.target.closest(leftArrow)) {\r\n            slidesArray[current].style.display = 'none';\r\n            current--;\r\n            if (current < 0) {\r\n                current = slidesArray.length - 1;\r\n            }\r\n            slidesArray[current].style.display = 'block';\r\n        }\r\n    });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://diplom/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline, container) => {\r\n\r\n    const field = document.querySelector(`#${container}`);\r\n    const timerDays = field.querySelector('.count_1 > span');\r\n    const timerHours = field.querySelector('.count_2 > span');\r\n    const timerMinutes = field.querySelector('.count_3 > span');\r\n    const timerSeconds = field.querySelector('.count_4 > span');\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n        return { timeRemaining, days, hours, minutes, seconds };\r\n    };\r\n\r\n    const getZero = (num) => {\r\n        if (num < 10) {\r\n            return '0' + num;\r\n        } else {\r\n            return num;\r\n        }\r\n    };\r\n\r\n    function updateClock() {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.seconds >= 0) {\r\n            timerDays.textContent = getTime.days;\r\n            timerHours.textContent = getZero(getTime.hours);\r\n            timerMinutes.textContent = getZero(getTime.minutes);\r\n            timerSeconds.textContent = getZero(getTime.seconds);\r\n            if (getTime.timeRemaining < 0) {\r\n                clearInterval(interval);\r\n            }\r\n        }\r\n    };\r\n    updateClock();\r\n    let interval = setInterval(updateClock, 500);\r\n};\n\n//# sourceURL=webpack://diplom/./src/modules/timer.js?");

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