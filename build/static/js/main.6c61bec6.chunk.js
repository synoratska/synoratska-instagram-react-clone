(this["webpackJsonpreact-instagram"]=this["webpackJsonpreact-instagram"]||[]).push([[0],{45:function(e,t,a){e.exports=a(70)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),s=(a(50),a(10)),l=(a(51),a(52),a(97)),i=a(18),m=a.n(i),u=m.a.initializeApp({apiKey:"AIzaSyAzqZfYRjist1GLnW7CwMwxWMX93r-7UYQ",authDomain:"react-instagram-dc8a3.firebaseapp.com",databaseURL:"https://react-instagram-dc8a3.firebaseio.com",projectId:"react-instagram-dc8a3",storageBucket:"react-instagram-dc8a3.appspot.com",messagingSenderId:"171591726801",appId:"1:171591726801:web:d122c22cb959f2372eb7f0",measurementId:"G-3QFP0T5R5H"}).firestore(),p=m.a.auth(),d=m.a.storage();var g=function(e){var t=e.postId,a=e.user,r=e.username,o=e.caption,m=e.imageUrl,p=Object(n.useState)([]),d=Object(s.a)(p,2),g=d[0],f=d[1],h=Object(n.useState)(""),E=Object(s.a)(h,2),b=E[0],v=E[1];return Object(n.useEffect)((function(){var e;return t&&(e=u.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){f(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]),c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post__header"},c.a.createElement(l.a,{className:"post__avatar",alt:"m.synoratska",src:"/static/image/avatar/1.jpg"}),c.a.createElement("h3",null," ",r," ")),c.a.createElement("img",{className:"post__image",src:m,alt:""}),c.a.createElement("h4",{className:"post__text"},c.a.createElement("strong",null," ",r)," ",o),c.a.createElement("div",{className:"post__comments"},g.map((function(e){return c.a.createElement("p",null,c.a.createElement("strong",null,e.username)," ",e.text)}))),a&&c.a.createElement("form",{className:"post__commentBox"},c.a.createElement("input",{className:"post__input",type:"text",placeholder:"Add a comment...",value:b,onChange:function(e){return v(e.target.value)}}),c.a.createElement("button",{className:"post__button",disabled:!b,type:"submit",onClick:function(e){e.preventDefault(),u.collection("posts").doc(t).collection("comments").add({text:b,username:a.displayName,timestamp:i.firestore.FieldValue.serverTimestamp()}),v("")}},"Post")))},f=a(93),h=a(94),E=a(96),b=a(95);a(67);var v=function(e){var t=e.username,a=Object(n.useState)(null),r=Object(s.a)(a,2),o=r[0],l=r[1],m=Object(n.useState)(0),p=Object(s.a)(m,2),g=p[0],f=p[1],h=Object(n.useState)(""),E=Object(s.a)(h,2),v=E[0],_=E[1];return c.a.createElement("div",{className:"imageupload"},c.a.createElement("progress",{className:"imageupload__progress",value:g,max:"100"}),c.a.createElement("input",{type:"text",placeholder:"Enter a caption...",onChange:function(e){return _(e.target.value)},value:v}),c.a.createElement("input",{type:"file",onChange:function(e){e.target.files[0]&&l(e.target.files[0])}}),c.a.createElement(b.a,{onClick:function(){d.ref("images/".concat(o.name)).put(o).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);f(t)}),(function(e){console.log(e),alert(e.message)}),(function(){d.ref("images").child(o.name).getDownloadURL().then((function(e){u.collection("posts").add({timestamp:i.firestore.FieldValue.serverTimestamp(),caption:v,imageUrl:e,username:t}),f(0),_(""),l(null)}))}))}},"Upload"))},_=a(40);function j(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var w=Object(f.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var O=function(){var e=w(),t=Object(n.useState)(j),a=Object(s.a)(t,1)[0],r=Object(n.useState)([]),o=Object(s.a)(r,2),l=o[0],i=o[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2),f=d[0],O=d[1],y=Object(n.useState)(!1),N=Object(s.a)(y,2),S=N[0],C=N[1],k=Object(n.useState)(""),x=Object(s.a)(k,2),I=x[0],U=x[1],A=Object(n.useState)(""),B=Object(s.a)(A,2),W=B[0],D=B[1],L=Object(n.useState)(""),R=Object(s.a)(L,2),P=R[0],T=R[1],F=Object(n.useState)(null),M=Object(s.a)(F,2),z=M[0],H=M[1];return Object(n.useEffect)((function(){var e=p.onAuthStateChanged((function(e){e?(console.log(e),H(e)):H(null)}));return function(){e()}}),[z,I]),Object(n.useEffect)((function(){u.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){i(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),c.a.createElement("div",{className:"app"},c.a.createElement(h.a,{open:f,onClose:function(){return O(!1)}},c.a.createElement("div",{style:a,className:e.paper},c.a.createElement("form",{className:"app__signup"},c.a.createElement("img",{className:"app__headerImage center",src:"https://pngimage.net/wp-content/uploads/2018/06/font-instagram-png-2.png",alt:""}),c.a.createElement(E.a,{placeholder:"username",type:"text",value:I,onChange:function(e){return U(e.target.value)}}),c.a.createElement(E.a,{placeholder:"email",type:"text",value:P,onChange:function(e){return T(e.target.value)}}),c.a.createElement(E.a,{placeholder:"password",type:"password",value:W,onChange:function(e){return D(e.target.value)}}),c.a.createElement(b.a,{type:"submit",onClick:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(P,W).then((function(e){return e.user.updateProfile({displayName:I})})).catch((function(e){return alert(e.message)})),O(!1)}},"Sign Up")))),c.a.createElement(h.a,{open:S,onClose:function(){return C(!1)}},c.a.createElement("div",{style:a,className:e.paper},c.a.createElement("form",{className:"app__signup"},c.a.createElement("img",{className:"app__headerImage",src:"https://pngimage.net/wp-content/uploads/2018/06/font-instagram-png-2.png",alt:""}),c.a.createElement(E.a,{placeholder:"email",type:"text",value:P,onChange:function(e){return T(e.target.value)}}),c.a.createElement(E.a,{placeholder:"password",type:"password",value:W,onChange:function(e){return D(e.target.value)}}),c.a.createElement(b.a,{type:"submit",onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(P,W).catch((function(e){return alert(e.message)})),C(!1)}},"Sign In")))),c.a.createElement("div",{className:"app__header"},c.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"logo"}),z?c.a.createElement(b.a,{onClick:function(){return p.signOut()}},"Logout"):c.a.createElement("div",{className:"app__loginContainer"},c.a.createElement(b.a,{onClick:function(){return C(!0)}},"Sign In"),c.a.createElement(b.a,{onClick:function(){return O(!0)}},"Sign Up"))),c.a.createElement("div",{className:"app__posts"},c.a.createElement("div",{className:"app__postsLeft"},l.map((function(e){var t=e.id,a=e.post;return c.a.createElement(g,{key:t,postId:t,user:z,username:a.username,caption:a.caption,imageUrl:a.imageUrl})}))),c.a.createElement("div",{className:"app__postsRight"},c.a.createElement(_.a,{url:"https://www.instagram.com/p/CEbtKw9HbDH/",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}))),(null===z||void 0===z?void 0:z.displayName)?c.a.createElement(v,{username:z.displayName}):c.a.createElement("h3",null,"Sorry, you need to login to upload"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.6c61bec6.chunk.js.map