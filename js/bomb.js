import { onSnake, expandSnake } from 'js/snake.js'
import { randomGridPosition } from 'js/grid.js'

let bomb = { x: 2, y: 4};
let bombStatus = false;
let bombEnd = 0; // Время исчезновения бомбы
let bombDelay = 0; // временная задержка перед появлением новой бомбы

const bombElement = document.createElement('div');

export function updateBomb(currentTime) {   
  // console.log(bombEnd - currentTime);
  // console.log(bombEnd);
  if (bombEnd <= currentTime && bombStatus) {
    // console.log('end');    

    bombDelay = getRandomTime(currentTime+3000, currentTime+40000);
    bombStatus = false;
  } else if (bombDelay <= currentTime && !bombStatus) {    
    // console.log('set');

    bombEnd = getRandomTime(currentTime+3000, currentTime+30000);
    bomb = getRandomBombPosition();
    bombStatus = true;
  }
  
}

export function drawBomb(gameBoard) {
  if (bombStatus) {
    bombElement.style.gridRowStart = bomb.y;
    bombElement.style.gridColumnStart = bomb.x;
    bombElement.classList.add('bomb');
    gameBoard.appendChild(bombElement);
  } else {
    bombElement.remove;
  }
}

function getRandomBombPosition() {
  let newBombPosition;
  do {
    newBombPosition = randomGridPosition();
    // console.log(newBombPosition);
  } while(newBombPosition == null || onSnake(newBombPosition));
  return newBombPosition;
}

export function getRandomTime(startInterval, endInterval) {
  return Math.floor(Math.random() * (endInterval - startInterval + 1)) + startInterval;
}

export function getBombStatus(){
  return bombStatus;
}

export function getBombPosition(){
  return bomb;
}