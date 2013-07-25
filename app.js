var express = require("express");
var app = express();
app.get('/',function(req,res){
	res.end("Hello express!");
});
app.listen(3000);
