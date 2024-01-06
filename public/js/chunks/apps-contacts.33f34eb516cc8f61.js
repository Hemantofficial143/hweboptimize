(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-contacts"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_apps_contacts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/apps/contacts.scss */ "./resources/js/src/assets/sass/apps/contacts.scss");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Contact Profile'
  },
  components: {},
  computed: {
    check_all_checkbox: function check_all_checkbox() {
      if (this.contacts_list.length && this.ids.length == this.contacts_list.length) {
        return true;
      } else {
        return false;
      }
    }
  },
  data: function data() {
    return {
      params: {
        id: null,
        name: '',
        email: '',
        role: '',
        phone: '',
        location: ''
      },
      contacts_list: [],
      filterd_contacts_list: [],
      search_user: '',
      ids: [],
      grid_type: 'list'
    };
  },
  mounted: function mounted() {
    this.bind_contacts();
  },
  methods: {
    bind_contacts: function bind_contacts() {
      this.contacts_list = [{
        id: 1,
        path: 'profile-5.jpeg',
        name: 'Alan Green',
        role: 'Web Developer',
        email: 'alan@mail.com',
        location: 'Boston, USA',
        phone: '+1 (070) 123-4567'
      }, {
        id: 2,
        path: 'profile-11.jpeg',
        name: 'Linda Nelson',
        role: 'Web Designer',
        email: 'linda@mail.com',
        location: 'Sydney, Australia',
        phone: '+1 (070) 123-4567'
      }, {
        id: 3,
        path: 'profile-12.jpeg',
        name: 'Lila Perry',
        role: 'UX/UI Designer',
        email: 'lila@mail.com',
        location: 'Miami, USA',
        phone: '+1 (070) 123-4567'
      }, {
        id: 4,
        path: 'profile-3.jpeg',
        name: 'Andy King',
        role: 'Project Lead',
        email: 'andy@mail.com',
        location: 'Tokyo, Japan',
        phone: '+1 (070) 123-4567'
      }, {
        id: 5,
        path: 'profile-15.jpeg',
        name: 'Jesse Cory',
        role: 'Web Developer',
        email: 'jesse@mail.com',
        location: 'Edinburgh, UK',
        phone: '+1 (070) 123-4567'
      }, {
        id: 6,
        path: 'profile-7.jpeg',
        name: 'Xavier',
        role: 'UX/UI Designer',
        email: 'xavier@mail.com',
        location: 'New York, USA',
        phone: '+1 (070) 123-4567'
      }, {
        id: 7,
        path: 'profile-18.jpeg',
        name: 'Susan',
        role: 'Project Manager',
        email: 'susan@mail.com',
        location: 'Miami, USA',
        phone: '+1 (070) 123-4567'
      }, {
        id: 8,
        path: 'profile-29.jpeg',
        name: 'raci Lopez',
        role: 'Web Developer',
        email: 'traci@mail.com',
        location: 'Edinburgh, UK',
        phone: '+1 (070) 123-4567'
      }];
      this.search_contacts();
    },
    search_contacts: function search_contacts() {
      var _this = this;

      this.filterd_contacts_list = this.contacts_list.filter(function (d) {
        return d.name.toLowerCase().includes(_this.search_user);
      });
    },
    edit_user: function edit_user(user) {
      this.params = {
        id: null,
        name: '',
        email: '',
        role: '',
        phone: '',
        location: ''
      };

      if (user) {
        this.params = JSON.parse(JSON.stringify(user));
      }

      this.$bvModal.show('addContactModal');
    },
    save_user: function save_user() {
      var _this2 = this;

      if (!this.params.name) {
        this.$bvToast.toast('Name is required.', {
          headerClass: 'd-none',
          bodyClass: 'toast-danger',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 1000
        });
        return true;
      }

      if (!this.params.email) {
        this.$bvToast.toast('Email is required.', {
          headerClass: 'd-none',
          bodyClass: 'toast-danger',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 1000
        });
        return true;
      }

      if (!this.params.phone) {
        this.$bvToast.toast('Phone is required.', {
          headerClass: 'd-none',
          bodyClass: 'toast-danger',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 1000
        });
        return true;
      }

      if (this.params.id) {
        //update user
        var user = this.contacts_list.find(function (d) {
          return d.id == _this2.params.id;
        });
        user.name = this.params.name;
        user.email = this.params.email;
        user.role = this.params.role;
        user.phone = this.params.phone;
        user.location = this.params.location;
      } else {
        //add user
        var max_user_id = this.contacts_list.reduce(function (max, character) {
          return character.id > max ? character.id : max;
        }, this.contacts_list[0].id);

        if (!max_user_id) {
          max_user_id = 0;
        }

        var _user = {
          id: max_user_id + 1,
          path: 'profile-30.png',
          name: this.params.name,
          email: this.params.email,
          role: this.params.role,
          phone: this.params.phone,
          location: this.params.location
        };
        this.contacts_list.splice(0, 0, _user);
        this.search_contacts();
      }

      this.$bvModal.hide('addContactModal');
      this.$bvToast.toast('User saved successfully.', {
        headerClass: 'd-none',
        bodyClass: 'toast-success',
        toaster: 'b-toaster-top-center',
        autoHideDelay: 1000
      });
    },
    delete_user: function delete_user(user) {
      this.contacts_list = this.contacts_list.filter(function (d) {
        return d.id != user.id;
      });
      this.ids = this.ids.filter(function (d) {
        return d != user.id;
      });
      this.search_contacts();
      this.$bvToast.toast('User deleted successfully.', {
        headerClass: 'd-none',
        bodyClass: 'toast-success',
        toaster: 'b-toaster-top-center',
        autoHideDelay: 1000
      });
    },
    delete_selected: function delete_selected() {
      var _this3 = this;

      if (!this.ids.length) {
        this.$bvToast.toast('Please select atleast one user.', {
          headerClass: 'd-none',
          bodyClass: 'toast-warning',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 1000
        });
        return true;
      }

      this.contacts_list = this.contacts_list.filter(function (d) {
        return !_this3.ids.includes(d.id);
      });
      this.clear_selection();
      this.search_contacts();
    },
    check_all: function check_all(is_checked) {
      if (is_checked) {
        this.ids = this.contacts_list.map(function (d) {
          return d.id;
        });
      } else {
        this.clear_selection();
      }
    },
    clear_selection: function clear_selection() {
      this.ids = [];
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/contacts.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/contacts.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n/*----------Theme checkbox---------*/\n.app-contacts {\n  /*\n      Filtered List Search\n      */\n}\n\n.app-contacts .new-control {\n  padding-left: 0;\n  margin-right: 0;\n}\n\n.app-contacts .new-control-input {\n  position: unset;\n}\n\n.app-contacts .new-control.new-checkbox span.new-control-indicator:after {\n  top: 51%;\n}\n\n.app-contacts .filtered-list-search form > div {\n  position: relative;\n  width: 80%;\n}\n\n.app-contacts .filtered-list-search form > div svg {\n  position: absolute;\n  right: 11px;\n  color: #e3e4eb;\n  height: 36px;\n  width: 19px;\n  top: 4px;\n}\n\n.app-contacts .filtered-list-search form input {\n  padding: 6px 27px 6px 15px;\n  color: #d3d3d3;\n  border: none;\n  width: 100% !important;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .filtered-list-search form input:focus {\n  border-color: #d3d3d3;\n  color: #3b3f5c;\n  box-shadow: 0 0 5px 2px rgba(194, 213, 255, 0.62);\n}\n\n.app-contacts .filtered-list-search form input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #888ea8;\n}\n\n.app-contacts .filtered-list-search form input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #888ea8;\n}\n\n.app-contacts .filtered-list-search form input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #888ea8;\n}\n\n.app-contacts .filtered-list-search form input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #888ea8;\n}\n\n.app-contacts .searchable-container .switch {\n  text-align: right;\n}\n\n.app-contacts .searchable-container .switch .view-grid {\n  padding: 10px;\n  background: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #515365;\n  width: 43px;\n  height: 41px;\n  fill: rgba(0, 23, 55, 0.08);\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .searchable-container .switch .view-list {\n  padding: 10px;\n  background: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #515365;\n  box-shadow: 0px 2px 4px rgba(126, 142, 177, 0.12);\n  width: 43px;\n  height: 41px;\n  fill: rgba(0, 23, 55, 0.08);\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .searchable-container #btn-add-contact {\n  padding: 9px;\n  background: #ffffff;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-right: 35px;\n  width: 43px;\n  height: 41px;\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .searchable-container #btn-add-contact:hover {\n  color: #515365;\n  fill: rgba(0, 23, 55, 0.08);\n}\n\n.app-contacts .searchable-container .modal-content {\n  border: none;\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);\n}\n\n.app-contacts .searchable-container .modal-content svg.close {\n  position: absolute;\n  right: -7px;\n  top: -8px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 7px;\n  background: #fff;\n  border-radius: 5px;\n  opacity: 1;\n  color: #2196f3;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: 0.6s;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-name .validation-text,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-email .validation-text,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation .validation-text,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone .validation-text,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location .validation-text {\n  display: none;\n  color: #e7515a;\n  font-weight: 600;\n  text-align: left;\n  margin-top: 6px;\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-name svg,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-email svg,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation svg,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone svg,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location svg {\n  align-self: center;\n  font-size: 19px;\n  margin-right: 14px;\n  color: #2196f3;\n  font-weight: 600;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-name #c-name::-webkit-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-email #c-email::-webkit-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation #c-occupation::-webkit-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone #c-phone::-webkit-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location #c-location::-webkit-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-name #c-name::-ms-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-email #c-email::-ms-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation #c-occupation::-ms-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone #c-phone::-ms-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location #c-location::-ms-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-name #c-name::-moz-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-email #c-email::-moz-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation #c-occupation::-moz-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone #c-phone::-moz-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location #c-location::-moz-input-placeholder {\n  color: #e3e4eb;\n  font-weight: 600;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone {\n  padding-top: 20px;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location {\n  padding-top: 20px;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location #c-location {\n  resize: none;\n}\n\n.app-contacts .searchable-container .modal-footer .btn[data-dismiss=modal] {\n  background-color: #fff;\n  color: #4361ee;\n  font-weight: 700;\n  border: 1px solid #e8e8e8;\n  padding: 10px 25px;\n}\n\n.app-contacts .searchable-container .modal-footer .btn[data-dismiss=modal] svg {\n  font-size: 11px;\n  font-weight: 600;\n  margin-right: 8px;\n}\n\n.app-contacts .searchable-container .modal-footer .btn#btn-add {\n  background-color: #4361ee;\n  color: #fff;\n  font-weight: 600;\n  border: 1px solid #4361ee;\n  padding: 10px 25px;\n}\n\n.app-contacts .searchable-container .modal-footer .btn#btn-edit {\n  background-color: #009688;\n  color: #fff;\n  font-weight: 600;\n  border: 1px solid #e0e6ed;\n  padding: 10px 25px;\n}\n\n.app-contacts .searchable-container .switch .view-grid:hover,\n.app-contacts .searchable-container .switch .view-list:hover,\n.app-contacts .searchable-container .switch .active-view {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.app-contacts .searchable-container .searchable-items.list .items.items-header-section h4 {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 0;\n  margin-left: 39px;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items.items-header-section .n-chk {\n  display: inline-block;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .item-content {\n  flex-direction: row;\n  align-items: center;\n  padding: 0.75rem 0.625rem;\n  position: relative;\n  display: inline-flex;\n  min-width: 0;\n  word-wrap: break-word;\n  justify-content: space-between;\n  background: #fff;\n  margin-bottom: 8px;\n  border-radius: 6px;\n  padding: 13px 18px;\n  width: 100%;\n  min-width: 767px;\n  transition: all 0.35s ease;\n  /* box-shadow: 0px 2px 4px rgba(126,142,177,0.12); */\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .searchable-container .searchable-items.list .items:not(.items-header-section) .item-content:hover {\n  transform: translateY(0) scale(1.01);\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-profile {\n  display: flex;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-profile img {\n  width: 43px;\n  height: 43px;\n  border-radius: 5px;\n  margin-right: 11px;\n  margin-left: 18px;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-meta-info .user-name {\n  margin-bottom: 0;\n  color: #3b3f5c;\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-meta-info .user-work {\n  margin-bottom: 0;\n  color: #888ea8;\n  font-weight: 500;\n  font-size: 13px;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-email p {\n  margin-bottom: 0;\n  color: #888ea8;\n  font-weight: 600;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-email .info-title {\n  display: none;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-location p {\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-location .info-title {\n  display: none;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-phone p {\n  margin-bottom: 0;\n  color: #888ea8;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-phone .info-title {\n  display: none;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .action-btn {\n  font-weight: 600;\n  color: #e3e4eb;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .delete-multiple {\n  margin-right: 5px;\n  cursor: pointer;\n  color: #515365;\n  width: 20px;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .delete-multiple:hover {\n  color: #4361ee;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .edit,\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .delete {\n  margin-right: 5px;\n  cursor: pointer;\n  color: #515365;\n  width: 20px;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .edit:hover,\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .delete:hover {\n  color: #4361ee;\n}\n\n.app-contacts .searchable-items.grid {\n  display: flex;\n  flex-wrap: wrap;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items {\n  margin-bottom: 30px;\n  border-radius: 6px;\n  width: 100%;\n  color: #0e1726;\n  transition: all 0.35s ease;\n  width: 33%;\n  flex: 0 0 25%;\n  max-width: 25%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .item-content {\n  background-color: #fff;\n  padding: 13px 18px;\n  border-radius: 6px;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items.items-header-section {\n  display: none;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-profile {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-profile .n-chk {\n  display: none;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-profile img {\n  border-radius: 12px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-meta-info {\n  margin-top: 10px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-meta-info .user-name {\n  font-size: 21px;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #2196f3;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-meta-info .user-work {\n  font-weight: 700;\n  font-size: 13px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-email {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 24px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-email .info-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 11px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-email p {\n  color: #888ea8;\n  font-size: 13px;\n  margin-bottom: 11px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-location {\n  display: flex;\n  justify-content: space-between;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-location .info-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 11px;\n  margin-right: 10px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-location p {\n  color: #888ea8;\n  font-size: 13px;\n  margin-bottom: 11px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-phone {\n  display: flex;\n  justify-content: space-between;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-phone .info-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 11px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-phone p {\n  color: #888ea8;\n  font-size: 13px;\n  margin-bottom: 11px;\n  margin-right: 10px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .action-btn {\n  font-weight: 600;\n  color: #e3e4eb;\n  text-align: center;\n  margin: 20px 0;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .action-btn .edit,\n.app-contacts .searchable-container .searchable-items.grid .items .action-btn .delete {\n  margin-right: 5px;\n  cursor: pointer;\n  color: #515365;\n  width: 20px;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .action-btn .edit:hover,\n.app-contacts .searchable-container .searchable-items.grid .items .action-btn .delete:hover {\n  color: #4361ee;\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .app-contacts {\n    /* IE10+ CSS styles go here */\n  }\n  .app-contacts .new-control.new-checkbox .new-control-indicator {\n    top: -13px;\n    left: -8px;\n  }\n}\n@media (max-width: 1199px) {\n  .app-contacts .searchable-container .searchable-items.list {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .app-contacts .searchable-container .searchable-items.grid .items {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n}\n@media (max-width: 767px) {\n  .app-contacts .searchable-container .searchable-items.list {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .app-contacts .searchable-container .searchable-items.list .items {\n    min-width: 767px;\n  }\n  .app-contacts .searchable-container .searchable-items.grid .items {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media (max-width: 575px) {\n  .app-contacts .searchable-container .searchable-items.grid .items {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .app-contacts .filtered-list-search form > div {\n    width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.searchable-container .switch[data-v-31778694] {\n    width: auto;\n    height: auto;\n}\n.searchable-container .searchable-items.grid .items .user-profile .custom-checkbox[data-v-31778694] {\n    display: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/apps/contacts.scss":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/sass/apps/contacts.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_contacts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./contacts.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/contacts.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_contacts_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_contacts_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_style_index_0_id_31778694_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_style_index_0_id_31778694_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_style_index_0_id_31778694_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/apps/contacts.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/apps/contacts.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contacts_vue_vue_type_template_id_31778694_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.vue?vue&type=template&id=31778694&scoped=true& */ "./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true&");
/* harmony import */ var _contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/contacts.vue?vue&type=script&lang=js&");
/* harmony import */ var _contacts_vue_vue_type_style_index_0_id_31778694_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css& */ "./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contacts_vue_vue_type_template_id_31778694_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _contacts_vue_vue_type_template_id_31778694_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "31778694",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/contacts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/contacts.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/apps/contacts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./contacts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_style_index_0_id_31778694_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_template_id_31778694_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_template_id_31778694_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_template_id_31778694_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./contacts.vue?vue&type=template&id=31778694&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "layout-px-spacing app-contacts" },
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
                      [_c("span", [_vm._v("Contacts")])]
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
          staticClass: "row layout-spacing layout-top-spacing",
          attrs: { id: "cancel-row" },
        },
        [
          _c("div", { staticClass: "col-lg-12" }, [
            _c(
              "div",
              {
                staticClass: "panel-body searchable-container",
                class: [_vm.grid_type],
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search layout-spacing align-self-center",
                    },
                    [
                      _c("form", { staticClass: "form-inline my-2 my-lg-0" }, [
                        _c(
                          "div",
                          {},
                          [
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
                            _vm._v(" "),
                            _c("b-input", {
                              staticClass: "product-search",
                              attrs: { placeholder: "Search Contacts..." },
                              on: {
                                keyup: function ($event) {
                                  return _vm.search_contacts()
                                },
                              },
                              model: {
                                value: _vm.search_user,
                                callback: function ($$v) {
                                  _vm.search_user =
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                },
                                expression: "search_user",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-xl-8 col-lg-7 col-md-7 col-sm-5 text-sm-right text-center layout-spacing align-self-center",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-sm-end justify-content-center",
                        },
                        [
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:;" },
                              on: { click: _vm.edit_user },
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "feather feather-user-plus",
                                  attrs: {
                                    id: "btn-add-contact",
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
                                      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("circle", {
                                    attrs: { cx: "8.5", cy: "7", r: "4" },
                                  }),
                                  _vm._v(" "),
                                  _c("line", {
                                    attrs: {
                                      x1: "20",
                                      y1: "8",
                                      x2: "20",
                                      y2: "14",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("line", {
                                    attrs: {
                                      x1: "23",
                                      y1: "11",
                                      x2: "17",
                                      y2: "11",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "switch align-self-center" },
                            [
                              _c(
                                "a",
                                {
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function ($event) {
                                      _vm.grid_type = "list"
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-list view-list mr-1",
                                      class: {
                                        "active-view": _vm.grid_type == "list",
                                      },
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
                                      _c("line", {
                                        attrs: {
                                          x1: "8",
                                          y1: "6",
                                          x2: "21",
                                          y2: "6",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("line", {
                                        attrs: {
                                          x1: "8",
                                          y1: "12",
                                          x2: "21",
                                          y2: "12",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("line", {
                                        attrs: {
                                          x1: "8",
                                          y1: "18",
                                          x2: "21",
                                          y2: "18",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("line", {
                                        attrs: {
                                          x1: "3",
                                          y1: "6",
                                          x2: "3",
                                          y2: "6",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("line", {
                                        attrs: {
                                          x1: "3",
                                          y1: "12",
                                          x2: "3",
                                          y2: "12",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("line", {
                                        attrs: {
                                          x1: "3",
                                          y1: "18",
                                          x2: "3",
                                          y2: "18",
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
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function ($event) {
                                      _vm.grid_type = "grid"
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-grid view-grid",
                                      class: {
                                        "active-view": _vm.grid_type == "grid",
                                      },
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
                                      _c("rect", {
                                        attrs: {
                                          x: "3",
                                          y: "3",
                                          width: "7",
                                          height: "7",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("rect", {
                                        attrs: {
                                          x: "14",
                                          y: "3",
                                          width: "7",
                                          height: "7",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("rect", {
                                        attrs: {
                                          x: "14",
                                          y: "14",
                                          width: "7",
                                          height: "7",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("rect", {
                                        attrs: {
                                          x: "3",
                                          y: "14",
                                          width: "7",
                                          height: "7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-modal",
                            {
                              attrs: {
                                centered: "",
                                id: "addContactModal",
                                static: true,
                                title: _vm.params.id
                                  ? "Update User"
                                  : "Add User",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "modal-footer",
                                  fn: function () {
                                    return [
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            variant: "default",
                                            "data-dismiss": "modal",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.$bvModal.hide(
                                                "addContactModal"
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "flaticon-cancel-12",
                                          }),
                                          _vm._v(" Discard"),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            variant: "default",
                                            id: "btn-add",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.save_user()
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.params.id ? "Update" : "Add"
                                            )
                                          ),
                                        ]
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ]),
                            },
                            [
                              _c("div", { staticClass: "add-contact-box" }, [
                                _c(
                                  "div",
                                  { staticClass: "add-contact-content" },
                                  [
                                    _c(
                                      "b-form",
                                      { attrs: { id: "addContactModalTitle" } },
                                      [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("b-input", {
                                                    attrs: {
                                                      placeholder: "Name",
                                                    },
                                                    model: {
                                                      value: _vm.params.name,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.params,
                                                          "name",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "params.name",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("b-input", {
                                                    attrs: {
                                                      placeholder: "Email",
                                                    },
                                                    model: {
                                                      value: _vm.params.email,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.params,
                                                          "email",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "params.email",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("b-input", {
                                                    attrs: {
                                                      placeholder: "Occupation",
                                                    },
                                                    model: {
                                                      value: _vm.params.role,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.params,
                                                          "role",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "params.role",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("b-input", {
                                                    attrs: {
                                                      placeholder: "Phone",
                                                    },
                                                    model: {
                                                      value: _vm.params.phone,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.params,
                                                          "phone",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "params.phone",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("b-input", {
                                                    attrs: {
                                                      placeholder: "Location",
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.params.location,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.params,
                                                          "location",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "params.location",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "searchable-items", class: [_vm.grid_type] },
                  [
                    _c("div", { staticClass: "items items-header-section" }, [
                      _c("div", { staticClass: "item-content" }, [
                        _c(
                          "div",
                          {},
                          [
                            _c("b-checkbox", {
                              staticClass: "checkbox-primary d-inline-block",
                              attrs: {
                                checked: _vm.check_all_checkbox,
                                variant: "primary",
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.check_all($event)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("h4", [_vm._v("Name")]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(0),
                        _vm._v(" "),
                        _vm._m(1),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _c("div", { staticClass: "action-btn" }, [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover",
                                  modifiers: { hover: true },
                                },
                              ],
                              attrs: {
                                href: "javascript:;",
                                title: "Delete Selected",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.delete_selected()
                                },
                              },
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass:
                                    "feather feather-trash-2  delete-multiple",
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
                                  _c("polyline", {
                                    attrs: { points: "3 6 5 6 21 6" },
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("line", {
                                    attrs: {
                                      x1: "10",
                                      y1: "11",
                                      x2: "10",
                                      y2: "17",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("line", {
                                    attrs: {
                                      x1: "14",
                                      y1: "11",
                                      x2: "14",
                                      y2: "17",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.filterd_contacts_list, function (user, index) {
                      return _c("div", { key: index, staticClass: "items" }, [
                        _c("div", { staticClass: "item-content" }, [
                          _c(
                            "div",
                            { staticClass: "user-profile" },
                            [
                              _c("b-checkbox", {
                                staticClass: "checkbox-primary d-inline-block",
                                attrs: { variant: "primary", value: user.id },
                                model: {
                                  value: _vm.ids,
                                  callback: function ($$v) {
                                    _vm.ids = $$v
                                  },
                                  expression: "ids",
                                },
                              }),
                              _vm._v(" "),
                              _c("img", {
                                attrs: {
                                  src: __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./" + user.path),
                                  alt: "avatar",
                                },
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "user-meta-info" }, [
                                _c("p", { staticClass: "user-name" }, [
                                  _vm._v(_vm._s(user.name)),
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "user-work" }, [
                                  _vm._v(_vm._s(user.role)),
                                ]),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "user-email" }, [
                            _c("p", { staticClass: "info-title" }, [
                              _vm._v("Email:"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "usr-email-addr" }, [
                              _vm._v(_vm._s(user.email)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "user-location" }, [
                            _c("p", { staticClass: "info-title" }, [
                              _vm._v("Location:"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "usr-location" }, [
                              _vm._v(_vm._s(user.location)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "user-phone" }, [
                            _c("p", { staticClass: "info-title" }, [
                              _vm._v("Phone:"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "usr-ph-no" }, [
                              _vm._v(_vm._s(user.phone)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "action-btn" }, [
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true },
                                  },
                                ],
                                staticClass: "mr-1",
                                attrs: { href: "javascript:;", title: "Edit" },
                                on: {
                                  click: function ($event) {
                                    return _vm.edit_user(user)
                                  },
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "feather feather-edit-2 edit",
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
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true },
                                  },
                                ],
                                attrs: {
                                  href: "javascript:;",
                                  title: "Delete",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.delete_user(user)
                                  },
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "feather feather-user-minus delete",
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
                                        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("circle", {
                                      attrs: { cx: "8.5", cy: "7", r: "4" },
                                    }),
                                    _vm._v(" "),
                                    _c("line", {
                                      attrs: {
                                        x1: "23",
                                        y1: "11",
                                        x2: "17",
                                        y2: "11",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ])
                    }),
                  ],
                  2
                ),
              ]
            ),
          ]),
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
    return _c("div", { staticClass: "user-email" }, [
      _c("h4", [_vm._v("Email")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "user-location" }, [
      _c("h4", { staticStyle: { "margin-left": "0" } }, [_vm._v("Location")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "user-phone" }, [
      _c("h4", { staticStyle: { "margin-left": "3px" } }, [_vm._v("Phone")]),
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