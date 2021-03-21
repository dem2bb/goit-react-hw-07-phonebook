(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[4],{109:function(t,e,n){t.exports={form:"ContactForm_form__NIldT",form_input:"ContactForm_form_input__13CQb",button:"ContactForm_button__qBBRG",inputTitle:"ContactForm_inputTitle__nCWxU"}},110:function(t,e,n){t.exports={delete_button:"ContactsItem_delete_button__1cY2G",contactItem:"ContactsItem_contactItem__banjT"}},111:function(t,e,n){t.exports={inputForm:"Filter_inputForm__2cVT2"}},112:function(t,e,n){t.exports={container:"Contacts_container__xpMbF",formTitle:"Contacts_formTitle__1Hl2n",contactsCont:"Contacts_contactsCont__1Berj",contactsList:"Contacts_contactsList__2I_5J"}},117:function(t,e,n){"use strict";n.r(e);var c=n(27),a=n(28),r=n(30),o=n(29),s=n(0),i=n(90),u=n.n(i),l=n(2),b=n(109),m=n(9),j=n(16),f=n.n(j),h=n(23),p=n(18),d=n.n(p),O=n(7),C={addContact:function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(Object(O.b)()),d.a.post("/contacts",c).then((function(e){var n=e.data;return t(Object(O.c)(n))})).catch((function(e){return t(Object(O.a)(e.message))}))}},deleteContact:function(t){return function(e){e(Object(O.f)()),d.a.delete("/contacts/".concat(t)).then((function(){return e(Object(O.g)(t))})).catch((function(t){return e(Object(O.e)(t.message))}))}},fetchContacts:function(){return function(){var t=Object(h.a)(f.a.mark((function t(e){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(O.i)()),t.prev=1,t.next=4,d.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(O.j)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(O.h)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},g=n(33),_=function(t){return t.contacts.filter},x=function(t){return t.contacts.items},v={getLoading:function(t){return t.contacts.loading},getFiltered:_,getAllContacts:x,getErrorMessage:function(t){return t.contacts.error},getFilteredContacts:Object(g.a)([x,_],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},N=n(1),y=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.onHandleSubmit=function(e){e.preventDefault(),t.props.contacts.find((function(e){return e.name===t.state.name||e.number===t.state.number}))?alert("\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c!"):(t.props.onSubmit(t.state),t.setState({name:"",number:""}))},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("form",{className:b.form,onSubmit:this.onHandleSubmit,children:[Object(N.jsx)("h4",{className:b.inputTitle,children:"Name"}),Object(N.jsx)("input",{className:b.form_input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(N.jsx)("h4",{className:b.inputTitle,children:"Number"}),Object(N.jsx)("input",{className:b.form_input,type:"number",name:"number",value:this.state.number,onChange:this.handleChange}),Object(N.jsx)("button",{type:"submit",className:b.button,children:"Add contact"})]})}}]),n}(s.Component),F={onSubmit:C.addContact},T=Object(m.b)((function(t){return{contacts:v.getAllContacts(t)}}),F)(y),k=n(110),w={onDelete:C.deleteContact},I=Object(m.b)(null,w)((function(t){var e=t.filtered,n=t.onDelete;return e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(N.jsxs)("li",{name:e,className:k.contactItem,children:[Object(N.jsxs)("p",{children:["name: ",e]}),Object(N.jsxs)("p",{children:["tel.: ",c]}),Object(N.jsx)("button",{type:"button",className:k.delete_button,onClick:function(){return n(a)}})]},a)}))})),L=n(111),S=Object(m.b)((function(t){return{value:v.getFiltered(t)}}),(function(t){return{onChange:function(e){return t(Object(O.d)(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{children:"Find contacts by name"}),Object(N.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,className:L.inputForm})]})})),D=n(112),A=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.isLoadingContacts,n=t.isContactIncludes,c=t.error;return Object(N.jsxs)("div",{className:D.container,children:[Object(N.jsx)("h2",{className:D.formTitle,children:"Phonebook"}),Object(N.jsx)(T,{}),c&&Object(N.jsx)("p",{className:"error-message",children:c}),e&&Object(N.jsx)(u.a,{type:"ThreeDots",color:"grey",height:100,width:100}),n&&Object(N.jsxs)("div",{className:D.contactsCont,children:[Object(N.jsx)("h2",{className:D.formTitle,children:"Contacts"}),Object(N.jsx)(S,{}),Object(N.jsx)("ul",{className:D.contactsList,children:Object(N.jsx)(I,{filtered:this.props.contacts})})]})]})}}]),n}(s.Component);e.default=Object(m.b)((function(t){return{contacts:v.getFilteredContacts(t),isContactIncludes:t.contacts.items.length>0,isLoadingContacts:v.getLoading(t),error:v.getErrorMessage(t)}}),(function(t){return{fetchContacts:function(){return t(C.fetchContacts())}}}))(A)}}]);
//# sourceMappingURL=4.18425335.chunk.js.map