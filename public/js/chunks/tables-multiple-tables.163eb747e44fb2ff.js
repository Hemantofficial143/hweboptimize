"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["tables-multiple-tables"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/multiple_tables.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/multiple_tables.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Bootstrap Multiple Tables'
  },
  data: function data() {
    return {
      //table 1
      items: [],
      columns: [],
      table_option: {
        total_rows: 0,
        current_page: 1,
        page_size: 10,
        search_text: ''
      },
      meta: {},
      //table 2
      items1: [],
      columns1: [],
      table_option1: {
        total_rows: 0,
        current_page: 1,
        page_size: 10,
        search_text: ''
      },
      meta1: {}
    };
  },
  watch: {
    table_option: {
      handler: function handler() {
        this.get_meta();
      },
      deep: true
    },
    table_option1: {
      handler: function handler() {
        this.get_meta1();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.bind_data();
  },
  methods: {
    bind_data: function bind_data() {
      //table 1
      this.columns = [{
        key: 'name',
        label: 'Name',
        sortable: true
      }, {
        key: 'position',
        label: 'Position',
        sortable: true
      }, {
        key: 'office',
        label: 'Office',
        sortable: true
      }, {
        key: 'age',
        label: 'Age',
        sortable: true
      }, {
        key: 'salary',
        label: 'Salary',
        sortable: true
      }, {
        key: 'status',
        label: 'Status',
        "class": 'text-center'
      }, {
        key: 'action',
        label: 'Actions',
        "class": 'actions text-center'
      }];
      this.items = [{
        id: 1,
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: 61,
        status: {
          "class": 'bg-warning',
          tooltip: 'Low'
        },
        salary: '320,800'
      }, {
        id: 2,
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: 63,
        status: {
          "class": 'bg-primary',
          tooltip: 'Normal'
        },
        salary: '170,750'
      }, {
        id: 3,
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: 66,
        status: {
          "class": 'bg-warning',
          tooltip: 'Low'
        },
        salary: '86,000'
      }, {
        id: 4,
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: 22,
        status: {
          "class": 'bg-secondary',
          tooltip: 'Medium'
        },
        salary: '433,060'
      }, {
        id: 5,
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: 33,
        status: {
          "class": 'bg-warning',
          tooltip: 'Low'
        },
        salary: '162,700'
      }, {
        id: 6,
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: 61,
        status: {
          "class": 'bg-primary',
          tooltip: 'Normal'
        },
        salary: '372,000'
      }, {
        id: 7,
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: 59,
        status: {
          "class": 'bg-warning',
          tooltip: 'Low'
        },
        salary: '137,500'
      }, {
        id: 8,
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: 55,
        status: {
          "class": 'bg-secondary',
          tooltip: 'Medium'
        },
        salary: '327,900'
      }, {
        id: 9,
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: 39,
        status: {
          "class": 'bg-danger',
          tooltip: 'High'
        },
        salary: '205,500'
      }, {
        id: 10,
        name: 'Sonya Frost',
        position: 'Software Engineer',
        office: 'Edinburgh',
        age: 23,
        status: {
          "class": 'bg-secondary',
          tooltip: 'Medium'
        },
        salary: '103,600'
      }, {
        id: 11,
        name: 'Jena Gaines',
        position: 'Office Manager',
        office: 'London',
        age: 30,
        status: {
          "class": 'bg-warning',
          tooltip: 'Low'
        },
        salary: '90,560'
      }, {
        id: 12,
        name: 'Quinn Flynn',
        position: 'Support Lead',
        office: 'Edinburgh',
        age: 22,
        status: {
          "class": 'bg-danger',
          tooltip: 'High'
        },
        salary: '342,000'
      }, {
        id: 13,
        name: 'Charde Marshall',
        position: 'Regional Director',
        office: 'San Francisco',
        age: 36,
        status: {
          "class": 'bg-danger',
          tooltip: 'High'
        },
        salary: '470,600'
      }];
      this.table_option.total_rows = this.items.length;
      this.get_meta(); //table 2

      this.columns1 = [{
        key: 'name',
        label: 'Name',
        sortable: true
      }, {
        key: 'position',
        label: 'Position',
        sortable: true
      }, {
        key: 'progress',
        label: 'Progress'
      }, {
        key: 'office',
        label: 'Office',
        sortable: true
      }, {
        key: 'age',
        label: 'Age',
        sortable: true
      }, {
        key: 'salary',
        label: 'Salary',
        sortable: true
      }, {
        key: 'action',
        label: 'Actions',
        "class": 'actions text-center'
      }];
      this.items1 = [{
        id: 1,
        name: 'Haley Kennedy',
        position: 'Senior Marketing Designer',
        office: 'London',
        age: 43,
        progress: {
          "class": 'warning',
          count: 55
        },
        salary: '313,500'
      }, {
        id: 2,
        name: 'Tatyana Fitzpatrick',
        position: 'Regional Director',
        office: 'London',
        age: 19,
        progress: {
          "class": 'primary',
          count: 30
        },
        salary: '385,750'
      }, {
        id: 3,
        name: 'Michael Silva',
        position: 'Marketing Designer',
        office: 'London',
        age: 66,
        progress: {
          "class": 'danger',
          count: 85
        },
        salary: '198,500'
      }, {
        id: 4,
        name: 'Paul Byrd',
        position: 'Chief Financial Officer (CFO)',
        office: 'New York',
        age: 64,
        progress: {
          "class": 'secondary',
          count: 44
        },
        salary: '725,000'
      }, {
        id: 5,
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        age: 59,
        progress: {
          "class": 'success',
          count: 100
        },
        salary: '237,500'
      }, {
        id: 6,
        name: 'Bradley Greer',
        position: 'Software Engineer',
        office: 'London',
        age: 41,
        progress: {
          "class": 'warning',
          count: 67
        },
        salary: '132,000'
      }, {
        id: 7,
        name: 'Dai Rios',
        position: 'Personnel Lead',
        office: 'Edinburgh',
        age: 35,
        progress: {
          "class": 'primary',
          count: 25
        },
        salary: '217,500'
      }, {
        id: 8,
        name: 'Jenette Caldwell',
        position: 'Development Lead',
        office: 'New York',
        age: 61,
        progress: {
          "class": 'danger',
          count: 93
        },
        salary: '345,000'
      }, {
        id: 9,
        name: 'Yuri Berry',
        position: 'Chief Marketing Officer (CMO)',
        office: 'New York',
        age: 40,
        progress: {
          "class": 'secondary',
          count: 52
        },
        salary: '675,000'
      }, {
        id: 10,
        name: 'Caesar Vance',
        position: 'Pre-Sales Support',
        office: 'New York',
        age: 21,
        progress: {
          "class": 'warning',
          count: 24
        },
        salary: '106,450'
      }, {
        id: 11,
        name: 'Doris Wilder',
        position: 'Sales Assistant',
        office: 'Sidney',
        age: 23,
        progress: {
          "class": 'danger',
          count: 82
        },
        salary: '85,600'
      }, {
        id: 12,
        name: 'Angelica Ramos',
        position: 'Chief Executive Officer (CEO)',
        office: 'London',
        age: 47,
        progress: {
          "class": 'warning',
          count: 70
        },
        salary: '1,200,000'
      }, {
        id: 13,
        name: 'Gavin Joyce',
        position: 'Developer',
        office: 'Edinburgh',
        age: 42,
        progress: {
          "class": 'secondary',
          count: 40
        },
        salary: '92,575'
      }, {
        id: 14,
        name: 'Jennifer Chang',
        position: 'Regional Director',
        office: 'Singapore',
        age: 28,
        progress: {
          "class": 'warning',
          count: 10
        },
        salary: '57,650'
      }];
      this.table_option1.total_rows = this.items1.length;
      this.get_meta1();
    },
    on_filtered: function on_filtered(filtered_items) {
      this.refresh_table(filtered_items.length);
    },
    view_row: function view_row(item) {
      alert('ID: ' + item.id + ', Name: ' + item.name);
    },
    refresh_table: function refresh_table(total) {
      this.table_option.total_rows = total;
      this.table_option.currentPage = 1;
    },
    get_meta: function get_meta() {
      var startPage;
      var endPage;
      var totalPages = this.table_option.page_size < 1 ? 1 : Math.ceil(this.table_option.total_rows / this.table_option.page_size);
      totalPages = Math.max(totalPages || 0, 1);
      var maxSize = 5;
      var isMaxSized = typeof maxSize !== 'undefined' && maxSize < totalPages;

      if (isMaxSized) {
        startPage = Math.max(this.table_option.current_page - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;

        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
      } else {
        startPage = 1;
        endPage = totalPages;
      }

      var startIndex = (this.table_option.current_page - 1) * this.table_option.page_size;
      var endIndex = Math.min(startIndex + this.table_option.page_size - 1, this.table_option.total_rows - 1);
      var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
        return startPage + i;
      });
      this.meta = {
        total_items: this.table_option.total_rows,
        current_page: this.table_option.current_page,
        page_size: this.table_option.page_size,
        total_pages: totalPages,
        start_page: startPage,
        end_page: endPage,
        start_index: startIndex,
        end_index: endIndex,
        pages: pages
      };
    },
    //table 2
    on_filtered1: function on_filtered1(filtered_items) {
      this.refresh_table1(filtered_items.length);
    },
    view_row1: function view_row1(item) {
      alert('ID: ' + item.id + ', Name: ' + item.name);
    },
    refresh_table1: function refresh_table1(total) {
      this.table_option1.total_rows = total;
      this.table_option1.currentPage = 1;
    },
    get_meta1: function get_meta1() {
      var startPage;
      var endPage;
      var totalPages = this.table_option1.page_size < 1 ? 1 : Math.ceil(this.table_option1.total_rows / this.table_option1.page_size);
      totalPages = Math.max(totalPages || 0, 1);
      var maxSize = 5;
      var isMaxSized = typeof maxSize !== 'undefined' && maxSize < totalPages;

      if (isMaxSized) {
        startPage = Math.max(this.table_option1.current_page - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;

        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
      } else {
        startPage = 1;
        endPage = totalPages;
      }

      var startIndex = (this.table_option1.current_page - 1) * this.table_option1.page_size;
      var endIndex = Math.min(startIndex + this.table_option1.page_size - 1, this.table_option1.total_rows - 1);
      var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
        return startPage + i;
      });
      this.meta1 = {
        total_items: this.table_option1.total_rows,
        current_page: this.table_option1.current_page,
        page_size: this.table_option1.page_size,
        total_pages: totalPages,
        start_page: startPage,
        end_page: endPage,
        start_index: startIndex,
        end_index: endIndex,
        pages: pages
      };
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/tables/multiple_tables.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/tables/multiple_tables.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _multiple_tables_vue_vue_type_template_id_609a1e54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple_tables.vue?vue&type=template&id=609a1e54& */ "./resources/js/src/views/tables/multiple_tables.vue?vue&type=template&id=609a1e54&");
/* harmony import */ var _multiple_tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple_tables.vue?vue&type=script&lang=js& */ "./resources/js/src/views/tables/multiple_tables.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _multiple_tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _multiple_tables_vue_vue_type_template_id_609a1e54___WEBPACK_IMPORTED_MODULE_0__.render,
  _multiple_tables_vue_vue_type_template_id_609a1e54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/tables/multiple_tables.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/tables/multiple_tables.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/tables/multiple_tables.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multiple_tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./multiple_tables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/multiple_tables.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multiple_tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/tables/multiple_tables.vue?vue&type=template&id=609a1e54&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/tables/multiple_tables.vue?vue&type=template&id=609a1e54& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multiple_tables_vue_vue_type_template_id_609a1e54___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multiple_tables_vue_vue_type_template_id_609a1e54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multiple_tables_vue_vue_type_template_id_609a1e54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./multiple_tables.vue?vue&type=template&id=609a1e54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/multiple_tables.vue?vue&type=template&id=609a1e54&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/multiple_tables.vue?vue&type=template&id=609a1e54&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/multiple_tables.vue?vue&type=template&id=609a1e54& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
                        _vm._v("DataTables"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "breadcrumb-item active",
                        attrs: { "aria-current": "page" },
                      },
                      [_c("span", [_vm._v("Multiple Tables")])]
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row layout-top-spacing" }, [
        _c(
          "div",
          { staticClass: "col-xl-12 col-lg-12 col-sm-12 layout-spacing" },
          [
            _c("div", { staticClass: "panel br-6 p-0" }, [
              _c(
                "div",
                { staticClass: "custom-table" },
                [
                  _c("div", { staticClass: "table-header" }, [
                    _c("div", { staticClass: "d-flex align-items-center" }, [
                      _c("span", [_vm._v("Results :")]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "ml-2" },
                        [
                          _c(
                            "b-select",
                            {
                              staticClass: "h-auto",
                              model: {
                                value: _vm.table_option.page_size,
                                callback: function ($$v) {
                                  _vm.$set(_vm.table_option, "page_size", $$v)
                                },
                                expression: "table_option.page_size",
                              },
                            },
                            [
                              _c("b-select-option", { attrs: { value: "5" } }, [
                                _vm._v("5"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-select-option",
                                { attrs: { value: "10" } },
                                [_vm._v("10")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-select-option",
                                { attrs: { value: "20" } },
                                [_vm._v("20")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-select-option",
                                { attrs: { value: "50" } },
                                [_vm._v("50")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "header-search" },
                      [
                        _c("b-input", {
                          attrs: { size: "sm", placeholder: "Search..." },
                          model: {
                            value: _vm.table_option.search_text,
                            callback: function ($$v) {
                              _vm.$set(_vm.table_option, "search_text", $$v)
                            },
                            expression: "table_option.search_text",
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "search-image" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "feather feather-search",
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
                                attrs: { cx: "11", cy: "11", r: "8" },
                              }),
                              _vm._v(" "),
                              _c("line", {
                                attrs: {
                                  x1: "21",
                                  y1: "21",
                                  x2: "16.65",
                                  y2: "16.65",
                                },
                              }),
                            ]
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-table", {
                    ref: "basic_table",
                    attrs: {
                      responsive: "",
                      items: _vm.items,
                      fields: _vm.columns,
                      "per-page": _vm.table_option.page_size,
                      "current-page": _vm.table_option.current_page,
                      filter: _vm.table_option.search_text,
                      "sort-by": "name",
                      "show-empty": true,
                    },
                    on: { filtered: _vm.on_filtered },
                    scopedSlots: _vm._u([
                      {
                        key: "cell(salary)",
                        fn: function (row) {
                          return [_vm._v(" $" + _vm._s(row.item.salary) + " ")]
                        },
                      },
                      {
                        key: "cell(status)",
                        fn: function (row) {
                          return [
                            _c("div", {
                              directives: [
                                { name: "b-tooltip", rawName: "v-b-tooltip" },
                              ],
                              staticClass: "t-dot",
                              class: row.value.class,
                              attrs: { title: row.value.tooltip },
                            }),
                          ]
                        },
                      },
                      {
                        key: "cell(action)",
                        fn: function (row) {
                          return [
                            _c(
                              "b-button",
                              {
                                attrs: { size: "sm", variant: "primary" },
                                on: {
                                  click: function ($event) {
                                    return _vm.view_row(row.item)
                                  },
                                },
                              },
                              [_vm._v("View")]
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-footer" }, [
                    _c("div", { staticClass: "dataTables_info" }, [
                      _vm._v(
                        "Showing " +
                          _vm._s(
                            _vm.meta.total_items ? _vm.meta.start_index + 1 : 0
                          ) +
                          " to " +
                          _vm._s(_vm.meta.end_index + 1) +
                          " of " +
                          _vm._s(_vm.meta.total_items)
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "paginating-container pagination-solid flex-column align-items-right",
                      },
                      [
                        _c("b-pagination", {
                          staticClass: "rounded",
                          attrs: {
                            "total-rows": _vm.table_option.total_rows,
                            "per-page": _vm.table_option.page_size,
                            "prev-text": "Prev",
                            "next-text": "Next",
                            "first-text": "First",
                            "last-text": "Last",
                            "first-class": "first",
                            "prev-class": "prev",
                            "next-class": "next",
                            "last-class": "last",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "first-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M11 19l-7-7 7-7m8 14l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "prev-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15 19l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "next-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M9 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "last-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M13 5l7 7-7 7M5 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                          model: {
                            value: _vm.table_option.current_page,
                            callback: function ($$v) {
                              _vm.$set(_vm.table_option, "current_page", $$v)
                            },
                            expression: "table_option.current_page",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel br-6 p-0 mt-5" }, [
              _c(
                "div",
                { staticClass: "custom-table" },
                [
                  _c("div", { staticClass: "table-header" }, [
                    _c("div", { staticClass: "d-flex align-items-center" }, [
                      _c("span", [_vm._v("Results :")]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "ml-2" },
                        [
                          _c(
                            "b-select",
                            {
                              attrs: { size: "sm" },
                              model: {
                                value: _vm.table_option1.page_size,
                                callback: function ($$v) {
                                  _vm.$set(_vm.table_option1, "page_size", $$v)
                                },
                                expression: "table_option1.page_size",
                              },
                            },
                            [
                              _c("b-select-option", { attrs: { value: "5" } }, [
                                _vm._v("5"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-select-option",
                                { attrs: { value: "10" } },
                                [_vm._v("10")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-select-option",
                                { attrs: { value: "20" } },
                                [_vm._v("20")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-select-option",
                                { attrs: { value: "50" } },
                                [_vm._v("50")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "header-search" },
                      [
                        _c("b-input", {
                          attrs: { size: "sm", placeholder: "Search..." },
                          model: {
                            value: _vm.table_option1.search_text,
                            callback: function ($$v) {
                              _vm.$set(_vm.table_option1, "search_text", $$v)
                            },
                            expression: "table_option1.search_text",
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "search-image" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "feather feather-search",
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
                                attrs: { cx: "11", cy: "11", r: "8" },
                              }),
                              _vm._v(" "),
                              _c("line", {
                                attrs: {
                                  x1: "21",
                                  y1: "21",
                                  x2: "16.65",
                                  y2: "16.65",
                                },
                              }),
                            ]
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-table", {
                    ref: "basic_table1",
                    attrs: {
                      responsive: "",
                      items: _vm.items1,
                      fields: _vm.columns1,
                      "per-page": _vm.table_option1.page_size,
                      "current-page": _vm.table_option1.current_page,
                      filter: _vm.table_option1.search_text,
                      "sort-by": "name",
                      "show-empty": true,
                    },
                    on: { filtered: _vm.on_filtered1 },
                    scopedSlots: _vm._u([
                      {
                        key: "cell(progress)",
                        fn: function (row) {
                          return [
                            _c("b-progress", {
                              attrs: {
                                variant: row.value.class,
                                value: row.value.count,
                                max: 100,
                              },
                            }),
                          ]
                        },
                      },
                      {
                        key: "cell(salary)",
                        fn: function (row) {
                          return [_vm._v(" $" + _vm._s(row.item.salary) + " ")]
                        },
                      },
                      {
                        key: "cell(action)",
                        fn: function (row) {
                          return [
                            _c(
                              "b-dropdown",
                              {
                                staticClass: "custom-dropdown",
                                attrs: {
                                  right: true,
                                  variant: "icon-only",
                                  "toggle-tag": "a",
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "button-content",
                                      fn: function () {
                                        return [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-more-horizontal",
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
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
                                                attrs: {
                                                  cx: "12",
                                                  cy: "12",
                                                  r: "1",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("circle", {
                                                attrs: {
                                                  cx: "19",
                                                  cy: "12",
                                                  r: "1",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("circle", {
                                                attrs: {
                                                  cx: "5",
                                                  cy: "12",
                                                  r: "1",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  {
                                    on: {
                                      click: function ($event) {
                                        return _vm.view_row(row.item)
                                      },
                                    },
                                  },
                                  [_vm._v("View")]
                                ),
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("Edit")]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("Delete")]),
                              ],
                              1
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-footer" }, [
                    _c("div", { staticClass: "dataTables_info" }, [
                      _vm._v(
                        "Showing " +
                          _vm._s(
                            _vm.meta1.total_items
                              ? _vm.meta1.start_index + 1
                              : 0
                          ) +
                          " to " +
                          _vm._s(_vm.meta1.end_index + 1) +
                          " of " +
                          _vm._s(_vm.meta1.total_items)
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "paginating-container pagination-solid flex-column align-items-right",
                      },
                      [
                        _c("b-pagination", {
                          staticClass: "rounded",
                          attrs: {
                            "total-rows": _vm.table_option.total_rows,
                            "per-page": _vm.table_option.page_size,
                            "prev-text": "Prev",
                            "next-text": "Next",
                            "first-text": "First",
                            "last-text": "Last",
                            "first-class": "first",
                            "prev-class": "prev",
                            "next-class": "next",
                            "last-class": "last",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "first-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M11 19l-7-7 7-7m8 14l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "prev-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15 19l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "next-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M9 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "last-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M13 5l7 7-7 7M5 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                          model: {
                            value: _vm.table_option.current_page,
                            callback: function ($$v) {
                              _vm.$set(_vm.table_option, "current_page", $$v)
                            },
                            expression: "table_option.current_page",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ]),
          ]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);