import { renderCards } from "./game.js";
import { hideCards } from "./hideCards";
import { gameplay } from "./gameEvents";

const core = document.querySelector(".background");
const templateEasy = document.querySelector("#easy");
const templateMedium = document.querySelector("#medium");
const templateHard = document.querySelector("#hard");

export function chooseDifficultLevel(level) {
  switch (level) {
    case "easy":
      window.difficult = level;
      core.textContent = "";
      core.append(templateEasy.content);
      renderCards(3);
      setTimeout(() => {
        hideCards();
        gameplay();
      }, 5000);
      break;

    case "medium":
      window.difficult = level;
      core.textContent = "";
      core.append(templateMedium.content);
      renderCards(6);
      setTimeout(() => {
        hideCards();
        gameplay();
      }, 5000);
      break;

    case "hard":
      window.difficult = level;
      core.textContent = "";
      core.append(templateHard.content);
      renderCards(9);
      setTimeout(() => {
        hideCards();
        gameplay();
      }, 5000);
      break;

    default:
      break;
  }
}
