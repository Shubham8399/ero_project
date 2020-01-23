(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{jg8A:function(r,t,e){"use strict";e.r(t);var a={components:{},data:function(){return{barcodeForm:new Form({type:"",start:"",end:"",csv:"",height:"",width:"",per_page_limit:""},!1)}},mounted:function(){},methods:{submit:function(){var r=this.$loading.show();this.barcodeForm.post("/api/library/barcode").then((function(t){var e=window.open("/print");r.hide(),e.document.write(t)})).catch((function(t){r.hide(),helper.showErrorMsg(t)}))}},watch:{},filters:{moment:function(r){return helper.formatDate(r)},momentDateTime:function(r){return helper.formatDateTime(r)}}},o=e("KHd+"),s=Object(o.a)(a,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[r._v(r._s(r.trans("library.generate_barcode")))])]),r._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return r.$router.push("/library/issue/list")}}},[e("i",{staticClass:"fas fa-book"}),r._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[r._v(r._s(r.trans("library.issue_list")))])]),r._v(" "),e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return r.$router.push("/library/book")}}},[e("i",{staticClass:"fas fa-list"}),r._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[r._v(r._s(r.trans("library.book")))])]),r._v(" "),e("help-button",{on:{clicked:function(t){r.help_topic="book-issue"}}})],1)])])]),r._v(" "),e("div",{staticClass:"container-fluid"},[e("form",{on:{submit:function(t){return t.preventDefault(),r.submit(t)},keydown:function(t){return r.barcodeForm.errors.clear(t.target.name)}}},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"radio radio-success"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.barcodeForm.type,expression:"barcodeForm.type"}],attrs:{type:"radio",value:"range",id:"range",name:"type"},domProps:{checked:r.barcodeForm.type,checked:r._q(r.barcodeForm.type,"range")},on:{click:function(t){return r.barcodeForm.errors.clear("type")},change:function(t){return r.$set(r.barcodeForm,"type","range")}}}),r._v(" "),e("label",{attrs:{for:"range"}},[r._v(r._s(r.trans("library.barcode_range")))])]),r._v(" "),e("div",{staticClass:"radio radio-success"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.barcodeForm.type,expression:"barcodeForm.type"}],attrs:{type:"radio",value:"csv",id:"csv",name:"type"},domProps:{checked:!r.barcodeForm.type,checked:r._q(r.barcodeForm.type,"csv")},on:{click:function(t){return r.barcodeForm.errors.clear("type")},change:function(t){return r.$set(r.barcodeForm,"type","csv")}}}),r._v(" "),e("label",{attrs:{for:"csv"}},[r._v(r._s(r.trans("library.barcode_csv")))])]),r._v(" "),e("show-error",{attrs:{"form-name":r.barcodeForm,"prop-name":"type"}})],1),r._v(" "),"range"==r.barcodeForm.type?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[r._v(r._s(r.trans("library.range_start")))]),r._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:r.barcodeForm.start,expression:"barcodeForm.start"}],staticClass:"form-control",attrs:{type:"number",name:"start",placeholder:r.trans("library.barcode_range_start")},domProps:{value:r.barcodeForm.start},on:{input:function(t){t.target.composing||r.$set(r.barcodeForm,"start",t.target.value)}}}),r._v(" "),e("show-error",{attrs:{"form-name":r.barcodeForm,"prop-name":"start"}})],1)]),r._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[r._v(r._s(r.trans("library.range_end")))]),r._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:r.barcodeForm.end,expression:"barcodeForm.end"}],staticClass:"form-control",attrs:{type:"number",name:"end",placeholder:r.trans("library.barcode_range_end")},domProps:{value:r.barcodeForm.end},on:{input:function(t){t.target.composing||r.$set(r.barcodeForm,"end",t.target.value)}}}),r._v(" "),e("show-error",{attrs:{"form-name":r.barcodeForm,"prop-name":"end"}})],1)])]):r._e(),r._v(" "),"csv"==r.barcodeForm.type?e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[r._v(r._s(r.trans("library.barcode_csv")))]),r._v(" "),e("autosize-textarea",{attrs:{rows:"3",name:"csv",placeholder:r.trans("library.barcode_csv")},model:{value:r.barcodeForm.csv,callback:function(t){r.$set(r.barcodeForm,"csv",t)},expression:"barcodeForm.csv"}}),r._v(" "),e("show-error",{attrs:{"form-name":r.barcodeForm,"prop-name":"csv"}})],1):r._e(),r._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[r._v(r._s(r.trans("library.barcode_width")))]),r._v(" "),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.barcodeForm.width,expression:"barcodeForm.width"}],staticClass:"form-control",attrs:{type:"number",step:".02",name:"width",placeholder:r.trans("library.barcode_width")},domProps:{value:r.barcodeForm.width},on:{input:function(t){t.target.composing||r.$set(r.barcodeForm,"width",t.target.value)}}}),r._v(" "),r._m(0)]),r._v(" "),e("show-error",{attrs:{"form-name":r.barcodeForm,"prop-name":"width"}})],1)]),r._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[r._v(r._s(r.trans("library.barcode_height")))]),r._v(" "),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.barcodeForm.height,expression:"barcodeForm.height"}],staticClass:"form-control",attrs:{type:"number",step:".02",name:"height",placeholder:r.trans("library.barcode_height")},domProps:{value:r.barcodeForm.height},on:{input:function(t){t.target.composing||r.$set(r.barcodeForm,"height",t.target.value)}}}),r._v(" "),r._m(1)]),r._v(" "),e("show-error",{attrs:{"form-name":r.barcodeForm,"prop-name":"height"}})],1)]),r._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[r._v(r._s(r.trans("library.barcode_per_page_limit")))]),r._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:r.barcodeForm.per_page_limit,expression:"barcodeForm.per_page_limit"}],staticClass:"form-control",attrs:{type:"number",name:"per_page_limit",placeholder:r.trans("library.barcode_per_page_limit")},domProps:{value:r.barcodeForm.per_page_limit},on:{input:function(t){t.target.composing||r.$set(r.barcodeForm,"per_page_limit",t.target.value)}}}),r._v(" "),e("show-error",{attrs:{"form-name":r.barcodeForm,"prop-name":"per_page_limit"}})],1)])])])])]),r._v(" "),e("div",{staticClass:"card-footer text-right"},[e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e("span",[r._v(r._s(r.trans("library.generate_barcode")))])])])])])])])}),[function(){var r=this.$createElement,t=this._self._c||r;return t("div",{staticClass:"input-group-append"},[t("span",{staticClass:"input-group-text"},[this._v("mm")])])},function(){var r=this.$createElement,t=this._self._c||r;return t("div",{staticClass:"input-group-append"},[t("span",{staticClass:"input-group-text"},[this._v("mm")])])}],!1,null,null,null);t.default=s.exports}}]);
//# sourceMappingURL=index.js.map?id=5646acfc13a3dfec3388