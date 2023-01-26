export function gameplay() {
  window.compares = {};
  const cards = document.querySelectorAll(".game__cards-back");
  let clicks = 0;
  let firstCompare = window.compares.firstCompare;
  let secondCompare = window.compares.secondCompare;

  cards.forEach((card) => {
    console.log(card.querySelector(".game__cards-item"));
    console.log(cards.length);

    card.addEventListener("click", (event) => {
      const element: HTMLElement = card.querySelector(".game__cards-item")!;
      if (element.style.display !== "none") {
        event.preventDefault();
      } else {
        element.style.display = "block";
        clicks++;
        console.log(clicks);
      }
    });

    card.addEventListener("click", () => {
      const element: HTMLElement = card.querySelector(".game__cards-item")!;
      if (firstCompare === undefined) {
        firstCompare = element.style.backgroundImage;
        console.log("первый -  " + firstCompare);
      } else {
        secondCompare = element.style.backgroundImage;
        console.log("второй -  " + secondCompare);
        if (firstCompare !== secondCompare) {
          alert("Вы проиграли");
          window.winOrLose = true;
        } else {
          if (clicks !== cards.length) {
            firstCompare = undefined;
            secondCompare = undefined;
            console.log(firstCompare, secondCompare);
          } else {
            alert("Вы выиграли!");
            window.winOrLose = true;
          }
        }
      }
    });
  });
}