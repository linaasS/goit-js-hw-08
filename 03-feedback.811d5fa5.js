var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,u,f,l=0,c=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function j(e){return l=e,u=setTimeout(S,t),c?b(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-l>=i}function S(){var e=d();if(w(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return p?m(n,i-(e-l)):n}(e))}function h(e){return u=void 0,y&&o?b(e):(o=r=void 0,a)}function O(){var e=d(),n=w(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(p)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=v(t)||0,g(n)&&(c=!!n.leading,i=(p="maxWait"in n)?s(v(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:h(d())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".js-form"),emailInput:document.querySelector(".js-form-email"),messageInput:document.querySelector(".js-form-message")};let b=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};const j=t((e=>{const{name:t,value:n}=e.target;b[t]=n;const o=JSON.stringify(b);localStorage.setItem("feedback-form-state",o)}),500);window.addEventListener("load",(({email:e,message:t})=>{y.emailInput.value=e,y.messageInput.value=t})(b)),y.form.addEventListener("input",j),y.form.addEventListener("submit",(e=>{e.preventDefault(),console.log(b),localStorage.clear(),b={email:"",message:""},e.target.reset()}));
//# sourceMappingURL=03-feedback.811d5fa5.js.map
