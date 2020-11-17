var express = require("express");
var app = express();

app.use(express.static("public"))


app.get('/', function(req, res){
    res.render("home.ejs");
});






app.get("*", function(req, res){
    res.send("Page Under Construction");
});

app.listen(3000, function(){
    console.log('Server started on localhost:3000');
});