function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var r=u("7Y9D8");const i={formEl:document.querySelector(".form"),checkBtnEl:document.querySelector("button[submit]"),inputDelay:document.querySelector("input[delay]"),inputStep:document.querySelector("input[step]"),inputAmount:document.querySelector("input[amount]")};function l(e,t){return new Promise(((n,o)=>{const u=Math.random()>.3;setTimeout((()=>{u&&n({position:e,delay:t}),o({position:e,delay:t})}),Number(i.inputDelay.value))}))}i.formEl.addEventListener("submit",l),i.formEl.addEventListener("input",(function(t){if(t.preventDefault(),!t.target.value)return void e(r).Notify.failure("Please fill all fields")}));for(let t=0;t<Number(amount.value);t+=1)l(t+1,Number(delay.value)+Number(step.value)*t).then((({position:t,delay:n})=>{e(r).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`Rejected promise ${t} in ${n}ms`)})),delay+=Number(inputStep.value);
//# sourceMappingURL=03-promises.0503f9a6.js.map
