let myArray = ["Rock", "Paper", "Scissors"];
    let scores = [];
    function computerPlay() {
      return myArray[Math.floor(Math.random() * myArray.length)];
    }
    function game() {
        let choice = document.getElementById("choice").value;
      for (let i = 0; i < 5; i++) {
        playRound(choice, computerPlay());
      }
    }

    function playRound(playerSelection, computerSelection) {
      //created 2 new variables for each selection.
      //call .toLowerCase() on each so they are case insensitive.
      let ps = playerSelection.toLowerCase();
      let cs = computerSelection.toLowerCase();
      console.log(cs)
      if (ps != "rock" && ps != "paper" && ps != "scissors") {
        alert("Invalid. Please enter rock, paper, or scissors.");
      } else if (ps == cs) {
        scores.push(0);
        alert("It's a tie!");
      } else if (
        (ps == "rock" && cs == "paper") ||
        (ps == "paper" && cs == "scissors") ||
        (ps == "scissors" && cs == "rock")
      ) {
        scores.push(-1);
        alert("You lose!");
      } else {
        scores.push(1);
        alert("You win!");
      }
    }
    game();
    console.log(scores);
    let finalScore = 0;
    for (let i = 0; i < scores.length; i++) {
      finalScore += scores[i];
    }
    console.log(finalScore);
    if (finalScore >= 1) {
        alert("You're the winner!");
    }
    else if (finalScore == 0) {
        alert("It's a tie.");
    }
    else {
        alert("You lost!");
    }