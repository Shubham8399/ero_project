(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{"+Enr":function(t,e,a){var n=a("zbT5");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(t.exports=n.locals)},"3nVh":function(t,e,a){"use strict";a.r(e);var n={components:{},mounted:function(){this.get()},data:function(){return{uuid:this.$route.params.uuid,article:[],attachments:[]}},methods:{get:function(){var t=this,e=this.$loading.show(),a="/api/frontend/article/"+this.uuid+"/detail";axios.get(a).then((function(a){t.article=a.article,t.attachments=a.attachments,e.hide()})).catch((function(a){e.hide(),helper.showErrorMsg(a),422==a.response.status&&t.$router.push("/")}))},getEmployeeName:function(t){return helper.getEmployeeName(t)},getEmployeeDesignationOnly:function(t){return helper.getEmployeeDesignationOnly(t)},getEmployeePhoto:function(t){return"/"+t.photo}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)},moment:function(t){return helper.formatDate(t)}}},i=(a("qVC6"),a("KHd+")),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.article.uuid?a("div",[a("div",{staticClass:"page-title"},[a("div",{staticClass:"fix-width fix-width-mobile"},[a("h1",[t._v(t._s(t.article.title))]),t._v(" "),a("div",{staticClass:"article-meta"},[a("small",{staticClass:"type text-muted"},[a("i",{staticClass:"fas fa-hashtag"}),t._v(" "+t._s(t.article.article_type.name))]),t._v(" "),a("small",{staticClass:"date text-muted"},[a("i",{staticClass:"far fa-clock"}),t._v(" "+t._s(t._f("moment")(t.article.date_of_article)))])])])]),t._v(" "),a("div",{staticClass:"fix-width fix-width-mobile p-t-80"},[a("div",{staticClass:"page-body article-content",domProps:{innerHTML:t._s(t.article.description)}}),t._v(" "),t.attachments.length?a("div",[a("ul",{staticClass:"m-t-10 upload-file-list"},t._l(t.attachments,(function(e){return a("li",{staticClass:"upload-file-list-item"},[a("a",{staticClass:"no-link-color",attrs:{href:"/post/article/"+t.article.uuid+"/attachment/"+e.uuid+"/download?token="+t.authToken}},[a("i",{class:["file-icon","fas","fa-lg",e.file_info.icon]}),t._v(" "),a("span",{staticClass:"upload-file-list-item-size"},[t._v(t._s(e.file_info.size))]),t._v(" "+t._s(e.user_filename))])])})),0)]):t._e(),t._v(" "),a("footer",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"article-author"},[a("span",{staticClass:"author-thumb pull-left"},[t.article.user.employee.photo?[a("img",{staticClass:"img-circle",attrs:{src:t.getEmployeePhoto(t.article.user.employee)}})]:[a("i",{staticClass:"fas fa-user"})]],2),t._v(" "),a("p",[a("span",{staticClass:"author"},[t._v(t._s(t.getEmployeeName(t.article.user.employee)))]),t._v(" "),a("span",{staticClass:"designation small text-muted"},[t._v(t._s(t.getEmployeeDesignationOnly(t.article.user.employee)))])])])])])])])]):t._e()}),[],!1,null,"dacedcc6",null);e.default=o.exports},qVC6:function(t,e,a){"use strict";var n=a("+Enr");a.n(n).a},zbT5:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".page-title[data-v-dacedcc6] {\n  margin-bottom: 0.75rem;\n}\n.page-title h1[data-v-dacedcc6] {\n  margin-bottom: 0.75rem;\n  display: block;\n  color: #ffffff;\n}\n.page-title .article-meta[data-v-dacedcc6] {\n  font-size: 130%;\n}\n.page-title .article-meta small + small[data-v-dacedcc6] {\n  margin-left: 0.5rem;\n}\n.article-content[data-v-dacedcc6] {\n  margin-bottom: 1rem;\n  font-size: 110%;\n}\n.article-content p[data-v-dacedcc6] {\n  text-align: justify;\n}\n.article-content p + p[data-v-dacedcc6] {\n  margin-top: 1rem;\n}\nfooter[data-v-dacedcc6] {\n  margin-top: 2.5rem;\n  padding-top: 2.5rem;\n  border-top: 1px dotted #e1e2e3;\n}\nfooter .article-author .author-thumb[data-v-dacedcc6] {\n  float: left;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #e1e2e3;\n  margin-right: 20px;\n  text-align: center;\n}\nfooter .article-author .author-thumb i[data-v-dacedcc6] {\n  padding-top: 25px;\n  font-size: 50px;\n}\nfooter .article-author .author-thumb img[data-v-dacedcc6] {\n  width: 100%;\n}\nfooter .article-author p[data-v-dacedcc6] {\n  padding-top: 20px;\n  margin-bottom: 0;\n}\nfooter .article-author p span[data-v-dacedcc6] {\n  display: block;\n}\nfooter .article-author p span.author[data-v-dacedcc6] {\n  font-size: 140%;\n  font-weight: 500;\n}\nfooter .article-author p span.designation[data-v-dacedcc6] {\n  font-size: 100%;\n}",""])}}]);
//# sourceMappingURL=show.js.map?id=d19d26fff316837ab2e6