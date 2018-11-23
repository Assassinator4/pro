$(function () {
    var list = $(".thumbnail ol>li");

    var index = 0;

    $.each(list,function (i,ele) {
        $(ele).on("click",function () {
            index = $(this).index();
            // console.log(index);
            $(this).addClass("font").siblings().removeClass("font");

            // $(".li-img img").attr("src","../pro/images/product-img/3/1-1F"+(i+3)+".jpg").fadeIn(1000);

            $(".li-img").eq(i).fadeIn(500).siblings().fadeOut(500);
        })
    });

    $(".flex-prev").on("click",function () {
        index--;
        if (index >5) index = 0;
        else if(index < 0) index = 5;
        console.log(index);
        // $(".slides li").eq(index).addClass("current-img").siblings().removeClass("current-img")
        $(".thumbnail ol>li").eq(index).addClass("font").siblings().removeClass("font");
        $(".li-img").eq(index).fadeIn(500).siblings().fadeOut(500);
    })

    $(".flex-next").on("click",function () {
        index++;
        if (index >5) index = 0;
        else if(index < 0) index = 5;
        console.log(index);
        // $(".slides li").eq(index).addClass("current-img").siblings().removeClass("current-img")
        $(".thumbnail ol>li").eq(index).addClass("font").siblings().removeClass("font");
        $(".li-img").eq(index).fadeIn(500).siblings().fadeOut(500);
    })
    
});