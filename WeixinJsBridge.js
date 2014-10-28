 window.shareConfig = {
        link: "http://" + location.host + location.pathname + "?_wv=1025&PTAG=" + (getEnv()=="weixin"?"17018.1.4":"17018.2.5"),
        title: "抢1111元红包",
        desc: "给大家发红包啦，抢到赚到。拼人品的机会来啦！",
        img_url: "http://pics3.paipaiimg.com/update/20141024/index_114916393.png",
        img_width: 80,
        img_heigth: 80
    }
    window.shareTime = {
        link: "http://" + location.host + location.pathname + "?_wv=1025&PTAG=" + (getEnv()=="weixin"?"17018.1.4":"17018.2.5"),
        title: "给大家发红包啦，抢到赚到。拼人品的机会来啦！",
        desc: "给大家发红包啦，抢到赚到。拼人品的机会来啦！",
        //img_url: "http://pics0.paipaiimg.com/update/20141017/index_162604623.png",
        img_url: "http://pics3.paipaiimg.com/update/20141024/index_114916393.png",
        img_width: 80,
        img_heigth: 80
    };
    function onBridgeReady() {
        WeixinJSBridge.on("menu:share:appmessage", shareFriends);
        WeixinJSBridge.on("menu:share:timeline", shareTimeline);
        //显示分享按钮
        WeixinJSBridge.invoke("showOptionMenu");
    };
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        onBridgeReady();
    } else {
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
            document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
        }
    }
    function shareFriends() {
        WeixinJSBridge && WeixinJSBridge.invoke("sendAppMessage", window.shareConfig, function(b) {
            window.shareConfig.shareCallback && window.shareConfig.shareCallback(b);
        })
    }
    function shareTimeline() {
        WeixinJSBridge && WeixinJSBridge.invoke("shareTimeline", window.shareTime, function(b) {
            window.shareConfig.shareCallback && window.shareConfig.shareCallback(b);
        })
    }