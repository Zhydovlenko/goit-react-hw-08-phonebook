/*! For license information please see 7.0b8a27f5.chunk.js.LICENSE.txt */
(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{109:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)&&o.length){var s=r.apply(null,o);s&&t.push(s)}else if("object"===i)for(var a in o)n.call(o,a)&&o[a]&&t.push(a)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},113:function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var o=n(0),r=n.n(o),i=n(28),s=n.n(i),a=n(10),u=n(13),c=(n(5),!1),l=r.a.createContext(null),d=function(t){function e(e,n){var o;o=t.call(this,e,n)||this;var r,i=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?i?(r="exited",o.appearStatus="entering"):r="entered":r=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",o.state={status:r},o.nextCallback=null,o}Object(u.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!==typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),"entering"===e?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(t){var e=this,n=this.props.enter,o=this.context?this.context.isMounting:t,r=this.props.nodeRef?[o]:[s.a.findDOMNode(this),o],i=r[0],a=r[1],u=this.getTimeouts(),l=o?u.appear:u.enter;!t&&!n||c?this.safeSetState({status:"entered"},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:"entering"},(function(){e.props.onEntering(i,a),e.onTransitionEnd(l,(function(){e.safeSetState({status:"entered"},(function(){e.props.onEntered(i,a)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:s.a.findDOMNode(this);e&&!c?(this.props.onExit(o),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(o),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:s.a.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(a.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(l.Provider,{value:null},"function"===typeof n?n(t,o):r.a.cloneElement(r.a.Children.only(n),o))},e}(r.a.Component);function f(){}d.contextType=l,d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},d.UNMOUNTED="unmounted",d.EXITED="exited",d.ENTERING="entering",d.ENTERED="entered",d.EXITING="exiting";var p=d,m=n(109),v=n.n(m);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function g(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}var E={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach((function(t){return clearTimeout(t)})),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(t)&&this.list.get(t).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(r)}))}};function b(t){return"number"===typeof t&&!isNaN(t)}function y(t){return"boolean"===typeof t}function O(t){return"string"===typeof t}function T(t){return"function"===typeof t}function x(t){return"string"===typeof t?t:null}function C(t){return 0===t||t}var I=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(t){return Object(o.isValidElement)(t)||O(t)||T(t)||b(t)}var k={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},R={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function N(t){var e,n,r=t.enter,i=t.exit,s=t.duration,a=void 0===s?750:s,u=t.appendPosition,c=void 0!==u&&u,l=t.collapse,d=void 0===l||l,f=t.collapseDuration,m=void 0===f?300:f;return Array.isArray(a)&&2===a.length?(e=a[0],n=a[1]):e=n=a,function(t){var s=t.children,a=t.position,u=t.preventExitTransition,l=t.done,f=g(t,["children","position","preventExitTransition","done"]),v=c?r+"--"+a:r,h=c?i+"--"+a:i,E=function t(){var e=f.nodeRef.current;e&&(e.removeEventListener("animationend",t),d?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout((function(){return e()}),n)}))}))}(e,l,m):l())};return Object(o.createElement)(p,Object.assign({},f,{timeout:u?d?m:50:{enter:e,exit:d?n+m:n+50},onEnter:function(){var t=f.nodeRef.current;t&&(t.classList.add(v),t.style.animationFillMode="forwards",t.style.animationDuration=e+"ms")},onEntered:function(){var t=f.nodeRef.current;t&&(t.classList.remove(v),t.style.cssText="")},onExit:u?E:function(){var t=f.nodeRef.current;t&&(t.classList.add(h),t.style.animationFillMode="forwards",t.style.animationDuration=n+"ms",t.addEventListener("animationend",E))},unmountOnExit:!0}),s)}}function S(t){var e=t.closeToast,n=t.type,r=t.ariaLabel,i=void 0===r?"close":r;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":i},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(t){var e,n,r=t.delay,i=t.isRunning,s=t.closeToast,a=t.type,u=t.hide,c=t.className,l=t.style,d=t.controlledProgress,f=t.progress,p=t.rtl,m=t.isIn,g=h(h({},l),{},{animationDuration:r+"ms",animationPlayState:i?"running":"paused",opacity:u?0:1});d&&(g.transform="scaleX("+f+")");var E=v()("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+a,((e={})["Toastify__progress-bar--rtl"]=p,e),c),b=((n={})[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]=d&&f<1?null:function(){m&&s()},n);return Object(o.createElement)("div",Object.assign({className:E,style:g},b))}L.defaultProps={type:R.DEFAULT,hide:!1};var _=function(t){var e,n=function(t){var e=Object(o.useState)(!0),n=e[0],r=e[1],i=Object(o.useState)(!1),s=i[0],a=i[1],u=Object(o.useRef)(null),c=Y({start:0,x:0,y:0,deltaX:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),l=Y(t,!0),d=t.autoClose,f=t.pauseOnHover,p=t.closeToast,m=t.onClick,v=t.closeOnClick;function h(e){var n=u.current;c.canCloseOnClick=!0,c.canDrag=!0,c.boundingRect=n.getBoundingClientRect(),n.style.transition="",c.start=c.x=J(e.nativeEvent),c.removalDistance=n.offsetWidth*(t.draggablePercent/100)}function g(){if(c.boundingRect){var e=c.boundingRect,n=e.top,o=e.bottom,r=e.left,i=e.right;t.pauseOnHover&&c.x>=r&&c.x<=i&&c.y>=n&&c.y<=o?b():E()}}function E(){r(!0)}function b(){r(!1)}function y(t){var e=u.current;c.canDrag&&(n&&b(),c.x=J(t),c.deltaX=c.x-c.start,c.y=function(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}(t),c.start!==c.x&&(c.canCloseOnClick=!1),e.style.transform="translateX("+c.deltaX+"px)",e.style.opacity=""+(1-Math.abs(c.deltaX/c.removalDistance)))}function O(){var e=u.current;if(c.canDrag){if(c.canDrag=!1,Math.abs(c.deltaX)>c.removalDistance)return a(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translateX(0)",e.style.opacity="1"}}Object(o.useEffect)((function(){return T(t.onOpen)&&t.onOpen(Object(o.isValidElement)(t.children)&&t.children.props),function(){T(l.onClose)&&l.onClose(Object(o.isValidElement)(l.children)&&l.children.props)}}),[]),Object(o.useEffect)((function(){return t.draggable&&(document.addEventListener("mousemove",y),document.addEventListener("mouseup",O),document.addEventListener("touchmove",y),document.addEventListener("touchend",O)),function(){t.draggable&&(document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",O))}}),[t.draggable]),Object(o.useEffect)((function(){return t.pauseOnFocusLoss&&(window.addEventListener("focus",E),window.addEventListener("blur",b)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",b))}}),[t.pauseOnFocusLoss]);var x={onMouseDown:h,onTouchStart:h,onMouseUp:g,onTouchEnd:g};d&&f&&(x.onMouseEnter=b,x.onMouseLeave=E);v&&(x.onClick=function(t){m&&m(t),c.canCloseOnClick&&p()});return{playToast:E,pauseToast:b,isRunning:n,preventExitTransition:s,toastRef:u,eventHandlers:x}}(t),r=n.isRunning,i=n.preventExitTransition,s=n.toastRef,a=n.eventHandlers,u=t.closeButton,c=t.children,l=t.autoClose,d=t.onClick,f=t.type,p=t.hideProgressBar,m=t.closeToast,h=t.transition,g=t.position,E=t.className,b=t.style,y=t.bodyClassName,O=t.bodyStyle,x=t.progressClassName,C=t.progressStyle,I=t.updateId,j=t.role,k=t.progress,R=t.rtl,N=t.toastId,S=t.deleteToast,_=v()("Toastify__toast","Toastify__toast--"+f,((e={})["Toastify__toast--rtl"]=R,e),E),w=!!k;return Object(o.createElement)(h,{in:t.in,appear:!0,done:S,position:g,preventExitTransition:i,nodeRef:s},Object(o.createElement)("div",Object.assign({id:N,onClick:d,className:_},a,{style:b,ref:s}),Object(o.createElement)("div",Object.assign({},t.in&&{role:j},{className:v()("Toastify__toast-body",y),style:O}),c),function(t){if(!t)return null;var e={closeToast:m,type:f};return T(t)?t(e):Object(o.isValidElement)(t)?Object(o.cloneElement)(t,e):void 0}(u),(l||w)&&Object(o.createElement)(L,Object.assign({},I&&!w?{key:"pb-"+I}:{},{rtl:R,delay:l,isRunning:r,isIn:t.in,closeToast:m,hide:p,type:f,style:C,className:x,controlledProgress:w,progress:k}))))},w=N({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),D=function(t){var e=t.children,n=t.className,r=t.style,i=g(t,["children","className","style"]);return delete i.in,Object(o.createElement)("div",{className:n,style:r},o.Children.map(e,(function(t){return Object(o.cloneElement)(t,i)})))},P=function(t){var e=function(t){var e=Object(o.useReducer)((function(t){return t+1}),0)[1],n=Object(o.useReducer)(q,[]),r=n[0],i=n[1],s=Object(o.useRef)(null),a=Y(0),u=Y([]),c=Y({}),l=Y({toastKey:1,displayedToast:0,props:t,containerId:null,isToastActive:d,getToast:function(t){return c[t]||null}});function d(t){return-1!==r.indexOf(t)}function f(t){var e=t.containerId,n=l.props,o=n.limit,r=n.enableMultiContainer;o&&(!e||l.containerId===e&&r)&&(a-=u.length,u=[])}function p(t){var e=u.length;if((a=C(t)?a-1:a-l.displayedToast)<0&&(a=0),e>0){var n=C(t)?1:l.props.limit;if(1===e||1===n)l.displayedToast++,m();else{var o=n>e?e:n;l.displayedToast=o;for(var r=0;r<o;r++)m()}}i({type:"REMOVE",toastId:t})}function m(){var t=u.shift(),e=t.toastContent,n=t.toastProps,o=t.staleId;setTimeout((function(){h(e,n,o)}),500)}function v(t,n){var r=n.delay,i=n.staleId,d=g(n,["delay","staleId"]);if(j(t)&&!function(t){var e=t.containerId,n=t.toastId,o=t.updateId;return!!(!s.current||l.props.enableMultiContainer&&e!==l.props.containerId||l.isToastActive(n)&&null==o)}(d)){var f=d.toastId,m=d.updateId,v=l.props,E=function(){return p(f)},C=!(0,l.isToastActive)(f);C&&a++;var I,k,R={toastId:f,updateId:m,key:d.key||l.toastKey++,type:d.type,closeToast:E,closeButton:d.closeButton,rtl:v.rtl,position:d.position||v.position,transition:d.transition||v.transition,className:x(d.className||v.toastClassName),bodyClassName:x(d.bodyClassName||v.bodyClassName),style:d.style||v.toastStyle,bodyStyle:d.bodyStyle||v.bodyStyle,onClick:d.onClick||v.onClick,pauseOnHover:y(d.pauseOnHover)?d.pauseOnHover:v.pauseOnHover,pauseOnFocusLoss:y(d.pauseOnFocusLoss)?d.pauseOnFocusLoss:v.pauseOnFocusLoss,draggable:y(d.draggable)?d.draggable:v.draggable,draggablePercent:b(d.draggablePercent)?d.draggablePercent:v.draggablePercent,closeOnClick:y(d.closeOnClick)?d.closeOnClick:v.closeOnClick,progressClassName:x(d.progressClassName||v.progressClassName),progressStyle:d.progressStyle||v.progressStyle,autoClose:(I=d.autoClose,k=v.autoClose,!1===I||b(I)&&I>0?I:k),hideProgressBar:y(d.hideProgressBar)?d.hideProgressBar:v.hideProgressBar,progress:d.progress,role:O(d.role)?d.role:v.role,deleteToast:function(){!function(t){delete c[t],e()}(f)}};T(d.onOpen)&&(R.onOpen=d.onOpen),T(d.onClose)&&(R.onClose=d.onClose);var N=v.closeButton;!1===d.closeButton||j(d.closeButton)?N=d.closeButton:!0===d.closeButton&&(N=!j(v.closeButton)||v.closeButton),R.closeButton=N;var S=t;Object(o.isValidElement)(t)&&!O(t.type)?S=Object(o.cloneElement)(t,{closeToast:E}):T(t)&&(S=t({closeToast:E})),v.limit&&v.limit>0&&a>v.limit&&C?u.push({toastContent:S,toastProps:R,staleId:i}):b(r)&&r>0?setTimeout((function(){h(S,R,i)}),r):h(S,R,i)}}function h(t,e,n){var o=e.toastId;c[o]={content:t,props:e},i({type:"ADD",toastId:o,staleId:n})}function I(e){for(var n={},o=t.newestOnTop?Object.keys(c).reverse():Object.keys(c),r=0;r<o.length;r++){var i=c[o[r]],s=i.props.position;n[s]||(n[s]=[]),n[s].push(i)}return Object.keys(n).map((function(t){return e(t,n[t])}))}return Object(o.useEffect)((function(){return l.containerId=t.containerId,E.cancelEmit(3).on(0,v).on(1,(function(t){return s.current&&p(t)})).on(5,f).emit(2,l),function(){return E.emit(3,l)}}),[]),Object(o.useEffect)((function(){l.isToastActive=d,l.displayedToast=r.length,E.emit(4,r.length,t.containerId)}),[r]),Object(o.useEffect)((function(){l.props=t})),{getToastToRender:I,collection:c,containerRef:s,isToastActive:d}}(t),n=e.getToastToRender,r=e.containerRef,i=e.isToastActive,s=t.className,a=t.style,u=t.rtl,c=t.containerId;return Object(o.createElement)("div",{ref:r,className:"Toastify",id:c},n((function(t,e){var n,r={className:v()("Toastify__toast-container","Toastify__toast-container--"+t,(n={},n["Toastify__toast-container--rtl"]=u,n),x(s)),style:0===e.length?h(h({},a),{},{pointerEvents:"none"}):h({},a)};return Object(o.createElement)(D,Object.assign({},r,{key:"container-"+t}),e.map((function(t){var e=t.content,n=t.props;return Object(o.createElement)(_,Object.assign({},n,{in:i(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?S:n.closeButton}),e)})))})))};P.defaultProps={position:k.TOP_RIGHT,transition:w,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:S,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,role:"alert"};var M,A,B,F=new Map,H=[],X=!1;function U(){return F.size>0}function G(t,e){var n=function(t){return U()?F.get(t||M):null}(e.containerId);return n?n.getToast(t):null}function Q(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function V(t){return t&&(O(t.toastId)||b(t.toastId))?t.toastId:Q()}function W(t,e){return U()?E.emit(0,t,e):(H.push({content:t,options:e}),X&&I&&(X=!1,A=document.createElement("div"),document.body.appendChild(A),Object(i.render)(Object(o.createElement)(P,Object.assign({},B)),A))),e.toastId}function K(t,e){return h(h({},e),{},{type:e&&e.type||t,toastId:V(e)})}var z=function(t,e){return W(t,K(R.DEFAULT,e))};function Y(t,e){void 0===e&&(e=!1);var n=Object(o.useRef)(t);return Object(o.useEffect)((function(){e&&(n.current=t)})),n.current}function q(t,e){switch(e.type){case"ADD":return[].concat(t,[e.toastId]).filter((function(t){return t!==e.staleId}));case"REMOVE":return C(e.toastId)?t.filter((function(t){return t!==e.toastId})):[]}}function J(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}z.success=function(t,e){return W(t,K(R.SUCCESS,e))},z.info=function(t,e){return W(t,K(R.INFO,e))},z.error=function(t,e){return W(t,K(R.ERROR,e))},z.warning=function(t,e){return W(t,K(R.WARNING,e))},z.dark=function(t,e){return W(t,K(R.DARK,e))},z.warn=z.warning,z.dismiss=function(t){return U()&&E.emit(1,t)},z.clearWaitingQueue=function(t){return void 0===t&&(t={}),U()&&E.emit(5,t)},z.isActive=function(t){var e=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},z.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=G(t,e);if(n){var o=n.props,r=n.content,i=h(h(h({},o),e),{},{toastId:e.toastId||t,updateId:Q()});i.toastId!==t&&(i.staleId=t);var s="undefined"!==typeof i.render?i.render:r;delete i.render,W(s,i)}}),0)},z.done=function(t){z.update(t,{progress:1})},z.onChange=function(t){return T(t)&&E.on(4,t),function(){T(t)&&E.off(4,t)}},z.configure=function(t){void 0===t&&(t={}),X=!0,B=t},z.POSITION=k,z.TYPE=R,E.on(2,(function(t){M=t.containerId||t,F.set(M,t),H.forEach((function(t){E.emit(0,t.content,t.options)})),H=[]})).on(3,(function(t){F.delete(t.containerId||t),0===F.size&&E.off(0).off(1).off(5),I&&A&&document.body.removeChild(A)}))}}]);
//# sourceMappingURL=7.0b8a27f5.chunk.js.map