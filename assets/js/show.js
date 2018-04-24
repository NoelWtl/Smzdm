// 你可能还喜欢轮播开始
$(function(){
    var swiper = new Swiper('.slide-run-big', {
      autoplay:true,
      slidesPerView: 4,
      spaceBetween: 14,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    $('.slide-run-big').mouseenter(function(){
      swiper.autoplay.stop();
    }).mouseleave(function(){
      swiper.autoplay.start();
    })
})
// 你可能还喜欢轮播结束


// 消费众测轮播图开始
$(function(){
    var swiper = new Swiper('.pay-slide', {
      autoplay:true,
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    $('.pay-slide').mouseenter(function(){
      swiper.autoplay.stop();
    }).mouseleave(function(){
      swiper.autoplay.start();
    })
})
// 消费众测轮播图结束



// 购买按钮鼠标移入特效开始
$(function(){
  $('.car-follow-buy').mouseenter(function(){
    $('.car-follow-buy i').removeClass('icon-msnui-menu-down');
    $('.car-follow-buy i').addClass('icon-msnui-menu-up');
  }).mouseleave(function(){
    $('.car-follow-buy i').removeClass('icon-msnui-menu-up');
    $('.car-follow-buy i').addClass('icon-msnui-menu-down');
  })
})
// 购买按钮鼠标移入特效结束



//值不值得按钮打分开始
//加分按钮开始
$(function(){
    // 值得按钮点击事件
    //获取进度条的宽度
    var len = $('.Progress-bar-go').width();
    //获取终点值的宽度
    var lenEnd = $('.Progress-bar').width();
    //初始显示在页面中的人气值
    $('.Progress-bar-num span:eq(0)').text(len);

  $('.Vote-left').click(function(ent){
    //阻止默认行为
    ent.preventDefault();
    //每次点击都把进度条的长度加一
    len += 1;
    //参与人数
    $('.Vote-contains>p>span').text(len);
    if(len >= lenEnd) {
      len = lenEnd;
    }
    //让人气值的长度改变
    $('.Progress-bar-go').css('width',len);
    //把人气值加输出页面中
    $('.Progress-bar-num span:eq(0)').text(len);
    //对应减的人数就是120-值的人数；
    $('.Progress-bar-num span:eq(1)').text(lenEnd-len);   
    if(len >= lenEnd/2) {
      $('.Progress-bar-num span:eq(0)').css('color','red');
    }
  })
// })
//加分按钮结束

//减分按钮开始
// $(function(){
  // 值得按钮点击事件
    //获取进度条的宽度
    // var len = $('.Progress-bar-go').width();
    //获取终点值的宽度
    // var lenEnd = $('.Progress-bar').width();
    //初始化页面显示的人气值
    $('.Progress-bar-num span:eq(1)').text(lenEnd-len);
  $('.Vote-right').click(function(ent){
    //阻止默认行为
    ent.preventDefault();
    //每次点击都把进度条的长度加一
    len -= 1;
    if(len <= 0) {
      len = 0;
    }
    $('.Progress-bar-go').css('width',len);
    //把人气值减输出页面中
    $('.Progress-bar-num span:eq(1)').text(lenEnd-len);
    //那么对应的人气值加的人数就是
    $('.Progress-bar-num span:eq(0)').text(len);
  })
})

//减分按钮结束
//值不值得按钮打分结束



//右侧锚点返回顶部开始
$(function(){
    //获取底部的上边距
    var FootTop =  $('.footer').offset().top;
    //获取底部自身的高度
    var FootHig = $('.footer').outerHeight();
    //获取屏幕的高度
    var Screen = $(window).height();
    //当浏览器滚动到一定距离的时候，让返回顶部按钮显示出来
    $(window).scroll(function(){
    //获取浏览器的实时滚动距离
    var scrol = $(this).scrollTop();
    //当浏览器的滚动距离到达一个指定值的时候，显示返回顶部按钮
    if(scrol >= 500) {
      $('.Show-up').show();
    }
    else{
      $('.Show-up').hide();
    }
    var top = scrol + Screen -FootTop;
    if(top > 0) {
      $('.Navigation-Anchor').css('bottom',top+30);
    }
    else {
      $('.Navigation-Anchor').css('bottom',0);
    }
  })
})
//右侧锚点返回顶部结束



//右侧底部广告滚动开始
$(function(){
  var top = $('.sea-New').offset().top;
  $(window).scroll(function(){
    if($(this).scrollTop() >= top) {
      $('.sea-New').addClass('active');
    }
    else{
      $('.sea-New').removeClass('active');
    }
  })
})
//右侧底部广告滚动结束



// 海淘，发现，原创，资讯开始选项卡开始
$(function(){
    //默认让第一个显示
    // $('.sea-content .pay-list').show();
    //鼠标移入事件
    $('.sea-header li').mouseenter(function(){
      // 先清除所有的下边框
      $('.sea-header li').css('border-bottom','none');
      //再给指定的加上下边框
      $(this).css('border-bottom','2px solid #f04848');
      //获取当前选中的索引值
      var index = $(this).index();
      //清除所有的内容不允许显示
      $('.sea-content ul').hide();
      //让对应的内容显示
      $('.sea-content ul').eq(index).show();
      // console.log($('.sea>div').eq(2))
  })
})
// 海淘，发现，原创，资讯开始选项卡结束




//相关原创列表鼠标移入显示详情开始
// window.onload = function(){
//   var list = document.querySelectorAll('.Create-lister li');
//   for(var i=0; i < list.length; i++) {
//       list[i].index = i;
//       list[i].onmouseenter = function(){
//       }
//   }
// }
// 


$(function(){
  $('.create-content li').mouseenter(function(){
    //获取对应的索引值
    var index = $(this).index();
    //清除所有的样式
    $('.create-content li').removeClass('active');
    //给对应的li添加class
    $('.create-content li').eq(index).addClass('active');
  })
});
//相关原创列表鼠标移入显示详情结束
// 热门优惠卷鼠标移入显示详情开始
$(function(){
  $('.Discount-lister li').mouseenter(function(){
    //获取对应的索引值
    var index = $(this).index();
    //清除所有的样式
    $('.Discount-lister li').removeClass('active');
    //给对应的li添加class
    $('.Discount-lister li').eq(index).addClass('active');
  })
});
// 热门优惠卷鼠标移入显示详情结束




//最新发现，热门发现选项卡特效开始
$(function(){
  $('.Ranking-header span').mouseenter(function(){
    //清除导航的下边框
    $('.Ranking-header span').removeClass('active');
    //给指定的导航添加下边框
    $(this).addClass('active');
    //获取当前的索引值
    var index = $(this).index();

    $('.Super-lister ul').hide();
    $('.Super-lister ul').eq(index).show();
  })
})
//最新发现，热门发现选项卡特效结束