(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{gSph:function(e,s,t){"use strict";t.r(s);var a={components:{academicSessionForm:t("gX1l").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("edit-academic-session")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},i=t("KHd+"),r=Object(i.a)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("academic.edit_session"))+"\n                    "),t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(s){return e.$router.push("/academic/session")}}},[t("i",{staticClass:"fas fa-list"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("academic.session")))])])])])])]),e._v(" "),t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body p-t-20"},[t("academic-session-form",{attrs:{id:e.id}})],1)])])])}),[],!1,null,null,null);s.default=r.exports},gX1l:function(e,s,t){"use strict";var a={props:{setupWizard:{default:!1},id:""},components:{},data:function(){return{academicSessionForm:new Form({name:"",description:"",start_date:"",end_date:"",transfer_certificate_format:"",is_default:0}),transfer_certificate_formats:[],selected_transfer_certificate_format:null}},mounted:function(){helper.hasPermission("create-academic-session")||helper.hasPermission("edit-academic-session")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{proceed:function(){this.id?this.update():this.store()},getPreRequisite:function(){var e=this,s=this.$loading.show();axios.get("/api/academic/session/pre-requisite").then((function(t){e.transfer_certificate_formats=t.transfer_certificate_formats,e.id&&e.get(),s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},store:function(){var e=this,s=this.$loading.show();this.academicSessionForm.post("/api/academic/session").then((function(t){e.$store.dispatch("setAcademicSession",t.academic_sessions),toastr.success(t.message),e.$emit("completed"),s.hide(),e.setupWizard&&e.$router.push("/dashboard")})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,s=this.$loading.show();axios.get("/api/academic/session/"+this.id).then((function(t){e.academicSessionForm.name=t.name,e.academicSessionForm.description=t.description,e.academicSessionForm.start_date=t.start_date,e.academicSessionForm.end_date=t.end_date,e.academicSessionForm.is_default=t.is_default;var a=t.options&&t.options.hasOwnProperty("transfer_certificate_format")?t.options.transfer_certificate_format:null,i=e.transfer_certificate_formats.find((function(e){return e.id==a}));e.academicSessionForm.transfer_certificate_format=a,e.selected_transfer_certificate_format=i||null,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t),e.$router.push("/academic/session")}))},update:function(){var e=this,s=this.$loading.show();this.academicSessionForm.patch("/api/academic/session/"+this.id).then((function(t){e.$store.dispatch("setConfig",{loaded:!1}),toastr.success(t.message),s.hide(),e.$router.push("/academic/session")})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},onTransferCertificateFormatSelect:function(e){return this.academicSessionForm.transfer_certificate_format=e.id}}},i=t("KHd+"),r=Object(i.a)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("form",{on:{submit:function(s){return s.preventDefault(),e.proceed(s)},keydown:function(s){return e.academicSessionForm.errors.clear(s.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.session_name")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.academicSessionForm.name,expression:"academicSessionForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("academic.session_name")},domProps:{value:e.academicSessionForm.name},on:{input:function(s){s.target.composing||e.$set(e.academicSessionForm,"name",s.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"name"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.session_start_date")))]),e._v(" "),t("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("academic.session_start_date"),disabled:!!e.id},on:{selected:function(s){return e.academicSessionForm.errors.clear("start_date")}},model:{value:e.academicSessionForm.start_date,callback:function(s){e.$set(e.academicSessionForm,"start_date",s)},expression:"academicSessionForm.start_date"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"start_date"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.session_end_date")))]),e._v(" "),t("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("academic.session_end_date"),disabled:!!e.id},on:{selected:function(s){return e.academicSessionForm.errors.clear("end_date")}},model:{value:e.academicSessionForm.end_date,callback:function(s){e.$set(e.academicSessionForm,"end_date",s)},expression:"academicSessionForm.end_date"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"end_date"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.session_description")))]),e._v(" "),t("autosize-textarea",{attrs:{rows:"1",name:"description",placeholder:e.trans("academic.session_description")},model:{value:e.academicSessionForm.description,callback:function(s){e.$set(e.academicSessionForm,"description",s)},expression:"academicSessionForm.description"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"description"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.transfer_certificate_format")))]),e._v(" "),t("v-select",{attrs:{label:"name",name:"transfer_certificate_format",id:"transfer_certificate_format",options:e.transfer_certificate_formats,placeholder:e.trans("academic.select_transfer_certificate_format")},on:{select:e.onTransferCertificateFormatSelect,close:function(s){return e.academicSessionForm.errors.clear("transfer_certificate_format")},remove:function(s){e.academicSessionForm.transfer_certificate_format=""}},model:{value:e.selected_transfer_certificate_format,callback:function(s){e.selected_transfer_certificate_format=s},expression:"selected_transfer_certificate_format"}},[e.transfer_certificate_formats.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),t("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"transfer_certificate_format"}})],1)])]),e._v(" "),e.setupWizard?e._e():[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"form-group"},[t("switches",{staticClass:"m-l-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.academicSessionForm.is_default,callback:function(s){e.$set(e.academicSessionForm,"is_default",s)},expression:"academicSessionForm.is_default"}}),e._v(" "+e._s(e.trans("academic.session_is_default"))+"\n                ")],1)])]),e._v(" "),t("div",{staticClass:"card-footer text-right"},[t("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/academic/session"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():t("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(s){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?t("span",[e._v(e._s(e.trans("general.update")))]):t("span",[e._v(e._s(e.trans("general.save")))])])],1)]],2)}),[],!1,null,null,null);s.a=r.exports}}]);
//# sourceMappingURL=edit.js.map?id=86bfa06a243d43bc89bd