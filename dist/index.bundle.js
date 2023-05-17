"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box !important;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\nhtml {\r\n  height: auto;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: auto;\r\n}\r\n\r\nbody {\r\n  background: linear-gradient(45deg, rgb(55, 160, 205), rgb(27, 112, 148));\r\n  height: auto;\r\n  width: 100%;\r\n  padding: 70px 0;\r\n  margin: 0;\r\n}\r\n\r\n.to-do-holder {\r\n  width: 85%;\r\n  max-width: 500px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  background: rgb(180 216 231);\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  border-radius: 6px;\r\n  border: 2px solid rgb(17, 91, 122);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.title-to-do {\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.ul-to-do {\r\n  padding: 0;\r\n  margin: 5px;\r\n  width: 98%;\r\n  border-radius: 6px;\r\n}\r\n\r\n.li-to-do {\r\n  width: 100%;\r\n  list-style: none;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgb(17, 91, 122);\r\n  padding: 1px 10px;\r\n  gap: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n  margin-bottom: 8px;\r\n  background: #fff;\r\n}\r\n\r\n.li-to-do-input {\r\n  padding: 5px 10px;\r\n}\r\n\r\n.text-li {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  font-family: sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.li-description {\r\n  width: 87%;\r\n  height: 100%;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.task-text {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.refresh {\r\n  position: relative;\r\n  left: 7%;\r\n  width: 21px;\r\n  height: 19px;\r\n}\r\n\r\n.enter {\r\n  position: relative;\r\n  left: -5px;\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.icon {\r\n  position: relative;\r\n  left: 1%;\r\n  width: 24px;\r\n  height: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-holder {\r\n  width: 95%;\r\n  height: 35px;\r\n  margin: 0 auto;\r\n  border: none;\r\n  background-color: rgb(153, 169, 176);\r\n  color: rgb(255, 255, 255);\r\n  font-family: sans-serif;\r\n  font-size: 1.4rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.btn-holder:active {\r\n  transform: translateX(-1px);\r\n  transform: translateY(1px);\r\n  box-shadow: 0 0 7px black;\r\n}\r\n\r\n.bg-yellow {\r\n  background: rgb(240, 233, 166);\r\n}\r\n\r\n.bg-gray {\r\n  background-color: rgba(150, 144, 144, 0.8);\r\n}\r\n\r\n.text-li:focus,\r\n.task-text:focus {\r\n  outline: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .refresh {\r\n    left: 3%;\r\n  }\r\n\r\n  .to-do-holder {\r\n    padding: 5px;\r\n  }\r\n\r\n  .li-to-do {\r\n    height: 70px;\r\n  }\r\n\r\n  .title-to-do {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .task-text,\r\n  .text-li {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .btn-holder {\r\n    height: 60px;\r\n    font-size: 30px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,sEAAsE;AACxE;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,wEAAwE;EACxE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,SAAS;AACX;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yCAAyC;EACzC,iBAAiB;EACjB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,oCAAoC;EACpC,yBAAyB;EACzB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE;IACE,QAAQ;EACV;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;;IAEE,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;AACF","sourcesContent":["* {\r\n  box-sizing: border-box !important;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\nhtml {\r\n  height: auto;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: auto;\r\n}\r\n\r\nbody {\r\n  background: linear-gradient(45deg, rgb(55, 160, 205), rgb(27, 112, 148));\r\n  height: auto;\r\n  width: 100%;\r\n  padding: 70px 0;\r\n  margin: 0;\r\n}\r\n\r\n.to-do-holder {\r\n  width: 85%;\r\n  max-width: 500px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  background: rgb(180 216 231);\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  border-radius: 6px;\r\n  border: 2px solid rgb(17, 91, 122);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.title-to-do {\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.ul-to-do {\r\n  padding: 0;\r\n  margin: 5px;\r\n  width: 98%;\r\n  border-radius: 6px;\r\n}\r\n\r\n.li-to-do {\r\n  width: 100%;\r\n  list-style: none;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgb(17, 91, 122);\r\n  padding: 1px 10px;\r\n  gap: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n  margin-bottom: 8px;\r\n  background: #fff;\r\n}\r\n\r\n.li-to-do-input {\r\n  padding: 5px 10px;\r\n}\r\n\r\n.text-li {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  font-family: sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.li-description {\r\n  width: 87%;\r\n  height: 100%;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.task-text {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.refresh {\r\n  position: relative;\r\n  left: 7%;\r\n  width: 21px;\r\n  height: 19px;\r\n}\r\n\r\n.enter {\r\n  position: relative;\r\n  left: -5px;\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.icon {\r\n  position: relative;\r\n  left: 1%;\r\n  width: 24px;\r\n  height: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-holder {\r\n  width: 95%;\r\n  height: 35px;\r\n  margin: 0 auto;\r\n  border: none;\r\n  background-color: rgb(153, 169, 176);\r\n  color: rgb(255, 255, 255);\r\n  font-family: sans-serif;\r\n  font-size: 1.4rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.btn-holder:active {\r\n  transform: translateX(-1px);\r\n  transform: translateY(1px);\r\n  box-shadow: 0 0 7px black;\r\n}\r\n\r\n.bg-yellow {\r\n  background: rgb(240, 233, 166);\r\n}\r\n\r\n.bg-gray {\r\n  background-color: rgba(150, 144, 144, 0.8);\r\n}\r\n\r\n.text-li:focus,\r\n.task-text:focus {\r\n  outline: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .refresh {\r\n    left: 3%;\r\n  }\r\n\r\n  .to-do-holder {\r\n    padding: 5px;\r\n  }\r\n\r\n  .li-to-do {\r\n    height: 70px;\r\n  }\r\n\r\n  .title-to-do {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .task-text,\r\n  .text-li {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .btn-holder {\r\n    height: 60px;\r\n    font-size: 30px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/icons/dots.png":
/*!****************************!*\
  !*** ./src/icons/dots.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7c2a7739078478fa2df65c780a25a3d1.png");

/***/ }),

