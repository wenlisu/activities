<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!doctype html>
<html>
<head>
<base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1,user-scalable=no">
    <title>
        H5页面
    </title>
    <link rel="stylesheet" href="http://cdn.dowebok.com/77/css/jquery.fullPage.css" />
    <script src="http://cdn.staticfile.org/jquery/1.8.3/jquery.min.js"></script>
    <script src="http://cdn.dowebok.com/77/js/jquery.fullPage.min.js"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script src="bank/H5Love-master/scripts/flexible.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
    <link rel="stylesheet" href="bank/H5Love-master/styles/showBox.css" />
    <link rel="stylesheet" href="bank/H5Love-master/styles/pagetwo.css" />
</head>

<body>
    <div id="fullpage">
        <!-- 第一屏 -->
        <div class="section next_pageone" data-anchor="next_pageone">
            <audio id="music2" src="bank/H5Love-master/video/music.mp3" autoplay="" preload="" hidden loop></audio>
            <div id="base_bg"></div>
            <div id="next_pageone_four">
                <img src="bank/H5Love-master/images/two/1_blling.png" alt="">
            </div>
            <div id="next_pageone_one">
                <img src="bank/H5Love-master/images/two/101.png" alt="">
            </div>
            <div id="next_pageone_two">
                <img src="bank/H5Love-master/images/two/102.png" alt="">
            </div>
            <div id="next_pageone_three">
                <img src="bank/H5Love-master/images/two/103.png" alt="">
            </div>
        </div>
        <!-- 第二屏 -->
        <div class="section next_section next_pagetwo" data-anchor="next_pagetwo">
            <div id="next_pagetwo-bg"></div>
            <div id="next_two-one">
                <img src="bank/H5Love-master/images/two/201.png" alt="">
            </div>
            <div id="next_two-two">
                <img src="bank/H5Love-master/images/two/202.png" alt="">
            </div>
            <div id="next_two-three">
                <img src="bank/H5Love-master/images/two/203.png" alt="">
            </div>
            <div id="next_two-four">
                <img src="bank/H5Love-master/images/two/2_dot.png" alt="">
            </div>
        </div>
        <!-- 第三屏 -->
        <div class="section next_section next_pagethree" data-anchor="next_pagethree">
            <div id="next_pagethree-bg-one"></div>
            <div id="next_pagethree-bg">
                <img src="bank/H5Love-master/images/two/3bg.png" alt="">
            </div>
            <div id="next_three-one">
                <img src="bank/H5Love-master/images/two/301.png" alt="">
            </div>
            <div id="next_three-two">
                <img src="bank/H5Love-master/images/two/302.png" alt="">
            </div>
        </div>
        <!-- 第四屏 -->
        <div class="section next_section next_pagefour" data-anchor="next_pagefour">
            <div id="next_pagefour-bg"></div>
            <div id="next_four-one">
                <img src="bank/H5Love-master/images/two/401.png" alt="">
            </div>
            <div id="next_four-two">
                <img src="bank/H5Love-master/images/two/402.png" alt="">
            </div>
            <div id="next_four-three">
                <img src="bank/H5Love-master/images/two/403.png" alt="">
            </div>
            <div id="next_four-four">
                <img src="bank/H5Love-master/images/two/404.png" alt="">
            </div>
            <div id="next_four-five">
                <img src="bank/H5Love-master/images/two/4_dot.png" alt="">
            </div>
        </div>
        <!-- 第五屏 -->
        <div class="section next_section next_pagefive" data-anchor="next_pagefive">
            <div id="next_pagefive-bg"></div>
            <div id="next_five-one">
                <img src="bank/H5Love-master/images/two/504.png" alt="">
            </div>
            <div id="next_five-two">
                <img src="bank/H5Love-master/images/two/501.png" alt="">
            </div>
            <div id="next_five-three">
                <img src="bank/H5Love-master/images/two/502.png" alt="">
            </div>
            <div id="next_five-four">
                <img src="bank/H5Love-master/images/two/503.png" alt="">
            </div>
        </div>

        <!-- 第六屏 -->
        <div class="section next_section next_pagesix" data-anchor="next_pagesix">
            <div id="next_pagesix-bg"></div>
            <div id="next_six-one">
                <img src="bank/H5Love-master/images/two/601.png" alt="">
            </div>
            <div id="next_six-two">
                <img src="bank/H5Love-master/images/two/602.png" alt="">
            </div>
            <div id="next_six-three">
                <img src="bank/H5Love-master/images/two/603.png" alt="">
            </div>
            <div id="next_six-four">
                <img src="bank/H5Love-master/images/two/604.png" alt="">
            </div>
            <div id="next_six-five">
                <img src="bank/H5Love-master/images/two/6_bg2.png" alt="">
            </div>
        </div>
        <!-- 第7屏 -->
        <div class="section next_section next_pageseven" data-anchor="next_pageseven">
            <div id="next_pageseven-bg"></div>
            <div id="next_seven-one">
                <img src="bank/H5Love-master/images/two/701.png" alt="">
            </div>
            <div id="next_seven-two">
                <img src="bank/H5Love-master/images/two/702.png" alt="">
            </div>
            <div id="next_seven-three">
                <img src="bank/H5Love-master/images/two/703.png" alt="">
            </div>

        </div>
        <!-- 第8屏 -->
        <div class="section next_section next_pageeight" data-anchor="next_pageeight">
            <div id="next_pageeight-bg"></div>
            <div id="next_eight-one">
                <img src="bank/H5Love-master/images/two/801.png" alt="">
            </div>
            <div id="next_eight-two">
                <img src="bank/H5Love-master/images/two/802.png" alt="">
            </div>
            <div id="next_eight-three">
                <img src="bank/H5Love-master/images/two/803.png" alt="">
            </div>
            <div id="next_eight-four">
                <img src="bank/H5Love-master/images/two/804.png" alt="">
            </div>
        </div>
        <!-- 第九屏 -->
        <div class="section next_section next_pagenine" data-anchor="next_pagenine">
            <div id="next_pagenine-bg"></div>
            <div id="next_nine-one">
                <img src="bank/H5Love-master/images/two/901.png" alt="">
            </div>
            <div id="next_nine-two">
                <img src="bank/H5Love-master/images/two/902.png" alt="">
            </div>
            <div id="next_nine-three">
                <img src="bank/H5Love-master/images/two/903.png" alt="">
            </div>
            <div id="next_nine-four">
                <img src="bank/H5Love-master/images/two/9_logo.png" alt="">
            </div>
            <div id="next_nine-five">
                <img src="bank/H5Love-master/images/two/9_bling.png" alt="">
            </div>
        </div>
        <!-- 第十屏 -->
        <div class="section next_section next_pageten" data-anchor="next_pageten">
            <div id="next_pageten-bg"></div>
            <div id="next_ten-one">
                <img src="bank/H5Love-master/images/two/10_love.png" alt="">
            </div>
            <div id="next_ten-two">
                <img src="bank/H5Love-master/images/two/1101.png" alt="">
            </div>
            <div id="next_ten-three">
                <img src="bank/H5Love-master/images/two/10_sling.png" alt="">
            </div>
            <div id="next_ten-four">
                <img src="bank/H5Love-master/images/two/10_gold.png" alt="">
            </div>
            <div id="next_ten-five">
                <div id="main_box">
                    <p class="top_p">COMMENT互动评论</p>
                    <div id="item_box">
                        
                    </div>
                    <!-- 按钮      -->
                    <div id="Btn">
						<input type="hidden" id="openId" name="openId" value="${openId }"  />
                        <input type="text" placeholder="写上你的祝福语" class="ipt" id="msgContent" name="msgContent">
                        <div id="send" onclick="sendMsg();">发送</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="bank/H5Love-master/scripts/page.js"></script>
<script>
$(function() {
	getMsg();
});

function getMsg() {
	var d = {
	
	}
	$.ajax({
		url : "lover/getMsgList",
		type : "post",
		dataType : "text",
		timeout : 10000,
		cache : false,
		async : false,
		data : d,
		success : function(data) {
			data = eval("(" + data + ")");
			var suli=data.rows;
			//alert(suli);
			if(suli.length>0){
				var temp="";
				for (var i = 0; i < suli.length; i++) {
					temp+='<div id="item"><div id="in_box"><div id="item_left">';
					if(suli[i].openId!=null){
						temp+=' <img src="'+suli[i].openId.headImg+'" alt="" /></div>';
						temp+='<div id="item_right"><p class="p1"><em>'+suli[i].openId.nickName+'</em></p>'
					}else{
						temp+=' <img src="bank/H5Love-master/images/two/pic.png" alt="" /></div>';
						temp+='<div id="item_right"><p class="p1"><em></em></p>'
					}
					temp+='<p class="p2">'+suli[i].msgContent+'</p>';
					temp+='<p class="p3">'+suli[i].createTime+'</p>';
				}
				$("#item_box").html(temp);
			}
		},
		error : function(a, b, c, d, e) {
		}
	});
}

function sendMsg() {
	var openId=$("#openId").val();
	var msg=$("#msgContent").val();
	if(msg!=null){
		var d = {
		openId:openId,
		msgContent:msg
		}
		$.ajax({
			url : "lover/sendMsg",
			type : "post",
			dataType : "text",
			timeout : 10000,
			cache : false,
			async : false,
			data : d,
			success : function(data) {
				alert("提交成功");
				getMsg();
			},
			error : function(a, b, c, d, e) {
			}
		});
	}else{
		alert("请输入留言内容");
	}
}
                        
</script>
</html>