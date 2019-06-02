'use strict'

const store = require('../store.js')

const onSignUpSuccess = responseData => {
  // console.log('success', responseData)
  $('#message').removeClass('hidden')
  $('#message').text('You have successfully signed up!')
  $('form').trigger('reset')
  $('#sign-up2').addClass('hidden')
}

const onSignUpFailure = responseData => {
  // console.log('failure', responseData)
  $('#message').removeClass('hidden')
  $('#message').text('Sign up failed :( ')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  // console.log('success', responseData)
  $('#createForHide').removeClass('hidden')
  $('#message').removeClass('hidden')
  $('#message').text("You're in! Welcome!")
  $('#sign-out2').removeClass('hidden')
  $('#change-pw2').removeClass('hidden')
  // $('#wholeContainer').removeClass('hidden')
  $('#getAllGames').removeClass('hidden')
  $('#sign-in2').addClass('hidden')
  $('#sign-up2').addClass('hidden')
  $('form').trigger('reset')
  // whenever we sign in successfully, the user is returned in the response so we store it
  // for any of our authenticated API calls
  // 'responseData.user' contains 'responseData.user.token'

  store.user = responseData.user
  // console.log('store is', store)
}

const onSignInFailure = responseData => {
  // console.log('failure', responseData)
  $('#message').html('<img src="public/giphy-2.gif" alt="a">')
  $('#message').removeClass('hidden')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#message').text('changed password successfully!')
  // $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#message').text('change password failed ')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Hate to see you go :/')
  setTimeout(() => $('#message').addClass('hidden'), 2500)
  $('#sign-out2').addClass('hidden')
  $('#change-pw2').addClass('hidden')
  $('#wholeContainer').addClass('hidden')
  $('#createForHide').addClass('hidden')
  $('#notification').addClass('hidden')
  $('#getAllGames').addClass('hidden')
  $('#sign-in2').removeClass('hidden')
  $('#sign-up2').removeClass('hidden')
  $('#endMessage').addClass('hidden')
}

const onSignOutFailure = () => {
  $('#message').text('sign out failed ')
  // $('#message').removeClass()
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
