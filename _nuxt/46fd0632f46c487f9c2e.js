(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{329:function(t,e,o){"use strict";o.r(e);o(48);var n={props:{source:String},data:function(){return{drawer:null,contact:{},items:[{title:"SURD",active:!0,items:[{title:"Introduction",src:"https://www.youtube.com/watch?v=qjxKzcNYy74"},{title:"Simplification of Surds",src:"https://www.youtube.com/watch?v=qjxKzcNYy74"},{title:"Operations on Surds",src:"https://www.youtube.com/watch?v=qjxKzcNYy74"},{title:"Rationalization of Surds",src:"https://www.youtube.com/watch?v=qjxKzcNYy74"},{title:"Examples on Surds",src:"https://www.youtube.com/watch?v=qjxKzcNYy74"}]},{title:"Indices",items:[{title:"Introduction",src:""},{title:"Laws of Indices",src:""},{title:"Standard Forms(Scientific Notations)",src:""},{title:"Examples on Indices",src:""}]},{title:"Logarithm",items:[{title:"List Item"}]},{title:"Binary Operation",items:[{title:"List Item"}]},{title:"Polynomial",items:[{title:"List Item"},{title:"Factor Theorem"}]},{title:"Calculus",items:[{title:"List Item"}]},{title:"Matrices",items:[{title:"List Item"}]}]}},head:function(){return{title:"Contacts",meta:[{hid:"description",name:"description",content:"Best place for corny dad jokes"}]}}},r=o(36),c=o(92),l=o.n(c),v=o(197),m=o(333),d=o(320),_=o(247),w=o(252),h=o(334),f=o(321),V=o(322),x=o(246),y=o(249),C=o(255),k=o(237),I=o(250),S=o(198),L=o(327),M=o(253),T=o(225),j=o(324),A=o(325),E=o(328),N=o(232),z=o(211),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-item",{attrs:{link:"",to:"/"}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-home")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),o("v-list-item",{attrs:{link:"",to:"/Core_Maths"}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-book-open")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("General Mathematics")])],1)],1),t._v(" "),o("v-list-item",{attrs:{link:"",to:"/E_Maths"}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-book")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("Elective Mathematics")])],1)],1),t._v(" "),o("v-list-item",{attrs:{link:"",to:"/contact"}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-contacts")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("Contact")])],1)],1)],1)],1),t._v(" "),o("v-app-bar",{attrs:{app:"",color:"#01a3a4",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[o("v-tabs",{attrs:{"align-with-title":"",grow:""}},[o("v-tab",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),o("v-tab",{attrs:{to:"/Core_Maths"}},[t._v("Gen. Mathematics")]),t._v(" "),o("v-tab",{attrs:{to:"/E_Maths"}},[t._v("Elec. Mathematics")]),t._v(" "),o("v-tab",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]},proxy:!0}])},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),o("v-toolbar-title",[t._v("frimpMaths Online")])],1),t._v(" "),o("v-content",[o("v-container",[o("v-row",{attrs:{justify:"space-around"}},[o("v-col",[o("v-sheet",{staticClass:"mx-auto px-5",attrs:{width:"80%",color:"#fafafa",height:"100%",elevation:"3"}},[o("h2",[t._v("Core Mathematics")]),t._v(" "),o("p",[t._v("\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis accusamus corporis quia quaerat sapiente quibusdam deleniti, quas nemo assumenda praesentium earum quis. Veniam debitis consequatur quo voluptatem. Porro, expedita dolor!\n        Quae, nam deserunt. Voluptatibus esse quo quia perspiciatis cumque, deleniti voluptatem, est consequatur nihil, mollitia deserunt totam quos quidem dicta? Dolore aut placeat incidunt, earum mollitia non accusantium id tempora.\n        Sed porro minus voluptates fugit aliquam autem, a sequi incidunt possimus adipisci omnis iusto reiciendis? Recusandae quod accusantium ex placeat! Modi illo voluptates, rerum excepturi sed sapiente qui nam laboriosam.\n        ")])])],1)],1),t._v(" "),o("v-card",{staticClass:"mx-auto mb-12",attrs:{width:"80%"}},[o("v-toolbar",{attrs:{color:"#fafafa"}},[o("v-toolbar-title",[t._v("Topics")])],1),t._v(" "),o("v-list",t._l(t.items,(function(e){return o("v-list-group",{key:e.title,staticClass:"text-uppercase",attrs:{dense:""},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(o){t.$set(e,"active",o)},expression:"item.active"}},[t._v(" "),t._l(e.items,(function(e){return o("v-list-item",{key:e.title,staticClass:"font-weight-bold font-italic",attrs:{href:e.src}},[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],2)})),1)],1)],1)],1),t._v(" "),o("v-footer",{attrs:{color:"#00d2d3",app:"",inset:"",height:"75",absolute:""}},[o("span",{staticClass:"white--text"},[t._v(" \n      Author: Frimpong, Albert Attakora, MSc, BEd. "),o("br"),t._v("\n      Created By: frimpsTek Web development Agency - 0206870839.\n    ")]),t._v(" "),o("v-spacer"),t._v(" "),o("span",{staticClass:"white--text"},[t._v("\n      frimpMaths Online © "+t._s((new Date).getFullYear())+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VApp:v.a,VAppBar:m.a,VAppBarNavIcon:d.a,VCard:_.a,VCol:w.a,VContainer:h.a,VContent:f.a,VFooter:V.a,VIcon:x.a,VList:y.a,VListGroup:C.a,VListItem:k.a,VListItemAction:I.a,VListItemContent:S.a,VListItemTitle:S.b,VNavigationDrawer:L.a,VRow:M.a,VSheet:T.a,VSpacer:j.a,VTab:A.a,VTabs:E.a,VToolbar:N.a,VToolbarTitle:z.a})}}]);