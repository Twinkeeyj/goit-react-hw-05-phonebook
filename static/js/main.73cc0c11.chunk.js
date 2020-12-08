(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={container:"ContactList_container__1PLkM",list:"ContactList_list__1Xwsl",button:"ContactList_button__1l7Ca"}},18:function(t,e,n){t.exports={container:"App_container__2dA66"}},26:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),i=n(4),o=n.n(i),r=(n(26),n(15)),l=n(5),u=n(9),b=n(10),j=n(13),h=n(12),m=n(8),d=n(7),f=n.n(d),O=n(32),p={name:"",number:"",id:""},x=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state=Object(l.a)({},p),t.handleChange=function(e){var n=e.target;t.setState(Object(m.a)({id:Object(O.a)()},n.name,n.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(Object(l.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:f.a.container,action:"",onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{className:f.a.label,htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{className:f.a.input,type:"text",name:"name",placeholder:"name",value:e,onChange:this.handleChange}),Object(a.jsx)("label",{className:f.a.label,htmlFor:"number",children:"Number"}),Object(a.jsx)("input",{className:f.a.input,type:"tel",name:"number",placeholder:"number",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Add contact"})]})})}}]),n}(c.Component),v=n(14),C=n.n(v),g=n(33),_=n(31),y=function(t){var e=t.list,n=t.Delete;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(g.a,{component:"ul",className:C.a.container,children:e.map((function(t){return Object(a.jsx)(_.a,{classNames:"showbutton",timeout:250,children:Object(a.jsxs)("li",{className:C.a.list,children:[t.name," : ",t.number,Object(a.jsx)("button",{className:C.a.button,type:"button",onClick:function(){return n(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)},t.id)}))})})},N=function(t){var e=t.filterRender,n=t.filter;return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",value:n,onChange:function(t){return e(t.target.value)}})]})},S=n(18),w=n.n(S),k=function(t){var e=t.answer;return Object(a.jsx)("div",{className:"answerContainer",children:e})},A=[],D={isVisible:!1,answer:"Such a contact is already in the list!"},F=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state=Object(l.a)({contacts:[].concat(A),filter:""},D),t.toAddContact=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?(t.setState({isVisible:!0}),setTimeout((function(){t.setState(Object(l.a)({},D))}),1500)):e.name.length>=1&&t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[e])}}))},t.filterRender=function(e){t.setState({filter:e})},t.toDeleteContact=function(e){var n=t.state.contacts,a=n.find((function(t){return t.id===e})),c=n.indexOf(a);t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts.slice(0,c)),Object(r.a)(t.contacts.slice(c+1)))}}))},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"filtresTask",value:function(){var t=this.state,e=t.contacts,n=t.filter;return e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=t.isVisible,s=t.answer,i=this.filtresTask();return Object(a.jsxs)("div",{className:w.a.container,children:[Object(a.jsx)(_.a,{in:!0,classNames:"logo",timeout:250,appear:!0,unmountOnExit:!0,children:Object(a.jsx)("h1",{children:"Phonebook"})}),Object(a.jsx)(x,{addContact:this.toAddContact}),Object(a.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(a.jsx)(N,{value:n,filterRender:this.filterRender}),Object(a.jsx)(y,{list:i,Delete:this.toDeleteContact}),Object(a.jsx)(_.a,{in:c,timeout:250,unmountOnExit:!0,classNames:"answer",children:Object(a.jsx)(k,{answer:s})})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={container:"ContactForm_container__2j-k1",label:"ContactForm_label__3DMeW",input:"ContactForm_input__2u9AA"}}},[[29,1,2]]]);
//# sourceMappingURL=main.73cc0c11.chunk.js.map