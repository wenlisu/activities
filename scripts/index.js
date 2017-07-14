$(function() {
    setTimeout(function() {
        pageOne();
    }, 50);
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'next_pageone', 'next_pagetwo', 'next_pagethree', 'next_pagefour', 'next_pagefive', 'next_pagesix', 'next_pageseven', 'next_pageeighty', 'next_pagenine', 'next_pageten'],
        lazyLoading: true,
        afterLoad: function(link, index) {
            if (index > 1) {
                audioPlay('music');
            }
            if (index > 13) {
                document.getElementById('music').pause();
                audioPlay('music2');
            }
            if (index == 1) {
                setTimeout(function() {
                    pageOne();
                }, 50);
            } else if (index == 2) {
                setTimeout(function() {
                    pageTow()
                }, 50);
            } else if (index == 3) {
                setTimeout(function() {
                    pageThree();
                }, 50);
            } else if (index == 4) {
                setTimeout(function() {
                    pageFour();
                }, 50);
            } else if (index == 5) {
                setTimeout(function() {
                    pageFive();
                }, 50);
            } else if (index == 6) {
                setTimeout(function() {
                    pageSix();
                }, 50);
            } else if (index == 7) {
                setTimeout(function() {
                    pegeSeven();
                }, 50);
            } else if (index == 8) {
                setTimeout(function() {
                    pageEight();
                }, 50);
            } else if (index == 9) {
                setTimeout(function() {
                    pageNine();
                }, 50);
            } else if (index == 10) {
                setTimeout(function() {
                    pageTen();
                }, 50);
            } else if (index == 11) {
                setTimeout(function() {
                    pageEleven();
                }, 50);
            } else if (index == 12) {
                setTimeout(function() {
                    pageTwelve();
                }, 50);
                weixinOpen();
                // 第一部分结束后禁止手动进入下一页
                $.fn.fullpage.setAllowScrolling(false);
            }
            if ($('.next_pageone').hasClass('active')) {
                window.removeEventListener('devicemotion', weixin, false);
                setTimeout(function() {
                    next_pageone();
                }, 50);
            }
            if ($('.next_pagetwo').hasClass('active')) {
                next_pageTwo();
            }
            if ($('.next_pagethree').hasClass('active')) {
                next_pageThree();
            }

            if ($('.next_pagefour').hasClass('active')) {
                next_pageFour();
            }
            if ($('.next_pagefive').hasClass('active')) {
                next_pageFive();
            }
            if ($('.next_pagesix').hasClass('active')) {
                next_pageSix();
            }
            if ($('.next_pageseven').hasClass('active')) {
                next_pageSeven();
            }
            if ($('.next_pageeight').hasClass('active')) {
                next_pageEight();
            }
            if ($('.next_pagenine').hasClass('active')) {
                next_pageNine();
            }
            if ($('.next_pageten').hasClass('active')) {
                next_pageTen();
            }

        },
        onLeave: function(index) {
            $('.section div div').removeClass();
            if (index == 11) {
                $("#girl2").animate({
                    left: '-3.8rem'
                })
                $("#boy2").animate({
                    right: '-3.8rem'
                })
            }
            //二部分第10页
            else if (index == 23) {
                $("#next_ten-two").animate({
                    top: '2.8rem'
                });
                $("#next_ten-one").animate({
                    top: '0.8rem'
                });
                $("#next_ten-four").animate({
                    top: '0rem'
                });
                $('#next_ten-five').css('display', 'none');
                $('#next_ten-five').animate({
                    bottom: '-4.9rem'
                })
            }
        }
    });
});
var eye_timer, changeSrc = './images/one/6_people.png',
    defaultSrc = './images/one/7_people.png';

function next_pageone() {
    // 文字逐行显示
    $("#next_pageone_one").addClass('animated zoomIn');
    $("#next_pageone_two").addClass('animated zoomIn');
    $("#next_pageone_three").addClass('animated zoomIn');
    $("#next_pageone_four").addClass('animated zoomIn');
    setTimeout(function() {
        $("#next_pageone_one").addClass('animated zoomOut');
    }, 4000);
    setTimeout(function() {
        $("#next_pageone_two").addClass('animated zoomOut');
    }, 3000);
    setTimeout(function() {
        $("#next_pageone_three").addClass('animated zoomOut');
    }, 2000);
    setTimeout(function() {
        $("#next_pageone_four").addClass('animated zoomOut');
    }, 3000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(14, 0);
    }, 5000);

}

