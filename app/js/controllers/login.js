module.exports = function(app) {
  app.get('#/login', function(context) {
    context.render('/templates/login.template', {

    }, function(view) {
      var thisThing = 'this thing'

      function signIn() {
        console.log('signing in or whatever')
      }

      $('#view').html(view)
    })
  })
}
