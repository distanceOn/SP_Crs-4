import { createCollection as resultCollection } from "./createCollection";

export function renderCards() {
  let amount = 0;
  if (window.difficult === "easy") {
    amount = 3;
  } else if (window.difficult === "medium") {
    amount = 6;
  } else if (window.difficult === "hard") {
    amount = 9;
  }

  const result = resultCollection(amount);
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
