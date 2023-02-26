const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.setAttribute('disabled', true);

const changedBody = {
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
      getBtnAttribute(true);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    getBtnAttribute(false);
  },
};

startBtn.addEventListener('click', changedBody.start.bind(changedBody));
stopBtn.addEventListener('click', changedBody.stop.bind(changedBody));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getBtnAttribute(isStarted) {
  if (isStarted) {
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled', true);
  } else {
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled', true);
  }
}
