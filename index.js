var express = require('express')
  , app = express()
  , cors = require('cors')
  , Promise = require('bluebird')
  , Q = require('Q')
  , fs = require('fs');

  app.use(cors());

  var rw = require('./rw');

//node server
app.get('/rw/:type', function(req, res, next){
  var type = req.params.type;
  var data = 'some text string\n';
  if (type == 'write'){
    //omitted fro brevity
  }else{
    rw.read(data)
    .then(function(response){
      return {'response': response};
    })
    .catch(function(err){
      return {'index.js error': err};
    });
  }
});

app.get('/', function(req, res){
  res.sendfinile('./index.html');
})

app.listen(3000, function(){
  console.log('listening . . .')
});

function bb(){

};

function readFile1(){
  Q.nfcall('./public/file1.json', 'utf-8');
}
function readFile2(){
  Q.nfcall('./public/file2.json', 'utf-8');
}
function readFile3(){
  Q.nfcall('./public/file3.json', 'utf-8');
}