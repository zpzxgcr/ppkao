const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Box-1.0.7.js","./entry-1.0.7.js","./entry-1.0.7.css","./Box-1.0.72.css"])))=>i.map(i=>d[i]);
import{ab as Q,P as U,ac as G,I as de,ad as Z,ae as ee,af as pe,ag as me,K as W,L as _e,M as te,O as ge,ah as he,ai as ve,aj as be,ak as ye,al as ke,r as D,am as fe,m as we,k as E,an as xe,w as J,ao as $e,c as r,h as P,o,f as e,z as $,n as O,i as a,H as C,a7 as V,R as Ie,j as R,y as A,Q as X,T as Ce,_ as j,x as Y,d as f,e as N,ap as q,aq as H,A as M,ar as Te,as as Le,at as Se,a9 as se,au as ze,av as Ve,s as Ee,aw as Me,C as ae,B as I,F as ne,ax as Be,ay as Ae,az as De}from"./entry-1.0.7.js";import{u as Ne,a as qe,_ as oe}from"./Card-1.0.7.js";import{u as Pe}from"./useSeo-1.0.7.js";import"./vue.-sixQ7xP-1.0.7.js";const Oe=de({direction:{type:W(String),default:"horizontal"},options:{type:W(Array),default:()=>[]},modelValue:{type:[String,Number,Boolean],default:void 0},block:Boolean,size:me,disabled:Boolean,validateEvent:{type:Boolean,default:!0},id:String,name:String,...pe(["ariaLabel"])}),Re={[ee]:t=>Q(t)||U(t)||G(t),[Z]:t=>Q(t)||U(t)||G(t)},Fe=te({name:"ElSegmented"}),je=te({...Fe,props:Oe,emits:Re,setup(t,{emit:n}){const s=t,i=ge("segmented"),g=he(),h=ve(),p=be(),{formItem:d}=ye(),{inputId:b,isLabeledByFormItem:m}=ke(s,{formItemContext:d}),c=D(null),y=fe(),u=we({isInit:!1,width:0,height:0,translateX:0,translateY:0,focusVisible:!1}),k=l=>{const S=v(l);n(ee,S),n(Z,S)},v=l=>X(l)?l.value:l,T=l=>X(l)?l.label:l,L=l=>!!(p.value||X(l)&&l.disabled),w=l=>s.modelValue===v(l),x=l=>s.options.find(S=>v(S)===l),B=l=>[i.e("item"),i.is("selected",w(l)),i.is("disabled",L(l))],_=()=>{if(!c.value)return;const l=c.value.querySelector(".is-selected"),S=c.value.querySelector(".is-selected input");if(!l||!S){u.width=0,u.height=0,u.translateX=0,u.translateY=0,u.focusVisible=!1;return}const z=l.getBoundingClientRect();u.isInit=!0,s.direction==="vertical"?(u.height=z.height,u.translateY=l.offsetTop):(u.width=z.width,u.translateX=l.offsetLeft);try{u.focusVisible=S.matches(":focus-visible")}catch{}},F=E(()=>[i.b(),i.m(h.value),i.is("block",s.block)]),ce=E(()=>({width:s.direction==="vertical"?"100%":`${u.width}px`,height:s.direction==="vertical"?`${u.height}px`:"100%",transform:s.direction==="vertical"?`translateY(${u.translateY}px)`:`translateX(${u.translateX}px)`,display:u.isInit?"block":"none"})),re=E(()=>[i.e("item-selected"),i.is("disabled",L(x(s.modelValue))),i.is("focus-visible",u.focusVisible)]),ue=E(()=>s.name||g.value);return xe(c,_),J(y,_),J(()=>s.modelValue,()=>{var l;_(),s.validateEvent&&((l=d==null?void 0:d.validate)==null||l.call(d,"change").catch(S=>$e()))},{flush:"post"}),(l,S)=>l.options.length?(o(),r("div",{key:0,id:a(b),ref_key:"segmentedRef",ref:c,class:$(a(F)),role:"radiogroup","aria-label":a(m)?void 0:l.ariaLabel||"segmented","aria-labelledby":a(m)?a(d).labelId:void 0},[e("div",{class:$([a(i).e("group"),a(i).m(s.direction)])},[e("div",{style:O(a(ce)),class:$(a(re))},null,6),(o(!0),r(C,null,V(l.options,(z,K)=>(o(),r("label",{key:K,class:$(B(z))},[e("input",{class:$(a(i).e("item-input")),type:"radio",name:a(ue),disabled:L(z),checked:w(z),onChange:Mt=>k(z)},null,42,["name","disabled","checked","onChange"]),e("div",{class:$(a(i).e("item-label"))},[Ie(l.$slots,"default",{item:z},()=>[R(A(T(z)),1)])],2)],2))),128))],2)],10,["id","aria-label","aria-labelledby"])):P("v-if",!0)}});var He=_e(je,[["__file","segmented.vue"]]);const Xe=Ce(He),Ye={key:0,class:"title"},Ke=["src"],Qe={key:0,src:"https://static.ppkao.com/www/images/hot.png",title:"热门题库",alt:"热门题库"},Ue={key:1,class:"search-box"},Ge=["onKeydown"],We={__name:"Questions",props:{category:{type:String,required:!0},kemuList:{type:Array,required:!0,default:[]},isMobile:{type:Boolean,default:!1}},setup(t){const n=t,s=E(()=>Ne(n==null?void 0:n.category)),i=D(""),g=h=>{i.value.length>=2&&(ze({path:"/so",query:{q:i.value,type:2}}),i.value="")};return(h,p)=>{var m;const d=H,b=Y("wave");return o(),r("div",{class:$({"side-box":!n.isMobile})},[n.isMobile?P("",!0):(o(),r("div",Ye,[e("img",{src:(m=a(s))==null?void 0:m.img},null,8,Ke),e("span",null,A(n.category),1)])),e("ul",{class:$({"tiku-list":!0,"mobile-list":n.isMobile})},[(o(!0),r(C,null,V(t.kemuList,(c,y)=>(o(),r("li",null,[f(d,{to:("linkTo"in h?h.linkTo:a(q))(c),title:c.name},{default:N(()=>[(n.isMobile?y<3:y%5===0)?(o(),r("img",Qe)):P("",!0),e("span",null,A(c.name),1)]),_:2},1032,["to","title"])]))),256))],2),n.isMobile?P("",!0):(o(),r("div",Ue,[M(e("input",{placeholder:"请输入想找的题库","onUpdate:modelValue":p[0]||(p[0]=c=>se(i)?i.value=c:null),onKeydown:Le(Se(g,["prevent"]),["enter"])},null,40,Ge),[[Te,a(i)]]),M((o(),r("button",{onClick:g},p[1]||(p[1]=[R("搜索")]))),[[b]])]))],2)}}},le=j(We,[["__scopeId","data-v-b800d3eb"]]),Je={class:"card"},Ze={class:"head"},et=["src","alt"],tt={class:"title"},st={class:"page-indicator"},at=["onMouseover"],nt={class:"topic-list"},ot={__name:"Topic",props:{type:{type:String,required:!0,default:1},topicList:{type:Array,required:!0,default:[]}},setup(t){const n=E(()=>qe(t.type)),s=E(()=>{var m,c;return`url("${(m=n.value)==null?void 0:m.bgImg}") no-repeat calc(100% - 4px) 14px, ${(c=n.value)==null?void 0:c.bg}`}),i=Math.ceil(t.topicList.length/7),g=E(()=>[...Array(i).keys()]),h=D(0);let p=null;const d=()=>{h.value=(h.value+1)%i},b=m=>Math.floor(m/7)===h.value?"active":"hidden";return Ve(()=>{p=Ee(d,3e3)}),Me(()=>{clearInterval(p)}),(m,c)=>{var u,k,v,T,L;const y=H;return o(),r("div",Je,[e("div",Ze,[e("img",{src:(u=a(n))==null?void 0:u.img,alt:(k=a(n))==null?void 0:k.text},null,8,et),e("div",tt,[e("h2",null,A((v=a(n))==null?void 0:v.text),1),e("span",{style:O({background:(T=a(n))==null?void 0:T.fontColor,"-webkit-background-clip":"text"})},A((L=a(n))==null?void 0:L.text),5)])]),e("div",{class:"body",style:O({background:a(s)})},[e("ul",st,[(o(!0),r(C,null,V(a(g),(w,x)=>{var B,_;return o(),r("li",{key:x,style:O({background:x===a(h)?(B=a(n))==null?void 0:B.color:(_=a(n))==null?void 0:_.defaultColor}),onMouseover:F=>h.value=x},null,44,at)}),128))]),e("section",null,[e("ul",nt,[(o(!0),r(C,null,V(t.topicList,(w,x)=>(o(),r("li",{key:w.id,class:$(b(x))},[c[0]||(c[0]=e("img",{src:"https://static.ppkao.com/www/images/icon-topic.png"},null,-1)),f(y,{to:("linkTo"in m?m.linkTo:a(q))(w),class:"t-e"},{default:N(()=>[R(A(w.title),1)]),_:2},1032,["to"])],2))),128))])])],4),m.$device.isDesktop?(o(),r(C,{key:0},[c[1]||(c[1]=e("div",{class:"circle-deg-1"},null,-1)),c[2]||(c[2]=e("div",{class:"circle-deg-2"},null,-1))],64)):P("",!0)])}}},ie=j(ot,[["__scopeId","data-v-c0b01bbe"]]),lt=ae(()=>ne(()=>import("./Box-1.0.7.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default||t)),it={class:"box"},ct={class:"container"},rt={class:"kemu-box"},ut={class:"category-box"},dt=["href"],pt=["src"],mt={class:"segment"},_t={class:"swiper-box"},gt={class:"search"},ht={class:"left-card-box"},vt={class:"tiku-card"},bt={__name:"Mobile",props:{data:{type:Object,required:!0,default:{}}},setup(t){const n=D(t.data.classList[0].name),s=D(0),i=D([{name:"网校",img:"https://static.ppkao.com/www/images/icon-wangxiao.png",url:"https://wangxiao.ppkao.com"},{name:"搜题",img:"https://static.ppkao.com/www/images/icon-h5.png",url:"https://h5.ppkao.com"},{name:"小程序",img:"https://static.ppkao.com/www/images/icon-xcx.png",url:t.data.xcxlink},{name:"AI题库",img:"https://static.ppkao.com/www/images/icon-ai.png",url:"/kstkai"}]),g=t.data.classList.map(p=>p.name),h=p=>{s.value=g.findIndex(d=>d===p)};return(p,d)=>{var T,L,w,x,B;const b=lt,m=Xe,c=le,y=H,u=oe,k=ie,v=Y("wave");return o(),r("div",it,[e("div",ct,[f(b,{"is-mobile":""})]),e("div",rt,[e("ul",ut,[(o(!0),r(C,null,V(a(i),_=>(o(),r("li",null,[e("a",{href:_.url,target:"_blank"},[e("img",{src:_.img},null,8,pt),e("span",null,A(_.name),1)],8,dt)]))),256))]),e("div",mt,[f(m,{modelValue:a(n),"onUpdate:modelValue":d[0]||(d[0]=_=>se(n)?n.value=_:null),onChange:h,options:a(g),name:"tabs",size:"large",block:""},null,8,["modelValue","options"]),e("div",_t,[(o(!0),r(C,null,V((T=t.data)==null?void 0:T.classList,(_,F)=>(o(),I(c,{class:"wrap-item","is-mobile":"",style:O({display:F===a(s)?"inline-block":"none"}),category:_.name,"kemu-list":_.levelclasslist},null,8,["style","category","kemu-list"]))),256))])])]),e("div",gt,[e("div",ht,[M((o(),I(y,{to:("linkTo"in p?p.linkTo:a(q))("/zhidao")},{default:N(()=>d[1]||(d[1]=[e("h6",null,"连接问题与答案",-1),e("h4",null,"问&答",-1),e("h5",null,"有问题就一定有答案",-1)])),_:1},8,["to"])),[[v]]),M((o(),I(y,{to:("linkTo"in p?p.linkTo:a(q))("/smarthome")},{default:N(()=>d[2]||(d[2]=[e("h6",null,"使用指南轻松上手",-1),e("h4",null,"智能家居",-1),e("h5",null,"智能家居使用说明",-1)])),_:1},8,["to"])),[[v]])])]),e("div",vt,[(o(!0),r(C,null,V((L=t.data)==null?void 0:L.classList,_=>(o(),I(u,{"is-mobile":"",key:_.id,category:_},null,8,["category"]))),128))]),f(k,{class:"topic-box",type:"1","topic-list":(w=t.data)==null?void 0:w.kstklist},null,8,["topic-list"]),f(k,{class:"topic-box",type:"2","topic-list":(x=t.data)==null?void 0:x.wangkelist},null,8,["topic-list"]),f(k,{class:"topic-box",type:"3","topic-list":(B=t.data)==null?void 0:B.zhidaolist},null,8,["topic-list"])])}}},yt=j(bt,[["__scopeId","data-v-13ad4781"]]),kt=ae(()=>ne(()=>import("./Box-1.0.7.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default||t)),ft={class:"box"},wt={class:"container"},xt={class:"search"},$t={class:"left-card"},It={class:"right-card"},Ct={class:"banner"},Tt={href:"https://kzs.ppkao.com"},Lt={href:"/download"},St={class:"tiku-card"},zt={class:"topic-card"},Vt={__name:"Desktop",props:{data:{type:Object,required:!0,default:{}}},setup(t){return(n,s)=>{var m,c,y,u,k;const i=le,g=H,h=kt,p=oe,d=ie,b=Y("wave");return o(),r("div",ft,[e("div",wt,[(o(!0),r(C,null,V((m=t.data)==null?void 0:m.classList,(v,T)=>(o(),I(i,{class:$(["sidebar-left","content","sidebar-right"][T]),category:v.name,"kemu-list":v.levelclasslist},null,8,["class","category","kemu-list"]))),256))]),e("div",xt,[e("div",$t,[M((o(),I(g,{to:("linkTo"in n?n.linkTo:a(q))("/zhidao")},{default:N(()=>s[0]||(s[0]=[e("h6",null,"连接问题与答案",-1),e("h4",null,"问&答",-1),e("h5",null,"有问题就一定有答案",-1)])),_:1},8,["to"])),[[b]]),M((o(),I(g,{to:("linkTo"in n?n.linkTo:a(q))("/smarthome")},{default:N(()=>s[1]||(s[1]=[e("h6",null,"使用指南轻松上手",-1),e("h4",null,"智能家居",-1),e("h5",null,"全屋智能|智能家居|智能产品",-1)])),_:1},8,["to"])),[[b]])]),e("div",It,[f(h)])]),e("ul",Ct,[s[6]||(s[6]=e("li",null,[e("span",null,"扫码使用赞题库小程序 手机搜题更便捷"),e("div",{class:"qrcode"},[e("img",{src:"https://static.ppkao.com/www/images/zantiku.jpg"})])],-1)),e("li",null,[e("a",Tt,[s[3]||(s[3]=e("span",null,"支持文档导入 资料快速变题库",-1)),M((o(),r("button",null,s[2]||(s[2]=[R("现在体验")]))),[[b]])])]),e("li",null,[e("a",Lt,[s[5]||(s[5]=e("span",null,"安装电脑客户端 点击一下秒出答案",-1)),M((o(),r("button",null,s[4]||(s[4]=[R("点击安装")]))),[[b]])])])]),e("div",St,[(o(!0),r(C,null,V((c=t.data)==null?void 0:c.classList,v=>(o(),I(p,{key:v.id,category:v},null,8,["category"]))),128))]),e("div",zt,[f(d,{type:"1","topic-list":(y=t.data)==null?void 0:y.kstklist},null,8,["topic-list"]),f(d,{type:"2","topic-list":(u=t.data)==null?void 0:u.wangkelist},null,8,["topic-list"]),f(d,{type:"3","topic-list":(k=t.data)==null?void 0:k.zhidaolist},null,8,["topic-list"])])])}}},Et=j(Vt,[["__scopeId","data-v-0b8ac2e1"]]),qt={__name:"index",async setup(t){let n,s;const{isMobileOrTablet:i}=Be(),g=([n,s]=Ae(()=>De()),n=await n,s(),n);return Pe(g.value),(h,p)=>{const d=yt,b=Et;return a(i)?(o(),I(d,{key:0,data:a(g)},null,8,["data"])):(o(),I(b,{key:1,data:a(g)},null,8,["data"]))}}};export{qt as default};
