$(function(){
    // 导航栏跟随着浏览器固定滚动开始
    //获取导航栏的距浏览器的距离
    var Offtop = $('.Navigation').offset().top; //不可以放到滚动事件里面
    //获取浏览器的额滚动事件、
    $(window).scroll(function(){
    //获取浏览器的滚动距离
    var stTop = $(window).scrollTop();

    //如果浏览器的滚动距离大于导航栏距页面的距离，就让导航栏固定在浏览器的顶端
    if(stTop >= Offtop) {
        $('.Navigation').addClass('fixed');
        //返回顶部也是跟着一起出现的：
        $('.Navigation-Anchor-list li').last().show();
    } else {
            $('.Navigation').removeClass('fixed');
            $('.Navigation-Anchor-list li').last().hide();
        }
    //导航栏跟随着浏览器固定滚动结束
    });

    

    //克隆写法
    //克隆导航栏
    // var Navclone = $('.Navigation').clone(true);
    // //给克隆的标签添加样式
    // Navclone.addClass('fixed');
    // //把导航栏追加进去页面当中
    // $('body').append(Navclone);
    // //初始化让克隆的标签隐藏：
    // Navclone.hide();
    // //获取导航栏距离页面的高度
    // var Offtop = $('.Navigation').offset().top;

    // $(window).scroll(function(){
    //     //获取浏览器的滚动距离
    //     var stTop = $(window).scrollTop();
    //     //判断当浏览器到达导航栏距页面的高度的时候，让克隆的样式显示
    //     if(stTop >= Offtop){
    //         Navclone.show();
    //     }else {
    //         Navclone.hide();
    //     }
    // })

});

//热门标签轮播图开始  
$(function(){
     //需求分析：
     //需要利用marginleft来让轮播图左右移动：需要加入动画，才能使轮播图自动：当鼠标移入时，停止轮播，移出继续轮播：点击按钮，索引进行切换：
    
     //定义当前的图片的索引值
     var index = 0;

     //获取列表的长度
     var len = $('.Carousel-img-list li').length;

     var timer;
     demo();
     function demo(){    
        //加入定时器：
        timer = setInterval(function(){
            // 清除全部的active
            $('.Carousel-img-index-list li').removeClass('active');
            
            // console.log('第一次'+index);
            //每次加一
            index++;
            //判断超过最后一张的时候，返回第一张
            // console.log('第二次'+index);
            if(index >= len) {
                $('.Carousel-img-list').animate({'margin-left':-680*index},200)
                index = 0;
                setTimeout(function() {
                    $('.Carousel-img-list').stop(true, true)    
                    $('.Carousel-img-list').css({'margin-left':0})
                }, 200)
            }
            //加入动画让轮播动起来
            $('.Carousel-img-list').animate({'margin-left':-680*index},200);
            $('.Carousel-img-index-list li').eq(index).addClass('active');
        },5000);
     };

        //当鼠标移入轮播图的时候，停止定时器的运作
        $('.Carousel-img').mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            demo();
        })

        //当鼠标点击索引移动到对应的图片
        $('.Carousel-img-index-list li').click(function(){
            //点击的时候清除所有的颜色
            $('.Carousel-img-index-list li').removeClass('active');
            //获取当前的点击的索引值
            index = $(this).index();
            //让图片移动到对应的轮播位置
            $('.Carousel-img-list').animate({'margin-left':-680*index },200);
            //让点击的索引值颜色变化
            $('.Carousel-img-index-list li:eq('+index+')').addClass('active');
        })
        //当鼠标点击左右按妞的时候，进行切换图片
        
        $('.left-right').click(function(ent){
            //阻止默认行为
            ent.preventDefault();
        });
        $('.Carousel-img-list-left').click(function(){
            //清除所有的索引颜色
            $('.Carousel-img-index-list li').removeClass('active');
            //让index--，就是上一个图片
            index--;
            //判断、
            if(index < 0) {
                $('.Carousel-img-list').css('margin-left',-5*680);
                index = len-1;
            }
            $('.Carousel-img-list').animate({'margin-left':-680*index},200);
            $('.Carousel-img-index-list li:eq('+index+')').addClass('active');
        });

        //右按钮点击
        $('.Carousel-img-list-right').click(function(){
            $('.Carousel-img-index-list li').removeClass('active');
            index++;
            if(index >= len) {
                $('.Carousel-img-list').animate({'margin-left':-680*index},200);
                index = 0;
                setTimeout(function() {
                    $('.Carousel-img-list').stop(true, true)    
                    $('.Carousel-img-list').css({'margin-left':0})
                }, 200)
            }
            $('.Carousel-img-list').animate({'marginLeft':-680*index},200);
            $('.Carousel-img-index-list li:eq('+index+')').addClass('active');
        })

        //克隆事件(克隆第一张到最后，最后一张到前面
        $('.Carousel-img-list li:eq(0)').clone(true).appendTo($('.Carousel-img-list')); 
        //克隆最后一张图片到前面
});
//热门标签轮播图结束  
    
