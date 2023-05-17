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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box !important;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\nhtml {\r\n  height: auto;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: auto;\r\n}\r\n\r\nbody {\r\n  background: linear-gradient(45deg, rgb(55, 160, 205), rgb(27, 112, 148));\r\n  height: auto;\r\n  width: 100%;\r\n  padding: 70px 0;\r\n  margin: 0;\r\n}\r\n\r\n.to-do-holder {\r\n  width: 85%;\r\n  max-width: 500px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  background: rgb(27, 112, 148);\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  border-radius: 6px;\r\n  border: 2px solid rgb(17, 91, 122);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.title-to-do {\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.ul-to-do {\r\n  padding: 0;\r\n  margin: 5px;\r\n  width: 98%;\r\n  border-radius: 6px;\r\n}\r\n\r\n.li-to-do {\r\n  width: 100%;\r\n  list-style: none;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgb(17, 91, 122);\r\n  padding: 1px 10px;\r\n  gap: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n  margin-bottom: 8px;\r\n  background: #fff;\r\n}\r\n\r\n.li-to-do-input {\r\n  padding: 5px 10px;\r\n}\r\n\r\n.text-li {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  font-family: sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.li-description {\r\n  width: 87%;\r\n  height: 100%;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.task-text {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.refresh {\r\n  position: relative;\r\n  left: 7%;\r\n  width: 21px;\r\n  height: 19px;\r\n}\r\n\r\n.enter {\r\n  position: relative;\r\n  left: -5px;\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.icon {\r\n  position: relative;\r\n  left: 1%;\r\n  width: 24px;\r\n  height: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-holder {\r\n  width: 95%;\r\n  height: 35px;\r\n  margin: 0 auto;\r\n  border: none;\r\n  background-color: rgb(153, 169, 176);\r\n  color: rgb(255, 255, 255);\r\n  font-family: sans-serif;\r\n  font-size: 1.4rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.btn-holder:active {\r\n  transform: translateX(-1px);\r\n  transform: translateY(1px);\r\n  box-shadow: 0 0 7px black;\r\n}\r\n\r\n.bg-yellow {\r\n  background: rgb(240, 233, 166);\r\n}\r\n\r\n.bg-gray {\r\n  background-color: rgba(150, 144, 144, 0.8);\r\n}\r\n\r\n.text-li:focus,\r\n.task-text:focus {\r\n  outline: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .refresh {\r\n    left: 3%;\r\n  }\r\n\r\n  .to-do-holder {\r\n    padding: 5px;\r\n  }\r\n\r\n  .li-to-do {\r\n    height: 70px;\r\n  }\r\n\r\n  .title-to-do {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .task-text,\r\n  .text-li {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .btn-holder {\r\n    height: 60px;\r\n    font-size: 30px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,sEAAsE;AACxE;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,wEAAwE;EACxE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,SAAS;AACX;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,6BAA6B;EAC7B,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yCAAyC;EACzC,iBAAiB;EACjB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,oCAAoC;EACpC,yBAAyB;EACzB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE;IACE,QAAQ;EACV;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;;IAEE,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;AACF","sourcesContent":["* {\r\n  box-sizing: border-box !important;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\nhtml {\r\n  height: auto;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: auto;\r\n}\r\n\r\nbody {\r\n  background: linear-gradient(45deg, rgb(55, 160, 205), rgb(27, 112, 148));\r\n  height: auto;\r\n  width: 100%;\r\n  padding: 70px 0;\r\n  margin: 0;\r\n}\r\n\r\n.to-do-holder {\r\n  width: 85%;\r\n  max-width: 500px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  background: rgb(27, 112, 148);\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  border-radius: 6px;\r\n  border: 2px solid rgb(17, 91, 122);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.title-to-do {\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.ul-to-do {\r\n  padding: 0;\r\n  margin: 5px;\r\n  width: 98%;\r\n  border-radius: 6px;\r\n}\r\n\r\n.li-to-do {\r\n  width: 100%;\r\n  list-style: none;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgb(17, 91, 122);\r\n  padding: 1px 10px;\r\n  gap: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n  margin-bottom: 8px;\r\n  background: #fff;\r\n}\r\n\r\n.li-to-do-input {\r\n  padding: 5px 10px;\r\n}\r\n\r\n.text-li {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  font-family: sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.li-description {\r\n  width: 87%;\r\n  height: 100%;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.task-text {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.refresh {\r\n  position: relative;\r\n  left: 7%;\r\n  width: 21px;\r\n  height: 19px;\r\n}\r\n\r\n.enter {\r\n  position: relative;\r\n  left: -5px;\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.icon {\r\n  position: relative;\r\n  left: 1%;\r\n  width: 24px;\r\n  height: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-holder {\r\n  width: 95%;\r\n  height: 35px;\r\n  margin: 0 auto;\r\n  border: none;\r\n  background-color: rgb(153, 169, 176);\r\n  color: rgb(255, 255, 255);\r\n  font-family: sans-serif;\r\n  font-size: 1.4rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.btn-holder:active {\r\n  transform: translateX(-1px);\r\n  transform: translateY(1px);\r\n  box-shadow: 0 0 7px black;\r\n}\r\n\r\n.bg-yellow {\r\n  background: rgb(240, 233, 166);\r\n}\r\n\r\n.bg-gray {\r\n  background-color: rgba(150, 144, 144, 0.8);\r\n}\r\n\r\n.text-li:focus,\r\n.task-text:focus {\r\n  outline: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .refresh {\r\n    left: 3%;\r\n  }\r\n\r\n  .to-do-holder {\r\n    padding: 5px;\r\n  }\r\n\r\n  .li-to-do {\r\n    height: 70px;\r\n  }\r\n\r\n  .title-to-do {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .task-text,\r\n  .text-li {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .btn-holder {\r\n    height: 60px;\r\n    font-size: 30px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUNuQytCO0FBQ2pDO0FBQ0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQU07QUFDVjtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDekRBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNURCxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQitCO0FBQ2pDO0FBQ0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0EsSUFBSSxzREFBTTtBQUNWO0FBQ0EsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaWNvbnMvZG90cy5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pY29ucy9lbnRlci5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pY29ucy9yZWZyZXNoLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ljb25zL3RyYXNoLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvYWRkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jaGVjay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY2xlYXJBbGxDb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RyYWdnaW5nLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVtb3ZlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW1vdmVUcmFzaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xcclxcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoNTUsIDE2MCwgMjA1KSwgcmdiKDI3LCAxMTIsIDE0OCkpO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA3MHB4IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50by1kby1ob2xkZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNywgMTEyLCAxNDgpO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTcsIDkxLCAxMjIpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS10by1kbyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udWwtdG8tZG8ge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgd2lkdGg6IDk4JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpLXRvLWRvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNywgOTEsIDEyMik7XFxyXFxuICBwYWRkaW5nOiAxcHggMTBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpLXRvLWRvLWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1saSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5saS1kZXNjcmlwdGlvbiB7XFxyXFxuICB3aWR0aDogODclO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRleHQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDclO1xcclxcbiAgd2lkdGg6IDIxcHg7XFxyXFxuICBoZWlnaHQ6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbi5lbnRlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAtNXB4O1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDElO1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4taG9sZGVyIHtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE2OSwgMTc2KTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWhvbGRlcjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgN3B4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYmcteWVsbG93IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNDAsIDIzMywgMTY2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWdyYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTAsIDE0NCwgMTQ0LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1saTpmb2N1cyxcXHJcXG4udGFzay10ZXh0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAucmVmcmVzaCB7XFxyXFxuICAgIGxlZnQ6IDMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvLWRvLWhvbGRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saS10by1kbyB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZS10by1kbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLXRleHQsXFxyXFxuICAudGV4dC1saSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG4taG9sZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0VBQXdFO0VBQ3hFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDU1LCAxNjAsIDIwNSksIHJnYigyNywgMTEyLCAxNDgpKTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNzBweCAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8taG9sZGVyIHtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjcsIDExMiwgMTQ4KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE3LCA5MSwgMTIyKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtdG8tZG8ge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVsLXRvLWRvIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG4gIHdpZHRoOiA5OCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5saS10by1kbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTcsIDkxLCAxMjIpO1xcclxcbiAgcGFkZGluZzogMXB4IDEwcHg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5saS10by1kby1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtbGkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGktZGVzY3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDg3JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10ZXh0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiA3JTtcXHJcXG4gIHdpZHRoOiAyMXB4O1xcclxcbiAgaGVpZ2h0OiAxOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTVweDtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAxJTtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWhvbGRlciB7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxNjksIDE3Nik7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ob2xkZXI6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDdweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXllbGxvdyB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyMzMsIDE2Nik7XFxyXFxufVxcclxcblxcclxcbi5iZy1ncmF5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUwLCAxNDQsIDE0NCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtbGk6Zm9jdXMsXFxyXFxuLnRhc2stdGV4dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnJlZnJlc2gge1xcclxcbiAgICBsZWZ0OiAzJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50by1kby1ob2xkZXIge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGktdG8tZG8ge1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGUtdG8tZG8ge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay10ZXh0LFxcclxcbiAgLnRleHQtbGkge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnRuLWhvbGRlciB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3YzJhNzczOTA3ODQ3OGZhMmRmNjVjNzgwYTI1YTNkMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2M1YTEwN2I5ZjE2NTlhMjVkYTYwZGQ4ODgzZGIyYWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE4ZTZlYWJlMDIzYjQ0ZmJmMjViOWI5NzQ0ODRjMDk4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NWIwODJjYTQ0NDNkZDYwYmQ0ZmM1M2E1YTY0YTM5NC5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBkb3RzIGZyb20gJy4vaWNvbnMvZG90cy5wbmcnO1xyXG5pbXBvcnQgcmVmcmVzaCBmcm9tICcuL2ljb25zL3JlZnJlc2gucG5nJztcclxuaW1wb3J0IGVudGVyIGZyb20gJy4vaWNvbnMvZW50ZXIucG5nJztcclxuaW1wb3J0IHRyYXNoIGZyb20gJy4vaWNvbnMvdHJhc2gucG5nJztcclxuaW1wb3J0IGFkZFRhc2sgZnJvbSAnLi9tb2R1bGVzL2FkZC5qcyc7XHJcbmltcG9ydCByZW1vdmVUcmFzaCBmcm9tICcuL21vZHVsZXMvcmVtb3ZlVHJhc2guanMnO1xyXG5pbXBvcnQgZWRpdFRhc2sgZnJvbSAnLi9tb2R1bGVzL2VkaXRUYXNrLmpzJztcclxuaW1wb3J0IGNoZWNrIGZyb20gJy4vbW9kdWxlcy9jaGVjay5qcyc7XHJcbmltcG9ydCBjbGVhckFsbENvbXBsZXRlZCBmcm9tICcuL21vZHVsZXMvY2xlYXJBbGxDb21wbGV0ZWQuanMnO1xyXG5pbXBvcnQgZHJhZ2dpbmcgZnJvbSAnLi9tb2R1bGVzL2RyYWdnaW5nLmpzJztcclxuXHJcbmNvbnN0IGlucHV0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10ZXh0Jyk7XHJcbmNvbnN0IHJlZnJlc2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gnKTtcclxuY29uc3QgZW50ZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudGVyJyk7XHJcbmNvbnN0IGhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bC10by1kbycpO1xyXG5jb25zdCBidXR0b25DbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4taG9sZGVyJyk7XHJcblxyXG5yZWZyZXNoSWNvbi5zcmMgPSByZWZyZXNoO1xyXG5lbnRlckljb24uc3JjID0gZW50ZXI7XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIGNoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3IgdG8geWVsbG93IHdoZW4gdGhlIHVzZXIgaXMgb24gdGhlIGlucHV0XHJcbmZ1bmN0aW9uIGNoYW5nZUljb24oKSB7XHJcbiAgY29uc3QgdGFza3NJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWl0ZW0nKTtcclxuICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXRleHQnKTtcclxuICB0YXNrVGV4dC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0YXNrLm5leHRTaWJsaW5nLnNyYyA9IHRyYXNoO1xyXG4gICAgICB0YXNrLm5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3RyYXNoLWNhbicpO1xyXG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2JnLXllbGxvdycpO1xyXG4gICAgICB0YXNrLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYmcteWVsbG93Jyk7XHJcbiAgICAgIHJlbW92ZVRyYXNoKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRhc2sudmFsdWU7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgZWRpdFRhc2soY3VycmVudFZhbHVlLCB0YXNrLnZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHRhc2tzSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICBpdGVtLmxhc3RDaGlsZC5zcmMgPSBkb3RzO1xyXG4gICAgICBpdGVtLmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFzaC1jYW4nKTtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdiZy15ZWxsb3cnKTtcclxuICAgICAgaXRlbS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXllbGxvdycpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuLy8gdGhpcyBmdW5jdGlvbiBidWlsZCB0aGUgbGlzdCB3aXRoIHRoZSB0YXNrIGl0ZW1zXHJcbmZ1bmN0aW9uIGxpc3RDb25zdHJ1Y3RvcigpIHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09ICcnIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpID09PSBudWxsKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCAnW10nKTtcclxuICB9XHJcbiAgY29uc3QgdG9Db25zdHJ1Y3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICB0b0NvbnN0cnVjdC5zb3J0KCh4LCB5KSA9PiB4LmluZGV4IC0geS5pbmRleCk7XHJcbiAgdG9Db25zdHJ1Y3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbmV3TGkuY2xhc3NMaXN0LmFkZCgnbGktdG8tZG8nKTtcclxuICAgIG5ld0xpLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xyXG4gICAgbGV0IGNvbXBPck5vdCA9ICdub25lJztcclxuICAgIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb21wT3JOb3QgPSAnbGluZS10aHJvdWdoJztcclxuICAgIH1cclxuICAgIG5ld0xpLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgIGNsYXNzPVwiY2hlY2tib3hcIj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImxpLWRlc2NyaXB0aW9uIHRhc2stdGV4dFwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAke2NvbXBPck5vdH1cIiB2YWx1ZSA9XCIke2l0ZW0uZGVzY3JpcHRpb259XCI+PGltZyBzcmM9XCIke2RvdHN9XCIgY2xhc3M9XCJpY29uXCI+YDtcclxuICAgIGhvbGRlci5hcHBlbmRDaGlsZChuZXdMaSk7XHJcbiAgfSk7XHJcblxyXG4gIGNoYW5nZUljb24oKTtcclxuICBjaGVjaygpO1xyXG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24nKTtcclxuICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcclxuICAgICAgaWNvbi5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICAgICAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCd0cmFzaC1jYW4nKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBkcmFnZ2luZyhpY29uLnBhcmVudE5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBkZWxldGVzIHRoZSB0YXNrIGxpc3RcclxuZnVuY3Rpb24gZGVsZXRlUHJldmlvdXMoKSB7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBob2xkZXIuY2hpbGROb2RlcztcclxuICBjb25zdCBjb3VudGVyID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSA1OyBpIDwgY291bnRlcjsgaSArPSAxKSB7XHJcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gNCkge1xyXG4gICAgICBob2xkZXIucmVtb3ZlQ2hpbGQoY2hpbGRyZW5bNV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW5wdXRBZGQub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgZGVsZXRlUHJldmlvdXMoKTtcclxuICBhZGRUYXNrKGlucHV0QWRkLnZhbHVlKTtcclxuICBpbnB1dEFkZC52YWx1ZSA9ICcnO1xyXG4gIGxpc3RDb25zdHJ1Y3RvcigpO1xyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsICdbXScpO1xyXG4gIH1cclxuICBsaXN0Q29uc3RydWN0b3IoKTtcclxufTtcclxuXHJcbmJ1dHRvbkNsZWFyLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgY2xlYXJBbGxDb21wbGV0ZWQoKTtcclxufTtcclxuIiwiZnVuY3Rpb24gVGFzayhkZXNjcmlwdGlvbikge1xyXG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUYXNrKGRlc2NyaXB0aW9uKSB7XHJcbiAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKGRlc2NyaXB0aW9uKTtcclxuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gIHRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgbGV0IGluZGV4ID0gMTtcclxuICB0YXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmluZGV4ID0gaW5kZXg7XHJcbiAgICBpbmRleCArPSAxO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHRvU3RvcmUgPSBKU09OLnN0cmluZ2lmeSh0YXNrcyk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgdG9TdG9yZSk7XHJcbn1cclxuIiwiZnVuY3Rpb24gY2hhbmdlU3RhdHVzKGRlc2NyaXB0aW9uLCBzdGF0dXMpIHtcclxuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uID09PSBkZXNjcmlwdGlvbikge1xyXG4gICAgICB0YXNrLmNvbXBsZXRlZCA9IHN0YXR1cztcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCB0b1N0b3JlID0gSlNPTi5zdHJpbmdpZnkodGFza3MpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIHRvU3RvcmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1RydWUoKSB7XHJcbiAgY29uc3QgY2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XHJcbiAgY2hlY2tib3hzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgaWYgKGJveC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPT09ICdsaW5lLXRocm91Z2gnKSB7XHJcbiAgICAgIGJveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGNoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG4gIGNoZWNrYm94cy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNoZWNrID0gY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgaWYgKGNoZWNrID09PSB0cnVlKSB7XHJcbiAgICAgICAgY2hlY2tib3gubmV4dFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICBjaGFuZ2VTdGF0dXMoY2hlY2tib3gubmV4dFNpYmxpbmcudmFsdWUsIGNoZWNrKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjaGVja2JveC5uZXh0U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICBjaGFuZ2VTdGF0dXMoY2hlY2tib3gubmV4dFNpYmxpbmcudmFsdWUsIGNoZWNrKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgY2hlY2tUcnVlKCk7XHJcbn07XHJcbiIsImltcG9ydCByZW1vdmUgZnJvbSAnLi9yZW1vdmUuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGNoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG4gIGNvbnN0IGFyciA9IEFycmF5LmZyb20oY2hlY2tib3hzKTtcclxuICBjb25zdCBjaGVja2JveENoZWNrID0gYXJyLmZpbHRlcigoY2hlY2spID0+IGNoZWNrLmNoZWNrZWQgPT09IHRydWUpO1xyXG4gIGNoZWNrYm94Q2hlY2suZm9yRWFjaCgoY2hla2VkKSA9PiB7XHJcbiAgICByZW1vdmUoY2hla2VkLm5leHRTaWJsaW5nLnZhbHVlKTtcclxuICAgIGNoZWtlZC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59OyIsImZ1bmN0aW9uIE5ld09iamVjdChkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xyXG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbn1cclxuZnVuY3Rpb24gcmVmcmVzaCgpIHtcclxuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWl0ZW0nKTtcclxuICBjb25zdCBuZXdEYXRhID0gW107XHJcbiAgbGV0IGluZGV4ID0gMTtcclxuXHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3Qgb3JkZXJUYXNrID0gbmV3IE5ld09iamVjdCh0YXNrLmNoaWxkTm9kZXNbMV0udmFsdWUsIHRhc2suY2hpbGROb2Rlc1swXS5jaGVja2VkLCBpbmRleCk7XHJcbiAgICBuZXdEYXRhLnB1c2gob3JkZXJUYXNrKTtcclxuICAgIGluZGV4ICs9IDE7XHJcbiAgfSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgKEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdnaW5nKG5vZGUpIHtcclxuICBjb25zdCBob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWwtdG8tZG8nKTtcclxuICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1pdGVtJyk7XHJcbiAgbm9kZS5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcclxuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYmctZ3JheScpO1xyXG4gICAgICBpdGVtLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYmctZ3JheScpO1xyXG4gICAgfSk7XHJcbiAgICBub2RlID0gdW5kZWZpbmVkO1xyXG4gIH0pO1xyXG5cclxuICBob2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2JnLWdyYXknKTtcclxuICAgIG5vZGUuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QuYWRkKCdiZy1ncmF5Jyk7XHJcbiAgICBjb25zdCBtb3VzZSA9IGUuY2xpZW50WTtcclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xyXG4gICAgbGV0IHdoZXJlO1xyXG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgcG9zaXRpb25zLnB1c2goZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55KTtcclxuICAgICAgd2hlcmUgPSBwb3NpdGlvbnMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID4gbW91c2UpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBub2RlVG9pbnNlcnRCZWZvcmUgPSBsaXN0SXRlbXNbd2hlcmVdO1xyXG4gICAgaWYgKG5vZGVUb2luc2VydEJlZm9yZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhvbGRlci5pbnNlcnRCZWZvcmUobm9kZSwgbm9kZVRvaW5zZXJ0QmVmb3JlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHJlZnJlc2goKTtcclxuICB9KTtcclxufSIsImV4cG9ydCBkZWZhdWx0IChkZXNjcmlwdGlvbiwgbmV3RGVzY3JpcHRpb24pID0+IHtcclxuICBjb25zdCB0b01vZGlmeSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gIHRvTW9kaWZ5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LmRlc2NyaXB0aW9uID09PSBkZXNjcmlwdGlvbikge1xyXG4gICAgICBlbGVtZW50LmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgdG9TdG9yYWdlID0gSlNPTi5zdHJpbmdpZnkodG9Nb2RpZnkpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIHRvU3RvcmFnZSk7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgKGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgY29uc3QgdG9Nb2RpZnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICBsZXQgaW5kO1xyXG4gIHRvTW9kaWZ5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LmRlc2NyaXB0aW9uID09PSBkZXNjcmlwdGlvbikge1xyXG4gICAgICBpbmQgPSBlbGVtZW50LmluZGV4O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHRvTW9kaWZ5LnNwbGljZShpbmQgLSAxLCAxKTtcclxuICBsZXQgbmV3SW5kZXggPSAxO1xyXG4gIHRvTW9kaWZ5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuaW5kZXggPSBuZXdJbmRleDtcclxuICAgIG5ld0luZGV4ICs9IDE7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvU3RvcmFnZSA9IEpTT04uc3RyaW5naWZ5KHRvTW9kaWZ5KTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCB0b1N0b3JhZ2UpO1xyXG4gIGNvbnN0IHRyYXNoQ2FucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFzaC1jYW4nKTtcclxuICB0cmFzaENhbnMuZm9yRWFjaCgoY2FuKSA9PiB7XHJcbiAgICBjYW4ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHJlbW92ZSBmcm9tICcuL3JlbW92ZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtY2FuJyk7XHJcbiAgdHJhc2gub25jbGljayA9ICgpID0+IHtcclxuICAgIHJlbW92ZSh0cmFzaC5wcmV2aW91c1NpYmxpbmcudmFsdWUpO1xyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==