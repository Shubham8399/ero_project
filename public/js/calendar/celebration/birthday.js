(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{MG7B:function(t,e,a){"use strict";a.r(e);var n={components:{},data:function(){return{birthdays:{total:0,data:[]},filter:{sort_by:"date",order:"asc",type:"student",start_date:"",end_date:"",page_length:helper.getConfig("page_length")},showFilterPanel:!1}},mounted:function(){helper.hasPermission("list-birthday")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getBirthdays(),helper.showDemoNotification(["calendar"])},created:function(){this.filter.start_date=helper.today(),this.filter.end_date=moment().add(1,"weeks").format("YYYY-MM-DD")},methods:{getConfig:function(t){return helper.getConfig(t)},hasPermission:function(t){return helper.hasPermission(t)},getStudentName:function(t){return helper.getStudentName(t)},getEmployeeName:function(t){return helper.getEmployeeName(t)},getEmployeeCode:function(t){return helper.getEmployeeCode(t)},getAge:function(t){return moment().diff(t,"years")},getStudentBatchOnDate:function(t){return helper.getStudentBatchOnDate(t,helper.today())},getEmployeeDesignationOnDate:function(t){return helper.getEmployeeDesignationOnDate(t,helper.today())},getBirthdays:function(t){var e=this,a=this.$loading.show();"number"!=typeof t&&(t=1);var n=helper.getFilterURL(this.filter);axios.get("/api/birthday?page="+t+n).then((function(t){e.birthdays=t,a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},print:function(){var t=this.$loading.show();axios.post("/api/birthday/print",{filter:this.filter}).then((function(e){t.hide(),window.open("/print").document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/birthday/pdf",{filter:this.filter}).then((function(a){e.hide(),window.open("/download/report/"+a+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},showDate:function(t){return helper.formatDate(t)}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getBirthdays()},"filter.order":function(t){this.getBirthdays()},"filter.page_length":function(t){this.getBirthdays()},"filter.type":function(t){this.getBirthdays()}},computed:{authToken:function(){return helper.getAuthToken()}}},s=a("KHd+"),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans(t.filter.type+"."+t.filter.type+"_birthday"))+" \n                    "),t.birthdays.total?a("span",{staticClass:"card-subtitle"},[a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.birthdays.total,from:t.birthdays.from,to:t.birthdays.to})))])]):a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},["employee"==t.filter.type?a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.filter.type="student"}}},[a("i",{staticClass:"fas fa-graduation-cap"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(" "+t._s(t.trans("student.student_birthday")))])]):t._e(),t._v(" "),"student"==t.filter.type?a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.filter.type="employee"}}},[a("i",{staticClass:"fas fa-users"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(" "+t._s(t.trans("employee.employee_birthday")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[a("i",{staticClass:"fas fa-filter"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(" "+t._s(t.trans("general.filter")))])]),t._v(" "),a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),a("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[a("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[a("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))]),t._v(" "),a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:function(e){return t.$router.push("/calendar/celebration/anniversary")}}},[a("i",{staticClass:"fas fa-heartbeat"}),t._v(" "+t._s(t.trans("calendar.anniversary")))]),t._v(" "),a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:function(e){return t.$router.push("/calendar/celebration/work/anniversary")}}},[a("i",{staticClass:"fas fa-gift"}),t._v(" "+t._s(t.trans("calendar.work_anniversary")))])])])])])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("transition",{attrs:{name:"fade"}},[t.showFilterPanel?a("div",{staticClass:"card border-left border-bottom"},[a("div",{staticClass:"card-body p-4"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter"))+"\n                        "),a("button",{staticClass:"btn btn-danger btn-sm pull-right",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-8"},[a("div",{staticClass:"form-group"},[a("date-range-picker",{attrs:{"start-date":t.filter.start_date,"end-date":t.filter.end_date,label:t.trans("general.date_between")},on:{"update:startDate":function(e){return t.$set(t.filter,"start_date",e)},"update:start-date":function(e){return t.$set(t.filter,"start_date",e)},"update:endDate":function(e){return t.$set(t.filter,"end_date",e)},"update:end-date":function(e){return t.$set(t.filter,"end_date",e)}}})],1)])]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light pull-right",attrs:{type:"button"},on:{click:t.getBirthdays}},[t._v(t._s(t.trans("general.filter")))])])]):t._e()]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.filter.start_date&&t.filter.end_date?a("h6",{staticClass:"p-3"},[t._v(t._s(t.trans("calendar.birthday_between",{start_date:t.showDate(t.filter.start_date),end_date:t.showDate(t.filter.end_date)})))]):t._e(),t._v(" "),t.birthdays.total?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[t._v(t._s("student"==t.filter.type?t.trans("student.date_of_birth"):t.trans("employee.date_of_birth")))]),t._v(" "),a("th",[t._v(t._s(t.trans("general.age")))]),t._v(" "),"student"==t.filter.type?a("th",[t._v(t._s(t.trans("student.name")))]):t._e(),t._v(" "),"student"==t.filter.type?a("th",[t._v(t._s(t.trans("academic.batch")))]):t._e(),t._v(" "),"student"==t.filter.type?a("th",[t._v(t._s(t.trans("student.first_guardian_name")))]):t._e(),t._v(" "),"student"==t.filter.type?a("th",[t._v(t._s(t.trans("student.contact_number")))]):t._e(),t._v(" "),"employee"==t.filter.type?a("th",[t._v(t._s(t.trans("employee.name")))]):t._e(),t._v(" "),"employee"==t.filter.type?a("th",[t._v(t._s(t.trans("employee.code")))]):t._e(),t._v(" "),"employee"==t.filter.type?a("th",[t._v(t._s(t.trans("employee.designation")))]):t._e(),t._v(" "),"employee"==t.filter.type?a("th",[t._v(t._s(t.trans("employee.contact_number")))]):t._e()])]),t._v(" "),a("tbody",t._l(t.birthdays.data,(function(e){return a("tr",[a("td",[t._v(t._s(t._f("moment")(e.date_of_birth)))]),t._v(" "),a("td",[t._v(t._s(t.getAge(e.date_of_birth)+" "+t.trans("general.years")))]),t._v(" "),"student"==t.filter.type?a("td",[t._v(t._s(t.getStudentName(e)))]):t._e(),t._v(" "),"student"==t.filter.type?a("td",[t._v(t._s(t.getStudentBatchOnDate(e)))]):t._e(),t._v(" "),"student"==t.filter.type?a("td",[t._v(t._s(e.parent.first_guardian_name))]):t._e(),t._v(" "),"student"==t.filter.type?a("td",[t._v(t._s(e.contact_number))]):t._e(),t._v(" "),"employee"==t.filter.type?a("td",[t._v(t._s(t.getEmployeeName(e)))]):t._e(),t._v(" "),"employee"==t.filter.type?a("td",[t._v(t._s(t.getEmployeeCode(e)))]):t._e(),t._v(" "),"employee"==t.filter.type?a("td",[t._v(t._s(t.getEmployeeDesignationOnDate(e)))]):t._e(),t._v(" "),"employee"==t.filter.type?a("td",[t._v(t._s(e.contact_number))]):t._e()])})),0)])]):t._e(),t._v(" "),t.birthdays.total?t._e():a("module-info",{attrs:{module:"calendar",title:"birthday_module_title",description:"birthday_module_description",icon:"list"}}),t._v(" "),a("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.birthdays},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getBirthdays}})],1)])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=birthday.js.map?id=0f29e1bc55b86e08c9ce