$(function(){
     //点击侧边栏返回顶部开始
    $('.BackTop').click(function(e){
        $(window).scrollTop('0');
        e.preventDefault();
        console.log('124');
    })
    //点击侧边栏返回顶部结束
    


});

//好劵快报轮播图开始
$(function(){
    // Express-News-list-change轮播图开始 
    var index = 0;
    var len = $('.Express-News-list ul').length;
    var timer;
    // 获取ul的长度
    run();
    //封装函数
    function run(){
        // clearInterval(timer);
        timer = setInterval(function(){
            $('.Express-News-index-list li:eq('+index+')').removeClass('active');
            $('.Express-News-list ul:eq('+index+')').removeClass('active');

            index++;
            if(index >= len) {
                index = 0;
            }
            $('.Express-News-index-list li:eq('+index+')').addClass('active');
            $('.Express-News-list ul:eq('+index+')').addClass('active');
        },2000);
    }
        //当鼠标移入的时候：停止定时器的运作：
        $('.Express-News-Carousel').mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            run();
        })

        //当点击左按妞的时候，进行切换图片
        $('.Express-News-index .icon-zuojiantou').click(function(){
            //让当前索引值的列表隐藏
            $('.Express-News-index-list li:eq('+index+')').removeClass('active');
            $('.Express-News-list ul:eq('+index+')').removeClass('active');
            //索引加一
            index--;
            //判断当索引大于最大值时，从头开始
            if(index < 0){
                index = len-1;
            }
            //当点击的下一个列表显示
            $('.Express-News-index-list li:eq('+index+')').addClass('active');
            $('.Express-News-list ul:eq('+index+')').addClass('active');
        })
        //当点击右按妞的时候，进行切换图片
        $('.Express-News-index .icon-youjiantou').click(function(){
            //让当前索引值的列表隐藏
            $('.Express-News-index-list li:eq('+index+')').removeClass('active');
            $('.Express-News-list ul:eq('+index+')').removeClass('active');
            //索引加一
            index++;
            //判断当索引大于最大值时，从头开始
            if(index >= len){
                index = 0;
            }
            //当点击的下一个列表显示
            $('.Express-News-index-list li:eq('+index+')').addClass('active');
            $('.Express-News-list ul:eq('+index+')').addClass('active');
        })  

        //当鼠标移入索引的时候，显示对应的列表，被点击的索引改变颜色
        $('.Express-News-index-list li').mouseenter(function(){
            var index = $(this).index();
            //先清除多所有的索引颜色：
            $('.Express-News-index-list li').removeClass('active');
            //让所有的列表隐藏
            $('.Express-News-list ul').removeClass('active');
            //再给指定的索引添加颜色
            $('.Express-News-index-list li').eq(index).addClass('active');
            //再给鼠标移入的索引值对应的列表显示
            $('.Express-News-list ul').eq(index).addClass('active');
        })
    // Express-News-list-change轮播图结束    
});
//好劵快报轮播图结束

