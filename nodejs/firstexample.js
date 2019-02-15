


var fs=require('fs');

//function callbackFunc(callback){
for(var i=0;i<10;i++){

  console.log("처음");
  fs.readFile('example/test.txt','utf8',function(err,result){
    if(err){
      console.error(err);
      throw err;
    }
    else{
      console.error("오래걸림");
    //  callback(result);
    }
  });


console.log('마지막');}
/*
console.log("A");
callbackFunc(function (data){
  console.log(data);
  console.log("C");
})*/
