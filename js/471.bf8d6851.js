"use strict";(self["webpackChunktool_source"]=self["webpackChunktool_source"]||[]).push([[471],{3471:function(e,l,t){t.r(l),t.d(l,{default:function(){return g}});var n=t(3396),a=t(7139);const o=(0,n._)("h4",{class:"text-center mb-4"},"Tool gen Memrise App",-1),u=(0,n._)("hr",null,null,-1),r={class:"mt-4"},s={class:"my-5"},c=(0,n._)("div",null,(0,a.zw)("Ví dụ: Dưới vùng Đông Nam Bộ là Tây Nam Bộ hay còn gọi là <Đồng bằng>\n        sông Cửu Long"),-1);function i(e,l,t,a,i,p){const m=(0,n.up)("el-input"),d=(0,n.up)("el-button");return(0,n.wg)(),(0,n.iD)("div",null,[o,u,(0,n._)("div",r,[(0,n.Wm)(m,{modelValue:e.form.content,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.content=l),autosize:{minRows:10,maxRows:10},type:"textarea",placeholder:"Please input"},null,8,["modelValue"]),(0,n.Wm)(d,{type:"primary",class:"bg-[#409eff] my-3",onClick:l[1]||(l[1]=e=>a.genText())},{default:(0,n.w5)((()=>[(0,n.Uk)("Gen text")])),_:1}),(0,n._)("div",s,[(0,n.Wm)(m,{modelValue:e.data,"onUpdate:modelValue":l[2]||(l[2]=l=>e.data=l),autosize:{minRows:10,maxRows:10},type:"textarea",placeholder:"Please input",readonly:!0},null,8,["modelValue"])]),c])])}var p=t(4870),m={setup(){const e=(0,p.qj)({form:{content:""},data:""}),l=()=>{let l=e.form.content,t="";l.split("\n").forEach((e=>{let l=e.split("<");l.forEach(((l,n)=>{if(0!==n){let n=e;n=n.replaceAll("<",""),n=n.replaceAll(">",""),n=n.replace(l.split(">")[0],"..."),t+=n+" \t"+l.split(">")[0]+"\n"}}))})),e.data=t};return{...(0,p.BK)(e),genText:l}}},d=t(89);const f=(0,d.Z)(m,[["render",i]]);var g=f}}]);
//# sourceMappingURL=471.bf8d6851.js.map