function next_pageTwo() {
    $("#next_two-one").addClass('animated zoomIn');
    $("#next_two-two").addClass('animated zoomIn');
    $("#next_two-three").addClass('animated zoomIn');
    $("#next_two-four").addClass('animated zoomIn');
    setTimeout(function() {
        $("#next_two-one").addClass('animated zoomOut');
    }, 5000);
    setTimeout(function() {
        $("#next_two-two").addClass('animated zoomOut');
    }, 4000);
    setTimeout(function() {
        $("#next_two-three").addClass('animated zoomOut');
    }, 3000);
    setTimeout(function() {
        $("#next_two-four").addClass('animated zoomOut');
    }, 2000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(15, 0);
    }, 6000);
}

function next_pageThree() {
    $("#next_three-one").addClass('animated zoomIn');
    $("#next_three-two").addClass('animated zoomIn');
    setTimeout(function() {
        $("#next_three-one").addClass('animated zoomOut');
    }, 3500);
    setTimeout(function() {
        $("#next_three-two").addClass('animated zoomOut');
    }, 2500);
    setTimeout(function() {
        $.fn.fullpage.moveTo(16, 0);
    }, 4000);
}

function next_pageFour() {
    $("#next_four-one").addClass('animated zoomIn');
    $("#next_four-two").addClass('animated zoomIn');
    $("#next_four-three").addClass('animated zoomIn');
    $("#next_four-four").addClass('animated zoomIn');
    $("#next_four-five").addClass('animated zoomIn');
    setTimeout(function() {
        $("#next_four-one").addClass('animated zoomOut');
        $("#next_four-two").addClass('animated zoomOut');
        $("#next_four-three").addClass('animated zoomOut');
        $("#next_four-four").addClass('animated zoomOut');
        $("#next_four-five").addClass('animated zoomOut');
    }, 5000);
    // setTimeout(function() {
    //     $("#next_four-one").addClass('animated zoomOut');
    // }, 5000);
    // setTimeout(function () {
    //     $("#next_four-two").addClass('animated zoomOut');
    // }, 4000);
    // setTimeout(function () {
    //     $("#next_four-three").addClass('animated zoomOut');
    // }, 3000);
    // setTimeout(function () {
    //     $("#next_four-four").addClass('animated zoomOut');
    // }, 2000);
    // setTimeout(function () {
    //     $("#next_four-five").addClass('animated zoomOut');
    // }, 1000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(17, 0);
    }, 5500);
}

function next_pageFive() {
    $("#next_five-one").addClass('animated rotateIn');
    setTimeout(function() {
        $("#next_five-two").addClass('animated fadeIn');
    }, 1500);
    setTimeout(function() {
        $("#next_five-three").addClass('animated fadeIn');
    }, 2200);
    setTimeout(function() {
        $("#next_five-four").addClass('animated fadeIn');
    }, 2900);
    setTimeout(function() {
        $("#next_five-one").addClass('animated zoomOutLeft');
        $("#next_five-two").addClass('animated zoomOutLeft');
        $("#next_five-three").addClass('animated zoomOutLeft');
        $("#next_five-four").addClass('animated zoomOutLeft');
    }, 4000);

    setTimeout(function() {
        $.fn.fullpage.moveTo(18, 0);
    }, 6000);
}

function next_pageSix() {
    $("#next_six-one").addClass('animated zoomInLeft');
    $("#next_six-two").addClass('animated zoomInLeft');
    $("#next_six-three").addClass('animated zoomInLeft');
    $("#next_six-four").addClass('animated zoomInLeft');
    $("#next_six-five").addClass('animated zoomInRight');
    setTimeout(function() {
        $("#next_six-one").addClass('animated zoomOutLeft');
        $("#next_six-two").addClass('animated zoomOutLeft');
        $("#next_six-three").addClass('animated zoomOutLeft');
        $("#next_six-four").addClass('animated zoomOutLeft');
        $("#next_six-five").addClass('animated zoomOut');
    }, 7000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(19, 0);
    }, 10000);
}

function next_pageSeven() {
    $("#next_seven-one").addClass('animated zoomInRight');
    $("#next_seven-two").addClass('animated zoomInRight');
    $("#next_seven-three").addClass('animated zoomInRight');
    setTimeout(function() {
        $("#next_seven-one").addClass('animated zoomOutRight');
        $("#next_seven-two").addClass('animated zoomOutRight');
        $("#next_seven-three").addClass('animated zoomOutRight');
    }, 5000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(20, 0);
    }, 8500);
}

