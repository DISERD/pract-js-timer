let seconds = 0;
    let timerId = null;

    function updateDisplay() {
      const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
      const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
      const secs = String(seconds % 60).padStart(2, '0');
      document.getElementById('display').textContent = `${hrs}:${mins}:${secs}`;
    }

    function startTimer() {
      if (timerId !== null) return; // запобігає прискоренню при багаторазовому кліку
      timerId = setInterval(() => {
        seconds++;
        updateDisplay();
      }, 1000);
    }

    function stopTimer() {
      clearInterval(timerId);
      timerId = null;
    }

    function resetTimer() {
      stopTimer();
      seconds = 0;
      updateDisplay();
    }