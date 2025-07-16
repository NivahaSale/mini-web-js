let totalRounds = 0;
let currentRound = 1;
let playerScore = 0;
let computerScore = 0;

function startGame() {
  totalRounds = parseInt(document.getElementById("rounds").value);
  if (isNaN(totalRounds) || totalRounds <= 0) {
    alert("Please enter a valid number of rounds!");
    return;
  }

  document.getElementById("round-setup").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("round-info").textContent = `Round: ${currentRound}`;
}

function play(player) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('player').textContent = `You chose: ${capitalize(player)}`;
  document.getElementById('computer').textContent = `Computer chose: ${capitalize(computerChoice)}`;

  const winner = getWinner(player, computerChoice);
  let roundResult = "";

  if (winner === 'You') {
    playerScore++;
    roundResult = "You win this round!";
  } else if (winner === 'Computer') {
    computerScore++;
    roundResult = "Computer wins this round!";
  } else {
    roundResult = "It's a draw!";
  }

  document.getElementById("round-winner").textContent = roundResult;
  document.getElementById("score").textContent = `Score - You: ${playerScore} | Computer: ${computerScore}`;

  if (currentRound >= totalRounds) {
    endGame();
  } else {
    currentRound++;
    document.getElementById("round-info").textContent = `Round: ${currentRound}`;
  }
}

function endGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("final-result").style.display = "block";

  let finalMessage = "";
  if (playerScore > computerScore) {
    finalMessage = "🎉 You are the final winner!";
  } else if (playerScore < computerScore) {
    finalMessage = "💻 Computer is the final winner!";
  } else {
    finalMessage = "🤝 It's a draw!";
  }

  document.getElementById("final-winner").textContent = finalMessage;
}

function resetGame() {
  totalRounds = 0;
  currentRound = 1;
  playerScore = 0;
  computerScore = 0;

  document.getElementById("round-setup").style.display = "block";
  document.getElementById("game").style.display = "none";
  document.getElementById("final-result").style.display = "none";

  document.getElementById("rounds").value = "";
}

function getWinner(player, computer) {
  if (player === computer) return 'Draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You';
  } else {
    return 'Computer';
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("dark-toggle");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}

