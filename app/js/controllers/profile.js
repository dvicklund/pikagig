module.exports = function(app) {
  app.get('#/profile', function(context) {
    console.log('profile route hit')
  })
}
