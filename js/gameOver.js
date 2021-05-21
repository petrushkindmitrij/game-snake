import { getSnakeHead, snakeIntersection, onSnake } from '/js/snake.js'
import { checkCollision} from '/js/grid.js' 
import { getBombStatus, getBombPosition} from '/js/bomb.js' 

const divGameOver = document.getElementById('gameOver-layer');
const btnGameOver = document.getElementById('btn-resume-game-over');

const btnPauseOnScreen = document.getElementById('pause-btn');
const btnHelpOnScreen = document.getElementById('help-btn');

export function initialGameOverLayer() {
  btnGameOver.onclick = () => {
    divGameOver.style.display = 'none';
    restartGame();      
  };
}

export function restartGame() {
  divGameOver.style.display = 'none';   
  window.location = '/';  
}

export function checkDeath() {
  if (checkCollision(getSnakeHead()) || snakeIntersection() || (onSnake(getBombPosition()) && getBombStatus())){
    divGameOver.style.display = 'flex'; 
    btnPauseOnScreen.style.display = 'none';
    btnHelpOnScreen.style.display = 'none';
    return true;
  } else {    
    divGameOver.style.display = 'none';  
    return false;
  }

}