function next_pageEight() {
    $("#next_eight-one").addClass('animated zoomInLeft');
    $("#next_eight-two").addClass('animated zoomInLeft');
    $("#next_eight-three").addClass('animated zoomInLeft');
    $("#next_eight-four").addClass('animated zoomInLeft');
    setTimeout(function() {
        $("#next_eight-one").addClass('animated zoomOutLeft');
        $("#next_eight-two").addClass('animated zoomOutLeft');
        $("#next_eight-three").addClass('animated zoomOutLeft');
        $("#next_eight-four").addClass('animated zoomOutLeft');
    }, 6000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(21, 0);
    }, 8000);
}

function next_pageNine() {
    $("#next_nine-one").addClass('animated zoomIn');
    $("#next_nine-two").addClass('animated zoomIn');
    $("#next_nine-three").addClass('animated zoomIn');
    $("#next_nine-four").addClass('animated fadeIn');
    setTimeout(function() {
        $("#next_nine-one").addClass('animated zoomOutLeft');
        $("#next_nine-two").addClass('animated zoomOutRight');
        $("#next_nine-three").addClass('animated zoomOutUp');
        $("#next_nine-four").addClass('animated fadeOut');
    }, 5000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(22, 0);
    }, 6500);
}

function next_pageTen() {
    $("#next_ten-two").addClass('animated fadeIn');
    $("#next_ten-one").addClass('animated zoomIn');
    $("#next_ten-four").addClass('animated fadeInDown');
    $("#next_ten-three").addClass('animated fadeIn');
    setTimeout(function() {
        $("#next_ten-two").animate({
            top: '1.5rem'
        });
        $("#next_ten-one").animate({
            top: '-0.5rem'
        });
        $("#next_ten-four").animate({
            top: '-1.3rem'
        });
        $('#next_ten-five').css('display', 'block');
        $('#next_ten-five').animate({
            bottom: '0'
        })
    }, 6000);
}

function pageOne() {
    setTimeout(function() {
        $("#one-one").addClass('animated fadeIn')
    }, 100);
    setTimeout(function() {
        $("#one-two").addClass('animated fadeIn')
    }, 500);
    setTimeout(function() {
        $("#one-three").addClass('animated fadeIn')
    }, 1000);
    setTimeout(function() {
        $("#one-four").addClass('animated fadeIn')
    }, 1500);
    setTimeout(function() {
        $("#one-one").addClass('animated fadeIn')
    }, 2000);
    setTimeout(function() {
        $("#one-six").addClass('animated fadeIn')
    }, 2500);
    setTimeout(function() {
        $("#one-seven").addClass('animated fadeIn')
    }, 3000);
    setTimeout(function() {
        $("#one-eighty").addClass('animated fadeIn')
    }, 3500);
    setTimeout(function() {
        $("#one-nine").addClass('animated fadeIn')
    }, 4000);
    setTimeout(function() {
        $("#one-ten").addClass('animated fadeIn')
    }, 4500);
}

function pageTow() {
    // $("#two-bg").addClass('animated fadeIn')
    setTimeout(function() {
        $("#two-one").addClass('animated fadeIn')
    }, 100);
    setTimeout(function() {
        $("#two-two").addClass('animated fadeIn')
    }, 500);
    setTimeout(function() {
        $("#two-three").addClass('animated fadeIn')
    }, 1000);
    setTimeout(function() {
        $("#two-four").addClass('animated fadeIn')
    }, 1500);
}

function pageThree() {
    // 文字逐行显示
    // $("#three-bg").addClass('animated fadeIn')
    setTimeout(function() {
        $("#three-one").addClass('animated bounceIn')
    }, 100);
    setTimeout(function() {
        $("#three-two").addClass('animated bounceIn')
    }, 500);
    setTimeout(function() {
        $("#three-three").addClass('animated bounceIn')
    }, 1000);
    setTimeout(function() {
        $("#three-four").addClass('animated bounceIn')
    }, 1500);
}

function pageFour() {
    // $("#four-bg").addClass('animated fadeIn')
    setTimeout(function() {
        $("#four-one").addClass('animated fadeIn')
    }, 100);
}

function pageFive() {
    // $("#five-bg").addClass('animated fadeIn')
    // 文字逐行显示
    setTimeout(function() {
        $("#girl").addClass('animated fadeIn')
        $("#boy").addClass('animated fadeIn')
    }, 100);
    setTimeout(function() {
        $("#min-love").addClass('animated bounceIn')
    }, 500);
    setTimeout(function() {
        $("#max-love").addClass('animated bounceIn')
    }, 1000);
    setTimeout(function() {
        $("#max-love-font").addClass('animated fadeIn')
    }, 1500);
}

