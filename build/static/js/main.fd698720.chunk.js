(this["webpackJsonpgka-dashboard"]=this["webpackJsonpgka-dashboard"]||[]).push([[0],{169:function(e,t,a){},187:function(e,t,a){e.exports=a(407)},192:function(e,t,a){},398:function(e,t){},401:function(e,t,a){},404:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(192),a(193),a(194),a(195),a(46)),s=a(74),i=a.n(s),m=a(20),u=a.n(m),d=function(e){e?u.a.defaults.headers.common.Authorization=e:delete u.a.defaults.headers.common.Authorization},p=function(e){return{type:"SET_CURRENT_USER",payload:e}},g=function(){return function(e){localStorage.removeItem("jwtToken"),localStorage.removeItem("userID"),d(!1),e(p({}))}},f=a(37),E=a(45),h=a(171),b=a(28);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=a(218),w={isAuthenticated:!1,user:{},loading:!1},N={},j=Object(E.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return y({},e,{isAuthenticated:!O(t.payload),user:t.payload});case"USER_LOADING":return y({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),C=[h.a],k=Object(E.e)(j,{},Object(E.d)(E.a.apply(void 0,C))),x=a(30),S=a(31),D=a(33),A=a(32),P=a(34),L=a(2),R=function(e){function t(){return Object(x.a)(this,t),Object(D.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props.onLinkClick;return r.a.createElement("div",{className:"white-skin"},r.a.createElement(L.z,{className:"side-nav-logo",logo:"/assets/logo/GKA-Dashboard-Logo.svg",fixed:!0},r.a.createElement(L.B,null,r.a.createElement(L.A,{topLevel:!0,to:"/properties",onClick:e},r.a.createElement(L.l,{icon:"th-large mr-2"}),"Properties"),r.a.createElement(L.A,{topLevel:!0,to:"/communities",onClick:e},r.a.createElement(L.l,{icon:"th-large mr-2"}),"Communities"),r.a.createElement(L.A,{topLevel:!0,to:"/xml-station",onClick:e},r.a.createElement(L.l,{icon:"th-large mr-2"}),"XML Station"))))}}]),t}(r.a.Component),z=a(23),T=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(D.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,null,r.a.createElement(L.t,{className:"flexible-MDBNavbar",scrolling:!0,fixed:"top",style:{zIndex:3}},r.a.createElement(L.u,{expand:"sm",right:!0,style:{flexDirection:"row"}},r.a.createElement(L.h,null,r.a.createElement(L.k,{nav:!0,caret:!0},r.a.createElement(L.l,{icon:"user"})," ",r.a.createElement("span",{className:"d-none d-md-inline"},"Profile")),r.a.createElement(L.j,{right:!0,style:{minWidth:"200px"}},r.a.createElement(L.i,{href:"#!",onClick:this.onLogoutClick},"Log Out"),r.a.createElement(L.i,{href:"#!"},"My Account"))))))}}]),t}(n.Component),I=Object(f.b)((function(e){return{auth:e.auth}}),{logoutUser:g})(T),U=a(183),_=Object(f.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(U.a)(e,["component","auth"]);return r.a.createElement(o.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(o.a,{to:"/login"})}}))})),M=a(22),W=a(77),F=a.n(W),G=(a(401),function(e){return r.a.createElement(L.o,{isOpen:e.deleteModal,toggle:e.toggle,className:"property-modal"},r.a.createElement(L.p,null,r.a.createElement("form",{onSubmit:function(t){return a=t,n=e.idDelete,a.preventDefault(),void u.a.delete("http://localhost:5000/properties/"+n).then((function(t){console.log(t.data),e.toggle()}));var a,n}},r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement("h6",{className:"mb-3"},"Are you sure?"),r.a.createElement(L.b,{color:"cyan",onClick:e.cancel},"Cancel"),r.a.createElement(L.b,{color:"cyan",type:"submit"},"Delete")))))}),B=function(e){return r.a.createElement(L.o,{isOpen:e.editAddModal,toggle:e.toggle,className:"property-modal"},r.a.createElement(L.p,null,r.a.createElement("form",{onSubmit:function(t){return t.preventDefault(),void(void 0===e.property._id?u.a.post("/properties/"+localStorage.userID+"/add",e.property).then((function(t){console.log(t.data),e.toggle()})):u.a.put("/properties/update/"+e.property._id,e.property).then((function(t){console.log(t.data),e.toggle()})))}},r.a.createElement(L.m,{label:"Property Name",containerClass:"form-sm",value:e.property.name,onChange:e.onChange}),r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(L.b,{color:"cyan",type:"submit"},"Save")))))},q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.f,{className:"col-custom property-list"},r.a.createElement(L.c,{wide:!0},r.a.createElement(L.D,{waves:!0,cascade:!0,hover:!0},r.a.createElement("img",{src:"/assets/listingImg.jpg",className:"img-fluid",alt:e.property.name}),r.a.createElement(L.n,{overlay:"white-slight",tag:"a"})),r.a.createElement(L.d,{className:"",cascade:!0},r.a.createElement(L.e,{tag:"h5",className:"property-name"},e.property.name),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement("button",{className:"icon-btn text-grey",onClick:e.deleteOnClick},r.a.createElement(L.l,{icon:"trash-alt"}))),r.a.createElement("div",null,r.a.createElement("button",{className:"icon-btn text-grey",onClick:e.editOnClick},r.a.createElement(L.l,{icon:"edit"}))))))))};function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Y=function(){var e=F()("http://localhost:5000"),t=Object(n.useState)(!1),a=Object(M.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),s=Object(M.a)(o,2),i=s[0],m=s[1],d=Object(n.useState)(""),p=Object(M.a)(d,2),g=p[0],f=p[1],E=Object(n.useState)([]),h=Object(M.a)(E,2),v=h[0],y=h[1],O=Object(n.useState)({}),w=Object(M.a)(O,2),N=w[0],j=w[1],C=function(){u.a.get("/properties/"+localStorage.userID).then((function(e){y(e.data)})).catch((function(e){console.log(e)}))};e.on("dbModified",(function(){C()})),Object(n.useEffect)((function(){C()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement(L.x,null,v.map((function(e){return r.a.createElement(q,{property:e,key:e._id,deleteOnClick:function(){m(!i),f(e._id)},editOnClick:function(){return j(e),void c(!l)}})})))),r.a.createElement("section",null,r.a.createElement(L.b,{floating:!0,tag:"a",className:"add-property-btn bg-blue",onClick:function(){c(!l),j("")}},r.a.createElement(L.l,{icon:"plus"})),r.a.createElement(B,{editAddModal:l,toggle:function(){return c(!l)},property:N,onChange:function(e){return j(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},N,{name:e.target.value}))}}),r.a.createElement(G,{deleteModal:i,toggle:function(){return m(!i)},idDelete:g,cancel:function(){m(!1),f("empty")}})))},K=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.f,{className:"col-custom property-list"},r.a.createElement(L.c,{wide:!0},r.a.createElement(L.D,{waves:!0,cascade:!0,hover:!0},r.a.createElement("img",{src:"/assets/listingImg.jpg",className:"img-fluid",alt:"Test"}),r.a.createElement(L.n,{overlay:"white-slight",tag:"a"})),r.a.createElement(L.d,{className:"",cascade:!0},r.a.createElement(L.e,{tag:"h5",className:"property-name"},e.community.communityName),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement("button",{className:"icon-btn text-grey",onClick:e.deleteOnClick},r.a.createElement(L.l,{icon:"trash-alt"}))),r.a.createElement("div",null,r.a.createElement("button",{className:"icon-btn text-grey",onClick:e.editOnClick},r.a.createElement(L.l,{icon:"edit"}))))))))},V=a(114),J=a(185),X=(a(402),a(403),a(1)),Z=a.n(X),$=function(e){var t=Object(n.useState)(!0),a=Object(M.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)({}),s=Object(M.a)(o,2),i=s[0],m=s[1],d=Object(n.useState)(2),p=Object(M.a)(d,2),g=p[0],f=p[1],E=Object(n.useState)([]),h=Object(M.a)(E,2),b=h[0],v=h[1],y=Object(n.useState)([{checked:!0,text:"MD",value:"MD"},{text:"VA",value:"VA"}]),O=Object(M.a)(y,2),w=O[0];O[1];return Object(n.useEffect)((function(){v(e.community.gallery),e.community._id?c(!1):c(!0)}),[e]),r.a.createElement(L.o,{isOpen:e.editAddModal,toggle:e.toggle,size:"fluid",className:"editAddModal"},r.a.createElement(L.p,null,r.a.createElement(L.q,{tabs:!0,className:"nav-justified modalNav"},r.a.createElement(L.r,null,r.a.createElement(L.s,{to:"#",activeClassName:"false",active:1===g,onClick:function(){return f(1)},role:"tab"},r.a.createElement(L.l,{icon:"home"})," Basic")),r.a.createElement(L.r,null,r.a.createElement(L.s,{to:"#",activeClassName:"false",active:2===g,disabled:l,onClick:function(){return f(2)},role:"tab"},r.a.createElement(L.l,{icon:"images"})," Images")),r.a.createElement(L.r,null,r.a.createElement(L.s,{to:"#",activeClassName:"false",active:3===g,disabled:l,onClick:function(){return f(3)},role:"tab"},r.a.createElement(L.l,{icon:"envelope"})," Attachment"))),r.a.createElement("div",{className:"content card d-flex flex-column"},r.a.createElement("form",{id:"modalForm",className:"flex-grow-1",onSubmit:function(t){return(a=t).preventDefault(a),void u.a.put("/communities/update/"+e.community._id,e.community).then((function(t){console.log(t.data),e.toggle()}));var a},autoComplete:"off"},1===g&&r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 input-wrap"},r.a.createElement(L.m,{label:"Community Name*",id:"communityName",containerClass:Z()("form-sm",{invalid:i.communityName}),value:e.community.communityName,onChange:e.onChange,autoComplete:"new-password"}),r.a.createElement("div",{className:"error-message"},i.communityName))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 divider"},r.a.createElement("hr",null),r.a.createElement("h6",null,"Community Location"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 input-wrap"},r.a.createElement(L.m,{label:"Street Address 1*",id:"streetAddress1",containerClass:Z()("form-sm",{invalid:i.streetAddress1}),value:e.community.address.streetAddress1,onChange:e.onChange,autoComplete:"new-password"}),r.a.createElement("div",{className:"error-message"},i.streetAddress1)),r.a.createElement("div",{className:"col-md-6 input-wrap"},r.a.createElement(L.m,{label:"Street Address 2",id:"streetAddress2",containerClass:"form-sm",value:e.community.address.streetAddress2,onChange:e.onChange,autoComplete:"new-password"})),r.a.createElement("div",{className:"col-md-4 input-wrap"},r.a.createElement(L.m,{label:"City*",id:"city",containerClass:Z()("form-sm",{invalid:i.city}),value:e.community.address.city,onChange:e.onChange,autoComplete:"new-password"}),r.a.createElement("div",{className:"error-message"},i.city)),r.a.createElement("div",{className:"col-md-4 input-wrap"},r.a.createElement(L.y,{options:w,id:"state",className:Z()("form-sm",{invalid:i.state}),selected:"Choose your state*",label:"State",getTextContent:e.handleStateChange,value:e.community.address.state}),r.a.createElement("div",{className:"error-message"},i.state)),r.a.createElement("div",{className:"col-md-4 input-wrap"},r.a.createElement(L.m,{label:"Zip*",id:"zip",containerClass:Z()("form-sm",{invalid:i.zip}),value:e.community.address.zip,onChange:e.onChange,autoComplete:"new-password"}),r.a.createElement("div",{className:"error-message"},i.zip))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 input-wrap"},r.a.createElement(L.m,{label:"Latitude*",id:"latitude",containerClass:Z()("form-sm",{invalid:i.latitude}),value:e.community.address.latitude,onChange:e.onChange,autoComplete:"new-password"}),r.a.createElement("div",{className:"error-message"},i.latitude)),r.a.createElement("div",{className:"col-md-4 input-wrap"},r.a.createElement(L.m,{label:"Longitude*",id:"longitude",containerClass:Z()("form-sm",{invalid:i.longitude}),value:e.community.address.longitude,onChange:e.onChange,autoComplete:"new-password"}),r.a.createElement("div",{className:"error-message"},i.longitude))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 divider"},r.a.createElement("hr",null),r.a.createElement("h6",null,"Community Sales Contact Info"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 input-wrap"},r.a.createElement(L.m,{label:"Email*",id:"email",containerClass:Z()("form-sm",{invalid:i.email}),value:e.community.salesAgent.email,onChange:e.onChange,autoComplete:"new-password"}),r.a.createElement("div",{className:"error-message"},i.email)),r.a.createElement("div",{className:"col-md-3 input-wrap"},r.a.createElement(L.m,{label:"Phone Number",id:"phoneNumber",containerClass:Z()("form-sm",{invalid:i.phoneNumber}),value:e.community.salesAgent.phoneNumber,onChange:e.onChange,autoComplete:"new-password"}),r.a.createElement("div",{className:"error-message"},i.phoneNumber))))),2===g&&r.a.createElement(J.a,{onDrop:function(t){return function(t){t=t.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})),v([].concat(Object(V.a)(b),Object(V.a)(t)));var a=new FormData;t.forEach((function(e){a.append("images",e)})),u.a.post("/upload/"+localStorage.userID+"/"+e.community._id,a).then((function(e){console.log(e)}))}(t)}},(function(e){var t=e.getRootProps;e.getInputProps;return r.a.createElement("div",Object.assign({},t(),{className:"h-100 dropZone"}),r.a.createElement("div",{className:"row align-items-center"},b.map((function(e,t){return r.a.createElement("div",{className:"col-md-1",key:t},r.a.createElement("div",null,r.a.createElement("img",{src:e.preview?e.preview:e.location,className:"img-fluid w-100"})))}))))})),1!==g&&r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(L.b,{type:"submit",form:"modalForm",className:"bg-blue"},"Save")),1===g&&r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(L.b,{id:"initialize",className:"bg-blue",onClick:function(t){return(a=t).preventDefault(a),void u.a.post("/communities/"+localStorage.userID+"/add",e.community).then((function(e){console.log(e.data),c(!1),f(2)})).catch((function(e){m(e.response.data)}));var a}},"Next")))))},Q=function(e){return r.a.createElement(L.o,{isOpen:e.isOpen,toggle:e.toggle,className:"property-modal"},r.a.createElement(L.p,null,r.a.createElement("form",{onSubmit:function(t){return a=t,n=e.idDelete,a.preventDefault(),void u.a.delete("/communities/"+n).then((function(t){console.log(t.data),e.toggle()}));var a,n}},r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement("h6",{className:"mb-3"},"Are you sure?"),r.a.createElement(L.b,{color:"cyan",onClick:e.cancel},"Cancel"),r.a.createElement(L.b,{color:"cyan",type:"submit"},"Delete")))))};function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var te=function(){var e=F()("http://localhost:5000"),t=Object(n.useState)(!1),a=Object(M.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),s=Object(M.a)(o,2),i=s[0],m=s[1],d=Object(n.useState)(""),p=Object(M.a)(d,2),g=p[0],f=p[1],E=Object(n.useState)([]),h=Object(M.a)(E,2),v=h[0],y=h[1],O=Object(n.useState)({communityName:"Community Name",address:{streetAddress1:"Street Address 1",streetAddress2:String,city:"Rockville",state:String,zip:"22182",latitude:"39.0477476",longitude:"-77.1272527"},salesAgent:{email:"test@test.com",phoneNumber:"3016578855"}}),w=Object(M.a)(O,2),N=w[0],j=w[1],C=function(){u.a.get("/communities/"+localStorage.userID).then((function(e){y(e.data)})).catch((function(e){console.log(e)}))};return e.on("dbModified",(function(){C()})),Object(n.useEffect)((function(){C()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement(L.x,null,v.map((function(e){return r.a.createElement(K,{community:e,key:e._id,deleteOnClick:function(){m(!i),f(e._id)},editOnClick:function(){j(e),c(!l)}})})))),r.a.createElement("section",null,r.a.createElement(L.b,{floating:!0,tag:"a",className:"add-property-btn bg-blue",onClick:function(){c(!l),j("")}},r.a.createElement(L.l,{icon:"plus"})),r.a.createElement($,{editAddModal:l,toggle:function(){return c(!l)},community:N,onChange:function(e){return j(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},N,Object(b.a)({},e.target.id,e.target.value)))},handleStateChange:function(e){return function(e){console.log(e)}(e)}}),r.a.createElement(Q,{isOpen:i,toggle:function(){return m(!i)},idDelete:g,cancel:function(){m(!i),f("empty")}})))},ae=function(){return r.a.createElement(r.a.Fragment,null,"XML Station")},ne=function(){return r.a.createElement("h1",{className:"text-center"},"404")},re=function(e){function t(){return Object(x.a)(this,t),Object(D.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(o.d,null,r.a.createElement(_,{path:"/home",exact:!0,component:te}),r.a.createElement(_,{path:"/properties",exact:!0,component:Y}),r.a.createElement(_,{path:"/communities",exact:!0,component:te}),r.a.createElement(_,{path:"/xml-station",exact:!0,component:ae}),r.a.createElement(_,{component:ne}))}}]),t}(r.a.Component);function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var oe=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(D.a)(this,Object(A.a)(t).call(this,e))).handleResize=function(){a.setState({windowWidth:window.innerWidth})},a.toggleSideNav=function(){a.state.windowWidth<a.state.breakWidth&&a.setState({sideNavToggled:!a.state.sideNavToggled})},a.state={toggle:!1,windowWidth:0,currentPage:"",sideNavToggled:!1,breakWidth:1400},a}return Object(P.a)(t,e),Object(S.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){this.props.location.pathname,e.location.pathname}},{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e={paddingLeft:this.state.windowWidth>this.state.breakWidth?"240px":"0"};return r.a.createElement("div",{className:"app"},r.a.createElement("div",null,r.a.createElement(R,null)),r.a.createElement("div",null,r.a.createElement(I,null)),r.a.createElement("main",{style:ce({},e,{margin:"6rem 2%"})},r.a.createElement(re,null)))}}]),t}(n.Component),se=(a(169),function(e){function t(){var e;return Object(x.a)(this,t),(e=Object(D.a)(this,Object(A.a)(t).call(this))).onChange=function(t){e.setState(Object(b.a)({},t.target.id,t.target.value))},e.handleLoginSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"test@test.com",password:"123456",errors:{}},e}return Object(P.a)(t,e),Object(S.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/home"),e.errors&&this.setState({errors:e.errors})}},{key:"UNSAFE_componentWillMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/home")}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"classic-form-page",id:"login"},r.a.createElement(L.D,null,r.a.createElement(L.n,{className:"d-flex justify-content-center align-items-center",overlay:"stylish-strong"},r.a.createElement(L.g,null,r.a.createElement(L.x,{className:"justify-content-around"},r.a.createElement(L.f,{md:"3",className:"align-self-center"},r.a.createElement("img",{src:"/assets/logo/GKA-Dashboard-Logo-Login.svg",className:"img-fluid",alt:"Gka Dashboard"})),r.a.createElement(L.f,{md:"6"},r.a.createElement(L.c,null,r.a.createElement(L.d,null,r.a.createElement("div",{className:"form-header gka-gradient"},r.a.createElement("h3",{className:"m-0"},r.a.createElement(L.l,{icon:"user",className:"mt-2 mb-2 mr-3 text-white"}),"Log in")),r.a.createElement("form",{onSubmit:this.handleLoginSubmit,noValidate:!0},r.a.createElement(L.x,null,r.a.createElement(L.f,{sm:"12"},r.a.createElement(L.m,{autoFocus:!0,type:"email",id:"email",label:"Your email",icon:"user",iconClass:"white-text",containerClass:Z()("form-sm",{invalid:e.email||e.passwordincorrect||e.emailnotfound}),value:this.state.email,onChange:this.onChange}),r.a.createElement("div",{className:"error-message"},e.email,e.emailnotfound,e.passwordincorrect)),r.a.createElement(L.f,{sm:"12"},r.a.createElement(L.m,{type:"password",id:"password",label:"Your password",icon:"lock",iconClass:"white-text",containerClass:Z()("form-sm",{invalid:e.password||e.passwordincorrect}),value:this.state.password,onChange:this.onChange}),r.a.createElement("div",{className:"error-message"},e.password,e.passwordincorrect))),r.a.createElement("div",{className:"text-center mt-3 black-text"},r.a.createElement(L.b,{className:"gka-gradient",size:"lg",type:"submit"},"Log In"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"inline-ul text-center d-flex justify-content-center"},r.a.createElement("a",{href:"!#"},r.a.createElement(L.l,{fab:!0,icon:"twitter",size:"lg",className:"p-2 m-2  white-text"})),r.a.createElement("a",{href:"!#"},r.a.createElement(L.l,{fab:!0,icon:"linkedin",size:"lg",className:"p-2 m-2 white-text"})," "),r.a.createElement("a",{href:"!#"},r.a.createElement(L.l,{fab:!0,icon:"instagram",size:"lg",className:"p-2 m-2 white-text"}))),r.a.createElement("div",{className:"text-center text-white"},"Don\u2019t have an account? ",r.a.createElement(z.b,{to:"/register",className:"text-white"},r.a.createElement("u",null,"Sign up")))))))))))}}]),t}(n.Component)),ie=Object(f.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){u.a.post("/users/login",e).then((function(e){var a=e.data,n=a.token,r=a.userID;localStorage.setItem("jwtToken",n),localStorage.setItem("userID",r),d(n);var l=i()(n);t(p(l))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(se),me=function(e){function t(){var e;return Object(x.a)(this,t),(e=Object(D.a)(this,Object(A.a)(t).call(this))).onChange=function(t){e.setState(Object(b.a)({},t.target.id,t.target.value))},e.registerHandler=function(t){t.preventDefault(),console.log("Handled");var a={email:e.state.email,password:e.state.password,password2:e.state.password2,companyName:e.state.companyName,gkaToken:e.state.gkaToken};e.props.registerUser(a,e.props.history)},e.state={email:"test1@test.com",password:"123456",password2:"123456",companyName:"Gka advertising",gkaToken:"kwHp28GeEMWwT8vqfrEF",errors:{}},e}return Object(P.a)(t,e),Object(S.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"classic-form-page",id:"register"},r.a.createElement(L.D,null,r.a.createElement(L.n,{className:"d-flex justify-content-center",overlay:"stylish-strong"},r.a.createElement(L.g,null,r.a.createElement(L.x,null,r.a.createElement(L.f,{md:"2",className:"logo"},r.a.createElement("img",{src:"/assets/logo/GKA-Dashboard-Logo-Login.svg",className:"img-fluid",alt:"Gka Dashboard"}))),r.a.createElement(L.x,{className:"justify-content-around"},r.a.createElement(L.f,{md:"12"},r.a.createElement(L.c,null,r.a.createElement(L.d,null,r.a.createElement("div",{className:"form-header gka-gradient"},r.a.createElement("h3",{className:"m-0"},r.a.createElement(L.l,{icon:"user",className:"mt-2 mb-2 mr-3 text-white"}),"Sign Up")),r.a.createElement("form",{onSubmit:this.registerHandler},r.a.createElement(L.x,null,r.a.createElement(L.f,{md:"4"},r.a.createElement(L.m,{autoFocus:!0,type:"email",id:"email",label:"Your email",icon:"user",iconClass:"white-text",containerClass:Z()("form-sm",{invalid:e.email}),value:this.state.email,onChange:this.onChange,required:!0}),r.a.createElement("div",{className:"error-message"},e.email)),r.a.createElement(L.f,{md:"4"},r.a.createElement(L.m,{type:"password",id:"password",label:"Your password",icon:"lock",iconClass:"white-text",containerClass:Z()("form-sm",{invalid:e.password}),value:this.state.password,onChange:this.onChange,required:!0}),r.a.createElement("div",{className:"error-message"},e.password)),r.a.createElement(L.f,{md:"4"},r.a.createElement(L.m,{type:"password",id:"password2",label:"Confirm password",icon:"lock",iconClass:"white-text",containerClass:Z()("form-sm",{invalid:e.password2}),value:this.state.password2,onChange:this.onChange}),r.a.createElement("div",{className:"error-message"},e.password2)),r.a.createElement(L.f,{md:"4"},r.a.createElement(L.m,{type:"text",id:"companyName",label:"Company name",icon:"briefcase",iconClass:"white-text",containerClass:Z()("form-sm",{invalid:e.companyName}),value:this.state.companyName,onChange:this.onChange}),r.a.createElement("div",{className:"error-message"},e.companyName)),r.a.createElement(L.f,{md:"4"},r.a.createElement(L.m,{type:"text",id:"gkaToken",label:"Gka Token",icon:"dollar-sign",iconClass:"white-text",containerClass:Z()("form-sm",{invalid:e.gkaToken}),value:this.state.gkaToken,onChange:this.onChange}),r.a.createElement("div",{className:"error-message"},e.gkaToken))),r.a.createElement("div",{className:"text-center mt-3 black-text"},r.a.createElement(L.b,{className:"gka-gradient",size:"lg",type:"submit"},"Sign Up"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"inline-ul text-center d-flex justify-content-center"},r.a.createElement("a",{href:"!#"},r.a.createElement(L.l,{fab:!0,icon:"twitter",size:"lg",className:"p-2 m-2  white-text"})),r.a.createElement("a",{href:"!#"},r.a.createElement(L.l,{fab:!0,icon:"linkedin",size:"lg",className:"p-2 m-2 white-text"})," "),r.a.createElement("a",{href:"!#"},r.a.createElement(L.l,{fab:!0,icon:"instagram",size:"lg",className:"p-2 m-2 white-text"}))),r.a.createElement("div",{className:"text-center text-white"},"Already have an account? ",r.a.createElement(z.b,{to:"/login",className:"text-white"},r.a.createElement("u",null,"Log In")))))))))))}}]),t}(n.Component),ue=Object(f.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){u.a.post("/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(o.g)(me));a(404),a(405),a(406);if(localStorage.jwtToken){var de=localStorage.jwtToken;d(de);var pe=i()(de);k.dispatch(p(pe));var ge=Date.now()/1e3;pe.exp<ge&&(k.dispatch(g()),window.location.href="./login")}var fe=function(){return r.a.createElement(f.a,{store:k},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0,component:ie}),r.a.createElement(o.b,{path:"/login",exact:!0,component:ie}),r.a.createElement(o.b,{path:"/register",exact:!0,component:ue}),r.a.createElement(oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(26),he=Object(Ee.a)();c.a.render(r.a.createElement(o.c,{history:he},r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[187,1,2]]]);
//# sourceMappingURL=main.fd698720.chunk.js.map