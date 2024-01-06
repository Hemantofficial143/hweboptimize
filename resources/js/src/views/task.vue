<template>
    <div class="layout-px-spacing">
        <b-modal id="taskModal" ref="taskModal" title="Task Details" size="lg" ok-title="Save" @ok="submitForm"
                 @hidden="resetForm" @cancel="resetForm">
            <b-form-row>
                <div class="col-md-12 mb-4">
                    <label>Task name</label>
                    <b-form-input v-model="modal.name"></b-form-input>
                </div>
                <div class="col-md-12 mb-4">
                    <label>Task description</label>
                    <quill-editor v-model="modal.description"></quill-editor>
                </div>
                <div class="col-md-12 mb-4">
                    <label>Task Priority</label>
                    <b-select v-model="modal.priority" name="priority">
                        <b-select-option value="LOW">Low</b-select-option>
                        <b-select-option value="MEDIUM">Medium</b-select-option>
                        <b-select-option value="HIGH">High</b-select-option>
                    </b-select>
                </div>
                <div class="col-md-12 mb-4">
                    <label>Task Image</label>

                    <input type="file" class="form-control" @change="changeImage">

                </div>
                <div class="col-md-12 mb-4">
                    <div class="field-wrapper toggle-pass d-flex align-items-center">
                        <b-checkbox switch v-model="modal.is_completed" class="switch s-primary"></b-checkbox>
                        <p class="d-inline-block">Task Completed ?</p>
                    </div>
                </div>
            </b-form-row>
        </b-modal>

        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Drag and Drop</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>


        <div class="row">
            <div class="col-lg-12 layout-spacing layout-top-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Tasks</h4>
                            </div>
                        </div>
                    </div>

                    <div class="panel-body">

                        <div class="parent ex-1">
                            <b-button variant="primary" @click="addTaskModalToggle(true)">
                                Add Task
                            </b-button>
                            <div class="row mt-1" v-if="bucket != null">

                                <div class="col-md-4" v-for="(one,key) in bucket">
                                    <b-card :title="`${key} Priority`">
                                        <draggable :key="key" class="drag-drop d-ragula" :data-type="key"
                                                   group="default" ghost-class="gu-transit"
                                                   :list="one"
                                                   :move="onChange"
                                                   drag-class="el-drag-ex-1" :animation="200">

                                            <b-card :key="k" v-for="(task,k) in one" class="component-card_8 "
                                                    :class="{'bg-warning' : !task.is_completed,'bg-success' : task.is_completed}">

                                                <div class="progress-order">
                                                    <div class="progress-order-header">
                                                        <div class="row">
                                                            <div class="col-md-6 col-sm-6 col-12">
                                                                <h4>{{ task.title }}</h4>
                                                            </div>
                                                            <img width="200px" height="200px" v-if="task.image_url != null" :src="task.image_url" :alt="task.image_url">
                                                            <div class="col-md-6 pl-0 col-sm-6 col-12 text-right">
                                                                <b-button variant="secondary" @click="editTask(task)"
                                                                          size="sm">
                                                                    Edit
                                                                </b-button>
                                                                <b-button variant="danger" @click="deleteTask(task)"
                                                                          size="sm">
                                                                    Delete
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="progress-order-body">
                                                        <div class="row mt-4">
                                                            <div class="col-md-12 text-right">
                                                                <b-form-checkbox v-model="task.is_completed" switch
                                                                                 size="md"
                                                                                 @change="changeCompleteStatus(task)">
                                                                    {{ task.is_completed ? 'Completed' : 'InComplete'}}
                                                                </b-form-checkbox>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </draggable>
                                    </b-card>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.panel {
    padding: 0;
}
</style>
<script>


import dropfile from "./dropfile.vue";

import '@/assets/sass/forms/file-upload-with-preview.min.css';

import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/drag-drop/drag-drop.css';
import highlight from '@/components/plugins/highlight.vue';
import draggable from 'vuedraggable';
import {BCard, BButton, BModal, BForm, BFormInput, BFormRow, BInput, BFormInvalidFeedback} from 'bootstrap-vue'

import FileUploadWithPreview from "file-upload-with-preview";
import axios from 'axios'

import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Create component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);


