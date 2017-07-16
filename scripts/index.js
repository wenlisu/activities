$(document).ready(function() {
    var loaderAnimation = $("#html5Loader").LoaderAnimation({
        lineWidth: 5,
        /* set preloader's line width */
        color: "#db9999",
        /* set preloader color */
        glowColor: "#FFF",
        /* set shadow color */
        radius: 60,
        /* set the preloader radius (JUST FOR CIRCULAR PRELOADER) */
        font: "normal 25px Arial",
        /* set preloader font (you can embed a font by css and use it here) */
        onComplete: function() {
            $('#fullpage').css('display', 'block');
            init();
            //背景音乐            
            var music = new Audio();
            music.src = './video/yinyue.mp3';
            var music_options = {
                preload: 'auto'
            }
            for (var key in music_options) {
                if (music_options.hasOwnProperty(key) && (key in music)) {
                    music[key] = music_options[key];
                }
            }
            wx.ready(function() {
                music.play();
            });
            var media = document.getElementById('music');
            if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
                WeixinJSBridge.invoke('getNetworkType', {}, function(res) {
                    media.play();
                });
            }
            music.play();
        }
    });
    $.html5Loader({
        filesToLoad: {
            "files": [{ "type": "IMAGE", "size": 2913, "source": "images/one/1001.png" },
                { "type": "IMAGE", "size": 2095, "source": "images/one/1002.png" },
                { "type": "IMAGE", "size": 3188, "source": "images/one/1003.png" },
                { "type": "IMAGE", "size": 2650, "source": "images/one/101.png" },
                { "type": "IMAGE", "size": 1210, "source": "images/one/102.png" },
                { "type": "IMAGE", "size": 2384, "source": "images/one/103.png" },
                { "type": "IMAGE", "size": 1743, "source": "images/one/104.png" },
                { "type": "IMAGE", "size": 1632, "source": "images/one/105.png" },
                { "type": "IMAGE", "size": 2299, "source": "images/one/106.png" },
                { "type": "IMAGE", "size": 3628, "source": "images/one/107.png" },
                { "type": "IMAGE", "size": 68586, "source": "images/one/10_bg.png" },
                { "type": "IMAGE", "size": 13271, "source": "images/one/10_bgPeople.png" },
                { "type": "IMAGE", "size": 2217, "source": "images/one/10_love1.png" },
                { "type": "IMAGE", "size": 1758, "source": "images/one/10_love2.png" },
                { "type": "IMAGE", "size": 1284, "source": "images/one/10_love3.png" },
                { "type": "IMAGE", "size": 1546, "source": "images/one/10_love4.png" },
                { "type": "IMAGE", "size": 1223, "source": "images/one/10_love5.png" },
                { "type": "IMAGE", "size": 1078, "source": "images/one/10_love6.png" },
                { "type": "IMAGE", "size": 12202, "source": "images/one/10_people.png" },
                { "type": "IMAGE", "size": 54418, "source": "images/one/10bg.png" },
                { "type": "IMAGE", "size": 1128, "source": "images/one/1101.png" },
                { "type": "IMAGE", "size": 2068, "source": "images/one/1102.png" },
                { "type": "IMAGE", "size": 5343, "source": "images/one/11_boy.png" },
                { "type": "IMAGE", "size": 5313, "source": "images/one/11_girl.png" },
                { "type": "IMAGE", "size": 11345, "source": "images/one/11_love.png" },
                { "type": "IMAGE", "size": 76088, "source": "images/one/11bg.png" },
                { "type": "IMAGE", "size": 2285, "source": "images/one/1201.png" },
                { "type": "IMAGE", "size": 2214, "source": "images/one/1202.png" },
                { "type": "IMAGE", "size": 5433, "source": "images/one/1203.png" },
                { "type": "IMAGE", "size": 2697, "source": "images/one/1204.png" },
                { "type": "IMAGE", "size": 2351, "source": "images/one/1205.png" },
                { "type": "IMAGE", "size": 918, "source": "images/one/201.png" },
                { "type": "IMAGE", "size": 7084, "source": "images/one/202.png" },
                { "type": "IMAGE", "size": 2293, "source": "images/one/203.png" },
                { "type": "IMAGE", "size": 8927, "source": "images/one/204.png" },
                { "type": "IMAGE", "size": 6013, "source": "images/one/301.png" },
                { "type": "IMAGE", "size": 5034, "source": "images/one/302.png" },
                { "type": "IMAGE", "size": 6843, "source": "images/one/303.png" },
                { "type": "IMAGE", "size": 6007, "source": "images/one/304.png" },
                { "type": "IMAGE", "size": 853, "source": "images/one/401.png" },
                { "type": "IMAGE", "size": 8784, "source": "images/one/5_boy.png" },
                { "type": "IMAGE", "size": 8006, "source": "images/one/5_girl.png" },
                { "type": "IMAGE", "size": 2632, "source": "images/one/601.png" },
                { "type": "IMAGE", "size": 3906, "source": "images/one/602.png" },
                { "type": "IMAGE", "size": 13808, "source": "images/one/603.png" },
                { "type": "IMAGE", "size": 13276, "source": "images/one/604.png" },
                { "type": "IMAGE", "size": 18041, "source": "images/one/6_flower.png" },
                { "type": "IMAGE", "size": 24058, "source": "images/one/6_people.png" },
                { "type": "IMAGE", "size": 1846, "source": "images/one/701.png" },
                { "type": "IMAGE", "size": 3625, "source": "images/one/702.png" },
                { "type": "IMAGE", "size": 1419, "source": "images/one/703.png" },
                { "type": "IMAGE", "size": 1196, "source": "images/one/704.png" },
                { "type": "IMAGE", "size": 946, "source": "images/one/705.png" },
                { "type": "IMAGE", "size": 959, "source": "images/one/706.png" },
                { "type": "IMAGE", "size": 859, "source": "images/one/707.png" },
                { "type": "IMAGE", "size": 825, "source": "images/one/708.png" },
                { "type": "IMAGE", "size": 1874, "source": "images/one/7_boyEye.png" },
                { "type": "IMAGE", "size": 2951, "source": "images/one/7_girlEye.png" },
                { "type": "IMAGE", "size": 24462, "source": "images/one/7_people.png" },
                { "type": "IMAGE", "size": 2036, "source": "images/one/801.png" },
                { "type": "IMAGE", "size": 1679, "source": "images/one/802.png" },
                { "type": "IMAGE", "size": 2974, "source": "images/one/803.png" },
                { "type": "IMAGE", "size": 3335, "source": "images/one/804.png" },
                { "type": "IMAGE", "size": 703, "source": "images/one/8_smile1.png" },
                { "type": "IMAGE", "size": 625, "source": "images/one/8_smile2.png" },
                { "type": "IMAGE", "size": 750, "source": "images/one/8_smile3.png" },
                { "type": "IMAGE", "size": 922, "source": "images/one/8_smile7.png" },
                { "type": "IMAGE", "size": 3054, "source": "images/one/901.png" },
                { "type": "IMAGE", "size": 3006, "source": "images/one/902.png" },
                { "type": "IMAGE", "size": 2216, "source": "images/one/903.png" },
                { "type": "IMAGE", "size": 11904, "source": "images/one/9_boy.png" },
                { "type": "IMAGE", "size": 9909, "source": "images/one/9_girl.png" },
                { "type": "IMAGE", "size": 131514, "source": "images/one/bg-1.png" },
                { "type": "IMAGE", "size": 131514, "source": "images/one/bg-∏±±æ.png" },
                { "type": "IMAGE", "size": 80503, "source": "images/one/bg.png" },
                { "type": "IMAGE", "size": 39894, "source": "images/one/bottom_flower.png" },
                { "type": "IMAGE", "size": 1949, "source": "images/one/headset.png" },
                { "type": "IMAGE", "size": 9084, "source": "images/one/left_flower.png" },
                { "type": "IMAGE", "size": 7945, "source": "images/one/max_love.png" },
                { "type": "IMAGE", "size": 32535, "source": "images/one/max_love_font.png" },
                { "type": "IMAGE", "size": 570, "source": "images/one/min_love.png" },
                { "type": "IMAGE", "size": 5272, "source": "images/one/music.gif" },
                { "type": "IMAGE", "size": 9620, "source": "images/one/right_flower.png" },
                { "type": "IMAGE", "size": 58126, "source": "images/one/top_flower.png" },
                { "type": "IMAGE", "size": 9160, "source": "images/one/xiaolian.png" },
                {
                    "type": "AUDIO",
                    "sources": {
                        "mp3": {
                            "source": "video/yinyue.mp3",
                            "size": 2820563
                        }
                    }
                }
            ]
        },
        onUpdate: loaderAnimation.update
    });
});

