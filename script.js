'use strict';

//
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
// Selecting the score element of both players
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');

// Selecting the Dice Image
const diceElement = document.querySelector('.dice');

// Selecting the current scores if the two players
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

// Selecting the buttons on the page
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

let scores, currentScore, activePlayer, playing;

const resetGame = function () {
  scores = [0, 0]; //This will hold player final scores
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  // Set all scores to zero

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
  diceElement.classList.add('hidden');

  //   Set player one as starting player
};
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // if active player is 0 then the new active player is 1 and vice versa
  activePlayer = activePlayer == 0 ? 1 : 0;
  // This toggles the player-active and changes the backgroud color
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

resetGame();

btnRoll.addEventListener('click', function () {
  // Generate random dice roll
  if (playing) {
    const randomDiceRoll = Math.trunc(Math.random() * 6 + 1);

    // Display dice Roll
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${randomDiceRoll}.png`;

    //   Check for rolled 1: if true,switvh to nex player
    if (randomDiceRoll !== 1) {
      currentScore = currentScore + randomDiceRoll;
      console.log(currentScore);

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // current0Element.textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // 1. Add current score to active player score
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;

      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. If not switch to the next player
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', resetGame);
