/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */

function hideCards() {
  const cards = document.querySelectorAll('.game__cards-item');
  setTimeout(() => {
    for (const card of cards) {
      card.style.display = 'block';
    }
  }, 1000);

  setTimeout(() => {
    for (const card of cards) {
      card.style.display = 'none';
    }
  }, 5000);
}
