import { checkDeath, restartGame } from '/js/gameOver.js';
import { getPauseStatus, pauseToggle} from '/js/pause.js'
import { getHelpStatus, helpToggle} from '/js/help.js'

// -------------Для свайпов----------------
const MIN_DIST = 30;
const  gameBoard = document.getElementById("game-board");
let startPointX,
  startPointY;
let moved = false;
// ---------------------------------------

let inputDirection = { x: 0, y: -1 };
let lastInputDirection = { x: 0, y: 0 };
const body = document.body;

window.addEventListener('keydown', e => {
  switch (e.key) {
    
    case 'ArrowUp':
    case 'W':
    case 'w':
    case 'Ц':
    case 'ц':
      if (lastInputDirection.y != 0 || getPauseStatus()) break;
      inputDirection = { x: 0, y: -1 };
      break;

    case 'ArrowDown':
    case 'S':
    case 's':
    case 'Ы':
    case 'ы':
      if (lastInputDirection.y != 0 || getPauseStatus()) break;
      inputDirection = { x: 0, y: 1 };
      break;

    case 'ArrowLeft':
    case 'A':
    case 'a':
    case 'Ф':
    case 'ф':
      if (lastInputDirection.x != 0 || getPauseStatus()) break;
      inputDirection = { x: -1, y: 0 };
      break;

    case 'ArrowRight':
    case 'D':
    case 'd':
    case 'В':
    case 'в':      
      if (lastInputDirection.x != 0 || getPauseStatus()) break;
      inputDirection = { x: 1, y: 0 };
      break

      case 'H':
      case 'h':
      case 'Р':
      case 'р':
      if (checkDeath()) {
        restartGame();
      }
      helpToggle();      
      break;    

    case 'Escape':
      if (!checkDeath()) {      
        pauseToggle();
      }
      break;     

    case 'Enter':
      if (getHelpStatus()) {
        helpToggle();
      } else if (getPauseStatus()) {
        pauseToggle();
      }
      if (checkDeath()) {
        restartGame();
      }
      break;
  }
})

// --------------------Для свайпов---------------------------
export function initialSwipe(){
     gameBoard.addEventListener("touchmove", move);
     gameBoard.addEventListener("touchstart", touch);
     gameBoard.addEventListener("touchend", () => {
      setTimeout(() => {
        moved = !moved;
      }, 200);
    });
}

function touch(e) {
  e.preventDefault();
  startPointX = e.changedTouches[0].pageX;
  startPointY = e.changedTouches[0].pageY;
}

function move(e) {
  if (moved) {
    return;
  }
  e.preventDefault();
  if (e.changedTouches[0].pageY < startPointY - MIN_DIST && Math.abs(startPointX - e.changedTouches[0].pageX) < Math.abs(startPointY - e.changedTouches[0].pageY)) {
    console.log("вверх");
    moved = true;
    if (lastInputDirection.y != 0 || getPauseStatus()) return;
    inputDirection = { x: 0, y: -1 };
  }
  if (e.changedTouches[0].pageY > startPointY + MIN_DIST && Math.abs(startPointX - e.changedTouches[0].pageX) < Math.abs(startPointY - e.changedTouches[0].pageY)) {
    console.log("вниз");
    moved = true;
    if (lastInputDirection.y != 0 || getPauseStatus()) return;
    inputDirection = { x: 0, y: 1 };
  }
  if (e.changedTouches[0].pageX < startPointX - MIN_DIST && Math.abs(startPointY - e.changedTouches[0].pageY) < Math.abs(startPointX - e.changedTouches[0].pageX)) {
    console.log("налево");
    moved = true;
    if (lastInputDirection.x != 0 || getPauseStatus()) return;
    inputDirection = { x: -1, y: 0 };
  }
  if (e.changedTouches[0].pageX > startPointX + MIN_DIST && Math.abs(startPointY - e.changedTouches[0].pageY) < Math.abs(startPointX - e.changedTouches[0].pageX)) {
    console.log("направо");
    moved = true;
    if (lastInputDirection.x != 0 || getPauseStatus()) return;
    inputDirection = { x: 1, y: 0 };
  }
}
//----------------------------------------------------------------------------------------------

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
