import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  checkBtnEl: document.querySelector('button[submit]'),
  inputDelay: document.querySelector('input[delay]'),
  inputStep: document.querySelector('input[step]'),
  inputAmount: document.querySelector('input[amount]'),
};

refs.formEl.addEventListener('submit', createPromise);
refs.formEl.addEventListener('input', onEmptyField);

function onEmptyField(event) {
  event.preventDefault();
  if (!event.target.value) {
    Notiflix.Notify.failure('Please fill all fields');
    return;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
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
  delay += Number(inputStep.value);
}
