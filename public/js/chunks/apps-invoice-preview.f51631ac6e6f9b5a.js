(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-invoice-preview"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_apps_invoice_preview_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/apps/invoice-preview.scss */ "./resources/js/src/assets/sass/apps/invoice-preview.scss");
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
    title: 'Invoice Preview'
  },
  data: function data() {
    return {
      items: [],
      columns: []
    };
  },
  mounted: function mounted() {
    this.bind_data();
  },
  methods: {
    bind_data: function bind_data() {
      this.columns = [{
        key: 'id',
        label: 'S.NO',
        thClass: 'header-checkbox'
      }, {
        key: 'title',
        label: 'ITEMS'
      }, {
        key: 'quantity',
        label: 'QTY'
      }, {
        key: 'price',
        label: 'PRICE',
        "class": 'text-right'
      }, {
        key: 'amount',
        label: 'AMOUNT',
        "class": 'text-right'
      }];
      this.items = [{
        id: 1,
        title: 'Calendar App Customization',
        quantity: 1,
        price: '120',
        amount: '120'
      }, {
        id: 2,
        title: 'Chat App Customization',
        quantity: 1,
        price: '230',
        amount: '230'
      }, {
        id: 3,
        title: 'Laravel Integration',
        quantity: 1,
        price: '405',
        amount: '405'
      }, {
        id: 4,
        title: 'Backend UI Design',
        quantity: 1,
        price: '2500',
        amount: '2500'
      }];
    },
    print: function print() {
      window.print();
    }
  }
});

/***/ }),

