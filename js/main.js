import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { updateBomb, drawBomb } from './bomb.js'
import { checkCollision} from './grid.js'
import { initialSwipe} from './input.js'
import { initialPauseLayer, getPauseStatus} from './pause.js'
import { initialGameOverLayer, checkDeath} from './gameOver.js'
import { initialHelpLayer} from './help.js'

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

document.addEventListener("DOMContentLoaded", ()=>{
  initialSwipe();
  initialPauseLayer();
  initialGameOverLayer();
  initialHelpLayer();
});

function main(currentTime) {

  window.requestAnimationFrame(main)
  // console.log(checkDeath())
  if (!checkDeath()){
  

    if (!getPauseStatus()) { 
      const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
      if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

      lastRenderTime = currentTime;

      update(currentTime);
      if (!checkCollision(getSnakeHead())) {      
        draw();
      };
    } 
  }
} 

window.requestAnimationFrame(main)

function update(currentTime) {
  updateSnake();
  updateFood();
  updateBomb(currentTime);
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard);
  drawFood(gameBoard);
  drawBomb(gameBoard);
}


