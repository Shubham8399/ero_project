(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{"C+xf":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n",""])},SZbE:function(t,e,s){"use strict";var o={components:{},data:function(){return{notesForm:new Form({batch_id:"",subject_id:"",title:"",description:"",upload_token:""}),batches:[],selected_batch:null,subjects:[],selected_subject:null,subject_detail:[],module_id:"",clearAttachment:!0}},props:["uuid"],mounted:function(){helper.hasPermission("create-notes")||helper.hasPermission("edit-notes")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid?this.get():this.notesForm.upload_token=this.$uuid.v4(),this.getPreRequisite()},methods:{hasPermission:function(t){return helper.hasPermission(t)},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/notes/pre-requisite").then((function(s){t.batches=s.batches,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getSubjects:function(){var t=this;this.uuid||(this.notesForm.subject_id="",this.selected_subject=null);var e=this.$loading.show();axios.post("/api/batch/"+this.notesForm.batch_id+"/subjects").then((function(s){t.subjects=s.subjects,t.subject_details=s.subject_details,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},proceed:function(){this.uuid?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.notesForm.post("/api/notes").then((function(s){toastr.success(s.message),t.clearAttachment=!t.clearAttachment,t.notesForm.upload_token=t.$uuid.v4(),t.selected_batch=null,t.selected_subject=null,t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/notes/"+this.uuid).then((function(s){var o=s.notes;t.notesForm.title=o.title,t.notesForm.description=o.description,t.notesForm.batch_id=o.subject.batch_id,t.notesForm.subject_id=o.subject_id,t.selected_batch=t.notesForm.batch_id?{id:o.subject.batch_id,name:o.subject.batch.course.name+" "+o.subject.batch.name}:null,t.selected_subject=o.subject_id?{id:o.subject_id,name:o.subject.name+" ("+o.subject.code+")"}:null,t.notesForm.upload_token=o.upload_token,t.module_id=o.id,e.hide()})).catch((function(s){e.hide(),helper.showErrorMsg(s),t.$router.push("/resource/notes")}))},update:function(){var t=this,e=this.$loading.show();this.notesForm.patch("/api/notes/"+this.uuid).then((function(s){toastr.success(s.message),e.hide(),t.$router.push("/resource/notes")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onBatchSelect:function(t){this.notesForm.batch_id=t.id},onSubjectSelect:function(t){this.notesForm.subject_id=t.id}},watch:{"notesForm.batch_id":function(t){t&&this.getSubjects()}}},n=(s("cBME"),s("KHd+")),i=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.notesForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch"))+" ")]),t._v(" "),s("v-select",{attrs:{label:"name","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch")},on:{select:t.onBatchSelect,close:function(e){return t.notesForm.errors.clear("batch_id")},remove:function(e){t.notesForm.batch_id=""}},model:{value:t.selected_batch,callback:function(e){t.selected_batch=e},expression:"selected_batch"}},[t.batches.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.notesForm,"prop-name":"batch_id"}})],1),t._v(" "),t.notesForm.batch_id?s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.subject"))+" ")]),t._v(" "),s("v-select",{attrs:{label:"name",name:"subject_id",id:"subject_id",options:t.subjects,placeholder:t.trans("resource.select_subject")},on:{select:t.onSubjectSelect,close:function(e){return t.notesForm.errors.clear("subject_id")},remove:function(e){t.notesForm.subject_id=""}},model:{value:t.selected_subject,callback:function(e){t.selected_subject=e},expression:"selected_subject"}},[t.subjects.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.notesForm,"prop-name":"subject_id"}})],1):t._e(),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.notes_title")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.notesForm.title,expression:"notesForm.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:t.trans("resource.notes_title")},domProps:{value:t.notesForm.title},on:{input:function(e){e.target.composing||t.$set(t.notesForm,"title",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.notesForm,"prop-name":"title"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("file-upload-input",{attrs:{"button-text":t.trans("general.upload_document"),token:t.notesForm.upload_token,module:"notes","clear-file":t.clearAttachment,"module-id":t.module_id}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("html-editor",{attrs:{name:"description",model:t.notesForm.description,height:"300",isUpdate:!!t.uuid},on:{"update:model":function(e){return t.$set(t.notesForm,"description",e)},clearErrors:function(e){return t.notesForm.errors.clear("description")}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.notesForm,"prop-name":"description"}})],1)])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/resource/notes"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.uuid?t._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.uuid?s("span",[t._v(t._s(t.trans("general.update")))]):s("span",[t._v(t._s(t.trans("general.save")))])])],1)])])}),[],!1,null,null,null);e.a=i.exports},cBME:function(t,e,s){"use strict";var o=s("cVhg");s.n(o).a},cVhg:function(t,e,s){var o=s("C+xf");"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(o,n);o.locals&&(t.exports=o.locals)},opvQ:function(t,e,s){"use strict";s.r(e);var o={components:{notesForm:s("SZbE").a},data:function(){return{uuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("edit-notes")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},n=s("KHd+"),i=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("resource.edit_notes")))])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/resource/notes")}}},[s("i",{staticClass:"fas fa-list"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("resource.notes")))])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("notes-form",{attrs:{uuid:t.uuid}})],1)])])])}),[],!1,null,null,null);e.default=i.exports}}]);
//# sourceMappingURL=edit.js.map?id=842987fb44d2604c8eb4