function n(n){return Array.isArray(n)?n:Array.prototype.slice.call(n)}function t(n){return e(n,"dir","ltr")}function r(n){return e(n,"theme","light")}function e(n,t,r){const e=n.closest(`[${t}]`);return e?e.getAttribute(t):r}function i(n){n&&("function"==typeof n.setFocus?n.setFocus():n.focus())}function o(t,r){const e=t.querySelector("slot");return n(e?e.assignedElements():t.children).filter(n=>n.matches(r))}function s(n){const t=n&&n.getAttribute("aria-describedby");return t&&document.getElementById(t)||null}const u={hydratedInvisible:"hydrated--invisible"};export{u as H,r as a,e as b,s as c,o as d,i as f,t as g,n}