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
  // let compChoice = $(".comp-choice");
  setTimeout(function () {
    console.log(compChoice);
    const compScissorsEl = $("#scissors2");
    const compRockEl = $("#rock2");
    const compPaperEl = $("#paper2");
    if (compChoice === compScissorsEl.value) {
      compScissorsEl.css("display", "block");
    } else if (compChoice === compRockEl) {
      compRockEl.css("display", "block");
    } else {
      compPaperEl.css("display", "block");
    }
  }, 500);
  getWinner(userChoice, compChoice);
};
getWinner = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    console.log("It's a tie!");
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    console.log("Player wins!");
  } else {
    console.log("Computer wins!");
  }
};
startGame();
