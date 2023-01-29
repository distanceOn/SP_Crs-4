import { renderCards } from "./game";
import { hideCards } from "./hideCards";
import { gameplay } from "./gameEvents";
import { countdown } from "./timerCountdown";
import { countup } from "./timerCountup";

const core: HTMLElement = document.querySelector(".background")!;
const templateEasy: HTMLMetaElement = document.querySelector("#easy")!;
const templateMedium: HTMLMetaElement = document.querySelector("#medium")!;
const templateHard: HTMLMetaElement = document.querySelector("#hard")!;

export function chooseDifficultLevel(level) {
  window.timeout = setTimeout(() => {
    hideCards();
    gameplay();
    countup();
  }, 5000);

  switch (level) {
    case "easy":
      core.textContent = "";
      core.append(templateEasy.content);
      renderCards();
      countdown();
      window.timeout;
      document.querySelector(".game__button")?.addEventListener("click", () => {
        window.timerup = false;
        clearTimeout(window.timeout);
        window.timeout = setTimeout(() => {
          hideCards();
          gameplay();

          countup();
        }, 5000);
        renderCards();
        countdown();
        window.timeout;
      });
      break;

    case "medium":
      core.textContent = "";
      core.append(templateMedium.content);
      renderCards();
      countdown();
      window.timeout;
      document.querySelector(".game__button")?.addEventListener("click", () => {
        window.timerup = false;
        clearTimeout(window.timeout);
        window.timeout = setTimeout(() => {
          hideCards();
          gameplay();
          countup();
        }, 5000);
        renderCards();
        countdown();
        window.timeout;
      });
      break;

    case "hard":
      core.textContent = "";
      core.append(templateHard.content);
      renderCards();
      countdown();
      window.timeout;
      document.querySelector(".game__button")?.addEventListener("click", () => {
        window.timerup = false;
        clearTimeout(window.timeout);
        window.timeout = setTimeout(() => {
          hideCards();
          gameplay();

          countup();
        }, 5000);
        renderCards();
        countdown();
        window.timeout;
      });
      break;

    default:
      break;
  }
}
