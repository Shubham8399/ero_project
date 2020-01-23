(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"8lLk":function(t,e,o){"use strict";o.r(e);var s={components:{customFieldForm:o("HzfF").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},a=o("KHd+"),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"page-titles"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("configuration.edit_custom_field")))])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"action-buttons pull-right"},[o("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/configuration/custom-field")}}},[o("i",{staticClass:"fas fa-list"}),t._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("configuration.custom_field")))])])])])])]),t._v(" "),o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"card card-form"},[o("div",{staticClass:"card-body p-t-20"},[o("custom-field-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null);e.default=r.exports},HzfF:function(t,e,o){"use strict";var s={data:function(){return{customFieldForm:new Form({name:"",type:"",width:"",form:"",min_length:"",max_length:"",min_value:"",max_value:"",decimal_place:2,is_required:!1,values:[]}),forms:[],types:[],widths:[]}},props:["id"],mounted:function(){this.getPreRequisite()},methods:{getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/custom-field/pre-requisite").then((function(o){t.forms=o.forms,t.types=o.types,t.widths=o.widths,t.id&&t.get(),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},addRow:function(){this.customFieldForm.values.push({name:""})},getValueName:function(t){return t+"_value_name"},confirmDeleteValue:function(t){var e=this;return function(o){return e.deleteValue(t)}},deleteValue:function(t){this.customFieldForm.values.splice(t,1)},proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.customFieldForm.post("/api/custom-field").then((function(o){toastr.success(o.message),t.customFieldForm.values=[],t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/custom-field/"+this.id).then((function(o){t.customFieldForm.name=o.name,t.customFieldForm.type=o.type,t.customFieldForm.form=o.form,t.customFieldForm.width=o.width,t.customFieldForm.is_required=o.is_required,t.customFieldForm.min_length=o.options.hasOwnProperty("min_length")?o.options.min_length:"",t.customFieldForm.max_length=o.options.hasOwnProperty("max_length")?o.options.max_length:"",t.customFieldForm.min_value=o.options.hasOwnProperty("min_value")?o.options.min_value:"",t.customFieldForm.max_value=o.options.hasOwnProperty("max_value")?o.options.max_value:"",t.customFieldForm.decimal_place=o.options.hasOwnProperty("decimal_place")?o.options.decimal_place:"",o.values.forEach((function(e){t.customFieldForm.values.push({name:e})})),e.hide()})).catch((function(o){e.hide(),helper.showErrorMsg(o),t.$router.push("/configuration/custom-field")}))},update:function(){var t=this,e=this.$loading.show();this.customFieldForm.patch("/api/custom-field/"+this.id).then((function(o){toastr.success(o.message),e.hide(),t.$router.push("/configuration/custom-field")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},computed:{showValue:function(){return"checkbox_input"==this.customFieldForm.type||"radio_input"==this.customFieldForm.type||"dropdown_input"==this.customFieldForm.type}}},a=o("KHd+"),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.customFieldForm.errors.clear(e.target.name)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.custom_field_form")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.customFieldForm.form,expression:"customFieldForm.form"}],staticClass:"custom-select col-12",attrs:{placeholder:t.trans("general.select_one"),name:"form"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.customFieldForm,"form",e.target.multiple?o:o[0])},function(e){return t.customFieldForm.errors.clear("form")}]}},[o("option",{attrs:{value:""}},[t._v(t._s(t.trans("general.select_one")))]),t._v(" "),t._l(t.forms,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                            "+t._s(e.text)+"\n                          ")])}))],2),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":"form"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.custom_field_name")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.customFieldForm.name,expression:"customFieldForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("configuration.custom_field_name")},domProps:{value:t.customFieldForm.name},on:{input:function(e){e.target.composing||t.$set(t.customFieldForm,"name",e.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":"name"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"custom-control custom-checkbox m-t-20"},[o("br"),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.customFieldForm.is_required,expression:"customFieldForm.is_required"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",name:"is_required"},domProps:{checked:Array.isArray(t.customFieldForm.is_required)?t._i(t.customFieldForm.is_required,"1")>-1:t.customFieldForm.is_required},on:{change:function(e){var o=t.customFieldForm.is_required,s=e.target,a=!!s.checked;if(Array.isArray(o)){var r=t._i(o,"1");s.checked?r<0&&t.$set(t.customFieldForm,"is_required",o.concat(["1"])):r>-1&&t.$set(t.customFieldForm,"is_required",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.customFieldForm,"is_required",a)}}}),t._v(" "),o("span",{staticClass:"custom-control-label"},[t._v(t._s(t.trans("configuration.custom_field_required")))])]),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":"is_required"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.custom_field_type")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.customFieldForm.type,expression:"customFieldForm.type"}],staticClass:"custom-select col-12",attrs:{name:"type"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.customFieldForm,"type",e.target.multiple?o:o[0])},function(e){return t.customFieldForm.errors.clear("type")}]}},[o("option",{attrs:{value:""}},[t._v(t._s(t.trans("general.select_one")))]),t._v(" "),t._l(t.types,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                            "+t._s(e.text)+"\n                          ")])}))],2),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":"type"}})],1)]),t._v(" "),"numeric_input"===t.customFieldForm.type?[o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.custom_field_min_value")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.customFieldForm.min_value,expression:"customFieldForm.min_value"}],staticClass:"form-control",attrs:{type:"number",name:"min_value",placeholder:t.trans("configuration.custom_field_min_value")},domProps:{value:t.customFieldForm.min_value},on:{input:function(e){e.target.composing||t.$set(t.customFieldForm,"min_value",e.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":"min_value"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.custom_field_max_value")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.customFieldForm.max_value,expression:"customFieldForm.max_value"}],staticClass:"form-control",attrs:{type:"number",name:"max_value",placeholder:t.trans("configuration.custom_field_max_value")},domProps:{value:t.customFieldForm.max_value},on:{input:function(e){e.target.composing||t.$set(t.customFieldForm,"max_value",e.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":"max_value"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.custom_field_decimal_place")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.customFieldForm.decimal_place,expression:"customFieldForm.decimal_place"}],staticClass:"form-control",attrs:{type:"number",name:"decimal_place",placeholder:t.trans("configuration.custom_field_decimal_place")},domProps:{value:t.customFieldForm.decimal_place},on:{input:function(e){e.target.composing||t.$set(t.customFieldForm,"decimal_place",e.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":"decimal_place"}})],1)])]:t._e(),t._v(" "),"text_input"===t.customFieldForm.type||"multi_line_input"===t.customFieldForm.type?[o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.custom_field_min_length")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.customFieldForm.min_length,expression:"customFieldForm.min_length"}],staticClass:"form-control",attrs:{type:"number",name:"min_length",placeholder:t.trans("configuration.custom_field_min_length")},domProps:{value:t.customFieldForm.min_length},on:{input:function(e){e.target.composing||t.$set(t.customFieldForm,"min_length",e.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":"min_length"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.custom_field_max_length")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.customFieldForm.max_length,expression:"customFieldForm.max_length"}],staticClass:"form-control",attrs:{type:"number",name:"max_length",placeholder:t.trans("configuration.custom_field_max_length")},domProps:{value:t.customFieldForm.max_length},on:{input:function(e){e.target.composing||t.$set(t.customFieldForm,"max_length",e.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":"max_length"}})],1)])]:t._e(),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.custom_field_width")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.customFieldForm.width,expression:"customFieldForm.width"}],staticClass:"custom-select col-12",attrs:{name:"width"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.customFieldForm,"width",e.target.multiple?o:o[0])},function(e){return t.customFieldForm.errors.clear("width")}]}},[o("option",{attrs:{value:""}},[t._v(t._s(t.trans("general.select_one")))]),t._v(" "),t._l(t.widths,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                            "+t._s(e.text)+"\n                          ")])}))],2),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":"width"}})],1)]),t._v(" "),t.showValue?o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(" ")]),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light",attrs:{type:"button"},on:{click:t.addRow}},[t._v(t._s(t.trans("configuration.add_new_custom_field_value")))])])]):t._e()],2),t._v(" "),t.showValue?o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},t._l(t.customFieldForm.values,(function(e,s){return o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.custom_field_value"))+" "+t._s(s+1))]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-8"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"value.name"}],staticClass:"form-control",attrs:{type:"text",name:t.getValueName(s),placeholder:t.trans("configuration.custom_field_value_name")},domProps:{value:e.name},on:{input:function(o){o.target.composing||t.$set(e,"name",o.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.customFieldForm,"prop-name":t.getValueName(s)}})],1),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("label",{attrs:{for:""}},[o("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDeleteValue(s)},expression:"{ok: confirmDeleteValue(index)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("configuration.delete_custom_field_value"),expression:"trans('configuration.delete_custom_field_value')"}],key:s+"_delete_value",staticClass:"btn btn-xs btn-danger",attrs:{type:"button"}},[o("i",{staticClass:"fas fa-times"})])])])])])})),0)]):t._e(),t._v(" "),o("div",{staticClass:"card-footer text-right"},[o("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/custom-field"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():o("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),o("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?o("span",[t._v(t._s(t.trans("general.update")))]):o("span",[t._v(t._s(t.trans("general.save")))])])],1)])])}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=edit.js.map?id=76882e70e2c7f598b215