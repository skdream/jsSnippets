!function (window, lib) {
	function resetHtmlFontSize() {
		var docW = docEle.getBoundingClientRect().width;
		docW / dpr > 540 && (docW = 540 * dpr);
		var perRem = docW / 10;
		docEle.style.fontSize = perRem + "px",
		flex.rem = window.rem = perRem
	}
	var Timer,
	doc = window.document,
	docEle = doc.documentElement,
	viewport = doc.querySelector('meta[name="viewport"]'),
	flexible = doc.querySelector('meta[name="flexible"]'),
	dpr = 0,
	scaleNum = 0,
	flex = lib.flexible || (lib.flexible = {});
	if (viewport) {
		console.warn("将根据已有的meta标签来设置缩放比例");
		var scaleArr = viewport.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
		scaleArr && (scaleNum = parseFloat(scaleArr[1]), dpr = parseInt(1 / scaleNum))
	} else {
		if (flexible) {
			var x = flexible.getAttribute("content");
			if (x) {
				var w = x.match(/initial\-dpr=([\d\.]+)/),
				v = x.match(/maximum\-dpr=([\d\.]+)/);
				w && (dpr = parseFloat(w[1]), scaleNum = parseFloat((1 / dpr).toFixed(2))),
				v && (dpr = parseFloat(v[1]), scaleNum = parseFloat((1 / dpr).toFixed(2)))
			}
		}
	}
	if (!dpr && !scaleNum) {
		var isPhone = (window.navigator.appVersion.match(/android/gi), window.navigator.appVersion.match(/iphone/gi)),
		devicePixelRatio = window.devicePixelRatio;
		dpr = isPhone ? devicePixelRatio >= 3 && (!dpr || dpr >= 3) ? 3 : devicePixelRatio >= 2 && (!dpr || dpr >= 2) ? 2 : 1 : 1,
		scaleNum = 1 / dpr
	}
	if (docEle.setAttribute("data-dpr", dpr), !viewport) {
		if (viewport = doc.createElement("meta"), viewport.setAttribute("name", "viewport"), viewport.setAttribute("content", "initial-scale=" + scaleNum + ", maximum-scale=" + scaleNum + ", minimum-scale=" + scaleNum + ", user-scalable=no"), docEle.firstElementChild) {
			docEle.firstElementChild.appendChild(viewport)
		} else {
			var s = doc.createElement("div");
			s.appendChild(viewport),
			doc.write(s.innerHTML)
		}
	}
	window.addEventListener("resize", function () {
		clearTimeout(Timer),
		Timer = setTimeout(resetHtmlFontSize, 300)
	}, !1),
	window.addEventListener("pageshow", function (b) {
		b.persisted && (clearTimeout(Timer), Timer = setTimeout(resetHtmlFontSize, 300))
	}, !1),
	"complete" === doc.readyState ? doc.body.style.fontSize = 12 * dpr + "px" : doc.addEventListener("DOMContentLoaded", function () {
			doc.body.style.fontSize = 12 * dpr + "px"
		}, !1),
	resetHtmlFontSize(),
	flex.dpr = window.dpr = dpr,
	flex.refreshRem = resetHtmlFontSize,
	flex.rem2px = function (d) {
		var c = parseFloat(d) * this.rem;
		return "string" == typeof d && d.match(/rem$/) && (c += "px"),
		c
	},
	flex.px2rem = function (d) {
		var c = parseFloat(d) / this.rem;
		return "string" == typeof d && d.match(/px$/) && (c += "rem"),
		c
	}
}
(window, window.lib || (window.lib = {}));
