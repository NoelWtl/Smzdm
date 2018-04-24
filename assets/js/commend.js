//导航栏向上向下的图标特效开始
$(function(){
    $('.Nav-content li').mouseenter(function(){
        //把icon从原来的向下改成向上
        $(this).find('.iconfont').removeClass('icon-xiangxia')
        $(this).find('.iconfont').addClass('icon-xiangshang')
    }).mouseleave(function(){
        $(this).find('.iconfont').removeClass('icon-xiangshang')
        $(this).find('.iconfont').addClass('icon-xiangxia')
    })

})
//导航栏向上向下的图标特效结束