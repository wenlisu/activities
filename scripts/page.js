$(function() {
    setTimeout(function() {
        next_pageone();
        $.fn.fullpage.setAllowScrolling(false);
    }, 50);
    $('#fullpage').fullpage({
        anchors: ['next_pageone', 'next_pagetwo', 'next_pagethree', 'next_pagefour', 'next_pagefive', 'next_pagesix', 'next_pageseven', 'next_pageeighty', 'next_pagenine', 'next_pageten'],
        lazyLoading: true,
        afterLoad: function(link, index) {
            if ($('.next_pageone').hasClass('active')) {
                next_pageone();
                $.fn.fullpage.setAllowScrolling(false);
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
            //二部分第10页
            if (index == 10) {
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

function next_pageone() {
    wx.ready(function() {
        music2.play();
    });
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        WeixinJSBridge.invoke('getNetworkType', {}, function(res) {
            music2.play();
        });
    }
    music2.play();
    // 文字逐行显示
    $("#next_pageone_one").addClass('animated zoomIn opacity-class');
    $("#next_pageone_two").addClass('animated zoomIn opacity-class');
    $("#next_pageone_three").addClass('animated zoomIn opacity-class');
    $("#next_pageone_four").addClass('animated zoomIn opacity-class');
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
    }, 4000);
    setTimeout(function() {
        console.log('2');
        $.fn.fullpage.moveTo(2, 0);
    }, 5000);
}

function next_pageTwo() {
    $("#next_two-one").addClass('animated zoomIn opacity-class ');
    $("#next_two-two").addClass('animated zoomIn opacity-class');
    $("#next_two-three").addClass('animated zoomIn opacity-class');
    $("#next_two-four").addClass('animated zoomIn opacity-class');
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
    }, 5000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(3, 0);
    }, 6000);
}

function next_pageThree() {
    $("#next_pagethree-bg").addClass('animated zoomIn opacity-class');
    $("#next_three-one").addClass('animated zoomIn opacity-class');
    $("#next_three-two").addClass('animated zoomIn opacity-class');
    setTimeout(function() {
        $("#next_three-one").addClass('animated zoomOut');
    }, 3200);
    setTimeout(function() {
        $("#next_three-two").addClass('animated zoomOut');
    }, 2600);
    setTimeout(function() {
        $("#next_pagethree-bg").addClass('animated zoomOut');
    }, 4000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(4, 0);
    }, 4500);
}

function next_pageFour() {
    $("#next_four-one").addClass('animated zoomIn opacity-class');
    $("#next_four-two").addClass('animated zoomIn opacity-class');
    $("#next_four-three").addClass('animated zoomIn opacity-class');
    $("#next_four-four").addClass('animated zoomIn opacity-class');
    $("#next_four-five").addClass('animated zoomIn opacity-class');
    // setTimeout(function() {
    //     $("#next_four-one").addClass('animated zoomOut');
    //     $("#next_four-two").addClass('animated zoomOut');
    //     $("#next_four-three").addClass('animated zoomOut');
    //     $("#next_four-four").addClass('animated zoomOut');
    //     $("#next_four-five").addClass('animated zoomOut');
    // }, 5000);
    setTimeout(function() {
        $("#next_four-one").addClass('animated zoomOut');
    }, 6400);
    setTimeout(function() {
        $("#next_four-two").addClass('animated zoomOut');
    }, 5400);
    setTimeout(function() {
        $("#next_four-three").addClass('animated zoomOut');
    }, 4400);
    setTimeout(function() {
        $("#next_four-four").addClass('animated zoomOut');
    }, 3400);
    // setTimeout(function () {
    //     $("#next_four-five").addClass('animated zoomOut');
    // }, 2000);
    setTimeout(function() {
        // $.fn.fullpage.moveTo(5, 0);
    }, 6400);
}

function next_pageFive() {
    $("#next_five-one").addClass('animated rotateIn');
    setTimeout(function() {
        $("#next_five-two").addClass('animated zoomIn opacity-class');
    }, 1500);
    setTimeout(function() {
        $("#next_five-three").addClass('animated zoomIn opacity-class');
    }, 2200);
    setTimeout(function() {
        $("#next_five-four").addClass('animated zoomIn opacity-class');
    }, 2900);
    setTimeout(function() {
        $("#next_five-one").addClass('animated zoomOutLeft');
        $("#next_five-two").addClass('animated zoomOutLeft');
        $("#next_five-three").addClass('animated zoomOutLeft');
        $("#next_five-four").addClass('animated zoomOutLeft');
    }, 4000);

    setTimeout(function() {
        $.fn.fullpage.moveTo(6, 0);
    }, 6000);
}

