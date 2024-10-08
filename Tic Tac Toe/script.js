let currentPlayer = "X";
const NUMBER_OF_ROWS = 4;
const turns = NUMBER_OF_ROWS ** 2;
let turnCounter = 0;

const createBoardArray = () => {
  let board = [];

  for (let row = 0; row < NUMBER_OF_ROWS; row++) {
    board.push(Array.from({ length: NUMBER_OF_ROWS }, () => "_"));
  }
  return board;
};

let board = createBoardArray();

const resetButton = document.getElementById("reset");
resetButton.onkeydown = (event) => {
  event.key === "Enter" ? resetBoard() : true;
};

const getCellPlacement = (index, numOfRows) => {
  const row = Math.floor(index / numOfRows);
  const col = index % numOfRows;

  return [row, col];
};

const checkRows = (currentPlayer) => {
  let column = 0;

  for (let row = 0; row < NUMBER_OF_ROWS; row++) {
    while (column < NUMBER_OF_ROWS) {
      if (board[row][column] !== currentPlayer) {
        column = 0;
        break;
      }
      column++;
    }
    if (column === NUMBER_OF_ROWS) {
      return true;
    }
  }
};

const checkColumns = (currentPlayer) => {
  let row = 0;

  for (let column = 0; column < NUMBER_OF_ROWS; column++) {
    while (row < NUMBER_OF_ROWS) {
      if (board[row][column] !== currentPlayer) {
        row = 0;
        break;
      }
      row++;
    }
    if (row === NUMBER_OF_ROWS) {
      return true;
    }
  }
};

const checkDiagonals = (currentPlayer) => {
  let count = 0;

  while (count < NUMBER_OF_ROWS) {
    if (board[count][count] !== currentPlayer) {
      count = 0;
      break;
    }
    count++;
  }
  if (count === NUMBER_OF_ROWS) {
    return true;
  }
};

const checkReverseDiagonals = () => {
  let count = 0;

  while (count < NUMBER_OF_ROWS) {
    if (board[count][NUMBER_OF_ROWS - 1 - count] !== currentPlayer) {
      count = 0;
      break;
    }
    count++;
  }
  if (count === NUMBER_OF_ROWS) {
    return true;
  }
};

const checkWin = (currentPlayer) => {
  return (
    checkRows(currentPlayer) ||
    checkColumns(currentPlayer) ||
    checkDiagonals(currentPlayer) ||
    checkReverseDiagonals(currentPlayer)
  );
};

const resetBoard = () => {
  document.querySelector(".board").remove();
  createBoard();

  board = createBoardArray();

  currentPlayer = "X";
  turnCounter = 0;
};

const runWinEvent = (currentPlayer) => {
  setTimeout(() => {
    alert(`Player ${currentPlayer} won!`);
    resetBoard();
  }, 100);
};

const runDrawEvent = () => {
  setTimeout(() => {
    alert("Draw!");
    resetBoard();
  }, 100);
};

const drawInCell = (cell, currentPlayer) => {
  cell.querySelector(".value").textContent = currentPlayer;
  cell.classList.add(`cell--${currentPlayer}`);
};

const cellClickHandler = (event, index) => {
  const cell = event.target;
  const [row, col] = getCellPlacement(index, NUMBER_OF_ROWS);

  if (board[row][col] === "_") {
    turnCounter++;
    board[row][col] = currentPlayer;
    drawInCell(cell, currentPlayer);

    if (checkWin(currentPlayer)) {
      runWinEvent(currentPlayer);
    } else {
      if (turnCounter === turns) runDrawEvent();

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
};

const createCell = (index) => {
  const cellElementString = `<div class="cell" role="button" tabindex="${
    index + 1
  }"><span class="value"></span></div>`;
  const cellElement = document
    .createRange()
    .createContextualFragment(cellElementString);

  cellElement.querySelector(".cell").onclick = (event) => {
    cellClickHandler(event, index);
  };
  cellElement.querySelector(".cell").onkeydown = (event) => {
    event.key === "Enter" ? cellClickHandler(event, index) : true;
  };

  return cellElement;
};

const createBoard = () => {
  const container = document.querySelector(".container");
  const board = document.createElement("div");

  board.classList.add("board");

  for (let i = 0; i < NUMBER_OF_ROWS ** 2; i++) {
    const cellElement = createCell(i);

    board.appendChild(cellElement);
    document.documentElement.style.setProperty("--grid-rows", NUMBER_OF_ROWS);
  }

  container.insertAdjacentElement("afterbegin", board);
};

resetButton.addEventListener("click", resetBoard);

createBoard();
