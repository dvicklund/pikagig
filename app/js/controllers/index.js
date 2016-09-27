module.exports = exports = function(app) {
  require(__dirname + '/main')(app)
  require(__dirname + '/user')(app)
  require(__dirname + '/profile')(app)
}
