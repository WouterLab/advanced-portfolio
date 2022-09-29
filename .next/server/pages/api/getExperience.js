"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getExperience";
exports.ids = ["pages/api/getExperience"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/getExperience.ts":
/*!************************************!*\
  !*** ./pages/api/getExperience.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\n*[_type == \"experience\"] {\n  ...,\n  technologies[]->\n}\n`;\nasync function handler(req, res) {\n    const experiences = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        experiences\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RXhwZXJpZW5jZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsNkVBQTZFO0FBRTFDO0FBQ1M7QUFHNUMsTUFBTUUsS0FBSyxHQUFHRiw2Q0FBSSxDQUFDOzs7OztBQUtuQixDQUFDO0FBS2MsZUFBZUcsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzFCO0lBQ0EsTUFBTUMsV0FBVyxHQUFpQixNQUFNTCx1REFBa0IsQ0FBQ0MsS0FBSyxDQUFDO0lBRWpFRyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVILFdBQVc7S0FBRSxDQUFDLENBQUM7QUFDeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vcGFnZXMvYXBpL2dldEV4cGVyaWVuY2UudHM/MmY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdyb3EgfSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcbmltcG9ydCB7IHNhbml0eUNsaWVudCB9IGZyb20gXCIuLi8uLi9zYW5pdHlcIjtcbmltcG9ydCB7IEV4cGVyaWVuY2UgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xuXG5jb25zdCBxdWVyeSA9IGdyb3FgXG4qW190eXBlID09IFwiZXhwZXJpZW5jZVwiXSB7XG4gIC4uLixcbiAgdGVjaG5vbG9naWVzW10tPlxufVxuYDtcbnR5cGUgRGF0YSA9IHtcbiAgZXhwZXJpZW5jZXM6IEV4cGVyaWVuY2VbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+LFxuKSB7XG4gIGNvbnN0IGV4cGVyaWVuY2VzOiBFeHBlcmllbmNlW10gPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZXhwZXJpZW5jZXMgfSk7XG59XG4iXSwibmFtZXMiOlsiZ3JvcSIsInNhbml0eUNsaWVudCIsInF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImV4cGVyaWVuY2VzIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getExperience.ts\n");

/***/ }),

/***/ "(api)/./sanity.ts":
/*!*******************!*\
  !*** ./sanity.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"47fmgf42\",\n    apiVersion: \"2021-03-25\",\n    useCdn: \"development\" === \"production\"\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(sanityClient);\nconst urlFor = (source)=>{\n    return builder.image(source);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNLO0FBRXpDLE1BQU1FLE1BQU0sR0FBRztJQUNwQkMsT0FBTyxFQUFFQyxZQUFzQyxJQUFJLENBQVk7SUFDL0RHLFNBQVMsRUFBRUgsVUFBeUM7SUFDcERLLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxNQUFNLEVBQUVOLGFBUEcsS0FPc0IsWUFBWTtDQUM5QyxDQUFDO0FBRUssTUFBTU8sWUFBWSxHQUFHWCx5REFBWSxDQUFDRSxNQUFNLENBQUM7QUFFaEQsTUFBTVUsT0FBTyxHQUFHWCx3REFBZSxDQUFDVSxZQUFZLENBQUM7QUFFdEMsTUFBTUUsTUFBTSxHQUFHLENBQUNDLE1BQVcsR0FBSztJQUNyQyxPQUFPRixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDO0FBQzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3Nhbml0eS50cz8xMDNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJuZXh0LXNhbml0eVwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgZGF0YXNldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQgfHwgXCJwcm9kdWN0aW9uXCIsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQhLFxuICBhcGlWZXJzaW9uOiBcIjIwMjEtMDMtMjVcIixcbiAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gY3JlYXRlQ2xpZW50KGNvbmZpZylcblxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihzYW5pdHlDbGllbnQpXG5cbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlOiBhbnkpID0+IHtcbiAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKVxufSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJpbWFnZVVybEJ1aWxkZXIiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwic2FuaXR5Q2xpZW50IiwiYnVpbGRlciIsInVybEZvciIsInNvdXJjZSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./sanity.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getExperience.ts"));
module.exports = __webpack_exports__;

})();