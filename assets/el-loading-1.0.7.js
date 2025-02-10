import{r as _,m as T,d5 as V,M as N,a$ as E,d6 as P,bq as g,e as O,A as z,d as R,aM as j,aL as M,d7 as y,b8 as q,aP as w,ab as A,d8 as b,d9 as L,Q as I,a9 as D,da as F}from"./entry-1.0.7.js";function G(t){let e;const l=_(!1),s=T({...t,originalPosition:"",originalOverflow:"",visible:!1});function a(n){s.text=n}function o(){const n=s.parent,r=d.ns;if(!n.vLoadingAddClassList){let c=n.getAttribute("loading-number");c=Number.parseInt(c)-1,c?n.setAttribute("loading-number",c.toString()):(y(n,r.bm("parent","relative")),n.removeAttribute("loading-number")),y(n,r.bm("parent","hidden"))}i(),m.unmount()}function i(){var n,r;(r=(n=d.$el)==null?void 0:n.parentNode)==null||r.removeChild(d.$el)}function v(){var n;t.beforeClose&&!t.beforeClose()||(l.value=!0,clearTimeout(e),e=setTimeout(f,400),s.visible=!1,(n=t.closed)==null||n.call(t))}function f(){if(!l.value)return;const n=s.parent;l.value=!1,n.vLoadingAddClassList=void 0,o()}const u=N({name:"ElLoading",setup(n,{expose:r}){const{ns:c,zIndex:$}=P("loading");return r({ns:c,zIndex:$}),()=>{const C=s.spinner||s.svg,S=g("svg",{class:"circular",viewBox:s.svgViewBox?s.svgViewBox:"0 0 50 50",...C?{innerHTML:C}:{}},[g("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),B=s.text?g("p",{class:c.b("text")},[s.text]):void 0;return g(M,{name:c.b("fade"),onAfterLeave:f},{default:O(()=>[z(R("div",{style:{backgroundColor:s.background||""},class:[c.b("mask"),s.customClass,s.fullscreen?"is-fullscreen":""]},[g("div",{class:c.b("spinner")},[S,B])]),[[j,s.visible]])])})}}}),m=V(u),d=m.mount(document.createElement("div"));return{...E(s),setText:a,removeElLoadingChild:i,close:v,handleAfterLeave:f,vm:d,get $el(){return d.$el}}}let p;const H=function(t={}){if(!q)return;const e=K(t);if(e.fullscreen&&p)return p;const l=G({...e,closed:()=>{var a;(a=e.closed)==null||a.call(e),e.fullscreen&&(p=void 0)}});Q(e,e.parent,l),h(e,e.parent,l),e.parent.vLoadingAddClassList=()=>h(e,e.parent,l);let s=e.parent.getAttribute("loading-number");return s?s=`${Number.parseInt(s)+1}`:s="1",e.parent.setAttribute("loading-number",s),e.parent.appendChild(l.$el),w(()=>l.visible.value=e.visible),e.fullscreen&&(p=l),l},K=t=>{var e,l,s,a;let o;return A(t.target)?o=(e=document.querySelector(t.target))!=null?e:document.body:o=t.target||document.body,{parent:o===document.body||t.body?document.body:o,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:o===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(s=t.lock)!=null?s:!1,customClass:t.customClass||"",visible:(a=t.visible)!=null?a:!0,beforeClose:t.beforeClose,closed:t.closed,target:o}},Q=async(t,e,l)=>{const{nextZIndex:s}=l.vm.zIndex||l.vm._.exposed.zIndex,a={};if(t.fullscreen)l.originalPosition.value=b(document.body,"position"),l.originalOverflow.value=b(document.body,"overflow"),a.zIndex=s();else if(t.parent===document.body){l.originalPosition.value=b(document.body,"position"),await w();for(const o of["top","left"]){const i=o==="top"?"scrollTop":"scrollLeft";a[o]=`${t.target.getBoundingClientRect()[o]+document.body[i]+document.documentElement[i]-Number.parseInt(b(document.body,`margin-${o}`),10)}px`}for(const o of["height","width"])a[o]=`${t.target.getBoundingClientRect()[o]}px`}else l.originalPosition.value=b(e,"position");for(const[o,i]of Object.entries(a))l.$el.style[o]=i},h=(t,e,l)=>{const s=l.vm.ns||l.vm._.exposed.ns;["absolute","fixed","sticky"].includes(l.originalPosition.value)?y(e,s.bm("parent","relative")):L(e,s.bm("parent","relative")),t.fullscreen&&t.lock?L(e,s.bm("parent","hidden")):y(e,s.bm("parent","hidden"))},x=Symbol("ElLoading"),k=(t,e)=>{var l,s,a,o;const i=e.instance,v=n=>I(e.value)?e.value[n]:void 0,f=n=>{const r=A(n)&&(i==null?void 0:i[n])||n;return r&&_(r)},u=n=>f(v(n)||t.getAttribute(`element-loading-${F(n)}`)),m=(l=v("fullscreen"))!=null?l:e.modifiers.fullscreen,d={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:m,target:(s=v("target"))!=null?s:m?void 0:t,body:(a=v("body"))!=null?a:e.modifiers.body,lock:(o=v("lock"))!=null?o:e.modifiers.lock};t[x]={options:d,instance:H(d)}},Y=(t,e)=>{for(const l of Object.keys(e))D(e[l])&&(e[l].value=t[l])},J={mounted(t,e){e.value&&k(t,e)},updated(t,e){const l=t[x];e.oldValue!==e.value&&(e.value&&!e.oldValue?k(t,e):e.value&&e.oldValue?I(e.value)&&Y(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[x])==null||e.instance.close(),t[x]=null}};export{J as v};
