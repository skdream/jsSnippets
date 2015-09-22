window.navigator.geolocation.getCurrentPosition(function (u) {
	var v = u.coords.longitude,
	x = u.coords.latitude,
	w = "http://api.map.baidu.com/ag/coord/convert?from=0&to=2&x=" + v + "&y=" + x + "&callback=?";
	$.ajaxJSONP({
		url : w,
		success : function (y) {
			$("input[name='location']").val("ggenc|" + y.y + "|" + y.x);
		},
		error : function () {
			t.html("<span>重新定位</span>");
			alert("获取当前城市失败，请您稍后重试")
		}
	})
}, function (u) {
	t.html("<span>重新定位</span>");
	alert(u.PERMISSION_DENIED ? "定位失败，请确认定位是否开启" : "获取当前位置失败，请您稍后重试")
}, {
	enableHighAccuracy : true
})