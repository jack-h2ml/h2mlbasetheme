!function(){"use strict";var e=window.wp.element,t=window.wp.hooks,n=window.wp.blockEditor,a=window.wp.components,l=window.wp.i18n,i=window.wp.compose;const o=t=>(0,e.createElement)("span",null,(0,l.__)("The 'Animate In' animation plays when scrolling the block into view.","h2ml")),m=t=>(0,e.createElement)("span",null,(0,l.__)("The 'Animate Out' animation plays when scrolling the block out of view.","h2ml")),r=t=>(0,e.createElement)(a.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,l.__)("Set this block's 'Animate In'","html")," ",(0,e.createElement)(a.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/time"},(0,l.__)("duration","h2ml")),"."),(0,e.createElement)("span",null,(0,l.__)("By default this is '500ms'.","h2ml"))),s=t=>(0,e.createElement)(a.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,l.__)("Set this block's 'Animate Out'","html")," ",(0,e.createElement)(a.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/time"},(0,l.__)("duration","h2ml")),"."),(0,e.createElement)("span",null,(0,l.__)("By default this is '500ms'.","h2ml"))),c=t=>(0,e.createElement)(a.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,l.__)("Set this block's 'Animate Threshold', this determines how much of the block must be visible before the animations play.","html")),(0,e.createElement)("span",null,(0,l.__)("By default this is '0.5', which is equal to 50% of the element being visible.","h2ml"))),h=t=>(0,e.createElement)(a.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,l.__)("Set this block's 'Animate Direction', this determines which scrolling behaviours trigger the animation.","html")),(0,e.createElement)("span",null,(0,l.__)("By default this is 'Both'.","h2ml"))),u="animate__animated",d={animateInDuration:"500ms",animateOutDuration:"500ms",animateThreshold:.5,animateDirection:"both"};(0,t.addFilter)("blocks.registerBlockType","h2ml/add-animation-on-scroll-attribute",(e=>({...e,attributes:{...e.attributes,h2mlAnimationOnScroll:{type:"object",default:{animateIn:"",animateOut:"",...d}}}}))),(0,t.addFilter)("editor.BlockEdit","h2ml/add-positioning-insepctor-controls-edit",(0,i.createHigherOrderComponent)((t=>i=>{const{attributes:{h2mlAnimationOnScroll:u,h2mlAnimationOnScroll:{animateIn:_,animateOut:p,animateInDuration:b,animateOutDuration:S,animateThreshold:E,animateDirection:O}={}},setAttributes:A}=i,g=(0,e.useMemo)((()=>[...document.styleSheets].reduce(((e,t)=>t.href&&t.href.includes("add-animate-on-scroll-support")?[...t.cssRules].reduce(((e,t)=>({...e,...Object.getPrototypeOf(t).constructor===CSSStyleRule&&t.selectorText.includes(".animate__")&&!t.selectorText.includes(".animate__animated")&&(t.selectorText.includes("In")||t.selectorText.includes("Out"))&&".animate__jackInTheBox"!==t.selectorText&&(t.selectorText.includes("In")?{animateIn:[...e.animateIn,{label:[...t.style.animationName.replace(/([A-Z])/g," $1")].reduce(((e,t,n)=>`${e}${n?t:t.toUpperCase()}`),""),value:t.selectorText.replace(/[.,\s]/g,"")}]}:{animateOut:[...e.animateOut,{label:[...t.style.animationName.replace(/([A-Z])/g," $1")].reduce(((e,t,n)=>`${e}${n?t:t.toUpperCase()}`),""),value:t.selectorText.replace(/[.,\s]/g,"")}]})})),{animateIn:[{label:"None",value:""}],animateOut:[{label:"None",value:""}]}):e),[])),[]);return void 0!==_?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(a.Panel,null,(0,e.createElement)(a.PanelBody,{title:(0,l.__)("Animate on Scroll","h2ml"),initialOpen:!1,className:"h2mlAnimateOnScrollPanel"},(0,e.createElement)(a.__experimentalVStack,{as:"div",spacing:4},(0,e.createElement)(a.Notice,{isDismissible:!1},(0,e.createElement)(a.__experimentalText,{size:"12px",color:"rgb(117, 117, 117)"},(0,l.__)("When adding animations which transition off-screen ensure that the document body has the","h2ml")," ",(0,e.createElement)(a.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y"},"overflow-x")," ",(0,l.__)("property set to either 'hidden' or 'clip'.","h2ml"))),(0,e.createElement)(a.SelectControl,{onChange:e=>{A({h2mlAnimationOnScroll:{...u,animateIn:e}})},value:_,options:g.animateIn,label:(0,l.__)("Set the 'Animate In' style","h2ml"),help:(0,e.createElement)(o,null),style:{marginBottom:0},__nextHasNoMarginBottom:!0}),(0,e.createElement)(a.SelectControl,{onChange:e=>{A({h2mlAnimationOnScroll:{...u,animateOut:e}})},value:p,options:g.animateOut,label:(0,l.__)("Set the 'Animate Out' style","h2ml"),help:(0,e.createElement)(m,null),style:{marginBottom:0},__nextHasNoMarginBottom:!0}),(_||p)&&(0,e.createElement)(a.__experimentalToolsPanel,{label:"Animation Additional Settings",resetAll:()=>{A({h2mlAnimationOnScroll:{...u,...d}})}},(0,e.createElement)(a.__experimentalToolsPanelItem,{hasValue:()=>b!==d.animateInDuration,label:(0,l.__)("Animate In Duration","h2ml"),onDeselect:()=>{A({h2mlAnimationOnScroll:{...u,defaultAnimateValues:d.animateInDuration}})},isShownByDefault:!1},(0,e.createElement)(a.TextControl,{value:b,onChange:e=>{A({h2mlAnimationOnScroll:{...u,animateInDuration:e}})},label:(0,l.__)("Animate In Duration","h2ml"),help:(0,e.createElement)(r,null)})),(0,e.createElement)(a.__experimentalToolsPanelItem,{hasValue:()=>S!==d.animateOutDuration,label:(0,l.__)("Animate Out Duration","h2ml"),onDeselect:()=>{A({h2mlAnimationOnScroll:{...u,animateOutDuration:d.animateOutDuration}})},isShownByDefault:!1},(0,e.createElement)(a.TextControl,{value:S,onChange:e=>{A({h2mlAnimationOnScroll:{...u,animateOutDuration:e}})},label:(0,l.__)("Animate Out Duration","h2ml"),help:(0,e.createElement)(s,null)})),(0,e.createElement)(a.__experimentalToolsPanelItem,{hasValue:()=>E!==d.animateThreshold,label:(0,l.__)("Animate Threshold","h2ml"),onDeselect:()=>{A({h2mlAnimationOnScroll:{...u,animateThreshold:d.animateThreshold}})},isShownByDefault:!1},(0,e.createElement)(a.__experimentalNumberControl,{onChange:e=>{A({h2mlAnimationOnScroll:{...u,animateThreshold:e}})},value:E,min:.1,max:1,step:.1,label:(0,l.__)("Animate Threshold","h2ml"),help:(0,e.createElement)(c,null)})),(0,e.createElement)(a.__experimentalToolsPanelItem,{hasValue:()=>O!==d.animateDirection,label:(0,l.__)("Animate Direction","h2ml"),onDeselect:()=>{A({h2mlAnimationOnScroll:{...u,animateDirection:d.animateDirection}})},isShownByDefault:!1},(0,e.createElement)(a.SelectControl,{onChange:e=>{A({h2mlAnimationOnScroll:{...u,animateDirection:e}})},value:O,options:[{value:"both",label:"Both (Default)"},{value:"forwards",label:"Forwards"},{value:"backwards",label:"Backwards"}],label:(0,l.__)("Animate Direction","h2ml"),help:(0,e.createElement)(h,null),style:{marginBottom:0},__nextHasNoMarginBottom:!0}))))))),(0,e.createElement)(t,i)):(0,e.createElement)(t,i)}),"addAnimationOnScrollInspectorControlsEdit")),(0,t.addFilter)("blocks.getSaveContent.extraProps","h2ml/add-positioning-styles-save",((e,t,n)=>{const{className:a}=e,{h2mlAnimationOnScroll:{animateIn:l,animateOut:i,animateInDuration:o,animateOutDuration:m,animateThreshold:r,animateDirection:s}={}}=n;if(l||i){const t=(a?a.split(" "):[]).reduce(((e,t)=>t!==u?`${e} ${t}`:`${e}`),u);return{...e,className:t,"data-animate":"",...l&&{"data-animate-in":l},...i&&{"data-animate-out":i},...o&&{"data-animate-in-duration":o},...m&&{"data-animate-out-duration":m},...s&&{"data-animate-direction":s},...r&&{"data-animate-Threshold":r}}}return e}))}();