const easyLevel = document.querySelector(".diff__choice-item_easy");
const mediumLevel = document.querySelector(".diff__choice-item_medium");
const hardLevel = document.querySelector(".diff__choice-item_hard");
const startButton = document.querySelector(".diff__button");

let difficultChoice;

function resetDifficultStyles() {
    const diffs = document.querySelectorAll(".diff__choice-item");
    for (const item of diffs) {
        item.style.backgroundColor = "#fff";
        item.style.transform = "none";
    }
}

easyLevel.addEventListener("click", () => {
    resetDifficultStyles();
    easyLevel.style.backgroundColor = "yellow";
    easyLevel.style.transform = "scale(1.1)";
    difficultChoice = "easy";
});

mediumLevel.addEventListener("click", () => {
    resetDifficultStyles();
    mediumLevel.style.backgroundColor = "yellow";
    mediumLevel.style.transform = "scale(1.1)";
    difficultChoice = "medium";
});

hardLevel.addEventListener("click", () => {
    resetDifficultStyles();
    hardLevel.style.backgroundColor = "yellow";
    hardLevel.style.transform = "scale(1.1)";
    difficultChoice = "hard";
});

function chooseDifficultLevel(level) {
    switch (level) {
        case "easy":
            window.difficult = level;
            core.textContent = "";
            core.append(templateEasy.content);
            break;
        case "medium":
            window.difficult = level;
            core.textContent = "";
            core.append(templateMedium.content);
            break;
        case "hard":
            window.difficult = level;
            core.textContent = "";
            core.append(templateHard.content);
            break;
        default:
            break;
    }
}

startButton.addEventListener("click", (event) => {
    if (difficultChoice === undefined) {
        event.preventDefault();
    } else {
        chooseDifficultLevel(difficultChoice);
    }
});
