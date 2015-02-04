function setCookie(name, value, days, path, domain, secure){
    var mydate = new Date(),
        days = arguments[2] || null,
        path = arguments[3] || "/",
        domain = arguments[4] || null,
        secure = arguments[5] || false;
    mydate.setTime(mydate.getTime() + days*24*60*60*1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + mydate.toGMTString() + (path? ";path=" + path : "" ) + (domain ? ";domain=" + domain: "") + (secure ? ';secure' : '');
}

function getCookie( name ){
   var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
        val = document.cookie.match(reg);
    return val ? (val[2] ? unescape(val[2]) : "") : null;
}

function delCookie(name, path, domain, secure){
    var value = getCookie(name);
       
    if(value != null){
         var expires = new Date();
         expires.setMinutes(expires.getMinutes() - 1000);
        document.cookie = name + "=;expires=" + expires.toGMTString() + (path? ";path=" + path : "" ) + (domain ? ";domain=" + domain: "") + (secure ? ';secure' : '');
    }
}


function getQuery(name, url) {
    //参数：变量名，url为空则表从当前页面的url中取
    var u = arguments[1] || window.location.search,
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        r = u.substr(u.indexOf("\?") + 1).match(reg);
    return r != null ? r[2] : "";
}
/*
    动态加载url
    @param o = {element:'',charset:'',onBeforeSend:'',onLoad:''}
*/
function loadUrl(o){
    o.element = o.element || 'script';
    var el = document.createElement(o.element);
    el.charset = o.charset || 'utf-8';
    o.onBeforeSend && o.onBeforeSend(el);
    el.onload = el.onreadystatechange = function(){
        if(/loaded|complete/i.test(this.readyState) || navigator.userAgent.toLowerCase().indexOf('msie') == -1){
            o.onLoad && o.onLoad();
        }
    };
    
    el.onerror = function(){
        clear();
    };
    
    el.src = o.url;
    document.getElementsByTagName('head')[0].appendChild(el);
    
    function clear(){
        if(!el){
            return;
        }
        el.onload = el.onreadystatechange = el.onerror = null;
        el.parentNode && (el.parentNode.removeChild(el));
        el = null;    
    } 
}

// 扩展class,实现方法继承
var extend = function(class1, class2){
     for(var obj in class2)
          ({}).hasOwnProperty.call(class2, obj) && ( class1[obj] = class2[obj] );
      return a;
},

// 自定义事件
eventEmitter = function(){
     var obj = {};
     return {
          on: function (evName, callback){
               obj[evName] = obj[evName] || [];
               obj[evName].push(callback);
          },
          emit: function(evName,callback){
               obj[evName] = obj[evName] || [];
               for (var len = obj[evName].length, i = 0; i < len; i++ ){
                    obj[evName][i](callback);
               }
          }
     }
}


var cloneObj = function(obj) {
  var newObj = (obj instanceof Array) ? [] : {};
  for (i in obj) {
    if (i == 'cloneObj') continue;
    if (obj[i] && typeof obj[i] == "object") {
      newObj[i] = cloneObj(obj[i]);
    } else newObj[i] = obj[i]
  } return newObj;
};


var getYearWeek = function (a, b, c) { 
  var d1 = new Date(a, b-1, c), d2 = new Date(a, 0, 1), 
  d = Math.round((d1 - d2) / 86400000); 
  return Math.ceil((d + ((d2.getDay() + 1) - 1)) / 7); 
};
alert(getYearWeek(2014, 12, 4));


if (true || !(window.console && console.log)) {
  (function() {
    var noop = function() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = window.console = {};
    while (length--) {
        console[methods[length]] = noop;
    }
  }());
}