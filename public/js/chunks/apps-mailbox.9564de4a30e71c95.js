(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-mailbox"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var _assets_sass_apps_mailbox_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/sass/apps/mailbox.scss */ "./resources/js/src/assets/sass/apps/mailbox.scss");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


vue__WEBPACK_IMPORTED_MODULE_1__["default"].use((vue_quill_editor__WEBPACK_IMPORTED_MODULE_0___default()));




var default_data = {
  id: null,
  from: 'info@mail.com',
  to: '',
  cc: '',
  title: '',
  file: null,
  description: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Mailbox'
  },
  components: {},
  computed: {
    check_all_checkbox: function check_all_checkbox() {
      if (this.filtered_mail_list.length && this.ids.length == this.filtered_mail_list.length) {
        return true;
      } else {
        return false;
      }
    }
  },
  data: function data() {
    return {
      is_show_mail_menu: false,
      mail_list: [],
      filtered_mail_list: [],
      search_mail: '',
      selected_tab: 'inbox',
      selected_mail: null,
      params: default_data,
      mail_popup_type: null,
      ids: [],
      editor_options: {
        modules: {
          toolbar: [[{
            header: [1, 2, false]
          }], ['bold', 'italic', 'underline'], ['image', 'code-block']]
        },
        placeholder: 'Compose an epic...'
      },
      message: ''
    };
  },
  mounted: function mounted() {
    this.bind_mail_list();
  },
  methods: {
    bind_mail_list: function bind_mail_list() {
      var c_dt = new Date();
      this.mail_list = [{
        id: 1,
        path: 'profile-16.jpeg',
        first_name: 'Laurie',
        last_name: 'Fox',
        email: 'laurieFox@mail.com',
        date: c_dt.getMonth() + 1 + '/' + c_dt.getDate() + '/' + c_dt.getFullYear(),
        time: '2:00 PM',
        title: 'Promotion Page',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: false,
        group: 'social',
        is_unread: false,
        attachments: [{
          name: 'Confirm File.txt',
          size: '450KB',
          type: 'file'
        }, {
          name: 'Important Docs.xml',
          size: '2.1MB',
          type: 'file'
        }],
        description: "\n<p class=\"mail-content\"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<div class=\"gallery text-center\">\n    <img alt=\"image-gallery\" src=\"".concat(__webpack_require__(/*! @/assets/images/scroll-6.jpeg */ "./resources/js/src/assets/images/scroll-6.jpeg"), "\" class=\"img-fluid mb-4 mt-4\" style=\"width: 250px; height: 180px;\">\n    <img alt=\"image-gallery\" src=\"").concat(__webpack_require__(/*! @/assets/images/scroll-7.jpeg */ "./resources/js/src/assets/images/scroll-7.jpeg"), "\" class=\"img-fluid mb-4 mt-4\" style=\"width: 250px; height: 180px;\">\n    <img alt=\"image-gallery\" src=\"").concat(__webpack_require__(/*! @/assets/images/scroll-8.jpeg */ "./resources/js/src/assets/images/scroll-8.jpeg"), "\" class=\"img-fluid mb-4 mt-4\" style=\"width: 250px; height: 180px;\">\n</div>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n")
      }, {
        id: 2,
        path: 'profile-19.jpeg',
        first_name: 'Andy',
        last_name: 'King',
        email: 'kingAndy@mail.com',
        date: c_dt.getMonth() + 1 + '/' + c_dt.getDate() + '/' + c_dt.getFullYear(),
        time: '6:28 PM',
        title: 'Hosting Payment Reminder',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: false,
        group: '',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 3,
        path: '',
        first_name: 'Kristen',
        last_name: 'Beck',
        email: 'kirsten.beck@mail.com',
        date: c_dt.getMonth() + 1 + '/' + c_dt.getDate() + '/' + c_dt.getFullYear(),
        time: '11:09 AM',
        title: 'Verification Link',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: false,
        group: 'social',
        is_unread: true,
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 4,
        path: 'profile-34.jpeg',
        first_name: 'Christian',
        last_name: '',
        email: 'christian@mail.com',
        date: '11/30/2021',
        time: '2:00 PM',
        title: 'New Updates',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: false,
        group: 'private',
        is_unread: false,
        attachments: [{
          name: 'update.zip',
          size: '1.38MB',
          type: 'zip'
        }],
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 5,
        path: 'profile-31.jpeg',
        first_name: 'Roxanne',
        last_name: '',
        email: 'roxanne@mail.com',
        date: '11/15/2021',
        time: '2:00 PM',
        title: 'Schedular Alert',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: false,
        group: 'personal',
        is_unread: true,
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 6,
        path: 'profile-17.jpeg',
        first_name: 'Nia',
        last_name: 'Hillyer',
        email: 'niahillyer@mail.com',
        date: '08/16/2020',
        time: '2:22 AM',
        title: 'Motion UI Kit',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: true,
        group: '',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>\n<div class=\"gallery text-center\">\n    <img alt=\"image-gallery\" src=\"".concat(__webpack_require__(/*! @/assets/images/scroll-6.jpeg */ "./resources/js/src/assets/images/scroll-6.jpeg"), "\" class=\"img-fluid mb-4 mt-4\" style=\"width: 250px; height: 180px;\">\n    <img alt=\"image-gallery\" src=\"").concat(__webpack_require__(/*! @/assets/images/scroll-7.jpeg */ "./resources/js/src/assets/images/scroll-7.jpeg"), "\" class=\"img-fluid mb-4 mt-4\" style=\"width: 250px; height: 180px;\">\n    <img alt=\"image-gallery\" src=\"").concat(__webpack_require__(/*! @/assets/images/scroll-8.jpeg */ "./resources/js/src/assets/images/scroll-8.jpeg"), "\" class=\"img-fluid mb-4 mt-4\" style=\"width: 250px; height: 180px;\">\n</div>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n")
      }, {
        id: 7,
        path: 'profile-23.jpeg',
        first_name: 'Iris',
        last_name: 'Hubbard',
        email: 'irishubbard@mail.com',
        date: '08/16/2020',
        time: '1:40 PM',
        title: 'Green Illustration',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: true,
        group: '',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 8,
        path: '',
        first_name: 'Ernest',
        last_name: 'Reeves',
        email: 'reevesErnest@mail.com',
        date: '06/02/2020',
        time: '8:25 PM',
        title: 'Youtube',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: true,
        group: 'work',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 9,
        path: 'profile-15.jpeg',
        first_name: 'Info',
        last_name: 'Company',
        email: 'infocompany@mail.com',
        date: '02/10/2020',
        time: '7:00 PM',
        title: '50% Discount',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: false,
        group: 'work',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 10,
        path: '',
        first_name: 'NPM',
        last_name: 'Inc',
        email: 'npminc@mail.com',
        date: '12/15/2018',
        time: '8:37 AM',
        title: 'npm Inc',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: false,
        group: 'personal',
        is_unread: true,
        attachments: [{
          name: 'package.zip',
          size: '450KB',
          type: 'zip'
        }],
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 11,
        path: 'profile-18.jpeg',
        first_name: 'Marlene',
        last_name: 'Wood',
        email: 'marlenewood@mail.com',
        date: '11/25/2018',
        time: '1:51 PM',
        title: 'eBill',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'inbox',
        is_important: false,
        group: 'personal',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 12,
        path: '',
        first_name: 'Keith',
        last_name: 'Foster',
        email: 'kf@mail.com',
        date: '12/15/2018',
        time: '9:30 PM',
        title: 'Web Design News',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'draft',
        is_important: false,
        group: 'personal',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>\n"
      }, {
        id: 13,
        path: '',
        first_name: 'Amy',
        last_name: 'Diaz',
        email: 'amyDiaz@mail.com',
        date: '12/15/2018',
        time: '2:00 PM',
        title: 'Ecommerce Analytics',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'draft',
        is_important: false,
        group: 'private',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>\n"
      }, {
        id: 14,
        path: '',
        first_name: 'Alan',
        last_name: '',
        email: 'alan@mail.com',
        date: '12/16/2019',
        time: '8:45 AM',
        title: 'Mozilla Update',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'sent_mail',
        is_important: false,
        group: 'work',
        is_unread: false,
        attachments: [{
          name: 'Confirm File',
          size: '450KB',
          type: 'file'
        }, {
          name: 'Important Docs',
          size: '2.1MB',
          type: 'folder'
        }, {
          name: 'Photo.png',
          size: '50kb',
          type: 'image'
        }],
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 15,
        path: '',
        first_name: 'Justin',
        last_name: 'Cross',
        email: 'justincross@mail.com',
        date: '09/14/219',
        time: '3:10 PM',
        title: 'App Project Checklist',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'sent_mail',
        is_important: false,
        group: '',
        is_unread: false,
        attachments: [{
          name: 'Important Docs',
          size: '2.1MB',
          type: 'folder'
        }, {
          name: 'Photo.png',
          size: '50kb',
          type: 'image'
        }],
        description: "\n<p class=\"mail-content\"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 16,
        path: 'profile-18.jpeg',
        first_name: 'Alex',
        last_name: 'Gray',
        email: 'alexGray@mail.com',
        date: '08/16/2019',
        time: '10:18 AM',
        title: 'Weekly Newsletter',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'spam',
        is_important: false,
        group: '',
        is_unread: false,
        attachments: [{
          name: 'Confirm File',
          size: '450KB',
          type: 'file'
        }, {
          name: 'Important Docs',
          size: '2.1MB',
          type: 'folder'
        }, {
          name: 'Photo.png',
          size: '50kb',
          type: 'image'
        }],
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 17,
        path: 'profile-15.jpeg',
        first_name: 'Info',
        last_name: 'Company',
        email: 'infocompany@mail.com',
        date: '02/10/2018',
        time: '7:00 PM',
        title: '50% Discount',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'spam',
        is_important: false,
        group: 'work',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 18,
        path: 'profile-18.jpeg',
        first_name: 'Marlene',
        last_name: 'Wood',
        email: 'marlenewood@mail.com',
        date: '11/25/2017',
        time: '1:51 PM',
        title: 'eBill',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'spam',
        is_important: false,
        group: 'personal',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }, {
        id: 19,
        path: 'profile-13.jpeg',
        first_name: 'Ryan MC',
        last_name: 'Killop',
        email: 'ryanMCkillop@mail.com',
        date: '08/17/2018',
        time: '11:45 PM',
        title: 'Make it Simple',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'trash',
        is_important: false,
        group: '',
        is_unread: false,
        description: "\n<p class=\"mail-content\"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<div class=\"gallery text-center\">\n    <img alt=\"image-gallery\" src=\"".concat(__webpack_require__(/*! @/assets/images/scroll-6.jpeg */ "./resources/js/src/assets/images/scroll-6.jpeg"), "\" class=\"img-fluid mb-4 mt-4\" style=\"width: 250px; height: 180px;\">\n    <img alt=\"image-gallery\" src=\"").concat(__webpack_require__(/*! @/assets/images/scroll-7.jpeg */ "./resources/js/src/assets/images/scroll-7.jpeg"), "\" class=\"img-fluid mb-4 mt-4\" style=\"width: 250px; height: 180px;\">\n    <img alt=\"image-gallery\" src=\"").concat(__webpack_require__(/*! @/assets/images/scroll-8.jpeg */ "./resources/js/src/assets/images/scroll-8.jpeg"), "\" class=\"img-fluid mb-4 mt-4\" style=\"width: 250px; height: 180px;\">\n</div>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n")
      }, {
        id: 20,
        path: 'profile-23.jpeg',
        first_name: 'Liam',
        last_name: 'Sheldon',
        email: 'liamsheldon@mail.com',
        date: '08/17/2018 ',
        time: '11:45 PM',
        title: 'New Offers',
        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
        type: 'trash',
        is_important: false,
        group: '',
        is_unread: false,
        attachments: [{
          name: 'Confirm File',
          size: '450KB',
          type: 'file'
        }],
        description: "\n<p class=\"mail-content\"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>\n<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>\n"
      }];
      this.search_mails();
    },
    tab_changed: function tab_changed(type) {
      this.selected_tab = type;
      this.search_mails();
      this.is_show_mail_menu = false;
    },
    search_mails: function search_mails() {
      var _this = this;

      var res;

      if (this.selected_tab == 'important') {
        res = this.mail_list.filter(function (d) {
          return d.is_important;
        });
      } else if (this.selected_tab == 'personal' || this.selected_tab == 'work' || this.selected_tab == 'social' || this.selected_tab == 'private') {
        res = this.mail_list.filter(function (d) {
          return d.group == _this.selected_tab;
        });
      } else {
        res = this.mail_list.filter(function (d) {
          return d.type == _this.selected_tab;
        });
      }

      this.filtered_mail_list = res.filter(function (d) {
        return d.title && d.title.toLowerCase().includes(_this.search_mail) || d.first_name && d.first_name.toLowerCase().includes(_this.search_mail) || d.last_name && d.last_name.toLowerCase().includes(_this.search_mail) || d.display_description && d.display_description.toLowerCase().includes(_this.search_mail);
      });
      this.clear_selection();
    },
    select_mail: function select_mail(item) {
      if (item) {
        if (item.type != 'draft') {
          if (item && item.is_unread) {
            item.is_unread = false;
          }

          this.selected_mail = item;
        } else {
          this.open_mail('draft', item);
        }
      } else {
        this.selected_mail = '';
      }
    },
    show_time: function show_time(item) {
      var display_dt = new Date(item.date);
      var c_dt = new Date();

      if (display_dt.toDateString() == c_dt.toDateString()) {
        return item.time;
      } else {
        if (display_dt.getFullYear() == c_dt.getFullYear()) {
          var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          return monthNames[display_dt.getMonth()] + ' ' + String(display_dt.getDate()).padStart(2, '0');
        } else {
          return String(display_dt.getMonth() + 1).padStart(2, '0') + '/' + String(display_dt.getDate()).padStart(2, '0') + '/' + display_dt.getFullYear();
        }
      }
    },
    check_all: function check_all(is_checked) {
      if (is_checked) {
        this.ids = this.filtered_mail_list.map(function (d) {
          return d.id;
        });
      } else {
        this.clear_selection();
      }
    },
    clear_selection: function clear_selection() {
      this.ids = [];
    },
    show_message: function show_message(message) {
      this.message = message;
      this.$bvToast.show('toast_msg');
    },
    set_group: function set_group(group) {
      var _this2 = this;

      if (this.ids.length) {
        var items = this.filtered_mail_list.filter(function (d) {
          return _this2.ids.includes(d.id);
        });

        var _iterator = _createForOfIteratorHelper(items),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            item.group = group;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.show_message(this.ids.length + ' Mail Grouped as ' + group.toUpperCase());
        this.clear_selection();
      }
    },
    set_important: function set_important() {
      var _this3 = this;

      if (this.ids.length) {
        var items = this.filtered_mail_list.filter(function (d) {
          return _this3.ids.includes(d.id);
        });

        var _iterator2 = _createForOfIteratorHelper(items),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            item.is_important = !item.is_important;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (this.selected_tab == 'important') {
          this.show_message(this.ids.length + ' Mail removed from Important.');
        } else {
          this.show_message(this.ids.length + ' Mail added to Important.');
        }

        this.tab_changed('important');
      }
    },
    set_spam: function set_spam() {
      var _this4 = this;

      if (this.ids.length) {
        var items = this.filtered_mail_list.filter(function (d) {
          return _this4.ids.includes(d.id);
        });

        var _iterator3 = _createForOfIteratorHelper(items),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var item = _step3.value;
            item.type = item.type == 'spam' ? 'inbox' : 'spam';
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (this.selected_tab == 'spam') {
          this.show_message(this.ids.length + ' Mail removed from Spam.');
        } else {
          this.show_message(this.ids.length + ' Mail added to Spam.');
        }

        this.tab_changed('spam');
      }
    },
    set_action: function set_action(type) {
      var _this5 = this;

      if (this.ids.length) {
        var items = this.filtered_mail_list.filter(function (d) {
          return _this5.ids.includes(d.id);
        });

        var _iterator4 = _createForOfIteratorHelper(items),
            _step4;

        try {
          var _loop = function _loop() {
            var item = _step4.value;

            if (type == 'trash') {
              item.type = 'trash';

              _this5.show_message(_this5.ids.length + ' Mail deleted.');

              _this5.tab_changed('trash');
            } else if (type == 'read') {
              item.is_unread = false;

              _this5.show_message(_this5.ids.length + ' Mail marked as Read.');
            } else if (type == 'unread') {
              item.is_unread = true;

              _this5.show_message(_this5.ids.length + ' Mail marked as UnRead.');
            } //restore & permanent delete
            else if (type == 'restore') {
              item.type = 'inbox';

              _this5.show_message(_this5.ids.length + ' Mail Restored.');

              _this5.tab_changed('inbox');
            } else if (type == 'delete') {
              _this5.mail_list = _this5.mail_list.filter(function (d) {
                return d.id != item.id;
              });

              _this5.show_message(_this5.ids.length + ' Mail Permanently Deleted.');

              _this5.tab_changed('trash');
            }
          };

          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        this.clear_selection();
      }
    },
    //
    open_mail: function open_mail(type, item) {
      this.mail_popup_type = type;

      if (type == 'add') {
        this.params = JSON.parse(JSON.stringify(default_data));
      } else if (type == 'draft') {
        var data = JSON.parse(JSON.stringify(item));
        this.params = data;
        this.params.from = default_data.from;
        this.params.to = data.email;
      } else if (type == 'reply') {
        var _data = JSON.parse(JSON.stringify(item));

        this.params = _data;
        this.params.from = default_data.from;
        this.params.to = _data.email;
        this.params.title = 'Re: ' + this.params.title;
      } else if (type == 'forward') {
        var _data2 = JSON.parse(JSON.stringify(item));

        this.params = _data2;
        this.params.from = default_data.from;
        this.params.to = _data2.email;
        this.params.title = 'Fwd: ' + this.params.title;
      }

      this.$bvModal.show('composeMailModal');
    },
    save_mail: function save_mail(type) {
      if (!this.params.to) {
        this.$bvToast.toast('To email address is required.', {
          headerClass: 'd-none',
          bodyClass: 'toast-danger',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 1000
        });
        return true;
      }

      if (!this.params.title) {
        this.$bvToast.toast('Subject is required.', {
          headerClass: 'd-none',
          bodyClass: 'toast-danger',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 1000
        });
        return true;
      }

      var max_id = 0;

      if (!this.params.id) {
        max_id = this.mail_list.reduce(function (max, character) {
          return character.id > max ? character.id : max;
        }, this.mail_list[0].id);
      }

      var c_dt = new Date();
      var obj = {
        id: max_id + 1,
        path: '',
        first_name: '',
        last_name: '',
        email: this.params.to,
        date: c_dt.getMonth() + 1 + '/' + c_dt.getDate() + '/' + c_dt.getFullYear(),
        time: c_dt.toLocaleTimeString(),
        title: this.params.title,
        display_description: this.$refs.editor.quill.getText(),
        type: 'draft',
        is_important: false,
        group: '',
        is_unread: false,
        description: this.params.description,
        attachments: []
      };

      if (this.params.file && this.params.file.length) {
        var _iterator5 = _createForOfIteratorHelper(this.params.file),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var file = _step5.value;
            var fl_obj = {
              name: file.name,
              size: this.get_file_size(file.size),
              type: this.get_file_type(file.type)
            };
            obj.attachments.push(fl_obj);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }

      if (type == 'save' || type == 'save_reply' || type == 'save_forward') {
        //saved to draft
        obj.type = 'draft';
        this.mail_list.splice(0, 0, obj);
        this.tab_changed('draft');
        this.$bvToast.toast('Successfully Saved to Draft.', {
          headerClass: 'd-none',
          bodyClass: 'toast-success',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 1000
        });
      } else if (type == 'send' || type == 'reply' || type == 'forward') {
        //saved to sent mail
        obj.type = 'sent_mail';
        this.mail_list.splice(0, 0, obj);
        this.tab_changed('sent_mail');
        this.$bvToast.toast('Mail Sent Successfully.', {
          headerClass: 'd-none',
          bodyClass: 'toast-success',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 1000
        });
      }

      this.selected_mail = null;
      this.$bvModal.hide('composeMailModal');
    },
    get_file_type: function get_file_type(file_type) {
      var type = 'file';

      if (file_type.includes('image/')) {
        type = 'image';
      } else if (file_type.includes('application/x-zip')) {
        type = 'zip';
      }

      return type;
    },
    get_file_size: function get_file_size(total_bytes) {
      var size = '';

      if (total_bytes < 1000000) {
        size = Math.floor(total_bytes / 1000) + 'KB';
      } else {
        size = Math.floor(total_bytes / 1000000) + 'MB';
      }

      return size;
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/mailbox.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/mailbox.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.layout-px-spacing {\n  min-height: auto !important;\n}\n\n.mailbox {\n  /*----------Theme checkbox---------*/\n  /*Mail Labels*/\n  /*\n  =====================\n      Mailbox Inbox\n  =====================\n  */\n  /*\n  =====================\n      Content Box\n  =====================\n  */\n}\n\n.mailbox [class*=g-dot-] {\n  position: relative;\n}\n\n.mailbox [class*=g-dot-]:before {\n  position: absolute;\n  padding: 4px;\n  content: \"\";\n  background: transparent;\n  border-radius: 50%;\n  top: 15px;\n  left: 0;\n  border: 2px solid #515365;\n}\n\n.mailbox .g-dot-primary:before {\n  border: none;\n  background: #2196f3;\n}\n\n.mailbox .g-dot-warning:before {\n  border: none;\n  background: #e2a03f;\n}\n\n.mailbox .g-dot-success:before {\n  border: none;\n  background: #1abc9c;\n}\n\n.mailbox .g-dot-danger:before {\n  border: none;\n  background: #e7515a;\n}\n\n.mailbox .mail-content-container.mailInbox [data-original-title=Restore], .mailbox .mail-content-container.sentmail [data-original-title=Restore], .mailbox .mail-content-container.important [data-original-title=Restore], .mailbox .mail-content-container.spam [data-original-title=Restore] {\n  display: none;\n}\n\n.mailbox .mail-content-container.trashed [data-original-title=Reply],\n.mailbox .mail-content-container.trashed [data-original-title=Forward],\n.mailbox .mail-content-container.trashed [data-original-title=Print] {\n  display: none;\n}\n\n.mailbox .left-0 {\n  left: 0 !important;\n}\n\n.mailbox .new-control {\n  position: relative;\n  display: inline-flex;\n}\n\n.mailbox .new-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.mailbox .new-control.new-checkbox {\n  cursor: pointer;\n}\n\n.mailbox .new-control.new-checkbox .new-control-indicator {\n  position: relative;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  background-color: #bfc9d4;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n  border-radius: 2px;\n  margin-right: 13px;\n}\n\n.mailbox .new-control.new-checkbox > input:checked ~ span.new-control-indicator {\n  background: #888ea8;\n}\n\n.mailbox .new-control.new-checkbox > input:checked ~ span.new-control-indicator:after {\n  display: block;\n}\n\n.mailbox .new-control.new-checkbox span.new-control-indicator:after {\n  border: solid #fff;\n  top: 50%;\n  left: 50%;\n  margin-left: -2px;\n  margin-top: -6px;\n  width: 5px;\n  height: 10px;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg);\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.mailbox .new-control.new-checkbox.checkbox-primary > input:checked ~ span.new-control-indicator {\n  background: #3b3f5c;\n}\n\n.mailbox .mail-box-container {\n  position: relative;\n  display: flex;\n  border-radius: 6px;\n  background-color: #fff;\n  box-shadow: 0 4px 6px 0 rgba(85, 85, 85, 0.08), 0 1px 20px 0 rgba(0, 0, 0, 0.07), 0px 1px 11px 0px rgba(0, 0, 0, 0.07);\n  height: calc(100vh - 179px);\n  margin-bottom: 10px;\n}\n\n.mailbox .mail-box-container .avatar-sm {\n  width: 2.5rem;\n  height: 2.5rem;\n  font-size: 0.83333rem;\n}\n\n.mailbox .mail-box-container .avatar {\n  position: relative;\n  display: inline-block;\n  width: 34px;\n  height: 34px;\n  font-size: 12px;\n}\n\n.mailbox .mail-box-container .avatar .avatar-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: #060818;\n  color: #ebedf2;\n}\n\n.mailbox .mail-overlay {\n  display: none;\n  position: absolute;\n  width: 100vw;\n  height: 100%;\n  background: #3b3f5c !important;\n  z-index: 4 !important;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n\n.mailbox .mail-overlay.mail-overlay-show {\n  display: block;\n  opacity: 0.3;\n}\n\n.mailbox .tab-title {\n  padding: 33px 15px;\n  max-width: 115px;\n  border-right: 1px solid #e0e6ed;\n}\n\n.mailbox .tab-title .mail-btn-container {\n  padding: 0 30px;\n}\n\n.mailbox .tab-title #btn-compose-mail {\n  transform: none;\n  background: #3b3f5c;\n  border: none !important;\n  padding: 7px 9px;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: #fff !important;\n  width: 40px;\n  margin: 0 auto;\n  box-shadow: 0px 5px 10px 0px rgba(59, 63, 92, 0.38);\n}\n\n.mailbox .tab-title #btn-compose-mail:hover {\n  box-shadow: none;\n}\n\n.mailbox .tab-title #btn-compose-mail svg {\n  width: 22px;\n  height: 22px;\n}\n\n.mailbox .tab-title.mail-menu-show {\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.mailbox .tab-title .nav-pills .nav-link.active,\n.mailbox .tab-title .nav-pills .show > .nav-link {\n  background-color: transparent;\n  color: #4361ee;\n  font-weight: 600;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.mailbox .tab-title .mail-categories-container {\n  margin-top: 35px;\n  padding: 0 0;\n}\n\n.mailbox .tab-title .mail-sidebar-scroll {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  overflow: auto;\n  height: calc(100vh - 283px);\n}\n\n.mailbox .tab-title .mail-sidebar-scroll .ps__rail-y {\n  right: -15px !important;\n}\n\n.mailbox .tab-title .mail-sidebar-scroll .ps__rail-x {\n  display: none;\n}\n\n.mailbox .tab-title .nav-pills:nth-child(1) .nav-item:first-child a.nav-link {\n  border-top: 1px solid #e0e6ed;\n  padding-top: 24px;\n}\n\n.mailbox .tab-title .nav-pills a.nav-link {\n  position: relative;\n  font-weight: 600;\n  color: #515365;\n  padding: 14px 0px 14px 0px;\n  cursor: pointer;\n  font-size: 14px;\n  display: block;\n  text-align: center;\n  border-radius: 0;\n  border-bottom: 1px solid #e0e6ed;\n}\n\n.mailbox .tab-title .nav-pills .nav-link.active svg,\n.mailbox .tab-title .nav-pills .show > .nav-link svg {\n  color: #4361ee;\n}\n\n.mailbox .tab-title .nav-pills a.nav-link svg {\n  width: 19px;\n  height: 19px;\n  margin-bottom: 7px;\n  color: #888ea8;\n}\n\n.mailbox .tab-title .nav-pills a.nav-link span.nav-names {\n  display: block;\n  letter-spacing: 1px;\n  padding: 0;\n}\n\n.mailbox .tab-title .nav-pills a.nav-link .mail-badge {\n  background: #4361ee;\n  border-radius: 50%;\n  position: absolute;\n  right: 8px;\n  padding: 3px 0;\n  height: 19px;\n  width: 19px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 10px;\n  top: 7px;\n}\n\n.mailbox .group-section {\n  font-weight: 600;\n  font-size: 15px;\n  display: inline-block;\n  color: #060818;\n  letter-spacing: 1px;\n  margin-top: 22px;\n  margin-bottom: 13px;\n  display: flex;\n  justify-content: center;\n}\n\n.mailbox .group-section svg {\n  color: #060818;\n  margin-right: 6px;\n  align-self: center;\n  width: 17px;\n  height: 17px;\n  fill: #acb0c3;\n}\n\n.mailbox .tab-title .nav-pills.group-list .nav-item a {\n  position: relative;\n  padding: 6px 45px 6px 41px;\n  letter-spacing: 1px;\n  border-radius: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #888ea8;\n  border-bottom: none !important;\n}\n\n.mailbox .tab-title .nav-pills.group-list .nav-item a.g-dot-primary.active:before {\n  background: #2196f3;\n}\n\n.mailbox .tab-title .nav-pills.group-list .nav-item a.g-dot-warning.active:before {\n  background: #e2a03f;\n}\n\n.mailbox .tab-title .nav-pills.group-list .nav-item a.g-dot-success.active:before {\n  background: #8dbf42;\n}\n\n.mailbox .tab-title .nav-pills.group-list .nav-item a.g-dot-danger.active:before {\n  background: #e7515a;\n}\n\n.mailbox .tab-title .nav-pills.group-list .nav-item a[class*=g-dot-]:before {\n  position: absolute;\n  padding: 3px;\n  content: \"\";\n  border-radius: 50%;\n  top: 11px;\n  left: 18px;\n  border: 2px solid #e0e6ed;\n}\n\n.mailbox .tab-title .nav-pills.group-list .nav-item a.active {\n  color: #4361ee;\n}\n\n.mailbox .tab-title .nav-pills .nav-item .dropdown-menu {\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);\n  padding: 0;\n  border: none;\n}\n\n.mailbox .tab-title li.mail-labels a.dropdown-item {\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 18px;\n}\n\n.mailbox .tab-title li.mail-labels a.dropdown-item:hover {\n  background-color: #fff;\n  color: #4361ee;\n}\n\n.mailbox .tab-title li.mail-labels .label:after {\n  position: absolute;\n  content: \"\";\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  right: 15px;\n  top: 43%;\n}\n\n.mailbox .actions-btn-tooltip.tooltip {\n  opacity: 1;\n  top: -11px !important;\n}\n\n.mailbox .actions-btn-tooltip .arrow:before {\n  border-top-color: #3b3f5c;\n}\n\n.mailbox .actions-btn-tooltip .tooltip-inner {\n  background: #3b3f5c;\n  color: #fff;\n  font-weight: 700;\n  border-radius: 30px;\n  box-shadow: 0px 5px 15px 1px rgba(113, 106, 202, 0.2);\n  padding: 4px 16px;\n}\n\n.mailbox .mailbox-inbox {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  max-width: 100%;\n  width: 100%;\n  background: rgb(249, 249, 249);\n}\n\n.mailbox .mailbox-inbox .mail-menu {\n  margin: 12px 13px 12px 13px;\n  width: 22px;\n  border-radius: 0;\n  color: #515365;\n  align-self: center;\n}\n\n.mailbox .mailbox-inbox .search {\n  display: flex;\n  border-bottom: 1px solid #e0e6ed;\n  background: #ebedf2;\n}\n\n.mailbox .mailbox-inbox .search input {\n  border: none;\n  padding: 12px 13px 12px 13px;\n  background-color: #fff;\n  border-radius: 0;\n  border-top-right-radius: 6px;\n}\n\n.mailbox .mailbox-inbox .search input:focus {\n  box-shadow: 0 0 5px 2px #f1f2f3;\n}\n\n.mailbox .mailbox-inbox .action-center {\n  display: flex;\n  justify-content: space-between;\n  background: transparent;\n  padding: 14px 25px;\n  border-bottom: 1px solid #e0e6ed;\n}\n\n.mailbox .mailbox-inbox .action-center .new-control {\n  font-weight: 600;\n  color: #3b3f5c;\n}\n\n.mailbox .mailbox-inbox .action-center .nav-link {\n  padding: 0;\n  display: inline-block;\n}\n\n.mailbox .mailbox-inbox .action-center .more-actions .dropdown-menu.show {\n  top: 30px !important;\n}\n\n.mailbox .mailbox-inbox .action-center .dropdown-menu.d-icon-menu {\n  padding: 0;\n  border: 1px solid #e0e6ed;\n  min-width: 6rem;\n  box-shadow: 0px 0px 4px 0px rgba(136, 142, 168, 0.3137254902);\n  border-radius: 6px;\n  top: 30px !important;\n}\n\n.mailbox .mailbox-inbox .action-center .dropdown-menu.d-icon-menu a {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 23px 10px 43px;\n  color: #3b3f5c;\n  letter-spacing: 1px;\n}\n\n.mailbox .mailbox-inbox .action-center .dropdown-menu.d-icon-menu a[class*=g-dot-]:before {\n  left: 19px;\n}\n\n.mailbox .mailbox-inbox .action-center .dropdown-menu.d-icon-menu a.dropdown-item {\n  border-radius: 0;\n}\n\n.mailbox .mailbox-inbox .action-center .dropdown-menu.d-icon-menu a.dropdown-item.active, .mailbox .mailbox-inbox .action-center .dropdown-menu.d-icon-menu a.dropdown-item:active {\n  background-color: transparent;\n}\n\n.mailbox .mailbox-inbox .action-center .dropdown-menu.d-icon-menu a.dropdown-item:hover {\n  color: inherit;\n  background-color: #e9ecef;\n}\n\n.mailbox .mailbox-inbox .action-center .dropdown-menu.d-icon-menu a svg {\n  vertical-align: middle;\n  font-size: 15px;\n  margin-right: 7px;\n  color: #888ea8;\n}\n\n.mailbox .mailbox-inbox .action-center .nav-link:after {\n  display: none;\n}\n\n.mailbox .mailbox-inbox .action-center svg {\n  cursor: pointer;\n  color: #888ea8;\n  margin: 0 6px;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  fill: #e0e6ed;\n}\n\n.mailbox .mailbox-inbox .action-center .nav-link.label-group svg {\n  margin-right: 12px;\n}\n\n.mailbox .mailbox-inbox .action-center svg:not(:last-child) {\n  margin-right: 12px;\n}\n\n.mailbox .mailbox-inbox .action-center svg.revive-mail, .mailbox .mailbox-inbox .action-center svg.permanent-delete {\n  display: none;\n}\n\n.mailbox .mailbox-inbox .action-center.tab-trash-active .nav-link svg {\n  display: none;\n}\n\n.mailbox .mailbox-inbox .action-center.tab-trash-active svg.action-important, .mailbox .mailbox-inbox .action-center.tab-trash-active svg.action-spam, .mailbox .mailbox-inbox .action-center.tab-trash-active svg.action-delete {\n  display: none;\n}\n\n.mailbox .mailbox-inbox .action-center.tab-trash-active svg.revive-mail, .mailbox .mailbox-inbox .action-center.tab-trash-active svg.permanent-delete {\n  display: inline-block;\n}\n\n.mailbox .mailbox-inbox .more-actions svg.feather-more-vertical {\n  margin-right: 0;\n}\n\n.mailbox .mailbox-inbox .message-box {\n  padding: 0 0 0 0;\n}\n\n.mailbox .mailbox-inbox .message-box .message-box-scroll {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  overflow: auto;\n  height: calc(100vh - 284px);\n}\n\n.mailbox .mailbox-inbox .mail-item.unread div.mail-item-heading .mail-item-inner .f-body .mail-title {\n  font-weight: 600;\n  color: #1b2e4b;\n}\n\n.mailbox .mailbox-inbox .mail-item.unread div.mail-item-heading .mail-item-inner .f-body .user-email {\n  font-weight: 600;\n  color: #0e1726;\n}\n\n.mailbox .mailbox-inbox .mail-item.unread div.mail-item-heading .mail-item-inner .mail-content-excerpt {\n  font-weight: 600;\n  color: #1b2e4b;\n}\n\n.mailbox .mailbox-inbox .mail-item.unread div.mail-item-heading .mail-item-inner .f-body .meta-time {\n  font-weight: 700;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading {\n  padding: 11px 10px 11px 0;\n  cursor: pointer;\n  position: relative;\n  background: #fff;\n  transition: all 0.35s ease;\n  margin: 9px;\n  border: 1px solid #e0e6ed;\n  border-radius: 6px;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading:hover {\n  background: #ebedf2;\n  border: 1px solid #151516 !important;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner {\n  padding-left: 15px;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .n-chk {\n  align-self: center;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-head {\n  align-self: center;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-head img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body {\n  align-self: center;\n  display: flex;\n  width: 100%;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body > div.meta-title-tag {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body > div.meta-mail-time {\n  display: flex;\n  justify-content: space-between;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .user-email {\n  padding: 0 15px 0 20px;\n  min-width: 215px;\n  max-width: 215px;\n  font-size: 15px;\n  color: #607d8b;\n  margin-bottom: 0;\n  letter-spacing: 0px;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  align-self: center;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .meta-time {\n  margin-bottom: 0;\n  float: right;\n  font-weight: 500;\n  font-size: 12px;\n  min-width: 75px;\n  max-width: 80px;\n  text-align: right;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .mail-title {\n  font-size: 15px;\n  color: #515365;\n  margin-bottom: 2px;\n  letter-spacing: 0px;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .tags {\n  position: relative;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .tags span {\n  display: none;\n  margin-left: 11px;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading.personal .mail-item-inner .f-body .tags span.g-dot-primary, .mailbox .mailbox-inbox .mail-item div.mail-item-heading.work .mail-item-inner .f-body .tags span.g-dot-warning, .mailbox .mailbox-inbox .mail-item div.mail-item-heading.social .mail-item-inner .f-body .tags span.g-dot-success, .mailbox .mailbox-inbox .mail-item div.mail-item-heading.private .mail-item-inner .f-body .tags span.g-dot-danger {\n  display: inline-block;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .tags span[class*=g-dot-]:before {\n  top: -11px;\n  left: -13px;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .mail-content-excerpt {\n  font-size: 14px;\n  margin-bottom: 0;\n  color: #607d8b;\n  margin-left: 0;\n  margin-right: 0;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  width: calc(100vw - 830px);\n  align-self: center;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .mail-content-excerpt svg.attachment-indicator {\n  width: 18px;\n  height: 18px;\n  margin-right: 5px;\n  vertical-align: top;\n}\n\n.mailbox .mailbox-inbox .mail-item.sentmail div.mail-item-heading .mail-item-inner .mail-content-excerpt, .mailbox .mailbox-inbox .mail-item.draft div.mail-item-heading .mail-item-inner .mail-content-excerpt {\n  margin-left: 31px;\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .attachments {\n  width: calc(100vw - 830px);\n  margin: 0 auto;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  width: calc(100vw - 830px);\n}\n\n.mailbox .mailbox-inbox .mail-item div.mail-item-heading .attachments span {\n  display: inline-block;\n  border: 1px solid #bfc9d4;\n  padding: 1px 11px;\n  border-radius: 30px;\n  color: #3b3f5c;\n  background: transparent;\n  font-size: 12px;\n  margin-right: 3px;\n  font-weight: 700;\n  margin-bottom: 2px;\n  letter-spacing: 0px;\n  max-width: 96px;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n}\n\n.mailbox .content-box {\n  background-color: rgb(249, 249, 249);\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 0px;\n  left: auto;\n  right: -46px;\n  overflow: hidden;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.mailbox .content-box .msg-close {\n  padding: 13px;\n  background: #fff;\n  box-shadow: 0px 2px 4px rgba(126, 142, 177, 0.12);\n}\n\n.mailbox .content-box svg.close-message {\n  font-size: 15px;\n  color: #3b3f5c;\n  padding: 3px;\n  align-self: center;\n  cursor: pointer;\n  margin-right: 12px;\n}\n\n.mailbox .content-box .mail-title {\n  font-size: 24px;\n  font-weight: 600;\n  color: #4361ee;\n  margin-bottom: 0;\n  align-self: center;\n}\n\n.mailbox .mailbox-inbox .content-scroll {\n  position: relative;\n  height: calc(100vh - 234px);\n}\n\n.mailbox .mailbox-inbox .mail-content-container {\n  position: relative;\n  height: auto;\n  overflow: auto;\n  padding: 25px;\n  border-radius: 6px;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .user-info img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 8px;\n  border: 3px solid #ebedf2;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .user-info .avatar {\n  margin-right: 8px;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .user-info .meta-title-tag .mail-usr-name {\n  margin-bottom: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #2196f3;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .user-info .user-email {\n  margin-bottom: 0;\n  font-weight: 600;\n  display: inline-block;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .user-info .user-email span {\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .user-info .user-cc-mail {\n  margin-bottom: 0;\n  font-weight: 600;\n  margin-left: 8px;\n  display: inline-block;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .user-info .user-cc-mail span {\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .user-info .meta-mail-time .meta-time {\n  display: inline-block;\n  font-weight: 700;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .mail-content-meta-date {\n  font-size: 13px;\n  font-weight: 600;\n  color: #3b3f5c;\n  display: inline-block;\n  font-weight: 700;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .action-btns a {\n  margin-right: 20px;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .action-btns svg {\n  color: #888ea8;\n  font-weight: 600;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .action-btns svg.restore {\n  position: relative;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .action-btns svg.restore:after {\n  content: \"\";\n  height: 28px;\n  width: 2px;\n  background: #888ea8;\n  position: absolute;\n  border-radius: 50px;\n  left: 9px;\n  transform: rotate(30deg);\n  top: -3px;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .mail-content-title {\n  font-weight: 600;\n  font-size: 20px;\n  color: #515365;\n  margin-bottom: 25px;\n}\n\n.mailbox .mailbox-inbox .mail-content-container p {\n  font-size: 14px;\n  color: #3b3f5c;\n}\n\n.mailbox .mailbox-inbox .mail-content-container p.mail-content {\n  padding-top: 45px;\n  border-top: 1px solid #e0e6ed;\n  margin-top: 20px;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .attachments {\n  margin-top: 55px;\n  margin-bottom: 0;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .attachments .attachments-section-title {\n  font-weight: 600;\n  color: #515365;\n  font-size: 16px;\n  border-bottom: 1px solid #e0e6ed;\n  padding-bottom: 9px;\n  margin-bottom: 20px;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .attachment {\n  display: inline-block;\n  padding: 9px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  min-width: 150px;\n  max-width: 235px;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .attachment svg {\n  font-size: 18px;\n  margin-right: 13px;\n  color: #805dca;\n  align-self: center;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .attachment .file-name {\n  color: #3b3f5c;\n  font-size: 12px;\n  font-weight: 700;\n  margin-bottom: 0;\n  word-break: break-word;\n}\n\n.mailbox .mailbox-inbox .mail-content-container .attachment .file-size {\n  color: #3b3f5c;\n  font-size: 11px;\n  text-align: left;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n\n#editor-container {\n  height: 200px;\n}\n\n.ql-toolbar.ql-snow {\n  border: 1px solid #e0e6ed;\n  margin-top: 30px;\n}\n\n.ql-container.ql-snow {\n  border: 1px solid #e0e6ed;\n}\n\n.modal-content {\n  border: none;\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);\n}\n\n.modal-content svg.close {\n  position: absolute;\n  right: -7px;\n  top: -8px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 2px;\n  background: #fff;\n  border-radius: 5px;\n  opacity: 1;\n  color: #2196f3;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: 0.6s;\n}\n\n.modal-content svg.close:hover {\n  box-shadow: none;\n  transition: 0.6s;\n  opacity: 1 !important;\n}\n\n.compose-box {\n  /*background-color: #fff;*/\n  border-radius: 6px;\n}\n\n.compose-box .compose-content form .validation-text {\n  display: none;\n  color: #e7515a;\n  font-weight: 600;\n  text-align: left;\n  margin-top: 6px;\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.compose-box .compose-content form .mail-form p {\n  font-weight: 700;\n  color: #3b3f5c;\n  font-size: 16px;\n  margin-bottom: 0;\n  align-self: center;\n}\n\n.compose-box .compose-content form .mail-form select {\n  padding: 5px;\n  font-weight: 700;\n  color: #4361ee;\n  margin-left: 10px;\n  border-radius: 6px;\n  border: 1px solid #d3d3d3;\n}\n\n.compose-box .compose-content form .mail-to svg,\n.compose-box .compose-content form .mail-cc svg,\n.compose-box .compose-content form .mail-subject svg {\n  align-self: center;\n  font-size: 19px;\n  margin-right: 14px;\n  color: #4361ee;\n  font-weight: 600;\n}\n\n.compose-box .compose-content form #editor-container h1,\n.compose-box .compose-content form #editor-container p {\n  color: #3b3f5c;\n}\n\n#composeMailModal .modal-footer .btn[data-dismiss=modal] {\n  background-color: #fff;\n  color: #4361ee;\n  font-weight: 700;\n  border: 1px solid #e8e8e8;\n  padding: 10px 25px;\n}\n\n#composeMailModal .modal-footer .btn[data-dismiss=modal] svg {\n  font-size: 11px;\n  font-weight: 600;\n  margin-right: 8px;\n}\n\n#composeMailModal .modal-footer #btn-reply,\n#composeMailModal .modal-footer #btn-fwd,\n#composeMailModal .modal-footer #btn-send {\n  background-color: #4361ee;\n  color: #fff;\n  font-weight: 600;\n  border: 1px solid #4361ee;\n  padding: 10px 25px;\n}\n\n#composeMailModal .modal-footer #btn-reply.disabled,\n#composeMailModal .modal-footer #btn-fwd.disabled,\n#composeMailModal .modal-footer #btn-send.disabled {\n  opacity: 0.53;\n}\n\n#composeMailModal .modal-footer #btn-save,\n#composeMailModal .modal-footer #btn-reply-save,\n#composeMailModal .modal-footer #btn-fwd-save {\n  background-color: #009688;\n  color: #fff;\n  font-weight: 600;\n  border: 1px solid #e0e6ed;\n  padding: 10px 25px;\n}\n\n@keyframes fadeInUp {\n  from {\n    transform: translate3d(0, 40px, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeInUp {\n  from {\n    transform: translate3d(0, 40px, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n}\n\n.fadeInUp {\n  opacity: 0;\n  animation-name: fadeInUp;\n  -webkit-animation-name: fadeInUp;\n}\n\n@media (min-width: 992px) {\n  .main-container:not(.sidebar-closed) .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .mail-content-excerpt {\n    width: calc(100vw - 857px);\n  }\n  .main-container:not(.sidebar-closed) .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .user-email {\n    min-width: 170px;\n    max-width: 170px;\n  }\n  .main-container:not(.sidebar-closed) .mailbox-inbox .mail-item div.mail-item-heading .attachments {\n    width: calc(100vw - 940px);\n  }\n  .mailbox-tooltip {\n    left: 16px !important;\n  }\n}\n@media (max-width: 991px) {\n  .mailbox .mail-box-container {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .mailbox .mailbox-inbox .search input {\n    border-left: 1px solid #e0e6ed;\n  }\n  .mailbox .tab-title {\n    position: absolute;\n    z-index: 4;\n    left: -147px;\n    width: 0;\n    background: #fff;\n  }\n  .mailbox .tab-title.mail-menu-show {\n    left: 0;\n    width: 100%;\n    min-width: 111px;\n  }\n  .mailbox .mailbox-inbox {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .mailbox .mailbox-inbox .mail-menu {\n    margin: 12px 13px 8px 13px;\n  }\n  .mailbox .mailbox-inbox .search {\n    background-color: #fff;\n    padding: 0;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading:hover {\n    background: transparent;\n    border: none !important;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner {\n    padding-left: 14px;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .mail-content-excerpt {\n    width: calc(100vw - 527px);\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .user-email {\n    min-width: 170px;\n    max-width: 170px;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .attachments {\n    width: calc(100vw - 527px);\n    padding: 0 15px;\n  }\n}\n@media (max-width: 767px) {\n  .new-control.new-checkbox .new-control-indicator {\n    margin-right: 10px;\n  }\n  .mailbox .mailbox-inbox {\n    display: block;\n  }\n  .mailbox .mailbox-inbox .action-center {\n    padding: 14px 14px;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading {\n    padding: 20px 10px 20px 0;\n    border: none;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-head img {\n    width: 35px;\n    height: 35px;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body {\n    display: block;\n  }\n  .mailbox .mailbox-inbox .message-box {\n    width: 100%;\n    margin-bottom: 40px;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body > div.meta-title-tag {\n    padding-left: 10px;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .user-email {\n    padding: 0 0 0 10px;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .meta-time {\n    min-width: auto;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .mail-content-excerpt {\n    width: calc(100vw - 192px);\n    padding-right: 7px;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .tags {\n    position: absolute;\n    right: 5px;\n    top: 23px;\n    width: 60px;\n  }\n  .mailbox .mailbox-inbox .mail-item.sentmail div.mail-item-heading .mail-item-inner .mail-content-excerpt, .mailbox .mailbox-inbox .mail-item.draft div.mail-item-heading .mail-item-inner .mail-content-excerpt {\n    margin-left: 0;\n    width: calc(100vw - 178px);\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .attachments {\n    width: calc(100vw - 192px);\n    padding: 0 11px;\n  }\n  .mailbox .mailbox-inbox .mail-item.sentmail div.mail-item-heading .attachments {\n    margin: 0 0 0 40px;\n  }\n}\n@media (max-width: 575px) {\n  .mailbox .mailbox-inbox .message-box {\n    margin-bottom: 0;\n  }\n  .mailbox .mailbox-inbox .mail-content-container .user-info {\n    display: block !important;\n  }\n  .mailbox .mailbox-inbox .mail-content-container .user-info img {\n    margin-bottom: 10px;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body > div {\n    display: block;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body > div.meta-mail-time {\n    display: block;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .meta-time {\n    margin-bottom: 0;\n    float: none;\n  }\n  .mailbox .mailbox-inbox .mail-item div.mail-item-heading .mail-item-inner .mail-content-excerpt {\n    margin-left: 0;\n    margin-right: 0;\n    width: calc(100vw - 215px);\n  }\n  .mailbox .mailbox-inbox .mail-content-container .action-btns a {\n    margin-right: 0;\n  }\n  .compose-box .compose-content form .mail-form select {\n    margin-left: 3px;\n    margin-top: 10px;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /* IE10+ CSS styles go here */\n  .tab-title {\n    width: 100%;\n  }\n  .mailbox .mailbox-inbox .mail-content-container .attachment .media .media-body {\n    flex: none;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.ql-container,\n.ql-editor {\n    min-height: inherit;\n}\n.ql-editor {\n    max-height: 200px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n    border: 1px solid transparent;\n    color: #4361ee;\n}\n.ql-snow .ql-stroke {\n    fill: none;\n    stroke: #4361ee;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n    fill: #4361ee;\n}\n.ql-toolbar.ql-snow {\n    border: 1px solid #bfc9d4;\n    box-sizing: border-box;\n    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n    padding: 8px;\n    border-radius: 6px;\n}\n.ql-container.ql-snow {\n    border-top: 0px;\n    margin-top: 28px;\n    padding: 13px 0;\n    border: 1px solid #bfc9d4 !important;\n    border-radius: 6px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/apps/mailbox.scss":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/sass/apps/mailbox.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_mailbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./mailbox.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/mailbox.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_mailbox_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_mailbox_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mailbox.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/apps/mailbox.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/apps/mailbox.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mailbox_vue_vue_type_template_id_17dfbebe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailbox.vue?vue&type=template&id=17dfbebe& */ "./resources/js/src/views/apps/mailbox.vue?vue&type=template&id=17dfbebe&");
/* harmony import */ var _mailbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mailbox.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/mailbox.vue?vue&type=script&lang=js&");
/* harmony import */ var _mailbox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mailbox.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/apps/mailbox.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mailbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mailbox_vue_vue_type_template_id_17dfbebe___WEBPACK_IMPORTED_MODULE_0__.render,
  _mailbox_vue_vue_type_template_id_17dfbebe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/mailbox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/mailbox.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/apps/mailbox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mailbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/mailbox.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/mailbox.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mailbox.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/src/views/apps/mailbox.vue?vue&type=template&id=17dfbebe&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/apps/mailbox.vue?vue&type=template&id=17dfbebe& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_template_id_17dfbebe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_template_id_17dfbebe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_template_id_17dfbebe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mailbox.vue?vue&type=template&id=17dfbebe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=template&id=17dfbebe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=template&id=17dfbebe&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/mailbox.vue?vue&type=template&id=17dfbebe& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "layout-px-spacing mailbox" },
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
                      [_c("span", [_vm._v("Mailbox")])]
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
        _c("div", { staticClass: "col-xl-12 col-lg-12 col-md-12" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-12 col-md-12" },
              [
                _c("div", { staticClass: "mail-box-container" }, [
                  _c("div", {
                    staticClass: "mail-overlay",
                    class: { "mail-overlay-show": _vm.is_show_mail_menu },
                    on: {
                      click: function ($event) {
                        _vm.is_show_mail_menu = false
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-title",
                      class: { "mail-menu-show": _vm.is_show_mail_menu },
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-md-12 col-sm-12 col-12 text-center mail-btn-container",
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-block",
                                attrs: {
                                  id: "btn-compose-mail",
                                  href: "javascript:void(0);",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.open_mail("add")
                                  },
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "feather feather-plus",
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
                                        x1: "12",
                                        y1: "5",
                                        x2: "12",
                                        y2: "19",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("line", {
                                      attrs: {
                                        x1: "5",
                                        y1: "12",
                                        x2: "19",
                                        y2: "12",
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
                          "div",
                          {
                            staticClass:
                              "col-md-12 col-sm-12 col-12 mail-categories-container",
                          },
                          [
                            _c(
                              "perfect-scrollbar",
                              { staticClass: "mail-sidebar-scroll" },
                              [
                                _c(
                                  "ul",
                                  {
                                    staticClass: "nav nav-pills d-block",
                                    attrs: { id: "pills-tab", role: "tablist" },
                                  },
                                  [
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link list-actions",
                                          class: {
                                            active: _vm.selected_tab == "inbox",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.tab_changed("inbox")
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-inbox",
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
                                              _c("polyline", {
                                                attrs: {
                                                  points:
                                                    "22 12 16 12 14 15 10 15 8 12 2 12",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("path", {
                                                attrs: {
                                                  d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
                                                },
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "nav-names" },
                                            [_vm._v("Inbox")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "mail-badge badge" },
                                            [
                                              _vm._v(
                                                "\n                                                        " +
                                                  _vm._s(
                                                    _vm.mail_list &&
                                                      _vm.mail_list.filter(
                                                        function (d) {
                                                          return (
                                                            !d.type ||
                                                            d.type == "inbox"
                                                          )
                                                        }
                                                      ).length
                                                  ) +
                                                  "\n                                                    "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link list-actions",
                                          class: {
                                            active:
                                              _vm.selected_tab == "important",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.tab_changed(
                                                "important"
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-star",
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
                                              _c("polygon", {
                                                attrs: {
                                                  points:
                                                    "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
                                                },
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "nav-names" },
                                            [_vm._v("Important")]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link list-actions",
                                          class: {
                                            active: _vm.selected_tab == "draft",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.tab_changed("draft")
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-mail",
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
                                              _c("path", {
                                                attrs: {
                                                  d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("polyline", {
                                                attrs: {
                                                  points: "22,6 12,13 2,6",
                                                },
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "nav-names" },
                                            [_vm._v("Draft")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "mail-badge badge" },
                                            [
                                              _vm._v(
                                                "\n                                                        " +
                                                  _vm._s(
                                                    _vm.mail_list &&
                                                      _vm.mail_list.filter(
                                                        function (d) {
                                                          return (
                                                            d.type == "draft"
                                                          )
                                                        }
                                                      ).length
                                                  ) +
                                                  "\n                                                    "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link list-actions",
                                          class: {
                                            active:
                                              _vm.selected_tab == "sent_mail",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.tab_changed(
                                                "sent_mail"
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-send",
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
                                              _c("line", {
                                                attrs: {
                                                  x1: "22",
                                                  y1: "2",
                                                  x2: "11",
                                                  y2: "13",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("polygon", {
                                                attrs: {
                                                  points:
                                                    "22 2 15 22 11 13 2 9 22 2",
                                                },
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "nav-names" },
                                            [_vm._v(" Sent Mail")]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link list-actions",
                                          class: {
                                            active: _vm.selected_tab == "spam",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.tab_changed("spam")
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-alert-circle",
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
                                                  r: "10",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("line", {
                                                attrs: {
                                                  x1: "12",
                                                  y1: "8",
                                                  x2: "12",
                                                  y2: "12",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("line", {
                                                attrs: {
                                                  x1: "12",
                                                  y1: "16",
                                                  x2: "12",
                                                  y2: "16",
                                                },
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "nav-names" },
                                            [_vm._v("Spam")]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link list-actions",
                                          class: {
                                            active: _vm.selected_tab == "trash",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.tab_changed("trash")
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-trash",
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
                                              _c("polyline", {
                                                attrs: {
                                                  points: "3 6 5 6 21 6",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("path", {
                                                attrs: {
                                                  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                                                },
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "nav-names" },
                                            [_vm._v("Trash")]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("p", { staticClass: "group-section" }, [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "feather feather-tag",
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
                                          d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("line", {
                                        attrs: {
                                          x1: "7",
                                          y1: "7",
                                          x2: "7",
                                          y2: "7",
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(
                                    "\n                                            Groups\n                                        "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "nav nav-pills d-block group-list",
                                    attrs: {
                                      id: "pills-tab2",
                                      role: "tablist",
                                    },
                                  },
                                  [
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "nav-link list-actions g-dot-primary",
                                          class: {
                                            active:
                                              _vm.selected_tab == "personal",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.tab_changed("personal")
                                            },
                                          },
                                        },
                                        [_c("span", [_vm._v("Personal")])]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "nav-link list-actions g-dot-warning",
                                          class: {
                                            active: _vm.selected_tab == "work",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.tab_changed("work")
                                            },
                                          },
                                        },
                                        [_c("span", [_vm._v("Work")])]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "nav-link list-actions g-dot-success",
                                          class: {
                                            active:
                                              _vm.selected_tab == "social",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.tab_changed("social")
                                            },
                                          },
                                        },
                                        [_c("span", [_vm._v("Social")])]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "nav-link list-actions g-dot-danger",
                                          class: {
                                            active:
                                              _vm.selected_tab == "private",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.tab_changed("private")
                                            },
                                          },
                                        },
                                        [_c("span", [_vm._v("Private")])]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
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
                      staticClass: "accordion mailbox-inbox",
                      attrs: { id: "mailbox-inbox" },
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "search" },
                        [
                          _c(
                            "a",
                            {
                              on: {
                                click: function ($event) {
                                  _vm.is_show_mail_menu = !_vm.is_show_mail_menu
                                },
                              },
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass:
                                    "feather feather-menu mail-menu d-lg-none",
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
                                      x1: "3",
                                      y1: "12",
                                      x2: "21",
                                      y2: "12",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("line", {
                                    attrs: {
                                      x1: "3",
                                      y1: "6",
                                      x2: "21",
                                      y2: "6",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("line", {
                                    attrs: {
                                      x1: "3",
                                      y1: "18",
                                      x2: "21",
                                      y2: "18",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("b-input", {
                            staticClass: "input-search",
                            attrs: { placeholder: "Search Here..." },
                            on: {
                              keyup: function ($event) {
                                return _vm.search_mails()
                              },
                            },
                            model: {
                              value: _vm.search_mail,
                              callback: function ($$v) {
                                _vm.search_mail =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "search_mail",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.selected_mail
                        ? _c("div", { staticClass: "action-center" }, [
                            _c(
                              "div",
                              {},
                              [
                                _c(
                                  "b-checkbox",
                                  {
                                    staticClass: "checkbox-primary new-control",
                                    attrs: {
                                      checked: _vm.check_all_checkbox,
                                      variant: "primary",
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.check_all($event)
                                      },
                                    },
                                  },
                                  [
                                    _c("span", { staticClass: "ml-2" }, [
                                      _vm._v("Check All"),
                                    ]),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _vm.selected_tab != "trash"
                                  ? [
                                      _c(
                                        "b-dropdown",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip",
                                              value: {
                                                customClass: "mailbox-tooltip",
                                                title: "Groups",
                                              },
                                              expression:
                                                "{ customClass: 'mailbox-tooltip', title: 'Groups' }",
                                            },
                                          ],
                                          attrs: {
                                            right: true,
                                            "toggle-tag": "a",
                                            variant: "icon-only",
                                            "menu-class": "d-icon-menu",
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
                                                          "feather feather-bell",
                                                        attrs: {
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
                                                          width: "24",
                                                          height: "24",
                                                          viewBox: "0 0 24 24",
                                                          fill: "none",
                                                          stroke:
                                                            "currentColor",
                                                          "stroke-width": "2",
                                                          "stroke-linecap":
                                                            "round",
                                                          "stroke-linejoin":
                                                            "round",
                                                        },
                                                      },
                                                      [
                                                        _c("path", {
                                                          attrs: {
                                                            d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c("path", {
                                                          attrs: {
                                                            d: "M13.73 21a2 2 0 0 1-3.46 0",
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
                                            false,
                                            820056896
                                          ),
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                "link-class":
                                                  "label-group-item label-personal position-relative g-dot-primary",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.set_group(
                                                    "personal"
                                                  )
                                                },
                                              },
                                            },
                                            [_vm._v("Personal")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                "link-class":
                                                  "label-group-item label-work position-relative g-dot-warning",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.set_group("work")
                                                },
                                              },
                                            },
                                            [_vm._v("Work")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                "link-class":
                                                  "label-group-item label-social position-relative g-dot-success",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.set_group("social")
                                                },
                                              },
                                            },
                                            [_vm._v("Social")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                "link-class":
                                                  "label-group-item label-private position-relative g-dot-danger",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.set_group(
                                                    "private"
                                                  )
                                                },
                                              },
                                            },
                                            [_vm._v("Private")]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip",
                                              value: {
                                                customClass: "mailbox-tooltip",
                                                title: "Important",
                                                placement: "top",
                                              },
                                              expression:
                                                "{ customClass: 'mailbox-tooltip', title: 'Important', placement: 'top' }",
                                            },
                                          ],
                                          on: {
                                            click: function ($event) {
                                              return _vm.set_important()
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-star action-important",
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
                                              _c("polygon", {
                                                attrs: {
                                                  points:
                                                    "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
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
                                              rawName: "v-b-tooltip",
                                              value: {
                                                customClass: "mailbox-tooltip",
                                                title: "Spam",
                                                placement: "top",
                                              },
                                              expression:
                                                "{ customClass: 'mailbox-tooltip', title: 'Spam', placement: 'top' }",
                                            },
                                          ],
                                          on: {
                                            click: function ($event) {
                                              return _vm.set_spam()
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-alert-circle action-spam",
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
                                                  r: "10",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("line", {
                                                attrs: {
                                                  x1: "12",
                                                  y1: "8",
                                                  x2: "12",
                                                  y2: "12",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("line", {
                                                attrs: {
                                                  x1: "12",
                                                  y1: "16",
                                                  x2: "12",
                                                  y2: "16",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-dropdown",
                                        {
                                          staticClass: "more-actions",
                                          attrs: {
                                            right: true,
                                            "toggle-tag": "a",
                                            variant: "icon-only",
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
                                                          "feather feather-more-vertical",
                                                        attrs: {
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
                                                          width: "24",
                                                          height: "24",
                                                          viewBox: "0 0 24 24",
                                                          fill: "none",
                                                          stroke:
                                                            "currentColor",
                                                          "stroke-width": "2",
                                                          "stroke-linecap":
                                                            "round",
                                                          "stroke-linejoin":
                                                            "round",
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
                                                            cx: "12",
                                                            cy: "5",
                                                            r: "1",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c("circle", {
                                                          attrs: {
                                                            cx: "12",
                                                            cy: "19",
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
                                            false,
                                            3600138579
                                          ),
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                "link-class":
                                                  "action-mark_as_read",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.set_action("read")
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "feather feather-book-open",
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
                                                  _c("path", {
                                                    attrs: {
                                                      d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("path", {
                                                    attrs: {
                                                      d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                              _vm._v(
                                                "\n                                                Mark as Read\n                                            "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                "link-class":
                                                  "action-mark_as_read",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.set_action(
                                                    "unread"
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "feather feather-book",
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
                                                  _c("path", {
                                                    attrs: {
                                                      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("path", {
                                                    attrs: {
                                                      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                              _vm._v(
                                                "\n                                                Mark as Unread\n                                            "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                "link-class":
                                                  "action-mark_as_read",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.set_action("trash")
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "feather feather-trash-2",
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
                                                    "data-toggle": "tooltip",
                                                    "data-placement": "top",
                                                    "data-original-title":
                                                      "Delete",
                                                  },
                                                },
                                                [
                                                  _c("polyline", {
                                                    attrs: {
                                                      points: "3 6 5 6 21 6",
                                                    },
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
                                              _vm._v(
                                                "\n                                                Trash\n                                            "
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  : [
                                      _c(
                                        "a",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip",
                                            },
                                          ],
                                          attrs: { title: "Revive Mail" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.set_action("restore")
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-activity",
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
                                              _c("polyline", {
                                                attrs: {
                                                  points:
                                                    "22 12 18 12 15 21 9 3 6 12 2 12",
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
                                              rawName: "v-b-tooltip",
                                            },
                                          ],
                                          attrs: {
                                            title: "Delete Permanently",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.set_action("delete")
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "feather feather-trash",
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
                                              _c("polyline", {
                                                attrs: {
                                                  points: "3 6 5 6 21 6",
                                                },
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
                                    ],
                              ],
                              2
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.selected_mail,
                              expression: "!selected_mail",
                            },
                          ],
                          staticClass: "message-box",
                        },
                        [
                          _c(
                            "perfect-scrollbar",
                            {
                              staticClass: "message-box-scroll",
                              attrs: { id: "ct" },
                            },
                            _vm._l(
                              _vm.filtered_mail_list,
                              function (item, index) {
                                return _c(
                                  "div",
                                  {
                                    key: item.id + "" + index,
                                    staticClass: "mail-item",
                                    class: { unread: item.is_unread },
                                    on: {
                                      click: function ($event) {
                                        return _vm.select_mail(item)
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "animated fadeInUp" },
                                      [
                                        _c("div", { staticClass: "mb-0" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "mail-item-heading",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "mail-item-inner",
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-flex" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              $event.stopPropagation()
                                                              return $event.stopPropagation()
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _c("b-checkbox", {
                                                            staticClass:
                                                              "checkbox-primary new-control mr-2",
                                                            attrs: {
                                                              variant:
                                                                "primary",
                                                              value: item.id,
                                                            },
                                                            model: {
                                                              value: _vm.ids,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.ids = $$v
                                                                },
                                                              expression: "ids",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "f-head",
                                                        },
                                                        [
                                                          item.path
                                                            ? _c("img", {
                                                                staticClass:
                                                                  "user-profile",
                                                                attrs: {
                                                                  src: __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./" +
                                                                    item.path),
                                                                  alt: "avatar",
                                                                },
                                                              })
                                                            : item.first_name
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "avatar avatar-sm",
                                                                },
                                                                [
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "avatar-title rounded-circle",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                        " +
                                                                          _vm._s(
                                                                            item.first_name.charAt(
                                                                              0
                                                                            ) +
                                                                              "" +
                                                                              item.last_name.charAt(
                                                                                0
                                                                              )
                                                                          ) +
                                                                          "\n                                                                    "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : _c("img", {
                                                                staticClass:
                                                                  "user-profile",
                                                                attrs: {
                                                                  src: __webpack_require__(/*! @/assets/images/user-avtar.svg */ "./resources/js/src/assets/images/user-avtar.svg"),
                                                                  alt: "avatar",
                                                                },
                                                              }),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "f-body",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "meta-mail-time",
                                                            },
                                                            [
                                                              item.first_name
                                                                ? _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "user-email",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          item.first_name +
                                                                            " " +
                                                                            item.last_name
                                                                        )
                                                                      ),
                                                                    ]
                                                                  )
                                                                : _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "user-email",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          item.email
                                                                        )
                                                                      ),
                                                                    ]
                                                                  ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "meta-title-tag",
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "mail-content-excerpt",
                                                                },
                                                                [
                                                                  item.attachments &&
                                                                  item
                                                                    .attachments
                                                                    .length
                                                                    ? _c(
                                                                        "svg",
                                                                        {
                                                                          staticClass:
                                                                            "feather feather-paperclip attachment-indicator",
                                                                          attrs:
                                                                            {
                                                                              xmlns:
                                                                                "http://www.w3.org/2000/svg",
                                                                              width:
                                                                                "24",
                                                                              height:
                                                                                "24",
                                                                              viewBox:
                                                                                "0 0 24 24",
                                                                              fill: "none",
                                                                              stroke:
                                                                                "currentColor",
                                                                              "stroke-width":
                                                                                "2",
                                                                              "stroke-linecap":
                                                                                "round",
                                                                              "stroke-linejoin":
                                                                                "round",
                                                                            },
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "path",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48",
                                                                                },
                                                                            }
                                                                          ),
                                                                        ]
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "mail-title",
                                                                    },
                                                                    [
                                                                      item.type ==
                                                                      "draft"
                                                                        ? [
                                                                            _vm._v(
                                                                              "\n                                                                                Draft:\n                                                                            "
                                                                            ),
                                                                          ]
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        "\n                                                                            " +
                                                                          _vm._s(
                                                                            item.title
                                                                          ) +
                                                                          " -\n                                                                        "
                                                                      ),
                                                                    ],
                                                                    2
                                                                  ),
                                                                  _vm._v(
                                                                    "\n                                                                        " +
                                                                      _vm._s(
                                                                        item.display_description
                                                                      ) +
                                                                      "\n                                                                    "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "tags",
                                                                },
                                                                [
                                                                  item.group ==
                                                                  "personal"
                                                                    ? _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "g-dot-primary d-inline-block",
                                                                        }
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  item.group ==
                                                                  "work"
                                                                    ? _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "g-dot-warning d-inline-block",
                                                                        }
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  item.group ==
                                                                  "social"
                                                                    ? _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "g-dot-success d-inline-block",
                                                                        }
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  item.group ==
                                                                  "private"
                                                                    ? _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "g-dot-danger d-inline-block",
                                                                        }
                                                                      )
                                                                    : _vm._e(),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "meta-time align-self-center",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.show_time(
                                                                        item
                                                                      )
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              item.attachments &&
                                              item.attachments.length
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "attachments",
                                                    },
                                                    _vm._l(
                                                      item.attachments,
                                                      function (files, ind) {
                                                        return _c(
                                                          "span",
                                                          {
                                                            key:
                                                              "fl" +
                                                              index +
                                                              ind,
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(files.name)
                                                            ),
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                : _vm._e(),
                                            ]
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]
                                )
                              }
                            ),
                            0
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.selected_mail
                        ? _c(
                            "div",
                            {
                              staticClass: "content-box",
                              class: { "w-100 left-0": _vm.selected_mail },
                            },
                            [
                              _c("div", { staticClass: "d-flex msg-close" }, [
                                _c(
                                  "a",
                                  {
                                    on: {
                                      click: function ($event) {
                                        return _vm.select_mail()
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "feather feather-arrow-left close-message",
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
                                            x1: "19",
                                            y1: "12",
                                            x2: "5",
                                            y2: "12",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("polyline", {
                                          attrs: { points: "12 19 5 12 12 5" },
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("h2", { staticClass: "mail-title" }, [
                                  _vm._v(_vm._s(_vm.selected_mail.title)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "perfect-scrollbar",
                                { staticClass: "content-scroll" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "mail-content-container" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-between mb-3",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "d-flex user-info" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "f-head" },
                                                [
                                                  _vm.selected_mail.path
                                                    ? _c("img", {
                                                        staticClass:
                                                          "user-profile",
                                                        attrs: {
                                                          src: __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./" +
                                                            _vm.selected_mail
                                                              .path),
                                                          alt: "avatar",
                                                        },
                                                      })
                                                    : _vm.selected_mail
                                                        .first_name
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "avatar avatar-sm",
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "avatar-title rounded-circle",
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                            " +
                                                                  _vm._s(
                                                                    _vm.selected_mail.first_name.charAt(
                                                                      0
                                                                    ) +
                                                                      "" +
                                                                      _vm.selected_mail.last_name.charAt(
                                                                        0
                                                                      )
                                                                  ) +
                                                                  "\n                                                        "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      )
                                                    : _c("img", {
                                                        staticClass:
                                                          "user-profile",
                                                        attrs: {
                                                          src: __webpack_require__(/*! @/assets/images/user-avtar.svg */ "./resources/js/src/assets/images/user-avtar.svg"),
                                                          alt: "avatar",
                                                        },
                                                      }),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "f-body" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "meta-title-tag",
                                                    },
                                                    [
                                                      _vm.selected_mail
                                                        .first_name
                                                        ? _c(
                                                            "h4",
                                                            {
                                                              staticClass:
                                                                "mail-usr-name",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm
                                                                    .selected_mail
                                                                    .first_name +
                                                                    " " +
                                                                    _vm
                                                                      .selected_mail
                                                                      .last_name
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : _c(
                                                            "h4",
                                                            {
                                                              staticClass:
                                                                "mail-usr-name",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm
                                                                    .selected_mail
                                                                    .email
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "meta-mail-time",
                                                    },
                                                    [
                                                      _c(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "user-email",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.selected_mail
                                                                .email
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "mail-content-meta-date current-recent-mail ml-1",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.selected_mail
                                                                .date
                                                            ) + " -"
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "meta-time align-self-center ml-1",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.selected_mail
                                                                .time
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "action-btns text-nowrap",
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  directives: [
                                                    {
                                                      name: "b-tooltip",
                                                      rawName: "v-b-tooltip",
                                                    },
                                                  ],
                                                  attrs: {
                                                    href: "javascript:void(0);",
                                                    title: "Reply",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.open_mail(
                                                        "reply",
                                                        _vm.selected_mail
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      staticClass:
                                                        "feather feather-corner-up-left reply",
                                                      attrs: {
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round",
                                                        "stroke-linejoin":
                                                          "round",
                                                      },
                                                    },
                                                    [
                                                      _c("polyline", {
                                                        attrs: {
                                                          points:
                                                            "9 14 4 9 9 4",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d: "M20 20v-7a4 4 0 0 0-4-4H4",
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
                                                      rawName: "v-b-tooltip",
                                                    },
                                                  ],
                                                  attrs: {
                                                    href: "javascript:void(0);",
                                                    title: "Forward",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.open_mail(
                                                        "forward",
                                                        _vm.selected_mail
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      staticClass:
                                                        "feather feather-corner-up-right forward",
                                                      attrs: {
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round",
                                                        "stroke-linejoin":
                                                          "round",
                                                      },
                                                    },
                                                    [
                                                      _c("polyline", {
                                                        attrs: {
                                                          points:
                                                            "15 14 20 9 15 4",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d: "M4 20v-7a4 4 0 0 1 4-4h12",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.selected_mail.description
                                          ),
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mt-4" }, [
                                        _vm._v("Best Regards,"),
                                      ]),
                                      _vm._v(" "),
                                      _vm.selected_mail.first_name
                                        ? _c("p", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.selected_mail.first_name +
                                                  " " +
                                                  _vm.selected_mail.last_name
                                              )
                                            ),
                                          ])
                                        : _c("p", [
                                            _vm._v(
                                              _vm._s(_vm.selected_mail.email)
                                            ),
                                          ]),
                                      _vm._v(" "),
                                      _vm.selected_mail.attachments &&
                                      _vm.selected_mail.attachments.length
                                        ? _c(
                                            "div",
                                            { staticClass: "attachments" },
                                            [
                                              _c(
                                                "h6",
                                                {
                                                  staticClass:
                                                    "attachments-section-title",
                                                },
                                                [_vm._v("Attachments")]
                                              ),
                                              _vm._v(" "),
                                              _vm._l(
                                                _vm.selected_mail.attachments,
                                                function (files, ind) {
                                                  return _c(
                                                    "div",
                                                    {
                                                      key:
                                                        "fle" +
                                                        _vm.selected_mail.id +
                                                        ind,
                                                      staticClass:
                                                        "attachment file-pdf file-folder file-img",
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "media",
                                                        },
                                                        [
                                                          files.type == "image"
                                                            ? [
                                                                _c(
                                                                  "svg",
                                                                  {
                                                                    staticClass:
                                                                      "feather feather-image",
                                                                    attrs: {
                                                                      xmlns:
                                                                        "http://www.w3.org/2000/svg",
                                                                      width:
                                                                        "24",
                                                                      height:
                                                                        "24",
                                                                      viewBox:
                                                                        "0 0 24 24",
                                                                      fill: "none",
                                                                      stroke:
                                                                        "currentColor",
                                                                      "stroke-width":
                                                                        "2",
                                                                      "stroke-linecap":
                                                                        "round",
                                                                      "stroke-linejoin":
                                                                        "round",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c("rect", {
                                                                      attrs: {
                                                                        x: "3",
                                                                        y: "3",
                                                                        width:
                                                                          "18",
                                                                        height:
                                                                          "18",
                                                                        rx: "2",
                                                                        ry: "2",
                                                                      },
                                                                    }),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "circle",
                                                                      {
                                                                        attrs: {
                                                                          cx: "8.5",
                                                                          cy: "8.5",
                                                                          r: "1.5",
                                                                        },
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "polyline",
                                                                      {
                                                                        attrs: {
                                                                          points:
                                                                            "21 15 16 10 5 21",
                                                                        },
                                                                      }
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            : files.type ==
                                                              "folder"
                                                            ? [
                                                                _c(
                                                                  "svg",
                                                                  {
                                                                    staticClass:
                                                                      "feather feather-folder",
                                                                    attrs: {
                                                                      xmlns:
                                                                        "http://www.w3.org/2000/svg",
                                                                      width:
                                                                        "24",
                                                                      height:
                                                                        "24",
                                                                      viewBox:
                                                                        "0 0 24 24",
                                                                      fill: "none",
                                                                      stroke:
                                                                        "currentColor",
                                                                      "stroke-width":
                                                                        "2",
                                                                      "stroke-linecap":
                                                                        "round",
                                                                      "stroke-linejoin":
                                                                        "round",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c("path", {
                                                                      attrs: {
                                                                        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
                                                                      },
                                                                    }),
                                                                  ]
                                                                ),
                                                              ]
                                                            : files.type ==
                                                              "zip"
                                                            ? [
                                                                _c(
                                                                  "svg",
                                                                  {
                                                                    staticClass:
                                                                      "feather feather-package",
                                                                    attrs: {
                                                                      xmlns:
                                                                        "http://www.w3.org/2000/svg",
                                                                      width:
                                                                        "24",
                                                                      height:
                                                                        "24",
                                                                      viewBox:
                                                                        "0 0 24 24",
                                                                      fill: "none",
                                                                      stroke:
                                                                        "currentColor",
                                                                      "stroke-width":
                                                                        "2",
                                                                      "stroke-linecap":
                                                                        "round",
                                                                      "stroke-linejoin":
                                                                        "round",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c("line", {
                                                                      attrs: {
                                                                        x1: "16.5",
                                                                        y1: "9.4",
                                                                        x2: "7.5",
                                                                        y2: "4.21",
                                                                      },
                                                                    }),
                                                                    _vm._v(" "),
                                                                    _c("path", {
                                                                      attrs: {
                                                                        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
                                                                      },
                                                                    }),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "polyline",
                                                                      {
                                                                        attrs: {
                                                                          points:
                                                                            "3.27 6.96 12 12.01 20.73 6.96",
                                                                        },
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c("line", {
                                                                      attrs: {
                                                                        x1: "12",
                                                                        y1: "22.08",
                                                                        x2: "12",
                                                                        y2: "12",
                                                                      },
                                                                    }),
                                                                  ]
                                                                ),
                                                              ]
                                                            : [
                                                                _c(
                                                                  "svg",
                                                                  {
                                                                    staticClass:
                                                                      "feather feather-file-text",
                                                                    attrs: {
                                                                      xmlns:
                                                                        "http://www.w3.org/2000/svg",
                                                                      width:
                                                                        "24",
                                                                      height:
                                                                        "24",
                                                                      viewBox:
                                                                        "0 0 24 24",
                                                                      fill: "none",
                                                                      stroke:
                                                                        "currentColor",
                                                                      "stroke-width":
                                                                        "2",
                                                                      "stroke-linecap":
                                                                        "round",
                                                                      "stroke-linejoin":
                                                                        "round",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c("path", {
                                                                      attrs: {
                                                                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                                                                      },
                                                                    }),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "polyline",
                                                                      {
                                                                        attrs: {
                                                                          points:
                                                                            "14 2 14 8 20 8",
                                                                        },
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c("line", {
                                                                      attrs: {
                                                                        x1: "16",
                                                                        y1: "13",
                                                                        x2: "8",
                                                                        y2: "13",
                                                                      },
                                                                    }),
                                                                    _vm._v(" "),
                                                                    _c("line", {
                                                                      attrs: {
                                                                        x1: "16",
                                                                        y1: "17",
                                                                        x2: "8",
                                                                        y2: "17",
                                                                      },
                                                                    }),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "polyline",
                                                                      {
                                                                        attrs: {
                                                                          points:
                                                                            "10 9 9 9 8 9",
                                                                        },
                                                                      }
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "media-body",
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "file-name",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      files.name
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "file-size",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      files.size
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  )
                                                }
                                              ),
                                            ],
                                            2
                                          )
                                        : _vm._e(),
                                    ]
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    attrs: {
                      centered: "",
                      id: "composeMailModal",
                      "hide-header": true,
                      "content-class": "mailbox-popup",
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "modal-footer",
                        fn: function () {
                          return [
                            _vm.mail_popup_type == "add" ||
                            _vm.mail_popup_type == "draft"
                              ? _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      id: "btn-save",
                                      variant: "default",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.save_mail("save")
                                      },
                                    },
                                  },
                                  [_vm._v("Save")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.mail_popup_type == "reply"
                              ? _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      id: "btn-reply-save",
                                      variant: "default",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.save_mail("save_reply")
                                      },
                                    },
                                  },
                                  [_vm._v("Save Reply")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.mail_popup_type == "forward"
                              ? _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      id: "btn-fwd-save",
                                      variant: "default",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.save_mail("save_forward")
                                      },
                                    },
                                  },
                                  [_vm._v("Save Fwd")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  variant: "default",
                                  "data-dismiss": "modal",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.$bvModal.hide("composeMailModal")
                                  },
                                },
                              },
                              [
                                _c("i", { staticClass: "flaticon-cancel-12" }),
                                _vm._v(" Discard"),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.mail_popup_type == "reply"
                              ? _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      id: "btn-reply",
                                      variant: "primary",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.save_mail("reply")
                                      },
                                    },
                                  },
                                  [_vm._v("Reply")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.mail_popup_type == "forward"
                              ? _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      id: "btn-fwd",
                                      variant: "primary",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.save_mail("forward")
                                      },
                                    },
                                  },
                                  [_vm._v("Forward")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.mail_popup_type == "add" ||
                            _vm.mail_popup_type == "draft"
                              ? _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      id: "btn-send",
                                      variant: "primary",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.save_mail("send")
                                      },
                                    },
                                  },
                                  [_vm._v("Send")]
                                )
                              : _vm._e(),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  },
                  [
                    _c(
                      "div",
                      {
                        on: {
                          click: function ($event) {
                            return _vm.$bvModal.hide("composeMailModal")
                          },
                        },
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-x close",
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
                              "data-dismiss": "modal",
                            },
                          },
                          [
                            _c("line", {
                              attrs: { x1: "18", y1: "6", x2: "6", y2: "18" },
                            }),
                            _vm._v(" "),
                            _c("line", {
                              attrs: { x1: "6", y1: "6", x2: "18", y2: "18" },
                            }),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "compose-box" }, [
                      _c("div", { staticClass: "compose-content" }, [
                        _c(
                          "form",
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "d-flex mb-4 mail-form" },
                                  [
                                    _c("p", [_vm._v("From:")]),
                                    _vm._v(" "),
                                    _c(
                                      "b-select",
                                      {
                                        attrs: { size: "sm" },
                                        model: {
                                          value: _vm.params.from,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.params, "from", $$v)
                                          },
                                          expression: "params.from",
                                        },
                                      },
                                      [
                                        _c(
                                          "b-select-option",
                                          { attrs: { value: "info@mail.com" } },
                                          [_vm._v("Info <info@mail.com>")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-select-option",
                                          {
                                            attrs: { value: "shaun@mail.com" },
                                          },
                                          [
                                            _vm._v(
                                              "Shaun Park <shaun@mail.com>"
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c(
                                  "div",
                                  { staticClass: "d-flex mb-4 mail-to" },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "feather feather-user",
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
                                            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("circle", {
                                          attrs: { cx: "12", cy: "7", r: "4" },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {},
                                      [
                                        _c("b-input", {
                                          attrs: {
                                            type: "email",
                                            placeholder: "To",
                                          },
                                          model: {
                                            value: _vm.params.to,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.params, "to", $$v)
                                            },
                                            expression: "params.to",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("span", {
                                          staticClass: "validation-text",
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c(
                                  "div",
                                  { staticClass: "d-flex mb-4 mail-cc" },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "feather feather-list",
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
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      [
                                        _c("b-input", {
                                          attrs: { placeholder: "Cc" },
                                          model: {
                                            value: _vm.params.cc,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.params, "cc", $$v)
                                            },
                                            expression: "params.cc",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("span", {
                                          staticClass: "validation-text",
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex mb-4 mail-subject" },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "feather feather-mail",
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
                                        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("polyline", {
                                      attrs: { points: "22,6 12,13 2,6" },
                                    }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "w-100" },
                                  [
                                    _c("b-input", {
                                      attrs: { placeholder: "Subject" },
                                      model: {
                                        value: _vm.params.title,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.params, "title", $$v)
                                        },
                                        expression: "params.title",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("span", {
                                      staticClass: "validation-text",
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex" },
                              [
                                _c("b-file", {
                                  attrs: {
                                    plain: true,
                                    multiple: true,
                                    accept:
                                      "image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx",
                                  },
                                  model: {
                                    value: _vm.params.file,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.params, "file", $$v)
                                    },
                                    expression: "params.file",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("quill-editor", {
                              ref: "editor",
                              staticStyle: { "min-height": "200px" },
                              attrs: { options: _vm.editor_options },
                              model: {
                                value: _vm.params.description,
                                callback: function ($$v) {
                                  _vm.$set(_vm.params, "description", $$v)
                                },
                                expression: "params.description",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "b-toast",
        {
          attrs: {
            id: "toast_msg",
            "header-class": "d-none",
            "body-class": "toast-dark d-flex justify-content-between",
            toaster: "b-toaster-top-center",
          },
        },
        [
          _vm._v("\n        " + _vm._s(_vm.message) + "\n        "),
          _c(
            "a",
            {
              staticClass: "text-success ml-2",
              attrs: { href: "javascript:;" },
              on: {
                click: function ($event) {
                  return _vm.$bvToast.hide("toast_msg")
                },
              },
            },
            [_vm._v("DISMISS")]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
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