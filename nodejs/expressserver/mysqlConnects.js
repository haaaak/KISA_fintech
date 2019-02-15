var express = require('express')
var app = express()
var path=require('path');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'wogkr1929!',
  database : 'test'
});

connection.connect();
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');


app.post("/user",function(err,res){

})


app.get("/view",function(err,res){

res.render('index');

})
app.get("/user",function(err,res){
  res.send('<input type="text" name="username"></input>'+
'<button>submit</button>');
})


app.get('/',function(err,res){
  connection.query('INSERT INTO user SET ?', {id: 2}, function (error, results, fields) {
  if (error) throw error;
  res.send(results);
});
})

app.listen(3000);
