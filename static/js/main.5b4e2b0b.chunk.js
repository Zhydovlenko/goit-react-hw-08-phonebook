(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{104:function(t,e,n){},105:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(28),o=n.n(r),u=n(7),i=n(50),s=n(1),l=n(19),b=n(51),h=n.n(b),f=n(30),d=n(2),g=n(25),m=n(8),O={toggleTheme:Object(s.b)("theme/toggleTheme",(function(t,e){return{payload:{theme:{isChecked:!1,themeConfig:"light"}}}}))},j=Object(s.c)({themeConfig:"light"},Object(d.a)({},O.toggleTheme,(function(t){return Object(g.a)(Object(g.a)({},t),{},{themeConfig:"light"===t.themeConfig?"dark":"light"})}))),C=Object(s.c)({isChecked:!1},Object(d.a)({},O.toggleTheme,(function(t){return Object(g.a)(Object(g.a)({},t),{},{isChecked:!t.isChecked})}))),p=Object(m.c)({themeConfig:j,isChecked:C}),E=n(9),v={key:"auth",storage:h.a,whitelist:["token"]},k=Object(s.a)({reducer:{contacts:f.a,theme:p,auth:Object(l.g)(v,E.b)},middleware:Object(s.d)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})}),y=Object(l.h)(k),S=n(20),_=n(21),R=n(23),q=n(22),N=n(18),A=n(6),L=n(24),U=n(48),x=n(11),w=n.n(x),T=Object(u.b)((function(t){return{isAuthenticated:E.c.isAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return a.a.createElement("nav",{style:w.a.nav},a.a.createElement(N.b,{to:"/",exact:!0,className:w.a.link,activeClassName:w.a.activeLink},"Home"),e&&a.a.createElement(N.b,{to:"/contacts",exact:!0,className:w.a.link,activeClassName:w.a.activeLink},"Contacts"))})),I=n(32),B=n.n(I),F=Object(u.b)((function(t){return{email:E.c.getUserEmail(t)}}),{onLogout:E.a.logOut})((function(t){var e=t.email,n=t.onLogout;return a.a.createElement("div",{style:B.a.container},a.a.createElement("span",{style:B.a.name}," ",e),a.a.createElement("button",{className:B.a.btn,type:"button",onClick:n},"Logout"))})),z=function(){return a.a.createElement("div",{className:w.a.container},a.a.createElement(N.b,{to:"/register",exact:!0,className:w.a.link,activeClassName:w.a.activeLink},"Sign up"),a.a.createElement(N.b,{to:"/login",exact:!0,className:w.a.link,activeClassName:w.a.activeLink},"Log in"))},H=n(27),M=n.n(H),V=function(t){return t.theme.themeConfig},D=function(t){return t.theme.isChecked},G={fontColor:"#333333",bodyBg:"white"},J={fontColor:"white",bodyBg:"#333333"},Z=(a.a.createContext(G),function(t){Object(R.a)(n,t);var e=Object(q.a)(n);function n(){return Object(S.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){var t=this.props,e=t.theme,n=t.toggleTheme,c=t.isChecked;return a.a.createElement("div",{style:{background:"light"===e.themeConfig?G.bodyBg:J.bodyBg},className:M.a.themeSelector},a.a.createElement("span",{className:M.a.label}),a.a.createElement("label",{className:M.a.switch},a.a.createElement("input",{type:"checkbox",checked:c.isChecked,onChange:n}),a.a.createElement("span",{className:M.a.slider})))}}]),n}(c.Component)),P={toggleTheme:O.toggleTheme},W=Object(u.b)((function(t){return{isChecked:D(t),theme:V(t)}}),P)(Z),K=Object(u.b)((function(t){return{isAuthenticated:E.c.isAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return a.a.createElement(a.a.Fragment,null,a.a.createElement(W,null),a.a.createElement("header",{className:w.a.header},a.a.createElement(T,null),e?a.a.createElement(F,null):a.a.createElement(z,null)))})),Q=(n(37),n(53)),X=n.n(Q),Y=Object(u.b)((function(t){return{theme:V(t),isChecked:D(t)}}))((function(t){var e=t.children,n=t.theme;return a.a.createElement("div",{style:{background:"light"===n.themeConfig?G.bodyBg:J.bodyBg,color:"light"===n.themeConfig?G.fontColor:J.fontColor},className:X.a.container},a.a.createElement(K,null),e)})),$=[{path:"/",label:"Home",exact:!0,component:Object(c.lazy)((function(){return n.e(4).then(n.bind(null,116))})),private:!1,restricted:!1},{path:"/register",label:"Register",exact:!0,component:Object(c.lazy)((function(){return n.e(6).then(n.bind(null,117))})),private:!1,restricted:!0},{path:"/login",label:"Login",exact:!0,component:Object(c.lazy)((function(){return n.e(5).then(n.bind(null,118))})),private:!1,restricted:!0},{path:"/contacts",label:"Contacts",exact:!0,component:Object(c.lazy)((function(){return Promise.all([n.e(7),n.e(3)]).then(n.bind(null,119))})),private:!0,restricted:!1}],tt=n(31),et=Object(u.b)((function(t){return{isAuthenticated:E.c.isAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=Object(tt.a)(t,["component","isAuthenticated"]);return a.a.createElement(A.b,Object.assign({},c,{render:function(t){return n?a.a.createElement(e,t):a.a.createElement(A.a,{to:"/login"})}}))})),nt=Object(u.b)((function(t){return{isAuthenticated:E.c.isAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=Object(tt.a)(t,["component","isAuthenticated"]);return a.a.createElement(A.b,Object.assign({},c,{render:function(t){return n&&c.restricted?a.a.createElement(A.a,{to:"/contacts"}):a.a.createElement(e,t)}}))})),ct=function(t){Object(R.a)(n,t);var e=Object(q.a)(n);function n(){return Object(S.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return a.a.createElement(N.a,null,a.a.createElement(Y,null,a.a.createElement(c.Suspense,{fallback:a.a.createElement(a.a.Fragment,null,a.a.createElement(U.a,null))},a.a.createElement(A.d,null,$.map((function(t){return t.private?a.a.createElement(et,Object.assign({key:t.label},t)):a.a.createElement(nt,Object.assign({key:t.label},t))}))))))}}]),n}(c.Component),at=Object(u.b)((function(t){return{contacts:L.c.getContacts(t)}}))(ct),rt=function(t){Object(R.a)(n,t);var e=Object(q.a)(n);function n(){return Object(S.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(at,Object.assign({},this.props,this.state),this.props.children))}}]),n}(c.Component),ot={onFetchContacts:L.b.fetchContacts,onGetCurrentUser:E.a.getCurrentUser},ut=Object(u.b)((function(t){return{contacts:L.c.getContacts(t),visibleContacts:L.c.getVisibleContacts(t),isLoadingContacts:L.c.getLoading(t)}}),ot)(rt);n(104);o.a.render(a.a.createElement(u.a,{store:k},a.a.createElement(i.a,{loading:null,persistor:y},a.a.createElement(ut,null))),document.getElementById("root"))},11:function(t,e,n){t.exports={header:"Navigation_header__2yff7",container:"Navigation_container__19n-b",link:"Navigation_link__2WoIp",activeLink:"Navigation_activeLink__3VmZp"}},24:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r.a})),n.d(e,"c",(function(){return l}));var c=n(15),a=n.n(c),r=n(4),o={addContact:function(t,e){return function(n){n(r.a.addContactRequest()),a.a.post("/contacts",{name:t,number:e}).then((function(t){return n(r.a.addContactSuccess(t.data))})).catch((function(t){return n(r.a.addContactError(t))}))}},fetchContacts:function(){return function(t){t(r.a.fetchContactsRequest()),a.a.get("/contacts").then((function(e){var n=e.data;return t(r.a.fetchContactsSuccess(n))})).catch((function(e){return t(r.a.fetchContactsError(e))}))}},deleteContact:function(t){return function(e){e(r.a.deleteContactRequest()),a.a.delete("/contacts/".concat(t)).then((function(){return e(r.a.deleteContactSuccess(t))})).catch((function(t){return e(r.a.deleteContactError(t))}))}}},u=n(17),i=function(t){return t.contacts.contacts},s=function(t){return t.contacts.filter},l={getLoading:function(t){return t.contacts.loading},getContacts:i,getFilter:s,getVisibleContacts:Object(u.a)([i,s],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}))};n(30)},27:function(t,e,n){t.exports={themeSelector:"Toggler_themeSelector__np613",label:"Toggler_label__2C_CB",switch:"Toggler_switch__H_ybb",slider:"Toggler_slider__2MZT5"}},30:function(t,e,n){"use strict";var c,a,r=n(2),o=n(54),u=n(8),i=n(1),s=n(4),l=Object(i.c)([],(c={},Object(r.a)(c,s.a.fetchContactsSuccess,(function(t,e){return e.payload})),Object(r.a)(c,s.a.addContactSuccess,(function(t,e){return[].concat(Object(o.a)(t),[e.payload])})),Object(r.a)(c,s.a.deleteContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),b=Object(i.c)("",Object(r.a)({},s.a.changeFilter,(function(t,e){return e.payload}))),h=Object(i.c)(!1,(a={},Object(r.a)(a,s.a.fetchContactsRequest,(function(){return!0})),Object(r.a)(a,s.a.fetchContactsSuccess,(function(){return!1})),Object(r.a)(a,s.a.fetchContactsError,(function(){return!1})),Object(r.a)(a,s.a.addContactRequest,(function(){return!0})),Object(r.a)(a,s.a.addContactSuccess,(function(){return!1})),Object(r.a)(a,s.a.addContactError,(function(){return!1})),Object(r.a)(a,s.a.deleteContactRequest,(function(){return!0})),Object(r.a)(a,s.a.deleteContactSuccess,(function(){return!1})),Object(r.a)(a,s.a.deleteContactError,(function(){return!1})),a));e.a=Object(u.c)({contacts:l,filter:b,loading:h})},32:function(t,e,n){t.exports={btn:"UserMenu_btn__36xSF"}},4:function(t,e,n){"use strict";var c=n(1),a=Object(c.b)("contacts/addRequest"),r=Object(c.b)("contacts/addSuccess"),o=Object(c.b)("contacts/addError"),u=Object(c.b)("contacts/fetchRequest"),i=Object(c.b)("contacts/fetchSuccess"),s=Object(c.b)("contacts/fetchError"),l=Object(c.b)("contacts/deleteRequest"),b=Object(c.b)("contacts/deleteSuccess"),h=Object(c.b)("contacts/deleteError"),f=Object(c.b)("contacts/filter");e.a={addContactRequest:a,addContactSuccess:r,addContactError:o,fetchContactsRequest:u,fetchContactsSuccess:i,fetchContactsError:s,deleteContactRequest:l,deleteContactSuccess:b,deleteContactError:h,changeFilter:f}},48:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var c=n(20),a=n(21),r=n(23),o=n(22),u=n(0),i=n.n(u),s=n(52),l=n.n(s),b=(n(102),function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return i.a.createElement(l.a,{type:"ThreeDots",color:"#555",height:80,width:80})}}]),n}(u.Component))},53:function(t,e,n){t.exports={container:"Layout_container__1vA8L"}},55:function(t,e,n){t.exports=n(105)},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"c",(function(){return C})),n.d(e,"b",(function(){return _}));var c=n(15),a=n.n(c),r=n(1),o=Object(r.b)("auth/registerRequest"),u=Object(r.b)("auth/registerSuccess"),i=Object(r.b)("auth/registerError"),s=Object(r.b)("auth/loginRequest"),l=Object(r.b)("auth/loginSuccess"),b=Object(r.b)("auth/loginError"),h={registerRequest:o,registerSuccess:u,registerError:i,logOutRequest:Object(r.b)("auth/logoutRequest"),logOutSuccess:Object(r.b)("auth/logoutSuccess"),logOutError:Object(r.b)("auth/logoutError"),logInRequest:s,logInSuccess:l,logInError:b,getCurrentUserRequest:Object(r.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(r.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(r.b)("auth/getCurrentUserError")};a.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var f,d,g,m=function(t){a.a.defaults.headers.common.Authorization="Bearer ".concat(t)},O=function(){a.a.defaults.headers.common.Authorization=""},j={register:function(t){return function(e){e(h.registerRequest()),a.a.post("/users/signup",t).then((function(t){m(t.data.token),e(h.registerSuccess(t.data))})).catch((function(t){return e(h.registerError(t))}))}},logOut:function(){return function(t){t(h.logOutRequest()),a.a.post("/users/logout").then((function(){O(),t(h.logOutSuccess())})).catch((function(e){return t(h.logOutError(e))}))}},logIn:function(t){return function(e){e(h.logInRequest()),a.a.post("/users/login",t).then((function(t){m(t.data.token),e(h.logInSuccess(t.data))})).catch((function(t){return e(h.logInError(t))}))}},getCurrentUser:function(){return function(t,e){var n=e().auth.token;n&&(m(n),t(h.getCurrentUserRequest()),a.a.get("/users/current").then((function(e){var n=e.data;return t(h.getCurrentUserSuccess(n))})).catch((function(t){return h.getCurrentUserError(t.message)})))}}},C={isAuthenticated:function(t){return t.auth.token},getUserEmail:function(t){return t.auth.user.email}},p=n(2),E=n(8),v={name:null,email:null},k=Object(r.c)(v,(f={},Object(p.a)(f,h.registerSuccess,(function(t,e){return e.payload.user})),Object(p.a)(f,h.logInSuccess,(function(t,e){return e.payload.user})),Object(p.a)(f,h.getCurrentUserSuccess,(function(t,e){return e.payload})),Object(p.a)(f,h.logOutSuccess,(function(){return v})),f)),y=Object(r.c)(null,(d={},Object(p.a)(d,h.registerSuccess,(function(t,e){return e.payload.token})),Object(p.a)(d,h.logInSuccess,(function(t,e){return e.payload.token})),Object(p.a)(d,h.logOutSuccess,(function(){return null})),d)),S=Object(r.c)(null,(g={},Object(p.a)(g,h.registerError,(function(t,e){return e.payload})),Object(p.a)(g,h.logInError,(function(t,e){return e.payload})),Object(p.a)(g,h.logOutError,(function(t,e){return e.payload})),Object(p.a)(g,h.getCurrentUserError,(function(t,e){return e.payload})),g)),_=Object(E.c)({user:k,token:y,error:S})}},[[55,1,2]]]);
//# sourceMappingURL=main.5b4e2b0b.chunk.js.map