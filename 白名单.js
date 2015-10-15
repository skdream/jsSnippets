<script type="text/javascript">
    //跳转白名单
    
    var local_domain_arr = ['apple.com','woniu.com','snail.com','url.cn','qq.com','17173.com','baidu.com','163.com','t.cn','sina.com.cn','sina.cn'];
    function allow_outer_links(local_domain_arr, url) { 
        var pattern= '^http[s]?://'; 
        var i = 0;
        for(i=0;i<local_domain_arr.length;i++){
            
            var local_domain = local_domain_arr[i];
            if(i==0){ 
                 pattern += 'www.' + local_domain + '|' + local_domain + '|[\w\_]+\.' + local_domain ; 
            }else{ 
                 pattern += '|www.' + local_domain + '|' + local_domain + '|[\w\_]+\.' + local_domain ; 
            }
        }
        pattern += '(.+?)gi';
        var regPattern = new RegExp(pattern);
        return regPattern.test(url); 
    }
    

	var url=(function (sName) {
		var sRE = "(?:; )?" + sName + "=([^;]*);?";
		var oRE = new RegExp(sRE);
		if (oRE.test(document["cookie"])) {
			return RegExp["$1"];
		} else {
			return null;
		}
	})("WNAD_url");
    
	(function (sName, sValue, oExpires, sPath, sDomain) {
		var sCookie = sName + "=" + encodeURIComponent(sValue);

		var de = new Date();
		de.setTime(new Date().getTime() + parseInt(oExpires));
		oExpires = de.toGMTString();

		sCookie += "; expires=" + oExpires;
		sCookie += "; path=" + sPath;
		sCookie += "; domain=" + sDomain;
		document["cookie"] = sCookie;
	})("WNAD_time",new Date().getTime(),60000,"/","woniu.com");
	
    if(allow_outer_links(local_domain_arr,url)){
        window.location.replace( decodeURIComponent(url) );
    }else{
        window.location.replace('http://www.woniu.com/');
    }
    
    
    
</script>