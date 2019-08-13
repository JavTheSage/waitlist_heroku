var express = require("express");
 
var app = express();
 var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 app.get("/", function(req, res) {
    res.sendFile("/home.html", {root: __dirname});
  });

  app.get("/tables", function(req, res) {
    res.sendFile("/tables.html", {root: __dirname});
  });

  app.get("/reserve", function(req, res) {
    res.sendFile("/reserve.html", {root: __dirname});
  });




  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });