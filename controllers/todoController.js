var data1=['Cat','Bat','Rat','Mat'];
var data2=['Caaaaatuuuu','Baaaaatuuuu','Raaaaatuuuu','Maaaaatuuuu'];
var finaldata=[data1,data2];
console.log(finaldata);

module.exports=function(app)
{
    app.get('/home',function(req,res){

        res.render('todo',{datatodo:finaldata});
    });
    app.get('/',function(req,res){
        res.render('index',{datatodo:finaldata});

    });
};