(this["webpackJsonpimgs-app"]=this["webpackJsonpimgs-app"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(21),i=n.n(a),r=n(12),s=n(42),o=n(10),j=n(27),l=n.n(j),d=n(38),b="Images Added",u="Loading Images",O="Images Loaded",h="Favorite added",m="Favorite unliked",x="Favorite Active",p="Modal Is Open",f="Modal is closed",g=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,a,i,r,s,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,c="https://pixabay.com/api/?key=19430133-bf2d5057c513c4dafc3ac31f8&q=".concat(t,"&per_page=12&page=").concat(n),e.next=4,fetch(c);case 4:return a=e.sent,e.next=7,a.json();case 7:return i=e.sent,r=i.hits,s=r.map((function(e){return{id:e.id,likes:e.likes,previewURL:e.previewURL,largeImageURL:e.largeImageURL,tags:e.tags,views:e.views,user:e.user,userImg:e.userImageURL,type:e.type}})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(c){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e,t);case 2:a=n.sent,c(y(a));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(e){return{type:b,payload:e}},w=function(){return{type:u}},I=n(61),N=n.n(I),C=n(132),k=n(2),F={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};N.a.setAppElement("#root");var R=Object(C.a)({imgContainer:{width:"500px",height:"100%",overflow:"hidden"},img:{objectFit:"cover",width:"100%",height:"100%"},imgUserContainer:{width:"50px",height:"50px",overflow:"hidden",borderRadius:"100px"},contentContaier:{display:"flex",flexDirection:"row"},contentItem:{flex:"1"},textEnd:{textAlign:"end"}}),E=function(){var e=R(),t=Object(r.c)((function(e){return e.ui})).isOpen,n=Object(r.c)((function(e){return e.favorites})).active,c=Object(r.b)();return Object(k.jsx)("div",{children:Object(k.jsxs)(N.a,{isOpen:t,onRequestClose:function(){c({type:f})},style:F,contentLabel:"Example Modal",closeTimeoutMS:200,children:[Object(k.jsx)("div",{className:e.imgContainer,children:Object(k.jsx)("img",{className:e.img,src:n.largeImageURL,alt:n.tags})}),Object(k.jsxs)("div",{className:e.contentContaier,children:[Object(k.jsx)("div",{className:e.imgUserContainer,children:Object(k.jsx)("img",{className:e.img,src:n.userImg,alt:"user"})}),Object(k.jsxs)("p",{children:[" ",n.user]})]}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:e.contentContaier,children:[Object(k.jsxs)("p",{className:e.contentItem,children:["likes: ",n.likes]}),Object(k.jsx)("hr",{}),Object(k.jsxs)("p",{className:e.contentItem,children:["views: ",n.views]})]}),Object(k.jsxs)("div",{className:e.contentContaier,children:[Object(k.jsxs)("p",{className:e.contentItem,children:["tags: ",n.tags]}),Object(k.jsx)("hr",{}),Object(k.jsxs)("p",{className:e.contentItem,children:["type: ",n.type]})]})]})})},L=n(133),U=n(139),A=n(145),S=n(134),_=n(135),B=n(136),D=n(137),M=n(138),T=n(74),q=n.n(T),J=n(51),X=n.n(J),z=Object(C.a)({icon:{color:"white"},image:{objectFit:"cover",width:"100%",height:"100%"},imageContainer:{width:"100%",height:"400px",overflow:"hidden"},root:{width:"250px"}}),G=function(e){var t=e.data,n=z(),c=Object(r.b)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(L.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(k.jsx)(A.a,{m:1,children:Object(k.jsxs)(S.a,{className:n.root,children:[Object(k.jsx)(_.a,{children:Object(k.jsx)(B.a,{component:"img",alt:t.tags,height:"250",image:t.previewURL})}),Object(k.jsxs)(D.a,{children:[Object(k.jsx)(M.a,{"aria-label":"favorite",onClick:function(){var e;c((e=t.id,{type:m,payload:e}))},children:Object(k.jsx)(X.a,{color:"secondary"})}),Object(k.jsx)(M.a,{"aria-label":"view",onClick:function(){c({type:x,payload:t}),c({type:p})},children:Object(k.jsx)(q.a,{})})]})]})})})})},H=Object(C.a)((function(){return{noFav:{display:"flex",alignItems:"center",justifyContent:"center"},parr:{fontSize:"150px"}}})),P=function(){var e=H(),t=Object(r.c)((function(e){return e.favorites})).favorites;return Object(k.jsx)(k.Fragment,{children:t.length?Object(k.jsx)(L.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:Object(k.jsx)(U.a,{children:t.map((function(e){return Object(k.jsx)(G,{data:e},e.id)}))})}):Object(k.jsx)("div",{className:e.noFav,children:Object(k.jsx)("p",{className:e.parr,children:"No hay favs"})})})},V=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(E,{}),Object(k.jsx)(P,{})]})},K=n(32),Q=n(146),W=n(142),Y=n(147),Z=n(149),$=n(76),ee=n.n($),te=n(148),ne=n(53),ce=n(9),ae=n(140),ie=n(141),re=n(75),se=n.n(re),oe=Object(C.a)({icon:{color:"white"},image:{objectFit:"cover",width:"100%",height:"100%"},imageContainer:{width:"100%",height:"400px",overflow:"hidden"}}),je=function(e){var t=e.data,n=oe(),a=Object(r.c)((function(e){return e.favorites})).favorites,i=Object(c.useState)(!1),s=Object(K.a)(i,2),o=s[0],j=s[1],l=Object(r.b)(),d=function(){l({type:h,payload:t}),j(!0)};return Object(c.useEffect)((function(){a.forEach((function(e){e.id===t.id&&j(!0)}))}),[a,t.id]),Object(k.jsx)(L.a,{item:!0,xs:12,sm:6,md:3,children:Object(k.jsx)(A.a,{m:.5,children:Object(k.jsxs)(ae.a,{children:[Object(k.jsx)("div",{className:n.imageContainer,children:Object(k.jsx)("img",{src:t.previewURL,alt:t.tags,className:n.image})}),Object(k.jsx)(ie.a,{subtitle:Object(k.jsxs)("span",{children:["by: ",t.user]}),actionIcon:o?Object(k.jsx)(M.a,{disabled:!0,"aria-label":"favorite",onClick:d,children:Object(k.jsx)(X.a,{color:"secondary"})}):Object(k.jsx)(M.a,{disabled:!1,"aria-label":"favorite",onClick:d,children:Object(k.jsx)(se.a,{className:n.icon})})})]},t.id)})})},le=function(){var e=Object(r.c)((function(e){return e.imgs})).imgs;return Object(k.jsx)(L.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:Object(k.jsx)(U.a,{children:e.map((function(e){return Object(k.jsx)(je,{data:e},e.id)}))})})},de=Object(C.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"center"}},form:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"25px",marginBottom:"25px"}}})),be=function(){var e=de(),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(K.a)(t,2),a=n[0],i=n[1];return[a,function(e){var t=e.target;i(Object(ce.a)(Object(ce.a)({},a),{},Object(ne.a)({},t.name,t.value)))},function(){i(e)}]}({category:""}),n=Object(K.a)(t,2),a=n[0],i=n[1],s=a.category,o=Object(r.b)();return Object(k.jsxs)("div",{children:[Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s&&o(v(s))},className:e.form,children:[Object(k.jsx)(te.a,{htmlFor:"input-with-icon-adornment",children:"Buscar algo"}),Object(k.jsx)(Y.a,{id:"input-with-icon-adornment",name:"category",value:s,onChange:i,startAdornment:Object(k.jsx)(Z.a,{position:"start",children:Object(k.jsx)(ee.a,{})})}),Object(k.jsx)(W.a,{type:"submit",variant:"contained",color:"primary",children:"Buscar"})]}),Object(k.jsx)("div",{children:Object(k.jsx)(le,{})}),Object(k.jsx)("div",{className:e.root,children:Object(k.jsx)(Q.a,{count:10,color:"primary",onChange:function(e,t){o(v(s,t))}})})]})},ue=n(143),Oe=n(144),he=Object(C.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},toolBar:{display:"flex",justifyContent:"space-between"},list:{listStyle:"none",display:"flex",flexDirection:"row"},listItem:{margin:"5px",color:"white"},listItemA:{textDecoration:"none",color:"white"}}})),me=function(){var e=he();return Object(k.jsx)("div",{className:e.root,children:Object(k.jsx)(ue.a,{position:"static",children:Object(k.jsxs)(Oe.a,{className:e.toolBar,children:[Object(k.jsx)("div",{children:Object(k.jsxs)("ul",{className:e.list,children:[Object(k.jsx)("li",{className:e.listItem,children:Object(k.jsx)(s.b,{className:e.listItemA,to:"/",children:"Home"})}),Object(k.jsx)("li",{className:e.listItem,children:Object(k.jsx)(s.b,{className:e.listItemA,to:"/favorites",children:"Favorites"})})]})}),Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:"ImgApp"})})]})})})},xe=function(){var e=Object(r.b)();return Object(c.useEffect)((function(){e(function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("");case 2:n=e.sent,t(w()),t(y(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(k.jsxs)(s.a,{children:[Object(k.jsx)(me,{}),Object(k.jsxs)(o.d,{children:[Object(k.jsx)(o.b,{exact:!0,path:"/",component:be}),Object(k.jsx)(o.b,{exact:!0,path:"/favorites",component:V}),Object(k.jsx)(o.a,{to:"/"})]})]})},pe=n(43),fe=n(77),ge=n(78),ve={favorites:[],active:""},ye={imgs:[],active:null,loading:!0},we={isOpen:!1,loading:!1},Ie="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,Ne=Object(pe.b)({imgs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(ce.a)(Object(ce.a)({},e),{},{imgs:t.payload});case u:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!0});case O:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!1});default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(ce.a)(Object(ce.a)({},e),{},{favorites:[].concat(Object(ge.a)(e.favorites),[t.payload])});case m:return Object(ce.a)(Object(ce.a)({},e),{},{favorites:e.favorites.filter((function(e){return e.id!==t.payload}))});case x:return Object(ce.a)(Object(ce.a)({},e),{},{active:t.payload});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(ce.a)(Object(ce.a)({},e),{},{isOpen:!0});case f:return Object(ce.a)(Object(ce.a)({},e),{},{isOpen:!1});default:return e}}}),Ce=Object(pe.d)(Ne,Ie(Object(pe.a)(fe.a))),ke=function(){return Object(k.jsx)(r.a,{store:Ce,children:Object(k.jsx)(xe,{})})};i.a.render(Object(k.jsx)(ke,{}),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.cf0065e9.chunk.js.map