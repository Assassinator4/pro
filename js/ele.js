/**
 * Created by gongmei on 2018/11/23.
 */
$(function () {
    $(".text").each(function (ele) {
        $(".text").eq(ele).click(function () {
            $('.text').eq(ele).addClass('in').siblings().removeClass('in');
            $('.right_scroll').children().eq(ele).css({
                display:'block'
            }).siblings().css({
                display:'none'
            })
        })
    })
});
