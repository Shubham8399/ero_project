(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{D17n:function(e,t,i){"use strict";i.r(t);var n={components:{},data:function(){return{vehicleInchargeForm:new Form({vehicles:[]},!1),vehicles:[],vehicle_incharges:[],edit_count:0,filter:{vehicle_id:[],show_history:!0},selected_vehicle:null,showFilterPanel:!1,help_topic:""}},mounted:function(){this.getDetail(),helper.showDemoNotification(["transport"])},methods:{getConfig:function(e){return helper.getConfig(e)},hasPermission:function(e){return helper.hasPermission(e)},getDetail:function(){var e=this,t=this.$loading.show(),i=helper.getFilterURL(this.filter);axios.get("/api/vehicle/incharge?options=1"+i).then((function(i){e.vehicles=i.vehicles,e.vehicleInchargeForm.vehicles=[],e.vehicles.forEach((function(t){e.vehicleInchargeForm.vehicles.push({vehicle_incharges:t.vehicle_incharges,vehicle_id:t.id,name:t.name+" "+t.registration_number,change:!1,date_effective:"",selected_employee:null,employee_id:"",description:"",show:!1})})),e.vehicle_incharges=i.vehicle_incharges,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},showAction:function(e){this.vehicleInchargeForm.vehicles[e].show=!0},hideAction:function(e){this.vehicleInchargeForm.vehicles[e].show=!1},getDateEffectiveFieldName:function(e){return e+"_date_effective"},getDescriptionFieldName:function(e){return e+"_description"},getEmployeeFieldName:function(e){return e+"_employee_id"},onEmployeeSelect:function(e,t){var i=t.split("_")[0];this.vehicleInchargeForm.vehicles[i].employee_id=e.id},submit:function(){var e=this,t=this.$loading.show();this.vehicleInchargeForm.post("/api/vehicle/incharge").then((function(i){toastr.success(i.message),e.getDetail(),e.edit_count=0,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getEmployeeName:function(e){return helper.getEmployeeNameWithCode(e)},showEditPanel:function(e){e.change=!0,this.edit_count++},hideEditPanel:function(e){e.change=!1,this.edit_count--},getCurrentVehicleInchargeName:function(e){var t=this.getCurrentVehicleIncharge(e);return void 0!==t?this.getEmployeeName(t.employee):"-"},getCurrentVehicleInchargeDesignation:function(e){var t=this.getCurrentVehicleIncharge(e);return t.length?helper.getEmployeeDesignationOnDate(t[0].employee,t.date_effective):""},getCurrentVehicleIncharge:function(e){var t=e.find((function(e){return e.date_effective<=helper.today()}));return void 0===t&&(t=e[0]),t},confirmDelete:function(e){var t=this;return function(i){return t.deleteVehicleIncharge(e)}},deleteVehicleIncharge:function(e){var t=this,i=this.$loading.show();axios.delete("/api/vehicle/incharge/"+e.id).then((function(e){toastr.success(e.message),t.edit_count=0,t.getDetail(),i.hide()})).catch((function(e){i.hide(),helper.showErrorMsg(e)}))},print:function(){var e=this.$loading.show();axios.post("/api/vehicle/incharge/print",{filter:this.filter}).then((function(t){var i=window.open("/print");e.hide(),i.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/vehicle/incharge/pdf",{filter:this.filter}).then((function(i){t.hide(),window.open("/download/report/"+i+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onVehicleSelect:function(e){this.filter.vehicle_id.push(e.id)},onVehicleRemove:function(e){this.filter.vehicle_id.splice(this.filter.vehicle_id.indexOf(e.id),1)}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},computed:{authToken:function(){return helper.getAuthToken()}}},s=i("KHd+"),a=Object(s.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"page-titles"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("transport.vehicle_incharge"))+" ")])]),e._v(" "),i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"action-buttons pull-right"},[e.showFilterPanel?e._e():i("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[i("i",{staticClass:"fas fa-filter"}),e._v(" "),i("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),i("div",{staticClass:"btn-group"},[i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[i("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),i("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),i("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[i("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[i("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),i("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[i("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),i("help-button",{on:{clicked:function(t){e.help_topic="transport.vehicle-incharge"}}})],1)])])]),e._v(" "),i("div",{staticClass:"container-fluid"},[i("transition",{attrs:{name:"fade"}},[e.showFilterPanel?i("div",{staticClass:"card card-form"},[i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),i("v-select",{attrs:{label:"name","track-by":"id",name:"vehicle_id",id:"vehicle_id",options:e.vehicles,placeholder:e.trans("transport.select_vehicle"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_vehicle},on:{select:e.onVehicleSelect,remove:e.onVehicleRemove},model:{value:e.selected_vehicle,callback:function(t){e.selected_vehicle=t},expression:"selected_vehicle"}},[e.vehicles.length?e._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),i("div",{staticClass:"col-12 col-sm-4"},[i("div",{staticClass:"form-group"},[i("switches",{staticClass:"m-t-10",attrs:{theme:"bootstrap",color:"success"},model:{value:e.filter.show_history,callback:function(t){e.$set(e.filter,"show_history",t)},expression:"filter.show_history"}}),e._v(" "+e._s(e.trans("transport.show_vehicle_incharge_history"))+"\n                            ")],1)])]),e._v(" "),i("div",{staticClass:"card-footer text-right"},[i("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),i("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getDetail}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),i("div",{staticClass:"card p-4"},[i("div",{staticClass:"card-body font-80pc"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)},keydown:function(t){return e.vehicleInchargeForm.errors.clear(t.target.name)}}},[e._l(e.vehicleInchargeForm.vehicles,(function(t,n){return i("div",{class:["row p-3",t.show?"hover":""],on:{mouseover:function(t){return e.showAction(n)},mouseout:function(t){return e.hideAction(n)}}},[i("div",{staticClass:"col-12 col-sm-4"},[e._v("\n                            "+e._s(t.name)+"\n                            "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.hasPermission("store-vehicle-incharge"),expression:"hasPermission('store-vehicle-incharge')"}],staticClass:"m-l-10"},[t.change?e._e():i("i",{staticClass:"fas fa-edit opaque-on-hover",staticStyle:{cursor:"pointer"},on:{click:function(i){return e.showEditPanel(t)}}}),e._v(" "),t.change?i("i",{staticClass:"fas fa-times-circle",staticStyle:{cursor:"pointer"},on:{click:function(i){return e.hideEditPanel(t)}}}):e._e()])]),e._v(" "),i("div",{staticClass:"col-12 col-sm-4"},[t.vehicle_incharges.length?i("span",[e._v("\n                                "+e._s(e.getCurrentVehicleInchargeName(t.vehicle_incharges))+" \n                                "+e._s(e.getCurrentVehicleInchargeDesignation(t.vehicle_incharges))+"\n                                "),e.hasPermission("delete-vehicle-incharge")?i("i",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"vehicle.show"},{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t.vehicle_incharges[0])},expression:"{ok: confirmDelete(vehicle.vehicle_incharges[0])}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("transport.delete_vehicle_incharge"),expression:"trans('transport.delete_vehicle_incharge')"}],key:t.vehicle_incharges[0].id,staticClass:"fas fa-times-circle",staticStyle:{cursor:"pointer",color:"red"}}):e._e()]):i("span",[e._v("-")])]),e._v(" "),e.filter.show_history?i("div",{staticClass:"col-12 col-sm-4"},[t.vehicle_incharges.length?i("ul",{staticStyle:{"list-style":"none",padding:"0",margin:"0"}},e._l(t.vehicle_incharges,(function(t,n){return i("li",[e._v("\n                                    ("+e._s(n+1)+") \n                                    "+e._s(e.getEmployeeName(t.employee)+" "+e.trans("general.from"))+" "+e._s(e._f("moment")(t.date_effective))+" \n                                ")])})),0):e._e(),e._v(" "),t.vehicle_incharges.length?e._e():i("span",[e._v("-")])]):e._e(),e._v(" "),t.change?i("div",{staticClass:"col-12 my-4"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-4"},[i("v-select",{attrs:{label:"name",name:e.getEmployeeFieldName(n),id:e.getEmployeeFieldName(n),options:e.vehicle_incharges,placeholder:e.trans("transport.select_vehicle_incharge")},on:{select:e.onEmployeeSelect,close:function(t){e.vehicleInchargeForm.errors.clear(e.getEmployeeFieldName(n))},remove:function(e){t.employee_id=""}},model:{value:t.selected_employee,callback:function(i){e.$set(t,"selected_employee",i)},expression:"vehicle.selected_employee"}},[e.vehicle_incharges.length?e._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])]),e._v(" "),i("show-error",{attrs:{"form-name":e.vehicleInchargeForm,"prop-name":e.getEmployeeFieldName(n)}})],1),e._v(" "),i("div",{staticClass:"col-12 col-sm-4"},[i("datepicker",{attrs:{bootstrapStyling:!0,name:e.getDateEffectiveFieldName(n),placeholder:e.trans("transport.date_effective")},on:{selected:function(t){e.vehicleInchargeForm.errors.clear(e.getDateEffectiveFieldName(n))}},model:{value:t.date_effective,callback:function(i){e.$set(t,"date_effective",i)},expression:"vehicle.date_effective"}}),e._v(" "),i("show-error",{attrs:{"form-name":e.vehicleInchargeForm,"prop-name":e.getDateEffectiveFieldName(n)}})],1),e._v(" "),i("div",{staticClass:"col-12 col-sm-4"},[i("autosize-textarea",{attrs:{rows:"1",name:e.getDescriptionFieldName(n),placeholder:e.trans("transport.vehicle_incharge_description")},model:{value:t.description,callback:function(i){e.$set(t,"description",i)},expression:"vehicle.description"}}),e._v(" "),i("show-error",{attrs:{"form-name":e.vehicleInchargeForm,"prop-name":e.getDescriptionFieldName(n)}})],1)])]):e._e()])})),e._v(" "),e.edit_count?i("button",{staticClass:"btn btn-info waves-effect waves-light pull-right",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))]):e._e()],2)])])],1),e._v(" "),i("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null);t.default=a.exports}}]);
//# sourceMappingURL=index.js.map?id=10cff1dd8a1f482cfca9