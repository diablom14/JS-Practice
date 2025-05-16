const btn = document.querySelector(".btn");
const txtBox = document.getElementById("txtbox");
const guessCnt = document.querySelector(".guess-cnt");
const prevGuess = document.querySelector(".prev-guess");

let randomNum = Math.floor(Math.random() * 100) + 1;
let remainingGuesses = 10;
let lastGuess = "";
let gameOver = false;

console.log("Secret number:", randomNum);

btn.addEventListener("click", () => {
  if (gameOver) {
    alert("Game is over. Refresh to play again.");
    return;
  }

  const guessedVal = parseInt(txtBox.value.trim());

  // Validation
  if (isNaN(guessedVal) || guessedVal < 1 || guessedVal > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  lastGuess = guessedVal;
  remainingGuesses--;

  if (guessedVal === randomNum) {
    alert("🎉 You guessed the correct number!");
    gameOver = true;
  } else if (remainingGuesses === 0) {
    alert(`❌ You've used all your chances. The correct number was ${randomNum}.`);
    gameOver = true;
  } else {
    const hint = guessedVal < randomNum ? "Too low!" : "Too high!";
    alert(`${hint} You have ${remainingGuesses} guess(es) left.`);
  }

  // Update UI
  txtBox.value = "";
  guessCnt.innerText = remainingGuesses;
  prevGuess.innerText = lastGuess;
});