// 热门原创轮播开始
$(function(){
    var swiper = new Swiper('.original', {
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
})
// 热门原创轮播结束

//视频直播轮播开始
$(function(){
    var swiper = new Swiper('.VBtyu', {
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
})
// 视频直播轮播结束


//超值精选开始
$(function(){
    //获取超值精选上边距
    var Top = $('.Ranking-big-header').offset().top;
    //获取精选模块自身的高度
    var Topheight = $('.Ranking-big-header').outerHeight();
    //获取底部的上边距
    var footTop = $('.footer').offset().top;
    //获取底部的高度
    var footHeight = $('.footer').outerHeight();
    //获取屏幕的高度：
    var Screen = $(window).height();
    //临界值停止的浏览器滚动距离
    // var scrollStop = footTop-Topheight;
    // console.log(scrollStop)
    $(window).scroll(function(){
        var sTop = $(window).scrollTop();
        // var changeTop = $('.Ranking-big-header').offset().top;
        // if(sTop >= Top && sTop < scrollStop) {   
        //     $('.Ranking-big-header').addClass('active')
        //     if(sTop >= Top && changeTop >= scrollStop){
        //         $('.Ranking-big-header').removeClass('active');
        //         $('.Ranking-big-header').addClass('active-big-content');
        //     }else{
        //   $('.Ranking-big-header').removeClass('active-big-content');
        //     }
        // }
        // else{
        //   $('.Ranking-big-header').removeClass('active')
        //   $('.Ranking-big-header').removeClass('active-big-content');
        // } 
        
        //临界值停止的浏览器滚动距离
        var scrollStop = sTop + Screen - footTop;
        if(sTop >= Top) {
            $('.Ranking-big-header').addClass('active');
            if(scrollStop > 0) {
                $('.Ranking-big-header').removeClass('active').addClass('active-big-content');
            }else {
                $('.Ranking-big-header').removeClass('active-big-content');
            }
        }
        else {
            $('.Ranking-big-header').removeClass('active');
        }
    })
})
//超值精选结束


// Worth-buying值得买头部跟随开始
$(function(){
    var Top = $('.Worth-buying-header').offset().top;
    $(window).scroll(function(){
        var sTop = $(window).scrollTop();
        if(sTop >= Top) {
            $('.Worth-buying-header').addClass('active');
        }else{
             $('.Worth-buying-header').removeClass('active');
        }
    })
})
// Worth-buying值得买头部跟随结束

$(function(){
    //Worth-buying值得买选项卡开始 
    $('.Worth-buying-header-list li').click(function(ent){
        //阻止默认行为
        ent.preventDefault();
        var index = $(this).index();
        console.log(index);
        //清除所有的activeA样式
        $('.Worth-buying-header-list li a').removeClass('activeA');
        $('.Worth-buying-header-list li').removeClass('activeB');
        //让所有的选项卡隐藏
        $('.Show-Worth-buying>div').hide();
        //再给对应的加颜色
        $('.Worth-buying-header-list li a').eq(index).addClass('activeA');
        $('.Worth-buying-header-list li').eq(index).addClass('activeB');
        //再让对应的选项卡显示
        $('.Show-Worth-buying>div').eq(index).show();   
    })
    //Worth-buying值得买选项卡结束 
})



//排行榜轮播图开始
$(function(){
 var swiper = new Swiper('.Ranking-Carouseer', {
      autoplay:true,
      slidesPerView: 1,
      spaceBetween:15,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
})
//排行榜轮播图结束

//排行榜选项卡开始
$(function(){
    $('.Ranking-list li').click(function(ent){
        ent.preventDefault();
        var index = $(this).index();
        $(this).siblings().removeClass('active');
        $('.Ranking .Ranking-Carouseer').hide();
        
        $(this).addClass('active');
        $('.Ranking .Ranking-Carouseer').eq(index).show();
    })
})
//排行榜选项卡结束



// 热门综测轮播图开始
$(function(){
    var swiper = new Swiper('.Hot-slideT', {
      autoplay:true,
      slidesPerView: 1,
      spaceBetween: 0,
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
})
// 热门综测轮播图结束