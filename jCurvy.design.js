﻿/*********DISCLAIMER!!!!!!!!!!!*****************
*
*DO NOT USE THIS IN A PRODUCTION ENVIRONMENT!!! 
*THIS IS FOR CURVE DESIGN PURPOSES ONLY!!!!
*
***********************************************/

var JSON;
if (!JSON) {
    JSON = {};
}

JSON.stringify = JSON.stringify || function (obj) {
    var t = typeof (obj);
    if (t != "object" || obj === null) {
        // simple data type  
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);
    }
    else {
        // recurse array or object  
        var n, v, json = [], arr = (obj && obj.constructor == Array);
        for (n in obj) {
            v = obj[n]; t = typeof (v);
            if (t == "string") v = '"' + v + '"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);
            json.push((arr ? "" : '"' + n + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};


/*!
* jQuery UI 1.8.16
*
* Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI
*/
(function (c, j) {
    function k(a, b) { var d = a.nodeName.toLowerCase(); if ("area" === d) { b = a.parentNode; d = b.name; if (!a.href || !d || b.nodeName.toLowerCase() !== "map") return false; a = c("img[usemap=#" + d + "]")[0]; return !!a && l(a) } return (/input|select|textarea|button|object/.test(d) ? !a.disabled : "a" == d ? a.href || b : b) && l(a) } function l(a) { return !c(a).parents().andSelf().filter(function () { return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this) }).length } c.ui = c.ui || {}; if (!c.ui.version) {
        c.extend(c.ui, { version: "1.8.16",
            keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91 }
        }); c.fn.extend({ propAttr: c.fn.prop || c.fn.attr, _focus: c.fn.focus, focus: function (a, b) {
            return typeof a === "number" ? this.each(function () {
                var d =
this; setTimeout(function () { c(d).focus(); b && b.call(d) }, a)
            }) : this._focus.apply(this, arguments)
        }, scrollParent: function () {
            var a; a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () { return /(relative|absolute|fixed)/.test(c.curCSS(this, "position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1)) }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(c.curCSS(this,
"overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
            }).eq(0); return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
        }, zIndex: function (a) { if (a !== j) return this.css("zIndex", a); if (this.length) { a = c(this[0]); for (var b; a.length && a[0] !== document; ) { b = a.css("position"); if (b === "absolute" || b === "relative" || b === "fixed") { b = parseInt(a.css("zIndex"), 10); if (!isNaN(b) && b !== 0) return b } a = a.parent() } } return 0 }, disableSelection: function () {
            return this.bind((c.support.selectstart ? "selectstart" :
"mousedown") + ".ui-disableSelection", function (a) { a.preventDefault() })
        }, enableSelection: function () { return this.unbind(".ui-disableSelection") }
        }); c.each(["Width", "Height"], function (a, b) {
            function d(f, g, m, n) { c.each(e, function () { g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0; if (m) g -= parseFloat(c.curCSS(f, "border" + this + "Width", true)) || 0; if (n) g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0 }); return g } var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], h = b.toLowerCase(), i = { innerWidth: c.fn.innerWidth, innerHeight: c.fn.innerHeight,
                outerWidth: c.fn.outerWidth, outerHeight: c.fn.outerHeight
            }; c.fn["inner" + b] = function (f) { if (f === j) return i["inner" + b].call(this); return this.each(function () { c(this).css(h, d(this, f) + "px") }) }; c.fn["outer" + b] = function (f, g) { if (typeof f !== "number") return i["outer" + b].call(this, f); return this.each(function () { c(this).css(h, d(this, f, true, g) + "px") }) }
        }); c.extend(c.expr[":"], { data: function (a, b, d) { return !!c.data(a, d[3]) }, focusable: function (a) { return k(a, !isNaN(c.attr(a, "tabindex"))) }, tabbable: function (a) {
            var b = c.attr(a,
"tabindex"), d = isNaN(b); return (d || b >= 0) && k(a, !d)
        }
        }); c(function () { var a = document.body, b = a.appendChild(b = document.createElement("div")); c.extend(b.style, { minHeight: "100px", height: "auto", padding: 0, borderWidth: 0 }); c.support.minHeight = b.offsetHeight === 100; c.support.selectstart = "onselectstart" in b; a.removeChild(b).style.display = "none" }); c.extend(c.ui, { plugin: { add: function (a, b, d) { a = c.ui[a].prototype; for (var e in d) { a.plugins[e] = a.plugins[e] || []; a.plugins[e].push([b, d[e]]) } }, call: function (a, b, d) {
            if ((b = a.plugins[b]) &&
a.element[0].parentNode) for (var e = 0; e < b.length; e++) a.options[b[e][0]] && b[e][1].apply(a.element, d)
        }
        }, contains: function (a, b) { return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b) }, hasScroll: function (a, b) { if (c(a).css("overflow") === "hidden") return false; b = b && b === "left" ? "scrollLeft" : "scrollTop"; var d = false; if (a[b] > 0) return true; a[b] = 1; d = a[b] > 0; a[b] = 0; return d }, isOverAxis: function (a, b, d) { return a > b && a < b + d }, isOver: function (a, b, d, e, h, i) {
            return c.ui.isOverAxis(a, d, h) &&
c.ui.isOverAxis(b, e, i)
        }
        })
    }
})(jQuery);
; /*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function (b, j) {
    if (b.cleanData) { var k = b.cleanData; b.cleanData = function (a) { for (var c = 0, d; (d = a[c]) != null; c++) try { b(d).triggerHandler("remove") } catch (e) { } k(a) } } else { var l = b.fn.remove; b.fn.remove = function (a, c) { return this.each(function () { if (!c) if (!a || b.filter(a, [this]).length) b("*", this).add([this]).each(function () { try { b(this).triggerHandler("remove") } catch (d) { } }); return l.call(b(this), a, c) }) } } b.widget = function (a, c, d) {
        var e = a.split(".")[0], f; a = a.split(".")[1]; f = e + "-" + a; if (!d) { d = c; c = b.Widget } b.expr[":"][f] =
function (h) { return !!b.data(h, a) }; b[e] = b[e] || {}; b[e][a] = function (h, g) { arguments.length && this._createWidget(h, g) }; c = new c; c.options = b.extend(true, {}, c.options); b[e][a].prototype = b.extend(true, c, { namespace: e, widgetName: a, widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a, widgetBaseClass: f }, d); b.widget.bridge(a, b[e][a])
    }; b.widget.bridge = function (a, c) {
        b.fn[a] = function (d) {
            var e = typeof d === "string", f = Array.prototype.slice.call(arguments, 1), h = this; d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) :
d; if (e && d.charAt(0) === "_") return h; e ? this.each(function () { var g = b.data(this, a), i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g; if (i !== g && i !== j) { h = i; return false } }) : this.each(function () { var g = b.data(this, a); g ? g.option(d || {})._init() : b.data(this, a, new c(d, this)) }); return h
        }
    }; b.Widget = function (a, c) { arguments.length && this._createWidget(a, c) }; b.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: false }, _createWidget: function (a, c) {
        b.data(c, this.widgetName, this); this.element = b(c); this.options =
b.extend(true, {}, this.options, this._getCreateOptions(), a); var d = this; this.element.bind("remove." + this.widgetName, function () { d.destroy() }); this._create(); this._trigger("create"); this._init()
    }, _getCreateOptions: function () { return b.metadata && b.metadata.get(this.element[0])[this.widgetName] }, _create: function () { }, _init: function () { }, destroy: function () {
        this.element.unbind("." + this.widgetName).removeData(this.widgetName); this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass +
"-disabled ui-state-disabled")
    }, widget: function () { return this.element }, option: function (a, c) { var d = a; if (arguments.length === 0) return b.extend({}, this.options); if (typeof a === "string") { if (c === j) return this.options[a]; d = {}; d[a] = c } this._setOptions(d); return this }, _setOptions: function (a) { var c = this; b.each(a, function (d, e) { c._setOption(d, e) }); return this }, _setOption: function (a, c) {
        this.options[a] = c; if (a === "disabled") this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled",
c); return this
    }, enable: function () { return this._setOption("disabled", false) }, disable: function () { return this._setOption("disabled", true) }, _trigger: function (a, c, d) { var e = this.options[a]; c = b.Event(c); c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(); d = d || {}; if (c.originalEvent) { a = b.event.props.length; for (var f; a; ) { f = b.event.props[--a]; c[f] = c.originalEvent[f] } } this.element.trigger(c, d); return !(b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented()) }
    }
})(jQuery);
; /*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function (b) {
    var d = false; b(document).mouseup(function () { d = false }); b.widget("ui.mouse", { options: { cancel: ":input,option", distance: 1, delay: 0 }, _mouseInit: function () { var a = this; this.element.bind("mousedown." + this.widgetName, function (c) { return a._mouseDown(c) }).bind("click." + this.widgetName, function (c) { if (true === b.data(c.target, a.widgetName + ".preventClickEvent")) { b.removeData(c.target, a.widgetName + ".preventClickEvent"); c.stopImmediatePropagation(); return false } }); this.started = false }, _mouseDestroy: function () {
        this.element.unbind("." +
this.widgetName)
    }, _mouseDown: function (a) {
        if (!d) {
            this._mouseStarted && this._mouseUp(a); this._mouseDownEvent = a; var c = this, f = a.which == 1, g = typeof this.options.cancel == "string" && a.target.nodeName ? b(a.target).closest(this.options.cancel).length : false; if (!f || g || !this._mouseCapture(a)) return true; this.mouseDelayMet = !this.options.delay; if (!this.mouseDelayMet) this._mouseDelayTimer = setTimeout(function () { c.mouseDelayMet = true }, this.options.delay); if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) {
                this._mouseStarted =
this._mouseStart(a) !== false; if (!this._mouseStarted) { a.preventDefault(); return true }
            } true === b.data(a.target, this.widgetName + ".preventClickEvent") && b.removeData(a.target, this.widgetName + ".preventClickEvent"); this._mouseMoveDelegate = function (e) { return c._mouseMove(e) }; this._mouseUpDelegate = function (e) { return c._mouseUp(e) }; b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate); a.preventDefault(); return d = true
        }
    }, _mouseMove: function (a) {
        if (b.browser.msie &&
!(document.documentMode >= 9) && !a.button) return this._mouseUp(a); if (this._mouseStarted) { this._mouseDrag(a); return a.preventDefault() } if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) (this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== false) ? this._mouseDrag(a) : this._mouseUp(a); return !this._mouseStarted
    }, _mouseUp: function (a) {
        b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate); if (this._mouseStarted) {
            this._mouseStarted =
false; a.target == this._mouseDownEvent.target && b.data(a.target, this.widgetName + ".preventClickEvent", true); this._mouseStop(a)
        } return false
    }, _mouseDistanceMet: function (a) { return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return true }
    })
})(jQuery);
; /*
 * jQuery UI Draggable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (d) {
    d.widget("ui.draggable", d.ui.mouse, { widgetEventPrefix: "drag", options: { addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false }, _create: function () {
        if (this.options.helper ==
"original" && !/^(?:r|a|f)/.test(this.element.css("position"))) this.element[0].style.position = "relative"; this.options.addClasses && this.element.addClass("ui-draggable"); this.options.disabled && this.element.addClass("ui-draggable-disabled"); this._mouseInit()
    }, destroy: function () { if (this.element.data("draggable")) { this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"); this._mouseDestroy(); return this } }, _mouseCapture: function (a) {
        var b =
this.options; if (this.helper || b.disabled || d(a.target).is(".ui-resizable-handle")) return false; this.handle = this._getHandle(a); if (!this.handle) return false; if (b.iframeFix) d(b.iframeFix === true ? "iframe" : b.iframeFix).each(function () { d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1E3 }).css(d(this).offset()).appendTo("body") }); return true
    }, _mouseStart: function (a) {
        var b = this.options;
        this.helper = this._createHelper(a); this._cacheHelperProportions(); if (d.ui.ddmanager) d.ui.ddmanager.current = this; this._cacheMargins(); this.cssPosition = this.helper.css("position"); this.scrollParent = this.helper.scrollParent(); this.offset = this.positionAbs = this.element.offset(); this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }; d.extend(this.offset, { click: { left: a.pageX - this.offset.left, top: a.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() });
        this.originalPosition = this.position = this._generatePosition(a); this.originalPageX = a.pageX; this.originalPageY = a.pageY; b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt); b.containment && this._setContainment(); if (this._trigger("start", a) === false) { this._clear(); return false } this._cacheHelperProportions(); d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a); this.helper.addClass("ui-draggable-dragging"); this._mouseDrag(a, true); d.ui.ddmanager && d.ui.ddmanager.dragStart(this, a); return true
    },
        _mouseDrag: function (a, b) { this.position = this._generatePosition(a); this.positionAbs = this._convertPositionTo("absolute"); if (!b) { b = this._uiHash(); if (this._trigger("drag", a, b) === false) { this._mouseUp({}); return false } this.position = b.position } if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px"; if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px"; d.ui.ddmanager && d.ui.ddmanager.drag(this, a); return false }, _mouseStop: function (a) {
            var b =
false; if (d.ui.ddmanager && !this.options.dropBehaviour) b = d.ui.ddmanager.drop(this, a); if (this.dropped) { b = this.dropped; this.dropped = false } if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") return false; if (this.options.revert == "invalid" && !b || this.options.revert == "valid" && b || this.options.revert === true || d.isFunction(this.options.revert) && this.options.revert.call(this.element, b)) {
                var c = this; d(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration,
10), function () { c._trigger("stop", a) !== false && c._clear() })
            } else this._trigger("stop", a) !== false && this._clear(); return false
        }, _mouseUp: function (a) { this.options.iframeFix === true && d("div.ui-draggable-iframeFix").each(function () { this.parentNode.removeChild(this) }); d.ui.ddmanager && d.ui.ddmanager.dragStop(this, a); return d.ui.mouse.prototype._mouseUp.call(this, a) }, cancel: function () { this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(); return this }, _getHandle: function (a) {
            var b = !this.options.handle ||
!d(this.options.handle, this.element).length ? true : false; d(this.options.handle, this.element).find("*").andSelf().each(function () { if (this == a.target) b = true }); return b
        }, _createHelper: function (a) {
            var b = this.options; a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a])) : b.helper == "clone" ? this.element.clone().removeAttr("id") : this.element; a.parents("body").length || a.appendTo(b.appendTo == "parent" ? this.element[0].parentNode : b.appendTo); a[0] != this.element[0] && !/(fixed|absolute)/.test(a.css("position")) &&
a.css("position", "absolute"); return a
        }, _adjustOffsetFromHelper: function (a) { if (typeof a == "string") a = a.split(" "); if (d.isArray(a)) a = { left: +a[0], top: +a[1] || 0 }; if ("left" in a) this.offset.click.left = a.left + this.margins.left; if ("right" in a) this.offset.click.left = this.helperProportions.width - a.right + this.margins.left; if ("top" in a) this.offset.click.top = a.top + this.margins.top; if ("bottom" in a) this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top }, _getParentOffset: function () {
            this.offsetParent =
this.helper.offsetParent(); var a = this.offsetParent.offset(); if (this.cssPosition == "absolute" && this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) { a.left += this.scrollParent.scrollLeft(); a.top += this.scrollParent.scrollTop() } if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && d.browser.msie) a = { top: 0, left: 0 }; return { top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"),
10) || 0)
}
        }, _getRelativeOffset: function () { if (this.cssPosition == "relative") { var a = this.element.position(); return { top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()} } else return { top: 0, left: 0} }, _cacheMargins: function () {
            this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"),
10) || 0
            }
        }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight()} }, _setContainment: function () {
            var a = this.options; if (a.containment == "parent") a.containment = this.helper[0].parentNode; if (a.containment == "document" || a.containment == "window") this.containment = [a.containment == "document" ? 0 : d(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a.containment == "document" ? 0 : d(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
(a.containment == "document" ? 0 : d(window).scrollLeft()) + d(a.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a.containment == "document" ? 0 : d(window).scrollTop()) + (d(a.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; if (!/^(document|window|parent)$/.test(a.containment) && a.containment.constructor != Array) {
                a = d(a.containment); var b = a[0]; if (b) {
                    a.offset(); var c = d(b).css("overflow") !=
"hidden"; this.containment = [(parseInt(d(b).css("borderLeftWidth"), 10) || 0) + (parseInt(d(b).css("paddingLeft"), 10) || 0), (parseInt(d(b).css("borderTopWidth"), 10) || 0) + (parseInt(d(b).css("paddingTop"), 10) || 0), (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(d(b).css("borderLeftWidth"), 10) || 0) - (parseInt(d(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(d(b).css("borderTopWidth"),
10) || 0) - (parseInt(d(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom]; this.relative_container = a
                }
            } else if (a.containment.constructor == Array) this.containment = a.containment
        }, _convertPositionTo: function (a, b) {
            if (!b) b = this.position; a = a == "absolute" ? 1 : -1; var c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, f = /(html|body)/i.test(c[0].tagName); return { top: b.top +
this.offset.relative.top * a + this.offset.parent.top * a - (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : c.scrollTop()) * a), left: b.left + this.offset.relative.left * a + this.offset.parent.left * a - (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : c.scrollLeft()) * a)
            }
        }, _generatePosition: function (a) {
            var b = this.options, c = this.cssPosition == "absolute" &&
!(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, f = /(html|body)/i.test(c[0].tagName), e = a.pageX, h = a.pageY; if (this.originalPosition) {
                var g; if (this.containment) {
                    if (this.relative_container) { g = this.relative_container.offset(); g = [this.containment[0] + g.left, this.containment[1] + g.top, this.containment[2] + g.left, this.containment[3] + g.top] } else g = this.containment; if (a.pageX - this.offset.click.left < g[0]) e = g[0] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top < g[1]) h = g[1] + this.offset.click.top; if (a.pageX - this.offset.click.left > g[2]) e = g[2] + this.offset.click.left; if (a.pageY - this.offset.click.top > g[3]) h = g[3] + this.offset.click.top
                } if (b.grid) {
                    h = b.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / b.grid[1]) * b.grid[1] : this.originalPageY; h = g ? !(h - this.offset.click.top < g[1] || h - this.offset.click.top > g[3]) ? h : !(h - this.offset.click.top < g[1]) ? h - b.grid[1] : h + b.grid[1] : h; e = b.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) /
b.grid[0]) * b.grid[0] : this.originalPageX; e = g ? !(e - this.offset.click.left < g[0] || e - this.offset.click.left > g[2]) ? e : !(e - this.offset.click.left < g[0]) ? e - b.grid[0] : e + b.grid[0] : e
                }
            } return { top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : c.scrollTop()), left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (d.browser.safari && d.browser.version <
526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : c.scrollLeft())
            }
        }, _clear: function () { this.helper.removeClass("ui-draggable-dragging"); this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(); this.helper = null; this.cancelHelperRemoval = false }, _trigger: function (a, b, c) {
            c = c || this._uiHash(); d.ui.plugin.call(this, a, [b, c]); if (a == "drag") this.positionAbs = this._convertPositionTo("absolute"); return d.Widget.prototype._trigger.call(this, a, b,
c)
        }, plugins: {}, _uiHash: function () { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs} }
    }); d.extend(d.ui.draggable, { version: "1.8.16" }); d.ui.plugin.add("draggable", "connectToSortable", { start: function (a, b) {
        var c = d(this).data("draggable"), f = c.options, e = d.extend({}, b, { item: c.element }); c.sortables = []; d(f.connectToSortable).each(function () {
            var h = d.data(this, "sortable"); if (h && !h.options.disabled) {
                c.sortables.push({ instance: h, shouldRevert: h.options.revert });
                h.refreshPositions(); h._trigger("activate", a, e)
            }
        })
    }, stop: function (a, b) {
        var c = d(this).data("draggable"), f = d.extend({}, b, { item: c.element }); d.each(c.sortables, function () {
            if (this.instance.isOver) { this.instance.isOver = 0; c.cancelHelperRemoval = true; this.instance.cancelHelperRemoval = false; if (this.shouldRevert) this.instance.options.revert = true; this.instance._mouseStop(a); this.instance.options.helper = this.instance.options._helper; c.options.helper == "original" && this.instance.currentItem.css({ top: "auto", left: "auto" }) } else {
                this.instance.cancelHelperRemoval =
false; this.instance._trigger("deactivate", a, f)
            }
        })
    }, drag: function (a, b) {
        var c = d(this).data("draggable"), f = this; d.each(c.sortables, function () {
            this.instance.positionAbs = c.positionAbs; this.instance.helperProportions = c.helperProportions; this.instance.offset.click = c.offset.click; if (this.instance._intersectsWith(this.instance.containerCache)) {
                if (!this.instance.isOver) {
                    this.instance.isOver = 1; this.instance.currentItem = d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
                    this.instance.options._helper = this.instance.options.helper; this.instance.options.helper = function () { return b.helper[0] }; a.target = this.instance.currentItem[0]; this.instance._mouseCapture(a, true); this.instance._mouseStart(a, true, true); this.instance.offset.click.top = c.offset.click.top; this.instance.offset.click.left = c.offset.click.left; this.instance.offset.parent.left -= c.offset.parent.left - this.instance.offset.parent.left; this.instance.offset.parent.top -= c.offset.parent.top - this.instance.offset.parent.top;
                    c._trigger("toSortable", a); c.dropped = this.instance.element; c.currentItem = c.element; this.instance.fromOutside = c
                } this.instance.currentItem && this.instance._mouseDrag(a)
            } else if (this.instance.isOver) {
                this.instance.isOver = 0; this.instance.cancelHelperRemoval = true; this.instance.options.revert = false; this.instance._trigger("out", a, this.instance._uiHash(this.instance)); this.instance._mouseStop(a, true); this.instance.options.helper = this.instance.options._helper; this.instance.currentItem.remove(); this.instance.placeholder &&
this.instance.placeholder.remove(); c._trigger("fromSortable", a); c.dropped = false
            }
        })
    }
    }); d.ui.plugin.add("draggable", "cursor", { start: function () { var a = d("body"), b = d(this).data("draggable").options; if (a.css("cursor")) b._cursor = a.css("cursor"); a.css("cursor", b.cursor) }, stop: function () { var a = d(this).data("draggable").options; a._cursor && d("body").css("cursor", a._cursor) } }); d.ui.plugin.add("draggable", "opacity", { start: function (a, b) {
        a = d(b.helper); b = d(this).data("draggable").options; if (a.css("opacity")) b._opacity =
a.css("opacity"); a.css("opacity", b.opacity)
    }, stop: function (a, b) { a = d(this).data("draggable").options; a._opacity && d(b.helper).css("opacity", a._opacity) }
    }); d.ui.plugin.add("draggable", "scroll", { start: function () { var a = d(this).data("draggable"); if (a.scrollParent[0] != document && a.scrollParent[0].tagName != "HTML") a.overflowOffset = a.scrollParent.offset() }, drag: function (a) {
        var b = d(this).data("draggable"), c = b.options, f = false; if (b.scrollParent[0] != document && b.scrollParent[0].tagName != "HTML") {
            if (!c.axis || c.axis !=
"x") if (b.overflowOffset.top + b.scrollParent[0].offsetHeight - a.pageY < c.scrollSensitivity) b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop + c.scrollSpeed; else if (a.pageY - b.overflowOffset.top < c.scrollSensitivity) b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop - c.scrollSpeed; if (!c.axis || c.axis != "y") if (b.overflowOffset.left + b.scrollParent[0].offsetWidth - a.pageX < c.scrollSensitivity) b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft + c.scrollSpeed; else if (a.pageX - b.overflowOffset.left <
c.scrollSensitivity) b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft - c.scrollSpeed
        } else {
            if (!c.axis || c.axis != "x") if (a.pageY - d(document).scrollTop() < c.scrollSensitivity) f = d(document).scrollTop(d(document).scrollTop() - c.scrollSpeed); else if (d(window).height() - (a.pageY - d(document).scrollTop()) < c.scrollSensitivity) f = d(document).scrollTop(d(document).scrollTop() + c.scrollSpeed); if (!c.axis || c.axis != "y") if (a.pageX - d(document).scrollLeft() < c.scrollSensitivity) f = d(document).scrollLeft(d(document).scrollLeft() -
c.scrollSpeed); else if (d(window).width() - (a.pageX - d(document).scrollLeft()) < c.scrollSensitivity) f = d(document).scrollLeft(d(document).scrollLeft() + c.scrollSpeed)
        } f !== false && d.ui.ddmanager && !c.dropBehaviour && d.ui.ddmanager.prepareOffsets(b, a)
    }
    }); d.ui.plugin.add("draggable", "snap", { start: function () {
        var a = d(this).data("draggable"), b = a.options; a.snapElements = []; d(b.snap.constructor != String ? b.snap.items || ":data(draggable)" : b.snap).each(function () {
            var c = d(this), f = c.offset(); this != a.element[0] && a.snapElements.push({ item: this,
                width: c.outerWidth(), height: c.outerHeight(), top: f.top, left: f.left
            })
        })
    }, drag: function (a, b) {
        for (var c = d(this).data("draggable"), f = c.options, e = f.snapTolerance, h = b.offset.left, g = h + c.helperProportions.width, n = b.offset.top, o = n + c.helperProportions.height, i = c.snapElements.length - 1; i >= 0; i--) {
            var j = c.snapElements[i].left, l = j + c.snapElements[i].width, k = c.snapElements[i].top, m = k + c.snapElements[i].height; if (j - e < h && h < l + e && k - e < n && n < m + e || j - e < h && h < l + e && k - e < o && o < m + e || j - e < g && g < l + e && k - e < n && n < m + e || j - e < g && g < l + e && k - e < o &&
o < m + e) {
                if (f.snapMode != "inner") { var p = Math.abs(k - o) <= e, q = Math.abs(m - n) <= e, r = Math.abs(j - g) <= e, s = Math.abs(l - h) <= e; if (p) b.position.top = c._convertPositionTo("relative", { top: k - c.helperProportions.height, left: 0 }).top - c.margins.top; if (q) b.position.top = c._convertPositionTo("relative", { top: m, left: 0 }).top - c.margins.top; if (r) b.position.left = c._convertPositionTo("relative", { top: 0, left: j - c.helperProportions.width }).left - c.margins.left; if (s) b.position.left = c._convertPositionTo("relative", { top: 0, left: l }).left - c.margins.left } var t =
p || q || r || s; if (f.snapMode != "outer") { p = Math.abs(k - n) <= e; q = Math.abs(m - o) <= e; r = Math.abs(j - h) <= e; s = Math.abs(l - g) <= e; if (p) b.position.top = c._convertPositionTo("relative", { top: k, left: 0 }).top - c.margins.top; if (q) b.position.top = c._convertPositionTo("relative", { top: m - c.helperProportions.height, left: 0 }).top - c.margins.top; if (r) b.position.left = c._convertPositionTo("relative", { top: 0, left: j }).left - c.margins.left; if (s) b.position.left = c._convertPositionTo("relative", { top: 0, left: l - c.helperProportions.width }).left - c.margins.left } if (!c.snapElements[i].snapping &&
(p || q || r || s || t)) c.options.snap.snap && c.options.snap.snap.call(c.element, a, d.extend(c._uiHash(), { snapItem: c.snapElements[i].item })); c.snapElements[i].snapping = p || q || r || s || t
            } else { c.snapElements[i].snapping && c.options.snap.release && c.options.snap.release.call(c.element, a, d.extend(c._uiHash(), { snapItem: c.snapElements[i].item })); c.snapElements[i].snapping = false }
        }
    }
    }); d.ui.plugin.add("draggable", "stack", { start: function () {
        var a = d(this).data("draggable").options; a = d.makeArray(d(a.stack)).sort(function (c, f) {
            return (parseInt(d(c).css("zIndex"),
10) || 0) - (parseInt(d(f).css("zIndex"), 10) || 0)
        }); if (a.length) { var b = parseInt(a[0].style.zIndex) || 0; d(a).each(function (c) { this.style.zIndex = b + c }); this[0].style.zIndex = b + a.length }
    }
    }); d.ui.plugin.add("draggable", "zIndex", { start: function (a, b) { a = d(b.helper); b = d(this).data("draggable").options; if (a.css("zIndex")) b._zIndex = a.css("zIndex"); a.css("zIndex", b.zIndex) }, stop: function (a, b) { a = d(this).data("draggable").options; a._zIndex && d(b.helper).css("zIndex", a._zIndex) } })
})(jQuery);
;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}



(function ($) {
    $.fn.curve = function (options) {
        var settings = {
            x0: 0,
            y0: 0,
            x1: 231,
            y1: -231,
            x2: 693,
            y2: -231,
            x3: 900,
            y3: 0
        };


        if (options) {
            $.extend(settings, options);
        }

        var BezCoords = function (x0, y0, x1, y1, x2, y2, x3, y3, t) {
            var x01 = x0 + t * (x1 - x0);
            var y01 = y0 + t * (y1 - y0);
            var x12 = x1 + t * (x2 - x1);
            var y12 = y1 + t * (y2 - y1);
            var x23 = x2 + t * (x3 - x2);
            var y23 = y2 + t * (y3 - y2);

            var x012 = x01 + t * (x12 - x01);
            var y012 = y01 + t * (y12 - y01);
            var x123 = x12 + t * (x23 - x12);
            var y123 = y12 + t * (y23 - y12);

            return { x: x012 + t * (x123 - x012),
                y: y012 + t * (y123 - y012)
            };
        }

        var max = this.length - 1;
        this.each(function (index) {
            var pos = BezCoords(settings.x0, settings.y0, settings.x1, settings.y1, settings.x2, settings.y2, settings.x3, settings.y3, index / max);
            $(this).css('position', 'absolute').css('top', pos.y + 'px').css('left', pos.x + 'px');
        });

        if(getParameterByName("design") == "1")
        {
            var x0 = settings.x0;
            var y0 = settings.y0;
            var x1 = settings.x1;
            var y1 = settings.y1;
            var x2 = settings.x2;
            var y2 = settings.y2;
            var x3 = settings.x3;
            var y3 = settings.y3;

            if($("#sampleCode").length == 0)
            {
                $("body").append("<div id='sampleCode' style='border: 1px solid red;background-color:white; position:absolute;top:5px;left:5px;padding:5px;'></div>");
            }
        
            if($("#x1y1").length == 0)
            {
                this.parent().append("<div class='draggable' id='x1y1' style='width:15px;font-size:3em;color:red;left:" + x1 + "px;top:" + y1 + "px'>1</div>");
            }
            if($("#x2y2").length == 0)
            {
                this.parent().append("<div class='draggable' id='x2y2' style='width:15px;font-size:3em;color:red;left:" + x2 + "px;top:" + y2 + "px'>2</div>");
            }

            $(this).first().addClass("draggable").attr('id','start');
            $(this).last().addClass("draggable").attr('id','finish');
            var items = $(this);
            $(".draggable").draggable({
                    start: function () {

                    },
                    drag: function () {
                        $('.dot').remove();
                        var curId = $(this).attr('id');
                        var pos = $(this).position();
                        var param;
                        switch (curId) {
                            case 'x1y1':
                                x1 = pos.left;
                                y1 = pos.top;
                                break;

                            case 'x2y2':
                                x2 = pos.left;
                                y2 = pos.top;
                                break;

                            case 'start':
                                x0 = pos.left;
                                y0 = pos.top;
                                break;

                            case 'finish':
                                x3 = pos.left;
                                y3 = pos.top;
                                break;
                        }
                        param = {
                            "x0": x0,
                            "y0": y0,
                            "x1": x1,
                            "y1": y1,
                            "x2": x2,
                            "y2": y2,
                            "x3": x3,
                            "y3": y3
                        };

                        $(items).curve(param);
                        $('#sampleCode').text('$(".mySelector").curve(' + JSON.stringify(param) + ')');
                        //$('#demoLink').attr('href', 'demo.html?p=' + JSON.stringify(param));
                    },
                    stop: function () {
                    }
                });
            }
    };
})(jQuery);
