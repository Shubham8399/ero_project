(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{Q4oE:function(t,e,s){"use strict";var a=s("cS9s");s.n(a).a},TXmY:function(t,e,s){"use strict";s.r(e);var a={components:{syllabusForm:s("UlKi").a},data:function(){return{uuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("edit-syllabus")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},l=s("KHd+"),i=Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("resource.edit_syllabus")))])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/resource/syllabus")}}},[s("i",{staticClass:"fas fa-list"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("resource.syllabus")))])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("syllabus-form",{attrs:{uuid:t.uuid}})],1)])])])}),[],!1,null,null,null);e.default=i.exports},UlKi:function(t,e,s){"use strict";var a={components:{},data:function(){return{syllabusForm:new Form({title:"",description:"",batch_id:"",subject_id:"",details:[],topics:[],upload_token:""}),batches:[],selected_batch:null,subjects:[],selected_subject:null,subject_detail:[],module_id:"",clearAttachment:!0}},props:["uuid"],mounted:function(){helper.hasPermission("create-syllabus")||helper.hasPermission("edit-syllabus")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid?this.get():(this.addDetailRow(),this.addTopicRow(),this.syllabusForm.upload_token=this.$uuid.v4()),this.getPreRequisite()},methods:{hasPermission:function(t){return helper.hasPermission(t)},addDetailRow:function(){this.syllabusForm.details.push({title:"",description:""})},confirmDeleteDetail:function(t){var e=this;return function(s){return e.deleteDetail(t)}},deleteDetail:function(t){this.syllabusForm.details.splice(t,1)},getDetailTitleName:function(t){return t+"_detail_title"},getDetailDescriptionName:function(t){return t+"_detail_description"},addTopicRow:function(){this.syllabusForm.topics.push({title:"",start_date:"",end_date:"",description:""})},confirmDeleteTopic:function(t){var e=this;return function(s){return e.deleteTopic(t)}},deleteTopic:function(t){this.syllabusForm.topics.splice(t,1)},getTopicTitleName:function(t){return t+"_topic_title"},getTopicDescriptionName:function(t){return t+"_topic_description"},getTopicStartDateName:function(t){return t+"_topic_start_date"},getTopicEndDateName:function(t){return t+"_topic_end_date"},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/syllabus/pre-requisite").then((function(s){t.batches=s.batches,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getSubjects:function(){var t=this;this.uuid||(this.syllabusForm.subject_id="",this.selected_subject=null);var e=this.$loading.show();axios.post("/api/batch/"+this.syllabusForm.batch_id+"/subjects").then((function(s){t.subjects=s.subjects,t.subject_details=s.subject_details,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},proceed:function(){this.uuid?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.syllabusForm.post("/api/syllabus").then((function(s){toastr.success(s.message),t.clearAttachment=!t.clearAttachment,t.syllabusForm.upload_token=t.$uuid.v4(),t.selected_batch=null,t.selected_subject=null,t.syllabusForm.details=[],t.syllabusForm.topics=[],t.addRow(),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/syllabus/"+this.uuid).then((function(s){var a=s.syllabus;t.syllabusForm.title=a.title,t.syllabusForm.description=a.description,t.syllabusForm.batch_id=a.subject.batch_id,t.syllabusForm.subject_id=a.subject_id,t.selected_batch=t.syllabusForm.batch_id?{id:a.subject.batch_id,name:a.subject.batch.course.name+" "+a.subject.batch.name}:null,t.selected_subject=a.subject_id?{id:a.subject_id,name:a.subject.name+" ("+a.subject.code+")"}:null,t.syllabusForm.upload_token=a.upload_token,a.syllabus_details.forEach((function(e){t.syllabusForm.details.push({title:e.title,description:e.description})})),a.syllabus_topics.forEach((function(e){t.syllabusForm.topics.push({title:e.title,start_date:e.start_date,end_date:e.end_date,description:e.description})})),t.module_id=a.id,e.hide()})).catch((function(s){e.hide(),helper.showErrorMsg(s),t.$router.push("/resource/syllabus")}))},update:function(){var t=this,e=this.$loading.show();this.syllabusForm.patch("/api/syllabus/"+this.uuid).then((function(s){toastr.success(s.message),e.hide(),t.$router.push("/resource/syllabus")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onBatchSelect:function(t){this.syllabusForm.batch_id=t.id},onSubjectSelect:function(t){this.syllabusForm.subject_id=t.id}},watch:{"syllabusForm.batch_id":function(t){t&&this.getSubjects()}}},l=(s("Q4oE"),s("KHd+")),i=Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.syllabusForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch"))+" ")]),t._v(" "),s("v-select",{attrs:{label:"name","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch")},on:{select:t.onBatchSelect,close:function(e){return t.syllabusForm.errors.clear("batch_id")},remove:function(e){t.syllabusForm.batch_id=""}},model:{value:t.selected_batch,callback:function(e){t.selected_batch=e},expression:"selected_batch"}},[t.batches.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.syllabusForm,"prop-name":"batch_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[t.syllabusForm.batch_id?s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.subject"))+" ")]),t._v(" "),s("v-select",{attrs:{label:"name",name:"subject_id",id:"subject_id",options:t.subjects,placeholder:t.trans("resource.select_subject")},on:{select:t.onSubjectSelect,close:function(e){return t.syllabusForm.errors.clear("subject_id")},remove:function(e){t.syllabusForm.subject_id=""}},model:{value:t.selected_subject,callback:function(e){t.selected_subject=e},expression:"selected_subject"}},[t.subjects.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.syllabusForm,"prop-name":"subject_id"}})],1):t._e()]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.syllabus_title")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.syllabusForm.title,expression:"syllabusForm.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:t.trans("resource.syllabus_title")},domProps:{value:t.syllabusForm.title},on:{input:function(e){e.target.composing||t.$set(t.syllabusForm,"title",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.syllabusForm,"prop-name":"title"}})],1)]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.syllabus_description")))]),t._v(" "),s("autosize-textarea",{attrs:{rows:"2",name:"description",placeholder:t.trans("resource.syllabus_description")},model:{value:t.syllabusForm.description,callback:function(e){t.$set(t.syllabusForm,"description",e)},expression:"syllabusForm.description"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.syllabusForm,"prop-name":"description"}})],1)])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("resource.syllabus_detail")))]),t._v(" "),t._l(t.syllabusForm.details,(function(e,a){return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.syllabus_detail_title"))+" \n                        "),s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDeleteDetail(a)},expression:"{ok: confirmDeleteDetail(index)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.delete"),expression:"trans('general.delete')"}],key:a+"_delete_detail",staticClass:"btn btn-xs btn-danger m-l-20",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-times"})])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"detail.title"}],staticClass:"form-control",attrs:{type:"text",name:t.getDetailTitleName(a),placeholder:t.trans("resource.syllabus_detail_title")},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.syllabusForm,"prop-name":t.getDetailTitleName(a)}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.syllabus_detail_description")))]),t._v(" "),s("autosize-textarea",{attrs:{rows:"2",name:t.getDetailDescriptionName(a),placeholder:t.trans("resource.syllabus_detail_description")},model:{value:e.description,callback:function(s){t.$set(e,"description",s)},expression:"detail.description"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.syllabusForm,"prop-name":t.getDetailDescriptionName(a)}})],1)]})),t._v(" "),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light",attrs:{type:"button"},on:{click:t.addDetailRow}},[t._v(t._s(t.trans("resource.syllabus_add_new_detail")))])])],2),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("resource.syllabus_topic")))]),t._v(" "),t._l(t.syllabusForm.topics,(function(e,a){return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.syllabus_topic_title"))+" \n                            "),s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDeleteTopic(a)},expression:"{ok: confirmDeleteTopic(index)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.delete"),expression:"trans('general.delete')"}],key:a+"_delete_topic",staticClass:"btn btn-xs btn-danger m-l-20",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-times"})])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"topic.title"}],staticClass:"form-control",attrs:{type:"text",name:t.getTopicTitleName(a),placeholder:t.trans("resource.syllabus_topic_title")},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.syllabusForm,"prop-name":t.getTopicTitleName(a)}})],1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.syllabus_topic_start_date")))]),t._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("resource.syllabus_start_date")},on:{selected:function(e){t.syllabusForm.errors.clear(t.getTopicStartDateName(a))}},model:{value:e.start_date,callback:function(s){t.$set(e,"start_date",s)},expression:"topic.start_date"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.syllabusForm,"prop-name":t.getTopicStartDateName(a)}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.syllabus_topic_end_date")))]),t._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("resource.syllabus_end_date")},on:{selected:function(e){t.syllabusForm.errors.clear(t.getTopicEndDateName(a))}},model:{value:e.end_date,callback:function(s){t.$set(e,"end_date",s)},expression:"topic.end_date"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.syllabusForm,"prop-name":t.getTopicEndDateName(a)}})],1)])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("resource.syllabus_topic_description")))]),t._v(" "),s("autosize-textarea",{attrs:{rows:"2",name:t.getTopicDescriptionName(a),placeholder:t.trans("resource.syllabus_topic_description")},model:{value:e.description,callback:function(s){t.$set(e,"description",s)},expression:"topic.description"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.syllabusForm,"prop-name":t.getTopicDescriptionName(a)}})],1)]})),t._v(" "),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light",attrs:{type:"button"},on:{click:t.addTopicRow}},[t._v(t._s(t.trans("resource.syllabus_add_new_topic")))])])],2),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("file-upload-input",{attrs:{"button-text":t.trans("general.upload_document"),token:t.syllabusForm.upload_token,module:"syllabus","clear-file":t.clearAttachment,"module-id":t.module_id}})],1)])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/resource/syllabus"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.uuid?s("span",[t._v(t._s(t.trans("general.update")))]):s("span",[t._v(t._s(t.trans("general.save")))])])],1)])])}),[],!1,null,null,null);e.a=i.exports},cS9s:function(t,e,s){var a=s("tmFb");"string"==typeof a&&(a=[[t.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,l);a.locals&&(t.exports=a.locals)},tmFb:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n",""])}}]);
//# sourceMappingURL=edit.js.map?id=bcf08f4190d210a9eac5