(this["webpackJsonpuse-offline-captcha-example"]=this["webpackJsonpuse-offline-captcha-example"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=(n(10),n(2)),l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function u(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],o=0,c=i.length;o<c;o++,r++)a[r]=i[o];return a}var f=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],h=["1","2","3","4","5","6","7","8","9"],d=[4,5,6,7,8];function s(e,t){var n=a.useState(),r=n[0],i=n[1];return a.useEffect((function(){if(e.current){var n=t.type,a=void 0===n?"mixed":n,r=t.length,o=void 0===r?5:r,c=t.sensitive,l=void 0!==c&&c,s=t.width,v=void 0===s?200:s,g=t.height,m=void 0===g?50:g,p=t.fontColor,b=void 0===p?"black":p,y=t.background,E=void 0===y?"rgba(255, 255, 255, .2)":y;d.includes(o)||(o=5);var k=e.current,x=[],w="";switch(a){case"numeric":x=u(h);break;case"mixed":x=u(f,h);break;case"alpha":default:x=u(f)}i({gen:function(){var e=document.getElementById("offline-captcha-canvas-area");e&&k.removeChild(e);var t=document.createElement("canvas");t.width=v,t.height=m,t.setAttribute("id","offline-captcha-canvas-area"),t.setAttribute("style","border: 1px solid black; background: "+E),k.appendChild(t);var n=t.getContext("2d");(function(e){for(var a=["Arial","Georgia","Helvetica","Impact"],r=0;r<e.length;r++){var i=v/e.length;n.font="2em "+a[C(0,a.length-1)],n.fillStyle=b,n.fillText(e[r],5+r*i,C(30,t.height-10),200)}})(w=function(e){for(var t,n=e.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1));t=[e[a],e[n]],e[n]=t[0],e[a]=t[1]}return e.slice(0,o)}(x).join("")),["darkgray","red","darkblue"].forEach((function(e){return function(e){n.beginPath(),n.moveTo(0,10+Math.random()*t.height),n.lineTo(t.width,10+Math.random()*t.height),n.lineWidth=1*Math.random()+1,n.closePath(),n.strokeStyle=e,n.stroke()}(e)}))},validate:function(e){return!!new RegExp(w,l?"g":"gi").test(e)}})}function C(e,t){return Math.floor(Math.random()*(t-e+1)+e)}}),[]),l({},r)}var v=function(){var e=r.a.useRef(),t=r.a.useState(),n=Object(c.a)(t,2),a=n[0],i=n[1],o=s(e,{type:"mixed"}),l=o.gen,u=o.validate;r.a.useEffect((function(){l&&l()}),[l]);return r.a.createElement("div",{style:{width:"100vw",height:"100vh"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"200px"}},r.a.createElement("div",{ref:e}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("input",{onChange:function(e){return i(e.target.value)},value:a}),r.a.createElement("button",{onClick:function(){u(a)||l(),i("")}},"validate"))),r.a.createElement("button",{onClick:function(){return l()}},"refresh"))};o.a.render(r.a.createElement(v,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(11)}},[[3,1,2]]]);
//# sourceMappingURL=main.fbf1784c.chunk.js.map