module.exports = function(app) {
  app.get('#/search', function(context) {
    context.render('/templates/search.template', {

    }, function(view) {
      $('#view').html(view)
    })
  })
}
