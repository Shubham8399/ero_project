(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{PvHx:function(e,t,n){"use strict";n.r(t);var a={props:{event:{type:Object,default:function(){return{}}}},methods:{getEmployeePhoto:function(e){return"/"+e.photo},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeDesignation:function(e,t){return helper.getEmployeeDesignation(e,t)}},filters:{moment:function(e){return helper.formatDate(e)},momentTime:function(e){return helper.formatTime(e)},momentCustomGetDOM:function(e){return moment(e).format("Do")},momentCustomGetMOY:function(e){return moment(e).format("MMM")}}},s=(n("xkFe"),n("KHd+")),i={components:{EventCard:Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card card-box with-shadow event-card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"event-info"},[n("div",{staticClass:"event-schedule pull-left"},[n("span",{staticClass:"day"},[e._v(e._s(e._f("momentCustomGetDOM")(e.event.start_date)))]),e._v(" "),n("span",{staticClass:"month"},[e._v(e._s(e._f("momentCustomGetMOY")(e.event.start_date)))])]),e._v(" "),n("p",[n("span",{staticClass:"event-title"},[e._v(e._s(e.event.title))]),e._v(" "),n("span",{staticClass:"meta-data text-muted"},[n("small",{staticClass:"type"},[e._v(e._s(e.event.event_type.name))]),e._v(" "),n("small",{staticClass:"location"},[n("i",{staticClass:"fas fa-map-marker-alt"}),e._v(" "+e._s(e.event.venue))]),e._v(" "),n("small",{staticClass:"date"},[n("i",{staticClass:"far fa-clock"}),e._v(" "+e._s(e._f("moment")(e.event.start_date))+" "),e.event.start_time?[e._v(e._s(e._f("momentTime")(e.event.start_time)))]:e._e(),e._v(" "+e._s(e.trans("general.to"))+" "+e._s(e._f("moment")(e.event.end_date))+" "),e.event.end_time?[e._v(e._s(e._f("momentTime")(e.event.end_time)))]:e._e()],2)])])])])])}),[],!1,null,"44947d01",null).exports,EventDetail:n("zk3C").a},data:function(){return{page:{},events:{total:0,data:[]},filter:{sort_by:"date_of_event",order:"desc",page_length:helper.getConfig("page_length")},showEventModal:!1}},mounted:function(){this.getData(),this.getEvents()},methods:{getData:function(){var e=this,t=this.$loading.show();axios.get("/api/frontend/page/events/content").then((function(n){e.page=n.page,t.hide()})).catch((function(n){t.hide(),helper.showErrorMsg(n),422==n.response.status&&e.$router.push("/")}))},getEvents:function(e){var t=this,n=this.$loading.show();"number"!=typeof e&&(e=1);var a=helper.getFilterURL(this.filter);axios.get("/api/frontend/event/list?page="+e+a).then((function(e){t.events=e.events,n.hide()})).catch((function(e){n.hide(),helper.showErrorMsg(e)}))},getConfig:function(e){return helper.getConfig(e)},showEvent:function(e){this.showEventUuid=e.uuid,this.showEventModal=!0}},watch:{"filter.sort_by":function(e){this.getEvents()},"filter.order":function(e){this.getEvents()},"filter.page_length":function(e){this.getEvents()}}},o=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"page-title"},[n("div",{staticClass:"fix-width fix-width-mobile"},[n("h2",[e._v(e._s(e.page.title))])])]),e._v(" "),e.page.body?n("div",{staticClass:"fix-width fix-width-mobile p-t-80"},[n("div",{staticClass:"page-body",domProps:{innerHTML:e._s(e.page.body)}})]):e._e(),e._v(" "),n("div",{staticClass:"fix-width fix-width-mobile p-y-80"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[e.events.total?n("div",{staticClass:"event-feed"},e._l(e.events.data,(function(t){return n("div",{on:{click:function(n){return e.showEvent(t)}}},[n("event-card",{staticClass:"event-item",attrs:{event:t}})],1)})),0):e._e(),e._v(" "),n("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.events},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getEvents}})],1)])]),e._v(" "),e.showEventModal?n("event-detail",{attrs:{uuid:e.showEventUuid,url:"/frontend/event/"+e.showEventUuid+"/detail"},on:{close:function(t){e.showEventModal=!1}}}):e._e()],1)}),[],!1,null,null,null);t.default=o.exports},cMqv:function(e,t,n){var a=n("wNtE");"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,s);a.locals&&(e.exports=a.locals)},wNtE:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".card.event-card[data-v-44947d01] {\n  opacity: 0.9;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  padding: 0;\n}\n.card.event-card .event-info .event-schedule[data-v-44947d01] {\n  float: left;\n  width: 100px;\n  height: 100px;\n  background: #e1e2e3;\n  margin-right: 20px;\n  text-align: center;\n  padding-top: 10px;\n}\n.card.event-card .event-info .event-schedule .day[data-v-44947d01] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 500;\n}\n.card.event-card .event-info .event-schedule .month[data-v-44947d01] {\n  display: block;\n  font-weight: 500;\n}\n.card.event-card .event-info p[data-v-44947d01] {\n  padding-top: 15px;\n  margin-bottom: 0;\n}\n.card.event-card .event-info p span[data-v-44947d01] {\n  display: block;\n}\n.card.event-card .event-info p span.event-title[data-v-44947d01] {\n  font-size: 150%;\n  font-weight: 500;\n}\n.card.event-card .event-info p span.meta-data[data-v-44947d01] {\n  font-size: 125%;\n}\n.card.event-card .event-info p span small + small[data-v-44947d01] {\n  margin-left: 0.5rem;\n}",""])},xkFe:function(e,t,n){"use strict";var a=n("cMqv");n.n(a).a},zk3C:function(e,t,n){"use strict";var a={components:{},props:["uuid","url"],mounted:function(){this.uuid&&this.get()},data:function(){return{event:[],attachments:[]}},methods:{get:function(){var e=this,t=this.$loading.show(),n=this.url?"/api"+this.url:"/api/event/"+this.uuid;axios.get(n).then((function(n){e.event=n.event,e.attachments=n.attachments,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeDesignationOnDate:function(e,t){return helper.getEmployeeDesignationOnDate(e,t)}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{momentDateTime:function(e){return helper.formatDateTime(e)},moment:function(e){return helper.formatDate(e)},momentTime:function(e){return helper.formatTime(e)}}},s=n("KHd+"),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[e.event.id?n("div",{staticClass:"modal-container modal-lg"},[n("div",{staticClass:"modal-header"},[e._t("header",[n("span",[e._v(e._s(e.event.title))]),e._v(" "),n("span",{staticClass:"float-right pointer",on:{click:function(t){return e.$emit("close")}}},[e._v("x")])])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("body",[n("h6",{staticClass:"card-title"},[n("strong",[e._v(e._s(e.trans("calendar.event_duration"))+":")]),e._v(" "+e._s(e._f("moment")(e.event.start_date))+" "),e.event.start_time?n("span",[e._v(e._s(e._f("momentTime")(e.event.start_time)))]):e._e(),e._v(" "+e._s(e.trans("general.to"))+"  "+e._s(e._f("moment")(e.event.end_date))+" "),e.event.end_time?n("span",[e._v(e._s(e._f("momentTime")(e.event.end_time)))]):e._e(),e._v(" "),n("br"),n("br"),e._v(" "),n("strong",[e._v(e._s(e.trans("calendar.event_venue"))+":")]),e._v(" "+e._s(e.event.venue)),n("br"),n("br"),e._v(" "),n("strong",[e._v(e._s(e.trans("calendar.event_audience"))+":")]),e._v(" "),"everyone"==e.event.audience?n("span",[e._v(e._s(e.trans("calendar.event_for_everyone")))]):e._e(),e._v(" "),"selected_course"==e.event.audience?[e._v("\n                                "+e._s(e.trans("academic.course"))+" "),n("br"),e._v(" "),n("ul",{staticStyle:{"list-style":"none"}},[e._l(e.event.courses,(function(t){return[n("li",[n("i",{staticClass:"fas fa-check"}),e._v(" "+e._s(t.name+" ("+t.course_group.name+")"))])]}))],2)]:"selected_batch"==e.event.audience?[e._v("\n                                "+e._s(e.trans("academic.batch"))+" "),n("br"),e._v(" "),n("ul",{staticStyle:{"list-style":"none"}},[e._l(e.event.batches,(function(t){return[n("li",[n("i",{staticClass:"fas fa-check"}),e._v(" "+e._s(t.name+" ("+t.course.name+")"))])]}))],2)]:"selected_department"==e.event.audience?[e._v("\n                                "+e._s(e.trans("employee.department"))+" "),n("br"),e._v(" "),n("ul",{staticStyle:{"list-style":"none"}},[e._l(e.event.departments,(function(t){return[n("li",[n("i",{staticClass:"fas fa-check"}),e._v(" "+e._s(t.name))])]}))],2)]:"selected_employee_category"==e.event.audience?[e._v("\n                                "+e._s(e.trans("employee.category"))+" "),n("br"),e._v(" "),n("ul",{staticStyle:{"list-style":"none"}},[e._l(e.event.employee_categorys,(function(t){return[n("li",[n("i",{staticClass:"fas fa-check"}),e._v(" "+e._s(t.name))])]}))],2)]:e._e(),e._v(" "),e.event.user?n("p",{staticClass:"pull-right"},[n("strong",[e._v(e._s(e.trans("calendar.event_posted_by"))+":")]),e._v(" "+e._s(e.getEmployeeName(e.event.user.employee))+" "+e._s(e.getEmployeeDesignationOnDate(e.event.user.employee,e.event.start_date))+"\n                            ")]):e._e()],2),e._v(" "),n("div",{staticClass:"m-t-20",domProps:{innerHTML:e._s(e.event.description)}}),e._v(" "),e.attachments.length?n("div",[n("ul",{staticClass:"m-t-10 upload-file-list"},e._l(e.attachments,(function(t){return n("li",{staticClass:"upload-file-list-item"},[n("a",{staticClass:"no-link-color",attrs:{href:"/calendar/event/"+e.event.uuid+"/attachment/"+t.uuid+"/download?token="+e.authToken}},[n("i",{class:["file-icon","fas","fa-lg",t.file_info.icon]}),e._v(" "),n("span",{staticClass:"upload-file-list-item-size"},[e._v(e._s(t.file_info.size))]),e._v(" "+e._s(t.user_filename))])])})),0)]):e._e(),e._v(" "),n("hr"),e._v(" "),n("p",[n("i",{staticClass:"far fa-clock"}),e._v(" "),n("small",[e._v(e._s(e.trans("general.created_at"))+" "+e._s(e._f("momentDateTime")(e.event.created_at)))]),e._v(" "),n("span",{staticClass:"pull-right"},[n("i",{staticClass:"far fa-clock"}),e._v(" "),n("small",[e._v(e._s(e.trans("general.updated_at"))+" "+e._s(e._f("momentDateTime")(e.event.updated_at)))])])])])],2)]):e._e()])])])}),[],!1,null,null,null);t.a=i.exports}}]);
//# sourceMappingURL=events.js.map?id=07cb2e9986e910de51cf