function pageSix() {
    // $("#six-bg").addClass('animated fadeIn')
    // 文字逐行显示
    setTimeout(function() {
        $("#six-people").addClass('animated fadeIn')
    }, 100);
    setTimeout(function() {
        $("#six-one").addClass('animated fadeIn')
        $("#six-two").addClass('animated fadeIn')
    }, 500);
    setTimeout(function() {
        $("#six-three").addClass('animated fadeIn')
        $("#six-four").addClass('animated fadeIn')
    }, 2800);
    setTimeout(function() {
        eye_timer = setInterval(function() {
            eye("#openSixEye", changeSrc)
        }, 50);
    }, 1800);
}

function pegeSeven() {
    setTimeout(function() {
        $("#seven-people").addClass('animated fadeIn');
    }, 100);
    setTimeout(function() {
        $("#seven-one").addClass('animated fadeIn');
    }, 500);
    setTimeout(function() {
        $("#seven-two").addClass('animated fadeIn');
    }, 1500);
    setTimeout(function() {
        $("#seven-three").addClass('animated fadeIn');
    }, 2500);
    setTimeout(function() {
        $("#seven-four").addClass('animated fadeIn');
    }, 3300);
    setTimeout(function() {
        $("#seven-five").addClass('animated fadeIn');
    }, 3800);
    setTimeout(function() {
        $("#seven-six").addClass('animated fadeIn');
    }, 4300);
    setTimeout(function() {
        $("#seven-seven").addClass('animated fadeIn');
    }, 4800);
    setTimeout(function() {
        $("#seven-eight").addClass('animated fadeIn');
    }, 5300);
    setTimeout(function() {
        eye_timer = setInterval(function() {
            eye("#openSevenEye", changeSrc)
        }, 50);
    }, 1500);
}

function pageEight() {
    // $("#eight-bg").addClass('animated fadeIn')
    setTimeout(function() {
        $("#eight-one").addClass('animated fadeIn')
    }, 500);
    setTimeout(function() {
        $("#eight-two").addClass('animated fadeIn')
    }, 1000);
    setTimeout(function() {
        $("#eight-three").addClass('animated fadeIn')
    }, 1500);
    setTimeout(function() {
        $("#eight-four").addClass('animated fadeIn')
    }, 2000);
    setTimeout(function() {
        $("#eight-five").addClass('animated fadeIn')
    }, 2500);
    setTimeout(function() {
        $("#eight-six").addClass('animated fadeIn')
    }, 3000);
    setTimeout(function() {
        $("#eight-seven").addClass('animated fadeIn')
    }, 3500);
    setTimeout(function() {
        $("#eight-eight").addClass('animated fadeIn')
    }, 4000);
    setTimeout(function() {
        $("#eight-nine").addClass('animated fadeIn')
    }, 4500);
    setTimeout(function() {
        $("#eight-ten").addClass('animated fadeIn')
    }, 5000);
    setTimeout(function() {
        $("#eight-eleven").addClass('animated fadeIn')
    }, 5500);
    setTimeout(function() {
        $("#eight-twelve").addClass('animated fadeIn')
    }, 6000);
    setTimeout(function() {
        eye_timer = setInterval(function() {
            eye("#openEightEye", changeSrc)
        }, 50);
    }, 2000);

}

function pageNine() {
    setTimeout(function() {
        $("#nineGirl").addClass('animated fadeIn')
        $("#nineBoy").addClass('animated fadeIn')
    }, 100);
    setTimeout(function() {
        $("#nine-two").addClass('animated fadeIn')
    }, 500);
    setTimeout(function() {
        $("#nine-three").addClass('animated fadeIn')
    }, 1000);
    setTimeout(function() {
        $("#nine-four").addClass('animated fadeIn')
    }, 1500);
    setTimeout(function() {
        $("#nine-five").addClass('animated fadeIn')
    }, 2000);
}

function pageTen() {
    setTimeout(function() {
        $("#ten-people").addClass('animated fadeIn')
        $("#ten-one").addClass('animated fadeIn')
    }, 100);
    setTimeout(function() {
        $("#ten-two").addClass('animated fadeIn')
    }, 500);
    setTimeout(function() {
        $("#ten-three").addClass('animated fadeIn')
    }, 1000);
    setTimeout(function() {
        $("#ten-four").addClass('animated fadeIn')
    }, 1500);
    setTimeout(function() {
        $("#ten-five").addClass('animated fadeIn')
    }, 2500);
    setTimeout(function() {
        $("#ten-six").addClass('animated fadeIn')
    }, 3000);
    setTimeout(function() {
        $("#ten-seven").addClass('animated fadeIn')
    }, 3500);
    setTimeout(function() {
        $("#ten-eight").addClass('animated fadeIn')
    }, 4000);
    setTimeout(function() {
        $("#ten-nine").addClass('animated fadeIn')
    }, 4500);

}

