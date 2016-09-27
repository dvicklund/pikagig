module.exports = exports = function(app) {
  require(__dirname + '/main')(app)
  require(__dirname + '/profile')(app)
  require(__dirname + '/login')(app)
  require(__dirname + '/search')(app)
  require(__dirname + '/signup')(app)
}
