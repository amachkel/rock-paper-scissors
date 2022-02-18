$("#start").click(renderChoiceBtns);
$(".choice").click(getUserChoice);

function renderChoiceBtns() {
  const scissorsEl = $("#scissors");
  const rockEl = $("#rock");
  const paperEl = $("#paper");
  scissorsEl.css("display", "block");
  rockEl.css("display", "block");
  paperEl.css("display", "block");
  $(".choice").css("background", "white");
}

function getUserChoice() {
  let userChoice = $(this).attr("value");
  $(this).css("background", "blue");
  getCompChoice(userChoice);
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
    console.log(`comp chose ${compChoice}`);
    getWinner(userChoice, compChoice);
  }, 1000);
};
getWinner = (userChoice, compChoice) => {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  let winStatusEl = $("#winStatus");
  let scoresEl = $("#scores");
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
    scoresEl.html("");
    scoresEl.html(`Wins: ${wins} <br> Losses: ${losses} <br> Ties: ${ties}`);
  }, 1000);
};

$("#clearBtn").click(function () {
  location.reload();
});

$("#playAgain").click(function () {
  $(".comp-choice").css("display", "none");
  $(".comp-choice").val("");
  $("#my-modal").modal("hide");
  getUserChoice();
});
