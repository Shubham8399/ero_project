(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{"/L+t":function(e,o,t){"use strict";t.r(o);var r={components:{VendorForm:t("TrVm").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("edit-vendor")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},n=t("KHd+"),a=Object(n.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("inventory.edit_vendor")))])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(o){return e.$router.push("/inventory/vendor")}}},[t("i",{staticClass:"fas fa-list"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("inventory.vendor")))])])])])])]),e._v(" "),t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body p-t-20"},[t("vendor-form",{attrs:{id:e.id}})],1)])])])}),[],!1,null,null,null);o.default=a.exports},TrVm:function(e,o,t){"use strict";var r={components:{},props:["id"],data:function(){return{vendorForm:new Form({name:"",phone:"",alternate_phone:"",email:"",tax_id:"",contact_person:"",contact_person_phone:"",contact_person_email:"",address_line_1:"",address_line_2:"",city:"",state:"",zipcode:"",country:""})}},mounted:function(){this.id&&this.getVendor()},methods:{proceed:function(){this.id?this.updateVendor():this.storeVendor()},storeVendor:function(){var e=this,o=this.$loading.show();this.vendorForm.post("/api/vendor").then((function(t){toastr.success(t.message),e.$emit("completed"),o.hide()})).catch((function(e){o.hide(),helper.showErrorMsg(e)}))},getVendor:function(){var e=this,o=this.$loading.show();axios.get("/api/vendor/"+this.id).then((function(t){e.vendorForm.name=t.name,e.vendorForm.phone=t.phone,e.vendorForm.alternate_phone=t.alternate_phone,e.vendorForm.email=t.email,e.vendorForm.tax_id=t.tax_id,e.vendorForm.contact_person=t.contact_person,e.vendorForm.contact_person_phone=t.contact_person_phone,e.vendorForm.contact_person_email=t.contact_person_email,e.vendorForm.address_line_1=t.address_line_1,e.vendorForm.address_line_2=t.address_line_2,e.vendorForm.city=t.city,e.vendorForm.state=t.state,e.vendorForm.zipcode=t.zipcode,e.vendorForm.country=t.country,o.hide()})).catch((function(t){o.hide(),e.$router.push("/inventory/vendor")}))},updateVendor:function(){var e=this,o=this.$loading.show();this.vendorForm.patch("/api/vendor/"+this.id).then((function(t){toastr.success(t.message),e.$emit("completed"),o.hide(),e.$router.push("/inventory/vendor")})).catch((function(e){o.hide(),helper.showErrorMsg(e)}))}}},n=t("KHd+"),a=Object(n.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("form",{on:{submit:function(o){return o.preventDefault(),e.proceed(o)},keydown:function(o){return e.vendorForm.errors.clear(o.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_name")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.name,expression:"vendorForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("inventory.vendor_name")},domProps:{value:e.vendorForm.name},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"name",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"name"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_phone")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.phone,expression:"vendorForm.phone"}],staticClass:"form-control",attrs:{type:"text",name:"phone",placeholder:e.trans("inventory.vendor_phone")},domProps:{value:e.vendorForm.phone},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"phone",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"phone"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_alternate_phone")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.alternate_phone,expression:"vendorForm.alternate_phone"}],staticClass:"form-control",attrs:{type:"text",name:"alternate_phone",placeholder:e.trans("inventory.vendor_alternate_phone")},domProps:{value:e.vendorForm.alternate_phone},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"alternate_phone",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"alternate_phone"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_email")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.email,expression:"vendorForm.email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:e.trans("inventory.vendor_email")},domProps:{value:e.vendorForm.email},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"email",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"email"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_tax_id")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.tax_id,expression:"vendorForm.tax_id"}],staticClass:"form-control",attrs:{type:"text",name:"tax_id",placeholder:e.trans("inventory.vendor_tax_id")},domProps:{value:e.vendorForm.tax_id},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"tax_id",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"tax_id"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_contact_person")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.contact_person,expression:"vendorForm.contact_person"}],staticClass:"form-control",attrs:{type:"text",name:"contact_person",placeholder:e.trans("inventory.vendor_contact_person")},domProps:{value:e.vendorForm.contact_person},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"contact_person",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"contact_person"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_contact_person_phone")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.contact_person_phone,expression:"vendorForm.contact_person_phone"}],staticClass:"form-control",attrs:{type:"text",name:"contact_person_phone",placeholder:e.trans("inventory.vendor_contact_person_phone")},domProps:{value:e.vendorForm.contact_person_phone},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"contact_person_phone",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"contact_person_phone"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_contact_person_email")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.contact_person_email,expression:"vendorForm.contact_person_email"}],staticClass:"form-control",attrs:{type:"text",name:"contact_person_email",placeholder:e.trans("inventory.vendor_contact_person_email")},domProps:{value:e.vendorForm.contact_person_email},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"contact_person_email",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"contact_person_email"}})],1)])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_address_line_1")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.address_line_1,expression:"vendorForm.address_line_1"}],staticClass:"form-control",attrs:{type:"text",name:"address_line_1",placeholder:e.trans("inventory.vendor_address_line_1")},domProps:{value:e.vendorForm.address_line_1},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"address_line_1",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"address_line_1"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_address_line_2")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.address_line_2,expression:"vendorForm.address_line_2"}],staticClass:"form-control",attrs:{type:"text",name:"address_line_2",placeholder:e.trans("inventory.vendor_address_line_2")},domProps:{value:e.vendorForm.address_line_2},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"address_line_2",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"address_line_2"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_city")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.city,expression:"vendorForm.city"}],staticClass:"form-control",attrs:{type:"text",name:"city",placeholder:e.trans("inventory.vendor_city")},domProps:{value:e.vendorForm.city},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"city",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"city"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_state")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.state,expression:"vendorForm.state"}],staticClass:"form-control",attrs:{type:"text",name:"state",placeholder:e.trans("inventory.vendor_state")},domProps:{value:e.vendorForm.state},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"state",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"state"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_zipcode")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.zipcode,expression:"vendorForm.zipcode"}],staticClass:"form-control",attrs:{type:"text",name:"zipcode",placeholder:e.trans("inventory.vendor_zipcode")},domProps:{value:e.vendorForm.zipcode},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"zipcode",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"zipcode"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("inventory.vendor_country")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendorForm.country,expression:"vendorForm.country"}],staticClass:"form-control",attrs:{type:"text",name:"country",placeholder:e.trans("inventory.vendor_country")},domProps:{value:e.vendorForm.country},on:{input:function(o){o.target.composing||e.$set(e.vendorForm,"country",o.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vendorForm,"prop-name":"country"}})],1)])]),e._v(" "),t("div",{staticClass:"card-footer text-right"},[t("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/inventory/vendor"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():t("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(o){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?t("span",[e._v(e._s(e.trans("general.update")))]):t("span",[e._v(e._s(e.trans("general.save")))])])],1)])])}),[],!1,null,null,null);o.a=a.exports}}]);
//# sourceMappingURL=edit.js.map?id=5a25cd05fb457553e6fe