var desktopNotificationManager = function(){

	var win = window,
		navi = navigator,
		doc = document,
		granted = "granted",
		states = [granted, "default", "denied"],
		emptystr = '',
		noop = function(){},
		support = function () {
			var flag = false;
			try {
				flag = !!(win.Notification || win.webkitNotifications ||
					navi.mozNotification)
			} catch (w) {}

			return flag
		}()

	// 创建Notification对象
	function createNotification(title,opts){
		var notify;
		if(win.Notification){
			notify = new window.Notification(title,{
				icon: (typeof opts.icon === 'string')? opts.icon:emptystr,
				body: opts.body || emptystr,
				tag: opts.tag || undefined
			})
		}else if(win.webkitNotifications){

			notify = win.webkitNotifications.createNotification(opts.icon, title, opts.body);
			notify.show();

		}else if(navi.mozNotification){
			notify = navi.mozNotification.createNotification(title, opts.body, opts.icon);
			notify.show();
		}
		return notify;
	}

	// 权限许可

	function requestPermission(callback){
		if(support){
			callback = (typeof callback === 'function')? callback: noop;
			if(win.webkitNotifications && win.webkitNotifications.requestPermission){
				return win.webkitNotifications.requestPermission();
			}else if(win.Notification && win.Notification.requestPermission){
				return win.Notification.requestPermission(callback);
			}
		}
	}


}