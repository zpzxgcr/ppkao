import{E as $}from"./el-popover-1.0.7.js";import{_ as b,l as M,k as y,r as n,c as i,o as l,f as t,d as r,e as a,i as o,aL as f}from"./entry-1.0.7.js";import"./el-popper-1.0.7.js";import"./index-1.0.75.js";const R={class:"side-bar"},h={class:"tool-bar"},I=["src"],q=["src"],B={href:"/download",title:"桌面端搜题下载",target:"_blank"},E=["src"],N=["src"],j={__name:"sidebar",setup(A){const _=M(),m=y(()=>{var v,e;return(e=(v=_.$darkMode)==null?void 0:v.isDarkMode)!=null&&e.value?"dark":"light"}),p=n("icon-kefu"),u=n("icon-wechat"),c=n("icon-desktop"),d=n("icon-top"),g=n(),k=n(),x=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(v,e)=>{const w=$;return l(),i("div",R,[t("ul",h,[t("li",{ref_key:"serviceRef",ref:g,onMouseenter:e[0]||(e[0]=s=>p.value="tool-kefu"),onMouseleave:e[1]||(e[1]=s=>p.value="icon-kefu")},[r(f,{name:"slide-up"},{default:a(()=>[(l(),i("img",{key:o(p),src:`https://static.ppkao.com/www/images/${o(p)}.png`,alt:"联系客服"},null,8,I))]),_:1})],544),t("li",{ref_key:"wxRef",ref:k,onMouseenter:e[2]||(e[2]=s=>u.value="tool-xcx"),onMouseleave:e[3]||(e[3]=s=>u.value="icon-wechat")},[r(f,{name:"slide-up"},{default:a(()=>[(l(),i("img",{key:o(u),src:`https://static.ppkao.com/www/images/${o(u)}.png`,alt:"小程序"},null,8,q))]),_:1})],544),t("li",{onMouseenter:e[4]||(e[4]=s=>c.value="tool-desktop"),onMouseleave:e[5]||(e[5]=s=>c.value="icon-desktop")},[t("a",B,[r(f,{name:"slide-up"},{default:a(()=>[(l(),i("img",{key:o(c),src:`https://static.ppkao.com/www/images/${o(c)}.png`,alt:"桌面端下载"},null,8,E))]),_:1})])],32),t("li",{onMouseenter:e[6]||(e[6]=s=>d.value="tool-top"),onMouseleave:e[7]||(e[7]=s=>d.value="icon-top"),onClick:x},[r(f,{name:"slide-up"},{default:a(()=>[(l(),i("img",{key:o(d),src:`https://static.ppkao.com/www/images/${o(d)}.png`,alt:"回到顶部"},null,8,N))]),_:1})],32)]),r(w,{ref:"popoverRef","virtual-ref":o(g),trigger:"hover",placement:"right",effect:o(m),"virtual-triggering":""},{default:a(()=>e[8]||(e[8]=[t("div",{class:"qrcode-box"},[t("img",{src:"https://static.ppkao.com/public/wxqrcode/pptiku.jpg",alt:"联系客服"}),t("span",null,"微信扫一扫关注公众号后联系客服")],-1)])),_:1},8,["virtual-ref","effect"]),r(w,{ref:"popoverRef","virtual-ref":o(k),trigger:"hover",placement:"right","virtual-triggering":"",effect:o(m)},{default:a(()=>e[9]||(e[9]=[t("div",{class:"qrcode-box"},[t("img",{src:"https://static.ppkao.com/www/images/zantiku.jpg",alt:"扫码练习"}),t("span",null,"微信扫码免费搜题")],-1)])),_:1},8,["virtual-ref","effect"])])}}},D=b(j,[["__scopeId","data-v-79152810"]]);export{D as default};
