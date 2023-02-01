import { renderCards } from "./game";
import { hideCards } from "./hideCards";
import { countdown } from "./timerCountdown";
import { countup } from "./timerCountup";

const lose: HTMLMetaElement = document.querySelector("#lose")!;
const loseTemplate = document.createElement("div");
loseTemplate.append(lose.content);

const firstLoseNode = loseTemplate.firstElementChild;
const lastLoseNode = loseTemplate.lastElementChild;

const win: HTMLMetaElement = document.querySelector("#win")!;
const winTemplate = document.createElement("div");
winTemplate.append(win.content);

const firstWinNode = winTemplate.firstElementChild;
const lastWinNode = winTemplate.lastElementChild;

export function gameplay() {
  const cards = document.querySelectorAll(".game__cards-back");
  let clicks = 0;
  let firstCompare: String | undefined = undefined;
  let secondCompare: String | undefined = undefined;

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
          document.querySelector(".game")?.append(firstLoseNode!);
          document.querySelector(".game")?.append(lastLoseNode!);

          document.querySelector(".result__min")!.textContent =
            document.querySelector(".game__time-go_min")!.textContent!;
          document.querySelector(".result__sec")!.textContent =
            document.querySelector(".game__time-go_sek")!.textContent!;

          window.timerup = false;

          document.querySelector(".result__button")?.addEventListener("click", () => {
            clearTimeout(window.timeout);
            document.querySelector(".bg")?.remove();
            document.querySelector(".result")?.remove();
            firstCompare = undefined;
            secondCompare = undefined;
            clicks = 0;
            renderCards();
            countdown();
            window.timeout = setTimeout(() => {
              hideCards();
              countup();
            }, 5000);
            window.timeout;
          });
        } else {
          if (clicks !== cards.length) {
            firstCompare = undefined;
            secondCompare = undefined;
            console.log(firstCompare, secondCompare);
          } else {
            document.querySelector(".game")?.append(firstWinNode!);
            document.querySelector(".game")?.append(lastWinNode!);

            document.querySelector(".result__min")!.textContent =
              document.querySelector(".game__time-go_min")!.textContent!;
            document.querySelector(".result__sec")!.textContent =
              document.querySelector(".game__time-go_sek")!.textContent!;

            window.timerup = false;

            document.querySelector(".result__button")?.addEventListener("click", () => {
              clearTimeout(window.timeout);

              document.querySelector(".bg")?.remove();
              document.querySelector(".result")?.remove();
              firstCompare = undefined;
              secondCompare = undefined;
              clicks = 0;
              renderCards();
              countdown();
              window.timeout = setTimeout(() => {
                hideCards();
                countup();
              }, 5000);
              window.timeout;
            });
          }
        }
      }
    });
  });
}
