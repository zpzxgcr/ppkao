import{cM as o,r,b9 as f,cN as d,w as v,b0 as l,cL as i,cO as h,a_ as m}from"./entry-1.0.7.js";function I(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=r(!1),n=r({});f(()=>{n.value=s.value?{}:d(a)});const c=t.push(n.value,e);return v(n,u=>{c.patch(u)}),m()&&(l(()=>{c.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),c}export{I as u};
