/*

GAME FUNCTION: 
- Player must guess a number between min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again

*/

// Game values

let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //Validate Input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    // GAME OVER - WON!

    // // Disable input
    // guessInput.disabled = true;
    // // change border colour
    // guessInput.style.borderColor = "green";
    // // Set winning message
    // setMessage(`${winningNum} is correct! YOU WIN!`, "green");

    gameOver(true, `${winningNum} is correct! YOU WIN!`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // GAME OVER - LOST!

      // // Disable input
      // guessInput.disabled = true;
      // // change border colour
      // guessInput.style.borderColor = "red";
      // // Set losing message
      // setMessage(
      //   `Game over, you lost. The correct number was ${winningNum}`,
      //   "red"
      gameOver(
        false,
        `Game over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // GAME CONTINUES - Answer wrong

      // Change border style
      guessInput.style.borderColor = "red";

      // Clear Input
      guessInput.value = "";

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} left.`, "red");
    }
  }
});

// Set Game Over Function

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : "red";
  // Disable input
  guessInput.disabled = true;
  // change border colour
  guessInput.style.borderColor = color;
// set text color
  message.style.color = color;
  // Set winning message
  setMessage(msg);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
