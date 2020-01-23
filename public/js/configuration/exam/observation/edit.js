(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{YaBQ:function(t,e,a){"use strict";a.r(e);var s={components:{parameterForm:a("u6IS").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},o=a("KHd+"),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("exam.edit_parameter")))])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/configuration/exam/parameter")}}},[a("i",{staticClass:"fas fa-list"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("exam.parameter")))])])])])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body p-t-20"},[a("parameter-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null);e.default=r.exports},u6IS:function(t,e,a){"use strict";var s={components:{},data:function(){return{observationForm:new Form({name:"",description:"",details:[]})}},props:["id"],mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.id?this.get():this.addRow()},methods:{hasPermission:function(t){return helper.hasPermission(t)},addRow:function(){this.observationForm.details.push({name:"",max_mark:"",description:""})},confirmDeleteDetail:function(t){var e=this;return function(a){return e.deleteDetail(t)}},deleteDetail:function(t){this.observationForm.details.splice(t,1)},getDetailName:function(t){return t+"_detail_name"},getDetailMaxMarkName:function(t){return t+"_detail_max_mark"},getDetailDescriptionName:function(t){return t+"_detail_description"},proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.observationForm.post("/api/exam/observation").then((function(a){toastr.success(a.message),t.observationForm.details=[],t.addRow(),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/exam/observation/"+this.id).then((function(a){t.observationForm.name=a.name,t.observationForm.description=a.description,a.details.forEach((function(e){t.observationForm.details.push({name:e.name,max_mark:e.max_mark,description:e.description})})),e.hide()})).catch((function(a){e.hide(),helper.showErrorMsg(a),t.$router.push("/configuration/exam/observation")}))},update:function(){var t=this,e=this.$loading.show();this.observationForm.patch("/api/exam/observation/"+this.id).then((function(a){toastr.success(a.message),e.hide(),t.$router.push("/configuration/exam/observation")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}},o=a("KHd+"),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.observationForm.errors.clear(e.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("exam.observation_name")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.observationForm.name,expression:"observationForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("exam.observation_name")},domProps:{value:t.observationForm.name},on:{input:function(e){e.target.composing||t.$set(t.observationForm,"name",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.observationForm,"prop-name":"name"}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("exam.observation_description")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.observationForm.description,expression:"observationForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("exam.observation_description")},domProps:{value:t.observationForm.description},on:{input:function(e){e.target.composing||t.$set(t.observationForm,"description",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.observationForm,"prop-name":"description"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h6",{staticClass:"card-title"},[t._v(t._s(t.trans("exam.observation_sub_parameter")))]),t._v(" "),t._l(t.observationForm.details,(function(e,s){return[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("exam.observation_detail_name"))+" \n                                "),a("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDeleteDetail(s)},expression:"{ok: confirmDeleteDetail(index)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.delete"),expression:"trans('general.delete')"}],key:s+"_delete_detail",staticClass:"btn btn-xs btn-danger m-l-20",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-times"})])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"detail.name"}],staticClass:"form-control",attrs:{type:"text",name:t.getDetailName(s),placeholder:t.trans("exam.observation_detail_name")},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.observationForm,"prop-name":t.getDetailName(s)}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("exam.observation_detail_max_mark")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.max_mark,expression:"detail.max_mark"}],staticClass:"form-control",attrs:{type:"number",name:t.getDetailMaxMarkName(s),placeholder:t.trans("exam.observation_detail_max_mark")},domProps:{value:e.max_mark},on:{input:function(a){a.target.composing||t.$set(e,"max_mark",a.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.observationForm,"prop-name":t.getDetailMaxMarkName(s)}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("exam.observation_detail_description")))]),t._v(" "),a("autosize-textarea",{attrs:{rows:"2",name:t.getDetailDescriptionName(s),placeholder:t.trans("resource.observation_detail_description")},model:{value:e.description,callback:function(a){t.$set(e,"description",a)},expression:"detail.description"}}),t._v(" "),a("show-error",{attrs:{"form-name":t.observationForm,"prop-name":t.getDetailDescriptionName(s)}})],1)])])]})),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light",attrs:{type:"button"},on:{click:t.addRow}},[t._v(t._s(t.trans("exam.add_new_observation_detail")))])])],2)]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("router-link",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/exam/observation"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?a("span",[t._v(t._s(t.trans("general.update")))]):a("span",[t._v(t._s(t.trans("general.save")))])])],1)])])}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=edit.js.map?id=8eb0c3654f22118e204f