(this["webpackJsonptodo-gethired"]=this["webpackJsonptodo-gethired"]||[]).push([[7],{184:function(e,t,a){"use strict";t.a=a.p+"static/media/icon-delete.1e080ddb.svg"},193:function(e,t,a){"use strict";a(1);var c=a(241),i=a(10);t.a=function(e){var t=e.show,a=e.handleClose,n=(e.title,e.text),l=e.type;return Object(i.jsx)("div",{"data-cy":"modal-information",children:Object(i.jsx)(c.a,{show:t,onHide:a,className:"modal-toast",size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(i.jsxs)(c.a.Body,{onClick:a,children:[Object(i.jsx)("div",{"data-cy":"modal-information-icon",className:"success"===l?"icon-alert-sm":"icon-danger-sm"}),Object(i.jsx)("p",{"data-cy":"modal-information-title",className:"pl-3 pr-3",children:n})]})})})}},195:function(e,t,a){"use strict";var c=a(1),i=a(241),n=a(238),l=a(22),d=a.p+"static/media/icon-alert.8a9d9385.svg",s=a(7),o=a(10);t.a=function(e){var t=e.show,a=e.handleClose,r=e.title,j=e.text,u=e.deletedItem,b=e.handleDelete,m=Object(l.b)(),O=function(){return m(s.a.resetStateTodo())},v=Object(l.c)((function(e){return e.todo})),h=v.isLoadingDeleteActivity,f=v.dataDeleteActivity,x=v.errDeleteActivity,y=v.isLoadingDeleteItem,p=v.dataDeleteItem,g=v.errDeleteItem;return Object(c.useEffect)((function(){(null!==x||f)&&(a(),O())}),[x,f]),Object(c.useEffect)((function(){(null!==g||p)&&(a(),O())}),[g,p]),Object(o.jsx)("div",{"data-cy":"modal-delete",children:Object(o.jsxs)(i.a,{show:t,onHide:a,className:"modal-delete",size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,id:"ModalDelete","data-cy":"todo-modal-delete",children:[Object(o.jsx)(i.a.Header,{children:Object(o.jsxs)(i.a.Title,{id:"contained-modal-title-vcenter",className:"pt-4",children:[Object(o.jsx)("img",{src:d,alt:"alert","data-cy":"modal-delete-icon"}),Object(o.jsx)("h4",{className:"font-weight-bold","data-cy":"modal-delete-title",children:r})]})}),Object(o.jsx)(i.a.Body,{children:Object(o.jsx)("p",{className:"pl-3 pr-3",dangerouslySetInnerHTML:{__html:j}})}),Object(o.jsxs)(i.a.Footer,{className:"pb-4",children:[Object(o.jsx)("button",{className:"btn btn-secondary","data-cy":"modal-delete-cancel-button",onClick:a,children:"Batal"}),Object(o.jsx)("button",{className:"btn btn-danger","data-cy":"modal-delete-confirm-button",onClick:function(){var e;b?b():(e=u,m(s.a.deleteActivityRequest(e)))},children:h||y?Object(o.jsx)(n.a,{as:"span",animation:"border",size:"md",role:"status","aria-hidden":"true"}):"Hapus"})]})]})})}},243:function(e,t,a){"use strict";a.r(t);var c=a(38),i=a(170),n=a(1),l=a.n(n),d=a(238),s=a(240),o=a(242),r=a(22),j=a(11),u=a(64),b=a.n(u),m=a(184),O=a.p+"static/media/empty-item.a0b4b794.png",v=a(7),h=a(241),f=a(205),x=a(10);var y=function(e){var t=e.show,a=e.handleClose,c=(e.title,e.text,Object(j.g)().todoId),l=Object(r.b)(),s=Object(r.c)((function(e){return e.todo})),u=s.isLoadingAddItem,b=s.errAddItem,m=s.dataAddItem,O=Object(n.useState)(""),y=Object(i.a)(O,2),p=y[0],g=y[1],N=Object(n.useState)("very-high"),I=Object(i.a)(N,2),C=I[0],k=I[1];Object(n.useEffect)((function(){(null!==b||m)&&(a(),l(v.a.resetStateTodo()))}),[b,m]);var w=[{value:"very-high",label:"Very High"},{value:"high",label:"High"},{value:"normal",label:"Medium"},{value:"low",label:"Low"},{value:"very-low",label:"Very Low"}];return Object(x.jsx)("div",{"data-cy":"modal-add",children:Object(x.jsxs)(h.a,{show:t,onHide:a,className:"modal-add-activity",size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(x.jsx)(h.a.Header,{children:Object(x.jsxs)(h.a.Title,{id:"contained-modal-title-vcenter",className:"pt-4",children:[Object(x.jsx)("h4",{className:"font-weight-bold","data-cy":"modal-add-title",children:"Tambah List Item"}),Object(x.jsx)("div",{className:"icon-close",onClick:a,"data-cy":"modal-add-close-button"})]})}),Object(x.jsx)(h.a.Body,{children:Object(x.jsxs)(o.a.Group,{children:[Object(x.jsx)("label",{"data-cy":"modal-add-name-title",children:"NAMA LIST ITEM"}),Object(x.jsx)("div",{"data-cy":"modal-add-name-input",children:Object(x.jsx)(o.a.Control,{onChange:function(e){return g(e.target.value)},placeholder:"Tambahkan nama Activity",id:"AddFormTitle"})}),Object(x.jsx)("label",{"data-cy":"modal-add-priority-title",children:"PRIORITY"}),Object(x.jsx)("br",{}),Object(x.jsx)(f.a,{defaultValue:w[0],formatOptionLabel:function(e){var t=e.value,a=e.label;return Object(x.jsxs)("div",{"data-cy":"modal-add-priority-item",className:"d-flex align-items-center",children:[Object(x.jsx)("div",{className:"label-indicator ".concat(t)}),Object(x.jsx)("div",{children:a})]})},options:w,className:"select-priority",onChange:function(e){return k(e.value)},id:"AddFormPriority",onMouseOver:function(){return console.log("lagi di atas awan")},components:{DropdownIndicator:function(){return Object(x.jsx)("div",{"data-cy":"modal-add-priority-dropdown",className:"icon-dropdown mr-2"})}}})]})}),Object(x.jsx)(h.a.Footer,{className:"pb-4",children:Object(x.jsx)("button",{className:"btn btn-primary",onClick:function(){!function(e){l(v.a.addItemRequest(e))}({title:p,activity_group_id:c,priority:C})},disabled:""===p,id:"AddFormSubmit","data-cy":"modal-add-save-button",children:u?Object(x.jsx)(d.a,{as:"span",animation:"border",size:"md",role:"status","aria-hidden":"true"}):"Simpan"})})]})})},p=a(193),g=a(195);var N=function(e){var t=e.show,a=e.handleClose,c=(e.title,e.text,e.editedItem),l=Object(j.g)().todoId,s=Object(r.b)(),u=function(){return s(v.a.resetStateTodo())},b=Object(r.c)((function(e){return e.todo})),m=b.isLoadingUpdateItem,O=b.errUpdateItem,y=b.dataUpdateItem,p=Object(n.useState)(""),g=Object(i.a)(p,2),N=g[0],I=g[1],C=Object(n.useState)("very-high"),k=Object(i.a)(C,2),w=k[0],S=k[1],A=Object(n.useState)({}),T=Object(i.a)(A,2),_=T[0],D=T[1];Object(n.useEffect)((function(){var e;null!==O?(a(),u()):y&&t&&(e=l,s(v.a.getActivityDetailRequest(e)),a(),u())}),[O,y]);var L=[{value:"very-high",label:"Very High"},{value:"high",label:"High"},{value:"normal",label:"Medium"},{value:"low",label:"Low"},{value:"very-low",label:"Very Low"}];return Object(n.useEffect)((function(){c&&(I(c.title),S(c.priority),D(L.find((function(e){return e.value===c.priority}))))}),[t]),Object(x.jsx)("div",{children:Object(x.jsxs)(h.a,{show:t,onHide:a,className:"modal-add-activity",size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,id:"ModalUpdate",children:[Object(x.jsx)(h.a.Header,{children:Object(x.jsxs)(h.a.Title,{id:"contained-modal-title-vcenter",className:"pt-4",children:[Object(x.jsx)("h4",{className:"font-weight-bold",children:"Edit Item"}),Object(x.jsx)("div",{className:"icon-close",onClick:a})]})}),Object(x.jsx)(h.a.Body,{children:Object(x.jsxs)(o.a.Group,{children:[Object(x.jsx)("label",{children:"NAMA LIST ITEM"}),Object(x.jsx)(o.a.Control,{onChange:function(e){return I(e.target.value)},placeholder:"Tambahkan nama Activity",value:N}),Object(x.jsx)("label",{children:"PRIORITY"}),Object(x.jsx)("br",{}),Object(x.jsx)(f.a,{defaultValue:L[0],formatOptionLabel:function(e){var t=e.value,a=e.label;return Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[Object(x.jsx)("div",{className:"label-indicator ".concat(t)}),Object(x.jsx)("div",{children:a})]})},options:L,className:"select-priority",onChange:function(e){return function(e){D(e),S(e.value)}(e)},value:_,id:"UpdateFormPriority"})]})}),Object(x.jsx)(h.a.Footer,{className:"pb-4",children:Object(x.jsx)("button",{className:"btn btn-primary",onClick:function(){!function(e){s(v.a.updateItemRequest(e))}({data:{title:N,priority:w,is_active:c.is_active},id:c.id})},disabled:""===N,id:"UpdateFormSubmit",children:m?Object(x.jsx)(d.a,{as:"span",animation:"border",size:"md",role:"status","aria-hidden":"true"}):"Simpan"})})]})})};t.default=function(){var e,t=Object(j.g)().todoId,a=Object(j.f)(),u=Object(n.useRef)(null),h=Object(r.b)(),f=function(e){return h(v.a.updateActivityRequest(e))},I=function(){return h(v.a.resetStateTodo())},C=Object(r.c)((function(e){return e.todo})),k=C.dataGetActivityDetail,w=C.isLoadingGetActivityDetail,S=C.dataAddItem,A=C.errAddItem,T=C.errUpdateItem,_=C.dataUpdateItem,D=Object(n.useState)(!1),L=Object(i.a)(D,2),M=L[0],R=L[1],E=Object(n.useState)(""),H=Object(i.a)(E,2),B=H[0],F=H[1],q=Object(n.useState)(!1),z=Object(i.a)(q,2),U=z[0],G=z[1],V=Object(n.useState)(!1),K=Object(i.a)(V,2),P=K[0],J=K[1],Y=Object(n.useState)("success"),Z=Object(i.a)(Y,2),W=Z[0],Q=Z[1],X=Object(n.useState)(""),$=Object(i.a)(X,2),ee=$[0],te=$[1],ae=Object(n.useState)([]),ce=Object(i.a)(ae,2),ie=ce[0],ne=ce[1],le=Object(n.useState)(!1),de=Object(i.a)(le,2),se=de[0],oe=de[1],re=Object(n.useState)(""),je=Object(i.a)(re,2),ue=je[0],be=je[1],me=Object(n.useState)(!1),Oe=Object(i.a)(me,2),ve=Oe[0],he=Oe[1],fe=Object(n.useState)(""),xe=Object(i.a)(fe,2),ye=xe[0],pe=xe[1],ge=Object(n.useState)(1),Ne=Object(i.a)(ge,2),Ie=Ne[0],Ce=Ne[1];Object(n.useEffect)((function(){if(k){var e,t=null===k||void 0===k||null===(e=k.todo_items)||void 0===e?void 0:e.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{is_active:null!==e&&void 0!==e&&e.is_active||0===(null===e||void 0===e?void 0:e.is_active)?null===e||void 0===e?void 0:e.is_active:1})}));F(null===k||void 0===k?void 0:k.title),ne(t)}}),[k]),Object(n.useEffect)((function(){_&&I()}),[_]),Object(n.useEffect)((function(){var e;null!==A&&(J(!0),Q("danger"),te(A||"Gagal menambahkan activity")),S&&(e=t,h(v.a.getActivityDetailRequest(e)),I())}),[A,S]),Object(n.useEffect)((function(){null!==T&&(J(!0),Q("danger"),te(T||"Gagal mengedit activity"))}),[T]),Object(n.useEffect)((function(){var e=ie;if(1===Ie){var t=b.a.asMutable(e).sort((function(e,t){return t.id-e.id}));ne(t)}else if(2===Ie){var a=b.a.asMutable(e).sort((function(e,t){return e.id-t.id}));ne(a)}else if(3===Ie){var c=b.a.asMutable(e).sort((function(e,t){return e.title>t.title?1:e.title<t.title?-1:0}));ne(c)}else if(4===Ie){var i=b.a.asMutable(e).sort((function(e,t){return e.title<t.title?1:e.title>t.title?-1:0}));ne(i)}else{var n=b.a.asMutable(e).sort((function(e,t){return t.is_active-e.is_active}));ne(n)}}),[Ie]);var ke=l.a.forwardRef((function(e,t){var a=e.children,c=e.onClick;return Object(x.jsx)("div",{ref:t,onClick:function(e){e.preventDefault(),c(e)},children:a})})),we=l.a.forwardRef((function(e,t){var a=e.children,c=e.style,d=e.className,s=e["aria-labelledby"],o=Object(n.useState)(""),r=Object(i.a)(o,2),j=r[0];r[1];return Object(x.jsx)("div",{ref:t,style:c,className:"".concat(d),"aria-labelledby":s,children:Object(x.jsx)("ul",{className:"list-unstyled",children:l.a.Children.toArray(a).filter((function(e){return!j||e.props.children.toLowerCase().startsWith(j)}))})})})),Se=function(){R(!M),M?f({id:t,data:{title:B}}):setTimeout((function(){var e;null===u||void 0===u||null===(e=u.current)||void 0===e||e.focus()}),100)},Ae=function(e){for(var t=[],a=0;a<ie.length;a++)ie[a].id!==e?t.push(ie[a]):t.push(Object(c.a)(Object(c.a)({},ie[a]),{},{is_active:1===ie[a].is_active?0:1}));ne(t);var i=t.find((function(t){return t.id===e})),n={title:i.data,is_active:i.is_active,priority:i.priority};!function(e){h(v.a.updateItemRequest(e))}({id:e,data:n})},Te=function(){var e;e=ue,h(v.a.deleteItemRequest(e));var t=ie.filter((function(e){return e.id!==ue}));ne(t)};return Object(x.jsx)("div",{className:"container",children:w?Object(x.jsx)("div",{className:"spinner-wrapper",children:Object(x.jsx)(d.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"todo-header",children:[Object(x.jsxs)("div",{className:"todo-title",children:[Object(x.jsx)("div",{className:"icon-back",onClick:function(){return a.push("/")},"data-cy":"todo-back-button"}),M?Object(x.jsx)("input",{type:"text",ref:u,onBlur:function(){R(!1),f({id:t,data:{title:B}})},onChange:function(e){return F(e.target.value)},value:B}):Object(x.jsx)("h1",{id:"TitleDetail","data-cy":"todo-title",onClick:Se,children:B}),Object(x.jsx)("div",{className:"icon-edit-h","data-cy":"todo-title-edit-button",onClick:Se})]}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsxs)(s.a,{children:[Object(x.jsx)(s.a.Toggle,{as:ke,id:"dropdown-custom-components",children:Object(x.jsx)("button",{id:"ButtonSort","data-cy":"todo-sort-button",className:"btn-sort",children:Object(x.jsx)("div",{className:"icon-sort"})})}),Object(x.jsxs)(s.a.Menu,{as:we,"data-cy":"sort-parent",children:[Object(x.jsx)(s.a.Item,{eventKey:"1","data-cy":"sort-selection",children:Object(x.jsxs)("div",{className:"d-flex item-label ".concat(1===Ie&&"active"),onClick:function(){return Ce(1)},"data-cy":1===Ie&&"sort-selection-selected",children:[Object(x.jsx)("div",{"data-cy":"sort-selection-icon",className:"icon-sort-newest"}),Object(x.jsx)("span",{"data-cy":"sort-selection-title",children:"Terbaru"})]})}),Object(x.jsx)(s.a.Item,{eventKey:"2",onClick:function(){return Ce(2)},"data-cy":"sort-selection",children:Object(x.jsxs)("div",{className:"d-flex item-label ".concat(2===Ie&&"active"),"data-cy":2===Ie&&"sort-selection-selected",children:[Object(x.jsx)("div",{"data-cy":"sort-selection-icon",className:"icon-sort-oldest"}),Object(x.jsx)("span",{"data-cy":"sort-selection-title",children:"Terlama"})]})}),Object(x.jsx)(s.a.Item,{eventKey:"3","data-cy":"sort-selection",children:Object(x.jsxs)("div",{className:"d-flex item-label ".concat(3===Ie&&"active"),onClick:function(){return Ce(3)},"data-cy":3===Ie&&"sort-selection-selected",children:[Object(x.jsx)("div",{"data-cy":"sort-selection-icon",className:"icon-sort-a-alpha"}),Object(x.jsx)("span",{"data-cy":"sort-selection-title",children:"A-Z"})]})}),Object(x.jsx)(s.a.Item,{eventKey:"4",onClick:function(){return Ce(4)},"data-cy":"sort-selection",children:Object(x.jsxs)("div",{className:"d-flex item-label ".concat(4===Ie&&"active"),"data-cy":4===Ie&&"sort-selection-selected",children:[Object(x.jsx)("div",{"data-cy":"sort-selection-icon",className:"icon-sort-d-alpha"}),Object(x.jsx)("span",{"data-cy":"sort-selection-title",children:"Z-A"})]})}),Object(x.jsx)(s.a.Item,{eventKey:"5",onClick:function(){return Ce(5)},"data-cy":"sort-selection",children:Object(x.jsxs)("div",{className:"d-flex item-label ".concat(5===Ie&&"active"),"data-cy":5===Ie&&"sort-selection-selected",children:[Object(x.jsx)("div",{"data-cy":"sort-selection-icon",className:"icon-sort-done"}),Object(x.jsx)("span",{"data-cy":"sort-selection-title",children:"Belum Selesai"})]})})]})]}),Object(x.jsxs)("button",{className:"btn btn-primary",onClick:function(){return G(!0)},id:"ButtonAddDetail","data-cy":"todo-add-button",children:[Object(x.jsx)("span",{className:"icon-plus"})," Tambah"]})]})]}),Object(x.jsx)("div",{className:"detail-content",children:(null===k||void 0===k||null===(e=k.todo_items)||void 0===e?void 0:e.length)<1?Object(x.jsx)("div",{className:"empty-item","data-cy":"todo-empty-state",children:Object(x.jsx)("img",{src:O,alt:"empty",id:"TextEmptyTodo",onClick:function(){return G(!0)}})}):ie.map((function(e,t){return Object(x.jsxs)("div",{className:"content-item","data-cy":"todo-item",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center form-check",children:[Object(x.jsx)(o.a.Check,{checked:0===(null===e||void 0===e?void 0:e.is_active),type:"checkbox",id:"default-".concat(e.id),onChange:function(){return Ae(e.id)},"data-cy":"todo-item-checkbox"}),Object(x.jsx)("div",{"data-cy":"todo-item-priority-indicator",className:"label-indicator ".concat(e.priority)}),Object(x.jsx)("span",{"data-cy":"todo-item-title",className:"".concat(0===(null===e||void 0===e?void 0:e.is_active)&&"todo-done"),children:e.title}),Object(x.jsx)("div",{className:"icon-edit-p",onClick:function(){return function(e){pe(e),he(!0)}(e)},"data-cy":"todo-item-edit-button"})]}),Object(x.jsx)("img",{src:m.a,alt:"delete",onClick:function(){return function(e){oe(!0),te("<p>Apakah anda yakin menghapus item <strong>\u201c".concat(null===e||void 0===e?void 0:e.title,"\u201d</strong>?</p>")),be(null===e||void 0===e?void 0:e.id)}(e)},"data-cy":"todo-item-delete-button"})]},e.id)}))}),Object(x.jsx)(y,{show:U,handleClose:function(){return G(!1)}}),Object(x.jsx)(N,{show:ve,handleClose:function(){return he(!1)},editedItem:ye}),Object(x.jsx)(p.a,{type:W,text:ee,show:P,handleClose:function(){return J(!1)}}),Object(x.jsx)(g.a,{text:ee,show:se,deletedItem:ue,handleDelete:function(){return Te()},handleClose:function(){return oe(!1)}})]})})}}}]);
//# sourceMappingURL=7.f49dc6d5.chunk.js.map