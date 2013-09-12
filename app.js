#!/bin/env node
var express = require("express");
var app = express();

var ejs = require('ejs');

app.use('/static',express.static(__dirname + "/static"));
app.set("views",__dirname + '/view/');
app.set("view engine","ejs");
//app.engine("html",require('ejs').renderFile);

app.get('/',function(req,res){
	ejs.renderFile('view/frame.html',{},function(err,html){
		if(err){
			console.error(err);
		}else{
			res.end(html);
		}
	});
});

app.get('/index.html',function(req,res){
	app.render('frame',{},function(err,html){
		if(err){
                        console.error(err);
                }else{
			res.setHeader("Content-Type","text/html");
                        res.end(html);
                }
	});
})
// port has been changed
app.listen(3005);
