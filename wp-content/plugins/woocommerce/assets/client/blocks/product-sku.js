(self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[]).push([[2724],{6511:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var s=o(1609),l=o(851),n=o(2796),r=o(1616),a=o(2150),c=o(4715),i=o(7723);o(7663);const u=({setAttributes:e,parentClassName:t,sku:o,className:n,style:r,prefix:a,suffix:u})=>(0,s.createElement)("div",{className:(0,l.A)(n,"wp-block-post-terms",{[`${t}__product-sku`]:t}),style:r},(0,s.createElement)(c.RichText,{className:"wc-block-components-product-sku__prefix",tagName:"span",placeholder:(0,i.__)("Prefix","woocommerce"),value:a,onChange:t=>e({prefix:t})}),(0,s.createElement)("span",null," ",o),(0,s.createElement)(c.RichText,{className:"wc-block-components-product-sku__suffix",tagName:"span",placeholder:" "+(0,i.__)("Suffix","woocommerce"),value:u,onChange:t=>e({suffix:t})})),d=(0,r.withProductDataContext)((e=>{const{className:t}=e,o=(0,a.p)(e),{parentClassName:r}=(0,n.useInnerBlockLayoutContext)(),{product:c}=(0,n.useProductDataContext)(),d=c.sku;return e.isDescendentOfSingleProductTemplate?(0,s.createElement)(u,{setAttributes:e.setAttributes,parentClassName:r,className:t,sku:(0,i.__)("Product SKU","woocommerce"),prefix:e.prefix,suffix:e.suffix}):d?(0,s.createElement)(u,{setAttributes:e.setAttributes,className:t,parentClassName:r,sku:d,prefix:e.prefix,suffix:e.suffix,...e.isDescendantOfAllProducts&&{className:(0,l.A)(t,"wc-block-components-product-sku wp-block-woocommerce-product-sku",o.className),style:{...o.style}}}):null}))},2150:(e,t,o)=>{"use strict";o.d(t,{p:()=>a});var s=o(851),l=o(3993),n=o(3924),r=o(104);const a=e=>{const t=(e=>{const t=(0,l.isObject)(e)?e:{style:{}};let o=t.style;return(0,l.isString)(o)&&(o=JSON.parse(o)||{}),(0,l.isObject)(o)||(o={}),{...t,style:o}})(e),o=(0,r.BK)(t),a=(0,r.aR)(t),c=(0,r.fo)(t),i=(0,n.x)(t);return{className:(0,s.A)(i.className,o.className,a.className,c.className),style:{...i.style,...o.style,...a.style,...c.style}}}},3924:(e,t,o)=>{"use strict";o.d(t,{x:()=>l});var s=o(3993);const l=e=>{const t=(0,s.isObject)(e.style.typography)?e.style.typography:{},o=(0,s.isString)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:o,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}}},104:(e,t,o)=>{"use strict";o.d(t,{BK:()=>i,aR:()=>u,fo:()=>d});var s=o(851),l=o(1194),n=o(9786),r=o(3993);function a(e={}){const t={};return(0,n.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function c(e,t){return e&&t?`has-${(0,l.c)(t)}-${e}`:""}function i(e){var t,o,l,n,i,u;const{backgroundColor:d,textColor:f,gradient:m,style:p}=e,y=c("background-color",d),v=c("color",f),k=function(e){if(e)return`has-${e}-gradient-background`}(m),x=k||(null==p||null===(t=p.color)||void 0===t?void 0:t.gradient);return{className:(0,s.A)(v,k,{[y]:!x&&!!y,"has-text-color":f||(null==p||null===(o=p.color)||void 0===o?void 0:o.text),"has-background":d||(null==p||null===(l=p.color)||void 0===l?void 0:l.background)||m||(null==p||null===(n=p.color)||void 0===n?void 0:n.gradient),"has-link-color":(0,r.isObject)(null==p||null===(i=p.elements)||void 0===i?void 0:i.link)?null==p||null===(u=p.elements)||void 0===u||null===(u=u.link)||void 0===u?void 0:u.color:void 0}),style:a({color:(null==p?void 0:p.color)||{}})}}function u(e){var t;const o=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:o,style:l}=e,n=o?c("border-color",o):"";return(0,s.A)({"has-border-color":!!o||!(null==l||null===(t=l.border)||void 0===t||!t.color),[n]:!!n})}(e),style:a({border:o})}}function d(e){var t;return{className:void 0,style:a({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}},7663:()=>{}}]);