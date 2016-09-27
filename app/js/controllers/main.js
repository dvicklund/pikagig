module.exports = function(app) {
  app.get('#/', function(context) {
    context.render('/templates/main.template', {
      // TODO: Connect to user DB
      'someName': 'A name of some sort'
    }, function(view) {
      $('#view').html(view)
    })
  })
}
