import{L as y,M as c,O as u,ah as k,c as r,o as n,f as l,i as e,I as v,aU as $,k as d,bt as h,h as C,R as p,d as B,n as N,z as i,y as _,T as w}from"./entry-1.0.7.js";const V=c({name:"ImgEmpty"}),x=c({...V,setup(f){const a=u("empty"),t=k();return(o,m)=>(n(),r("svg",{viewBox:"0 0 79 86",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[l("defs",null,[l("linearGradient",{id:`linearGradient-1-${e(t)}`,x1:"38.8503086%",y1:"0%",x2:"61.1496914%",y2:"100%"},[l("stop",{"stop-color":`var(${e(a).cssVarBlockName("fill-color-1")})`,offset:"0%"},null,8,["stop-color"]),l("stop",{"stop-color":`var(${e(a).cssVarBlockName("fill-color-4")})`,offset:"100%"},null,8,["stop-color"])],8,["id"]),l("linearGradient",{id:`linearGradient-2-${e(t)}`,x1:"0%",y1:"9.5%",x2:"100%",y2:"90.5%"},[l("stop",{"stop-color":`var(${e(a).cssVarBlockName("fill-color-1")})`,offset:"0%"},null,8,["stop-color"]),l("stop",{"stop-color":`var(${e(a).cssVarBlockName("fill-color-6")})`,offset:"100%"},null,8,["stop-color"])],8,["id"]),l("rect",{id:`path-3-${e(t)}`,x:"0",y:"0",width:"17",height:"36"},null,8,["id"])]),l("g",{id:"Illustrations",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[l("g",{id:"B-type",transform:"translate(-1268.000000, -535.000000)"},[l("g",{id:"Group-2",transform:"translate(1268.000000, 535.000000)"},[l("path",{id:"Oval-Copy-2",d:"M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",fill:`var(${e(a).cssVarBlockName("fill-color-3")})`},null,8,["fill"]),l("polygon",{id:"Rectangle-Copy-14",fill:`var(${e(a).cssVarBlockName("fill-color-7")})`,transform:"translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",points:"13 58 53 58 42 45 2 45"},null,8,["fill"]),l("g",{id:"Group-Copy",transform:"translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"},[l("polygon",{id:"Rectangle-Copy-10",fill:`var(${e(a).cssVarBlockName("fill-color-7")})`,transform:"translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",points:"2.84078316e-14 3 18 3 23 7 5 7"},null,8,["fill"]),l("polygon",{id:"Rectangle-Copy-11",fill:`var(${e(a).cssVarBlockName("fill-color-5")})`,points:"-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"},null,8,["fill"]),l("rect",{id:"Rectangle-Copy-12",fill:`url(#linearGradient-1-${e(t)})`,transform:"translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",x:"38",y:"7",width:"17",height:"36"},null,8,["fill"]),l("polygon",{id:"Rectangle-Copy-13",fill:`var(${e(a).cssVarBlockName("fill-color-2")})`,transform:"translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",points:"24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"},null,8,["fill"])]),l("rect",{id:"Rectangle-Copy-15",fill:`url(#linearGradient-2-${e(t)})`,x:"13",y:"45",width:"40",height:"36"},null,8,["fill"]),l("g",{id:"Rectangle-Copy-17",transform:"translate(53.000000, 45.000000)"},[l("use",{id:"Mask",fill:`var(${e(a).cssVarBlockName("fill-color-8")})`,transform:"translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ","xlink:href":`#path-3-${e(t)}`},null,8,["fill","xlink:href"]),l("polygon",{id:"Rectangle-Copy",fill:`var(${e(a).cssVarBlockName("fill-color-9")})`,mask:`url(#mask-4-${e(t)})`,transform:"translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",points:"7 0 24 0 20 18 7 16.5"},null,8,["fill","mask"])]),l("polygon",{id:"Rectangle-Copy-18",fill:`var(${e(a).cssVarBlockName("fill-color-2")})`,transform:"translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",points:"62 45 79 45 70 58 53 58"},null,8,["fill"])])])])]))}});var R=y(x,[["__file","img-empty.vue"]]);const E=v({image:{type:String,default:""},imageSize:Number,description:{type:String,default:""}}),G=c({name:"ElEmpty"}),S=c({...G,props:E,setup(f){const a=f,{t}=$(),o=u("empty"),m=d(()=>a.description||t("el.table.emptyText")),g=d(()=>({width:h(a.imageSize)}));return(s,I)=>(n(),r("div",{class:i(e(o).b())},[l("div",{class:i(e(o).e("image")),style:N(e(g))},[s.image?(n(),r("img",{key:0,src:s.image,ondragstart:"return false"},null,8,["src"])):p(s.$slots,"image",{key:1},()=>[B(R)])],6),l("div",{class:i(e(o).e("description"))},[s.$slots.description?p(s.$slots,"description",{key:0}):(n(),r("p",{key:1},_(e(m)),1))],2),s.$slots.default?(n(),r("div",{key:0,class:i(e(o).e("bottom"))},[p(s.$slots,"default")],2)):C("v-if",!0)],2))}});var b=y(S,[["__file","empty.vue"]]);const M=w(b);export{M as E};
