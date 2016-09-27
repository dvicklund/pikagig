module.exports = function(app) {
  app.get('#/user', function(context) {
    console.log('hit user route')
  })
}
