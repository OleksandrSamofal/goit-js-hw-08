function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(t,e,n){var r,o,i,f,a,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,i=o;return r=o=void 0,c=e,f=t.apply(i,n)}function h(t){return c=t,a=setTimeout(O,e),l?y(t):f}function j(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function O(){var t=v();if(j(t))return T(t);a=setTimeout(O,function(t){var n=e-(t-u);return s?m(n,i-(t-c)):n}(t))}function T(t){return a=void 0,p&&r?y(t):(r=o=void 0,f)}function w(){var t=v(),n=j(t);if(r=arguments,o=this,u=t,n){if(void 0===a)return h(u);if(s)return a=setTimeout(O,e),y(u)}return void 0===a&&(a=setTimeout(O,e)),f}return e=b(e)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},w.flush=function(){return void 0===a?f:T(v())},w}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(t,e,{leading:r,maxWait:e,trailing:o})};let y={};const h={form:document.querySelector(".feedback-form")};h.form.addEventListener("input",t(e)((function(t){y[t.target.name]=t.target.value.trim();const e=JSON.stringify(y);localStorage.setItem("feedback-form-state",e)}),500)),h.form.addEventListener("submit",(function(t){t.preventDefault(),console.log(y),t.currentTarget.reset(),y={},localStorage.removeItem("feedback-form-state")})),function(){try{const t=localStorage.getItem("feedback-form-state");if(!t)return;y=JSON.parse(t),Object.entries(savedData).forEach((([t,e])=>{h.form.elements[t].value=e}))}catch(t){return}}();
//# sourceMappingURL=03-feedback.37516702.js.map
