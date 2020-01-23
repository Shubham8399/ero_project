(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{WRaO:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".payroll-table {\n  width: 100%;\n  font-size: 13px;\n}\n.payroll-table th, .payroll-table td {\n  width: 50%;\n  padding: 5px 10px;\n}\n.payroll-table tr + tr {\n  border-top: 1px solid #f3f1f1;\n}\n.payroll-table .borderless-input {\n  text-align: right;\n  border: 0;\n  height: auto;\n  width: 100%;\n  color: #54667a;\n}",""])},YxTK:function(e,t,a){"use strict";a.r(t);var r={components:{payrollForm:a("w8Pg").a},data:function(){return{uuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("edit-payroll")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},l=a("KHd+"),o=Object(l.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.edit_payroll")))])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/payroll/list")}}},[a("i",{staticClass:"fas fa-list"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.list_payroll")))])])])])])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("payroll-form",{attrs:{uuid:e.uuid}})],1)])])])}),[],!1,null,null,null);t.default=o.exports},hyRu:function(e,t,a){var r=a("WRaO");"string"==typeof r&&(r=[[e.i,r,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,l);r.locals&&(e.exports=r.locals)},"l/uB":function(e,t,a){"use strict";var r=a("hyRu");a.n(r).a},w8Pg:function(e,t,a){"use strict";var r={props:["uuid"],components:{},data:function(){return{payrollForm:new Form({employee_id:"",start_date:"",end_date:"",pay_heads:[],remarks:""},!1),payroll:{},employee_salary:{},attendance_summary:{},employees:[],selected_employee:null,editPayrollAmount:!1}},mounted:function(){helper.hasAnyPermission(["generate-payroll","edit-payroll"])||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.editPayrollAmount=!!helper.hasPermission("edit-payroll-amount"),this.getPreRequisite()},methods:{getEmployeeNameWithCode:function(e){return helper.getEmployeeNameWithCode(e)},getEmployeeDesignationOnDate:function(e,t){return helper.getEmployeeDesignationOnDate(e,t)},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/payroll/pre-requisite").then((function(a){e.employees=a.employees,e.uuid&&e.get(),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onEmployeeSelect:function(e){this.payrollForm.employee_id=e.id},reset:function(){this.employee_salary={},this.payrollForm.pay_heads=[]},fetch:function(){var e=this,t=this.$loading.show();this.payrollForm.post("/api/employee/payroll/fetch").then((function(a){e.employee_salary=a.salary,e.attendance_summary=a.attendance_types,e.payrollForm.pay_heads=[],a.salary.payroll_template.payroll_template_details.forEach((function(t){"not_applicable"!=t.category&&e.payrollForm.pay_heads.push({payroll_template_detail_id:t.id,pay_head_id:t.pay_head_id,type:t.pay_head.type,name:t.pay_head.name,amount:t.amount})})),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/payroll/"+this.uuid).then((function(a){e.payroll=a.payroll,e.payrollForm.start_date=e.payroll.start_date,e.payrollForm.end_date=e.payroll.end_date,e.payrollForm.employee_id=e.payroll.employee_id,e.payrollForm.remarks=e.payroll.remarks,e.employee_salary=a.salary,e.attendance_summary=a.attendance_types,e.payrollForm.pay_heads=[],a.salary.payroll_template.payroll_template_details.forEach((function(t){var a=t.amount,r=e.payroll.payroll_details.find((function(e){return e.pay_head_id==t.pay_head_id}));a=void 0!==r?r.amount:a,e.payrollForm.pay_heads.push({payroll_template_detail_id:t.id,pay_head_id:t.pay_head_id,type:t.pay_head.type,name:t.pay_head.name,amount:a})})),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},formatCurrency:function(e){return helper.formatCurrency(e)},proceed:function(){this.uuid?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.payrollForm.post("/api/employee/payroll/generate").then((function(a){toastr.success(a.message),t.hide(),e.$router.push("/employee/payroll/list")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},update:function(){var e=this,t=this.$loading.show();this.payrollForm.patch("/api/employee/payroll/"+this.uuid).then((function(a){toastr.success(a.message),t.hide(),e.$router.push("/employee/payroll/list")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},computed:{getTotalEarningSalary:function(){var e=0;return this.payrollForm.pay_heads.forEach((function(t){e+=parseInt("earning"==t.type&&t.amount||0)})),e},getTotalDeductionSalary:function(){var e=0;return this.payrollForm.pay_heads.forEach((function(t){e+=parseInt("deduction"==t.type&&t.amount||0)})),e},getNetSalary:function(){return this.getTotalEarningSalary-this.getTotalDeductionSalary}},watch:{},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}}},l=(a("l/uB"),a("KHd+")),o=Object(l.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.payrollForm.errors.clear(t.target.name)}}},[e.employee_salary.payroll_template?e._e():[a("div",{staticClass:"row p-4"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee")))]),e._v(" "),a("v-select",{attrs:{label:"name","track-by":"id",name:"employee_id",id:"employee_id",options:e.employees,placeholder:e.trans("employee.select_employee")},on:{select:e.onEmployeeSelect,close:function(t){return e.payrollForm.errors.clear("employee_id")},remove:function(t){e.payrollForm.employee_id=""}},model:{value:e.selected_employee,callback:function(t){e.selected_employee=t},expression:"selected_employee"}},[e.employees.length?e._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                            "+e._s(e.trans("general.no_option_found"))+"\n                        ")])]),e._v(" "),a("show-error",{attrs:{"form-name":e.payrollForm,"prop-name":"employee_id"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.payroll_start_date")))]),e._v(" "),a("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("employee.payroll_start_date")},on:{selected:function(t){return e.payrollForm.errors.clear("start_date")}},model:{value:e.payrollForm.start_date,callback:function(t){e.$set(e.payrollForm,"start_date",t)},expression:"payrollForm.start_date"}}),e._v(" "),a("show-error",{attrs:{"form-name":e.payrollForm,"prop-name":"start_date"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.payroll_end_date")))]),e._v(" "),a("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("employee.payroll_end_date")},on:{selected:function(t){return e.payrollForm.errors.clear("end_date")}},model:{value:e.payrollForm.end_date,callback:function(t){e.$set(e.payrollForm,"end_date",t)},expression:"payrollForm.end_date"}}),e._v(" "),a("show-error",{attrs:{"form-name":e.payrollForm,"prop-name":"end_date"}})],1)])]),e._v(" "),e.employee_salary.payroll_template?e._e():a("button",{staticClass:"btn btn-info m-r-10 pull-right",attrs:{type:"button"},on:{click:e.fetch}},[e._v(e._s(e.trans("general.submit")))])],e._v(" "),e.employee_salary.payroll_template?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm custom-show-table"},[a("tbody",e._l(e.attendance_summary,(function(t){return a("tr",[a("td",[e._v(e._s(t.name+" ("+t.alias+")"))]),e._v(" "),a("td",[e._v("\n                                "+e._s(t.count)+"\n                                "),"production_based_earning"!=t.type&&"production_based_deduction"!=t.type||!t.count?e._e():a("span",[e._v("\n                                    ("+e._s(t.value+" "+t.unit)+")\n                                ")])])])})),0)])])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-8 border-left"},[a("div",{staticClass:"card widget"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row border-bottom"},[a("div",{staticClass:"col p-4 b-r"},[e._v("\n                            "+e._s(e.getEmployeeNameWithCode(e.employee_salary.employee))),a("br"),e._v(" "),a("span",{staticClass:"font-90pc"},[e._v(e._s(e.getEmployeeDesignationOnDate(e.employee_salary.employee,e.employee_salary.start_date)))])]),e._v(" "),a("div",{staticClass:"col p-4 b-r"},[e._v("\n                            "+e._s(e._f("moment")(e.payrollForm.start_date))+" "+e._s(e.trans("general.to"))+" "+e._s(e._f("moment")(e.payrollForm.end_date))+"\n                        ")])])])]),e._v(" "),a("table",{staticClass:"payroll-table"},[a("tr",[a("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("employee.pay_head_type_earning")))]),e._v(" "),a("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("employee.pay_head_type_deduction")))])]),e._v(" "),a("tr",[a("td",{staticClass:"border-right",attrs:{valign:"top"}},[a("table",{staticClass:"payroll-table"},e._l(e.payrollForm.pay_heads,(function(t){return"earning"==t.type?a("tr",[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"text-right"},[e.editPayrollAmount?[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"pay_head.amount"}],staticClass:"borderless-input",attrs:{type:"text",placeholder:e.trans("employee.salary_structure_amount")},domProps:{value:t.amount},on:{input:function(a){a.target.composing||e.$set(t,"amount",a.target.value)}}})]:[e._v("\n                                        "+e._s(t.amount)+"\n                                    ")]],2)]):e._e()})),0)]),e._v(" "),a("td",{attrs:{valign:"top"}},[a("table",{staticClass:"payroll-table"},e._l(e.payrollForm.pay_heads,(function(t){return"deduction"==t.type?a("tr",[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"text-right"},[e.editPayrollAmount?[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"pay_head.amount"}],staticClass:"borderless-input",attrs:{type:"text",placeholder:e.trans("employee.salary_structure_amount")},domProps:{value:t.amount},on:{input:function(a){a.target.composing||e.$set(t,"amount",a.target.value)}}})]:[e._v("\n                                        "+e._s(t.amount)+"\n                                    ")]],2)]):e._e()})),0)])]),e._v(" "),a("tr",[a("td",[a("table",{staticClass:"payroll-table"},[a("tr",[a("td",[e._v(e._s(e.trans("employee.earning_salary")))]),e._v(" "),a("td",{attrs:{align:"right"}},[e._v(e._s(e.formatCurrency(e.getTotalEarningSalary)))])])])]),e._v(" "),a("td",{attrs:{valign:"top"}},[a("table",{staticClass:"payroll-table"},[a("tr",[a("td",[e._v(e._s(e.trans("employee.deduction_salary")))]),e._v(" "),a("td",{attrs:{align:"right"}},[e._v(e._s(e.formatCurrency(e.getTotalDeductionSalary)))])])])])]),e._v(" "),a("tr",[a("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("employee.net_salary")))]),e._v(" "),a("td",{staticClass:"font-weight-bold",attrs:{align:"right"}},[e._v(e._s(e.formatCurrency(e.getNetSalary)))])])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.payroll_remarks")))]),e._v(" "),a("autosize-textarea",{attrs:{rows:"2",name:"remarks",placeholder:e.trans("employee.payroll_remarks")},model:{value:e.payrollForm.remarks,callback:function(t){e.$set(e.payrollForm,"remarks",t)},expression:"payrollForm.remarks"}})],1)])]):e._e(),e._v(" "),e.employee_salary.payroll_template?a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-info pull-right",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))]),e._v(" "),e.uuid?e._e():a("button",{staticClass:"btn btn-danger pull-right m-r-10",attrs:{type:"button"},on:{click:e.reset}},[e._v(e._s(e.trans("employee.payroll_reset_query")))])]):e._e()],2)}),[],!1,null,null,null);t.a=o.exports}}]);
//# sourceMappingURL=edit.js.map?id=600c67292460cd52020d