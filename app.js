var userScore = 0;
var compScore = 0;
const result_div = document.querySelector(".result > p");
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("S");

function getCompChoice() {
    const choices = ["r", "p", "s", "l", "S"];
    const compChoice = Math.floor(Math.random() * 5);
    return choices[compChoice];
}

function convertToWord(choice) {
  switch(choice) {
    case "r":
      return "Rock";
    case "p":
      return "Paper";
    case "s":
      return "Scissors";
    case "l":
      return "Lizard";
    case "S":
      return "Spock";
  }
}

function win(userChoice, compChoice) {
  const user_label = "User".fontsize(4).sub();
  const comp_label = "Comp".fontsize(4).sub();
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${user_label} beats ${convertToWord(compChoice)}${comp_label}. You win!`;

  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, compChoice) {
  const user_label = "User".fontsize(4).sub();
  const comp_label = "Comp".fontsize(4).sub();
  compScore++;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${user_label} is beaten by ${convertToWord(compChoice)}${comp_label}. You lost!`;

  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, compChoice) {
  const user_label = "User".fontsize(4).sub();
  const comp_label = "Comp".fontsize(4).sub();
  result_div.innerHTML = `${convertToWord(userChoice)}${user_label} nullifies ${convertToWord(compChoice)}${comp_label}. Match is draw!`;

  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add("yellow-glow");
  setTimeout(() => userChoice_div.classList.remove("yellow-glow"), 300);
}

function play(userChoice) {
  const compChoice = getCompChoice();

  switch(userChoice + compChoice) {
    case "rs":
    case "rl":
    case "pr":
    case "pS":
    case "sp":
    case "sl":
    case "lp":
    case "lS":
    case "Sr":
    case "Ss":
        win(userChoice, compChoice);
        break;
    case "sr":
    case "lr":
    case "rp":
    case "Sp":
    case "ps":
    case "ls":
    case "pl":
    case "Sl":
    case "rS":
    case "sS":
        lose(userChoice, compChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
    case "ll":
    case "SS":
        draw(userChoice, compChoice);
  }
}

function main() {
  rock_div.addEventListener('click', () => play("r"));
  paper_div.addEventListener('click', () => play("p"));
  scissors_div.addEventListener('click', () => play("s"));
  lizard_div.addEventListener('click', () => play("l"));
  spock_div.addEventListener('click', () => play("S"));
}

main();
