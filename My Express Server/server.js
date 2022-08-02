const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hello World!</h1>");
})

app.get("/about", function(req, res){
    res.send("Hey this Server is owned by Vakes")
})

app.listen(3000, function(){
    console.log("Server started at 3000");
});