"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-notes"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/notes.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/notes.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_apps_notes_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/apps/notes.scss */ "./resources/js/src/assets/sass/apps/notes.scss");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Notes'
  },
  components: {},
  data: function data() {
    return {
      is_show_note_menu: false,
      params: {
        id: null,
        title: '',
        description: ''
      },
      notes_list: [],
      filterd_notes_list: [],
      selected_tab: 'all'
    };
  },
  mounted: function mounted() {
    this.bind_notes();
  },
  methods: {
    bind_notes: function bind_notes() {
      this.notes_list = [{
        id: 1,
        title: 'Meeting with Kelly',
        description: 'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.',
        date: '11/01/2020',
        is_fav: false,
        tag: 'personal'
      }, {
        id: 2,
        title: 'Receive Package',
        description: 'Facilisis curabitur facilisis vel elit sed dapibus sodales purus.',
        date: '11/02/2020',
        is_fav: true,
        tag: ''
      }, {
        id: 3,
        title: 'Download Docs',
        description: 'Proin a dui malesuada, laoreet mi vel, imperdiet diam quam laoreet.',
        date: '11/04/2020',
        is_fav: false,
        tag: 'work'
      }, {
        id: 4,
        title: 'Meeting at 4:50pm',
        description: 'Excepteur sint occaecat cupidatat non proident, anim id est laborum.',
        date: '11/08/2020',
        is_fav: false,
        tag: ''
      }, {
        id: 5,
        title: 'Backup Files EOD',
        description: 'Maecenas condimentum neque mollis, egestas leo ut, gravida.',
        date: '11/09/2020',
        is_fav: false,
        tag: ''
      }, {
        id: 6,
        title: 'Download Server Logs',
        description: 'Suspendisse efficitur diam quis gravida. Nunc molestie est eros.',
        date: '11/09/2020',
        is_fav: false,
        tag: 'social'
      }, {
        id: 7,
        title: 'Team meet at Starbucks',
        description: 'Etiam a odio eget enim aliquet laoreet lobortis sed ornare nibh.',
        date: '11/10/2020',
        is_fav: false,
        tag: ''
      }, {
        id: 8,
        title: 'Create new users Profile',
        description: 'Duis aute irure in nulla pariatur. Etiam a odio eget enim aliquet.',
        date: '11/11/2020',
        is_fav: false,
        tag: 'important'
      }];
      this.search_notes();
    },
    note_class: function note_class(note) {
      var cls = '';

      if (note.tag) {
        cls = 'note-' + note.tag;
      }

      if (note.is_fav) {
        cls += ' note-fav';
      }

      return cls;
    },
    tab_changed: function tab_changed(type) {
      this.selected_tab = type;
      this.search_notes();
      this.is_show_note_menu = false;
    },
    search_notes: function search_notes() {
      var _this = this;

      if (this.selected_tab != 'fav') {
        if (this.selected_tab != 'all') {
          this.filterd_notes_list = this.notes_list.filter(function (d) {
            return d.tag == _this.selected_tab;
          });
        } else {
          this.filterd_notes_list = this.notes_list;
        }
      } else {
        this.filterd_notes_list = this.notes_list.filter(function (d) {
          return d.is_fav;
        });
      }
    },
    set_fav: function set_fav(note) {
      note.is_fav = !note.is_fav;
    },
    set_tag: function set_tag(note, name, index) {
      note.tag = name;
      this.$refs.ddl_tag[index].hide(true);
    },
    edit_note: function edit_note(note) {
      this.params = {
        id: null,
        title: '',
        description: ''
      };

      if (note) {
        this.params = JSON.parse(JSON.stringify(note));
      }

      this.$bvModal.show('notesMailModal');
    },
    save_note: function save_note() {
      if (!this.params.title) {
        this.$bvToast.toast('Title is required.', {
          headerClass: 'd-none',
          bodyClass: 'toast-danger',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 1000
        });
        return false;
      } //add note


      var max_note_id = this.notes_list.reduce(function (max, character) {
        return character.id > max ? character.id : max;
      }, this.notes_list[0].id);

      if (!max_note_id) {
        max_note_id = 0;
      }

      var dt = new Date();
      var note = {
        id: max_note_id + 1,
        title: this.params.title,
        description: this.params.description,
        date: dt.getDate() + '/' + Number(dt.getMonth()) + 1 + '/' + dt.getFullYear(),
        is_fav: false,
        tag: ''
      };
      this.notes_list.splice(0, 0, note);
      this.search_notes();
      this.$bvModal.hide('notesMailModal');
      this.$bvToast.toast('Note saved successfully.', {
        headerClass: 'd-none',
        bodyClass: 'toast-success',
        toaster: 'b-toaster-top-center',
        autoHideDelay: 1000
      });
    },
    delete_note: function delete_note(note) {
      this.notes_list = this.notes_list.filter(function (d) {
        return d.id != note.id;
      });
      this.search_notes();
      this.$bvToast.toast('Note deleted successfully.', {
        headerClass: 'd-none',
        bodyClass: 'toast-success',
        toaster: 'b-toaster-top-center',
        autoHideDelay: 1000
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/notes.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/notes.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.main-container,\n#content {\n  min-height: auto;\n}\n\n/*\n    App Note Container\n*/\n.app-note-container {\n  position: relative;\n  display: flex;\n}\n\n.app-note-container .tab-title {\n  max-width: 210px;\n  width: 100%;\n}\n\n.note-sidebar-scroll {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  overflow: auto;\n  height: calc(100vh - 202px);\n}\n\n/*\n    Group section \n*/\n.group-section {\n  font-weight: 600;\n  font-size: 15px;\n  color: #3b3f5c;\n  letter-spacing: 1px;\n  margin-top: 25px;\n  margin-bottom: 13px;\n  padding: 9px 20px;\n}\n\n.group-section svg {\n  color: #888ea8;\n  margin-right: 6px;\n  vertical-align: text-top;\n  width: 20px;\n  height: 20px;\n  fill: rgba(0, 23, 55, 0.08);\n}\n\n.app-note-overlay {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #3b3f5c !important;\n  z-index: 4 !important;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n\n.app-note-overlay.app-note-overlay-show {\n  display: block;\n  opacity: 0.7;\n}\n\n/*\n    Tab Title\n*/\n.tab-title.mail-menu-show {\n  left: 0;\n  width: 100%;\n  min-width: 190px;\n  height: 100%;\n}\n\n.tab-title hr {\n  border-top: 1px solid #0e1726;\n  max-width: 54px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.tab-title .nav-pills .nav-link.active,\n.tab-title .nav-pills .show > .nav-link {\n  background-color: rgb(198, 211, 253);\n  color: #3b3f5c;\n  font-weight: 600;\n}\n\n.tab-title .nav-pills a.nav-link {\n  position: relative;\n  font-weight: 600;\n  color: #515365;\n  padding: 9px 20px;\n  cursor: pointer;\n  font-size: 14px;\n  border-radius: 6px;\n}\n\n.tab-title .nav-pills a.nav-link svg {\n  margin-right: 7px;\n  width: 18px;\n  height: 18px;\n  vertical-align: sub;\n}\n\n.tab-title .nav-pills a.nav-link .mail-badge {\n  background: #eaf1ff;\n  border-radius: 50%;\n  position: absolute;\n  right: 8px;\n  padding: 4px 7px;\n  height: 24px;\n  width: 23px;\n  color: #4361ee;\n  font-weight: 600;\n}\n\n.tab-title .nav-pills.group-list .nav-item a {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 9px 15px 9px 50px;\n  color: #3b3f5c;\n  letter-spacing: 1px;\n}\n\n.tab-title .nav-pills.group-list .nav-item a[class*=g-dot-]:before {\n  position: absolute;\n  padding: 4px;\n  content: \"\";\n  border-radius: 50%;\n  top: 14px;\n  left: 20px;\n  border: 2px solid #515365;\n}\n\n.tab-title .nav-pills.group-list .nav-item a.g-dot-danger:before {\n  background: #fff5f5;\n  border: 1px solid #e7515a;\n}\n\n.tab-title .nav-pills.group-list .nav-item a.g-dot-primary:before {\n  background: #e7f7ff;\n  border: 1px solid #2196f3;\n}\n\n.tab-title .nav-pills.group-list .nav-item a.g-dot-warning:before {\n  background: #fff9ed;\n  border: 1px solid #e2a03f;\n}\n\n.tab-title .nav-pills.group-list .nav-item a.g-dot-success:before {\n  background: #f3effc;\n  border: 1px solid #805dca;\n}\n\n.tab-title .nav-pills .nav-item .dropdown-menu {\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);\n  padding: 0;\n  border: none;\n}\n\n.tab-title li.mail-labels a.dropdown-item {\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 18px;\n}\n\n.tab-title li.mail-labels a.dropdown-item:hover {\n  background-color: #fff;\n  color: #4361ee;\n}\n\n.tab-title li.mail-labels .label:after {\n  position: absolute;\n  content: \"\";\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  right: 15px;\n  top: 43%;\n}\n\n/*Mail Labels*/\n/*\n    Note container\n*/\n.note-container {\n  padding: 0 0 0 15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.note-container .switch {\n  text-align: right;\n  margin-bottom: 43px;\n}\n\n.note-container .switch .active-view {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.note-container .switch .view-list,\n.note-container .switch .view-grid {\n  padding: 10px;\n  background: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #515365;\n  box-shadow: 0px 2px 4px rgba(126, 142, 177, 0.12);\n  width: 43px;\n  height: 41px;\n  fill: rgba(0, 23, 55, 0.08);\n}\n\n/* \n    Note Container\n*/\n.note-content {\n  min-height: 135px;\n  margin-bottom: 15px;\n}\n\n.note-container.note-grid .note-item {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.note-container.note-grid .note-item.note-personal .note-inner-content {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom: 3px solid #4461ed;\n  background: #eaf1ff;\n}\n\n.note-container.note-grid .note-item.note-work .note-inner-content {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom: 3px solid #e2a03f;\n  background: #fff9ed;\n}\n\n.note-container.note-grid .note-item.note-important .note-inner-content {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom: 3px solid #e7515a;\n  background: #fff5f5;\n}\n\n.note-container.note-grid .note-item.note-social .note-inner-content {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom: 3px solid #805dca;\n  background: #f3effc;\n}\n\n.note-container.note-grid .note-item .note-inner-content {\n  border-radius: 4px;\n  width: 100%;\n  position: relative;\n  padding: 16px 16px 6px 16px;\n  margin-right: 0;\n  margin-bottom: 18px;\n  border-radius: 6px;\n  background: #ffffff;\n  border: 1px solid #ebedf2;\n  box-shadow: 18px 20px 10.3px -23px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom: 3px solid #888ea8;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 0px;\n  letter-spacing: 0px;\n}\n\n.note-container.note-grid .note-item .note-inner-content .meta-time {\n  font-weight: 600;\n  margin-bottom: 10px;\n  font-size: 12px;\n  color: rgb(119, 135, 204);\n  display: inline-block;\n  border-radius: 4px;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-description {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 0;\n  letter-spacing: 0px;\n  word-wrap: break-word;\n  color: #515365;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-action {\n  display: inline-block;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-action .fav-note,\n.note-container.note-grid .note-item .note-inner-content .note-action .delete-note {\n  padding: 4px;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #607d8b;\n  width: 28px;\n  height: 28px;\n  fill: #f1f2f3;\n  stroke-width: 1.6;\n}\n\n.note-container.note-grid .note-item.note-fav .note-inner-content .note-action .fav-note {\n  fill: #ffbb44;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-action .fav-note:hover {\n  fill: #e2a03f;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-action .delete-note:hover {\n  color: #e7515a;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer {\n  display: inline-block;\n  float: right;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags {\n  display: inline-block;\n  position: relative;\n  padding: 4px 6px;\n  border-radius: 4px;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags [class*=g-dot-] {\n  content: \"\";\n  background: transparent;\n  border-radius: 50%;\n  border: 2px solid #e3e4eb;\n  display: inline-block;\n  height: 11px;\n  width: 11px;\n  vertical-align: middle;\n  display: none;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags .g-dot-personal {\n  background: #e7f7ff;\n  border: 2px solid #2196f3;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags .g-dot-work {\n  background: #fff9ed;\n  border: 2px solid #e2a03f;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags .g-dot-social {\n  background: #f3effc;\n  border: 2px solid #805dca;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags .g-dot-important {\n  background: #fff5f5;\n  border: 2px solid #e7515a;\n}\n\n.note-container.note-grid .note-item.note-personal .note-inner-content .note-footer .tags .g-dot-personal, .note-container.note-grid .note-item.note-work .note-inner-content .note-footer .tags .g-dot-work, .note-container.note-grid .note-item.note-social .note-inner-content .note-footer .tags .g-dot-social, .note-container.note-grid .note-item.note-important .note-inner-content .note-footer .tags .g-dot-important {\n  display: inline-block;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags-selector {\n  display: inline-block;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags-selector .dropdown-menu {\n  min-width: 8rem;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags-selector .dropdown-menu a {\n  font-size: 14px;\n  padding: 3px 35px;\n  font-weight: 600;\n  letter-spacing: 0px;\n  color: #3b3f5c;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags-selector .dropdown-menu .dropdown-item.active, .note-container.note-grid .note-item .note-inner-content .note-footer .tags-selector .dropdown-menu .dropdown-item:active {\n  background: transparent;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags-selector .dropdown-menu [class*=g-dot-]:before {\n  content: \"\";\n  position: absolute;\n  padding: 4px;\n  border-radius: 50%;\n  top: 9px;\n  left: 10px;\n  border: 2px solid #515365;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags-selector .dropdown-menu a.g-dot-important:before {\n  background: #fff5f5;\n  border: 1px solid #e7515a;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags-selector .dropdown-menu a.g-dot-personal:before {\n  background: #e7f7ff;\n  border: 1px solid #2196f3;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags-selector .dropdown-menu a.g-dot-work:before {\n  background: #fff9ed;\n  border: 1px solid #e2a03f;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .tags-selector .dropdown-menu a.g-dot-social:before {\n  background: #f3effc;\n  border: 1px solid #805dca;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .nav-link {\n  padding: 0;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .nav-link span {\n  display: block;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .nav-link .feather-more-vertical {\n  border-radius: 5px;\n  cursor: pointer;\n  color: #515365;\n  width: 20px;\n  height: 20px;\n}\n\n.note-container.note-grid .note-item .note-inner-content .note-footer .nav-link .feather-more-vertical:hover {\n  color: #0e1726;\n}\n\n.note-container.note-grid .note-item.note-personal .note-inner-content .note-footer .nav-link .feather-more-vertical, .note-container.note-grid .note-item.note-work .note-inner-content .note-footer .nav-link .feather-more-vertical, .note-container.note-grid .note-item.note-social .note-inner-content .note-footer .nav-link .feather-more-vertical, .note-container.note-grid .note-item.note-important .note-inner-content .note-footer .nav-link .feather-more-vertical {\n  display: none;\n}\n\n/*\n=====================\n    Modal Content\n=====================\n*/\n.modal-content {\n  border: none;\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);\n}\n\n.modal-content .modal-footer {\n  border-top: none;\n}\n\n.modal-content .modal-footer [data-dismiss=modal] {\n  background-color: #fff;\n  color: #4361ee;\n  font-weight: 700;\n  border: 1px solid #e8e8e8;\n  padding: 10px 25px;\n}\n\n.modal-content .modal-footer .btn[data-dismiss=modal] svg {\n  margin-right: 5px;\n  width: 18px;\n  vertical-align: bottom;\n}\n\n.modal-content .modal-footer #btn-n-add {\n  background-color: #4361ee;\n  color: #fff;\n  font-weight: 600;\n  border: 1px solid #4361ee;\n  padding: 10px 25px;\n}\n\n.modal-content .modal-footer #btn-n-save {\n  font-weight: 600;\n  padding: 10px 25px;\n}\n\n.modal-content svg.close {\n  position: absolute;\n  right: -7px;\n  top: -8px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px;\n  background: #fff;\n  border-radius: 5px;\n  opacity: 1;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: 0.6s;\n  color: #3b3f5c;\n}\n\n.notes-box .notes-content form .note-title {\n  padding-top: 20px;\n}\n\n.notes-box .notes-content form .note-description {\n  padding-top: 40px;\n}\n\n/*\n    ===============\n        Note Box\n    ===============\n*/\n.hamburger {\n  display: none;\n}\n\n/*\n    Media Query\n*/\n@media (min-width: 1200px) {\n  .note-container.note-grid .note-item {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n}\n@media (min-width: 1920px) {\n  .note-container.note-grid .note-item {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n}\n@media (max-width: 1199px) {\n  .note-container {\n    padding: 0;\n  }\n  .note-container.note-grid .note-item {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n}\n@media (max-width: 991px) {\n  .app-notes {\n    margin-top: 37px;\n  }\n  .app-note-container .tab-title {\n    position: absolute;\n    z-index: 4;\n    left: -170px;\n    width: 0;\n  }\n  .tab-title.note-menu-show {\n    left: 0;\n    width: 100%;\n    min-width: 190px;\n    min-height: 485px;\n    border-radius: 0;\n    padding: 11px;\n    background: #fff;\n    height: 100%;\n  }\n  .note-sidebar-scroll {\n    height: 100%;\n  }\n  .app-hamburger-container {\n    text-align: right;\n  }\n  .hamburger {\n    position: relative;\n    top: -13px;\n    padding: 6px 9px 6px 9px;\n    font-size: 20px;\n    color: #fff;\n    align-self: center;\n    display: inline-block;\n    background-color: #515365;\n    border-radius: 50%;\n  }\n}\n@media (max-width: 575px) {\n  .note-container {\n    -moz-column-count: 1;\n    column-count: 1;\n  }\n  .note-container.note-grid .note-item {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/apps/notes.scss":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/sass/apps/notes.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_notes_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./notes.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/notes.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_notes_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_notes_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/apps/notes.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/apps/notes.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notes_vue_vue_type_template_id_e88e2d24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes.vue?vue&type=template&id=e88e2d24& */ "./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24&");
/* harmony import */ var _notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/notes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notes_vue_vue_type_template_id_e88e2d24___WEBPACK_IMPORTED_MODULE_0__.render,
  _notes_vue_vue_type_template_id_e88e2d24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/notes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/notes.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/apps/notes.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/notes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_template_id_e88e2d24___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_template_id_e88e2d24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_template_id_e88e2d24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notes.vue?vue&type=template&id=e88e2d24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
                      [_c("span", [_vm._v("Notes")])]
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "layout-px-spacing" }, [
        _c(
          "div",
          {
            staticClass: "row app-notes layout-top-spacing layout-spacing",
            attrs: { id: "cancel-row" },
          },
          [
            _c(
              "div",
              { staticClass: "col-lg-12" },
              [
                _c("div", { staticClass: "app-hamburger-container" }, [
                  _c(
                    "div",
                    {
                      staticClass: "hamburger",
                      on: {
                        click: function ($event) {
                          _vm.is_show_note_menu = !_vm.is_show_note_menu
                        },
                      },
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass:
                            "feather feather-menu chat-menu d-xl-none",
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
                            attrs: { x1: "3", y1: "12", x2: "21", y2: "12" },
                          }),
                          _c("line", {
                            attrs: { x1: "3", y1: "6", x2: "21", y2: "6" },
                          }),
                          _c("line", {
                            attrs: { x1: "3", y1: "18", x2: "21", y2: "18" },
                          }),
                        ]
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "app-container" }, [
                  _c("div", { staticClass: "app-note-container" }, [
                    _c("div", {
                      staticClass: "app-note-overlay",
                      class: { "app-note-overlay-show": _vm.is_show_note_menu },
                      on: {
                        click: function ($event) {
                          _vm.is_show_note_menu = false
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-title",
                        class: { "note-menu-show": _vm.is_show_note_menu },
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-md-12 col-sm-12 col-12 text-center",
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    id: "btn-add-notes",
                                    href: "javascript:void(0);",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.edit_note()
                                    },
                                  },
                                },
                                [_vm._v("Add")]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-12 col-sm-12 col-12 mt-5" },
                            [
                              _c(
                                "ul",
                                {
                                  staticClass: "nav nav-pills d-block",
                                  attrs: { id: "pills-tab3", role: "tablist" },
                                },
                                [
                                  _c("li", { staticClass: "nav-item" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link list-actions",
                                        class: {
                                          active: _vm.selected_tab == "all",
                                        },
                                        on: {
                                          click: function ($event) {
                                            return _vm.tab_changed("all")
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            staticClass: "feather feather-edit",
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
                                                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                                              },
                                            }),
                                            _c("path", {
                                              attrs: {
                                                d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
                                              },
                                            }),
                                          ]
                                        ),
                                        _vm._v(
                                          " All Notes\n                                            "
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
                                          active: _vm.selected_tab == "fav",
                                        },
                                        on: {
                                          click: function ($event) {
                                            return _vm.tab_changed("fav")
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            staticClass: "feather feather-star",
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
                                        _vm._v(
                                          " Favourites\n                                            "
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c("hr"),
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
                                  " Tags\n                                    "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "nav nav-pills d-block group-list",
                                  attrs: { id: "pills-tab", role: "tablist" },
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
                                      [_vm._v("Personal")]
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
                                      [_vm._v("Work")]
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
                                          active: _vm.selected_tab == "social",
                                        },
                                        on: {
                                          click: function ($event) {
                                            return _vm.tab_changed("social")
                                          },
                                        },
                                      },
                                      [_vm._v("Social")]
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
                                            _vm.selected_tab == "important",
                                        },
                                        on: {
                                          click: function ($event) {
                                            return _vm.tab_changed("important")
                                          },
                                        },
                                      },
                                      [_vm._v("Important")]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "note-container note-grid",
                        attrs: { id: "ct" },
                      },
                      _vm._l(_vm.filterd_notes_list, function (note, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass: "note-item all-notes",
                            class: _vm.note_class(note),
                          },
                          [
                            _c("div", { staticClass: "note-inner-content" }, [
                              _c("div", { staticClass: "note-content" }, [
                                _c("p", { staticClass: "note-title" }, [
                                  _vm._v(_vm._s(note.title)),
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "meta-time" }, [
                                  _vm._v(_vm._s(note.date)),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "note-description-content" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "note-description" },
                                      [_vm._v(_vm._s(note.description))]
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "note-action" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "javascript:;" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.set_fav(note)
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "feather feather-star fav-note",
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
                                    attrs: { href: "javascript:;" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.delete_note(note)
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "feather feather-trash-2 delete-note",
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
                                        _c("path", {
                                          attrs: {
                                            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                                          },
                                        }),
                                        _c("line", {
                                          attrs: {
                                            x1: "10",
                                            y1: "11",
                                            x2: "10",
                                            y2: "17",
                                          },
                                        }),
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
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "note-footer" },
                                [
                                  _c(
                                    "b-dropdown",
                                    {
                                      ref: "ddl_tag",
                                      refInFor: true,
                                      staticClass: "tags-selector",
                                      attrs: {
                                        right: true,
                                        "toggle-tag": "a",
                                        variant: "icon-only",
                                        "toggle-class":
                                          "nav-link dropdown-toggle d-icon label-group",
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "button-content",
                                            fn: function () {
                                              return [
                                                _c(
                                                  "div",
                                                  { staticClass: "tags" },
                                                  [
                                                    _c("div", {
                                                      staticClass:
                                                        "g-dot-personal",
                                                    }),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass: "g-dot-work",
                                                    }),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass:
                                                        "g-dot-social",
                                                    }),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass:
                                                        "g-dot-important",
                                                    }),
                                                    _vm._v(" "),
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
                                                        _c("circle", {
                                                          attrs: {
                                                            cx: "12",
                                                            cy: "5",
                                                            r: "1",
                                                          },
                                                        }),
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
                                        "a",
                                        {
                                          staticClass:
                                            "note-personal label-group-item label-personal dropdown-item position-relative g-dot-personal",
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.set_tag(
                                                note,
                                                "personal",
                                                index
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                Personal\n                                            "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "note-work label-group-item label-work dropdown-item position-relative g-dot-work",
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.set_tag(
                                                note,
                                                "work",
                                                index
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                Work\n                                            "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "note-social label-group-item label-social dropdown-item position-relative g-dot-social",
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.set_tag(
                                                note,
                                                "social",
                                                index
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                Social\n                                            "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "note-important label-group-item label-important dropdown-item position-relative g-dot-important",
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.set_tag(
                                                note,
                                                "important",
                                                index
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                Important\n                                            "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]
                        )
                      }),
                      0
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    attrs: {
                      centered: "",
                      id: "notesMailModal",
                      "hide-header": true,
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
                                    return _vm.$bvModal.hide("notesMailModal")
                                  },
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
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                  },
                                  [
                                    _c("polyline", {
                                      attrs: { points: "3 6 5 6 21 6" },
                                    }),
                                    _c("path", {
                                      attrs: {
                                        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                                      },
                                    }),
                                  ]
                                ),
                                _vm._v(" Discard\n                        "),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                attrs: { variant: "default", id: "btn-n-add" },
                                on: {
                                  click: function ($event) {
                                    return _vm.save_note()
                                  },
                                },
                              },
                              [_vm._v(_vm._s(_vm.params.id ? "Update" : "Add"))]
                            ),
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
                            return _vm.$bvModal.hide("notesMailModal")
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
                            _c("line", {
                              attrs: { x1: "6", y1: "6", x2: "18", y2: "18" },
                            }),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "notes-box" }, [
                      _c(
                        "div",
                        { staticClass: "notes-content" },
                        [
                          _c("b-form", [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "d-flex note-title" },
                                  [
                                    _c("b-input", {
                                      attrs: {
                                        maxlength: "25",
                                        placeholder: "Title",
                                      },
                                      model: {
                                        value: _vm.params.title,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.params, "title", $$v)
                                        },
                                        expression: "params.title",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "d-flex note-description" },
                                  [
                                    _c("b-textarea", {
                                      attrs: {
                                        maxlength: "60",
                                        placeholder: "Description",
                                        rows: "3",
                                      },
                                      model: {
                                        value: _vm.params.description,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.params,
                                            "description",
                                            $$v
                                          )
                                        },
                                        expression: "params.description",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                            ]),
                          ]),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);