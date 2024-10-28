'use strict';
//I am selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const scorePlayerOne = document.getElementById('current--0');
let currentScore = 0;

// Setting the default elements of this items to 0
score0Element.textContent = 0;
score1Element.textContent = 0;
// Now we want to hide the dice
diceElement.classList.add('hidden');

// Adding an event listener that will listen to a click
btnRoll.addEventListener('click', function () {
  // 1. Generate a random number
  const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
  //   console.log(randomDiceRoll);
  // 2. Display dice roll
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${randomDiceRoll}.png`;
  // 3.Check for if the roll is 1
  if (randomDiceRoll !== 1) {
    // 4. Add dice roll to current score
    currentScore = currentScore + randomDiceRoll;
    scorePlayerOne.textContent = currentScore;
  } else {
    // Shift two player two
    currentScore = 0;
    scorePlayerOne.textContent = currentScore;
  }
});
// Adding an event listener that will listen to when the hold button is clicked
btnHold.addEventListener('click', function () {
  // 5. Display current score
  score0Element.textContent = currentScore;
});
