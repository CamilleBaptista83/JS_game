var buttonRoll = document.getElementById('buttonRoll');
var buttonHold = document.getElementById('buttonHold');
var buttonReset = document.getElementById('buttonReset');

let player = 1

let dice = 0

let playerOneRound = 0
let playerOneGlobal = 0

let playerTwoRound = 0
let playerTwoGlobal = 0

// function

function rollDice() {
  if (player == 1) {
    dice = Math.floor(Math.random() * (6 - 1) + 1);
    playerOneRound = playerOneRound + dice
    playerOneGlobal = playerOneGlobal
    updateDisplay(1, dice, playerOneRound, playerOneGlobal)
  } else {
    dice = Math.floor(Math.random() * (6 - 1) + 1);
    playerTwoRound = playerTwoRound + dice
    playerTwoGlobal = playerTwoGlobal
    updateDisplay(2, dice, playerTwoRound, playerTwoGlobal)
  }
}


function hold() {
  if (player == 1) {
    playerOneGlobal = playerOneRound + playerOneGlobal
    playerOneRound = 0
    dice = 0
    updateDisplay(1, dice, playerOneRound, playerOneGlobal)
    player = 2
  } else {
    playerTwoGlobal = playerTwoRound + playerTwoGlobal
    playerTwoRound = 0
    dice = 0
    updateDisplay(2, dice, playerTwoRound, playerTwoGlobal)
    player = 1
  }

}

function reset() {
  dice = 0
  playerOneRound = 0
  playerOneGlobal = 0
  playerTwoRound = 0
  playerTwoGlobal = 0
  updateDisplay(1, dice, playerOneRound, playerOneGlobal)
}

buttonRoll.addEventListener('click', rollDice);
buttonHold.addEventListener('click', hold);
buttonReset.addEventListener('click', reset);

function updateDisplay(player, diceValue, roundValue, globalValue) {
  if (player == 1) {
    document.getElementById("dice-one").innerHTML = diceValue;
    document.getElementById("round-one").innerHTML = roundValue;
    document.getElementById("global-one").innerHTML = globalValue;
  } else { if(player == 2) {
    document.getElementById("dice-two").innerHTML = diceValue;
    document.getElementById("round-two").innerHTML = roundValue;
    document.getElementById("global-two").innerHTML = globalValue;
  }

  }

}