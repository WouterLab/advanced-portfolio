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
exports.id = "pages/api/getProjects";
exports.ids = ["pages/api/getProjects"];
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

/***/ "(api)/./pages/api/getProjects.ts":
/*!**********************************!*\
  !*** ./pages/api/getProjects.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\n*[_type == \"project\"] {\n  ...,\n  technologies[]->\n}\n`;\nasync function handler(req, res) {\n    const projects = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        projects\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UHJvamVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDZFQUE2RTtBQUUxQztBQUNTO0FBRzVDLE1BQU1FLEtBQUssR0FBR0YsNkNBQUksQ0FBQzs7Ozs7QUFLbkIsQ0FBQztBQUtjLGVBQWVHLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNBLE1BQU1DLFFBQVEsR0FBYyxNQUFNTCx1REFBa0IsQ0FBQ0MsS0FBSyxDQUFDO0lBRTNERyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVILFFBQVE7S0FBRSxDQUFDLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vcGFnZXMvYXBpL2dldFByb2plY3RzLnRzP2U4ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBncm9xIH0gZnJvbSBcIm5leHQtc2FuaXR5XCI7XG5pbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tIFwiLi4vLi4vc2FuaXR5XCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL3R5cGluZ3NcIjtcblxuY29uc3QgcXVlcnkgPSBncm9xYFxuKltfdHlwZSA9PSBcInByb2plY3RcIl0ge1xuICAuLi4sXG4gIHRlY2hub2xvZ2llc1tdLT5cbn1cbmA7XG50eXBlIERhdGEgPSB7XG4gIHByb2plY3RzOiBQcm9qZWN0W107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPixcbikge1xuICBjb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHByb2plY3RzIH0pO1xufVxuIl0sIm5hbWVzIjpbImdyb3EiLCJzYW5pdHlDbGllbnQiLCJxdWVyeSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwcm9qZWN0cyIsImZldGNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getProjects.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getProjects.ts"));
module.exports = __webpack_exports__;

})();