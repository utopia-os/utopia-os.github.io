"use strict";(self.webpackChunkutopia_os_github_io=self.webpackChunkutopia_os_github_io||[]).push([[3501],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7107:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Map Components",p={unversionedId:"utopia-ui/map-components",id:"utopia-ui/map-components",title:"Map Components",description:"Map UI is a JavaScript Library to create nice and easy to use Map Apps and it's the crystallization point of Utopia OS where everything comes together.",source:"@site/docs/utopia-ui/map-components.md",sourceDirName:"utopia-ui",slug:"/utopia-ui/map-components",permalink:"/docs/utopia-ui/map-components",draft:!1,editUrl:"https://github.com/utopia-os/utopia-os.github.io/tree/main/docs/utopia-ui/map-components.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Utopia UI",permalink:"/docs/category/utopia-ui"},next:{title:"Profile Components",permalink:"/docs/utopia-ui/profile-components"}},l={},u=[{value:"Getting Started",id:"getting-started",level:3},{value:"Options",id:"options",level:3},{value:"Coming Soon",id:"coming-soon",level:2}],s={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"map-components"},"Map Components"),(0,r.kt)("p",null,"Map UI is a JavaScript Library to create nice and easy to use Map Apps and it's the crystallization point of Utopia OS where everything comes together."),(0,r.kt)("p",null,"It's made with ",(0,r.kt)("a",{parentName:"p",href:"https://leafletjs.com"},"leaflet")," and has ..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Map")," (based on OpenStreetMap)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Layers")," (places, events, profiles, offers, needs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Items with Markers")," (customizable in shape, color and icon)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Popups")," (to view and create new items)"))),(0,r.kt)("p",null,"... availible as React Components"),(0,r.kt)("h3",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"install via npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," npm install utopia-ui\n")),(0,r.kt)("p",null,"then import in your React App"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import Map from 'utopia-ui'\n")),(0,r.kt)("p",null,"use the Map UI Component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<Map height='100vh' width='100hw'></Map>\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"height of the map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"width of the map")))),(0,r.kt)("h2",{id:"coming-soon"},"Coming Soon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Profile UI Component"),(0,r.kt)("li",{parentName:"ul"},"Market UI Component"),(0,r.kt)("li",{parentName:"ul"},"Calendar UI Component"),(0,r.kt)("li",{parentName:"ul"},"Friends"),(0,r.kt)("li",{parentName:"ul"},"Groups"),(0,r.kt)("li",{parentName:"ul"},"Tags & Colors"),(0,r.kt)("li",{parentName:"ul"},"Gamification")))}m.isMDXComponent=!0}}]);