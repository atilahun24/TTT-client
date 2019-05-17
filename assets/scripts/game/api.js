const config = require('config.js')

const newGame = () => {
  console.log('from api newGame')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST'
  })
}

module.exports = {
  newGame
}