/***/ "./src/icons/enter.png":
/*!*****************************!*\
  !*** ./src/icons/enter.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cc5a107b9f1659a25da60dd8883db2af.png");

/***/ }),

/***/ "./src/icons/refresh.png":
/*!*******************************!*\
  !*** ./src/icons/refresh.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "18e6eabe023b44fbf25b9b974484c098.png");

/***/ }),

/***/ "./src/icons/trash.png":
/*!*****************************!*\
  !*** ./src/icons/trash.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "65b082ca4443dd60bd4fc53a5a64a394.png");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_dots_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/dots.png */ "./src/icons/dots.png");
/* harmony import */ var _icons_refresh_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/refresh.png */ "./src/icons/refresh.png");
/* harmony import */ var _icons_enter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/enter.png */ "./src/icons/enter.png");
/* harmony import */ var _icons_trash_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/trash.png */ "./src/icons/trash.png");
/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/add.js */ "./src/modules/add.js");
/* harmony import */ var _modules_removeTrash_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/removeTrash.js */ "./src/modules/removeTrash.js");
/* harmony import */ var _modules_editTask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/editTask.js */ "./src/modules/editTask.js");
/* harmony import */ var _modules_check_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/check.js */ "./src/modules/check.js");
/* harmony import */ var _modules_clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/clearAllCompleted.js */ "./src/modules/clearAllCompleted.js");
/* harmony import */ var _modules_dragging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/dragging.js */ "./src/modules/dragging.js");












const inputAdd = document.getElementById('add-text');
const refreshIcon = document.querySelector('.refresh');
const enterIcon = document.querySelector('.enter');
const holder = document.querySelector('.ul-to-do');
const buttonClear = document.querySelector('.btn-holder');

refreshIcon.src = _icons_refresh_png__WEBPACK_IMPORTED_MODULE_2__["default"];
enterIcon.src = _icons_enter_png__WEBPACK_IMPORTED_MODULE_3__["default"];

