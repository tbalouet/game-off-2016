var express = require('express');
var app     = express();

var Config  = require('./config'),
	conf    = new Config();

//Force launching server with environment variables
if(conf.error){
	console.error("Please define environment with NODE_ENV=dev/prod node server.js, not "+conf.nodeenv);
	return;
}

//CORS PROXY to enable fetching images from other servers
var host = '0.0.0.0';
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public', {maxAge : conf.maxAge}));

app.get('/', function(req, res){
	res.render('tetris3D_index.ejs', {mainFile : conf.mainFile, aFrameFile : conf.aFrameFile});
});

app.listen(conf.port);
console.log('Listening on port ' + conf.port);