window.onload = function () {
    var minSize = 5;
    var maxSize = 50;
    var newOne = 100;
    var flakColor = "red";
    var flak = $("<div class='xh'></div>").css({position:"absolute","top":"0px"}).html("❤");
    var dhight = $(window).height();
    var dw =$(window).width();
    setInterval(function(){
        var sizeflak = minSize+Math.random()*maxSize;
        var startLeft = Math.random()*dw;
        var startopcity = 0.7+Math.random()*0.3;
        var endpositionTop= dhight-100;
        var endLeft= Math.random()*dw;
        var durationfull = 5000+Math.random()*5000;
        flak.clone().appendTo($("body")).css({
            "left":startLeft ,
            "opacity":startopcity,
            "font-size":sizeflak,
            "color":flakColor
        }).animate({
            "top":endpositionTop,
            "left":endLeft,
            "apacity":0.1
        },durationfull,function(){
            $(this).remove()
        });
    },newOne);
};