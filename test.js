! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(w, e) {
    "use strict";

    function g(e) {
        return null != e && e === e.window
    }
    var t = [],
        S = w.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        v = t.concat,
        l = t.push,
        o = t.indexOf,
        n = {},
        i = n.toString,
        m = n.hasOwnProperty,
        a = m.toString,
        u = a.call(Object),
        y = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        c = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function x(e, t, n) {
        var r, o = (t = t || S).createElement("script");
        if (o.text = e, n)
            for (r in c) n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function k(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }
    var f = "3.3.1",
        T = function(e, t) {
            return new T.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function h(e) {
        var t = !!e && "length" in e && e.length,
            n = k(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    T.fn = T.prototype = {
        jquery: f,
        constructor: T,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = T.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return T.each(this, e)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, T.extend = T.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (u && r && (T.isPlainObject(r) || (o = Array.isArray(r))) ? (i = o ? (o = !1, n && Array.isArray(n) ? n : []) : n && T.isPlainObject(n) ? n : {}, a[t] = T.extend(u, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }, T.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = m.call(t, "constructor") && t.constructor) && a.call(n) === u)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            x(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (h(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) != a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, i = 0,
                a = [];
            if (h(e))
                for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
            else
                for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
            return v.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function f(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }

        function o() {
            C()
        }
        var e, h, x, i, a, p, d, g, k, l, u, C, w, s, S, v, c, m, y, T = "sizzle" + 1 * new Date,
            b = n.document,
            $ = 0,
            r = 0,
            A = ae(),
            E = ae(),
            H = ae(),
            j = function(e, t) {
                return e === t && (u = !0), 0
            },
            _ = {}.hasOwnProperty,
            t = [],
            D = t.pop,
            N = t.push,
            O = t.push,
            L = t.slice,
            q = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            B = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            W = new RegExp(M + "+", "g"),
            F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            V = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            X = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            U = new RegExp(I),
            G = new RegExp("^" + R + "$"),
            Y = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(t = L.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: t.length ? function(e, t) {
                    N.apply(e, L.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, n, r) {
            var o, i, a, s, l, u, c, f = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && ((t ? t.ownerDocument || t : b) !== w && C(t), t = t || w, S)) {
                if (11 !== d && (l = Z.exec(e)))
                    if (o = l[1]) {
                        if (9 === d) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (f && (a = f.getElementById(o)) && y(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(o)), n
                    }
                if (h.qsa && !H[e + " "] && (!v || !v.test(e))) {
                    if (1 !== d) f = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ne, re) : t.setAttribute("id", s = T), i = (u = p(e)).length; i--;) u[i] = "#" + s + " " + me(u[i]);
                        c = u.join(","), f = ee.test(e) && ge(t.parentNode) || t
                    }
                    if (c) try {
                        return O.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        s === T && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(F, "$1"), t, n, r)
        }

        function ae() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function se(e) {
            return e[T] = !0, e
        }

        function le(e) {
            var t = w.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function de(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function he(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function pe(a) {
            return se(function(i) {
                return i = +i, se(function(e, t) {
                    for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = ie.support = {}, a = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, C = ie.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : b;
                return r !== w && 9 === r.nodeType && r.documentElement && (s = (w = r).documentElement, S = !a(w), b !== w && (n = w.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)), h.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = le(function(e) {
                    return e.appendChild(w.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = K.test(w.getElementsByClassName), h.getById = le(function(e) {
                    return s.appendChild(e).id = T, !w.getElementsByName || !w.getElementsByName(T).length
                }), h.getById ? (x.filter.ID = function(e) {
                    var t = e.replace(te, f);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function(e) {
                    var n = e.replace(te, f);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var n, r, o, i = t.getElementById(e);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                            for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                        }
                        return []
                    }
                }), x.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                    if ("*" !== e) return i;
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }, x.find.CLASS = h.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
                }, c = [], v = [], (h.qsa = K.test(w.querySelectorAll)) && (le(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + T + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || v.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = w.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (h.matchesSelector = K.test(m = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                    h.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), c.push("!=", I)
                }), v = v.length && new RegExp(v.join("|")), c = c.length && new RegExp(c.join("|")), t = K.test(s.compareDocumentPosition), y = t || K.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === w || e.ownerDocument === b && y(b, e) ? -1 : t === w || t.ownerDocument === b && y(b, t) ? 1 : l ? q(l, e) - q(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        i = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!o || !i) return e === w ? -1 : t === w ? 1 : o ? -1 : i ? 1 : l ? q(l, e) - q(l, t) : 0;
                    if (o === i) return ce(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? ce(a[r], s[r]) : a[r] === b ? -1 : s[r] === b ? 1 : 0
                }), w
            }, ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== w && C(e), t = t.replace(X, "='$1']"), h.matchesSelector && S && !H[t + " "] && (!c || !c.test(t)) && (!v || !v.test(t))) try {
                    var n = m.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < ie(t, w, null, [e]).length
            }, ie.contains = function(e, t) {
                return (e.ownerDocument || e) !== w && C(e), y(e, t)
            }, ie.attr = function(e, t) {
                (e.ownerDocument || e) !== w && C(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && _.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                return void 0 !== r ? r : h.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ie.escape = function(e) {
                return (e + "").replace(ne, re)
            }, ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    o = 0;
                if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(j), u) {
                    for (; t = e[o++];) t === e[o] && (r = n.push(o));
                    for (; r--;) e.splice(n[r], 1)
                }
                return l = null, e
            }, i = ie.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (x = ie.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, f), e[3] = (e[3] || e[4] || e[5] || "").replace(te, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, f).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = A[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && A(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, o) {
                        return function(e) {
                            var t = ie.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t.replace(W, " ") + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(p, e, t, g, v) {
                        var m = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, o, i, a, s, l, u = m != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                h = !1;
                            if (c) {
                                if (m) {
                                    for (; u;) {
                                        for (a = e; a = a[u];)
                                            if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && d) {
                                    for (h = (s = (r = (o = (i = (a = c)[T] || (a[T] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[p] || [])[0] === $ && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (h = s = 0) || l.pop();)
                                        if (1 === a.nodeType && ++h && a === e) {
                                            o[p] = [$, s, h];
                                            break
                                        }
                                } else if (d && (h = s = (r = (o = (i = (a = e)[T] || (a[T] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[p] || [])[0] === $ && r[1]), !1 === h)
                                    for (;
                                        (a = ++s && a && a[u] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++h || (d && ((o = (i = a[T] || (a[T] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[p] = [$, h]), a !== e)););
                                return (h -= v) === g || h % g == 0 && 0 <= h / g
                            }
                        }
                    },
                    PSEUDO: function(e, i) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return a[T] ? a(i) : 1 < a.length ? (t = [e, e, "", i], x.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                            for (var n, r = a(e, i), o = r.length; o--;) e[n = q(e, r[o])] = !(t[n] = r[o])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var r = [],
                            o = [],
                            s = d(e.replace(F, "$1"));
                        return s[T] ? se(function(e, t, n, r) {
                            for (var o, i = s(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, o), r[0] = null, !o.pop()
                        }
                    }),
                    has: se(function(t) {
                        return function(e) {
                            return 0 < ie(t, e).length
                        }
                    }),
                    contains: se(function(t) {
                        return t = t.replace(te, f),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || i(e)).indexOf(t)
                            }
                    }),
                    lang: se(function(n) {
                        return G.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(te, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return J.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = fe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = de(e);

        function ve() {}

        function me(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ye(s, e, t) {
            var l = e.dir,
                u = e.next,
                c = u || l,
                f = t && "parentNode" === c,
                d = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, o, i, a = [$, d];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || f)
                            if (o = (i = e[T] || (e[T] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((r = o[c]) && r[0] === $ && r[1] === d) return a[2] = r[2];
                                if ((o[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function be(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var r = o.length; r--;)
                    if (!o[r](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function xe(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), u && t.push(s)));
            return a
        }

        function ke(h, p, g, v, m, e) {
            return v && !v[T] && (v = ke(v)), m && !m[T] && (m = ke(m, e)), se(function(e, t, n, r) {
                var o, i, a, s = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++) ie(e, t[r], n);
                        return n
                    }(p || "*", n.nodeType ? [n] : n, []),
                    f = !h || !e && p ? c : xe(c, s, h, n, r),
                    d = g ? m || (e ? h : u || v) ? [] : t : f;
                if (g && g(f, d, n, r), v)
                    for (o = xe(d, l), v(o, [], n, r), i = o.length; i--;)(a = o[i]) && (d[l[i]] = !(f[l[i]] = a));
                if (e) {
                    if (m || h) {
                        if (m) {
                            for (o = [], i = d.length; i--;)(a = d[i]) && o.push(f[i] = a);
                            m(null, d = [], o, r)
                        }
                        for (i = d.length; i--;)(a = d[i]) && -1 < (o = m ? q(e, a) : s[i]) && (e[o] = !(t[o] = a))
                    }
                } else d = xe(d === t ? d.splice(u, d.length) : d), m ? m(null, t, d, r) : O.apply(t, d)
            })
        }

        function Ce(e) {
            for (var o, t, n, r = e.length, i = x.relative[e[0].type], a = i || x.relative[" "], s = i ? 1 : 0, l = ye(function(e) {
                    return e === o
                }, a, !0), u = ye(function(e) {
                    return -1 < q(o, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !i && (n || t !== k) || ((o = t).nodeType ? l(e, t, n) : u(e, t, n));
                    return o = null, r
                }]; s < r; s++)
                if (t = x.relative[e[s].type]) c = [ye(be(c), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[T]) {
                        for (n = ++s; n < r && !x.relative[e[n].type]; n++);
                        return ke(1 < s && be(c), 1 < s && me(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(F, "$1"), t, s < n && Ce(e.slice(s, n)), n < r && Ce(e = e.slice(n)), n < r && me(e))
                    }
                    c.push(t)
                }
            return be(c)
        }
        return ve.prototype = x.filters = x.pseudos, x.setFilters = new ve, p = ie.tokenize = function(e, t) {
            var n, r, o, i, a, s, l, u = E[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, s = [], l = x.preFilter; a;) {
                for (i in n && !(r = V.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(o = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(F, " ")
                    }), a = a.slice(n.length)), x.filter) !(r = Y[i].exec(a)) || l[i] && !(r = l[i](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: i,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : E(e, s).slice(0)
        }, d = ie.compile = function(e, t) {
            var n, r = [],
                o = [],
                i = H[e + " "];
            if (!i) {
                for (n = (t = t || p(e)).length; n--;)(i = Ce(t[n]))[T] ? r.push(i) : o.push(i);
                (i = H(e, function(v, m) {
                    function e(e, t, n, r, o) {
                        var i, a, s, l = 0,
                            u = "0",
                            c = e && [],
                            f = [],
                            d = k,
                            h = e || b && x.find.TAG("*", o),
                            p = $ += null == d ? 1 : Math.random() || .1,
                            g = h.length;
                        for (o && (k = t === w || t || o); u !== g && null != (i = h[u]); u++) {
                            if (b && i) {
                                for (a = 0, t || i.ownerDocument === w || (C(i), n = !S); s = v[a++];)
                                    if (s(i, t || w, n)) {
                                        r.push(i);
                                        break
                                    }
                                o && ($ = p)
                            }
                            y && ((i = !s && i) && l--, e && c.push(i))
                        }
                        if (l += u, y && u !== l) {
                            for (a = 0; s = m[a++];) s(c, f, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; u--;) c[u] || f[u] || (f[u] = D.call(r));
                                f = xe(f)
                            }
                            O.apply(r, f), o && !e && 0 < f.length && 1 < l + m.length && ie.uniqueSort(r)
                        }
                        return o && ($ = p, k = d), c
                    }
                    var y = 0 < m.length,
                        b = 0 < v.length;
                    return y ? se(e) : e
                }(o, r))).selector = e
            }
            return i
        }, g = ie.select = function(e, t, n, r) {
            var o, i, a, s, l, u = "function" == typeof e && e,
                c = !r && p(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && S && x.relative[i[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(te, f), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !x.relative[s = a.type]);)
                    if ((l = x.find[s]) && (r = l(a.matches[0].replace(te, f), ee.test(i[0].type) && ge(t.parentNode) || t))) {
                        if (i.splice(o, 1), !(e = r.length && me(i))) return O.apply(n, r), n;
                        break
                    }
            }
            return (u || d(e, c))(r, t, !S, n, !t || ee.test(e) && ge(t.parentNode) || t), n
        }, h.sortStable = T.split("").sort(j).join("") === T, h.detectDuplicates = !!u, C(), h.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(w.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ie
    }(w);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;

    function C(e, t, n) {
        for (var r = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && T(e).is(n)) break;
                r.push(e)
            }
        return r
    }

    function $(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var A = T.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var H = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return b(n) ? T.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? T.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? T.grep(e, function(e) {
            return -1 < o.call(n, e) !== r
        }) : T.filter(n, e, r)
    }
    T.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, T.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (T.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, o[t], n);
            return 1 < r ? T.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && A.test(e) ? T(e) : e || [], !1).length
        }
    });
    var _, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || _, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), H.test(r[1]) && T.isPlainObject(t))
                for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (o = S.getElementById(r[2])) && (this[0] = o, this.length = 1), this
    }).prototype = T.fn, _ = T(S);
    var N = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    T.fn.extend({
        has: function(e) {
            var t = T(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && T(e);
            if (!A.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(1 < i.length ? T.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(T(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), T.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return C(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return C(e, "nextSibling")
        },
        prevAll: function(e) {
            return C(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C(e, "previousSibling", n)
        },
        siblings: function(e) {
            return $((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return $(e.firstChild)
        },
        contents: function(e) {
            return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
        }
    }, function(r, o) {
        T.fn[r] = function(e, t) {
            var n = T.map(this, o, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (O[r] || T.uniqueSort(n), N.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var q = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function R(e, t, n, r) {
        var o;
        try {
            e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    T.Callbacks = function(r) {
        r = "string" == typeof r ? function(e) {
            var n = {};
            return T.each(e.match(q) || [], function(e, t) {
                n[t] = !0
            }), n
        }(r) : T.extend({}, r);

        function n() {
            for (i = i || r.once, t = o = !0; s.length; l = -1)
                for (e = s.shift(); ++l < a.length;) !1 === a[l].apply(e[0], e[1]) && r.stopOnFalse && (l = a.length, e = !1);
            r.memory || (e = !1), o = !1, i && (a = e ? [] : "")
        }
        var o, e, t, i, a = [],
            s = [],
            l = -1,
            u = {
                add: function() {
                    return a && (e && !o && (l = a.length - 1, s.push(e)), function n(e) {
                        T.each(e, function(e, t) {
                            b(t) ? r.unique && u.has(t) || a.push(t) : t && t.length && "string" !== k(t) && n(t)
                        })
                    }(arguments), e && !o && n()), this
                },
                remove: function() {
                    return T.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = T.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < T.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a = a && [], this
                },
                disable: function() {
                    return i = s = [], a = e = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return i = s = [], e || o || (a = e = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, t) {
                    return i || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), o || n()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!t
                }
            };
        return u
    }, T.extend({
        Deferred: function(e) {
            var i = [
                    ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                    ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                a = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return T.Deferred(function(r) {
                            T.each(i, function(e, t) {
                                var n = b(o[t[4]]) && o[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var l = 0;

                        function u(o, i, a, s) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(o < l)) {
                                        if ((e = a.apply(n, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, u(l, i, P, s), u(l, i, M, s)) : (l++, t.call(e, u(l, i, P, s), u(l, i, M, s), u(l, i, P, i.notifyWith))) : (a !== P && (n = void 0, r = [e]), (s || i.resolveWith)(n, r))
                                    }
                                }
                                var n = this,
                                    r = arguments,
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (a !== M && (n = void 0, r = [e]), i.rejectWith(n, r))
                                        }
                                    };
                                o ? t() : (T.Deferred.getStackHook && (t.stackTrace = T.Deferred.getStackHook()), w.setTimeout(t))
                            }
                        }
                        return T.Deferred(function(e) {
                            i[0][3].add(u(0, e, b(r) ? r : P, e.notifyWith)), i[1][3].add(u(0, e, b(t) ? t : P)), i[2][3].add(u(0, e, b(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? T.extend(e, a) : a
                    }
                },
                s = {};
            return T.each(i, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    o = r
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(o, i)
                }
            }
            var n = arguments.length,
                r = n,
                o = Array(r),
                i = s.call(arguments),
                a = T.Deferred();
            if (n <= 1 && (R(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || b(i[r] && i[r].then))) return a.then();
            for (; r--;) R(i[r], t(r), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(e, t) {
        w.console && w.console.warn && e && B.test(e.name) && w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, T.readyException = function(e) {
        w.setTimeout(function() {
            throw e
        })
    };
    var I = T.Deferred();

    function W() {
        S.removeEventListener("DOMContentLoaded", W), w.removeEventListener("load", W), T.ready()
    }
    T.fn.ready = function(e) {
        return I.then(e).catch(function(e) {
            T.readyException(e)
        }), this
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || I.resolveWith(S, [T])
        }
    }), T.ready.then = I.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? w.setTimeout(T.ready) : (S.addEventListener("DOMContentLoaded", W), w.addEventListener("load", W));
    var F = function(e, t, n, r, o, i, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === k(n))
                for (s in o = !0, n) F(e, t, s, n[s], !0, i, a);
            else if (void 0 !== r && (o = !0, b(r) || (a = !0), u && (t = a ? (t.call(e, r), null) : (u = t, function(e, t, n) {
                    return u.call(T(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
        },
        V = /^-ms-/,
        z = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function U(e) {
        return e.replace(V, "ms-").replace(z, X)
    }

    function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Y() {
        this.expando = T.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[U(t)] = n;
            else
                for (r in t) o[U(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(q) || []).length;
                    for (; n--;) delete r[t[n]]
                }
                void 0 !== t && !T.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t)
        }
    };
    var J = new Y,
        Q = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    T.extend({
        hasData: function(e) {
            return Q.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }), T.fn.extend({
        data: function(n, e) {
            var t, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : F(this, function(e) {
                var t;
                if (i && void 0 === e) return void 0 !== (t = Q.get(i, n)) ? t : void 0 !== (t = ee(i, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = Q.get(i), 1 === i.nodeType && !J.get(i, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = U(r.slice(5)), ee(i, r, o[r]));
                J.set(i, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), T.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, T.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = T._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function() {
                T.dequeue(e, t)
            }, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), T.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || i.resolveWith(a, [a])
            }
            var r, o = 1,
                i = T.Deferred(),
                a = this,
                s = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = J.get(a[s], e + "queueHooks")) && r.empty && (o++, r.empty.add(n));
            return n(), i.promise(t)
        }
    });

    function te(e, t, n, r) {
        var o, i, a = {};
        for (i in t) a[i] = e.style[i], e.style[i] = t[i];
        for (i in o = n.apply(e, r || []), t) e.style[i] = a[i];
        return o
    }
    var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ie = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display")
        };

    function ae(e, t, n, r) {
        var o, i, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return T.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (T.cssNumber[t] ? "" : "px"),
            c = (T.cssNumber[t] || "px" !== u && +l) && re.exec(T.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--;) T.style(e, t, c + u), (1 - i) * (1 - (i = s() / l || .5)) <= 0 && (a = 0), c /= i;
            c *= 2, T.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = o)), o
    }
    var se = {};

    function le(e, t) {
        for (var n, r, o, i, a, s, l, u = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (u[c] = J.get(r, "display") || null, u[c] || (r.style.display = "")), "" === r.style.display && ie(r) && (u[c] = (l = a = i = void 0, a = (o = r).ownerDocument, s = o.nodeName, (l = se[s]) || (i = a.body.appendChild(a.createElement(s)), l = T.css(i, "display"), i.parentNode.removeChild(i), "none" === l && (l = "block"), se[s] = l)))) : "none" !== n && (u[c] = "none", J.set(r, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    T.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ie(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var ue = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i,
        de = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function he(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? T.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
    var ge, ve, me = /<|&#?\w+;/;

    function ye(e, t, n, r, o) {
        for (var i, a, s, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((i = e[h]) || 0 === i)
                if ("object" === k(i)) T.merge(d, i.nodeType ? [i] : i);
                else if (me.test(i)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (ce.exec(i) || ["", ""])[1].toLowerCase(), l = de[s] || de._default, a.innerHTML = l[1] + T.htmlPrefilter(i) + l[2], c = l[0]; c--;) a = a.lastChild;
            T.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(i));
        for (f.textContent = "", h = 0; i = d[h++];)
            if (r && -1 < T.inArray(i, r)) o && o.push(i);
            else if (u = T.contains(i.ownerDocument, i), a = he(f.appendChild(i), "script"), u && pe(a), n)
            for (c = 0; i = a[c++];) fe.test(i.type || "") && n.push(i);
        return f
    }
    ge = S.createDocumentFragment().appendChild(S.createElement("div")), (ve = S.createElement("input")).setAttribute("type", "radio"), ve.setAttribute("checked", "checked"), ve.setAttribute("name", "t"), ge.appendChild(ve), y.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue;
    var be = S.documentElement,
        xe = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Se() {
        return !1
    }

    function Te() {
        try {
            return S.activeElement
        } catch (e) {}
    }

    function $e(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) $e(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Se;
        else if (!o) return e;
        return 1 === i && (a = o, (o = function(e) {
            return T().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = T.guid++)), e.each(function() {
            T.event.add(this, t, o, r, n)
        })
    }
    T.event = {
        global: {},
        add: function(t, e, n, r, o) {
            var i, a, s, l, u, c, f, d, h, p, g, v = J.get(t);
            if (v)
                for (n.handler && (n = (i = n).handler, o = i.selector), o && T.find.matchesSelector(be, o), n.guid || (n.guid = T.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                        return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(q) || [""]).length; u--;) h = g = (s = Ce.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = T.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = T.event.special[h] || {}, c = T.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && T.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, i), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(h, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), T.event.global[h] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, l, u, c, f, d, h, p, g, v = J.hasData(e) && J.get(e);
            if (v && (l = v.events)) {
                for (u = (t = (t || "").match(q) || [""]).length; u--;)
                    if (h = g = (s = Ce.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (f = T.event.special[h] || {}, d = l[h = (r ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, v.handle) || T.removeEvent(e, h, v.handle), delete l[h])
                    } else
                        for (h in l) T.event.remove(e, h + t[u], n, r, !0);
                T.isEmptyObject(l) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a, s = T.event.fix(e),
                l = new Array(arguments.length),
                u = (J.get(this, "events") || {})[s.type] || [],
                c = T.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = T.event.handlers.call(this, s, u), t = 0;
                    (o = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((T.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (i = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < T(o, this).index(u) : T.find(o, this, null, [u]).length), a[o] && i.push(r);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[T.expando] ? e : new T.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Te() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Te() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return E(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, T.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, T.Event = function(e, t) {
        if (!(this instanceof T.Event)) return new T.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, T.event.addProp), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        T.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || T.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), T.fn.extend({
        on: function(e, t, n, r) {
            return $e(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return $e(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                T.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ee = /<script|<style|<link/i,
        He = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function _e(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ne(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, o, i, a, s, l, u;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (i = J.access(e), a = J.set(t, i), u = i.events))
                for (o in delete a.handle, a.events = {}, u)
                    for (n = 0, r = u[o].length; n < r; n++) T.event.add(t, o, u[o][n]);
            Q.hasData(e) && (s = Q.access(e), l = T.extend({}, s), Q.set(t, l))
        }
    }

    function Le(n, r, o, i) {
        r = v.apply([], r);
        var e, t, a, s, l, u, c = 0,
            f = n.length,
            d = f - 1,
            h = r[0],
            p = b(h);
        if (p || 1 < f && "string" == typeof h && !y.checkClone && He.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            p && (r[0] = h.call(this, e, t.html())), Le(t, r, o, i)
        });
        if (f && (t = (e = ye(r, n[0].ownerDocument, !1, n, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
            for (s = (a = T.map(he(e, "script"), De)).length; c < f; c++) l = e, c !== d && (l = T.clone(l, !0, !0), s && T.merge(a, he(l, "script"))), o.call(n[c], l, c);
            if (s)
                for (u = a[a.length - 1].ownerDocument, T.map(a, Ne), c = 0; c < s; c++) l = a[c], fe.test(l.type || "") && !J.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : x(l.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function qe(e, t, n) {
        for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || T.cleanData(he(r)), r.parentNode && (n && T.contains(r.ownerDocument, r) && pe(he(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    T.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ae, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, a, s, l, u, c = e.cloneNode(!0),
                f = T.contains(e.ownerDocument, e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (a = he(c), r = 0, o = (i = he(e)).length; r < o; r++) s = i[r], l = a[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && ue.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (i = i || he(e), a = a || he(c), r = 0, o = i.length; r < o; r++) Oe(i[r], a[r]);
                else Oe(e, c);
            return 0 < (a = he(c, "script")).length && pe(a, !f && he(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, o = T.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (G(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), T.fn.extend({
        detach: function(e) {
            return qe(this, e, !0)
        },
        remove: function(e) {
            return qe(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _e(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(he(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return T.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Le(this, arguments, function(e) {
                var t = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(he(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        T.fn[e] = function(e) {
            for (var t, n = [], r = T(e), o = r.length - 1, i = 0; i <= o; i++) t = i === o ? this : this.clone(!0), T(r[i])[a](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe, Me, Re, Be, Ie, We, Fe, Ve = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        ze = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = w), t.getComputedStyle(e)
        },
        Xe = new RegExp(oe.join("|"), "i");

    function Ue() {
        if (Fe) {
            We.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Fe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(We).appendChild(Fe);
            var e = w.getComputedStyle(Fe);
            Pe = "1%" !== e.top, Ie = 12 === Ge(e.marginLeft), Fe.style.right = "60%", Be = 36 === Ge(e.right), Me = 36 === Ge(e.width), Fe.style.position = "absolute", Re = 36 === Fe.offsetWidth || "absolute", be.removeChild(We), Fe = null
        }
    }

    function Ge(e) {
        return Math.round(parseFloat(e))
    }

    function Ye(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || ze(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (a = T.style(e, t)), !y.pixelBoxStyles() && Ve.test(a) && Xe.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }

    function Je(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    We = S.createElement("div"), (Fe = S.createElement("div")).style && (Fe.style.backgroundClip = "content-box", Fe.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Fe.style.backgroundClip, T.extend(y, {
        boxSizingReliable: function() {
            return Ue(), Me
        },
        pixelBoxStyles: function() {
            return Ue(), Be
        },
        pixelPosition: function() {
            return Ue(), Pe
        },
        reliableMarginLeft: function() {
            return Ue(), Ie
        },
        scrollboxSize: function() {
            return Ue(), Re
        }
    }));
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        et = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        tt = ["Webkit", "Moz", "ms"],
        nt = S.createElement("div").style;

    function rt(e) {
        var t = T.cssProps[e];
        return t = t || (T.cssProps[e] = function(e) {
            if (e in nt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;)
                if ((e = tt[n] + t) in nt) return e
        }(e) || e)
    }

    function ot(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function it(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += T.css(e, n + oe[a], !0, o)), r ? ("content" === n && (l -= T.css(e, "padding" + oe[a], !0, o)), "margin" !== n && (l -= T.css(e, "border" + oe[a] + "Width", !0, o))) : (l += T.css(e, "padding" + oe[a], !0, o), "padding" !== n ? l += T.css(e, "border" + oe[a] + "Width", !0, o) : s += T.css(e, "border" + oe[a] + "Width", !0, o));
        return !r && 0 <= i && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - .5))), l
    }

    function at(e, t, n) {
        var r = ze(e),
            o = Ye(e, t, r),
            i = "border-box" === T.css(e, "boxSizing", !1, r),
            a = i;
        if (Ve.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return a = a && (y.boxSizingReliable() || o === e.style[t]), "auto" !== o && (parseFloat(o) || "inline" !== T.css(e, "display", !1, r)) || (o = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (o = parseFloat(o) || 0) + it(e, t, n || (i ? "border" : "content"), a, r, o) + "px"
    }

    function st(e, t, n, r, o) {
        return new st.prototype.init(e, t, n, r, o)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ye(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = U(t),
                    l = Ke.test(t),
                    u = e.style;
                if (l || (t = rt(s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t];
                "string" === (i = typeof n) && (o = re.exec(n)) && o[1] && (n = ae(e, t, o), i = "number"), null != n && n == n && ("number" === i && (n += o && o[3] || (T.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = U(t);
            return Ke.test(t) || (t = rt(s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ye(e, t, r)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), T.each(["height", "width"], function(e, s) {
        T.cssHooks[s] = {
            get: function(e, t, n) {
                if (t) return !Qe.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? at(e, s, n) : te(e, Ze, function() {
                    return at(e, s, n)
                })
            },
            set: function(e, t, n) {
                var r, o = ze(e),
                    i = "border-box" === T.css(e, "boxSizing", !1, o),
                    a = n && it(e, s, n, i, o);
                return i && y.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - it(e, s, "border", !1, o) - .5)), a && (r = re.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = T.css(e, s)), ot(0, t, a)
            }
        }
    }), T.cssHooks.marginLeft = Je(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, i) {
        T.cssHooks[o + i] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + oe[t] + i] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== o && (T.cssHooks[o + i].set = ot)
    }), T.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = ze(e), o = t.length; a < o; a++) i[t[a]] = T.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((T.Tween = st).prototype = {
        constructor: st,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = st.propHooks[this.prop];
            return e && e.get ? e.get(this) : st.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = st.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : st.propHooks._default.set(this), this
        }
    }).init.prototype = st.prototype, (st.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = st.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, T.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, T.fx = st.prototype.init, T.fx.step = {};
    var lt, ut, ct, ft, dt = /^(?:toggle|show|hide)$/,
        ht = /queueHooks$/;

    function pt() {
        ut && (!1 === S.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(pt) : w.setTimeout(pt, T.fx.interval), T.fx.tick())
    }

    function gt() {
        return w.setTimeout(function() {
            lt = void 0
        }), lt = Date.now()
    }

    function vt(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = oe[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function mt(e, t, n) {
        for (var r, o = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function yt(i, e, t) {
        var n, a, r = 0,
            o = yt.prefilters.length,
            s = T.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a) return !1;
                for (var e = lt || gt(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, o = u.tweens.length; r < o; r++) u.tweens[r].run(n);
                return s.notifyWith(i, [u, n, t]), n < 1 && o ? t : (o || s.notifyWith(i, [u, 1, 0]), s.resolveWith(i, [u]), !1)
            },
            u = s.promise({
                elem: i,
                props: T.extend({}, e),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: lt || gt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = T.Tween(i, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (s.notifyWith(i, [u, 1, 0]), s.resolveWith(i, [u, e])) : s.rejectWith(i, [u, e]), this
                }
            }),
            c = u.props;
        for (! function(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (o = t[r = U(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = T.cssHooks[r]) && "expand" in a)
                        for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                    else t[r] = o
            }(c, u.opts.specialEasing); r < o; r++)
            if (n = yt.prefilters[r].call(u, i, c, u.opts)) return b(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return T.map(c, mt, u), b(u.opts.start) && u.opts.start.call(i, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
            elem: i,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    T.Animation = T.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, re.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match(q)).length; r < o; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, o, i, a, s, l, u, c, f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                g = e.nodeType && ie(e),
                v = J.get(e, "fxshow");
            for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, d.always(function() {
                    d.always(function() {
                        a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (o = t[r], dt.test(o)) {
                    if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    h[r] = v && v[r] || T.style(e, r)
                }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
                for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = v && v.display) && (u = J.get(e, "display")), "none" === (c = T.css(e, "display")) && (u ? c = u : (le([e], !0), u = e.style.display || u, c = T.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (d.done(function() {
                        p.display = u
                    }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, h) l || (v ? "hidden" in v && (g = v.hidden) : v = J.access(e, "fxshow", {
                    display: u
                }), i && (v.hidden = !g), g && le([e], !0), d.done(function() {
                    for (r in g || le([e]), J.remove(e, "fxshow"), h) T.style(e, r, h[r])
                })), l = mt(g ? v[r] : 0, r, d), r in v || (v[r] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }), T.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            b(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue)
        }, r
    }, T.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ie).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            function o() {
                var e = yt(this, T.extend({}, t), a);
                (i || J.get(this, "finish")) && e.stop(!0)
            }
            var i = T.isEmptyObject(t),
                a = T.speed(e, n, r);
            return o.finish = o, i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(o, e, i) {
            function a(e) {
                var t = e.stop;
                delete e.stop, t(i)
            }
            return "string" != typeof o && (i = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = T.timers,
                    r = J.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ht.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(i), e = !1, n.splice(t, 1));
                !e && i || T.dequeue(this, o)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = J.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    o = T.timers,
                    i = n ? n.length : 0;
                for (t.finish = !0, T.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < i; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function(e, r) {
        var o = T.fn[r];
        T.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(vt(r, !0), e, t, n)
        }
    }), T.each({
        slideDown: vt("show"),
        slideUp: vt("hide"),
        slideToggle: vt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        T.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), T.timers = [], T.fx.tick = function() {
        var e, t = 0,
            n = T.timers;
        for (lt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(), lt = void 0
    }, T.fx.timer = function(e) {
        T.timers.push(e), T.fx.start()
    }, T.fx.interval = 13, T.fx.start = function() {
        ut || (ut = !0, pt())
    }, T.fx.stop = function() {
        ut = null
    }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, T.fn.delay = function(r, e) {
        return r = T.fx && T.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = w.setTimeout(e, r);
            t.stop = function() {
                w.clearTimeout(n)
            }
        })
    }, ct = S.createElement("input"), ft = S.createElement("select").appendChild(S.createElement("option")), ct.type = "checkbox", y.checkOn = "" !== ct.value, y.optSelected = ft.selected, (ct = S.createElement("input")).value = "t", ct.type = "radio", y.radioValue = "t" === ct.value;
    var bt, xt = T.expr.attrHandle;
    T.fn.extend({
        attr: function(e, t) {
            return F(this, T.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e)
            })
        }
    }), T.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === i && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                o = t && t.match(q);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) e.removeAttribute(n)
        }
    }), bt = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || T.find.attr;
        xt[t] = function(e, t, n) {
            var r, o, i = t.toLowerCase();
            return n || (o = xt[i], xt[i] = r, r = null != a(e, t, n) ? i : null, xt[i] = o), r
        }
    });
    var kt = /^(?:input|select|textarea|button)$/i,
        Ct = /^(?:a|area)$/i;

    function wt(e) {
        return (e.match(q) || []).join(" ")
    }

    function St(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Tt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []
    }
    T.fn.extend({
        prop: function(e, t) {
            return F(this, T.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[T.propFix[e] || e]
            })
        }
    }), T.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && T.isXMLDoc(e) || (t = T.propFix[t] || t, o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (T.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
        addClass: function(t) {
            var e, n, r, o, i, a, s, l = 0;
            if (b(t)) return this.each(function(e) {
                T(this).addClass(t.call(this, e, St(this)))
            });
            if ((e = Tt(t)).length)
                for (; n = this[l++];)
                    if (o = St(n), r = 1 === n.nodeType && " " + wt(o) + " ") {
                        for (a = 0; i = e[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (s = wt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, o, i, a, s, l = 0;
            if (b(t)) return this.each(function(e) {
                T(this).removeClass(t.call(this, e, St(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = Tt(t)).length)
                for (; n = this[l++];)
                    if (o = St(n), r = 1 === n.nodeType && " " + wt(o) + " ") {
                        for (a = 0; i = e[a++];)
                            for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        o !== (s = wt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var i = typeof o,
                a = "string" == i || Array.isArray(o);
            return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(e) {
                T(this).toggleClass(o.call(this, e, St(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0, n = T(this), r = Tt(o); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== o && "boolean" != i || ((e = St(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + wt(St(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var $t = /\r/g;
    T.fn.extend({
        val: function(n) {
            var r, e, o, t = this[0];
            return arguments.length ? (o = b(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = T.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace($t, "") : null == e ? "" : e : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : wt(T.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        i = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? i + 1 : o.length;
                    for (r = i < 0 ? l : a ? i : 0; r < l; r++)
                        if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (t = T(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = T.makeArray(t), a = o.length; a--;)((r = o[a]).selected = -1 < T.inArray(T.valHooks.option.get(r), i)) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
            }
        }, y.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in w;

    function At(e) {
        e.stopPropagation()
    }
    var Et = /^(?:focusinfocus|focusoutblur)$/;
    T.extend(T.event, {
        trigger: function(e, t, n, r) {
            var o, i, a, s, l, u, c, f, d = [n || S],
                h = m.call(e, "type") ? e.type : e,
                p = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (i = f = a = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(h + T.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[T.expando] ? e : new T.Event(h, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), c = T.event.special[h] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !g(n)) {
                    for (s = c.delegateType || h, Et.test(s + h) || (i = i.parentNode); i; i = i.parentNode) d.push(i), a = i;
                    a === (n.ownerDocument || S) && d.push(a.defaultView || a.parentWindow || w)
                }
                for (o = 0;
                    (i = d[o++]) && !e.isPropagationStopped();) f = i, e.type = 1 < o ? s : c.bindType || h, (u = (J.get(i, "events") || {})[e.type] && J.get(i, "handle")) && u.apply(i, t), (u = l && i[l]) && u.apply && G(i) && (e.result = u.apply(i, t), !1 === e.result && e.preventDefault());
                return e.type = h, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !G(n) || l && b(n[h]) && !g(n) && ((a = n[l]) && (n[l] = null), T.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, At), n[h](), e.isPropagationStopped() && f.removeEventListener(h, At), T.event.triggered = void 0, a && (n[l] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = T.extend(new T.Event, n, {
                type: e,
                isSimulated: !0
            });
            T.event.trigger(r, null, t)
        }
    }), T.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0)
        }
    }), y.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function o(e) {
            T.event.simulate(r, e.target, T.event.fix(e))
        }
        T.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = J.access(e, r);
                t || e.addEventListener(n, o, !0), J.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = J.access(e, r) - 1;
                t ? J.access(e, r, t) : (e.removeEventListener(n, o, !0), J.remove(e, r))
            }
        }
    });
    var Ht = w.location,
        jt = Date.now(),
        _t = /\?/;
    T.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new w.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
    };
    var Dt = /\[\]$/,
        Nt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, o) {
        var t;
        if (Array.isArray(e)) T.each(e, function(e, t) {
            r || Dt.test(n) ? o(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o)
        });
        else if (r || "object" !== k(e)) o(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], r, o)
    }
    T.param = function(e, t) {
        function n(e, t) {
            var n = b(t) ? t() : t;
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var r, o = [];
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (r in e) qt(r, e[r], t, n);
        return o.join("&")
    }, T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && Lt.test(this.nodeName) && !Ot.test(e) && (this.checked || !ue.test(e))
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                }
            }).get()
        }
    });
    var Pt = /%20/g,
        Mt = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        Ft = {},
        Vt = {},
        zt = "*/".concat("*"),
        Xt = S.createElement("a");

    function Ut(i) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                o = e.toLowerCase().match(q) || [];
            if (b(t))
                for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
        }
    }

    function Gt(t, o, i, a) {
        var s = {},
            l = t === Vt;

        function u(e) {
            var r;
            return s[e] = !0, T.each(t[e] || [], function(e, t) {
                var n = t(o, i, a);
                return "string" != typeof n || l || s[n] ? l ? !(r = n) : void 0 : (o.dataTypes.unshift(n), u(n), !1)
            }), r
        }
        return u(o.dataTypes[0]) || !s["*"] && u("*")
    }

    function Yt(e, t) {
        var n, r, o = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r = r || {})[n] = t[n]);
        return r && T.extend(!0, e, r), e
    }
    Xt.href = Ht.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ht.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ht.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Yt(Yt(e, T.ajaxSettings), t) : Yt(T.ajaxSettings, e)
        },
        ajaxPrefilter: Ut(Ft),
        ajaxTransport: Ut(Vt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, d, n, h, r, p, g, o, i, v = T.ajaxSetup({}, t),
                m = v.context || v,
                y = v.context && (m.nodeType || m.jquery) ? T(m) : T.event,
                b = T.Deferred(),
                x = T.Callbacks("once memory"),
                k = v.statusCode || {},
                a = {},
                s = {},
                l = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Bt.exec(d);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return p ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (p) C.always(e[C.status]);
                            else
                                for (t in e) k[t] = [k[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return c && c.abort(t), u(0, t), this
                    }
                };
            if (b.promise(C), v.url = ((e || v.url || Ht.href) + "").replace(Wt, Ht.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(q) || [""], null == v.crossDomain) {
                r = S.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = T.param(v.data, v.traditional)), Gt(Ft, v, t, C), p) return C;
            for (o in (g = T.event && v.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !It.test(v.type), f = v.url.replace(Mt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Pt, "+")) : (i = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (_t.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Rt, "$1"), i = (_t.test(f) ? "&" : "?") + "_=" + jt++ + i), v.url = f + i), v.ifModified && (T.lastModified[f] && C.setRequestHeader("If-Modified-Since", T.lastModified[f]), T.etag[f] && C.setRequestHeader("If-None-Match", T.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && C.setRequestHeader("Content-Type", v.contentType), C.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) C.setRequestHeader(o, v.headers[o]);
            if (v.beforeSend && (!1 === v.beforeSend.call(m, C, v) || p)) return C.abort();
            if (l = "abort", x.add(v.complete), C.done(v.success), C.fail(v.error), c = Gt(Vt, v, t, C)) {
                if (C.readyState = 1, g && y.trigger("ajaxSend", [C, v]), p) return C;
                v.async && 0 < v.timeout && (h = w.setTimeout(function() {
                    C.abort("timeout")
                }, v.timeout));
                try {
                    p = !1, c.send(a, u)
                } catch (e) {
                    if (p) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var o, i, a, s, l, u = t;
                p || (p = !0, h && w.clearTimeout(h), c = void 0, d = r || "", C.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, o, i, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in s)
                            if (s[o] && s[o].test(r)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in n) i = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                i = o;
                                break
                            }
                            a = a || o
                        }
                        i = i || a
                    }
                    if (i) return i !== l[0] && l.unshift(i), n[i]
                }(v, C, n)), s = function(e, t, n, r) {
                    var o, i, a, s, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i;)
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
                            if ("*" === i) i = l;
                            else if ("*" !== l && l !== i) {
                        if (!(a = u[l + " " + i] || u["* " + i]))
                            for (o in u)
                                if ((s = o.split(" "))[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[o] : !0 !== u[o] && (i = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + i
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, C, o), o ? (v.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (T.lastModified[f] = l), (l = C.getResponseHeader("etag")) && (T.etag[f] = l)), 204 === e || "HEAD" === v.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, i = s.data, o = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || u) + "", o ? b.resolveWith(m, [i, u, C]) : b.rejectWith(m, [C, u, a]), C.statusCode(k), k = void 0, g && y.trigger(o ? "ajaxSuccess" : "ajaxError", [C, v, o ? i : a]), x.fireWith(m, [C, u]), g && (y.trigger("ajaxComplete", [C, v]), --T.active || T.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return T.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return T.get(e, void 0, t, "script")
        }
    }), T.each(["get", "post"], function(e, o) {
        T[o] = function(e, t, n, r) {
            return b(t) && (r = r || n, n = t, t = void 0), T.ajax(T.extend({
                url: e,
                type: o,
                dataType: r,
                data: t,
                success: n
            }, T.isPlainObject(e) && e))
        }
    }), T._evalUrl = function(e) {
        return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, T.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                T(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = T(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                T(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }), this
        }
    }), T.expr.pseudos.hidden = function(e) {
        return !T.expr.pseudos.visible(e)
    }, T.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, T.ajaxSettings.xhr = function() {
        try {
            return new w.XMLHttpRequest
        } catch (e) {}
    };
    var Jt = {
            0: 200,
            1223: 204
        },
        Qt = T.ajaxSettings.xhr();
    y.cors = !!Qt && "withCredentials" in Qt, y.ajax = Qt = !!Qt, T.ajaxTransport(function(o) {
        var i, a;
        if (y.cors || Qt && !o.crossDomain) return {
            send: function(e, t) {
                var n, r = o.xhr();
                if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) r[n] = o.xhrFields[n];
                for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                i = function(e) {
                    return function() {
                        i && (i = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Jt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = i(), a = r.onerror = r.ontimeout = i("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && w.setTimeout(function() {
                        i && a()
                    })
                }, i = i("abort");
                try {
                    r.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), T.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return T.globalEval(e), e
            }
        }
    }), T.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), T.ajaxTransport("script", function(n) {
        var r, o;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = T("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function(e) {
                    r.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), S.head.appendChild(r[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var Kt, Zt = [],
        en = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Zt.pop() || T.expando + "_" + jt++;
            return this[e] = !0, e
        }
    }), T.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, o, i, a = !1 !== e.jsonp && (en.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + r) : !1 !== e.jsonp && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return i || T.error(r + " was not called"), i[0]
        }, e.dataTypes[0] = "json", o = w[r], w[r] = function() {
            i = arguments
        }, n.always(function() {
            void 0 === o ? T(w).removeProp(r) : w[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Zt.push(r)), i && b(o) && o(i[0]), i = o = void 0
        }), "script"
    }), y.createHTMLDocument = ((Kt = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Kt.childNodes.length), T.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(r)) : t = S), i = !n && [], (o = H.exec(e)) ? [t.createElement(o[1])] : (o = ye([e], t, i), i && i.length && T(i).remove(), T.merge([], o.childNodes)));
        var r, o, i
    }, T.fn.load = function(e, t, n) {
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = wt(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && T.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        T.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), T.expr.pseudos.animated = function(t) {
        return T.grep(T.timers, function(e) {
            return t === e.elem
        }).length
    }, T.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, l, u = T.css(e, "position"),
                c = T(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), i = T.css(e, "top"), l = T.css(e, "left"), o = ("absolute" === u || "fixed" === u) && -1 < (i + l).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(i) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, n, T.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, T.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                T.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0), o.left += T.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - T.css(r, "marginTop", !0),
                    left: t.left - o.left - T.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                return e || be
            })
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var i = "pageYOffset" === o;
        T.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var r;
                if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[o] : e[t];
                r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), T.each(["top", "left"], function(e, n) {
        T.cssHooks[n] = Je(y.pixelPosition, function(e, t) {
            if (t) return t = Ye(e, n), Ve.test(t) ? T(e).position()[n] + "px" : t
        })
    }), T.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        T.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, i) {
            T.fn[i] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    o = r || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function(e, t, n) {
                    var r;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? T.css(e, t, o) : T.style(e, t, n, o)
                }, s, n ? e : void 0, n)
            }
        })
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        T.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), T.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), T.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), T.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = s.call(arguments, 2), (o = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || T.guid++, o
    }, T.holdReady = function(e) {
        e ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = E, T.isFunction = b, T.isWindow = g, T.camelCase = U, T.type = k, T.now = Date.now, T.isNumeric = function(e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var tn = w.jQuery,
        nn = w.$;
    return T.noConflict = function(e) {
        return w.$ === T && (w.$ = nn), e && w.jQuery === T && (w.jQuery = tn), T
    }, e || (w.jQuery = w.$ = T), T
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function() {
    return r = {}, o.m = n = [function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = function(e, t, n) {
                return t && l(e.prototype, t), n && l(e, n), e
            },
            i = u(n(1)),
            a = u(n(3)),
            s = u(n(4));

        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(f, a.default), o(f, [{
            key: "resolveOptions",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === r(e.container) ? e.container : document.body
            }
        }, {
            key: "listenClick",
            value: function(e) {
                var t = this;
                this.listener = (0, s.default)(e, "click", function(e) {
                    return t.onClick(e)
                })
            }
        }, {
            key: "onClick",
            value: function(e) {
                var t = e.delegateTarget || e.currentTarget;
                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new i.default({
                    action: this.action(t),
                    target: this.target(t),
                    text: this.text(t),
                    container: this.container,
                    trigger: t,
                    emitter: this
                })
            }
        }, {
            key: "defaultAction",
            value: function(e) {
                return d("action", e)
            }
        }, {
            key: "defaultTarget",
            value: function(e) {
                var t = d("target", e);
                if (t) return document.querySelector(t)
            }
        }, {
            key: "defaultText",
            value: function(e) {
                return d("text", e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
            }
        }], [{
            key: "isSupported",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                    t = "string" == typeof e ? [e] : e,
                    n = !!document.queryCommandSupported;
                return t.forEach(function(e) {
                    n = n && !!document.queryCommandSupported(e)
                }), n
            }
        }]), f);

        function f(e, t) {
            ! function(e) {
                if (!(e instanceof f)) throw new TypeError("Cannot call a class as a function")
            }(this);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
            return n.resolveOptions(t), n.listenClick(e), n
        }

        function d(e, t) {
            var n = "data-clipboard-" + e;
            if (t.hasAttribute(n)) return t.getAttribute(n)
        }
        e.exports = c
    }, function(e, t, n) {
        "use strict";
        var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = function(e, t, n) {
                return t && s(e.prototype, t), n && s(e, n), e
            },
            a = (r = n(2)) && r.__esModule ? r : {
                default: r
            };

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var l = (i(u, [{
            key: "resolveOptions",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
            }
        }, {
            key: "initSelection",
            value: function() {
                this.text ? this.selectFake() : this.target && this.selectTarget()
            }
        }, {
            key: "selectFake",
            value: function() {
                var e = this,
                    t = "rtl" == document.documentElement.getAttribute("dir");
                this.removeFake(), this.fakeHandlerCallback = function() {
                    return e.removeFake()
                }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                var n = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, a.default)(this.fakeElem), this.copyText()
            }
        }, {
            key: "removeFake",
            value: function() {
                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
            }
        }, {
            key: "selectTarget",
            value: function() {
                this.selectedText = (0, a.default)(this.target), this.copyText()
            }
        }, {
            key: "copyText",
            value: function() {
                var t = void 0;
                try {
                    t = document.execCommand(this.action)
                } catch (e) {
                    t = !1
                }
                this.handleResult(t)
            }
        }, {
            key: "handleResult",
            value: function(e) {
                this.emitter.emit(e ? "success" : "error", {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                })
            }
        }, {
            key: "clearSelection",
            value: function() {
                this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
            }
        }, {
            key: "destroy",
            value: function() {
                this.removeFake()
            }
        }, {
            key: "action",
            set: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
            },
            get: function() {
                return this._action
            }
        }, {
            key: "target",
            set: function(e) {
                if (void 0 !== e) {
                    if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    this._target = e
                }
            },
            get: function() {
                return this._target
            }
        }]), u);

        function u(e) {
            ! function(e) {
                if (!(e instanceof u)) throw new TypeError("Cannot call a class as a function")
            }(this), this.resolveOptions(e), this.initSelection()
        }
        e.exports = l
    }, function(e, t) {
        e.exports = function(e) {
            var t;
            if ("SELECT" === e.nodeName) e.focus(), t = e.value;
            else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                var n = e.hasAttribute("readonly");
                n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
            } else {
                e.hasAttribute("contenteditable") && e.focus();
                var r = window.getSelection(),
                    o = document.createRange();
                o.selectNodeContents(e), r.removeAllRanges(), r.addRange(o), t = r.toString()
            }
            return t
        }
    }, function(e, t) {
        function n() {}
        n.prototype = {
            on: function(e, t, n) {
                var r = this.e || (this.e = {});
                return (r[e] || (r[e] = [])).push({
                    fn: t,
                    ctx: n
                }), this
            },
            once: function(e, t, n) {
                var r = this;

                function o() {
                    r.off(e, o), t.apply(n, arguments)
                }
                return o._ = t, this.on(e, o, n)
            },
            emit: function(e) {
                for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, t);
                return this
            },
            off: function(e, t) {
                var n = this.e || (this.e = {}),
                    r = n[e],
                    o = [];
                if (r && t)
                    for (var i = 0, a = r.length; i < a; i++) r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
                return o.length ? n[e] = o : delete n[e], this
            }
        }, e.exports = n
    }, function(e, t, n) {
        var d = n(5),
            h = n(6);
        e.exports = function(e, t, n) {
            if (!e && !t && !n) throw new Error("Missing required arguments");
            if (!d.string(t)) throw new TypeError("Second argument must be a String");
            if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
            if (d.node(e)) return c = t, f = n, (u = e).addEventListener(c, f), {
                destroy: function() {
                    u.removeEventListener(c, f)
                }
            };
            if (d.nodeList(e)) return a = e, s = t, l = n, Array.prototype.forEach.call(a, function(e) {
                e.addEventListener(s, l)
            }), {
                destroy: function() {
                    Array.prototype.forEach.call(a, function(e) {
                        e.removeEventListener(s, l)
                    })
                }
            };
            if (d.string(e)) return r = e, o = t, i = n, h(document.body, r, o, i);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var r, o, i, a, s, l, u, c, f
        }
    }, function(e, n) {
        n.node = function(e) {
            return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
        }, n.nodeList = function(e) {
            var t = Object.prototype.toString.call(e);
            return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
        }, n.string = function(e) {
            return "string" == typeof e || e instanceof String
        }, n.fn = function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }, function(e, t, n) {
        var a = n(7);

        function i(e, t, n, r, o) {
            var i = function(t, n, e, r) {
                return function(e) {
                    e.delegateTarget = a(e.target, n), e.delegateTarget && r.call(t, e)
                }
            }.apply(this, arguments);
            return e.addEventListener(n, i, o), {
                destroy: function() {
                    e.removeEventListener(n, i, o)
                }
            }
        }
        e.exports = function(e, t, n, r, o) {
            return "function" == typeof e.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
                return i(e, t, n, r, o)
            }))
        }
    }, function(e, t) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        e.exports = function(e, t) {
            for (; e && 9 !== e.nodeType;) {
                if ("function" == typeof e.matches && e.matches(t)) return e;
                e = e.parentNode
            }
        }
    }], o.c = r, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 0);

    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    var n, r
}),
function(u) {
    function c(e, t) {
        if (t = t || {}, (e = e || "") instanceof c) return e;
        if (!(this instanceof c)) return new c(e, t);
        var n = function(e) {
            var t = {
                    r: 0,
                    g: 0,
                    b: 0
                },
                n = 1,
                r = null,
                o = null,
                i = null,
                a = !1,
                s = !1;
            return "string" == typeof e && (e = function(e) {
                e = e.replace(E, "").replace(H, "").toLowerCase();
                var t, n = !1;
                if (M[e]) e = M[e], n = !0;
                else if ("transparent" == e) return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: "name"
                };
                return (t = B.rgb.exec(e)) ? {
                    r: t[1],
                    g: t[2],
                    b: t[3]
                } : (t = B.rgba.exec(e)) ? {
                    r: t[1],
                    g: t[2],
                    b: t[3],
                    a: t[4]
                } : (t = B.hsl.exec(e)) ? {
                    h: t[1],
                    s: t[2],
                    l: t[3]
                } : (t = B.hsla.exec(e)) ? {
                    h: t[1],
                    s: t[2],
                    l: t[3],
                    a: t[4]
                } : (t = B.hsv.exec(e)) ? {
                    h: t[1],
                    s: t[2],
                    v: t[3]
                } : (t = B.hsva.exec(e)) ? {
                    h: t[1],
                    s: t[2],
                    v: t[3],
                    a: t[4]
                } : (t = B.hex8.exec(e)) ? {
                    r: C(t[1]),
                    g: C(t[2]),
                    b: C(t[3]),
                    a: $(t[4]),
                    format: n ? "name" : "hex8"
                } : (t = B.hex6.exec(e)) ? {
                    r: C(t[1]),
                    g: C(t[2]),
                    b: C(t[3]),
                    format: n ? "name" : "hex"
                } : (t = B.hex4.exec(e)) ? {
                    r: C(t[1] + "" + t[1]),
                    g: C(t[2] + "" + t[2]),
                    b: C(t[3] + "" + t[3]),
                    a: $(t[4] + "" + t[4]),
                    format: n ? "name" : "hex8"
                } : !!(t = B.hex3.exec(e)) && {
                    r: C(t[1] + "" + t[1]),
                    g: C(t[2] + "" + t[2]),
                    b: C(t[3] + "" + t[3]),
                    format: n ? "name" : "hex"
                }
            }(e)), "object" == typeof e && (A(e.r) && A(e.g) && A(e.b) ? (t = function(e, t, n) {
                return {
                    r: 255 * x(e, 255),
                    g: 255 * x(t, 255),
                    b: 255 * x(n, 255)
                }
            }(e.r, e.g, e.b), a = !0, s = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : A(e.h) && A(e.s) && A(e.v) ? (r = S(e.s), o = S(e.v), t = function(e, t, n) {
                e = 6 * x(e, 360), t = x(t, 100), n = x(n, 100);
                var r = u.floor(e),
                    o = e - r,
                    i = n * (1 - t),
                    a = n * (1 - o * t),
                    s = n * (1 - (1 - o) * t),
                    l = r % 6;
                return {
                    r: 255 * [n, a, i, i, s, n][l],
                    g: 255 * [s, n, n, a, i, i][l],
                    b: 255 * [i, i, s, n, n, a][l]
                }
            }(e.h, r, o), a = !0, s = "hsv") : A(e.h) && A(e.s) && A(e.l) && (r = S(e.s), i = S(e.l), t = function(e, t, n) {
                function r(e, t, n) {
                    return n < 0 && (n += 1), 1 < n && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
                }
                var o, i, a;
                if (e = x(e, 360), t = x(t, 100), n = x(n, 100), 0 === t) o = i = a = n;
                else {
                    var s = n < .5 ? n * (1 + t) : n + t - n * t,
                        l = 2 * n - s;
                    o = r(l, s, e + 1 / 3), i = r(l, s, e), a = r(l, s, e - 1 / 3)
                }
                return {
                    r: 255 * o,
                    g: 255 * i,
                    b: 255 * a
                }
            }(e.h, r, i), a = !0, s = "hsl"), e.hasOwnProperty("a") && (n = e.a)), n = b(n), {
                ok: a,
                format: e.format || s,
                r: D(255, N(t.r, 0)),
                g: D(255, N(t.g, 0)),
                b: D(255, N(t.b, 0)),
                a: n
            }
        }(e);
        this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = _(100 * this._a) / 100, this._format = t.format || n.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = _(this._r)), this._g < 1 && (this._g = _(this._g)), this._b < 1 && (this._b = _(this._b)), this._ok = n.ok, this._tc_id = j++
    }

    function o(e, t, n) {
        e = x(e, 255), t = x(t, 255), n = x(n, 255);
        var r, o, i = N(e, t, n),
            a = D(e, t, n),
            s = (i + a) / 2;
        if (i == a) r = o = 0;
        else {
            var l = i - a;
            switch (o = .5 < s ? l / (2 - i - a) : l / (i + a), i) {
                case e:
                    r = (t - n) / l + (t < n ? 6 : 0);
                    break;
                case t:
                    r = (n - e) / l + 2;
                    break;
                case n:
                    r = (e - t) / l + 4
            }
            r /= 6
        }
        return {
            h: r,
            s: o,
            l: s
        }
    }

    function i(e, t, n) {
        e = x(e, 255), t = x(t, 255), n = x(n, 255);
        var r, o, i = N(e, t, n),
            a = D(e, t, n),
            s = i,
            l = i - a;
        if (o = 0 === i ? 0 : l / i, i == a) r = 0;
        else {
            switch (i) {
                case e:
                    r = (t - n) / l + (t < n ? 6 : 0);
                    break;
                case t:
                    r = (n - e) / l + 2;
                    break;
                case n:
                    r = (e - t) / l + 4
            }
            r /= 6
        }
        return {
            h: r,
            s: o,
            v: s
        }
    }

    function t(e, t, n, r) {
        var o = [w(_(e).toString(16)), w(_(t).toString(16)), w(_(n).toString(16))];
        return r && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
    }

    function a(e, t, n, r) {
        return [w(T(r)), w(_(e).toString(16)), w(_(t).toString(16)), w(_(n).toString(16))].join("")
    }

    function e(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = c(e).toHsl();
        return n.s -= t / 100, n.s = k(n.s), c(n)
    }

    function n(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = c(e).toHsl();
        return n.s += t / 100, n.s = k(n.s), c(n)
    }

    function r(e) {
        return c(e).desaturate(100)
    }

    function s(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = c(e).toHsl();
        return n.l += t / 100, n.l = k(n.l), c(n)
    }

    function l(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = c(e).toRgb();
        return n.r = N(0, D(255, n.r - _(-t / 100 * 255))), n.g = N(0, D(255, n.g - _(-t / 100 * 255))), n.b = N(0, D(255, n.b - _(-t / 100 * 255))), c(n)
    }

    function f(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = c(e).toHsl();
        return n.l -= t / 100, n.l = k(n.l), c(n)
    }

    function d(e, t) {
        var n = c(e).toHsl(),
            r = (n.h + t) % 360;
        return n.h = r < 0 ? 360 + r : r, c(n)
    }

    function h(e) {
        var t = c(e).toHsl();
        return t.h = (t.h + 180) % 360, c(t)
    }

    function p(e) {
        var t = c(e).toHsl(),
            n = t.h;
        return [c(e), c({
            h: (n + 120) % 360,
            s: t.s,
            l: t.l
        }), c({
            h: (n + 240) % 360,
            s: t.s,
            l: t.l
        })]
    }

    function g(e) {
        var t = c(e).toHsl(),
            n = t.h;
        return [c(e), c({
            h: (n + 90) % 360,
            s: t.s,
            l: t.l
        }), c({
            h: (n + 180) % 360,
            s: t.s,
            l: t.l
        }), c({
            h: (n + 270) % 360,
            s: t.s,
            l: t.l
        })]
    }

    function v(e) {
        var t = c(e).toHsl(),
            n = t.h;
        return [c(e), c({
            h: (n + 72) % 360,
            s: t.s,
            l: t.l
        }), c({
            h: (n + 216) % 360,
            s: t.s,
            l: t.l
        })]
    }

    function m(e, t, n) {
        t = t || 6, n = n || 30;
        var r = c(e).toHsl(),
            o = 360 / n,
            i = [c(e)];
        for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t;) r.h = (r.h + o) % 360, i.push(c(r));
        return i
    }

    function y(e, t) {
        t = t || 6;
        for (var n = c(e).toHsv(), r = n.h, o = n.s, i = n.v, a = [], s = 1 / t; t--;) a.push(c({
            h: r,
            s: o,
            v: i
        })), i = (i + s) % 1;
        return a
    }

    function b(e) {
        return e = parseFloat(e), (isNaN(e) || e < 0 || 1 < e) && (e = 1), e
    }

    function x(e, t) {
        ! function(e) {
            return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
        }(e) || (e = "100%");
        var n = function(e) {
            return "string" == typeof e && -1 != e.indexOf("%")
        }(e);
        return e = D(t, N(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), u.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
    }

    function k(e) {
        return D(1, N(0, e))
    }

    function C(e) {
        return parseInt(e, 16)
    }

    function w(e) {
        return 1 == e.length ? "0" + e : "" + e
    }

    function S(e) {
        return e <= 1 && (e = 100 * e + "%"), e
    }

    function T(e) {
        return u.round(255 * parseFloat(e)).toString(16)
    }

    function $(e) {
        return C(e) / 255
    }

    function A(e) {
        return !!B.CSS_UNIT.exec(e)
    }
    var E = /^\s+/,
        H = /\s+$/,
        j = 0,
        _ = u.round,
        D = u.min,
        N = u.max,
        O = u.random;
    c.prototype = {
        isDark: function() {
            return this.getBrightness() < 128
        },
        isLight: function() {
            return !this.isDark()
        },
        isValid: function() {
            return this._ok
        },
        getOriginalInput: function() {
            return this._originalInput
        },
        getFormat: function() {
            return this._format
        },
        getAlpha: function() {
            return this._a
        },
        getBrightness: function() {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
        },
        getLuminance: function() {
            var e, t, n, r = this.toRgb();
            return e = r.r / 255, t = r.g / 255, n = r.b / 255, .2126 * (e <= .03928 ? e / 12.92 : u.pow((.055 + e) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : u.pow((.055 + t) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : u.pow((.055 + n) / 1.055, 2.4))
        },
        setAlpha: function(e) {
            return this._a = b(e), this._roundA = _(100 * this._a) / 100, this
        },
        toHsv: function() {
            var e = i(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                v: e.v,
                a: this._a
            }
        },
        toHsvString: function() {
            var e = i(this._r, this._g, this._b),
                t = _(360 * e.h),
                n = _(100 * e.s),
                r = _(100 * e.v);
            return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
        },
        toHsl: function() {
            var e = o(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                l: e.l,
                a: this._a
            }
        },
        toHslString: function() {
            var e = o(this._r, this._g, this._b),
                t = _(360 * e.h),
                n = _(100 * e.s),
                r = _(100 * e.l);
            return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
        },
        toHex: function(e) {
            return t(this._r, this._g, this._b, e)
        },
        toHexString: function(e) {
            return "#" + this.toHex(e)
        },
        toHex8: function(e) {
            return function(e, t, n, r, o) {
                var i = [w(_(e).toString(16)), w(_(t).toString(16)), w(_(n).toString(16)), w(T(r))];
                return o && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("")
            }(this._r, this._g, this._b, this._a, e)
        },
        toHex8String: function(e) {
            return "#" + this.toHex8(e)
        },
        toRgb: function() {
            return {
                r: _(this._r),
                g: _(this._g),
                b: _(this._b),
                a: this._a
            }
        },
        toRgbString: function() {
            return 1 == this._a ? "rgb(" + _(this._r) + ", " + _(this._g) + ", " + _(this._b) + ")" : "rgba(" + _(this._r) + ", " + _(this._g) + ", " + _(this._b) + ", " + this._roundA + ")"
        },
        toPercentageRgb: function() {
            return {
                r: _(100 * x(this._r, 255)) + "%",
                g: _(100 * x(this._g, 255)) + "%",
                b: _(100 * x(this._b, 255)) + "%",
                a: this._a
            }
        },
        toPercentageRgbString: function() {
            return 1 == this._a ? "rgb(" + _(100 * x(this._r, 255)) + "%, " + _(100 * x(this._g, 255)) + "%, " + _(100 * x(this._b, 255)) + "%)" : "rgba(" + _(100 * x(this._r, 255)) + "%, " + _(100 * x(this._g, 255)) + "%, " + _(100 * x(this._b, 255)) + "%, " + this._roundA + ")"
        },
        toName: function() {
            return 0 === this._a ? "transparent" : !(this._a < 1) && (R[t(this._r, this._g, this._b, !0)] || !1)
        },
        toFilter: function(e) {
            var t = "#" + a(this._r, this._g, this._b, this._a),
                n = t,
                r = this._gradientType ? "GradientType = 1, " : "";
            if (e) {
                var o = c(e);
                n = "#" + a(o._r, o._g, o._b, o._a)
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + n + ")"
        },
        toString: function(e) {
            var t = !!e;
            e = e || this._format;
            var n = !1,
                r = this._a < 1 && 0 <= this._a;
            return !t && r && ("hex" === e || "hex6" === e || "hex3" === e || "hex4" === e || "hex8" === e || "name" === e) ? "name" === e && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex4" === e && (n = this.toHex8String(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString())
        },
        clone: function() {
            return c(this.toString())
        },
        _applyModification: function(e, t) {
            var n = e.apply(null, [this].concat([].slice.call(t)));
            return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
        },
        lighten: function() {
            return this._applyModification(s, arguments)
        },
        brighten: function() {
            return this._applyModification(l, arguments)
        },
        darken: function() {
            return this._applyModification(f, arguments)
        },
        desaturate: function() {
            return this._applyModification(e, arguments)
        },
        saturate: function() {
            return this._applyModification(n, arguments)
        },
        greyscale: function() {
            return this._applyModification(r, arguments)
        },
        spin: function() {
            return this._applyModification(d, arguments)
        },
        _applyCombination: function(e, t) {
            return e.apply(null, [this].concat([].slice.call(t)))
        },
        analogous: function() {
            return this._applyCombination(m, arguments)
        },
        complement: function() {
            return this._applyCombination(h, arguments)
        },
        monochromatic: function() {
            return this._applyCombination(y, arguments)
        },
        splitcomplement: function() {
            return this._applyCombination(v, arguments)
        },
        triad: function() {
            return this._applyCombination(p, arguments)
        },
        tetrad: function() {
            return this._applyCombination(g, arguments)
        }
    }, c.fromRatio = function(e, t) {
        if ("object" == typeof e) {
            var n = {};
            for (var r in e) e.hasOwnProperty(r) && (n[r] = "a" === r ? e[r] : S(e[r]));
            e = n
        }
        return c(e, t)
    }, c.equals = function(e, t) {
        return !(!e || !t) && c(e).toRgbString() == c(t).toRgbString()
    }, c.random = function() {
        return c.fromRatio({
            r: O(),
            g: O(),
            b: O()
        })
    }, c.mix = function(e, t, n) {
        n = 0 === n ? 0 : n || 50;
        var r = c(e).toRgb(),
            o = c(t).toRgb(),
            i = n / 100;
        return c({
            r: (o.r - r.r) * i + r.r,
            g: (o.g - r.g) * i + r.g,
            b: (o.b - r.b) * i + r.b,
            a: (o.a - r.a) * i + r.a
        })
    }, c.readability = function(e, t) {
        var n = c(e),
            r = c(t);
        return (u.max(n.getLuminance(), r.getLuminance()) + .05) / (u.min(n.getLuminance(), r.getLuminance()) + .05)
    }, c.isReadable = function(e, t, n) {
        var r, o, i = c.readability(e, t);
        switch (o = !1, (r = function(e) {
            var t, n;
            return "AA" !== (t = ((e = e || {
                level: "AA",
                size: "small"
            }).level || "AA").toUpperCase()) && "AAA" !== t && (t = "AA"), "small" !== (n = (e.size || "small").toLowerCase()) && "large" !== n && (n = "small"), {
                level: t,
                size: n
            }
        }(n)).level + r.size) {
            case "AAsmall":
            case "AAAlarge":
                o = 4.5 <= i;
                break;
            case "AAlarge":
                o = 3 <= i;
                break;
            case "AAAsmall":
                o = 7 <= i
        }
        return o
    }, c.mostReadable = function(e, t, n) {
        var r, o, i, a, s = null,
            l = 0;
        o = (n = n || {}).includeFallbackColors, i = n.level, a = n.size;
        for (var u = 0; u < t.length; u++) l < (r = c.readability(e, t[u])) && (l = r, s = c(t[u]));
        return c.isReadable(e, s, {
            level: i,
            size: a
        }) || !o ? s : (n.includeFallbackColors = !1, c.mostReadable(e, ["#fff", "#000"], n))
    };
    var L, q, P, M = c.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        },
        R = c.hexNames = function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
            return t
        }(M),
        B = (q = "[\\s|\\(]+(" + (L = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + L + ")[,|\\s]+(" + L + ")\\s*\\)?", P = "[\\s|\\(]+(" + L + ")[,|\\s]+(" + L + ")[,|\\s]+(" + L + ")[,|\\s]+(" + L + ")\\s*\\)?", {
            CSS_UNIT: new RegExp(L),
            rgb: new RegExp("rgb" + q),
            rgba: new RegExp("rgba" + P),
            hsl: new RegExp("hsl" + q),
            hsla: new RegExp("hsla" + P),
            hsv: new RegExp("hsv" + q),
            hsva: new RegExp("hsva" + P),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        });
    "undefined" != typeof module && module.exports ? module.exports = c : "function" == typeof define && define.amd ? define(function() {
        return c
    }) : window.tinycolor = c
}(Math), $("#nav-icon").click(function() {
    $(this).toggleClass("open"), $("nav ul").toggleClass("opened")
}), $("#error .close").click(function() {
    $(this).parent().hide()
}), $("form.feedback").on("submit", function(e) {
    e.preventDefault(), $(".feedback-error").hide(), $.ajax({
        url: "/ajax/sendFeedback.php",
        method: "POST",
        data: {
            name: $(this).find("#name").val(),
            email: $(this).find("#email").val(),
            message: $(this).find("#message").val()
        },
        dataType: "json",
        cache: !1,
        success: function(e) {
            e.status && "OK" == e.status && $("#send-feedback").replaceWith('<div class="alert alert-success" role="alert">Thank you for your feedback.</div>'), e.status && "Captcha error" == e.status && $(".feedback-error").show()
        }
    })
}), $("#accept-policy").click(function() {
    $(this).is(":checked") ? $("#send-feedback").prop("disabled", !1) : $("#send-feedback").prop("disabled", !0)
});
var clipboard = new ClipboardJS(".copy"),
    $color = $("#color"),
    changedValue = "",
    displayColorFlag = !1,
    $hexInputGroup = $("#hex-group"),
    $rgbInputGroup = $("#rgb-group"),
    $hslInputGroup = $("#hsl-group"),
    $hsvInputGroup = $("#hsv-group"),
    $cmykInputGroup = $("#cmyk-group"),
    $hexInput = $("#hex"),
    $rgbInput = $("#rgb"),
    $hslInput = $("#hsl"),
    $hsvInput = $("#hsv"),
    $cmykInput = $("#cmyk"),
    hexOld = "",
    rgbOld = "",
    hslOld = "",
    hsvOld = "",
    cmykOld = "",
    $colorsBlock = $("#colors-block"),
    $hueSlider = $("#hue-slider"),
    $alphaSlider = $("#alpha-slider"),
    $colorPicker = $("#color-picker"),
    $huePicker = $("#hue-picker"),
    $alphaPicker = $("#alpha-picker"),
    colorsBlock = $colorsBlock.get(0),
    colorsBlockCtx = colorsBlock.getContext("2d"),
    colorsBlockWidth = 0,
    colorsBlockHeight = 0,
    hueSlider = $hueSlider.get(0),
    hueSliderCtx = hueSlider.getContext("2d"),
    hueSliderWidth = 0,
    hueSliderHeight = 0,
    alphaSlider = $alphaSlider.get(0),
    alphaSliderCtx = alphaSlider.getContext("2d"),
    alphaSliderWidth = 0,
    alphaSliderHeight = 0,
    colorDrag = !1,
    hueDrag = !1,
    alphaDrag = !1,
    colorsBlockOffset = {},
    hueSliderOffset = {},
    alphaSliderOffset = {},
    $complementaryWrap = $("#complementary-wrap"),
    $triadicWrap = $("#triadic-wrap"),
    $splitComplementaryWrap = $("#split-complementary-wrap"),
    $tetradicWrap = $("#tetradic-wrap"),
    $analogousWrap = $("#analogous-wrap"),
    $monochromaticWrap = $("#monochromatic-wrap"),
    currentColor = {
        r: 218,
        g: 79,
        b: 79,
        a: 1
    };
if (window.location.hash.length) {
    var colorObj = new tinycolor(window.location.hash);
    colorObj.isValid() && ((currentColor = colorObj.toRgb()).a = currentColor.a.toFixed(2))
}

function updateCanvasDimensions() {
    colorsBlock.width = $colorsBlock.width(), colorsBlock.height = $colorsBlock.height(), colorsBlockWidth = colorsBlock.width, colorsBlockHeight = colorsBlock.height, hueSlider.width = $hueSlider.width(), hueSlider.height = $hueSlider.height(), hueSliderWidth = hueSlider.width, hueSliderHeight = hueSlider.height, alphaSlider.width = $alphaSlider.width(), alphaSlider.height = $alphaSlider.height(), alphaSliderWidth = alphaSlider.width, alphaSliderHeight = alphaSlider.height, colorsBlockOffset = $colorsBlock.offset(), hueSliderOffset = $hueSlider.offset(), alphaSliderOffset = $alphaSlider.offset(), fillHueSlider()
}

function fillAlphaSlider(e, t, n) {
    var r;
    alphaSliderCtx.clearRect(0, 0, alphaSliderWidth, alphaSliderHeight), alphaSliderCtx.rect(0, 0, alphaSliderWidth, alphaSliderHeight), (r = $alphaSlider.hasClass("horizontal") ? alphaSliderCtx.createLinearGradient(0, 0, alphaSliderWidth, 0) : alphaSliderCtx.createLinearGradient(0, 0, 0, alphaSliderHeight)).addColorStop(0, "rgba(" + e + ", " + t + ", " + n + ", 0)"), r.addColorStop(1, "rgba(" + e + ", " + t + ", " + n + ", 1)"), alphaSliderCtx.fillStyle = r, alphaSliderCtx.fill()
}

function fillHueSlider() {
    var e;
    hueSliderCtx.rect(0, 0, hueSliderWidth, hueSliderHeight), (e = $hueSlider.hasClass("horizontal") ? hueSliderCtx.createLinearGradient(0, 0, hueSliderWidth, 0) : hueSliderCtx.createLinearGradient(0, 0, 0, hueSliderHeight)).addColorStop(0, "rgba(255, 0, 0, 1)"), e.addColorStop(.17, "rgba(255, 255, 0, 1)"), e.addColorStop(.33, "rgba(0, 255, 0, 1)"), e.addColorStop(.5, "rgba(0, 255, 255, 1)"), e.addColorStop(.66, "rgba(0, 0, 255, 1)"), e.addColorStop(.83, "rgba(255, 0, 255, 1)"), e.addColorStop(1, "rgba(255, 0, 0, 1)"), hueSliderCtx.fillStyle = e, hueSliderCtx.fill()
}

function fillColorsBlock(e, t, n) {
    colorsBlockCtx.rect(0, 0, colorsBlockWidth, colorsBlockHeight), colorsBlockCtx.fillStyle = "rgb(" + e + "," + t + "," + n + ")", colorsBlockCtx.fillRect(0, 0, colorsBlockWidth, colorsBlockHeight);
    var r = colorsBlockCtx.createLinearGradient(0, 0, colorsBlockWidth, 0);
    r.addColorStop(0, "rgba(255,255,255,1)"), r.addColorStop(1, "rgba(255,255,255,0)"), colorsBlockCtx.fillStyle = r, colorsBlockCtx.fillRect(0, 0, colorsBlockWidth, colorsBlockHeight);
    var o = colorsBlockCtx.createLinearGradient(0, 0, 0, colorsBlockHeight - 1);
    o.addColorStop(0, "rgba(0,0,0,0)"), o.addColorStop(1, "rgba(0,0,0,1)"), colorsBlockCtx.fillStyle = o, colorsBlockCtx.fillRect(0, 0, colorsBlockWidth, colorsBlockHeight), displayColorFlag || getColor(), displayColorFlag = !1, fillAlphaSlider(currentColor.r, currentColor.g, currentColor.b), $colorPicker.css("background-color", "rgb(" + currentColor.r + "," + currentColor.g + "," + currentColor.b + ")")
}

function fillColorValues() {
    var e = new tinycolor(currentColor);
    if ("hex" != changedValue && ($hexInput.val(e.toHex().toUpperCase()), $hexInput.removeClass("error")), "rgb" != changedValue && ($rgbInput.removeClass("error"), 1 == currentColor.a ? ($rgbInputGroup.find(".input-group-addon").text("RGB"), $rgbInput.val(currentColor.r + ", " + currentColor.g + ", " + currentColor.b)) : ($rgbInputGroup.find(".input-group-addon").text("RGBA"), $rgbInput.val(currentColor.r + ", " + currentColor.g + ", " + currentColor.b + ", " + currentColor.a))), "hsl" != changedValue) {
        var t = e.toHsl();
        $hslInput.removeClass("error"), 1 == currentColor.a ? ($hslInputGroup.find(".input-group-addon").text("HSL"), $hslInput.val(Math.round(t.h) + ", " + Math.round(100 * t.s) + "%, " + Math.round(100 * t.l) + "%")) : ($hslInputGroup.find(".input-group-addon").text("HSLA"), $hslInput.val(Math.round(t.h) + ", " + Math.round(100 * t.s) + "%, " + Math.round(100 * t.l) + "%, " + t.a))
    }
    if ("hsv" != changedValue) {
        var n = e.toHsv();
        $hsvInput.removeClass("error"), $hsvInput.val(Math.round(n.h) + ", " + Math.round(100 * n.s) + "%, " + Math.round(100 * n.v) + "%")
    }
    "cmyk" != changedValue && ($cmykInput.removeClass("error"), $cmykInput.val(rgbToCmyk(currentColor.r, currentColor.g, currentColor.b))), changedValue = ""
}

function getColorsBlockValue(e, t) {
    if (null == e || null == t) {
        var n = $colorPicker.position();
        e = Math.round(n.left + 12), t = Math.round(n.top + 12)
    }
    var r = ($hueSlider.hasClass("horizontal") ? new tinycolor(getHueValue(Math.round($huePicker.position().left + 7), 5)) : new tinycolor(getHueValue(10, Math.round($huePicker.position().top + 7)))).toHsl().h,
        o = Math.round(e / (colorsBlockWidth - 1) * 100) / 100;
    0 == e && (o = 0), e == colorsBlockWidth - 1 && (o = 1);
    var i = Math.round(100 * (1 - t / (colorsBlockHeight - 1))) / 100;
    return 0 == t && (i = 1), t == colorsBlockHeight - 1 && (i = 0), new tinycolor({
        h: r,
        s: o,
        v: i
    }).toRgb()
}

function getColor() {
    var e = getAlphaValue(),
        t = getColorsBlockValue();
    currentColor = {
        r: t.r,
        g: t.g,
        b: t.b,
        a: e
    };
    var n = new tinycolor(currentColor);
    window.location.hash = e < 1 ? n.toHex8().toUpperCase() : n.toHex().toUpperCase(), fillColorValues(), $color.css("background-color", "rgba(" + currentColor.r + "," + currentColor.g + "," + currentColor.b + "," + e + ")"), getHarmonies(currentColor.r, currentColor.g, currentColor.b)
}

function getHueValue(e, t) {
    if ($hueSlider.hasClass("horizontal")) {
        var n = Math.round(e / (hueSliderWidth - 1) * 360);
        0 == e && (n = 0), e == hueSliderWidth - 1 && (n = 360)
    } else {
        n = Math.round(t / (hueSliderHeight - 1) * 360);
        0 == t && (n = 0), t == hueSliderHeight - 1 && (n = 360)
    }
    return new tinycolor({
        h: n,
        s: 100,
        l: 50
    }).toRgb()
}

function getAlphaValue() {
    var e, t = $alphaPicker.position();
    return 0 == (e = $alphaSlider.hasClass("horizontal") ? ((t.left + 1 + 7) / alphaSliderWidth).toFixed(2) : ((t.top + 1 + 7) / alphaSliderHeight).toFixed(2)) && (e = 0), 1 == e && (e = 1), e
}

function displayColor(e, t, n, r) {
    null == r && (r = 1), currentColor = {
        r: e,
        g: t,
        b: n,
        a: r
    };
    var o = new tinycolor(currentColor);
    window.location.hash = r < 1 ? o.toHex8().toUpperCase() : o.toHex().toUpperCase();
    var i = tinycolor({
            r: e,
            g: t,
            b: n,
            a: r
        }).toHsv(),
        a = tinycolor({
            h: i.h,
            s: 1,
            v: 1
        }).toRgb();
    $colorPicker.css({
        left: i.s * (colorsBlockWidth - 1) - 12 + "px",
        top: (1 - i.v) * (colorsBlockHeight - 1) - 12 + "px"
    }), $hueSlider.hasClass("horizontal") ? ($huePicker.css({
        top: "-3px",
        left: i.h / 360 * hueSliderWidth - 7 + "px"
    }), $alphaPicker.css({
        top: "-3px",
        left: i.a * alphaSliderWidth - 7 + "px"
    })) : ($huePicker.css({
        left: "-3px",
        top: i.h / 360 * hueSliderHeight - 7 + "px"
    }), $alphaPicker.css({
        left: "-3px",
        top: i.a * alphaSliderHeight - 7 + "px"
    })), displayColorFlag = !0, fillColorsBlock(a.r, a.g, a.b), $color.css("background-color", "rgba(" + currentColor.r + "," + currentColor.g + "," + currentColor.b + "," + currentColor.a + ")"), fillColorValues(), getHarmonies(e, t, n)
}

function rgbToCmyk(e, t, n) {
    var r, o, i, a;
    return e /= 255, t /= 255, n /= 255, i = 1 == (a = 1 - Math.max(e, t, n)) ? o = r = 0 : (r = (1 - e - a) / (1 - a), o = (1 - t - a) / (1 - a), (1 - n - a) / (1 - a)), (r = Math.round(100 * r)) + "%, " + (o = Math.round(100 * o)) + "%, " + (i = Math.round(100 * i)) + "%, " + (a = Math.round(100 * a)) + "%"
}

function cmykToRgb(e, t, n, r) {
    var o = 1 - (e = (e /= 100) * (1 - (r /= 100)) + r),
        i = 1 - (t = (t /= 100) * (1 - r) + r),
        a = 1 - (n = (n /= 100) * (1 - r) + r);
    return {
        r: o = Math.round(255 * o),
        g: i = Math.round(255 * i),
        b: a = Math.round(255 * a)
    }
}

function getHarmonies(e, t, n) {
    var r = new tinycolor({
            r: e,
            g: t,
            b: n
        }),
        o = r.complement();
    $complementaryWrap.find(".harmony").each(function(e) {
        var t = r;
        1 == e && (t = o), $(this).find(".color-sample").css({
            "background-color": t.toHexString()
        }), $(this).find("select").val("HEX"), $(this).find(".color-value").text(t.toHex().toUpperCase()).attr("data-hex", t.toHex())
    });
    var i = r.triad();
    $triadicWrap.find(".harmony").each(function(e) {
        var t = i[e];
        $(this).find(".color-sample").css({
            "background-color": t.toHexString()
        }), $(this).find("select").val("HEX"), $(this).find(".color-value").text(t.toHex().toUpperCase()).attr("data-hex", t.toHex())
    });
    var a = r.splitcomplement();
    $splitComplementaryWrap.find(".harmony").each(function(e) {
        var t = a[e];
        $(this).find(".color-sample").css({
            "background-color": t.toHexString()
        }), $(this).find("select").val("HEX"), $(this).find(".color-value").text(t.toHex().toUpperCase()).attr("data-hex", t.toHex())
    });
    var s = r.tetrad();
    $tetradicWrap.find(".harmony").each(function(e) {
        var t = s[e];
        $(this).find(".color-sample").css({
            "background-color": t.toHexString()
        }), $(this).find("select").val("HEX"), $(this).find(".color-value").text(t.toHex().toUpperCase()).attr("data-hex", t.toHex())
    });
    var l = r.analogous(5, 12);
    l = l.sort(function(e, t) {
        var n = e.toHsl(),
            r = t.toHsl();
        return n.h < r.h ? -1 : n.h > r.h ? 1 : 0
    }), $analogousWrap.find(".harmony").each(function(e) {
        var t = l[e];
        $(this).find(".color-sample").css({
            "background-color": t.toHexString()
        }), $(this).find("select").val("HEX"), $(this).find(".color-value").text(t.toHex().toUpperCase()).attr("data-hex", t.toHex())
    });
    var u = r.monochromatic(11);
    u.sort(function(e, t) {
        var n = e.getLuminance(),
            r = t.getLuminance();
        return n < r ? -1 : r < n ? 1 : 0
    }), u.shift(), $monochromaticWrap.find(".harmony").each(function(e) {
        var t = u[e];
        $(this).find(".color-sample").css({
            "background-color": t.toHexString()
        }), $(this).find("select").val("HEX"), $(this).find(".color-value").text(t.toHex().toUpperCase()).attr("data-hex", t.toHex())
    })
}
$(window).on("resize", function() {
    var e = $(this);
    e.outerWidth() <= 1e3 ? $(".main > div").eq(0).hasClass("color-info") && $(".main").append($(".color-info")) : $(".main > div").eq(0).hasClass("color-info") || $(".main").prepend($(".color-info")), e.outerWidth() <= 690 ? ($hueSlider.addClass("horizontal"), $alphaSlider.addClass("horizontal")) : ($hueSlider.removeClass("horizontal"), $alphaSlider.removeClass("horizontal")), e.outerWidth() <= 540 ? $(".color-info > div").eq(0).hasClass("color-values") || $(".color-info").append($(".preview")) : $(".color-info > div").eq(0).hasClass("color-values") && $(".color-info").prepend($(".preview")), updateCanvasDimensions(), displayColor(currentColor.r, currentColor.g, currentColor.b, currentColor.a)
}).resize(), $("body").on("mousedown touchstart", "#colors-block, #color-picker", function(e) {
    e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), colorDrag = !0, changedValue = ""
}), $("body").on("mousedown touchstart", "#hue-slider, #hue-picker", function(e) {
    e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), hueDrag = !0, changedValue = ""
}), $("body").on("mousedown touchstart", "#alpha-slider, #alpha-picker", function(e) {
    e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), alphaDrag = !0, changedValue = ""
}), $("body").on("mouseup touchend", function() {
    alphaDrag = hueDrag = colorDrag = !1
}), $("body").on("mousemove touchmove", function(e) {
    if (e.changedTouches) var t = e.changedTouches[0].pageX,
        n = e.changedTouches[0].pageY;
    else t = e.pageX, n = e.pageY;
    if (colorDrag) {
        var r = t > colorsBlockOffset.left ? t - colorsBlockOffset.left : 0,
            o = n > colorsBlockOffset.top ? n - colorsBlockOffset.top : 0;
        r = r >= parseInt(colorsBlockWidth) ? colorsBlockWidth - 1 : r, o = o >= parseInt(colorsBlockHeight) ? colorsBlockHeight - 1 : o, $colorPicker.css({
            left: r - 12 + "px",
            top: o - 12 + "px"
        });
        var i = getColorsBlockValue(r, o);
        fillAlphaSlider(i.r, i.g, i.b), getColor(), $colorPicker.css("background-color", "rgb(" + i.r + "," + i.g + "," + i.b + ")")
    }
    if (hueDrag) {
        r = t > hueSliderOffset.left ? t - hueSliderOffset.left : 0, o = n > hueSliderOffset.top ? n - hueSliderOffset.top : 0;
        if (r = r >= parseInt(hueSliderWidth) ? hueSliderWidth - 1 : r, o = o >= parseInt(hueSliderHeight) ? hueSliderHeight - 1 : o, $hueSlider.hasClass("horizontal")) {
            $huePicker.css({
                left: r - 7 + "px"
            });
            var a = getHueValue(r, 5)
        } else {
            $huePicker.css({
                top: o - 7 + "px"
            });
            a = getHueValue(10, o)
        }
        fillColorsBlock(a.r, a.g, a.b)
    }
    if (alphaDrag) {
        r = t > alphaSliderOffset.left ? t - alphaSliderOffset.left : 0, o = n > alphaSliderOffset.top ? n - alphaSliderOffset.top : 0;
        r = r >= parseInt(alphaSliderWidth) ? alphaSliderWidth - 1 : r, o = o >= parseInt(alphaSliderHeight) ? alphaSliderHeight - 1 : o, $alphaSlider.hasClass("horizontal") ? $alphaPicker.css({
            left: r - 7 + "px"
        }) : $alphaPicker.css({
            top: o - 7 + "px"
        }), getColor()
    }
}), $colorsBlock.click(function(e) {
    if (changedValue = "", e.changedTouches) var t = e.changedTouches[0].pageX,
        n = e.changedTouches[0].pageY;
    else t = e.pageX, n = e.pageY;
    var r = t - colorsBlockOffset.left,
        o = n - colorsBlockOffset.top;
    $colorPicker.css({
        left: r - 12 + "px",
        top: o - 12 + "px"
    });
    var i = getColorsBlockValue(r, o);
    fillAlphaSlider(i.r, i.g, i.b), getColor(), $colorPicker.css("background-color", "rgb(" + i.r + "," + i.g + "," + i.b + ")")
}), $hueSlider.click(function(e) {
    var t, n;
    changedValue = "", n = e.changedTouches ? (t = e.changedTouches[0].pageX, e.changedTouches[0].pageY) : (t = e.pageX, e.pageY);
    var r, o = t - hueSliderOffset.left,
        i = n - hueSliderOffset.top;
    fillColorsBlock((r = $hueSlider.hasClass("horizontal") ? ($huePicker.css({
        left: o - 7 + "px"
    }), getHueValue(o, 5)) : ($huePicker.css({
        top: i - 7 + "px"
    }), getHueValue(10, i))).r, r.g, r.b)
}), $alphaSlider.click(function(e) {
    var t, n;
    changedValue = "", n = e.changedTouches ? (t = e.changedTouches[0].pageX, e.changedTouches[0].pageY) : (t = e.pageX, e.pageY);
    var r = t - alphaSliderOffset.left,
        o = n - alphaSliderOffset.top;
    $alphaSlider.hasClass("horizontal") ? $alphaPicker.css({
        left: r - 7 + "px"
    }) : $alphaPicker.css({
        top: o - 7 + "px"
    }), getColor()
}), $hexInput.on("keyup input", function() {
    var e = $(this).val();
    if (e != hexOld) {
        if (changedValue = "hex", /[a-f0-9]{6}/i.test(hexOld = e)) {
            var t = new tinycolor(e);
            if (t.isValid()) {
                $(this).removeClass("error");
                var n = t.toRgb();
                displayColor(n.r, n.g, n.b, n.a)
            } else $(this).addClass("error")
        } else $(this).addClass("error")
    }
}), $rgbInput.on("keyup input", function() {
    var e = $(this).val();
    if (e != rgbOld) {
        if (changedValue = "rgb", /^[0-9]{1,3},\s?[0-9]{1,3},\s?[0-9]{1,3}(,\s?[0-9.]{1,4})?$/i.test(rgbOld = e)) {
            if (e.split(",").length - 1 == 3) var t = new tinycolor("rgba (" + e + ")");
            else t = new tinycolor("rgb (" + e + ")");
            if (t.isValid()) {
                $(this).removeClass("error");
                var n = t.toRgb();
                displayColor(n.r, n.g, n.b, n.a), 1 != n.a ? $rgbInputGroup.find(".input-group-addon").text("RGBA") : $rgbInputGroup.find(".input-group-addon").text("RGB")
            } else $(this).addClass("error")
        } else $(this).addClass("error")
    }
}), $hslInput.on("keyup input", function() {
    var e = $(this).val();
    if (e != hslOld) {
        if (changedValue = "hsl", /^[0-9]{1,3},\s?[0-9]{1,3}%,\s?[0-9]{1,3}%(,\s?[0-9.]{1,4})?$/i.test(hslOld = e)) {
            if (e.split(",").length - 1 == 3) var t = new tinycolor("hsla (" + e + ")");
            else t = new tinycolor("hsl (" + e + ")");
            if (t.isValid()) {
                $(this).removeClass("error");
                var n = t.toRgb();
                displayColor(n.r, n.g, n.b, n.a), 1 != n.a ? $hslInputGroup.find(".input-group-addon").text("HSLA") : $hslInputGroup.find(".input-group-addon").text("HSL")
            } else $(this).addClass("error")
        } else $(this).addClass("error")
    }
}), $hsvInput.on("keyup input", function() {
    var e = $(this).val();
    if (e != hsvOld) {
        if (changedValue = "hsv", /^[0-9]{1,3},\s?[0-9]{1,3}%,\s?[0-9]{1,3}%$/i.test(hsvOld = e)) {
            var t = new tinycolor("hsv (" + e + ")");
            if (t.isValid()) {
                $(this).removeClass("error");
                var n = t.toRgb();
                displayColor(n.r, n.g, n.b, n.a)
            } else $(this).addClass("error")
        } else $(this).addClass("error")
    }
}), $cmykInput.on("keyup input", function() {
    var e = $(this).val();
    if (e != cmykOld) {
        cmykOld = e;
        var t = /^([0-9]{1,3})%,\s?([0-9]{1,3})%,\s?([0-9]{1,3})%,\s?([0-9]{1,3})%$/i;
        if (changedValue = "cmyk", t.test(e)) {
            var n = e.match(t),
                r = cmykToRgb(n[1], n[2], n[3], n[4]);
            $(this).removeClass("error"), displayColor(r.r, r.g, r.b, 1)
        } else $(this).addClass("error")
    }
}), $(".harmony select").change(function() {
    var e, t = $(this).next().find(".color-value"),
        n = t.attr("data-hex"),
        r = $(this).val(),
        o = "",
        i = new tinycolor("#" + n);
    "HEX" == r && (o = n.toUpperCase()), "RGB" == r && (o = (e = i.toRgb()).r + ", " + e.g + ", " + e.b);
    if ("HSL" == r) {
        var a = i.toHsl();
        o = Math.round(a.h) + ", " + Math.round(100 * a.s) + "%, " + Math.round(100 * a.l) + "%"
    }
    if ("HSV" == r) {
        var s = i.toHsv();
        o = Math.round(s.h) + ", " + Math.round(100 * s.s) + "%, " + Math.round(100 * s.v) + "%"
    }
    "CMYK" == r && (o = rgbToCmyk((e = i.toRgb()).r, e.g, e.b));
    t.text(o)
});