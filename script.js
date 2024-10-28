'use strict';
//I am selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

// Setting the default elements of this items to 0
score0Element.textContent = 0;
score1Element.textContent = 0;
// Now we want to hide the dice
diceElement.classList.add('hidden');

// Adding an event listener that will listen to a click
btnRoll.addEventListener('click', function () {
  // 1. Generate a random number
  const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDiceRoll);
  // 2. Display dice roll
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${randomDiceRoll}.png`;

  // 3. If its a 1 we shift to player two
  if (randomDiceRoll == 1) {
    console.log(`Player 2 turn`);
  }
  // 4. Add dice roll to current score

  // 5. Display current score
});
