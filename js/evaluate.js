$(function () {


    $.each($(".ga_wrap").children("a"),function () {
        $(this).on("click",function () {
            $(".panel").css({"display":"block"});
        })
    });
    $(".v-click").on("click",function (e) {
        $(".panel").css({"display":"none"});
    })
});