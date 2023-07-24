let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function getAbsoluteDistance(arg1, arg2) {
  return Math.abs(arg1 - arg2);
}
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetGuess) {
  if (userGuess > 9) {
    alert("Guess number is out of range. Enter an number between 0 and 9");
    throw Error("out of range");
  }
  if (userGuess <= 9) {
    console.log("2222");
    const humanGuessResult = getAbsoluteDistance(userGuess, targetGuess);
    const computerGuessResult = getAbsoluteDistance(computerGuess, targetGuess);
    if (
      humanGuessResult < computerGuessResult ||
      humanGuessResult === computerGuessResult
    ) {
      return true;
    } else {
      return false;
    }
  }
}

function updateScore(winner) {
  if (winner === "human") humanScore++;
  if (winner === "computer") computerScore++;
}

function advanceRound() {
  currentRoundNumber++;
}
