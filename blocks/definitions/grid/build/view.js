!function(){"use strict";class e{static#e=e=>JSON.parse(atob(e));static#t=new Map;static#i=class{addToMediaQueriesConstuctorArray(e){return this.decodedBreakpoints.forEach((t=>{let[i]=t;const r=e.findIndex((e=>{let[t]=e;return t===i}));r<0?e.push([i,[this.elem]]):e[r][1].push(this.elem)})),this}#r=null;#a(){const[e,t]=this.decodedBreakpoints[this.#r];Object.entries(t).forEach((e=>{let[t,i]=e;this.elem.style[t]=i})),this.children.forEach((t=>{let[i,r]=t;const a=r[e];a?Object.entries(a).forEach((e=>{let[t,r]=e;i.style[t]=r})):i.style.display="none"}))}maybeUpdate(e,t){let i=this.decodedBreakpoints.findIndex((t=>{let[i]=t;return i===e}));if(!t)for(;i>0&&!window.matchMedia(this.decodedBreakpoints[--i]).matches;);this.#r!==i&&(this.#r=i,this.#a())}constructor(t){Object.assign(this,{elem:t,decodedBreakpoints:e.#e(t.dataset.breakpointDefinitions),children:[...t.children].map((t=>[t,e.#e(t.dataset.breakpointDefinitions)]))})}};static#n=t=>{const{media:i,matches:r,target:a}=t;e.#d.get(a).forEach((t=>{e.#t.get(t).maybeUpdate(i,r)}))};static#d=new Map;static#s=t=>{t.forEach((t=>{let[i,r]=t;const a=window.matchMedia(i);e.#d.set(a,r),a.addEventListener("change",e.#n),a.matches&&e.#n({media:i,matches:a.matches,target:a})}))};static#c=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return i.reduce(((t,i)=>(e.#t.set(i,new e.#i(i).addToMediaQueriesConstuctorArray(t)),t)),[])};static monitor=t=>{e.#s(e.#c(...document.querySelectorAll(".wp-block-h2ml-grid[data-breakpoint-definitions]")))}}document.addEventListener("DOMContentLoaded",e.monitor)}();