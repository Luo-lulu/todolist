(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(2),i=n.n(c),a=n(9),s=n.n(a),d=(n(17),n(8)),r=n(3);n(7);var u=function(t){var e=Object(c.useState)(t.edit?t.edit.value:""),n=Object(r.a)(e,2),i=n[0],a=n[1],s=Object(c.useRef)(null);Object(c.useEffect)((function(){s.current.focus()}));var d=function(t){a(t.target.value)};return Object(o.jsx)("form",{className:"todo__from",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:i}),a("")},children:t.edit?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{className:"todo__edit",type:"text",placeholder:"Edit Todo",value:i,name:"text",onChange:d,ref:s}),Object(o.jsx)("button",{className:"todo__edit__button",children:"Edit"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{className:"todo__input",type:"text",placeholder:"Add Todo",value:i,name:"text",onChange:d,ref:s}),Object(o.jsx)("button",{className:"todo__button",children:"Add"})]})})},l=n(10),j=n(11);var O=function(t){var e=t.todos,n=t.doneTodo,i=t.removeTodo,a=t.editTodo,s=Object(c.useState)({id:null,value:""}),d=Object(r.a)(s,2),O=d[0],b=d[1];return O.id?Object(o.jsx)(u,{edit:O,onSubmit:function(t){a(O.id,t),b({id:null,value:""})}}):e.map((function(t,e){return Object(o.jsxs)("div",{className:t.isDone?"todo isdone":"todo",children:[Object(o.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(l.a,{onClick:function(){i(t.id)},className:"delete__icon"}),Object(o.jsx)(j.a,{onClick:function(){return b({id:t.id,value:t.text})},className:"edit__icon"})]})]},e)}))};var b=function(){var t=Object(c.useState)(JSON.parse(localStorage.getItem("TODOLOCAK")||"")),e=Object(r.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){localStorage.setItem("TODOLOCAK",JSON.stringify(n))}),[n]),console.log(JSON.parse(localStorage.getItem("TODOLOCAK"))),Object(o.jsxs)("div",{className:"todolist",children:[Object(o.jsx)("h1",{children:"What's gonna do ?"}),Object(o.jsx)(u,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(d.a)(n));i(e)}}}),Object(o.jsx)(O,{todos:n,doneTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isDone=!e.isDone),e}));i(e)},removeTodo:function(t){var e=Object(d.a)(n).filter((function(e){return e.id!==t}));i(e)},editTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&i((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(b,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),m()},7:function(t,e,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.ab87a9d5.chunk.js.map