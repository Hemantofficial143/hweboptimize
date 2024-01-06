(self["webpackChunk"] = self["webpackChunk"] || []).push([["pages-coming-soon"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/coming_soon.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/coming_soon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_pages_coming_soon_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/pages/coming-soon/style.scss */ "./resources/js/src/assets/sass/pages/coming-soon/style.scss");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Comming Soon'
  },
  data: function data() {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    };
  },
  mounted: function mounted() {
    this.set_timer();
  },
  methods: {
    set_timer: function set_timer() {
      var _this = this;

      // Set the date we're counting down to
      var getYear = new Date().getFullYear() + 1;
      var countDownDate = new Date('Dec 5, ' + getYear + ' 15:37:25').getTime(); // Update the count down every 1 second

      var countdownfunction = setInterval(function () {
        // Get todays date and time
        var now = new Date().getTime(); // Find the distance between now an the count down date

        var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

        _this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        _this.hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        _this.minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        _this.seconds = Math.floor(distance % (1000 * 60) / 1000); // If the count down is over, write some text

        if (distance < 0) {
          clearInterval(countdownfunction);
          document.getElementById('timer').innerHTML = 'EXPIRED';
        }
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./resources/js/src/assets/images/mindset.svg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/mindset.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/mindset-fd1f9ed63187ab156c4aa2839c892f8e.svg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/pages/coming-soon/style.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/pages/coming-soon/style.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  overflow: auto;\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\n\n.coming-soon-container {\n  display: flex;\n}\n\n.coming-soon-cont {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  height: 100vh;\n}\n\n.coming-soon-cont .coming-soon-wrap {\n  max-width: 480px;\n  margin: 0 auto;\n  min-width: 311px;\n  min-height: 100%;\n}\n\n.coming-soon-cont .coming-soon-container {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  padding: 30px 30px;\n  width: 100%;\n  min-height: 100%;\n}\n\n.coming-soon-cont .coming-soon-container .coming-soon-content {\n  display: block;\n  width: 100%;\n}\n\n.coming-soon-cont .coming-soon-content > h4 {\n  font-size: 40px;\n  margin-top: 30px;\n  font-weight: 700;\n  color: #4361ee;\n  margin-bottom: 0;\n  text-shadow: 0px 5px 4px rgba(31, 45, 61, 0.1019607843);\n}\n\n.coming-soon-cont .coming-soon-content > p:not(.terms-conditions) {\n  font-size: 16px;\n  color: #888ea8;\n  font-weight: 700;\n  margin-bottom: 50px;\n}\n\n.coming-soon-cont #timer {\n  display: flex;\n}\n\n.coming-soon-cont #timer .days, .coming-soon-cont #timer .hours, .coming-soon-cont #timer .min {\n  padding: 28px 0;\n  background: #4361ee;\n  color: #fff;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 15px;\n  letter-spacing: 2px;\n  text-align: center;\n  height: 95px;\n  width: 95px;\n  margin-right: 15px;\n}\n\n.coming-soon-cont #timer .sec {\n  padding: 28px 0;\n  background: #4361ee;\n  color: #fff;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 15px;\n  letter-spacing: 2px;\n  text-align: center;\n  height: 95px;\n  width: 95px;\n  margin-right: 15px;\n  margin-right: 0;\n}\n\n.coming-soon-cont #timer .days .count, .coming-soon-cont #timer .days .text {\n  display: block;\n}\n\n.coming-soon-cont #timer .hours .count, .coming-soon-cont #timer .hours .text {\n  display: block;\n}\n\n.coming-soon-cont #timer .min .count, .coming-soon-cont #timer .min .text {\n  display: block;\n}\n\n.coming-soon-cont #timer .sec .count, .coming-soon-cont #timer .sec .text {\n  display: block;\n}\n\n.coming-soon-cont .coming-soon-content > h3 {\n  text-align: center;\n  font-size: 21px;\n  font-weight: 700;\n  margin-top: 75px;\n  margin-bottom: 40px;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper {\n  position: relative;\n  display: flex;\n  width: 100%;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper svg {\n  position: absolute;\n  top: 11px;\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n  left: 8px;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper input {\n  padding: 10px 97px 10px 45px;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper input::-webkit-input-placeholder, .coming-soon-cont .coming-soon-wrap form .field-wrapper input::-ms-input-placeholder, .coming-soon-cont .coming-soon-wrap form .field-wrapper input::-moz-placeholder {\n  color: #d3d3d3;\n  font-size: 14px;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper input:focus {\n  border-bottom: 1px solid #4361ee;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper button.btn {\n  align-self: center;\n  position: absolute;\n  right: 0;\n  padding: 10px 17px;\n  border-bottom-left-radius: 20px;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper button.btn:hover {\n  transform: none;\n}\n\n.coming-soon-cont .social {\n  text-align: center;\n  color: #4361ee;\n  margin: 45px 0 0 0;\n}\n\n.coming-soon-cont .social li {\n  margin: 0;\n}\n\n.coming-soon-cont .social li:not(:last-child) {\n  margin-right: 10px;\n  padding-right: 10px;\n  border-right: 2px solid #d3d3d3;\n}\n\n.coming-soon-cont .social svg {\n  color: #4361ee;\n  width: 20px;\n  height: 20px;\n}\n\n.coming-soon-cont .terms-conditions {\n  max-width: 480px;\n  margin: 0 auto;\n  color: #3b3f5c;\n  font-weight: 600;\n  margin-top: 70px;\n}\n\n.coming-soon-cont .terms-conditions a {\n  color: #4361ee;\n  font-weight: 700;\n}\n\n.coming-soon-image {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  right: 0;\n  min-height: auto;\n  height: 100vh;\n  width: 50%;\n}\n\n.coming-soon-image .img-overlay-content {\n  height: 100%;\n  background: rgba(0, 0, 0, 0.55);\n}\n\n.coming-soon-image .img-overlay-content p {\n  color: #fff;\n  position: absolute;\n}\n\n.coming-soon-image .l-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #060818;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-x: center;\n  background-position-y: center;\n}\n\n.coming-soon-image .l-image .img-content {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\n.coming-soon-image .l-image img {\n  width: 577px;\n  align-self: center;\n}\n\n@media (max-width: 991px) {\n  .coming-soon-cont {\n    width: 100%;\n  }\n  .coming-soon-cont .coming-soon-wrap {\n    min-width: auto;\n  }\n  .coming-soon-image {\n    display: none;\n  }\n}\n@media (max-width: 575px) {\n  .coming-soon-cont #timer {\n    display: flex;\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n    justify-content: center;\n  }\n  .coming-soon-cont #timer .hours:not(:last-child) {\n    margin-right: 0;\n  }\n  .coming-soon-cont #timer .days, .coming-soon-cont #timer .hours, .coming-soon-cont #timer .min, .coming-soon-cont #timer .sec {\n    flex: 0 0 40%;\n    max-width: 40%;\n    margin-bottom: 15px;\n    margin-bottom: 15px;\n    padding: 14px 0;\n    height: 71px;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .coming-soon-cont .coming-soon-wrap {\n    width: 100%;\n  }\n  .coming-soon-cont .coming-soon-container {\n    height: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/pages/coming-soon/style.scss":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/sass/pages/coming-soon/style.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./style.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/pages/coming-soon/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/pages/coming_soon.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/pages/coming_soon.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coming_soon_vue_vue_type_template_id_17d6d994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming_soon.vue?vue&type=template&id=17d6d994& */ "./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994&");
/* harmony import */ var _coming_soon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming_soon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/coming_soon.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _coming_soon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _coming_soon_vue_vue_type_template_id_17d6d994___WEBPACK_IMPORTED_MODULE_0__.render,
  _coming_soon_vue_vue_type_template_id_17d6d994___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/coming_soon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/coming_soon.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/coming_soon.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coming_soon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/coming_soon.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_template_id_17d6d994___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_template_id_17d6d994___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_template_id_17d6d994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coming_soon.vue?vue&type=template&id=17d6d994& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "layout-px-spacing" },
    [
      _c("portal", { attrs: { to: "breadcrumb" } }, [
        _c("ul", { staticClass: "navbar-nav flex-row" }, [
          _c("li", [
            _c("div", { staticClass: "page-header" }, [
              _c(
                "nav",
                {
                  staticClass: "breadcrumb-one",
                  attrs: { "aria-label": "breadcrumb" },
                },
                [
                  _c("ol", { staticClass: "breadcrumb" }, [
                    _c("li", { staticClass: "breadcrumb-item" }, [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _vm._v("Pages"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "breadcrumb-item active",
                        attrs: { "aria-current": "page" },
                      },
                      [_c("span", [_vm._v("Profile")])]
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "coming-soon" }, [
        _c("div", { staticClass: "coming-soon-container" }, [
          _c("div", { staticClass: "coming-soon-cont" }, [
            _c("div", { staticClass: "coming-soon-wrap" }, [
              _c("div", { staticClass: "coming-soon-container" }, [
                _c(
                  "div",
                  { staticClass: "coming-soon-content" },
                  [
                    _c("h4", {}, [_vm._v("Coming Soon")]),
                    _vm._v(" "),
                    _c("p", {}, [
                      _vm._v("We will be here in a shortwhile....."),
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "timer" } }, [
                      _c("div", { staticClass: "days" }, [
                        _c("span", { staticClass: "count" }, [
                          _vm._v(_vm._s(_vm.days ? _vm.days : "--")),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text" }, [_vm._v("Days")]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "hours" }, [
                        _c("span", { staticClass: "count" }, [
                          _vm._v(_vm._s(_vm.hours ? _vm.hours : "--")),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text" }, [_vm._v("Hours")]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "min" }, [
                        _c("span", { staticClass: "count" }, [
                          _vm._v(_vm._s(_vm.minutes ? _vm.minutes : "--")),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text" }, [_vm._v("Mins")]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "sec" }, [
                        _c("span", { staticClass: "count" }, [
                          _vm._v(_vm._s(_vm.seconds ? _vm.seconds : "--")),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text" }, [_vm._v("Secs")]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("h3", [_vm._v("Subscribe to get notified!")]),
                    _vm._v(" "),
                    _c("b-form", { staticClass: "text-left" }, [
                      _c("div", { staticClass: "coming-soon" }, [
                        _c("div", {}, [
                          _c(
                            "div",
                            {
                              staticClass: "field-wrapper input",
                              attrs: { id: "email-field" },
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "feather feather-at-sign",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                  },
                                },
                                [
                                  _c("circle", {
                                    attrs: { cx: "12", cy: "12", r: "4" },
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94",
                                    },
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _c("b-input", {
                                attrs: { type: "email", placeholder: "Email" },
                              }),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { type: "submit", variant: "primary" },
                                },
                                [_vm._v("Subscribe")]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "social list-inline" }, [
                      _c("li", { staticClass: "list-inline-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c(
                            "svg",
                            {
                              staticClass: "feather feather-linkedin",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                                },
                              }),
                              _vm._v(" "),
                              _c("rect", {
                                attrs: {
                                  x: "2",
                                  y: "9",
                                  width: "4",
                                  height: "12",
                                },
                              }),
                              _vm._v(" "),
                              _c("circle", {
                                attrs: { cx: "4", cy: "4", r: "2" },
                              }),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "list-inline-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c(
                            "svg",
                            {
                              staticClass: "feather feather-facebook",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                                },
                              }),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "list-inline-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c(
                            "svg",
                            {
                              staticClass: "feather feather-twitter",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                                },
                              }),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "list-inline-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c(
                            "svg",
                            {
                              staticClass: "feather feather-github",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                                },
                              }),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "terms-conditions" },
                      [
                        _vm._v(
                          "\n                                © 2021 All Rights Reserved. "
                        ),
                        _c("router-link", { attrs: { to: "/" } }, [
                          _vm._v("CORK"),
                        ]),
                        _vm._v(" is a product of Arrangic Solutions LLP. "),
                        _c("a", { attrs: { href: "javascript:void(0);" } }, [
                          _vm._v("Cookie Preferences"),
                        ]),
                        _vm._v(",\n                                "),
                        _c("a", { attrs: { href: "javascript:void(0);" } }, [
                          _vm._v("Privacy"),
                        ]),
                        _vm._v(", and "),
                        _c("a", { attrs: { href: "javascript:void(0);" } }, [
                          _vm._v("Terms"),
                        ]),
                        _vm._v(".\n                            "),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(0),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "coming-soon-image" }, [
      _c("div", { staticClass: "l-image" }, [
        _c("div", { staticClass: "img-content" }, [
          _c("img", {
            attrs: {
              src: __webpack_require__(/*! @/assets/images/mindset.svg */ "./resources/js/src/assets/images/mindset.svg"),
              alt: "coming_soon",
            },
          }),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);