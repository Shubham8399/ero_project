(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{"jgb+":function(t,e,n){"use strict";n.r(e);var s={mounted:function(){helper.getConfig("maintenance_mode")&&helper.isAuth()&&!helper.hasRole("admin")||this.$router.push("/dashboard")},methods:{getConfig:function(t){return helper.getConfig(t)},logout:function(){var t=this;helper.logout().then((function(){t.$router.push("/login")}))}}},a=n("KHd+"),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"error-page",attrs:{id:"wrapper"}},[n("div",{staticClass:"error-box"},[n("div",{staticClass:"error-body text-center"},[n("h2",[t._v("Maintenance Mode")]),t._v(" "),n("p",{staticClass:"text-muted m-t-30 m-b-30"},[t._v(t._s(t.getConfig("maintenance_mode_message")))]),t._v(" "),n("router-link",{staticClass:"btn btn-info btn-rounded waves-effect waves-light m-b-40",attrs:{to:"/"}},[n("i",{staticClass:"fas fa-undo"}),t._v(" "+t._s(t.trans("general.back")))]),t._v(" "),n("a",{staticClass:"btn btn-danger btn-rounded waves-effect waves-light m-b-40",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[n("i",{staticClass:"fas fa-power-off"}),t._v(" "+t._s(t.trans("auth.logout")))])],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);
//# sourceMappingURL=maintenance.js.map?id=cb28bf8d8f9ec06b7cec