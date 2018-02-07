const express = require('express');


// function angularRouter(req, res) {

//    Server-side rendering 
//   res.redirect('index.html');

// }/* Server-side rendering */


var app = express();

// directory set
app.use(express.static(__dirname + '/'));

app.get('/', function(req,res){
	res.sendFile('/index.html')
});

// app.get('*', angularRouter);

// var server = app.listen(9000, function(){
// 	var host = server.address().address;
// 	var post = server.address().port;
// 	console.log("")
// })


app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});