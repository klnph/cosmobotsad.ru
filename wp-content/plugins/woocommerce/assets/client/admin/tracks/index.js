(()=>{var e={74104:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let o=0,r=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(o++,"%c"===e&&(r=o))})),t.splice(r,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(56093)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},56093:(e,t,n)=>{e.exports=function(e){function t(e){let n,r,s,a=null;function c(...e){if(!c.enabled)return;const o=c,r=Number(new Date),s=r-(n||r);o.diff=s,o.prev=n,o.curr=r,n=r,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,r)=>{if("%%"===n)return"%";a++;const s=t.formatters[r];if("function"==typeof s){const t=e[a];n=s.call(o,t),e.splice(a,1),a--}return n})),t.formatArgs.call(o,e),(o.log||t.log).apply(o,e)}return c.namespace=e,c.useColors=t.useColors(),c.color=t.selectColor(e),c.extend=o,c.destroy=t.destroy,Object.defineProperty(c,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(r!==t.namespaces&&(r=t.namespaces,s=t.enabled(e)),s),set:e=>{a=e}}),"function"==typeof t.init&&t.init(c),c}function o(e,n){const o=t(this.namespace+(void 0===n?":":n)+e);return o.log=this.log,o}function r(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(r),...t.skips.map(r).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const o=("string"==typeof e?e:"").split(/[\s,]+/),r=o.length;for(n=0;n<r;n++)o[n]&&("-"===(e=o[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(48714),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},48714:e=>{var t=1e3,n=60*t,o=60*n,r=24*o,s=7*r;function a(e,t,n,o){var r=t>=1.5*n;return Math.round(e/n)+" "+o+(r?"s":"")}e.exports=function(e,c){c=c||{};var i,u,d=typeof e;if("string"===d&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(a){var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*c;case"weeks":case"week":case"w":return c*s;case"days":case"day":case"d":return c*r;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}(e);if("number"===d&&isFinite(e))return c.long?(i=e,(u=Math.abs(i))>=r?a(i,u,r,"day"):u>=o?a(i,u,o,"hour"):u>=n?a(i,u,n,"minute"):u>=t?a(i,u,t,"second"):i+" ms"):function(e){var s=Math.abs(e);return s>=r?Math.round(e/r)+"d":s>=o?Math.round(e/o)+"h":s>=n?Math.round(e/n)+"m":s>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";n.r(o),n.d(o,{bumpStat:()=>c,queueRecordEvent:()=>C,recordEvent:()=>d,recordPageView:()=>g});var e=n(74104),t=n.n(e);const r=!1,s=t()("wc-admin:tracks:stats"),a="x_woocommerce-";function c(e,t=""){if("object"==typeof e)s("Bumping stats %o",e);else if(s("Bumping stat %s:%s",e,t),!t)return s("No stat name provided for group %s",e),!1;if(r||!window.wcTracks||!window.wcTracks.isEnabled)return!1;const n=function(e,t){const n=new URLSearchParams;return n.append("v","wpcom-no-pv"),"object"!=typeof e?n.append(`${a}${e}`,t):Object.entries(e).forEach((([e,t])=>{n.append(`${a}${e}`,t)})),n.append("t",Math.random().toString()),n}(e,t);return(new window.Image).src=`${document.location.protocol}//pixel.wp.com/g.gif?${n.toString()}`,!0}const i=t()("wc-admin:tracks"),u=e=>2===e.length&&"string"==typeof e[0];function d(e,t){return i("recordevent %s %o","wcadmin_"+e,t,{_tqk:window._tkq,shouldRecord:!(r||!window._tkq||!window.wcTracks||!window.wcTracks.isEnabled)}),!(!window.wcTracks||"function"!=typeof window.wcTracks.recordEvent)&&(r?(window.wcTracks.validateEvent(e,t),!1):void window.wcTracks.recordEvent(e,t))}const l={localStorageKey:()=>"tracksQueue",clear(){window.localStorage&&window.localStorage.removeItem(l.localStorageKey())},get(){if(!window.localStorage)return[];const e=window.localStorage.getItem(l.localStorageKey()),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]},add(...e){if(!window.localStorage)return i("Unable to queue, running now",{args:e}),void(u(e)?d(...e):i("Invalid args",e));let t=l.get();const n={args:e};t.push(n),t=t.slice(-100),i("Adding new item to queue.",n),window.localStorage.setItem(l.localStorageKey(),JSON.stringify(t))},process(){if(!window.localStorage)return;const e=l.get();l.clear(),i("Processing items in queue.",e),e.forEach((e=>{if("object"==typeof e){i("Processing item in queue.",e);const t=e.args;u(t)?d(...t):i("Invalid item args",e.args)}}))}};function C(e,t){l.add(e,t)}function g(e,t){e&&(d("page_view",{path:e,...t}),l.process())}})(),(window.wc=window.wc||{}).tracks=o})();