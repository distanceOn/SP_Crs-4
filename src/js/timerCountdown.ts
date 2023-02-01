export function countdown() {
  window.timerdown = true;
  let seconds = 5;
  const currentSeconds: HTMLElement = document.querySelector(".game__time-go_sek")!;
  currentSeconds.textContent = `0${seconds}`;
  const interval = setInterval(function () {
    seconds--;
    currentSeconds.textContent = `0${seconds}`;
    if (seconds === 0 || window.timerdown === false) {
      clearInterval(interval);
    }
  }, 1000);
  interval;
  document.querySelector(".game__button")?.addEventListener("click", () => {
    clearInterval(interval);
  });
}
