$("#start").click(renderChoiceBtns);
$(".choice").click(getUserChoice);

function renderChoiceBtns() {
  const headerEl = $(".header");
  const scissorsEl = $("#scissors");
  const rockEl = $("#rock");
  const paperEl = $("#paper");
  scissorsEl.css("display", "block");
  rockEl.css("display", "block");
  paperEl.css("display", "block");
  $(".choice").css("background", "white");
  headerEl.addClass("animate__animated animate__backOutDown");
  headerEl.css("--animate-duration", "1s");
  headerEl[0].addEventListener("animationend", () => {
    console.log("I worked");
    headerEl.css("display", "none");
  });
  animateChooseEl();
}

animateChooseEl = () => {
  const chooseEl = $(".chooseText");
  chooseEl.addClass("animate__animated animate__zoomInDown animate__delay-1s");
  chooseEl.text("Choose Your Weapon");
};

function getUserChoice() {
  let userChoice = $(this).attr("value");
  $(this).css("background", "blue");
  $(".choice").attr("disabled", true);
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

let wins = 0;
let losses = 0;
let ties = 0;

getWinner = (userChoice, compChoice) => {
  let winStatusEl = $("#winStatus");
  let scoresEl = $("#scores");
  setTimeout(function () {
    if (userChoice === compChoice) {
      ties++;
      winStatusEl.text("It's a tie!");
    } else if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "rock")
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
  wins = 0;
  losses = 0;
  ties = 0;
  $("#my-modal").modal("hide");
  $(".choice").css("display", "none");
  $(".comp-choice").css("display", "none");
  $(".choice").attr("disabled", false);
});

$("#playAgain").click(function () {
  $(".comp-choice").css("display", "none");
  $("#my-modal").modal("hide");
  $(".choice").attr("disabled", false);
  $(".choice").css("background", "white");
});
