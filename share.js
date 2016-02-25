define(function (require,exports, module){

	//判断浏览器类型，分别为微信，UC，其他
	function getBrowser(){ 
		var ua = window.navigator.userAgent.toLowerCase(); 
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){//weixin
			return 'weixin'; 
		}else{ 
			if(ua.match(/ucbrowser/i) == 'ucbrowser'){//uc
				return 'ucbrowser';
			}
			else{
				if(ua.match(/qqbrowser/i) == 'qqbrowser'){
					return 'qqbrowser';
				}
				else{
					return 'other';
				}
			}
		} 
	}

	/*微信分享*/
	function weixinShare(){
		//微信分享只需要生成一个提示蒙层
		var sharetemplate = '<div class="weixinsharetips"><img class="weixinsharetips-arrow" src="images/arrow.png"><img class="weixinsharetips-txt" src="images/txt.png"></div>';
		$('body').html(sharetemplate + $('body').html());
	}

	//uc分享
	function ucShare(){

		var u = window.navigator.userAgent;
		var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 

		if(isIOS){//IOS
			ucbrowser.web_share(adminconfig.sharetitle, adminconfig.sharecontent, window.location.href, '', '', '', '');//IOS
		}
		else{//非IOS
			ucweb.startRequest("shell.page_share", [adminconfig.sharetitle, adminconfig.sharecontent, window.location.href, '', '', '','']);;//安卓
		}

	}

	//百度分享
	function baiduShare(){

		var template = '<div style="display:block" id="baidushare" class="bdsharebuttonbox"><div class="bdshare-slide-top">分享到</div><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信">微信</a><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友">QQ好友</a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间">QQ空间</a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博">新浪微博</a><a href="#" class="bds_tieba" data-cmd="tieba" title="分享到百度贴吧">百度贴吧</a></div>';
		$('#header').html($('#header').html()+template);//插入百度分享html

		window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{"bdSize":16},"image":{"viewList":["weixin","sqq","qzone","tsina","tieba"],"viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":[]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
	
		if($('#baidushare')){
			$(document).click(function(e){
				e.stopPropagation();
				if(e.target.id != 'share'){
					$('#baidushare').hide();
				}
				
			});

			$('#baidushare').click(function(e){
				e.stopPropagation();
				$(this).show();
			});

			$('#share').click(function(e){
				var dis = document.getElementById('baidushare').style.display;

				if(dis == 'block'){
					document.getElementById('baidushare').style.display = 'none';
				}
				else{
					document.getElementById('baidushare').style.display = 'block';
				}
			});
		}
	}

	function init(sharebtn){

		var browser = getBrowser();

		$('#'+sharebtn).click(function(e){

			e.stopPropagation();

			switch(browser){
				case 'weixin': weixinShare();break;

				case 'ucbrowser': ucShare();break;

				default: baiduShare();break;

			};

		});
	}

	module.exports.init = init;
	module.exports.getBrowser = getBrowser;
});
