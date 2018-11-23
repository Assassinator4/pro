$(function () {
    //点击事件，触发下拉和改变样式,其中当前页面不改变
    //还可以获取index，使用eq设置
    //1.先给当前页面有.on样式的li加个.not
    function setNot() {
        return $(".on").addClass("not");
    }

    setNot();
    $(".nav ul>li:not('.no')").hover(function () {
        var that = $(this);
        that.addClass("on").siblings().not(".not").removeClass("on");
        that.children().stop().slideDown();
    }, function () {
        $(this).not(".not").removeClass("on");
        $(".sec").css("display", "none");
    });

    //导航栏吸顶
    // $(window).on("scroll", function () {
    //     var scroll_top = $(window).scrollTop();
    //     if (scroll_top > 0) {
    //         //设置nav标签的样式
    //         $(".head").css({
    //             position: 'fixed',
    //             top: 0,
    //             "box-shadow": "0 3px 10px rgba(0,0,0,0.2)"
    //         })
    //     } else {
    //         //设置nav标签的样式(恢复)
    //         $(".head").css({
    //             position: 'absolute',
    //             top: "",
    //             "box-shadow": "none"
    //         });
    //         //设置一个head大小一样的撑出页面
    //         $(".header").css("display", "block");
    //     }
    // });
    //当打开窗口时，logo固定
    gudingLogo();
    //当窗口缩放时固定logo
    $(window).resize(function () {
        gudingLogo();
    })

    function gudingLogo() {
        if ($(".logo").offset().left <= 510) {
            $(".logo").css({
                "left": "600px",
                "transform": "",
                "top": "-60px"
            })
        }
        if ($(".gudinig").offset().left > 510) {
            $(".logo").css({
                "left": "50%",
                "transform": "translateX(-50%)",
                "top": "-60px"
            })
        }
    }
    //banner(轮播图)
    var timer;
    var index = 0;
    var flag = 0;
    function aotuPlayer() {
        timer = setInterval(next, 2000);
    }
    aotuPlayer();
    function zhixiangPlayer() {

        $(".zhixiang").animate({
            "opacity": "0"
        }).animate({
            "opacity": "0.9"
        }, 400);
    }
    $(".banner .left").click(function () {
        $(".banner ul").stop();
        pre();
    });
    $(".banner .right").click(function () {
        $(".banner ul").stop();
        next();
    });

    function pre() {
        index--;
        flag--;
        if (index < 0) {
            index = 3;
            flag = 3;
            $(".banner ul").css({left: "-400%"});
        }
        $(".banner ul").animate({"left": -(index * 100) + "%"});
        $(".banner ol li").eq(flag).addClass("active").siblings().removeClass("active");
    }
    function next() {
        index++;
        flag++;
        if (index > 4) {
            $(".banner ul").css("left", 0);
            index = 1;
        }
        if (flag > 3) {
            flag = 0;
        }
        $(".banner ul").animate({"left": -(index * 100) + "%"});
        $(".banner ol li").eq(flag).addClass("active").siblings().removeClass("active");
    }

    $(".banner").hover(function () {
        clearInterval(timer);
        $(".banner .zhixiang span").css({"display": "inline-block"});
        zhixiangPlayer();
    }, function () {
        aotuPlayer();
        $(".banner .zhixiang span").css("display", "none");
    });
    $(".banner ol li").click(function () {
        flag = $(this).index();
        $(".banner ul").animate({"left": -(flag * 100) + "%"});
        $(".banner ol li").eq(flag).addClass("active").siblings().removeClass("active");
    });

    //弹出框
    setTimeout(function () {
        $(".index-panel").css({"display":"block"});
        $(".index-panel .index-panel-main").css({
            "width":0,
            "height":0
        }).animate({
          "width":650,
          "height":650
        },1000,"swing");
        setTimeout(function () {
            $(".panel-in").animate({
                "opacity":1
            },500);
            $(".index-click").animate({
                "opacity":1
            },100);
        },1000)
    },5000);
    $(".index-click").on("click",function () {
        $(".panel-in").animate({
            "opacity":0
        },100);
        $(".index-click").animate({
            "opacity":0
        },100);
        $(".index-panel .index-panel-main").css({
            "width":650,
            "height":650
        }).animate({
            "width":0,
            "height":0
        },1000);
        setTimeout(function () {
            $(".index-panel").css({"display":"none"});
        },1100);
    });
    //懒加载


});








