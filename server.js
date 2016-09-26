var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/build'));

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/pikagig_dev')

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('Server listening on port ' + (port || 3000));
});
