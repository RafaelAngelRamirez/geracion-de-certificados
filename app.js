var express = require("express")
var app = express()
var fs = require('fs');
var https = require('https')


app.get("/", function (req, res) {
    
  res.send("Hello World!")
})




var privateKey = fs.readFileSync( './cert/desarrollo.key' );
var certificate = fs.readFileSync( './cert/desarrollo.crt' );


var port = 3000

app.all('/', (req, res, next) => {
    res.send('en linea')
});




https
  .createServer(
    {
      key: privateKey,
      cert: certificate,
    },
    app
  )
  .listen(port)
