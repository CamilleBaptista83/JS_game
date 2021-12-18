var button = document.getElementById('button');

let player = 1

let dice = 0

let playerRound = 0

function rollDice() {
  if (player == 1) {
    dice = Math.floor(Math.random() * (6 - 1) + 1);
    updateDisplayDice(dice)
    console.log(dice)
    playerRound = playerRound + dice
    console.log(playerRound)
    updateDisplayRound(playerRound)
  }
}

button.addEventListener('click', rollDice);


function updateDisplayDice(diceValue) {
    document.getElementById("dice").innerHTML = diceValue;
}

function updateDisplayRound(roundValue) {
    document.getElementById("round").innerHTML = roundValue;
}