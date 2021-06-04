//  NODE JS: V8 engine
// Ryan Dahl is the creator of NODE JS
// Node is not a Programming language
// Its a runtime environment for executing JS code
// How Node Works: Non Blocking Asynchronous: Single threade
// Blocking : Synchronous
// NOde Applications are asynchronous by default.

// Run First Application

// var fs = require('fs');
// fs.readFile('notes.txt', (err, data) => {
//     if(err){
//         console.log("Error: ",err.message);
//     }
//     else{
//         console.log(data.toString());
//     }
// })

// npmjs.com for packages purpose

// Package creation : npm init -y
// download email-validator : npm i email-validator

// var emailValidator = require('email-validator');
// var result = emailValidator.validate('Naveen@gmail.com');
// console.log(result);

// REPL: Read evalute print loop. To enable we need to use node + enter

// Call Backs: There are two types of blocking IO:
// Call backs are anonymous functions. Mainly used for thr purpose of asynchronus

// 1 Synchronous : The control waits untill the request is process and get response.
// Advantages: data consistency, dis: it hits the performance 

// Example:
// var fs = require('fs');
// var res = fs.readFileSync('notes.txt');
// if(res){
//     console.log(res.toString());
// }
// console.log("Line 44")

// 2. asynchronus : the control does not waits untill it gest the response

// var fs = require('fs');
// fs.readFile('notes.txt', (err, data) => {
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log(data.toString());
//     }
// })

// console.log("Line 58");

// Event-Driven Programming:
// Node JS follows eve Driven programming i.e., each request it takes will be resolved by events.
// It provides events modules to work with events.
// Any action is an event. handeled functions
// TO create our own events, we can use the concept of Event Emitter
// Example: 
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on('connect', function(){
//     console.log('Connected')
// });
// eventEmitter.emit('connect');

// Working with file system:
// var fs = require('fs');
// var data = "Hello world!";
// fs.writeFile('index.txt', data,(err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("Writing sucess")
//     }
// })

// appending
// var fs = require('fs');
// var data = "Hello world! I am naveen";
// fs.appendFile('index.txt', data, (err)=>{
//     if(err){
//         console.log("Error", err.message);
//     }
//     else{
//         console.log("Appending sucess")
//     }
// })

// delete file

// var fs = require("fs");
// fs.unlink('index.txt', (err)=>{
//     if(err){
//         console.log("Error", err.message);
//     }
//     else{
//         console.log("Deleted")
//     }
// })

// GLobal Objects
// require() => load any predefined modules than we can use require
// Example: 
// var fs = require("fs");
// console.log(fs);


// console.log(__dirname);
// console.log(__filename);

//setTimeout: 
// setTimeout(()=>{
//     console.log("Server listening")
// }, 1000)

//setInterval
// setInterval(()=>{
//     console.log("i am being executing")
// }, 1000)

// exports
// File1:
// var s = require(./file2.js);
// s.f1();
//File 2:
// exports.f1 = function(){
//     console.log("this is f2")
// }

// Streams: A streams is a flow of data in the form of chunks
// 4 types:
// 1. read streams
// Example:
// var fs = require('fs');
// var readStream = fs.createReadStream('package.json');
// var data = "";
// readStream.on('data', (chunk)=>{
//     data+=chunk
// })
// readStream.on('end',()=>{
//     console.log("Streams finish");
//     console.log(data)
// })
// readStream.on('error',(err)=>{
//     console.log(err.message);
// })

// 2. writeFileStream: To write the data in the form of chunks
// Example:
// var fs = require('fs');
// var writeStream = fs.createWriteStream('text.txt');
// var data = "Hello";
// writeStream.write(data);
// writeStream.end();

// writeStream.on('finish', function(){
//     console.log("Writing finish");
// })
// writeStream.on('error', function(err){
//     console.log(err.message)
// })

// 3. duplex: at the same time readfile & write file;
// Example: 
// var fs = require('fs');
// var readStream = fs.createReadStream('package.json');
// var writeStream = fs.createWriteStream('package1.json');
// readStream.pipe(writeStream);
// writeStream.on('finish', ()=>{
//     console.log("Write finished")
// })
// writeStream.on('error',(err)=>{
//     console.log(err.message)
// })

// 4. transform : same as duplex but it performance intermediate operation
// Example:
// var fs = require('fs');
// var zlib = require('zlib');
// var readStream = fs.createReadStream('package.json');
// var writeStream = fs.createWriteStream('package1.json.gz');
// readStream.pipe(zlib.createGzip()).pipe(writeStream);
// writeStream.on('finish', ()=>{
//     console.log("Write finished")
// })
// writeStream.on('error',(err)=>{
//     console.log(err.message)
// })

// Modules : Node JS provides needfull of modules to perform different operation

// fs, zlib, http, crypto, path, url, os etc

// os module
// var os = require('os');
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.networkInterfaces());

// Path module
// var path = require('path');
// console.log(path.extname('text.js'));
// console.log(path.isAbsolute('returname'))
// var filename = "abc.js";
// console.log(path.extname(filename)=='.js');
// console.log(path.basename(filename));

// http
// var http = require('http');
// var server = http.createServer((req, res)=>{
//     res.end("Hello world!");
// })
// server.listen(9013, ()=>{
//     console.log("Server started")
// })

// var http = require('http');
// var server = http.createServer(function(request, response){
//     response.end("Hello")
// })
// server.listen(9015, function(){
//     console.log("Server listening  ")
// })

// URL : thisi module is used to parse url
// const url = new URL("http://facebook.com")
// console.log(url);
// var url = require("url");
// var obj = url.parse("http://facebook.com");
// console.log(obj.hostname);
// console.log(obj.query);
// console.log(obj.protocol);

// crypto : purpose of encrypt decrypt
// encrypt: 
// var crypto = require('crypto');
// var myKey = crypto.createCipher('aes-128-cbc', 'mypassword')
// var myStr = myKey.update('abc', 'utf-8', 'hex');
// myStr +=myKey.final('hex');
// console.log(myStr);
//34feb914c099df25794bf9ccb85bea72

// Decrypt
// var crypto = require('crypto');
// var myKey = crypto.createDecipher('aes-128-cbc', 'mypassword');
// var myStr = myKey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf-8');
// myStr += myKey.final('utf-8');
// console.log(myStr);

// Text Encodes:
// const encoder = new TextEncoder();
// const e = encoder.encode("Welcome")
// console.log(e);

// Decoder
// const decoder = new TextDecoder();
// const d = decoder.decode(e);
// console.log(d);

