// 产品头部
$(function () {
    //重定义
    $(".city-ul>li").each(function (index,ele) {
         
        $(ele).hover(function () {
            $('.product-lett-ul li').eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
            $(this).find("span").stop().slideUp();
            $(this).find("i").stop().animate({opacity:1},1200);
        }, function () {
            $(this).find("span").stop().slideDown();
            $(this).find("i").stop().animate({opacity:0});
            });

        })



    //图片展示
    $(".anli-1").hover(function () {
        $(this).find(".anli-1s").css({
            "background": "#EC6D88",
            "color": "#fff"
        });
        $(this).find(".anli-1s span").css({
            "color": "#fff"
        });
        $(this).find(".product-content-font").css({
            "color": "#fff",
            "background": "#EC6D88"
        });
        $(this).find(".anli-pica").css({
            "background": "url(intro-img/product-img/index-5.png)no-repeat center "
        });
        $(this).find(".anli-picb").css({
            "background": "url(intro-img/product-img/index-4.png)no-repeat center"
        });
        $(this).find("img").addClass("active");
    }, function () {
        $(this).find(".anli-1s").css({
            "background": "#fff",
            "color": "#313131"
        });
        $(this).find(".anli-1s span").css({
            "color": "#6f6f6f"
        });
        $(this).find(".anli-1s .product-content-font").css({
            "color": "#666",
            "background": "#fff"
        })
        $(this).find(".anli-pica").css({
            "background": "url(intro-img/product-img/index-2.png)no-repeat center"
        });
        $(this).find(".anli-picb").css({
            "background": "url(intro-img/product-img/index-3.png)no-repeat center"
        });
        $(this).find("img").removeClass("active");

    });


    //更多图片
    $(".product-1s>ul").children().hover(function () {
        $(this).find("span").fadeIn(500);
    }, function () {
        $(this).find("span").fadeOut(1000);
    })

     //图片懒加载



})

