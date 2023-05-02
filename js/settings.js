"use strict";(()=>{function L(e){return chrome.runtime.getURL(e)}function b(e,t){chrome.tabs.sendMessage(e,t)}function R(e){chrome.runtime.sendMessage(e)}function S(e,t={}){chrome.tabs.create({url:e,...t})}async function E(){try{return await chrome.tabs.captureVisibleTab(null,{format:"png"})}catch(e){throw e}}var A={local:{store:async e=>{try{await chrome.storage.local.set(e)}catch(t){throw console.log(t),t}},get:async e=>{try{let t=await chrome.storage.local.get([e]);return t[e]?t[e]:null}catch(t){throw console.log(t),t}},remove:async e=>{try{await chrome.storage.local.remove([e])}catch(t){throw console.log(t),t}},clear:async()=>{try{await chrome.storage.local.clear()}catch(e){throw console.log(e),e}}}},m={getURL:L,sendMessage:R,sendMessageToTab:b,openTab:S,captureVisibleArea:E,storage:A};function _(e,t={},i){t.action=e,i?m.sendMessageToTab(i,t):m.sendMessage(t)}function j(e){chrome.runtime.onMessage.addListener((t,i,c)=>(c({}),e(t,i),!0))}var g={send:_,listen:j};function y(e,t,i){let c=document.createElement(e);if(t.style&&(x(t.style,c),delete t.style),i&&(c.innerHTML=i),t)for(let[p,w]of Object.entries(t))c.setAttribute(p,w);return c}function P(e){return y("link",{href:m.getURL(e),rel:"stylesheet",type:"text/css"})}function x(e,t){for(let[i,c]of Object.entries(e))t.style[i]=c}function I(e,t){["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop","focusout"].forEach(i=>{t.addEventListener(i,c=>{e(t.value)?(t.oldValue=t.value,t.oldSelectionStart=t.selectionStart,t.oldSelectionEnd=t.selectionEnd):t.hasOwnProperty("oldValue")?(t.value=t.oldValue,t.setSelectionRange(t.oldSelectionStart,t.oldSelectionEnd)):t.value=""})})}var n={create:y,link:P,applyStyles:x,applyFilterToValue:I};var Y='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path></svg>',T=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><style type="text/css">
.st0{display:none;fill:none;stroke:#000000;stroke-width:3.5;stroke-miterlimit:10;}</style>
<g><path d="M39.8,31.1c4.6,0,8.3-3.7,8.3-8.3s-3.7-8.3-8.3-8.3s-8.3,3.7-8.3,8.3S35.3,31.1,39.8,31.1z M39.8,18.1
		c2.6,0,4.8,2.1,4.8,4.8s-2.1,4.8-4.8,4.8s-4.8-2.1-4.8-4.8S37.2,18.1,39.8,18.1z"/><path d="M53.5,1.3H10.5C7.3,1.3,4.7,3.8,4.7,7v50c0,3.2,2.6,5.8,5.8,5.8h43.1c3.2,0,5.8-2.6,5.8-5.8V7C59.3,3.8,56.7,1.3,53.5,1.3z
		 M10.5,4.8h43.1c1.2,0,2.3,1,2.3,2.3v27.4c-1,0.6-2.1,1.4-3,2c-1.4,1-2.8,2.2-4.2,3.4c-3.7,3.3-7.2,6.4-11.9,4.6
		c-0.9-0.3-1.8-1.1-2.7-1.9l-0.4-0.4c-2.3-1.9-5-4-8.2-5c-5.4-1.7-10.3,1.4-14.6,4.1c-0.9,0.6-1.8,1.1-2.6,1.6V7
		C8.2,5.8,9.2,4.8,10.5,4.8z M53.5,59.3H10.5c-1.2,0-2.3-1-2.3-2.3V47c0.4-0.1,0.7-0.3,0.9-0.5c1.2-0.7,2.4-1.4,3.6-2.2
		c3.8-2.4,7.8-5,11.7-3.7c2.5,0.7,4.8,2.6,7,4.3l0.3,0.3c1.1,0.9,2.3,2,3.8,2.5c1.4,0.5,2.7,0.7,3.9,0.7c4.7,0,8.4-3.3,11.5-6
		c1.3-1.2,2.6-2.2,3.8-3.1c0.3-0.2,0.6-0.4,1-0.7V57C55.8,58.2,54.8,59.3,53.5,59.3z"/></g><rect x="15.7" y="15.7" class="st0" width="32.6" height="32.6"/></svg>`,D='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',O=`<svg fill="currentColor" width="24" height="24"viewBox="0 0 64 64"><g><path d="M53.2,52.4C53.2,52.4,53.1,52.4,53.2,52.4l7.2-4.3l-19.6-7.4c-0.4-0.2-0.8,0.2-0.6,0.6L47.5,61l4.2-7.2c0,0,0,0,0,0.1
l4.1,4.1c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L53.2,52.4z"/><rect x="35.5" y="46.2" width="4" height="2"/><rect x="20.6" y="46.2" width="7.5" height="2"/><rect x="9.2" y="46.2" width="4" height="2"/><path d="M4.6,44.4h-2v2.8c0,0.6,0.4,1,1,1h2.8v-2H4.6V44.4z"/><rect x="2.6" y="34.9" width="2" height="4"/><rect x="2.6" y="20" width="2" height="7.5"/><rect x="2.6" y="8.5" width="2" height="4"/><path d="M2.6,3v2.8h2V4h1.8V2H3.6C3.1,2,2.6,2.4,2.6,3z"/><rect x="11.9" y="2" width="4" height="2"/><rect x="23.4" y="2" width="7.5" height="2"/><rect x="38.3" y="2" width="4" height="2"/><path d="M46.8,5.8h2V3c0-0.6-0.4-1-1-1H45v2h1.8V5.8z"/><rect x="46.8" y="11.3" width="2" height="4"/><rect x="46.8" y="22.7" width="2" height="7.5"/><rect x="46.8" y="37.6" width="2" height="4"/></g></svg>`,$='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',F='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>',U='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',G='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',N='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>',W='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>',q=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64" xml:space="preserve"><path d="M61,52.3h-4.6V11.7H61c1,0,1.8-0.8,1.8-1.8S62,8.2,61,8.2h-4.6V3c0-1-0.8-1.8-1.8-1.8S52.9,2,52.9,3v5.2H11.1V3
            c0-1-0.8-1.8-1.8-1.8S7.6,2,7.6,3v5.2H3C2,8.2,1.3,9,1.3,9.9S2,11.7,3,11.7h4.6v40.6H3c-1,0-1.8,0.8-1.8,1.8S2,55.8,3,55.8h4.6V61
            c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-5.2h41.7V61c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-5.2H61c1,0,1.8-0.8,1.8-1.8
            S62,52.3,61,52.3z M11.1,11.7h41.7v20.5l-4.3-4.4c-1.7-1.7-4.5-1.8-6.3-0.2l-7.6,6.9c-0.3,0.3-0.6,0.3-0.8,0.3
            c-0.2,0-0.5-0.1-0.7-0.4l-8.3-11c-0.8-1.1-2.1-1.8-3.4-1.8c-1.4-0.1-2.7,0.5-3.6,1.5l-6.6,7.3V11.7z M11.1,52.3V35.5l9.2-10.2
            c0.3-0.3,0.6-0.4,0.8-0.3c0.2,0,0.5,0.1,0.8,0.4l8.3,11c0.8,1,1.9,1.7,3.2,1.8c0.1,0,0.3,0,0.4,0c1.1,0,2.2-0.4,3-1.2l7.6-6.9
            c0.4-0.4,1.1-0.4,1.5,0l6.8,6.9v15.2H11.1z"/></svg>
`,J='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>',K=`<svg fill="currentColor" width="24" height="24" version="1.1" viewBox="0 0 64 64" xml:space="preserve">
<path d="M55.3,1.3H8.7c-4.1,0-7.5,3.4-7.5,7.5v2.5C1.3,12.2,2,13,3,13s1.8-0.8,1.8-1.8V8.7c0-2.2,1.8-4,4-4h21.5v54.5H19.2
	c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h25.6c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H33.8V4.8h21.5c2.2,0,4,1.8,4,4v2.5
	c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8V8.7C62.8,4.6,59.4,1.3,55.3,1.3z"/>
</svg>
`,Q=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64" xml:space="preserve"><g><path d="M45.7,14.6H20.9c-1.1,0-2.1,0.4-2.7,1.2l-0.1,0.1c-0.7,0.9-1,1.9-0.8,2.9l1.5,8.6c0.3,1.5,1.6,2.6,3.1,2.6h21l-2.2,10.7
		l-8.3,3.5l-8.3-3.3l-0.9-5.2c-0.2-1-1.1-1.6-2-1.4c-1,0.2-1.6,1.1-1.4,2l1,5.4c0.2,1.1,0.9,2,2,2.4l8.6,3.4
		c0.4,0.2,0.8,0.2,1.2,0.2c0.4,0,0.8-0.1,1.2-0.3l8.5-3.6c1-0.4,1.7-1.3,1.9-2.3l2.3-11.3c0.2-0.9,0-1.9-0.7-2.6
		c-0.6-0.7-1.5-1.2-2.5-1.2H22.3l-1.5-8.3c0,0,0,0,0,0c0,0,0.1,0,0.1,0h24.8c1,0,1.8-0.8,1.8-1.8S46.7,14.6,45.7,14.6z"/><path d="M59.9,2.8c-1.4-1.6-3.5-2.6-5.7-2.6H9.8c-2.2,0-4.2,0.9-5.7,2.6C2.7,4.4,2,6.6,2.3,8.8l5.3,44.3c0.4,3.2,2.7,5.8,5.8,6.5
		l16.9,4c0.6,0.1,1.2,0.2,1.7,0.2s1.2-0.1,1.7-0.2l16.9-4c3.1-0.7,5.4-3.3,5.8-6.5l5.3-44.3C62,6.6,61.3,4.4,59.9,2.8z M58.3,8.3
		L53,52.6c-0.2,1.7-1.5,3.1-3.1,3.5l-16.9,4c-0.6,0.1-1.3,0.1-1.9,0l-16.9-4c-1.7-0.4-2.9-1.8-3.1-3.5L5.7,8.3C5.6,7.2,6,6,6.8,5.1
		c0.8-0.9,1.9-1.4,3.1-1.4h44.3c1.2,0,2.3,0.5,3.1,1.4C58,6,58.4,7.2,58.3,8.3z"/></g></svg>`,X=`<svg width="24" height="24" viewBox="0 0 96.000000 96.000000" fill="currentColor"><g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"><path d="M249 905 c-37 -20 -50 -61 -47 -140 2 -52 7 -71 21 -79 30 -19 52 4
55 63 l3 51 199 0 199 0 3 -51 c3 -59 25 -82 56 -63 21 14 29 133 11 176 -22
53 -47 58 -271 58 -156 -1 -209 -4 -229 -15z"/><path d="M192 567 c-39 -40 -72 -79 -72 -87 0 -20 141 -160 161 -160 19 0 39
20 39 39 0 9 -23 39 -52 68 l-52 53 52 53 c53 54 61 74 40 95 -23 23 -44 12
-116 -61z"/><path d="M652 628 c-21 -21 -13 -41 40 -95 l52 -53 -52 -53 c-29 -29 -52 -59
-52 -68 0 -19 20 -39 39 -39 20 0 161 140 161 160 0 20 -141 160 -161 160 -8
0 -20 -5 -27 -12z"/><path d="M212 268 c-17 -17 -15 -143 2 -177 24 -46 50 -51 267 -51 220 0 246
6 268 58 18 43 10 162 -11 176 -31 19 -53 -4 -56 -63 l-3 -51 -200 0 -199 0 0
	48 c0 50 -12 72 -40 72 -9 0 -21 -5 -28 -12z"/></g></svg>`,Z=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve"><g><path d="M58.4,13H5.5c-2.4,0-4.5,2-4.5,4.5v29.1C1,48.9,3,51,5.5,51h53c2.4,0,4.5-2,4.5-4.5V17.3C62.9,14.9,60.9,13,58.4,13z
		 M59.9,46.6c0,0.8-0.7,1.5-1.5,1.5H5.5c-0.8,0-1.5-0.7-1.5-1.5V17.3c0-0.8,0.7-1.5,1.5-1.5h53c0.8,0,1.5,0.7,1.5,1.5v29.2H59.9z"/><polygon points="50.1,21.8 44.2,21.8 44.2,32.2 38.1,32.2 47.1,42.1 56,32.2 50.1,32.2 	"/><polygon points="21.8,29.3 15.9,21.8 9.9,21.8 9.9,42.1 15.9,42.1 15.9,30.4 21.8,37.8 27.7,30.4 27.7,42.1 33.8,42.1 33.8,21.8 
		27.7,21.8 	"/></g></svg>`,e1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',t1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>',o1=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64" xml:space="preserve"><g><path d="M10,25.9V12.8C10,8,13.9,4,18.6,4h3.2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3.2C12.8,2,8,6.9,8,12.8v12.7l-5.1,5.8
		c-0.3,0.4-0.3,0.9,0,1.3L8,38.5v12.6c0,6,4.8,10.8,10.7,10.8h3.2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3.2c-4.8,0-8.7-4-8.7-8.8v-13
		c0-0.2-0.1-0.5-0.2-0.7L4.9,32l4.8-5.4C9.9,26.4,10,26.2,10,25.9z"/><path d="M61.2,31.3L56,25.6V12.8C56,6.9,51.2,2,45.4,2h-3.2c-0.6,0-1,0.4-1,1s0.4,1,1,1h3.2c4.8,0,8.7,4,8.7,8.8v13.1
		c0,0.2,0.1,0.5,0.3,0.7l4.8,5.4l-4.8,5.5c-0.2,0.2-0.2,0.4-0.2,0.7v13c0,4.9-3.9,8.8-8.7,8.8h-3.2c-0.6,0-1,0.4-1,1s0.4,1,1,1h3.2
		C51.2,62,56,57.1,56,51.2V38.5l5.1-5.9C61.5,32.3,61.5,31.7,61.2,31.3z"/></g></svg>`,n1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',i1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',r1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',c1='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>',s1='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>',l1=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><g><path d="M38.8,22.3h-5.1v-5.1c0-1-0.8-1.8-1.8-1.8s-1.8,0.8-1.8,1.8v5.1h-5.1c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h5.1v5.1
		c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-5.1h5.1c1,0,1.8-0.8,1.8-1.8S39.8,22.3,38.8,22.3z"/><path d="M49.8,1.3H14.2c-2.8,0-5,2.3-5,5v33.9c0,1.4,0.6,2.7,1.6,3.6l18.7,17.6c0.9,0.9,2.2,1.4,3.5,1.4h17c2.8,0,5-2.3,5-5V6.3
		C54.8,3.5,52.6,1.3,49.8,1.3z M15.2,43.2h13.5c0.8,0,1.5,0.6,1.5,1.4v12.7L15.2,43.2z M51.3,57.7c0,0.8-0.7,1.5-1.5,1.5H33.8V44.6
		c0-2.7-2.3-4.9-5-4.9H12.7V6.3c0-0.8,0.7-1.5,1.5-1.5h35.6c0.8,0,1.5,0.7,1.5,1.5V57.7z"/></g></svg>`,a1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',h1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',d1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>',v1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',p1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',g1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>',u1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>',m1=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><path d="M55.8,14H35.6l6-10.1C42.1,3.1,41.8,2,41,1.5c-0.8-0.5-1.9-0.2-2.4,0.6l-7,11.9h-1.4l-7-8.3c-0.6-0.7-1.7-0.8-2.5-0.2
	c-0.7,0.6-0.8,1.7-0.2,2.5l5.1,6H8.2c-2.6,0-4.8,2.1-4.8,4.8v32.9c0,2.6,2.1,4.8,4.8,4.8h2.9V61c0,1,0.8,1.8,1.8,1.8
	s1.8-0.8,1.8-1.8v-4.6h34.7V61c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-4.6h2.9c2.6,0,4.8-2.1,4.8-4.8V18.8C60.5,16.1,58.4,14,55.8,14
	z M57,51.6c0,0.7-0.6,1.3-1.3,1.3H8.2c-0.7,0-1.3-0.6-1.3-1.3V18.8c0-0.7,0.6-1.3,1.3-1.3h47.5c0.7,0,1.3,0.6,1.3,1.3V51.6z"/></svg>`,w1='<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><g><path d="M3,7.5h42.2c1,0,1.8-0.8,1.8-1.8S46.1,4,45.2,4H3C2,4,1.3,4.8,1.3,5.7S2,7.5,3,7.5z"/><path d="M3,25h50.1c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H3c-1,0-1.8,0.8-1.8,1.8S2,25,3,25z"/><path d="M3,42.5h34.3c1,0,1.8-0.8,1.8-1.8S38.2,39,37.3,39H3c-1,0-1.8,0.8-1.8,1.8S2,42.5,3,42.5z"/><path d="M61,56.5H3c-1,0-1.8,0.8-1.8,1.8S2,60,3,60h58c1,0,1.8-0.8,1.8-1.8S62,56.5,61,56.5z"/></g></svg>',k1=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><path d="M52.8,1.3H11.2C7.8,1.3,5.1,4,5.1,7.3v5.7c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8V7.3c0-1.4,1.1-2.6,2.6-2.6h13.5v54.5h-6.5
	c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h27.7c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8h-6.5V4.8h13.5c1.4,0,2.6,1.1,2.6,2.6v5.7
	c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8V7.3C58.9,4,56.2,1.3,52.8,1.3z M35.8,59.3h-7.6V4.8h7.6V59.3z"/></svg>`,y1=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><g><path d="M7.3,26.5c0.6,0,1-0.4,1.2-0.7l1.5-3.6h10.8l1.3,3.6c0.2,0.6,0.7,0.7,1.2,0.7h3.3c1.1-0.1,1.5-0.9,1.2-1.7L18.9,4.2
		c-0.2-0.6-0.4-0.7-1-0.7h-4.7c-0.4,0-1,0.2-1.2,0.7L3.1,25c-0.4,0.7,0.2,1.6,1,1.6H7.3z M15.3,9.8l3.1,8.1h-6.3L15.3,9.8z"/><path d="M36.1,7.5H61c1,0,1.8-0.8,1.8-1.8S62,4,61,4H36.1c-1,0-1.8,0.8-1.8,1.8S35.1,7.5,36.1,7.5z"/><path d="M61,22.3H36.1c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8H61c1,0,1.8-0.8,1.8-1.8S62,22.3,61,22.3z"/><path d="M61,40.5H5.4c-1,0-1.8,0.8-1.8,1.8S4.4,44,5.4,44H61c1,0,1.8-0.8,1.8-1.8S62,40.5,61,40.5z"/><path d="M61,58.8H5.4c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8H61c1,0,1.8-0.8,1.8-1.8S62,58.8,61,58.8z"/></g></svg>`,x1=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><g><path d="M20.1,29.8v-7.9v-4.1v-6c0-2.8-2.3-5-5-5H4.6C3,6.7,1.7,7.9,1.7,9.5v2c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-1.4H15
c0.8,0,1.5,0.7,1.5,1.5v6H6c-2.6,0-4.8,2.1-4.8,4.8v7.3c0,2.6,2.1,4.8,4.8,4.8h9.3C17.9,34.5,20.1,32.4,20.1,29.8z M16.6,29.8
c0,0.7-0.6,1.3-1.3,1.3H6c-0.7,0-1.3-0.6-1.3-1.3v-7.3c0-0.7,0.6-1.3,1.3-1.3h10.6v0.6V29.8z"/><path d="M29,34.5h9.3c2.6,0,4.8-2.1,4.8-4.8v-7.3c0-2.6-2.1-4.8-4.8-4.8H27.7V4.4c0-1-0.8-1.8-1.8-1.8s-1.8,0.8-1.8,1.8v13.3v4.1
v7.9C24.2,32.4,26.4,34.5,29,34.5z M38.3,21.2c0.7,0,1.3,0.6,1.3,1.3v7.3c0,0.7-0.6,1.3-1.3,1.3H29c-0.7,0-1.3-0.6-1.3-1.3v-7.9
v-0.6H38.3z"/><path d="M61,31h-8.8c-0.8,0-1.5-0.7-1.5-1.5v-6.7c0-0.8,0.7-1.5,1.5-1.5H61c1,0,1.8-0.8,1.8-1.8S62,17.7,61,17.7h-8.8
c-2.8,0-5,2.3-5,5v6.7c0,2.8,2.3,5,5,5H61c1,0,1.8-0.8,1.8-1.8C62.8,31.8,62,31,61,31z"/><path d="M43.1,42.6L28.6,57.1l-7.7-7.7c-0.7-0.7-1.8-0.7-2.5,0s-0.7,1.8,0,2.5l8.9,8.9c0.3,0.3,0.8,0.5,1.2,0.5s0.9-0.2,1.2-0.5
l15.8-15.8c0.7-0.7,0.7-1.8,0-2.5S43.8,41.9,43.1,42.6z"/></g></svg>`,f1=`<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><g><path d="M43.3,55H5.5c-0.6,0-1,0.4-1,1s0.4,1,1,1h37.8c0.6,0,1-0.4,1-1S43.9,55,43.3,55z"/><path d="M58.4,41.3l3.3-3.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L57,39.9l-3.3-3.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4
l3.3,3.3l-3.3,3.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3.3-3.3l3.3,3.3c0.2,0.2,0.5,0.3,0.7,0.3
s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L58.4,41.3z"/><path d="M30.4,9.3c-0.3-0.9-1-1.3-2-1.3h-8c-0.8,0-1.7,0.4-2,1.3L3.2,45.5c-0.6,1.4,0.3,2.9,1.9,2.9h5.3c0.9,0,1.9-0.7,2.1-1.4
l2.5-6.2h18.6l2.2,6.2c0.2,0.9,1.2,1.4,2.1,1.4h5.6c1.7-0.2,2.8-1.8,2.1-3L30.4,9.3z M18.9,33.3L24.3,19l5.4,14.2H18.9z"/></g></svg>`,M1=`<svg width="24" height="24" viewBox="0 0 100.000000 100.000000" fill="currentColor" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M140 500 l0 -460 360 0 360 0 0 328 -1 327 -138 133 -139 132 -221 0
-221 0 0 -460z m420 290 l0 -130 130 0 130 0 0 -290 0 -290 -320 0 -320 0 0
420 0 420 190 0 190 0 0 -130z m185 -39 l49 -51 -97 0 -97 0 0 91 0 91 48 -40
c26 -22 69 -63 97 -91z"/><path d="M213 508 c3 -13 11 -58 18 -100 11 -71 14 -78 35 -78 20 0 23 6 30
58 8 60 10 58 29 -30 4 -19 12 -28 25 -28 11 0 20 1 20 3 1 1 9 46 19 100 16
91 16 97 0 97 -20 0 -29 -20 -29 -63 0 -62 -17 -61 -24 2 -6 51 -10 61 -26 61
-15 0 -20 -10 -25 -55 -9 -65 -25 -83 -25 -28 0 58 -10 83 -32 83 -16 0 -19
-5 -15 -22z"/><path d="M420 430 l0 -100 50 0 c38 0 50 4 50 15 0 10 -10 15 -31 15 -27 0
-30 3 -27 28 2 19 9 28 26 30 31 5 28 32 -4 32 -21 0 -25 4 -22 23 2 14 11 23
26 25 12 2 22 10 22 18 0 10 -13 14 -45 14 l-45 0 0 -100z"/><path d="M540 430 l0 -100 45 0 c37 0 47 4 62 26 16 24 16 29 1 54 -10 17 -12
33 -7 41 26 41 -4 79 -62 79 l-39 0 0 -100z m68 42 c2 -15 -2 -22 -12 -22 -11
0 -16 9 -16 26 0 31 23 28 28 -4z m2 -67 c15 -18 6 -45 -15 -45 -10 0 -15 10
-15 30 0 33 11 38 30 15z"/><path d="M680 430 c0 -93 1 -100 20 -100 16 0 20 7 20 33 0 28 5 36 33 48 26
12 33 20 35 50 4 48 -18 69 -69 69 l-39 0 0 -100z m68 38 c2 -16 -3 -28 -12
-31 -13 -5 -16 1 -16 29 0 41 23 43 28 2z"/></g></svg>`,C1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',z1=`<svg width="24" height="24" viewBox="0 0 100.000000 100.000000" fill="currentColor"><g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"><path d="M205 906 c-37 -17 -80 -62 -94 -99 -17 -45 -15 -599 3 -640 16 -39
61 -82 99 -96 45 -17 539 -15 580 3 39 16 82 61 96 99 15 38 15 596 0 634 -14
38 -57 83 -96 99 -46 20 -544 19 -588 0z m584 -44 c65 -35 71 -60 71 -302 0
-330 11 -320 -360 -320 -371 0 -360 -10 -360 320 0 331 -12 320 360 320 228 0
259 -2 289 -18z m-576 -651 c38 -15 536 -15 574 0 15 6 38 20 51 31 l22 21 0
-29 c0 -43 -32 -95 -71 -116 -30 -16 -61 -18 -289 -18 -228 0 -259 2 -289 18
-39 21 -71 73 -71 116 l0 29 23 -21 c12 -11 35 -25 50 -31z"/><path d="M511 693 c-19 -70 -71 -287 -71 -295 0 -5 9 -8 20 -8 21 0 18 -8 69
197 37 144 36 143 11 143 -14 0 -22 -10 -29 -37z"/></g></svg>`,H1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',V1=`<svg width="24" height="24" viewBox="0 0 90.000000 90.000000"><g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none"><path d="M80 760 c-19 -19 -20 -33 -20 -330 l0 -310 390 0 390 0 0 310 c0 297
-1 311 -20 330 -19 19 -33 20 -370 20 -337 0 -351 -1 -370 -20z m700 -370 l0
-210 -330 0 -330 0 0 210 0 210 330 0 330 0 0 -210z"/><path d="M455 528 c-19 -55 -65 -264 -61 -275 3 -8 16 -13 28 -11 19 3 26 19
55 137 19 74 32 140 29 148 -7 17 -45 17 -51 1z"/><path d="M247 456 c-20 -31 -37 -60 -37 -66 0 -6 17 -35 37 -66 27 -41 42 -54
57 -52 31 4 31 31 0 77 l-27 41 27 41 c31 46 31 73 0 77 -15 2 -30 -11 -57
-52z"/><path d="M577 503 c-13 -12 -7 -33 19 -73 l27 -40 -27 -41 c-31 -46 -31 -73 0
-77 15 -2 30 11 57 52 20 31 37 60 37 66 0 6 -16 35 -36 65 -34 50 -59 66 -77
48z"/></g></svg>`,B1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>',L1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',b1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',R1=`<svg fill="currentColor" width="24" height="24" x="0px"
	 y="0px" viewBox="0 0 64 64"><g><path d="M57,30.3H33.1V8.6c0-4-3.3-7.3-7.3-7.3H8.6c-4,0-7.3,3.3-7.3,7.3v27.7c0,4,3.3,7.3,7.3,7.3h11V57c0,3.2,2.6,5.8,5.8,5.8H57
		c3.2,0,5.8-2.6,5.8-5.8V36C62.8,32.8,60.2,30.3,57,30.3z M8.6,40.1c-2.1,0-3.8-1.7-3.8-3.8V8.6c0-2.1,1.7-3.8,3.8-3.8h17.2
		c2.1,0,3.8,1.7,3.8,3.8v21.7h-4.3c-3.2,0-5.8,2.6-5.8,5.8v4.1H8.6z M59.3,57c0,1.2-1,2.3-2.3,2.3H25.3c-1.2,0-2.3-1-2.3-2.3V41.8
		c0,0,0,0,0,0s0,0,0,0V36c0-1.2,1-2.3,2.3-2.3H57c1.2,0,2.3,1,2.3,2.3V57z"/><path d="M39.8,8.1c7.6,0,13.9,5.8,14.8,13.2L52.2,19c-0.7-0.7-1.8-0.6-2.5,0.1c-0.7,0.7-0.6,1.8,0.1,2.5l5.1,4.7
		c0.3,0.3,0.8,0.5,1.2,0.5s0.9-0.2,1.2-0.5l5-4.6c0.7-0.7,0.8-1.8,0.1-2.5c-0.7-0.7-1.8-0.8-2.5-0.1L58,20.7
		c-1.1-9.1-8.9-16.2-18.3-16.2c-1,0-1.8,0.8-1.8,1.8S38.8,8.1,39.8,8.1z"/></g></svg>`,S1='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',E1=`<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
`,A1=`<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
`,_1=`<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
`,j1='<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" /></svg>',P1='<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" /></svg>',o={image:Y,image2:T,selectedArea:O,photograph:D,x:$,minimize:F,copy:U,clipboard:G,rotate:W,camera:N,imageCrop:q,fingerprint:J,text:K,html:Q,markdown:Z,link:e1,link2:t1,brackets:o1,chevronDown:n1,check:i1,zap:r1,key:c1,clipboardCheck:s1,addFiles:l1,arrowRight:a1,arrowLeft:h1,logIn:d1,logOut:u1,settings:v1,externalLink:p1,save:g1,tv:m1,textAlignLeft:w1,textAlt:k1,capitalLetter:y1,grammar:x1,textFormatRemove:f1,webp:M1,download:C1,backslash:z1,developerMode:X,database:H1,code:V1,moreVertical:B1,trash:L1,trashFill:j1,plus:b1,convert:R1,search:S1,chatBubbleBottom:E1,chatBubbleLeft:_1,send:A1,userFill:P1};var r={PRIMARY:0,SECONDARY:1},f=[{id:"random_string",name:"Random String",icon:o.text,type:r.PRIMARY},{id:"lorem_ipsum_generator",name:"Lorem Ipsum Generator",icon:o.textAlignLeft,type:r.PRIMARY},{id:"json_parser",name:"JSON Parser",icon:o.brackets,type:r.PRIMARY},{id:"chatgpt",name:"ChatGPT",icon:o.chatBubbleBottom,type:r.PRIMARY},{id:"backslash_escape_unescape",name:"Backslash Escape/Unescape",icon:o.backslash,type:r.PRIMARY},{id:"url_parser",name:"URL Parser",icon:o.link,type:r.PRIMARY},{id:"url_encode_decode",name:"URL Encode/Decode",icon:o.link2,type:r.PRIMARY},{id:"image_to_text",name:"Image to Text",icon:o.imageCrop,type:r.SECONDARY},{id:"html_sanitizer",name:"HTML Sanitizer",icon:o.code,type:r.PRIMARY},{id:"html_beautify_minify",name:"HTML Beautify/Minify",icon:o.developerMode,type:r.PRIMARY},{id:"html_preview",name:"HTML Preview",icon:o.html,type:r.PRIMARY},{id:"markdown_preview",name:"Markdown Preview",icon:o.markdown,type:r.PRIMARY},{id:"sql_formatter",name:"SQL Formatter",icon:o.database,type:r.PRIMARY},{id:"rsa_key_generator",name:"RSA Key Generator",icon:o.key,type:r.PRIMARY},{id:"text_inspector",name:"Text Inspector",icon:o.grammar,type:r.PRIMARY},{id:"text_diff",name:"Text Diff",icon:o.textFormatRemove,type:r.PRIMARY},{id:"text_case_converter",name:"Text Case Converter",icon:o.capitalLetter,type:r.PRIMARY},{id:"base64_string_encode_decode",name:"Base64 String Encode/Decode",icon:o.textAlt,type:r.PRIMARY},{id:"base64_image_encode_decode",name:"Base64 Image Encode/Decode",icon:o.photograph,type:r.PRIMARY},{id:"webp_converter",name:"WEBP Converter",icon:o.webp,type:r.PRIMARY},{id:"yaml_to_json",name:"YAML to JSON",icon:o.convert,type:r.PRIMARY},{id:"json_to_yaml",name:"JSON to YAML",icon:o.convert,type:r.PRIMARY},{id:"placeholder_image_generator",name:"Placeholder Image Generator",icon:o.image2,type:r.PRIMARY},{id:"svg_viewer",name:"SVG Viewer",icon:o.tv,type:r.PRIMARY}];function I1(e){let t=null;for(let i of f)if(e===i.id){t=i;break}return t}var M={TYPES:r,all:f,get:I1};function C(e,t){e?t.classList.add("active"):t.classList.remove("active")}function Y1(e){this.status=e.status?e.status:!1,this.domElement=n.create("div",{class:"checkbox"},"");let t=n.create("div",{id:"check"},o.check),i=n.create("label",{},e.label);this.domElement.addEventListener("click",()=>{this.status=!this.status,C(this.status,this.domElement),e.on_change&&e.on_change(this.status)}),C(this.status,this.domElement),this.domElement.appendChild(t),this.domElement.appendChild(i)}var z=Y1;function T1(e){if(this.domElement=n.create("div",{class:"loader"}),e.type)switch(e.type){case"small":this.domElement.style.width="24px",this.domElement.style.height="24px",this.domElement.style.borderWidth="2px";break;case"default":this.domElement.style.width="36px",this.domElement.style.height="36px",this.domElement.style.borderWidth="4px";break;case"large":this.domElement.style.width="48px",this.domElement.style.height="48px",this.domElement.style.borderWidth="6px";break}this.show=()=>this.domElement.style.display="block",this.hide=()=>this.domElement.style.display="none"}var H=T1;function D1(e){this.domElement=n.create("div",{class:"button"}),this.button=n.create("button",{},`
        ${e.svg?e.svg:""}
        ${e.text?`<span>${e.text}</span>`:""}
    `),e.style&&n.applyStyles(e.style,this.domElement),e.type&&this.domElement.classList.add(e.type),e.background&&this.domElement.classList.add(e.background),e.on_click&&this.button.addEventListener("click",e.on_click),e.loader&&(this.loader=new H({type:"small"}),this.loader.hide(),this.domElement.appendChild(this.loader.domElement)),this.domElement.appendChild(this.button),this.setLoading=t=>{t?(this.loader.show(),this.button.style.display="none",this.domElement.style.pointerEvents="none"):(this.loader.hide(),this.button.style.display="flex",this.domElement.style.pointerEvents="auto")}}var k=D1;var s={},u={settings:{}};function O1(){s.header=n.create("div",{class:"header"},'<div class="container"></div>'),s.container=n.create("div",{class:"container"}),$1(),F1(),U1();let e=chrome.runtime.getManifest(),t=n.create("h4",{class:"version"},`Version ${e.version}`);s.container.appendChild(t),document.body.appendChild(s.header),document.body.appendChild(s.container)}function $1(){let e=s.header.querySelector(".container");e.appendChild(n.create("div",{class:"brand"},`
        <img src="assets/icon.svg"/>
        <h1>Settings</h1>
    `));let t=n.create("ul",{}),i=n.create("li",{}),c=new k({text:"Save",svg:o.save,background:"blue",style:{marginTop:0,width:"120px"},on_click:()=>{g.send("settings.save",{settings:u.settings}),alert("Settings saved!")}});i.appendChild(c.domElement),t.appendChild(i),e.appendChild(t)}function F1(){s.container.appendChild(n.create("h2",{},"Tools"));let e=n.create("div",{class:"card"}),t=n.create("ul",{}),i=n.create("li",{},`
        <div class="setting">
            <h3>Enable tools</h3>
        </div>
    `);for(let p of M.all){u.settings.tools[p.id]===void 0&&(u.settings.tools[p.id]=!0);let w=u.settings.tools[p.id],V=new z({label:p.name,status:w,on_change:B=>u.settings.tools[p.id]=B});i.appendChild(V.domElement)}let c=n.create("li",{},`
        <div class="setting hover">
            <h3>Change Shortcuts</h3>
            ${o.externalLink}
        </div>
    `);c.addEventListener("click",()=>g.send("window.open",{href:"chrome://extensions/shortcuts"})),t.appendChild(i),t.appendChild(c),e.appendChild(t),s.container.appendChild(e)}function U1(){s.container.appendChild(n.create("h2",{},"Activation"));let e=n.create("div",{class:"card"}),t=n.create("ul",{}),i=n.create("li",{},`
        <div class="setting hover">
            <h3>Dashboard</h3>
            ${o.externalLink}
        </div>
    `);i.addEventListener("click",()=>{g.send("window.open",{href:"https://dashboard.utilengine.com"})});let c=n.create("li",{},'<div class="setting"></div>');s.deactivateBtn=new k({text:"Deactivate",svg:o.logOut,background:"red",loader:!0,style:{marginTop:0,width:"160px"},on_click:()=>{s.deactivateBtn.setLoading(!0),g.send("user.deactivate",{})}}),c.querySelector(".setting").appendChild(s.deactivateBtn.domElement),t.appendChild(i),t.appendChild(c),e.appendChild(t),s.container.appendChild(e)}g.listen((e,t)=>{switch(e.action){case"user.setToken":e.is_user||window.close(),u.settings=e.settings,O1();break;case"user.deactivationSuccessful":alert("Deactivated Successfully!"),window.close();break;case"user.deactivationFailed":s.deactivateBtn.setLoading(!1),alert(e.error);break}});g.send("user.getToken",{});})();
