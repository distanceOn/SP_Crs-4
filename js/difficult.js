/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
const easyLevel = document.querySelector('.diff__choice-item_easy');
const mediumLevel = document.querySelector('.diff__choice-item_medium');
const hardLevel = document.querySelector('.diff__choice-item_hard');
const startButton = document.querySelector('.diff__button');

let difficultChoice;

function resetDifficultStyles() {
  const diffs = document.querySelectorAll('.diff__choice-item');
  for (const item of diffs) {
    item.style.backgroundColor = '#fff';
    item.style.transform = 'none';
  }
}

function toAnotherStyle(item, textLevel) {
  item.style.backgroundColor = 'yellow';
  item.style.transform = 'scale(1.1)';
  difficultChoice = textLevel;
}

easyLevel.addEventListener('click', () => {
  resetDifficultStyles();
  toAnotherStyle(easyLevel, 'easy');
});

mediumLevel.addEventListener('click', () => {
  resetDifficultStyles();
  toAnotherStyle(mediumLevel, 'medium');
});

hardLevel.addEventListener('click', () => {
  resetDifficultStyles();
  toAnotherStyle(hardLevel, 'hard');
});

function chooseDifficultLevel(level) {
  switch (level) {
    case 'easy':
      window.difficult = level;
      core.textContent = '';
      core.append(templateEasy.content);
      break;
    case 'medium':
      window.difficult = level;
      core.textContent = '';
      core.append(templateMedium.content);
      break;
    case 'hard':
      window.difficult = level;
      core.textContent = '';
      core.append(templateHard.content);
      hideCards();
      break;
    default:
      break;
  }
}

startButton.addEventListener('click', (event) => {
  if (difficultChoice === undefined) {
    event.preventDefault();
  } else {
    chooseDifficultLevel(difficultChoice);
  }
});
