(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8172:function(t,e,r){"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[Z]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===et}(t)||Array.isArray(t)||!!t[Q]||!!t.constructor[Q]||h(t)||p(t))}function u(t){return o(t)||n(23,t),t[Z].t}function a(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:rt)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[Z];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:h(t)?2:p(t)?3:0}function f(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function s(t,e){return 2===c(t)?t.get(e):t[e]}function l(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function v(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function h(t){return B&&t instanceof Map}function p(t){return H&&t instanceof Set}function d(t){return t.o||t.t}function y(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=nt(t);delete e[Z];for(var r=rt(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function b(t,e){return void 0===e&&(e=!1),S(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=g),Object.freeze(t),e&&a(t,(function(t,e){return b(e,!0)}),!0)),t}function g(){n(2)}function S(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=ot[t];return e||n(18,t),e}function O(t,e){ot[t]||(ot[t]=e)}function P(){return $}function w(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function _(t){j(t),t.p.forEach(D),t.p=null}function j(t){t===$&&($=t.l)}function A(t){return $={p:[],l:$,h:t,m:!0,_:0}}function D(t){var e=t[Z];0===e.i||1===e.i?e.j():e.O=!0}function E(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.g||m("ES5").S(e,t,o),o?(r[Z].P&&(_(e),n(4)),i(t)&&(t=x(e,t),e.l||M(e,t)),e.u&&m("Patches").M(r[Z],t,e.u,e.s)):t=x(e,r,[]),_(e),e.u&&e.v(e.u,e.s),t!==q?t:void 0}function x(t,e,r){if(S(e))return e;var n=e[Z];if(!n)return a(e,(function(o,i){return k(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return M(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=y(n.k):n.o;a(3===n.i?new Set(o):o,(function(e,i){return k(t,n,o,e,i,r)})),M(t,o,!1),r&&t.u&&m("Patches").R(n,r,t.u,t.s)}return n.o}function k(t,e,r,n,u,a){if(o(u)){var c=x(t,u,a&&e&&3!==e.i&&!f(e.D,n)?a.concat(n):void 0);if(l(r,n,c),!o(c))return;t.m=!1}if(i(u)&&!S(u)){if(!t.h.F&&t._<1)return;x(t,u),e&&e.A.l||M(t,u)}}function M(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&b(e,r)}function I(t,e){var r=t[Z];return(r?d(r):t)[e]}function T(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function F(t){t.P||(t.P=!0,t.l&&F(t.l))}function L(t){t.o||(t.o=y(t.t))}function U(t,e,r){var n=h(e)?m("MapSet").N(e,r):p(e)?m("MapSet").T(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:P(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=it;r&&(o=[n],i=ut);var u=Proxy.revocable(o,i),a=u.revoke,c=u.proxy;return n.k=c,n.j=a,c}(e,r):m("ES5").J(e,r);return(r?r.A:P()).p.push(n),n}function z(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[Z],o=c(e);if(n){if(!n.P&&(n.i<4||!m("ES5").K(n)))return n.t;n.I=!0,r=N(e,o),n.I=!1}else r=N(e,o);return a(r,(function(e,o){n&&s(n.t,e)===o||l(r,e,t(o))})),3===o?new Set(r):r}(t)}function N(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return y(t)}function R(){function t(t,e){var r=i[t];return r?r.enumerable=e:i[t]=r={configurable:!0,enumerable:e,get:function(){var e=this[Z];return it.get(e,t)},set:function(e){var r=this[Z];it.set(r,t,e)}},r}function e(t){for(var e=t.length-1;e>=0;e--){var o=t[e][Z];if(!o.P)switch(o.i){case 5:n(o)&&F(o);break;case 4:r(o)&&F(o)}}}function r(t){for(var e=t.t,r=t.k,n=rt(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==Z){var u=e[i];if(void 0===u&&!f(e,i))return!0;var a=r[i],c=a&&a[Z];if(c?c.t!==u:!v(a,u))return!0}}var s=!!e[Z];return n.length!==rt(e).length+(s?0:1)}function n(t){var e=t.k;if(e.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(e,e.length-1);return!(!r||r.get)}var i={};O("ES5",{J:function(e,r){var n=Array.isArray(e),o=function(e,r){if(e){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,t(o,!0));return n}var i=nt(r);delete i[Z];for(var u=rt(i),a=0;a<u.length;a++){var c=u[a];i[c]=t(c,e||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,e),i={i:n?5:4,A:r?r.A:P(),P:!1,I:!1,D:{},l:r,t:e,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,Z,{value:i,writable:!0}),o},S:function(t,r,i){i?o(r)&&r[Z].A===t&&e(t.p):(t.u&&function t(e){if(e&&"object"==typeof e){var r=e[Z];if(r){var o=r.t,i=r.k,u=r.D,c=r.i;if(4===c)a(i,(function(e){e!==Z&&(void 0!==o[e]||f(o,e)?u[e]||t(i[e]):(u[e]=!0,F(r)))})),a(o,(function(t){void 0!==i[t]||f(i,t)||(u[t]=!1,F(r))}));else if(5===c){if(n(r)&&(F(r),u.length=!0),i.length<o.length)for(var s=i.length;s<o.length;s++)u[s]=!1;else for(var l=o.length;l<i.length;l++)u[l]=!0;for(var v=Math.min(i.length,o.length),h=0;h<v;h++)void 0===u[h]&&t(i[h])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?r(t):n(t)}})}function G(){function t(e){if(!i(e))return e;if(Array.isArray(e))return e.map(t);if(h(e))return new Map(Array.from(e.entries()).map((function(e){return[e[0],t(e[1])]})));if(p(e))return new Set(Array.from(e).map(t));var r=Object.create(Object.getPrototypeOf(e));for(var n in e)r[n]=t(e[n]);return f(e,Q)&&(r[Q]=e[Q]),r}function e(e){return o(e)?t(e):e}var r="add";O("Patches",{$:function(e,o){return o.forEach((function(o){for(var i=o.path,u=o.op,a=e,f=0;f<i.length-1;f++){var l=c(a),v=i[f];0!==l&&1!==l||"__proto__"!==v&&"constructor"!==v||n(24),"function"==typeof a&&"prototype"===v&&n(24),"object"!=typeof(a=s(a,v))&&n(15,i.join("/"))}var h=c(a),p=t(o.value),d=i[i.length-1];switch(u){case"replace":switch(h){case 2:return a.set(d,p);case 3:n(16);default:return a[d]=p}case r:switch(h){case 1:return a.splice(d,0,p);case 2:return a.set(d,p);case 3:return a.add(p);default:return a[d]=p}case"remove":switch(h){case 1:return a.splice(d,1);case 2:return a.delete(d);case 3:return a.delete(o.value);default:return delete a[d]}default:n(17,u)}})),e},R:function(t,n,o,i){switch(t.i){case 0:case 4:case 2:return function(t,n,o,i){var u=t.t,c=t.o;a(t.D,(function(t,a){var l=s(u,t),v=s(c,t),h=a?f(u,t)?"replace":r:"remove";if(l!==v||"replace"!==h){var p=n.concat(t);o.push("remove"===h?{op:h,path:p}:{op:h,path:p,value:v}),i.push(h===r?{op:"remove",path:p}:"remove"===h?{op:r,path:p,value:e(l)}:{op:"replace",path:p,value:e(l)})}}))}(t,n,o,i);case 5:case 1:return function(t,n,o,i){var u=t.t,a=t.D,c=t.o;if(c.length<u.length){var f=[c,u];u=f[0],c=f[1];var s=[i,o];o=s[0],i=s[1]}for(var l=0;l<u.length;l++)if(a[l]&&c[l]!==u[l]){var v=n.concat([l]);o.push({op:"replace",path:v,value:e(c[l])}),i.push({op:"replace",path:v,value:e(u[l])})}for(var h=u.length;h<c.length;h++){var p=n.concat([h]);o.push({op:r,path:p,value:e(c[h])})}u.length<c.length&&i.push({op:"replace",path:n.concat(["length"]),value:u.length})}(t,n,o,i);case 3:return function(t,e,n,o){var i=t.t,u=t.o,a=0;i.forEach((function(t){if(!u.has(t)){var i=e.concat([a]);n.push({op:"remove",path:i,value:t}),o.unshift({op:r,path:i,value:t})}a++})),a=0,u.forEach((function(t){if(!i.has(t)){var u=e.concat([a]);n.push({op:r,path:u,value:t}),o.unshift({op:"remove",path:u,value:t})}a++}))}(t,n,o,i)}},M:function(t,e,r,n){r.push({op:"replace",path:[],value:e===q?void 0:e}),n.push({op:"replace",path:[],value:t.t})}})}function C(){function t(t,e){function r(){this.constructor=t}u(t,e),t.prototype=(r.prototype=e.prototype,new r)}function e(t){t.o||(t.D=new Map,t.o=new Map(t.t))}function r(t){t.o||(t.o=new Set,t.t.forEach((function(e){if(i(e)){var r=U(t.A.h,e,t);t.p.set(e,r),t.o.add(r)}else t.o.add(e)})))}function o(t){t.O&&n(3,JSON.stringify(d(t)))}var u=function(t,e){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},c=function(){function r(t,e){return this[Z]={i:2,l:e,A:e?e.A:P(),P:!1,I:!1,o:void 0,D:void 0,t:t,k:this,C:!1,O:!1},this}t(r,Map);var n=r.prototype;return Object.defineProperty(n,"size",{get:function(){return d(this[Z]).size}}),n.has=function(t){return d(this[Z]).has(t)},n.set=function(t,r){var n=this[Z];return o(n),d(n).has(t)&&d(n).get(t)===r||(e(n),F(n),n.D.set(t,!0),n.o.set(t,r),n.D.set(t,!0)),this},n.delete=function(t){if(!this.has(t))return!1;var r=this[Z];return o(r),e(r),F(r),r.D.set(t,!1),r.o.delete(t),!0},n.clear=function(){var t=this[Z];o(t),d(t).size&&(e(t),F(t),t.D=new Map,a(t.t,(function(e){t.D.set(e,!1)})),t.o.clear())},n.forEach=function(t,e){var r=this;d(this[Z]).forEach((function(n,o){t.call(e,r.get(o),o,r)}))},n.get=function(t){var r=this[Z];o(r);var n=d(r).get(t);if(r.I||!i(n))return n;if(n!==r.t.get(t))return n;var u=U(r.A.h,n,r);return e(r),r.o.set(t,u),u},n.keys=function(){return d(this[Z]).keys()},n.values=function(){var t,e=this,r=this.keys();return(t={})[tt]=function(){return e.values()},t.next=function(){var t=r.next();return t.done?t:{done:!1,value:e.get(t.value)}},t},n.entries=function(){var t,e=this,r=this.keys();return(t={})[tt]=function(){return e.entries()},t.next=function(){var t=r.next();if(t.done)return t;var n=e.get(t.value);return{done:!1,value:[t.value,n]}},t},n[tt]=function(){return this.entries()},r}(),f=function(){function e(t,e){return this[Z]={i:3,l:e,A:e?e.A:P(),P:!1,I:!1,o:void 0,t:t,k:this,p:new Map,O:!1,C:!1},this}t(e,Set);var n=e.prototype;return Object.defineProperty(n,"size",{get:function(){return d(this[Z]).size}}),n.has=function(t){var e=this[Z];return o(e),e.o?!!e.o.has(t)||!(!e.p.has(t)||!e.o.has(e.p.get(t))):e.t.has(t)},n.add=function(t){var e=this[Z];return o(e),this.has(t)||(r(e),F(e),e.o.add(t)),this},n.delete=function(t){if(!this.has(t))return!1;var e=this[Z];return o(e),r(e),F(e),e.o.delete(t)||!!e.p.has(t)&&e.o.delete(e.p.get(t))},n.clear=function(){var t=this[Z];o(t),d(t).size&&(r(t),F(t),t.o.clear())},n.values=function(){var t=this[Z];return o(t),r(t),t.o.values()},n.entries=function(){var t=this[Z];return o(t),r(t),t.o.entries()},n.keys=function(){return this.values()},n[tt]=function(){return this.values()},n.forEach=function(t,e){for(var r=this.values(),n=r.next();!n.done;)t.call(e,n.value,n.value,this),n=r.next()},e}();O("MapSet",{N:function(t,e){return new c(t,e)},T:function(t,e){return new f(t,e)}})}function V(){R(),C(),G()}function J(t){return t}function K(t){return t}r.r(e),r.d(e,{Immer:function(){return at},applyPatches:function(){return ht},castDraft:function(){return J},castImmutable:function(){return K},createDraft:function(){return pt},current:function(){return z},enableAllPlugins:function(){return V},enableES5:function(){return R},enableMapSet:function(){return C},enablePatches:function(){return G},finishDraft:function(){return dt},freeze:function(){return b},immerable:function(){return Q},isDraft:function(){return o},isDraftable:function(){return i},nothing:function(){return q},original:function(){return u},produce:function(){return ft},produceWithPatches:function(){return st},setAutoFreeze:function(){return lt},setUseProxies:function(){return vt}});var W,$,X="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),B="undefined"!=typeof Map,H="undefined"!=typeof Set,Y="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,q=X?Symbol.for("immer-nothing"):((W={})["immer-nothing"]=!0,W),Q=X?Symbol.for("immer-draftable"):"__$immer_draftable",Z=X?Symbol.for("immer-state"):"__$immer_state",tt="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",et=""+Object.prototype.constructor,rt="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,nt=Object.getOwnPropertyDescriptors||function(t){var e={};return rt(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},ot={},it={get:function(t,e){if(e===Z)return t;var r=d(t);if(!f(r,e))return function(t,e,r){var n,o=T(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===I(t.t,e)?(L(t),t.o[e]=U(t.A.h,n,t)):n},has:function(t,e){return e in d(t)},ownKeys:function(t){return Reflect.ownKeys(d(t))},set:function(t,e,r){var n=T(d(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=I(d(t),e),i=null==o?void 0:o[Z];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(v(r,o)&&(void 0!==r||f(t.t,e)))return!0;L(t),F(t)}return t.o[e]===r&&"number"!=typeof r&&(void 0!==r||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==I(t.t,e)||e in t.t?(t.D[e]=!1,L(t),F(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=d(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},ut={};a(it,(function(t,e){ut[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),ut.deleteProperty=function(t,e){return it.deleteProperty.call(this,t[0],e)},ut.set=function(t,e,r){return it.set.call(this,t[0],e,r,t[0])};var at=function(){function t(t){var e=this;this.g=Y,this.F=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var u=r;r=t;var a=e;return function(t){var e=this;void 0===t&&(t=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var c;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var f=A(e),s=U(e,t,void 0),l=!0;try{c=r(s),l=!1}finally{l?_(f):j(f)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return w(f,o),E(t,f)}),(function(t){throw _(f),t})):(w(f,o),E(c,f))}if(!t||"object"!=typeof t){if((c=r(t))===q)return;return void 0===c&&(c=t),e.F&&b(c,!0),c}n(21,t)},this.produceWithPatches=function(t,r){return"function"==typeof t?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))}:[e.produce(t,r,(function(t,e){n=t,o=e})),n,o];var n,o},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=z(t));var e=A(this),r=U(this,t,void 0);return r[Z].C=!0,j(e),r},e.finishDraft=function(t,e){var r=(t&&t[Z]).A;return w(r,e),E(void 0,r)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!Y&&n(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var i=m("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(r+1))}))},t}(),ct=new at,ft=ct.produce,st=ct.produceWithPatches.bind(ct),lt=ct.setAutoFreeze.bind(ct),vt=ct.setUseProxies.bind(ct),ht=ct.applyPatches.bind(ct),pt=ct.createDraft.bind(ct),dt=ct.finishDraft.bind(ct);e.default=ft},8694:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=r(5893);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=r(2890),a=(r(7294),"__PRELOADED_STATE__");function c(){var t={};for(var e in u.h.value)t[e]=u.h.value[e].getValue();return JSON.stringify(t)}var f={Provider:function(t){var e=t.children,r={__html:"window.".concat(a," = '").concat(c(),"';")};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("script",{dangerouslySetInnerHTML:r}),e]})},initializeStore:function(t){window[a]?function(t){for(var e in t)u.h.setState(e,t[e])}(JSON.parse(window[a])):t(u.h)}};function s(){var t=i((0,u.j1)("state"),2),e=t[0],r=t[1],o=function(t){r({count:t,lastUpdateLocation:"client side"})};return(0,n.jsxs)("center",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),e.count,(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{onClick:function(){return o(e.count-1)},children:"Decrement"}),"\xa0--\xa0",(0,n.jsx)("button",{onClick:function(){return o(e.count+1)},children:"Increment"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Last updated on ",e.lastUpdateLocation]})}function l(){return(0,n.jsx)(f.Provider,{children:(0,n.jsx)(s,{})})}f.initializeStore((function(t){t.setState("state",{count:0,lastUpdateLocation:"client side"})}))},8581:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8694)}])},5376:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createGlobalstate=e.GlobalState=void 0;var r=function(){function t(t){this.value=t,this.subscribers=[]}return t.prototype.getValue=function(){return this.value},t.prototype.setValue=function(t){var e=this;this.getValue()!==t&&(this.value=t,this.subscribers.forEach((function(t){t.sendUpdateSignal(e.value)})))},t.prototype.delete=function(){this.subscribers.forEach((function(t){t.sendDeleteSignal()}))},t.prototype.subscribe=function(t){this.subscribers.indexOf(t)>-1||this.subscribers.push(t)},t.prototype.unsubscribe=function(t){this.subscribers=this.subscribers.filter((function(e){return e!==t}))},t}();e.GlobalState=r,e.createGlobalstate=function(t){return new r(t)}},2790:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.store=e.GlobalStateStore=void 0;var n=r(5376),o=function(){function t(){this.value={},this.subscribers=[],this.LOCAL_STORAGE_UPDATE_DEBOUNCE_TIME=1e3}return t.prototype.subscribe=function(t){this.subscribers.indexOf(t)>-1||this.subscribers.push(t)},t.prototype.unsubscribe=function(t){this.subscribers=this.subscribers.filter((function(e){return e!==t}))},t.prototype.onStoreUpdate=function(t){this.subscribers.forEach((function(e){e(t)}))},t.prototype.getStateFromLocalStorage=function(t){try{var e=window.localStorage.getItem(t);if(null===e)return;return JSON.parse(e)}catch(r){return}},t.prototype.saveStateToLocalStorage=function(t,e){try{var r=JSON.stringify(e);window.localStorage.setItem(t,r)}catch(n){}},t.prototype.deleteStateFromLocalStorage=function(t){return window.localStorage.removeItem(t)},t.prototype.setState=function(t,e,r){var o=this,i=(void 0===r?{persist:!1}:r).persist;if(i){var u=this.getStateFromLocalStorage(t);void 0!==u?e=u:this.saveStateToLocalStorage(t,e)}var a=null,c=function(e){o.onStoreUpdate({key:t,action:"update",value:e}),i&&(clearTimeout(a),a=setTimeout((function(){o.saveStateToLocalStorage(t,e)}),o.LOCAL_STORAGE_UPDATE_DEBOUNCE_TIME))};c.bind(this);var f=function(){i&&o.deleteStateFromLocalStorage(t)};f.bind(this);var s={sendUpdateSignal:c,sendDeleteSignal:f};this.value[t]=n.createGlobalstate(e),this.value[t].subscribe(s)},t.prototype.getState=function(t,e){void 0===e&&(e={persist:!1});var r=e.default,n=e.persist;if(void 0===this.value[t]){if(void 0===r)throw TypeError(["There is no global state with the key '"+t+"', ","You are either trying to access a global ","state which was not created or it was deleted."].join(""));this.setState(t,r,{persist:n})}return this.value[t]},t.prototype.clear=function(t){var e=this.value;for(var r in this.value={},t&&t(),e){this.onStoreUpdate({key:r,action:"delete"}),e[r].delete()}},t.prototype.remove=function(t,e){var r=this,n=[];n="string"===typeof t?[t]:t;var o={};for(var i in n.forEach((function(t){o[t]=r.getState(t),delete r.value[t]})),e&&e(),o){this.onStoreUpdate({key:i,action:"delete"}),o[i].delete()}},t}();e.GlobalStateStore=o;var i=new o;e.store=i},2890:function(t,e,r){"use strict";e.j1=e.h=void 0;var n=r(5376);var o=r(2790);Object.defineProperty(e,"h",{enumerable:!0,get:function(){return o.store}});var i=r(4149);var u=r(4573);Object.defineProperty(e,"j1",{enumerable:!0,get:function(){return u.useGlobalState}});var a=r(2362)},4573:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.useGlobalState=void 0;var o=n(r(8172)),i=r(2790),u=r(4149);e.useGlobalState=function(t,e){void 0===e&&(e={persist:!0}),"string"===typeof t&&(t=i.store.getState(t,e));var r=u.useGlobalStateReducer((function(t,e){return e}),t,e),n=r[0],a=r[1],c=n;return e.selector&&!e.patcher&&(c=t.getValue()),[n,a,function(t){var e=o.default(c,t);a(e)}]}},4149:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.useGlobalStateReducer=void 0;var o=n(r(8172)),i=r(7294),u=r(2790);e.useGlobalStateReducer=function(t,e,r){var n;void 0===r&&(r={persist:!0}),n="string"===typeof e?u.store.getState(e,r):e;var a=i.useState()[1],c=i.useRef(!1),f=n.getValue(),s=r.selector,l=r.patcher;function v(){c.current&&a({})}var h={sendUpdateSignal:function(t){s&&s(f)===s(t)||v()},sendDeleteSignal:function(){v()}};function p(e){var r=t(n.getValue(),e);n.setValue(r)}return i.useEffect((function(){return n.subscribe(h),c.current=!0,function(){n.unsubscribe(h),c.current=!1}}),[]),s?l?[s(f),function(e){var r=t(s(f),e),i=o.default(f,(function(t){return l(t,r)}));n.setValue(i)}]:[s(f),p]:[f,p]}},2362:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.useLocalState=void 0;var o=n(r(8172)),i=r(7294);e.useLocalState=function(t){var e=i.useReducer((function(t,e){return e}),t),r=e[0],n=e[1];return[r,n,function(t){var e=o.default(r,t);n(e)}]}}},function(t){t.O(0,[774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);