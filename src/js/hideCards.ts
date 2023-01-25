export function hideCards() {
  const currentCards = document.querySelectorAll(".game__cards-item");
  currentCards.forEach((element) => {
    (element as HTMLElement).style.display = "none";
  });
}
