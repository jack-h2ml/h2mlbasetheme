!function(){"use strict";var e=window.wp.element,l=window.wp.hooks,t=window.wp.blockEditor,o=window.wp.components,r=window.wp.i18n,a=window.wp.primitives,n=(0,e.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(a.Path,{d:"M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"})),s=window.wp.compose;(0,l.addFilter)("blocks.registerBlockType","h2ml/add-h2mlCarousel-attribute",(e=>"core/gallery"===e.name?{...e,attributes:{...e.attributes,h2mlCarousel:{type:"boolean",default:!1}}}:e)),(0,l.addFilter)("editor.BlockEdit","h2ml/add-h2mlCarousel-toolbar-button",(0,s.createHigherOrderComponent)((l=>a=>{const{name:s,attributes:{h2mlCarousel:c},setAttributes:m}=a;return"core/gallery"===s?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.BlockControls,null,(0,e.createElement)(o.ToolbarGroup,null,(0,e.createElement)(o.ToolbarButton,{icon:n,label:(0,r.__)("Carousel Mode","h2ml"),isPressed:c,onClick:()=>{m({h2mlCarousel:!c})}}))),(0,e.createElement)(l,a)):(0,e.createElement)(l,a)}),"showH2mlCarouselToolbarButton")),wp.hooks.addFilter("blocks.getSaveElement","h2ml/add-h2mlCarousel-add-buttons",((l,t,o)=>"core/gallery"===t.name&&o.h2mlCarousel?(0,e.createElement)("div",{className:"h2mlGalleryCarousel"},l,(0,e.createElement)("div",{className:"carouselNav"})):l))}();