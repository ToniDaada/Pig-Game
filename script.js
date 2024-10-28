'use strict';
//I am selecting elements
let score0Element = document.querySelector('#score--0');
let score1Element = document.getElementById('score--1');
let diceElement = document.querySelector('.dice');
// Setting the default elements of this items to 0
score0Element.textContent = 0;
score1Element.textContent = 0;
// Now we want to hide the dice
diceElement.classList.add('hidden');
