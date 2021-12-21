var buttonRoll = document.getElementById('buttonRoll');
var buttonHold = document.getElementById('buttonHold');
var buttonReset = document.getElementById('buttonReset');

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');

var diceImg = document.getElementById('dice-img')


let player = 1

let dice = 0

let playerOneRound = 0
let playerOneGlobal = 0

let playerTwoRound = 0
let playerTwoGlobal = 0

// function

function setImageDice(dice) {
  switch (dice) {
    case 1:
      diceImg.src = "images/dice1.png";
      break;
    case 2:
      diceImg.src = "images/dice2.png";
      break;
    case 3:
      diceImg.src = "images/dice3.png";
      break;
    case 4:
      diceImg.src = "images/dice4.png";
      break;
    case 5:
      diceImg.src = "images/dice5.png";
      break;
    case 6:
      diceImg.src = "images/dice6.png";
      break;
    default:
      diceImg.style.display = "none"
  }
}


function rollDice() {
  if (player === 1) {
    dice = Math.floor(Math.random() * (7 - 1) + 1);
    if (dice === 1) {
      playerOneRound = 0
      setImageDice(dice)
      playerOneGlobal = playerOneGlobal
      updateDisplay(1, dice, playerOneRound, playerOneGlobal)
    } else {
      playerOneRound = playerOneRound + dice
      setImageDice(dice)
      playerOneGlobal = playerOneGlobal
      updateDisplay(1, dice, playerOneRound, playerOneGlobal)
    }
  } else {
    dice = Math.floor(Math.random() * (7 - 1) + 1);
    if (dice === 1) {
      playerTwoRound = 0
      setImageDice(dice)
      playerTwoGlobal = playerTwoGlobal
      updateDisplay(2, dice, playerTwoRound, playerTwoGlobal)
    } else {
      playerTwoRound = playerTwoRound + dice
      setImageDice(dice)
      playerTwoGlobal = playerTwoGlobal
      updateDisplay(2, dice, playerTwoRound, playerTwoGlobal)
    }
  }
}


function hold() {
  if (player === 1) {
    playerOneGlobal = playerOneRound + playerOneGlobal
    if (playerOneGlobal < 100) {
      playerOneRound = 0
      dice = 0
      updateDisplay(1, dice, playerOneRound, playerOneGlobal)
      player = 2
      player1.style.display = "none";
      player2.style.display = "inline-block";
    } else {
      updateDisplay(1, dice, playerOneRound, playerOneGlobal)
    }

  } else {
    playerTwoGlobal = playerTwoRound + playerTwoGlobal
    if (playerTwoGlobal < 100) {
      playerTwoRound = 0
      dice = 0
      updateDisplay(2, dice, playerTwoRound, playerTwoGlobal)
      player = 1
      player1.style.display = "inline-block";
      player2.style.display = "none";
    } else {
      updateDisplay(1, dice, playerOneRound, playerOneGlobal)
    }

  }
}

function reset() {
  dice = 0
  setImageDice(1)
  playerOneRound = 0
  playerOneGlobal = 0
  playerTwoRound = 0
  playerTwoGlobal = 0
  updateDisplay('reset', dice, playerOneRound, playerOneGlobal)
}

function updateDisplay(player, diceValue, roundValue, globalValue) {
  if (player == 1) {
    document.getElementById("dice").innerHTML = diceValue;
    document.getElementById("round-one").innerHTML = roundValue;
    document.getElementById("global-one").innerHTML = globalValue;
  } else {
    if (player == 2) {
      document.getElementById("dice").innerHTML = diceValue;
      document.getElementById("round-two").innerHTML = roundValue;
      document.getElementById("global-two").innerHTML = globalValue;
    } else {
      document.getElementById("dice").innerHTML = diceValue;
      document.getElementById("round-one").innerHTML = roundValue;
      document.getElementById("global-one").innerHTML = globalValue;
      document.getElementById("round-two").innerHTML = roundValue;
      document.getElementById("global-two").innerHTML = globalValue;
    }

  }

}

buttonRoll.addEventListener('click', rollDice);
buttonHold.addEventListener('click', hold);
buttonReset.addEventListener('click', reset);