/***/ "./resources/js/src/assets/images/cork-logo.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/cork-logo.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/cork-logo-21142feea95359d716b06f39abd00112.png";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/invoice-preview.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/invoice-preview.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.actions-btn-tooltip.tooltip {\n  opacity: 1;\n  top: -11px !important;\n}\n\n.actions-btn-tooltip .arrow:before {\n  border-top-color: #3b3f5c;\n}\n\n.actions-btn-tooltip .tooltip-inner {\n  background: #3b3f5c;\n  color: #fff;\n  font-weight: 700;\n  border-radius: 30px;\n  box-shadow: 0px 5px 15px 1px rgba(113, 106, 202, 0.2);\n  padding: 4px 16px;\n}\n\n.invoice-container {\n  width: 100%;\n}\n\n.invoice-inbox {\n  padding: 0;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n  border-radius: 6px;\n}\n\n.invoice-inbox .inv-number {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 0;\n  color: #888ea8;\n}\n\n.invoice-inbox .invoice-action svg {\n  cursor: pointer;\n  font-weight: 600;\n  color: #888ea8;\n  margin-right: 6px;\n  vertical-align: middle;\n  fill: rgba(0, 23, 55, 0.08);\n}\n\n.invoice-inbox .invoice-action svg:not(:last-child) {\n  margin-right: 15px;\n}\n\n.invoice-inbox .invoice-action svg:hover {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n/*\n===================\n\n     Invoice\n\n===================\n*/\n/*    Inv head section   */\n.invoice .content-section .inv--head-section {\n  padding: 36px 35px;\n  margin-bottom: 40px;\n  padding-bottom: 25px;\n  border-bottom: 1px solid #ebedf2;\n}\n\n.inv--customer-detail-section {\n  padding: 36px 35px;\n  padding-top: 0;\n}\n\n.invoice .content-section .inv--head-section h3.in-heading {\n  font-size: 18px;\n  font-weight: 600;\n  color: #0e1726;\n  margin: 0;\n  margin-left: 12px;\n}\n\n.invoice .content-section .inv--head-section .company-logo {\n  width: 36px;\n  height: 36px;\n}\n\n.invoice .content-section .inv--head-section div.company-info {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.invoice .content-section .inv--head-section div.company-info svg {\n  width: 42px;\n  height: 42px;\n  margin-right: 10px;\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.invoice .content-section .inv--head-section .inv-brand-name {\n  font-size: 23px;\n  font-weight: 600;\n  margin-bottom: 0;\n  align-self: center;\n}\n\n.invoice .content-section .inv--detail-section .inv-to {\n  font-weight: 700;\n  font-size: 15px;\n  margin-bottom: 15px;\n}\n\n.invoice .content-section .inv--detail-section .inv-customer-name {\n  font-weight: 700;\n  margin-bottom: 2px;\n  font-size: 13px;\n  color: #4361ee;\n}\n\n.invoice .content-section .inv--detail-section .inv-detail-title {\n  font-weight: 700;\n  margin-bottom: 0;\n  font-size: 15px;\n  margin-bottom: 15px;\n}\n\n.invoice .content-section .inv--detail-section .inv-details {\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n\n.invoice .content-section .inv--detail-section .inv-street-addr, .invoice .content-section .inv--detail-section .inv-email-address {\n  font-weight: 600;\n  margin-bottom: 2px;\n  font-size: 13px;\n}\n\n.invoice .content-section .inv--detail-section .inv-list-number {\n  margin-bottom: 2px;\n}\n\n.invoice .content-section .inv--detail-section .inv-list-number .inv-title {\n  font-weight: 400;\n  font-size: 20px;\n}\n\n.invoice .content-section .inv--detail-section .inv-list-number .inv-number {\n  font-weight: 400;\n  font-size: 18px;\n  color: #4361ee;\n}\n\n.invoice .content-section .inv--detail-section .inv-created-date, .invoice .content-section .inv--detail-section .inv-due-date {\n  margin-bottom: 2px;\n}\n\n.invoice .content-section .inv--detail-section .inv-created-date .inv-title, .invoice .content-section .inv--detail-section .inv-due-date .inv-title {\n  font-weight: 700;\n  font-size: 13px;\n}\n\n.invoice .content-section .inv--detail-section .inv-created-date .inv-date, .invoice .content-section .inv--detail-section .inv-due-date .inv-date {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.invoice .content-section .inv--product-table-section {\n  padding: 30px 0;\n}\n\n.invoice .content-section .inv--product-table-section table {\n  margin-bottom: 0;\n}\n\n.invoice .content-section .inv--product-table-section thead tr {\n  border: none;\n}\n\n.invoice .content-section .inv--product-table-section th {\n  padding: 9px 22px;\n  font-size: 11px !important;\n  border: none;\n  border-top: 1px solid #e0e6ed;\n  border-bottom: 1px solid #e0e6ed;\n  color: #515365 !important;\n}\n\n.invoice .content-section .inv--product-table-section th:first-child {\n  padding-left: 35px;\n}\n\n.invoice .content-section .inv--product-table-section th:last-child {\n  padding-right: 35px;\n}\n\n.invoice .content-section .inv--product-table-section tr td:first-child {\n  padding-left: 35px;\n}\n\n.invoice .content-section .inv--product-table-section tr td:last-child {\n  padding-right: 35px;\n}\n\n.invoice .content-section .inv--product-table-section td {\n  color: #515365;\n  font-weight: 600;\n  border: none;\n  padding: 10px 25px;\n  vertical-align: top !important;\n}\n\n.invoice .content-section .inv--product-table-section tbody tr:nth-of-type(even) td {\n  background-color: #fafafa;\n}\n\n.invoice .content-section .inv--payment-info {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.invoice .content-section .inv--payment-info .inv-title {\n  color: #4361ee;\n  font-weight: 600;\n  margin-bottom: 15px;\n  width: 65%;\n  margin-left: auto;\n}\n\n.invoice .content-section .inv--payment-info p {\n  margin-bottom: 0;\n  display: flex;\n  width: 65%;\n  margin-left: auto;\n  justify-content: space-between;\n}\n\n.invoice .content-section .inv--payment-info span {\n  font-weight: 500;\n  display: inline-block;\n  white-space: nowrap;\n}\n\n.invoice .content-section .inv--payment-info .inv-subtitle {\n  font-weight: 600;\n  font-size: 13px;\n  display: inline-block;\n  white-space: normal;\n  margin-right: 4px;\n}\n\n.invoice .content-section .inv--total-amounts {\n  padding: 0 35px;\n  margin-bottom: 25px;\n  padding-bottom: 25px;\n  border-bottom: 1px solid #ebedf2;\n}\n\n.invoice .content-section .inv--total-amounts .grand-total-title h4, .invoice .content-section .inv--total-amounts .grand-total-amount h4 {\n  position: relative;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 0;\n  padding: 0;\n  color: #0e1726;\n  display: inline-block;\n  letter-spacing: 1px;\n}\n\n/*    Inv detail section    */\n/*inv-list-number*/\n/*inv-created-date*/\n/*inv-due-date*/\n/*    Inv product table section    */\n/*inv--payment-info*/\n/*inv--total-amounts*/\n/*inv--note*/\n.inv--note {\n  padding: 0 25px;\n  padding-bottom: 25px;\n}\n\n.inv--note p {\n  margin-bottom: 0;\n  font-weight: 600;\n  color: #888ea8;\n}\n\n@media print {\n  body * {\n    visibility: hidden;\n  }\n  #ct {\n    visibility: visible;\n  }\n  #ct * {\n    visibility: visible;\n  }\n  .doc-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n  }\n}\n@page {\n  size: auto;\n  margin: 0mm;\n}\n/*\n===============================\n    Invoice Actions Button\n===============================\n*/\n.invoice-actions-btn {\n  padding: 25px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  border-radius: 6px;\n}\n\n.invoice-actions-btn label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #515365;\n}\n\n.invoice-actions-btn .invoice-action-btn a {\n  transform: none;\n}\n\n.invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-print, .invoice-actions-btn .invoice-action-btn a.btn-download {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.invoice-actions-btn .invoice-action-btn a.btn-edit {\n  width: 100%;\n}\n\n/* Invoice Actions -> action-btn */\n@media (max-width: 1199px) {\n  .invoice-actions-btn {\n    margin-top: 25px;\n  }\n  .invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-print, .invoice-actions-btn .invoice-action-btn a.btn-download {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 767px) {\n  .invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-print {\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 575px) {\n  .invoice .content-section .inv--payment-info .inv-title {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: auto;\n    margin-bottom: 6px;\n    width: auto;\n  }\n  .invoice .content-section .inv--payment-info p {\n    margin-left: 0;\n    margin-right: auto;\n    width: auto;\n    justify-content: flex-start;\n  }\n  .invoice .content-section .inv--payment-info .inv-subtitle {\n    min-width: 140px;\n  }\n  .invoice-actions-btn .invoice-action-btn a.btn-download {\n    margin-bottom: 20px;\n  }\n  .invoice .content-section .inv--payment-info span {\n    white-space: normal;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/apps/invoice-preview.scss":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/sass/apps/invoice-preview.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_invoice_preview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./invoice-preview.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/invoice-preview.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_invoice_preview_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_invoice_preview_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/preview.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/preview.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _preview_vue_vue_type_template_id_529ef0d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=529ef0d3& */ "./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3&");
/* harmony import */ var _preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _preview_vue_vue_type_template_id_529ef0d3___WEBPACK_IMPORTED_MODULE_0__.render,
  _preview_vue_vue_type_template_id_529ef0d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/invoice/preview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_529ef0d3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_529ef0d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_529ef0d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preview.vue?vue&type=template&id=529ef0d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                        _vm._v("Apps"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "breadcrumb-item active",
                        attrs: { "aria-current": "page" },
                      },
                      [_c("span", [_vm._v("Invoice Preview")])]
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "row invoice layout-top-spacing layout-spacing apps-invoice",
        },
        [
          _c(
            "div",
            { staticClass: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" },
            [
              _c("div", { staticClass: "doc-container" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xl-9" }, [
                    _c("div", { staticClass: "invoice-container" }, [
                      _c("div", { staticClass: "invoice-inbox" }, [
                        _c("div", { attrs: { id: "ct" } }, [
                          _c("div", { staticClass: "invoice-00001" }, [
                            _c("div", { staticClass: "content-section" }, [
                              _vm._m(0),
                              _vm._v(" "),
                              _vm._m(1),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "inv--product-table-section" },
                                [
                                  _c("b-table", {
                                    ref: "basic_table",
                                    attrs: {
                                      responsive: "",
                                      hover: "",
                                      items: _vm.items,
                                      fields: _vm.columns,
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "cell(price)",
                                        fn: function (row) {
                                          return [
                                            _vm._v(
                                              " $" + _vm._s(row.value) + " "
                                            ),
                                          ]
                                        },
                                      },
                                      {
                                        key: "cell(amount)",
                                        fn: function (row) {
                                          return [
                                            _vm._v(
                                              " $" + _vm._s(row.value) + " "
                                            ),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm._m(2),
                              _vm._v(" "),
                              _vm._m(3),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xl-3" }, [
                    _c("div", { staticClass: "invoice-actions-btn" }, [
                      _c("div", { staticClass: "invoice-action-btn" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-xl-12 col-md-3 col-sm-6" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn-send",
                                  attrs: { tag: "a", variant: "primary" },
                                },
                                [_vm._v("Send Invoice")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-xl-12 col-md-3 col-sm-6" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn-print action-print",
                                  attrs: { tag: "a", variant: "secondary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.print()
                                    },
                                  },
                                },
                                [_vm._v("Print")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-xl-12 col-md-3 col-sm-6" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn-download",
                                  attrs: { tag: "a", variant: "success" },
                                },
                                [_vm._v("Download")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-xl-12 col-md-3 col-sm-6" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn-edit",
                                  attrs: {
                                    tag: "a",
                                    to: "/apps/invoice/edit",
                                    variant: "dark",
                                  },
                                },
                                [_vm._v("Edit")]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "inv--head-section inv--detail-section" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-6 col-12 mr-auto" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("img", {
              staticClass: "company-logo",
              attrs: {
                src: __webpack_require__(/*! @/assets/images/cork-logo.png */ "./resources/js/src/assets/images/cork-logo.png"),
                alt: "company",
              },
            }),
            _vm._v(" "),
            _c("h3", { staticClass: "in-heading align-self-center" }, [
              _vm._v("Cork Inc."),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6 text-sm-right" }, [
          _c("p", { staticClass: "inv-list-number" }, [
            _c("span", { staticClass: "inv-title" }, [_vm._v("Invoice : ")]),
            _vm._v(" "),
            _c("span", { staticClass: "inv-number" }, [_vm._v("#0001")]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6 align-self-center mt-3" }, [
          _c("p", { staticClass: "inv-street-addr" }, [
            _vm._v("XYZ Delta Street"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "inv-email-address" }, [
            _vm._v("info@company.com"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "inv-email-address" }, [
            _vm._v("(120) 456 789"),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-sm-6 align-self-center mt-3 text-sm-right" },
          [
            _c("p", { staticClass: "inv-created-date" }, [
              _c("span", { staticClass: "inv-title" }, [
                _vm._v("Invoice Date : "),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "inv-date" }, [_vm._v("20 Aug 2020")]),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "inv-due-date" }, [
              _c("span", { staticClass: "inv-title" }, [_vm._v("Due Date : ")]),
              _vm._v(" "),
              _c("span", { staticClass: "inv-date" }, [_vm._v("26 Aug 2020")]),
            ]),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "inv--detail-section inv--customer-detail-section" },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass:
                "col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center",
            },
            [_c("p", { staticClass: "inv-to" }, [_vm._v("Invoice To")])]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info",
            },
            [_c("h6", { staticClass: " inv-title" }, [_vm._v("Payment Info:")])]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-8 col-lg-7 col-md-6 col-sm-4" }, [
            _c("p", { staticClass: "inv-customer-name" }, [
              _vm._v("Jesse Cory"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "inv-street-addr" }, [
              _vm._v("405 Mulberry Rd. Mc Grady, NC, 28649"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "inv-email-address" }, [
              _vm._v("redq@company.com"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "inv-email-address" }, [
              _vm._v("(128) 666 070"),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1",
            },
            [
              _c("div", { staticClass: "inv--payment-info" }, [
                _c("p", [
                  _c("span", { staticClass: " inv-subtitle" }, [
                    _vm._v("Bank Name:"),
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("Bank of America")]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticClass: " inv-subtitle" }, [
                    _vm._v("Account Number: "),
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("1234567890")]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticClass: " inv-subtitle" }, [
                    _vm._v("SWIFT code:"),
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("VS70134")]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticClass: " inv-subtitle" }, [
                    _vm._v("Country: "),
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("United States")]),
                ]),
              ]),
            ]
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "inv--total-amounts" }, [
      _c("div", { staticClass: "row mt-4" }, [
        _c("div", { staticClass: "col-sm-5 col-12 order-sm-0 order-1" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-7 col-12 order-sm-1 order-0" }, [
          _c("div", { staticClass: "text-sm-right" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-8 col-7" }, [
                _c("p", {}, [_vm._v("Sub Total:")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-5" }, [
                _c("p", {}, [_vm._v("$3155")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8 col-7" }, [
                _c("p", {}, [_vm._v("Tax Amount:")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-5" }, [
                _c("p", {}, [_vm._v("$700")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8 col-7" }, [
                _c("p", { staticClass: " discount-rate" }, [
                  _vm._v("Discount : "),
                  _c("span", { staticClass: "discount-percentage" }, [
                    _vm._v("5%"),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-5" }, [
                _c("p", {}, [_vm._v("$10")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8 col-7 grand-total-title" }, [
                _c("h4", {}, [_vm._v("Grand Total :")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-5 grand-total-amount" }, [
                _c("h4", {}, [_vm._v("$3845")]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "inv--note" }, [
      _c("div", { staticClass: "row mt-4" }, [
        _c("div", { staticClass: "col-sm-12 col-12 order-sm-0 order-1" }, [
          _c("p", [_vm._v("Note: Thank you for doing Business with us.")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);