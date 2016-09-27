module.exports = function(app) {
  app.get('#/login', function(context) {
    context.render('/templates/login.template', {

    }, function(view) {
      $('#view').html(view)
    })
  })
}
