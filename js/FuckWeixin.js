function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/ QQ/i) == " qq" ) {
        return true;
    } else {
        return false;
    }
}
var isWeixin = is_weixin();
// var isWeixin = false;
var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;

function loadHtml() {
    var div = document.createElement('div');
    div.id = 'weixin-tip';
    // div.innerHTML = '<img src="<?php $this->options->themeUrl('assets/fuckweixin.png'); ?>" alt="微信打开"/>';
    div.innerHTML = '<img src="https://i.loli.net/2019/06/25/5d11d9c19065848452.png" alt="微信打开"/>';
    document.body.appendChild(div);
}

function loadStyleText(cssText) {
    var style = document.createElement('style');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    try {
        style.appendChild(document.createTextNode(cssText));
    } catch (e) {
        style.styleSheet.cssText = cssText; //ie9以下
    }
    var head = document.getElementsByTagName("head")[0]; //head标签之间加上style样式
    head.appendChild(style);
}

var cssText = "img{width: 100%; height: auto;} #weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 1050;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;}";
if (isWeixin) {
    loadHtml();
    loadStyleText(cssText);
}
