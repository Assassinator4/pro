(function () {
    var box = function ($children, n) {
        //显示某jquery元素下的前n个隐藏的子元素
        var $hiddenChildren = $children.filter(":hidden");
        var cnt = $hiddenChildren.length;
        for ( var i = 0; i < n && i < cnt ; i++) {
            $hiddenChildren.eq(i).slideDown();
        }
        return cnt-n;//返回还剩余的隐藏子元素的数量
    }

    //对页中现有的class=showMorehandle的元素，在之后添加显示更多条，并绑定点击行为
    $.showMore = function (selector) {
        if (selector == undefined) { selector = ".box" }
        $(selector).each(function () {
            var pagesize = $(this).attr("pagesize") || 10;
            // console.log(pagesize);
            $(this).find("li:lt("+pagesize+")").show();
            var $children = $(this).children();
            if ($children.length > pagesize) {
                for (var i = pagesize; i < $children.length; i++) {
                    $children.eq(i).hide();
                }
                $("<div class='main'>Loading More</div>").insertAfter($(this)).click(function () {
                    if (box($children, pagesize) <= 0) {
                        //如果目标元素已经没有隐藏的子元素了，就隐藏“点击更多的按钮条”
                        $(this).hide();
                    };
                });
            }
        });
    }
})()