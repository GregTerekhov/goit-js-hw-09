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
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const promiseData = {
      position,
      delay,
    };

    setTimeout(() => {
      if (shouldResolve) {
        resolve();
      }
      reject();
    }, Number(refs.inputDelay.value));
  });
}

for (let i = 0; i < Number(amount.value); i += 1) {
  createPromise(i + 1, Number(delay.value) + Number(step.value) * i)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}