// this function changes the background color to yellow when the user is on the input
function changeIcon() {
  const tasksItems = document.querySelectorAll('.task-item');
  const taskText = document.querySelectorAll('.task-text');
  taskText.forEach((task) => {
    task.addEventListener('click', () => {
      task.nextSibling.src = _icons_trash_png__WEBPACK_IMPORTED_MODULE_4__["default"];
      task.nextSibling.classList.add('trash-can');
      task.classList.add('bg-yellow');
      task.parentNode.classList.add('bg-yellow');
      (0,_modules_removeTrash_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
    });
    const currentValue = task.value;
    task.addEventListener('change', () => {
      (0,_modules_editTask_js__WEBPACK_IMPORTED_MODULE_7__["default"])(currentValue, task.value);
    });
  });
  tasksItems.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      item.lastChild.src = _icons_dots_png__WEBPACK_IMPORTED_MODULE_1__["default"];
      item.lastChild.classList.remove('trash-can');
      item.classList.remove('bg-yellow');
      item.childNodes[1].classList.remove('bg-yellow');
    });
  });
}
// this function build the list with the task items
function listConstructor() {
  if (localStorage.getItem('tasks') === '' || localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', '[]');
  }
  const toConstruct = JSON.parse(localStorage.getItem('tasks'));
  toConstruct.sort((x, y) => x.index - y.index);
  toConstruct.forEach((item) => {
    const newLi = document.createElement('li');
    newLi.classList.add('li-to-do');
    newLi.classList.add('task-item');
    let compOrNot = 'none';
    if (item.completed === true) {
      compOrNot = 'line-through';
    }
    newLi.innerHTML = `<input type="checkbox"  class="checkbox"><input type="text" class="li-description task-text" style="text-decoration: ${compOrNot}" value ="${item.description}"><img src="${_icons_dots_png__WEBPACK_IMPORTED_MODULE_1__["default"]}" class="icon">`;
    holder.appendChild(newLi);
  });

  changeIcon();
  (0,_modules_check_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.addEventListener('mousedown', () => {
      icon.draggable = false;
      if (icon.classList.contains('trash-can') === false) {
        (0,_modules_dragging_js__WEBPACK_IMPORTED_MODULE_10__["default"])(icon.parentNode);
      }
    });
  });
}

// this function deletes the task list
function deletePrevious() {
  const children = holder.childNodes;
  const counter = children.length;
  for (let i = 5; i < counter; i += 1) {
    if (children.length > 4) {
      holder.removeChild(children[5]);
    }
  }
}

inputAdd.onchange = () => {
  deletePrevious();
  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_5__["default"])(inputAdd.value);
  inputAdd.value = '';
  listConstructor();
};

window.onload = () => {
  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', '[]');
  }
  listConstructor();
};

buttonClear.onclick = () => {
  (0,_modules_clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
};


/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
function Task(description) {
  this.description = description;
  this.completed = false;
}

function addTask(description) {
  const newTask = new Task(description);
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.push(newTask);
  let index = 1;
  tasks.forEach((item) => {
    item.index = index;
    index += 1;
  });
  const toStore = JSON.stringify(tasks);
  localStorage.setItem('tasks', toStore);
}


/***/ }),

/***/ "./src/modules/check.js":
/*!******************************!*\
  !*** ./src/modules/check.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function changeStatus(description, status) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => {
    if (task.description === description) {
      task.completed = status;
    }
  });
  const toStore = JSON.stringify(tasks);
  localStorage.setItem('tasks', toStore);
}

function checkTrue() {
  const checkboxs = document.querySelectorAll('.checkbox');
  checkboxs.forEach((box) => {
    if (box.nextElementSibling.style.textDecoration === 'line-through') {
      box.checked = true;
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const checkboxs = document.querySelectorAll('.checkbox');
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      const check = checkbox.checked;
      if (check === true) {
        checkbox.nextSibling.style.textDecoration = 'line-through';
        changeStatus(checkbox.nextSibling.value, check);
      } else {
        checkbox.nextSibling.style.textDecoration = 'none';
        changeStatus(checkbox.nextSibling.value, check);
      }
    });
  });
  checkTrue();
});


/***/ }),

