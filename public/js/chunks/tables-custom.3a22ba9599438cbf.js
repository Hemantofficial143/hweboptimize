(self["webpackChunk"] = self["webpackChunk"] || []).push([["tables-custom"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Bootstrap Custom Table'
  },
  data: function data() {
    return {
      //table 1
      items: [],
      columns: [],
      table_option: {
        total_rows: 0,
        current_page: 1,
        page_size: 5,
        search_text: ''
      },
      meta: {},
      is_select_all: false,
      selected_rows: [],
      //table 2
      items1: [],
      columns1: [],
      table_option1: {
        total_rows: 0,
        current_page: 1,
        page_size: 5,
        search_text: ''
      },
      meta1: {},
      is_select_all1: false,
      selected_rows1: [],
      //table 3
      items2: [],
      columns2: [],
      table_option2: {
        total_rows: 0,
        current_page: 1,
        page_size: 5,
        search_text: ''
      },
      meta2: {},
      is_select_all2: false,
      selected_rows2: []
    };
  },
  watch: {
    table_option: {
      handler: function handler() {
        this.get_meta();
        this.clear_selection();
      },
      deep: true
    },
    table_option1: {
      handler: function handler() {
        this.get_meta1();
        this.clear_selection1();
      },
      deep: true
    },
    table_option2: {
      handler: function handler() {
        this.get_meta2();
        this.clear_selection2();
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
        key: 'id',
        label: '',
        thClass: 'header-checkbox'
      }, {
        key: 'first_name',
        label: 'First Name',
        sortable: true
      }, {
        key: 'last_name',
        label: 'Last Name',
        sortable: true
      }, {
        key: 'email',
        label: 'Email',
        sortable: true
      }, {
        key: 'phone',
        label: 'Mobile No.',
        sortable: true
      }, {
        key: 'thumb',
        label: 'Profile',
        "class": 'text-center w-90'
      }, {
        key: 'status',
        label: 'Status'
      }, {
        key: 'action',
        label: 'Actions',
        "class": 'actions text-center'
      }];
      this.items = [{
        id: 1,
        thumb: 'profile-9.jpeg',
        first_name: 'Tiger',
        last_name: 'Nixon',
        email: 'tiger@gmail.com',
        phone: '555-555-5555',
        status: {
          key: 'Approved',
          "class": 'primary'
        }
      }, {
        id: 2,
        thumb: 'profile-11.jpeg',
        first_name: 'Garrett',
        last_name: 'Winters',
        email: 'garrett@gmail.com',
        phone: '222-222-2222',
        status: {
          key: 'Closed',
          "class": 'danger'
        }
      }, {
        id: 3,
        thumb: 'profile-12.jpeg',
        first_name: 'Ashton',
        last_name: 'Cox',
        email: 'ashton@gmail.com',
        phone: '333-333-3333',
        status: {
          key: 'Suspended',
          "class": 'warning'
        }
      }, {
        id: 4,
        thumb: 'profile-13.jpeg',
        first_name: 'Cedric',
        last_name: 'Kelly',
        email: 'cedric@gmail.com',
        phone: '444-444-4444',
        status: {
          key: 'Suspended',
          "class": 'warning'
        }
      }, {
        id: 5,
        thumb: 'profile-14.jpeg',
        first_name: 'Airi',
        last_name: 'Satou',
        email: 'airi@gmail.com',
        phone: '555-555-5555',
        status: {
          key: 'Approved',
          "class": 'primary'
        }
      }, {
        id: 6,
        thumb: 'profile-15.jpeg',
        first_name: 'Brielle',
        last_name: 'Williamson',
        email: 'brielle@gmail.com',
        phone: '666-666-6666',
        status: {
          key: 'Closed',
          "class": 'danger'
        }
      }, {
        id: 7,
        thumb: 'profile-16.jpeg',
        first_name: 'Herrod',
        last_name: 'Chandler',
        email: 'herrod@gmail.com',
        phone: '555-555-5555',
        status: {
          key: 'Approved',
          "class": 'primary'
        }
      }];
      this.table_option.total_rows = this.items.length;
      this.get_meta(); //table 2

      this.columns1 = [{
        key: 'id',
        label: '',
        thClass: 'header-checkbox'
      }, {
        key: 'thumb',
        label: 'Profile',
        thClass: 'w-90'
      }, {
        key: 'name',
        label: 'Name',
        tdClass: 'text-secondary font-weight-bold',
        sortable: true
      }, {
        key: 'email',
        label: 'Email',
        sortable: true
      }, {
        key: 'phone',
        label: 'Mobile No.',
        sortable: true
      }, {
        key: 'status',
        label: 'Status'
      }, {
        key: 'action',
        label: 'Actions',
        "class": 'actions text-center'
      }];
      this.items1 = [{
        id: 1,
        thumb: 'profile-9.jpeg',
        name: 'Tiger Nixon',
        email: 'tiger@gmail.com',
        phone: '555-555-5555',
        status: {
          key: 'Approved',
          "class": 'primary'
        }
      }, {
        id: 2,
        thumb: 'profile-11.jpeg',
        name: 'Garrett Winters',
        email: 'garrett@gmail.com',
        phone: '222-222-2222',
        status: {
          key: 'Closed',
          "class": 'danger'
        }
      }, {
        id: 3,
        thumb: 'profile-12.jpeg',
        name: 'Ashton Cox',
        email: 'ashton@gmail.com',
        phone: '333-333-3333',
        status: {
          key: 'Suspended',
          "class": 'warning'
        }
      }, {
        id: 4,
        thumb: 'profile-13.jpeg',
        name: 'Cedric Kelly',
        email: 'cedric@gmail.com',
        phone: '444-444-4444',
        status: {
          key: 'Suspended',
          "class": 'warning'
        }
      }, {
        id: 5,
        thumb: 'profile-14.jpeg',
        name: 'Airi Satou',
        email: 'airi@gmail.com',
        phone: '555-555-5555',
        status: {
          key: 'Approved',
          "class": 'primary'
        }
      }, {
        id: 6,
        thumb: 'profile-15.jpeg',
        name: 'Brielle Williamson',
        email: 'brielle@gmail.com',
        phone: '666-666-6666',
        status: {
          key: 'Closed',
          "class": 'danger'
        }
      }, {
        id: 7,
        thumb: 'profile-16.jpeg',
        name: 'Herrod Chandler',
        email: 'herrod@gmail.com',
        phone: '555-555-5555',
        status: {
          key: 'Approved',
          "class": 'primary'
        }
      }];
      this.table_option1.total_rows = this.items1.length;
      this.get_meta1(); //table 3

      this.columns2 = [{
        key: 'id',
        label: 'ID',
        sortable: true
      }, {
        key: 'thumb',
        label: 'Profile',
        thClass: 'text-center w-90'
      }, {
        key: 'first_name',
        label: 'First Name',
        sortable: true
      }, {
        key: 'last_name',
        label: 'Last Name',
        sortable: true
      }, {
        key: 'email',
        label: 'Email',
        sortable: true
      }, {
        key: 'phone',
        label: 'Mobile No.',
        sortable: true
      }, {
        key: 'status',
        label: 'Status'
      }, {
        key: 'action',
        label: 'Actions',
        "class": 'actions text-center'
      }];
      this.items2 = [{
        id: 1,
        thumb: 'profile-9.jpeg',
        first_name: 'Tiger',
        last_name: 'Nixon',
        email: 'tiger@gmail.com',
        phone: '555-555-5555',
        status: {
          key: 'Approved',
          "class": 'primary'
        }
      }, {
        id: 2,
        thumb: 'profile-11.jpeg',
        first_name: 'Garrett',
        last_name: 'Winters',
        email: 'garrett@gmail.com',
        phone: '222-222-2222',
        status: {
          key: 'Closed',
          "class": 'danger'
        }
      }, {
        id: 3,
        thumb: 'profile-12.jpeg',
        first_name: 'Ashton',
        last_name: 'Cox',
        email: 'ashton@gmail.com',
        phone: '333-333-3333',
        status: {
          key: 'Suspended',
          "class": 'warning'
        }
      }, {
        id: 4,
        thumb: 'profile-13.jpeg',
        first_name: 'Cedric',
        last_name: 'Kelly',
        email: 'cedric@gmail.com',
        phone: '444-444-4444',
        status: {
          key: 'Suspended',
          "class": 'warning'
        }
      }, {
        id: 5,
        thumb: 'profile-14.jpeg',
        first_name: 'Airi',
        last_name: 'Satou',
        email: 'airi@gmail.com',
        phone: '555-555-5555',
        status: {
          key: 'Approved',
          "class": 'primary'
        }
      }, {
        id: 6,
        thumb: 'profile-15.jpeg',
        first_name: 'Brielle',
        last_name: 'Williamson',
        email: 'brielle@gmail.com',
        phone: '666-666-6666',
        status: {
          key: 'Closed',
          "class": 'danger'
        }
      }, {
        id: 7,
        thumb: 'profile-16.jpeg',
        first_name: 'Herrod',
        last_name: 'Chandler',
        email: 'herrod@gmail.com',
        phone: '555-555-5555',
        status: {
          key: 'Approved',
          "class": 'primary'
        }
      }];
      this.table_option2.total_rows = this.items2.length;
      this.get_meta2();
    },
    on_filtered: function on_filtered(filtered_items) {
      this.refresh_table(filtered_items.length);
    },
    refresh_table: function refresh_table(total) {
      this.table_option.total_rows = total;
      this.table_option.currentPage = 1;
    },
    get_meta: function get_meta() {
      this.meta = this.get_common_meta(this.table_option);
    },
    get_common_meta: function get_common_meta(table_option) {
      var startPage;
      var endPage;
      var totalPages = table_option.page_size < 1 ? 1 : Math.ceil(table_option.total_rows / table_option.page_size);
      totalPages = Math.max(totalPages || 0, 1);
      var maxSize = 5;
      var isMaxSized = typeof maxSize !== 'undefined' && maxSize < totalPages;

      if (isMaxSized) {
        startPage = Math.max(table_option.current_page - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;

        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
      } else {
        startPage = 1;
        endPage = totalPages;
      }

      var startIndex = (table_option.current_page - 1) * table_option.page_size;
      var endIndex = Math.min(startIndex + table_option.page_size - 1, table_option.total_rows - 1);
      var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
        return startPage + i;
      });
      return {
        total_items: table_option.total_rows,
        current_page: table_option.current_page,
        page_size: table_option.page_size,
        total_pages: totalPages,
        start_page: startPage,
        end_page: endPage,
        start_index: startIndex,
        end_index: endIndex,
        pages: pages
      };
    },
    //checkbox selection
    select_all: function select_all() {
      this.selected_rows = this.$refs.basic_table.paginatedItems.map(function (d) {
        return d.id;
      });

      if (!this.is_select_all) {
        this.clear_selection();
      }

      this.check_select_all();
    },
    check_select_all: function check_select_all() {
      var ids = this.$refs.basic_table.paginatedItems.map(function (d) {
        return d.id;
      });
      this.is_select_all = false;

      if (ids.length == this.selected_rows.length) {
        this.is_select_all = true;
      }
    },
    clear_selection: function clear_selection() {
      this.is_select_all = false;
      this.selected_rows = [];
    },
    //table 2
    on_filtered1: function on_filtered1(filtered_items) {
      this.refresh_table1(filtered_items.length);
    },
    refresh_table1: function refresh_table1(total) {
      this.table_option1.total_rows = total;
      this.table_option1.currentPage = 1;
    },
    get_meta1: function get_meta1() {
      this.meta1 = this.get_common_meta(this.table_option1);
    },
    //checkbox selection
    select_all1: function select_all1() {
      this.selected_rows1 = this.$refs.basic_table1.paginatedItems.map(function (d) {
        return d.id;
      });

      if (!this.is_select_all1) {
        this.clear_selection1();
      }

      this.check_select_all1();
    },
    check_select_all1: function check_select_all1() {
      var ids = this.$refs.basic_table1.paginatedItems.map(function (d) {
        return d.id;
      });
      this.is_select_all1 = false;

      if (ids.length == this.selected_rows1.length) {
        this.is_select_all1 = true;
      }
    },
    clear_selection1: function clear_selection1() {
      this.is_select_all1 = false;
      this.selected_rows1 = [];
    },
    //table 3
    on_filtered2: function on_filtered2(filtered_items) {
      this.refresh_table2(filtered_items.length);
    },
    refresh_table2: function refresh_table2(total) {
      this.table_option2.total_rows = total;
      this.table_option2.currentPage = 1;
    },
    get_meta2: function get_meta2() {
      this.meta2 = this.get_common_meta(this.table_option2);
    },
    //checkbox selection
    select_all2: function select_all2() {
      this.selected_rows2 = this.$refs.basic_table2.paginatedItems.map(function (d) {
        return d.id;
      });

      if (!this.is_select_all2) {
        this.clear_selection2();
      }

      this.check_select_all2();
    },
    check_select_all2: function check_select_all2() {
      var ids = this.$refs.basic_table2.paginatedItems.map(function (d) {
        return d.id;
      });
      this.is_select_all2 = false;

      if (ids.length == this.selected_rows2.length) {
        this.is_select_all2 = true;
      }
    },
    clear_selection2: function clear_selection2() {
      this.is_select_all2 = false;
      this.selected_rows2 = [];
    }
  }
});

