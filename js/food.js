import { onSnake, expandSnake } from 'js/snake.js'
import { randomGridPosition } from 'js/grid.js'
import { updateScore} from 'js/score.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 10;
const DEL_SCORE = 10; // приращение счета

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    updateScore(DEL_SCORE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}