parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oQ6f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.trackPageview=exports.trackEvent=void 0;var e=function(e){console.log("--\x3e Tracking Pageview: ".concat(e))};exports.trackPageview=e;var t=function(e){console.log("--\x3e Tracking Event: ".concat(e))};exports.trackEvent=t;
},{}],"H99C":[function(require,module,exports) {
"use strict";var t=require("./analytics-api.js"),e=document.getElementById("control"),o=document.getElementById("test"),a=document.getElementById("sign-up-link");window.localStorage.getItem("abStorage")||(Math.random()>=.5?window.localStorage.setItem("abStorage","control"):window.localStorage.setItem("abStorage","test")),"control"===window.localStorage.abStorage?o.classList.add("hide"):"test"===localStorage.abStorage&&e.classList.add("hide");var c=function(){var t,e=window.localStorage;window.addEventListener("load",function(){e.getItem("pageCount")?(t=e.getItem("pageCount"),t++,e.setItem("pageCount",t)):e.setItem("pageCount",1)})},n=function(){var t,e=window.localStorage;a.addEventListener("click",function(){localStorage.clicked||(t=e.getItem("clickCount"),t++,e.setItem("clickCount",t)),e.setItem("clicked",!0)})};c(),n(),(0,t.trackPageview)("URL: ".concat(document.URL,", AB-test: ").concat(window.localStorage.getItem("abStorage"),", numberOfViews: ").concat(window.localStorage.getItem("pageCount"))),(0,t.trackEvent)('Event: "click", URL: '.concat(document.URL,", clicks: ").concat(window.localStorage.getItem("clickCount")?window.localStorage.getItem("clickCount"):0));
},{"./analytics-api.js":"oQ6f"}]},{},["H99C"], null)
//# sourceMappingURL=blinkist-web-coding-challenge-2023/src.d3dd7567.js.map