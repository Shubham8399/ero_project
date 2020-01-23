(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{LLxA:function(t,e,s){"use strict";s.r(e);var o={components:{},data:function(){return{student_records:{total:0,data:[]},selectAll:!1,promotionForm:new Form({next_session_batch_id:"",next_session_transport_circle_id:"",next_session_fee_concession_id:"",promotion_remarks:"",ids:[]}),filter:{sort_by:"created_at",order:"asc",batch_id:"",first_name:"",last_name:"",father_name:"",mother_name:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"created_at",translation:i18n.general.created_at}],batches:[],selected_batch:null,showFilterPanel:!0,next_session:{},next_session_batches:[],selected_next_session_batch:null,next_session_transport_circles:[],selected_next_session_transport_circle:null,next_session_fee_concessions:[],selected_next_session_fee_concession:null}},mounted:function(){helper.hasPermission("list-student")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite(),helper.showDemoNotification(["student"])},methods:{hasPermission:function(t){return helper.hasPermission(t)},getConfig:function(t){return helper.getConfig(t)},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/student/promotion/pre-requisite").then((function(s){t.next_session=s.next_session,t.next_session_transport_circles=s.next_session_transport_circles,t.next_session_batches=s.next_session_batches,t.next_session_fee_concessions=s.next_session_fee_concessions,t.batches=s.filters.batches,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getStudentRecords:function(t){var e=this,s=this.$loading.show();"number"!=typeof t&&(t=1),this.selectAll=!1;var o=helper.getFilterURL(this.filter);axios.get("/api/student/promotion?page="+t+o).then((function(t){e.student_records=t.student_records;var o=[];e.student_records.data.forEach((function(t){o.push(t.id)})),e.selectAll=o.every((function(t){return e.promotionForm.ids.indexOf(t)>-1}))?1:0,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},toggleSelectAll:function(){var t=this;this.selectAll?this.student_records.data.forEach((function(e){t.promotionForm.ids.indexOf(e.id)<0&&t.promotionForm.ids.push(e.id)})):this.student_records.data.forEach((function(e){var s=t.promotionForm.ids.indexOf(e.id);s>=0&&t.promotionForm.ids.splice(s,1)}))},getStudentName:function(t){return helper.getStudentName(t)},getDateOfPromotion:function(t){return t.admission.date_of_admission==t.date_of_entry?"-":helper.formatDate(t.date_of_entry)},print:function(){var t=this.$loading.show();axios.post("/api/student/promotion/print",{filter:this.filter}).then((function(e){window.open("/print").document.write(e),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/student/promotion/pdf",{filter:this.filter}).then((function(s){e.hide(),window.open("/download/report/"+s+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onBatchSelect:function(t){this.filter.batch_id=t.id},onBatchRemove:function(t){this.filter.batch_id.splice(this.filter.batch_id.indexOf(t.id),1)},onNextSessionBatchSelect:function(t){this.promotionForm.next_session_batch_id=t.id},onNextSessionTransportCircleSelect:function(t){this.promotionForm.next_session_transport_circle_id=t.id},onNextSessionFeeConcessionSelect:function(t){this.promotionForm.next_session_fee_concession_id=t.id},submit:function(){},confirmPromotion:function(){var t=this;return function(e){return t.promote()}},promote:function(){var t=this,e=this.$loading.show();this.promotionForm.post("/api/student/promotion").then((function(s){toastr.success(s.message),t.getStudentRecords(),t.promotionForm.ids=[],t.selected_next_session_batch=null,t.selected_next_session_fee_concession=null,t.selected_next_session_transport_circle=null,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getAdmissionNumber:function(t){return helper.getAdmissionNumber(t)}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getStudentRecords()},"filter.order":function(t){this.getStudentRecords()},"filter.page_length":function(t){this.getStudentRecords()}},computed:{authToken:function(){return helper.getAuthToken()}}},n=s("KHd+"),r=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("student.awaiting_promotion"))+" \n                    "),t.student_records.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.student_records.total,from:t.student_records.from,to:t.student_records.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[t.showFilterPanel?t._e():s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[s("i",{staticClass:"fas fa-filter"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),s("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),s("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[s("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[s("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),s("help-button",{on:{clicked:function(e){t.help_topic="student-promotion"}}})],1)])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("transition",{attrs:{name:"fade"}},[t.showFilterPanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter"))+"\n                    ")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.first_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.first_name,expression:"filter.first_name"}],staticClass:"form-control",attrs:{name:"first_name"},domProps:{value:t.filter.first_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"first_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.last_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.last_name,expression:"filter.last_name"}],staticClass:"form-control",attrs:{name:"last_name"},domProps:{value:t.filter.last_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"last_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.father_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.father_name,expression:"filter.father_name"}],staticClass:"form-control",attrs:{name:"father_name"},domProps:{value:t.filter.father_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"father_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.mother_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.mother_name,expression:"filter.mother_name"}],staticClass:"form-control",attrs:{name:"mother_name"},domProps:{value:t.filter.mother_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"mother_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch")},on:{select:t.onBatchSelect,remove:function(e){t.filter.batch_id=""}},model:{value:t.selected_batch,callback:function(e){t.selected_batch=e},expression:"selected_batch"}},[t.batches.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getStudentRecords}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t.student_records.total?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",{staticClass:"select-all"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,"1")>-1:t.selectAll},on:{change:[function(e){var s=t.selectAll,o=e.target,n=!!o.checked;if(Array.isArray(s)){var r=t._i(s,"1");o.checked?r<0&&(t.selectAll=s.concat(["1"])):r>-1&&(t.selectAll=s.slice(0,r).concat(s.slice(r+1)))}else t.selectAll=n},t.toggleSelectAll]}}),t._v(" "),s("span",{staticClass:"custom-control-label"})])]),t._v(" "),s("th",[t._v(t._s(t.trans("student.admission_number_short")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.name")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.father_name")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.mother_name")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.date_of_admission")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.date_of_promotion")))]),t._v(" "),s("th",[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),s("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),s("tbody",t._l(t.student_records.data,(function(e){return s("tr",[s("td",{staticClass:"select-all"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.promotionForm.ids,expression:"promotionForm.ids"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.promotionForm.ids)?t._i(t.promotionForm.ids,e.id)>-1:t.promotionForm.ids},on:{change:function(s){var o=t.promotionForm.ids,n=s.target,r=!!n.checked;if(Array.isArray(o)){var i=e.id,a=t._i(o,i);n.checked?a<0&&t.$set(t.promotionForm,"ids",o.concat([i])):a>-1&&t.$set(t.promotionForm,"ids",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.promotionForm,"ids",r)}}}),t._v(" "),s("span",{staticClass:"custom-control-label"})])]),t._v(" "),s("td",{domProps:{textContent:t._s(t.getAdmissionNumber(e.admission))}}),t._v(" "),s("td",{domProps:{textContent:t._s(t.getStudentName(e.student))}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.student.parent.father_name)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.student.parent.mother_name)}}),t._v(" "),s("td",[t._v(t._s(t._f("moment")(e.admission.date_of_admission)))]),t._v(" "),s("td",[t._v(t._s(t.getDateOfPromotion(e)))]),t._v(" "),s("td",{domProps:{textContent:t._s(e.batch.course.name+" "+e.batch.name)}}),t._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("student.view_student_detail"),expression:"trans('student.view_student_detail')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return t.$router.push("/student/"+e.student.uuid)}}},[s("i",{staticClass:"fas fa-arrow-circle-right"}),t._v(" "+t._s(t.trans("general.view"))+"\n                                        ")])])])])})),0)])]):t._e(),t._v(" "),t.student_records.total?t._e():s("module-info",{attrs:{module:"student",title:"promotion_module_title",description:"promotion_module_description",icon:"list"}}),t._v(" "),s("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.student_records},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getStudentRecords}})],1),t._v(" "),t.promotionForm.ids.length?s("div",{staticClass:"m-t-10 card-body border-top p-4"},[s("h4",[t._v(t._s(t.trans("student.promote_to",{session:t.next_session.name}))+"\n                    "),s("span",{staticClass:"card-subtitle"},[t._v(t._s(t.trans("student.no_of_student_selected",{no:t.promotionForm.ids.length})))])]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)},keydown:function(e){return t.promotionForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),s("v-select",{attrs:{label:"name","group-values":"batches","group-label":"course_group","group-select":!1,name:"next_session_batch_id",id:"next_session_batch_id",options:t.next_session_batches,placeholder:t.trans("academic.select_batch")},on:{select:t.onNextSessionBatchSelect,close:function(e){return t.promotionForm.errors.clear("next_session_batch_id")},remove:function(e){t.promotionForm.next_session_batch_id=""}},model:{value:t.selected_next_session_batch,callback:function(e){t.selected_next_session_batch=e},expression:"selected_next_session_batch"}},[t.next_session_batches.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.promotionForm,"prop-name":"next_session_batch_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.circle")))]),t._v(" "),s("v-select",{attrs:{label:"name",name:"next_session_transport_circle_id",id:"next_session_transport_circle_id",options:t.next_session_transport_circles,placeholder:t.trans("tansport.select_circle")},on:{select:t.onNextSessionTransportCircleSelect,close:function(e){return t.promotionForm.errors.clear("next_session_transport_circle_id")},remove:function(e){t.promotionForm.next_session_transport_circle_id=""}},model:{value:t.selected_next_session_transport_circle,callback:function(e){t.selected_next_session_transport_circle=e},expression:"selected_next_session_transport_circle"}},[t.next_session_transport_circles.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.promotionForm,"prop-name":"next_session_transport_circle_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.fee_concession")))]),t._v(" "),s("v-select",{attrs:{label:"name",name:"next_session_fee_concession_id",id:"next_session_fee_concession_id",options:t.next_session_fee_concessions,placeholder:t.trans("finance.select_fee_concession")},on:{select:t.onNextSessionFeeConcessionSelect,close:function(e){return t.promotionForm.errors.clear("next_session_fee_concession_id")},remove:function(e){t.promotionForm.next_session_fee_concession_id=""}},model:{value:t.selected_next_session_fee_concession,callback:function(e){t.selected_next_session_fee_concession=e},expression:"selected_next_session_fee_concession"}},[t.next_session_fee_concessions.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.promotionForm,"prop-name":"next_session_fee_concession_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.promotion_remarks")))]),t._v(" "),s("autosize-textarea",{attrs:{rows:"1",name:"promotion_remarks",placeholder:t.trans("academic.batch_promotion_remarks")},model:{value:t.promotionForm.promotion_remarks,callback:function(e){t.$set(t.promotionForm,"promotion_remarks",e)},expression:"promotionForm.promotion_remarks"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.promotionForm,"prop-name":"promotion_remarks"}})],1)])]),t._v(" "),s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmPromotion()},expression:"{ok: confirmPromotion()}"}],key:"promote-action",staticClass:"btn btn-info waves-effect waves-light pull-right",attrs:{type:"button"}},[t._v(t._s(t.trans("general.save")))])])]):t._e()])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=index.js.map?id=f9006561007fe8abe19a