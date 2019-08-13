var express = require("express");
 
var app = express();
 var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 app.get("/", function(req, res) {
    res.sendFile("waitlist_heroku/index.html", {root: waitlist_heroku});
  });

  app.get("/tables", function(req, res) {
    res.json(tables);
  });

  app.get("/reserve", function(req, res) {
    res.json(reserve);
  });




  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });