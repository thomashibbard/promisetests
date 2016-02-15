var Q = require('Q')
, fs = require('fs');

function readFile1(){
  return Q.nfcall(fs.readFile, './public/file1.json', 'utf-8');
}
function readFile2(){
  return Q.nfcall(fs.readFile, './public/file2.json', 'utf-8');
}
function readFile3(){
  return Q.nfcall(fs.readFile, './public/file3.json', 'utf-8');
}
/*
readFile1()
	.then(function(data1){
		console.log('data1', data1);
		return readFile2();
	})
	.then(function(data2){
		console.log('data2', data2);
		return readFile3();
	})
	.then(function(data3){
		console.log('data3', data3)
	})
	.catch(function(err){
		console.log('error', err)
	});
*/

var timeout1 = function(n){
	return Q.delay(1000)
		.then(function(){
			console.log('passed data 1', n);
			return 1;
			//console.log(1);
		});
}
var timeout2 = function(n){
	return Q.delay(50)
		.then(function(){
			console.log('passed data 2', n);
			return 2;
			//console.log(2);
		});
}
var timeout3 = function(n){
	return Q.delay(0)
		.then(function(){
			console.log('passed data 3', n);
			return 3
			//console.log(3);
		})
}
var fns = [timeout1, timeout2, timeout3];

function timeouts(){
	return timeout1(1)
		.then(function(data1){
			console.log('data1', data1);
			return timeout2(2);
		})
		.then(function(data2){
			console.log('data2', data2);
			return timeout3(3);
		})
		.then(function(data3){
			console.log('data3', data3);			
		})
		.catch(function(err){
			console.log('error', err);
		});
}
timeouts();













