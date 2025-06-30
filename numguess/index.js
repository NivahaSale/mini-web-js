
const MinNum = 1;
const MaxNum = 100;
const answer = Math.floor(Math.random() * (MaxNum - MinNum + 1)) + MinNum;

let attempts = 0;
let running = true;

document.getElementById("submitBtn").addEventListener("click", () => {
  if (!running) return;

  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  let guess = Number(guessInput.value);

  if (isNaN(guess)) {
    message.textContent = "Please enter a valid number.";
  } else if (guess < MinNum || guess > MaxNum) {
    message.textContent = `Enter a number between ${MinNum} and ${MaxNum}.`;
  } else {
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (guess < answer) {
      message.textContent = "Too low! Try again.";
    } else if (guess > answer) {
      message.textContent = "Too high! Try again.";
    } else {
      message.textContent = `CORRECT! The answer was ${answer}. Attempts: ${attempts}`;
      running = false;
      guessInput.disabled = true;
    }
  }

  guessInput.value = '';
  guessInput.focus();
});
