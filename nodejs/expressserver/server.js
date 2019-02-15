var express = require('express')
var app = express()
var request = require('request');

app.get('/test',function(err,res){

request('http://www.naver.com', function(error,response,body){

res.send(body);});

}
)

app.listen(3000);