function pageEleven() {
    setTimeout(function() {
        $("#eleven-one").addClass('animated fadeIn')
    }, 100);
    setTimeout(function() {
        $("#eleven-two").addClass('animated fadeIn')
    }, 500);
    setTimeout(function() {
        $("#eleven-three").addClass('animated fadeIn')
    }, 1000);
    setTimeout(function() {
        $("#girl2").animate({
            left: '0.2rem'
        }, "slow")
        $("#boy2").animate({
            right: '0.2rem'
        }, "slow")
    }, 2500);
}

function pageTwelve() {
    setTimeout(function() {
        $("#twelve-one").addClass('animated fadeIn')
    }, 100);
    setTimeout(function() {
        $("#twelve-two").addClass('animated fadeIn')
    }, 500);
    setTimeout(function() {
        $("#twelve-three").addClass('animated fadeIn')
    }, 1000);
    setTimeout(function() {
        $("#twelve-four").addClass('animated fadeIn')
    }, 1500);
    setTimeout(function() {
        $("#twelve-five").addClass('animated fadeIn')
    }, 2000);
}
//眨眼
function eye(elem, src) {
    setTimeout(function() {
        $(elem).attr("src", changeSrc);
    }, 500);
    setTimeout(function() {
        $(elem).attr("src", defaultSrc);

    }, 1500);
    clearInterval(eye_timer);
}
//微信配置
wx.config({
    // 配置信息, 即使不正确也能使用 wx.ready
    debug: false,
    appId: 'wudjffi',
    timestamp: 1,
    nonceStr: '',
    signature: '',
    jsApiList: []
});
//背景音乐
function audioPlay(elem) {
    wx.ready(function() {
        document.getElementById(elem).play();
    });
    var media = document.getElementById(elem);
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        WeixinJSBridge.invoke('getNetworkType', {}, function(res) {
            media.play();
        });
    }
}
//微信摇一摇
function weixinOpen() {
    //先判断设备是否支持HTML5摇一摇功能
    if (window.DeviceMotionEvent) {
        //获取移动速度，得到device移动时相对之前某个时间的差值比
        window.addEventListener('devicemotion', weixin, false);
    } else {
        alert('您好，你目前所用的设备好像不支持重力感应哦！');
    }
}
//预加摇一摇声音
var shakeAudio = new Audio();
shakeAudio.src = './video/shake_sound.mp3';
var shake_options = {
    preload: 'auto'
}
for (var key in shake_options) {
    if (shake_options.hasOwnProperty(key) && (key in shakeAudio)) {
        shakeAudio[key] = shake_options[key];
    }
}
//设置临界值,这个值可根据自己的需求进行设定，默认就3000也差不多了
var shakeThreshold = 800;
//设置最后更新时间，用于对比
var lastUpdate = 0;
//设置位置速率
var curShakeX = 0,
    curShakeY = 0,
    curShakeZ = 0,
    lastShakeX = 0,
    lastShakeY = 0,
    lastShakeZ = 0;

function weixin(event) {

    //获得重力加速
    var acceleration = event.accelerationIncludingGravity;

    //获得当前时间戳
    var curTime = new Date().getTime();

    if ((curTime - lastUpdate) > 100) {

        //时间差
        var diffTime = curTime - lastUpdate;
        lastUpdate = curTime;


        //x轴加速度
        curShakeX = acceleration.x;
        //y轴加速度
        curShakeY = acceleration.y;
        //z轴加速度
        curShakeZ = acceleration.z;

        var speed = Math.abs(curShakeX + curShakeY + curShakeZ - lastShakeX - lastShakeY - lastShakeZ) / diffTime * 10000;

        if (speed > shakeThreshold) {
            //TODO 相关方法，比如：
            wx.ready(function() {
                shakeAudio.play();
            });
            if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
                WeixinJSBridge.invoke('getNetworkType', {}, function(res) {
                    shakeAudio.play();
                });
            }
            shakeAudio.play();
            $('#twelve-threeshake_box').addClass('shake_box_focus');
            clearTimeout(shakeTimeout);
            var shakeTimeout = setTimeout(function() {
                $('#twelve-three').removeClass('shake_box_focus');
            }, 1000)
            setTimeout(function() {
                $.fn.fullpage.moveTo(13, 0);
            }, 4000);

        }

        lastShakeX = curShakeX;
        lastShakeY = curShakeY;
        lastShakeZ = curShakeZ;
    }
}