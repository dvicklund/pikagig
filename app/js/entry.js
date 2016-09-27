/* This script assumes that vars Sammy and jQuery ($) have been pre-loaded into
    the global namespace */
require(__dirname + '/anim')()

var app = Sammy('body')
app.use(Sammy.Template)

require(__dirname + '/controllers/index')(app)

$(document).ready(function() {
  app.run('#/')
})
