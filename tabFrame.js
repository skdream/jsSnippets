r = {
        $: window.top.$,
        tabs: [],
        maxId: 0,
        openTab: function(n, t) {
            var i = this.$, r = this.genTabId(), f = i("<iframe/>").attr({
                src: t,
                id: r,
                style: "width:100%;height:100%;border:none;",
                "class": "tab-pane"
            }), u;
            !0 && (u = i('<li class="guidepost-item"> <a data-toggle="tab" href="#' + r + '">' + n + '<\/a> <button type="button" class="close s-close" onclick="$.tabFrame.closeTab(\'#' + r + "')\">×<\/button> <\/li>"),
            i("#main-tab-nav > li:last").before(u),
            this.guidepost(),
            i("#content-frame").append(f),
            u.find("a").click())
        },
        closeTab: function(t) {
            var i = n("#main-tab-nav a[href=" + t + "]").parent(), u = i.hasClass("active"), r;
            u && (r = i.next("li"),
            r.is("li:last") && (r = i.prev("li")),
            r.find("a").tab("show"));
            i.remove();
            this.guidepost();
            this.$("#content-frame iframe" + t).remove()
        },
        genTabId: function() {
            var n = (new Date).valueOf();
            return n <= this.maxId && (n = this.maxId + 1),
            this.maxId = n,
            "tab" + n
        },
        init: function(t) {
            var i = this;
            this.$(t).on("click", "a.text", function(t) {
                var r, u, f;
                t.preventDefault();
                r = n(this);
                r.hasClass("disabled") || (u = r.attr("href"),
                f = r.text(),
                i.openTab(f, u))
            });
            this.$(t).on("click", "a.addIcon", function(t) {
                var r, u, f;
                t.preventDefault();
                r = n(this);
                r.hasClass("disabled") || (u = r.attr("href"),
                f = r.attr("title"),
                i.openTab(f, u))
            })
        },
        guidepost: function() {
            var n = this.$, r = 0, i, u, t;
            n(".guidepost-con .nav").removeAttr("style");
            n(".guidepost-con li").each(function() {
                r += n(this).width() + 4
            });
            i = n(window).width() - 77;
            u = function() {
                i = n(window).width() - 77;
                n(".guidepost-con").css("width", i + "px");
                n(".guidepost-con .nav").css("width", r + "px");
                var t = i - r + 24;
                r >= i ? (n(".guidepost-pa").show(),
                n(".nav-tabs").css("margin-left", t + "px")) : (n(".guidepost-pa").hide(),
                n(".nav-tabs").css("margin-left", "0px"))
            }
            ;
            u();
            n(window).on("resize", u);
            t = -50;
            n("#guid_after").click(function() {
                var u = -1 * t + i + 50;
                u < r && (t -= 50,
                n(".nav-tabs").css("margin-left", t + "px"))
            });
            n("#guid_pre").click(function() {
                t <= -50 && (t += 50,
                n(".nav-tabs").css("margin-left", t + "px"))
            })
        }
    };
    n.extend({
        tabFrame: r
    })