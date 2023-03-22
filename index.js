const intro = document.getElementById("intro");
const introEnd = document.getElementById("intro-end");
const gifContainer = document.getElementById("gif-container");
const fightButton = document.getElementById("fight-me-button");
const picContainer = document.getElementById("pic-container");
const gameWindows = document.getElementById("game-windows");
const ganador = document.getElementById("ganador");
const contadorHuman = document.getElementById("human");
const contadorAI = document.getElementById("ai");
const scoreWindow = document.getElementById("score-window");
const pantallaGanador = document.getElementById("pantalla-ganador");
const pantallaPerdedor = document.getElementById("pantalla-perdedor");
const botonGanador = document.getElementById("ganador-button");
const botonPerdedor = document.getElementById("perdedor-button");
const rpsc = ["rock", "paper", "scissor"];
let user = "";
let compScore = 0;
let userScore = 0;

// Wait for the animation on the intro to end before hiding it and showing the game
introEnd.addEventListener("animationend", () => {
  setTimeout(() => {
    intro.style.display = "none";
    gifContainer.style.display = "flex";
  }, "1000");
});

// Show the game when the "Fight me" button is clicked
fightButton.addEventListener("click", () => {
  gifContainer.style.display = "none";
  gameWindows.style.display = "flex";
  scoreWindow.style.display = "flex";
});

// Helper function to return a random choice from "rock", "paper", "scissor"
const computerChoice = () => {
  return rpsc[Math.floor(Math.random() * rpsc.length)];
};

picContainer.addEventListener("click", (event) => {
  if (event.target.id === "rock-button") {
    user = rpsc[0];
  } else if (event.target.id === "paper-button") {
    user = rpsc[1];
  } else if (event.target.id === "scissor-button") {
    user = rpsc[2];
  }
  juego(user, computerChoice());
  contadorHuman.lastElementChild.textContent = userScore;
  contadorAI.lastElementChild.textContent = compScore;

  condicionGanar();
});


// Determine who won the game and update the score
const juego = (user, cpu) => {
  if (user === cpu) {
    ganador.textContent = "It's a tie";
  } else if (
    (user === "rock" && cpu === "scissor") ||
    (user === "scissor" && cpu === "paper") ||
    (user === "paper" && cpu === "rock")
  ) {
    ganador.textContent = "User won";
    userScore++;
  } else {
    ganador.textContent = "Computer won";
    compScore++;
  }
};

// Check if there's a winner and show the appropriate screen
const condicionGanar = () => {
  if (userScore === 5) {
    gameWindows.style.display = "none";
    scoreWindow.style.display = "none";
    pantallaGanador.style.display = "flex";
  } else if (compScore === 5) {
    gameWindows.style.display = "none";
    scoreWindow.style.display = "none";
    pantallaPerdedor.style.display = "flex";
  }
};

// Handle clicks on the "Play again" button when the user wins
botonGanador.addEventListener("click", () => {
  pantallaGanador.style.display = "none";
  gameWindows.style.display = "flex";
  scoreWindow.style.display = "flex";
  user = "";
  compScore = 0;
  userScore = 0;
  contadorHuman.lastElementChild.textContent = userScore;
  contadorAI.lastElementChild.textContent = compScore;
  ganador.textContent = "";
});

botonPerdedor.addEventListener("click", () => {
  pantallaPerdedor.style.display = "none";
  gameWindows.style.display = "flex";
  scoreWindow.style.display = "flex";
  user = "";
  compScore = 0;
  userScore = 0;
  contadorHuman.lastElementChild.textContent = userScore;
  contadorAI.lastElementChild.textContent = compScore;
  ganador.textContent = "";
});
