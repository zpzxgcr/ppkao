const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Box-1.0.7.js","./entry-1.0.7.js","./entry-1.0.7.css","./Box-1.0.72.css","./Empty-1.0.7.js","./Empty-1.0.7.css","./Index-1.0.76.js","./vue.-sixQ7xP-1.0.7.js","./Index-1.0.75.css"])))=>i.map(i=>d[i]);
import{_ as O,ax as N,D as F,r as y,ay as i,c as r,o as _,f as j,B as x,h as m,d as u,i as s,C as k,H,z as M,e as Q,F as f,bx as W,by as Z,bz as q,bA as G,bB as z,bC as L,bD as D}from"./entry-1.0.7.js";import{a as J,_ as K}from"./Result-1.0.7.js";import{_ as U}from"./Pagination-1.0.7.js";import{E as X}from"./el-affix-1.0.7.js";import{u as Y}from"./useSeo-1.0.7.js";import"./el-skeleton-item-1.0.7.js";import"./el-popover-1.0.7.js";import"./el-popper-1.0.7.js";import"./index-1.0.75.js";import"./qrcode.vue.esm-1.0.7.js";import"./vue.-sixQ7xP-1.0.7.js";const $=k(()=>f(()=>import("./Box-1.0.7.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(o=>o.default||o)),tt=k(()=>f(()=>import("./Empty-1.0.7.js"),__vite__mapDeps([4,1,2,5]),import.meta.url).then(o=>o.default||o)),et=k(()=>f(()=>import("./Index-1.0.76.js"),__vite__mapDeps([6,1,2,7,8]),import.meta.url).then(o=>o.default||o)),at={class:"box"},st={key:0,class:"wrap topic-detail"},it={key:2,class:"wrap"},ot={key:0,class:"page-box"},lt={__name:"TopicList",async setup(o){let e,a;const{isDesktop:p,isMobileOrTablet:E}=N(),v=F();let t=y();const{id:n,guid:A,page:l}=v.params,{title:b,type:d,stfrom:C}=v.meta,c=y(b&&d!=="answer"?b:"你可能感兴趣的试题");if(d==="answer")t=([e,a]=i(()=>W({guid:A||n,stfrom:C})),e=await e,a(),e),t.value.list=t.value.stdetailslist;else switch(v.name){case"chapter_list":t=([e,a]=i(()=>D({id:n,page:l})),e=await e,a(),e),t.value.list=t.value.kstklist,c.value=t.value.title;break;case"mip_chapter_list":t=([e,a]=i(()=>D({id:n,page:l})),e=await e,a(),e),t.value.list=t.value.kstklist,c.value=t.value.title;break;case"day_list":t=([e,a]=i(()=>L({id:n,page:l})),e=await e,a(),e),t.value.list=t.value.kstklist,c.value=t.value.title;break;case"mip_day_list":t=([e,a]=i(()=>L({id:n,page:l})),e=await e,a(),e),t.value.list=t.value.kstklist,c.value=t.value.title;break;case"wangke_list":t=([e,a]=i(()=>z({page:l})),e=await e,a(),e),t.value.list=t.value.wangkelist;break;case"mip_wangke_list":t=([e,a]=i(()=>z({page:l})),e=await e,a(),e),t.value.list=t.value.wangkelist;break;case"zhidao_list":t=([e,a]=i(()=>G({page:l})),e=await e,a(),e),t.value.list=t.value.zhidaolist;break;case"smart_home_list":t=([e,a]=i(()=>q({page:l})),e=await e,a(),e),t.value.list=t.value.smarthomelist;break;case"kstkai_list":t=([e,a]=i(()=>Z()),e=await e,a(),e),t.value.list=t.value.kstkailist;break}return Y(t.value),(_t,nt)=>{var w,g,h;const T=$,B=tt,V=J,P=K,R=U,S=et,I=X;return _(),r("div",at,[j("div",{class:M({"box-result":s(p),"box-mobile":!s(p)})},[u(T,{"is-fold":"","is-mobile":s(E)},null,8,["is-mobile"]),((w=s(t))==null?void 0:w.code)===500?(_(),x(B,{key:0,"show-btn":"",title:s(t).msg},null,8,["title"])):(_(),r(H,{key:1},[s(d)==="answer"&&s(t)?(_(),r("div",st,[u(V,{info:s(t)},null,8,["info"])])):m("",!0)],64)),(g=s(t))!=null&&g.list?(_(),r("div",it,[u(P,{topicList:s(t).list,title:s(c)},null,8,["topicList","title"]),(h=s(t))!=null&&h.totalcount?(_(),r("div",ot,[u(R,{total:s(t).totalcount,"page-size":s(t).pagesize},null,8,["total","page-size"])])):m("",!0)])):m("",!0)],2),s(p)?(_(),x(I,{key:0,offset:130},{default:Q(()=>[u(S,{"is-mini":""})]),_:1})):m("",!0)])}}},gt=O(lt,[["__scopeId","data-v-e1145c15"]]);export{gt as default};
