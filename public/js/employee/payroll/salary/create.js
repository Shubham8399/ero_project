(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{C6IU:function(e,t,a){"use strict";a.r(t);var r={components:{salaryStructureForm:a("cXDf").a},data:function(){return{}},mounted:function(){helper.hasPermission("define-employee-salary")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},l=a("KHd+"),s=Object(l.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.salary_structure")))])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/payroll/salary")}}},[a("i",{staticClass:"fas fa-list"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.salary_structure")))])])])])])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-4"},[a("salary-structure-form")],1)])])])}),[],!1,null,null,null);t.default=s.exports},cXDf:function(e,t,a){"use strict";var r={components:{},props:["uuid"],data:function(){return{salaryStructureForm:new Form({employee_id:"",date_effective:"",payroll_template_id:"",description:"",payroll_template_details:[]}),employees:[],payroll_templates:[],selected_employee:null,selected_payroll_template:null,payroll_template_with_details:[],default_currency:helper.getConfig("default_currency")}},mounted:function(){this.getPreRequisite()},methods:{getAmountName:function(e){return"amount_"+e},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/payroll/salary/pre-requisite").then((function(a){t.hide(),e.employees=a.employees,e.payroll_templates=a.payroll_templates,e.payroll_template_with_details=a.payroll_template_with_details,e.uuid&&e.get()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onEmployeeSelect:function(e){this.salaryStructureForm.employee_id=e.id},onPayrollTemplateSelect:function(e){var t=this;this.salaryStructureForm.payroll_template_id=e.id,this.salaryStructureForm.payroll_template_details=[],this.payroll_template_with_details.find((function(t){return t.id==e.id})).payroll_template_details.filter((function(e){return"attendance"==e.category||"flat_rate"==e.category||"production"==e.category})).forEach((function(e){t.salaryStructureForm.payroll_template_details.push({id:e.id,name:e.pay_head.name,alias:e.pay_head.alias,type:e.pay_head.type,category:e.category,unit:e.attendance_type?e.attendance_type.unit:null,amount:""})}))},proceed:function(){this.uuid?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.salaryStructureForm.post("/api/employee/payroll/salary").then((function(a){toastr.success(a.message),t.hide(),e.salaryStructureForm.payroll_template_details=[],e.selected_employee=null,e.selected_payroll_template=null,e.$emit("completed")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/payroll/salary/"+this.uuid).then((function(a){var r=a.salary;e.salaryStructureForm.employee_id=r.employee_id,e.salaryStructureForm.payroll_template_id=r.payroll_template_id,e.salaryStructureForm.date_effective=r.date_effective,e.salaryStructureForm.description=r.description,e.selected_payroll_template=r.payroll_template_id?{id:r.payroll_template_id,name:r.payroll_template.name}:null,e.onPayrollTemplateSelect(e.selected_payroll_template),r.salary_details.forEach((function(t){var a=e.salaryStructureForm.payroll_template_details.find((function(e){return e.id==t.payroll_template_detail_id}));void 0!==a&&(a.amount=t.amount)})),e.selected_employee=a.selected_employee,t.hide()})).catch((function(a){t.hide(),helper.showErrorMsg(a),e.$router.push("/employee/payroll/salary")}))},update:function(){var e=this,t=this.$loading.show();this.salaryStructureForm.patch("/api/employee/payroll/salary/"+this.uuid).then((function(a){toastr.success(a.message),t.hide(),e.$router.push("/employee/payroll/salary")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}}},l=a("KHd+"),s=Object(l.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.salaryStructureForm.errors.clear(t.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee")))]),e._v(" "),a("v-select",{attrs:{label:"name",name:"employee_id",id:"employee_id",options:e.employees,placeholder:e.trans("employee.select_employee")},on:{select:e.onEmployeeSelect,close:function(t){return e.salaryStructureForm.errors.clear("employee_id")},remove:function(t){e.salaryStructureForm.employee_id=""}},model:{value:e.selected_employee,callback:function(t){e.selected_employee=t},expression:"selected_employee"}},[e.employees.length?e._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                            "+e._s(e.trans("general.no_option_found"))+"\n                        ")])]),e._v(" "),a("show-error",{attrs:{"form-name":e.salaryStructureForm,"prop-name":"employee_id"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.payroll_template")))]),e._v(" "),a("v-select",{attrs:{label:"name",name:"payroll_template_id",id:"payroll_template_id",options:e.payroll_templates,placeholder:e.trans("employee.select_payroll_template")},on:{select:e.onPayrollTemplateSelect,close:function(t){return e.salaryStructureForm.errors.clear("payroll_template_id")},remove:function(t){e.salaryStructureForm.payroll_template_id=""}},model:{value:e.selected_payroll_template,callback:function(t){e.selected_payroll_template=t},expression:"selected_payroll_template"}},[e.payroll_templates.length?e._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                            "+e._s(e.trans("general.no_option_found"))+"\n                        ")])]),e._v(" "),a("show-error",{attrs:{"form-name":e.salaryStructureForm,"prop-name":"payroll_template_id"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.salary_structure_date_effective")))]),e._v(" "),a("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("employee.salary_structure_date_effective")},on:{selected:function(t){return e.salaryStructureForm.errors.clear("date_effective")}},model:{value:e.salaryStructureForm.date_effective,callback:function(t){e.$set(e.salaryStructureForm,"date_effective",t)},expression:"salaryStructureForm.date_effective"}}),e._v(" "),a("show-error",{attrs:{"form-name":e.salaryStructureForm,"prop-name":"date_effective"}})],1)])]),e._v(" "),e._l(e.salaryStructureForm.payroll_template_details,(function(t,r){return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-4"},[a("span",{class:["earning"==t.type?"text-success":"text-danger"]},[e._v(e._s(t.name)+" ("+e._s(t.alias)+")")]),e._v(" "),a("br"),e._v(" "),a("span",{staticClass:"font-80pc"},[e._v(e._s(e.trans("employee.pay_head_category_"+t.category)))]),e._v(" "),"production"!=t.category?a("span",{staticClass:"font-80pc"},[e._v("\n                    ("+e._s(e.trans("employee.salary_structure_per_month"))+")\n                ")]):a("span",{staticClass:"font-80pc"},[e._v("\n                    ("+e._s(e.trans("employee.salary_structure_per_unit",{unit:t.unit}))+")\n                ")])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("currency-input",{attrs:{position:e.default_currency.position,symbol:e.default_currency.symbol,name:e.getAmountName(r),placeholder:e.trans("employee.salary_structure_amount")},nativeOn:{input:function(t){e.salaryStructureForm.errors.clear(e.getAmountName(r))}},model:{value:t.amount,callback:function(a){e.$set(t,"amount",a)},expression:"payroll_template_detail.amount"}}),e._v(" "),a("show-error",{attrs:{"form-name":e.salaryStructureForm,"prop-name":e.getAmountName(r)}})],1)])])})),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.salary_structure_description")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.salaryStructureForm.description,expression:"salaryStructureForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("employee.salary_structure_description")},domProps:{value:e.salaryStructureForm.description},on:{input:function(t){t.target.composing||e.$set(e.salaryStructureForm,"description",t.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.salaryStructureForm,"prop-name":"description"}})],1)])]),e._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:e.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/employee/payroll/salary"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])],1)])],2)])}),[],!1,null,null,null);t.a=s.exports}}]);
//# sourceMappingURL=create.js.map?id=f0a6c55b8113df653d80