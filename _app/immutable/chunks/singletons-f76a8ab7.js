import{B as d,C as I,D as S,s as T,E as U}from"./index-cfb7e055.js";const f=[];function L(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=d){let n;const s=new Set;function r(a){if(T(e,a)&&(e=a,n)){const u=!f.length;for(const l of s)l[1](),f.push(l,e);if(u){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function o(a){r(a(e))}function i(a,u=d){const l=[a,u];return s.add(l),s.size===1&&(n=t(r)||d),a(e),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:i}}function j(e,t,n){const s=!Array.isArray(e),r=s?[e]:e,o=t.length<2;return L(n,i=>{let a=!1;const u=[];let l=0,_=d;const h=()=>{if(l)return;_();const c=t(s?u[0]:u,i);o?i(c):_=U(c)?c:d},R=r.map((c,g)=>I(c,x=>{u[g]=x,l&=~(1<<g),a&&h()},()=>{l|=1<<g}));return a=!0,h(),function(){S(R),_()}})}let m="",E="";function q(e){m=e.base,E=e.assets||m}let k="";function C(e){k=e}const D="sveltekit:scroll",P="sveltekit:index",w={tap:1,hover:2,viewport:3,eager:4,off:-1};function Y(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function z(){return{x:pageXOffset,y:pageYOffset}}function b(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const v={...w,"":w.hover};function A(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function B(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=A(e)}}function G(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},r=!n||V(n,t)||s.rel_external||s.target||s.download;return{url:n,has:s,external:r}}function K(e){let t=null,n=null,s=null,r=null,o=e;for(;o&&o!==document.documentElement;)n===null&&(n=b(o,"preload-code")),s===null&&(s=b(o,"preload-data")),t===null&&(t=b(o,"noscroll")),r===null&&(r=b(o,"reload")),o=A(o);return{preload_code:v[n??"off"],preload_data:v[s??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:r==="off"?!1:r===""?!0:null}}function y(e){const t=p(e);let n=!0;function s(){n=!0,t.update(i=>i)}function r(i){n=!1,t.set(i)}function o(i){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&i(a=u)})}return{notify:s,set:r,subscribe:o}}function O(){const{set:e,subscribe:t}=p(!1);let n;async function s(){clearTimeout(n);const r=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const i=(await r.json()).version!==k;return i&&(e(!0),clearTimeout(n)),i}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:t,check:s}}function V(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let N;function X(e){N=e.client}const W={url:y({}),page:y({}),navigating:p(null),updated:O()};export{P as I,w as P,D as S,G as a,K as b,z as c,q as d,X as e,B as f,Y as g,C as h,V as i,j,N as k,W as s,p as w};
