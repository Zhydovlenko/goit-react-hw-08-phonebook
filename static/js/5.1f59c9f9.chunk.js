(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{106:function(e,a,t){e.exports={container:"Views_container__2fptq",img:"Views_img__RScqy",form:"Views_form__3vkmM",title:"Views_title__qUzH9",input:"Views_input__H7X-O",formLabel:"Views_formLabel__2lo4s",btn:"Views_btn__3Ejf8"}},118:function(e,a,t){"use strict";t.r(a);var n=t(25),s=t(2),i=t(20),l=t(21),o=t(23),r=t(22),m=t(0),c=t.n(m),u=t(7),p=t(9),b=t(106),h=t.n(b),_=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,o=new Array(l),r=0;r<l;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={email:"",password:""},e.handleChange=function(a){var t=a.target,n=t.name,i=t.value;e.setState(Object(s.a)({},n,i))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(Object(n.a)({},e.state)),e.setState({name:"",email:"",password:""})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return c.a.createElement("div",null,c.a.createElement("h2",{className:h.a.title},"Log in"),c.a.createElement("form",{onSubmit:this.handleSubmit,className:h.a.form},c.a.createElement("label",{className:h.a.formLabel},"Email",c.a.createElement("input",{type:"email",name:"email",value:a,onChange:this.handleChange,className:h.a.input})),c.a.createElement("label",{className:h.a.formLabel},"Password",c.a.createElement("input",{type:"password",name:"password",value:t,onChange:this.handleChange,className:h.a.input})),c.a.createElement("button",{className:h.a.btn,type:"submit"},"Log in")))}}]),t}(m.Component);a.default=Object(u.b)(null,{onLogin:p.a.logIn})(_)}}]);
//# sourceMappingURL=5.1f59c9f9.chunk.js.map