(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{"0V3i":function(e,t,o){"use strict";var i={components:{},data:function(){return{vehicleLogForm:new Form({vehicle_id:"",date_of_log:"",log:"",description:""}),vehicles:[],selected_vehicle:null}},props:["id"],mounted:function(){this.id&&this.getVehicleLog(),this.getPreRequisite()},methods:{proceed:function(){this.id?this.updateVehicleLog():this.storeVehicleLog()},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/vehicle/log/pre-requisite").then((function(o){e.vehicles=o,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},storeVehicleLog:function(){var e=this,t=this.$loading.show();this.vehicleLogForm.post("/api/vehicle/log").then((function(o){toastr.success(o.message),e.selected_vehicle=null,e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getVehicleLog:function(){var e=this,t=this.$loading.show();axios.get("/api/vehicle/log/"+this.id).then((function(o){e.vehicleLogForm.vehicle_id=o.vehicle_log.vehicle_id,e.vehicleLogForm.date_of_log=o.vehicle_log.date_of_log,e.vehicleLogForm.log=o.vehicle_log.log,e.vehicleLogForm.description=o.vehicle_log.description,e.selected_vehicle=o.selected_vehicle,t.hide()})).catch((function(o){t.hide(),e.$router.push("/transport/vehicle/log")}))},updateVehicleLog:function(){var e=this,t=this.$loading.show();this.vehicleLogForm.patch("/api/vehicle/log/"+this.id).then((function(o){toastr.success(o.message),t.hide(),e.$router.push("/transport/vehicle/log")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onVehicleSelect:function(e){this.vehicleLogForm.vehicle_id=e.id}}},s=o("KHd+"),l=Object(s.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.vehicleLogForm.errors.clear(t.target.name)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),o("v-select",{attrs:{label:"name",name:"vehicle_id",id:"vehicle_id",options:e.vehicles,placeholder:e.trans("transport.select_vehicle")},on:{select:e.onVehicleSelect,close:function(t){return e.vehicleLogForm.errors.clear("vehicle_id")},remove:function(t){e.vehicleLogForm.vehicle_id=""}},model:{value:e.selected_vehicle,callback:function(t){e.selected_vehicle=t},expression:"selected_vehicle"}},[e.vehicles.length?e._e():o("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),o("show-error",{attrs:{"form-name":e.vehicleLogForm,"prop-name":"vehicle_id"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_log_date_of_log")))]),e._v(" "),o("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("transport.vehicle_log_date_of_log")},on:{selected:function(t){return e.vehicleLogForm.errors.clear("date_of_log")}},model:{value:e.vehicleLogForm.date_of_log,callback:function(t){e.$set(e.vehicleLogForm,"date_of_log",t)},expression:"vehicleLogForm.date_of_log"}}),e._v(" "),o("show-error",{attrs:{"form-name":e.vehicleLogForm,"prop-name":"date_of_log"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_log_log")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleLogForm.log,expression:"vehicleLogForm.log"}],staticClass:"form-control",attrs:{type:"text",name:"log",placeholder:e.trans("transport.vehicle_log_log")},domProps:{value:e.vehicleLogForm.log},on:{input:function(t){t.target.composing||e.$set(e.vehicleLogForm,"log",t.target.value)}}}),e._v(" "),o("show-error",{attrs:{"form-name":e.vehicleLogForm,"prop-name":"log"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_log_description")))]),e._v(" "),o("autosize-textarea",{attrs:{rows:"1",name:"description",placeholder:e.trans("transport.vehicle_log_description")},model:{value:e.vehicleLogForm.description,callback:function(t){e.$set(e.vehicleLogForm,"description",t)},expression:"vehicleLogForm.description"}}),e._v(" "),o("show-error",{attrs:{"form-name":e.vehicleLogForm,"prop-name":"description"}})],1)])]),e._v(" "),o("div",{staticClass:"card-footer text-right"},[o("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/transport/vehicle/log"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():o("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),o("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?o("span",[e._v(e._s(e.trans("general.update")))]):o("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null);t.a=l.exports},"7+/T":function(e,t,o){"use strict";o.r(t);var i={components:{vehicleLogForm:o("0V3i").a},data:function(){return{vehicle_logs:{total:0,data:[]},filter:{sort_by:"date_of_log",order:"desc",vehicle_id:[],date_of_log:"",log:"",start_date:"",end_date:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"vehicle_id",translation:i18n.transport.vehicle},{value:"date_of_log",translation:i18n.transport.vehicle_log_date_of_log},{value:"log",translation:i18n.transport.vehicle_log_log},{value:"created_at",translation:i18n.general.created_at}],vehicles:[],selected_vehicle:null,showCreatePanel:!1,showFilterPanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("list-vehicle-log")&&helper.hasPermission("create-vehicle-log")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),helper.hasPermission("list-vehicle-log")&&this.getVehicleLogs(),helper.showDemoNotification(["transport"])},methods:{getConfig:function(e){return helper.getConfig(e)},hasPermission:function(e){return helper.hasPermission(e)},getVehicleLogs:function(e){var t=this,o=this.$loading.show();"number"!=typeof e&&(e=1);var i=helper.getFilterURL(this.filter);axios.get("/api/vehicle/log?page="+e+i).then((function(e){t.vehicle_logs=e.vehicle_logs,t.vehicles=e.filters.vehicles,o.hide()})).catch((function(e){o.hide(),helper.showErrorMsg(e)}))},editVehicleLog:function(e){this.$router.push("/transport/vehicle/log/"+e.id+"/edit")},confirmDelete:function(e){var t=this;return function(o){return t.deleteVehicleLog(e)}},deleteVehicleLog:function(e){var t=this,o=this.$loading.show();axios.delete("/api/vehicle/log/"+e.id).then((function(e){toastr.success(e.message),t.getVehicleLogs(),o.hide()})).catch((function(e){o.hide(),helper.showErrorMsg(e)}))},print:function(){var e=this.$loading.show();axios.post("/api/vehicle/log/print",{filter:this.filter}).then((function(t){var o=window.open("/print");e.hide(),o.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/vehicle/log/pdf",{filter:this.filter}).then((function(o){t.hide(),window.open("/download/report/"+o+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onVehicleSelect:function(e){this.filter.vehicle_id.push(e.id)},onVehicleRemove:function(e){this.filter.vehicle_id.splice(this.filter.vehicle_id.indexOf(e.id),1)}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getVehicleLogs()},"filter.order":function(e){this.getVehicleLogs()},"filter.page_length":function(e){this.getVehicleLogs()}},computed:{authToken:function(){return helper.getAuthToken()}}},s=o("KHd+"),l=Object(s.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"page-titles"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("transport.vehicle_log"))+" \n                    "),e.vehicle_logs.total?o("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.vehicle_logs.total,from:e.vehicle_logs.from,to:e.vehicle_logs.to})))]):o("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"action-buttons pull-right"},[e.vehicle_logs.total&&!e.showCreatePanel&&e.hasPermission("create-vehicle-log")?o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[o("i",{staticClass:"fas fa-plus"}),e._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("transport.add_new_vehicle_log")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():o("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[o("i",{staticClass:"fas fa-filter"}),e._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),o("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),o("div",{staticClass:"btn-group"},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[o("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),o("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),o("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[o("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[o("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),o("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[o("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),o("help-button",{on:{clicked:function(t){e.help_topic="transport.vehicle.log"}}})],1)])])]),e._v(" "),o("div",{staticClass:"container-fluid"},[o("transition",{attrs:{name:"fade"}},[e.showFilterPanel?o("div",{staticClass:"card card-form"},[o("div",{staticClass:"card-body"},[o("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),o("v-select",{attrs:{label:"name","track-by":"id",name:"vehicle_id",id:"vehicle_id",options:e.vehicles,placeholder:e.trans("transport.select_vehicle"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_vehicle},on:{select:e.onVehicleSelect,remove:e.onVehicleRemove},model:{value:e.selected_vehicle,callback:function(t){e.selected_vehicle=t},expression:"selected_vehicle"}},[e.vehicles.length?e._e():o("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"form-group"},[o("date-range-picker",{attrs:{"start-date":e.filter.start_date,"end-date":e.filter.end_date,label:e.trans("general.date_between")},on:{"update:startDate":function(t){return e.$set(e.filter,"start_date",t)},"update:start-date":function(t){return e.$set(e.filter,"start_date",t)},"update:endDate":function(t){return e.$set(e.filter,"end_date",t)},"update:end-date":function(t){return e.$set(e.filter,"end_date",t)}}})],1)])]),e._v(" "),o("div",{staticClass:"card-footer text-right"},[o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),o("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getVehicleLogs}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),e.hasPermission("create-vehicle-log")?o("transition",{attrs:{name:"fade"}},[e.showCreatePanel?o("div",{staticClass:"card card-form"},[o("div",{staticClass:"card-body"},[o("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("transport.add_new_vehicle_log")))]),e._v(" "),o("vehicle-log-form",{on:{completed:e.getVehicleLogs,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]):e._e(),e._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[e.vehicle_logs.total?o("div",{staticClass:"table-responsive"},[o("table",{staticClass:"table table-sm"},[o("thead",[o("tr",[o("th",[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),o("th",[e._v(e._s(e.trans("transport.vehicle_log_date_of_log")))]),e._v(" "),o("th",[e._v(e._s(e.trans("transport.vehicle_log_log")))]),e._v(" "),o("th",[e._v(e._s(e.trans("transport.vehicle_log_description")))]),e._v(" "),o("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),o("tbody",e._l(e.vehicle_logs.data,(function(t){return o("tr",[o("td",[e._v(e._s(t.vehicle.name+" ("+t.vehicle.registration_number+")"))]),e._v(" "),o("td",[e._v(e._s(e._f("moment")(t.date_of_log)))]),e._v(" "),o("td",[e._v(e._s(t.log))]),e._v(" "),o("td",{domProps:{textContent:e._s(t.description)}}),e._v(" "),o("td",{staticClass:"table-option"},[o("div",{staticClass:"btn-group"},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("transport.edit_vehicle_log"),expression:"trans('transport.edit_vehicle_log')"}],staticClass:"btn btn-info btn-sm",on:{click:function(o){return o.preventDefault(),e.editVehicleLog(t)}}},[o("i",{staticClass:"fas fa-edit"})]),e._v(" "),o("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(vehicle_log)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("transport.delete_vehicle_log"),expression:"trans('transport.delete_vehicle_log')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[o("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):e._e(),e._v(" "),e.vehicle_logs.total?e._e():o("module-info",{attrs:{module:"transport",title:"vehicle_log_module_title",description:"vehicle_log_module_description",icon:"list"}},[o("div",{attrs:{slot:"btn"},slot:"btn"},[!e.showCreatePanel&&e.hasPermission("create-vehicle-log")?o("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[o("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))]):e._e()])]),e._v(" "),o("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.vehicle_logs},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getVehicleLogs}})],1)])],1),e._v(" "),o("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);
//# sourceMappingURL=index.js.map?id=77c4b7bf91b38ca453db