'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const store = require('../store')
const responseData = require('./ui.js')

const gamesPlayed = responseData => $('#endMessage').text('You have played ' + responseData.games.length + 'game(s)')

let currentPlayer = 'X'
// let gameBoard = ['', '', '', '', '', '', '', '', '']
let gameIsOver = false

// all winnining combinations
const winningCombos = function () {
  const gameBoard = store.game.cells
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
    $('#notification').html('<img src="public/tenor.gif" alt="nye">')
    $('#endMessage').text('You have played ' + responseData.games.length + 'game(s)')
    // console.log('game is over')
    console.log(responseData.games.length)
    return true
  } else if (gameBoard.every(index => index !== '')) {
    gameIsOver = true
    $('#notification').html('<img src="public/71713888.gif" alt="future">')
    $('#endMessage').text('You have played ' + responseData.games.length + 'game(s)')
    // console.log('game is over')
    return true
  } else {
    // console.log('game is not over')
    return false
  }
}

const onBoxClick = function (event) {
  const boxNumber = $(event.target).data('box-number')
  $('#message').text('')
  // console.log(boxNumber)
  const text = $(event.target).text()
  if (!gameIsOver && text === '') {
    store.game.cells[boxNumber] = currentPlayer
    winningCombos()
    api.updateGame(boxNumber, currentPlayer, gameIsOver)
      .then((data) => console.log(data))
    $(event.target).text(currentPlayer)
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  } else if (!gameIsOver && text !== '') {
    $('#message').text('This block has already been played. Try another one.')
  }
}

const endOfGame = function () {
  if (gameIsOver === true) {
    $('.container').hide(500)
    setTimeout(function () {
      $('#endMessage').text('You have played ' + responseData.games.length + 'game(s)')
    }, 1500)
    $('#message').hide()
    $('#endMessage').show()
    currentPlayer = 'X'
    // $('#notification').text('You have played ' + responseData.games.length + 'game(s)')
  }
}

const newGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  $('.box').text('')
  $('#endMessage').text('')
  $('#message').show()
  $('#notification').text('')
  currentPlayer = 'O'
  gameIsOver = false
}
// const newGame = function () {
//   event.preventDefault()
//
//   api.newGame()
//   .then(ui.onNewGameSuccess)
//   .catch(ui.onNewGameFailure)
// }

module.exports = {
  onBoxClick,
  winningCombos,
  endOfGame,
  newGame,
  gamesPlayed
}
