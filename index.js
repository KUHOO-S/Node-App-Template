var express=require('express')
var bodyParser=require('body-parser');

var app=express();

app.set('view engine','ejs');

var urlencoded=bodyParser.urlencoded({extended:false});

app.use(express.static('./public'));

var todoController=require('./controllers/todoController');

todoController(app);

console.log("hdfsdkj")
app.listen(3000);

