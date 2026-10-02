const reverseCountTimer = document.querySelector(".count-down-timer");
const reverseCountTimerButton = document.querySelector(".start-count-down-button");

const formatTime = (totalSeconds) => {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${minutes}:${seconds}`;
};

let minuts = 5;
let callDownSeconds = 60 * minuts;
let intervalId = null;

reverseCountTimerButton.addEventListener('click', () => {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    callDownSeconds -= 1;
    console.log(callDownSeconds);

    reverseCountTimer.textContent = formatTime(callDownSeconds);

    if (callDownSeconds <= 0) {
      clearInterval(intervalId);
      reverseCountTimer.textContent = "Час вийшов!";
    }
  }, 1000);
});