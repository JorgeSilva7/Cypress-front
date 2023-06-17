(()=>{"use strict";var e={5481:(e,r,t)=>{t(8324),t(1628),t(8242),t(4163);var n=t(5102),o=t(9269);function a(e,r){var t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var u=t(7617);const i={},l=(0,u.Z)(i,[["render",a]]),s=l;var c=t(8029),d=t(9797),m=t(5541);const f={config:{},plugins:{Notify:d.Z,Loading:m.Z}};t(6312),t(2597),t(2057),t(2703);var p=t(2201),v=t(3201),g={class:"q-pa-md",style:{"max-width":"900px",margin:"auto"}},h={class:"home"},w={key:0},b=["src"],y={style:{"margin-top":"30px"}},k={class:"text-h5"},_=["src"],Z=(0,o._)("strong",null,"RUT: ",-1);function x(e,r,t,n,a,u){var i=(0,o.up)("q-badge"),l=(0,o.up)("q-avatar"),s=(0,o.up)("q-item-section"),c=(0,o.up)("q-item-label"),d=(0,o.up)("q-item"),m=(0,o.up)("q-btn"),f=(0,o.up)("q-icon"),p=(0,o.up)("q-space"),x=(0,o.up)("q-tooltip"),q=(0,o.up)("q-bar"),S=(0,o.up)("q-card-section"),W=(0,o.up)("q-card"),j=(0,o.up)("q-dialog"),E=(0,o.Q2)("ripple"),C=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("div",h,[n.user?((0,o.wg)(),(0,o.iD)("div",w,[(0,o.wy)(((0,o.wg)(),(0,o.j4)(d,{clickable:"",id:"user",onClick:r[0]||(r[0]=function(e){return n.showRut=!0})},{default:(0,o.w5)((function(){return[(0,o.Wm)(s,{side:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(l,{rounded:"",size:"80px"},{default:(0,o.w5)((function(){return[(0,o._)("img",{src:n.user.photo},null,8,b),(0,o.Wm)(i,{floating:"",color:n.user.verified?"teal":"red"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,v.zw)(n.user.verified?"verified":"unverified"),1)]})),_:1},8,["color"])]})),_:1})]})),_:1}),(0,o.Wm)(s,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(c,{class:"user-name"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,v.zw)(n.user.name),1)]})),_:1}),(0,o.Wm)(c,{class:"user-email"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,v.zw)(n.user.email),1)]})),_:1}),(0,o.Wm)(c,{class:"user-rut"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,v.zw)("".concat(n.rutjs.format(n.user.rut).substring(0,6),"****")),1)]})),_:1}),(0,o.Wm)(c,{caption:"",style:{"margin-top":"12px"}},{default:(0,o.w5)((function(){return[(0,o.Uk)("This user is "+(0,v.zw)(n.user.blocked?"blocked":"unblocked"),1)]})),_:1})]})),_:1}),(0,o.Wm)(s,{side:""},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,v.zw)(n.dateTime.fromISO(n.user.createdAt).toFormat("'Created on' dd-MM-yyyy 'at' HH:mm")),1)]})),_:1})]})),_:1})),[[E]]),(0,o._)("div",y,[(0,o.Wm)(m,{color:"".concat(n.user.blocked?"green":"red"),label:"".concat(n.user.blocked?"unblock":"block"),onClick:r[1]||(r[1]=function(e){return n.changeBlockStatus()})},null,8,["color","label"]),(0,o.Uk)("   "),(0,o.Wm)(m,{color:"primary",label:"Logout",onClick:r[2]||(r[2]=function(e){return n.logout()})})])])):(0,o.kq)("",!0)]),(0,o.Wm)(j,{modelValue:n.showRut,"onUpdate:modelValue":r[3]||(r[3]=function(e){return n.showRut=e}),persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},{default:(0,o.w5)((function(){return[(0,o.Wm)(W,{class:(0,v.C_)("".concat(n.user.blocked?"bg-red":"bg-primary"," text-white"))},{default:(0,o.w5)((function(){return[(0,o.Wm)(q,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(f,{name:"schedule"}),(0,o._)("div",null,(0,v.zw)(n.dateTime.now().toFormat("HH:mm")),1),(0,o.Wm)(p),(0,o.wy)(((0,o.wg)(),(0,o.j4)(m,{dense:"",flat:"",icon:"close"},{default:(0,o.w5)((function(){return[(0,o.Wm)(x,{class:"bg-white text-primary"},{default:(0,o.w5)((function(){return[(0,o.Uk)("Close")]})),_:1})]})),_:1})),[[C]])]})),_:1}),(0,o.Wm)(S,null,{default:(0,o.w5)((function(){return[(0,o._)("div",k,(0,v.zw)(n.user.name),1)]})),_:1}),(0,o.Wm)(S,{class:"text-center"},{default:(0,o.w5)((function(){return[(0,o.Wm)(l,{rounded:"",size:"350px"},{default:(0,o.w5)((function(){return[(0,o._)("img",{src:n.user.photo},null,8,_)]})),_:1})]})),_:1}),(0,o.Wm)(S,{class:"text-h6",id:"user-rut-complete"},{default:(0,o.w5)((function(){return[Z,(0,o.Uk)((0,v.zw)(n.rutjs.format(n.user.rut)),1)]})),_:1})]})),_:1},8,["class"])]})),_:1},8,["modelValue"])])}var q=t(8542),S=t(5884),W=(t(1477),t(2058),t(8439),t(5393)),j=t(6237),E=t(5999),C=t(6364),P=t(1387),O=t(8322),z=t.n(O);const Q={name:"HomeView",mounted:function(){var e=this;setTimeout((function(){e.loadUser()}),100)},setup:function(){var e=(0,p.tv)(),r=(0,E.Z)(),t=(0,j.iH)(null);return{user:t,dateTime:P.ou,rutjs:z(),showRut:(0,j.iH)(!1),loadUser:function(){var t=this;return(0,S.Z)((0,q.Z)().mark((function n(){var o,a,u;return(0,q.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.loading.show(),n.next=3,(0,W.jo)();case 3:if(o=n.sent,r.loading.hide(),!o.error){n.next=12;break}return t.user=null,r.notify({color:"red-4",textColor:"white",icon:"warning",message:null!==(a=null!==(u=o.message.msg)&&void 0!==u?u:o.message)&&void 0!==a?a:o}),n.next=10,e.replace({path:"login",query:{login_error:"1"}});case 10:n.next=17;break;case 12:if(t.user=o,t.user.verified){n.next=17;break}return localStorage.removeItem("verified"),n.next=17,e.replace({name:"verify",query:{verify_error:"1"}});case 17:case"end":return n.stop()}}),n)})))()},changeBlockStatus:function(){var e=this;return(0,S.Z)((0,q.Z)().mark((function t(){var n,o,a;return(0,q.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.loading.show(),t.next=3,(0,W.bS)();case 3:n=t.sent,r.loading.hide(),n.error?r.notify({color:"red-4",textColor:"white",icon:"warning",message:null!==(o=null!==(a=n.message.msg)&&void 0!==a?a:n.message)&&void 0!==o?o:n}):e.user=n;case 6:case"end":return t.stop()}}),t)})))()},logout:function(){return(0,S.Z)((0,q.Z)().mark((function r(){return(0,q.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return(0,C.kS)(),r.next=3,e.replace({name:"login"});case 3:case"end":return r.stop()}}),r)})))()}}}};var T=t(3585),A=t(2278),U=t(9393),I=t(6790),L=t(3712),B=t(570),H=t(1874),R=t(8055),M=t(8790),V=t(4633),D=t(3139),F=t(9907),N=t(9501),G=t(8108),J=t(8819),K=t(1410),X=t.n(K);const Y=(0,u.Z)(Q,[["render",x]]),$=Y;X()(Q,"components",{QItem:T.Z,QItemSection:A.Z,QAvatar:U.Z,QBadge:I.Z,QItemLabel:L.Z,QBtn:B.Z,QDialog:H.Z,QCard:R.Z,QBar:M.Z,QIcon:V.Z,QSpace:D.Z,QTooltip:F.Z,QCardSection:N.Z}),X()(Q,"directives",{Ripple:G.Z,ClosePopup:J.Z});var ee=(0,o._)("h1",null,"Page not found :(",-1),re=[ee];function te(e,r){return(0,o.wg)(),(0,o.iD)("div",null,re)}const ne={},oe=(0,u.Z)(ne,[["render",te]]),ae=oe;var ue=[{path:"/",name:"home",component:$,meta:{requiresAuth:!0,title:"Pruebas de software - Ev.3"}},{path:"/login",name:"login",component:function(){return Promise.all([t.e(365),t.e(535)]).then(t.bind(t,1350))},meta:{requiresAuth:!1,title:"Sign in"}},{path:"/register",name:"register",component:function(){return Promise.all([t.e(365),t.e(535)]).then(t.bind(t,4254))},meta:{requiresAuth:!1,title:"Sign out"}},{path:"/verify",name:"verify",component:function(){return Promise.all([t.e(365),t.e(509)]).then(t.bind(t,9826))},meta:{requiresAuth:!0,title:"Verify"}},{path:"/:pathMatch(.*)*",component:ae}],ie=(0,p.p7)({history:(0,p.PO)(),routes:ue});ie.beforeEach((function(e,r){return e.meta.requiresAuth&&!(0,C.LP)()?{name:"login",query:{login_error:"1"}}:"login"===e.name&&(0,C.LP)()||"verify"===e.name&&localStorage.getItem("verified")?{name:"home"}:void(document.title=e.meta.title)}));const le=ie;(0,n.ri)(s).use(le).use(c.Z,f).mount("#app")},5393:(e,r,t)=>{t.d(r,{T:()=>c,bS:()=>m,be:()=>u,jo:()=>d,x4:()=>l,z2:()=>s});t(2703);var n=t(2965),o=t(6364),a="http://3.89.221.7:3000",u=n.Z.create({baseURL:a}),i=(0,o.LP)();function l(e){var r=e.email,t=e.password;return u.post("".concat(a,"/login"),{email:r,password:t}).then((function(e){return e.data}))["catch"]((function(e){var r,t,n,o;return{error:!0,name:(null===(r=e.response.data)||void 0===r||null===(t=r.error)||void 0===t?void 0:t.name)||"Error",message:(null===(n=e.response.data)||void 0===n||null===(o=n.error)||void 0===o?void 0:o.msg)||"Error"}}))}function s(e){var r=e.email,t=e.password,n=e.name,o=e.rut;return u.post("".concat(a,"/register"),{email:r,password:t,name:n,rut:o}).then((function(e){return e.data}))["catch"]((function(e){var r,t,n,o;return{error:!0,name:(null===(r=e.response.data)||void 0===r||null===(t=r.error)||void 0===t?void 0:t.name)||"Error",message:(null===(n=e.response.data)||void 0===n||null===(o=n.error)||void 0===o?void 0:o.msg)||"Error"}}))}function c(e){var r=e.code;return u.post("".concat(a,"/verify"),{code:r}).then((function(e){return e.data}))["catch"]((function(e){var r,t,n,o;return{error:!0,name:(null===(r=e.response.data)||void 0===r||null===(t=r.error)||void 0===t?void 0:t.name)||"Error",message:(null===(n=e.response.data)||void 0===n||null===(o=n.error)||void 0===o?void 0:o.msg)||"Error"}}))}function d(){return u.get("".concat(a,"/me")).then((function(e){return e.data}))["catch"]((function(e){var r,t,n;return console.log(e),404===e.response.status&&(0,o.gy)(),{error:!0,name:(null===(r=e.response.data)||void 0===r||null===(t=r.error)||void 0===t?void 0:t.name)||"Error",message:(null===(n=e.response.data)||void 0===n?void 0:n.error)||"Error"}}))}function m(){return u.put("".concat(a,"/me/block_status")).then((function(e){return e.data}))["catch"]((function(e){var r,t,n,o;return{error:!0,name:(null===(r=e.response.data)||void 0===r||null===(t=r.error)||void 0===t?void 0:t.name)||"Error",message:(null===(n=e.response.data)||void 0===n||null===(o=n.error)||void 0===o?void 0:o.msg)||"Error"}}))}i&&(0,o.o4)(i)},6364:(e,r,t)=>{t.d(r,{LP:()=>u,gy:()=>a,kS:()=>i,o4:()=>o});var n=t(5393);function o(e){localStorage.setItem("token",e),n.be.defaults.headers["Authorization"]="Bearer ".concat(e)}function a(){localStorage.removeItem("token"),n.be.defaults.headers["Authorization"]=""}function u(){return localStorage.getItem("token")}function i(){a(),n.be.defaults.headers["Authorization"]="",localStorage.removeItem("verified")}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,n,o,a)=>{if(!n){var u=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],i=!0,l=0;l<n.length;l++)(!1&a||u>=a)&&Object.keys(t.O).every((e=>t.O[e](n[l])))?n.splice(l--,1):(i=!1,a<u&&(u=a));if(i){e.splice(c--,1);var s=o();void 0!==s&&(r=s)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+({509:"verify",535:"login"}[e]||e)+"."+{365:"39e777ae",509:"2fd7572b",535:"3e356444"}[e]+".js"})(),(()=>{t.miniCssF=e=>{}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="app:";t.l=(n,o,a,u)=>{if(e[n])e[n].push(o);else{var i,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",r+a),i.src=n),e[n]=[o];var m=(r,t)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/"})(),(()=>{var e={143:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((t,n)=>o=e[r]=[t,n]));n.push(o[2]=a);var u=t.p+t.u(r),i=new Error,l=n=>{if(t.o(e,r)&&(o=e[r],0!==o&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};t.l(u,l,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[u,i,l]=n,s=0;if(u.some((r=>0!==e[r]))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var c=l(t)}for(r&&r(n);s<u.length;s++)a=u[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},n=self["webpackChunkapp"]=self["webpackChunkapp"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=t.O(void 0,[998],(()=>t(5481)));n=t.O(n)})();
//# sourceMappingURL=app.dd41a36c.js.map