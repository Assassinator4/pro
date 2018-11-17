// 产品头部
$(function () {
    //首图
    $(".product-location-ul>li").each(function () {
        // var index = $(this).index();

        $(this).hover(function () {
            $(this).find("span").stop().animate({"top": 0})
        }, function () {

            $(this).find("span").stop().animate({"top": 501})
        })

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
            "background": "url(images/product-img/index-5.png)no-repeat center "
        });
        $(this).find(".anli-picb").css({
            "background": "url(images/product-img/index-4.png)no-repeat center"
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
            "background": "url(images/product-img/index-2.png)no-repeat center"
        });
        $(this).find(".anli-picb").css({
            "background": "url(images/product-img/index-3.png)no-repeat center"
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
// 1.当点击a标签,就加载新的li;

    // $(".product-loadmore .main").click(function () {
    //   // console.log("---");
    //
    // })


});

