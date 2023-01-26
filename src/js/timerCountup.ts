export function countup() {
  let seconds = 0;
  let minutes = 0;
  const currentSeconds: HTMLElement = document.querySelector(".game__time-go_sek")!;
  const currentMinutes: HTMLElement = document.querySelector(".game__time-go_min")!;
  const interval = setInterval(function () {
    if (seconds === 59) {
      seconds = 0;
      minutes++;
      if (minutes < 10) {
        currentMinutes.textContent = `0${minutes}`;
      } else {
        currentMinutes.textContent = `${minutes}`;
      }
    } else {
      seconds++;
    }
    if (seconds < 10) {
      currentSeconds.textContent = `0${seconds}`;
    } else {
      currentSeconds.textContent = `${seconds}`;
    }
    if (window.winOrLose === true) {
      clearInterval(interval);
    }
  }, 1000);
  interval;
}