function next_pageSix() {
    $("#next_six-one").addClass('animated zoomInLeft opacity-class');
    setTimeout(function() {
        $("#next_six-two").addClass('animated zoomInLeft opacity-class');
    }, 1000)
    setTimeout(function() {
        $("#next_six-three").addClass('animated zoomInLeft opacity-class');

    }, 2000)
    setTimeout(function() {
        $("#next_six-four").addClass('animated zoomInLeft opacity-class');
    }, 3000)
    setTimeout(function() {
        $("#next_six-five").addClass('animated zoomInLeft opacity-class');
    }, 4000)

    setTimeout(function() {
        $("#next_six-one").addClass('animated zoomOutLeft');
        $("#next_six-two").addClass('animated zoomOutLeft');
        $("#next_six-three").addClass('animated zoomOutLeft');
        $("#next_six-four").addClass('animated zoomOutLeft');
        $("#next_six-five").addClass('animated zoomOut');
    }, 6000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(7, 0);
    }, 7000);
}

function next_pageSeven() {
    $("#next_seven-one").addClass('animated zoomInRight opacity-class');
    $("#next_seven-two").addClass('animated zoomInRight opacity-class');
    $("#next_seven-three").addClass('animated zoomInRight opacity-class');
    setTimeout(function() {
        $("#next_seven-one").addClass('animated zoomOutRight');
    }, 5400);
    setTimeout(function() {
        $("#next_seven-two").addClass('animated zoomOutRight');
    }, 4000);
    setTimeout(function() {
        $("#next_seven-three").addClass('animated zoomOutRight');
    }, 3000);
    setTimeout(function() {
        $.fn.fullpage.moveTo(8, 0);
    }, 6000);
}

function next_pageEight() {
    $("#next_eight-one").addClass('animated zoomInLeft opacity-class');
    setTimeout(function() {
        $("#next_eight-two").addClass('animated zoomInLeft opacity-class');
    }, 1000)
    setTimeout(function() {
        $("#next_eight-three").addClass('animated zoomInLeft opacity-class');
    }, 2000)
    setTimeout(function() {
        $("#next_eight-four").addClass('animated zoomInLeft opacity-class');
    }, 3000)
    setTimeout(function() {
        $("#next_eight-one").addClass('animated zoomOutLeft');
        $("#next_eight-two").addClass('animated zoomOutLeft');
        $("#next_eight-three").addClass('animated zoomOutLeft');
        $("#next_eight-four").addClass('animated zoomOutLeft');
    }, 4500);
    setTimeout(function() {
        $.fn.fullpage.moveTo(9, 0);
    }, 5500);
}

function next_pageNine() {
    $("#next_nine-one").addClass('animated zoomIn opacity-class');
    setTimeout(function() {
        $("#next_nine-two").addClass('animated zoomIn opacity-class');
    }, 1000)
    setTimeout(function() {
        $("#next_nine-three").addClass('animated zoomIn opacity-class');
    }, 2000)
    setTimeout(function() {
        $("#next_nine-four").addClass('animated zoomIn opacity-class');
    }, 3000)
    setTimeout(function() {
        $("#next_nine-one").addClass('animated zoomOutLeft');
        $("#next_nine-two").addClass('animated zoomOutRight');
        $("#next_nine-three").addClass('animated zoomOutUp');
        $("#next_nine-four").addClass('animated zoomOutDown');
    }, 4000);
    setTimeout(function() {

        $.fn.fullpage.moveTo(10, 0);
    }, 7000);
}

function next_pageTen() {
    $("#next_ten-two").addClass('animated fadeIn');
    $("#next_ten-one").addClass('animated zoomIn opacity-class');
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

var music2 = new Audio();
music2.src = './video/music.mp3';
var music_options = {
    preload: 'auto'
}
for (var key in music_options) {
    if (music_options.hasOwnProperty(key) && (key in music2)) {
        music2[key] = music_options[key];
    }
}