//picking HTML element with the class of grid
const grid = document.querySelector(".grid");
//picking HTML element with Id og score
const scoreDisplay = document.getElementById("score");
const width = 28; //28 x28 =784 squares
let score = 0;
//layout of grid and what is in the squares

const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];

const squares = [];

//legend
//0 -pac-dot
//1 -wall
//2 - ghost-lair
//3 - power-pellet
//4 - empty

//draw the grid and render it
function createBoard() {
  //for loop
  for (let i = 0; i < layout.length; i++) {
    //create an element
    const square = document.createElement("div");
    //put square into grid
    grid.appendChild(square);
    //push all these squares into a new array
    //add layout
    squares.push(square);
    if (layout[i] === 0) {
      squares[i].classList.add("pac-dot");
    } else if (layout[i] === 1) {
      squares[i].classList.add("wall");
    } else if (layout[i] === 2) {
      squares[i].classList.add("ghost-lair");
    } else if (layout[i] === 3) {
      squares[i].classList.add("power-pellet");
    }
  }
}

createBoard();

//setting the position of pac-man and adding pac-man to the board

let pacmanCurrentIndex = 500;

squares[pacmanCurrentIndex].classList.add("pac-man");

//move pac-man

function movePacman(e) {
  squares[pacmanCurrentIndex].classList.remove("pac-man");

  //assigning action to each arrow key for pacman on the keyboard
  //included && because pacman was moving through walls
  //we are also disabling pacmans ability to enter ghostlair
  switch (e.keyCode) {
    //moving pacman left
    case 37:
      if (
        pacmanCurrentIndex % width !== 0 &&
        !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
        !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
      )
        pacmanCurrentIndex -= 1;

      //check if pac-man is in the left exist and ensure he comes back from the right

      if (pacmanCurrentIndex - 1 === 363) {
        pacmanCurrentIndex = 391;
      }

      break;
    //moving pacman up
    case 38:
      if (
        pacmanCurrentIndex % width >= 0 &&
        !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
        !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
      )
        pacmanCurrentIndex -= width;
      break;
    //moving pacman right
    case 39:
      if (
        pacmanCurrentIndex % width < width - 1 &&
        !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
        !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
      )
        pacmanCurrentIndex += 1;

      //if pacman moves to the left exist he will come out throught the right
      if (pacmanCurrentIndex + 1 === 392) {
        pacmanCurrentIndex = 364;
      }
      break;
    //moving pac-man down
    case 40:
      if (
        pacmanCurrentIndex + width < width * width &&
        !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
        !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
      )
        pacmanCurrentIndex += width;
      break;
  }
  squares[pacmanCurrentIndex].classList.add("pac-man");
  pacDotEaten();
  powerPelletEaten();
  checkGameOver();
  checkForWin()
}
// code which enables us to interact with pacman on the browser

document.addEventListener("keyup", movePacman);

//When pacman eats a pac dot score increases and pacdots disappear

function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    score++;
    scoreDisplay.innerHTML = score;
    squares[pacmanCurrentIndex].classList.remove("pac-dot");
  }
}

document.addEventListener("keyup", pacDotEaten);
//When pacman eats a powerpellet - ghosts become scared

function powerPelletEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
    score += 10;
    ghosts.forEach((ghost) => (ghost.isScared = true));
    setTimeout(unScareGhosts, 10000);
    squares[pacmanCurrentIndex].classList.remove("power-pellet");
  }
}

powerPelletEaten();

//make the ghosts stop appearing as aquamarine

function unScareGhosts() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
}

//creating  ghost using the constructor method

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.timerId = NaN;
    this.isScared = false;
  }
}

ghosts = [
  new Ghost("blinky", 348, 250),
  new Ghost("pinky", 376, 400),
  new Ghost("inky", 351, 300),
  new Ghost("clyde", 379, 500),
];

// draw ghosts onto the grid using for Each

ghosts.forEach((ghost) => {
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add("ghost");
});

//move the ghosts at random

ghosts.forEach((ghost) => moveGhost(ghost));

//write the function to move the ghosts

function moveGhost(ghost) {
  const directions = [-1, +1, width, -width];
  let direction = directions[Math.floor(Math.random() * directions.length)];
  console.log(direction);

  ghost.timerId = setInterval(function () {
    //     // if the next square your ghost is going to go in does not contain a wall and a ghost, you can go there
    if (
      !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
      !squares[ghost.currentIndex + direction].classList.contains("wall")
    ) {
      //you can do here
      //remove all ghost related classes
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
      //change the currentIndex to the new safe square
      ghost.currentIndex += direction;
      //redraw tthe ghost in the new safe space
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
      //else find a new direction to try
    } else direction = directions[Math.floor(Math.random() * directions.length)];
    // if the ghost is scared - satement is true
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }

    //if the ghosts is scared and pacman run into each other
    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains("pac-man")
    ) {
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        "ghost",
        "scared-ghost"
      );
      ghost.currentIndex = ghost.startIndex;
      score += 100;
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    }
    checkGameOver();
  }, ghost.speed);
}

//check for a game over

function checkGameOver() {
  if (
    squares[pacmanCurrentIndex].classList.contains("ghost") &&
    !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
  ) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keyup", movePacman);
    // setTimeout(function () {
    //   alert("Game Over!");
    // }, 500);
    scoreDisplay.innerHTML = " GAME OVER!"

  }
}

//check for a win

function checkforWin() {
  if (score === 274) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    document.removeEventListener("keyup", movePacman)
    scoreDisplay.innerHTML = " YOU WIN!"
  }
}