(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-iron-iron"],{"0827":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".my-header[data-v-14d119ee]{background:#000131}.header[data-v-14d119ee]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:0;\r\n\t\r\n\t-webkit-box-shadow:%?0?% %?0?% %?0?%;box-shadow:%?0?% %?0?% %?0?%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;color:#fff;font-size:%?54?%;background:#000131;z-index:9999}.header.fixed[data-v-14d119ee]{position:fixed;width:100%;top:0;z-index:1024;-webkit-box-shadow:0 %?1?% %?6?% rgba(0,0,0,.1);box-shadow:0 %?1?% %?6?% rgba(0,0,0,.1)}.header .header-title[data-v-14d119ee]{display:inline-block;font-size:%?28?%}.header .tab[data-v-14d119ee]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding-left:%?20?%;text-align:left;background:rgba(0,0,0,0)}.header .tab .avatar[data-v-14d119ee]{margin-right:%?20?%;width:%?50?%;height:%?50?%;border-radius:50%}.scroll-view_x[data-v-14d119ee]{\r\n\t\r\n\twidth:%?400?%;\r\n\tmargin-left:%?20?%;font-size:%?24?%;white-space:nowrap}.scroll-view-item_x[data-v-14d119ee]{display:inline-block;padding:0 %?20?%;margin-right:%?20?%;text-align:center;border:%?1?% solid #fff;border-radius:2rem}.tab-item[data-v-14d119ee]{display:inline-block;font-size:%?28?%}.bg-gradual-red[data-v-14d119ee]{background-image:-o-linear-gradient(45deg,#f43f3b,#ec008c);background-image:linear-gradient(45deg,#f43f3b,#ec008c);color:#fff}.bg-gradual-orange[data-v-14d119ee]{background-image:-o-linear-gradient(45deg,#ff9700,#ed1c24);background-image:linear-gradient(45deg,#ff9700,#ed1c24);color:#fff}.bg-gradual-green[data-v-14d119ee]{background-image:-o-linear-gradient(45deg,#39b54a,#8dc63f);background-image:linear-gradient(45deg,#39b54a,#8dc63f);color:#fff}.bg-gradual-purple[data-v-14d119ee]{background-image:-o-linear-gradient(45deg,#9000ff,#5e00ff);background-image:linear-gradient(45deg,#9000ff,#5e00ff);color:#fff}.bg-gradual-pink[data-v-14d119ee]{background-image:-o-linear-gradient(45deg,#ec008c,#6739b6);background-image:linear-gradient(45deg,#ec008c,#6739b6);color:#fff}.bg-gradual-blue[data-v-14d119ee]{background-image:-o-linear-gradient(45deg,#0081ff,#1cbbb4);background-image:linear-gradient(45deg,#0081ff,#1cbbb4);color:#fff}",""])},1698:function(t,e,a){"use strict";a.r(e);var i=a("b5cc"),n=a("ef28");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("c379");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"61d51822",null);e["default"]=s.exports},"16b3":function(t,e,a){"use strict";var i=a("7c68"),n=a.n(i);n.a},"18b7":function(t,e,a){"use strict";a.r(e);var i=a("223f"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"1be6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"goBack",data:function(){return{}}};e.default=i},"209f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"my-header bg-gradual-blue",style:{height:t.CustomBar+"px"}},[a("v-uni-view",{staticClass:"header fixed bg-gradual-blue",style:{paddingTop:t.StatusBar+"px",height:t.CustomBar+"px"}},[a("v-uni-view",{staticClass:"tab"},[t.goBack?a("go-back"):t._e(),a("v-uni-image",{staticClass:"avatar",attrs:{src:t.avatar}}),a("v-uni-view",{staticClass:"header-title"},[t._v(t._s(t.title))]),t.scroll?a("v-uni-scroll-view",{staticClass:"scroll-view_x",attrs:{"scroll-x":"true","scroll-left":"120"}},t._l(t.listData,function(e,i){return a("v-uni-view",{key:i,staticClass:"scroll-view-item_x",on:{click:function(a){a=t.$handleEvent(a),t.checkoutIron(e)}}},[t._v(t._s(e.name))])}),1):t._e()],1),t._t("default"),t.showGif?a("v-uni-image",{staticClass:"wave-gif",attrs:{src:"https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/wave.gif",mode:""}}):t._e()],2)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"223f":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("cebc")),o=i(a("2d66")),r=a("2f62"),s=a("de58"),c={components:{GoBack:o.default},props:{title:{type:String,default:""},showGif:{type:Boolean,default:!1},goBack:{type:Boolean,default:!1},scroll:{type:Boolean,default:!1}},data:function(){return{listData:[],highlight:!1,StatusBar:this.StatusBar,CustomBar:this.CustomBar}},computed:(0,n.default)({},(0,r.mapState)({avatar:function(t){return"avatarUrl"in t.infos?t.infos.avatarUrl:"https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/banner2.png"}})),mounted:function(){this.scroll&&this.getIronList()},methods:{getIronList:function(){var t=this;(0,s.getHotIron)().then(function(e){t.listData=e.data,t.listData.length=6})},checkoutIron:function(t){this.$emit("select",t)}}};e.default=c},"2d66":function(t,e,a){"use strict";a.r(e);var i=a("8f18"),n=a("ddbd");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("16b3");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"a0f755c4",null);e["default"]=s.exports},4463:function(t,e,a){"use strict";a.r(e);var i=a("209f"),n=a("18b7");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("5ce7");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"14d119ee",null);e["default"]=s.exports},"5ce7":function(t,e,a){"use strict";var i=a("b10c"),n=a.n(i);n.a},"7c68":function(t,e,a){var i=a("aa8f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6eb34762",i,!0,{sourceMap:!1,shadowMode:!1})},"8f18":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-navigator",{staticClass:"go-back",attrs:{"open-type":"navigateBack",delta:"1","hover-class":"none"}},[a("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},aa8f:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".go-back[data-v-a0f755c4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;width:%?50?%;height:%?50?%;border-radius:50%;border:1px solid #fff;margin-right:%?40?%}.go-back .iconfont[data-v-a0f755c4]{font-size:%?33?%}",""])},b10c:function(t,e,a){var i=a("0827");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("77f43c4c",i,!0,{sourceMap:!1,shadowMode:!1})},b5cc:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("my-header",{attrs:{title:"钢材总览"}},[a("v-uni-view",{staticClass:"iron-num"},[a("v-uni-view",{staticClass:"num-item"},[t._v("钢材总数: "+t._s(t.total)+" 种")])],1)],1),a("v-uni-view",{staticClass:"page-body"},[a("v-uni-scroll-view",{staticClass:"nav-left",style:"height:"+t.height+"px",attrs:{"scroll-y":""}},t._l(t.categoryList,function(e,i){return a("v-uni-view",{key:i,staticClass:"nav-left-item",class:i==t.categoryActive?"active":"",on:{click:function(a){a=t.$handleEvent(a),t.categoryClickMain(e,i)}}},[t._v(t._s(e.name))])}),1),a("v-uni-scroll-view",{staticClass:"nav-right",style:"height:"+t.height+"px",attrs:{"scroll-y":"","scroll-top":t.scrollTop,"scroll-with-animation":""},on:{scroll:function(e){e=t.$handleEvent(e),t.scroll(e)}}},[a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"content-header"},[t._v(t._s(t.subCategoryList.name))]),a("v-uni-view",{staticClass:"iron-img"},[a("v-uni-image",{staticClass:"img-item",attrs:{src:""!==t.subCategoryList.logo&&null!==t.subCategoryList.logo?t.subCategoryList.logo:"https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/Ocean.jpg"}})],1),a("v-uni-view",{staticClass:"price"},[t._v("最新价格:"),a("v-uni-text",{staticClass:"price-num"},[t._v(t._s(t.subCategoryList.price))])],1),a("v-uni-view",{staticClass:"info"},[t._v(t._s(t.subCategoryList.info))]),a("v-uni-view",{staticClass:"iron-contact"},[a("v-uni-view",{staticClass:"info-text"},[t._v("感觉价格不合理？ 欢迎联系我们议价")]),a("v-uni-view",{staticClass:"info-text"},[t._v("联系电话(点击即可拨打)")]),a("v-uni-view",{staticClass:"phone"},[a("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.call("17625456779")}}},[t._v("17625456779")]),a("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.call("13856262575")}}},[t._v("13856262575")])],1)],1),a("v-uni-view",{staticClass:"cards"},[a("v-uni-image",{staticClass:"qrcode",attrs:{src:"https://s1.ax1x.com/2018/12/02/FuDQVP.jpg"}}),a("v-uni-image",{staticClass:"qrcode",attrs:{src:"https://s1.ax1x.com/2018/12/02/FuDKbt.md.jpg"}})],1)],1)],1)],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},c379:function(t,e,a){"use strict";var i=a("ec89"),n=a.n(i);n.a},c60a:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7f7f");a("2f62");var n=i(a("4463")),o=a("de58"),r={components:{MyHeader:n.default},data:function(){return{categoryList:[],subCategoryList:[],height:0,categoryActive:0,scrollTop:0,scrollHeight:0,total:0}},onShareAppMessage:function(){return{title:"钢材总览",path:"/pages/iron/iron"}},methods:{call:function(t){uni.makePhoneCall({phoneNumber:t})},scroll:function(t){this.scrollHeight=t.detail.scrollHeight},categoryClickMain:function(t,e){this.categoryActive=e,this.subCategoryList=t.content,this.scrollTop=-this.scrollHeight*e},getCategory:function(){var t=this;(0,o.getAllIron)().then(function(e){t.categoryList=[],t.total=e.data.length,e.data.map(function(e){t.categoryList.push({name:e.name,content:{name:e.name,logo:e.photo,price:"".concat(e.new_price,"元/吨"),info:e.intro}})}),t.subCategoryList=t.categoryList[0].content,uni.hideLoading()})}},onLoad:function(){uni.showLoading({title:"加载中"}),this.getCategory(),this.height=uni.getSystemInfoSync().windowHeight-this.CustomBar}};e.default=r},ddbd:function(t,e,a){"use strict";a.r(e);var i=a("1be6"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},ec89:function(t,e,a){var i=a("f782");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("477fc870",i,!0,{sourceMap:!1,shadowMode:!1})},ef28:function(t,e,a){"use strict";a.r(e);var i=a("c60a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},f782:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'.blank[data-v-61d51822]{height:%?186?%}.page-body[data-v-61d51822]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex\n\t/* margin-top: 90px; */}.iron-num[data-v-61d51822]{padding-left:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;line-height:2;font-size:%?24?%;color:#fff}.nav[data-v-61d51822]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}.nav-left[data-v-61d51822]{width:30%;overflow-y:auto\n\t/* border: solid 1upx #E0E0E0; */}.nav-left-item[data-v-61d51822]{height:%?100?%;border-bottom:solid %?1?% #e0e0e0;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.nav-right[data-v-61d51822]{padding:0 %?28?% 0;width:70%;background:#eee}.nav-right .content[data-v-61d51822]{margin-top:%?20?%;padding-top:%?20?%;background:#fff;-webkit-box-shadow:0 20px 40px -15px rgba(0,0,0,.05);box-shadow:0 20px 40px -15px rgba(0,0,0,.05)}.nav-right .content-header[data-v-61d51822]{padding-left:%?20?%;font-size:%?28?%}.nav-right .content-header[data-v-61d51822]:before{content:"";float:left;margin-top:%?15?%;margin-right:%?20?%;width:%?10?%;height:%?10?%;border-radius:50%;background:#00bfff}.nav-right .iron-img[data-v-61d51822]{padding:%?20?%}.nav-right .iron-img .img-item[data-v-61d51822]{width:100%}.nav-right .price[data-v-61d51822]{font-weight:700;text-align:center}.nav-right .price-num[data-v-61d51822]{color:#007aff}.nav-right .info[data-v-61d51822]{min-height:%?350?%;padding-left:%?20?%;padding-top:%?20?%}.nav-right-item[data-v-61d51822]{width:28%;height:%?220?%;float:left;text-align:center;padding:%?11?%;font-size:%?28?%}.nav-right-item uni-image[data-v-61d51822]{width:%?100?%;height:%?100?%}.active[data-v-61d51822]{color:#007aff;background:#eee;border-left:%?4?% solid #00bfff}.iron-contact .info-text[data-v-61d51822]{font-size:%?30?%}.iron-contact .phone[data-v-61d51822]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.cards .qrcode[data-v-61d51822]{margin-top:%?20?%;width:%?200?%;height:%?200?%}.iron-contact .info-text[data-v-61d51822]{font-size:%?30?%}.iron-contact .phone[data-v-61d51822]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.cards .qrcode[data-v-61d51822]{margin-top:%?20?%;width:%?200?%;height:%?200?%}',""])}}]);