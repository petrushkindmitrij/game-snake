export const MODE_OFF_WALL = true; // Режим без стен
const GRID_SIZE = 23;

export function getGridSize() {
  return GRID_SIZE;
}

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}

export function checkCollision(position) {
  return (
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  )
}