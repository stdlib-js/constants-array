// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,a=r.__defineSetter__,i=r.__lookupGetter__,l=r.__lookupSetter__,u=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,u){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof u||null===u||"[object Array]"===o.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((_="value"in u)&&(i.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=u.value,e.__proto__=c):e[t]=u.value),f="get"in u,p="set"in u,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&n&&n.call(e,t,u.get),p&&a&&a.call(e,t,u.set),e};function c(e,t,r){u(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}var _={};return c(_,"MAX_ARRAY_LENGTH",4294967295),c(_,"MAX_TYPED_ARRAY_LENGTH",9007199254740991),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).constants=t();
//# sourceMappingURL=index.js.map