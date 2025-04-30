"use strict";(()=>{var e={};e.id=660,e.ids=[660],e.modules={8203:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var s=t(997),a=t(6859),i=t(4298),d=t.n(i);function o(){return(0,s.jsxs)(a.Html,{lang:"en",children:[s.jsx(a.Head,{}),(0,s.jsxs)("body",{children:[s.jsx(d(),{id:"theme-switcher",strategy:"beforeInteractive",children:`
 if (
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
  `}),s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[320,803],()=>t(8203));module.exports=s})();