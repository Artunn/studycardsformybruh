(this.webpackJsonpstudycardsformybruh=this.webpackJsonpstudycardsformybruh||[]).push([[0],{110:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(26),i=n.n(s),r=(n(110),n.p,n(111),n(112),n(77)),u=n(36),l=n(200),o=n(203),b=n(100),j=n(202),f=n(199),d=n(198),O=(n(113),n(201)),h=(n(114),n(21)),p=(l.a.Search,{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}});var m=function(){document.getElementById("input");var e=Object(a.useRef)(null),t=Object(a.useState)([{question:"l\xfctfen soru y\xfckle",answer:"aslabilemezsin",available:!0}]),n=Object(u.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(0),m=Object(u.a)(i,2),v=m[0],g=m[1],x=Object(a.useState)(0),y=Object(u.a)(x,2),C=y[0],S=y[1],k=Object(a.useState)(""),w=Object(u.a)(k,2),q=w[0],E=w[1],F=Object(a.useState)(!1),I=Object(u.a)(F,2),P=I[0],T=I[1];function B(e){s(c.map((function(t){return t.question===e.target.value&&(t.available=e.target.checked),t})))}function K(){return c.map((function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.a,{onChange:B,value:e.question,checked:e.available,children:e.question}),Object(h.jsx)("br",{})]})}))}var L=Object(a.useState)(K()),z=Object(u.a)(L,2),J=z[0],N=z[1];Object(a.useEffect)((function(){N(K())}),[c]);var D=function(t){var n=e.current.input.value;c[v].answer.toLowerCase()===n?(S(1),setTimeout((function(){var e=v;do{e=(e+1)%c.length}while(!c[e].available);g(e%c.length),E("")}),1e3)):S(2),setTimeout((function(){S(0)}),1e3)};return Object(h.jsxs)("div",{className:"mainpage",children:[Object(h.jsx)(b.a,{style:{margin:"20px"},type:"primary",onClick:function(){T(!0)},children:"Soru ekle / d\xfczenle"}),Object(h.jsxs)(j.a,{title:"Edit Questions",placement:"left",closable:!1,onClose:function(){T(!1)},visible:P,children:[J,Object(h.jsx)("input",{style:{margin:"20px"},type:"file",id:"input",onChange:function(e){Object(O.a)(e.target.files[0]).then((function(e){s(e.map((function(e){return{question:e[0],answer:e[1],available:!0}})))}))}})]}),Object(h.jsx)(f.a,{title:c[v].question,className:"cardstyling",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.a.Item,{label:"Success",hasFeedback:!0,validateStatus:["","success","error"][C],children:Object(h.jsx)(l.a,{onKeyPress:function(e){return"Enter"===e.key?D():null},value:q,onChange:function(e){E(e.target.value)},ref:e,placeholder:"I'm the content",id:"success"})}),Object(h.jsx)(d.a.Item,Object(r.a)(Object(r.a)({},p),{},{children:Object(h.jsx)(b.a,{type:"primary",onClick:D,onKeyPress:function(e){return"Enter"===e.key?D():null},children:"Kontrol et"})}))]})})]})};var v=function(){return Object(h.jsx)(m,{})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),g()}},[[193,1,2]]]);
//# sourceMappingURL=main.be230b91.chunk.js.map