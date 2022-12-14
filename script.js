'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El =  document.getElementById('score--0');
const score1El =  document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const newBtn = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');
const diceEl = document.querySelector('.dice');
const winner1 = document.querySelector('.winner-container-0');
const winner2 = document.querySelector('.winner-container-1');

//Global variables
let currentScore , activePlayer , scores , playing ;
//starting condition;
const init = function() {

 currentScore = 0;
 activePlayer = 0;
 scores = [0,0];
 playing = true;
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0; 
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add ('player--active');
winner1.classList.add('hidden-winner');
winner2.classList.add('hidden-winner');
document.querySelector('.btn-roll').classList.remove('hidden');
current0El.textContent = 0;
current1El.textContent = 0;
};
init();

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer =  activePlayer === 0  ? 1 : 0;
    player0El.classList.toggle ('player--active');
    player1El.classList.toggle ('player--active');
};

rollBtn.addEventListener( 'click', function() {
    if(playing) {
    // genrating random number
    const dice = Math.trunc(Math.random()* 6) + 1 ;
    // display dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check for roll 1

    if (dice !== 1) {
         //currentScore = currentScore + dice;
       currentScore += dice;
       document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
       switchPlayer();

    }
}

} );

// for hold button add current score in main score.

holdBtn.addEventListener('click', function() {
    if (playing) {
    // scores[activePlayer] = scores[activePlayer] + currentScore
    scores[activePlayer] += currentScore;
    document.getElementById (`score--${activePlayer}`).textContent = scores[activePlayer];

    // check if player score is 100<= score.
    if (scores[activePlayer] >= 15) {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('hidden-winner');
        document.querySelector(`.winner-container-${activePlayer}`).classList.remove('hidden-winner');
        document.querySelector('.btn-roll').classList.add('hidden');
        

        
    }

    else {
      switchPlayer();
    }
}
}) 

newBtn.addEventListener('click' , init);