/***/ }),

/***/ "./resources/js/src/assets/images/1.jpeg":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/1.jpeg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/1-a080a7f9eb66a38e9a743a83d73bc4a9.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/2.jpg":
/*!**********************************************!*\
  !*** ./resources/js/src/assets/images/2.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "/images/2-6164a93971d43388ae96086025483860.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/3.jpeg":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/3.jpeg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/3-94fefea456f1f8eec6ab44de06e4f2b0.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/ab-1.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/ab-1.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/ab-1-f76d20289d31c7855a30c6beef0f110e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/arrow-down.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/arrow-down.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/arrow-down-6e28c00974a9f0162a4537313d280f2d.png";

/***/ }),

/***/ "./resources/js/src/assets/images/bg.png":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/bg.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/bg-bc33c69023a3b8c24ec178f8f9cf0727.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy-1.png":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/boy-1.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/boy-1-53c544afe5a0a1aaa0daa30a07456756.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy-2.png":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/boy-2.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/boy-2-96e049f9116c570e0d5f7efc6b95adee.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/boy.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/boy-27753654bafbb25eb114093e19fcbfb6.png";

/***/ }),

/***/ "./resources/js/src/assets/images/contact-us-map-pin.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/contact-us-map-pin.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/contact-us-map-pin-5f681666850dcf169e8a3287e7502dee.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/cork-logo.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/cork-logo.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/cork-logo-21142feea95359d716b06f39abd00112.png";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-11.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-11.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-11-7e3615a862613ff94b8fceb1909991ad.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-12.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-12.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-12-0e18482b4e9eb73bded410ab963cf344.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-15.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-15.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-15-a7de86fcceaab8853231b08234536c9e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-16.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-16.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-16-b1c443ea0275f7d829d08b5219d64f60.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-17.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-17.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-17-614b919a7b457a2d1e301e006e84de0d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-4.jpeg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-4.jpeg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-4-a7a7099a65307fdaaf37259542bc152d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-1.jpeg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/drag-1.jpeg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/drag-1-34fbae9ceaed6d5e5c054c90d9b57c6c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-2.jpeg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/drag-2.jpeg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/drag-2-c651fd792a65c6dba42f0b515e91116d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-4.jpg":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/drag-4.jpg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/drag-4-f5c9dcedeeff8a69d5af37f41eb55708.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-1.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-1.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-1-c87ba41b8a029bac4e55b09f49233850.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-4.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-4.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-4-aecf5b0b8744c049e7efc6f22c940ca6.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-6.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-6.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-6-edab66c6391a0cb0989bbc7d00def25d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-7.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-7.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-7-9e6e9718926cb5fddc4f57627fca2d63.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/faq.svg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/faq.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/faq-33762470b9228292d59d83d7c59197ef.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/file-preview.png":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/file-preview.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/file-preview-2e32eeb4e07ef1e3ea1d2bdca01064da.png";

