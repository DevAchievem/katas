const generateBoard = (whiteQueen, blackQueen) => {

  let chessboard = [];
  let times = 8;

  for (let i = 0; i < times; i++) {
    chessboard[i] = [];
    for (let n = 0; n < times; n++) {
      chessboard[i][n] = 0;
    }
  }

  chessboard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessboard[blackQueen[0]][blackQueen[1]] = 1;

  return chessboard;
};

const queenThreat = (board) => {

  let array = [];

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (board[x][y] === 1) {
        array.push(x);
        array.push(y);
      }
    }
  }

  let whiteX = array[0];
  let whiteY = array[1];
  let blackX = array[2];
  let blackY = array[3];

  if (whiteY === blackY || whiteX === blackX || whiteY - blackY === blackX - whiteX ||
    whiteX - blackX === whiteY - blackY || whiteY + blackY === whiteX + blackX) {
    return true;
  } else {
    return false;
  }
};

// let whiteQueen = [0, 0]
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));