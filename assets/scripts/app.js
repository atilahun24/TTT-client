'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/events.js')
const authEvents = require('./auth/events')

$(() => {
  // your JS code goes here
  $('.box').on('click', gameEvents.onBoxClick)
  $('.box').on('click', gameEvents.onNewGame)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
