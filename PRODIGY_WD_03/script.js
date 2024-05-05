const board = document.getElementById('board');
const status = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

function handleCellClick(event) {
const cell = event.target;
const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

if (gameState[cellIndex] !== '' || !gameActive) {
return;
}

gameState[cellIndex] = currentPlayer;
cell.textContent = currentPlayer;
cell.classList.add(currentPlayer);

checkWin();
checkDraw();

currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
status.textContent = `${currentPlayer}'s turn`;
}

function checkWin() {
for (let i = 0; i < winningConditions.length; i++) {
const [a, b, c] = winningConditions[i];

if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
gameActive = false;
status.textContent = `${gameState[a]} wins!`;
break;
}
}
}

function checkDraw() {
if (!gameState.includes('') && gameActive) {
gameActive = false;
status.textContent = 'Draw!';
}
}

function handleRestart() {
gameState = ['', '', '', '', '', '', '', '', ''];
currentPlayer = 'X';
gameActive = true;
status.textContent = `${currentPlayer}'s turn`;

document.querySelectorAll('.cell').forEach(cell => {
cell.textContent = '';
cell.classList.remove('X');
cell.classList.remove('O');
});
}

board.addEventListener('click', handleCellClick);
restartBtn.addEventListener('click', handleRestart);
