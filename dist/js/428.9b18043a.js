"use strict";(self["webpackChunkcustomized_project"]=self["webpackChunkcustomized_project"]||[]).push([[428],{9919:function(t,e,l){var n=l(6035),a=l(7732),i=l(4870);const s=t=>{const{db:e}=(0,a.Z)(),l=(0,n.JU)(e,"spots",`${t}`),s=(0,i.iH)({}),o=()=>{(0,n.QT)(l).then((t=>{s.value=t.data()}))};return{data:s,load:o}};e["Z"]=s},5428:function(t,e,l){l.r(e),l.d(e,{default:function(){return y}});var n=l(3396),a=l(9242);const i={class:"container"},s={class:"mb-3"},o=(0,n._)("label",{for:"inputTitle",class:"form-label"},"標題",-1),r={class:"mb-3"},c=(0,n._)("label",{for:"description",class:"form-label"},"內容",-1);function d(t,e,l,d,p,u){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("form",null,[(0,n._)("div",s,[o,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>d.temp.title=t),type:"text",class:"form-control",id:"inputTitle"},null,512),[[a.nr,d.temp.title]])]),(0,n._)("div",r,[c,(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>d.temp.description=t),class:"form-control",placeholder:"景點敘述",id:"description",style:{height:"100px"}},null,512),[[a.nr,d.temp.description]])]),(0,n._)("button",{onClick:e[2]||(e[2]=t=>d.handleUpdate()),type:"submit",class:"btn btn-primary"}," 編輯 ")])])}l(7658);var p=l(7732),u=l(9919),m=l(6035),b=l(4870),v=l(2483),f={setup(){const{db:t}=(0,p.Z)(),e=(0,v.yj)(),l=(0,v.tv)(),a=e.params.id,{data:i,load:s}=(0,u.Z)(a),o=(0,b.iH)({title:"",description:""});(0,n.m0)((()=>{i.value.title&&(o.value={title:i.value.title,description:i.value.description})}));const r=()=>{const e=(0,m.JU)(t,"spots",a);(0,m.r7)(e,{title:o.value.title,description:o.value.description}).then((()=>l.push("/back")))};return(0,n.bv)((()=>{s()})),{temp:o,data:i,handleUpdate:r}}},h=l(89);const _=(0,h.Z)(f,[["render",d]]);var y=_}}]);
//# sourceMappingURL=428.9b18043a.js.map