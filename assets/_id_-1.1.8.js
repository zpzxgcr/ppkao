const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Chapter-1.1.8.js","./el-skeleton-item-1.1.8.js","./entry-1.1.8.js","./entry-1.1.8.css","./el-skeleton-item-1.1.8.css","./el-dialog-1.1.8.js","./index-1.1.85.js","./el-dialog-1.1.8.css","./Chapter-1.1.8.css","./Menu-1.1.8.js","./config-1.1.8.js","./Menu-1.1.8.css","./index-1.1.87.js","./el-table-1.1.8.js","./el-scrollbar-1.1.8.js","./el-scrollbar-1.1.8.css","./el-popper-1.1.8.js","./el-popper-1.1.8.css","./_Uint8Array-1.1.8.js","./_initCloneObject-1.1.8.js","./el-tag-1.1.8.js","./isEqual-1.1.8.js","./el-tag-1.1.8.css","./el-checkbox-1.1.8.js","./el-checkbox-1.1.8.css","./el-table-1.1.8.css","./el-tooltip-1.1.8.js","./index-1.1.86.css"])))=>i.map(i=>d[i]);
import{I as W,J as z,K as O,L as X,M as V,N as ut,k as E,O as Y,P as H,Q as pt,B as tt,o as T,e as S,R as et,n as st,z as A,i as u,S as at,T as nt,U as dt,V as it,W as w,X as mt,Y as N,Z,$ as R,a0 as ot,a1 as ht,a2 as Q,_ as ft,a3 as _t,D as yt,r as J,m as bt,w as Tt,c as k,d as D,C as F,f as r,y as $,H as G,a4 as B,a5 as gt,a6 as Lt,j as Dt,a7 as St,F as q,a8 as Nt}from"./entry-1.1.8.js";import{E as It}from"./el-dialog-1.1.8.js";const xt=W({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:O([Number,Object]),default:()=>z({})},sm:{type:O([Number,Object]),default:()=>z({})},md:{type:O([Number,Object]),default:()=>z({})},lg:{type:O([Number,Object]),default:()=>z({})},xl:{type:O([Number,Object]),default:()=>z({})}}),rt=Symbol("rowContextKey"),vt=V({name:"ElCol"}),kt=V({...vt,props:xt,setup(e){const s=e,{gutter:n}=ut(rt,{gutter:E(()=>0)}),t=Y("col"),f=E(()=>{const i={};return n.value&&(i.paddingLeft=i.paddingRight=`${n.value/2}px`),i}),m=E(()=>{const i=[];return["span","offset","pull","push"].forEach(a=>{const y=s[a];H(y)&&(a==="span"?i.push(t.b(`${s[a]}`)):y>0&&i.push(t.b(`${a}-${s[a]}`)))}),["xs","sm","md","lg","xl"].forEach(a=>{H(s[a])?i.push(t.b(`${a}-${s[a]}`)):pt(s[a])&&Object.entries(s[a]).forEach(([y,g])=>{i.push(y!=="span"?t.b(`${a}-${y}-${g}`):t.b(`${a}-${g}`))})}),n.value&&i.push(t.is("guttered")),[t.b(),i]});return(i,c)=>(T(),tt(at(i.tag),{class:A(u(m)),style:st(u(f))},{default:S(()=>[et(i.$slots,"default")]),_:3},8,["class","style"]))}});var Et=X(kt,[["__file","col.vue"]]);const wt=nt(Et),Ct=["start","center","end","space-around","space-between","space-evenly"],jt=["top","middle","bottom"],Pt=W({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:Ct,default:"start"},align:{type:String,values:jt}}),$t=V({name:"ElRow"}),At=V({...$t,props:Pt,setup(e){const s=e,n=Y("row"),t=E(()=>s.gutter);dt(rt,{gutter:t});const f=E(()=>{const i={};return s.gutter&&(i.marginRight=i.marginLeft=`-${s.gutter/2}px`),i}),m=E(()=>[n.b(),n.is(`justify-${s.justify}`,s.justify!=="start"),n.is(`align-${s.align}`,!!s.align)]);return(i,c)=>(T(),tt(at(i.tag),{class:A(u(m)),style:st(u(f))},{default:S(()=>[et(i.$slots,"default")]),_:3},8,["class","style"]))}});var Rt=X(At,[["__file","row.vue"]]);const Kt=nt(Rt),zt=it("topic",{state:()=>({chapterLoad:!1,chapterData:[],sectionLoad:!1,sectionData:[],currentTopicList:[],userObjectList:[],currentSubject:{},treeListData:[],chapterTreeExpandIdArr:[],chapterId:"",currentSubjectDate:"",treePaperListData:[],paperTreeExpandIdArr:[],paperTableData:[],paperTableDataIsLoader:!0,paperTreeListDataIsLoaded:!1,userSubjectList:[],paperResultArr:[],isShowCorrectDialog:!1,allPaperIdList:[]}),actions:{handleCurrentTopicList(e){const{index:s,answer:n,isRight:t,userAnswer:f,isShowAnswer:m,isAnLi:i,bigIndex:c}=e;if(i||i===0){const d={isRight:t,answer:n,userAnswer:f,showAnswer:m};this.$state.currentTopicList[i]||(this.$state.currentTopicList[i]=[],this.$state.currentTopicList[c]=[]),c&&(this.$state.currentTopicList[c][s]=d),this.$state.currentTopicList[i][s]=d}else this.$state.currentTopicList[s]={userAnswer:f,answer:n,isRight:t,showAnswer:m}},async getTikuData(e){this.chapterLoad=!0,N({id:e}).then(s=>{s.S==="1"&&(this.chapterData=s.KSTKZJList,this.sectionLoad=!0,N({id:s.KSTKZJList[0].id}).then(({S:n,KSTKZJList:t})=>{n==="1"&&(this.sectionData=t)}).finally(this.sectionLoad=!1))}).finally(this.chapterLoad=!1)},subjectInitialize(e,s){const n=e[0];s?this.onGetPaperTreeList():this.onGetChapter(n)},async setCurrentSubject(e,s,n){if(!n){const t=e.isflag==="3"?e.tkid:e.Tid||e.id;R("chapterId",t),this.chapterId=t,this.currentSubject=e,this.paperTreeExpandIdArr=[],this.chapterTreeExpandIdArr=[],R("currentSubjectInfo",e),s?this.onGetPaperTreeList():this.onGetChapter(e)}},async onGetPaperTreeList(){let{KSTKZJList:e,S:s}=await N({id:w("questionBankId")}),n;if(s==="1"){if(n=e.every(t=>t.lnztNum==="0"&&t.mnktNum==="0"),n){const{KSTKList:t,S:f}=await Z({id:w("questionBankId")});f==="1"&&e.unshift(t[0])}e=e.filter(t=>(+t.mnktNum||+t.lnztNum)&&(t.zjIsPay==="1"||t.tkIsPay==="1")),e.forEach(t=>{this.paperTreeExpandIdArr.length||this.paperTreeExpandIdArr.push(t.id),(+t.mnktNum||+t.lnztNum)&&(t.erzi=[{tname:`模拟试题（${+t.mnktNum}）`,leaf:!1,paperTid:t.kstid,type:"1",num:+t.mnktNum},{tname:`历年真题（${+t.lnztNum}）`,leaf:!1,paperTid:t.kstid,type:"2",num:+t.lnztNum}])}),this.treePaperListData=e}else this.treePaperListData=[];this.paperTableData=[],this.paperTreeListDataIsLoaded=!0},async onGetChapter(e){this.treeListData=[];const{S:s,KSTKZJList:n}=await(e.linktidisleve==="0"?N({id:e.linktid}):N({id:e.id||this.getChapterId}));s==="1"&&(this.treeListData=n.map(t=>(Object.assign(t,{leaf:t.isleve==="1"&&t.linktidisleve==="1"}),t.zjIsPay!=="0"&&(t.isleve==="0"||t.linktidisleve==="0")&&!this.chapterTreeExpandIdArr.length&&this.chapterTreeExpandIdArr.push(t.id),t)).filter(t=>t.zjIsPay==="1"),this.treeListDataIsLoaded=!0)},onOpenCorrectDialog(){this.isShowCorrectDialog=!this.isShowCorrectDialog},async onPaperResultArr(e){const{paperId:s,linktid:n,submitStr:t}=e;this.$state.paperResultArr.push(t),this.$state.paperResultArr.length>=10&&(await mt({paperId:s,linktid:n,postStr:this.$state.paperResultArr.join("[|]")}),this.$state.paperResultArr=[])}},getters:{getChapterId(e){return e.chapterId||w("chapterId")}}}),Ot=it("print",{state:()=>({status:"",testDate:"",reviewTime:0,exerciseTopicNum:0,testRemainDays:0,allSubjectPlan:{},todayRemainTopicNum:0,todayRemainTime:0}),actions:{async planDataInit(){const{keMuID:e,tiKuID:s,buyID:n,linktid:t}=w("relativeInfo"),f=await Q({ID:e}),{ChapterExamNum:m,ChapterExamDone:i}=f.DataList[0];if(this.allSubjectPlan.length&&this.allSubjectPlan[e])if(+m){const{todayRemainTopicNum:c,todayRemainTime:d,status:a}=this.allSubjectPlan[e];this.status=a,this.allSubjectPlan[e].topicNeedNumPerDay=Math.ceil(m-i)/this.getTestRemainDays,c||(this.status="learned")}else{const c=await Q({ID:t||n}),{ChapterExamNum:d,ChapterExamDone:a}=c.DataList[0],{todayRemainTopicNum:y,todayRemainTime:g,status:C}=this.allSubjectPlan[e];this.status=C,this.allSubjectPlan[e].topicNeedNumPerDay=Math.ceil(d-a)/this.getTestRemainDays}else this.status="unMake"},async getPlanExamIdList(){const{keMuID:e,tiKuID:s,buyID:n,linktid:t}=w("relativeInfo");this.allSubjectPlan.length&&this.allSubjectPlan[e]||N({ID:e}).then(async f=>{const{KSTKZJList:m}=f;if(m.forEach(c=>{c.SJtype="1"}),m.filter(c=>c.zjIsPay!=="0"),!m.every(c=>c.lnztNum==="0"&&c.mnktNum==="0")){const{KSTKList:c}=await Z({id:e}),d=[...c,...m];d.forEach(y=>{y.SJtype=y.SJtype||"1"});let a=Math.floor(Math.random()*d.length);ht({tid:d[a].id}).then(y=>{let g=[],C=0;y.tmtypeNum.forEach(M=>{g.push(M.TmType),C+=+M.StNum}),this.onGetExamId(C,g,d[a].id)})}})},onGetExamId(e,s,n){ot({examNum:e,examType:s,typeId:n,doType:"random"}).then(t=>{t.S})}},getters:{getTestRemainDays:e=>{const s=+new Date,n=+new Date(e.testDate);return Math.floor((n-s)/(24*3600*1e3))}},persist:!0}),Mt=F(()=>q(()=>import("./Chapter-1.1.8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url).then(e=>e.default||e)),Jt=F(()=>q(()=>import("./Menu-1.1.8.js"),__vite__mapDeps([9,10,2,3,11]),import.meta.url).then(e=>e.default||e)),Gt=F(()=>q(()=>import("./index-1.1.87.js"),__vite__mapDeps([12,13,2,3,14,15,16,6,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url).then(e=>e.default||e)),Vt={class:"box"},Bt={class:"tab__top"},Zt={class:"study__banner"},Ft={class:"banner__left"},qt={class:"tips"},Ut={class:"my-header"},Ht=["id"],Qt={class:"topic__filter"},Wt={class:"topic__classify"},Xt={class:"btn__container"},Yt=["onClick"],te={class:"topic__type"},ee={class:"btn__container"},se=["onClick"],ae={class:"topic__num"},ne={class:"btn__container"},ie=["onClick"],oe={__name:"[id]",setup(e){const s=Ot(),n=zt(),t=_t(),f=yt(),{id:m}=f.params;J(!1);const i=J({tname:"请先选择章节"}),c=J([]),d=J(!1),a=bt({doTypeArr:[{name:"未做题",type:"notdo"},{name:"已做题",type:"doneExam"},{name:"做错题",type:"errorExam"}],topicNumList:[],currentDoType:"notdo",numArrList:[20,50,100],currentDoNum:20,currentExamId:"",currentExamMode:"practice",currentClickChapterInfo:{},treeDataIsLoaded:!1,tableDataIsLoaded:!1,isLoading:!1,isShowPlanModal:!1,defaultExpand:[]}),y=E(()=>s.status==="unMake"?"制定专属学习计划，规划学习进步更快哦":s.status==="unLearn"?"今日还有234道题，20分钟学习时间未完成哦":"今日已完成，明天继续加油哦!"),g=p=>{},C=async()=>{a.isLoading=!0;const{currentDoType:p,currentDoNum:o,topicNumList:I,currentExamId:L,currentExamMode:h,currentClickChapterInfo:b}=a;let{linktid:x,tname:v}=b;x||(x=b.tn===w("linktid")?w("linktid"):""),R("chapterName",v);const j=I.filter(l=>l==null?void 0:l.isSelected).map(l=>l.tmtype);try{const{examIdList:l,S:_}=await ot({doType:p,typeId:L,examType:j.join(","),examNum:o});_==="1"&&(n.currentTopicList=[],d.value=!1,R("examIdList",l),R("mode",h),t.push({path:"/home/exam",query:{examIdList:l,linktid:x||"",mode:h,chapterName:v}})),a.isLoading=!1}catch(l){throw a.isLoading=!1,l}},M=async p=>{a.tableDataIsLoaded=!1,c.value=[],i.value=p;let o=[];const{S:I,KSTKZJList:L}=await N({id:p.id||n.currentSubject.id});if(I==="1")o=L;else if(p.linktidisleve==="0"){R("linktid",p.linktid);const{S:h,KSTKZJList:b}=await N({id:p.linktid});h==="1"&&(o=b)}else{const{KSTKList:h,S:b}=await Z({id:p.id||n.currentSubject.id});b==="1"&&(o=h)}p&&!p.tname&&o.length>0&&(i.value={tname:n.currentSubject.tname}),o.forEach(h=>{const{tname:b,ChapterExamDone:x,ChapterExamRight:v,stnum:j}=h;let l=b;const _=Number(x),P=Number(j);let K=_?(Number(v)/_*100).toFixed(0)+"%":"0%",U=_?(_/P*100).toFixed(0)+"%":"0%";v==="0"&&(K="0%"),Object.assign(h,{nodeName:l,accuracy:K,progress:U,topicNum:j,chapterExamDone:x}),h.isleve==="1"&&h.linktidisleve==="1"&&Object.assign(h,{leaf:!0}),c.value=o.filter(ct=>ct.zjIsPay!=="0")}),a.tableDataIsLoaded=!0},lt=async(p,o)=>{a.currentClickChapterInfo=p;const{S:I,tmtypeNum:L}=await Nt({tid:p.id});I==="1"&&(a.topicNumList=L.map(h=>({...h,isSelected:!1})),a.currentExamMode=o,a.currentExamId=p.id,d.value=!0)};return n.getTikuData(m),Tt(()=>n.currentSubject,()=>M({})),(p,o)=>{const I=Mt,L=wt,h=Jt,b=Gt,x=Kt,v=Lt,j=It;return T(),k(G,null,[D(x,{class:"mock-room"},{default:S(()=>[D(L,{lg:{span:5,offset:1},xl:{span:4,offset:2},class:"hidden-md-and-down"},{default:S(()=>[D(I)]),_:1}),D(L,{lg:16,md:22,sm:22,xl:16,class:"tab-box"},{default:S(()=>[D(h),r("div",Vt,[r("div",Bt,[r("div",null,[r("h2",null,$(u(i).tname),1),o[2]||(o[2]=r("p",{class:"mode-tips"},"练习模式：边做题边出答案 　　背题模式：直接显示答案，无需做题，无做题记录",-1))]),r("div",Zt,[r("div",Ft,[o[3]||(o[3]=r("img",{class:"left-img",src:"https://jscdn.ppkao.com/shop_tiku/assets/images/study_plan.png"},null,-1)),o[4]||(o[4]=r("p",{class:"hr"},null,-1)),r("p",qt,$(u(y)),1)]),r("button",{class:"study-btn",onClick:o[0]||(o[0]=l=>u(a).isShowPlanModal=!0)},"学习")])]),D(b,{tableData:u(c),onGetTopicNumAndType:lt,onOnRowClick:g},null,8,["tableData"])])]),_:1})]),_:1}),D(j,{modelValue:u(d),"onUpdate:modelValue":o[1]||(o[1]=l=>St(d)?d.value=l:null),width:"40%"},{header:S(({close:l,titleId:_,titleClass:P})=>[r("div",Ut,[r("h4",{id:_,class:A(P),style:{"font-size":"20px"}},"做题筛选",10,Ht)])]),default:S(()=>[r("div",Qt,[r("div",Wt,[o[5]||(o[5]=r("p",{class:"title"},"试题分类",-1)),r("div",Xt,[(T(!0),k(G,null,B(u(a).doTypeArr,({name:l,type:_})=>(T(),k("div",{onClick:P=>u(a).currentDoType=_},[r("button",{class:A({selected:_===u(a).currentDoType})},$(l),3)],8,Yt))),256))])]),r("div",te,[o[6]||(o[6]=r("p",{class:"title"},"题目类型",-1)),r("div",ee,[(T(!0),k(G,null,B(u(a).topicNumList,({tmtype:l,num:_,isSelected:P},K)=>(T(),k("div",{onClick:U=>u(a).topicNumList[K].isSelected=!u(a).topicNumList[K].isSelected},[r("button",{class:A({selected:P})},$(("getTopicType"in p?p.getTopicType:u(gt))(l))+"（"+$(_)+"）",3)],8,se))),256))])]),r("div",ae,[o[7]||(o[7]=r("p",{class:"title"},"做题数量",-1)),r("div",ne,[(T(!0),k(G,null,B(u(a).numArrList,l=>(T(),k("div",{onClick:_=>u(a).currentDoNum=l},[r("button",{class:A({selected:l===u(a).currentDoNum})},$(l),3)],8,ie))),256))])]),D(v,{loading:u(a).isLoading,class:"start",onClick:C},{default:S(()=>o[8]||(o[8]=[Dt("开始做题")])),_:1},8,["loading"])])]),_:1},8,["modelValue"])],64)}}},re=ft(oe,[["__scopeId","data-v-232acc32"]]),ue=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{ue as _,zt as u};
