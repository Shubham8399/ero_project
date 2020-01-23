(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{vmke:function(t,s,i){"use strict";i.r(s);var e={components:{},data:function(){return{class_timings:{total:0,data:[]},filter:{sort_by:"name",order:"asc",show_session:!1,page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.academic.class_timing_name}],showFilterPanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("list-class-timing")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getClassTimings(),helper.showDemoNotification(["academic"])},methods:{getConfig:function(t){return helper.getConfig(t)},hasPermission:function(t){return helper.hasPermission(t)},getClassTimings:function(t){var s=this,i=this.$loading.show();"number"!=typeof t&&(t=1);var e=helper.getFilterURL(this.filter);axios.get("/api/class/timing?page="+t+e).then((function(t){s.class_timings=t,i.hide()})).catch((function(t){i.hide(),helper.showErrorMsg(t)}))},editClassTiming:function(t){this.$router.push("/academic/class/timing/"+t.uuid+"/edit")},confirmDelete:function(t){var s=this;return function(i){return s.deleteClassTiming(t)}},deleteClassTiming:function(t){var s=this,i=this.$loading.show();axios.delete("/api/class/timing/"+t.uuid).then((function(t){toastr.success(t.message),s.getClassTimings(),i.hide()})).catch((function(t){i.hide(),helper.showErrorMsg(t)}))},print:function(){var t=this.$loading.show();axios.post("/api/class/timing/print",{filter:this.filter}).then((function(s){var i=window.open("/print");t.hide(),i.document.write(s)})).catch((function(s){t.hide(),helper.showErrorMsg(s)}))},pdf:function(){var t=this,s=this.$loading.show();axios.post("/api/class/timing/pdf",{filter:this.filter}).then((function(i){s.hide(),window.open("/download/report/"+i+"?token="+t.authToken)})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},getStartTime:function(t){return moment(t.class_timing_sessions[0].start,"HH:mm:ss").format("h:mm a")},getEndTime:function(t){var s=t.class_timing_sessions.length;return moment(t.class_timing_sessions[s-1].end,"HH:mm:ss").format("h:mm a")},getSessionStartTime:function(t){return moment(t.start,"HH:mm:ss").format("h:mm a")},getSessionEndTime:function(t){return moment(t.end,"HH:mm:ss").format("h:mm a")}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getClassTimings()},"filter.order":function(t){this.getClassTimings()},"filter.page_length":function(t){this.getClassTimings()}},computed:{authToken:function(){return helper.getAuthToken()}}},n=i("KHd+"),a=Object(n.a)(e,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"page-titles"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("academic.class_timing"))+" \n                    "),t.class_timings.total?i("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.class_timings.total,from:t.class_timings.from,to:t.class_timings.to})))]):i("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"action-buttons pull-right"},[t.class_timings.total&&t.hasPermission("create-class-timing")?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return t.$router.push("/academic/class/timing/create")}}},[i("i",{staticClass:"fas fa-plus"}),t._v(" "),i("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("academic.add_new_class_timing")))])]):t._e(),t._v(" "),i("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(s){t.filter.sort_by=s},updateOrder:function(s){t.filter.order=s}}}),t._v(" "),i("div",{staticClass:"btn-group"},[i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[i("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),i("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),i("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[i("button",{staticClass:"dropdown-item custom-dropdown",on:{click:function(s){t.filter.show_session=!t.filter.show_session}}},[t.filter.show_session?i("span",[i("i",{staticClass:"fas fa-eye-slash"}),t._v(" "+t._s(t.trans("academic.hide_class_timing_session")))]):i("span",[i("i",{staticClass:"fas fa-eye"}),t._v(" "+t._s(t.trans("academic.show_class_timing_session")))])]),t._v(" "),i("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[i("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),i("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[i("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),i("help-button",{on:{clicked:function(s){t.help_topic="academic.class-timing"}}})],1)])])]),t._v(" "),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[t.class_timings.total?i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table table-sm"},[i("thead",[i("tr",[i("th",[t._v(t._s(t.trans("academic.class_timing_name")))]),t._v(" "),i("th",[t._v(t._s(t.trans("academic.class_timing_session")))]),t._v(" "),i("th",[t._v(t._s(t.trans("academic.class_timing_duration")))]),t._v(" "),i("th",[t._v(t._s(t.trans("academic.class_timing_description")))]),t._v(" "),i("th",[t._v(t._s(t.trans("general.updated_at")))]),t._v(" "),i("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),i("tbody",t._l(t.class_timings.data,(function(s){return i("tr",[i("td",{domProps:{textContent:t._s(s.name)}}),t._v(" "),i("td",[t._v("\n                                    "+t._s(s.session+" "+t.trans("academic.class_timing_session"))+"\n                                    "),s.break?i("span",[t._v(" + "+t._s(s.break+" "+t.trans("academic.class_timing_break")))]):t._e()]),t._v(" "),i("td",[t.filter.show_session?[i("ul",{staticStyle:{"list-style":"none",padding:"0",margin:"0"}},t._l(s.class_timing_sessions,(function(s){return i("li",[t._v("\n                                                "+t._s(s.name)+" "+t._s(t.getSessionStartTime(s)+" "+t.trans("general.to")+" "+t.getSessionEndTime(s))+"\n                                            ")])})),0)]:[t._v(t._s(t.getStartTime(s)+" "+t.trans("general.to")+" "+t.getEndTime(s)))]],2),t._v(" "),i("td",{domProps:{textContent:t._s(s.description)}}),t._v(" "),i("td",[t._v(t._s(t._f("momentDateTime")(s.updated_at)))]),t._v(" "),i("td",{staticClass:"table-option"},[i("div",{staticClass:"btn-group"},[s.timetable_allocations.length?[t.hasPermission("edit-class-timing")?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("academic.class_timing_associated_with_timetable"),expression:"trans('academic.class_timing_associated_with_timetable')"}],staticClass:"btn btn-info btn-sm"},[i("i",{staticClass:"fas fa-lock"})]):t._e()]:[t.hasPermission("edit-class-timing")?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("academic.edit_class_timing"),expression:"trans('academic.edit_class_timing')"}],staticClass:"btn btn-info btn-sm",on:{click:function(i){return i.preventDefault(),t.editClassTiming(s)}}},[i("i",{staticClass:"fas fa-edit"})]):t._e(),t._v(" "),t.hasPermission("delete-class-timing")?i("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(s)},expression:"{ok: confirmDelete(class_timing)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("academic.delete_class_timing"),expression:"trans('academic.delete_class_timing')"}],key:s.uuid,staticClass:"btn btn-danger btn-sm"},[i("i",{staticClass:"fas fa-trash"})]):t._e()]],2)])])})),0)])]):t._e(),t._v(" "),t.class_timings.total?t._e():i("module-info",{attrs:{module:"academic",title:"class_timing_module_title",description:"class_timing_module_description",icon:"list"}},[i("div",{attrs:{slot:"btn"},slot:"btn"},[t.hasPermission("create-class-timing")?i("button",{staticClass:"btn btn-info btn-md",on:{click:function(s){return t.$router.push("/academic/class/timing/create")}}},[i("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))]):t._e()])]),t._v(" "),i("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.class_timings},on:{"update:pageLength":function(s){return t.$set(t.filter,"page_length",s)},"update:page-length":function(s){return t.$set(t.filter,"page_length",s)},updateRecords:t.getClassTimings}})],1)])]),t._v(" "),i("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);s.default=a.exports}}]);
//# sourceMappingURL=index.js.map?id=c8c0cbd5d1281efbbfae