/***/ "./src/modules/clearAllCompleted.js":
/*!******************************************!*\
  !*** ./src/modules/clearAllCompleted.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ "./src/modules/remove.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const checkboxs = document.querySelectorAll('.checkbox');
  const arr = Array.from(checkboxs);
  const checkboxCheck = arr.filter((check) => check.checked === true);
  checkboxCheck.forEach((cheked) => {
    (0,_remove_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cheked.nextSibling.value);
    cheked.parentElement.remove();
  });
});

/***/ }),

/***/ "./src/modules/dragging.js":
/*!*********************************!*\
  !*** ./src/modules/dragging.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragging)
/* harmony export */ });
function NewObject(description, completed, index) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}
function refresh() {
  const tasks = document.querySelectorAll('.task-item');
  const newData = [];
  let index = 1;

  tasks.forEach((task) => {
    const orderTask = new NewObject(task.childNodes[1].value, task.childNodes[0].checked, index);
    newData.push(orderTask);
    index += 1;
  });
  localStorage.setItem('tasks', (JSON.stringify(newData)));
}

function dragging(node) {
  const holder = document.querySelector('.ul-to-do');
  const listItems = document.querySelectorAll('.task-item');
  node.draggable = true;
  node.addEventListener('dragend', () => {
    listItems.forEach((item) => {
      item.classList.remove('bg-gray');
      item.childNodes[1].classList.remove('bg-gray');
    });
    node = undefined;
  });

  holder.addEventListener('dragover', (e) => {
    if (node === undefined) {
      return;
    }
    e.preventDefault();
    node.classList.add('bg-gray');
    node.childNodes[1].classList.add('bg-gray');
    const mouse = e.clientY;
    const positions = [];
    let where;
    listItems.forEach((element) => {
      positions.push(element.getBoundingClientRect().y);
      where = positions.findIndex((item) => item > mouse);
    });
    const nodeToinsertBefore = listItems[where];
    if (nodeToinsertBefore === undefined) {
      holder.appendChild(node);
    } else {
      holder.insertBefore(node, nodeToinsertBefore);
    }
  });

  holder.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    refresh();
  });
}

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((description, newDescription) => {
  const toModify = JSON.parse(localStorage.getItem('tasks'));
  toModify.forEach((element) => {
    if (element.description === description) {
      element.description = newDescription;
    }
  });
  const toStorage = JSON.stringify(toModify);
  localStorage.setItem('tasks', toStorage);
});

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((description) => {
  const toModify = JSON.parse(localStorage.getItem('tasks'));
  let ind;
  toModify.forEach((element) => {
    if (element.description === description) {
      ind = element.index;
    }
  });
  toModify.splice(ind - 1, 1);
  let newIndex = 1;
  toModify.forEach((element) => {
    element.index = newIndex;
    newIndex += 1;
  });

  const toStorage = JSON.stringify(toModify);
  localStorage.setItem('tasks', toStorage);
  const trashCans = document.querySelectorAll('.trash-can');
  trashCans.forEach((can) => {
    can.parentElement.remove();
  });
});


/***/ }),

