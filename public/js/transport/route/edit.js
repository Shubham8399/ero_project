(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{CO3Z:function(t,s,r){(t.exports=r("I1BE")(!1)).push([t.i,"\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n",""])},"D+Gm":function(t,s,r){var e=r("CO3Z");"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(e,o);e.locals&&(t.exports=e.locals)},jEK4:function(t,s,r){"use strict";var e=r("D+Gm");r.n(e).a},qItA:function(t,s,r){"use strict";r.r(s);var e={components:{transportRouteForm:r("yQfA").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("edit-transport-route")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},o=r("KHd+"),a=Object(o.a)(e,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("transport.edit_route")))])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"action-buttons pull-right"},[r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(s){return t.$router.push("/transport/route")}}},[r("i",{staticClass:"fas fa-list"}),t._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("transport.edit_route")))])])])])])]),t._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body p-t-20"},[r("transport-route-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null);s.default=a.exports},yQfA:function(t,s,r){"use strict";var e={components:{},data:function(){return{transportRouteForm:new Form({name:"",description:"",transport_stoppages:[]}),transport_stoppages:[],selected_transport_stoppages:null,showTransportStoppageModal:!1}},props:["id"],mounted:function(){helper.hasPermission("create-transport-route")||helper.hasPermission("edit-transport-route")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{hasPermission:function(t){return helper.hasPermission(t)},proceed:function(){this.id?this.update():this.store()},getPreRequisite:function(){var t=this,s=this.$loading.show();this.showTransportStoppageModal=!1,axios.get("/api/transport/route/pre-requisite").then((function(r){t.transport_stoppages=r,t.id&&t.get(),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},store:function(){var t=this,s=this.$loading.show();this.transportRouteForm.post("/api/transport/route").then((function(r){toastr.success(r.message),t.transportRouteForm.transport_stoppages=[],t.selected_transport_stoppages=null,t.$emit("completed"),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,s=this.$loading.show();axios.get("/api/transport/route/"+this.id).then((function(r){t.transportRouteForm.name=r.transport_route.name,t.transportRouteForm.description=r.transport_route.description,t.selected_transport_stoppages=r.selected_transport_stoppages,r.selected_transport_stoppages.forEach((function(s){t.transportRouteForm.transport_stoppages.push(s.id)})),s.hide()})).catch((function(r){s.hide(),helper.showErrorMsg(r),t.$router.push("/transport/route")}))},update:function(){var t=this,s=this.$loading.show();this.transportRouteForm.patch("/api/transport/route/"+this.id).then((function(r){toastr.success(r.message),s.hide(),t.$router.push("/transport/route")})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)},onTransportStoppageSelect:function(t){this.transportRouteForm.transport_stoppages.push(t.id)},onTransportStoppageRemove:function(t){this.transportRouteForm.transport_stoppages.splice(this.transportRouteForm.transport_stoppages.indexOf(t.id),1)}}},o=(r("jEK4"),r("KHd+")),a=Object(o.a)(e,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("form",{on:{submit:function(s){return s.preventDefault(),t.proceed(s)},keydown:function(s){return t.transportRouteForm.errors.clear(s.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.route_name")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.transportRouteForm.name,expression:"transportRouteForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("transport.route_name")},domProps:{value:t.transportRouteForm.name},on:{input:function(s){s.target.composing||t.$set(t.transportRouteForm,"name",s.target.value)}}}),t._v(" "),r("show-error",{attrs:{"form-name":t.transportRouteForm,"prop-name":"name"}})],1)]),t._v(" "),r("div",{staticClass:"col-12 col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.route_description")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.transportRouteForm.description,expression:"transportRouteForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("transport.route_description")},domProps:{value:t.transportRouteForm.description},on:{input:function(s){s.target.composing||t.$set(t.transportRouteForm,"description",s.target.value)}}}),t._v(" "),r("show-error",{attrs:{"form-name":t.transportRouteForm,"prop-name":"description"}})],1)])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.stoppage"))+" ")]),t._v(" "),r("v-select",{attrs:{label:"name","track-by":"id",name:"transport_stoppages",id:"transport_stoppages",options:t.transport_stoppages,placeholder:t.trans("transport.select_stoppage"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_transport_stoppages},on:{select:t.onTransportStoppageSelect,remove:t.onTransportStoppageRemove},model:{value:t.selected_transport_stoppages,callback:function(s){t.selected_transport_stoppages=s},expression:"selected_transport_stoppages"}},[t.transport_stoppages.length?t._e():r("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),r("show-error",{attrs:{"form-name":t.transportRouteForm,"prop-name":"transport_stoppages"}})],1)])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"}),t._v(" "),r("div",{staticClass:"col-12 col-sm-6 text-right"},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/transport/route"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():r("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(s){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?r("span",[t._v(t._s(t.trans("general.update")))]):r("span",[t._v(t._s(t.trans("general.save")))])])],1)])])])])}),[],!1,null,null,null);s.a=a.exports}}]);
//# sourceMappingURL=edit.js.map?id=5ab499122030a1911653