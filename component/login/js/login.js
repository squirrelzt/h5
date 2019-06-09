// 发送验证码
function sendVerifyCode() {
   var flag = checkTelephoneFormat();
   if (!flag) {
       return;
   }
   // TODO send verifyCode ajax
   $('.verify-code-send-btn').attr('disabled', true);
   var time = 60;
   timer = setInterval( function() {
        if (time == 0) {
            clearInterval(timer);
            $('.verify-code-send-btn').text('重新发送');
            $('.verify-code-send-btn').attr('disabled', false);
        } else {
            $('.verify-code-send-btn').text(time + '秒');
            time--;
        }
   }, 1000);
   
}

// 清除验证码
function clearVerifyCode() {
    $('.verify-code-input').val('');
    $('.verifyCodeError').css('visibility', 'hidden');
}

// 登录
function login() {
    var telephoneCheck = checkTelephoneIsEmpty();
    if (telephoneCheck) {
        return;
    }
    var verifyCode = $('.verify-code-input').val();
    // TODO login ajax

    // test
    // if (verifyCode != '123456') {
    //     $('.verifyCodeError').css('visibility', 'visible');
    // }
}

// 校验手机号是否为空
function checkTelephoneIsEmpty() {
    var telephone = $('.telephone-input').val();
    if (telephone == '') {
        return true;
    } else {
        return false;
    }
}

// 校验手机号格式
function checkTelephoneFormat() {
    var reg = /^1[3|4|5|7|8][0-9]\d{8,11}$/;
    var telephone = $('.telephone-input').val();
    if (reg.test(telephone)) {
        return true;
    } else {
        $('.telephoneError').css('visibility', 'visible');
        return false;
    }
}