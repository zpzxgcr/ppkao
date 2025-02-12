import{I as Q,aR as ae,b8 as se,L as W,M,aS as te,N as Z,ci as ne,k,cj as re,c as K,o as w,f as R,h as U,R as E,z as p,i as e,y as ie,d as N,e as g,B as j,S as de,ck as ce,aT as ue,n as X,aa as fe,ac as _,K as Y,aY as ve,bZ as ye,af as G,r as S,cl as pe,cm as ge,br as me,cn as Ce,w as J,aN as be,at as he,co as H,b6 as Ee,ay as Se,bn as ke,O as we,aK as Ie,A as Te,cp as De,cq as Be,b$ as Ae,aI as Fe,cr as Pe,aL as $e,U as Le,T as Oe}from"./entry-1.1.8.js";import{i as Re,E as Ne}from"./index-1.1.85.js";const x=Symbol("dialogInjectionKey"),ee=Q({center:Boolean,alignCenter:Boolean,closeIcon:{type:ae},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,headerClass:String,bodyClass:String,footerClass:String,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Me={close:()=>!0},ze=(...o)=>n=>{o.forEach(a=>{se(a)?a(n):a.value=n})},Ve=M({name:"ElDialogContent"}),Ke=M({...Ve,props:ee,emits:Me,setup(o,{expose:n}){const a=o,{t:F}=te(),{Close:r}=ce,{dialogRef:f,headerRef:m,bodyId:C,ns:s,style:i}=Z(x),{focusTrapRef:v}=Z(ne),y=k(()=>[s.b(),s.is("fullscreen",a.fullscreen),s.is("draggable",a.draggable),s.is("align-center",a.alignCenter),{[s.m("center")]:a.center}]),b=ze(v,f),c=k(()=>a.draggable),u=k(()=>a.overflow),{resetPosition:I}=re(f,m,c,u);return n({resetPosition:I}),(t,P)=>(w(),K("div",{ref:e(b),class:p(e(y)),style:X(e(i)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:m,class:p([e(s).e("header"),t.headerClass,{"show-close":t.showClose}])},[E(t.$slots,"header",{},()=>[R("span",{role:"heading","aria-level":t.ariaLevel,class:p(e(s).e("title"))},ie(t.title),11,["aria-level"])]),t.showClose?(w(),K("button",{key:0,"aria-label":e(F)("el.dialog.close"),class:p(e(s).e("headerbtn")),type:"button",onClick:T=>t.$emit("close")},[N(e(ue),{class:p(e(s).e("close"))},{default:g(()=>[(w(),j(de(t.closeIcon||e(r))))]),_:1},8,["class"])],10,["aria-label","onClick"])):U("v-if",!0)],2),R("div",{id:e(C),class:p([e(s).e("body"),t.bodyClass])},[E(t.$slots,"default")],10,["id"]),t.$slots.footer?(w(),K("footer",{key:0,class:p([e(s).e("footer"),t.footerClass])},[E(t.$slots,"footer")],2)):U("v-if",!0)],6))}});var Ue=W(Ke,[["__file","dialog-content.vue"]]);const je=Q({...ee,appendToBody:Boolean,appendTo:{type:Y([String,Object]),default:"body"},beforeClose:{type:Y(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,headerClass:String,bodyClass:String,footerClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[_]:o=>fe(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ze=(o,n)=>{var a;const r=ve().emit,{nextZIndex:f}=ye();let m="";const C=G(),s=G(),i=S(!1),v=S(!1),y=S(!1),b=S((a=o.zIndex)!=null?a:f());let c,u;const I=pe("namespace",ge),t=k(()=>{const d={},h=`--${I.value}-dialog`;return o.fullscreen||(o.top&&(d[`${h}-margin-top`]=o.top),o.width&&(d[`${h}-width`]=me(o.width))),d}),P=k(()=>o.alignCenter?{display:"flex"}:{});function T(){r("opened")}function z(){r("closed"),r(_,!1),o.destroyOnClose&&(y.value=!1)}function V(){r("close")}function $(){u==null||u(),c==null||c(),o.openDelay&&o.openDelay>0?{stop:c}=H(()=>L(),o.openDelay):L()}function D(){c==null||c(),u==null||u(),o.closeDelay&&o.closeDelay>0?{stop:u}=H(()=>O(),o.closeDelay):O()}function B(){function d(h){h||(v.value=!0,i.value=!1)}o.beforeClose?o.beforeClose(d):D()}function A(){o.closeOnClickModal&&B()}function L(){Ee&&(i.value=!0)}function O(){i.value=!1}function l(){r("openAutoFocus")}function q(){r("closeAutoFocus")}function oe(d){var h;((h=d.detail)==null?void 0:h.focusReason)==="pointer"&&d.preventDefault()}o.lockScroll&&Ce(i);function le(){o.closeOnPressEscape&&B()}return J(()=>o.modelValue,d=>{d?(v.value=!1,$(),y.value=!0,b.value=Re(o.zIndex)?f():b.value++,be(()=>{r("open"),n.value&&(n.value.parentElement.scrollTop=0,n.value.parentElement.scrollLeft=0,n.value.scrollTop=0)})):i.value&&D()}),J(()=>o.fullscreen,d=>{n.value&&(d?(m=n.value.style.transform,n.value.style.transform=""):n.value.style.transform=m)}),he(()=>{o.modelValue&&(i.value=!0,y.value=!0,$())}),{afterEnter:T,afterLeave:z,beforeLeave:V,handleClose:B,onModalClick:A,close:D,doClose:O,onOpenAutoFocus:l,onCloseAutoFocus:q,onCloseRequested:le,onFocusoutPrevented:oe,titleId:C,bodyId:s,closed:v,style:t,overlayDialogStyle:P,rendered:y,visible:i,zIndex:b}},Ye=M({name:"ElDialog",inheritAttrs:!1}),Ge=M({...Ye,props:je,emits:qe,setup(o,{expose:n}){const a=o,F=Se();ke({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},k(()=>!!F.title));const r=we("dialog"),f=S(),m=S(),C=S(),{visible:s,titleId:i,bodyId:v,style:y,overlayDialogStyle:b,rendered:c,zIndex:u,afterEnter:I,afterLeave:t,beforeLeave:P,handleClose:T,onModalClick:z,onOpenAutoFocus:V,onCloseAutoFocus:$,onCloseRequested:D,onFocusoutPrevented:B}=Ze(a,f);Le(x,{dialogRef:f,headerRef:m,bodyId:v,ns:r,rendered:c,style:y});const A=Be(z),L=k(()=>a.draggable&&!a.fullscreen);return n({visible:s,dialogContentRef:C,resetPosition:()=>{var l;(l=C.value)==null||l.resetPosition()}}),(l,q)=>(w(),j(e(Ne),{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},{default:g(()=>[N(Ie,{name:"dialog-fade",onAfterEnter:e(I),onAfterLeave:e(t),onBeforeLeave:e(P),persisted:""},{default:g(()=>[Te(N(e(De),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(u)},{default:g(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(i),"aria-describedby":e(v),class:p(`${e(r).namespace.value}-overlay-dialog`),style:X(e(b)),onClick:e(A).onClick,onMousedown:e(A).onMousedown,onMouseup:e(A).onMouseup},[N(e(Ae),{loop:"",trapped:e(s),"focus-start-el":"container",onFocusAfterTrapped:e(V),onFocusAfterReleased:e($),onFocusoutPrevented:e(B),onReleaseRequested:e(D)},{default:g(()=>[e(c)?(w(),j(Ue,Fe({key:0,ref_key:"dialogContentRef",ref:C},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(L),overflow:l.overflow,fullscreen:l.fullscreen,"header-class":l.headerClass,"body-class":l.bodyClass,"footer-class":l.footerClass,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(T)}),Pe({header:g(()=>[l.$slots.title?E(l.$slots,"title",{key:1}):E(l.$slots,"header",{key:0,close:e(T),titleId:e(i),titleClass:e(r).e("title")})]),default:g(()=>[E(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:g(()=>[E(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","onClose"])):U("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[$e,e(s)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var Je=W(Ge,[["__file","dialog.vue"]]);const We=Oe(Je);export{We as E};
