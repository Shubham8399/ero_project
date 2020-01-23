(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{w7UJ:function(t,e,s){"use strict";s.r(e);var r={components:{},data:function(){return{reportForm:new Form({batch_id:"",exam_id:"",type:""},!1),types:[],all_batches:[],batches:[],selected_batch:null,exams:[],selected_exam:null}},mounted:function(){(helper.hasRole("student")||helper.hasRole("parent"))&&(helper.notAccessibleMsg(),this.$router.push("/dashboard")),helper.hasPermission("access-exam-report")||helper.hasPermission("access-class-teacher-wise-exam-report")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{hasPermission:function(t){return helper.hasPermission(t)},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/exam/report/pre-requisite").then((function(s){t.all_batches=s.batches,t.exams=s.exams,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getReport:function(){var t=this.$loading.show();axios.post("/api/exam/report/topper",{batch_id:this.reportForm.batch_id,exam_id:this.reportForm.exam_id}).then((function(e){var s=window.open("/print");t.hide(),s.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onBatchSelect:function(t){this.reportForm.batch_id=t.id},onExamSelect:function(t){this.reportForm.batch_id="",this.selected_batch=null,t.course_group_id?this.batches=this.all_batches.filter((function(e){return e.course_group===t.course_group_name})):this.batches=this.all_batches,this.reportForm.exam_id=t.id}},watch:{},computed:{authToken:function(){return helper.getAuthToken()}}},a=s("KHd+"),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("exam.topper_report")))])]),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)},keydown:function(e){return t.reportForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("exam.exam"))+" ")]),t._v(" "),s("v-select",{attrs:{label:"name",name:"exam_id",id:"exam_id",options:t.exams,placeholder:t.trans("exam.select_exam")},on:{select:t.onExamSelect,close:function(e){return t.reportForm.errors.clear("exam_id")},remove:function(e){t.reportForm.exam_id=""}},model:{value:t.selected_exam,callback:function(e){t.selected_exam=e},expression:"selected_exam"}},[t.exams.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n\t\t\t                                "+t._s(t.trans("general.no_option_found"))+"\n\t\t\t                            ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.reportForm,"prop-name":"exam_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch"))+" ")]),t._v(" "),s("v-select",{attrs:{label:"name","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch")},on:{select:t.onBatchSelect,close:function(e){return t.reportForm.errors.clear("batch_id")},remove:function(e){t.reportForm.batch_id=""}},model:{value:t.selected_batch,callback:function(e){t.selected_batch=e},expression:"selected_batch"}},[t.batches.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                            "+t._s(t.trans("general.no_option_found"))+"\n                                        ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.reportForm,"prop-name":"batch_id"}})],1)])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getReport}},[t._v(t._s(t.trans("general.print")))])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"})])}],!1,null,null,null);e.default=o.exports}}]);
//# sourceMappingURL=topper.js.map?id=2316c7e10435f59bbe0c