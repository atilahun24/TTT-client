'use strict'

let currentPlayer = 'X'
const gameBoard = []

const onBoxClick = function (event) {
  const boxNumber = $(event.target).data('box-number')
  console.log(boxNumber)
  const text = $(event.target).text()
  if (text === '') {
    $(event.target).text(currentPlayer)
  }
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

module.exports = {
  onBoxClick,
  gameBoard
}
