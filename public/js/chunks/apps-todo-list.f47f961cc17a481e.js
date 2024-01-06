"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-todo-list"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _assets_sass_apps_todolist_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/sass/apps/todolist.scss */ "./resources/js/src/assets/sass/apps/todolist.scss");
/* harmony import */ var _assets_sass_components_custom_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/sass/components/custom-modal.scss */ "./resources/js/src/assets/sass/components/custom-modal.scss");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Chat Application'
  },
  components: {},
  data: function data() {
    return {
      is_show_task_menu: false,
      params: {
        task_id: null,
        title: '',
        description: ''
      },
      tab_index: 0,
      task_list: [],
      filtered_task_list: [],
      search_task: '',
      selected_tab: '',
      selected_task: null,
      editor_options: {
        modules: {
          toolbar: [[{
            header: [1, 2, false]
          }], ['bold', 'italic', 'underline'], ['image', 'code-block']]
        }
      }
    };
  },
  mounted: function mounted() {
    this.bind_task_list();
  },
  methods: {
    bind_task_list: function bind_task_list() {
      this.task_list = [{
        task_id: 1,
        title: 'Meeting with Shaun Park at 4:50pm',
        date: 'Aug, 07 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'middle',
        status: ''
      }, {
        task_id: 2,
        title: 'Team meet at Starbucks',
        date: 'Aug, 06 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'low',
        status: ''
      }, {
        task_id: 3,
        title: 'Meet Lisa to discuss project details',
        date: 'Aug, 05 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'middle',
        status: 'complete'
      }, {
        task_id: 4,
        title: 'Download Complete',
        date: 'Aug, 04 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'low',
        status: ''
      }, {
        task_id: 5,
        title: 'Conference call with Marketing Manager',
        date: 'Aug, 03 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'high',
        status: 'important'
      }, {
        task_id: 6,
        title: 'New User Registered',
        date: 'Aug, 02 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'middle',
        status: 'important'
      }, {
        task_id: 7,
        title: 'Fix issues in new project',
        date: 'Aug, 01 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'middle',
        status: ''
      }, {
        task_id: 8,
        title: 'Check All functionality',
        date: 'Aug, 07 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'middle',
        status: 'important'
      }, {
        task_id: 9,
        title: 'Check Repository',
        date: 'Aug, 07 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'middle',
        status: 'complete'
      }, {
        task_id: 10,
        title: 'Trashed Tasks',
        date: 'Aug, 08 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'middle',
        status: 'trash'
      }, {
        task_id: 11,
        title: 'Trashed Tasks 2',
        date: 'Aug, 09 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'middle',
        status: 'trash'
      }, {
        task_id: 12,
        title: 'Trashed Tasks 3',
        date: 'Aug, 10 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
        priority: 'middle',
        status: 'trash'
      }];
      this.search_tasks();
    },
    tab_changed: function tab_changed(type) {
      this.selected_tab = type;
      this.search_tasks();
      this.is_show_task_menu = false;
    },
    search_tasks: function search_tasks() {
      var _this = this;

      var res;

      if (this.selected_tab) {
        res = this.task_list.filter(function (d) {
          return d.status == _this.selected_tab;
        });
      } else {
        res = this.task_list.filter(function (d) {
          return d.status != 'trash';
        });
      }

      this.filtered_task_list = res.filter(function (d) {
        return d.title.toLowerCase().includes(_this.search_task);
      });
    },
    priority_class: function priority_class(task) {
      if (task.priority == 'low') {
        return 'primary';
      } else if (task.priority == 'middle') {
        return 'warning';
      } else if (task.priority == 'high') {
        return 'danger';
      }
    },
    set_priority: function set_priority(task, name) {
      task.priority = name;
    },
    task_complete: function task_complete(task) {
      if (!task.status) {
        task.status = 'complete';
      } else {
        task.status = '';
      }
    },
    set_important: function set_important(task) {
      if (task.status == 'important') {
        task.status = '';
        this.tab_index = 0;
        this.tab_changed('');
      } else {
        task.status = 'important';
      }
    },
    delete_task: function delete_task(task, type) {
      if (type == 'delete') {
        task.status = 'trash';
      }

      if (type == 'delete_permanent') {
        this.task_list = this.task_list.filter(function (d) {
          return d.task_id != task.task_id;
        });
      } else if (type == 'restore') {
        task.status = '';
      }

      this.search_tasks();
    },
    view_task: function view_task(task) {
      this.selected_task = task;
      this.$bvModal.show('todoShowListItem');
    },
    edit_task: function edit_task(task) {
      this.params = {
        task_id: null,
        title: '',
        description: ''
      };

      if (task) {
        this.params = JSON.parse(JSON.stringify(task));
      }

      this.$bvModal.show('addTaskModal');
    },
    save_task: function save_task() {
      var _this2 = this;

      if (!this.params.title) {
        this.$bvToast.toast('Title is required.', {
          headerClass: 'd-none',
          bodyClass: 'toast-danger',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 1000
        });
        return false;
      }

      var description_text = this.$refs.editor.quill.getText();

      if (this.params.task_id) {
        //update task
        var task = this.task_list.find(function (d) {
          return d.task_id == _this2.params.task_id;
        });
        task.title = this.params.title;
        task.description = this.params.description;
        task.description_text = description_text;
      } else {
        //add task
        var max_task_id = this.task_list.reduce(function (max, character) {
          return character.task_id > max ? character.task_id : max;
        }, this.task_list[0].task_id);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth()); //January is 0!

        var yyyy = today.getFullYear();
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var _task = {
          task_id: max_task_id + 1,
          title: this.params.title,
          description: this.params.description,
          description_text: description_text,
          date: monthNames[mm] + ', ' + dd + ' ' + yyyy,
          priority: 'low',
          status: ''
        };
        this.task_list.splice(0, 0, _task);
        this.search_tasks();
      }

      this.$bvModal.hide('addTaskModal');
      this.$bvToast.toast('Task saved successfully.', {
        headerClass: 'd-none',
        bodyClass: 'toast-success',
        toaster: 'b-toaster-top-center',
        autoHideDelay: 1000
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/todolist.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/todolist.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n/*----------Theme checkbox---------*/\n.todo-list {\n  /*\n  =====================\n      Todo Inbox\n  =====================\n  */\n}\n\n.todo-list .new-control {\n  position: relative;\n  display: inline-flex;\n}\n\n.todo-list .custom-control.custom-checkbox {\n  align-self: flex-start;\n}\n\n.todo-list .new-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.todo-list .new-control.new-checkbox {\n  cursor: pointer;\n}\n\n.todo-list .new-control.new-checkbox .new-control-indicator {\n  position: relative;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 30px;\n  height: 30px;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  background-color: #e0e6ed;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n  border-radius: 50%;\n  margin-right: 13px;\n}\n\n.todo-list .new-control.new-checkbox > input:checked ~ span.new-control-indicator {\n  background: #888ea8;\n}\n\n.todo-list .new-control.new-checkbox > input:checked ~ span.new-control-indicator:after {\n  display: block;\n}\n\n.todo-list .new-control.new-checkbox span.new-control-indicator:after {\n  border: solid #888ea8;\n  top: 50%;\n  left: 50%;\n  margin-left: -2px;\n  margin-top: -6px;\n  width: 5px;\n  height: 10px;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg);\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.todo-list .new-control.new-checkbox.checkbox-primary > input:checked ~ span.new-control-indicator {\n  background: transparent;\n  border: 2px solid #888ea8;\n}\n\n.todo-list .mail-box-container {\n  position: relative;\n  display: flex;\n  margin-bottom: 10px;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 4px 6px 0 rgba(85, 85, 85, 0.08), 0 1px 20px 0 rgba(0, 0, 0, 0.07), 0px 1px 11px 0px rgba(0, 0, 0, 0.07);\n}\n\n.todo-list .mail-overlay {\n  display: none;\n  position: absolute;\n  width: 100vw;\n  height: 100%;\n  background: #3b3f5c !important;\n  z-index: 4 !important;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n\n.todo-list .mail-overlay.mail-overlay-show {\n  display: block;\n  opacity: 0.3;\n}\n\n.todo-list .tab-title {\n  position: relative;\n  padding: 20px 15px;\n  width: 265px;\n  border-right: 1px solid #e0e6ed;\n}\n\n.todo-list .tab-title svg.feather-clipboard {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n  margin-bottom: 13px;\n}\n\n.todo-list .tab-title h5 {\n  position: relative;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 3px;\n  color: #515365;\n}\n\n.todo-list .tab-title #addTask {\n  position: absolute;\n  font-size: 14px;\n  padding: 9px 20px;\n  border: none;\n  color: #fff;\n  bottom: 32px;\n  left: 17%;\n  background-color: #4361ee;\n}\n\n.todo-list .tab-title #addTask svg {\n  margin-right: 5px;\n}\n\n.todo-list .tab-title.mail-menu-show {\n  left: 0;\n  min-width: 190px;\n  height: 100%;\n}\n\n.todo-list .tab-title hr {\n  border-top: 1px solid #ebedf2;\n  max-width: 54px;\n}\n\n.todo-list .tab-title .todoList-sidebar-scroll {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 346px);\n}\n\n.todo-list .tab-title .nav-pills .nav-link.active {\n  background-color: transparent;\n  color: #4361ee;\n  color: #4361ee;\n  background: #ebedf2;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  padding: 10px 12px 10px 14px;\n}\n\n.todo-list .tab-title .nav-pills .nav-link.active svg {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.todo-list .tab-title .nav-pills a.nav-link {\n  position: relative;\n  font-weight: 700;\n  color: #888ea8;\n  border-radius: 0;\n  padding: 20px 0px 20px 15px;\n  transition: all 0.35s ease;\n}\n\n.todo-list .tab-title .nav-pills .nav-link .badge {\n  border-radius: 50%;\n  position: absolute;\n  right: 24px;\n  padding: 2px 0px;\n  height: 25px;\n  width: 25px;\n  font-weight: 700;\n  border: 2px solid #e0e6ed;\n  transform: none;\n}\n\n.todo-list .tab-title .nav-pills .nav-link.active .badge {\n  border: none;\n  padding: 0 !important;\n  font-size: 15px;\n  top: 11px;\n  color: #4361ee !important;\n}\n\n.todo-list .tab-title .nav-pills a.nav-link:hover {\n  color: #4361ee;\n}\n\n.todo-list .tab-title .nav-pills a.nav-link:hover svg {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.todo-list .tab-title .nav-pills a.nav-link svg {\n  color: #888ea8;\n  margin-right: 6px;\n  vertical-align: middle;\n  width: 21px;\n  height: 21px;\n  fill: rgba(0, 23, 55, 0.08);\n}\n\n.todo-list .tab-title .nav-pills .nav-link#all-list .badge {\n  color: #3b3f5c;\n}\n\n.todo-list .tab-title .nav-pills .nav-link#todo-task-done .badge {\n  color: #2196f3;\n}\n\n.todo-list .tab-title .nav-pills .nav-link#todo-task-important .badge {\n  color: #e95f2b;\n}\n\n.todo-list .todo-inbox {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-width: 100%;\n  width: 100%;\n}\n\n.todo-list .todo-inbox .search {\n  display: flex;\n}\n\n.todo-list .todo-inbox .search input {\n  border: none;\n  padding: 12px 13px 12px 13px;\n  border-bottom: 1px solid #e0e6ed;\n  background: transparent;\n  border-radius: 0;\n}\n\n.todo-list .todo-inbox .mail-menu {\n  background: #fff;\n  margin: 7px 13px 7px 13px;\n  width: 25px;\n  border-radius: 0;\n  color: #515365;\n  align-self: center;\n  border-bottom: 1px solid #e0e6ed;\n}\n\n.todo-list .todo-inbox .todo-item-inner {\n  display: flex;\n}\n\n.todo-list .todo-inbox .message-box {\n  background: #fff;\n  padding: 0 0 5px 0;\n}\n\n.todo-list .todo-box-scroll {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  overflow: auto;\n  height: calc(100vh - 224px);\n}\n\n.todo-list .todo-inbox .todo-item {\n  cursor: pointer;\n  position: relative;\n}\n\n.todo-list .todo-inbox .todo-item:not(:last-child) {\n  border-bottom: 1px solid #e0e6ed;\n}\n\n.todo-list .todo-inbox .todo-item.todo-task-trash {\n  display: none;\n}\n\n.todo-list .todo-inbox .todo-item.todo-task-trash.trash-show {\n  display: block;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .n-chk {\n  padding: 20px 10px 20px 10px;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .todo-content {\n  width: 100%;\n  padding: 20px 10px 20px 3px;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .todo-heading {\n  font-size: 18px;\n  font-weight: 600;\n  color: #515365;\n  margin-bottom: 2px;\n  transition: all 0.35s ease;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner:hover .todo-heading {\n  transform: translateY(0) scale(1.01);\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner p.todo-text {\n  font-size: 14px;\n  margin-bottom: 0;\n  color: #888ea8;\n  font-weight: 600;\n  transition: all 0.35s ease;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  max-width: calc(100vw - 730px);\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner:hover .todo-text {\n  transform: translateY(0) scale(1.01);\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner p.meta-date {\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #61b6cd;\n  transition: all 0.35s ease;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner:hover p.meta-date {\n  transform: translateY(0) scale(1.01);\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown {\n  float: right;\n  padding: 20px 10px 20px 10px;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-toggle {\n  font-size: 20px;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-toggle.danger svg {\n  color: #e7515a;\n  fill: rgba(231, 81, 90, 0.19);\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-toggle.warning svg {\n  color: #e2a03f;\n  fill: rgba(233, 176, 43, 0.19);\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-toggle.primary svg {\n  color: #2196f3;\n  fill: rgba(33, 150, 243, 0.19);\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu.show {\n  top: 30px !important;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu a.dropdown-item.active, .todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu a.dropdown-item:active {\n  background: transparent;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu a svg {\n  font-size: 19px;\n  font-weight: 700;\n  margin-right: 7px;\n  vertical-align: middle;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu a.danger svg {\n  color: #e7515a;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu a.warning svg {\n  color: #e2a03f;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu a.primary svg {\n  color: #2196f3;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .action-dropdown .dropdown-menu .permanent-delete,\n.todo-list .todo-inbox .todo-item .todo-item-inner .action-dropdown .dropdown-menu .revive {\n  display: none;\n}\n\n.todo-list .todo-inbox .todo-item.todo-task-trash .n-chk {\n  display: none;\n}\n\n.todo-list .todo-inbox .todo-item.todo-task-trash .todo-item-inner .todo-content {\n  width: 100%;\n  padding: 20px 14px 20px 14px;\n}\n\n.todo-list .todo-inbox .todo-item.todo-task-trash .todo-item-inner .priority-dropdown .dropdown-menu {\n  display: none;\n}\n\n.todo-list .todo-inbox .todo-item.todo-task-trash .todo-item-inner .action-dropdown .dropdown-menu .edit,\n.todo-list .todo-inbox .todo-item.todo-task-trash .todo-item-inner .action-dropdown .dropdown-menu .important,\n.todo-list .todo-inbox .todo-item.todo-task-trash .todo-item-inner .action-dropdown .dropdown-menu .delete {\n  display: none;\n}\n\n.todo-list .todo-inbox .todo-item.todo-task-trash .todo-item-inner .action-dropdown .dropdown-menu .permanent-delete,\n.todo-list .todo-inbox .todo-item.todo-task-trash .todo-item-inner .action-dropdown .dropdown-menu .revive {\n  display: block;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .action-dropdown {\n  float: right;\n  padding: 20px 10px 20px 10px;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .action-dropdown .dropdown-menu.show {\n  top: 30px !important;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .action-dropdown .dropdown-menu .dropdown-item.active, .todo-list .todo-inbox .todo-item .todo-item-inner .action-dropdown .dropdown-menu .dropdown-item:active {\n  background-color: transparent;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .action-dropdown .dropdown-toggle svg {\n  width: 21px;\n  height: 21px;\n  margin-top: 5px;\n  color: #888ea8;\n}\n\n.todo-list .todo-inbox .todo-item .todo-item-inner .action-dropdown .show .dropdown-toggle svg {\n  color: #1b2e4b;\n}\n\n.todo-list .todo-inbox .todo-item.todo-task-done .todo-item-inner .todo-heading {\n  text-decoration: line-through;\n}\n\n.todo-list .todo-inbox .todo-item.todo-task-done .todo-item-inner p.meta-date, .todo-list .todo-inbox .todo-item.todo-task-done .todo-item-inner p.todo-text {\n  text-decoration: line-through;\n}\n\n.modal-content {\n  border: none;\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);\n}\n\n.modal-content svg.close {\n  position: absolute;\n  right: -7px;\n  top: -8px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 2px;\n  background: #fff;\n  border-radius: 5px;\n  opacity: 1;\n  color: #4361ee;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: 0.6s;\n}\n\n.modal-content svg.close:hover {\n  box-shadow: none;\n  transition: 0.6s;\n  opacity: 1 !important;\n}\n\n#todoShowListItem .task-text {\n  position: relative;\n  max-height: 260px;\n  padding: 0 16px;\n}\n\n.compose-box {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n#todoShowListItem .modal-content .modal-body {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n#todoShowListItem .compose-content h5 {\n  margin-bottom: 19px;\n  padding-bottom: 19px;\n  border-bottom: 1px solid #e0e6ed;\n}\n\n.compose-box .compose-content h5 {\n  font-weight: 700;\n  font-size: 18px;\n  color: #3b3f5c;\n  text-align: center;\n  margin-bottom: 35px;\n}\n\n.compose-box .compose-content .task-text p {\n  word-break: break-word;\n}\n\n.compose-box .compose-content .task-text img {\n  max-width: 100%;\n}\n\n#todoShowListItem .modal-footer .btn[data-dismiss=modal] {\n  background-color: #fff;\n  color: #4361ee;\n  font-weight: 700;\n  border: 1px solid #e8e8e8;\n  padding: 10px 25px;\n}\n\n#todoShowListItem .modal-footer .btn[data-dismiss=modal] svg {\n  margin-right: 8px;\n  width: 19px;\n  height: 19px;\n  vertical-align: sub;\n}\n\n.compose-box .compose-content form svg {\n  align-self: center;\n  font-size: 19px;\n  margin-right: 14px;\n  color: #4361ee;\n  font-weight: 600;\n}\n\n.compose-box .compose-content form #taskdescription {\n  height: 170px;\n}\n\n.compose-box .compose-content form .validation-text {\n  display: none;\n  color: #e7515a;\n  font-weight: 600;\n  text-align: left;\n  margin-top: 6px;\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n#addTaskModal .modal-footer .btn[data-dismiss=modal] {\n  background-color: #fff;\n  color: #4361ee;\n  font-weight: 700;\n  border: 1px solid #e8e8e8;\n  padding: 10px 25px;\n}\n\n#addTaskModal .modal-footer .btn.add-tsk {\n  background-color: #4361ee;\n  color: #fff;\n  font-weight: 600;\n  border: 1px solid #4361ee;\n  padding: 10px 25px;\n}\n\n#addTaskModal .modal-footer .btn.edit-tsk {\n  background-color: #1abc9c;\n  color: #fff;\n  font-weight: 600;\n  padding: 10px 25px;\n}\n\n.compose-box .compose-content form #editor-container h1,\n.compose-box .compose-content form #editor-container p {\n  color: #3b3f5c;\n}\n\n@media (max-width: 767px) {\n  .todo-inbox {\n    display: block;\n  }\n  .todo-inbox .message-box {\n    width: 100%;\n    margin-bottom: 40px;\n  }\n}\n@media (max-width: 991px) {\n  .mail-box-container {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .todo-inbox .search {\n    border-bottom: 1px solid #e0e6ed;\n  }\n  .todo-inbox .mail-menu {\n    border-bottom: none;\n  }\n  .todo-inbox .search input {\n    border-right: 1px solid #e0e6ed;\n    border-bottom: none;\n  }\n  .todo-inbox .todo-item .todo-item-inner p.todo-text {\n    max-width: calc(100vw - 228px);\n  }\n  .todo-list .tab-title {\n    position: absolute;\n    z-index: 4;\n    left: -100px;\n    width: 0;\n    background: #fff;\n  }\n  .todo-inbox {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n@media (max-width: 575px) {\n  .todo-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body > div {\n    display: block;\n  }\n  .todo-inbox .mail-item div.mail-item-heading .mail-item-inner .f-body .meta-time {\n    margin-bottom: 0;\n    float: none;\n  }\n}\n/*\n=====================\n    IE Support\n=====================\n*/\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /* IE10+ CSS styles go here */\n  .tab-title {\n    width: 100%;\n  }\n}\n/*\n=====================\n    Mozilla Support \n=====================\n*/\n@-moz-document url-prefix() {\n  .todo-inbox .todo-item .todo-item-inner .todo-content {\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/components/custom-modal.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/components/custom-modal.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.modal-content {\n  border: none;\n  border-radius: 6px;\n}\n\n.modal-content hr {\n  border-top: 1px solid #e0e6ed;\n}\n\n.modal-content .modal-header {\n  padding: 12px 26px;\n  border: 1px solid #e0e6ed;\n}\n\n.modal-content .modal-header h5 {\n  font-weight: 700;\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.modal-content .modal-header svg {\n  width: 17px;\n  color: #e3e4eb;\n}\n\n.modal-content .modal-body {\n  padding: 26px 26px;\n}\n\n.modal-content .modal-body a:not(.btn) {\n  color: #4361ee;\n  font-weight: 600;\n}\n\n.modal-content .modal-body p {\n  color: #888ea8;\n  letter-spacing: 1px;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.modal-content .modal-body p:last-child {\n  margin-bottom: 0;\n}\n\n.modal-content .modal-body p:not(:last-child) {\n  margin-bottom: 10px;\n}\n\n.modal-content .modal-footer {\n  border-top: 1px solid #e0e6ed;\n}\n\n.modal-content .modal-footer button.btn {\n  font-weight: 600;\n  padding: 10px 25px;\n  letter-spacing: 1px;\n}\n\n.modal-content .modal-footer button.btn[data-dismiss=modal] {\n  background-color: #fff;\n  color: #4361ee;\n  font-weight: 700;\n  border: 1px solid #e8e8e8;\n}\n\n.modal-content .modal-footer .btn.btn-primary {\n  background-color: #4361ee;\n  color: #fff;\n  border: 1px solid #4361ee;\n}\n\n/*\n    Modal Success\n*/\n.modal-success .modal-content {\n  background-color: #ddf5f0;\n}\n\n/*\n    Modal Video\n*/\n.modal-video .modal-content {\n  background-color: transparent;\n}\n\n.modal-video .video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 30px;\n  height: 0;\n  overflow: hidden;\n}\n\n.modal-video .modal#videoMedia1 .modal-header, .modal-video .modal#videoMedia2 .modal-header {\n  border: none;\n  padding: 0;\n}\n\n.modal-video .video-container iframe,\n.modal-video .video-container object,\n.modal-video .video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.modal-video .modal#videoMedia1 .modal-header .close, .modal-video .modal#videoMedia2 .modal-header .close {\n  color: #fff !important;\n  opacity: 1;\n}\n\n.modal-video .modal-content .modal-header svg {\n  color: #fff;\n}\n\n/*\n    Modal Notification\n*/\n.modal-notification .modal-body .icon-content {\n  margin: 0 0 20px 0px;\n  display: inline-block;\n  padding: 13px;\n  border-radius: 50%;\n  background: #f1f2f3;\n  color: #000;\n}\n\n.modal-notification .modal-body .icon-content svg {\n  width: 36px;\n  height: 36px;\n  color: #888ea8;\n  fill: rgba(0, 23, 55, 0.08);\n}\n\n/*\n    Profile\n*/\n.profile-modal .modal-content {\n  background-color: #805dca;\n}\n\n.profile-modal .modal-content .close {\n  font-size: 19px;\n  font-weight: 600;\n  line-height: 1;\n  color: #fff;\n  text-shadow: none;\n  opacity: 1;\n  text-align: right;\n  margin-right: 13px;\n  margin-top: 8px;\n}\n\n.profile-modal .modal-content .modal-header,\n.profile-modal .modal-content .modal-footer {\n  border: none;\n}\n\n.profile-modal .modal-content .modal-body p {\n  color: #fff;\n}\n\n.profile-modal .modal-content .modal-footer button.btn {\n  box-shadow: none;\n}\n\n/*\n    Slider\n*/\n.modal#sliderModal .modal-content {\n  border: 1px solid transparent;\n  background-color: transparent;\n}\n\n.modal#sliderModal .modal-content .modal-body .carousel-indicators {\n  top: 37%;\n  bottom: auto;\n  display: block;\n  left: auto;\n  margin: auto;\n  right: 14px;\n}\n\n.modal#sliderModal .modal-content .modal-body a.carousel-control-prev span.carousel-control-prev-icon {\n  position: absolute;\n  bottom: 14px;\n  left: 7px;\n  background-image: none;\n  color: #4361ee;\n}\n\n.modal#sliderModal .modal-content .modal-body a.carousel-control-next span.carousel-control-next-icon {\n  position: absolute;\n  bottom: 14px;\n  right: 7px;\n  background-image: none;\n  color: #4361ee;\n}\n\n.modal#sliderModal .modal-content .modal-body a.carousel-control-prev span.carousel-control-prev-text {\n  position: absolute;\n  bottom: 17px;\n  left: 30px;\n  color: #4361ee;\n}\n\n.modal#sliderModal .modal-content .modal-body a.carousel-control-next span.carousel-control-next-text {\n  position: absolute;\n  bottom: 17px;\n  right: 30px;\n  color: #4361ee;\n}\n\n.modal#sliderModal .modal-content .modal-body button.close {\n  position: absolute;\n  z-index: 2;\n  right: 16px;\n  top: 13px;\n  opacity: 1;\n  text-shadow: none;\n}\n\n.modal#sliderModal .modal-content .modal-body button.close:hover {\n  color: #4361ee;\n}\n\n.carousel-indicators li {\n  background-color: #a1a3ac;\n}\n\n.carousel-indicators .active {\n  background-color: #4361ee;\n}\n\n.modal-content .modal-body a:not(.btn) {\n  opacity: 1;\n}\n\n/*\n    Login\n*/\n.login-modal .modal-header,\n.register-modal .modal-header {\n  text-align: center;\n  border: none;\n  padding-bottom: 0;\n}\n\n.login-modal .modal-body .form-group,\n.register-modal .modal-body .form-group {\n  position: relative;\n}\n\n.login-modal .modal-body .form-group svg,\n.register-modal .modal-body .form-group svg {\n  position: absolute;\n  width: 20px;\n  top: 11px;\n  left: 9px;\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.login-modal .modal-body .form-group input,\n.register-modal .modal-body .form-group input {\n  padding-left: 35px;\n  border: none;\n  border-bottom: 1px solid #e0e6ed;\n  border-radius: 0;\n}\n\n.login-modal .modal-body .form-group input.form-control:focus,\n.register-modal .modal-body .form-group input.form-control:focus {\n  box-shadow: none;\n}\n\n.login-modal .modal-body .division,\n.register-modal .modal-body .division {\n  text-align: center;\n  font-size: 13px;\n  margin: 16px 0;\n}\n\n.login-modal .modal-body .social,\n.register-modal .modal-body .social {\n  text-align: center;\n}\n\n.login-modal .modal-body .social a,\n.register-modal .modal-body .social a {\n  background: transparent;\n  box-shadow: none;\n  border: 2px solid #e0e6ed;\n}\n\n.login-modal .modal-body .social a.social-fb svg,\n.register-modal .modal-body .social a.social-fb svg {\n  color: #4361ee;\n}\n\n.login-modal .modal-body .social a.social-github svg,\n.register-modal .modal-body .social a.social-github svg {\n  color: #e7515a;\n}\n\n.login-modal .modal-body .social a.social-fb .brand-name,\n.register-modal .modal-body .social a.social-fb .brand-name {\n  color: #4361ee;\n}\n\n.login-modal .modal-body .social a.social-github .brand-name,\n.register-modal .modal-body .social a.social-github .brand-name {\n  color: #e7515a;\n}\n\n/*\n    Register\n*/\n@media (min-width: 576px) {\n  .login-modal .modal-dialog,\n.register-modal .modal-dialog {\n    max-width: 330px;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.todo-inbox .todo-item .todo-item-inner .action-dropdown .dropdown-menu.show,\n.todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu.show {\n    top: 10px !important;\n}\n.ql-container,\n.ql-editor {\n    min-height: inherit;\n}\n.ql-editor {\n    max-height: 200px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n    border: 1px solid transparent;\n    color: #4361ee;\n}\n.ql-snow .ql-stroke {\n    fill: none;\n    stroke: #4361ee;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n    fill: #4361ee;\n}\n.ql-toolbar.ql-snow {\n    border: 1px solid #bfc9d4;\n    box-sizing: border-box;\n    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n    padding: 8px;\n    border-radius: 6px;\n}\n.ql-container.ql-snow {\n    border-top: 0px;\n    margin-top: 28px;\n    padding: 13px 0;\n    border: 1px solid #bfc9d4 !important;\n    border-radius: 6px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/apps/todolist.scss":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/sass/apps/todolist.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_todolist_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./todolist.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/apps/todolist.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_todolist_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_todolist_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/assets/sass/components/custom-modal.scss":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/sass/components/custom-modal.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_custom_modal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./custom-modal.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/components/custom-modal.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_custom_modal_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_custom_modal_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./todo_list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/apps/todo_list.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/apps/todo_list.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_list_vue_vue_type_template_id_7dcf7a24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_list.vue?vue&type=template&id=7dcf7a24& */ "./resources/js/src/views/apps/todo_list.vue?vue&type=template&id=7dcf7a24&");
/* harmony import */ var _todo_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_list.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/todo_list.vue?vue&type=script&lang=js&");
/* harmony import */ var _todo_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_list.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/apps/todo_list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _todo_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _todo_list_vue_vue_type_template_id_7dcf7a24___WEBPACK_IMPORTED_MODULE_0__.render,
  _todo_list_vue_vue_type_template_id_7dcf7a24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/todo_list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/todo_list.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo_list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./todo_list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/todo_list.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo_list.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./todo_list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/src/views/apps/todo_list.vue?vue&type=template&id=7dcf7a24&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo_list.vue?vue&type=template&id=7dcf7a24& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_list_vue_vue_type_template_id_7dcf7a24___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_list_vue_vue_type_template_id_7dcf7a24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_list_vue_vue_type_template_id_7dcf7a24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./todo_list.vue?vue&type=template&id=7dcf7a24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=template&id=7dcf7a24&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=template&id=7dcf7a24&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/apps/todo_list.vue?vue&type=template&id=7dcf7a24& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "layout-px-spacing todo-list" },
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
                      [_c("span", [_vm._v("Todo List")])]
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
          { staticClass: "col-xl-12 col-lg-12 col-md-12" },
          [
            _c("div", { staticClass: "mail-box-container" }, [
              _c("div", {
                staticClass: "mail-overlay",
                class: { "mail-overlay-show": _vm.is_show_task_menu },
                on: {
                  click: function ($event) {
                    _vm.is_show_task_menu = false
                  },
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-title",
                  class: { "mail-menu-show": _vm.is_show_task_menu },
                },
                [
                  _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-12 col-sm-12 col-12 text-center",
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "feather feather-clipboard",
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
                                  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
                                },
                              }),
                              _vm._v(" "),
                              _c("rect", {
                                attrs: {
                                  x: "8",
                                  y: "2",
                                  width: "8",
                                  height: "4",
                                  rx: "1",
                                  ry: "1",
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("h5", { staticClass: "app-title" }, [
                            _vm._v("Todo List"),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "perfect-scrollbar",
                        { staticClass: "todoList-sidebar-scroll" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-md-12 col-sm-12 col-12 mt-4 pl-0",
                            },
                            [
                              _c(
                                "b-tabs",
                                {
                                  attrs: { pills: "", "nav-class": "d-block" },
                                  model: {
                                    value: _vm.tab_index,
                                    callback: function ($$v) {
                                      _vm.tab_index = $$v
                                    },
                                    expression: "tab_index",
                                  },
                                },
                                [
                                  _c("b-tab", {
                                    attrs: { "button-id": "all-list" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.tab_changed("")
                                      },
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "title",
                                        fn: function () {
                                          return [
                                            _c(
                                              "svg",
                                              {
                                                staticClass:
                                                  "feather feather-list",
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
                                            _vm._v(
                                              "\n                                            Inbox\n                                            "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "todo-badge badge",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(
                                                      _vm.task_list &&
                                                        _vm.task_list.filter(
                                                          function (d) {
                                                            return (
                                                              d.status !=
                                                              "trash"
                                                            )
                                                          }
                                                        ).length
                                                    ) +
                                                    "\n                                            "
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
                                  _c("b-tab", {
                                    attrs: { "button-id": "todo-task-done" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.tab_changed("complete")
                                      },
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "title",
                                        fn: function () {
                                          return [
                                            _c(
                                              "svg",
                                              {
                                                staticClass:
                                                  "feather feather-thumbs-up",
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
                                                    d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3",
                                                  },
                                                }),
                                              ]
                                            ),
                                            _vm._v(
                                              "\n                                            Done\n                                            "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "todo-badge badge",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(
                                                      _vm.task_list &&
                                                        _vm.task_list.filter(
                                                          function (d) {
                                                            return (
                                                              d.status ==
                                                              "complete"
                                                            )
                                                          }
                                                        ).length
                                                    ) +
                                                    "\n                                            "
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
                                  _c("b-tab", {
                                    attrs: {
                                      "button-id": "todo-task-important",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.tab_changed("important")
                                      },
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "title",
                                        fn: function () {
                                          return [
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
                                            _vm._v(
                                              "\n                                            Important\n                                            "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "todo-badge badge",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(
                                                      _vm.task_list &&
                                                        _vm.task_list.filter(
                                                          function (d) {
                                                            return (
                                                              d.status ==
                                                              "important"
                                                            )
                                                          }
                                                        ).length
                                                    ) +
                                                    "\n                                            "
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
                                  _c("b-tab", {
                                    attrs: { "button-id": "todo-task-trash" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.tab_changed("trash")
                                      },
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "title",
                                        fn: function () {
                                          return [
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
                                              "\n                                            Trash\n                                        "
                                            ),
                                          ]
                                        },
                                        proxy: true,
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn",
                          attrs: { id: "addTask", href: "javascript:;" },
                          on: {
                            click: function ($event) {
                              return _vm.edit_task()
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
                          _vm._v(
                            "\n                            New Task\n                        "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "accordion todo-inbox",
                  attrs: { id: "todo-inbox" },
                },
                [
                  _c(
                    "div",
                    { staticClass: "search" },
                    [
                      _c("b-input", {
                        staticClass: "input-search",
                        attrs: { placeholder: "Search Here..." },
                        on: {
                          keyup: function ($event) {
                            return _vm.search_tasks()
                          },
                        },
                        model: {
                          value: _vm.search_task,
                          callback: function ($$v) {
                            _vm.search_task = $$v
                          },
                          expression: "search_task",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "d-flex align-items-center",
                          on: {
                            click: function ($event) {
                              _vm.is_show_task_menu = !_vm.is_show_task_menu
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
                                attrs: { x1: "3", y1: "6", x2: "21", y2: "6" },
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "todo-box" },
                    [
                      _c(
                        "perfect-scrollbar",
                        {
                          staticClass: "todo-box-scroll",
                          attrs: {
                            options: {
                              wheelSpeed: 0.5,
                              swipeEasing: !0,
                              minScrollbarLength: 40,
                              maxScrollbarLength: 300,
                              suppressScrollX: true,
                            },
                          },
                        },
                        _vm._l(_vm.filtered_task_list, function (task) {
                          return _c(
                            "div",
                            {
                              key: task.task_id,
                              staticClass: "todo-item all-list",
                              class: {
                                "todo-task-done": task.status == "complete",
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "todo-item-inner" },
                                [
                                  _c("b-checkbox", {
                                    staticClass: "checkbox-primary new-control",
                                    attrs: {
                                      variant: "primary",
                                      checked: task.status == "complete",
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.task_complete(task)
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "todo-content",
                                      on: {
                                        click: function ($event) {
                                          return _vm.view_task(task)
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "h5",
                                        { staticClass: "todo-heading" },
                                        [_vm._v(_vm._s(task.title))]
                                      ),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "meta-date" }, [
                                        _vm._v(_vm._s(task.date)),
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "todo-text" }, [
                                        _vm._v(_vm._s(task.description_text)),
                                      ]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "priority-dropdown" },
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            right: true,
                                            "toggle-tag": "a",
                                            variant: "icon-only",
                                            "toggle-class":
                                              _vm.priority_class(task),
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
                                                          "feather feather-alert-octagon",
                                                        staticStyle: {
                                                          width: "24px",
                                                          height: "24px",
                                                        },
                                                        attrs: {
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
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
                                                        _c("polygon", {
                                                          attrs: {
                                                            points:
                                                              "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
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
                                              attrs: { "link-class": "danger" },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.set_priority(
                                                    task,
                                                    "high"
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "feather feather-alert-octagon",
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
                                                        "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
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
                                              _vm._v(
                                                "\n                                                High\n                                            "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                "link-class": "warning",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.set_priority(
                                                    task,
                                                    "middle"
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "feather feather-alert-octagon",
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
                                                        "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
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
                                              _vm._v(
                                                "\n                                                Middle\n                                            "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                "link-class": "primary",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.set_priority(
                                                    task,
                                                    "low"
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "feather feather-alert-octagon",
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
                                                        "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
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
                                              _vm._v(
                                                "\n                                                Low\n                                            "
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "action-dropdown" },
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
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
                                            true
                                          ),
                                        },
                                        [
                                          _vm._v(" "),
                                          task.status == "trash"
                                            ? [
                                                _c(
                                                  "b-dropdown-item",
                                                  {
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.delete_task(
                                                          task,
                                                          "delete_permanent"
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Permanent Delete")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-dropdown-item",
                                                  {
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.delete_task(
                                                          task,
                                                          "restore"
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Revive Task")]
                                                ),
                                              ]
                                            : [
                                                _c(
                                                  "b-dropdown-item",
                                                  {
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.edit_task(
                                                          task
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Edit")]
                                                ),
                                                _vm._v(" "),
                                                task.status == "important"
                                                  ? _c(
                                                      "b-dropdown-item",
                                                      {
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            return _vm.set_important(
                                                              task
                                                            )
                                                          },
                                                        },
                                                      },
                                                      [_vm._v("Back to List")]
                                                    )
                                                  : _c(
                                                      "b-dropdown-item",
                                                      {
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            return _vm.set_important(
                                                              task
                                                            )
                                                          },
                                                        },
                                                      },
                                                      [_vm._v("Important")]
                                                    ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-dropdown-item",
                                                  {
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.delete_task(
                                                          task,
                                                          "delete"
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Delete")]
                                                ),
                                              ],
                                        ],
                                        2
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          )
                        }),
                        0
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                attrs: {
                  centered: "",
                  id: "todoShowListItem",
                  "hide-header": true,
                  "content-class": "todolist-popup",
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
                                return _vm.$bvModal.hide("todoShowListItem")
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
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(
                              "\n                        Close\n                    "
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
                _c(
                  "div",
                  {
                    on: {
                      click: function ($event) {
                        return _vm.$bvModal.hide("todoShowListItem")
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
                _vm.selected_task
                  ? _c("div", { staticClass: "compose-box" }, [
                      _c("div", { staticClass: "compose-content" }, [
                        _c("h5", { staticClass: "task-heading" }, [
                          _vm._v(_vm._s(_vm.selected_task.title)),
                        ]),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "task-text overflow-auto",
                          domProps: {
                            innerHTML: _vm._s(_vm.selected_task.description),
                          },
                        }),
                      ]),
                    ])
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                attrs: {
                  centered: "",
                  id: "addTaskModal",
                  "hide-header": true,
                  "content-class": "todolist-popup",
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
                                return _vm.$bvModal.hide("addTaskModal")
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "flaticon-cancel-12" }),
                            _vm._v(" Discard"),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "add-tsk",
                            attrs: { variant: "default" },
                            on: {
                              click: function ($event) {
                                return _vm.save_task()
                              },
                            },
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.params.task_id ? "Update" : "Add")
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
                _c(
                  "div",
                  {
                    on: {
                      click: function ($event) {
                        return _vm.$bvModal.hide("addTaskModal")
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
                  _c(
                    "div",
                    { staticClass: "compose-content" },
                    [
                      _c("h5", {}, [
                        _vm._v(
                          _vm._s(
                            _vm.params.task_id ? "Update Task" : "Add Task"
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("b-form", [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _c("div", { staticClass: "d-flex mail-to mb-4" }, [
                              _c(
                                "svg",
                                {
                                  staticClass:
                                    "feather feather-edit-3 flaticon-notes",
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
                                  _c("path", { attrs: { d: "M12 20h9" } }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
                                    },
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "w-100" },
                                [
                                  _c("b-input", {
                                    attrs: { placeholder: "Task Title" },
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
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "d-flex mail-subject mb-4" }, [
                          _c(
                            "svg",
                            {
                              staticClass:
                                "feather feather-file-text flaticon-menu-list flex-shrink-0",
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
                                  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                                },
                              }),
                              _vm._v(" "),
                              _c("polyline", {
                                attrs: { points: "14 2 14 8 20 8" },
                              }),
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
                              _c("polyline", {
                                attrs: { points: "10 9 9 9 8 9" },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-100" },
                            [
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
                    ],
                    1
                  ),
                ]),
              ]
            ),
          ],
          1
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