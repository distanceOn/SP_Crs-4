import { resetDifficultStyles } from "./styleFunctions";
import { toAnotherStyle } from "./styleFunctions";
import { chooseDifficultLevel } from "./diffChoose";

const easyLevel: HTMLElement = document.querySelector(".diff__choice-item_easy")!;
const mediumLevel: HTMLElement = document.querySelector(".diff__choice-item_medium")!;
const hardLevel: HTMLElement = document.querySelector(".diff__choice-item_hard")!;

const startButton: HTMLElement = document.querySelector(".diff__button")!;

let difficultChoice;

export function diffEvents() {
  easyLevel.addEventListener("click", () => {
    resetDifficultStyles();
    toAnotherStyle(easyLevel);
    difficultChoice = "easy";
  });

  mediumLevel.addEventListener("click", () => {
    resetDifficultStyles();
    toAnotherStyle(mediumLevel);
    difficultChoice = "medium";
  });

  hardLevel.addEventListener("click", () => {
    resetDifficultStyles();
    toAnotherStyle(hardLevel);
    difficultChoice = "hard";
  });

  startButton.addEventListener("click", (event) => {
    if (difficultChoice === undefined) {
      event.preventDefault();
    } else {
      chooseDifficultLevel(difficultChoice);
    }
  });
}
