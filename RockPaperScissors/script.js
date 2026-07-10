// // const words = ["rock", "paper", "scissors"];
// // function getComputerChoice() {
// //   const randomString = words[Math.floor(Math.random() * words.length)];
// //   console.log(randomString);
// // }
// // getComputerChoice();

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

const result = document.createElement("div");
document.body.appendChild(result);
const score = document.createElement("div");
document.body.appendChild(score);
function playRound(humanChoice, computerChoice) {
  result.textContent = `Human chose: ${humanChoice} | Computer chose: ${computerChoice}`;

  if (humanChoice === computerChoice) {
    result.textContent += "\nIt's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result.textContent += "\nYou win!";
    humanScore++;
  } else {
    result.textContent += `\nYou lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
  score.textContent = `Current Score -> You: ${humanScore} | Computer: ${computerScore}\n---`;
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const computerChoice = getComputerChoice();
//     const humanChoiceInput = getHumanChoice();
//     playRound(humanChoiceInput, computerChoice);
//   }

//   if (humanScore > computerScore) {
//     console.log("GAME OVER: You won the entire game! 🎉");
//   } else if (computerScore > humanScore) {
//     console.log("GAME OVER: The computer won the game! 🤖");
//   } else {
//     console.log("GAME OVER: The game ended in a total tie! 🤝");
//   }
// }

// playGame();

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
