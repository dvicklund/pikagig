module.exports = function(app) {
  app.get('#/profile', function(context) {
    // var user = $.get('/user', )

    context.render('/templates/profile.template', {
      //TODO: connect to user DB
      'firstName': 'David',
      'lastName': 'Vicklund'
    }, function(view) {
      $('#view').html(view)
    })
  })
}
