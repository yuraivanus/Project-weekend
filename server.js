const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));

io.sockets.on('connection', function (socket){
});




//app.post('/test', function (req,res) {
//  console.log (req.body);
//  res.sendStatus(200);
//})

//Усі адреси контролюються клієнтським ангуляром
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


server.listen(port, function (err) {
    if (err) throw err;
    console.log('Server start on port 8000!');
});