function init() {
    $(function() {
        setTimeout(function() {
            pageOne();
            $.fn.fullpage.setAllowScrolling(false);
        }, 50);
        $('#fullpage').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12'],
            lazyLoading: true,
            loopBottom: false,
            afterLoad: function(link, index) {
                // 禁止手动进入下一页
                $.fn.fullpage.setAllowScrolling(false);
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
            }
        });
    });
    var eye_timer, changeSrc = './images/one/6_people.png',
        defaultSrc = './images/one/7_people.png';

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
        setTimeout(function() {
            // $.fn.fullpage.moveTo(2, 0);
            $.fn.fullpage.moveSectionDown();
        }, 16000);
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
        setTimeout(function() {
            // $.fn.fullpage.moveTo(3, 0);
            $.fn.fullpage.moveSectionDown();
        }, 4000);
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
        setTimeout(function() {
            // $.fn.fullpage.moveTo(4, 0);
            $.fn.fullpage.moveSectionDown();
        }, 6000);
    }

    function pageFour() {
        // $("#four-bg").addClass('animated fadeIn')
        setTimeout(function() {
            $("#four-one").addClass('animated fadeIn')
        }, 100);
        setTimeout(function() {
            // $.fn.fullpage.moveTo(5, 0);
            $.fn.fullpage.moveSectionDown();
        }, 2500);
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
        setTimeout(function() {
            // $.fn.fullpage.moveTo(6, 0);
            $.fn.fullpage.moveSectionDown();
        }, 5000);
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
        setTimeout(function() {
            // $.fn.fullpage.moveTo(7, 0);
            $.fn.fullpage.moveSectionDown();
        }, 5500)
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
        setTimeout(function() {
            // $.fn.fullpage.moveTo(8, 0);
            $.fn.fullpage.moveSectionDown();
        }, 8000)
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
        setTimeout(function() {
            // $.fn.fullpage.moveTo(9, 0);
            $.fn.fullpage.moveSectionDown();
        }, 8000)
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
        setTimeout(function() {
            // $.fn.fullpage.moveTo(10, 0);
            $.fn.fullpage.moveSectionDown();
        }, 4000)
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
        setTimeout(function() {
            // $.fn.fullpage.moveTo(11, 0)
            $.fn.fullpage.moveSectionDown();
        }, 8000)
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
        setTimeout(function() {
            // $.fn.fullpage.moveTo(12, 0);
            $.fn.fullpage.moveSectionDown();
        }, 4500)
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
                setTimeout(function() {
                    $('#gif').css('display', 'block');
                }, 500);
                setTimeout(function() {
                    window.removeEventListener('devicemotion', weixin, false);
                    // window.location.href = "http://gzabctest.3gmsc.com/zrproject/lover/loveOAuth/wx42430341bf34096c/c798f14a4892f6067f8ecf897d918988";
                    window.location.href = "./page.html";
                    $('#gif').css('display', 'none');
                }, 3000);
            }
            lastShakeX = curShakeX;
            lastShakeY = curShakeY;
            lastShakeZ = curShakeZ;
        }
    }
}