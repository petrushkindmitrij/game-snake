let score = 0;
const scoreVal = document.getElementById('score-val');

export function updateScore(delScore) {
    score += delScore;
    scoreVal.innerText = score;
}