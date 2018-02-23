!function(n){function e(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var o={};e.m=n,e.c=o,e.d=function(n,o,t){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=5)}({5:function(n,e,o){"use strict";var t=function(n){return n&&n.__esModule?n:{default:n}}(o(6)),a={eventName:"event6",trackerUrl:""};window.detectSandboxFrame=function(n){if(a=Object.assign(a,n),!a.trackerUrl)throw new Error("trackerUrl is required");document.createElement("img").src="".concat(a.trackerUrl,"click.php?").concat(a.eventName,"=").concat(t.default.unsandbox()?0:1)}},6:function(n,e,o){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(n){return{name:n.name,message:n.message,stack:n.stack}}function r(n,e){return(n||[]).concat(e||[]).filter(function(n,e,o){return o.indexOf(n)===e})}function s(){var n=!window.opener,e=!!(window.top&&window!=window.top||window.parent&&window!=window.parent);return n&&e}function l(n){var e;try{e="object"===t(n)&&null!==n&&1===n.nodeType&&/^I?FRAME$/.test(n.nodeName||"")&&!!n.hasAttribute&&!!n.getAttribute&&!!n.setAttribute}catch(n){e=!1}return e}function i(n){var e;try{e=window.frameElement,l(e)||(e=null)}catch(o){e=null,"function"==typeof n&&n(a(o))}return e}function u(n){var e;try{e=document.domain||null}catch(o){e=null,"function"==typeof n&&n(a(o))}return e}function d(){return{forms:null,modals:null,orientationLock:null,pointerLock:null,popups:null,popupsToEscapeSandbox:null,sameOrigin:!0,scripts:!0,topNavigation:null}}function c(n){var e,o=null;return null===n?o=d():"string"==typeof n&&(e=n.replace(/^\s+|\s+$/g,"").toLowerCase().split(/\s+/),o={forms:-1!==e.indexOf("allow-forms"),modals:-1!==e.indexOf("allow-modals"),orientationLock:-1!==e.indexOf("allow-orientation-lock"),pointerLock:-1!==e.indexOf("allow-pointer-lock"),popups:-1!==e.indexOf("allow-popups"),popupsToEscapeSandbox:-1!==e.indexOf("allow-popups-to-escape-sandbox"),sameOrigin:-1!==e.indexOf("allow-same-origin"),scripts:-1!==e.indexOf("allow-scripts"),topNavigation:-1!==e.indexOf("allow-top-navigation")}),o}function b(n,e){var o,a,s,l,i=!1;if(n&&"object"===t(n)&&e&&"object"===t(e))for(o=r(Object.keys(n),Object.keys(e)),i=!0,a=0,s=o.length;a<s;a++)if(l=o[a],!n.hasOwnProperty(l)||!e.hasOwnProperty(l)||n[l]!==e[l]){i=!1;break}return i}function f(n,e){var o,t,a,r,s={sandboxed:void 0,sandboxAllowances:void 0,unsandboxable:void 0,resandboxable:void 0,errors:[]};if(l(n)){try{s.sandboxed=n.hasAttribute("sandbox")}catch(n){s.sandboxed=null,"function"==typeof e&&e(n)}if(s.sandboxed)try{o=n.getAttribute("sandbox")||""}catch(n){o=null,"function"==typeof e&&e(n)}else null===s.sandboxed&&(o=null);if(null!==o&&"string"!=typeof o||(s.sandboxAllowances=c(o)),s.sandboxed)try{n.removeAttribute("sandbox"),s.unsandboxable=!n.hasAttribute("sandbox")}catch(n){s.unsandboxable=!1,"function"==typeof e&&e(n)}if(s.unsandboxable&&"string"==typeof o)try{n.setAttribute("sandbox",o),t=n.hasAttribute("sandbox")}catch(n){t=!1,"function"==typeof e&&e(n)}if(t&&s.sandboxAllowances)try{a=n.getAttribute("sandbox")||""}catch(n){a=null,"function"==typeof e&&e(n)}else null===t&&(a=null);null!==a&&"string"!=typeof a||(a=c(a)),t&&(r=null,s.sandboxAllowances&&a&&(r=b(s.sandboxAllowances,a))),s.resandboxable=r}return s}function p(){var n=this;if(!(n instanceof p))return new p;n._initialState=n.detect(),n._unsandboxState=null}/*!
* sandblaster
* A client-side JavaScript library to detect if your code is running inside of a sandboxed iframe... and, if desired, might just be able to change that fact!
* Copyright (c) 2014-2016 James M. Greene
* Licensed MIT
* http://jamesmgreene.github.io/sandblaster/
* v1.2.0
*/
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var x=Array.prototype.slice;p.prototype.detect=function(){var n,e,o,t={framed:!1,crossOrigin:null,sandboxed:null,sandboxAllowances:void 0,unsandboxable:void 0,resandboxable:void 0,sandboxable:void 0,errors:[]},r=function(n){t.errors.push(a(n))},l=function(n){e=a(n),t.errors.push(e)};try{t.framed=s(),t.framed?(n=i(l),null!=n?(t.crossOrigin=!1,o=f(n,r),t.sandboxed=o.sandboxed,t.sandboxAllowances=o.sandboxAllowances,t.unsandboxable=o.unsandboxable,t.resandboxable=o.resandboxable):(t.crossOrigin=!0,t.sandboxed=null,t.sandboxAllowances={forms:null,modals:null,orientationLock:null,pointerLock:null,popups:null,popupsToEscapeSandbox:null,sameOrigin:null,scripts:!0,topNavigation:null},t.unsandboxable=!1,t.resandboxable=!1,null===u(r)?(t.sandboxed=!0,t.sandboxAllowances.sameOrigin=!1):e&&("SecurityError"!==e.name?t.crossOrigin=null:/(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(e.message.toLowerCase())&&(t.sandboxed=!0,t.sandboxAllowances.sameOrigin=!0))),t.sandboxable=t.resandboxable||!0===t.framed&&!1===t.crossOrigin&&(!1===t.sandboxed||t.sandboxAllowances.sameOrigin)||!1):(t.crossOrigin=void 0,t.sandboxed=void 0,t.errors=void 0)}catch(n){r(n)}return t},p.prototype.unsandbox=function(){var n,e,o=!1,t=this,a=t._initialState;if(!1===a.framed)o=!0;else if(!1===a.crossOrigin&&(n=t.detect(),o=!1===n.sandboxed,n.sandboxed&&n.unsandboxable&&(t._unsandboxState=n,e=i(function(){o=!1}))))try{e.removeAttribute("sandbox"),o=!e.hasAttribute("sandbox")}catch(n){o=!1}return o},p.prototype.resandbox=function(){var n=!1,e=this;return null!=e._unsandboxState&&(n=e.sandbox(e._unsandboxState.sandboxAllowances)),!0===n&&(e._unsandboxState=null),n},p.prototype.sandbox=function(n){var e,o,a,s,l,d,c,b=!1,f=this,p=f._initialState,x=[];if(n&&"object"===t(n)&&p.framed&&!1!==p.crossOrigin&&(a=f.detect(),(!1===a.sandboxed&&a.sandboxable||a.sandboxed&&a.unsandboxable)&&(s=a.sandboxAllowances,o=r(Object.keys(n),Object.keys(s||{})),o.forEach(function(e){(!0===n[e]||null==n[e]&&s&&!0===s[e])&&x.push("allow-"+e.replace(/[A-Z]/g,"-$1").toLowerCase())}),x.length>0&&(d=i())))){l=-1===x.indexOf("allow-same-origin")||-1===x.indexOf("allow-scripts"),e=x.sort().join(" ");try{d.setAttribute("sandbox",e),b=l}catch(n){b=!1}if(d=i())try{c=(d.getAttribute("sandbox")||"").replace(/^\s+|\s+$/g,"").split(/\s+/).sort().join(" "),b=c===e||l&&(""===c||null===u())}catch(n){b=l}}return b},p.prototype.reload=function(){var n,e,o,t,a=!1,r=this,s=r._initialState;if(s.framed&&!1===s.crossOrigin&&(n=i()))try{n.parentNode&&n.parentNode.ownerDocument&&(e=x.call(n.attributes).map(function(n){return{name:n.name,value:n.value}}),o=n.parentNode.ownerDocument.createElement("iframe"),e.forEach(function(n){o.setAttribute(n.name,n.value)}),t=n.parentNode.replaceChild(o,n),a=n===t)}catch(n){a=!1}return a},window.sandblaster=new p;var w=window.sandblaster;e.default=w}});