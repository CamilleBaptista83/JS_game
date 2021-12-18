var buttonRoll = document.getElementById('buttonRoll');
var buttonHold = document.getElementById('buttonHold');

let player = 1

let dice = 0

let playerOneRound = 0
let playerOneGlobal = 0


if (player = 1) {
  function rollDice() {
    dice = Math.floor(Math.random() * (6 - 1) + 1);
    playerOneRound = playerOneRound + dice
    playerOneGlobal = playerOneGlobal
    updateDisplay(dice, playerOneRound, playerOneGlobal)
  }
  function hold() {
    playerOneGlobal = playerOneRound + playerOneGlobal
    playerOneRound = 0
    updateDisplay(0, 0, playerOneGlobal)
  }
}

function reset() {
  updateDisplay(0, 0, 0)
}

buttonRoll.addEventListener('click', rollDice);

buttonHold.addEventListener('click', hold);


function updateDisplay(diceValue, roundValue, globalValue) {
  document.getElementById("dice").innerHTML = diceValue;
  document.getElementById("round").innerHTML = roundValue;
  document.getElementById("global").innerHTML = globalValue;

}