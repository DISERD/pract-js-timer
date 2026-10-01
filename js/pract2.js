    const reverseCountTimer = document.querySelector(".count-down-timer");
    const reverseCountTimerButton = document.querySelector(".start-count-down-button");

    let minuts = 5;
    let callDownSeconds = 60 * minuts;
    let intervalId = null;

    reverseCountTimerButton.addEventListener('click', () => {
      if (intervalId !== null) return;

      intervalId = setInterval(() => {
        callDownSeconds -= 1;
        console.log(callDownSeconds);

        let m = Math.floor(callDownSeconds / 60);
        let s = callDownSeconds % 60;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        reverseCountTimer.textContent = `${m}:${s}`;

        if (callDownSeconds <= 0) {
          clearInterval(intervalId);
          reverseCountTimer.textContent = "Час вийшов!";
        }
      }, 1000);
    });