function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genRandomChoice() {
  const rndChoice = randomNumber(0, 2);
  switch (rndChoice) {
    case 0:
      return "ROCK";
      break;
    case 1:
      return "PAPER";
      break;
    case 2:
      return "SCISSORS";
      break;
  }
}

function roundWinner(player, computer) {
  if (player === CHOICES.ROCK) {
    switch (computer) {
      case CHOICES.PAPER:
        return -1;
      case CHOICES.SCISSORS:
        return 1;
      default:
        return 0;
    }
  } else if (player === CHOICES.PAPER) {
    switch (computer) {
      case CHOICES.SCISSORS:
        return -1;
      case CHOICES.ROCK:
        return 1;
      default:
        return 0;
    }
  } else {
    switch (computer) {
      case CHOICES.ROCK:
        return -1;
      case CHOICES.PAPER:
        return 1;
      default:
        return 0;
    }
  }
}

function updateGameStatus(winner, playerChoice, computerChoice) {
  gameStatus.round += 1;
  gameStatus.playerChoice = playerChoice;
  gameStatus.computerChoice = computerChoice;
  if (winner === 1) {
    gameStatus.winner = "Player";
  } else if (winner === -1) {
    gameStatus.winner = "Computer";
  } else {
    gameStatus.winner = "Draw";
  }
  gameStatus.history.push({
    round: gameStatus.round,
    playerChoice,
    computerChoice,
    winner,
  });
}

function init() {
  document
    .getElementById("player-choice")
    .addEventListener("click", function (e) {
      e.stopPropagation();
      if (e.target.tagName == "BUTTON") {
        const playerChoice = e.target.innerText.toUpperCase();
        const computerChoice = genRandomChoice();
        const winner = roundWinner(playerChoice, computerChoice);

        updateGameStatus(winner, playerChoice, computerChoice);
        updateUI(winner);
      }
    });

  document
    .getElementById("toggle-history")
    .addEventListener("click", function (e) {
      e.stopPropagation();
      const histContainer = document.getElementById("game-history");
      if (histContainer.classList.contains("active")) {
        histContainer.classList.remove("active");
      } else {
        histContainer.classList.add("active");
      }
    });
}
