(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{P4dv:function(e,t,r){"use strict";var a={components:{},data:function(){return{vehicleForm:new Form({name:"",registration_number:"",make:"",model:"",max_seating_capacity:"",max_allowed:"",is_owned:"",owner_name:"",owner_company_name:"",owner_phone:"",owner_email:"",vehicle_fuel_type_id:"",max_fuel_capacity:"",is_active:!1,advance_info:!1,disposal_info:!1,chasis_number:"",engine_number:"",cubic_capacity:"",class:"",registration_date:"",registration_place:"",sale_date:"",selling_price:"",buyer_name:"",buyer_contact_number:"",buyer_address:""}),vehicle_fuel_types:[],selected_vehicle_fuel_type:null}},props:["id"],mounted:function(){this.id&&this.getVehicle(),this.getPreRequisite()},methods:{getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/vehicle/pre-requisite").then((function(r){e.vehicle_fuel_types=r.vehicle_fuel_types,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},proceed:function(){this.id?this.updateVehicle():this.storeVehicle()},storeVehicle:function(){var e=this,t=this.$loading.show();this.vehicleForm.make=moment(this.vehicleForm.make).format("YYYY-MM"),this.vehicleForm.post("/api/vehicle").then((function(r){toastr.success(r.message),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getVehicle:function(){var e=this,t=this.$loading.show();axios.get("/api/vehicle/"+this.id).then((function(r){e.vehicleForm.name=r.name,e.vehicleForm.registration_number=r.registration_number,e.vehicleForm.make=r.make,e.vehicleForm.model=r.model,e.vehicleForm.is_owned=r.is_owned,e.vehicleForm.max_seating_capacity=r.max_seating_capacity,e.vehicleForm.max_allowed=r.max_allowed,e.vehicleForm.owner_name=r.owner_name,e.vehicleForm.owner_company_name=r.owner_company_name,e.vehicleForm.owner_phone=r.owner_phone,e.vehicleForm.owner_email=r.owner_email,e.vehicleForm.vehicle_fuel_type_id=r.vehicle_fuel_type_id,e.selected_vehicle_fuel_type=r.vehicle_fuel_type_id?{id:r.vehicle_fuel_type_id,name:r.vehicle_fuel_type.name}:null,e.vehicleForm.max_fuel_capacity=r.max_fuel_capacity,e.vehicleForm.is_active=r.is_active;var a=r.options&&r.options.hasOwnProperty("advance")?r.options.advance:{chasis_number:"",engine_number:"",cubic_capacity:"",class:"",registration_date:"",registration_place:""},o=r.options&&r.options.hasOwnProperty("disposal")?r.options.disposal:{sale_date:"",selling_price:"",buyer_name:"",buyer_contact_number:"",buyer_address:""};e.vehicleForm.chasis_number=a.chasis_number,e.vehicleForm.engine_number=a.engine_number,e.vehicleForm.cubic_capacity=a.cubic_capacity,e.vehicleForm.class=a.class,e.vehicleForm.registration_date=a.registration_date,e.vehicleForm.registration_place=a.registration_place,e.vehicleForm.sale_date=o.sale_date,e.vehicleForm.selling_price=o.selling_price,e.vehicleForm.buyer_name=o.buyer_name,e.vehicleForm.buyer_contact_number=o.buyer_contact_number,e.vehicleForm.buyer_address=o.buyer_address,t.hide()})).catch((function(r){t.hide(),e.$router.push("/transport/vehicle")}))},updateVehicle:function(){var e=this,t=this.$loading.show();this.vehicleForm.make=moment(this.vehicleForm.make).format("YYYY-MM"),this.vehicleForm.patch("/api/vehicle/"+this.id).then((function(r){toastr.success(r.message),t.hide(),e.$router.push("/transport/vehicle")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onFuelTypeSelect:function(e){this.vehicleForm.vehicle_fuel_type_id=e.id},onVehicleSelect:function(e){this.vehicleForm.vehicle_id=e.id}}},o=r("KHd+"),s=Object(o.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.vehicleForm.errors.clear(t.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_name")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.name,expression:"vehicleForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("transport.vehicle_name")},domProps:{value:e.vehicleForm.name},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"name",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"name"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_registration_number")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.registration_number,expression:"vehicleForm.registration_number"}],staticClass:"form-control",attrs:{type:"text",name:"registration_number",placeholder:e.trans("transport.vehicle_registration_number")},domProps:{value:e.vehicleForm.registration_number},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"registration_number",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"registration_number"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_max_seating_capacity")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.max_seating_capacity,expression:"vehicleForm.max_seating_capacity"}],staticClass:"form-control",attrs:{type:"text",name:"max_seating_capacity",placeholder:e.trans("transport.vehicle_max_seating_capacity")},domProps:{value:e.vehicleForm.max_seating_capacity},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"max_seating_capacity",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"max_seating_capacity"}})],1),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_max_allowed")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.max_allowed,expression:"vehicleForm.max_allowed"}],staticClass:"form-control",attrs:{type:"text",name:"max_allowed",placeholder:e.trans("transport.vehicle_max_allowed")},domProps:{value:e.vehicleForm.max_allowed},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"max_allowed",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"max_allowed"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_make")))]),e._v(" "),r("vue-monthly-picker",{attrs:{name:"make",placeHolder:e.trans("transport.vehicle_make"),dateFormat:"YYYY-MM "},model:{value:e.vehicleForm.make,callback:function(t){e.$set(e.vehicleForm,"make",t)},expression:"vehicleForm.make"}})],1),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_model")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.model,expression:"vehicleForm.model"}],staticClass:"form-control",attrs:{type:"text",name:"model",placeholder:e.trans("transport.vehicle_model")},domProps:{value:e.vehicleForm.model},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"model",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"model"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("div",[e._v(e._s(e.trans("transport.vehicle_is_active")))]),e._v(" "),r("switches",{staticClass:"m-t-10",attrs:{theme:"bootstrap",color:"success"},model:{value:e.vehicleForm.is_active,callback:function(t){e.$set(e.vehicleForm,"is_active",t)},expression:"vehicleForm.is_active"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("div",{staticClass:"form-group"},[r("div",{staticClass:"radio radio-success"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.is_owned,expression:"vehicleForm.is_owned"}],attrs:{type:"radio",value:"1",id:"owned",name:"is_owned"},domProps:{checked:e.vehicleForm.is_owned,checked:e._q(e.vehicleForm.is_owned,"1")},on:{click:function(t){return e.vehicleForm.errors.clear("is_owned")},change:function(t){return e.$set(e.vehicleForm,"is_owned","1")}}}),e._v(" "),r("label",{attrs:{for:"owned"}},[e._v(e._s(e.trans("transport.vehicle_owned")))])]),e._v(" "),r("div",{staticClass:"radio radio-success"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.is_owned,expression:"vehicleForm.is_owned"}],attrs:{type:"radio",value:"0",id:"contract",name:"is_owned"},domProps:{checked:!e.vehicleForm.is_owned,checked:e._q(e.vehicleForm.is_owned,"0")},on:{click:function(t){return e.vehicleForm.errors.clear("is_owned")},change:function(t){return e.$set(e.vehicleForm,"is_owned","0")}}}),e._v(" "),r("label",{attrs:{for:"contract"}},[e._v(e._s(e.trans("transport.vehicle_contract")))])]),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"is_owned"}})],1)])])]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_owner_name")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.owner_name,expression:"vehicleForm.owner_name"}],staticClass:"form-control",attrs:{type:"text",name:"owner_name",placeholder:e.trans("transport.vehicle_owner_name")},domProps:{value:e.vehicleForm.owner_name},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"owner_name",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"owner_name"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_owner_company_name")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.owner_company_name,expression:"vehicleForm.owner_company_name"}],staticClass:"form-control",attrs:{type:"text",name:"owner_company_name",placeholder:e.trans("transport.vehicle_owner_company_name")},domProps:{value:e.vehicleForm.owner_company_name},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"owner_company_name",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"owner_company_name"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_owner_phone")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.owner_phone,expression:"vehicleForm.owner_phone"}],staticClass:"form-control",attrs:{type:"text",name:"owner_phone",placeholder:e.trans("transport.vehicle_owner_phone")},domProps:{value:e.vehicleForm.owner_phone},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"owner_phone",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"owner_phone"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_owner_email")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.owner_email,expression:"vehicleForm.owner_email"}],staticClass:"form-control",attrs:{type:"text",name:"owner_email",placeholder:e.trans("transport.vehicle_owner_email")},domProps:{value:e.vehicleForm.owner_email},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"owner_email",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"owner_email"}})],1)])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_fuel_type")))]),e._v(" "),r("v-select",{attrs:{label:"name",name:"vehicle_fuel_type_id",id:"vehicle_fuel_type_id",options:e.vehicle_fuel_types,placeholder:e.trans("general.select_one")},on:{select:e.onFuelTypeSelect,close:function(t){return e.vehicleForm.errors.clear("vehicle_fuel_type_id")},remove:function(t){e.vehicleForm.vehicle_fuel_type_id=""}},model:{value:e.selected_vehicle_fuel_type,callback:function(t){e.selected_vehicle_fuel_type=t},expression:"selected_vehicle_fuel_type"}},[e.vehicle_fuel_types.length?e._e():r("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                "+e._s(e.trans("general.no_option_found"))+"\n                            ")])]),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"vehicle_fuel_type_id"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.max_fuel_capacity")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.max_fuel_capacity,expression:"vehicleForm.max_fuel_capacity"}],staticClass:"form-control",attrs:{type:"text",name:"max_fuel_capacity",placeholder:e.trans("transport.max_fuel_capacity")},domProps:{value:e.vehicleForm.max_fuel_capacity},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"max_fuel_capacity",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"max_fuel_capacity"}})],1)])])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("div",[e._v(e._s(e.trans("transport.vehicle_advance_info")))]),e._v(" "),r("switches",{staticClass:"m-t-10",attrs:{theme:"bootstrap",color:"success"},model:{value:e.vehicleForm.advance_info,callback:function(t){e.$set(e.vehicleForm,"advance_info",t)},expression:"vehicleForm.advance_info"}})],1)]),e._v(" "),e.vehicleForm.advance_info?[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_chasis_number")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.chasis_number,expression:"vehicleForm.chasis_number"}],staticClass:"form-control",attrs:{type:"text",name:"chasis_number",placeholder:e.trans("transport.vehicle_chasis_number")},domProps:{value:e.vehicleForm.chasis_number},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"chasis_number",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"chasis_number"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_engine_number")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.engine_number,expression:"vehicleForm.engine_number"}],staticClass:"form-control",attrs:{type:"text",name:"engine_number",placeholder:e.trans("transport.vehicle_engine_number")},domProps:{value:e.vehicleForm.engine_number},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"engine_number",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"engine_number"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_cubic_capacity")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.cubic_capacity,expression:"vehicleForm.cubic_capacity"}],staticClass:"form-control",attrs:{type:"text",name:"cubic_capacity",placeholder:e.trans("transport.vehicle_cubic_capacity")},domProps:{value:e.vehicleForm.cubic_capacity},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"cubic_capacity",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"cubic_capacity"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_class")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.class,expression:"vehicleForm.class"}],staticClass:"form-control",attrs:{type:"text",name:"class",placeholder:e.trans("transport.vehicle_class")},domProps:{value:e.vehicleForm.class},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"class",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"class"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_registration_place")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.registration_place,expression:"vehicleForm.registration_place"}],staticClass:"form-control",attrs:{type:"text",name:"registration_place",placeholder:e.trans("transport.vehicle_registration_place")},domProps:{value:e.vehicleForm.registration_place},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"registration_place",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"registration_place"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_registration_date")))]),e._v(" "),r("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("transport.vehicle_registration_date")},on:{selected:function(t){return e.vehicleForm.errors.clear("registration_date")}},model:{value:e.vehicleForm.registration_date,callback:function(t){e.$set(e.vehicleForm,"registration_date",t)},expression:"vehicleForm.registration_date"}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"registration_date"}})],1)])]:e._e()],2),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("div",[e._v(e._s(e.trans("transport.vehicle_disposal_info")))]),e._v(" "),r("switches",{staticClass:"m-t-10",attrs:{theme:"bootstrap",color:"success"},model:{value:e.vehicleForm.disposal_info,callback:function(t){e.$set(e.vehicleForm,"disposal_info",t)},expression:"vehicleForm.disposal_info"}})],1)]),e._v(" "),e.vehicleForm.disposal_info?[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_sale_date")))]),e._v(" "),r("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("transport.vehicle_sale_date")},on:{selected:function(t){return e.vehicleForm.errors.clear("sale_date")}},model:{value:e.vehicleForm.sale_date,callback:function(t){e.$set(e.vehicleForm,"sale_date",t)},expression:"vehicleForm.sale_date"}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"sale_date"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_selling_price")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.selling_price,expression:"vehicleForm.selling_price"}],staticClass:"form-control",attrs:{type:"text",name:"selling_price",placeholder:e.trans("transport.vehicle_selling_price")},domProps:{value:e.vehicleForm.selling_price},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"selling_price",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"selling_price"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_buyer_name")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.buyer_name,expression:"vehicleForm.buyer_name"}],staticClass:"form-control",attrs:{type:"text",name:"buyer_name",placeholder:e.trans("transport.vehicle_buyer_name")},domProps:{value:e.vehicleForm.buyer_name},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"buyer_name",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"buyer_name"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_buyer_contact_number")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.buyer_contact_number,expression:"vehicleForm.buyer_contact_number"}],staticClass:"form-control",attrs:{type:"text",name:"buyer_contact_number",placeholder:e.trans("transport.vehicle_buyer_contact_number")},domProps:{value:e.vehicleForm.buyer_contact_number},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"buyer_contact_number",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"buyer_contact_number"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_buyer_address")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleForm.buyer_address,expression:"vehicleForm.buyer_address"}],staticClass:"form-control",attrs:{type:"text",name:"buyer_address",placeholder:e.trans("transport.vehicle_buyer_address")},domProps:{value:e.vehicleForm.buyer_address},on:{input:function(t){t.target.composing||e.$set(e.vehicleForm,"buyer_address",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.vehicleForm,"prop-name":"buyer_address"}})],1)])]:e._e()],2),e._v(" "),r("div",{staticClass:"card-footer text-right"},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/transport/vehicle"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():r("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?r("span",[e._v(e._s(e.trans("general.update")))]):r("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null);t.a=s.exports},RHoI:function(e,t,r){"use strict";r.r(t);var a={components:{vehicleForm:r("P4dv").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("edit-vehicle")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},o=r("KHd+"),s=Object(o.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("transport.edit_vehicle")))])]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"action-buttons pull-right"},[r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/transport/vehicle")}}},[r("i",{staticClass:"fas fa-list"}),e._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("transport.vehicle")))])])])])])]),e._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body p-t-20"},[r("vehicle-form",{attrs:{id:e.id}})],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);
//# sourceMappingURL=edit.js.map?id=00dd7255ff15811ec919