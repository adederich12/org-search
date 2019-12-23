webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/TextInput */ "./components/parts/TextInput.js");
var _jsxFileName = "C:\\Users\\adede\\Documents\\org-search\\components\\SearchForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SearchForm = () => __jsx("form", {
  id: "searchForm",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Search for a user, "), __jsx(_parts_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
  inputLabel: "Search by Name",
  inputVal: "Search",
  inputRef: "nameSearch",
  inputPlaceholder: "Search by name...",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ }),

/***/ "./components/parts/TextInput.js":
/*!***************************************!*\
  !*** ./components/parts/TextInput.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\adede\\Documents\\org-search\\components\\parts\\TextInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TextInput = props => __jsx("label", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, props.inputLabel, __jsx("input", {
  type: "text",
  value: props.inputVal,
  ref: props.inputRef,
  placeholder: props.inputPlaceholder,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SearchForm */ "./components/SearchForm.js");
var _jsxFileName = "C:\\Users\\adede\\Documents\\org-search\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Hello Next.js"), __jsx(_components_SearchForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.56e81b86bef14c3f67f8.hot-update.js.map