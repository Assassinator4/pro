$(function(){
    $('#dowebok').fullpage({
        anchors: ['page1','page2','page3','page4','page5','page6'],
        menu: '#menu',
    });
    var meh = $("#menu").css("height");
    var mei = parseInt(meh);
    $("#menu").css("margin-top","-" + mei/2 + "px");
    $(".blkhead .head_bottom").css("opacity","0");

    $(".blkhead").mousemove(function(){
        $(".blkhead .head_bottom").css("opacity","1");
        $(".blkhead .showhead").hide();
    });
    $(".blkhead").mouseout(function(){
        $(".blkhead .head_bottom").css("opacity","0");
        $(".blkhead .showhead").show();
    });

    // 1.获取标签
    var list = $('#box ul li');

    // 2.设置图片的位置
    var count = 6;
    var row = 0;
    var col = 0;

    $.each(list,function (ele,index) {
        row = parseInt(index / count);
        col = index % count;
        var x = -col * 300;
        var y = -row * 230;
        ele.style.backgroundPosition = x + 'px ' + y + 'px';
        ele.col = col;
    });


    // 3.添加动画
    // 先移动所有的li为左上角 隔一段事件依次复位

    var anim = {
        anm0:function () {
            $.each(list,function (ele,index) {
                ele.style.left = '-600px';
                ele.style.top = '-300px';
                ele.style.opacity = 0;
                setTimeout(function () {
                    buffer(ele,{left:0,top:0,opacity:1});
                },150 * index);
            })
        }
    };

    var num = 0;
    setInterval(function () {
        if (num == 0){
            anim['anm'+num]();
        }
        num++;
        if (num > 3) num = 0;
    },4000);
});




