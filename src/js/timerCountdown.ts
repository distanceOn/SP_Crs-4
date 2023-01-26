export function countdown() {
  let seconds = 5;
  const currentSeconds: HTMLElement = document.querySelector(".game__time-go_sek")!;
  currentSeconds.textContent = `0${seconds}`;
  const interval = setInterval(function () {
    seconds--;
    currentSeconds.textContent = `0${seconds}`;
    if (seconds === 0) {
      clearInterval(interval);
    }
  }, 1000);
  interval;
}
