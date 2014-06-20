var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	tweets = [];
	
app.get('/', function(req, res){
	res.send('Welcome');
});

app.post('/send', bodyParser(), function(req, res){
	if (req.body && req.body.tweet) {
		tweets.push(req.body.tweet);
		res.send({status:"ok", message:"Tweet received"});
	} else {
		res.send({status:"nok", message:"No tweet received"});
	}
});

app.get('/tweets', function(req, res){
	res.send(tweets);
});

app.get('/*', function(req, res){
	res.send('404: Page not found');
});

app.listen(5000, function(){
	console.log('Listening on port: 5000');
});