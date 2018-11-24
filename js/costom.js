$(function () {

  //旋转木马图
  $(".costom-logo").hover(function () {
    $(".costom-ctl").fadeIn(500);
  }, function () {
    $(".costom-ctl").fadeOut(1000);

  });
  var timer = null;
  var dataArr = [
    {
      width: 400,
      left: -50,
      top: 10,
      opacity: 0.2,
    },
    {
      width: 600,
      left: -100,
      top: 30,
      opacity: 0.8,
    },
    {
      width: 800,
      left: 100,
      top: 60,
      opacity: 1,
      zIndex: 4
    },
    {
      width: 600,
      left: 500,
      top: 30,
      opacity: 0.8,
    },
    {
      width: 400,
      left: 650,
      top: 10,
      opacity: 0.2,
    },
  ];

  var datazIndex = [
    {zIndex: 2},{zIndex:3},{zIndex:4},{zIndex:3},{zIndex:2}
  ];
  refurbish();
  function refurbish() {
    $(".costom-logo ul>li").each(function () {
      var index = $(this).index();
      $(this).stop().css(datazIndex[index]).animate(
        dataArr[index]
      )
    }
    )
  }
  $(".next").click(function () {
    changePositionRight();
    refurbish();

  });
  $(".prev").click(function () {

    var result = dataArr.shift();
    dataArr.push(result);
    datazIndex.push(datazIndex.shift());
    refurbish();

  });

  function changePositionRight() {
    var result = dataArr.pop();
    dataArr.unshift(result);
    datazIndex.unshift(datazIndex.pop());
    refurbish();

  }
  function autoPlay() {
    timer = setInterval(changePositionRight,2000);
  }
  autoPlay();
  $('.costom-logo').hover(function () {
    clearInterval(timer);
  },autoPlay);

//客片展示

  $(".costom-wrap-big>li").each(function () {
    $(this).hover(function () {

      $(this).children("span").stop().slideDown();
    },function () {
      $(this).children("span").stop().slideUp();
    })
  });


//小按钮
  $(".costom-mpage>ul").children().each(function () {
    $(this).hover(function () {
      $(this).addClass("hover").siblings().removeClass("hover");

    },function () {
      $(this).removeClass("hover");
    })

  })

})
