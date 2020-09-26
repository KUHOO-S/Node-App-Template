var data1=['Cat','Bat','Rat','Mat'];
var data2=['Caaaaatuuuu','Baaaaatuuuu','Raaaaatuuuu','Maaaaatuuuu'];
var finaldata=[data1,data2];
console.log(finaldata);
$.ajax({
    type: 'DELETE',
    url: '/todo/' + item,
    success: function (data) {
        //do something with the data via front-end framework
        location.reload();
    }
});