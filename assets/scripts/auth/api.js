'use strict'

const config = require('config.js')
const store = require('store')

const signUp = formData => {
  console.log('from api signUp')

  return $.ajax({
    url: config.apiUrl + '/sign-up.sh',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  console.log('from api signIn')

  return $.ajax({
    url: config.apiUrl + '/sign-in.sh',
    method: 'POST',
    data: formData
  })
}

const changePassword = formData => {
  console.log('from api changePassword')
  console.log('store is', store)

  return $.ajax({
    url: config.apiUrl + '/change-password.sh',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = () => {
  console.log('from api signOut')

  return $.ajax({
    url: config.apiUrl + '/sign-out.sh',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = () => {
  console.log('from api newGame')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST'
  })
}

// need an Authorization header to chenge password
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGame
}
