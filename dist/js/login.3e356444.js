"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[535],{1350:(e,n,l)=>{l.r(n),l.d(n,{default:()=>V});var r=l(9269),t={class:"q-pa-md",style:{"max-width":"400px",margin:"auto"}},o=(0,r._)("div",{class:"text-h3",style:{padding:"50px 0px"}},"Sign in",-1);function a(e,n,l,a,u,i){var s=(0,r.up)("q-input"),m=(0,r.up)("router-link"),d=(0,r.up)("q-btn"),c=(0,r.up)("q-form");return(0,r.wg)(),(0,r.iD)("div",t,[o,(0,r.Wm)(c,{onSubmit:a.onSubmit,class:"q-gutter-md"},{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{for:"login-email",filled:"",modelValue:a.email,"onUpdate:modelValue":n[0]||(n[0]=function(e){return a.email=e}),label:"Email",hint:"Email","lazy-rules":"",type:"email",rules:[function(e){return e&&e.length>0||"Please type your email"}]},null,8,["modelValue","rules"]),(0,r.Wm)(s,{for:"login-password",filled:"",type:"password",modelValue:a.password,"onUpdate:modelValue":n[1]||(n[1]=function(e){return a.password=e}),label:"Password","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please type your password"}]},null,8,["modelValue","rules"]),(0,r._)("p",null,[(0,r.Uk)(" Don't have an account? "),(0,r.Wm)(m,{to:"/register",class:"text-weight-light"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Sign up here")]})),_:1})]),(0,r._)("div",null,[(0,r.Wm)(d,{id:"login-submit",label:"Login",type:"submit",color:"primary"})])]})),_:1},8,["onSubmit"])])}var u=l(8542),i=l(5884),s=(l(4719),l(5393)),m=l(6364),d=l(5999),c=l(6237),p=l(2201);const f={name:"LoginView",mounted:function(){this.onLoginError()},setup:function(){var e=(0,p.tv)(),n=(0,d.Z)(),l=(0,c.iH)(null),r=(0,c.iH)(null);return{email:l,password:r,onSubmit:function(){return(0,i.Z)((0,u.Z)().mark((function t(){var o;return(0,u.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.loading.show(),t.next=3,(0,s.x4)({email:l.value,password:r.value});case 3:if(o=t.sent,n.loading.hide(),!o.error){t.next=9;break}n.notify({color:"red-4",textColor:"white",icon:"warning",message:o.message}),t.next=13;break;case 9:return n.notify({color:"green-4",textColor:"white",icon:"check",message:"Login correcto"}),(0,m.o4)(o.token),t.next=13,e.push({name:"home"});case 13:case"end":return t.stop()}}),t)})))()},onLoginError:function(){"1"===this.$route.query.login_error&&n.notify({color:"red-4",textColor:"white",icon:"warning",message:"Please enter your credentials"})}}}};var g=l(7617),w=l(3276),h=l(2914),y=l(570),v=l(1410),b=l.n(v);const x=(0,g.Z)(f,[["render",a]]),V=x;b()(f,"components",{QForm:w.Z,QInput:h.Z,QBtn:y.Z})},4254:(e,n,l)=>{l.r(n),l.d(n,{default:()=>k});l(2703);var r=l(9269),t={class:"q-pa-md",style:{"max-width":"400px",margin:"auto"}},o=(0,r._)("div",{class:"text-h3",style:{padding:"50px 0px"}},"Sign up",-1);function a(e,n,l,a,u,i){var s=(0,r.up)("q-input"),m=(0,r.up)("router-link"),d=(0,r.up)("q-btn"),c=(0,r.up)("q-form");return(0,r.wg)(),(0,r.iD)("div",t,[o,(0,r.Wm)(c,{onSubmit:a.onSubmit,onReset:a.onReset,class:"q-gutter-md"},{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{for:"register-email",filled:"",modelValue:a.email,"onUpdate:modelValue":n[0]||(n[0]=function(e){return a.email=e}),label:"Email","lazy-rules":"",type:"email",rules:[function(e){return e&&e.length>0||"Please type an email"}]},null,8,["modelValue","rules"]),(0,r.Wm)(s,{for:"register-name",filled:"",modelValue:a.name,"onUpdate:modelValue":n[1]||(n[1]=function(e){return a.name=e}),label:"Name","lazy-rules":"",type:"text",rules:[function(e){return e&&e.length>0||"Please type your name"}]},null,8,["modelValue","rules"]),(0,r.Wm)(s,{for:"register-rut",filled:"",modelValue:a.rut,"onUpdate:modelValue":n[2]||(n[2]=function(e){return a.rut=e}),label:"RUT",hint:"RUT in any format","lazy-rules":"",type:"text",rules:[function(e){return e&&e.length>0||"Please type your RUT (DNI)"},function(e){return e&&a.rutjs.validate(e)||"The RUT is not valid"}]},null,8,["modelValue","rules"]),(0,r.Wm)(s,{for:"register-password",filled:"",type:"password",modelValue:a.password,"onUpdate:modelValue":n[3]||(n[3]=function(e){return a.password=e}),label:"Password","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please type a password"}]},null,8,["modelValue","rules"]),(0,r.Wm)(s,{for:"register-password",filled:"",type:"password",modelValue:a.confirmPassword,"onUpdate:modelValue":n[4]||(n[4]=function(e){return a.confirmPassword=e}),label:"Confirm the password","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please confirm the password"},function(e){return e&&e==a.password||"Passwords do not match"}]},null,8,["modelValue","rules"]),(0,r._)("p",null,[(0,r.Uk)(" Already registered? "),(0,r.Wm)(m,{to:"/login",class:"text-weight-light"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Sign in")]})),_:1})]),(0,r._)("div",null,[(0,r.Wm)(d,{id:"register-submit",label:"Register",type:"submit",color:"primary"}),(0,r.Wm)(d,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]})),_:1},8,["onSubmit","onReset"])])}var u=l(8542),i=l(5884),s=(l(4719),l(5393)),m=l(5999),d=l(6237),c=l(2201),p=l(8322),f=l.n(p);const g={name:"LoginView",setup:function(){var e=(0,c.tv)(),n=(0,m.Z)(),l=(0,d.iH)(null),r=(0,d.iH)(null),t=(0,d.iH)(null),o=(0,d.iH)(null),a=(0,d.iH)(null);return{email:l,password:r,name:t,confirmPassword:o,rut:a,rutjs:f(),onSubmit:function(){return(0,i.Z)((0,u.Z)().mark((function o(){var i;return(0,u.Z)().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n.loading.show(),o.next=3,(0,s.z2)({email:l.value,password:r.value,name:t.value,rut:a.value});case 3:if(i=o.sent,n.loading.hide(),!i.error){o.next=9;break}n.notify({color:"red-4",textColor:"white",icon:"warning",message:i.message}),o.next=12;break;case 9:return n.notify({color:"green-4",textColor:"white",icon:"check",message:"Please login"}),o.next=12,e.push({name:"login"});case 12:case"end":return o.stop()}}),o)})))()},onReset:function(){l.value=null,r.value=null,t.value=null,a.value=null,o.value=null}}}};var w=l(7617),h=l(3276),y=l(2914),v=l(570),b=l(1410),x=l.n(b);const V=(0,w.Z)(g,[["render",a]]),k=V;x()(g,"components",{QForm:h.Z,QInput:y.Z,QBtn:v.Z})}}]);
//# sourceMappingURL=login.3e356444.js.map