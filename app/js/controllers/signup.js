module.exports = function(app) {
  app.get('#/signup', function(context) {
    context.render('/templates/signup.template', {}, function(view) {
      $('#view').html(view)
    })
  })
}
