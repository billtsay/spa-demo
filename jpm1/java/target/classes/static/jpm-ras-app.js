/*! For license information please see jpm-ras-app.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,t){var n={},r={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))},function(e){r.default=e.default}],execute:function(){e((()=>{var e={313:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(15),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n    padding: 0;\n    margin: 0;\n}\n\nh1 {\n    text-align: center;\n    font-size: 45px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgb(6, 0, 32);\n    padding: 40px;\n}\n\n.list {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.list ul li {\n    list-style: none;\n    margin: 42px;\n    text-align: center;\n}\n\na {\n    text-decoration: none;\n    color: rgb(0, 0, 0);\n    font-size: 18px;\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 14px 25px;\n    background-color: transparent;\n    border: 2px solid rgb(12, 0, 66);\n}\n\na:hover {\n    background-color: rgb(12, 0, 66);\n    color: rgb(255, 255, 255);\n}","",{version:3,sources:["webpack://./src/app.css"],names:[],mappings:"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,yCAAyC;IACzC,oBAAoB;IACpB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,yCAAyC;IACzC,kBAAkB;IAClB,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;IAChC,yBAAyB;AAC7B",sourcesContent:["* {\n    padding: 0;\n    margin: 0;\n}\n\nh1 {\n    text-align: center;\n    font-size: 45px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgb(6, 0, 32);\n    padding: 40px;\n}\n\n.list {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.list ul li {\n    list-style: none;\n    margin: 42px;\n    text-align: center;\n}\n\na {\n    text-decoration: none;\n    color: rgb(0, 0, 0);\n    font-size: 18px;\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 14px 25px;\n    background-color: transparent;\n    border: 2px solid rgb(12, 0, 66);\n}\n\na:hover {\n    background-color: rgb(12, 0, 66);\n    color: rgb(255, 255, 255);\n}"],sourceRoot:""}]);const s=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),c="/*# ".concat(l," */"),u=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(u).concat([c]).join("\n")}return[a].join("\n")}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))n.call(a,c)&&(s[c]=a[c]);if(t){i=t(a);for(var u=0;u<i.length;u++)r.call(a,i[u])&&(s[i[u]]=a[i[u]])}}return s}},251:(e,t,n)=>{"use strict";n(418);var r=n(954),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:i.current}}t.jsx=c,t.jsxs=c},893:(e,t,n)=>{"use strict";e.exports=n(251)},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=a[c]||0,p="".concat(c," ").concat(u);a[c]=u+1;var d=n(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var u=n(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},722:(e,t,n)=>{const r=n(905).R;t.s=function(e){if(e||(e=1),!n.y.meta||!n.y.meta.url)throw console.error("__system_context__",n.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");n.p=r(n.y.meta.url,e)}},905:(e,t,n)=>{t.R=function(e,t){var n=document.createElement("a");n.href=e;for(var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,a=r.length;o!==t&&a>=0;)"/"===r[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return n.protocol+"//"+n.host+i};Number.isInteger},954:e=>{"use strict";e.exports=n},493:e=>{"use strict";e.exports=r}},o={};function a(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={id:t,exports:{}};return e[t](r,r.exports,a),r.exports}a.y=t,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="",a.nc=void 0;var i={};return(0,a(722).s)(1),(()=>{"use strict";a.r(i),a.d(i,{bootstrap:()=>Xe,mount:()=>et,unmount:()=>tt});var e=a(954),t=a(493);function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n;if("function"!=typeof(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(l(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(l(e)));return e}}var u=null;try{u=require("react").createContext()}catch(n){}var p,d={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function h(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function f(e,t){return new Promise((function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=v(e,t,(function(){n(this)})),a=c(e,t)(),i=function(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](r);return a.render(n),a}return"hydrate"===o?t.ReactDOM.hydrate(n,r):t.ReactDOM.render(n,r),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function m(e,t){return new Promise((function(n){e.unmountFinished=n;var r=e.renderResults[t.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function y(e,t){return new Promise((function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var r=v(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(r);else{var a=c(e,t)();e.ReactDOM.render(r,a)}}))}function v(e,t,n){var o=e.React.createElement(e.rootComponent,t),a=u?e.React.createElement(u.Provider,{value:t},o):o;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,r(r({},t),{},{mountFinished:n,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(p||(p={}));const b="popstate";function x(e,t){if(!1===e||null==e)throw new Error(t)}function C(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function E(e,t){return{usr:e.state,key:e.key,idx:t}}function A(e,t,n,r){return void 0===n&&(n=null),g({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?R(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function w(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function R(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var j;function S(e,t,n){void 0===n&&(n="/");let r=F(("string"==typeof t?R(t):t).pathname||"/",n);if(null==r)return null;let o=O(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let e=0;null==a&&e<o.length;++e)a=M(o[e],W(r));return a}function O(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(x(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let s=J([r,i.relativePath]),l=n.concat(i);e.children&&e.children.length>0&&(x(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),O(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:L(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of P(e.path))o(e,t,n);else o(e,t)})),t}function P(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let i=P(r.join("/")),s=[];return s.push(...i.map((e=>""===e?a:[a,e].join("/")))),o&&s.push(...i),s.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(j||(j={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const B=/^:\w+$/,I=3,k=2,U=1,_=10,T=-2,D=e=>"*"===e;function L(e,t){let n=e.split("/"),r=n.length;return n.some(D)&&(r+=T),t&&(r+=k),n.filter((e=>!D(e))).reduce(((e,t)=>e+(B.test(t)?I:""===t?U:_)),r)}function M(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let e=0;e<n.length;++e){let i=n[e],s=e===n.length-1,l="/"===o?t:t.slice(o.length)||"/",c=N({path:i.relativePath,caseSensitive:i.caseSensitive,end:s},l);if(!c)return null;Object.assign(r,c.params);let u=i.route;a.push({params:r,pathname:J([o,c.pathname]),pathnameBase:q(J([o,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(o=J([o,c.pathnameBase]))}return a}function N(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),C("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));return e.endsWith("*")?(r.push("*"),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=s[n]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return C(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(s[n]||"",t),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function W(e){try{return decodeURI(e)}catch(t){return C(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function F(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function $(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function H(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function z(e,t,n,r){let o;void 0===r&&(r=!1),"string"==typeof e?o=R(e):(o=g({},e),x(!o.pathname||!o.pathname.includes("?"),$("?","pathname","search",o)),x(!o.pathname||!o.pathname.includes("#"),$("#","pathname","hash",o)),x(!o.search||!o.search.includes("#"),$("#","search","hash",o)));let a,i=""===e||""===o.pathname,s=i?"/":o.pathname;if(r||null==s)a=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"==typeof e?R(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:G(r),hash:Z(o)}}(o,a),c=s&&"/"!==s&&s.endsWith("/"),u=(i||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const J=e=>e.join("/").replace(/\/\/+/g,"/"),q=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),G=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Z=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class K extends Error{}const V=["post","put","patch","delete"],Y=(new Set(V),["get",...V]);new Set(Y),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,Symbol("deferred");const Q="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:X,useEffect:ee,useLayoutEffect:te,useDebugValue:ne}=e;function re(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!Q(n,e)}catch(e){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement;"useSyncExternalStore"in e&&e.useSyncExternalStore;const oe=e.createContext(null),ae=e.createContext(null),ie=e.createContext(null),se=e.createContext(null),le=e.createContext({outlet:null,matches:[]}),ce=e.createContext(null);function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function pe(){return null!=e.useContext(se)}function de(){return pe()||x(!1),e.useContext(se).location}function he(t,n){let{relative:r}=void 0===n?{}:n,{matches:o}=e.useContext(le),{pathname:a}=de(),i=JSON.stringify(H(o).map((e=>e.pathnameBase)));return e.useMemo((()=>z(t,JSON.parse(i),a,"path"===r)),[t,i,a,r])}function fe(){let t=function(){var t;let n=e.useContext(ce),r=function(t){let n=e.useContext(ae);return n||x(!1),n}(ge.UseRouteError),o=function(t){let n=function(t){let n=e.useContext(le);return n||x(!1),n}(),r=n.matches[n.matches.length-1];return r.route.id||x(!1),r.route.id}(ge.UseRouteError);return n||(null==(t=r.errors)?void 0:t[o])}(),n=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,null)}class me extends e.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?e.createElement(le.Provider,{value:this.props.routeContext},e.createElement(ce.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ye(t){let{routeContext:n,match:r,children:o}=t,a=e.useContext(oe);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(le.Provider,{value:n},o)}var ve,ge,be;function xe(e){x(!1)}function Ce(t){let{basename:n="/",children:r=null,location:o,navigationType:a=p.Pop,navigator:i,static:s=!1}=t;pe()&&x(!1);let l=n.replace(/^\/*/,"/"),c=e.useMemo((()=>({basename:l,navigator:i,static:s})),[l,i,s]);"string"==typeof o&&(o=R(o));let{pathname:u="/",search:d="",hash:h="",state:f=null,key:m="default"}=o,y=e.useMemo((()=>{let e=F(u,l);return null==e?null:{location:{pathname:e,search:d,hash:h,state:f,key:m},navigationType:a}}),[l,u,d,h,f,m,a]);return null==y?null:e.createElement(ie.Provider,{value:c},e.createElement(se.Provider,{children:r,value:y}))}function Ee(t){let{children:n,location:r}=t,o=e.useContext(oe);return function(t,n){pe()||x(!1);let{navigator:r}=e.useContext(ie),o=e.useContext(ae),{matches:a}=e.useContext(le),i=a[a.length-1],s=i?i.params:{},l=(i&&i.pathname,i?i.pathnameBase:"/");i&&i.route;let c,u=de();if(n){var d;let e="string"==typeof n?R(n):n;"/"===l||(null==(d=e.pathname)?void 0:d.startsWith(l))||x(!1),c=e}else c=u;let h=c.pathname||"/",f=S(t,{pathname:"/"===l?h:h.slice(l.length)||"/"}),m=function(t,n,r){if(void 0===n&&(n=[]),null==t){if(null==r||!r.errors)return null;t=r.matches}let o=t,a=null==r?void 0:r.errors;if(null!=a){let e=o.findIndex((e=>e.route.id&&(null==a?void 0:a[e.route.id])));e>=0||x(!1),o=o.slice(0,Math.min(o.length,e+1))}return o.reduceRight(((t,i,s)=>{let l=i.route.id?null==a?void 0:a[i.route.id]:null,c=null;r&&(c=i.route.ErrorBoundary?e.createElement(i.route.ErrorBoundary,null):i.route.errorElement?i.route.errorElement:e.createElement(fe,null));let u=n.concat(o.slice(0,s+1)),p=()=>{let n=t;return l?n=c:i.route.Component?n=e.createElement(i.route.Component,null):i.route.element&&(n=i.route.element),e.createElement(ye,{match:i,routeContext:{outlet:t,matches:u},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===s)?e.createElement(me,{location:r.location,component:c,error:l,children:p(),routeContext:{outlet:null,matches:u}}):p()}),null)}(f&&f.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:J([l,r.encodeLocation?r.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:J([l,r.encodeLocation?r.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),a,o||void 0);return n&&m?e.createElement(se.Provider,{value:{location:ue({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:p.Pop}},m):m}(o&&!n?o.router.routes:we(n),r)}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(ve||(ve={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(ge||(ge={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(be||(be={})),new Promise((()=>{}));class Ae extends e.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,o=be.pending;if(n instanceof Promise)if(this.state.error){be.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?void 0!==r._error?be.error:void 0!==r._data?be.success:be.pending:(be.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else be.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(o===be.error&&r._error instanceof AbortedDeferredError)throw neverSettledPromise;if(o===be.error&&!t)throw r._error;if(o===be.error)return React.createElement(AwaitContext.Provider,{value:r,children:t});if(o===be.success)return React.createElement(AwaitContext.Provider,{value:r,children:e});throw r}}function we(t,n){void 0===n&&(n=[]);let r=[];return e.Children.forEach(t,((t,o)=>{if(!e.isValidElement(t))return;let a=[...n,o];if(t.type===e.Fragment)return void r.push.apply(r,we(t.props.children,a));t.type!==xe&&x(!1),t.props.index&&t.props.children&&x(!1);let i={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(i.children=we(t.props.children,a)),r.push(i)})),r}function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Re.apply(this,arguments)}const je=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Se(t){let{basename:n,children:r,window:o}=t,a=e.useRef();null==a.current&&(a.current=function(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,s=p.Pop,l=null,c=u();function u(){return(i.state||{idx:null}).idx}function d(){s=p.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:s,location:f.location,delta:t})}function h(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"==typeof e?e:w(e);return x(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,i.replaceState(g({},i.state,{idx:c}),""));let f={get action(){return s},get location(){return e(o,i)},listen(e){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(b,d),l=e,()=>{o.removeEventListener(b,d),l=null}},createHref:e=>t(o,e),createURL:h,encodeLocation(e){let t=h(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=p.Push;let r=A(f.location,e,t);n&&n(r,e),c=u()+1;let d=E(r,c),h=f.createHref(r);try{i.pushState(d,"",h)}catch(e){o.location.assign(h)}a&&l&&l({action:s,location:f.location,delta:1})},replace:function(e,t){s=p.Replace;let r=A(f.location,e,t);n&&n(r,e),c=u();let o=E(r,c),d=f.createHref(r);i.replaceState(o,"",d),a&&l&&l({action:s,location:f.location,delta:0})},go:e=>i.go(e)};return f}((function(e,t){let{pathname:n,search:r,hash:o}=e.location;return A("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:w(t)}),null,e)}({window:o,v5Compat:!0}));let i=a.current,[s,l]=e.useState({action:i.action,location:i.location});return e.useLayoutEffect((()=>i.listen(l)),[i]),e.createElement(Ce,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:i})}const Oe="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Pe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Be=e.forwardRef((function(t,n){let r,{onClick:o,relative:a,reloadDocument:i,replace:s,state:l,target:c,to:u,preventScrollReset:p}=t,d=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,je),{basename:h}=e.useContext(ie),f=!1;if("string"==typeof u&&Pe.test(u)&&(r=u,Oe)){let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=F(t.pathname,h);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:f=!0}let m=function(t,n){let{relative:r}=void 0===n?{}:n;pe()||x(!1);let{basename:o,navigator:a}=e.useContext(ie),{hash:i,pathname:s,search:l}=he(t,{relative:r}),c=s;return"/"!==o&&(c="/"===s?o:J([o,s])),a.createHref({pathname:c,search:l,hash:i})}(u,{relative:a}),y=function(t,n){let{target:r,replace:o,state:a,preventScrollReset:i,relative:s}=void 0===n?{}:n,l=function(){pe()||x(!1);let{basename:t,navigator:n}=e.useContext(ie),{matches:r}=e.useContext(le),{pathname:o}=de(),a=JSON.stringify(H(r).map((e=>e.pathnameBase))),i=e.useRef(!1);e.useEffect((()=>{i.current=!0}));let s=e.useCallback((function(e,r){if(void 0===r&&(r={}),!i.current)return;if("number"==typeof e)return void n.go(e);let s=z(e,JSON.parse(a),o,"path"===r.relative);"/"!==t&&(s.pathname="/"===s.pathname?t:J([t,s.pathname])),(r.replace?n.replace:n.push)(s,r.state,r)}),[t,n,a,o]);return s}(),c=de(),u=he(t,{relative:s});return e.useCallback((e=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(e,r)){e.preventDefault();let n=void 0!==o?o:w(c)===w(u);l(t,{replace:n,state:a,preventScrollReset:i,relative:s})}}),[c,l,u,o,a,r,t,i,s])}(u,{replace:s,state:l,target:c,preventScrollReset:p,relative:a});return e.createElement("a",Re({},d,{href:r||m,onClick:f||i?o:function(e){o&&o(e),e.defaultPrevented||y(e)},ref:n,target:c}))}));var Ie,ke;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ie||(Ie={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ke||(ke={}));var Ue=a(893);function _e(){return(0,Ue.jsx)("div",{children:(0,Ue.jsx)("h1",{children:"Page 1"})})}function Te(){return(0,Ue.jsx)("div",{children:(0,Ue.jsx)("h1",{children:"Page 2"})})}function De(){return(0,Ue.jsx)("div",{children:(0,Ue.jsx)("h1",{children:"Page 3"})})}var Le=a(379),Me=a.n(Le),Ne=a(795),We=a.n(Ne),Fe=a(569),$e=a.n(Fe),He=a(565),ze=a.n(He),Je=a(216),qe=a.n(Je),Ge=a(589),Ze=a.n(Ge),Ke=a(313),Ve={};Ve.styleTagTransform=Ze(),Ve.setAttributes=ze(),Ve.insert=$e().bind(null,"head"),Ve.domAPI=We(),Ve.insertStyleElement=qe(),Me()(Ke.Z,Ve),Ke.Z&&Ke.Z.locals&&Ke.Z.locals;const Ye=function(){return(0,Ue.jsx)("div",{className:"App",children:(0,Ue.jsxs)(Se,{basename:"planets",children:[(0,Ue.jsxs)(Ee,{children:[(0,Ue.jsx)(xe,{exact:!0,path:"/",element:(0,Ue.jsx)("h1",{children:"Home Page"})}),(0,Ue.jsx)(xe,{exact:!0,path:"page1",element:(0,Ue.jsx)(_e,{})}),(0,Ue.jsx)(xe,{exact:!0,path:"page2",element:(0,Ue.jsx)(Te,{})}),(0,Ue.jsx)(xe,{exact:!0,path:"page3",element:(0,Ue.jsx)(De,{})})]}),(0,Ue.jsx)("div",{className:"list",children:(0,Ue.jsxs)("ul",{children:[(0,Ue.jsx)("li",{children:(0,Ue.jsx)(Be,{to:"/",children:"Home"})}),(0,Ue.jsx)("li",{children:(0,Ue.jsx)(Be,{to:"page1",children:"Page 1"})}),(0,Ue.jsx)("li",{children:(0,Ue.jsx)(Be,{to:"page2",children:"Page 2"})}),(0,Ue.jsx)("li",{children:(0,Ue.jsx)(Be,{to:"page3",children:"Page 3"})})]})})]})})};var Qe=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=r(r({},d),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!u&&t.React.createContext&&(u=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var n={bootstrap:h.bind(null,t),mount:f.bind(null,t),unmount:m.bind(null,t)};return t.parcelCanUpdate&&(n.update=y.bind(null,t)),n}({React:e.default,ReactDOM:t.default,rootComponent:function(e){return(0,Ue.jsx)(Ye,{})},errorBoundary:function(e,t,n){return null}}),Xe=Qe.bootstrap,et=Qe.mount,tt=Qe.unmount})(),i})())}}}));
//# sourceMappingURL=jpm-ras-app.js.map