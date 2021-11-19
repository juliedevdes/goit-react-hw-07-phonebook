(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={name:"ContactsListItem_name__3HBT-",num:"ContactsListItem_num__1DiK4",btn:"ContactsListItem_btn__Wl5Qm"}},19:function(t,e,n){t.exports={list:"ContactsList_list__3iDfq",item:"ContactsList_item__27xWN"}},20:function(t,e,n){t.exports={label:"Filter_label__28AqT",input:"Filter_input__WZl3m"}},30:function(t,e,n){t.exports={root:"App_root__13emx"}},62:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(12),s=n.n(r),o=n(16),u=n(64),i=n(8),b=n.n(i),l=n(4),j=n(3),m=Object(j.b)("DELETE_CONTACT"),d=Object(j.b)("SUBMIT"),O=(Object(j.b)("contacts/fetchContactsRequest"),Object(j.b)("contacts/fetchContactsSuccess"),Object(j.b)("contacts/fetchContactsError"),n(1));var p=function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],m=Object(a.useState)(Object(u.a)()),p=Object(o.a)(m,2),f=p[0],h=p[1],_=Object(l.b)(),x=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":j(a);break;default:return}},v=function(){h(Object(u.a)()),j(""),c("")};return Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),_(d({name:n,number:i,id:f})),v()},children:[Object(O.jsxs)("label",{children:["name:",Object(O.jsx)("input",{className:b.a.inputName,placeholder:"Jane Wayeet",name:"name",onChange:x,value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",type:"text",required:!0})]}),Object(O.jsxs)("label",{className:b.a.labelNum,children:["number:",Object(O.jsx)("input",{className:b.a.inputNum,placeholder:"+ 00-000-00",name:"number",onChange:x,value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",type:"tel",required:!0})]}),Object(O.jsx)("button",{className:b.a.btn,type:"submit",children:"add contact"})]})},f=n(14),h=n.n(f);var _=function(t){var e=t.id,n=t.name,a=t.number,c=(t.removeContact,Object(l.b)());return Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{className:h.a.name,children:[" ",n]}),Object(O.jsxs)("span",{className:h.a.num,children:[" ",a]}),Object(O.jsx)("button",{className:h.a.btn,name:n,onClick:function(){return c(m(e))},children:"delete"})]})},x=n(19),v=n.n(x),C=n(5),N=n.n(C),y=n(15),g=n(9),k=n.n(g);function w(){return(w=Object(y.a)(N.a.mark((function t(){var e,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}k.a.defaults.baseURL="https://619642c1af46280017e7df3d.mockapi.io/phonebook/";var L=function(){var t=Object(l.c)((function(t){return function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(t.contacts,t.filter)}));return Object(a.useEffect)((function(){(function(){return w.apply(this,arguments)})().then((function(t){console.log(t)}))}),[]),Object(O.jsx)("ul",{className:v.a.list,children:t.map((function(t){return Object(O.jsx)("li",{className:v.a.item,children:Object(O.jsx)(_,{name:t.name,number:t.number,id:t.id})},t.id)}))})},T=n(20),F=n.n(T),E=Object(j.b)("HANDLE_FILTER");var A=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.filter}));return Object(O.jsxs)("label",{className:F.a.label,children:["search through your contacts",Object(O.jsx)("input",{placeholder:"...",className:F.a.input,name:"filterValue",onChange:function(e){t(E(e.currentTarget.value))},value:e})]})},I=n(30),S=n.n(I);function q(){return Object(O.jsxs)("div",{className:S.a.root,children:[Object(O.jsx)("h2",{children:"Phonebook"}),Object(O.jsx)(p,{}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(A,{}),Object(O.jsx)(L,{})]})}var D,W=n(31),Z=n(6),z=Object(j.c)("",Object(Z.a)({},E,(function(t,e){var n=e.payload;return"".concat(n)}))),B=Object(j.c)([],(D={},Object(Z.a)(D,d,(function(t,e){var n=e.payload;return t.some((function(t){return t.name===n.name}))?(alert("There is already contact with the same name"),t):[].concat(Object(W.a)(t),[n])})),Object(Z.a)(D,m,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),D)),J=Object(j.a)({reducer:{filter:z,contacts:B},devTools:!1});s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(l.a,{store:J,children:Object(O.jsx)(q,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={inputName:"ContactForm_inputName__1w208",inputNum:"ContactForm_inputNum__37Uvu",label:"ContactForm_label__21FoC",labelNum:"ContactForm_labelNum__3uMKP",btn:"ContactForm_btn__1lI6h"}}},[[62,1,2]]]);
//# sourceMappingURL=main.6df4ba90.chunk.js.map