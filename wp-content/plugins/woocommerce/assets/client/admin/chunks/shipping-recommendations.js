"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[6125],{28682:(e,i,o)=>{o.d(i,{A:()=>m});var t=o(14812),s=o(28302),n=o(86020),c=o(14599),r=o(81514);const m=({textProps:e,message:i,eventName:o="",eventProperties:m={},targetUrl:a,linkType:l="wc-admin",onClickCallback:u})=>(0,r.jsx)(t.Text,{...e,children:(0,s.Z)({mixedString:i,components:{Link:(0,r.jsx)(n.Link,{onClick:()=>(u?u():(0,c.recordEvent)(o,m),window.location.href=a,!1),href:a,type:l})}})})},27232:(e,i,o)=>{function t(e=""){return e?e.split(":")[0]:null}function s(e,i,o=!1,t){return function(e,i=!1,o,t){const s=[];return t?((e.product_types||[]).forEach((e=>{t[e]&&t[e].product&&(i||!o.includes(t[e].slug))&&s.push(t[e])})),s):s}(i,o,t,e).map((e=>e.id||e.product))}o.d(i,{jt:()=>s,so:()=>t}),o(22629)},21042:(e,i,o)=>{o.r(i),o.d(i,{default:()=>D});var t=o(9818),s=o(67221),n=o(27232),c=o(65736),r=o(55609),m=o(86020),a=o(10431),l=o(14599),u=o(46530),p=o(31815),g=o(81514);const d=({isPluginInstalled:e})=>{const{layoutString:i}=(0,u.useLayoutContext)();return(0,g.jsxs)("div",{className:"woocommerce-list__item-inner woocommerce-shipping-plugin-item",children:[(0,g.jsx)("div",{className:"woocommerce-list__item-before",children:(0,g.jsx)("img",{className:"woocommerce-shipping-plugin-item__logo",src:p,alt:"WooCommerce Shipping Logo"})}),(0,g.jsxs)("div",{className:"woocommerce-list__item-text",children:[(0,g.jsxs)("span",{className:"woocommerce-list__item-title",children:[(0,c.__)("WooCommerce Shipping","woocommerce"),(0,g.jsx)(m.Pill,{children:(0,c.__)("Recommended","woocommerce")})]}),(0,g.jsxs)("span",{className:"woocommerce-list__item-content",children:[(0,c.__)("Print USPS, UPS, and DHL Express labels straight from your WooCommerce dashboard and save on shipping.","woocommerce"),(0,g.jsx)("br",{}),(0,g.jsx)(r.ExternalLink,{href:"https://woocommerce.com/woocommerce-shipping/",children:(0,c.__)("Learn more","woocommerce")})]})]}),(0,g.jsx)("div",{className:"woocommerce-list__item-after",children:(0,g.jsx)(r.Button,{isSecondary:!0,onClick:()=>{(0,l.recordEvent)("tasklist_click",{task_name:"shipping-recommendation",context:`${i}/wc-settings`}),(0,a.navigateTo)({url:(0,a.getNewPath)({task:"shipping-recommendation"},"/",{})})},children:e?(0,c.__)("Activate","woocommerce"):(0,c.__)("Get started","woocommerce")})})]})};var h=o(69873),j=o(69307);const L="woocommerce_admin_reviewed_default_shipping_zones",M="woocommerce_admin_created_default_shipping_zones",S="woocommerce-settings-shipping-tour-floater-wrapper",y="woocommerce-settings-smart-defaults-shipping-tour-floater",N="table.wc-shipping-zones",x='a[href*="woocommerce-shipping-settings"]',w=e=>{const i=e.map((e=>{const i=document?.querySelector(e)?.getBoundingClientRect();if(!i)throw new Error("Shipping tour: Couldn’t find element with selector: "+e);return i})),o=document.querySelector(`.${S}`)?.getBoundingClientRect()||{top:0,left:0},t=Math.min(...i.map((e=>e.top))),s=Math.min(...i.map((e=>e.left))),n=Math.max(...i.map((e=>e.right)))-s,c=Math.max(...i.map((e=>e.bottom)))-t,r=t-o.top;return{left:s-o.left,top:r,width:n,height:c}},_=({dims:e})=>(0,g.jsx)("div",{style:{position:"relative",pointerEvents:"none",...e},className:y}),T=[["th.wc-shipping-zone-sort","tfoot.wc-shipping-zone-worldwide tr > td.wc-shipping-zone-region"],["th.wc-shipping-zone-methods","tfoot.wc-shipping-zone-worldwide tr > td.wc-shipping-zone-methods"]],I=({step:e})=>{var i;const o=(0,j.useRef)(null);(0,j.useLayoutEffect)((()=>{o.current?.parentElement&&o.current.parentElement.insertBefore(o.current,document.querySelector("table.wc-shipping-zones"))}),[]);const t=null!==(i=T[e])&&void 0!==i?i:T[T.length-1],[s,n]=(0,j.useState)(w(t));(0,j.useEffect)((()=>{n(w(t));const e=new ResizeObserver((()=>{n(w(t))})),i=document.querySelector(N);if(!i)throw new Error("Shipping tour: Couldn’t find shipping settings table element with selector: "+N);return e.observe(i),()=>{e.disconnect()}}),[t]);const c=document.querySelector(N)?.parentElement;if(!c)throw new Error("Shipping tour: Couldn’t find shipping settings table parent element with selector: "+N);return(0,j.createPortal)((0,g.jsx)("div",{ref:o,className:S,style:{position:"absolute"},children:(0,g.jsx)(_,{dims:s})}),c)},E=({showShippingRecommendationsStep:e})=>{const{updateOptions:i}=(0,t.useDispatch)(s.optionsStore),{show:o,isUspsDhlEligible:r}=(()=>{const{hasCreatedDefaultShippingZones:e,hasReviewedDefaultShippingOptions:i,businessCountry:o,isLoading:c}=(0,t.useSelect)((e=>{const{hasFinishedResolution:i,getOption:o}=e(s.optionsStore);return{isLoading:!i("getOption",[M])&&!i("getOption",[L])&&!i("getOption",["woocommerce_default_country"]),hasCreatedDefaultShippingZones:"yes"===o(M),hasReviewedDefaultShippingOptions:"yes"===o(L),businessCountry:(0,n.so)(o("woocommerce_default_country"))}}),[]);return{isLoading:c,show:window.wcAdminFeatures["shipping-setting-tour"]&&!c&&e&&!i,isUspsDhlEligible:"US"===o}})(),[a,u]=(0,j.useState)(0),{createNotice:p}=(0,t.useDispatch)("core/notices"),d={placement:"auto",options:{effects:{spotlight:{interactivity:{enabled:!1}},liveResize:{mutation:!0,resize:!0},autoScroll:!0},callbacks:{onNextStep:e=>{u(e),(0,l.recordEvent)("walkthrough_settings_shipping_next_click",{step_name:d.steps[e-1].meta.name})},onPreviousStep:e=>{u(e),(0,l.recordEvent)("walkthrough_settings_shipping_back_click",{step_name:d.steps[e+1].meta.name})}}},steps:[{referenceElements:{desktop:`.${y}`},meta:{name:"shipping-zones",heading:(0,c.__)("Shipping zones","woocommerce"),descriptions:{desktop:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("span",{children:(0,c.__)("Specify the areas you’d like to ship to! Give each zone a name, then list the regions you’d like to include. Your regions can be as specific as a zip code or as broad as a country. Shoppers will only see the methods available in their region.","woocommerce")}),(0,g.jsx)("br",{}),(0,g.jsx)("span",{children:(0,c.__)("We’ve added some shipping zones to get you started — you can manage them by selecting Edit or Delete.","woocommerce")})]})}}},{referenceElements:{desktop:`.${y}`},meta:{name:"shipping-methods",heading:(0,c.__)("Shipping methods","woocommerce"),descriptions:{desktop:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("span",{children:(0,c.__)("Add one or more shipping methods you’d like to offer to shoppers in your zones.","woocommerce")}),(0,g.jsx)("br",{}),(0,g.jsx)("span",{children:(0,c.__)("For example, we’ve added the “Free shipping” method for shoppers in your country. You can edit, add to, or remove shipping methods by selecting Edit or Delete.","woocommerce")})]})}}}],closeHandler:async(e,o,t)=>{(await i({[L]:"yes"})).success||(p("error",(0,c.__)("There was a problem marking the shipping tour as completed.","woocommerce")),(0,l.recordEvent)("walkthrough_settings_shipping_updated_option_error")),"close-btn"===t?(0,l.recordEvent)("walkthrough_settings_shipping_dismissed",{step_name:e[o].meta.name}):"done-btn"===t&&(0,l.recordEvent)("walkthrough_settings_shipping_completed")}};return document.querySelector(x)&&r&&d.steps.push({referenceElements:{desktop:x},meta:{name:"woocommerce-shipping",heading:(0,c.__)("WooCommerce Shipping","woocommerce"),descriptions:{desktop:(0,c.__)("Print USPS, UPS, and DHL labels straight from your Woo dashboard and save on shipping thanks to discounted rates. You can manage WooCommerce Shipping in this section.","woocommerce")}}}),e&&d.steps.push({referenceElements:{desktop:"div.woocommerce-recommended-shipping-extensions"},meta:{name:"shipping-recommendations",heading:(0,c.__)("WooCommerce Shipping","woocommerce"),descriptions:{desktop:(0,c.__)("If you’d like to speed up your process and print your shipping label straight from your Woo dashboard, WooCommerce Shipping may be for you! ","woocommerce")}}}),(0,j.useEffect)((()=>{o&&(0,l.recordEvent)("walkthrough_settings_shipping_view")}),[o]),o?(0,g.jsxs)("div",{children:[(0,g.jsx)(I,{step:a}),(0,g.jsx)(m.TourKit,{config:d})]}):null},D=()=>{const{activePlugins:e,installedPlugins:i,countryCode:o,isSellingDigitalProductsOnly:c}=(0,t.useSelect)((e=>{const i=e(s.settingsStore).getSettings("general"),{getActivePlugins:o,getInstalledPlugins:t}=e(s.pluginsStore),c=e(s.onboardingStore).getProfileItems().product_types;return{activePlugins:o(),installedPlugins:t(),countryCode:(0,n.so)(i.general?.woocommerce_default_country),isSellingDigitalProductsOnly:1===c?.length&&"downloads"===c[0]}}),[]);return e.includes("woocommerce-shipping")||"US"!==o||c?(0,g.jsx)(E,{showShippingRecommendationsStep:!1}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(E,{showShippingRecommendationsStep:!0}),(0,g.jsx)(h.ShippingRecommendationsList,{children:(0,g.jsx)(d,{isPluginInstalled:i.includes("woocommerce-shipping")})})]})}},69873:(e,i,o)=>{o.r(i),o.d(i,{ShippingRecommendationsList:()=>y,default:()=>N});var t=o(65736),s=o(9818),n=o(69307),c=o(14812),r=o(67221),m=o(74617),a=o(55609),l=o(4174),u=o(86020),p=o(80225),g=o(81514);const d=(0,n.createContext)(""),h=({onDismiss:e=()=>null,children:i})=>{const{updateOptions:o}=(0,s.useDispatch)(r.optionsStore),c=(0,n.useContext)(d),m=()=>{e(),o({[c]:"yes"})};return(0,g.jsxs)(a.CardHeader,{children:[(0,g.jsx)("div",{className:"woocommerce-dismissable-list__header",children:i}),(0,g.jsx)("div",{children:(0,g.jsx)(u.EllipsisMenu,{label:(0,t.__)("Task List Options","woocommerce"),renderContent:()=>(0,g.jsx)("div",{className:"woocommerce-dismissable-list__controls",children:(0,g.jsx)(a.Button,{onClick:m,children:(0,t.__)("Hide this","woocommerce")})})})})]})},j=({children:e,className:i,dismissOptionName:o})=>(0,s.useSelect)((e=>{const{getOption:i,hasFinishedResolution:t}=e(r.optionsStore),s=t("getOption",[o]),n="yes"===i(o);return s&&!n}),[o])?(0,g.jsx)(a.Card,{size:"medium",className:(0,p.Z)("woocommerce-dismissable-list",i),children:(0,g.jsx)(d.Provider,{value:o,children:e})}):null;var L=o(31815);const M=({onSetupClick:e,pluginsBeingSetup:i})=>{const{createSuccessNotice:o}=(0,s.useDispatch)("core/notices"),n=(0,s.useSelect)((e=>e(r.pluginsStore).isJetpackConnected()),[]);return(0,g.jsxs)("div",{className:"woocommerce-list__item-inner woocommerce-shipping-plugin-item",children:[(0,g.jsx)("div",{className:"woocommerce-list__item-before",children:(0,g.jsx)("img",{className:"woocommerce-shipping-plugin-item__logo",src:L,alt:""})}),(0,g.jsxs)("div",{className:"woocommerce-list__item-text",children:[(0,g.jsxs)("span",{className:"woocommerce-list__item-title",children:[(0,t.__)("WooCommerce Shipping","woocommerce"),(0,g.jsx)(u.Pill,{children:(0,t.__)("Recommended","woocommerce")})]}),(0,g.jsxs)("span",{className:"woocommerce-list__item-content",children:[(0,t.__)("Print USPS, UPS, and DHL Express labels straight from your WooCommerce dashboard and save on shipping.","woocommerce"),(0,g.jsx)("br",{}),(0,g.jsx)(a.ExternalLink,{href:"https://woocommerce.com/woocommerce-shipping/",children:(0,t.__)("Learn more","woocommerce")})]})]}),(0,g.jsx)("div",{className:"woocommerce-list__item-after",children:(0,g.jsx)(a.Button,{isSecondary:!0,onClick:()=>{e(["woocommerce-shipping"]).then((()=>{const e=[];n||e.push({url:(0,m.getAdminLink)("admin.php?page=wc-settings&tab=shipping&section=woocommerce-shipping-settings"),label:(0,t.__)("Finish the setup by connecting your store to WordPress.com.","woocommerce")}),o((0,t.__)("🎉 WooCommerce Shipping is installed!","woocommerce"),{actions:e})}))},isBusy:i.includes("woocommerce-shipping"),disabled:i.length>0,children:(0,t.__)("Get started","woocommerce")})})]})};var S=o(28682);const y=({children:e})=>(0,g.jsxs)(j,{className:"woocommerce-recommended-shipping-extensions",dismissOptionName:"woocommerce_settings_shipping_recommendations_hidden",children:[(0,g.jsxs)(h,{children:[(0,g.jsx)(c.Text,{variant:"title.small",as:"p",size:"20",lineHeight:"28px",children:(0,t.__)("Recommended shipping solutions","woocommerce")}),(0,g.jsx)(c.Text,{className:"woocommerce-recommended-shipping__header-heading",variant:"caption",as:"p",size:"12",lineHeight:"16px",children:(0,t.__)('We recommend adding one of the following shipping extensions to your store. The extension will be installed and activated for you when you click "Get started".',"woocommerce")})]}),(0,g.jsx)("ul",{className:"woocommerce-list",children:n.Children.map(e,(e=>(0,g.jsx)("li",{className:"woocommerce-list__item",children:e})))}),(0,g.jsx)(a.CardFooter,{children:(0,g.jsx)(S.A,{message:(0,t.__)("Visit the {{Link}}Official WooCommerce Marketplace{{/Link}} to find more shipping, delivery, and fulfillment solutions.","woocommerce"),targetUrl:(0,m.getAdminLink)("admin.php?page=wc-admin&tab=extensions&path=/extensions&category=shipping-delivery-and-fulfillment"),eventName:"settings_shipping_recommendation_visit_marketplace_click"})})]}),N=()=>{const[e,i]=(()=>{const[e,i]=(0,n.useState)([]),{installAndActivatePlugins:o}=(0,s.useDispatch)(r.pluginsStore);return[e,t=>e.length>0?Promise.resolve():(i(t),o(t).then((()=>{i([])})).catch((e=>((0,l.a)(e),i([]),Promise.reject()))))]})();return(0,s.useSelect)((e=>e(r.pluginsStore).getActivePlugins()),[]).includes("woocommerce-shipping")?null:(0,g.jsx)(y,{children:(0,g.jsx)(M,{pluginsBeingSetup:e,onSetupClick:i})})}},31815:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48cGF0aCBmaWxsPSIjN2Q1N2E0IiBkPSJNMCAwaDEyMHYxMjBIMHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNjcuNDggNTMuNTVjLTEuMTktLjI2LTIuMzMuNDItMy40MyAyLjAzLS44NyAxLjI2LTEuNDUgMi41Ni0xLjc0IDMuOTEtLjE2Ljc3LS4yNCAxLjU4LS4yNCAyLjQxIDAgLjk3LjE5IDEuOTYuNTggMi45OS40OCAxLjI2IDEuMTMgMS45NiAxLjkzIDIuMTIuOC4xNiAxLjY5LS4xOSAyLjY2LTEuMDYgMS4yMi0xLjA5IDIuMDYtMi43MiAyLjUxLTQuODguMTYtLjc3LjI0LTEuNTguMjQtMi40MSAwLS45Ny0uMTktMS45Ni0uNTgtMi45OS0uNDgtMS4yNS0xLjEyLTEuOTYtMS45My0yLjEyem0yMC42MiAwYy0xLjE5LS4yNi0yLjMzLjQyLTMuNDMgMi4wMy0uODcgMS4yNi0xLjQ1IDIuNTYtMS43NCAzLjkxLS4xNi43Ny0uMjQgMS41OC0uMjQgMi40MSAwIC45Ny4xOSAxLjk2LjU4IDIuOTkuNDggMS4yNiAxLjEzIDEuOTYgMS45MyAyLjEyLjguMTYgMS42OS0uMTkgMi42Ni0xLjA2IDEuMjItMS4wOSAyLjA2LTIuNzIgMi41MS00Ljg4LjE2LS43Ny4yNC0xLjU4LjI0LTIuNDEgMC0uOTctLjE5LTEuOTYtLjU4LTIuOTktLjQ4LTEuMjUtMS4xMi0xLjk2LTEuOTMtMi4xMnoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOTIuNzYgNDBIMjcuMjRjLTQuMTQgMC03LjUgMy4zNi03LjUgNy41djI0Ljk4YzAgNC4xNCAzLjM2IDcuNSA3LjUgNy41aDMxLjA0bDE0LjE5IDcuOS0zLjIyLTcuOWgyMy41YzQuMTQgMCA3LjUtMy4zNiA3LjUtNy41VjQ3LjVjLjAxLTQuMTQtMy4zNS03LjUtNy40OS03LjV6TTUyLjc0IDcyLjkxYy4wNi44NC0uMDcgMS41NS0uMzggMi4xNi0uNC43NC0uOTggMS4xMy0xLjc1IDEuMTktLjg3LjA2LTEuNzMtLjM1LTIuNi0xLjIyLTMuMDYtMy4xNC01LjQ5LTcuODEtNy4yOC0xNC0yLjEyIDQuMjEtMy43MSA3LjM3LTQuNzUgOS40OC0xLjkzIDMuNzItMy41OSA1LjYyLTQuOTcgNS43Mi0uOS4wNi0xLjY2LS42OS0yLjI5LTIuMjYtMS42OS00LjMtMy41LTEyLjYzLTUuNDQtMjQuOTctLjEzLS44Ni4wNS0xLjYuNTItMi4yMS40Ny0uNjEgMS4xNi0uOTUgMi4wNi0xLjAyIDEuNjctLjEyIDIuNjMuNjcgMi44OCAyLjM2IDEuMDMgNi44NiAyLjE0IDEyLjY5IDMuMzEgMTcuNDhsNy4yMS0xMy43MmMuNjYtMS4yNCAxLjQ4LTEuOSAyLjQ3LTEuOTcgMS40NC0uMSAyLjM1LjgyIDIuNzEgMi43Ni44MiA0LjM2IDEuODYgOC4xMSAzLjEyIDExLjI1Ljg2LTguMzUgMi4zMS0xNC4zOSA0LjM0LTE4LjExLjQ4LS45IDEuMjEtMS4zOSAyLjE3LTEuNDYuNzctLjA1IDEuNDYuMTYgMi4wOC42NS42Mi40OS45NSAxLjEyIDEgMS44OS4wNC41OC0uMDcgMS4xLS4zMiAxLjU3LTEuMjggMi4zOC0yLjM0IDYuMzQtMy4xOCAxMS44OS0uODIgNS4zNC0xLjEzIDkuNTMtLjkxIDEyLjU0em0yMC4yLTUuMTZjLTEuOTYgMy4yOC00LjU0IDQuOTItNy43MiA0LjkyLS41OCAwLTEuMTgtLjA3LTEuNzktLjE5LTIuMzItLjQ4LTQuMDctMS43NS01LjI2LTMuODEtMS4wNi0xLjgtMS41OS0zLjk3LTEuNTktNi41MiAwLTMuMzguODUtNi40NyAyLjU2LTkuMjcgMi0zLjI4IDQuNTctNC45MiA3LjcyLTQuOTIuNTggMCAxLjE3LjA3IDEuNzkuMTkgMi4zMi40OCA0LjA3IDEuNzUgNS4yNiAzLjgxIDEuMDYgMS43NyAxLjU5IDMuOTMgMS41OSA2LjQ3LS4wMSAzLjM4LS44NiA2LjQ4LTIuNTYgOS4zMnptMjAuNjIgMGMtMS45NiAzLjI4LTQuNTQgNC45Mi03LjcyIDQuOTItLjU4IDAtMS4xNy0uMDctMS43OC0uMTktMi4zMi0uNDgtNC4wNy0xLjc1LTUuMjYtMy44MS0xLjA2LTEuOC0xLjU5LTMuOTctMS41OS02LjUyIDAtMy4zOC44NS02LjQ3IDIuNTYtOS4yNyAyLTMuMjggNC41Ny00LjkyIDcuNzItNC45Mi41OCAwIDEuMTcuMDcgMS43OC4xOSAyLjMyLjQ4IDQuMDcgMS43NSA1LjI2IDMuODEgMS4wNiAxLjc3IDEuNTkgMy45MyAxLjU5IDYuNDcgMCAzLjM4LS44NiA2LjQ4LTIuNTYgOS4zMnoiLz48L3N2Zz4K"}}]);