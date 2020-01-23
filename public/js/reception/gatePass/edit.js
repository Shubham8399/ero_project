(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{"W0+e":function(e,t,s){"use strict";s.r(t);var a={components:{gatePassForm:s("yo93").a},data:function(){return{uuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("edit-gate-pass")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},r=s("KHd+"),o=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("reception.edit_gate_pass")))])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/reception/gate/pass")}}},[s("i",{staticClass:"fas fa-list"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("reception.gate_pass")))])])])])])]),e._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("gate-pass-form",{attrs:{uuid:e.uuid}})],1)])])])}),[],!1,null,null,null);t.default=o.exports},yo93:function(e,t,s){"use strict";var a={components:{},data:function(){return{gatePassForm:new Form({type:"student",student_id:"",employee_id:"",date:"",time:"",reason:""}),loaded:!1,time:{hour:"",minute:"",meridiem:"am"},students:[],selected_student:null,employees:[],selected_employee:null}},props:["uuid"],mounted:function(){helper.hasPermission("create-gate-pass")||helper.hasPermission("edit-gate-pass")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid&&this.get(),this.getPreRequisite()},methods:{timePadding:function(e){return helper.formatWithPadding(e,2)},proceed:function(){this.uuid?this.update():this.store()},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/gate/pass/pre-requisite").then((function(s){e.students=s.students,e.employees=s.employees,e.gatePassForm.date=helper.today(),e.uuid||(e.loaded=!0),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},store:function(){var e=this;this.gatePassForm.time=this.time.hour&&this.time.minute?helper.formatWithPadding(this.time.hour,2)+":"+helper.formatWithPadding(this.time.minute,2)+" "+this.time.meridiem:"";var t=this.$loading.show();this.gatePassForm.post("/api/gate/pass").then((function(s){toastr.success(s.message),e.time.hour="",e.time.minute="",e.time.meridiem="am",e.gatePassForm.type="student",e.selected_student=null,e.selected_employee=null,e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/gate/pass/"+this.uuid).then((function(s){e.gatePassForm.type=s.gate_pass.type,e.gatePassForm.reason=s.gate_pass.reason,e.gatePassForm.date=s.gate_pass.date,e.time.hour=s.time.hour,e.time.minute=s.time.minute,e.time.meridiem=s.time.meridiem,e.gatePassForm.student_id=s.gate_pass.student_id,e.selected_student=s.selected_student,e.gatePassForm.employee_id=s.gate_pass.employee_id,e.selected_employee=s.selected_employee,e.loaded=!0,t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s),e.$router.push("/reception/gate/pass")}))},update:function(){var e=this;this.gatePassForm.time=this.time.hour&&this.time.minute?helper.formatWithPadding(this.time.hour,2)+":"+helper.formatWithPadding(this.time.minute,2)+" "+this.time.meridiem:"";var t=this.$loading.show();this.gatePassForm.patch("/api/gate/pass/"+this.uuid).then((function(s){toastr.success(s.message),t.hide(),e.$router.push("/reception/gate/pass")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onStudentSelect:function(e){return this.gatePassForm.student_id=e.id},onEmployeeSelect:function(e){return this.gatePassForm.employee_id=e.id}}},r=s("KHd+"),o=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.gatePassForm.errors.clear(t.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.gate_pass_type")))]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.gatePassForm.type,expression:"gatePassForm.type"}],staticClass:"custom-select col-12",on:{select:function(t){return e.gatePassForm.errors.clear("type")},change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.gatePassForm,"type",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"student"}},[e._v(e._s(e.trans("student.student")))]),e._v(" "),s("option",{attrs:{value:"employee"}},[e._v(e._s(e.trans("employee.employee")))])]),e._v(" "),s("show-error",{attrs:{"form-name":e.gatePassForm,"prop-name":"type"}})],1)])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.gate_pass_date")))]),e._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("reception.gate_pass_date")},on:{selected:function(t){return e.gatePassForm.errors.clear("date")}},model:{value:e.gatePassForm.date,callback:function(t){e.$set(e.gatePassForm,"date",t)},expression:"gatePassForm.date"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.gatePassForm,"prop-name":"date"}})],1)]),e._v(" "),e.loaded?s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.gate_pass_time")))]),e._v(" "),s("timepicker",{attrs:{hour:e.time.hour,minute:e.time.minute,meridiem:e.time.meridiem},on:{"update:hour":function(t){return e.$set(e.time,"hour",t)},"update:minute":function(t){return e.$set(e.time,"minute",t)},"update:meridiem":function(t){return e.$set(e.time,"meridiem",t)}}})],1)]):e._e(),e._v(" "),"student"==e.gatePassForm.type?s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("student.student")))]),e._v(" "),s("v-select",{attrs:{label:"name",name:"student_id",id:"student_id",options:e.students,placeholder:e.trans("student.select_student")},on:{select:e.onStudentSelect,close:function(t){return e.gatePassForm.errors.clear("student_id")},remove:function(t){e.gatePassForm.student_id=""}},model:{value:e.selected_student,callback:function(t){e.selected_student=t},expression:"selected_student"}},[e.students.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),s("show-error",{attrs:{"form-name":e.gatePassForm,"prop-name":"student_id"}})],1)]):e._e(),e._v(" "),"employee"==e.gatePassForm.type?s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee")))]),e._v(" "),s("v-select",{attrs:{label:"name",name:"employee_id",id:"employee_id",options:e.employees,placeholder:e.trans("employee.select_employee")},on:{select:e.onEmployeeSelect,close:function(t){return e.gatePassForm.errors.clear("employee_id")},remove:function(t){e.gatePassForm.employee_id=""}},model:{value:e.selected_employee,callback:function(t){e.selected_employee=t},expression:"selected_employee"}},[e.employees.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),s("show-error",{attrs:{"form-name":e.gatePassForm,"prop-name":"employee_id"}})],1)]):e._e(),e._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.gate_pass_reason")))]),e._v(" "),s("autosize-textarea",{attrs:{rows:"1",name:"reason",placeholder:e.trans("reception.gate_pass_reason")},model:{value:e.gatePassForm.reason,callback:function(t){e.$set(e.gatePassForm,"reason",t)},expression:"gatePassForm.reason"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.gatePassForm,"prop-name":"reason"}})],1)])]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:e.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/reception/gate/pass"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.uuid?e._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.uuid?s("span",[e._v(e._s(e.trans("general.update")))]):s("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null);t.a=o.exports}}]);
//# sourceMappingURL=edit.js.map?id=06fbc2a950d102115be0