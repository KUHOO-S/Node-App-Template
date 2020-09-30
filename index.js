var express=require('express')
var bodyParser=require('body-parser');

var app=express();

app.set('view engine','ejs');

var urlencoded=bodyParser.urlencoded({extended:false});

app.use(express.static('./public'));

var homePage=require('./controllers/homePage');

homePage(app);

app.listen(3000);

