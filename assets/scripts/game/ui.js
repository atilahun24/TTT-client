const store = require('../store')

const newGameSuccess = function (data) {
  store.game = data.game
  console.log(store.game)
  $('.box').text('')
  $('.container').show(600)
}

const newGameFailure = function () {
  $('#message').text('This has been an absolute misfire')
}

// const onUpdateSuccess = function () {
//
// }

module.exports = {
  newGameSuccess,
  newGameFailure
}
