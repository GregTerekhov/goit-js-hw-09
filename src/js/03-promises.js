import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  checkBtnEl: document.querySelector('button[submit]'),
  inputDelay: document.querySelector('input[delay]'),
  inputStep: document.querySelector('input[step]'),
  inputAmount: document.querySelector('input[amount]'),
};

refs.formEl.addEventListener('submit', createPromise);
refs.formEl.addEventListener('change');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const delay = Number(refs.inputDelay.value);

  setTimeout(() => {
    if (shouldResolve) {
      // Fulfill
    } else {
      // Reject
    }
  }, delay);
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

// for (let i = 0; i < Number(amount.value); i += 1) {
//   createPromise(i + 1, Number(delay.value) + Number(step.value) * i)
//     .then(({ position, delay }) => {
//       Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
//     })
//     .catch(({ position, delay }) => {
//       Notify.failure(`Rejected promise ${position} in ${delay}ms`);
//     });
// }
