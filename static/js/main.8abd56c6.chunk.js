(this["webpackJsonptask-for-ignat"]=this["webpackJsonptask-for-ignat"]||[]).push([[0],[,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__1blyt",button:"Affairs_button__2QWeS",active:"Affairs_active__PYrNG",item:"Affairs_item__3Uut_",high:"Affairs_high__I7rk_",middle:"Affairs_middle__3u6U_",low:"Affairs_low__2Klg_",affair:"Affairs_affair__RDKgW"}},,,,function(e,t,n){e.exports={link:"Header_link__2376z",active:"Header_active__3tmO3",block:"Header_block__3fxM6",header:"Header_header__THS_O"}},,function(e,t,n){e.exports={messages:"Messages_messages__3-7w7",avatar:"Messages_avatar__38RUc",content:"Messages_content__29JKl",angle:"Messages_angle__1IEd-",text:"Messages_text__ZGhCH",name:"Messages_name__s0cM3",time:"Messages_time__3BjG4"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__2HxaC",greeting:"Greeting_greeting__8jAel",input:"Greeting_input__2pfJY",error:"Greeting_error__3ozzX",errorInput:"Greeting_errorInput__MKk6a",button:"Greeting_button__2I27f",count:"Greeting_count__2DGIl"}},,,function(e,t,n){e.exports={input:"SuperInputText_input__35wTs",superInput:"SuperInputText_superInput__2uzQG",errorInput:"SuperInputText_errorInput__3wvUI",error:"SuperInputText_error__2JU4l"}},,function(e,t,n){e.exports={default:"SuperButton_default__d2s_o",red:"SuperButton_red__3Jc3v",button:"SuperButton_button__3WuST",olink:"SuperButton_olink__g3Xtk",blink:"SuperButton_blink__24WEu"}},,function(e,t,n){e.exports={blue:"HW4_blue__2n_Ca",column:"HW4_column__25iji",testSpanError:"HW4_testSpanError__3RGFU"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__2Ypla",checkbox:"SuperCheckbox_checkbox__2die_",spanClassName:"SuperCheckbox_spanClassName__2_6DR"}},function(e,t,n){e.exports={select:"SuperSelect_select__2dKdK",option:"SuperSelect_option__ofMay",options:"SuperSelect_options__2hnRa"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__tqmh6",label:"SuperRadio_label__BRXvY"}},,function(e,t,n){e.exports={App:"App_App__3y5Xe"}},function(e,t,n){e.exports={item:"HW8_item__3PwVs"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(22),s=n.n(r),i=(n(29),n(23)),o=n.n(i),j=n(10),l=n.n(j),u=n(0);var b=function(e){return Object(u.jsxs)("div",{className:l.a.messages,children:[Object(u.jsx)("img",{src:e.avatar,alt:"avatar",className:l.a.avatar}),Object(u.jsx)("div",{className:l.a.angle}),Object(u.jsxs)("div",{className:l.a.content,children:[Object(u.jsx)("div",{className:l.a.name,children:e.name}),Object(u.jsx)("div",{className:l.a.text,children:e.message}),Object(u.jsx)("div",{className:l.a.time,children:e.time})]})]})},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Some Name",h="some text",x="22:00";var _=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(b,{avatar:d,name:O,message:h,time:x}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},m=n(3),p=n(4),f=n.n(p);var v=function(e){var t=f.a.item+" "+f.a[e.affair.priority];return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:f.a.affair,children:[Object(u.jsx)("div",{className:f.a.item,children:e.affair.name}),Object(u.jsxs)("div",{className:t,children:["[",e.affair.priority,"]"]}),Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:f.a.item+" "+f.a.button,children:"X"})]})})};var g=function(e){var t=e.data.map((function(t){return Object(u.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=f.a.button+" "+("all"===e.filter?f.a.active:""),a=f.a.button+" "+("high"===e.filter?f.a.active:""),c=f.a.button+" "+("middle"===e.filter?f.a.active:""),r=f.a.button+" "+("low"===e.filter?f.a.active:"");return Object(u.jsxs)("div",{className:"block",children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},className:n,children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},className:a,children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},className:c,children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},className:r,children:"Low"})]})},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(a.useState)(k),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(m.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(g,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},N=n(15),S=n(33),y=n(11),w=n.n(y),A=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=e.onEnter,i=c?w.a.errorInput:w.a.input;return Object(u.jsxs)("div",{className:w.a.greeting,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:n,className:i,onKeyDown:s}),Object(u.jsx)("div",{className:w.a.error,children:c})]}),Object(u.jsx)("button",{onClick:a,className:w.a.button,disabled:!t,children:"add"}),Object(u.jsx)("span",{className:w.a.count,children:r})]})},I=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(m.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(m.a)(o,2),l=j[0],b=j[1],d=function(){n(s),alert("Hello ".concat(s," !")),i("")},O=t.length;return Object(u.jsx)(A,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):(i(""),b("name is require  "))},addUser:d,error:l,totalUsers:O,onEnter:function(e){"Enter"===e.key&&s&&d()}})};var T=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(I,{users:n,addUserCallback:function(e){var t={_id:Object(S.a)(),name:e};c([].concat(Object(N.a)(n),[t]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},E=n(5),M=n(7),G=n(14),H=n.n(G),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(H.a.error," ").concat(i||""),l="".concat(H.a.input," ").concat(r?H.a.errorInput:H.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(E.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(u.jsx)("span",{className:j,children:r})]})},F=n(18),U=n.n(F),W=n(16),P=n.n(W),J=function(e){var t=e.red,n=e.className,a=Object(M.a)(e,["red","className"]),c="".concat(P.a.button," ").concat(t?P.a.red:P.a.default," ").concat(n);return Object(u.jsx)("button",Object(E.a)({className:c},a))},K=n(19),D=n.n(K),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(a||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(E.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(u.jsx)("span",{className:D.a.spanClassName,children:c})]})};var X=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(m.a)(i,2),j=o[0],l=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:U.a.column,children:[Object(u.jsx)(B,{value:n,onChangeText:c,onEnter:s,error:r}),Object(u.jsx)(B,{className:U.a.blue}),Object(u.jsx)(J,{children:"default"}),Object(u.jsx)(J,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(J,{disabled:!0,children:"disabled"}),Object(u.jsx)(R,{checked:j,onChangeChecked:l,children:"some text "}),Object(u.jsx)(R,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(m.a)(s,2),o=i[0],j=i[1],l=c||{},b=l.children,d=l.onDoubleClick,O=l.className,h=Object(M.a)(l,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)(B,Object(E.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(u.jsx)("span",Object(E.a)(Object(E.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},h),{},{children:b||r.value}))})};function Y(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function L(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}Y("test",{x:"A",y:1});L("test",{x:"",y:0});var q=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 6",Object(u.jsx)("div",{children:Object(u.jsx)(z,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(u.jsx)(J,{onClick:function(){Y("editable-span-value",n)},children:"save"}),Object(u.jsx)(J,{onClick:function(){c(L("editable-span-value",""))},children:"restore"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var Q=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{}),Object(u.jsx)(C,{}),Object(u.jsx)(T,{}),Object(u.jsx)(X,{}),Object(u.jsx)(q,{})]})},Z=n(20),V=n.n(Z),$=function(e){var t=e.options,n=e.className,a=e.onChange,c=e.onChangeOption,r=Object(M.a)(e,["options","className","onChange","onChangeOption"]),s=t?t.map((function(e,t){return Object(u.jsx)("option",{className:V.a.option,value:e,children:e},e+"-"+t)})):[],i=V.a.select+(n?" "+n:"");return Object(u.jsx)("select",Object(E.a)(Object(E.a)({className:i,onChange:function(e){a&&a(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))},ee=n(21),te=n.n(ee),ne=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(M.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),r&&r(e.currentTarget.value)},o=te.a.radio,j=n?n.map((function(e,n){return Object(u.jsxs)("label",{className:te.a.label,children:[Object(u.jsx)("input",Object(E.a)({className:o,type:"radio",name:t,checked:e===a,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(u.jsx)(u.Fragment,{children:j})},ae=["x","y","z"];var ce=function(){var e=Object(a.useState)(ae[1]),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 7",Object(u.jsx)("div",{children:Object(u.jsx)($,{options:ae,value:n,onChangeOption:c})}),Object(u.jsx)("div",{children:Object(u.jsx)(ne,{name:"radio",options:ae,value:n,onChangeOption:c})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},re=function(e,t){switch(t.type){case"sort":var n=Object(N.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},se=n(24),ie=n.n(se),oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var je=function(){var e=Object(a.useState)(oe),t=Object(m.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(u.jsxs)("div",{className:ie.a.item,children:[Object(u.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 8",r,Object(u.jsxs)("div",{children:[Object(u.jsx)(J,{onClick:function(){return c(re(oe,{type:"sort",payload:"up"}))},children:"sort up"}),Object(u.jsx)(J,{onClick:function(){return c(re(oe,{type:"sort",payload:"down"}))},children:"sort down"}),Object(u.jsx)(J,{onClick:function(){return c(re(oe,{type:"check",payload:18}))},children:"check 18"})]}),Object(u.jsx)("div",{children:"sort down"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var le=function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(m.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(m.a)(j,2),b=l[0],d=l[1],O=function(){clearInterval(n)},h=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(u.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(u.jsx)("br",{});return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:h}),b&&Object(u.jsx)("div",{children:x}),Object(u.jsx)(J,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(u.jsx)(J,{onClick:O,children:"stop"})]})};var ue=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 9",Object(u.jsx)(le,{}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var be=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(ce,{}),Object(u.jsx)(je,{}),Object(u.jsx)(ue,{})]})};var de=function(){return Object(u.jsx)("div",{children:"JuniorPlus"})};var Oe=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},he=n(9),xe=n(2),_e="/pre-junior",me="/junior",pe="/junior-plus";var fe=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(he.a,{children:Object(u.jsxs)(xe.c,{children:[Object(u.jsx)(xe.a,{path:_e,element:Object(u.jsx)(Q,{})}),Object(u.jsx)(xe.a,{path:me,element:Object(u.jsx)(be,{})}),Object(u.jsx)(xe.a,{path:pe,element:Object(u.jsx)(de,{})}),Object(u.jsx)(xe.a,{element:Object(u.jsx)(Oe,{})})]})})})},ve=n(8),ge=n.n(ve);var ke=function(){return Object(u.jsxs)("div",{className:ge.a.header,children:[Object(u.jsx)(he.c,{to:_e,className:function(e){return e.isActive?ge.a.active:ge.a.link},children:"pre-junior "}),Object(u.jsx)(he.c,{to:me,className:function(e){return e.isActive?ge.a.active:ge.a.link},children:"junior"}),Object(u.jsx)(he.c,{to:pe,className:function(e){return e.isActive?ge.a.active:ge.a.link},children:"junior+ "}),Object(u.jsx)("div",{className:ge.a.block})]})};var Ce=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(he.b,{children:[Object(u.jsx)(ke,{}),Object(u.jsx)(fe,{})]})})};var Ne=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(Ce,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(Ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.8abd56c6.chunk.js.map