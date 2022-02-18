startGame = () => $("#start").click(renderChoiceBtns);

renderChoiceBtns = () => {
  const scissorsEl = $("#scissors");
  const rockEl = $("#rock");
  const paperEl = $("#paper");
  scissorsEl.css("display", "block");
  rockEl.css("display", "block");
  paperEl.css("display", "block");

  $(".choice").click(function () {
    $(".choice").each(function () {
      $(this).css("background", "white");
    });
    let userChoice = $(this).attr("value");
    $(this).css("background", "blue");
    getCompChoice(userChoice);
  });
};
getCompChoice = (userChoice) => {
  let choiceArray = ["rock", "paper", "scissors"];
  let compChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];

  setTimeout(function () {
    $(".comp-choice").each(function () {
      let choiceVal = $(this).attr("value");
      if (compChoice === choiceVal) {
        $(this).css("display", "block");
      }
    });
    console.log(compChoice);
    getWinner(userChoice, compChoice);
  }, 1000);
};
getWinner = (userChoice, compChoice) => {
  let winStatusEl = $("<p>");
  const compSec = $("#comp-sec");
  compSec.append(winStatusEl);
  setTimeout(function () {
    if (userChoice === compChoice) {
      winStatusEl.text("It's a tie!");
    } else if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      winStatusEl.text("Player wins!");
    } else {
      winStatusEl.text("Computer wins!");
    }
  }, 1000);
};
startGame();
