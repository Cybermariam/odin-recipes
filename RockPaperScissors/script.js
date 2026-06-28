// const words = ["rock", "paper", "scissors"];
// function getComputerChoice() {
//   const randomString = words[Math.floor(Math.random() * words.length)];
//   console.log(randomString);
// }
// getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//const humanChoice = prompt("Please choose rock, paper, or scissors");
//fun;

function getHumanChoice() {
  const humanChoice = prompt("Please choose rock, paper, or scissors");
  return humanChoice ? humanChoice.toLowerCase() : "";
}

function playRound(humanChoice, computerChoice) {
  console.log(
    `Human chose: ${humanChoice} | Computer chose: ${computerChoice}`,
  );
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
  console.log(
    `Current Score -> You: ${humanScore} | Computer: ${computerScore}\n---`,
  );
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanChoiceInput = getHumanChoice();
    playRound(humanChoiceInput, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("GAME OVER: You won the entire game! 🎉");
  } else if (computerScore > humanScore) {
    console.log("GAME OVER: The computer won the game! 🤖");
  } else {
    console.log("GAME OVER: The game ended in a total tie! 🤝");
  }
}

playGame();
