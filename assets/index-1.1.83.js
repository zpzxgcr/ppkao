const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SideBar-1.1.82.js","./entry-1.1.8.js","./entry-1.1.8.css","./SideBar-1.1.82.css"])))=>i.map(i=>d[i]);
import{_ as S,r as _,aw as b,x as z,c as o,o as a,f as d,A as w,h as x,ap as A,i as s,aq as H,ar as P,a7 as K,B as h,e as C,j as U,y as $,a6 as F,z as I,d as v,H as T,a4 as L,C as O,aE as Q,aM as R,aH as j,E as q,F as G,an as J,ao as W}from"./entry-1.1.8.js";import{_ as X}from"./Card-1.1.8.js";import{u as Y}from"./useSeo-1.1.8.js";import"./vue.-sixQ7xP-1.1.8.js";const Z=O(()=>G(()=>import("./SideBar-1.1.82.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(p=>p.default||p)),ee=["onKeydown"],te={class:"tiku-box"},ae={key:0,class:"list"},se={key:1,class:"box"},ne={__name:"index",async setup(p){let r,f;const m=_([]),u=_(""),l=_(!1),k=([r,f]=b(()=>R()),r=await r,f(),r);Y(k.value);const i=_(!1),y=async n=>{var c;l.value=!0,n.stopPropagation();const e=await j({word:u.value},2);((c=e==null?void 0:e.UserQueryList)==null?void 0:c.length)>0?m.value=e.UserQueryList:q.warning("没有找到相关题库，请修改关键词重新查询"),setTimeout(()=>{i.value=!1,l.value=!1},800)},B=n=>{n.stopPropagation(),i.value=!0};return(n,e)=>{var g;const c=F,E=W,M=X,V=Z,D=Q,N=z("wave");return a(),o("div",{class:"tiku",onClick:e[2]||(e[2]=t=>i.value=!1)},[d("div",{class:I(["search-box",{expanded:s(i)}]),onClick:B},[e[3]||(e[3]=d("img",{alt:"搜索题库",src:"https://static.ppkao.com/www/images/icon-search.png"},null,-1)),w(d("input",{placeholder:"输入考试名搜索题库","onUpdate:modelValue":e[0]||(e[0]=t=>K(u)?u.value=t:null),onBlur:e[1]||(e[1]=t=>{l.value=!1}),onKeydown:H(P(y,["prevent"]),["enter"])},null,40,ee),[[A,s(u)]]),s(i)?w((a(),h(c,{key:0,loading:s(l),onClick:y},{default:C(()=>[U($(s(l)?"":"搜索"),1)]),_:1},8,["loading"])),[[N]]):x("",!0)],2),d("div",te,[s(m).length>0?(a(),o("ul",ae,[(a(!0),o(T,null,L(s(m),t=>(a(),o("li",null,[v(E,{to:("linkTo"in n?n.linkTo:s(J))(t),innerHTML:t.tname},null,8,["to","innerHTML"])]))),256))])):(a(),o("ul",se,[(a(!0),o(T,null,L((g=s(k))==null?void 0:g.classList,t=>(a(),o("li",{key:t.id},[v(M,{category:t,"show-tiku":""},null,8,["category"])]))),128))])),v(D,null,{default:C(()=>[n.$device.isDesktop?(a(),h(V,{key:0})):x("",!0)]),_:1})])])}}},ue=S(ne,[["__scopeId","data-v-1f13f0ea"]]);export{ue as default};
