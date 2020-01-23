(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{pAd0:function(t,e,a){"use strict";a.r(e);var l={components:{},props:["uuid"],mounted:function(){this.uuid&&this.get()},data:function(){return{payroll_template:{}}},methods:{get:function(){var t=this,e=this.$loading.show();axios.get("/api/employee/payroll/template/"+this.uuid).then((function(a){t.payroll_template=a.payroll_template,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)},moment:function(t){return helper.formatDate(t)}}},s=a("KHd+"),o={components:{payrollTemplateDetail:Object(s.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container modal-lg"},[t.payroll_template.id?a("div",{staticClass:"modal-header"},[t._t("header",[a("span",[t._v(t._s(t.payroll_template.name))]),t._v(" "),a("span",{staticClass:"float-right pointer",on:{click:function(e){return t.$emit("close")}}},[t._v("x")])])],2):t._e(),t._v(" "),t.payroll_template.id?a("div",{staticClass:"modal-body"},[t._t("body",[a("div",{staticClass:"m-b-20",domProps:{innerHTML:t._s(t.payroll_template.description)}}),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.trans("employee.pay_head")))]),t._v(" "),a("th",[t._v(t._s(t.trans("employee.pay_head_category")))]),t._v(" "),a("th",[t._v(t._s(t.trans("employee.pay_head_computation")))])])]),t._v(" "),a("tbody",[t._l(t.payroll_template.payroll_template_details,(function(e){return"earning"==e.pay_head.type?a("tr",[a("td",{staticClass:"text-success"},[t._v(t._s(e.pay_head.name))]),t._v(" "),a("td",[t._v("\n                                            "+t._s(t.trans("employee.pay_head_category_"+e.category))+"\n                                        ")]),t._v(" "),a("td",[t._v("\n                                            "+t._s(e.computation)+"\n                                        ")])]):t._e()})),t._v(" "),t._l(t.payroll_template.payroll_template_details,(function(e){return"deduction"==e.pay_head.type?a("tr",[a("td",{staticClass:"text-danger"},[t._v(t._s(e.pay_head.name))]),t._v(" "),a("td",[t._v("\n                                            "+t._s(t.trans("employee.pay_head_category_"+e.category))+"\n                                        ")]),t._v(" "),a("td",[t._v("\n                                            "+t._s(e.computation)+"\n                                        ")])]):t._e()}))],2)])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("i",{staticClass:"far fa-clock"}),t._v(" "),a("small",[t._v(t._s(t.trans("general.created_at"))+" "+t._s(t._f("momentDateTime")(t.payroll_template.created_at)))]),t._v(" "),a("span",{staticClass:"pull-right"},[a("i",{staticClass:"far fa-clock"}),t._v(" "),a("small",[t._v(t._s(t.trans("general.updated_at"))+" "+t._s(t._f("momentDateTime")(t.payroll_template.updated_at)))])])])])],2):t._e()])])])])}),[],!1,null,null,null).exports},data:function(){return{payroll_templates:{total:0,data:[]},filter:{sort_by:"created_at",order:"desc",name:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.employee.payroll_template_name},{value:"created_at",translation:i18n.general.created_at}],showFilterPanel:!1,showUuid:"",help_topic:"",showModal:!1}},mounted:function(){helper.hasPermission("manage-payroll-template")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPayrollTemplates()},methods:{hasPermission:function(t){return helper.hasPermission(t)},showAction:function(t){this.showUuid=t.uuid,this.showModal=!0},getPayrollTemplates:function(t){var e=this,a=this.$loading.show();"number"!=typeof t&&(t=1);var l=helper.getFilterURL(this.filter);axios.get("/api/employee/payroll/template?page="+t+l).then((function(t){e.payroll_templates=t.payroll_templates,a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},editPayrollTemplate:function(t){this.$router.push("/employee/payroll/template/"+t.uuid+"/edit")},confirmDelete:function(t){var e=this;return function(a){return e.deletePayrollTemplate(t)}},deletePayrollTemplate:function(t){var e=this,a=this.$loading.show();axios.delete("/api/employee/payroll/template/"+t.uuid).then((function(t){toastr.success(t.message),e.getPayrollTemplates(),a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)},print:function(){var t=this.$loading.show();axios.post("/api/employee/payroll/template/print",{filter:this.filter}).then((function(e){var a=window.open("/print");t.hide(),a.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/employee/payroll/template/pdf",{filter:this.filter}).then((function(a){e.hide(),window.open("/download/report/"+a+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getStatus:function(t){return t.is_active?'<span class="label label-success">'+i18n.employee.payroll_template_status_active+"</span>":'<span class="label label-danger">'+i18n.employee.payroll_template_status_inactive+"</span>"}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getPayrollTemplates()},"filter.order":function(t){this.getPayrollTemplates()},"filter.page_length":function(t){this.getPayrollTemplates()}},computed:{authToken:function(){return helper.getAuthToken()}}},n=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("employee.payroll_template"))+" \n                    "),t.payroll_templates.total?a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.payroll_templates.total,from:t.payroll_templates.from,to:t.payroll_templates.to})))]):a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[t.payroll_templates.total?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/employee/payroll/template/create")}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("employee.add_new_payroll_template")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[a("i",{staticClass:"fas fa-filter"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),a("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),a("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[a("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[a("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),a("help-button",{on:{clicked:function(e){t.help_topic="employee.payroll.template"}}})],1)])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("transition",{attrs:{name:"fade"}},[t.showFilterPanel?a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("employee.payroll_template_name")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.name,expression:"filter.name"}],staticClass:"form-control",attrs:{name:"name"},domProps:{value:t.filter.name},on:{input:function(e){e.target.composing||t.$set(t.filter,"name",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getPayrollTemplates}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.payroll_templates.total?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.trans("employee.payroll_template_name")))]),t._v(" "),a("th",[t._v(t._s(t.trans("employee.payroll_template_status")))]),t._v(" "),a("th",[t._v(t._s(t.trans("employee.payroll_template_description")))]),t._v(" "),a("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),a("tbody",t._l(t.payroll_templates.data,(function(e){return a("tr",[a("td",{domProps:{textContent:t._s(e.name)}}),a("td",{domProps:{innerHTML:t._s(t.getStatus(e))}}),a("td",{domProps:{textContent:t._s(e.description)}}),a("td",{staticClass:"table-option"},[a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.view"),expression:"trans('general.view')"}],staticClass:"btn btn-success btn-sm",on:{click:function(a){return a.preventDefault(),t.showAction(e)}}},[a("i",{staticClass:"fas fa-arrow-circle-right"})]),t._v(" "),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("employee.edit_payroll_template"),expression:"trans('employee.edit_payroll_template')"}],staticClass:"btn btn-info btn-sm",on:{click:function(a){return a.preventDefault(),t.editPayrollTemplate(e)}}},[a("i",{staticClass:"fas fa-edit"})]),t._v(" "),a("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(payroll_template)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("employee.delete_payroll_template"),expression:"trans('employee.delete_payroll_template')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[a("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):t._e(),t._v(" "),t.payroll_templates.total?t._e():a("module-info",{attrs:{module:"employee",title:"payroll_template_module_title",description:"payroll_template_module_description",icon:"list"}},[a("div",{attrs:{slot:"btn"},slot:"btn"},[a("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){return t.$router.push("/employee/payroll/template/create")}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))])])]),t._v(" "),a("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.payroll_templates},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getPayrollTemplates}})],1)])],1),t._v(" "),t.showModal?a("payroll-template-detail",{attrs:{uuid:t.showUuid},on:{close:function(e){t.showModal=!1}}}):t._e(),t._v(" "),a("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=index.js.map?id=6283663396168e665296