export default {
    metaInfo: {title: 'Drag & Drop'},
    components: {
        dropfile,
        FilePond,
        BFormInput,
        BCard, BModal, BForm, BFormRow, BInput, BFormInvalidFeedback,
        highlight,
        draggable, BButton
    },
    data() {
        return {
            modal: {
                name: null,
                description: null,
                priority: null,
                image: null,
                is_completed: false,
            },
            bucket: null
        }
    },
    mounted() {

        this.getTasks()
    },
    methods: {
        changeImage(event){
            if(event.target.files.length > 0){
                this.modal.image = event.target.files[0]
            }else{
                this.modal.image = null
            }
        },
        displayToast($message, $action) {
            if ($action) {
                this.$bvToast.toast($message, {
                    headerClass: 'd-none',
                    bodyClass: 'toast-success',
                    toaster: 'b-toaster-top-center',
                    autoHideDelay: 1000
                });
            } else {
                this.$bvToast.toast($message, {
                    headerClass: 'd-none',
                    bodyClass: 'toast-danger',
                    toaster: 'b-toaster-top-center',
                    autoHideDelay: 1000
                });
            }
        },
        changeCompleteStatus(task) {
            axios.post(`task-complete-status-change/${task.id}`, {status: task.is_completed}).then(response => {
                const res = response.data
                if (res.success) {
                    this.displayToast(res.message, true)
                } else {
                    this.displayToast('something went wrong', false)
                }
            })
        },
        resetForm() {
            this.modal = {
                name: null,
                description: null,
                priority: null,
                image: null,
                is_completed: false,
            }
        },
        onChange(data) {

            if (data.from != data.to) {
                let moveTo = $(data.to).data('type')
                axios.post(`task-priority-change/${data.draggedContext.element.id}`, {status: moveTo}).then(response => {
                    const res = response.data
                    if (res.success) {
                        this.displayToast(res.message, true)
                    } else {
                        this.displayToast('something went wrong', false)
                    }
                })
            }
        },
        getComponentData() {
            return {
                on: {
                    change: this.handleChange,
                    input: this.inputChanged
                },
                attrs: {
                    wrap: true
                },
                props: {
                    value: this.activeNames
                }
            };
        },
        handleChange(record) {
            console.log(record, 'handleChange');
        },
        inputChanged(value) {
            console.log(value, 'inputChanged')
        },
        checkMove(data) {
            console.log(data, 'data')
        },
        deleteTask(task){
            this.$swal({
                icon: 'warning',
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonText: 'Delete',
                padding: '2em'
            }).then(result => {
                if (result.value) {
                    axios.post(`task-delete/${task.id}`).then(response => {
                        const res = response.data
                        if (res.success) {
                            this.displayToast('Your file has been deleted.',true)
                            this.getTasks()
                        }else{
                            this.displayToast('something went wrong.',false)
                        }
                    })

                }
            });
        },
        editTask(task) {
            this.modal = {
                name: task.title,
                description: task.description,
                priority: task.priority,
                image: null,
                is_completed: task.is_completed,
                id: task.id
            }
            this.addTaskModalToggle(true)
        },
        getTasks() {
            axios.get('task-get').then(response => {
                const res = response.data
                if (res.success) {
                    this.bucket = res.data.tasks
                }
            })
        },
        submitForm(BvModalEvent) {
            BvModalEvent.preventDefault()
            console.log(this.modal)
            let formData = new FormData()

            formData.append('name',this.modal.name)
            formData.append('description',this.modal.description)
            formData.append('priority',this.modal.priority)
            formData.append('image',this.modal.image)
            formData.append('is_completed',this.modal.is_completed)


            axios.post('task-store', formData).then(response => {
                const res = response.data
                if (res.success) {
                    this.getTasks()
                    this.addTaskModalToggle(false)
                }
            })
        },
        addTaskModalToggle($state) {
            if ($state) {
                this.$refs.taskModal.show()
            } else {
                this.resetForm()
                this.$refs.taskModal.hide()
            }

        },
        toggleCode(name) {
            if (this.code_arr.includes(name)) {
                this.code_arr = this.code_arr.filter(d => d != name);
            } else {
                this.code_arr.push(name);
            }
        }
    }
};
</script>
