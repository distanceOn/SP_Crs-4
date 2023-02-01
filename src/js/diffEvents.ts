import { resetDifficultStyles } from "./styleFunctions";
import { toAnotherStyle } from "./styleFunctions";
import { chooseDifficultLevel } from "./diffChoose";

const easyLevel: HTMLElement = document.querySelector(".diff__choice-item_easy")!;
const mediumLevel: HTMLElement = document.querySelector(".diff__choice-item_medium")!;
const hardLevel: HTMLElement = document.querySelector(".diff__choice-item_hard")!;

const startButton: HTMLElement = document.querySelector(".diff__button")!;

export function diffEvents() {
  easyLevel.addEventListener("click", () => {
    resetDifficultStyles();
    toAnotherStyle(easyLevel);
    window.difficult = "easy";
  });

  mediumLevel.addEventListener("click", () => {
    resetDifficultStyles();
    toAnotherStyle(mediumLevel);
    window.difficult = "medium";
  });

  hardLevel.addEventListener("click", () => {
    resetDifficultStyles();
    toAnotherStyle(hardLevel);
    window.difficult = "hard";
  });

  startButton.addEventListener("click", (event) => {
    if (window.difficult === undefined) {
      event.preventDefault();
    } else {
      chooseDifficultLevel(window.difficult);
    }
  });
}
