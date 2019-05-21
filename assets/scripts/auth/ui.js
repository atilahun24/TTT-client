'use strict'

const store = require('../store.js')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('You have successfully signed up!')
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Sign up failed :( ')
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text("You're in! Welcome back!")
  $('#sign-out2').removeClass('hidden')
  $('#change-pw2').removeClass('hidden')

  // whenever we sign in successfully, the user is returned in the response so we store it
  // for any of our authenticated API calls
  // 'responseData.user' contains 'responseData.user.token'

  store.user = responseData.user
  console.log('store is', store)
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
  $('#message').html('<img src="public/giphy-2.gif" alt="a">')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onChangePasswordSuccess = () => {
  $('#message').text('changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onChangePasswordFailure = () => {
  $('#message').text('change password failed ')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignOutSuccess = () => {
  $('#message').text('Hate to see you go :/')
  $('#message').addClass('hidden')
}

const onSignOutFailure = () => {
  $('#message').text('sign out failed ')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
