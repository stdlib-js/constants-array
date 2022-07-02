// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,a=o.toString,n=o.__defineGetter__,_=o.__defineSetter__,l=o.__lookupGetter__,i=o.__lookupSetter__;var u=r,c=function(e,t,r){var u,c,p,f;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||i.call(e,t)?(u=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=u):e[t]=r.value),p="get"in r,f="set"in r,c&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(e,t,r.get),f&&_&&_.call(e,t,r.set),e},p=t()?u:c;var f=function(e,t,r){p(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})},b=4294967295,y=9007199254740991,s={};f(s,"MAX_ARRAY_LENGTH",4294967295),f(s,"MAX_TYPED_ARRAY_LENGTH",y);export{b as MAX_ARRAY_LENGTH,y as MAX_TYPED_ARRAY_LENGTH,s as default};
//# sourceMappingURL=mod.js.map
