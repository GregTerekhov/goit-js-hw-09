const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const changedBody = {
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
      startBtn.setAttribute('disabled', true);
      stopBtn.removeAttribute('disabled', true);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled', true);
  },
};

startBtn.addEventListener('click', changedBody.start.bind(changedBody));
stopBtn.addEventListener('click', changedBody.stop.bind(changedBody));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
