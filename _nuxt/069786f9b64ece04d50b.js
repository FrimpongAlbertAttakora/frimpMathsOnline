(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(t,e,n){"use strict";var strong=n(223),r=n(212);t.exports=n(224)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},212:function(t,e,n){var r=n(14);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},223:function(t,e,n){"use strict";var r=n(15).f,o=n(72),c=n(130),l=n(31),f=n(128),v=n(129),d=n(88),m=n(132),h=n(89),_=n(10),y=n(87).fastKey,w=n(212),j=_?"_s":"size",O=function(t,e){var n,r=y(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,d){var m=t((function(t,r){f(t,m,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[j]=0,null!=r&&v(r,n,t[d],t)}));return c(m.prototype,{clear:function(){for(var t=w(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[j]=0},delete:function(t){var n=w(this,e),r=O(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[j]--}return!!r},forEach:function(t){w(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!O(w(this,e),t)}}),_&&r(m.prototype,"size",{get:function(){return w(this,e)[j]}}),m},def:function(t,e,n){var r,o,c=O(t,e);return c?c.v=n:(t._l=c={i:o=y(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[j]++,"F"!==o&&(t._i[o]=c)),t},getEntry:O,setStrong:function(t,e,n){d(t,e,(function(t,n){this._t=w(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?m(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,m(1))}),n?"entries":"values",!n,!0),h(e)}}},224:function(t,e,n){"use strict";var r=n(4),o=n(3),c=n(20),l=n(130),meta=n(87),f=n(129),v=n(128),d=n(14),m=n(12),h=n(90),_=n(55),y=n(91);t.exports=function(t,e,n,w,j,O){var x=r[t],S=x,k=j?"set":"add",C=S&&S.prototype,V={},P=function(t){var e=C[t];c(C,t,"delete"==t||"has"==t?function(a){return!(O&&!d(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return O&&!d(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(O||C.forEach&&!m((function(){(new S).entries().next()})))){var E=new S,I=E[k](O?{}:-0,1)!=E,M=m((function(){E.has(1)})),N=h((function(t){new S(t)})),L=!O&&m((function(){for(var t=new S,e=5;e--;)t[k](e,e);return!t.has(-0)}));N||((S=e((function(e,n){v(e,S,t);var r=y(new x,e,S);return null!=n&&f(n,j,r[k],r),r}))).prototype=C,C.constructor=S),(M||L)&&(P("delete"),P("has"),j&&P("get")),(L||I)&&P(k),O&&C.clear&&delete C.clear}else S=w.getConstructor(e,t,j,k),l(S.prototype,n),meta.NEED=!0;return _(S,t),V[t]=S,o(o.G+o.W+o.F*(S!=x),V),O||w.setStrong(S,t,j),S}},254:function(t,e,n){"use strict";n(30),n(18),n(38),n(52),n(53);var r=n(6),o=(n(54),n(211),n(35),n(9),n(5),n(21),n(127),n(215),n(0)),c=n(209),l=n(8);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v=["sm","md","lg","xl"],d=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(l.s)(e)]={type:[String,Number],default:null},t}),{}),h=v.reduce((function(t,e){return t["order"+Object(l.s)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(d),offset:Object.keys(m),order:Object.keys(h)};function y(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({cols:{type:[Boolean,String,Number],default:!1}},d,{offset:{type:[String,Number],default:null}},m,{order:{type:[String,Number],default:null}},h,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var v=w.get(l);return v||function(){var t,e;for(e in v=[],_)_[e].forEach((function(t){var r=n[t],o=y(e,t,r);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,v)}(),t(n.tag,Object(c.a)(data,{class:v}),o)}})},255:function(t,e,n){"use strict";n(30),n(18);var r=n(6),o=(n(54),n(211),n(35),n(9),n(5),n(21),n(52),n(53),n(215),n(0)),c=n(209),l=n(8);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v=["sm","md","lg","xl"],d=["start","end","center"];function m(t,e){return v.reduce((function(n,r){return n[t+Object(l.s)(r)]=e(),n}),{})}var h=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},_=m("align",(function(){return{type:String,default:null,validator:h}})),y=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:y}})),j=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},O=m("alignContent",(function(){return{type:String,default:null,validator:j}})),x={align:Object.keys(_),justify:Object.keys(w),alignContent:Object.keys(O)},S={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var C=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},_,{justify:{type:String,default:null,validator:y}},w,{alignContent:{type:String,default:null,validator:j}},O),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var v=C.get(l);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&v.push(o)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(l,v)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},340:function(t,e,n){"use strict";n.r(e);n(48);var r={props:{source:String},data:function(){return{drawer:null,contact:{},icons:["mdi mdi-youtube","mdi mdi-facebook","mdi mdi-twitter"],items:[{title:"SURD",active:!0,items:[{title:"Introduction",src:"https://www.youtube.com/watch?v=qjxKzcNYy74"},{title:"Simplification of Surds",src:"https://www.youtube.com/watch?v=qjxKzcNYy74"},{title:"Operations on Surds",src:"https://www.youtube.com/watch?v=qjxKzcNYy74"},{title:"Rationalization of Surds",src:"https://www.youtube.com/watch?v=qjxKzcNYy74"},{title:"Examples on Surds",src:"https://www.youtube.com/watch?v=qjxKzcNYy74"}]},{title:"Indices",items:[{title:"Introduction",src:""},{title:"Laws of Indices",src:""},{title:"Standard Forms(Scientific Notations)",src:""},{title:"Examples on Indices",src:""}]},{title:"Logarithm",items:[{title:"List Item"}]},{title:"Binary Operation",items:[{title:"List Item"}]},{title:"Polynomial",items:[{title:"List Item"},{title:"Factor Theorem"}]},{title:"Calculus",items:[{title:"List Item"}]},{title:"Matrices",items:[{title:"List Item"}]}]}},head:function(){return{title:"Contacts",meta:[{hid:"description",name:"description",content:"Best place for corny dad jokes"}]}}},o=n(36),c=n(92),l=n.n(c),f=n(204),v=n(343),d=n(330),m=n(246),h=n(251),_=n(210),y=n(254),w=n(344),j=n(331),O=n(332),x=n(333),S=n(250),k=n(252),C=n(258),V=n(241),P=n(253),E=n(205),I=n(337),M=n(255),N=n(225),L=n(335),T=n(338),D=n(234),z=n(216),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:"",to:"/"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:"/Core_Maths"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-book-open")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("General Mathematics")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:"/E_Maths"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-book")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Elective Mathematics")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:"/contact"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-contacts")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Contact")])],1)],1)],1)],1),t._v(" "),n("v-app-bar",{attrs:{app:"",color:"#01a3a4",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":"",grow:""}},[n("v-tab",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("v-tab",{attrs:{to:"/Core_Maths"}},[t._v("Gen. Mathematics")]),t._v(" "),n("v-tab",{attrs:{to:"/E_Maths"}},[t._v("Elec. Mathematics")]),t._v(" "),n("v-tab",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]},proxy:!0}])},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",[t._v("frimpMaths Online")])],1),t._v(" "),n("v-content",[n("v-container",[n("v-row",{attrs:{justify:"space-around"}},[n("v-col",[n("v-sheet",{staticClass:"mx-auto px-5",attrs:{width:"80%",color:"#fafafa",height:"100%",elevation:"3"}},[n("h2",[t._v("General Mathematics")]),t._v(" "),n("p",[t._v("\n            The rationale for the general or core mathematics lessons is\n            to acquire the mathematical skills, insights, attitudes and values\n            that students will need to be successful in their chosen careers\n            and daily lives. The content is based on the premises that all \n            students can learn mathematics and that all need to learn mathematics.\n            It is design to meet expected Standards of mathematics in many parts\n            of the world. "),n("br"),t._v(" "),n("br"),t._v("The major areas of content covered are; \n            Numbers and Numeration, Plane Geometry, Mensuration, Algebra, Statistics\n            and Probability, Trigonometry, Vectors and Transformation in plane a \n            plane\n          ")])])],1)],1),t._v(" "),n("v-card",{staticClass:"mx-auto mb-12",attrs:{width:"80%"}},[n("v-toolbar",{attrs:{color:"#fafafa"}},[n("v-toolbar-title",[t._v("Topics")])],1),t._v(" "),n("v-list",t._l(t.items,(function(e){return n("v-list-group",{key:e.title,staticClass:"text-uppercase",attrs:{dense:""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}},[t._v(" "),t._l(e.items,(function(e){return n("v-list-item",{key:e.title,staticClass:"font-weight-bold font-italic",attrs:{href:e.src}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],2)})),1)],1)],1)],1),t._v(" "),n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"white--text text-center",attrs:{flat:"",tile:"",color:"#01a3a4",width:"100%"}},[n("v-card-text",t._l(t.icons,(function(e){return n("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[n("v-icon",{attrs:{size:"26px"}},[t._v(t._s(e))])],1)})),1),t._v(" "),n("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n      Author: Albert A. Frimpong (Programmer, Educationist, Enterprenuer)\n    ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text"},[t._v("\n      "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("frimpTek Media")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VApp:f.a,VAppBar:v.a,VAppBarNavIcon:d.a,VBtn:m.a,VCard:h.a,VCardText:_.a,VCol:y.a,VContainer:w.a,VContent:j.a,VDivider:O.a,VFooter:x.a,VIcon:S.a,VList:k.a,VListGroup:C.a,VListItem:V.a,VListItemAction:P.a,VListItemContent:E.a,VListItemTitle:E.b,VNavigationDrawer:I.a,VRow:M.a,VSheet:N.a,VTab:L.a,VTabs:T.a,VToolbar:D.a,VToolbarTitle:z.a})}}]);