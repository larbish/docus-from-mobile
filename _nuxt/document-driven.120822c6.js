import C from"./DocumentDrivenEmpty.2d73cdd0.js";import L from"./ContentRenderer.1e7fedf5.js";import h from"./DocumentDrivenNotFound.db148c76.js";import{a6 as z,f as m,ay as k,J as x,az as R,v as B,u as o,aA as d,aB as D,aC as i,T as N,D as g,H as w,ae as A,o as c,e as E,k as p,w as l,c as _}from"./entry.21cedb1a.js";import"./ContentRendererMarkdown.13c8d647.js";import"./ButtonLink.c0bff66e.js";import"./ContentSlot.3b434a12.js";/* empty css                       *//* empty css                                   */const T=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const n=await d[s.name]().then(e=>e.default||e);return()=>g(n,t.attrs,t.slots)}}),j=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const n=k("_route"),e=n===x()?R():n,a=B(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=a.value&&a.value in d,r=e.meta.layoutTransition??D;return i(N,u&&r,{default:()=>i(T,u&&{key:a.value,name:a.value,...t.attrs},t.slots).default()}).default()}}}),$={class:"document-driven-page"},V=m({__name:"document-driven",setup(s){const{page:t,layout:n}=w();return t.value,A(t),(e,a)=>{const u=C,r=L,f=h,y=j;return c(),E("div",$,[p(y,{name:o(n)||"default"},{default:l(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:l(({value:v})=>[p(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{V as default};
