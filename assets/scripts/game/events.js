'use strict'

let currentPlayer = 'X'
const gameBoard = ['', '', '', '', '', '', '', '', '']
let gameIsOver = false

// all winnining combinations
const winningCombos = function () {
  // console.log(currentPlayer, ' is the current player')
  // console.log(gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] === currentPlayer, ' is if there is a win in the first row')
  // console.log(gameBoard[0], gameBoard[1], gameBoard[2], 'are the values of the first row')
  if ((gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) ||
  (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) ||
  (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) ||
  (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ||
  (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) ||
  (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) ||
  (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) ||
  (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8])) {
    gameIsOver = true
    $('#notification').text(`🐔Winner, winner chicken dinner!🐔`)
    console.log('game is over')
  } else if (gameBoard.every(index => index !== '')) {
    gameIsOver = true
    $('#notification').text('Game Over. Tis a Draw.')
    console.log('game is over')
  } else {
    console.log('game is not over')
  }
}
const onBoxClick = function (event) {
  const boxNumber = $(event.target).data('box-number')
  console.log(boxNumber)
  gameBoard[boxNumber] = currentPlayer
  const text = $(event.target).text()
  if (text === '') {
    $(event.target).text(currentPlayer)
  }
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  winningCombos()
}

module.exports = {
  onBoxClick,
  gameBoard,
  winningCombos
}
