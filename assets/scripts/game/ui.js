const store = require('../store')

const newGameSuccess = function (data) {
  store.game = data.game
  // console.log(store.game)
  $('.box').text('')
  $('#wholeContainer').removeClass('hidden')
  $('#createForHide').removeClass('hidden')
  $('#notification').removeClass('hidden')
}

const newGameFailure = function () {
  $('#message').text('This has been an absolute misfire')
}

const getAllGamesSuccess = function (responseData) {
  $('#endMessage').removeClass('hidden')
  $('#endMessage').text('You have played ' + responseData.games.length + ' games!')
}
//

// const onUpdateSuccess = function () {
//
// }

module.exports = {
  newGameSuccess,
  newGameFailure,
  getAllGamesSuccess
}
