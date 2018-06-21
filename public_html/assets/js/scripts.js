function openModal(t) {
    $(t).arcticmodal();
}
function closeModal(t) {
    $(t).arcticmodal('close')
    $('form [name="comment"]').val('');
    $(".modal iframe").each(function() {
        var t = $(this).attr("src");
        $(this).attr("src", t);
    });
}
!(function(t) {
    "use strict";
    "function" === typeof define && define.amd
        ? define(["jquery"], t)
        : "undefined" !== typeof exports
            ? (module.exports = t(require("jquery")))
            : t(jQuery);
})(function(t) {
    "use strict";
    var i = window.Slick || {};
    ((i = (function() {
        var i = 0;
        return function(e, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(i, e) {
                    return t('<button type="button" />').text(e + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }),
            (n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }),
            t.extend(n, n.initials),
            (n.activeBreakpoint = null),
            (n.animType = null),
            (n.animProp = null),
            (n.breakpoints = []),
            (n.breakpointSettings = []),
            (n.cssTransitions = !1),
            (n.focussed = !1),
            (n.interrupted = !1),
            (n.hidden = "hidden"),
            (n.paused = !0),
            (n.positionProp = null),
            (n.respondTo = null),
            (n.rowCount = 1),
            (n.shouldClick = !0),
            (n.$slider = t(e)),
            (n.$slidesCache = null),
            (n.transformType = null),
            (n.transitionType = null),
            (n.visibilityChange = "visibilitychange"),
            (n.windowWidth = 0),
            (n.windowTimer = null),
            (s = t(e).data("slick") || {}),
            (n.options = t.extend({}, n.defaults, o, s)),
            (n.currentSlide = n.options.initialSlide),
            (n.originalSettings = n.options),
            void 0 !== document.mozHidden
                ? ((n.hidden = "mozHidden"),
                    (n.visibilityChange = "mozvisibilitychange"))
                : void 0 !== document.webkitHidden &&
                      ((n.hidden = "webkitHidden"),
                          (n.visibilityChange = "webkitvisibilitychange")),
            (n.autoPlay = t.proxy(n.autoPlay, n)),
            (n.autoPlayClear = t.proxy(n.autoPlayClear, n)),
            (n.autoPlayIterator = t.proxy(n.autoPlayIterator, n)),
            (n.changeSlide = t.proxy(n.changeSlide, n)),
            (n.clickHandler = t.proxy(n.clickHandler, n)),
            (n.selectHandler = t.proxy(n.selectHandler, n)),
            (n.setPosition = t.proxy(n.setPosition, n)),
            (n.swipeHandler = t.proxy(n.swipeHandler, n)),
            (n.dragHandler = t.proxy(n.dragHandler, n)),
            (n.keyHandler = t.proxy(n.keyHandler, n)),
            (n.instanceUid = i++),
            (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
            n.registerBreakpoints(),
            n.init(!0);
        };
    })()).prototype.activateADA = function() {
        this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
    }),
    (i.prototype.addSlide = i.prototype.slickAdd = function(i, e, o) {
        var s = this;
        if ("boolean" === typeof e) (o = e), (e = null);
        else if (e < 0 || e >= s.slideCount) return !1;
        s.unload(),
        "number" === typeof e
            ? 0 === e && 0 === s.$slides.length
                ? t(i).appendTo(s.$slideTrack)
                : o
                    ? t(i).insertBefore(s.$slides.eq(e))
                    : t(i).insertAfter(s.$slides.eq(e))
            : !0 === o
                ? t(i).prependTo(s.$slideTrack)
                : t(i).appendTo(s.$slideTrack),
        (s.$slides = s.$slideTrack.children(this.options.slide)),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(i, e) {
            t(e).attr("data-slick-index", i);
        }),
        (s.$slidesCache = s.$slides),
        s.reinit();
    }),
    (i.prototype.animateHeight = function() {
        var t = this;
        if (
            1 === t.options.slidesToShow &&
                !0 === t.options.adaptiveHeight &&
                !1 === t.options.vertical
        ) {
            var i = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({ height: i }, t.options.speed);
        }
    }),
    (i.prototype.animateSlide = function(i, e) {
        var o = {},
            s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (i = -i),
        !1 === s.transformsEnabled
            ? !1 === s.options.vertical
                ? s.$slideTrack.animate(
                    { left: i },
                    s.options.speed,
                    s.options.easing,
                    e
                )
                : s.$slideTrack.animate(
                    { top: i },
                    s.options.speed,
                    s.options.easing,
                    e
                )
            : !1 === s.cssTransitions
                ? (!0 === s.options.rtl &&
                              (s.currentLeft = -s.currentLeft),
                    t({ animStart: s.currentLeft }).animate(
                        { animStart: i },
                        {
                            duration: s.options.speed,
                            easing: s.options.easing,
                            step: function(t) {
                                (t = Math.ceil(t)),
                                !1 === s.options.vertical
                                    ? ((o[s.animType] =
                                                    "translate(" +
                                                    t +
                                                    "px, 0px)"),
                                        s.$slideTrack.css(o))
                                    : ((o[s.animType] =
                                                    "translate(0px," +
                                                    t +
                                                    "px)"),
                                        s.$slideTrack.css(o));
                            },
                            complete: function() {
                                e && e.call();
                            }
                        }
                    ))
                : (s.applyTransition(),
                    (i = Math.ceil(i)),
                    !1 === s.options.vertical
                        ? (o[s.animType] =
                                    "translate3d(" + i + "px, 0px, 0px)")
                        : (o[s.animType] =
                                    "translate3d(0px," + i + "px, 0px)"),
                    s.$slideTrack.css(o),
                    e &&
                              setTimeout(function() {
                                  s.disableTransition(), e.call();
                              }, s.options.speed));
    }),
    (i.prototype.getNavTarget = function() {
        var i = this,
            e = i.options.asNavFor;
        return e && null !== e && (e = t(e).not(i.$slider)), e;
    }),
    (i.prototype.asNavFor = function(i) {
        var e = this.getNavTarget();
        null !== e &&
                "object" === typeof e &&
                e.each(function() {
                    var e = t(this).slick("getSlick");
                    e.unslicked || e.slideHandler(i, !0);
                });
    }),
    (i.prototype.applyTransition = function(t) {
        var i = this,
            e = {};
        !1 === i.options.fade
            ? (e[i.transitionType] =
                      i.transformType +
                      " " +
                      i.options.speed +
                      "ms " +
                      i.options.cssEase)
            : (e[i.transitionType] =
                      "opacity " + i.options.speed + "ms " + i.options.cssEase),
        !1 === i.options.fade
            ? i.$slideTrack.css(e)
            : i.$slides.eq(t).css(e);
    }),
    (i.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
        t.slideCount > t.options.slidesToShow &&
                    (t.autoPlayTimer = setInterval(
                        t.autoPlayIterator,
                        t.options.autoplaySpeed
                    ));
    }),
    (i.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer);
    }),
    (i.prototype.autoPlayIterator = function() {
        var t = this,
            i = t.currentSlide + t.options.slidesToScroll;
        t.paused ||
                t.interrupted ||
                t.focussed ||
                (!1 === t.options.infinite &&
                    (1 === t.direction &&
                    t.currentSlide + 1 === t.slideCount - 1
                        ? (t.direction = 0)
                        : 0 === t.direction &&
                          ((i = t.currentSlide - t.options.slidesToScroll),
                              t.currentSlide - 1 == 0 && (t.direction = 1))),
                    t.slideHandler(i));
    }),
    (i.prototype.buildArrows = function() {
        var i = this;
        !0 === i.options.arrows &&
                ((i.$prevArrow = t(i.options.prevArrow).addClass(
                    "slick-arrow"
                )),
                    (i.$nextArrow = t(i.options.nextArrow).addClass("slick-arrow")),
                    i.slideCount > i.options.slidesToShow
                        ? (i.$prevArrow
                            .removeClass("slick-hidden")
                            .removeAttr("aria-hidden tabindex"),
                            i.$nextArrow
                                .removeClass("slick-hidden")
                                .removeAttr("aria-hidden tabindex"),
                            i.htmlExpr.test(i.options.prevArrow) &&
                          i.$prevArrow.prependTo(i.options.appendArrows),
                            i.htmlExpr.test(i.options.nextArrow) &&
                          i.$nextArrow.appendTo(i.options.appendArrows),
                            !0 !== i.options.infinite &&
                          i.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"))
                        : i.$prevArrow
                            .add(i.$nextArrow)
                            .addClass("slick-hidden")
                            .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (i.prototype.buildDots = function() {
        var i,
            e,
            o = this;
        if (!0 === o.options.dots) {
            for (
                o.$slider.addClass("slick-dotted"),
                e = t("<ul />").addClass(o.options.dotsClass),
                i = 0;
                i <= o.getDotCount();
                i += 1
            )
                e.append(
                    t("<li />").append(
                        o.options.customPaging.call(this, o, i)
                    )
                );
            (o.$dots = e.appendTo(o.options.appendDots)),
            o.$dots
                .find("li")
                .first()
                .addClass("slick-active");
        }
    }),
    (i.prototype.buildOut = function() {
        var i = this;
        (i.$slides = i.$slider
            .children(i.options.slide + ":not(.slick-cloned)")
            .addClass("slick-slide")),
        (i.slideCount = i.$slides.length),
        i.$slides.each(function(i, e) {
            t(e)
                .attr("data-slick-index", i)
                .data("originalStyling", t(e).attr("style") || "");
        }),
        i.$slider.addClass("slick-slider"),
        (i.$slideTrack =
                    0 === i.slideCount
                        ? t('<div class="slick-track"/>').appendTo(i.$slider)
                        : i.$slides
                            .wrapAll('<div class="slick-track"/>')
                            .parent()),
        (i.$list = i.$slideTrack
            .wrap('<div class="slick-list"/>')
            .parent()),
        i.$slideTrack.css("opacity", 0),
        (!0 !== i.options.centerMode &&
                    !0 !== i.options.swipeToSlide) ||
                    (i.options.slidesToScroll = 1),
        t("img[data-lazy]", i.$slider)
            .not("[src]")
            .addClass("slick-loading"),
        i.setupInfinite(),
        i.buildArrows(),
        i.buildDots(),
        i.updateDots(),
        i.setSlideClasses(
            "number" === typeof i.currentSlide ? i.currentSlide : 0
        ),
        !0 === i.options.draggable && i.$list.addClass("draggable");
    }),
    (i.prototype.buildRows = function() {
        var t,
            i,
            e,
            o,
            s,
            n,
            r,
            l = this;
        if (
            ((o = document.createDocumentFragment()),
                (n = l.$slider.children()),
                l.options.rows > 1)
        ) {
            for (
                r = l.options.slidesPerRow * l.options.rows,
                s = Math.ceil(n.length / r),
                t = 0;
                t < s;
                t++
            ) {
                var a = document.createElement("div");
                for (i = 0; i < l.options.rows; i++) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.slidesPerRow; e++) {
                        var c = t * r + (i * l.options.slidesPerRow + e);
                        n.get(c) && d.appendChild(n.get(c));
                    }
                    a.appendChild(d);
                }
                o.appendChild(a);
            }
            l.$slider.empty().append(o),
            l.$slider
                .children()
                .children()
                .children()
                .css({
                    width: 100 / l.options.slidesPerRow + "%",
                    display: "inline-block"
                });
        }
    }),
    (i.prototype.checkResponsive = function(i, e) {
        var o,
            s,
            n,
            r = this,
            l = !1,
            a = r.$slider.width(),
            d = window.innerWidth || t(window).width();
        if (
            ("window" === r.respondTo
                ? (n = d)
                : "slider" === r.respondTo
                    ? (n = a)
                    : "min" === r.respondTo && (n = Math.min(d, a)),
                r.options.responsive &&
                    r.options.responsive.length &&
                    null !== r.options.responsive)
        ) {
            s = null;
            for (o in r.breakpoints)
                r.breakpoints.hasOwnProperty(o) &&
                        (!1 === r.originalSettings.mobileFirst
                            ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                            : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s
                ? null !== r.activeBreakpoint
                    ? (s !== r.activeBreakpoint || e) &&
                          ((r.activeBreakpoint = s),
                              "unslick" === r.breakpointSettings[s]
                                  ? r.unslick(s)
                                  : ((r.options = t.extend(
                                      {},
                                      r.originalSettings,
                                      r.breakpointSettings[s]
                                  )),
                                      !0 === i &&
                                    (r.currentSlide = r.options.initialSlide),
                                      r.refresh(i)),
                              (l = s))
                    : ((r.activeBreakpoint = s),
                        "unslick" === r.breakpointSettings[s]
                            ? r.unslick(s)
                            : ((r.options = t.extend(
                                {},
                                r.originalSettings,
                                r.breakpointSettings[s]
                            )),
                                !0 === i &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(i)),
                        (l = s))
                : null !== r.activeBreakpoint &&
                      ((r.activeBreakpoint = null),
                          (r.options = r.originalSettings),
                          !0 === i && (r.currentSlide = r.options.initialSlide),
                          r.refresh(i),
                          (l = s)),
            i || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
        }
    }),
    (i.prototype.changeSlide = function(i, e) {
        var o,
            s,
            n,
            r = this,
            l = t(i.currentTarget);
        switch (
            (l.is("a") && i.preventDefault(),
                l.is("li") || (l = l.closest("li")),
                (n = r.slideCount % r.options.slidesToScroll != 0),
                (o = n
                    ? 0
                    : (r.slideCount - r.currentSlide) %
                      r.options.slidesToScroll),
                i.data.message)
        ) {
        case "previous":
            (s =
                        0 === o
                            ? r.options.slidesToScroll
                            : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide - s, !1, e);
            break;
        case "next":
            (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide + s, !1, e);
            break;
        case "index":
            var a =
                        0 === i.data.index
                            ? 0
                            : i.data.index ||
                              l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, e),
            l.children().trigger("focus");
            break;
        default:
            return;
        }
    }),
    (i.prototype.checkNavigable = function(t) {
        var i, e;
        if (
            ((i = this.getNavigableIndexes()), (e = 0), t > i[i.length - 1])
        )
            t = i[i.length - 1];
        else
            for (var o in i) {
                if (t < i[o]) {
                    t = e;
                    break;
                }
                e = i[o];
            }
        return t;
    }),
    (i.prototype.cleanUpEvents = function() {
        var i = this;
        i.options.dots &&
                null !== i.$dots &&
                (t("li", i.$dots)
                    .off("click.slick", i.changeSlide)
                    .off("mouseenter.slick", t.proxy(i.interrupt, i, !0))
                    .off("mouseleave.slick", t.proxy(i.interrupt, i, !1)),
                    !0 === i.options.accessibility &&
                    i.$dots.off("keydown.slick", i.keyHandler)),
        i.$slider.off("focus.slick blur.slick"),
        !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    (i.$prevArrow &&
                        i.$prevArrow.off("click.slick", i.changeSlide),
                        i.$nextArrow &&
                        i.$nextArrow.off("click.slick", i.changeSlide),
                        !0 === i.options.accessibility &&
                        (i.$prevArrow &&
                            i.$prevArrow.off("keydown.slick", i.keyHandler),
                            i.$nextArrow &&
                            i.$nextArrow.off("keydown.slick", i.keyHandler))),
        i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler),
        i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler),
        i.$list.off("touchend.slick mouseup.slick", i.swipeHandler),
        i.$list.off(
            "touchcancel.slick mouseleave.slick",
            i.swipeHandler
        ),
        i.$list.off("click.slick", i.clickHandler),
        t(document).off(i.visibilityChange, i.visibility),
        i.cleanUpSlideEvents(),
        !0 === i.options.accessibility &&
                    i.$list.off("keydown.slick", i.keyHandler),
        !0 === i.options.focusOnSelect &&
                    t(i.$slideTrack)
                        .children()
                        .off("click.slick", i.selectHandler),
        t(window).off(
            "orientationchange.slick.slick-" + i.instanceUid,
            i.orientationChange
        ),
        t(window).off("resize.slick.slick-" + i.instanceUid, i.resize),
        t("[draggable!=true]", i.$slideTrack).off(
            "dragstart",
            i.preventDefault
        ),
        t(window).off(
            "load.slick.slick-" + i.instanceUid,
            i.setPosition
        );
    }),
    (i.prototype.cleanUpSlideEvents = function() {
        var i = this;
        i.$list.off("mouseenter.slick", t.proxy(i.interrupt, i, !0)),
        i.$list.off("mouseleave.slick", t.proxy(i.interrupt, i, !1));
    }),
    (i.prototype.cleanUpRows = function() {
        var t,
            i = this;
        i.options.rows > 1 &&
                ((t = i.$slides.children().children()).removeAttr("style"),
                    i.$slider.empty().append(t));
    }),
    (i.prototype.clickHandler = function(t) {
        !1 === this.shouldClick &&
                (t.stopImmediatePropagation(),
                    t.stopPropagation(),
                    t.preventDefault());
    }),
    (i.prototype.destroy = function(i) {
        var e = this;
        e.autoPlayClear(),
        (e.touchObject = {}),
        e.cleanUpEvents(),
        t(".slick-cloned", e.$slider).detach(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
                    e.$prevArrow.length &&
                    (e.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                        e.htmlExpr.test(e.options.prevArrow) &&
                        e.$prevArrow.remove()),
        e.$nextArrow &&
                    e.$nextArrow.length &&
                    (e.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                        e.htmlExpr.test(e.options.nextArrow) &&
                        e.$nextArrow.remove()),
        e.$slides &&
                    (e.$slides
                        .removeClass(
                            "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function() {
                            t(this).attr(
                                "style",
                                t(this).data("originalStyling")
                            );
                        }),
                        e.$slideTrack.children(this.options.slide).detach(),
                        e.$slideTrack.detach(),
                        e.$list.detach(),
                        e.$slider.append(e.$slides)),
        e.cleanUpRows(),
        e.$slider.removeClass("slick-slider"),
        e.$slider.removeClass("slick-initialized"),
        e.$slider.removeClass("slick-dotted"),
        (e.unslicked = !0),
        i || e.$slider.trigger("destroy", [e]);
    }),
    (i.prototype.disableTransition = function(t) {
        var i = this,
            e = {};
        (e[i.transitionType] = ""),
        !1 === i.options.fade
            ? i.$slideTrack.css(e)
            : i.$slides.eq(t).css(e);
    }),
    (i.prototype.fadeSlide = function(t, i) {
        var e = this;
        !1 === e.cssTransitions
            ? (e.$slides.eq(t).css({ zIndex: e.options.zIndex }),
                e.$slides
                    .eq(t)
                    .animate(
                        { opacity: 1 },
                        e.options.speed,
                        e.options.easing,
                        i
                    ))
            : (e.applyTransition(t),
                e.$slides.eq(t).css({ opacity: 1, zIndex: e.options.zIndex }),
                i &&
                      setTimeout(function() {
                          e.disableTransition(t), i.call();
                      }, e.options.speed));
    }),
    (i.prototype.fadeSlideOut = function(t) {
        var i = this;
        !1 === i.cssTransitions
            ? i.$slides
                .eq(t)
                .animate(
                    { opacity: 0, zIndex: i.options.zIndex - 2 },
                    i.options.speed,
                    i.options.easing
                )
            : (i.applyTransition(t),
                i.$slides
                    .eq(t)
                    .css({ opacity: 0, zIndex: i.options.zIndex - 2 }));
    }),
    (i.prototype.filterSlides = i.prototype.slickFilter = function(t) {
        var i = this;
        null !== t &&
                ((i.$slidesCache = i.$slides),
                    i.unload(),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slidesCache.filter(t).appendTo(i.$slideTrack),
                    i.reinit());
    }),
    (i.prototype.focusHandler = function() {
        var i = this;
        i.$slider
            .off("focus.slick blur.slick")
            .on("focus.slick blur.slick", "*", function(e) {
                e.stopImmediatePropagation();
                var o = t(this);
                setTimeout(function() {
                    i.options.pauseOnFocus &&
                            ((i.focussed = o.is(":focus")), i.autoPlay());
                }, 0);
            });
    }),
    (i.prototype.getCurrent = i.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }),
    (i.prototype.getDotCount = function() {
        var t = this,
            i = 0,
            e = 0,
            o = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow) ++o;
            else
                for (; i < t.slideCount; )
                    ++o,
                    (i = e + t.options.slidesToScroll),
                    (e +=
                                t.options.slidesToScroll <=
                                t.options.slidesToShow
                                    ? t.options.slidesToScroll
                                    : t.options.slidesToShow);
        else if (!0 === t.options.centerMode) o = t.slideCount;
        else if (t.options.asNavFor)
            for (; i < t.slideCount; )
                ++o,
                (i = e + t.options.slidesToScroll),
                (e +=
                            t.options.slidesToScroll <= t.options.slidesToShow
                                ? t.options.slidesToScroll
                                : t.options.slidesToShow);
        else
            o =
                    1 +
                    Math.ceil(
                        (t.slideCount - t.options.slidesToShow) /
                            t.options.slidesToScroll
                    );
        return o - 1;
    }),
    (i.prototype.getLeft = function(t) {
        var i,
            e,
            o,
            s,
            n = this,
            r = 0;
        return (
            (n.slideOffset = 0),
            (e = n.$slides.first().outerHeight(!0)),
            !0 === n.options.infinite
                ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset =
                              n.slideWidth * n.options.slidesToShow * -1),
                              (s = -1),
                              !0 === n.options.vertical &&
                              !0 === n.options.centerMode &&
                              (2 === n.options.slidesToShow
                                  ? (s = -1.5)
                                  : 1 === n.options.slidesToShow && (s = -2)),
                              (r = e * n.options.slidesToShow * s)),
                    n.slideCount % n.options.slidesToScroll != 0 &&
                          t + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (t > n.slideCount
                              ? ((n.slideOffset =
                                    (n.options.slidesToShow -
                                        (t - n.slideCount)) *
                                    n.slideWidth *
                                    -1),
                                  (r =
                                    (n.options.slidesToShow -
                                        (t - n.slideCount)) *
                                    e *
                                    -1))
                              : ((n.slideOffset =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    n.slideWidth *
                                    -1),
                                  (r =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    e *
                                    -1))))
                : t + n.options.slidesToShow > n.slideCount &&
                      ((n.slideOffset =
                          (t + n.options.slidesToShow - n.slideCount) *
                          n.slideWidth),
                          (r = (t + n.options.slidesToShow - n.slideCount) * e)),
            n.slideCount <= n.options.slidesToShow &&
                    ((n.slideOffset = 0), (r = 0)),
            !0 === n.options.centerMode &&
                n.slideCount <= n.options.slidesToShow
                ? (n.slideOffset =
                          n.slideWidth *
                              Math.floor(n.options.slidesToShow) /
                              2 -
                          n.slideWidth * n.slideCount / 2)
                : !0 === n.options.centerMode && !0 === n.options.infinite
                    ? (n.slideOffset +=
                              n.slideWidth *
                                  Math.floor(n.options.slidesToShow / 2) -
                              n.slideWidth)
                    : !0 === n.options.centerMode &&
                          ((n.slideOffset = 0),
                              (n.slideOffset +=
                              n.slideWidth *
                              Math.floor(n.options.slidesToShow / 2))),
            (i =
                    !1 === n.options.vertical
                        ? t * n.slideWidth * -1 + n.slideOffset
                        : t * e * -1 + r),
            !0 === n.options.variableWidth &&
                    ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        !1 === n.options.infinite
                            ? n.$slideTrack.children(".slick-slide").eq(t)
                            : n.$slideTrack
                                .children(".slick-slide")
                                .eq(t + n.options.slidesToShow)),
                        (i =
                        !0 === n.options.rtl
                            ? o[0]
                                ? -1 *
                                  (n.$slideTrack.width() -
                                      o[0].offsetLeft -
                                      o.width())
                                : 0
                            : o[0]
                                ? -1 * o[0].offsetLeft
                                : 0),
                        !0 === n.options.centerMode &&
                        ((o =
                            n.slideCount <= n.options.slidesToShow ||
                            !1 === n.options.infinite
                                ? n.$slideTrack.children(".slick-slide").eq(t)
                                : n.$slideTrack
                                    .children(".slick-slide")
                                    .eq(t + n.options.slidesToShow + 1)),
                            (i =
                            !0 === n.options.rtl
                                ? o[0]
                                    ? -1 *
                                      (n.$slideTrack.width() -
                                          o[0].offsetLeft -
                                          o.width())
                                    : 0
                                : o[0]
                                    ? -1 * o[0].offsetLeft
                                    : 0),
                            (i += (n.$list.width() - o.outerWidth()) / 2))),
            i
        );
    }),
    (i.prototype.getOption = i.prototype.slickGetOption = function(t) {
        return this.options[t];
    }),
    (i.prototype.getNavigableIndexes = function() {
        var t,
            i = this,
            e = 0,
            o = 0,
            s = [];
        for (
            !1 === i.options.infinite
                ? (t = i.slideCount)
                : ((e = -1 * i.options.slidesToScroll),
                    (o = -1 * i.options.slidesToScroll),
                    (t = 2 * i.slideCount));
            e < t;

        )
            s.push(e),
            (e = o + i.options.slidesToScroll),
            (o +=
                        i.options.slidesToScroll <= i.options.slidesToShow
                            ? i.options.slidesToScroll
                            : i.options.slidesToShow);
        return s;
    }),
    (i.prototype.getSlick = function() {
        return this;
    }),
    (i.prototype.getSlideCount = function() {
        var i,
            e,
            o = this;
        return (
            (e =
                    !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
            !0 === o.options.swipeToSlide
                ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                    if (
                        n.offsetLeft - e + t(n).outerWidth() / 2 >
                              -1 * o.swipeLeft
                    )
                        return (i = n), !1;
                }),
                    Math.abs(
                        t(i).attr("data-slick-index") - o.currentSlide
                    ) || 1)
                : o.options.slidesToScroll
        );
    }),
    (i.prototype.goTo = i.prototype.slickGoTo = function(t, i) {
        this.changeSlide(
            { data: { message: "index", index: parseInt(t) } },
            i
        );
    }),
    (i.prototype.init = function(i) {
        var e = this;
        t(e.$slider).hasClass("slick-initialized") ||
                (t(e.$slider).addClass("slick-initialized"),
                    e.buildRows(),
                    e.buildOut(),
                    e.setProps(),
                    e.startLoad(),
                    e.loadSlider(),
                    e.initializeEvents(),
                    e.updateArrows(),
                    e.updateDots(),
                    e.checkResponsive(!0),
                    e.focusHandler()),
        i && e.$slider.trigger("init", [e]),
        !0 === e.options.accessibility && e.initADA(),
        e.options.autoplay && ((e.paused = !1), e.autoPlay());
    }),
    (i.prototype.initADA = function() {
        var i = this,
            e = Math.ceil(i.slideCount / i.options.slidesToShow),
            o = i.getNavigableIndexes().filter(function(t) {
                return t >= 0 && t < i.slideCount;
            });
        i.$slides
            .add(i.$slideTrack.find(".slick-cloned"))
            .attr({ "aria-hidden": "true", tabindex: "-1" })
            .find("a, input, button, select")
            .attr({ tabindex: "-1" }),
        null !== i.$dots &&
                    (i.$slides
                        .not(i.$slideTrack.find(".slick-cloned"))
                        .each(function(e) {
                            var s = o.indexOf(e);
                            t(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + i.instanceUid + e,
                                tabindex: -1
                            }),
                            -1 !== s &&
                                    t(this).attr({
                                        "aria-describedby":
                                            "slick-slide-control" +
                                            i.instanceUid +
                                            s
                                    });
                        }),
                        i.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function(s) {
                                var n = o[s];
                                t(this).attr({ role: "presentation" }),
                                t(this)
                                    .find("button")
                                    .first()
                                    .attr({
                                        role: "tab",
                                        id:
                                            "slick-slide-control" +
                                            i.instanceUid +
                                            s,
                                        "aria-controls":
                                            "slick-slide" + i.instanceUid + n,
                                        "aria-label": s + 1 + " of " + e,
                                        "aria-selected": null,
                                        tabindex: "-1"
                                    });
                            })
                            .eq(i.currentSlide)
                            .find("button")
                            .attr({ "aria-selected": "true", tabindex: "0" })
                            .end());
        for (
            var s = i.currentSlide, n = s + i.options.slidesToShow;
            s < n;
            s++
        )
            i.$slides.eq(s).attr("tabindex", 0);
        i.activateADA();
    }),
    (i.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows &&
                t.slideCount > t.options.slidesToShow &&
                (t.$prevArrow
                    .off("click.slick")
                    .on("click.slick", { message: "previous" }, t.changeSlide),
                    t.$nextArrow
                        .off("click.slick")
                        .on("click.slick", { message: "next" }, t.changeSlide),
                    !0 === t.options.accessibility &&
                    (t.$prevArrow.on("keydown.slick", t.keyHandler),
                        t.$nextArrow.on("keydown.slick", t.keyHandler)));
    }),
    (i.prototype.initDotEvents = function() {
        var i = this;
        !0 === i.options.dots &&
                (t("li", i.$dots).on(
                    "click.slick",
                    { message: "index" },
                    i.changeSlide
                ),
                    !0 === i.options.accessibility &&
                    i.$dots.on("keydown.slick", i.keyHandler)),
        !0 === i.options.dots &&
                    !0 === i.options.pauseOnDotsHover &&
                    t("li", i.$dots)
                        .on("mouseenter.slick", t.proxy(i.interrupt, i, !0))
                        .on("mouseleave.slick", t.proxy(i.interrupt, i, !1));
    }),
    (i.prototype.initSlideEvents = function() {
        var i = this;
        i.options.pauseOnHover &&
                (i.$list.on("mouseenter.slick", t.proxy(i.interrupt, i, !0)),
                    i.$list.on("mouseleave.slick", t.proxy(i.interrupt, i, !1)));
    }),
    (i.prototype.initializeEvents = function() {
        var i = this;
        i.initArrowEvents(),
        i.initDotEvents(),
        i.initSlideEvents(),
        i.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            i.swipeHandler
        ),
        i.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            i.swipeHandler
        ),
        i.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            i.swipeHandler
        ),
        i.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            i.swipeHandler
        ),
        i.$list.on("click.slick", i.clickHandler),
        t(document).on(i.visibilityChange, t.proxy(i.visibility, i)),
        !0 === i.options.accessibility &&
                    i.$list.on("keydown.slick", i.keyHandler),
        !0 === i.options.focusOnSelect &&
                    t(i.$slideTrack)
                        .children()
                        .on("click.slick", i.selectHandler),
        t(window).on(
            "orientationchange.slick.slick-" + i.instanceUid,
            t.proxy(i.orientationChange, i)
        ),
        t(window).on(
            "resize.slick.slick-" + i.instanceUid,
            t.proxy(i.resize, i)
        ),
        t("[draggable!=true]", i.$slideTrack).on(
            "dragstart",
            i.preventDefault
        ),
        t(window).on(
            "load.slick.slick-" + i.instanceUid,
            i.setPosition
        ),
        t(i.setPosition);
    }),
    (i.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows &&
                t.slideCount > t.options.slidesToShow &&
                (t.$prevArrow.show(), t.$nextArrow.show()),
        !0 === t.options.dots &&
                    t.slideCount > t.options.slidesToShow &&
                    t.$dots.show();
    }),
    (i.prototype.keyHandler = function(t) {
        var i = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === t.keyCode && !0 === i.options.accessibility
                    ? i.changeSlide({
                        data: {
                            message:
                                  !0 === i.options.rtl ? "next" : "previous"
                        }
                    })
                    : 39 === t.keyCode &&
                      !0 === i.options.accessibility &&
                      i.changeSlide({
                          data: {
                              message:
                                  !0 === i.options.rtl ? "previous" : "next"
                          }
                      }));
    }),
    (i.prototype.lazyLoad = function() {
        function i(i) {
            t("img[data-lazy]", i).each(function() {
                var i = t(this),
                    e = t(this).attr("data-lazy"),
                    o = t(this).attr("data-srcset"),
                    s =
                            t(this).attr("data-sizes") ||
                            n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                (r.onload = function() {
                    i.animate({ opacity: 0 }, 100, function() {
                        o && (i.attr("srcset", o), s && i.attr("sizes", s)),
                        i
                            .attr("src", e)
                            .animate({ opacity: 1 }, 200, function() {
                                i
                                    .removeAttr(
                                        "data-lazy data-srcset data-sizes"
                                    )
                                    .removeClass("slick-loading");
                            }),
                        n.$slider.trigger("lazyLoaded", [n, i, e]);
                    });
                }),
                (r.onerror = function() {
                    i
                        .removeAttr("data-lazy")
                        .removeClass("slick-loading")
                        .addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, i, e]);
                }),
                (r.src = e);
            });
        }
        var e,
            o,
            s,
            n = this;
        if (
            (!0 === n.options.centerMode
                ? !0 === n.options.infinite
                    ? (s =
                              (o =
                                  n.currentSlide +
                                  (n.options.slidesToShow / 2 + 1)) +
                              n.options.slidesToShow +
                              2)
                    : ((o = Math.max(
                        0,
                        n.currentSlide - (n.options.slidesToShow / 2 + 1)
                    )),
                        (s =
                              n.options.slidesToShow / 2 +
                              1 +
                              2 +
                              n.currentSlide))
                : ((o = n.options.infinite
                    ? n.options.slidesToShow + n.currentSlide
                    : n.currentSlide),
                    (s = Math.ceil(o + n.options.slidesToShow)),
                    !0 === n.options.fade &&
                          (o > 0 && o--, s <= n.slideCount && s++)),
                (e = n.$slider.find(".slick-slide").slice(o, s)),
                "anticipated" === n.options.lazyLoad)
        )
            for (
                var r = o - 1,
                    l = s,
                    a = n.$slider.find(".slick-slide"),
                    d = 0;
                d < n.options.slidesToScroll;
                d++
            )
                r < 0 && (r = n.slideCount - 1),
                (e = (e = e.add(a.eq(r))).add(a.eq(l))),
                r--,
                l++;
        i(e),
        n.slideCount <= n.options.slidesToShow
            ? i(n.$slider.find(".slick-slide"))
            : n.currentSlide >= n.slideCount - n.options.slidesToShow
                ? i(
                    n.$slider
                        .find(".slick-cloned")
                        .slice(0, n.options.slidesToShow)
                )
                : 0 === n.currentSlide &&
                          i(
                              n.$slider
                                  .find(".slick-cloned")
                                  .slice(-1 * n.options.slidesToShow)
                          );
    }),
    (i.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({ opacity: 1 }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
    }),
    (i.prototype.next = i.prototype.slickNext = function() {
        this.changeSlide({ data: { message: "next" } });
    }),
    (i.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(), t.setPosition();
    }),
    (i.prototype.pause = i.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(), (t.paused = !0);
    }),
    (i.prototype.play = i.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(),
        (t.options.autoplay = !0),
        (t.paused = !1),
        (t.focussed = !1),
        (t.interrupted = !1);
    }),
    (i.prototype.postSlide = function(i) {
        var e = this;
        e.unslicked ||
                (e.$slider.trigger("afterChange", [e, i]),
                    (e.animating = !1),
                    e.slideCount > e.options.slidesToShow && e.setPosition(),
                    (e.swipeLeft = null),
                    e.options.autoplay && e.autoPlay(),
                    !0 === e.options.accessibility &&
                    (e.initADA(),
                        e.options.focusOnChange &&
                        t(e.$slides.get(e.currentSlide))
                            .attr("tabindex", 0)
                            .focus()));
    }),
    (i.prototype.prev = i.prototype.slickPrev = function() {
        this.changeSlide({ data: { message: "previous" } });
    }),
    (i.prototype.preventDefault = function(t) {
        t.preventDefault();
    }),
    (i.prototype.progressiveLazyLoad = function(i) {
        i = i || 1;
        var e,
            o,
            s,
            n,
            r,
            l = this,
            a = t("img[data-lazy]", l.$slider);
        a.length
            ? ((e = a.first()),
                (o = e.attr("data-lazy")),
                (s = e.attr("data-srcset")),
                (n = e.attr("data-sizes") || l.$slider.attr("data-sizes")),
                ((r = document.createElement("img")).onload = function() {
                    s && (e.attr("srcset", s), n && e.attr("sizes", n)),
                    e
                        .attr("src", o)
                        .removeAttr("data-lazy data-srcset data-sizes")
                        .removeClass("slick-loading"),
                    !0 === l.options.adaptiveHeight && l.setPosition(),
                    l.$slider.trigger("lazyLoaded", [l, e, o]),
                    l.progressiveLazyLoad();
                }),
                (r.onerror = function() {
                    i < 3
                        ? setTimeout(function() {
                            l.progressiveLazyLoad(i + 1);
                        }, 500)
                        : (e
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading")
                            .addClass("slick-lazyload-error"),
                            l.$slider.trigger("lazyLoadError", [l, e, o]),
                            l.progressiveLazyLoad());
                }),
                (r.src = o))
            : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (i.prototype.refresh = function(i) {
        var e,
            o,
            s = this;
        (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite &&
                    s.currentSlide > o &&
                    (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (e = s.currentSlide),
        s.destroy(!0),
        t.extend(s, s.initials, { currentSlide: e }),
        s.init(),
        i ||
                    s.changeSlide({ data: { message: "index", index: e } }, !1);
    }),
    (i.prototype.registerBreakpoints = function() {
        var i,
            e,
            o,
            s = this,
            n = s.options.responsive || null;
        if ("array" === t.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (i in n)
                if (((o = s.breakpoints.length - 1), n.hasOwnProperty(i))) {
                    for (e = n[i].breakpoint; o >= 0; )
                        s.breakpoints[o] &&
                                s.breakpoints[o] === e &&
                                s.breakpoints.splice(o, 1),
                        o--;
                    s.breakpoints.push(e),
                    (s.breakpointSettings[e] = n[i].settings);
                }
            s.breakpoints.sort(function(t, i) {
                return s.options.mobileFirst ? t - i : i - t;
            });
        }
    }),
    (i.prototype.reinit = function() {
        var i = this;
        (i.$slides = i.$slideTrack
            .children(i.options.slide)
            .addClass("slick-slide")),
        (i.slideCount = i.$slides.length),
        i.currentSlide >= i.slideCount &&
                    0 !== i.currentSlide &&
                    (i.currentSlide =
                        i.currentSlide - i.options.slidesToScroll),
        i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
        i.registerBreakpoints(),
        i.setProps(),
        i.setupInfinite(),
        i.buildArrows(),
        i.updateArrows(),
        i.initArrowEvents(),
        i.buildDots(),
        i.updateDots(),
        i.initDotEvents(),
        i.cleanUpSlideEvents(),
        i.initSlideEvents(),
        i.checkResponsive(!1, !0),
        !0 === i.options.focusOnSelect &&
                    t(i.$slideTrack)
                        .children()
                        .on("click.slick", i.selectHandler),
        i.setSlideClasses(
            "number" === typeof i.currentSlide ? i.currentSlide : 0
        ),
        i.setPosition(),
        i.focusHandler(),
        (i.paused = !i.options.autoplay),
        i.autoPlay(),
        i.$slider.trigger("reInit", [i]);
    }),
    (i.prototype.resize = function() {
        var i = this;
        t(window).width() !== i.windowWidth &&
                (clearTimeout(i.windowDelay),
                    (i.windowDelay = window.setTimeout(function() {
                        (i.windowWidth = t(window).width()),
                        i.checkResponsive(),
                        i.unslicked || i.setPosition();
                    }, 50)));
    }),
    (i.prototype.removeSlide = i.prototype.slickRemove = function(t, i, e) {
        var o = this;
        if (
            ((t =
                    "boolean" === typeof t
                        ? !0 === (i = t)
                            ? 0
                            : o.slideCount - 1
                        : !0 === i
                            ? --t
                            : t),
                o.slideCount < 1 || t < 0 || t > o.slideCount - 1)
        )
            return !1;
        o.unload(),
        !0 === e
            ? o.$slideTrack.children().remove()
            : o.$slideTrack
                .children(this.options.slide)
                .eq(t)
                .remove(),
        (o.$slides = o.$slideTrack.children(this.options.slide)),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        (o.$slidesCache = o.$slides),
        o.reinit();
    }),
    (i.prototype.setCSS = function(t) {
        var i,
            e,
            o = this,
            s = {};
        !0 === o.options.rtl && (t = -t),
        (i = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
        (e = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
        (s[o.positionProp] = t),
        !1 === o.transformsEnabled
            ? o.$slideTrack.css(s)
            : ((s = {}),
                !1 === o.cssTransitions
                    ? ((s[o.animType] =
                                "translate(" + i + ", " + e + ")"),
                        o.$slideTrack.css(s))
                    : ((s[o.animType] =
                                "translate3d(" + i + ", " + e + ", 0px)"),
                        o.$slideTrack.css(s)));
    }),
    (i.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical
            ? !0 === t.options.centerMode &&
                  t.$list.css({ padding: "0px " + t.options.centerPadding })
            : (t.$list.height(
                t.$slides.first().outerHeight(!0) * t.options.slidesToShow
            ),
                !0 === t.options.centerMode &&
                      t.$list.css({
                          padding: t.options.centerPadding + " 0px"
                      })),
        (t.listWidth = t.$list.width()),
        (t.listHeight = t.$list.height()),
        !1 === t.options.vertical && !1 === t.options.variableWidth
            ? ((t.slideWidth = Math.ceil(
                t.listWidth / t.options.slidesToShow
            )),
                t.$slideTrack.width(
                    Math.ceil(
                        t.slideWidth *
                                  t.$slideTrack.children(".slick-slide").length
                    )
                ))
            : !0 === t.options.variableWidth
                ? t.$slideTrack.width(5e3 * t.slideCount)
                : ((t.slideWidth = Math.ceil(t.listWidth)),
                    t.$slideTrack.height(
                        Math.ceil(
                            t.$slides.first().outerHeight(!0) *
                                      t.$slideTrack.children(".slick-slide")
                                          .length
                        )
                    ));
        var i =
                t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth &&
                t.$slideTrack.children(".slick-slide").width(t.slideWidth - i);
    }),
    (i.prototype.setFade = function() {
        var i,
            e = this;
        e.$slides.each(function(o, s) {
            (i = e.slideWidth * o * -1),
            !0 === e.options.rtl
                ? t(s).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: e.options.zIndex - 2,
                    opacity: 0
                })
                : t(s).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: e.options.zIndex - 2,
                    opacity: 0
                });
        }),
        e.$slides
            .eq(e.currentSlide)
            .css({ zIndex: e.options.zIndex - 1, opacity: 1 });
    }),
    (i.prototype.setHeight = function() {
        var t = this;
        if (
            1 === t.options.slidesToShow &&
                !0 === t.options.adaptiveHeight &&
                !1 === t.options.vertical
        ) {
            var i = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", i);
        }
    }),
    (i.prototype.setOption = i.prototype.slickSetOption = function() {
        var i,
            e,
            o,
            s,
            n,
            r = this,
            l = !1;
        if (
            ("object" === t.type(arguments[0])
                ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
                : "string" === t.type(arguments[0]) &&
                      ((o = arguments[0]),
                          (s = arguments[1]),
                          (l = arguments[2]),
                          "responsive" === arguments[0] &&
                      "array" === t.type(arguments[1])
                              ? (n = "responsive")
                              : void 0 !== arguments[1] && (n = "single")),
                "single" === n)
        )
            r.options[o] = s;
        else if ("multiple" === n)
            t.each(o, function(t, i) {
                r.options[t] = i;
            });
        else if ("responsive" === n)
            for (e in s)
                if ("array" !== t.type(r.options.responsive))
                    r.options.responsive = [s[e]];
                else {
                    for (i = r.options.responsive.length - 1; i >= 0; )
                        r.options.responsive[i].breakpoint ===
                                s[e].breakpoint &&
                                r.options.responsive.splice(i, 1),
                        i--;
                    r.options.responsive.push(s[e]);
                }
        l && (r.unload(), r.reinit());
    }),
    (i.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        !1 === t.options.fade
            ? t.setCSS(t.getLeft(t.currentSlide))
            : t.setFade(),
        t.$slider.trigger("setPosition", [t]);
    }),
    (i.prototype.setProps = function() {
        var t = this,
            i = document.body.style;
        (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
        "top" === t.positionProp
            ? t.$slider.addClass("slick-vertical")
            : t.$slider.removeClass("slick-vertical"),
        (void 0 === i.WebkitTransition &&
                    void 0 === i.MozTransition &&
                    void 0 === i.msTransition) ||
                    (!0 === t.options.useCSS && (t.cssTransitions = !0)),
        t.options.fade &&
                    ("number" === typeof t.options.zIndex
                        ? t.options.zIndex < 3 && (t.options.zIndex = 3)
                        : (t.options.zIndex = t.defaults.zIndex)),
        void 0 !== i.OTransform &&
                    ((t.animType = "OTransform"),
                        (t.transformType = "-o-transform"),
                        (t.transitionType = "OTransition"),
                        void 0 === i.perspectiveProperty &&
                        void 0 === i.webkitPerspective &&
                        (t.animType = !1)),
        void 0 !== i.MozTransform &&
                    ((t.animType = "MozTransform"),
                        (t.transformType = "-moz-transform"),
                        (t.transitionType = "MozTransition"),
                        void 0 === i.perspectiveProperty &&
                        void 0 === i.MozPerspective &&
                        (t.animType = !1)),
        void 0 !== i.webkitTransform &&
                    ((t.animType = "webkitTransform"),
                        (t.transformType = "-webkit-transform"),
                        (t.transitionType = "webkitTransition"),
                        void 0 === i.perspectiveProperty &&
                        void 0 === i.webkitPerspective &&
                        (t.animType = !1)),
        void 0 !== i.msTransform &&
                    ((t.animType = "msTransform"),
                        (t.transformType = "-ms-transform"),
                        (t.transitionType = "msTransition"),
                        void 0 === i.msTransform && (t.animType = !1)),
        void 0 !== i.transform &&
                    !1 !== t.animType &&
                    ((t.animType = "transform"),
                        (t.transformType = "transform"),
                        (t.transitionType = "transition")),
        (t.transformsEnabled =
                    t.options.useTransform &&
                    null !== t.animType &&
                    !1 !== t.animType);
    }),
    (i.prototype.setSlideClasses = function(t) {
        var i,
            e,
            o,
            s,
            n = this;
        if (
            ((e = n.$slider
                .find(".slick-slide")
                .removeClass("slick-active slick-center slick-current")
                .attr("aria-hidden", "true")),
                n.$slides.eq(t).addClass("slick-current"),
                !0 === n.options.centerMode)
        ) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            (i = Math.floor(n.options.slidesToShow / 2)),
            !0 === n.options.infinite &&
                        (t >= i && t <= n.slideCount - 1 - i
                            ? n.$slides
                                .slice(t - i + r, t + i + 1)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                            : ((o = n.options.slidesToShow + t),
                                e
                                    .slice(o - i + 1 + r, o + i + 2)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")),
                            0 === t
                                ? e
                                    .eq(e.length - 1 - n.options.slidesToShow)
                                    .addClass("slick-center")
                                : t === n.slideCount - 1 &&
                              e
                                  .eq(n.options.slidesToShow)
                                  .addClass("slick-center")),
            n.$slides.eq(t).addClass("slick-center");
        } else
            t >= 0 && t <= n.slideCount - n.options.slidesToShow
                ? n.$slides
                    .slice(t, t + n.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : e.length <= n.options.slidesToShow
                    ? e
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")
                    : ((s = n.slideCount % n.options.slidesToShow),
                        (o =
                              !0 === n.options.infinite
                                  ? n.options.slidesToShow + t
                                  : t),
                        n.options.slidesToShow == n.options.slidesToScroll &&
                          n.slideCount - t < n.options.slidesToShow
                            ? e
                                .slice(
                                    o - (n.options.slidesToShow - s),
                                    o + s
                                )
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                            : e
                                .slice(o, o + n.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
        ("ondemand" !== n.options.lazyLoad &&
                "anticipated" !== n.options.lazyLoad) ||
                n.lazyLoad();
    }),
    (i.prototype.setupInfinite = function() {
        var i,
            e,
            o,
            s = this;
        if (
            (!0 === s.options.fade && (s.options.centerMode = !1),
                !0 === s.options.infinite &&
                    !1 === s.options.fade &&
                    ((e = null), s.slideCount > s.options.slidesToShow))
        ) {
            for (
                o =
                        !0 === s.options.centerMode
                            ? s.options.slidesToShow + 1
                            : s.options.slidesToShow,
                i = s.slideCount;
                i > s.slideCount - o;
                i -= 1
            )
                (e = i - 1),
                t(s.$slides[e])
                    .clone(!0)
                    .attr("id", "")
                    .attr("data-slick-index", e - s.slideCount)
                    .prependTo(s.$slideTrack)
                    .addClass("slick-cloned");
            for (i = 0; i < o + s.slideCount; i += 1)
                (e = i),
                t(s.$slides[e])
                    .clone(!0)
                    .attr("id", "")
                    .attr("data-slick-index", e + s.slideCount)
                    .appendTo(s.$slideTrack)
                    .addClass("slick-cloned");
            s.$slideTrack
                .find(".slick-cloned")
                .find("[id]")
                .each(function() {
                    t(this).attr("id", "");
                });
        }
    }),
    (i.prototype.interrupt = function(t) {
        var i = this;
        t || i.autoPlay(), (i.interrupted = t);
    }),
    (i.prototype.selectHandler = function(i) {
        var e = this,
            o = t(i.target).is(".slick-slide")
                ? t(i.target)
                : t(i.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0),
        e.slideCount <= e.options.slidesToShow
            ? e.slideHandler(s, !1, !0)
            : e.slideHandler(s);
    }),
    (i.prototype.slideHandler = function(t, i, e) {
        var o,
            s,
            n,
            r,
            l,
            a = null,
            d = this;
        if (
            ((i = i || !1),
                !(
                    (!0 === d.animating && !0 === d.options.waitForAnimate) ||
                    (!0 === d.options.fade && d.currentSlide === t)
                ))
        )
            if (
                (!1 === i && d.asNavFor(t),
                    (o = t),
                    (a = d.getLeft(o)),
                    (r = d.getLeft(d.currentSlide)),
                    (d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft),
                    !1 === d.options.infinite &&
                        !1 === d.options.centerMode &&
                        (t < 0 ||
                            t > d.getDotCount() * d.options.slidesToScroll))
            )
                !1 === d.options.fade &&
                        ((o = d.currentSlide),
                            !0 !== e
                                ? d.animateSlide(r, function() {
                                    d.postSlide(o);
                                })
                                : d.postSlide(o));
            else if (
                !1 === d.options.infinite &&
                    !0 === d.options.centerMode &&
                    (t < 0 || t > d.slideCount - d.options.slidesToScroll)
            )
                !1 === d.options.fade &&
                        ((o = d.currentSlide),
                            !0 !== e
                                ? d.animateSlide(r, function() {
                                    d.postSlide(o);
                                })
                                : d.postSlide(o));
            else {
                if (
                    (d.options.autoplay && clearInterval(d.autoPlayTimer),
                        (s =
                            o < 0
                                ? d.slideCount % d.options.slidesToScroll != 0
                                    ? d.slideCount -
                                      d.slideCount % d.options.slidesToScroll
                                    : d.slideCount + o
                                : o >= d.slideCount
                                    ? d.slideCount % d.options.slidesToScroll !=
                                      0
                                        ? 0
                                        : o - d.slideCount
                                    : o),
                        (d.animating = !0),
                        d.$slider.trigger("beforeChange", [
                            d,
                            d.currentSlide,
                            s
                        ]),
                        (n = d.currentSlide),
                        (d.currentSlide = s),
                        d.setSlideClasses(d.currentSlide),
                        d.options.asNavFor &&
                            (l = (l = d.getNavTarget()).slick("getSlick"))
                                .slideCount <= l.options.slidesToShow &&
                            l.setSlideClasses(d.currentSlide),
                        d.updateDots(),
                        d.updateArrows(),
                        !0 === d.options.fade)
                )
                    return (
                        !0 !== e
                            ? (d.fadeSlideOut(n),
                                d.fadeSlide(s, function() {
                                    d.postSlide(s);
                                }))
                            : d.postSlide(s),
                        void d.animateHeight()
                    );
                !0 !== e
                    ? d.animateSlide(a, function() {
                        d.postSlide(s);
                    })
                    : d.postSlide(s);
            }
    }),
    (i.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows &&
                t.slideCount > t.options.slidesToShow &&
                (t.$prevArrow.hide(), t.$nextArrow.hide()),
        !0 === t.options.dots &&
                    t.slideCount > t.options.slidesToShow &&
                    t.$dots.hide(),
        t.$slider.addClass("slick-loading");
    }),
    (i.prototype.swipeDirection = function() {
        var t,
            i,
            e,
            o,
            s = this;
        return (
            (t = s.touchObject.startX - s.touchObject.curX),
            (i = s.touchObject.startY - s.touchObject.curY),
            (e = Math.atan2(i, t)),
            (o = Math.round(180 * e / Math.PI)) < 0 &&
                    (o = 360 - Math.abs(o)),
            o <= 45 && o >= 0
                ? !1 === s.options.rtl
                    ? "left"
                    : "right"
                : o <= 360 && o >= 315
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o >= 135 && o <= 225
                        ? !1 === s.options.rtl
                            ? "right"
                            : "left"
                        : !0 === s.options.verticalSwiping
                            ? o >= 35 && o <= 135
                                ? "down"
                                : "up"
                            : "vertical"
        );
    }),
    (i.prototype.swipeEnd = function(t) {
        var i,
            e,
            o = this;
        if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
            return (o.scrolling = !1), !1;
        if (
            ((o.interrupted = !1),
                (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                void 0 === o.touchObject.curX)
        )
            return !1;
        if (
            (!0 === o.touchObject.edgeHit &&
                    o.$slider.trigger("edge", [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe)
        ) {
            switch ((e = o.swipeDirection())) {
            case "left":
            case "down":
                (i = o.options.swipeToSlide
                    ? o.checkNavigable(
                        o.currentSlide + o.getSlideCount()
                    )
                    : o.currentSlide + o.getSlideCount()),
                (o.currentDirection = 0);
                break;
            case "right":
            case "up":
                (i = o.options.swipeToSlide
                    ? o.checkNavigable(
                        o.currentSlide - o.getSlideCount()
                    )
                    : o.currentSlide - o.getSlideCount()),
                (o.currentDirection = 1);
            }
            "vertical" != e &&
                    (o.slideHandler(i),
                        (o.touchObject = {}),
                        o.$slider.trigger("swipe", [o, e]));
        } else
            o.touchObject.startX !== o.touchObject.curX &&
                    (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (i.prototype.swipeHandler = function(t) {
        var i = this;
        if (
            !(
                !1 === i.options.swipe ||
                    ("ontouchend" in document && !1 === i.options.swipe) ||
                    (!1 === i.options.draggable &&
                        -1 !== t.type.indexOf("mouse"))
            )
        )
            switch (
                ((i.touchObject.fingerCount =
                        t.originalEvent && void 0 !== t.originalEvent.touches
                            ? t.originalEvent.touches.length
                            : 1),
                    (i.touchObject.minSwipe =
                        i.listWidth / i.options.touchThreshold),
                    !0 === i.options.verticalSwiping &&
                        (i.touchObject.minSwipe =
                            i.listHeight / i.options.touchThreshold),
                    t.data.action)
            ) {
            case "start":
                i.swipeStart(t);
                break;
            case "move":
                i.swipeMove(t);
                break;
            case "end":
                i.swipeEnd(t);
            }
    }),
    (i.prototype.swipeMove = function(t) {
        var i,
            e,
            o,
            s,
            n,
            r,
            l = this;
        return (
            (n =
                    void 0 !== t.originalEvent
                        ? t.originalEvent.touches
                        : null),
            !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((i = l.getLeft(l.currentSlide)),
                        (l.touchObject.curX =
                        void 0 !== n ? n[0].pageX : t.clientX),
                        (l.touchObject.curY =
                        void 0 !== n ? n[0].pageY : t.clientY),
                        (l.touchObject.swipeLength = Math.round(
                            Math.sqrt(
                                Math.pow(
                                    l.touchObject.curX - l.touchObject.startX,
                                    2
                                )
                            )
                        )),
                        (r = Math.round(
                            Math.sqrt(
                                Math.pow(
                                    l.touchObject.curY - l.touchObject.startY,
                                    2
                                )
                            )
                        )),
                        !l.options.verticalSwiping && !l.swiping && r > 4
                            ? ((l.scrolling = !0), !1)
                            : (!0 === l.options.verticalSwiping &&
                              (l.touchObject.swipeLength = r),
                                (e = l.swipeDirection()),
                                void 0 !== t.originalEvent &&
                              l.touchObject.swipeLength > 4 &&
                              ((l.swiping = !0), t.preventDefault()),
                                (s =
                              (!1 === l.options.rtl ? 1 : -1) *
                              (l.touchObject.curX > l.touchObject.startX
                                  ? 1
                                  : -1)),
                                !0 === l.options.verticalSwiping &&
                              (s =
                                  l.touchObject.curY > l.touchObject.startY
                                      ? 1
                                      : -1),
                                (o = l.touchObject.swipeLength),
                                (l.touchObject.edgeHit = !1),
                                !1 === l.options.infinite &&
                              ((0 === l.currentSlide && "right" === e) ||
                                  (l.currentSlide >= l.getDotCount() &&
                                      "left" === e)) &&
                              ((o =
                                  l.touchObject.swipeLength *
                                  l.options.edgeFriction),
                                  (l.touchObject.edgeHit = !0)),
                                !1 === l.options.vertical
                                    ? (l.swipeLeft = i + o * s)
                                    : (l.swipeLeft =
                                    i +
                                    o * (l.$list.height() / l.listWidth) * s),
                                !0 === l.options.verticalSwiping &&
                              (l.swipeLeft = i + o * s),
                                !0 !== l.options.fade &&
                              !1 !== l.options.touchMove &&
                              (!0 === l.animating
                                  ? ((l.swipeLeft = null), !1)
                                  : void l.setCSS(l.swipeLeft))))
        );
    }),
    (i.prototype.swipeStart = function(t) {
        var i,
            e = this;
        if (
            ((e.interrupted = !0),
                1 !== e.touchObject.fingerCount ||
                    e.slideCount <= e.options.slidesToShow)
        )
            return (e.touchObject = {}), !1;
        void 0 !== t.originalEvent &&
                void 0 !== t.originalEvent.touches &&
                (i = t.originalEvent.touches[0]),
        (e.touchObject.startX = e.touchObject.curX =
                    void 0 !== i ? i.pageX : t.clientX),
        (e.touchObject.startY = e.touchObject.curY =
                    void 0 !== i ? i.pageY : t.clientY),
        (e.dragging = !0);
    }),
    (i.prototype.unfilterSlides = i.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache &&
                (t.unload(),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slidesCache.appendTo(t.$slideTrack),
                    t.reinit());
    }),
    (i.prototype.unload = function() {
        var i = this;
        t(".slick-cloned", i.$slider).remove(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow &&
                    i.htmlExpr.test(i.options.prevArrow) &&
                    i.$prevArrow.remove(),
        i.$nextArrow &&
                    i.htmlExpr.test(i.options.nextArrow) &&
                    i.$nextArrow.remove(),
        i.$slides
            .removeClass(
                "slick-slide slick-active slick-visible slick-current"
            )
            .attr("aria-hidden", "true")
            .css("width", "");
    }),
    (i.prototype.unslick = function(t) {
        var i = this;
        i.$slider.trigger("unslick", [i, t]), i.destroy();
    }),
    (i.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
        !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    !t.options.infinite &&
                    (t.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                        t.$nextArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"),
                        0 === t.currentSlide
                            ? (t.$prevArrow
                                .addClass("slick-disabled")
                                .attr("aria-disabled", "true"),
                                t.$nextArrow
                                    .removeClass("slick-disabled")
                                    .attr("aria-disabled", "false"))
                            : t.currentSlide >=
                              t.slideCount - t.options.slidesToShow &&
                          !1 === t.options.centerMode
                                ? (t.$nextArrow
                                    .addClass("slick-disabled")
                                    .attr("aria-disabled", "true"),
                                    t.$prevArrow
                                        .removeClass("slick-disabled")
                                        .attr("aria-disabled", "false"))
                                : t.currentSlide >= t.slideCount - 1 &&
                              !0 === t.options.centerMode &&
                              (t.$nextArrow
                                  .addClass("slick-disabled")
                                  .attr("aria-disabled", "true"),
                                  t.$prevArrow
                                      .removeClass("slick-disabled")
                                      .attr("aria-disabled", "false")));
    }),
    (i.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots &&
                (t.$dots
                    .find("li")
                    .removeClass("slick-active")
                    .end(),
                    t.$dots
                        .find("li")
                        .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                        .addClass("slick-active"));
    }),
    (i.prototype.visibility = function() {
        var t = this;
        t.options.autoplay &&
                (document[t.hidden]
                    ? (t.interrupted = !0)
                    : (t.interrupted = !1));
    }),
    (t.fn.slick = function() {
        var t,
            e,
            o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (t = 0; t < r; t++)
            if (
                ("object" === typeof s || void 0 === s
                    ? (o[t].slick = new i(o[t], s))
                    : (e = o[t].slick[s].apply(o[t].slick, n)),
                    void 0 !== e)
            )
                return e;
        return o;
    });
}),
(function(t) {
    var i, e;
    (i = (function() {
        function i(i, e) {
            var o;
            (this.options = e),
            (this.$element = t(i)),
            (this.didInit = !1),
            (o = this),
            this.$element.on(
                "click.slickLightbox",
                this.options.itemSelector,
                function(i) {
                    var e, s;
                    if (
                        (i.preventDefault(),
                            (e = t(this)).blur(),
                            "function" !== typeof o.options.shouldOpen ||
                                    o.options.shouldOpen(o, e, i))
                    )
                        return (
                            (s = o.$element.find(
                                o.options.itemSelector
                            )),
                            o.elementIsSlick() &&
                                        ((s = o.filterOutSlickClones(s)),
                                            (e = o.handlePossibleCloneClick(e, s))),
                            o.init(s.index(e))
                        );
                }
            );
        }
        return (
            (i.prototype.init = function(t) {
                return (
                    (this.didInit = !0),
                    this.detectIE(),
                    this.createModal(),
                    this.bindEvents(),
                    this.initSlick(t),
                    this.open()
                );
            }),
            (i.prototype.createModalItems = function() {
                var i, e, o, s, n, r;
                return (
                    (s =
                            this.options.lazyPlaceholder ||
                            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
                    (o = function(t, i, e) {
                        return (
                            '<div class="slick-lightbox-slick-item">\n  <div class="slick-lightbox-slick-item-inner">\n    <img class="slick-lightbox-slick-img" ' +
                                (!0 === e
                                    ? ' data-lazy="' + t + '" src="' + s + '" '
                                    : ' src="' + t + '" ') +
                                " />\n    " +
                                i +
                                "\n  </div>\n</div>"
                        );
                    }),
                    this.options.images
                        ? (r = t.map(
                            this.options.images,
                            (function(t) {
                                return function(i) {
                                    return o(i, t.options.lazy);
                                };
                            })(this)
                        ))
                        : ((i = this.filterOutSlickClones(
                            this.$element.find(this.options.itemSelector)
                        )),
                            (n = i.length),
                            (e = (function(t) {
                                return function(i, e) {
                                    var s, r, l;
                                    return (
                                        (r = { index: e, length: n }),
                                        (s = t.getElementCaption(i, r)),
                                        (l = t.getElementSrc(i)),
                                        o(l, s, t.options.lazy)
                                    );
                                };
                            })(this)),
                            (r = t.map(i, e))),
                    r
                );
            }),
            (i.prototype.createModal = function() {
                var i, e;
                return (
                    (e = this.createModalItems()),
                    (i =
                            '<div class="slick-lightbox slick-lightbox-hide-init' +
                            (this.isIE ? " slick-lightbox-ie" : "") +
                            '" style="background: ' +
                            this.options.background +
                            ';">\n  <div class="slick-lightbox-inner">\n    <div class="slick-lightbox-slick slick-caption-' +
                            this.options.captionPosition +
                            '">' +
                            e.join("") +
                            "</div>\n  <div>\n<div>"),
                    (this.$modalElement = t(i)),
                    (this.$parts = {}),
                    (this.$parts.closeButton = t(
                        this.options.layouts.closeButton
                    )),
                    this.$modalElement
                        .find(".slick-lightbox-inner")
                        .append(this.$parts.closeButton),
                    t("body").append(this.$modalElement)
                );
            }),
            (i.prototype.initSlick = function(i) {
                var e;
                return (
                    (e = { initialSlide: i }),
                    this.options.lazy && (e.lazyLoad = "ondemand"),
                    null != this.options.slick
                        ? "function" === typeof this.options.slick
                            ? (this.slick = this.options.slick(
                                this.$modalElement
                            ))
                            : (this.slick = this.$modalElement
                                .find(".slick-lightbox-slick")
                                .slick(
                                    t.extend({}, this.options.slick, e)
                                ))
                        : (this.slick = this.$modalElement
                            .find(".slick-lightbox-slick")
                            .slick(e)),
                    this.$modalElement.trigger("init.slickLightbox")
                );
            }),
            (i.prototype.open = function() {
                return (
                    this.options.useHistoryApi && this.writeHistory(),
                    this.$element.trigger("show.slickLightbox"),
                    setTimeout(
                        (function(t) {
                            return function() {
                                return t.$element.trigger(
                                    "shown.slickLightbox"
                                );
                            };
                        })(this),
                        this.getTransitionDuration()
                    ),
                    this.$modalElement.removeClass(
                        "slick-lightbox-hide-init"
                    )
                );
            }),
            (i.prototype.close = function() {
                return (
                    this.$element.trigger("hide.slickLightbox"),
                    setTimeout(
                        (function(t) {
                            return function() {
                                return t.$element.trigger(
                                    "hidden.slickLightbox"
                                );
                            };
                        })(this),
                        this.getTransitionDuration()
                    ),
                    this.$modalElement.addClass("slick-lightbox-hide"),
                    this.destroy()
                );
            }),
            (i.prototype.bindEvents = function() {
                var i;
                if (
                    ((i = (function(t) {
                        return function() {
                            var i;
                            return (
                                (i = t.$modalElement
                                    .find(".slick-lightbox-inner")
                                    .height()),
                                t.$modalElement
                                    .find(".slick-lightbox-slick-item")
                                    .height(i),
                                t.$modalElement
                                    .find(
                                        ".slick-lightbox-slick-img, .slick-lightbox-slick-item-inner"
                                    )
                                    .css(
                                        "max-height",
                                        Math.round(
                                            t.options.imageMaxHeight * i
                                        )
                                    )
                            );
                        };
                    })(this)),
                        t(window).on(
                            "orientationchange.slickLightbox resize.slickLightbox",
                            i
                        ),
                        this.options.useHistoryApi &&
                            t(window).on(
                                "popstate.slickLightbox",
                                (function(t) {
                                    return function() {
                                        return t.close();
                                    };
                                })(this)
                            ),
                        this.$modalElement.on("init.slickLightbox", i),
                        this.$modalElement.on(
                            "destroy.slickLightbox",
                            (function(t) {
                                return function() {
                                    return t.destroy();
                                };
                            })(this)
                        ),
                        this.$element.on(
                            "destroy.slickLightbox",
                            (function(t) {
                                return function() {
                                    return t.destroy(!0);
                                };
                            })(this)
                        ),
                        this.$parts.closeButton.on(
                            "click.slickLightbox touchstart.slickLightbox",
                            (function(t) {
                                return function(i) {
                                    return i.preventDefault(), t.close();
                                };
                            })(this)
                        ),
                        (this.options.closeOnEscape ||
                            this.options.navigateByKeyboard) &&
                            t(document).on(
                                "keydown.slickLightbox",
                                (function(t) {
                                    return function(i) {
                                        var e;
                                        if (
                                            ((e = i.keyCode
                                                ? i.keyCode
                                                : i.which),
                                                t.options.navigateByKeyboard &&
                                                (37 === e
                                                    ? t.slideSlick("left")
                                                    : 39 === e &&
                                                      t.slideSlick("right")),
                                                t.options.closeOnEscape && 27 === e)
                                        )
                                            return t.close();
                                    };
                                })(this)
                            ),
                        this.options.closeOnBackdropClick)
                )
                    return (
                        this.$modalElement.on(
                            "click.slickLightbox touchstart.slickLightbox",
                            ".slick-lightbox-slick-img",
                            function(t) {
                                return t.stopPropagation();
                            }
                        ),
                        this.$modalElement.on(
                            "click.slickLightbox",
                            ".slick-lightbox-slick-item",
                            (function(t) {
                                return function(i) {
                                    return i.preventDefault(), t.close();
                                };
                            })(this)
                        )
                    );
            }),
            (i.prototype.slideSlick = function(t) {
                return "left" === t
                    ? this.slick.slick("slickPrev")
                    : this.slick.slick("slickNext");
            }),
            (i.prototype.detectIE = function() {
                if (
                    ((this.isIE = !1),
                        /MSIE (\d+\.\d+);/.test(navigator.userAgent) &&
                            new Number(RegExp.$1) < 9)
                )
                    return (this.isIE = !0);
            }),
            (i.prototype.getElementCaption = function(i, e) {
                return this.options.caption
                    ? '<span class="slick-lightbox-slick-caption">' +
                              function() {
                                  switch (typeof this.options.caption) {
                                  case "function":
                                      return this.options.caption(i, e);
                                  case "string":
                                      return t(i).data(
                                          this.options.caption
                                      );
                                  }
                              }.call(this) +
                              "</span>"
                    : "";
            }),
            (i.prototype.getElementSrc = function(i) {
                switch (typeof this.options.src) {
                case "function":
                    return this.options.src(i);
                case "string":
                    return t(i).attr(this.options.src);
                default:
                    return i.href;
                }
            }),
            (i.prototype.unbindEvents = function() {
                return (
                    t(window).off(".slickLightbox"),
                    t(document).off(".slickLightbox"),
                    this.$modalElement.off(".slickLightbox")
                );
            }),
            (i.prototype.destroy = function(t) {
                if (
                    (null == t && (t = !1),
                        this.didInit &&
                            (this.unbindEvents(),
                                setTimeout(
                                    (function(t) {
                                        return function() {
                                            return t.$modalElement.remove();
                                        };
                                    })(this),
                                    this.options.destroyTimeout
                                )),
                        t)
                )
                    return (
                        this.$element.off(".slickLightbox"),
                        this.$element.off(
                            ".slickLightbox",
                            this.options.itemSelector
                        )
                    );
            }),
            (i.prototype.destroyPrevious = function() {
                return t("body")
                    .children(".slick-lightbox")
                    .trigger("destroy.slickLightbox");
            }),
            (i.prototype.getTransitionDuration = function() {
                var t;
                return this.transitionDuration
                    ? this.transitionDuration
                    : ((t = this.$modalElement.css("transition-duration")),
                        (this.transitionDuration =
                              void 0 === t
                                  ? 500
                                  : t.indexOf("ms") > -1
                                      ? parseFloat(t)
                                      : 1e3 * parseFloat(t)));
            }),
            (i.prototype.writeHistory = function() {
                return "undefined" !== typeof history &&
                        null !== history &&
                        "function" === typeof history.pushState
                    ? history.pushState(null, null, "")
                    : void 0;
            }),
            (i.prototype.filterOutSlickClones = function(i) {
                return this.elementIsSlick()
                    ? (i = i.filter(function() {
                        var i;
                        return (
                            !(i = t(this)).hasClass("slick-cloned") &&
                                  0 === i.parents(".slick-cloned").length
                        );
                    }))
                    : i;
            }),
            (i.prototype.handlePossibleCloneClick = function(i, e) {
                var o;
                return this.elementIsSlick() &&
                        i.closest(".slick-slide").hasClass("slick-cloned")
                    ? ((o = i.attr("href")),
                        e
                            .filter(function() {
                                return t(this).attr("href") === o;
                            })
                            .first())
                    : i;
            }),
            (i.prototype.elementIsSlick = function() {
                return this.$element.hasClass("slick-slider");
            }),
            i
        );
    })()),
    (e = {
        background: "rgba(0,0,0,.8)",
        closeOnEscape: !0,
        closeOnBackdropClick: !0,
        destroyTimeout: 500,
        itemSelector: "a",
        navigateByKeyboard: !0,
        src: !1,
        caption: !1,
        captionPosition: "dynamic",
        images: !1,
        slick: {},
        useHistoryApi: !1,
        layouts: {
            closeButton:
                        '<button type="button" class="slick-lightbox-close"></button>'
        },
        shouldOpen: null,
        imageMaxHeight: 0.9,
        lazy: !1
    }),
    (t.fn.slickLightbox = function(o) {
        return (
            (o = t.extend({}, e, o)),
            t(this).each(function() {
                return (this.slickLightbox = new i(this, o));
            }),
            this
        );
    }),
    (t.fn.unslickLightbox = function() {
        return t(this)
            .trigger("destroy.slickLightbox")
            .each(function() {
                return (this.slickLightbox = null);
            });
    });
})(jQuery),
Vue.component("animated-number", {
    template: "<p>{{displayNumber}}</p>",
    props: { number: { default: 0 } },
    data: function() {
        return { displayNumber: 0, interval: !1 };
    },
    ready: function() {
        this.displayNumber = this.number ? this.number : 0;
    },
    watch: {
        number: function() {
            clearInterval(this.interval),
            this.number != this.displayNumber &&
                        (this.interval = window.setInterval(
                            function() {
                                if (this.displayNumber != this.number) {
                                    var t =
                                        (this.number - this.displayNumber) / 10;
                                    (t = t >= 0 ? Math.ceil(t) : Math.floor(t)),
                                    (this.displayNumber =
                                            this.displayNumber + t);
                                }
                            }.bind(this),
                            5
                        ));
        }
    }
}),
new Vue({
    el: "#js-calculator",
    data: {
        timeout: 0,
        selectedBrands: [],//выбранные марки
        readyMixed: [
            {
                mark: "В7,5",
                params: "M100 П3 F50 W2",
                types: [
                    { type: "gravel", value: "", cost: 2800 },
                    { type: "granite", value: "", cost: 2900 }
                ]
            },
            {
                mark: "В12,5",
                params: "М150 П3 F50 W4",
                types: [
                    { type: "gravel", value: "", cost: 2900 },
                    { type: "granite", value: "", cost: 3100 }
                ]
            },
            {
                mark: "В15",
                params: "М200 П3 F100 W6",
                types: [
                    { type: "gravel", value: "", cost: 3000 },
                    { type: "granite", value: "", cost: 3300 }
                ]
            },
            {
                mark: "В20",
                params: "М250 П4 F200 W8",
                types: [
                    { type: "gravel", value: "", cost: 3100 },
                    { type: "granite", value: "", cost: 3400 }
                ]
            },
            {
                mark: "В22,5",
                params: "М300 П4 F200 W6",
                types: [
                    { type: "gravel", value: "", cost: 3200 },
                    { type: "granite", value: "", cost: 3600 }
                ]
            },
            {
                mark: "В25",
                params: "M350 П4 F300 W8",
                types: [
                    { type: "gravel", value: "", cost: 3350 },
                    { type: "granite", value: "", cost: 3700 }
                ]
            },
            {
                mark: "В30",
                params: "М400 П4 F300 W10",
                types: [
                    { type: "gravel" },
                    { type: "granite", value: "", cost: 3800 }
                ]
            },
            {
                mark: "В35",
                params: "М450 П4 F300 W12",
                types: [
                    { type: "gravel" },
                    { type: "granite", value: "", cost: 3900 }
                ]
            },
            {
                mark: "В40",
                params: "М550 П4 F300 W12",
                types: [
                    { type: "gravel" },
                    { type: "granite", value: "", cost: 4200 }
                ]
            },
            {
                mark: "В45",
                params: "М600 П4 F300 W12",
                types: [
                    { type: "gravel" },
                    { type: "granite", value: "", cost: 4650 }
                ]
            },
            {
                mark: "В60",
                params: "М800 П4 F300 W14",
                types: [
                    { type: "gravel" },
                    { type: "granite", value: "", cost: 5450 }
                ]
            }
        ],
        lean: [
            {
                mark: "M100",
                types: [{ type: "any", value: "", cost: 2550 }]
            },
            {
                mark: "M150",
                types: [{ type: "any", value: "", cost: 2650 }]
            },
            {
                mark: "M200",
                types: [{ type: "any", value: "", cost: 2750 }]
            },
            {
                mark: "M250",
                types: [{ type: "any", value: "", cost: 2850 }]
            },
            {
                mark: "M300",
                types: [{ type: "any", value: "", cost: 2900 }]
            }
        ],
        expanded: [
            {
                mark: "M100",
                types: [{ type: "any", value: "", cost: 2550 }]
            },
            {
                mark: "M150",
                types: [{ type: "any", value: "", cost: 2650 }]
            },
            {
                mark: "M200",
                types: [{ type: "any", value: "", cost: 2750 }]
            },
            {
                mark: "M250",
                types: [{ type: "any", value: "", cost: 2850 }]
            },
            {
                mark: "M300",
                types: [{ type: "any", value: "", cost: 2900 }]
            }
        ],
        solution: [
            {
                mark: "M100",
                types: [{ type: "any", value: "", cost: 2650 }]
            },
            {
                mark: "M150",
                types: [{ type: "any", value: "", cost: 2750 }]
            },
            {
                mark: "M200",
                types: [{ type: "any", value: "", cost: 2850 }]
            },
            {
                mark: "M250",
                types: [{ type: "any", value: "", cost: 2950 }]
            }
        ],
        delivery: [
            { text: "до 5 км", cost: "300 руб / m3" },
            { text: "до 5-10 км", cost: "350 руб / m3" },
            { text: "до 10-15 км", cost: "400 руб / m3" },
            { text: "до 15-20 км", cost: "450 руб / m3" },
            { text: "до 20-25 км", cost: "500 руб / m3" },
            { text: "до 25-30 км", cost: "550 руб / m3" }
        ],
        result: 0,
        clientWidth: 0
    },
    computed: {
        currentTabData: function() {
            return this.tabs[this.currentTabIndex].data;
        },
        currentTab: function() {
            return this.tabs[this.currentTabIndex];
        },
        isMobile: function(){
            return this.clientWidth <= 568
        },
    },
    mounted: function(){
        var self = this;
        var onResize = function(e){
            self.clientWidth = $(window).width()
        }
        onResize()
        $(window).on('resize.main', onResize)
    },
    destroyed: function(){
        $(window).off('resize.main')
    },
    methods: {
        validate: function(type){
            var self = this;
            var val = type.value + '';
            clearTimeout(self.timeout);
            type.value = val.replace(/[^0-9]/g,'');
            self.timeout = setTimeout(function(){
                self.valueUpdated();
            },100);
        },
        valueUpdated: function() {
            var i = { value: 0, result: 0 };
            var self = this;
            self.selectedBrands = [];

            function t(t, concreteType) {
                t.forEach(function(t) {
                    t.types.forEach(function(type) {
                        // console.log(t.value),
                        if(type.value > 0){
                            var selectedBrand = {
                                brand: concreteType+' '+(t.params ? t.params : t.mark),
                                value: type.value
                            };
                            if(type.type == 'gravel'){
                                selectedBrand.brand += ' (Гравий)';
                            }
                            if(type.type == 'granite'){
                                selectedBrand.brand += ' (Гранит)';
                            }
                            self.selectedBrands.push(selectedBrand);
                            i.value += type.value;
                            i.result += type.cost * type.value;
                        }
                    });
                });
            }
            t(this.readyMixed, 'Товарный бетон'),
            t(this.lean, 'Тощий бетон'),
            t(this.expanded, 'Керамзито бетон'),
            t(this.solution, 'Раствор'),
            console.log(self.selectedBrands);
            i.value > 9 && (i.result = parseInt(i.result / 100 * 95)),
            (this.result = i.result);
        },
        increment: function(type){
            type.value = +type.value;
            if(isNaN(type.value)){
                type.value = 0;
            }
            type.value += 1;
            var self = this;
            clearTimeout(self.timeout);
            self.timeout = setTimeout(function(){
                self.valueUpdated();
            },100);
        },
        decrement: function(type){
            type.value = +type.value;
            if(isNaN(type.value)){
                type.value = 0;
            }
            if(type.value <= 1){
                type.value = "";
            }else{
                type.value = +type.value - 1;
            }
            var self = this;
            clearTimeout(self.timeout);
            self.timeout = setTimeout(function(){
                self.valueUpdated();
            },100);
        }
    }
}),
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(t) {
        if (
            location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
        ) {
            var i = $(this.hash);
            (i = i.length ? i : $("[name=" + this.hash.slice(1) + "]"))
                .length &&
                    (t.preventDefault(),
                        $("html, body").animate(
                            { scrollTop: i.offset().top },
                            1e3,
                            function() {
                                var t = $(i);
                                if ((t.focus(), t.is(":focus"))) return !1;
                                t.attr("tabindex", "-1"), t.focus();
                            }
                        ));
        }
    }),
$("#bg-modal").on("click", function() {
    $(this).fadeOut(300);
    $(".modal").fadeOut(300);
}),
$(document).on("click", "[data-open]", function() {
    var $t = $(this), 
        sum = +$('.article_cost').text();
    if(sum){
        $('form [name="sum"]').val(sum);
    }
    if($t.hasClass('card--row')){
        var comment = '';
        $t.find('.card_row').children().each(function(){
            if(comment) comment += '\n';
            comment += $(this).text();
        });
        $('form [name="comment"]').val(comment);
    }
    openModal($t.attr("data-open"));
}),
$("[data-close]").on("click", function(t) {
    closeModal($(this).attr("data-close"));
}),
$("form").submit(function(t) {
    t.preventDefault();
    var e = $(this),
        o = e.serializeArray(),
        s = {},
        n = e.find('[data-req="true"]'),
        $b = e.find(".form_btn"),
        bStatus = new BtnStatus($b),
        r = !0;
    for (var i = 0; i < o.length; i++) s[o[i].name] = o[i].value;
    if (
        ($.each(n, function(t, i) {
            var e = (i = $(i)).attr("name");
            "" == s[e] || null == s[e]
                ? (i.addClass("js-error"), console.log(e), (r = !1))
                : i.removeClass("js-error");
        }),
            r)
    )
        return (
            console.log("Send"),
            (cleararray = e.find('[data-clear="true"]')),
            $.each(cleararray, function(t, i) {
                $(i).val("");
            }),
            $.ajax(
                {
                    method: "post",
                    url: "/",
                    data: o,
                    beforeSend: function() {
                        $b.prop("disabled", true);
                        bStatus.processed("Отправка..");
                    },
                    success: function(data){
                        console.log(data);
                        if(typeof yaCounter48007952 !== 'undefined'){
                            yaCounter48007952.reachGoal('order');
                        }
                    },
                    error: function(t, i, e) {
                        console.log(t,i,e);
                    },
                    complete: function() {
                        $b.prop("disabled", false);
                        bStatus.stop("Отправлено!");
                    }
                }
            ),
            $(".modal").fadeOut(300),
            openModal("#thx"),
            !1
        );
}),
$("#slider-serts").slickLightbox({
    itemSelector: ".slider_slide",
    src: function(t) {
        return $(t).attr("src");
    }
});

function BtnStatus($el) {
    this.$el = $el;
    var self = this;
    this.processed = function(processText) {
        self.$el.text(processText);
        self.timeout = setTimeout(function tick() {
            self.$el.text(self.$el.text() + ".");
            self.timeout = setTimeout(tick, 500);
        }, 500);
    };
    this.stop = function(successText) {
        clearTimeout(self.timeout);
        self.$el.text(successText);
    };
}
/**
 * Тормозилка
 */
function throttle(func, ms) {
    var isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
        }
        }, ms);
    }
    return wrapper;
}
var $scrollToTop = $('#scroll-to-top');
$scrollToTop.click(function(){
    $('body,html').animate({
        scrollTop: 0
    }, 700);
    return false;
});
var scrollToTop = throttle(function(context){
    if ($(context).scrollTop() > 400) {
        $scrollToTop.addClass('active');
    } else {
        $scrollToTop.removeClass('active');
    }
},100);
$(window).scroll(function(){
    scrollToTop(this);
});
