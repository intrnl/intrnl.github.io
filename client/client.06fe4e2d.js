import{S as e,i as t,s as n,c as r,u as o,t as s,a,e as c,b as l,d as i,f,g as u,h as p,j as $,k as d,l as m,m as h,n as g,o as y,p as v,q as _,r as E,v as b,w as S,x as w,y as x,z as P,A as N,B as R,C as j,D as C,E as L}from"./npm.svelte.c1d47094.js";const A={};function O(e){let t;const n=e[1].default,c=r(n,e,e[0],null);return{c(){c&&c.c()},l(e){c&&c.l(e)},m(e,n){c&&c.m(e,n),t=!0},p(e,[t]){c&&c.p&&1&t&&o(c,n,e,e[0],t,null,null)},i(e){t||(s(c,e),t=!0)},o(e){a(c,e),t=!1},d(e){c&&c.d(e)}}}function k(){}function I(e,t,n){let{$$slots:r={},$$scope:o}=t;return e.$$set=e=>{"$$scope"in e&&n(0,o=e.$$scope)},[o,r]}class U extends e{constructor(e){super(),t(this,e,I,O,n,{})}}function q(e){let t,n;const p=e[1].default,$=r(p,e,e[0],null);return{c(){t=c("nav"),$&&$.c()},l(e){t=l(e,"NAV",{});var n=i(t);$&&$.l(n),n.forEach(f)},m(e,r){u(e,t,r),$&&$.m(t,null),n=!0},p(e,[t]){$&&$.p&&1&t&&o($,p,e,e[0],t,null,null)},i(e){n||(s($,e),n=!0)},o(e){a($,e),n=!1},d(e){e&&f(t),$&&$.d(e)}}}function T(e,t,n){let{$$slots:r={},$$scope:o}=t;return e.$$set=e=>{"$$scope"in e&&n(0,o=e.$$scope)},[o,r]}class J extends e{constructor(e){super(),t(this,e,T,q,n,{})}}function D(e){let t,n,d;const m=e[2].default,h=r(m,e,e[1],null);return{c(){t=c("span"),n=c("a"),h&&h.c(),this.h()},l(e){t=l(e,"SPAN",{});var r=i(t);n=l(r,"A",{href:!0,rel:!0});var o=i(n);h&&h.l(o),o.forEach(f),r.forEach(f),this.h()},h(){p(n,"href",e[0]),p(n,"rel","prefetch")},m(e,r){u(e,t,r),$(t,n),h&&h.m(n,null),d=!0},p(e,[t]){h&&h.p&&2&t&&o(h,m,e,e[1],t,null,null),(!d||1&t)&&p(n,"href",e[0])},i(e){d||(s(h,e),d=!0)},o(e){a(h,e),d=!1},d(e){e&&f(t),h&&h.d(e)}}}function B(e,t,n){let{$$slots:r={},$$scope:o}=t,{to:s}=t;return e.$$set=e=>{"to"in e&&n(0,s=e.to),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class V extends e{constructor(e){super(),t(this,e,B,D,n,{to:0})}}function H(e){let t;return{c(){t=y("Home")},l(e){t=v(e,"Home")},m(e,n){u(e,t,n)},d(e){e&&f(t)}}}function K(e){let t;return{c(){t=y("Projects")},l(e){t=v(e,"Projects")},m(e,n){u(e,t,n)},d(e){e&&f(t)}}}function M(e){let t;return{c(){t=y("Posts")},l(e){t=v(e,"Posts")},m(e,n){u(e,t,n)},d(e){e&&f(t)}}}function Y(e){let t,n,r,o;return t=new V({props:{to:"/",$$slots:{default:[H]},$$scope:{ctx:e}}}),n=new V({props:{to:"/projects",$$slots:{default:[K]},$$scope:{ctx:e}}}),r=new V({props:{to:"/posts/page/1",$$slots:{default:[M]},$$scope:{ctx:e}}}),{c(){d(t.$$.fragment),d(n.$$.fragment),d(r.$$.fragment)},l(e){m(t.$$.fragment,e),m(n.$$.fragment,e),m(r.$$.fragment,e)},m(e,s){h(t,e,s),h(n,e,s),h(r,e,s),o=!0},p(e,o){const s={};1&o&&(s.$$scope={dirty:o,ctx:e}),t.$set(s);const a={};1&o&&(a.$$scope={dirty:o,ctx:e}),n.$set(a);const c={};1&o&&(c.$$scope={dirty:o,ctx:e}),r.$set(c)},i(e){o||(s(t.$$.fragment,e),s(n.$$.fragment,e),s(r.$$.fragment,e),o=!0)},o(e){a(t.$$.fragment,e),a(n.$$.fragment,e),a(r.$$.fragment,e),o=!1},d(e){g(t,e),g(n,e),g(r,e)}}}function z(e){let t,n;return t=new J({props:{$$slots:{default:[Y]},$$scope:{ctx:e}}}),{c(){d(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,r){h(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(s(t.$$.fragment,e),n=!0)},o(e){a(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}class G extends e{constructor(e){super(),t(this,e,null,z,n,{})}}function W(e){let t,n,p;t=new G({});const $=e[1].default,y=r($,e,e[0],null);return{c(){d(t.$$.fragment),n=c("main"),y&&y.c()},l(e){m(t.$$.fragment,e),n=l(e,"MAIN",{});var r=i(n);y&&y.l(r),r.forEach(f)},m(e,r){h(t,e,r),u(e,n,r),y&&y.m(n,null),p=!0},p(e,[t]){y&&y.p&&1&t&&o(y,$,e,e[0],t,null,null)},i(e){p||(s(t.$$.fragment,e),s(y,e),p=!0)},o(e){a(t.$$.fragment,e),a(y,e),p=!1},d(e){g(t,e),e&&f(n),y&&y.d(e)}}}function X(e,t,n){let{$$slots:r={},$$scope:o}=t;return e.$$set=e=>{"$$scope"in e&&n(0,o=e.$$scope)},[o,r]}class F extends e{constructor(e){super(),t(this,e,X,W,n,{})}}function Q(e){let t,n;return{c(){t=c("p"),n=y("Looks like something spectacular happened, uh oh.")},l(e){t=l(e,"P",{});var r=i(t);n=v(r,"Looks like something spectacular happened, uh oh."),r.forEach(f)},m(e,r){u(e,t,r),$(t,n)},d(e){e&&f(t)}}}function Z(e){let t,n;return{c(){t=c("p"),n=y("Looks like you got lost, what were you trying to find?")},l(e){t=l(e,"P",{});var r=i(t);n=v(r,"Looks like you got lost, what were you trying to find?"),r.forEach(f)},m(e,r){u(e,t,r),$(t,n)},d(e){e&&f(t)}}}function ee(e){let t,n,r,o=e[1].stack+"";return{c(){t=c("pre"),n=c("code"),r=y(o)},l(e){t=l(e,"PRE",{});var s=i(t);n=l(s,"CODE",{});var a=i(n);r=v(a,o),a.forEach(f),s.forEach(f)},m(e,o){u(e,t,o),$(t,n),$(n,r)},p(e,t){2&t&&o!==(o=e[1].stack+"")&&_(r,o)},d(e){e&&f(t)}}}function te(e){let t,n,r,o,s,a,p,d,m,h,g=e[1].message+"";function w(e,t){return 404===e[0]?Z:Q}let x=w(e),P=x(e),N=e[2]&&e[1].stack&&ee(e);return{c(){t=c("h1"),n=y(e[0]),r=E(),P.c(),o=E(),s=c("p"),a=y("Error: "),p=c("code"),d=y(g),m=E(),N&&N.c(),h=b()},l(c){t=l(c,"H1",{});var u=i(t);n=v(u,e[0]),u.forEach(f),r=S(c),P.l(c),o=S(c),s=l(c,"P",{});var $=i(s);a=v($,"Error: "),p=l($,"CODE",{});var y=i(p);d=v(y,g),y.forEach(f),$.forEach(f),m=S(c),N&&N.l(c),h=b()},m(e,c){u(e,t,c),$(t,n),u(e,r,c),P.m(e,c),u(e,o,c),u(e,s,c),$(s,a),$(s,p),$(p,d),u(e,m,c),N&&N.m(e,c),u(e,h,c)},p(e,t){1&t&&_(n,e[0]),x!==(x=w(e))&&(P.d(1),P=x(e),P&&(P.c(),P.m(o.parentNode,o))),2&t&&g!==(g=e[1].message+"")&&_(d,g),e[2]&&e[1].stack?N?N.p(e,t):(N=ee(e),N.c(),N.m(h.parentNode,h)):N&&(N.d(1),N=null)},d(e){e&&f(t),e&&f(r),P.d(e),e&&f(o),e&&f(s),e&&f(m),N&&N.d(e),e&&f(h)}}}function ne(e){let t,n;return t=new F({props:{$$slots:{default:[te]},$$scope:{ctx:e}}}),{c(){d(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,r){h(t,e,r),n=!0},p(e,[n]){const r={};11&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(s(t.$$.fragment,e),n=!0)},o(e){a(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function re(e,t,n){let{status:r}=t,{error:o}=t,s="development"===process.env.NODE_ENV;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,s]}class oe extends e{constructor(e){super(),t(this,e,re,ne,n,{status:0,error:1})}}function se(e){let t,n,r;const o=[e[4].props];var c=e[4].component;function l(e){let t={};for(let e=0;e<o.length;e+=1)t=w(t,o[e]);return{props:t}}return c&&(t=new c(l())),{c(){t&&d(t.$$.fragment),n=b()},l(e){t&&m(t.$$.fragment,e),n=b()},m(e,o){t&&h(t,e,o),u(e,n,o),r=!0},p(e,r){const i=16&r?x(o,[P(e[4].props)]):{};if(c!==(c=e[4].component)){if(t){j();const e=t;a(e.$$.fragment,1,0,(()=>{g(e,1)})),C()}c?(t=new c(l()),d(t.$$.fragment),s(t.$$.fragment,1),h(t,n.parentNode,n)):t=null}else c&&t.$set(i)},i(e){r||(t&&s(t.$$.fragment,e),r=!0)},o(e){t&&a(t.$$.fragment,e),r=!1},d(e){e&&f(n),t&&g(t,e)}}}function ae(e){let t,n;return t=new oe({props:{error:e[0],status:e[1]}}),{c(){d(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,r){h(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(s(t.$$.fragment,e),n=!0)},o(e){a(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function ce(e){let t,n,r,o;const c=[ae,se],l=[];function i(e,t){return e[0]?0:1}return t=i(e),n=l[t]=c[t](e),{c(){n.c(),r=b()},l(e){n.l(e),r=b()},m(e,n){l[t].m(e,n),u(e,r,n),o=!0},p(e,o){let f=t;t=i(e),t===f?l[t].p(e,o):(j(),a(l[f],1,1,(()=>{l[f]=null})),C(),n=l[t],n||(n=l[t]=c[t](e),n.c()),s(n,1),n.m(r.parentNode,r))},i(e){o||(s(n),o=!0)},o(e){a(n),o=!1},d(e){l[t].d(e),e&&f(r)}}}function le(e){let t,n;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[ce]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=w(o,r[e]);return t=new U({props:o}),{c(){d(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,r){h(t,e,r),n=!0},p(e,[n]){const o=12&n?x(r,[4&n&&{segment:e[2][0]},8&n&&P(e[3].props)]):{};147&n&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){n||(s(t.$$.fragment,e),n=!0)},o(e){a(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function ie(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:a}=t,{level0:c}=t,{level1:l=null}=t,{notify:i}=t;return N(i),R(A,r),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,c=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,i=e.notify)},[o,s,a,c,l,r,i]}class fe extends e{constructor(e){super(),t(this,e,ie,le,n,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ue=[/^\/posts\/page\/([^/]+?)\.json$/,/^\/posts\/(.+)\.json$/],pe=[{js:()=>Promise.all([import("./index.4f47fd5a.js"),]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./projects.17bee219.js"),]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[page].e59885f0.js"),]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[...post].a9aa4eed.js"),]).then((function(e){return e[0]}))}],$e=(de=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/projects\/?$/,parts:[{i:1}]},{pattern:/^\/posts\/page\/([^/]+?)\/?$/,parts:[null,null,{i:2,params:e=>({page:de(e[1])})}]},{pattern:/^\/posts\/(.+)\/?$/,parts:[null,{i:3,params:e=>({post:de(e[1]).split("/")})}]}]);var de;
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
function me(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function c(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))}function he(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ge,ye=1;const ve="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},_e={};let Ee,be;function Se(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((e=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r})),t}function we(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ee))return null;let t=e.pathname.slice(Ee.length);if(""===t&&(t="/"),!ue.some((e=>e.test(t))))for(let n=0;n<$e.length;n+=1){const r=$e[n],o=r.pattern.exec(t);if(o){const n=Se(e.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:o,page:c}}}}function xe(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=he(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=we(o);if(s){Re(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),ve.pushState({id:ge},"",o.href)}}function Pe(){return{x:pageXOffset,y:pageYOffset}}function Ne(e){if(_e[ge]=Pe(),e.state){const t=we(new URL(location.href));t?Re(t,e.state.id):location.href=location.href}else ye=ye+1,function(e){ge=e}(ye),ve.replaceState({id:ge},"",location.href)}function Re(e,t,n,r){return me(this,void 0,void 0,(function*(){const o=!!t;if(o)ge=t;else{const e=Pe();_e[ge]=e,ge=t=++ye,_e[ge]=n?e:{x:0,y:0}}if(yield be(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=_e[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),_e[ge]=n,o||e?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function je(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Ce,Le=null;function Ae(e){const t=he(e.target);t&&"prefetch"===t.rel&&function(e){const t=we(new URL(e,je(document)));if(t)Le&&e===Le.href||(Le={href:e,promise:We(t)}),Le.promise}(t.href)}function Oe(e){clearTimeout(Ce),Ce=setTimeout((()=>{Ae(e)}),20)}function ke(e,t={noscroll:!1,replaceState:!1}){const n=we(new URL(e,je(document)));return n?(ve[t.replaceState?"replaceState":"pushState"]({id:ge},"",e),Re(n,null,t.noscroll)):(location.href=e,new Promise((()=>{})))}const Ie="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ue,qe,Te,Je=!1,De=[],Be="{}";const Ve={page:function(e){const t=L(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:L(null),session:L(Ie&&Ie.session)};let He,Ke,Me;function Ye(e,t){const{error:n}=e;return Object.assign({error:n},t)}function ze(e){return me(this,void 0,void 0,(function*(){Ue&&Ve.preloading.set(!0);const t=function(e){return Le&&Le.href===e.href?Le.promise:We(e)}(e),n=qe={},r=yield t,{redirect:o}=r;if(n===qe)if(o)yield ke(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Ge(n,t,Ye(t,e.page))}}))}function Ge(e,t,n){return me(this,void 0,void 0,(function*(){Ve.page.set(n),Ve.preloading.set(!1),Ue?Ue.$set(t):(t.stores={page:{subscribe:Ve.page.subscribe},preloading:{subscribe:Ve.preloading.subscribe},session:Ve.session},t.level0={props:yield Te},t.notify=Ve.page.notify,Ue=new fe({target:Me,props:t,hydrate:!0})),De=e,Be=JSON.stringify(n.query),Je=!0,Ke=!1}))}function We(e){return me(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!Te){const e=k||(()=>({}));Te=Ie.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},He)}let c,l=1;try{const o=JSON.stringify(n.query),i=t.pattern.exec(n.path);let f=!1;c=yield Promise.all(t.parts.map(((t,c)=>me(this,void 0,void 0,(function*(){const u=r[c];if(function(e,t,n,r){if(r!==Be)return!0;const o=De[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(c,u,i,o)&&(f=!0),s.segments[l]=r[c+1],!t)return{segment:u};const p=l++;if(!Ke&&!f&&De[c]&&De[c].part===t.i)return De[c];f=!1;const{default:$,preload:d}=yield pe[t.i].js();let m;return m=Je||!Ie.preloaded[c+1]?d?yield d.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},He):{}:Ie.preloaded[c+1],s["level"+p]={component:$,props:m,segment:u,match:i,part:t.i}})))))}catch(e){s.error=e,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var Xe,Fe,Qe;Ve.session.subscribe((e=>me(void 0,void 0,void 0,(function*(){if(He=e,!Je)return;Ke=!0;const t=we(new URL(location.href)),n=qe={},{redirect:r,props:o,branch:s}=yield We(t);n===qe&&(r?yield ke(r.location,{replaceState:!0}):yield Ge(s,o,Ye(o,t.page)))})))),Xe={target:document.querySelector("#root")},Fe=Xe.target,Me=Fe,Qe=Ie.baseUrl,Ee=Qe,be=ze,"scrollRestoration"in ve&&(ve.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ve.scrollRestoration="auto"})),addEventListener("load",(()=>{ve.scrollRestoration="manual"})),addEventListener("click",xe),addEventListener("popstate",Ne),addEventListener("touchstart",Ae),addEventListener("mousemove",Oe),Ie.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:a}=Ie;Te||(Te=o&&o[0]);const c={error:a,status:s,session:r,level0:{props:Te},level1:{props:{status:s,error:a},component:oe},segments:o},l=Se(n);Ge([],c,{host:e,path:t,query:l,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ve.replaceState({id:ye},"",t);const n=we(new URL(location.href));if(n)return Re(n,ye,!0,e)}));export{F as D};
