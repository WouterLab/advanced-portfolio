"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sanity */ \"./sanity.ts\");\n/* eslint-disable @next/next/no-img-element */ \n\n\n\nfunction Projects(param) {\n    var projects = param.projects;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1.5\n        },\n        className: \"h-full md:h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#eda200]/80\",\n                children: projects === null || projects === void 0 ? void 0 : projects.map(function(project, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-full sm:h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500 uppercase tracking-[3px]\",\n                                children: \"Slide right to see more\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                                className: \"mx-auto object-cover xl:w-[600px] md:w-96 sm:w-56\",\n                                initial: {\n                                    opacity: 0\n                                },\n                                whileInView: {\n                                    opacity: 1\n                                },\n                                transition: {\n                                    duration: 1.2\n                                },\n                                viewport: {\n                                    once: true\n                                },\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(project === null || project === void 0 ? void 0 : project.image).url(),\n                                alt: \"project\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-10 px-0 md:px-10 max-w-6xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-4xl font-semibold text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"underline decoration-[#eda200]/50\",\n                                                children: [\n                                                    \"Case Study \",\n                                                    i + 1,\n                                                    \" of \",\n                                                    projects.length,\n                                                    \":\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 17\n                                            }, _this),\n                                            \" \",\n                                            project === null || project === void 0 ? void 0 : project.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid justify-items-center grid-cols-2 sm:flex items-center sm:space-x-2 sm:justify-center\",\n                                        children: project === null || project === void 0 ? void 0 : project.technologies.map(function(technology) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: project.linkToBuild,\n                                                target: \"_blank\",\n                                                rel: \"noreferrer\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    className: \"h-10 w-10\",\n                                                    src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(technology.image).url(),\n                                                    alt: \"tech\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, technology._id, false, {\n                                                fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg text-center md:text-left\",\n                                        children: project.summary\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, project._id, true, {\n                        fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute top-[30%] bg-[#eda200]/10 left-0 h-[500px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Даня\\\\Desktop\\\\Labs\\\\Courses\\\\Web-Development\\\\next-portfolio\\\\components\\\\Projects.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzZDQUNkOzs7Ozs7cUNBQ0E7O3VCQXZDRHRCLE9BQU8sQ0FBQ3FCLEdBQUc7Ozs7NkJBd0NaO2lCQUNQLENBQUM7Ozs7O29CQUNFOzBCQUNOLDhEQUFDN0IsS0FBRztnQkFBQ00sU0FBUyxFQUFDLHVFQUF1RTs7Ozs7b0JBQU87Ozs7OztZQUNsRixDQUNiO0FBQ0osQ0FBQztBQXhEdUJSLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy50c3g/ZjNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi90eXBpbmdzXCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vc2FuaXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByb2plY3RzOiBQcm9qZWN0W107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyh7IHByb2plY3RzIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS41IH19XG4gICAgICBjbGFzc05hbWU9J2gtZnVsbCBtZDpoLXNjcmVlbiByZWxhdGl2ZSBmbGV4IG92ZXJmbG93LWhpZGRlbiBmbGV4LWNvbCB0ZXh0LWxlZnQgbWQ6ZmxleC1yb3cgbWF4LXctZnVsbCBqdXN0aWZ5LWV2ZW5seSBteC1hdXRvIGl0ZW1zLWNlbnRlciB6LTAnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCBmbGV4IG92ZXJmbG93LXgtc2Nyb2xsIG92ZXJmbG93LXktaGlkZGVuIHNuYXAteCBzbmFwLW1hbmRhdG9yeSB6LTIwIHNjcm9sbGJhci10aGluIHNjcm9sbGJhci10cmFjay1ncmF5LTQwMC8yMCBzY3JvbGxiYXItdGh1bWItWyNlZGEyMDBdLzgwJz5cbiAgICAgICAge3Byb2plY3RzPy5tYXAoKHByb2plY3QsIGkpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e3Byb2plY3QuX2lkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LXNjcmVlbiBmbGV4LXNocmluay0wIHNuYXAtY2VudGVyIGZsZXggZmxleC1jb2wgc3BhY2UteS01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIwIG1kOnAtNDQgaC1mdWxsIHNtOmgtc2NyZWVuJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctWzNweF0nPlNsaWRlIHJpZ2h0IHRvIHNlZSBtb3JlPC9wPlxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteC1hdXRvIG9iamVjdC1jb3ZlciB4bDp3LVs2MDBweF0gbWQ6dy05NiBzbTp3LTU2J1xuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjIgfX1cbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICBzcmM9e3VybEZvcihwcm9qZWN0Py5pbWFnZSkudXJsKCl9XG4gICAgICAgICAgICAgIGFsdD0ncHJvamVjdCdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS0xMCBweC0wIG1kOnB4LTEwIG1heC13LTZ4bCc+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndW5kZXJsaW5lIGRlY29yYXRpb24tWyNlZGEyMDBdLzUwJz5cbiAgICAgICAgICAgICAgICAgIENhc2UgU3R1ZHkge2kgKyAxfSBvZiB7cHJvamVjdHMubGVuZ3RofTpcbiAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgIHtwcm9qZWN0Py50aXRsZX1cbiAgICAgICAgICAgICAgPC9oND5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBncmlkLWNvbHMtMiBzbTpmbGV4IGl0ZW1zLWNlbnRlciBzbTpzcGFjZS14LTIgc206anVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0Py50ZWNobm9sb2dpZXMubWFwKCh0ZWNobm9sb2d5KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3RlY2hub2xvZ3kuX2lkfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0LmxpbmtUb0J1aWxkfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgICAgcmVsPSdub3JlZmVycmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC0xMCB3LTEwJ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHRlY2hub2xvZ3kuaW1hZ2UpLnVybCgpfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD0ndGVjaCdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWxnIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCc+XG4gICAgICAgICAgICAgICAge3Byb2plY3Quc3VtbWFyeX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGFic29sdXRlIHRvcC1bMzAlXSBiZy1bI2VkYTIwMF0vMTAgbGVmdC0wIGgtWzUwMHB4XSAtc2tldy15LTEyJz48L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJ1cmxGb3IiLCJQcm9qZWN0cyIsInByb2plY3RzIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2plY3QiLCJpIiwicCIsImltZyIsInZpZXdwb3J0Iiwib25jZSIsInNyYyIsImltYWdlIiwidXJsIiwiYWx0IiwiaDQiLCJzcGFuIiwibGVuZ3RoIiwidGl0bGUiLCJ0ZWNobm9sb2dpZXMiLCJ0ZWNobm9sb2d5IiwiYSIsImhyZWYiLCJsaW5rVG9CdWlsZCIsInRhcmdldCIsInJlbCIsIl9pZCIsInN1bW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});