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
  switch (level) {
    case "easy":
      window.difficult = level;
      core.textContent = "";
      core.append(templateEasy.content);
      renderCards(3);
      countdown();
      setTimeout(() => {
        hideCards();
        gameplay();
        countup();
      }, 5000);
      break;

    case "medium":
      window.difficult = level;
      core.textContent = "";
      core.append(templateMedium.content);
      renderCards(6);
      countdown();
      setTimeout(() => {
        hideCards();
        gameplay();
        countup();
      }, 5000);
      break;

    case "hard":
      window.difficult = level;
      core.textContent = "";
      core.append(templateHard.content);
      renderCards(9);
      countdown();
      setTimeout(() => {
        hideCards();
        gameplay();
        countup();
      }, 5000);
      break;

    default:
      break;
  }
}