/***/ "./src/modules/removeTrash.js":
/*!************************************!*\
  !*** ./src/modules/removeTrash.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ "./src/modules/remove.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const trash = document.querySelector('.trash-can');
  trash.onclick = () => {
    (0,_remove_js__WEBPACK_IMPORTED_MODULE_0__["default"])(trash.previousSibling.value);
  };
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLElBQUksc0RBQU07QUFDVjtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUN6REEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1RELGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckIrQjs7QUFFakMsaUVBQWU7QUFDZjtBQUNBO0FBQ0EsSUFBSSxzREFBTTtBQUNWO0FBQ0EsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaWNvbnMvZG90cy5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pY29ucy9lbnRlci5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pY29ucy9yZWZyZXNoLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ljb25zL3RyYXNoLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvYWRkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jaGVjay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY2xlYXJBbGxDb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RyYWdnaW5nLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVtb3ZlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW1vdmVUcmFzaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xcclxcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoNTUsIDE2MCwgMjA1KSwgcmdiKDI3LCAxMTIsIDE0OCkpO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA3MHB4IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50by1kby1ob2xkZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigxODAgMjE2IDIzMSk7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNywgOTEsIDEyMik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXRvLWRvIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51bC10by1kbyB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICB3aWR0aDogOTglO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGktdG8tZG8ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3LCA5MSwgMTIyKTtcXHJcXG4gIHBhZGRpbmc6IDFweCAxMHB4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGktdG8tZG8taW5wdXQge1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWxpIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpLWRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiA4NyU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGV4dCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogNyU7XFxyXFxuICB3aWR0aDogMjFweDtcXHJcXG4gIGhlaWdodDogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC01cHg7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogMSU7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ob2xkZXIge1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTY5LCAxNzYpO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4taG9sZGVyOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFweCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5iZy15ZWxsb3cge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjMzLCAxNjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctZ3JheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MCwgMTQ0LCAxNDQsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWxpOmZvY3VzLFxcclxcbi50YXNrLXRleHQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5yZWZyZXNoIHtcXHJcXG4gICAgbGVmdDogMyU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG8tZG8taG9sZGVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpLXRvLWRvIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlLXRvLWRvIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2stdGV4dCxcXHJcXG4gIC50ZXh0LWxpIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0bi1ob2xkZXIge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxzRUFBc0U7QUFDeEU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3RUFBd0U7RUFDeEUsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xcclxcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoNTUsIDE2MCwgMjA1KSwgcmdiKDI3LCAxMTIsIDE0OCkpO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA3MHB4IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50by1kby1ob2xkZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigxODAgMjE2IDIzMSk7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNywgOTEsIDEyMik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXRvLWRvIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51bC10by1kbyB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICB3aWR0aDogOTglO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGktdG8tZG8ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3LCA5MSwgMTIyKTtcXHJcXG4gIHBhZGRpbmc6IDFweCAxMHB4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGktdG8tZG8taW5wdXQge1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWxpIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpLWRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiA4NyU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGV4dCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogNyU7XFxyXFxuICB3aWR0aDogMjFweDtcXHJcXG4gIGhlaWdodDogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC01cHg7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogMSU7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ob2xkZXIge1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTY5LCAxNzYpO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4taG9sZGVyOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFweCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5iZy15ZWxsb3cge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjMzLCAxNjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctZ3JheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MCwgMTQ0LCAxNDQsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWxpOmZvY3VzLFxcclxcbi50YXNrLXRleHQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5yZWZyZXNoIHtcXHJcXG4gICAgbGVmdDogMyU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG8tZG8taG9sZGVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpLXRvLWRvIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlLXRvLWRvIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2stdGV4dCxcXHJcXG4gIC50ZXh0LWxpIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0bi1ob2xkZXIge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2MyYTc3MzkwNzg0NzhmYTJkZjY1Yzc4MGEyNWEzZDEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNjNWExMDdiOWYxNjU5YTI1ZGE2MGRkODg4M2RiMmFmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxOGU2ZWFiZTAyM2I0NGZiZjI1YjliOTc0NDg0YzA5OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjViMDgyY2E0NDQzZGQ2MGJkNGZjNTNhNWE2NGEzOTQucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRvdHMgZnJvbSAnLi9pY29ucy9kb3RzLnBuZyc7XG5pbXBvcnQgcmVmcmVzaCBmcm9tICcuL2ljb25zL3JlZnJlc2gucG5nJztcbmltcG9ydCBlbnRlciBmcm9tICcuL2ljb25zL2VudGVyLnBuZyc7XG5pbXBvcnQgdHJhc2ggZnJvbSAnLi9pY29ucy90cmFzaC5wbmcnO1xuaW1wb3J0IGFkZFRhc2sgZnJvbSAnLi9tb2R1bGVzL2FkZC5qcyc7XG5pbXBvcnQgcmVtb3ZlVHJhc2ggZnJvbSAnLi9tb2R1bGVzL3JlbW92ZVRyYXNoLmpzJztcbmltcG9ydCBlZGl0VGFzayBmcm9tICcuL21vZHVsZXMvZWRpdFRhc2suanMnO1xuaW1wb3J0IGNoZWNrIGZyb20gJy4vbW9kdWxlcy9jaGVjay5qcyc7XG5pbXBvcnQgY2xlYXJBbGxDb21wbGV0ZWQgZnJvbSAnLi9tb2R1bGVzL2NsZWFyQWxsQ29tcGxldGVkLmpzJztcbmltcG9ydCBkcmFnZ2luZyBmcm9tICcuL21vZHVsZXMvZHJhZ2dpbmcuanMnO1xuXG5jb25zdCBpbnB1dEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGV4dCcpO1xuY29uc3QgcmVmcmVzaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVmcmVzaCcpO1xuY29uc3QgZW50ZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudGVyJyk7XG5jb25zdCBob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWwtdG8tZG8nKTtcbmNvbnN0IGJ1dHRvbkNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1ob2xkZXInKTtcblxucmVmcmVzaEljb24uc3JjID0gcmVmcmVzaDtcbmVudGVySWNvbi5zcmMgPSBlbnRlcjtcblxuLy8gdGhpcyBmdW5jdGlvbiBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHllbGxvdyB3aGVuIHRoZSB1c2VyIGlzIG9uIHRoZSBpbnB1dFxuZnVuY3Rpb24gY2hhbmdlSWNvbigpIHtcbiAgY29uc3QgdGFza3NJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWl0ZW0nKTtcbiAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay10ZXh0Jyk7XG4gIHRhc2tUZXh0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGFzay5uZXh0U2libGluZy5zcmMgPSB0cmFzaDtcbiAgICAgIHRhc2submV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgndHJhc2gtY2FuJyk7XG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2JnLXllbGxvdycpO1xuICAgICAgdGFzay5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2JnLXllbGxvdycpO1xuICAgICAgcmVtb3ZlVHJhc2goKTtcbiAgICB9KTtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0YXNrLnZhbHVlO1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgZWRpdFRhc2soY3VycmVudFZhbHVlLCB0YXNrLnZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG4gIHRhc2tzSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIGl0ZW0ubGFzdENoaWxkLnNyYyA9IGRvdHM7XG4gICAgICBpdGVtLmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFzaC1jYW4nKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYmcteWVsbG93Jyk7XG4gICAgICBpdGVtLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYmcteWVsbG93Jyk7XG4gICAgfSk7XG4gIH0pO1xufVxuLy8gdGhpcyBmdW5jdGlvbiBidWlsZCB0aGUgbGlzdCB3aXRoIHRoZSB0YXNrIGl0ZW1zXG5mdW5jdGlvbiBsaXN0Q29uc3RydWN0b3IoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSA9PT0gJycgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCAnW10nKTtcbiAgfVxuICBjb25zdCB0b0NvbnN0cnVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICB0b0NvbnN0cnVjdC5zb3J0KCh4LCB5KSA9PiB4LmluZGV4IC0geS5pbmRleCk7XG4gIHRvQ29uc3RydWN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmV3TGkuY2xhc3NMaXN0LmFkZCgnbGktdG8tZG8nKTtcbiAgICBuZXdMaS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICBsZXQgY29tcE9yTm90ID0gJ25vbmUnO1xuICAgIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgY29tcE9yTm90ID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgfVxuICAgIG5ld0xpLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgIGNsYXNzPVwiY2hlY2tib3hcIj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImxpLWRlc2NyaXB0aW9uIHRhc2stdGV4dFwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAke2NvbXBPck5vdH1cIiB2YWx1ZSA9XCIke2l0ZW0uZGVzY3JpcHRpb259XCI+PGltZyBzcmM9XCIke2RvdHN9XCIgY2xhc3M9XCJpY29uXCI+YDtcbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICB9KTtcblxuICBjaGFuZ2VJY29uKCk7XG4gIGNoZWNrKCk7XG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24nKTtcbiAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgaWNvbi5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygndHJhc2gtY2FuJykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRyYWdnaW5nKGljb24ucGFyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyB0aGlzIGZ1bmN0aW9uIGRlbGV0ZXMgdGhlIHRhc2sgbGlzdFxuZnVuY3Rpb24gZGVsZXRlUHJldmlvdXMoKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gaG9sZGVyLmNoaWxkTm9kZXM7XG4gIGNvbnN0IGNvdW50ZXIgPSBjaGlsZHJlbi5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSA1OyBpIDwgY291bnRlcjsgaSArPSAxKSB7XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDQpIHtcbiAgICAgIGhvbGRlci5yZW1vdmVDaGlsZChjaGlsZHJlbls1XSk7XG4gICAgfVxuICB9XG59XG5cbmlucHV0QWRkLm9uY2hhbmdlID0gKCkgPT4ge1xuICBkZWxldGVQcmV2aW91cygpO1xuICBhZGRUYXNrKGlucHV0QWRkLnZhbHVlKTtcbiAgaW5wdXRBZGQudmFsdWUgPSAnJztcbiAgbGlzdENvbnN0cnVjdG9yKCk7XG59O1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCAnW10nKTtcbiAgfVxuICBsaXN0Q29uc3RydWN0b3IoKTtcbn07XG5cbmJ1dHRvbkNsZWFyLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNsZWFyQWxsQ29tcGxldGVkKCk7XG59O1xuIiwiZnVuY3Rpb24gVGFzayhkZXNjcmlwdGlvbikge1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2soZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKGRlc2NyaXB0aW9uKTtcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgbGV0IGluZGV4ID0gMTtcbiAgdGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uaW5kZXggPSBpbmRleDtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcbiAgY29uc3QgdG9TdG9yZSA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgdG9TdG9yZSk7XG59XG4iLCJmdW5jdGlvbiBjaGFuZ2VTdGF0dXMoZGVzY3JpcHRpb24sIHN0YXR1cykge1xuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suZGVzY3JpcHRpb24gPT09IGRlc2NyaXB0aW9uKSB7XG4gICAgICB0YXNrLmNvbXBsZXRlZCA9IHN0YXR1cztcbiAgICB9XG4gIH0pO1xuICBjb25zdCB0b1N0b3JlID0gSlNPTi5zdHJpbmdpZnkodGFza3MpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCB0b1N0b3JlKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUcnVlKCkge1xuICBjb25zdCBjaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcbiAgY2hlY2tib3hzLmZvckVhY2goKGJveCkgPT4ge1xuICAgIGlmIChib3gubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID09PSAnbGluZS10aHJvdWdoJykge1xuICAgICAgYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgY2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XG4gIGNoZWNrYm94cy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2hlY2sgPSBjaGVja2JveC5jaGVja2VkO1xuICAgICAgaWYgKGNoZWNrID09PSB0cnVlKSB7XG4gICAgICAgIGNoZWNrYm94Lm5leHRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIGNoYW5nZVN0YXR1cyhjaGVja2JveC5uZXh0U2libGluZy52YWx1ZSwgY2hlY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tib3gubmV4dFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgIGNoYW5nZVN0YXR1cyhjaGVja2JveC5uZXh0U2libGluZy52YWx1ZSwgY2hlY2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY2hlY2tUcnVlKCk7XG59O1xuIiwiaW1wb3J0IHJlbW92ZSBmcm9tICcuL3JlbW92ZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgY2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XG4gIGNvbnN0IGFyciA9IEFycmF5LmZyb20oY2hlY2tib3hzKTtcbiAgY29uc3QgY2hlY2tib3hDaGVjayA9IGFyci5maWx0ZXIoKGNoZWNrKSA9PiBjaGVjay5jaGVja2VkID09PSB0cnVlKTtcbiAgY2hlY2tib3hDaGVjay5mb3JFYWNoKChjaGVrZWQpID0+IHtcbiAgICByZW1vdmUoY2hla2VkLm5leHRTaWJsaW5nLnZhbHVlKTtcbiAgICBjaGVrZWQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG59OyIsImZ1bmN0aW9uIE5ld09iamVjdChkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB0aGlzLmluZGV4ID0gaW5kZXg7XG59XG5mdW5jdGlvbiByZWZyZXNoKCkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWl0ZW0nKTtcbiAgY29uc3QgbmV3RGF0YSA9IFtdO1xuICBsZXQgaW5kZXggPSAxO1xuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBvcmRlclRhc2sgPSBuZXcgTmV3T2JqZWN0KHRhc2suY2hpbGROb2Rlc1sxXS52YWx1ZSwgdGFzay5jaGlsZE5vZGVzWzBdLmNoZWNrZWQsIGluZGV4KTtcbiAgICBuZXdEYXRhLnB1c2gob3JkZXJUYXNrKTtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgKEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdnaW5nKG5vZGUpIHtcbiAgY29uc3QgaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsLXRvLWRvJyk7XG4gIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWl0ZW0nKTtcbiAgbm9kZS5kcmFnZ2FibGUgPSB0cnVlO1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYmctZ3JheScpO1xuICAgICAgaXRlbS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWdyYXknKTtcbiAgICB9KTtcbiAgICBub2RlID0gdW5kZWZpbmVkO1xuICB9KTtcblxuICBob2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnYmctZ3JheScpO1xuICAgIG5vZGUuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QuYWRkKCdiZy1ncmF5Jyk7XG4gICAgY29uc3QgbW91c2UgPSBlLmNsaWVudFk7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW107XG4gICAgbGV0IHdoZXJlO1xuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBwb3NpdGlvbnMucHVzaChlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkpO1xuICAgICAgd2hlcmUgPSBwb3NpdGlvbnMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID4gbW91c2UpO1xuICAgIH0pO1xuICAgIGNvbnN0IG5vZGVUb2luc2VydEJlZm9yZSA9IGxpc3RJdGVtc1t3aGVyZV07XG4gICAgaWYgKG5vZGVUb2luc2VydEJlZm9yZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBob2xkZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhvbGRlci5pbnNlcnRCZWZvcmUobm9kZSwgbm9kZVRvaW5zZXJ0QmVmb3JlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhvbGRlci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZWZyZXNoKCk7XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IChkZXNjcmlwdGlvbiwgbmV3RGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdG9Nb2RpZnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgdG9Nb2RpZnkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LmRlc2NyaXB0aW9uID09PSBkZXNjcmlwdGlvbikge1xuICAgICAgZWxlbWVudC5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHRvU3RvcmFnZSA9IEpTT04uc3RyaW5naWZ5KHRvTW9kaWZ5KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgdG9TdG9yYWdlKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgKGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IHRvTW9kaWZ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIGxldCBpbmQ7XG4gIHRvTW9kaWZ5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5kZXNjcmlwdGlvbiA9PT0gZGVzY3JpcHRpb24pIHtcbiAgICAgIGluZCA9IGVsZW1lbnQuaW5kZXg7XG4gICAgfVxuICB9KTtcbiAgdG9Nb2RpZnkuc3BsaWNlKGluZCAtIDEsIDEpO1xuICBsZXQgbmV3SW5kZXggPSAxO1xuICB0b01vZGlmeS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5pbmRleCA9IG5ld0luZGV4O1xuICAgIG5ld0luZGV4ICs9IDE7XG4gIH0pO1xuXG4gIGNvbnN0IHRvU3RvcmFnZSA9IEpTT04uc3RyaW5naWZ5KHRvTW9kaWZ5KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgdG9TdG9yYWdlKTtcbiAgY29uc3QgdHJhc2hDYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYXNoLWNhbicpO1xuICB0cmFzaENhbnMuZm9yRWFjaCgoY2FuKSA9PiB7XG4gICAgY2FuLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCByZW1vdmUgZnJvbSAnLi9yZW1vdmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXNoLWNhbicpO1xuICB0cmFzaC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHJlbW92ZSh0cmFzaC5wcmV2aW91c1NpYmxpbmcudmFsdWUpO1xuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==