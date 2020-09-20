function updateHistoryListUI(list) {
  const round = document.createElement("li");
  round.classList.add("round");
  round.appendChild(document.createTextNode("Round:" + gameStatus.round));

  const playerChoice = document.createElement("li");
  playerChoice.appendChild(document.createTextNode(gameStatus.playerChoice));

  const computerChoice = document.createElement("li");
  computerChoice.appendChild(
    document.createTextNode(gameStatus.computerChoice)
  );

  const winner = document.createElement("li");
  winner.appendChild(document.createTextNode("Winner:" + gameStatus.winner));

  list.appendChild(round);
  list.appendChild(playerChoice);
  list.appendChild(computerChoice);
  list.appendChild(winner);
}

function updateUI(winner) {
  const playerScore = document.getElementById("score-player");
  const computerScore = document.getElementById("score-computer");

  if (winner === 1) {
    playerScore.innerText = Number.parseInt(playerScore.innerText) + 1;
  } else if (winner === -1) {
    computerScore.innerText = Number.parseInt(computerScore.innerText) + 1;
  } else {
    document.getElementById("winner").innerText = "Draw";
  }
  document.getElementById("winner").innerText = gameStatus.winner;
  document.getElementById("score-round").innerText = gameStatus.round;

  document.getElementById("choice-player").innerText = gameStatus.playerChoice;
  document.getElementById("choice-computer").innerText =
    gameStatus.computerChoice;

  const historyList = document.getElementById("game-history").children[0];
  updateHistoryListUI(historyList);
}
