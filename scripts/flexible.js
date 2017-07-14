(function(doc,win){
    var docEl=doc.documentElement,
        resizeEvt ='orientationchange' in window ? 'orientationchange' : 'resize',
        recalc =function(){
            var clientWidth =docEl.clientWidth;
            if(!clientWidth) return;
            if(clientWidth > 414){
                docEl.style.fontSize='65px';
            }else{
                docEl.style.fontSize=100 * (clientWidth / 640)+'px';//750这个值，根据设计师的psd宽度来修改，是多少就多少
            }
        };
        if(!doc.addEventListener) return;
        win.addEventListener(resizeEvt,recalc,false);
        doc.addEventListener('DOMContentLoaded',recalc,false)
})(document,window)