/***/ }),

/***/ "./resources/js/src/assets/images/g-7.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/g-7.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/g-7-28878337cafb842760fb3b9fae20b8d5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/g-8.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/g-8.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/g-8-2277c5980263c72654cf6f869f7defa8.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-1.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-1.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-1-8ebb38107b9efc2ec8d59973b1fcfd8d.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-2.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-2.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-2-b4dc5606d3306ffb8f3da2ea8315dad5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-3.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-3.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-3-becc5f3e0d0c4045e47f14234c5f61e1.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-4.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-4.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-4-8032d38ab7a47d3145ce4f3d07383cc4.png";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-1.jpg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-1.jpg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-1-10f902ed6f3d00d3e32ea1709e9efe30.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-2.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-2.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-2-4ac09a936be48fed1dc0065d344b8a22.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-3.jpg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-3.jpg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-3-c02981be7be80b0bde5d4fdb3445aaa7.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-1.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-1.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-1-288fd31634eceac740f5b15a41e4c51e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-14.jpeg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-14.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-14-e0023d7f5bb8c52f5f7b127c14181547.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-15.jpeg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-15.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-15-229153c205256cea21ce4ee7b0957184.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-2.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-2.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-2-f70f0b025fe23e6f6d33bbf85f154c83.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-3.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-3.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-3-36ae681041ecad857f106fc1db4ad72b.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-8.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-8.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-8-90d2e47bf1c35fb9893f6466dd03bce1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/list-blog-style-2.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/list-blog-style-2.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/list-blog-style-2-f61ecd800eb1a8b022f5bef87c687119.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/list-blog-style-3.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/list-blog-style-3.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/list-blog-style-3-1f2aa575cd7c57cd65536bb0047054b1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/logo2.svg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/logo2.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/logo2-4321aa724612f5c36db258e45cd2234d.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/masonry-blog-style-3.jpeg":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/masonry-blog-style-3.jpeg ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/images/masonry-blog-style-3-4820d7499bffdbab29c142d81d2dcc08.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/masonry-blog-style-4.jpeg":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/masonry-blog-style-4.jpeg ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/images/masonry-blog-style-4-24d1c0a3088ca3d99bad05193b188475.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/mindset.svg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/mindset.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/mindset-fd1f9ed63187ab156c4aa2839c892f8e.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/p6.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p6.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p6-43f1ed0ef83ab9a65e8a7bd067273cef.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/p7.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p7.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p7-c6307ff10253921b4389d53d89905220.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/p9.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p9.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p9-e8a19bb6eff565d2f470b0b686a3f256.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-1.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-1.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-1-257264577e3ac7a7b25153ebfca17337.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-12.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-12.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-12-a7808c08c8cc0f64bc17e498a0434f91.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-14.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-14.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-14-f5211f56123bc5c5cf8a08c1cc9ba73f.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-17.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-17.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-17-74e6f302b478c2f4dd2eec28ce5b683e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-18.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-18.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-18-33caa941558688a7272acbd11ca60e14.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-19.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-19.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-19-1de6117cbebe6c6e4dc692d3bf17ec32.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-2.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-2.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-2-706e5fed5903a761ae977b6bda77609c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-20.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-20.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-20-68853e6bb47e58a9d1119509ace445d1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-21.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-21.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-21-272bfe80c3a1d475eabcda0bcbfebbcf.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-23.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-23.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-23-d938f6d10c69bbd6da25df74a5dec17c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-24.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-24.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-24-414615b31fb264ca3fc51a20b8e5682a.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-25.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-25.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-25-d0da243804afbe20770754be0361d387.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-26.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-26.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-26-3dd07f6f919c2ec138580dd6dc439b7e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-28.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-28.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-28-793c7ef7226ad2d7ebd057fbfe924579.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-29.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-29.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-29-c225c542244808337734e6a99b8561ad.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-3.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-3.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-3-ab2d579c360f31c986d98f5bdcffbcdb.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-30.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-30.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-30-76391bd594bf370fd6349b438e2355cd.png";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-31.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-31.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-31-97bac4c12c959639ccda0ba9c6335a4b.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-33.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-33.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-33-78f25ba375c31f14fd6dfc3fd0ef55c4.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-34.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-34.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-34-9de2bdb81a413eaef30270f6d33e8c54.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-6.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-6.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-6-c53ec44e2743a6cb8b5865ebd91e3a70.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-8.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-8.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-8-82d3e90e675362b74a84f1771c017a3c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-9.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-9.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-9-47e0e1da65fe2d8b2e18a0637e3dc5cb.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-6.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-6.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-6-2a207158889cde36be932cf0f96559fd.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-7.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-7.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-7-7a0b6bfcada30e73a6f120c401292314.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-8.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-8.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-8-787e6f2ac4211e9a4aae6946dd82f345.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-1.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-1.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-1-fb5e919a99b10f3d6ec50fc0c89365ab.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-2.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-2.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-2-c8f15060fb0ca38fa24e916693cdf8fd.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-3.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-3.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-3-2293f2deb0b569bf52f834be08261863.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/sweet-bg.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/sweet-bg.jpg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/sweet-bg-89377d8efef5027f9900385176c99a7e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/taskboard.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/taskboard.jpg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/taskboard-fb3689d13f1caf87151a3387ec937aaa.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/thumbs-up.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/thumbs-up.jpg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/thumbs-up-9ace5b7ae799ba8d143de7cd1cfee527.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-2.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-2.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-2-a9ee53554096ae2dcff3d894f5b92438.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-3.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-3.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-3-53911a7b915144bfc3a38e7c96d1dfc2.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-4.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-4.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-4-b2ccd09abc679c5c4f17ec98d67fb6b4.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-5.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-5.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-5-23ad563aaa057ba4a71f1a9b004f120d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/user-avtar.svg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/user-avtar.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/user-avtar-32e9d54af3e24aea78b217bf57d8aba1.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/user-profile.jpeg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/user-profile.jpeg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/user-profile-26fc32107d4b21a1d5adb117f1edf4e1.jpeg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.table3 .actions svg {\n    padding: 2px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./custom.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/tables/custom.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/tables/custom.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _custom_vue_vue_type_template_id_04334a41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom.vue?vue&type=template&id=04334a41& */ "./resources/js/src/views/tables/custom.vue?vue&type=template&id=04334a41&");
/* harmony import */ var _custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom.vue?vue&type=script&lang=js& */ "./resources/js/src/views/tables/custom.vue?vue&type=script&lang=js&");
/* harmony import */ var _custom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/tables/custom.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _custom_vue_vue_type_template_id_04334a41___WEBPACK_IMPORTED_MODULE_0__.render,
  _custom_vue_vue_type_template_id_04334a41___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/tables/custom.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/tables/custom.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/tables/custom.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./custom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/tables/custom.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/tables/custom.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./custom.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/src/views/tables/custom.vue?vue&type=template&id=04334a41&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/tables/custom.vue?vue&type=template&id=04334a41& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_template_id_04334a41___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_template_id_04334a41___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_template_id_04334a41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./custom.vue?vue&type=template&id=04334a41& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=template&id=04334a41&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=template&id=04334a41&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/tables/custom.vue?vue&type=template&id=04334a41& ***!
  \************************************************************************************************************************************************************************************************************************/
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
                      [_c("span", [_vm._v("Custom")])]
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row layout-top-spacing" }, [
        _c(
          "div",
          { staticClass: "col-xl-12 col-lg-12 col-sm-12 layout-spacing" },
          [
            _c("div", { staticClass: "panel p-0" }, [
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
                      "sort-by": "first_name",
                      "show-empty": true,
                    },
                    on: {
                      filtered: _vm.on_filtered,
                      "sort-changed": _vm.clear_selection,
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "head(id)",
                        fn: function () {
                          return [
                            _c("b-checkbox", {
                              staticClass: "checkbox-outline-primary",
                              attrs: { variant: "primary" },
                              on: {
                                change: function ($event) {
                                  return _vm.select_all()
                                },
                              },
                              model: {
                                value: _vm.is_select_all,
                                callback: function ($$v) {
                                  _vm.is_select_all = $$v
                                },
                                expression: "is_select_all",
                              },
                            }),
                          ]
                        },
                        proxy: true,
                      },
                      {
                        key: "cell(id)",
                        fn: function (row) {
                          return [
                            _c("b-checkbox", {
                              staticClass: "checkbox-outline-primary",
                              attrs: { value: row.value, variant: "primary" },
                              on: { change: _vm.check_select_all },
                              model: {
                                value: _vm.selected_rows,
                                callback: function ($$v) {
                                  _vm.selected_rows = $$v
                                },
                                expression: "selected_rows",
                              },
                            }),
                          ]
                        },
                      },
                      {
                        key: "cell(thumb)",
                        fn: function (row) {
                          return [
                            _c("img", {
                              staticClass: "rounded-circle profile-img",
                              attrs: {
                                src: __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./" +
                                  row.item.thumb),
                                alt: "avatar",
                              },
                            }),
                          ]
                        },
                      },
                      {
                        key: "cell(status)",
                        fn: function (row) {
                          return [
                            _c(
                              "b-badge",
                              { attrs: { variant: row.value.class } },
                              [_vm._v(_vm._s(row.value.key))]
                            ),
                          ]
                        },
                      },
                      {
                        key: "cell(action)",
                        fn: function () {
                          return [
                            _c(
                              "a",
                              {
                                staticClass: "cancel",
                                attrs: { href: "javascript:;" },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "feather feather-x-circle table-cancel",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "1.5",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                  },
                                  [
                                    _c("circle", {
                                      attrs: { cx: "12", cy: "12", r: "10" },
                                    }),
                                    _vm._v(" "),
                                    _c("line", {
                                      attrs: {
                                        x1: "15",
                                        y1: "9",
                                        x2: "9",
                                        y2: "15",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("line", {
                                      attrs: {
                                        x1: "9",
                                        y1: "9",
                                        x2: "15",
                                        y2: "15",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        },
                        proxy: true,
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
          ]
        ),
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row layout-top-spacing" }, [
        _c(
          "div",
          { staticClass: "col-xl-12 col-lg-12 col-sm-12 layout-spacing" },
          [
            _c("div", { staticClass: "panel p-0" }, [
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
                      hover: "",
                      items: _vm.items1,
                      fields: _vm.columns1,
                      "per-page": _vm.table_option1.page_size,
                      "current-page": _vm.table_option1.current_page,
                      filter: _vm.table_option1.search_text,
                      "show-empty": true,
                    },
                    on: {
                      filtered: _vm.on_filtered1,
                      "sort-changed": _vm.clear_selection1,
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "head(id)",
                        fn: function () {
                          return [
                            _c("b-checkbox", {
                              staticClass: "checkbox-outline-primary",
                              attrs: { variant: "primary" },
                              on: {
                                change: function ($event) {
                                  return _vm.select_all1()
                                },
                              },
                              model: {
                                value: _vm.is_select_all1,
                                callback: function ($$v) {
                                  _vm.is_select_all1 = $$v
                                },
                                expression: "is_select_all1",
                              },
                            }),
                          ]
                        },
                        proxy: true,
                      },
                      {
                        key: "cell(id)",
                        fn: function (row) {
                          return [
                            _c("b-checkbox", {
                              staticClass: "checkbox-outline-primary",
                              attrs: { value: row.value, variant: "primary" },
                              on: { change: _vm.check_select_all1 },
                              model: {
                                value: _vm.selected_rows1,
                                callback: function ($$v) {
                                  _vm.selected_rows1 = $$v
                                },
                                expression: "selected_rows1",
                              },
                            }),
                          ]
                        },
                      },
                      {
                        key: "cell(thumb)",
                        fn: function (row) {
                          return [
                            _c("img", {
                              staticClass: "rounded-circle profile-img",
                              attrs: {
                                src: __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./" +
                                  row.item.thumb),
                                alt: "avatar",
                              },
                            }),
                          ]
                        },
                      },
                      {
                        key: "cell(status)",
                        fn: function (row) {
                          return [
                            _c(
                              "b-badge",
                              { attrs: { variant: row.value.class } },
                              [_vm._v(_vm._s(row.value.key))]
                            ),
                          ]
                        },
                      },
                      {
                        key: "cell(action)",
                        fn: function () {
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
                                scopedSlots: _vm._u([
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
                                ]),
                              },
                              [
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("View")]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("Edit")]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v("View Response"),
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("Delete")]),
                              ],
                              1
                            ),
                          ]
                        },
                        proxy: true,
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
                            "total-rows": _vm.table_option1.total_rows,
                            "per-page": _vm.table_option1.page_size,
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
                            value: _vm.table_option1.current_page,
                            callback: function ($$v) {
                              _vm.$set(_vm.table_option1, "current_page", $$v)
                            },
                            expression: "table_option1.current_page",
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
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "row layout-top-spacing" }, [
        _c(
          "div",
          { staticClass: "col-xl-12 col-lg-12 col-sm-12 layout-spacing" },
          [
            _c("div", { staticClass: "panel p-0" }, [
              _c(
                "div",
                { staticClass: "custom-table table3" },
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
                                value: _vm.table_option2.page_size,
                                callback: function ($$v) {
                                  _vm.$set(_vm.table_option2, "page_size", $$v)
                                },
                                expression: "table_option2.page_size",
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
                            value: _vm.table_option2.search_text,
                            callback: function ($$v) {
                              _vm.$set(_vm.table_option2, "search_text", $$v)
                            },
                            expression: "table_option2.search_text",
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
                    ref: "basic_table2",
                    attrs: {
                      responsive: "",
                      hover: "",
                      items: _vm.items2,
                      fields: _vm.columns2,
                      "per-page": _vm.table_option2.page_size,
                      "current-page": _vm.table_option2.current_page,
                      filter: _vm.table_option2.search_text,
                      "sort-by": "id",
                      "show-empty": true,
                    },
                    on: {
                      filtered: _vm.on_filtered,
                      "sort-changed": _vm.clear_selection,
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "cell(thumb)",
                        fn: function (row) {
                          return [
                            _c("img", {
                              staticClass: "rounded profile-img",
                              attrs: {
                                src: __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./" +
                                  row.item.thumb),
                                alt: "avatar",
                              },
                            }),
                          ]
                        },
                      },
                      {
                        key: "cell(status)",
                        fn: function (row) {
                          return [
                            _c(
                              "b-badge",
                              { attrs: { variant: row.value.class } },
                              [_vm._v(_vm._s(row.value.key))]
                            ),
                          ]
                        },
                      },
                      {
                        key: "cell(action)",
                        fn: function () {
                          return [
                            _c(
                              "a",
                              {
                                directives: [
                                  { name: "b-tooltip", rawName: "v-b-tooltip" },
                                ],
                                staticClass: "mr-1",
                                attrs: {
                                  href: "javascript:void(0);",
                                  title: "Edit",
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "feather feather-edit-2",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "1.5",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                directives: [
                                  { name: "b-tooltip", rawName: "v-b-tooltip" },
                                ],
                                attrs: {
                                  href: "javascript:void(0);",
                                  title: "Delete",
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "feather feather-trash",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "1.5",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                  },
                                  [
                                    _c("polyline", {
                                      attrs: { points: "3 6 5 6 21 6" },
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-footer" }, [
                    _c("div", { staticClass: "dataTables_info" }, [
                      _vm._v(
                        "Showing " +
                          _vm._s(
                            _vm.meta2.total_items
                              ? _vm.meta2.start_index + 1
                              : 0
                          ) +
                          " to " +
                          _vm._s(_vm.meta2.end_index + 1) +
                          " of " +
                          _vm._s(_vm.meta2.total_items)
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
                            "total-rows": _vm.table_option2.total_rows,
                            "per-page": _vm.table_option2.page_size,
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
                            value: _vm.table_option2.current_page,
                            callback: function ($$v) {
                              _vm.$set(_vm.table_option2, "current_page", $$v)
                            },
                            expression: "table_option2.current_page",
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "seperator-header layout-top-spacing" }, [
      _c("h4", {}, [_vm._v("Style 1")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "seperator-header layout-top-spacing" }, [
      _c("h4", {}, [_vm._v("Style 2")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "seperator-header layout-top-spacing" }, [
      _c("h4", {}, [_vm._v("Style 3")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/images sync recursive ^\\.\\/.*$":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/ sync ^\.\/.*$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.jpeg": "./resources/js/src/assets/images/1.jpeg",
	"./2.jpg": "./resources/js/src/assets/images/2.jpg",
	"./3.jpeg": "./resources/js/src/assets/images/3.jpeg",
	"./ab-1.jpeg": "./resources/js/src/assets/images/ab-1.jpeg",
	"./arrow-down.png": "./resources/js/src/assets/images/arrow-down.png",
	"./bg.png": "./resources/js/src/assets/images/bg.png",
	"./boy-1.png": "./resources/js/src/assets/images/boy-1.png",
	"./boy-2.png": "./resources/js/src/assets/images/boy-2.png",
	"./boy.png": "./resources/js/src/assets/images/boy.png",
	"./contact-us-map-pin.svg": "./resources/js/src/assets/images/contact-us-map-pin.svg",
	"./cork-logo.png": "./resources/js/src/assets/images/cork-logo.png",
	"./delete-user-11.jpeg": "./resources/js/src/assets/images/delete-user-11.jpeg",
	"./delete-user-12.jpeg": "./resources/js/src/assets/images/delete-user-12.jpeg",
	"./delete-user-15.jpeg": "./resources/js/src/assets/images/delete-user-15.jpeg",
	"./delete-user-16.jpeg": "./resources/js/src/assets/images/delete-user-16.jpeg",
	"./delete-user-17.jpeg": "./resources/js/src/assets/images/delete-user-17.jpeg",
	"./delete-user-4.jpeg": "./resources/js/src/assets/images/delete-user-4.jpeg",
	"./drag-1.jpeg": "./resources/js/src/assets/images/drag-1.jpeg",
	"./drag-2.jpeg": "./resources/js/src/assets/images/drag-2.jpeg",
	"./drag-4.jpg": "./resources/js/src/assets/images/drag-4.jpg",
	"./dragp-1.jpeg": "./resources/js/src/assets/images/dragp-1.jpeg",
	"./dragp-4.jpeg": "./resources/js/src/assets/images/dragp-4.jpeg",
	"./dragp-6.jpeg": "./resources/js/src/assets/images/dragp-6.jpeg",
	"./dragp-7.jpeg": "./resources/js/src/assets/images/dragp-7.jpeg",
	"./faq.svg": "./resources/js/src/assets/images/faq.svg",
	"./features_overview.svg": "./resources/js/src/assets/images/features_overview.svg",
	"./file-preview.png": "./resources/js/src/assets/images/file-preview.png",
	"./flags/brl.png": "./resources/js/src/assets/images/flags/brl.png",
	"./flags/da.png": "./resources/js/src/assets/images/flags/da.png",
	"./flags/de.png": "./resources/js/src/assets/images/flags/de.png",
	"./flags/el.png": "./resources/js/src/assets/images/flags/el.png",
	"./flags/en.png": "./resources/js/src/assets/images/flags/en.png",
	"./flags/es.png": "./resources/js/src/assets/images/flags/es.png",
	"./flags/fr.png": "./resources/js/src/assets/images/flags/fr.png",
	"./flags/gbp.png": "./resources/js/src/assets/images/flags/gbp.png",
	"./flags/hu.png": "./resources/js/src/assets/images/flags/hu.png",
	"./flags/idr.png": "./resources/js/src/assets/images/flags/idr.png",
	"./flags/inr.png": "./resources/js/src/assets/images/flags/inr.png",
	"./flags/it.png": "./resources/js/src/assets/images/flags/it.png",
	"./flags/ja.png": "./resources/js/src/assets/images/flags/ja.png",
	"./flags/jp.png": "./resources/js/src/assets/images/flags/jp.png",
	"./flags/pl.png": "./resources/js/src/assets/images/flags/pl.png",
	"./flags/pt.png": "./resources/js/src/assets/images/flags/pt.png",
	"./flags/ru.png": "./resources/js/src/assets/images/flags/ru.png",
	"./flags/sv.png": "./resources/js/src/assets/images/flags/sv.png",
	"./flags/tr.png": "./resources/js/src/assets/images/flags/tr.png",
	"./flags/zh.png": "./resources/js/src/assets/images/flags/zh.png",
	"./g-7.png": "./resources/js/src/assets/images/g-7.png",
	"./g-8.png": "./resources/js/src/assets/images/g-8.png",
	"./girl-1.png": "./resources/js/src/assets/images/girl-1.png",
	"./girl-2.png": "./resources/js/src/assets/images/girl-2.png",
	"./girl-3.png": "./resources/js/src/assets/images/girl-3.png",
	"./girl-4.png": "./resources/js/src/assets/images/girl-4.png",
	"./grid-blog-style-1.jpg": "./resources/js/src/assets/images/grid-blog-style-1.jpg",
	"./grid-blog-style-2.jpeg": "./resources/js/src/assets/images/grid-blog-style-2.jpeg",
	"./grid-blog-style-3.jpg": "./resources/js/src/assets/images/grid-blog-style-3.jpg",
	"./lightbox-1.jpg": "./resources/js/src/assets/images/lightbox-1.jpg",
	"./lightbox-14.jpeg": "./resources/js/src/assets/images/lightbox-14.jpeg",
	"./lightbox-15.jpeg": "./resources/js/src/assets/images/lightbox-15.jpeg",
	"./lightbox-2.jpeg": "./resources/js/src/assets/images/lightbox-2.jpeg",
	"./lightbox-3.jpeg": "./resources/js/src/assets/images/lightbox-3.jpeg",
	"./lightbox-8.jpeg": "./resources/js/src/assets/images/lightbox-8.jpeg",
	"./list-blog-style-2.jpeg": "./resources/js/src/assets/images/list-blog-style-2.jpeg",
	"./list-blog-style-3.jpeg": "./resources/js/src/assets/images/list-blog-style-3.jpeg",
	"./logo.svg": "./resources/js/src/assets/images/logo.svg",
	"./logo2.svg": "./resources/js/src/assets/images/logo2.svg",
	"./masonry-blog-style-3.jpeg": "./resources/js/src/assets/images/masonry-blog-style-3.jpeg",
	"./masonry-blog-style-4.jpeg": "./resources/js/src/assets/images/masonry-blog-style-4.jpeg",
	"./mindset.svg": "./resources/js/src/assets/images/mindset.svg",
	"./p6.jpeg": "./resources/js/src/assets/images/p6.jpeg",
	"./p7.jpeg": "./resources/js/src/assets/images/p7.jpeg",
	"./p9.jpeg": "./resources/js/src/assets/images/p9.jpeg",
	"./product-camera.jpg": "./resources/js/src/assets/images/product-camera.jpg",
	"./product-headphones.jpg": "./resources/js/src/assets/images/product-headphones.jpg",
	"./product-laptop.jpg": "./resources/js/src/assets/images/product-laptop.jpg",
	"./product-shoes.jpg": "./resources/js/src/assets/images/product-shoes.jpg",
	"./product-watch.jpg": "./resources/js/src/assets/images/product-watch.jpg",
	"./profile-1.jpeg": "./resources/js/src/assets/images/profile-1.jpeg",
	"./profile-10.jpeg": "./resources/js/src/assets/images/profile-10.jpeg",
	"./profile-11.jpeg": "./resources/js/src/assets/images/profile-11.jpeg",
	"./profile-12.jpeg": "./resources/js/src/assets/images/profile-12.jpeg",
	"./profile-13.jpeg": "./resources/js/src/assets/images/profile-13.jpeg",
	"./profile-14.jpeg": "./resources/js/src/assets/images/profile-14.jpeg",
	"./profile-15.jpeg": "./resources/js/src/assets/images/profile-15.jpeg",
	"./profile-16.jpeg": "./resources/js/src/assets/images/profile-16.jpeg",
	"./profile-17.jpeg": "./resources/js/src/assets/images/profile-17.jpeg",
	"./profile-18.jpeg": "./resources/js/src/assets/images/profile-18.jpeg",
	"./profile-19.jpeg": "./resources/js/src/assets/images/profile-19.jpeg",
	"./profile-2.jpeg": "./resources/js/src/assets/images/profile-2.jpeg",
	"./profile-20.jpeg": "./resources/js/src/assets/images/profile-20.jpeg",
	"./profile-21.jpeg": "./resources/js/src/assets/images/profile-21.jpeg",
	"./profile-23.jpeg": "./resources/js/src/assets/images/profile-23.jpeg",
	"./profile-24.jpeg": "./resources/js/src/assets/images/profile-24.jpeg",
	"./profile-25.jpeg": "./resources/js/src/assets/images/profile-25.jpeg",
	"./profile-26.jpeg": "./resources/js/src/assets/images/profile-26.jpeg",
	"./profile-28.jpeg": "./resources/js/src/assets/images/profile-28.jpeg",
	"./profile-29.jpeg": "./resources/js/src/assets/images/profile-29.jpeg",
	"./profile-3.jpeg": "./resources/js/src/assets/images/profile-3.jpeg",
	"./profile-30.png": "./resources/js/src/assets/images/profile-30.png",
	"./profile-31.jpeg": "./resources/js/src/assets/images/profile-31.jpeg",
	"./profile-32.jpeg": "./resources/js/src/assets/images/profile-32.jpeg",
	"./profile-33.jpeg": "./resources/js/src/assets/images/profile-33.jpeg",
	"./profile-34.jpeg": "./resources/js/src/assets/images/profile-34.jpeg",
	"./profile-4.jpeg": "./resources/js/src/assets/images/profile-4.jpeg",
	"./profile-5.jpeg": "./resources/js/src/assets/images/profile-5.jpeg",
	"./profile-6.jpeg": "./resources/js/src/assets/images/profile-6.jpeg",
	"./profile-7.jpeg": "./resources/js/src/assets/images/profile-7.jpeg",
	"./profile-8.jpeg": "./resources/js/src/assets/images/profile-8.jpeg",
	"./profile-9.jpeg": "./resources/js/src/assets/images/profile-9.jpeg",
	"./scroll-6.jpeg": "./resources/js/src/assets/images/scroll-6.jpeg",
	"./scroll-7.jpeg": "./resources/js/src/assets/images/scroll-7.jpeg",
	"./scroll-8.jpeg": "./resources/js/src/assets/images/scroll-8.jpeg",
	"./slider-1.jpeg": "./resources/js/src/assets/images/slider-1.jpeg",
	"./slider-2.jpeg": "./resources/js/src/assets/images/slider-2.jpeg",
	"./slider-3.jpeg": "./resources/js/src/assets/images/slider-3.jpeg",
	"./sweet-bg.jpg": "./resources/js/src/assets/images/sweet-bg.jpg",
	"./taskboard.jpg": "./resources/js/src/assets/images/taskboard.jpg",
	"./thumbs-up.jpg": "./resources/js/src/assets/images/thumbs-up.jpg",
	"./tl-2.jpeg": "./resources/js/src/assets/images/tl-2.jpeg",
	"./tl-3.jpeg": "./resources/js/src/assets/images/tl-3.jpeg",
	"./tl-4.jpeg": "./resources/js/src/assets/images/tl-4.jpeg",
	"./tl-5.jpeg": "./resources/js/src/assets/images/tl-5.jpeg",
	"./user-avtar.svg": "./resources/js/src/assets/images/user-avtar.svg",
	"./user-profile.jpeg": "./resources/js/src/assets/images/user-profile.jpeg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/src/assets/images sync recursive ^\\.\\/.*$";

/***/ })

}]);