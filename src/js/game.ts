import { createCollection as resultCollection } from "./createCollection";

export function renderCards(originalAmount) {
  const result = resultCollection(originalAmount);
  const currentCards = document.querySelectorAll(".game__cards-item");
  console.log(currentCards);
  let i = 0;
  currentCards.forEach((div) => {
    result[i];
    (div as HTMLElement).style.backgroundImage = `url(${result[i]})`;
    (div as HTMLElement).style.display = "block";
    i++;
  });
}
