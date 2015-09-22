  var getArgs = function () {
            var args = new Object();
            var query = window.location.search.substring(1);
            var pairs = query.split("&");
            for (var i = 0; i < pairs.length; i++) {
                var pos = pairs[i].indexOf('=');
                if (pos == -1) continue;
                var argname = pairs[i].substring(0, pos);
                var value = pairs[i].substring(pos + 1);
                value = decodeURIComponent(value);
                args[argname] = value;
            }
            return args;
        }
var htmlEncode = function (str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/    /g, "&nbsp;");
    s = s.replace(/\'/g, "'");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s
}
var REG_CONFIG = getArgs();
REG_CONFIG.css = REG_CONFIG.css || 'www.wanmei.com/public/style/fastreg/skin1.css';
REG_CONFIG.jumpURL = "http://www.wanmei.com/public/style/fastreg/success.html?css=" + REG_CONFIG.css + "&to=" + REG_CONFIG.to;
document.write('<link rel="stylesheet" type="text/css" href="htt' + 'p://' + htmlEncode(REG_CONFIG.css) + '" />');