window.compares = {};
export function gameplay() {
  const cards = document.querySelectorAll(".game__cards-back");
  debugger;
  let clicks = 0;
  let firstCompare = window.compares.firstCompare;
  let secondCompare = window.compares.secondCompare;

  cards.forEach((card) => {
    console.log(card.querySelector(".game__cards-item"));
    console.log(cards.length);

    card.addEventListener("click", (event) => {
      if (card.querySelector(".game__cards-item").style.display !== "none") {
        event.preventDefault();
      } else {
        card.querySelector(".game__cards-item").style.display = "block";
        clicks++;
        console.log(clicks);
      }
    });

    card.addEventListener("click", () => {
      if (firstCompare === undefined) {
        firstCompare = card.querySelector(".game__cards-item").style.backgroundImage;
        console.log("первый -  " + firstCompare);
      } else {
        secondCompare = card.querySelector(".game__cards-item").style.backgroundImage;
        console.log("второй -  " + secondCompare);
        if (firstCompare !== secondCompare) {
          alert("Вы проиграли");
        } else {
          if (clicks !== cards.length) {
            firstCompare = undefined;
            secondCompare = undefined;
            console.log(firstCompare, secondCompare);
          } else {
            alert("Вы выиграли!");
          }
        }
      }
    });
  });
}
