$("#start").click(renderChoiceBtns);

function renderChoiceBtns() {
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
  return;
}

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
  let wins = 0;
  let losses = 0;
  let ties = 0;
  let winStatusEl = $("<p>");
  let scoresEl = $("<p>");
  const myModal = $(".modal-body");
  myModal.append(winStatusEl);
  myModal.append(scoresEl);
  setTimeout(function () {
    if (userChoice === compChoice) {
      ties++;
      winStatusEl.text("It's a tie!");
    } else if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      wins++;
      winStatusEl.text("Player wins!");
    } else {
      losses++;
      winStatusEl.text("Computer wins!");
    }
  }, 1000);
  setTimeout(function () {
    $("#my-modal").modal("show");
    scoresEl.text(`Wins: ${wins} \n Losses: ${losses} \n Ties: ${ties}`);
  }, 1000);
  return;
};

$("#clearBtn").click(function () {
  location.reload();
});

$("#playAgain").click(function () {
  renderChoiceBtns();
});
