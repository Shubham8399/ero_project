(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{"5+DK":function(t,e,a){var r=a("D395");"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,i);r.locals&&(t.exports=r.locals)},"5R7Q":function(t,e,a){"use strict";var r=a("5+DK");a.n(r).a},D395:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".card.article-card[data-v-65e907cc] {\n  opacity: 0.9;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.card.article-card header[data-v-65e907cc] {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px dotted #f1f2f3;\n}\n.card.article-card header .h5[data-v-65e907cc] {\n  margin-bottom: 0.75rem;\n  display: block;\n}\n.card.article-card header .article-meta small + small[data-v-65e907cc] {\n  margin-left: 0.5rem;\n}\n.card.article-card .article-content[data-v-65e907cc] {\n  font-size: 95%;\n  margin-bottom: 1rem;\n}\n.card.article-card footer[data-v-65e907cc] {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px dotted #f1f2f3;\n}\n.card.article-card footer .article-author .author-thumb[data-v-65e907cc] {\n  float: left;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #f1f2f3;\n  margin-right: 10px;\n  text-align: center;\n}\n.card.article-card footer .article-author .author-thumb i[data-v-65e907cc] {\n  padding-top: 15px;\n}\n.card.article-card footer .article-author .author-thumb img[data-v-65e907cc] {\n  width: 100%;\n}\n.card.article-card footer .article-author p[data-v-65e907cc] {\n  margin-bottom: 0;\n}\n.card.article-card footer .article-author p span[data-v-65e907cc] {\n  display: block;\n}\n.card.article-card footer .article-author p span.author[data-v-65e907cc] {\n  font-weight: 500;\n}\n.card.article-card footer .cta[data-v-65e907cc] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  height: 50px;\n}",""])},nKhY:function(t,e,a){"use strict";a.r(e);var r={components:{ArticleCard:a("vhbx").a},data:function(){return{page:{},articles:{total:0,data:[]},filter:{sort_by:"date_of_article",order:"desc",keyword:"",article_type_id:[],date_of_article_start_date:"",date_of_article_end_date:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"date_of_article",translation:i18n.post.date_of_article},{value:"title",translation:i18n.post.article_title}],article_types:[],selected_article_types:null}},mounted:function(){this.getData(),this.getArticles(),helper.showDemoNotification(["frontend_article"])},methods:{getData:function(){var t=this,e=this.$loading.show();axios.get("/api/frontend/page/articles/content").then((function(a){t.page=a.page,e.hide()})).catch((function(a){e.hide(),helper.showErrorMsg(a),422==a.response.status&&t.$router.push("/")}))},getArticles:function(t){var e=this,a=this.$loading.show();"number"!=typeof t&&(t=1);var r=helper.getFilterURL(this.filter);axios.get("/api/frontend/article/list?page="+t+r).then((function(t){e.articles=t.articles,e.article_types=t.article_types,a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getArticles()},"filter.order":function(t){this.getArticles()},"filter.page_length":function(t){this.getArticles()}}},i=a("KHd+"),n=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-title"},[a("div",{staticClass:"fix-width fix-width-mobile"},[a("h2",[t._v(t._s(t.page.title))])])]),t._v(" "),t.page.body?a("div",{staticClass:"fix-width fix-width-mobile p-t-80"},[a("div",{staticClass:"page-body",domProps:{innerHTML:t._s(t.page.body)}})]):t._e(),t._v(" "),a("div",{staticClass:"fix-width fix-width-mobile p-y-80"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[t.articles.total?a("div",{staticClass:"article-feed card-columns"},t._l(t.articles.data,(function(t){return a("router-link",{key:t.uuid,staticClass:"article-item",attrs:{to:"/articles/"+t.uuid}},[a("article-card",{attrs:{article:t}})],1)})),1):t._e(),t._v(" "),a("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.articles},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getArticles}})],1)])])])}),[],!1,null,null,null);e.default=n.exports},vhbx:function(t,e,a){"use strict";var r={props:{article:{type:Object,default:function(){return{}}},bodyClass:String},components:{},data:function(){return{}},methods:{getEmployeePhoto:function(t){return"/"+t.photo},getEmployeeName:function(t){return helper.getEmployeeName(t)},getEmployeeDesignationOnly:function(t){return helper.getEmployeeDesignationOnly(t)},getExcerpts:function(t){return helper.getExcerpts(t)},truncateWords:function(t,e,a){return helper.truncateWords(t,e,a)}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)},moment:function(t){return helper.formatDate(t)},momentTime:function(t){return helper.formatTime(t)}}},i=(a("5R7Q"),a("KHd+")),n=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"card card-box with-shadow article-card"},[a("div",{staticClass:"card-body"},[a("header",[a("h5",{staticClass:"h5 card-title"},[t._v(t._s(t.article.title))]),t._v(" "),a("div",{staticClass:"article-meta"},[a("small",{staticClass:"type text-muted"},[a("i",{staticClass:"fas fa-hashtag"}),t._v(" "+t._s(t.article.article_type.name))]),t._v(" "),a("small",{staticClass:"date text-muted"},[a("i",{staticClass:"far fa-clock"}),t._v(" "+t._s(t._f("moment")(t.article.date_of_article)))])])]),t._v(" "),a("div",{staticClass:"article-content"},[a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}})]),t._v(" "),a("footer",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8"},[a("div",{staticClass:"article-author"},[a("span",{staticClass:"author-thumb pull-left"},[t.article.user.employee.photo?[a("img",{staticClass:"img-circle",attrs:{src:t.getEmployeePhoto(t.article.user.employee)}})]:[a("i",{staticClass:"fas fa-user"})]],2),t._v(" "),a("p",[a("span",{staticClass:"author"},[t._v(t._s(t.getEmployeeName(t.article.user.employee)))]),t._v(" "),a("span",{staticClass:"designation small text-muted"},[t._v(t._s(t.getEmployeeDesignationOnly(t.article.user.employee)))])])])]),t._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"cta text-right"},[a("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[t._v(t._s(t.trans("general.read_more")))])])])])])])])}),[],!1,null,"65e907cc",null);e.a=n.exports}}]);
//# sourceMappingURL=index.js.map?id=3ab2bb1171f078623325