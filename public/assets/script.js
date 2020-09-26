var list1 = [];
var list2 = [];

$(document).ready(function () {
    $("#col2").css({ "pointer-events": "none" });

    $('#list-1 li').each(function (i) {
        list1.push($(this).text());
    });

    console.log(list1);

    $('#list-2 li').each(function (i) {
        list2.push($(this).text());
    });

    console.log(list2);




    $('#list-1 li').on('click', function () {
        console.log("sobo");
        var item = $(this).text();

        $("#col2").css({ "pointer-events": "auto", "background": "#090d13" });

        $('#final-box').append("<p>" + item + " </p>");


        $(this).remove();
    });

    $('#list-2 li').on('click', function () {

        var item = $(this).text();

        $('#final-box').append("<p>" + item + " </p>");

        $(this).remove();
    });


    /*            $('button').on('click',function () {
                $('#final-box').empty();
                $('#list-1').empty();            
                $('#list-2').empty();   
    
                for (var i = 0; i < list1.length; i++) {
                    item = list1[i];
                    $('#list-1').append("<li>" + item + "</li>");
    
    
                }
                for (var i = 0; i < list2.length; i++) {
                    item = list2[i];
                    $('#list-2').append("<li>" + item + "</li>");
    
    
                }
                
                list1 = [];
                list2 = [];
                $("#col2").css({ "pointer-events": "none" ,"background": "#212325"});
               
            });
    */


});
