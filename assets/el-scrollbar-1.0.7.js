import{I as W,L as $,M as R,N as V,O as q,bT as J,r as i,k as L,b0 as Z,c6 as x,cj as D,B as M,o as k,e as F,A as ee,f as O,z as N,i as y,n as A,aM as te,aL as ae,b8 as le,c as G,d as K,H as se,P,af as oe,K as re,bt as U,w as X,an as ne,aP as Y,U as ie,m as ce,cO as ue,av as ve,bF as fe,h as me,R as de,S as pe,Q as he,T as be}from"./entry-1.0.7.js";const H=4,ye={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Se=({move:S,size:c,bar:r})=>({[r.size]:c,transform:`translate${r.axis}(${S}%)`}),j=Symbol("scrollbarContextKey"),ge=W({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),we="Thumb",ze=R({__name:"thumb",props:ge,setup(S){const c=S,r=V(j),l=q("scrollbar");r||J(we,"can not inject scrollbar context");const n=i(),u=i(),m=i({}),d=i(!1);let f=!1,p=!1,a=le?document.onselectstart:null;const t=L(()=>ye[c.vertical?"vertical":"horizontal"]),s=L(()=>Se({size:c.size,move:c.move,bar:t.value})),v=L(()=>n.value[t.value.offset]**2/r.wrapElement[t.value.scrollSize]/c.ratio/u.value[t.value.offset]),h=o=>{var _;if(o.stopPropagation(),o.ctrlKey||[1,2].includes(o.button))return;(_=window.getSelection())==null||_.removeAllRanges(),w(o);const T=o.currentTarget;T&&(m.value[t.value.axis]=T[t.value.offset]-(o[t.value.client]-T.getBoundingClientRect()[t.value.direction]))},E=o=>{if(!u.value||!n.value||!r.wrapElement)return;const _=Math.abs(o.target.getBoundingClientRect()[t.value.direction]-o[t.value.client]),T=u.value[t.value.offset]/2,B=(_-T)*100*v.value/n.value[t.value.offset];r.wrapElement[t.value.scroll]=B*r.wrapElement[t.value.scrollSize]/100},w=o=>{o.stopImmediatePropagation(),f=!0,document.addEventListener("mousemove",g),document.addEventListener("mouseup",b),a=document.onselectstart,document.onselectstart=()=>!1},g=o=>{if(!n.value||!u.value||f===!1)return;const _=m.value[t.value.axis];if(!_)return;const T=(n.value.getBoundingClientRect()[t.value.direction]-o[t.value.client])*-1,B=u.value[t.value.offset]-_,Q=(T-B)*100*v.value/n.value[t.value.offset];r.wrapElement[t.value.scroll]=Q*r.wrapElement[t.value.scrollSize]/100},b=()=>{f=!1,m.value[t.value.axis]=0,document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",b),e(),p&&(d.value=!1)},C=()=>{p=!1,d.value=!!c.size},z=()=>{p=!0,d.value=f};Z(()=>{e(),document.removeEventListener("mouseup",b)});const e=()=>{document.onselectstart!==a&&(document.onselectstart=a)};return x(D(r,"scrollbarElement"),"mousemove",C),x(D(r,"scrollbarElement"),"mouseleave",z),(o,_)=>(k(),M(ae,{name:y(l).b("fade"),persisted:""},{default:F(()=>[ee(O("div",{ref_key:"instance",ref:n,class:N([y(l).e("bar"),y(l).is(y(t).key)]),onMousedown:E},[O("div",{ref_key:"thumb",ref:u,class:N(y(l).e("thumb")),style:A(y(s)),onMousedown:h},null,38)],34),[[te,o.always||d.value]])]),_:1},8,["name"]))}});var I=$(ze,[["__file","thumb.vue"]]);const _e=W({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Ee=R({__name:"bar",props:_e,setup(S,{expose:c}){const r=S,l=V(j),n=i(0),u=i(0),m=i(""),d=i(""),f=i(1),p=i(1);return c({handleScroll:s=>{if(s){const v=s.offsetHeight-H,h=s.offsetWidth-H;u.value=s.scrollTop*100/v*f.value,n.value=s.scrollLeft*100/h*p.value}},update:()=>{const s=l==null?void 0:l.wrapElement;if(!s)return;const v=s.offsetHeight-H,h=s.offsetWidth-H,E=v**2/s.scrollHeight,w=h**2/s.scrollWidth,g=Math.max(E,r.minSize),b=Math.max(w,r.minSize);f.value=E/(v-E)/(g/(v-g)),p.value=w/(h-w)/(b/(h-b)),d.value=g+H<v?`${g}px`:"",m.value=b+H<h?`${b}px`:""}}),(s,v)=>(k(),G(se,null,[K(I,{move:n.value,ratio:p.value,size:m.value,always:s.always},null,8,["move","ratio","size","always"]),K(I,{move:u.value,ratio:f.value,size:d.value,vertical:"",always:s.always},null,8,["move","ratio","size","always"])],64))}});var Te=$(Ee,[["__file","bar.vue"]]);const He=W({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:re([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},tabindex:{type:[String,Number],default:void 0},id:String,role:String,...oe(["ariaLabel","ariaOrientation"])}),Le={scroll:({scrollTop:S,scrollLeft:c})=>[S,c].every(P)},Pe="ElScrollbar",ke=R({name:Pe}),Ne=R({...ke,props:He,emits:Le,setup(S,{expose:c,emit:r}){const l=S,n=q("scrollbar");let u,m,d=0,f=0;const p=i(),a=i(),t=i(),s=i(),v=L(()=>{const e={};return l.height&&(e.height=U(l.height)),l.maxHeight&&(e.maxHeight=U(l.maxHeight)),[l.wrapStyle,e]}),h=L(()=>[l.wrapClass,n.e("wrap"),{[n.em("wrap","hidden-default")]:!l.native}]),E=L(()=>[n.e("view"),l.viewClass]),w=()=>{var e;a.value&&((e=s.value)==null||e.handleScroll(a.value),d=a.value.scrollTop,f=a.value.scrollLeft,r("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function g(e,o){he(e)?a.value.scrollTo(e):P(e)&&P(o)&&a.value.scrollTo(e,o)}const b=e=>{P(e)&&(a.value.scrollTop=e)},C=e=>{P(e)&&(a.value.scrollLeft=e)},z=()=>{var e;(e=s.value)==null||e.update()};return X(()=>l.noresize,e=>{e?(u==null||u(),m==null||m()):({stop:u}=ne(t,z),m=x("resize",z))},{immediate:!0}),X(()=>[l.maxHeight,l.height],()=>{l.native||Y(()=>{var e;z(),a.value&&((e=s.value)==null||e.handleScroll(a.value))})}),ie(j,ce({scrollbarElement:p,wrapElement:a})),ue(()=>{a.value&&(a.value.scrollTop=d,a.value.scrollLeft=f)}),ve(()=>{l.native||Y(()=>{z()})}),fe(()=>z()),c({wrapRef:a,update:z,scrollTo:g,setScrollTop:b,setScrollLeft:C,handleScroll:w}),(e,o)=>(k(),G("div",{ref_key:"scrollbarRef",ref:p,class:N(y(n).b())},[O("div",{ref_key:"wrapRef",ref:a,class:N(y(h)),style:A(y(v)),tabindex:e.tabindex,onScroll:w},[(k(),M(pe(e.tag),{id:e.id,ref_key:"resizeRef",ref:t,class:N(y(E)),style:A(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:F(()=>[de(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],46,["tabindex"]),e.native?me("v-if",!0):(k(),M(Te,{key:0,ref_key:"barRef",ref:s,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});var Re=$(Ne,[["__file","scrollbar.vue"]]);const Be=be(Re);export{Be as E};
