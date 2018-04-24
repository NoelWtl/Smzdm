// 登录注册开始
$(function(){
    // 登录按钮
    $('.Login-way').click(function(ent){
        //原因就是a标签点击后页面跳转导致页面刷新
        ent.preventDefault();
        //让样式展示
        $('.big-login').show();
        //隐藏滚动条
        $('body').css('overflow','hidden');
    })
    // 注册按钮
    $('.Login-register').click(function(ent){
        //原因就是a标签点击后页面跳转导致页面刷新
        ent.preventDefault();
        $('.big-login').show();
        $('body').css('overflow','hidden');
    })
    //关闭按钮
    $('.close-btn,window').click(function(){
        $('.big-login').hide();
        $('body').removeAttr('style');
    })
});


//登录注册导航按钮开始
$(function(){
    $('.login-contains a').click(function(ent){
        //阻止默认行为
        ent.preventDefault();
        //先清除所有的样式
        $('.login-contains a').removeClass('active');
        //再给需要的添加样式
        $(this).addClass('active');
        //获取当前点击的索引值
        var index = $(this).index();
        //显示对应的登录注册内容
        $('.form-big form').hide();
        $('.form-big form').eq(index).show();
    })
})
//登录注册导航按钮结束


// 错误提示信息
// 您输入的账号/密码无效，请重新输入
// 手机号/邮箱不能为空
// 密码不能为空


// 登录内容开始
//用户名输入框开始
$(function(){
    $('.Loginer>input:eq(0)').focus(function(){
        $('.fly-phone').animate({'top':'-5px'},200).css('color','#5188a6');
    }).blur(function(){
        if($(this).val().length == 0){
            $('.fly-phone').animate({'top':'10px'},200).css('color','#999');
        }
    })

    $('.fly-phone').click(function(){
        $('.Loginer>input:eq(0)').trigger('focus');
    })
})


//密码输入开始
$(function(){
    $('.Loginer>input:eq(1)').focus(function(){
        $('.fly-password').animate({'top':'44px'},200).css('color','#5188a6');
    }).blur(function(){
        if($(this).val().length == 0){
            $('.fly-password').animate({'top':'61px'},200).css('color','#999');
            
        }
    })

    $('.fly-password').click(function(){
        $('.Loginer>input:eq(1)').trigger('focus');
    })
})
//登录内容结束


// 请输入有效的手机号码
// 请将密码长度控制在6-20以内
// 密码简单，请更换其他复杂密码
// 验证码已失效，请重新获取




//注册内容开始
$(function(){
    //默认用户输入的是假的
    var uBool = false;
    var pBool = false;
    var codeBool = false;
//手机号注册开始
    $('.register input:eq(0)').focus(function(){
        $('.register-fly-phone').animate({'top':'-5px'},200).css('color','#5188a6');
    }).blur(function(){
        if($(this).val().length == 0){
            $('.register-fly-phone').animate({'top':'10px'},200).css('color','#999');
        }
        //当失去焦点的时候，检验用户输入的值是否符合要求
        // 失去焦点时，获取用户输入的内容：
        var value = $(this).val().trim();
        //匹配手机号为1开头，第二个数字可以是3,4,5,7,8，剩下的9个数字就可以是0-9，必须以数字开头，数字结尾
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        //邮箱验证：只能用字母或者数字开头，中间可以是下划线，中划线，小数点，必须要有@符，@符之后必须是正确的地址：.com  .cn
        var reg1 = /^[a-z0-9A-Z][0-9a-zA-Z-_.]+@[a-z0-9A-Z]+\.[a-zA-Z]+$/;
        if(reg.test(value) || reg1.test(value)) {
            console.log('恭喜你手机号或者邮箱正确');
            $('.mistake').text(' ');
            uBool = true;
        }
        else{
            $('.mistake').text('请输入正确的手机号');
            uBool = false;
        }
    })

    $('.register-fly-phone').click(function(){
        $('.register>input:eq(0)').trigger('focus');
    })
    //手机号注册结束
    
    //验证码开始
    $('.register input:eq(1)').focus(function(){
        $('.register-fly-code').animate({'top':'45px'},200).css('color','#5188a6');
        //再次聚焦得时候，删除提示信息
        $('.mistake').text(' ');
    }).blur(function(){
        if($(this).val().length == 0){
            $('.register-fly-code').animate({'top':'61px'},200).css('color','#999');
            
        }
        //获取验证码输入的值
        var value = $(this).val().trim();
        //自定义一个验证码的规则：只能是4位或者5位的数字；
        var reg = /^[0-9]{4,5}$/;
        if(reg.test(value)) {
            console.log('验证码正确');
            codeBool = true;
        }
        else {
            $('.mistake').text('验证码不符合');
            codeBool = false;
        }
    })

    $('.register-fly-code').click(function(){
        $('.register input:eq(1)').trigger('focus');
    })
    //验证码结束

    //密码开始
    $('.register input:eq(2)').focus(function(){
        $('.register-fly-password').animate({'top':'97px'},200).css('color','#5188a6');
    }).blur(function(){
        if($(this).val().length == 0){
            $('.register-fly-password').animate({'top':'113px'},200).css('color','#999');
        }
        //获取用户输入的值
        var value = $(this).val().trim();
        //定义密码的规则：6-16位子符组成，区分大小写
        //中间不能有空格
        //不能是全数字，全字母
        var reg = /^[a-z0-9A-Z_-]{6,16}$/;
        var reg1 = /\s/;
        var reg2 = /^[0-9]$/;
        var reg3 = /^[a-zA-Z]$/;
        if(reg.test(value) && !reg1.test(value)) {
            console.log('密码符合规范');
            pBool = true;
        }
        else {
            $('.mistake').text('请输入6-16位数字，字母，下划线，中划线');
            pBool = false;
        }

        if(reg2.test(value) && reg3.test(value)) {
            $('.mistake').text('密码过于简单');
            pBool = false;
        }
        else {
            console.log('密码符合');
            pBool = true;
        }
    })

    //点击事件（绑定事件）
    $('.register-fly-password').click(function(){
        $('.register input:eq(2)').trigger('focus');
    })

    $('.submit').click(function(){  
        $(this).trigger('submit');
        //表单的提交”
        $('.register').submit(function(ent){
            if(uBool && pBool && codeBool) {
                console.log('正常提交');
            }   
            else {
                ent.preventDefault();
            }
        })
    })
})
//注册内容结束




























//登录注册结束