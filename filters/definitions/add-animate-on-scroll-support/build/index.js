!function(){"use strict";var e=window.wp.element,t=window.wp.hooks,a=window.wp.blockEditor,n=window.wp.components,i=window.wp.i18n,l=window.wp.compose;const o=t=>(0,e.createElement)("span",null,(0,i.__)("The 'Animate In' animation plays when scrolling the block into view.","h2ml")),m=t=>(0,e.createElement)("span",null,(0,i.__)("The 'Animate Out' animation plays when scrolling the block out of view.","h2ml")),r=t=>(0,e.createElement)(n.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,i.__)("Set this block's 'Animate In'","html")," ",(0,e.createElement)(n.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/time"},(0,i.__)("duration","h2ml")),"."),(0,e.createElement)("span",null,(0,i.__)("By default this is '500ms'.","h2ml"))),s=t=>(0,e.createElement)(n.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,i.__)("Set this block's 'Animate Out'","html")," ",(0,e.createElement)(n.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/time"},(0,i.__)("duration","h2ml")),"."),(0,e.createElement)("span",null,(0,i.__)("By default this is '500ms'.","h2ml"))),c=t=>(0,e.createElement)(n.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,i.__)("Set this block's 'Animate Direction', this determines when the animation will play.","html")),(0,e.createElement)("span",null,(0,i.__)("By default this is 'Both'.","h2ml"))),u="animate__animated";(0,t.addFilter)("blocks.registerBlockType","h2ml/add-animation-on-scroll-attribute",(e=>({...e,attributes:{...e.attributes,h2mlAnimationOnScroll:{type:"object",default:{animateIn:"",animateOut:"",animateInDuration:"500ms",animateOutDuration:"500ms",animateDirection:"both"}}}}))),(0,t.addFilter)("editor.BlockEdit","h2ml/add-positioning-insepctor-controls-edit",(0,l.createHigherOrderComponent)((t=>l=>{const{attributes:{h2mlAnimationOnScroll:{animateIn:u,animateOut:h,animateInDuration:d,animateOutDuration:p,animateDirection:_}={}},setAttributes:O}=l,D=(0,e.useMemo)((()=>[...document.styleSheets].reduce(((e,t)=>t.href&&t.href.includes("add-animate-on-scroll-support")?[...t.cssRules].reduce(((e,t)=>({...e,...Object.getPrototypeOf(t).constructor===CSSStyleRule&&t.selectorText.includes(".animate__")&&!t.selectorText.includes(".animate__animated")&&(t.selectorText.includes("In")||t.selectorText.includes("Out"))&&".animate__jackInTheBox"!==t.selectorText&&(t.selectorText.includes("In")?{animateIn:[...e.animateIn,{label:[...t.style.animationName.replace(/([A-Z])/g," $1")].reduce(((e,t,a)=>`${e}${a?t:t.toUpperCase()}`),""),value:t.selectorText.replace(/[.,\s]/g,"")}]}:{animateOut:[...e.animateOut,{label:[...t.style.animationName.replace(/([A-Z])/g," $1")].reduce(((e,t,a)=>`${e}${a?t:t.toUpperCase()}`),""),value:t.selectorText.replace(/[.,\s]/g,"")}]})})),{animateIn:[{label:"None",value:""}],animateOut:[{label:"None",value:""}]}):e),[])),[]);return void 0!==u?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(n.Panel,null,(0,e.createElement)(n.PanelBody,{title:(0,i.__)("Animate on Scroll","h2ml"),initialOpen:!1,className:"h2mlAnimateOnScrollPanel"},(0,e.createElement)(n.__experimentalVStack,{as:"div",spacing:4},(0,e.createElement)(n.Notice,{isDismissible:!1},(0,e.createElement)(n.__experimentalText,{size:"12px",color:"rgb(117, 117, 117)"},(0,i.__)("When adding animations which transition off-screen ensure that the document body has the","h2ml")," ",(0,e.createElement)(n.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y"},"overflow-x")," ",(0,i.__)("property set to either 'hidden' or 'clip'.","h2ml"))),(0,e.createElement)(n.SelectControl,{onChange:e=>{O({h2mlAnimationOnScroll:{animateIn:e,animateOut:h,animateInDuration:d,animateOutDuration:p,animateDirection:_}})},value:u,options:D.animateIn,label:(0,i.__)("Set the 'Animate In' style","h2ml"),help:(0,e.createElement)(o,null),style:{marginBottom:0},__nextHasNoMarginBottom:!0}),(0,e.createElement)(n.SelectControl,{onChange:e=>{O({h2mlAnimationOnScroll:{animateIn:u,animateOut:e,animateInDuration:d,animateOutDuration:p,animateDirection:_}})},value:h,options:D.animateOut,label:(0,i.__)("Set the 'Animate Out' style","h2ml"),help:(0,e.createElement)(m,null),style:{marginBottom:0},__nextHasNoMarginBottom:!0}),(u||h)&&(0,e.createElement)(n.__experimentalToolsPanel,{label:"Animation Additional Settings",resetAll:()=>{O({h2mlAnimationOnScroll:{animateIn:u,animateOut:h,animateInDuration:"500ms",animateOutDuration:"500ms",animateDirection:_}})}},(0,e.createElement)(n.__experimentalToolsPanelItem,{hasValue:()=>!!d,label:(0,i.__)("Animate In Duration","h2ml"),onDeselect:()=>{O({h2mlAnimationOnScroll:{animateIn:u,animateOut:h,animateInDuration:"500ms",animateOutDuration:p,animateDirection:_}})},isShownByDefault:!1},(0,e.createElement)(n.TextControl,{value:d,onChange:e=>{O({h2mlAnimationOnScroll:{animateIn:u,animateOut:h,animateInDuration:e,animateOutDuration:p,animateDirection:_}})},label:(0,i.__)("Animate In Duration","h2ml"),help:(0,e.createElement)(r,null)})),(0,e.createElement)(n.__experimentalToolsPanelItem,{hasValue:()=>!!p,label:(0,i.__)("Animate Out Duration","h2ml"),onDeselect:()=>{O({h2mlAnimationOnScroll:{animateIn:u,animateOut:h,animateInDuration:d,animateOutDuration:"500ms",animateDirection:_}})},isShownByDefault:!1},(0,e.createElement)(n.TextControl,{value:p,onChange:e=>{O({h2mlAnimationOnScroll:{animateIn:u,animateOut:h,animateInDuration:d,animateOutDuration:e,animateDirection:_}})},label:(0,i.__)("Animate Out Duration","h2ml"),help:(0,e.createElement)(s,null)})),(0,e.createElement)(n.__experimentalToolsPanelItem,{hasValue:()=>!!_,label:(0,i.__)("Animate Direction","h2ml"),onDeselect:()=>{O({h2mlAnimationOnScroll:{animateIn:u,animateOut:h,animateInDuration:d,animateOutDuration:p,animateDirection:"both"}})},isShownByDefault:!1},(0,e.createElement)(n.SelectControl,{onChange:e=>{console.log(e),O({h2mlAnimationOnScroll:{animateIn:u,animateOut:h,animateInDuration:d,animateOutDuration:p,animateDirection:e}})},value:_,options:[{value:"both",label:"Both (Default)"},{value:"forwards",label:"Forwards"},{value:"backwards",label:"Backwards"}],label:(0,i.__)("Animate Direction","h2ml"),help:(0,e.createElement)(c,null),style:{marginBottom:0},__nextHasNoMarginBottom:!0}))))))),(0,e.createElement)(t,l)):(0,e.createElement)(t,l)}),"addAnimationOnScrollInspectorControlsEdit")),(0,t.addFilter)("blocks.getSaveContent.extraProps","h2ml/add-positioning-styles-save",((e,t,a)=>{const{className:n}=e,{h2mlAnimationOnScroll:{animateIn:i,animateOut:l,animateInDuration:o,animateOutDuration:m,animateDirection:r}={}}=a;if(i||l){const t=(n?n.split(" "):[]).reduce(((e,t)=>t!==u?`${e} ${t}`:`${e}`),u);return{...e,className:t,...(i||l)&&{"data-animate":"","data-animate-direction":r},...i&&{"data-animate-in":i},...l&&{"data-animate-out":l},...o&&{"data-animate-in-duration":o},...m&&{"data-animate-out-duration":m}}}return e}))}();