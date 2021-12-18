
var dice = 0;

function rollDice() {
    updateDisplay(Math.floor(Math.random() * (6 - 1) + 1));
}

function updateDisplay(diceValue) {
    document.getElementById("dice").innerHTML = diceValue;
}


function setNewGame() {
    counterVal = 0;
    updateDisplay(counterVal);
}