import J from"./DocsAside.e7681942.js";import K from"./ProseCodeInline.0c530a49.js";import R from"./Alert.062e1638.js";import U from"./DocsPageBottom.62aaafbe.js";import G from"./DocsPrevNext.a0f384b1.js";import{f as Q,H as W,F as X,J as Y,v as m,i as $,K as Z,L as oo,M as eo,o as i,c as V,w as h,u as t,e as g,k as c,s as y,j as p,r as to,y as k,t as no,N as so,l as x,m as ao,O as co,p as lo,q as ro,b as io}from"./entry.21cedb1a.js";import po from"./DocsToc.cce0f60d.js";/* empty css                           *//* empty css                      *//* empty css                            */import"./ContentSlot.3b434a12.js";/* empty css                  */import"./ProseA.ef661c27.js";/* empty css                   */import"./EditOnLink.vue.44f7078e.js";/* empty css                           *//* empty css                         */import"./DocsTocLinks.7b89dac8.js";/* empty css                         *//* empty css                    */const uo=u=>(lo("data-v-aa36b49a"),u=u(),ro(),u),_o={class:"page-body"},mo={key:1,class:"toc"},fo={class:"toc-wrapper"},vo=uo(()=>p("span",{class:"title"},"Table of Contents",-1)),ho=Q({__name:"DocsPageLayout",setup(u){const{page:s,navigation:A}=W(),{config:f}=X(),H=Y(),M=(o,e=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[o])<"u"?s.value[o]:e},T=m(()=>{var o,e,n;return!s.value||((n=(e=(o=s.value)==null?void 0:o.body)==null?void 0:e.children)==null?void 0:n.length)>0}),b=m(()=>{var o,e,n,_,d;return((o=s.value)==null?void 0:o.toc)!==!1&&((d=(_=(n=(e=s.value)==null?void 0:e.body)==null?void 0:n.toc)==null?void 0:_.links)==null?void 0:d.length)>=2}),S=m(()=>{var o,e;return((o=s.value)==null?void 0:o.aside)!==!1&&((e=A.value)==null?void 0:e.length)>1}),j=m(()=>M("bottom",!0)),l=$(!1),a=$(null),v=()=>H.path.split("/").slice(0,2).join("/"),r=Z("asideScroll",()=>{var o;return{parentPath:v(),scrollTop:((o=a.value)==null?void 0:o.scrollTop)||0}});function C(){a.value&&(a.value.scrollHeight===0&&setTimeout(C,0),a.value.scrollTop=r.value.scrollTop)}return oo(()=>{r.value.parentPath!==v()?(r.value.parentPath=v(),r.value.scrollTop=0):C()}),eo(()=>{a.value&&(r.value.scrollTop=a.value.scrollTop)}),(o,e)=>{var P,N,w,B,D,I;const n=J,_=K,d=R,F=U,L=G,O=ao,q=po,z=co;return i(),V(z,{fluid:(N=(P=t(f))==null?void 0:P.main)==null?void 0:N.fluid,padded:(B=(w=t(f))==null?void 0:w.main)==null?void 0:B.padded,class:x(["docs-page-content",{fluid:(I=(D=t(f))==null?void 0:D.main)==null?void 0:I.fluid,"has-toc":t(b),"has-aside":t(S)}])},{default:h(()=>[t(S)?(i(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[c(n,{class:"app-aside"})],512)):y("",!0),p("article",_o,[t(T)?to(o.$slots,"default",{key:0},void 0,!0):(i(),V(d,{key:1,type:"info"},{default:h(()=>[k(" Start writing in "),c(_,null,{default:h(()=>[k("content/"+no(t(s)._file),1)]),_:1}),k(" to see this page taking shape. ")]),_:1})),t(T)&&t(s)&&t(j)?(i(),g(so,{key:2},[c(F),c(L)],64)):y("",!0)]),t(b)?(i(),g("div",mo,[p("div",fo,[p("button",{onClick:e[0]||(e[0]=E=>l.value=!t(l))},[vo,c(O,{name:"heroicons-outline:chevron-right",class:x(["icon",[t(l)&&"rotate"]])},null,8,["class"])]),p("div",{class:x(["docs-toc-wrapper",[t(l)&&"opened"]])},[c(q,{onMove:e[1]||(e[1]=E=>l.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}}),Fo=io(ho,[["__scopeId","data-v-aa36b49a"]]);export{Fo as default};
