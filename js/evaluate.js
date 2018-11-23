$(function () {

    var index = 0;
    $.each($(".ga_wrap").children("a"),function () {
        $(this).on("click",function () {
            index = $(this).index();
            console.log(index);
            $(".panel").css({"display":"block"});
            $(".panel .panel-main").children().attr("src","images/evaluate/"+index+".jpg");
        })
    });
    $(".v-click").on("click",function () {
        $(".panel").css({"display":"none"});
    });
    
    $(".v-left").on("click",function () {
        index --;
        if (index > 100) index = 1;
        else if(index < 1) index = 100;
        $(".panel .panel-main").children().attr("src","images/evaluate/"+index+".jpg");
    });
    $(".v-right").on("click",function () {
        index ++;
        if (index > 100) index = 1;
        else if(index < 1) index = 100;
        $(".panel .panel-main").children().attr("src","images/evaluate/"+index+".jpg");
    })
    
});