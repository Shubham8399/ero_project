(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{WJ7g:function(t,e,s){"use strict";var r={data:function(){return{fuelTypeForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.fuelTypeForm.post("/api/transport/vehicle/fuel/type").then((function(s){toastr.success(s.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/transport/vehicle/fuel/type/"+this.id).then((function(s){t.fuelTypeForm.name=s.name,t.fuelTypeForm.description=s.description,e.hide()})).catch((function(s){e.hide(),helper.showErrorMsg(s),t.$router.push("/configuration/transport/vehicle/fuel/type")}))},update:function(){var t=this,e=this.$loading.show();this.fuelTypeForm.patch("/api/transport/vehicle/fuel/type/"+this.id).then((function(s){toastr.success(s.message),e.hide(),t.$router.push("/configuration/transport/vehicle/fuel/type")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}},a=s("KHd+"),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.fuelTypeForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.vehicle_fuel_type_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fuelTypeForm.name,expression:"fuelTypeForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("transport.vehicle_fuel_type_name")},domProps:{value:t.fuelTypeForm.name},on:{input:function(e){e.target.composing||t.$set(t.fuelTypeForm,"name",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.fuelTypeForm,"prop-name":"name"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.vehicle_fuel_type_description")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fuelTypeForm.description,expression:"fuelTypeForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("transport.vehicle_fuel_type_description")},domProps:{value:t.fuelTypeForm.description},on:{input:function(e){e.target.composing||t.$set(t.fuelTypeForm,"description",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.fuelTypeForm,"prop-name":"description"}})],1)])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/transport/vehicle/fuel/type"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?s("span",[t._v(t._s(t.trans("general.update")))]):s("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);e.a=n.exports},zywz:function(t,e,s){"use strict";s.r(e);var r={components:{fuelTypeForm:s("WJ7g").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},a=s("KHd+"),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("transport.edit_vehicle_fuel_type")))])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/configuration/transport/vehicle/fuel/type")}}},[s("i",{staticClass:"fas fa-list"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("transport.vehicle_fuel_type")))])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("fuel-type-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=edit.js.map?id=c4cebf67db0282fa81ee