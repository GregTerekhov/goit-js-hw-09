!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var i=u("6JpON"),r={formEl:document.querySelector(".form"),checkBtnEl:document.querySelector("button[submit]"),inputDelay:document.querySelector("input[delay]"),inputStep:document.querySelector("input[step]"),inputAmount:document.querySelector("input[amount]")};function l(e,t){return new Promise((function(n,o){var u=Math.random()>.3;setTimeout((function(){u&&n({position:e,delay:t}),o({position:e,delay:t})}),Number(r.inputDelay.value))}))}r.formEl.addEventListener("submit",l),r.formEl.addEventListener("input",(function(t){if(t.preventDefault(),!t.target.value)return void e(i).Notify.failure("Please fill all fields")}));for(var a=0;a<Number(amount.value);a+=1)l(a+1,Number(delay.value)+Number(step.value)*a).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))})),delay+=Number(inputStep.value)}();
//# sourceMappingURL=03-promises.3653968e.js.map
