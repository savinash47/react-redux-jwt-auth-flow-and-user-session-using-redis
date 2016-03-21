var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var webpackDev = require('webpack-dev-middleware')
var webpackHot = require('webpack-hot-middleware')
var webpack = require('webpack')
var config = require('./webpack.config.js');
var path = require('path')
var PORT = 8888;
var moment = require('moment')
var client = require('./utils/redisClient.js')
var redis = require('redis')

var isProduction = process.env === 'production';
var publicPath = path.resolve(__dirname, 'public')
var compiler = webpack(config)

var generateToken = require('./utils/generateToken.js')
var verifyToken = require('./utils/verifyToken.js')
var expireIn = moment().unix() + 5*60

app.use(bodyParser.json());
app.set('port', process.env.PORT || PORT);

app.use(webpackDev(compiler,{
	publicPath: config.output.publicPath,
	stats: {
    	colors: true,
    	hash: false,
      timings: true,
      chunks: false,
    	chunkModules: false,
    	modules: false
    }
}));

app.use(webpackHot(compiler));

app.use(express.static(publicPath))

//handles page refreshes for single page app and get requests from server
app.get('*', function(req, res, next){
  if (req.accepts('html')) res.sendFile(path.join(__dirname,'public/index.html'))
  else next()
})

app.post('/login',function(req,res){
  console.log(req.body)
  var useremail = req.body.email;
  var password = req.body.password;
  if(useremail === 'email@email.com' && password === 'password1@'){
    var token = generateToken(useremail)
    client.set(useremail,token, function(err,reply){
      if(err){
        res.status(500).send()
      }
      if(reply){
        //expire token in 5 minutes here but for standard use You should use 7 days
       
        client.expireat(useremail,expireIn)
        res.json({token:token})
      }
      else {
        res.status(500).send()
      }
    })
  }
  else {
    res.status(401).json({Error: 'Not a valid User'})
  }
})

app.post('/logout', function(req,res){
  //optionally you can remove data from the redis server or keep the token saved for the user to fetch it in future again
    res.status(200).json({message: 'logout success'})
})

app.post('/refresh', function(req,res){
    var token = req.get('Auth')
    console.log(token)
    if(token !== null){
      var userEmail = verifyToken(token)
      client.get(userEmail, function(err,reply){
        if(token === reply){
          client.expireat(userEmail,expireIn,redis.print)
          res.status(200).json({message: 'success'})
        }
        else {
          res.status(500).send()
        }
      })
    }
})

http.createServer(app).listen(app.get('port'), function(err){
	if(err){
		console.error(err.toString())
	}
	console.log('Server Started')
})