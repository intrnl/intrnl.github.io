import{S as t,i as e,s as n,c as r,u as s,t as o,a,e as c,b as l,d as i,f as u,g as p,h as f,j as $,k as d,l as m,m as h,n as g,o as y,p as v,q as E,r as b,v as S,w,x,y as _,z as P,A as R,B as L,C as j,D as A,E as C}from"./npm.svelte.6b7bef08.js";const k={};function N(t){let e;const n=t[1].default,c=r(n,t,t[0],null);return{c(){c&&c.c()},l(t){c&&c.l(t)},m(t,n){c&&c.m(t,n),e=!0},p(t,[e]){c&&c.p&&1&e&&s(c,n,t,t[0],e,null,null)},i(t){e||(o(c,t),e=!0)},o(t){a(c,t),e=!1},d(t){c&&c.d(t)}}}function O(){}function U(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class q extends t{constructor(t){super(),e(this,t,U,N,n,{})}}function D(t){let e,n;const f=t[1].default,$=r(f,t,t[0],null);return{c(){e=c("nav"),$&&$.c()},l(t){e=l(t,"NAV",{});var n=i(e);$&&$.l(n),n.forEach(u)},m(t,r){p(t,e,r),$&&$.m(e,null),n=!0},p(t,[e]){$&&$.p&&1&e&&s($,f,t,t[0],e,null,null)},i(t){n||(o($,t),n=!0)},o(t){a($,t),n=!1},d(t){t&&u(e),$&&$.d(t)}}}function H(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class I extends t{constructor(t){super(),e(this,t,H,D,n,{})}}function V(t){let e,n,d;const m=t[2].default,h=r(m,t,t[1],null);return{c(){e=c("span"),n=c("a"),h&&h.c(),this.h()},l(t){e=l(t,"SPAN",{});var r=i(e);n=l(r,"A",{href:!0,rel:!0});var s=i(n);h&&h.l(s),s.forEach(u),r.forEach(u),this.h()},h(){f(n,"href",t[0]),f(n,"rel","prefetch")},m(t,r){p(t,e,r),$(e,n),h&&h.m(n,null),d=!0},p(t,[e]){h&&h.p&&2&e&&s(h,m,t,t[1],e,null,null),(!d||1&e)&&f(n,"href",t[0])},i(t){d||(o(h,t),d=!0)},o(t){a(h,t),d=!1},d(t){t&&u(e),h&&h.d(t)}}}function B(t,e,n){let{to:r}=e,{$$slots:s={},$$scope:o}=e;return t.$$set=t=>{"to"in t&&n(0,r=t.to),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class J extends t{constructor(t){super(),e(this,t,B,V,n,{to:0})}}function K(t){let e;return{c(){e=y("Home")},l(t){e=v(t,"Home")},m(t,n){p(t,e,n)},d(t){t&&u(e)}}}function T(t){let e;return{c(){e=y("Projects")},l(t){e=v(t,"Projects")},m(t,n){p(t,e,n)},d(t){t&&u(e)}}}function M(t){let e;return{c(){e=y("Posts")},l(t){e=v(t,"Posts")},m(t,n){p(t,e,n)},d(t){t&&u(e)}}}function Y(t){let e,n,r,s;return e=new J({props:{to:"/",$$slots:{default:[K]},$$scope:{ctx:t}}}),n=new J({props:{to:"/projects",$$slots:{default:[T]},$$scope:{ctx:t}}}),r=new J({props:{to:"/posts/page/1",$$slots:{default:[M]},$$scope:{ctx:t}}}),{c(){d(e.$$.fragment),d(n.$$.fragment),d(r.$$.fragment)},l(t){m(e.$$.fragment,t),m(n.$$.fragment,t),m(r.$$.fragment,t)},m(t,o){h(e,t,o),h(n,t,o),h(r,t,o),s=!0},p(t,s){const o={};1&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o);const a={};1&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a);const c={};1&s&&(c.$$scope={dirty:s,ctx:t}),r.$set(c)},i(t){s||(o(e.$$.fragment,t),o(n.$$.fragment,t),o(r.$$.fragment,t),s=!0)},o(t){a(e.$$.fragment,t),a(n.$$.fragment,t),a(r.$$.fragment,t),s=!1},d(t){g(e,t),g(n,t),g(r,t)}}}function z(t){let e,n;return e=new I({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),{c(){d(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}class G extends t{constructor(t){super(),e(this,t,null,z,n,{})}}function W(t){let e,n,f;e=new G({});const $=t[1].default,y=r($,t,t[0],null);return{c(){d(e.$$.fragment),n=c("main"),y&&y.c()},l(t){m(e.$$.fragment,t),n=l(t,"MAIN",{});var r=i(n);y&&y.l(r),r.forEach(u)},m(t,r){h(e,t,r),p(t,n,r),y&&y.m(n,null),f=!0},p(t,[e]){y&&y.p&&1&e&&s(y,$,t,t[0],e,null,null)},i(t){f||(o(e.$$.fragment,t),o(y,t),f=!0)},o(t){a(e.$$.fragment,t),a(y,t),f=!1},d(t){g(e,t),t&&u(n),y&&y.d(t)}}}function X(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class F extends t{constructor(t){super(),e(this,t,X,W,n,{})}}function Q(t){let e,n;return{c(){e=c("p"),n=y("Looks like something spectacular happened, uh oh.")},l(t){e=l(t,"P",{});var r=i(e);n=v(r,"Looks like something spectacular happened, uh oh."),r.forEach(u)},m(t,r){p(t,e,r),$(e,n)},d(t){t&&u(e)}}}function Z(t){let e,n;return{c(){e=c("p"),n=y("Looks like you got lost, what were you trying to find?")},l(t){e=l(t,"P",{});var r=i(e);n=v(r,"Looks like you got lost, what were you trying to find?"),r.forEach(u)},m(t,r){p(t,e,r),$(e,n)},d(t){t&&u(e)}}}function tt(t){let e,n,r,s=t[1].stack+"";return{c(){e=c("pre"),n=c("code"),r=y(s)},l(t){e=l(t,"PRE",{});var o=i(e);n=l(o,"CODE",{});var a=i(n);r=v(a,s),a.forEach(u),o.forEach(u)},m(t,s){p(t,e,s),$(e,n),$(n,r)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&E(r,s)},d(t){t&&u(e)}}}function et(t){let e,n,r,s,o,a,f,d,m,h,g=t[1].message+"";function x(t,e){return 404===t[0]?Z:Q}let _=x(t),P=_(t),R=t[2]&&t[1].stack&&tt(t);return{c(){e=c("h1"),n=y(t[0]),r=b(),P.c(),s=b(),o=c("p"),a=y("Error: "),f=c("code"),d=y(g),m=b(),R&&R.c(),h=S()},l(c){e=l(c,"H1",{});var p=i(e);n=v(p,t[0]),p.forEach(u),r=w(c),P.l(c),s=w(c),o=l(c,"P",{});var $=i(o);a=v($,"Error: "),f=l($,"CODE",{});var y=i(f);d=v(y,g),y.forEach(u),$.forEach(u),m=w(c),R&&R.l(c),h=S()},m(t,c){p(t,e,c),$(e,n),p(t,r,c),P.m(t,c),p(t,s,c),p(t,o,c),$(o,a),$(o,f),$(f,d),p(t,m,c),R&&R.m(t,c),p(t,h,c)},p(t,e){1&e&&E(n,t[0]),_!==(_=x(t))&&(P.d(1),P=_(t),P&&(P.c(),P.m(s.parentNode,s))),2&e&&g!==(g=t[1].message+"")&&E(d,g),t[2]&&t[1].stack?R?R.p(t,e):(R=tt(t),R.c(),R.m(h.parentNode,h)):R&&(R.d(1),R=null)},d(t){t&&u(e),t&&u(r),P.d(t),t&&u(s),t&&u(o),t&&u(m),R&&R.d(t),t&&u(h)}}}function nt(t){let e,n;return e=new F({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){d(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,[n]){const r={};11&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function rt(t,e,n){let{status:r}=e,{error:s}=e,o="development"===process.env.NODE_ENV;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,o]}class st extends t{constructor(t){super(),e(this,t,rt,nt,n,{status:0,error:1})}}function ot(t){let e,n,r;const s=[t[4].props];var c=t[4].component;function l(t){let e={};for(let t=0;t<s.length;t+=1)e=x(e,s[t]);return{props:e}}return c&&(e=new c(l())),{c(){e&&d(e.$$.fragment),n=S()},l(t){e&&m(e.$$.fragment,t),n=S()},m(t,s){e&&h(e,t,s),p(t,n,s),r=!0},p(t,r){const i=16&r?_(s,[P(t[4].props)]):{};if(c!==(c=t[4].component)){if(e){j();const t=e;a(t.$$.fragment,1,0,()=>{g(t,1)}),A()}c?(e=new c(l()),d(e.$$.fragment),o(e.$$.fragment,1),h(e,n.parentNode,n)):e=null}else c&&e.$set(i)},i(t){r||(e&&o(e.$$.fragment,t),r=!0)},o(t){e&&a(e.$$.fragment,t),r=!1},d(t){t&&u(n),e&&g(e,t)}}}function at(t){let e,n;return e=new st({props:{error:t[0],status:t[1]}}),{c(){d(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function ct(t){let e,n,r,s;const c=[at,ot],l=[];function i(t,e){return t[0]?0:1}return e=i(t),n=l[e]=c[e](t),{c(){n.c(),r=S()},l(t){n.l(t),r=S()},m(t,n){l[e].m(t,n),p(t,r,n),s=!0},p(t,s){let u=e;e=i(t),e===u?l[e].p(t,s):(j(),a(l[u],1,1,()=>{l[u]=null}),A(),n=l[e],n||(n=l[e]=c[e](t),n.c()),o(n,1),n.m(r.parentNode,r))},i(t){s||(o(n),s=!0)},o(t){a(n),s=!1},d(t){l[e].d(t),t&&u(r)}}}function lt(t){let e,n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ct]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=x(s,r[t]);return e=new q({props:s}),{c(){d(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,[n]){const s=12&n?_(r,[4&n&&{segment:t[2][0]},8&n&&P(t[3].props)]):{};147&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function it(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;return R(i),L(k,r),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[s,o,a,c,l,r,i]}class ut extends t{constructor(t){super(),e(this,t,it,lt,n,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const pt=[/^\/posts\/page\/([^/]+?)\.json$/,/^\/posts\/(.+)\.json$/],ft=[{js:()=>import("./index.fc3e9d7b.js"),css:[]},{js:()=>import("./projects.3cbf1a15.js"),css:[]},{js:()=>import("./[page].26b35c56.js"),css:[]},{js:()=>import("./[...post].9a04982f.js"),css:[]}],$t=(dt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/projects\/?$/,parts:[{i:1}]},{pattern:/^\/posts\/page\/([^/]+?)\/?$/,parts:[null,null,{i:2,params:t=>({page:dt(t[1])})}]},{pattern:/^\/posts\/(.+)\/?$/,parts:[null,{i:3,params:t=>({post:dt(t[1]).split("/")})}]}]);var dt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function mt(t,e,n,r){return new(n||(n=Promise))((function(s,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function c(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}l((r=r.apply(t,e||[])).next())}))}function ht(t,e={noscroll:!1,replaceState:!1}){const n=Ot(new URL(t,document.baseURI));return n?(Ct[e.replaceState?"replaceState":"pushState"]({id:jt},"",t),qt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const gt="undefined"!=typeof __SAPPER__&&__SAPPER__;let yt,vt,Et,bt=!1,St=[],wt="{}";const xt={page:function(t){const e=C(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:C(null),session:C(gt&&gt.session)};let _t,Pt;xt.session.subscribe(t=>mt(void 0,void 0,void 0,(function*(){if(_t=t,!bt)return;Pt=!0;const e=Ot(new URL(location.href)),n=vt={},{redirect:r,props:s,branch:o}=yield Ht(e);n===vt&&(r?yield ht(r.location,{replaceState:!0}):yield Dt(o,s,e.page))})));let Rt,Lt=null;let jt,At=1;const Ct="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},kt={};function Nt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ot(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(gt.baseUrl))return null;let e=t.pathname.slice(gt.baseUrl.length);if(""===e&&(e="/"),!pt.some(t=>t.test(e)))for(let n=0;n<$t.length;n+=1){const r=$t[n],s=r.pattern.exec(e);if(s){const n=Nt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Ut(){return{x:pageXOffset,y:pageYOffset}}function qt(t,e,n,r){return mt(this,void 0,void 0,(function*(){if(e)jt=e;else{const t=Ut();kt[jt]=t,e=jt=++At,kt[jt]=n?t:{x:0,y:0}}jt=e,yt&&xt.preloading.set(!0);const s=Lt&&Lt.href===t.href?Lt.promise:Ht(t);Lt=null;const o=vt={},a=yield s,{redirect:c}=a;if(o===vt){if(c)yield ht(c.location,{replaceState:!0});else{const{props:e,branch:n}=a;yield Dt(n,e,t.page)}if(document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t=kt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}kt[jt]=t,t&&scrollTo(t.x,t.y)}}}))}function Dt(t,e,n){return mt(this,void 0,void 0,(function*(){xt.page.set(n),xt.preloading.set(!1),yt?yt.$set(e):(e.stores={page:{subscribe:xt.page.subscribe},preloading:{subscribe:xt.preloading.subscribe},session:xt.session},e.level0={props:yield Et},e.notify=xt.page.notify,yt=new ut({target:Rt,props:e,hydrate:!0})),St=t,wt=JSON.stringify(n.query),bt=!0,Pt=!1}))}function Ht(t){return mt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Et){const t=O||(()=>{});Et=gt.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},_t)}let c,l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map((e,c)=>mt(this,void 0,void 0,(function*(){const p=r[c];if(function(t,e,n,r){if(r!==wt)return!0;const s=St[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,p,i,s)&&(u=!0),o.segments[l]=r[c+1],!e)return{segment:p};const f=l++;if(!Pt&&!u&&St[c]&&St[c].part===e.i)return St[c];u=!1;const{default:$,preload:d}=yield function(t){const e="string"==typeof t.css?[]:t.css.map(It);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(ft[e.i]);let m;return m=bt||!gt.preloaded[c+1]?d?yield d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},_t):{}:gt.preloaded[c+1],o["level"+f]={component:$,props:m,segment:p,match:i,part:e.i}}))))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}))}function It(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Vt(t){const e=Ot(new URL(t,document.baseURI));if(e)return Lt&&t===Lt.href||function(t,e){Lt={href:t,promise:e}}(t,Ht(e)),Lt.promise}let Bt;function Jt(t){clearTimeout(Bt),Bt=setTimeout(()=>{Kt(t)},20)}function Kt(t){const e=Mt(t.target);e&&"prefetch"===e.rel&&Vt(e.href)}function Tt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Mt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Ot(s);if(o){qt(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),Ct.pushState({id:jt},"",s.href)}}function Mt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Yt(t){if(kt[jt]=Ut(),t.state){const e=Ot(new URL(location.href));e?qt(e,t.state.id):location.href=location.href}else At=At+1,function(t){jt=t}(At),Ct.replaceState({id:jt},"",location.href)}var zt;zt={target:document.querySelector("#root")},"scrollRestoration"in Ct&&(Ct.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ct.scrollRestoration="auto"}),addEventListener("load",()=>{Ct.scrollRestoration="manual"}),function(t){Rt=t}(zt.target),addEventListener("click",Tt),addEventListener("popstate",Yt),addEventListener("touchstart",Kt),addEventListener("mousemove",Jt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ct.replaceState({id:At},"",e);const n=new URL(location.href);if(gt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=gt;Et||(Et=o&&o[0]),Dt([],{error:c,status:a,session:s,level0:{props:Et},level1:{props:{status:a,error:c},component:st},segments:o},{host:e,path:n,query:Nt(r),params:{}})}();const r=Ot(n);return r?qt(r,At,!0,t):void 0});export{F as D};
