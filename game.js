function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
      return "Rock";
    } else if (random === 2) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }
  
  function playGame(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
      if (computerSelection === "Paper") {
        return "You lose! Paper beats Rock";
      } else if (computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
      } else {
        return "It's a tie! Both chose Rock";
      }
    } else if (playerSelection === "Paper") {
      if (computerSelection === "Rock") {
        return "You win! Paper beats Rock";
      } else if (computerSelection === "Scissors") {
        return "You lose! Scissors beat Paper";
      } else {
        return "It's a tie! Both chose Paper";
      }
    } else if (playerSelection === "Scissors") {
      if (computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
      } else if (computerSelection === "Paper") {
        return "You win! Scissors beat Paper";
      } else {
        return "It's a tie! Both chose Scissors";
      }
    } else {
      return "Invalid player selection";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);
  
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
  
      console.log(`Player: ${playerSelection}`);
      console.log(`Computer: ${computerSelection}`);
  
      const roundResult = playGame(playerSelection, computerSelection);
      console.log(roundResult);
  
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      }
    }
  
    console.log("Game over!");
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  game();
  