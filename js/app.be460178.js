(function (t) {
  function e(e) {
    for (
      var a, i, o = e[0], c = e[1], l = e[2], u = 0, d = [];
      u < o.length;
      u++
    )
      (i = o[u]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && d.push(r[i][0]),
        (r[i] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    f && f(e);
    while (d.length) d.shift()();
    return s.push.apply(s, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < s.length; e++) {
      for (var n = s[e], a = !0, i = 1; i < n.length; i++) {
        var o = n[i];
        0 !== r[o] && (a = !1);
      }
      a && (s.splice(e--, 1), (t = c((c.s = n[0]))));
    }
    return t;
  }
  var a = {},
    i = { app: 0 },
    r = { app: 0 },
    s = [];
  function o(t) {
    return (
      c.p +
      "js/" +
      ({}[t] || t) +
      "." +
      {
        "chunk-0294ec15": "d1182188",
        "chunk-2cf5fa35": "7d2e9367",
        "chunk-e7d8d87a": "11af0ad9",
        "chunk-2d0af85a": "354309a1",
        "chunk-2d0bac5e": "d0bb20ee",
        "chunk-2d0bae8e": "45554ba1",
        "chunk-2d0bdce8": "dc67dc5e",
        "chunk-2d0c7741": "c705d1a8",
        "chunk-2d0cf2e4": "9e02007c",
        "chunk-2d0d721b": "1b6fd84a",
        "chunk-2d0e264d": "ccdf0003",
        "chunk-2d0e5968": "cc6dfbb8",
        "chunk-2d0f081e": "19389fa6",
        "chunk-2d21371c": "a2d6a456",
        "chunk-2d221a28": "a465cc0d",
        "chunk-2d225473": "ce1266e0",
      }[t] +
      ".js"
    );
  }
  function c(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function (t) {
    var e = [],
      n = { "chunk-0294ec15": 1, "chunk-2cf5fa35": 1, "chunk-e7d8d87a": 1 };
    i[t]
      ? e.push(i[t])
      : 0 !== i[t] &&
        n[t] &&
        e.push(
          (i[t] = new Promise(function (e, n) {
            for (
              var a =
                  "css/" +
                  ({}[t] || t) +
                  "." +
                  {
                    "chunk-0294ec15": "a7faa074",
                    "chunk-2cf5fa35": "dacb6085",
                    "chunk-e7d8d87a": "1d2c4aa3",
                    "chunk-2d0af85a": "31d6cfe0",
                    "chunk-2d0bac5e": "31d6cfe0",
                    "chunk-2d0bae8e": "31d6cfe0",
                    "chunk-2d0bdce8": "31d6cfe0",
                    "chunk-2d0c7741": "31d6cfe0",
                    "chunk-2d0cf2e4": "31d6cfe0",
                    "chunk-2d0d721b": "31d6cfe0",
                    "chunk-2d0e264d": "31d6cfe0",
                    "chunk-2d0e5968": "31d6cfe0",
                    "chunk-2d0f081e": "31d6cfe0",
                    "chunk-2d21371c": "31d6cfe0",
                    "chunk-2d221a28": "31d6cfe0",
                    "chunk-2d225473": "31d6cfe0",
                  }[t] +
                  ".css",
                r = c.p + a,
                s = document.getElementsByTagName("link"),
                o = 0;
              o < s.length;
              o++
            ) {
              var l = s[o],
                u = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (u === a || u === r)) return e();
            }
            var d = document.getElementsByTagName("style");
            for (o = 0; o < d.length; o++) {
              (l = d[o]), (u = l.getAttribute("data-href"));
              if (u === a || u === r) return e();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = e),
              (f.onerror = function (e) {
                var a = (e && e.target && e.target.src) || r,
                  s = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + a + ")"
                  );
                (s.code = "CSS_CHUNK_LOAD_FAILED"),
                  (s.request = a),
                  delete i[t],
                  f.parentNode.removeChild(f),
                  n(s);
              }),
              (f.href = r);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(f);
          }).then(function () {
            i[t] = 0;
          }))
        );
    var a = r[t];
    if (0 !== a)
      if (a) e.push(a[2]);
      else {
        var s = new Promise(function (e, n) {
          a = r[t] = [e, n];
        });
        e.push((a[2] = s));
        var l,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          c.nc && u.setAttribute("nonce", c.nc),
          (u.src = o(t));
        var d = new Error();
        l = function (e) {
          (u.onerror = u.onload = null), clearTimeout(f);
          var n = r[t];
          if (0 !== n) {
            if (n) {
              var a = e && ("load" === e.type ? "missing" : e.type),
                i = e && e.target && e.target.src;
              (d.message =
                "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = a),
                (d.request = i),
                n[1](d);
            }
            r[t] = void 0;
          }
        };
        var f = setTimeout(function () {
          l({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = l), document.head.appendChild(u);
      }
    return Promise.all(e);
  }),
    (c.m = t),
    (c.c = a),
    (c.d = function (t, e, n) {
      c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (c.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (c.t = function (t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          c.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (c.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return c.d(e, "a", e), e;
    }),
    (c.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (c.p = "/"),
    (c.oe = function (t) {
      throw (console.error(t), t);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var d = 0; d < l.length; d++) e(l[d]);
  var f = u;
  s.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  "025e": function (t, e, n) {
    "use strict";
    n.d(e, "c", function () {
      return r;
    }),
      n.d(e, "g", function () {
        return o;
      }),
      n.d(e, "a", function () {
        return c;
      }),
      n.d(e, "d", function () {
        return u;
      }),
      n.d(e, "h", function () {
        return d;
      }),
      n.d(e, "b", function () {
        return f;
      }),
      n.d(e, "f", function () {
        return p;
      }),
      n.d(e, "e", function () {
        return h;
      });
    n("96cf"), n("4f37"), n("ac6a"), n("f3e2"), n("6d67"), n("a481");
    var a = n("75fc"),
      i = n("3b8d");
    function r() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = Object(i["a"])(
          regeneratorRuntime.mark(function t() {
            var e, n;
            return regeneratorRuntime.wrap(
              function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0), (t.next = 3), fetch("./data/about.json")
                      );
                    case 3:
                      return (e = t.sent), (t.next = 6), e.json();
                    case 6:
                      return (n = t.sent), t.abrupt("return", n);
                    case 10:
                      return (
                        (t.prev = 10),
                        (t.t0 = t["catch"](0)),
                        console.error(new Error(t.t0)),
                        t.abrupt("return", {})
                      );
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 10]]
            );
          })
        )),
        s.apply(this, arguments)
      );
    }
    function o(t, e) {
      return (
        (t = Math.ceil(t)),
        (e = Math.floor(e)),
        Math.floor(Math.random() * (e - t + 1)) + t
      );
    }
    var c = {
      get: function (t) {
        return document.querySelector(t);
      },
      getAll: function (t) {
        return Object(a["a"])(document.querySelectorAll(t));
      },
    };
    function l(t) {
      return t.toLowerCase().replace(/([-_\s][a-z])/g, function (t) {
        return t.toUpperCase().replace(/[-_\s]/g, "");
      });
    }
    function u(t) {
      var e = c.get(t);
      if (!e) return {};
      var n = ["div", "span", "svg", "g", "ellipse", "path"].map(function (e) {
          return "".concat(t, " ").concat(e);
        }),
        a = c.getAll(n.join(","));
      return (
        a.forEach(function (t) {
          if (t.classList[0]) {
            var n = t.classList[0].trim();
            e[l(n)] = t || ".".concat(n);
          }
        }),
        e
      );
    }
    function d() {
      var t;
      (t = document.body.classList).remove.apply(t, arguments);
    }
    function f() {
      var t;
      document.querySelector("#app.page-home") &&
        (t = document.body.classList).add.apply(t, arguments);
    }
    function p(t) {
      return "REVERSE" === t.scrollDirection;
    }
    function h(t) {
      return "FORWARD" === t.scrollDirection;
    }
  },
  "031b": function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            staticClass: "ico",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              role: "img",
              "aria-labelledby": "LinkedinIcoTitle",
            },
          },
          [
            e("title", { attrs: { id: "LinkedinIcoTitle" } }, [
              t._v("LinkedIn logo"),
            ]),
            e("path", {
              attrs: {
                stroke: "none",
                d: "M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z",
              },
            }),
          ]
        );
      },
      i = [],
      r = { name: "LinkedInIcon" },
      s = r,
      o = n("2877"),
      c = Object(o["a"])(s, a, i, !1, null, null, null);
    e["a"] = c.exports;
  },
  "054e": function (t, e, n) {
    "use strict";
    n("f550");
  },
  "0668": function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [e("AstronautSVG")], 1);
      },
      i = [],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("f3e2"),
        n("d25f"),
        n("ac6a"),
        n("456d"),
        n("bd86")),
      s = n("5fb0"),
      o = n("025e"),
      c = n("3762"),
      l = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              id: "astro",
              viewBox: "0 0 100 100",
              "aria-labelledby": "astroDesc",
            },
          },
          [
            e("desc", { attrs: { id: "astroDesc" } }, [
              t._v(
                "\n    An astronaut in a purple space suit, floating in space trying to reach for\n    his coffee cup\n  "
              ),
            ]),
            e("g", { staticClass: "astro-astro" }, [
              e("g", { staticClass: "astro-tube" }, [
                e("path", {
                  attrs: {
                    fill: "none",
                    stroke: "#e2f1f7",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "5.061",
                    d: "M62.3 58.8s10.4 3.6 14.5-8.1-8.6-18.4-8.6-18.4",
                  },
                }),
              ]),
              e("g", { staticClass: "astro-l-arm" }, [
                e("path", {
                  attrs: {
                    fill: "#8b55bb",
                    d: "M34.4,58.8L16.7,45.3c-1.2-0.9-1.4-2.6-0.5-3.8l4.3-5.7c0.9-1.2,2.6-1.4,3.8-0.5L42,48.8 C42,48.8,34.4,58.8,34.4,58.8z",
                  },
                }),
              ]),
              e("g", { staticClass: "astro-l-leg" }, [
                e("path", {
                  attrs: {
                    fill: "#8b55bb",
                    d: "M38.9 76.7L18.3 91.4c-1.2.9-2.9.6-3.8-.6L8 81.7c-.9-1.2-.6-2.9.6-3.8l20.6-14.8c3.7-2.7 9-1.8 11.6 1.9 2.7 3.8 1.8 9-1.9 11.7z",
                  },
                }),
              ]),
              e("g", { staticClass: "astro-head" }, [
                e("path", {
                  attrs: {
                    fill: "#a95ed4",
                    d: "M78.3 28.9c0 7.1-3.1 13.4-8 17.8-4.2 3.8-9.8 6-15.9 6-7.9 0-14.8-3.8-19.2-9.6-3-4-4.7-8.9-4.7-14.2C30.5 15.7 41.2 5 54.4 5s23.9 10.7 23.9 23.9z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#563388",
                    d: "M70.3 46.7c-4.2 3.8-9.8 6-15.9 6-7.9 0-14.8-3.8-19.2-9.6 4.4-3.1 9.7-4.9 15.5-4.9 7.7 0 14.7 3.3 19.6 8.5z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#170609",
                    d: "M32.4 28.8c-.4-7.3 3.8-15.3 11.5-18.3s21-1.2 23.4 9.5c2.4 10.7-7.8 10.9-17 11.8-9.2.9-17.2 9.6-17.9-3z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#fff",
                    d: "M46.8 14.2c4.7-1 9.1-.8 12.3.3 0-.5-.7-1.2-2.6-1.8-12-3.8-20.8 6.9-20.8 6.9h.1c2.4-2.4 6.4-4.4 11-5.4z",
                  },
                }),
              ]),
              e("g", { staticClass: "astro-body" }, [
                e("path", {
                  attrs: {
                    fill: "#a95ed4",
                    d: "M68.9 61.3c.2-1.5 1.3-2.8 2.8-3.1l19.2-4c1.1-.2 1.8-1.3 1.6-2.5l-1.9-8.6c-.2-1.1-1.3-1.8-2.5-1.6L67.6 46c-18.6-13.4-40.9.7-40.1 19 .8 21 38.6 25.8 41.4-3.7z",
                  },
                }),
              ]),
              e("g", { staticClass: "astro-r-leg" }, [
                e("path", {
                  attrs: {
                    fill: "#a95ed4",
                    d: "M44.4 75.9l-8.5 17.6c-.7 1.4-2.3 1.9-3.6 1.3l-10.1-4.9c-1.4-.7-1.9-2.3-1.3-3.6l8.5-17.6c2-4.1 7-5.9 11.1-3.9 4.2 2 5.9 7 3.9 11.1z",
                  },
                }),
              ]),
            ]),
          ]
        );
      },
      u = [],
      d = n("2877"),
      f = {},
      p = Object(d["a"])(f, l, u, !1, null, null, null),
      h = p.exports;
    function m(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function b(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? m(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : m(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var g = {
        name: "AstronautCharacter",
        components: { AstronautSVG: h },
        mixins: [c["a"]],
        methods: {
          init: function () {
            this.loop
              .set(".astro-head", {
                rotation: -15,
                transformOrigin: "50% 90%",
                yPercent: 0,
                xPercent: -10,
              })
              .set(".astro-tube", { rotation: -15, transformOrigin: "0% 100%" })
              .addLabel("start", 0)
              .to(
                ".astro-head",
                4,
                b({ rotation: 10, yPercent: 5, xPercent: 10 }, s["b"]),
                "start"
              )
              .to(
                ".astro-tube",
                4,
                b({ rotation: 20, yPercent: 10 }, s["b"]),
                "start"
              )
              .to(
                ".astro-l-arm",
                2,
                b({ rotation: -20, transformOrigin: "90% 90%" }, s["d"]),
                "start"
              )
              .fromTo(
                ".astro-l-leg",
                2,
                { rotation: 10, transformOrigin: "90% 10%" },
                b({ rotation: -10 }, s["b"]),
                "start"
              )
              .fromTo(
                ".astro-r-leg",
                2,
                { rotation: -10, transformOrigin: "90% 10%" },
                b({ rotation: 10 }, s["b"]),
                "start"
              )
              .to(
                ".astro-body",
                1,
                b({ scaleX: 1.06, transformOrigin: "50% 50%" }, s["b"]),
                "start"
              )
              .to(
                ".astro-astro",
                5,
                b(
                  {
                    yPercent: Object(o["g"])(-40, -20),
                    xPercent: Object(o["g"])(-10, 10),
                    rotation: Object(o["g"])(-120, 120),
                    transformOrigin: "50% 50%",
                  },
                  s["b"]
                ),
                "start"
              );
          },
        },
      },
      v = g,
      y = Object(d["a"])(v, a, i, !1, null, null, null);
    e["a"] = y.exports;
  },
  "0929": function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            staticClass: "ico",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              role: "img",
              "aria-labelledby": "GithubIcoTitle",
            },
          },
          [
            e("title", { attrs: { id: "GithubIcoTitle" } }, [
              t._v("GitHub logo"),
            ]),
            e("path", {
              attrs: {
                stroke: "none",
                "fill-rule": "evenodd",
                d: "M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z",
                "clip-rule": "evenodd",
              },
            }),
          ]
        );
      },
      i = [],
      r = { name: "GithubIcon" },
      s = r,
      o = n("2877"),
      c = Object(o["a"])(s, a, i, !1, null, null, null);
    e["a"] = c.exports;
  },
  "0bb5": function (t, e, n) {},
  "0c45": function (t, e, n) {},
  "0d98": function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [e("ETSVG")], 1);
      },
      i = [],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("f3e2"),
        n("d25f"),
        n("ac6a"),
        n("456d"),
        n("bd86")),
      s = n("5fb0"),
      o = n("025e"),
      c = n("3762"),
      l = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              id: "et",
              viewBox: "0 0 100 200",
              "aria-labelledby": "etDesc",
            },
          },
          [
            e("desc", { attrs: { id: "etDesc" } }, [
              t._v(
                "\n    A little green alien, flying around in its purple spaceship\n  "
              ),
            ]),
            e(
              "linearGradient",
              {
                attrs: {
                  id: "etLight",
                  x1: "0%",
                  y1: "0%",
                  x2: "0%",
                  y2: "100%",
                },
              },
              [
                e("stop", {
                  attrs: {
                    offset: "0%",
                    "stop-color": "#f00",
                    "stop-opacity": ".75",
                  },
                }),
                e("stop", {
                  attrs: {
                    offset: "100%",
                    "stop-color": "#f00",
                    "stop-opacity": "0",
                  },
                }),
              ],
              1
            ),
            e(
              "linearGradient",
              {
                attrs: {
                  id: "etLight2",
                  x1: "0%",
                  y1: "0%",
                  x2: "0%",
                  y2: "100%",
                },
              },
              [
                e("stop", {
                  attrs: {
                    offset: "0%",
                    "stop-color": "#0ff",
                    "stop-opacity": ".75",
                  },
                }),
                e("stop", {
                  attrs: {
                    offset: "100%",
                    "stop-color": "#0ff",
                    "stop-opacity": "0",
                  },
                }),
              ],
              1
            ),
            e("g", { staticClass: "et-et" }, [
              e("g", { staticClass: "et-light" }, [
                e("path", {
                  attrs: {
                    fill: "url(#etLight2)",
                    d: "M50 12.5L0 191.6h100L50 12.5z",
                  },
                }),
              ]),
              e("g", { staticClass: "et-ship" }, [
                e("path", {
                  attrs: {
                    fill: "#5f1b9a",
                    d: "M60.7 20.2c.1-2.4-5-5.2-10.4-5.3s-10.7 2-10.8 4.5c0 1.4 1.5 3.2 3.9 4.5l-.1 2.5c0 .1.1.3.3.3H45c.1 0 .3-.1.3-.3l.1-1.7c1.4.5 2.9.9 4.5.9 1.7.1 3.4-.2 4.9-.7l-.1 1.7c0 .1.1.3.3.3h1.4c.1 0 .3-.1.3-.3l.1-2.5c2.3-1 3.9-2.5 3.9-3.9z",
                  },
                }),
                e("ellipse", {
                  attrs: {
                    cx: "50.3",
                    cy: "17.2",
                    fill: "#a95ed4",
                    rx: "11.8",
                    ry: "6.8",
                  },
                }),
                e("g", { staticClass: "et-body" }, [
                  e("path", {
                    attrs: {
                      fill: "#00b1e5",
                      d: "M50.2 19.7c1.6.1 3.1-.2 4.3-.8 0-.1 0-.2.1-.4l.2-5.9c.1-2.3-1.8-4.3-4.2-4.4-2.4-.1-4.4 1.8-4.5 4.1l-.2 5.9v.5c1.2.8 2.7 1 4.3 1z",
                    },
                  }),
                  e("g", { staticClass: "et-eye" }, [
                    e("ellipse", {
                      attrs: {
                        cx: "50.4",
                        cy: "13.3",
                        fill: "#fff",
                        rx: "2.5",
                        ry: "2.5",
                      },
                    }),
                    e("ellipse", {
                      attrs: {
                        cx: "50.4",
                        cy: "13.3",
                        fill: "#004e88",
                        rx: "1",
                        ry: "1",
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      u = [],
      d = n("2877"),
      f = {},
      p = Object(d["a"])(f, l, u, !1, null, null, null),
      h = p.exports;
    function m(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function b(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? m(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : m(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var g = {
        name: "ETCharacter",
        components: { ETSVG: h },
        mixins: [c["a"]],
        methods: {
          init: function () {
            var t = document.querySelector(".et-et"),
              e = document.querySelector(".et-ship"),
              n = document.querySelector(".et-eye");
            this.loop
              .clear()
              .addLabel("start", 0)
              .to(
                e,
                0.25,
                b({ rotationZ: 5, transformOrigin: "50% 75%" }, s["b"]),
                "start"
              )
              .fromTo(
                n,
                0.05,
                { scaleY: 0.1, transformOrigin: "50% 50%" },
                { scaleY: 1, repeat: -1, repeatDelay: 1.618 },
                "start"
              )
              .to(
                t,
                12,
                b(
                  {
                    bezier: {
                      curviness: 1.25,
                      values: [
                        {
                          xPercent: Object(o["g"])(-100, 50),
                          yPercent: Object(o["g"])(-40, 40),
                          rotationZ: Object(o["g"])(15, 30),
                        },
                        {
                          xPercent: Object(o["g"])(-100, 50),
                          yPercent: Object(o["g"])(-40, 40),
                          rotationZ: Object(o["g"])(-30, -15),
                        },
                        {
                          xPercent: Object(o["g"])(-100, 50),
                          yPercent: Object(o["g"])(-40, 40),
                          rotationZ: Object(o["g"])(15, 30),
                        },
                        {
                          xPercent: Object(o["g"])(-100, 50),
                          yPercent: Object(o["g"])(-40, 40),
                          rotationZ: Object(o["g"])(-30, -15),
                        },
                        {
                          xPercent: Object(o["g"])(-100, 50),
                          yPercent: Object(o["g"])(-40, 40),
                          rotationZ: Object(o["g"])(15, 30),
                        },
                        {
                          xPercent: Object(o["g"])(-100, 50),
                          yPercent: Object(o["g"])(-40, 40),
                          rotationZ: Object(o["g"])(-30, -15),
                        },
                      ],
                      autoRotate: !0,
                    },
                    transformOrigin: "50% 5%",
                  },
                  s["a"]
                ),
                "start"
              );
          },
        },
      },
      v = g,
      y = Object(d["a"])(v, a, i, !1, null, null, null);
    e["a"] = y.exports;
  },
  "14ca": function (t, e, n) {},
  "1f7b": function (t, e, n) {},
  2599: function (t, e, n) {
    t.exports = n.p + "media/smw_princess_help.6db08fe8.ogg";
  },
  "26a0": function (t, e, n) {
    "use strict";
    n("8a09");
  },
  "27fa": function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [e("DinoSVG")], 1);
      },
      i = [],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("f3e2"),
        n("d25f"),
        n("ac6a"),
        n("456d"),
        n("bd86")),
      s = n("025e"),
      o = n("3762"),
      c = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              id: "dino",
              viewBox: "0 0 100 100",
              "aria-labelledby": "dinoDesc",
            },
          },
          [
            e("desc", { attrs: { id: "dinoDesc" } }, [
              t._v(
                "\n    A purple dinosaur with a red headset, listening and dancing to the music\n  "
              ),
            ]),
            e("g", { staticClass: "dino-dino" }, [
              e("g", { staticClass: "dino-l-arm" }, [
                e("path", {
                  attrs: {
                    fill: "none",
                    stroke: "#7f4fb2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "5.138",
                    d: "M55,63.8c0,0-8,2.9-12.6,0.9s-6.3-6.3-6.2-10.2",
                  },
                }),
              ]),
              e("g", { staticClass: "dino-tail" }, [
                e("path", {
                  attrs: {
                    fill: "#7f4fb2",
                    d: "M69 74.1c5.7.7 10.7-1.8 12.8-3 .5-.3 1.1.1 1 .7-1.8 11.9-23.1 13.6-23.9 14L69 74.1z",
                  },
                }),
              ]),
              e("g", { staticClass: "dino-l-leg" }, [
                e("path", {
                  attrs: {
                    fill: "#7f4fb2",
                    d: "M55.3 93.6c-.2-2.2-.4-6.9-.1-10.7.2-2-1.2-3.7-3.2-4-1.8-.3-3.5.9-4 2.6l-3.6 11.8c-.3.8.3 1.6 1.2 1.6H54c.8.1 1.3-.5 1.3-1.3z",
                  },
                }),
              ]),
              e("g", { staticClass: "dino-head" }, [
                e("g", { staticClass: "dino-back-hair" }, [
                  e("path", {
                    attrs: {
                      fill: "#002c58",
                      d: "M59.6 15.7S59.7 7 56.8 7s-7 7.4-7 7.4l9.8 1.3z",
                    },
                  }),
                  e("path", {
                    attrs: {
                      fill: "#002c58",
                      d: "M66.5 19.7s2.3-8.4-.5-9.1-8.6 5.4-8.6 5.4l9.1 3.7z",
                    },
                  }),
                ]),
                e("path", {
                  staticClass: "teeth1",
                  attrs: {
                    fill: "#e7edf1",
                    d: "M47.1 48.6H44l1.2 2.7c.1.3.6.3.7 0l1.2-2.7z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#ab63d6",
                    d: "M66.5 53c-.9-2.1-1.2-5.3-1.2-8.9 0-7.4 1.5-16.6 2.1-22.1.3-2.5-1.3-4.9-3.8-5.5-2.7-.6-6.6-1.5-10.8-2-10.8-1.2-24.7-.5-31.3 10-1.8 2.8-8 17.9-1.1 21.7 5.6 3 24.3 3.4 30.1 2.7-.3 4-11.5 10.7-11.5 22.3 0 9.1 7.7 16.3 16.9 16.3 9.3 0 16.9-7.6 16.9-16.9 0-7.4-4.6-13.6-6.3-17.6z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#9660c7",
                    d: "M67.5 22c-.7 5.4-2.1 14.6-2.1 22.1 0 0-3.8.6-4.8-8.7s7.1-18.6-7.7-20.8h-.1c4.3.5 8.1 1.3 10.8 2 2.5.6 4.2 2.9 3.9 5.4z",
                  },
                }),
                e("path", {
                  staticClass: "mouth-chillout",
                  attrs: {
                    fill: "none",
                    stroke: "#002c58",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": ".428",
                    d: "M47.7 49.1c9 .1 12.9-2 14-5.5",
                  },
                }),
                e("path", {
                  staticClass: "mouth-fuck-yeah",
                  staticStyle: { display: "none" },
                  attrs: {
                    fill: "none",
                    stroke: "#002c58",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": ".428",
                    d: "M54.6,47.1c-0.6,0-0.7,1-3,1",
                  },
                }),
                e("path", {
                  staticClass: "teeth2",
                  attrs: {
                    fill: "#e7edf1",
                    d: "M47.7 49.1l1.6 3c.2.3.7.3.9 0l1.2-2.6.2-.5-3.9.1z",
                  },
                }),
                e("g", { staticClass: "dino-headphone" }, [
                  e("path", {
                    attrs: {
                      fill: "#ff0110",
                      d: "M71.5 28.1l.6-3.5-6.2-.6-.9 3.8 6.5.3z",
                    },
                  }),
                  e("path", {
                    attrs: {
                      fill: "#ff0110",
                      d: "M61.1 35.1c0 7.9 6.3 8 8.5 8 3.5 0 4.1-3.6 4.1-8s-.6-8-4.1-8c-4.1 0-8.5.9-8.5 8z",
                    },
                  }),
                  e("path", {
                    attrs: {
                      fill: "#ff5153",
                      d: "M63.8 35.1c0 4.5 2.3 8 5.8 8 3 0 6.3-3.6 6.3-8s-2.8-8-6.3-8-5.8 3.5-5.8 8z",
                    },
                  }),
                  e("path", {
                    attrs: {
                      fill: "#ff5153",
                      d: "M33.4 15.7c-.4-.4-.4-.7-.3-1.2 2.1-12.1 24.2-7.2 34-3.8 8.3 3 6.7 11 5.8 14-.2.7-.9 1.1-1.5 1l-4.4-.3h-.7c-.9-.1-1.6-1-1.3-1.9.5-1.4 1-3.4 1.2-5.4.2-2.6-.4-5.1-3-5.9-5.7-1.6-24-7.1-27.2 2.8 0 0-.8.2-1.4.3-.5.2-1.2.4-1.2.4z",
                    },
                  }),
                  e("path", {
                    staticClass: "dino-sounds",
                    attrs: {
                      "vector-effect": "non-scaling-stroke",
                      fill: "none",
                      stroke: "#fff",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": "10",
                      d: "M76.5 32.5c2.1-1.8 4.4-3.5 6.7-4.9m-10 .5c.7-1.7.8-7.1-.6-8.6m4.6 18.7c2.5-.4 2 .1 2 2.3 2-.8 5.4.3 7.2 1.8m-11.6.8c-4 3.8 3.6 1.8 3 4.3-.3.9-2.5 1.4-2.4 2.5.7.8 1.7 1.2 2.8 1.3",
                    },
                  }),
                ]),
                e("g", { staticClass: "dino-eye" }, [
                  e("circle", {
                    attrs: { cx: "53", cy: "40.3", r: "2.8", fill: "#002c58" },
                  }),
                  e("circle", {
                    staticClass: "dino-bright",
                    attrs: { cx: "53.7", cy: "38.7", r: ".7", fill: "#e7edf1" },
                  }),
                ]),
                e("g", { staticClass: "dino-front-hair" }, [
                  e("path", {
                    attrs: {
                      fill: "#002c58",
                      d: "M34.8 15.3c-.3-.6-2.8-4.8-4.4-3.7-1.5 1.1-.9 4.8-.8 5.6 1.7-.8 3.4-1.4 5.2-1.9z",
                    },
                  }),
                  e("path", {
                    attrs: {
                      fill: "#002c58",
                      d: "M42.2 14.2c-.5-1.1-3.2-6.6-4.8-6-1.4.5-2.1 5.1-2.4 7.1 2.3-.6 4.8-1 7.2-1.1z",
                    },
                  }),
                  e("path", {
                    attrs: {
                      fill: "#002c58",
                      d: "M50.8 14.4c-.2-1.4-2-9.4-4.2-9.4-2.3 0-4.1 8-4.3 9.2 2.9-.2 5.8-.1 8.5.2z",
                    },
                  }),
                ]),
              ]),
              e("g", { staticClass: "dino-r-leg" }, [
                e("path", {
                  attrs: {
                    fill: "#ab63d6",
                    d: "M67.4 93.6c-.2-2.2-.4-6.9-.1-10.7.2-2-1.2-3.7-3.2-4-1.8-.3-3.5.9-4 2.6l-3.6 11.8c-.3.8.3 1.6 1.2 1.6h8.4c.8.1 1.4-.5 1.3-1.3z",
                  },
                }),
              ]),
              e("g", { staticClass: "dino-r-arm" }, [
                e("path", {
                  attrs: {
                    fill: "none",
                    stroke: "#ae71db",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "5.138",
                    d: "M64.8 59.4s4.1 6.6-.6 8.3c-4.8 1.6-9-.3-11.5-3.3",
                  },
                }),
              ]),
            ]),
          ]
        );
      },
      l = [],
      u = n("2877"),
      d = {},
      f = Object(u["a"])(d, c, l, !1, null, null, null),
      p = f.exports,
      h = n("5fb0");
    function m(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function b(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? m(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : m(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var g = [
        "https://open.spotify.com/track/2jvuMDqBK04WvCYYz5qjvG?si=J8VxjC6BR2Kg4Y6eXHqQCQ",
        "https://open.spotify.com/track/32bJv8V2Xgi5mtxdPcsi8B?si=enqG9uk2Q6SYhhAZtRimGQ",
        "https://open.spotify.com/track/1pYBTRBbp3PCcdqoke2QSN?si=IMrSO7bhTJCrLgdvwj46xQ",
        "https://open.spotify.com/track/2oPoWNzWrFonvqrkZtmX52?si=jgc8oNB_Qdqx1vnU0gKnLA",
      ],
      v = {
        name: "DinoCharacter",
        components: { DinoSVG: p },
        mixins: [o["a"]],
        data: function () {
          return { rhythm: 0.3, song: Object(s["g"])(1, 4) };
        },
        methods: {
          init: function () {
            var t = this,
              e = document.querySelector(".dino-head"),
              n = document.querySelector(".dino-l-arm"),
              a = document.querySelector(".dino-r-arm"),
              i = document.querySelector(".dino-l-leg"),
              r = document.querySelector(".dino-r-leg"),
              s = document.querySelector(".dino-tail"),
              o = document.querySelector(".dino-eye"),
              c = document.querySelector(".dino-headphone"),
              l = document.querySelector(".dino-bright"),
              u = document.querySelector("#dino .teeth1"),
              d = document.querySelector("#dino .teeth2"),
              f = document.querySelector("#dino .mouth-chillout"),
              p = document.querySelector("#dino .mouth-fuck-yeah"),
              m = 32 * this.rhythm;
            switch (this.song) {
              case 1:
                (l.style.display = "none"),
                  (u.style.display = "none"),
                  (d.style.display = "none"),
                  (f.style.display = "none"),
                  (p.style.display = "");
                break;
              case 2:
                (m = 8 * this.rhythm),
                  (this.rhythm = 1),
                  (l.style.display = "none"),
                  (u.style.display = "none"),
                  (d.style.display = "none"),
                  (f.style.display = "none"),
                  (p.style.display = "");
                break;
              case 3:
                this.rhythm = 0.2;
                break;
            }
            document
              .querySelector(".dino-head")
              .addEventListener("click", function () {
                window.open(g[t.song - 1]);
              }),
              this.loop
                .addLabel("start", 0)
                .to(
                  i,
                  this.rhythm,
                  b({ skewX: -20, transformOrigin: "50% 100%" }, h["a"]),
                  "start"
                )
                .to(
                  r,
                  this.rhythm,
                  b({ skewX: 20, transformOrigin: "50% 100%" }, h["a"]),
                  "start"
                )
                .to(
                  c,
                  this.rhythm / 2,
                  b({ scale: 1.1, transformOrigin: "20% 20%" }, h["a"]),
                  "start"
                )
                .to([n, a], this.rhythm, b({ yPercent: 20 }, h["b"]), "start")
                .to(
                  s,
                  this.rhythm,
                  b({ transformOrigin: "25% 50%", rotationZ: 20 }, h["b"]),
                  "start"
                )
                .to(
                  e,
                  this.rhythm,
                  b({ transformOrigin: "85% 100%", rotationZ: m }, h["b"]),
                  "start"
                ),
              this.song > 2
                ? this.loop
                    .fromTo(
                      o,
                      0.01,
                      { scaleY: 0.1, transformOrigin: "50% 50%" },
                      b(
                        {
                          scaleY: 1,
                          transformOrigin: "50% 50%",
                          repeatDelay: 3,
                        },
                        h["a"]
                      ),
                      "start"
                    )
                    .fromTo(
                      l,
                      0.01,
                      { autoAlpha: 0 },
                      b({ autoAlpha: 1, repeatDelay: 3 }, h["a"]),
                      "start"
                    )
                : this.loop.set(
                    o,
                    { scaleY: 0.1, transformOrigin: "50% 50%" },
                    "start"
                  );
          },
        },
      },
      y = v,
      O = Object(u["a"])(y, a, i, !1, null, null, null);
    e["a"] = O.exports;
  },
  "288e": function (t, e, n) {
    "use strict";
    n("a609");
  },
  "2c76": function (t, e, n) {},
  "2ca1": function (t, e, n) {},
  "2dab": function (t, e, n) {
    "use strict";
    n.r(e);
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [
          e(
            "div",
            {
              class: [
                "mario-box",
                {
                  "-jumped": t.hasTouched,
                  "-full": t.hasCoins,
                  "-off": t.hasFoundAllCoins,
                },
              ],
              on: { click: t.onTouchBlock },
            },
            [
              e("div", { staticClass: "in" }),
              t._l(t.coinsToBeFound, function (t, n) {
                return e("SuperMarioCoin", {
                  key: n,
                  attrs: { isPlaying: "" },
                });
              }),
            ],
            2
          ),
        ]);
      },
      i = [],
      r = n("cffa"),
      s = n("025e"),
      o = n("7976"),
      c = n.n(o),
      l = n("49a1"),
      u = n.n(l),
      d = n("73f8"),
      f = n.n(d),
      p = n("581d"),
      h = n.n(p),
      m = n("dce6"),
      b = {
        name: "SuperMarioBlock",
        components: { SuperMarioCoin: m["default"] },
        props: { hasCoins: Boolean },
        data: function () {
          return {
            foundCoins: 0,
            coinsToBeFound: 16,
            hasTouched: !1,
            blockAnimation: new r["h"](),
            coinAnimation: new r["h"](),
            audioStomp: new Audio(c.a),
            audioPowerUp: new Audio(u.a),
            audioAppears: new Audio(f.a),
            audioNoDamage: new Audio(h.a),
          };
        },
        computed: {
          hasFoundAllCoins: function () {
            return this.foundCoins === this.coinsToBeFound;
          },
        },
        methods: {
          animateCoin: function () {
            var t = this.$el.querySelectorAll(".mario-coin")[this.foundCoins],
              e = Object(s["g"])(-150, 150),
              n = new r["h"]();
            n
              .set(t, { autoAlpha: 1, xPercent: 0, yPercent: 0 })
              .to(t, 0.1, { yPercent: -100 })
              .to(t, 1, {
                bezier: {
                  curviness: 1.25,
                  values: [
                    { xPercent: e, yPercent: Object(s["g"])(-150, -100) },
                    { xPercent: 2 * e, yPercent: 800 },
                  ],
                  autoRotate: !1,
                },
                ease: r["g"].config(24),
              }),
              this.foundCoins++,
              this.hasFoundAllCoins &&
                (this.audioPowerUp.play(), this.$emit("foundAllCoins")),
              this.audioAppears.play(),
              this.$emit("foundCoin", this.foundCoins);
          },
          animateBlock: function () {
            this.$emit("jumped", this.$el);
            var t = this.$el.querySelector(".mario-box");
            this.blockAnimation
              .clear(!0)
              .set(t, { yPercent: 0 })
              .to(t, 0.07, { yPercent: -40, ease: r["g"].config(2) })
              .to(t, 0.07, { yPercent: 0, ease: r["g"].config(2) });
          },
          onTouchBlock: function () {
            (this.hasTouched = !0),
              this.animateBlock(),
              this.hasFoundAllCoins
                ? this.audioNoDamage.play()
                : this.hasCoins
                ? (this.audioStomp.play(), this.animateCoin())
                : this.audioNoDamage.play();
          },
        },
      },
      g = b,
      v = (n("fc7e"), n("2877")),
      y = Object(v["a"])(g, a, i, !1, null, null, null);
    e["default"] = y.exports;
  },
  3168: function (t, e, n) {
    "use strict";
    n("e9c4");
  },
  "31a6": function (t, e, n) {},
  "359b": function (t, e, n) {
    "use strict";
    n("7d0c");
  },
  "371c": function (t, e, n) {},
  3762: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    n("7f7f");
    var a = n("cffa"),
      i = {
        props: { isPlaying: Boolean },
        data: function () {
          return { loop: null, svg: null };
        },
        mounted: function () {
          (this.loop = new a["h"]()),
            (this.svg = this.$el.querySelector("svg")),
            this.init(),
            this.toggleAnimation();
        },
        beforeUnmount: function () {
          this.destroy();
        },
        watch: {
          isPlaying: function () {
            this.toggleAnimation();
          },
          svg: function () {
            this.toggleAnimation();
          },
        },
        methods: {
          init: function () {
            console.warn("".concat(this.$options.name, " has no init method"));
          },
          destroy: function () {
            this.loop.stop(),
              this.loop.kill(),
              (this.loop = null),
              this.toggleSVGAnimations(!1);
          },
          toggleSVGAnimations: function (t) {
            this.svg &&
              "unpauseAnimations" in this.svg &&
              (t ? this.svg.unpauseAnimations() : this.svg.pauseAnimations());
          },
          toggleGsapAnimations: function (t) {
            t ? this.loop.play() : this.loop.stop();
          },
          toggleAnimation: function () {
            this.toggleSVGAnimations(this.isPlaying),
              this.toggleGsapAnimations(this.isPlaying);
          },
        },
      };
  },
  3793: function (t, e, n) {
    "use strict";
    n("b8c2");
  },
  "42a9": function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [e("CoffeeMugSVG")], 1);
      },
      i = [],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("f3e2"),
        n("d25f"),
        n("ac6a"),
        n("456d"),
        n("bd86")),
      s = n("5fb0"),
      o = n("025e"),
      c = n("3762"),
      l = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              id: "coffee",
              viewBox: "0 0 20 20",
            },
          },
          [
            e("g", { staticClass: "coffee-coffee" }, [
              e("path", {
                staticClass: "coffee-cup",
                attrs: {
                  fill: "#7b4dad",
                  d: "M17.8 5.5c-.5-.3-1.1-.3-1.6-.1v-.2c-.1-.6-.2-2.6-8-1.4S.9 7 1 7.7c.4 2.7 2.4 5.7 5.2 6.9 0 .2 0 .3.1.5.2 1.1 1.9 1.6 3.9 1.3 2-.3 3.4-1.3 3.2-2.4 0-.2-.1-.4-.1-.5.7-.6 1.3-1.4 1.7-2.2.2.1.4.3.6.4.3.2.7.2 1 .2.8-.1 1.6-.9 2.1-2.1.6-2 .3-3.7-.9-4.3zm-.1 3.7c-.4 1.1-1.2 1.7-1.8 1.4-.2-.1-.3-.2-.4-.3.5-1.2.8-2.4.8-3.6.2-.1.4-.2.5-.2.2 0 .4 0 .5.1.7.3.8 1.4.4 2.6z",
                },
              }),
              e("path", {
                staticClass: "coffee-liquid",
                attrs: {
                  fill: "#3e1e00",
                  d: "M8.4 4.9C5 5.4 2.4 6.4 2.5 7c.1.7 2.9.8 6.2.3 3.3-.5 6-1.5 5.9-2.2s-2.9-.7-6.2-.2z",
                },
              }),
            ]),
          ]
        );
      },
      u = [],
      d = n("2877"),
      f = {},
      p = Object(d["a"])(f, l, u, !1, null, null, null),
      h = p.exports;
    function m(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function b(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? m(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : m(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var g = {
        name: "CoffeeMugCharacter",
        components: { CoffeeMugSVG: h },
        mixins: [c["a"]],
        methods: {
          init: function () {
            this.loop.to(
              ".coffee-coffee",
              5,
              b(
                {
                  yPercent: Object(o["g"])(20, 200),
                  xPercent: Object(o["g"])(-50, 50),
                  rotation: Object(o["g"])(0, 360),
                  transformOrigin: "50% 50%",
                },
                s["b"]
              )
            );
          },
        },
      },
      v = g,
      y = Object(d["a"])(v, a, i, !1, null, null, null);
    e["a"] = y.exports;
  },
  "49a1": function (t, e, n) {
    t.exports = n.p + "media/smw_power-up.01d1241b.ogg";
  },
  "4cc5": function (t, e, n) {},
  "4eea": function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [e("OctopusSVG")], 1);
      },
      i = [],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("f3e2"),
        n("d25f"),
        n("ac6a"),
        n("456d"),
        n("bd86")),
      s = n("5fb0"),
      o = n("025e"),
      c = n("3762"),
      l = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              id: "octo",
              viewBox: "0 0 100 100",
              "aria-labelledby": "octoDesc",
            },
          },
          [
            e("desc", { attrs: { id: "octoDesc" } }, [
              t._v(
                "\n    A green one-eyed octopus, smiling and swimming around with his little\n    tentacles\n  "
              ),
            ]),
            e("g", { staticClass: "octo-octo" }, [
              e(
                "path",
                {
                  staticClass: "octo-arm-6",
                  attrs: {
                    fill: "none",
                    stroke: "#00c7c7",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "8.301",
                  },
                },
                [
                  e("animate", {
                    attrs: {
                      dur: "1.01s",
                      repeatCount: "indefinite",
                      attributeName: "d",
                      values:
                        "M27.4 44s6.3 13.4 14 1.8;\n               M27.4 77.2s6.3-19.8 14-31.4;\n               M27.4 44s6.3 13.4 14 1.8;",
                      calcMode: "spline",
                      keySplines:
                        "0.455 0.03 0.515 0.955;\n               0.455 0.03 0.515 0.955",
                    },
                  }),
                ]
              ),
              e(
                "path",
                {
                  staticClass: "octo-arm-5",
                  attrs: {
                    fill: "none",
                    stroke: "#00c7c7",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "8.301",
                  },
                },
                [
                  e("animate", {
                    attrs: {
                      dur: "1s",
                      repeatCount: "indefinite",
                      attributeName: "d",
                      values:
                        "M27.4 50.8s9.3 11.4 17.6-.9;\n               M32.1 86.8s4.5-24.6 12.8-36.9;\n               M27.4 50.8s9.3 11.4 17.6-.9;",
                      calcMode: "spline",
                      keySplines:
                        "0.455 0.03 0.515 0.955;\n               0.455 0.03 0.515 0.955",
                    },
                  }),
                ]
              ),
              e(
                "path",
                {
                  staticClass: "octo-arm-4",
                  attrs: {
                    fill: "none",
                    stroke: "#00c7c7",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "8.301",
                  },
                },
                [
                  e("animate", {
                    attrs: {
                      dur: "1.02s",
                      repeatCount: "indefinite",
                      attributeName: "d",
                      values:
                        "M34.2 56.9s10.5 9.2 14.6-4.7;\n               M40.3 92.7s4.4-26.6 8.6-40.5;\n               M34.2 56.9s10.5 9.2 14.6-4.7;",
                      calcMode: "spline",
                      keySplines:
                        "0.455 0.03 0.515 0.955;\n               0.455 0.03 0.515 0.955",
                    },
                  }),
                ]
              ),
              e(
                "path",
                {
                  staticClass: "octo-arm-3",
                  attrs: {
                    fill: "none",
                    stroke: "#00c7c7",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "8.301",
                  },
                },
                [
                  e("animate", {
                    attrs: {
                      dur: ".99s",
                      repeatCount: "indefinite",
                      attributeName: "d",
                      values:
                        "M72.8 51.9s-11.4 10.8-14.7-2.7;\n               M62.6 86.8s-1.2-24.1-4.5-37.6;\n               M72.8 51.9s-11.4 10.8-14.7-2.7",
                      calcMode: "spline",
                      keySplines:
                        "0.455 0.03 0.515 0.955;\n               0.455 0.03 0.515 0.955",
                    },
                  }),
                ]
              ),
              e(
                "path",
                {
                  staticClass: "octo-arm-2",
                  attrs: {
                    fill: "none",
                    stroke: "#00c7c7",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "8.301",
                  },
                },
                [
                  e("animate", {
                    attrs: {
                      dur: "1s",
                      repeatCount: "indefinite",
                      attributeName: "d",
                      values:
                        "M68.7 57.5s-11.6 8.8-15.4-5.6;\n               M57 92.7s.1-26.4-3.7-40.8;\n               M68.7 57.5s-11.6 8.8-15.4-5.6;",
                      calcMode: "spline",
                      keySplines:
                        "0.455 0.03 0.515 0.955;\n               0.455 0.03 0.515 0.955",
                    },
                  }),
                ]
              ),
              e(
                "path",
                {
                  staticClass: "octo-arm-1",
                  attrs: {
                    fill: "none",
                    stroke: "#00c7c7",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "8.301",
                  },
                },
                [
                  e("animate", {
                    attrs: {
                      dur: "1.03s",
                      repeatCount: "indefinite",
                      attributeName: "d",
                      values:
                        "M58.7 65.5s-9.9 9.3-9.9-12.7;\n               M47.8 93.9s1.1-19.1 1.1-41.1;\n               M58.7 65.5s-9.9 9.3-9.9-12.7;",
                      calcMode: "spline",
                      keySplines:
                        "0.455 0.03 0.515 0.955;\n               0.455 0.03 0.515 0.955",
                    },
                  }),
                ]
              ),
              e("g", { staticClass: "octo-head" }, [
                e("ellipse", {
                  attrs: {
                    cx: "54.1",
                    cy: "31.9",
                    fill: "#00c7c7",
                    rx: "25.7",
                    ry: "23.6",
                    transform: "rotate(-78.217 54.138 31.903)",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "none",
                    stroke: "#004e88",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "1.038",
                    d: "M60.2 45.3c-.7 3.3-5 5.3-9.5 4.3-4.6-.9-7.7-4.5-7.1-7.8",
                  },
                }),
                e("g", { staticClass: "octo-eye" }, [
                  e("ellipse", {
                    attrs: {
                      cx: "54.5",
                      cy: "30.6",
                      fill: "#fff",
                      rx: "12.2",
                      ry: "11.7",
                      transform: "rotate(-78.217 54.504 30.64)",
                    },
                  }),
                  e("ellipse", {
                    attrs: {
                      cx: "54.5",
                      cy: "30.9",
                      fill: "#003456",
                      rx: "4.5",
                      ry: "4.3",
                      transform: "rotate(-78.217 54.49 30.873)",
                    },
                  }),
                  e("ellipse", {
                    attrs: {
                      cx: "57",
                      cy: "29.9",
                      fill: "#fff",
                      rx: "1.1",
                      ry: "1.1",
                    },
                  }),
                ]),
              ]),
            ]),
          ]
        );
      },
      u = [],
      d = n("2877"),
      f = {},
      p = Object(d["a"])(f, l, u, !1, null, null, null),
      h = p.exports;
    function m(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function b(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? m(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : m(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var g = {
        name: "OctopusCharacter",
        components: { OctopusSVG: h },
        mixins: [c["a"]],
        methods: {
          init: function () {
            var t = this,
              e = document.querySelector(".octo-octo"),
              n = document.querySelector(".octo-eye");
            this.loop
              .addLabel("start", 0)
              .fromTo(
                n,
                0.05,
                { scaleY: 0.1, transformOrigin: "50% 50%" },
                { scaleY: 1, repeat: -1, repeatDelay: 1.618 },
                "start"
              )
              .to(
                e,
                5,
                b(
                  b(
                    {
                      y: Object(o["g"])(-200, 400),
                      x: Object(o["g"])(-100, 100),
                      rotation: Object(o["g"])(-30, 30),
                    },
                    s["b"]
                  ),
                  {},
                  {
                    onComplete: function () {
                      t.action();
                    },
                  }
                ),
                "start"
              );
          },
        },
      },
      v = g,
      y = Object(d["a"])(v, a, i, !1, null, null, null);
    e["a"] = y.exports;
  },
  "4ef6": function (t, e, n) {},
  5532: function (t, e, n) {
    "use strict";
    n("2c76");
  },
  "567d": function (t, e, n) {
    "use strict";
    n("31a6");
  },
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var a = n("2b0e"),
      i = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { class: t.$route.meta.bodyClass, attrs: { id: "app" } },
          [
            e("HeaderSection"),
            e(
              "transition",
              {
                attrs: { appear: "", mode: "out-in", css: !1 },
                on: { leave: t.leave, enter: t.enter },
              },
              [e("router-view")],
              1
            ),
            e("SpineLine", { attrs: { isPlaying: t.isSpinePlaying } }),
            e("div", { staticClass: "tweenerElement" }),
            e("FooterSection"),
          ],
          1
        );
      },
      r = [],
      s = n("cd29"),
      o = n("cffa"),
      c = n("e345"),
      l =
        (n("7f7f"),
        function () {
          var t = this,
            e = t._self._c;
          return e("header", { attrs: { id: "header" } }, [
            e("div", { staticClass: "header-bg" }),
            e("div", { staticClass: "header-container" }, [
              e("div", { staticClass: "header-breadcrumb" }, [
                t._v(t._s(t.$route.name)),
              ]),
              e(
                "button",
                {
                  staticClass: "header-nav-button",
                  attrs: { title: "Open menu", type: "button" },
                  on: { click: t.openMenu },
                },
                [
                  e("span", { staticClass: "label" }, [t._v("Menu")]),
                  e("span", { staticClass: "dots d1" }),
                  e("span", { staticClass: "dots d2" }),
                  e("span", { staticClass: "dots d3" }),
                ]
              ),
              e("nav", { staticClass: "header-nav" }, [
                e(
                  "button",
                  {
                    staticClass: "header-nav-close-button",
                    attrs: { title: "Close menu", type: "button" },
                    on: { click: t.closeMenu },
                  },
                  [e("span", { staticClass: "label" }, [t._v("✕")])]
                ),
                e(
                  "ul",
                  [
                    e(
                      "li",
                      [
                        e(
                          "router-link",
                          { attrs: { to: "/", title: "Home" } },
                          [t._v(".is()")]
                        ),
                      ],
                      1
                    ),
                    e(
                      "li",
                      [
                        e(
                          "router-link",
                          { attrs: { to: "./about", title: "About me" } },
                          [t._v(".about()")]
                        ),
                      ],
                      1
                    ),
                    e("li", [
                      e(
                        "a",
                        {
                          attrs: {
                            href: "mailto:".concat(t.data.email),
                            title: "Send me an email",
                          },
                        },
                        [t._v(".email()")]
                      ),
                    ]),
                    t._l(t.data.links, function (n) {
                      return e(
                        "li",
                        { key: n.url, staticClass: "social-link" },
                        [
                          e(
                            "a",
                            {
                              attrs: {
                                href: n.url,
                                title: n.title,
                                target: "_blank",
                              },
                            },
                            [
                              t._v(
                                "\n            " +
                                  t._s(n.label || null) +
                                  "\n            "
                              ),
                              n.icon ? e(n.icon, { tag: "component" }) : t._e(),
                            ],
                            1
                          ),
                        ]
                      );
                    }),
                  ],
                  2
                ),
              ]),
            ]),
          ]);
        }),
      u = [],
      d = (n("96cf"), n("3b8d")),
      f = n("025e"),
      p = n("031b"),
      h = n("0929"),
      m = {
        name: "HeaderSection",
        components: { LinkedInIcon: p["a"], GithubIcon: h["a"] },
        data: function () {
          return { data: {} };
        },
        mounted: (function () {
          var t = Object(d["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), Object(f["c"])();
                      case 2:
                        this.data = t.sent;
                      case 3:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e() {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        methods: {
          openMenu: function () {
            document.body.classList.add("is-nav-open");
          },
          closeMenu: function () {
            document.body.classList.remove("is-nav-open");
          },
        },
      },
      b = m,
      g = (n("cde9"), n("2877")),
      v = Object(g["a"])(b, l, u, !1, null, null, null),
      y = v.exports,
      O = function () {
        var t = this,
          e = t._self._c;
        return e("footer", { staticClass: "footer" }, [
          e("p", [t._v("Made with 🤍 in 2018")]),
          e("p", [t._v("awwwards.winner:")]),
          e("ul", { staticClass: "awwwards" }, [
            e("li", [
              e(
                "a",
                {
                  attrs: {
                    href: "https://www.awwwards.com/sites/iuri-is",
                    target: "_blank",
                  },
                },
                [
                  e("svg", { attrs: { width: "53.08", height: "171.358" } }, [
                    e("path", {
                      staticClass: "js-color-bg",
                      attrs: { fill: "#5ABDB2", d: "M0 0h53.08v171.358H0z" },
                    }),
                    e(
                      "g",
                      { staticClass: "js-color-text", attrs: { fill: "#fff" } },
                      [
                        e("path", {
                          attrs: {
                            d: "M20.048 153.585v-2.002l6.752-3.757h-6.752v-1.9h10.23v2.002l-6.752 3.757h6.752v1.9zM29.899 142.382a3.317 3.317 0 0 1-1.359 1.293c-.575.297-1.223.446-1.944.446-.721 0-1.369-.149-1.944-.446a3.317 3.317 0 0 1-1.359-1.293c-.331-.564-.497-1.232-.497-2.003 0-.769.166-1.437.497-2.002a3.332 3.332 0 0 1 1.359-1.294c.575-.297 1.224-.445 1.944-.445.722 0 1.369.148 1.944.445a3.326 3.326 0 0 1 1.359 1.294c.33.565.496 1.233.496 2.002.001.77-.166 1.438-.496 2.003m-1.703-3.348c-.435-.331-.967-.497-1.601-.497s-1.167.166-1.601.497c-.434.332-.65.78-.65 1.345s.217 1.014.65 1.346c.434.33.967.496 1.601.496s1.166-.166 1.601-.496c.434-.332.649-.78.649-1.346.001-.565-.215-1.013-.649-1.345M22.912 134.996v-1.812h1.185c-.43-.283-.752-.593-.973-.929-.219-.336-.329-.732-.329-1.19 0-.479.127-.902.38-1.272.254-.37.635-.633 1.141-.79-.478-.262-.851-.591-1.118-.985a2.221 2.221 0 0 1-.402-1.265c0-.682.2-1.218.599-1.607.4-.391.957-.585 1.668-.585h5.218v1.812H25.37c-.682 0-1.023.303-1.023.907 0 .467.264.85.789 1.146.527.299 1.286.446 2.28.446h2.865v1.813H25.37c-.682 0-1.023.303-1.023.906 0 .468.275.851.826 1.147.551.298 1.352.446 2.404.446h2.704v1.812h-7.369zM21.626 122.457c-.225.224-.502.336-.833.336s-.608-.112-.833-.336a1.128 1.128 0 0 1-.336-.833c0-.331.111-.609.336-.833.225-.225.502-.336.833-.336s.608.111.833.336c.225.224.337.502.337.833 0 .332-.112.608-.337.833m1.286-1.739h7.366v1.813h-7.366v-1.813zM22.912 118.668v-1.812h1.185a3.348 3.348 0 0 1-.951-1.009 2.434 2.434 0 0 1-.351-1.272c0-.681.19-1.229.57-1.644.38-.414.931-.621 1.651-.621h5.263v1.812h-4.722c-.418 0-.727.096-.92.285-.195.19-.293.447-.293.769 0 .302.116.58.351.833.233.254.577.458 1.03.613.453.156.992.234 1.615.234h2.938v1.812h-7.366zM29.833 109.129a3.33 3.33 0 0 1-1.432 1.169 4.535 4.535 0 0 1-1.805.373 4.537 4.537 0 0 1-1.807-.373c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.771.183-1.413.549-1.93a3.28 3.28 0 0 1 1.382-1.141 4.221 4.221 0 0 1 1.709-.364h.746v5.071c.447-.02.838-.183 1.168-.49.332-.307.498-.724.498-1.248 0-.41-.093-.754-.277-1.031-.186-.278-.473-.529-.863-.753l.542-1.462c.69.303 1.224.724 1.592 1.265.371.541.556 1.235.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.52-.262.258-.395.61-.395 1.06 0 .428.137.784.409 1.067.272.282.604.458.994.525v-3.172zM29.833 100.878c-.375.531-.852.921-1.432 1.169a4.552 4.552 0 0 1-3.612 0c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.77.183-1.412.549-1.93a3.278 3.278 0 0 1 1.382-1.14 4.222 4.222 0 0 1 1.709-.365h.746v5.072a1.794 1.794 0 0 0 1.168-.49c.332-.307.498-.724.498-1.249 0-.41-.093-.753-.277-1.031-.186-.277-.473-.528-.863-.753l.542-1.462c.69.302 1.224.724 1.592 1.265.371.541.556 1.234.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.573c-.41.088-.746.261-1.009.519-.262.258-.395.611-.395 1.06 0 .429.137.784.409 1.067.272.282.604.458.994.526v-3.172zM35.481 16.926l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.781-14.969h3.713l2.673 10.276 2.524-10.276h3.445l2.524 10.276 2.674-10.276zM37.979 27.083c1.426 0 2.495 1.068 2.495 2.495 0 1.425-1.069 2.495-2.495 2.495-1.425 0-2.495-1.07-2.495-2.495-.001-1.427 1.07-2.495 2.495-2.495",
                          },
                        }),
                      ]
                    ),
                  ]),
                ]
              ),
            ]),
            e("li", [
              e(
                "a",
                {
                  attrs: {
                    href: "https://www.awwwards.com/sites/iuri-is",
                    target: "_blank",
                  },
                },
                [
                  e("svg", { attrs: { width: "53.08", height: "171.358" } }, [
                    e("path", {
                      staticClass: "js-color-bg",
                      attrs: { fill: "#9BD4D7", d: "M0 0h53.08v171.358H0z" },
                    }),
                    e(
                      "g",
                      { staticClass: "js-color-text", attrs: { fill: "#fff" } },
                      [
                        e("path", {
                          attrs: {
                            d: "M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495",
                          },
                        }),
                      ]
                    ),
                  ]),
                ]
              ),
            ]),
            e("li", [
              e(
                "a",
                {
                  attrs: {
                    href: "https://www.awwwards.com/sites/iuri-is",
                    target: "_blank",
                  },
                },
                [
                  e("svg", { attrs: { width: "53.08", height: "171.358" } }, [
                    e("path", {
                      staticClass: "js-color-bg",
                      attrs: { fill: "#EE762D", d: "M0 0h53.08v171.358H0z" },
                    }),
                    e(
                      "g",
                      { staticClass: "js-color-text", attrs: { fill: "#fff" } },
                      [
                        e("path", {
                          attrs: {
                            d: "M20.047 153.665v-2.134l6.387-2.411-6.387-2.413v-2.133h10.23v1.9h-6.314l5.379 1.959v1.374l-5.379 1.958h6.314v1.9zM29.898 141.038a3.319 3.319 0 0 1-1.361 1.294c-.573.297-1.221.445-1.943.445-.721 0-1.368-.148-1.943-.445a3.326 3.326 0 0 1-1.359-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.317 3.317 0 0 1 1.359-1.293c.575-.298 1.223-.446 1.943-.446.723 0 1.37.148 1.943.446a3.31 3.31 0 0 1 1.361 1.293c.33.564.496 1.232.496 2.003.001.77-.165 1.437-.496 2.002m-1.703-3.348c-.435-.33-.968-.496-1.602-.496-.633 0-1.167.166-1.6.496-.435.331-.651.779-.651 1.346 0 .564.217 1.013.651 1.344.433.332.967.498 1.6.498.634 0 1.167-.166 1.602-.498.434-.331.649-.779.649-1.344.001-.566-.215-1.015-.649-1.346M30.117 131.176c-.186.326-.386.548-.6.665h.76v1.812H19.93v-1.812h3.654c-.215-.166-.4-.414-.556-.746a2.422 2.422 0 0 1-.235-1.038c0-1.082.345-1.912 1.031-2.492.688-.579 1.611-.869 2.771-.869s2.083.29 2.771.869c.687.58 1.029 1.41 1.029 2.492 0 .419-.093.792-.278 1.119m-1.871-2.099c-.399-.32-.949-.481-1.651-.481-.711 0-1.265.161-1.659.481-.395.322-.592.731-.592 1.229s.197.904.592 1.22c.395.317.948.476 1.659.476.712 0 1.264-.158 1.659-.476.394-.315.592-.723.592-1.22s-.2-.907-.6-1.229M21.625 124.98c-.225.225-.502.337-.833.337s-.608-.112-.833-.337-.337-.502-.337-.833c0-.332.112-.608.337-.833s.502-.337.833-.337.608.112.833.337.336.501.336.833c0 .332-.111.609-.336.833m1.286-1.739h7.367v1.812h-7.367v-1.812zM19.93 119.389h10.349v1.813H19.93zM29.832 116.189c-.375.531-.853.921-1.433 1.169a4.548 4.548 0 0 1-3.611 0 3.339 3.339 0 0 1-1.433-1.169c-.375-.532-.563-1.196-.563-1.995 0-.77.184-1.413.55-1.93a3.282 3.282 0 0 1 1.381-1.14 4.23 4.23 0 0 1 1.71-.365h.746v5.072a1.798 1.798 0 0 0 1.169-.49c.332-.307.497-.724.497-1.249 0-.41-.094-.753-.278-1.031-.185-.277-.473-.529-.862-.753l.541-1.462c.691.302 1.224.724 1.592 1.265.371.541.557 1.234.557 2.083 0 .799-.188 1.463-.563 1.995m-4.086-3.574c-.408.089-.746.262-1.008.52-.263.258-.395.611-.395 1.06 0 .429.136.784.408 1.067.273.282.604.458.994.526v-3.173zM20.047 102.852v-1.899l10.231-3.464v2.046l-2.412.746v3.244l2.412.745v2.046l-10.231-3.464zm6.065-2.031l-3.552 1.08 3.552 1.082v-2.162zM22.91 97.414v-1.827l5.059-1.316-5.059-1.243v-1.695l5.059-1.242-5.059-1.316v-1.827l7.367 2.354v1.607l-4.763 1.273 4.763 1.27v1.609zM29.811 85.676c-.391.419-.94.628-1.652.628-.73 0-1.314-.277-1.754-.833-.438-.555-.658-1.306-.658-2.251v-1.286h-.32c-.36 0-.632.122-.812.366-.181.243-.271.55-.271.92 0 .633.282 1.058.848 1.272l-.352 1.534a2.316 2.316 0 0 1-1.482-.942c-.375-.513-.563-1.132-.563-1.864 0-.984.261-1.747.782-2.287.521-.541 1.289-.812 2.302-.812h4.4v1.491l-.937.19c.702.575 1.053 1.33 1.053 2.265 0 .654-.195 1.19-.584 1.609m-1.383-3.245c-.276-.331-.645-.497-1.104-.497h-.144v1.213c0 .4.078.709.233.93.156.219.394.327.716.327a.658.658 0 0 0 .52-.226c.132-.151.197-.349.197-.593 0-.439-.14-.822-.418-1.154M22.91 78.179v-1.813h1.199a2.93 2.93 0 0 1-.972-.965 2.324 2.324 0 0 1-.345-1.213c0-.273.05-.57.146-.892l1.682.336a1.452 1.452 0 0 0-.205.76c0 .576.262 1.048.783 1.418s1.342.556 2.461.556h2.617v1.813H22.91zM29.364 71.716c-.687.561-1.61.84-2.771.84-1.158 0-2.082-.279-2.77-.84s-1.029-1.352-1.029-2.375c0-.42.074-.802.226-1.147.151-.347.339-.607.563-.782H19.93v-1.813h10.348v1.813h-.76c.224.117.427.35.607.693.18.348.27.759.27 1.236 0 1.023-.344 1.814-1.031 2.375m-1.11-3.99c-.396-.316-.947-.476-1.66-.476-.711 0-1.264.159-1.657.476a1.493 1.493 0 0 0-.593 1.221c0 .496.197.906.593 1.229.394.32.946.481 1.657.481.703 0 1.252-.161 1.652-.481.4-.322.6-.732.6-1.229 0-.498-.198-.905-.592-1.221M35.48 17.006l-4.783 14.969h-3.265l-2.584-9.682-2.584 9.682h-3.267l-4.782-14.969h3.712L20.6 27.282l2.525-10.276h3.445l2.525 10.276 2.673-10.276zM37.978 27.163c1.425 0 2.495 1.068 2.495 2.495 0 1.425-1.07 2.495-2.495 2.495-1.426 0-2.495-1.07-2.495-2.495-.001-1.427 1.069-2.495 2.495-2.495",
                          },
                        }),
                      ]
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]);
      },
      w = [],
      C = { name: "FooterSection" },
      P = C,
      k = (n("ad45"), Object(g["a"])(P, O, w, !1, null, null, null)),
      j = k.exports,
      S = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      _ = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", [
            e("div", { staticClass: "spine" }),
            e("div", { staticClass: "spine-target" }, [
              e("div", { staticClass: "circle" }),
              e("div", { staticClass: "pulse" }),
            ]),
          ]);
        },
      ],
      M = n("3762"),
      x = {
        name: "SpineLine",
        mixins: [M["a"]],
        methods: {
          init: function () {
            this.loop
              .clear()
              .addLabel("enter", 0)
              .fromTo(
                ".spine",
                1,
                { autoAlpha: 0, yPercent: 20 },
                { autoAlpha: 1, yPercent: 0, ease: o["e"].easeOut },
                "enter"
              )
              .fromTo(
                ".spine-target .circle",
                1,
                { scale: 0, autoAlpha: 0 },
                { scale: 1, autoAlpha: 1, ease: o["a"].easeOut.config(1, 0.5) },
                "enter+=.7"
              )
              .fromTo(
                ".spine-target .circle",
                2,
                { backgroundColor: "transparent" },
                { backgroundColor: "#5918df" },
                "enter+=1.2"
              )
              .fromTo(
                ".spine-target .pulse",
                4,
                { autoAlpha: 1, scale: 0 },
                { autoAlpha: 0, scale: 8, ease: o["e"].easeOut },
                "enter+=1.2"
              );
          },
          end: function () {
            this.loop
              .clear()
              .addLabel("leave", 0)
              .to(
                ".spine-target .circle, .spine-target .pulse",
                0.5,
                { scale: 0, autoAlpha: 0, ease: o["e"].easeIn },
                "leave"
              )
              .to(
                ".spine",
                0.5,
                { autoAlpha: 0, yPercent: 50, ease: o["e"].easeIn },
                "leave+=.25"
              );
          },
          toggleGsapAnimations: function (t) {
            t ? this.init() : this.end();
          },
        },
      },
      z = x,
      T = (n("359b"), Object(g["a"])(z, S, _, !1, null, null, null)),
      A = T.exports;
    Object(c["ScrollMagicPluginGsap"])(s, o["j"], o["h"]);
    var D = {
        name: "App",
        components: { HeaderSection: y, SpineLine: A, FooterSection: j },
        data: function () {
          return {
            isSpinePlaying: !1,
            introTimeline: new o["h"](),
            leaveTimeline: new o["h"](),
          };
        },
        methods: {
          enter: function (t, e) {
            this.introTimeline
              .clear()
              .addLabel("enter", 0)
              .fromTo(
                ".header-breadcrumb",
                1,
                { autoAlpha: 0, x: -32 },
                { autoAlpha: 1, x: 0, ease: o["e"].easeOut },
                "enter"
              )
              .fromTo(
                t,
                1,
                { autoAlpha: 0 },
                { autoAlpha: 1, onComplete: e },
                "enter"
              ),
              (this.isSpinePlaying = !0);
          },
          leave: function (t, e) {
            this.leaveTimeline
              .clear()
              .addLabel("leave", 0)
              .set(".header-breadcrumb", { autoAlpha: 0 }, "leave")
              .to(t, 1, { autoAlpha: 0, onComplete: e }, "leave"),
              (this.isSpinePlaying = !1);
          },
        },
      },
      B = D,
      L = (n("d3a2"), Object(g["a"])(B, i, r, !1, null, null, null)),
      E = L.exports,
      G =
        (n("456d"),
        n("ac6a"),
        n("f3e2"),
        n("5df3"),
        n("1c4c"),
        n("6d67"),
        n("7514"),
        n("8c4f")),
      q = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "wrapper", attrs: { id: "home" } },
          [
            e("IntroScene"),
            e("GapBlock"),
            e(
              "TitleSection",
              { attrs: { scene: "curriculum" } },
              [
                e(
                  "TitleFunction",
                  { attrs: { params: "/^.*$/gi", subtitle: "<WorkShowcase>" } },
                  [t._v("myCV")]
                ),
              ],
              1
            ),
            e("BizScene", { attrs: { isPlaying: t.isPlaying.Biz } }),
            e("GapBlock"),
            e("EarlyDaysScene", {
              attrs: { isPlaying: t.isPlaying.EarlyDays },
            }),
            e("GapBlock"),
            e(
              "TitleSection",
              { attrs: { scene: "ArtPhiGamesTitle" } },
              [
                e(
                  "TitleFunction",
                  { attrs: { subtitle: "background.bmp" } },
                  t._l(["Art", "Philosophy", "Games"], function (n) {
                    return e("span", { key: n, staticClass: "line" }, [
                      e("span", { staticClass: "params" }, [t._v("${")]),
                      t._v(t._s(n)),
                      e("span", { staticClass: "params" }, [t._v("}")]),
                    ]);
                  }),
                  0
                ),
              ],
              1
            ),
            e("SuperMarioScene"),
            e("GapBlock"),
            e("GhibliScene", { attrs: { isPlaying: t.isPlaying.Ghibli } }),
            e("WrapperScene"),
            e("ThanksScene", { attrs: { isPlayng: t.isPlaying.Potion } }),
          ],
          1
        );
      },
      F = [],
      I = (n("1c01"), n("58b2"), n("8e6e"), n("d25f"), n("bd86")),
      V = n("768b"),
      H = (n("ffc1"), n("8615"), n("2599")),
      N = n.n(H),
      $ = function () {
        var t = this,
          e = t._self._c;
        return e(
          "section",
          { staticClass: "scene-intro", attrs: { id: "intro" } },
          [
            e(
              "div",
              { staticClass: "static-container" },
              [
                t._m(0),
                e("TextBlock", [
                  e("p", { staticClass: "-purple" }, [t._v("Muhammad Ivan Setiawan")]),
                  e("p", { staticClass: "-gray" }, [
                    t._v("Creative frontend developer"),
                  ]),
                ]),
              ],
              1
            ),
          ]
        );
      },
      W = [
        function () {
          var t = this,
            e = t._self._c;
          return e("h1", { staticClass: "title" }, [
            e("span", { staticClass: "ivan" }, [t._v("ivan")]),
            e("span", { staticClass: "func" }, [t._v(".is()")]),
          ]);
        },
      ],
      Y = n("c87e"),
      R = { name: "IntroScene", components: { TextBlock: Y["a"] } },
      Z = R,
      X = Object(g["a"])(Z, $, W, !1, null, null, null),
      Q = X.exports,
      U = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "bizScene" },
          [
            e(
              "TitleSection",
              { attrs: { scene: "bizTitle" } },
              [
                e("TitleFunction", { attrs: { params: "2011,2019" } }, [
                  t._v("biz"),
                ]),
              ],
              1
            ),
            e(
              "SceneSection",
              {
                attrs: { id: "biz1" },
                scopedSlots: t._u([
                  {
                    key: "container",
                    fn: function () {
                      return [
                        e("ABiz", { attrs: { isPlaying: t.isPlaying } }),
                        e("Dino", { attrs: { isPlaying: t.isPlaying } }),
                        e("Astronaut", { attrs: { isPlaying: t.isPlaying } }),
                        e("CoffeeMug", { attrs: { isPlaying: t.isPlaying } }),
                        t.$viewport.isDesktop
                          ? e("Shrimp", { attrs: { isPlaying: t.isPlaying } })
                          : t._e(),
                        t.$viewport.isDesktop
                          ? e("Octopus", { attrs: { isPlaying: t.isPlaying } })
                          : t._e(),
                        t.$viewport.isMobile
                          ? t._e()
                          : e("ET", { attrs: { isPlaying: t.isPlaying } }),
                        t.$viewport.isMobile
                          ? t._e()
                          : e("Zen", { attrs: { isPlaying: t.isPlaying } }),
                        e("Shapes", { attrs: { isPlaying: t.isPlaying } }),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              },
              [
                e("TextBlock", [
                  e("p", { staticClass: "-big" }, [
                    t._v("\n        From 2011 to 2019 I was\n        "),
                    e("strong", { staticClass: "-purple" }, [
                      t._v("Head of Frontend"),
                    ]),
                    t._v("\n        @\n        "),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://www.bizcommerce.com.br/",
                          target: "_blank",
                          title: "Visit Biz Commerce's website",
                        },
                      },
                      [t._v("\n          biz")]
                    ),
                    t._v(".\n      "),
                  ]),
                  e("p", [
                    t._v(
                      "\n        A SaaS e-commerce platform focused on simplifying and customizing the\n        use of Magento.\n      "
                    ),
                  ]),
                ]),
              ],
              1
            ),
            e(
              "SceneSection",
              { attrs: { id: "biz2" } },
              [
                e("TextBlock", [
                  e("p", [
                    t._v(
                      "\n        Throughout these years we delivered hundreds of\n        "
                    ),
                    e("span", { staticClass: "-big -purple" }, [
                      t._v(
                        "\n          tools, modules, integrations, and custom projects\n        "
                      ),
                    ]),
                    t._v(
                      "\n        for online stores and service providers.\n      "
                    ),
                  ]),
                ]),
              ],
              1
            ),
            e(
              "SceneSection",
              { attrs: { id: "biz3" } },
              [
                e("TextBlock", [
                  e("p", [
                    t._v("\n        biz currently runs\n        "),
                    e("span", { staticClass: "-big" }, [
                      e("span", { staticClass: "-purple" }, [
                        t._v("+1200 stores"),
                      ]),
                      t._v(
                        ", payment & shipping\n          integrations with\n          "
                      ),
                      e("span", { staticClass: "-purple" }, [
                        t._v("thousands of transactions"),
                      ]),
                      t._v(" daily.\n        "),
                    ]),
                  ]),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      J = [],
      K = function () {
        var t = this,
          e = t._self._c;
        return e("div", { attrs: { id: "abiz" } }, [e("ABizSVG")], 1);
      },
      tt = [],
      et = n("5fb0"),
      nt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 100 100",
              "aria-labelledby": "aBizTitle aBizDesc",
            },
          },
          [
            e("title", { attrs: { id: "aBizTitle" } }, [
              t._v("Biz, the BizCommerce mascot"),
            ]),
            e("desc", { attrs: { id: "aBizDesc" } }, [
              t._v(
                "\n    She is a cute light blue pentagon, holding the Magento logo inside an\n    orange circle\n  "
              ),
            ]),
            e("g", { staticClass: "abiz-abiz" }, [
              e("g", { staticClass: "abiz-body" }, [
                e("path", {
                  staticClass: "abiz-r-arm",
                  attrs: {
                    fill: "none",
                    stroke: "#9FD4E5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "8.141",
                    d: "M69 60.2s15.6 2.2 13.2 18.4c-2.6 17.5-18.7 3.6-24.5 8.9",
                  },
                }),
                e("path", {
                  staticClass: "abiz-l-arm",
                  attrs: {
                    fill: "none",
                    stroke: "#D1F4FC",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "8.141",
                    d: "M37.4 61.6C22.9 93 26.6 56.1 12 62.3",
                  },
                }),
                e("g", { staticClass: "abiz-head" }, [
                  e("path", {
                    staticClass: "abiz-skin",
                    attrs: {
                      fill: "#D1F4FC",
                      d: "M36.1 19.4l21.4-9.5c4.7-2.1 10.3-.9 13.7 2.9l15.7 17.4c3.5 3.8 4.1 9.5 1.5 14L76.7 64.4c-2.5 4.5-7.7 6.8-12.8 5.7 0 0-19.8-4.1-25.3-5.7-4-1.1-6.6-5.3-7-9.6l-2.4-23.3c-.6-5.1 2.2-10 6.9-12.1z",
                    },
                  }),
                  e("path", {
                    staticClass: "abiz-face",
                    attrs: {
                      fill: "none",
                      stroke: "#004E88",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": "10",
                      "stroke-width": ".775",
                      d: "M42.6 42.1c-.3 1.6-1.9 2.7-3.5 2.3-1.6-.3-2.7-1.9-2.3-3.5m19.1 4c-.3 1.6-1.9 2.7-3.5 2.3-1.6-.3-2.7-1.9-2.3-3.5m-2.4 7.2c-.3 1.6-1.9 2.7-3.5 2.3-1.6-.3-2.7-1.9-2.3-3.5",
                    },
                  }),
                  e("path", {
                    staticClass: "abiz-s",
                    attrs: {
                      fill: "#9FD4E5",
                      d: "M86.9 30.2L71.2 12.7c-.8-.9-1.7-1.7-2.8-2.3 4.7 6.3 7.6 14.3 7.6 23 0 15.8-9.2 29.2-22.2 34.4C59.2 69 63.9 70 63.9 70c5.1 1.1 10.2-1.2 12.8-5.7L88.4 44c2.6-4.4 2-10-1.5-13.8z",
                    },
                  }),
                ]),
                e("g", { staticClass: "abiz-magento-s" }, [
                  e("ellipse", {
                    staticClass: "s",
                    attrs: {
                      cx: "14.8",
                      cy: "60.2",
                      fill: "#9FD4E5",
                      rx: "3.5",
                      ry: "1.3",
                    },
                  }),
                ]),
              ]),
              e("g", { attrs: { id: "magento" } }, [
                e("ellipse", {
                  staticClass: "magento-sphere",
                  attrs: {
                    cx: "14.8",
                    cy: "49.2",
                    fill: "#FF6D00",
                    rx: "4.8",
                    ry: "4.8",
                  },
                }),
                e("path", {
                  staticClass: "magento-logo",
                  attrs: {
                    fill: "#FFF",
                    d: "M16.8 47.3l-2.6-1.2-2 2 .6 3.6.9.6-.6-3.9.9-.9.7 4.5.5.3.5-.5-.8-4.4 1.2.5.6 3.8.7-.8z",
                  },
                }),
              ]),
            ]),
          ]
        );
      },
      at = [],
      it = {},
      rt = Object(g["a"])(it, nt, at, !1, null, null, null),
      st = rt.exports;
    function ot(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function ct(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ot(Object(n), !0).forEach(function (e) {
              Object(I["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ot(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var lt = {
        name: "BizCharacter",
        components: { ABizSVG: st },
        mixins: [M["a"]],
        methods: {
          init: function () {
            this.loop
              .addLabel("start", 0)
              .to(
                ".abiz-head",
                2,
                ct(
                  { transformOrigin: "50% 75%", scale: 1.05, yPercent: -5 },
                  et["b"]
                ),
                "start"
              )
              .to(
                ".abiz-r-arm, .abiz-l-arm",
                1.5,
                ct({ rotationZ: 5, transformOrigin: "90% 0%" }, et["b"]),
                "start"
              )
              .to("#magento", 2, ct({ yPercent: -20 }, et["c"]))
              .to(
                ".abiz-magento-s",
                2,
                ct({ scale: 0.7, autoAlpha: 0.5 }, et["c"]),
                "-=2"
              );
          },
        },
      },
      ut = lt,
      dt = (n("b39a"), Object(g["a"])(ut, K, tt, !1, null, null, null)),
      ft = dt.exports,
      pt = n("27fa"),
      ht = n("0668"),
      mt = n("42a9"),
      bt = n("eed5"),
      gt = n("4eea"),
      vt = n("0d98"),
      yt = n("e6ad"),
      Ot = n("f933"),
      wt = function () {
        var t = this,
          e = t._self._c;
        return e("section", { staticClass: "scene", attrs: { id: t.scene } }, [
          e("div", { staticClass: "title-container" }, [t._t("default")], 2),
        ]);
      },
      Ct = [],
      Pt = { name: "TitleSection", props: { scene: String } },
      kt = Pt,
      jt = (n("686a"), Object(g["a"])(kt, wt, Ct, !1, null, null, null)),
      St = jt.exports,
      _t = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          [
            e(
              "h1",
              { staticClass: "title" },
              [
                t._t("default"),
                t.params
                  ? [
                      t._v("("),
                      e("span", { staticClass: "params" }, [
                        t._v(t._s(t.params)),
                      ]),
                      t._v(")"),
                    ]
                  : t._e(),
              ],
              2
            ),
            t.subtitle
              ? e("TextBlock", [
                  e("p", { staticClass: "-gray" }, [t._v(t._s(t.subtitle))]),
                ])
              : t._e(),
          ],
          1
        );
      },
      Mt = [],
      xt = {
        name: "TitleFunction",
        props: { params: String, subtitle: String },
        components: { TextBlock: Y["a"] },
      },
      zt = xt,
      Tt = Object(g["a"])(zt, _t, Mt, !1, null, null, null),
      At = Tt.exports,
      Dt = function () {
        var t = this,
          e = t._self._c;
        return e("section", { staticClass: "scene" }, [
          e("div", { staticClass: "static-container" }, [t._t("default")], 2),
          e("div", { staticClass: "container" }, [t._t("container")], 2),
        ]);
      },
      Bt = [],
      Lt = { name: "SceneSection" },
      Et = Lt,
      Gt = (n("26a0"), Object(g["a"])(Et, Dt, Bt, !1, null, null, null)),
      qt = Gt.exports,
      Ft = {
        name: "BizScene",
        components: {
          ABiz: ft,
          Dino: pt["a"],
          Astronaut: ht["a"],
          CoffeeMug: mt["a"],
          Shrimp: bt["a"],
          Octopus: gt["a"],
          ET: vt["a"],
          Zen: yt["a"],
          Shapes: Ot["a"],
          TitleSection: St,
          TitleFunction: At,
          TextBlock: Y["a"],
          SceneSection: qt,
        },
        props: { isPlaying: Boolean },
      },
      It = Ft,
      Vt = (n("9d19"), Object(g["a"])(It, U, J, !1, null, null, null)),
      Ht = Vt.exports,
      Nt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "earlyDays" },
          [
            e(
              "TitleSection",
              { attrs: { scene: "earlyTitle" } },
              [
                e(
                  "TitleFunction",
                  {
                    attrs: {
                      params: "2008,2011",
                      subtitle: "<table><tr><td>...",
                    },
                  },
                  [t._v("earlyDays")]
                ),
                e("div", { staticClass: "clouds cloud-1" }),
                e("Pepe", t._b({}, "Pepe", { isPlaying: t.isPlaying }, !1)),
                e("div", { staticClass: "clouds cloud-2" }),
                e("div", { staticClass: "clouds cloud-3" }),
                e("Ocean", t._b({}, "Ocean", { isPlaying: t.isPlaying }, !1)),
              ],
              1
            ),
            e(
              "SceneSection",
              { attrs: { id: "early-days" } },
              [
                e("TextBlock", [
                  e("p", [t._v("Design & illustration.")]),
                  e("p", { staticClass: "-big" }, [
                    t._v("\n        A frontend developer"),
                    e("br"),
                    e("span", { staticClass: "-purple" }, [
                      t._v("with one foothold in arts."),
                    ]),
                  ]),
                ]),
              ],
              1
            ),
            e(
              "SceneSection",
              { attrs: { id: "early-days2" } },
              [
                e("TextBlock", [
                  e("p", { staticClass: "-big" }, [
                    e("span", { staticClass: "-purple" }, [
                      t._v("Freelancing"),
                    ]),
                    t._v(" &\n        "),
                    e("span", { staticClass: "-purple" }, [
                      t._v("startuping,"),
                    ]),
                    e("br"),
                    e("span", { staticClass: "-purple" }, [t._v("Inches")]),
                    t._v(" &\n        "),
                    e("span", { staticClass: "-purple" }, [t._v("pixels.")]),
                  ]),
                  e("p", [
                    t._v(
                      "\n        Illustrating album arts, book covers, and billboards as a freelancer.\n        And designing websites, online magazines, and news portals at my first\n        web studio."
                    ),
                    e("br"),
                  ]),
                ]),
              ],
              1
            ),
            e(
              "SceneSection",
              { attrs: { id: "early-days3" } },
              [
                e("TextBlock", [
                  e("p", [
                    t._v("\n        We've proudly fueled the starring"),
                    e("br"),
                    t._v(
                      "\n        of some big Brazilian names such as\n        "
                    ),
                    e("span", { staticClass: "-big -purple" }, [
                      e("em", [t._v("Porta dos Fundos")]),
                      t._v(", "),
                      e("em", [t._v("Kibe Loco")]),
                      t._v(", Fhits.tv,\n          "),
                      e("em", [t._v("Galo Frito")]),
                    ]),
                    t._v("\n        among many others...\n      "),
                  ]),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      $t = [],
      Wt = n("a7b2"),
      Yt = n("8f41"),
      Rt = {
        name: "EarlyDaysScene",
        components: {
          TitleSection: St,
          Pepe: Wt["a"],
          Ocean: Yt["a"],
          TitleFunction: At,
          TextBlock: Y["a"],
          SceneSection: qt,
        },
        props: { isPlaying: Boolean },
      },
      Zt = Rt,
      Xt = (n("d966"), Object(g["a"])(Zt, Nt, $t, !1, null, null, null)),
      Qt = Xt.exports,
      Ut = function () {
        var t = this,
          e = t._self._c;
        return e(
          "SceneSection",
          {
            attrs: { id: "Mario", role: "img", "aria-labelledby": "marioDesc" },
            scopedSlots: t._u([
              {
                key: "container",
                fn: function () {
                  return [
                    e(
                      "div",
                      { staticClass: "blocks" },
                      t._l(3, function (n, a) {
                        return e("SuperMarioBlock", {
                          key: a,
                          attrs: { hasCoins: t.randomBlock === a + 1 },
                          on: {
                            jumped: t.onJumped,
                            foundCoin: t.onFoundCoin,
                            foundAllCoins: t.onFoundAllCoins,
                          },
                        });
                      }),
                      1
                    ),
                    e("SuperMarioMario", {
                      staticClass: "mario-container",
                      attrs: { state: t.marioState },
                    }),
                    e(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.foundCoins,
                            expression: "foundCoins",
                          },
                        ],
                        staticClass: "mario-coin-counter",
                      },
                      [t._v("\n      " + t._s(t.foundCoins) + "\n    ")]
                    ),
                    e(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.hasFoundAllCoins,
                            expression: "hasFoundAllCoins",
                          },
                        ],
                      },
                      [
                        e("div", { staticClass: "mario-msg-overlay" }),
                        e("div", { staticClass: "mario-msg" }, [
                          t._v(
                            "\n        Hooray! Thanks for jumping so many times. "
                          ),
                          e("br"),
                          e("span", { staticClass: "-purple" }, [
                            t._v("You found all the coins!"),
                          ]),
                          e("br"),
                          t._v(" "),
                          e("br"),
                          t._v(
                            "\n        Keep scrolling, you're near the end!\n\n        "
                          ),
                          e("div", { staticClass: "later" }, [
                            t._v("\n          ;)\n          "),
                            e(
                              "button",
                              {
                                staticClass: "mario-msg-close",
                                attrs: {
                                  type: "button",
                                  title: "Close message",
                                },
                                on: { click: t.onCloseMessage },
                              },
                              [t._v("\n            ✕\n          ")]
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ];
                },
                proxy: !0,
              },
            ]),
          },
          [
            e("p", { staticClass: "ariaLabel", attrs: { id: "marioDesc" } }, [
              t._v(
                "\n    Three boxes with a question mark, from the Super Mario Bros game, are\n    standing in the center of the screen ... try to find the coin in one of\n    them by using the numbers 1, 2, and 3 on your keyboard!\n  "
              ),
            ]),
          ]
        );
      },
      Jt = [],
      Kt = n("df9a"),
      te = n.n(Kt),
      ee = n("2dab"),
      ne = n("bc3b"),
      ae = {
        name: "SuperMarioScene",
        components: {
          SceneSection: qt,
          SuperMarioBlock: ee["default"],
          SuperMarioMario: ne["default"],
        },
        data: function () {
          return {
            foundCoins: 0,
            marioState: null,
            hasFoundAllCoins: !1,
            randomBlock: Object(f["g"])(1, 3),
            audioExit: new Audio(te.a),
          };
        },
        methods: {
          onJumped: function (t) {
            var e = t.getBoundingClientRect(),
              n = Math.floor(e.x + e.width / 2),
              a = e.bottom;
            this.jumpMario(n, a);
          },
          jumpMario: function (t, e) {
            var n = this,
              a = this.$el.querySelector(".mario"),
              i = a.getBoundingClientRect(),
              r = i.x > t,
              s = window.innerHeight - i.height,
              c = new o["h"]();
            c.clear(!0)
              .set(a, { rotationY: r ? 180 : 0 })
              .fromTo(
                a,
                0.3,
                {
                  left: i.x,
                  top: s,
                  onStart: function () {
                    n.marioState = "up";
                  },
                },
                {
                  bezier: {
                    curviness: 1.25,
                    values: [
                      {
                        left: t - i.width / 2,
                        top: this.$viewport.isTablet ? 0.85 * e : e,
                      },
                      {
                        left: r ? t - 128 : t + 128,
                        top: this.$viewport.isTablet ? 0.9 * s : s,
                        onStart: function () {
                          n.marioState = "down";
                        },
                      },
                    ],
                    autoRotate: !1,
                  },
                  ease: o["g"].config(12),
                  onComplete: function () {
                    n.marioState = n.hasFoundAllCoins ? "celebrate" : null;
                  },
                }
              );
          },
          onFoundCoin: function (t) {
            this.$emit("foundCoin"),
              (this.foundCoins = t),
              document.body.classList.remove("is-playing-mario"),
              document.body.classList.add("has-played-mario"),
              document.body.classList.add("blue-background");
          },
          onFoundAllCoins: function () {
            this.$emit("foundAllCoins"),
              (this.hasFoundAllCoins = !0),
              (this.marioState = "celebrate"),
              this.onOpenMessage();
          },
          onOpenMessage: function () {
            this.audioExit.play();
            var t = new o["h"]();
            t.to("#Mario .mario-msg", 1, {
              scale: 1,
              ease: o["g"].config(12),
            }).to("#Mario .mario-msg .later", 0.1, { autoAlpha: 1 }, "+=2");
          },
          onCloseMessage: function () {
            var t = new o["h"]();
            t.to("#Mario .mario-msg, #Mario .mario-msg-overlay", 1, {
              scale: 0,
              ease: o["g"].config(12),
            });
          },
        },
      },
      ie = ae,
      re = (n("8dc4"), Object(g["a"])(ie, Ut, Jt, !1, null, null, null)),
      se = re.exports,
      oe = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "ghibliScene" },
          [
            e(
              "SceneSection",
              {
                attrs: { id: "Ghibli" },
                scopedSlots: t._u([
                  {
                    key: "container",
                    fn: function () {
                      return [
                        e("div", { staticClass: "sky" }, [
                          e("div", { staticClass: "cloud c1" }),
                          e("div", { staticClass: "cloud c2" }),
                        ]),
                        e("HolwsCastle", { attrs: { isPlaying: t.isPlaying } }),
                        e("div", { staticClass: "grass1" }),
                        e("div", { staticClass: "grass2" }),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              },
              [
                e("TextBlock", [
                  e("p", [
                    t._v(
                      "\n        Before designing for web, I was creating\n        "
                    ),
                    e("span", { staticClass: "-big -purple" }, [
                      t._v(
                        "\n          3D models, matte painting and advertisements\n        "
                      ),
                    ]),
                    t._v(
                      "\n        for many brands, TV commercials, games...\n      "
                    ),
                  ]),
                ]),
              ],
              1
            ),
            e("SceneSection", { attrs: { id: "Ghibli2" } }),
            e(
              "SceneSection",
              { attrs: { id: "Ghibli3" } },
              [
                e("TextBlock", [
                  e("p", { staticClass: "-big" }, [
                    t._v("\n        And studying\n        "),
                    e("span", { staticClass: "-purple" }, [
                      t._v(
                        "Philosophy, Japanese animation, fine arts and video games."
                      ),
                    ]),
                  ]),
                  e("p", [
                    t._v(
                      "\n        All of these subjects have a major impact on how I start and develop\n        my creative processes, leading the way on how I view web development\n        today.\n      "
                    ),
                  ]),
                ]),
              ],
              1
            ),
            e("SceneSection", { attrs: { id: "Ghibli4" } }),
          ],
          1
        );
      },
      ce = [],
      le = n("eead"),
      ue = {
        name: "GhibliScene",
        props: { isPlaying: Boolean },
        components: {
          TextBlock: Y["a"],
          SceneSection: qt,
          HolwsCastle: le["a"],
        },
      },
      de = ue,
      fe = (n("054e"), Object(g["a"])(de, oe, ce, !1, null, null, null)),
      pe = fe.exports,
      he = function () {
        var t = this,
          e = t._self._c;
        return e(
          "SceneSection",
          { staticClass: "scene", attrs: { id: "wrapperTitle" } },
          [e("h1", { staticClass: "title" }, [t._v("</wrapper>")])]
        );
      },
      me = [],
      be = { name: "WrapperBlock", components: { SceneSection: qt } },
      ge = be,
      ve = (n("706b"), Object(g["a"])(ge, he, me, !1, null, null, null)),
      ye = ve.exports,
      Oe = function () {
        var t = this,
          e = t._self._c;
        return e(
          "SceneSection",
          { attrs: { id: "thanks" } },
          [
            e(
              "TextBlock",
              [
                e("Potion", { attrs: { isPlaying: "" } }),
                e("div", { staticClass: "madeof" }, [
                  e("p", { staticClass: "-comment" }, [t._v("// Made with")]),
                  e("div", { staticClass: "cols" }, [
                    e("ul", { staticClass: "col" }, [
                      e("li", { staticClass: "ico" }, [t._v("(){</>}")]),
                      e("li", [t._v("Vue 2")]),
                      e("li", [t._v("GSAP 2")]),
                      e("li", [t._v("ScrollMagic")]),
                      e("li", [t._v("Photoshop")]),
                      e("li", [t._v("Illustrator")]),
                    ]),
                    e("ul", { staticClass: "col" }, [
                      e("li", { staticClass: "ico" }, [t._v("~")]),
                      e("li", [t._v("+62 cups of coffee")]),
                      e("li", [t._v("Endless references")]),
                      e("li", [t._v("2 easter eggs")]),
                    ]),
                    e(
                      "ul",
                      { staticClass: "col songs" },
                      [
                        e("li", { staticClass: "ico" }, [e("MusicIcon")], 1),
                        t._l(t.SONGS, function (n) {
                          return e("li", { key: n.id }, [
                            e(
                              "a",
                              {
                                attrs: {
                                  href: t.SPOTIFY_TRACK + n.id,
                                  title: "Listen to ".concat(n.label),
                                  target: "_blank",
                                },
                              },
                              [t._v(t._s(n.label))]
                            ),
                          ]);
                        }),
                      ],
                      2
                    ),
                  ]),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      we = [],
      Ce = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
            },
          },
          [
            e("path", {
              attrs: {
                "fill-rule": "evenodd",
                d: "M15 0L5 1.7v11c-.3-.2-.7-.3-1.2-.3-.6 0-1.3.3-1.9.7-.6.4-1 1-1 1.6 0 .4.2.7.4.9.4.3.8.4 1.2.4.6 0 1.4-.3 1.9-.7.6-.4 1-1 1-1.7V3l9.2-1.6v9.7c-.3-.2-.7-.3-1.2-.3-.6 0-1.3.3-1.9.7-.6.4-1 1-1 1.6 0 .4.2.7.4.9.3.2.6.3 1.1.3.6 0 1.4-.3 1.9-.7.6-.4 1-1 1-1.7L15 0z",
                "clip-rule": "evenodd",
              },
            }),
          ]
        );
      },
      Pe = [],
      ke = { name: "MusicIcon" },
      je = ke,
      Se = Object(g["a"])(je, Ce, Pe, !1, null, null, null),
      _e = Se.exports,
      Me = n("869b"),
      xe = "https://open.spotify.com/track/",
      ze = [
        { id: "1pYBTRBbp3PCcdqoke2QSN", label: "BadBadNotGood" },
        { id: "2pCnrWHxYVDWN3S4PgNMa0", label: "Khruangbin" },
        { id: "30JzduBPzHCnaErOkczzin", label: "Toumani Diabaté" },
        { id: "5TLObp1kSrfgCZVBIpYGtQ", label: "Astor Piazzola" },
        { id: "7cwPQGHgob1v9pek8WnQRx", label: "Isao Tomita" },
        { id: "5I5mTVbYfzg39b0PgVRrTo", label: "Ryiuchi Sakamoto" },
        { id: "2JNNbg38OtPLFoc66isKPQ", label: "Caetano Veloso" },
      ],
      Te = {
        name: "ThanksScene",
        components: {
          TextBlock: Y["a"],
          SceneSection: qt,
          Potion: Me["a"],
          MusicIcon: _e,
        },
        props: { isPlaying: Boolean },
        data: function () {
          return { SPOTIFY_TRACK: xe, SONGS: ze };
        },
      },
      Ae = Te,
      De = (n("b94d"), Object(g["a"])(Ae, Oe, we, !1, null, null, null)),
      Be = De.exports,
      Le = function () {
        var t = this,
          e = t._self._c;
        return e("div", { class: ["gap", { full: t.isFull }] });
      },
      Ee = [],
      Ge = { name: "GapBlock", props: { isFull: Boolean } },
      qe = Ge,
      Fe = (n("d25c"), Object(g["a"])(qe, Le, Ee, !1, null, null, null)),
      Ie = Fe.exports;
    function Ve(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function He(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ve(Object(n), !0).forEach(function (e) {
              Object(I["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Ve(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var Ne = {
        name: "HomeView",
        components: {
          IntroScene: Q,
          BizScene: Ht,
          EarlyDaysScene: Qt,
          SuperMarioScene: se,
          GhibliScene: pe,
          WrapperScene: ye,
          ThanksScene: Be,
          GapBlock: Ie,
          TitleSection: St,
          TitleFunction: At,
        },
        data: function () {
          return {
            audioMarioStart: new Audio(N.a),
            scrollMagicController: new s["Controller"](),
            scrollMagicScene: {},
            timelines: {},
            tweeners: {},
            isPlaying: { Biz: !1, EarlyDays: !1, Ghibli: !1, Potion: !1 },
          };
        },
        created: function () {
          window.addEventListener("beforeunload", function () {
            return window.scroll(0, 0);
          });
        },
        mounted: function () {
          this.playIntroScene(),
            this.setupScenes(),
            this.manageLoops(),
            this.sceneMyCV(),
            this.sceneBizTitle(),
            this.sceneBizZen(),
            this.sceneBizEverybody(),
            this.sceneBizEnding(),
            this.sceneEarlyDays(),
            this.sceneOcean(),
            this.sceneFloatingHead(),
            this.sceneSunset(),
            this.sceneArtPhiGames(),
            this.sceneMario(),
            this.sceneGhibli(),
            this.sceneWrapper();
        },
        beforeUnmount: function () {
          (this.isPlaying = { Biz: !1, EarlyDays: !1, Ghibli: !1, Potion: !1 }),
            Object(f["h"])("is-playing-mario", "blue-background"),
            Object.values(this.timelines).forEach(function (t) {
              return t.kill();
            }),
            (this.timelines = {}),
            Object.values(this.tweeners).forEach(function (t) {
              return t.kill();
            }),
            (this.tweeners = {}),
            this.scrollMagicController.destroy(!0),
            (this.scrollMagicController = null),
            Object.values(this.scrollMagicScene).forEach(function (t) {
              return t.destroy(!0);
            }),
            (this.scrollMagicScene = {});
        },
        methods: {
          setupScenes: function () {
            var t = this,
              e = {
                myCV: f["a"].get("#curriculum.scene"),
                bizTitle: f["a"].get("#bizTitle.scene"),
                biz1: f["a"].get("#biz1.scene"),
                biz2: f["a"].get("#biz2.scene"),
                biz3: f["a"].get("#biz3.scene"),
                earlyTitle: f["a"].get("#earlyTitle.scene"),
                early1: f["a"].get("#early-days.scene"),
                early2: f["a"].get("#early-days2.scene"),
                early3: f["a"].get("#early-days3.scene"),
                artPhiGamesTitle: f["a"].get("#ArtPhiGamesTitle.scene"),
                mario: f["a"].get("#Mario.scene"),
                ghibli: f["a"].get("#Ghibli.scene"),
                ghibli2: f["a"].get("#Ghibli2.scene"),
                ghibli3: f["a"].get("#Ghibli3.scene"),
                ghibli4: f["a"].get("#Ghibli4.scene"),
                wrapper: f["a"].get("#wrapperTitle.scene"),
                thanks: f["a"].get("#thanks.scene"),
              };
            Object.entries(e).forEach(function (e) {
              var n = Object(V["a"])(e, 2),
                a = n[0],
                i = n[1];
              (t.tweeners[a] = new o["h"]()),
                (t.timelines[a] = new o["h"]({ paused: !0 })),
                (t.scrollMagicScene[a] = new s["Scene"]({
                  triggerElement: i,
                  offset: -t.$viewport.height / 2,
                  duration: i.offsetHeight,
                })
                  .setTween(t.tweeners[a])
                  .addTo(t.scrollMagicController)
                  .reverse(!0)
                  .setClassToggle(i, "active")),
                t.tweeners[a]
                  .to(i, 1, { autoAlpha: 1 })
                  .eventCallback("onUpdate", function () {
                    o["i"].to(t.timelines[a], 0.5, {
                      progress: t.tweeners[a].progress(),
                      ease: o["b"].easeNone,
                    });
                  });
            });
          },
          playIntroScene: function () {
            var t = new o["h"]();
            t.addLabel("enter", 1)
              .from(
                "#intro .title",
                2,
                {
                  autoAlpha: 0,
                  rotationX: 90,
                  transformOrigin: "50% 50% -100px",
                  ease: o["e"].easeOut,
                },
                "enter"
              )
              .from(
                "#intro .std",
                2,
                { autoAlpha: 0, x: -32, ease: o["e"].easeOut },
                "enter+=1.5"
              );
          },
          manageLoops: function () {
            var t = this;
            this.scrollMagicScene.myCV.on("enter", function () {
              return (t.isPlaying.Biz = !1);
            }),
              this.scrollMagicScene.bizTitle.on("enter", function () {
                return (t.isPlaying.Biz = !0);
              }),
              this.scrollMagicScene.biz1.on("enter", function () {
                return (t.isPlaying.Biz = !0);
              }),
              this.scrollMagicScene.biz2.on("enter", function () {
                return (t.isPlaying.Biz = !0);
              }),
              this.scrollMagicScene.biz3.on("enter", function () {
                return (t.isPlaying.Biz = !0);
              }),
              this.scrollMagicScene.earlyTitle.on("enter", function () {
                (t.isPlaying.Biz = !0), (t.isPlaying.EarlyDays = !0);
              }),
              this.scrollMagicScene.early1.on("enter", function () {
                (t.isPlaying.Biz = !1), (t.isPlaying.EarlyDays = !0);
              }),
              this.scrollMagicScene.early2.on("enter", function (e) {
                Object(f["f"])(e) && (t.isPlaying.EarlyDays = !0);
              }),
              this.scrollMagicScene.early3.on("enter", function () {
                Object(f["h"])("is-playing-mario", "blue-background");
              }),
              this.scrollMagicScene.artPhiGamesTitle.on("enter", function () {
                Object(f["h"])("is-playing-mario", "blue-background");
              }),
              this.scrollMagicScene.mario
                .on("enter", function (e) {
                  Object(f["e"])(e) && (t.isPlaying.EarlyDays = !1),
                    Object(f["f"])(e) && Object(f["b"])("blue-background");
                })
                .on("leave", function (e) {
                  Object(f["f"])(e) && (t.isPlaying.Ghibli = !1),
                    Object(f["h"])("blue-background");
                }),
              this.scrollMagicScene.ghibli
                .on("enter", function () {
                  (t.isPlaying.Ghibli = !0),
                    Object(f["h"])("is-playing-mario"),
                    Object(f["b"])("blue-background");
                })
                .on("leave", function () {
                  return Object(f["h"])("blue-background");
                }),
              this.scrollMagicScene.ghibli2
                .on("enter", function () {
                  return Object(f["b"])("blue-background");
                })
                .on("leave", function () {
                  return Object(f["h"])("blue-background");
                }),
              this.scrollMagicScene.ghibli3
                .on("enter", function () {
                  return Object(f["b"])("blue-background");
                })
                .on("leave", function () {
                  return Object(f["h"])("blue-background");
                }),
              this.scrollMagicScene.ghibli4
                .on("enter", function () {
                  return Object(f["b"])("blue-background");
                })
                .on("leave", function () {
                  return Object(f["h"])("blue-background");
                }),
              this.scrollMagicScene.wrapper.on("enter", function () {
                Object(f["h"])("blue-background"),
                  (t.isPlaying.Ghibli = !0),
                  (t.isPlaying.Potion = !1);
              }),
              this.scrollMagicScene.thanks.on("enter", function () {
                (t.isPlaying.Ghibli = !1), (t.isPlaying.Potion = !0);
              });
          },
          sceneMyCV: function () {
            this.timelines.myCV
              .set("#curriculum .title-container", { autoAlpha: 1 })
              .addLabel("start", 0)
              .from(
                "#curriculum .title",
                2,
                {
                  yPercent: -50,
                  autoAlpha: 0,
                  rotationX: 90,
                  transformOrigin: "50% 50% -100px",
                  ease: o["e"].easeOut,
                },
                "start"
              )
              .from(
                "#curriculum .std",
                2,
                {
                  yPercent: 50,
                  autoAlpha: 0,
                  rotationX: -90,
                  transformOrigin: "50% 50% -100px",
                  ease: o["e"].easeOut,
                },
                "start"
              )
              .to("#curriculum .title, #curriculum .std", 2, {
                autoAlpha: 0,
                yPercent: -100,
              });
          },
          sceneBizTitle: function () {
            this.timelines.bizTitle
              .set("#filomena", {
                autoAlpha: 0,
                scale: 0,
                xPercent: 600,
                yPercent: 100,
              })
              .set("#dino", { scale: 0, xPercent: 400, yPercent: 100 })
              .set("#astro, #coffee, #et, #octo", {
                autoAlpha: 0,
                scale: 0,
                xPercent: 400,
                yPercent: 100,
              })
              .set("#bizTitle .title-container, #biz1 .container", {
                autoAlpha: 1,
              })
              .addLabel("start", 0)
              .from(
                "#bizTitle .title",
                6,
                {
                  yPercent: -50,
                  autoAlpha: 0,
                  rotationX: 90,
                  transformOrigin: "50% 50% -100px",
                  ease: o["e"].easeOut,
                },
                "start"
              )
              .to("#bizTitle .title", 6, { autoAlpha: 0, yPercent: -100 })
              .staggerFrom(
                "#smart, #open",
                6,
                { autoAlpha: 0, scale: 0, ease: o["e"].easeOut },
                0.2,
                "start+=2"
              )
              .from("#abiz", 6, { scale: 0 }, "start+=2");
          },
          sceneBizZen: function () {
            this.timelines.biz1
              .addLabel("start", 0)
              .from("#zen", 4, { xPercent: 70, ease: o["e"].easeOut }, "start")
              .to(
                "#abiz",
                4,
                { autoAlpha: 0, xPercent: -100, ease: o["e"].easeIn },
                "start"
              )
              .staggerTo(
                "#smart, #open",
                4,
                { autoAlpha: 0, scale: 0, ease: o["e"].easeOut },
                0.2,
                "start"
              );
          },
          sceneBizEverybody: function () {
            this.timelines.biz2
              .addLabel("start", 0)
              .to("#zen", 4, { yPercent: 130, ease: o["e"].easeIn }, "start")
              .staggerTo(
                "#dino, #astro, #coffee, #et, #filomena, #octo",
                5,
                {
                  autoAlpha: 1,
                  scale: 1,
                  xPercent: 0,
                  yPercent: 0,
                  ease: o["e"].easeOut,
                },
                0.2,
                "start"
              );
          },
          sceneBizEnding: function () {
            this.timelines.biz3
              .addLabel("start", 0)
              .to(
                "#dino",
                6,
                { yPercent: 200, scale: 1.5, ease: o["e"].easeIn },
                "start"
              )
              .to(
                "#et",
                6,
                {
                  xPercent: -250,
                  yPercent: -100,
                  autoAlpha: 0,
                  ease: o["e"].easeIn,
                },
                "start"
              )
              .to(
                "#filomena",
                6,
                {
                  xPercent: -300,
                  yPercent: 300,
                  autoAlpha: 0,
                  ease: o["e"].easeIn,
                },
                "start"
              )
              .to(
                "#octo",
                6,
                {
                  xPercent: -650,
                  yPercent: 400,
                  autoAlpha: 0,
                  ease: o["e"].easeIn,
                },
                "start"
              )
              .to(
                "#astro",
                12,
                {
                  bottom: "-10vh",
                  right: "-10vw",
                  scale: 4,
                  ease: o["e"].easeInOut,
                },
                "start"
              )
              .to(
                "#coffee",
                12,
                { top: "8rem", left: 0, scale: 4, ease: o["e"].easeInOut },
                "start"
              );
          },
          sceneEarlyDays: function () {
            var t = this.createParallax({ triggerElement: "#earlyTitle" });
            t
              .addLabel("start", 0)
              .fromTo(
                ".cloud-1",
                10,
                { yPercent: 50, xPercent: 20 },
                { yPercent: -85, xPercent: -20 },
                "action"
              )
              .fromTo(
                ".cloud-2",
                10,
                { yPercent: 40, xPercent: -10 },
                { yPercent: -40, xPercent: 85 },
                "action"
              )
              .fromTo(
                ".cloud-3",
                10,
                { yPercent: 70, xPercent: 40 },
                { yPercent: -85, xPercent: -40 },
                "action"
              ),
              this.timelines.earlyTitle
                .set(".pepe-scenery", { autoAlpha: 0 })
                .set("#biz1 .container", { autoAlpha: 1 })
                .addLabel("start", 0)
                .to(
                  "#astro",
                  4,
                  { yPercent: 600, xPercent: 200, ease: o["d"].easeIn },
                  "start"
                )
                .to(
                  "#coffee",
                  4,
                  { yPercent: -600, xPercent: -200, ease: o["d"].easeIn },
                  "start"
                )
                .to(
                  "#earlyTitle .title-container",
                  2,
                  { autoAlpha: 1 },
                  "start"
                )
                .from(
                  "#earlyTitle .title",
                  4,
                  {
                    yPercent: -50,
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: "50% 50% -100px",
                    ease: o["e"].easeOut,
                  },
                  "start"
                )
                .from(
                  "#earlyTitle .std",
                  4,
                  {
                    yPercent: 50,
                    autoAlpha: 0,
                    rotationX: -90,
                    transformOrigin: "50% 50% 100px",
                    ease: o["e"].easeOut,
                  },
                  "start"
                )
                .to("#earlyTitle .title, #earlyTitle .std", 4, {
                  autoAlpha: 0,
                  yPercent: -100,
                });
          },
          sceneOcean: function () {
            var t = this.createParallax({
                triggerElement: "#early-days2",
                duration: 4 * this.$viewport.height,
              }),
              e = window.innerWidth + f["a"].get(".pepe").offsetWidth + 16;
            t
              .addLabel("start")
              .to(".pepe", 10, { x: "-".concat(e, "px"), scale: 0.5 }, "start"),
              this.timelines.early1
                .set("#biz1 .container", { autoAlpha: 0 })
                .to(".pepe-scenery", 8, { autoAlpha: 1 });
          },
          sceneFloatingHead: function () {
            this.timelines.early2.addLabel("start", 0);
          },
          sceneSunset: function () {
            this.timelines.early3
              .set("#Mario .container", { autoAlpha: 0 })
              .to(".pepe-scenery", 8, { autoAlpha: 0 });
          },
          sceneArtPhiGames: function () {
            this.timelines.artPhiGamesTitle
              .set("#Mario .container", { autoAlpha: 0 })
              .addLabel("start", 1)
              .to("#ArtPhiGamesTitle .title-container", 1, { autoAlpha: 1 })
              .staggerFrom("#ArtPhiGamesTitle .title .line", 4, {
                yPercent: -50,
                autoAlpha: 0,
                rotationX: 90,
                transformOrigin: "50% 50% -100px",
                ease: o["e"].easeOut,
                stagger: 0.5,
              })
              .from(
                "#ArtPhiGamesTitle .std",
                4,
                {
                  yPercent: 50,
                  autoAlpha: 0,
                  rotationX: -90,
                  transformOrigin: "50% 50% 100px",
                  ease: o["e"].easeOut,
                },
                "-=1"
              )
              .to("#ArtPhiGamesTitle .title, #ArtPhiGamesTitle .std", 3, {
                yPercent: -100,
                autoAlpha: 0,
              })
              .set("#earlyTitle .title-container", { autoAlpha: 1 });
          },
          sceneMario: function () {
            var t = this;
            this.tweeners.mario
              .to("#earlyTitle .title-container", 0.5, { autoAlpha: 0 })
              .to("#Mario .container", 1, {
                autoAlpha: 1,
                zIndex: 4,
                onComplete: function () {
                  var e = document.getElementById("Mario");
                  if (!e || !e.classList.contains("active")) return !1;
                  if (document.body.classList.contains("has-played-mario"))
                    return Object(f["b"])("blue-background"), !1;
                  var n = new AudioContext();
                  "running" === n.state && t.audioMarioStart.play(),
                    Object(f["b"])("is-playing-mario");
                },
              });
          },
          sceneGhibli: function () {
            var t = this.createParallax({
              triggerElement: "#Ghibli",
              timelineTime: 2,
              duration: 4 * this.$viewport.height,
            });
            t.addLabel("start", 0)
              .to(
                "#Ghibli .grass1",
                20,
                { yPercent: 10, xPercent: -100, ease: o["c"].easeIn },
                "start"
              )
              .to(
                "#Ghibli .grass2",
                20,
                { yPercent: 10, xPercent: 100, ease: o["c"].easeIn },
                "start"
              )
              .addLabel("start");
            var e = this.createParallax({
              triggerElement: "#Ghibli",
              timelineTime: 6,
              duration: 4 * this.$viewport.height,
            });
            e.addLabel("start", 0)
              .set("#Ghibli .sky .c1, #Ghibli .sky .c2", { yPercent: 50 })
              .to(
                "#Ghibli .sky .c1",
                20,
                {
                  yPercent: 10,
                  xPercent: -50,
                  scale: 1.5,
                  ease: o["c"].easeIn,
                },
                "start"
              )
              .to(
                "#Ghibli .sky .c2",
                20,
                { yPercent: 0, scale: 1.5, ease: o["c"].easeIn },
                "start"
              );
            var n = this.createParallax({
                triggerElement: "#Ghibli",
                timelineTime: 3,
                duration: 5 * this.$viewport.height,
              }),
              a = this.$viewport.isMobile
                ? "-".concat(
                    window.innerWidth +
                      f["a"].get(".castle-container").offsetWidth +
                      16,
                    "px"
                  )
                : "-120vw";
            n.to(".castle-container", 10, { x: a, y: "-70vh", scale: 0.5 }),
              this.timelines.ghibli
                .addLabel("start", 0)
                .to("#Mario .container", 4, { autoAlpha: 0 }, "start")
                .to("#Ghibli .container", 4, { autoAlpha: 1 }, "start"),
              this.timelines.ghibli2.addLabel("start", 0),
              this.timelines.ghibli3.addLabel("start", 0),
              this.timelines.ghibli4.addLabel("start", 0);
          },
          sceneWrapper: function () {
            this.timelines.wrapper
              .addLabel("start", 0)
              .to("#Ghibli .container", 2, { autoAlpha: 0 }, "start")
              .from("#wrapperTitle .static-container", 2, { autoAlpha: 1 });
          },
          createParallax: function (t) {
            var e = He(
                {
                  tweenerElement: ".tweenerElement",
                  tweenerTime: 20,
                  timelineTime: 4,
                  offset: -this.$viewport.height / 2,
                  duration: 3.5 * this.$viewport.height,
                  triggerElement: "",
                },
                t
              ),
              n = e.tweenerElement,
              a = e.tweenerTime,
              i = e.timelineTime,
              r = e.offset,
              c = e.duration,
              l = e.triggerElement,
              u = new o["h"]({ paused: !0 }),
              d = new o["h"]();
            return (
              d
                .to(n, a, { rotation: 0 })
                .eventCallback("onUpdate", function () {
                  o["i"].to(u, i, {
                    progress: d.progress(),
                    ease: o["e"].easeOut,
                  });
                }),
              new s["Scene"]({ triggerElement: l, offset: r, duration: c })
                .setTween(d)
                .addTo(this.scrollMagicController),
              u
            );
          },
        },
      },
      $e = Ne,
      We = (n("3168"), Object(g["a"])($e, q, F, !1, null, null, null)),
      Ye = We.exports,
      Re = n("323e"),
      Ze = n.n(Re);
    a["a"].use(G["a"]);
    var Xe = "ivan.is",
      Qe = "https://ivan42118.github.io/ivan.is.github.io/", //tadinya https://iuri.is
      Ue =
        "Frontend developer heavily influenced by storytelling, interactions, and UX. Addicted to music, visual arts, and games.",
      Je = new G["a"]({
        mode: "history",
        base: "https://ivan42118.github.io/ivan.is.github.io/",
        routes: [
          {
            path: "https://ivan42118.github.io/ivan.is.github.io/",
            name: ".is()",
            component: Ye,
            meta: {
              title: Xe,
              bodyClass: "page-home",
              metaTags: [
                { name: "description", content: Ue },
                { name: "og:title", content: Xe },
                { name: "og:url", content: Qe },
                { name: "og:description", content: Ue },
                { name: "twitter:title", content: Xe },
                { name: "twitter:url", content: Qe },
                { name: "twitter:description", content: Ue },
              ],
            },
          },
          {
            path: "/about",
            name: ".about()",
            component: function () {
              return n.e("chunk-0294ec15").then(n.bind(null, "f820"));
            },
            meta: {
              title: "ivan.about",
              bodyClass: "page-about",
              metaTags: [
                { name: "description", content: Ue },
                { name: "og:title", content: "ivan.about" },
                { name: "og:url", content: Qe + "about" },
                { name: "og:description", content: Ue },
                { name: "twitter:title", content: "ivan.about" },
                { name: "twitter:url", content: Qe + "about" },
                { name: "twitter:description", content: Ue },
              ],
            },
          },
          {
            path: "/preview/:character",
            name: "Preview",
            component: function () {
              return n.e("chunk-2cf5fa35").then(n.bind(null, "5b0b"));
            },
          },
          {
            path: "*",
            name: ".err(404)",
            component: function () {
              return n.e("chunk-e7d8d87a").then(n.bind(null, "8cdb"));
            },
            meta: {
              title: "ivan.err(404)",
              bodyClass: "page-err404",
              metaTags: [
                { name: "description", content: "Ops! Page not found" },
                { name: "og:title", content: "ivan.err(404)" },
                { name: "og:url", content: Qe },
                { name: "og:description", content: "Ops! Page not found" },
                { name: "twitter:title", content: "ivan.err(404)" },
                { name: "twitter:url", content: Qe },
                { name: "twitter:description", content: "Ops! Page not found" },
              ],
            },
          },
        ],
      });
    Ze.a.configure({
      easing: "ease-out",
      speed: 500,
      trickleSpeed: 100,
      showSpinner: !1,
    }),
      Je.beforeEach(function (t, e, n) {
        document.body.classList.add("locked"),
          Ze.a.start(),
          document.body.classList.remove(
            "is-playing-mario",
            "has-played-mario",
            "is-nav-open",
            "blue-background"
          );
        var a = t.matched
            .slice()
            .reverse()
            .find(function (t) {
              return t.meta && t.meta.title;
            }),
          i = t.matched
            .slice()
            .reverse()
            .find(function (t) {
              return t.meta && t.meta.metaTags;
            });
        if (
          (a && (document.title = a.meta.title),
          Array.from(
            document.querySelectorAll("[data-vue-router-controlled]")
          ).map(function (t) {
            return t.parentNode.removeChild(t);
          }),
          !i)
        )
          return n();
        i.meta.metaTags
          .map(function (t) {
            var e = document.createElement("meta");
            return (
              Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n]);
              }),
              e.setAttribute("data-vue-router-controlled", ""),
              e
            );
          })
          .forEach(function (t) {
            return document.head.appendChild(t);
          }),
          n();
      }),
      Je.afterEach(function () {
        setTimeout(function () {
          window.scroll(0, 0),
            Ze.a.done(),
            document.body.classList.remove(
              "locked",
              "is-playing-mario",
              "has-played-mario",
              "is-nav-open",
              "blue-background"
            );
        }, 1e3);
      });
    var Ke = Je,
      tn = n("0284"),
      en = n.n(tn);
    function nn() {
      a["a"].prototype.$viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= 568,
        isTablet: window.innerWidth <= 1024,
        isDesktop: window.innerWidth > 1024,
      };
    }
    (a["a"].config.productionTip = !1),
      a["a"].use(en.a, { id: "UA-75833214-1", router: Ke }),
      (a["a"].prototype.$viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= 768,
        isTablet: window.innerWidth <= 1024,
        isDesktop: window.innerWidth > 1024,
      }),
      window.addEventListener("resize", nn),
      new a["a"]({
        router: Ke,
        render: function (t) {
          return t(E);
        },
      }).$mount("#app");
  },
  "581d": function (t, e, n) {
    t.exports = n.p + "media/smw_stomp_no_damage.f0ed2462.ogg";
  },
  "5fb0": function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "c", function () {
        return c;
      }),
      n.d(e, "b", function () {
        return l;
      }),
      n.d(e, "d", function () {
        return u;
      });
    n("1c01"), n("58b2"), n("8e6e"), n("f3e2"), n("d25f"), n("ac6a"), n("456d");
    var a = n("bd86"),
      i = n("cffa");
    function r(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? r(Object(n), !0).forEach(function (e) {
              Object(a["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var o = { repeat: -1, yoyo: !0 },
      c = s(s({}, o), {}, { ease: i["d"].easeOut }),
      l =
        (s(s({}, o), {}, { ease: i["d"].easeIn }),
        s(s({}, o), {}, { ease: i["d"].easeInOut })),
      u = s(s({}, o), {}, { ease: i["a"].easeOut.config(1, 0.1) });
  },
  "686a": function (t, e, n) {
    "use strict";
    n("0bb5");
  },
  "706b": function (t, e, n) {
    "use strict";
    n("97f6");
  },
  "73f8": function (t, e, n) {
    t.exports = n.p + "media/smw_power-up_appears.1f4184e6.ogg";
  },
  7684: function (t, e, n) {},
  7976: function (t, e, n) {
    t.exports = n.p + "media/smw_stomp.cc3fd551.ogg";
  },
  "7a64": function (t, e, n) {},
  "7d0c": function (t, e, n) {},
  "869b": function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [e("PotionSVG")], 1);
      },
      i = [],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("f3e2"),
        n("d25f"),
        n("ac6a"),
        n("456d"),
        n("bd86")),
      s = n("5fb0"),
      o = n("025e"),
      c = n("3762"),
      l = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              id: "potion",
              viewBox: "0 0 100 100",
            },
          },
          [
            e("g", { staticClass: "potion-potion" }, [
              e("g", { staticClass: "potion-vase" }, [
                e("g", { staticClass: "potion-bottle" }, [
                  e("path", {
                    attrs: {
                      fill: "#00c8c8",
                      d: "M55.6 23.2H44.8c-2.1 0-3.8-1.8-3.8-3.8l.1-6.4c0-1.6 1.4-3 3-3l12.6.1c1.6 0 3 1.4 3 3l-.1 6.4c-.3 2-2 3.7-4 3.7z",
                    },
                  }),
                  e("path", {
                    attrs: {
                      fill: "#fff",
                      d: "M64.7 25.8c0-.2.2-6.2.2-6.2.1-2.2-1.8-4.1-4-4l-20.4-.1c-2.2 0-4 1.8-4 4.1 0 0 .1 5.9 0 6.2C25.8 31 18.6 42 18.6 54.7 18.4 72.5 32.6 87 50.1 87c17.5.1 31.9-14.3 32-32.2.1-12.8-7-23.7-17.4-29zm10.1 28.8c-.1 13.7-11.1 24.7-24.6 24.7-13.5-.1-24.4-11.2-24.3-24.9S37 29.7 50.5 29.7c13.4.1 24.4 11.2 24.3 24.9z",
                      opacity: ".8",
                    },
                  }),
                  e("path", {
                    attrs: {
                      fill: "#e8d7ef",
                      d: "M50.4 29.7c-13.5 0-24.5 11.1-24.6 24.7 0 13.7 10.8 24.9 24.3 24.9s24.5-11.1 24.6-24.7c.2-13.7-10.8-24.8-24.3-24.9z",
                      opacity: ".8",
                    },
                  }),
                  e("g", { staticClass: "potion-liquids" }, [
                    e(
                      "path",
                      {
                        staticClass: "potion-liquid2",
                        attrs: { fill: "#4612a5" },
                      },
                      [
                        e("animate", {
                          attrs: {
                            dur: "1.6s",
                            repeatCount: "indefinite",
                            attributeName: "d",
                            values:
                              "M73.5 50.4c-.9-4.8-4.5-4.5-7.9-3.8-9.9 1.8-23.5 13-31.1 14.3-5.4 1-8-5.2-7.4-2.2 2.3 12.7 14.6 21.3 27.4 19 12.8-2.2 21.3-14.4 19-27.3z;\n                       M73.5 50.4c-.9-4.8-1 5.3-4.4 5.9-11 2-19.7-6.3-36-3.9-5.5.8-6.6 3.3-6.1 6.3 2.3 12.7 14.6 21.3 27.4 19 12.9-2.2 21.4-14.4 19.1-27.3z;\n                       M73.5 50.4c-.9-4.8-4.5-4.5-7.9-3.8-9.9 1.8-23.5 13-31.1 14.3-5.4 1-8-5.2-7.4-2.2 2.3 12.7 14.6 21.3 27.4 19 12.8-2.2 21.3-14.4 19-27.3z;",
                            calcMode: "spline",
                            keySplines:
                              "0.455 0.03 0.515 0.955;\n                       0.455 0.03 0.515 0.955",
                          },
                        }),
                      ]
                    ),
                    e(
                      "path",
                      {
                        staticClass: "potion-liquid",
                        attrs: { fill: "#5918df" },
                      },
                      [
                        e("animate", {
                          attrs: {
                            dur: "1.4s",
                            repeatCount: "indefinite",
                            attributeName: "d",
                            values:
                              "M27.1 58.8c-.9-4.8 2.6-5.8 6.1-6.3 9.9-1.8 26.5 3.9 34.1 2.6 5.4-1 5.7-7.7 6.2-4.6 2.3 12.7-6.2 25.1-19 27.4-12.8 2.3-25-6.2-27.4-19.1z;\n                       M27.1 58.8c-.9-4.8 2.8 2.9 6.2 2.2 9.9-1.8 21.9-13.1 33-14.6 5.5-.7 6.6.9 7.1 3.9 2.3 12.7-6.2 25.1-19 27.4-12.7 2.5-24.9-6-27.3-18.9z;\n                       M27.1 58.8c-.9-4.8 2.6-5.8 6.1-6.3 9.9-1.8 26.5 3.9 34.1 2.6 5.4-1 5.7-7.7 6.2-4.6 2.3 12.7-6.2 25.1-19 27.4-12.8 2.3-25-6.2-27.4-19.1z;",
                            calcMode: "spline",
                            keySplines:
                              "0.455 0.03 0.515 0.955;\n                       0.455 0.03 0.515 0.955",
                          },
                        }),
                      ]
                    ),
                  ]),
                ]),
                e("g", { staticClass: "potion-drops" }, [
                  e("ellipse", {
                    staticClass: "potion-drop2",
                    attrs: {
                      cx: "49.4",
                      cy: "37.5",
                      fill: "#5918df",
                      rx: "4.6",
                      ry: "4.6",
                    },
                  }),
                  e("ellipse", {
                    staticClass: "potion-drop",
                    attrs: {
                      cx: "59.8",
                      cy: "42",
                      fill: "#5918df",
                      rx: "2.8",
                      ry: "2.8",
                    },
                  }),
                ]),
              ]),
            ]),
          ]
        );
      },
      u = [],
      d = n("2877"),
      f = {},
      p = Object(d["a"])(f, l, u, !1, null, null, null),
      h = p.exports;
    function m(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function b(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? m(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : m(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var g = {
        name: "PotionCharacter",
        components: { PotionSVG: h },
        mixins: [c["a"]],
        methods: {
          init: function () {
            var t = Object(o["d"])("#potion");
            this.loop
              .addLabel("start")
              .to(t, 3, b({ transformOrigin: "50% 90%", rotation: 15 }, s["b"]))
              .fromTo(
                t.potionDrop,
                0.5,
                { yPercent: 100, rotation: 0, scale: 1 },
                {
                  transformOrigin: "20% 120%",
                  rotation: 360,
                  yPercent: -100,
                  scale: 0,
                  repeat: -1,
                },
                "start"
              )
              .fromTo(
                t.potionDrop2,
                0.7,
                { yPercent: 100, rotation: 0, scale: 1 },
                {
                  transformOrigin: "0% 120%",
                  rotation: -360,
                  yPercent: -100,
                  scale: 0,
                  repeat: -1,
                },
                "start"
              );
          },
        },
      },
      v = g,
      y = (n("aceb"), Object(d["a"])(v, a, i, !1, null, null, null));
    e["a"] = y.exports;
  },
  "8a09": function (t, e, n) {},
  "8dc4": function (t, e, n) {
    "use strict";
    n("371c");
  },
  "8f41": function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      i = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", [
            e(
              "div",
              {
                staticClass: "pepe-scenery",
                attrs: { role: "img", "aria-labelledby": "pepeDesc" },
              },
              [
                e(
                  "p",
                  { staticClass: "ariaLabel", attrs: { id: "pepeDesc" } },
                  [
                    t._v(
                      "\n      A floating head carrying musical instruments in the ear, foliage and\n      monuments in the hair, flies over a greenish ocean during the sunset\n    "
                    ),
                  ]
                ),
                e("div", { staticClass: "sky" }),
                e("div", { staticClass: "ocean" }, [
                  e("div", { staticClass: "sky-mask" }),
                  e("div", { staticClass: "ocean-waves w1" }),
                  e("div", { staticClass: "ocean-waves w2" }),
                ]),
              ]
            ),
          ]);
        },
      ],
      r = n("3762"),
      s = {
        name: "OceanCharacter",
        mixins: [r["a"]],
        methods: {
          init: function () {
            var t = document.querySelector(".ocean-waves.w1"),
              e = document.querySelector(".ocean-waves.w2");
            this.loop
              .fromTo(
                t,
                16,
                { xPercent: 10, yPercent: 0, zIndex: 9 },
                { xPercent: 0, yPercent: -100, zIndex: 1, repeat: -1 }
              )
              .fromTo(
                e,
                16,
                { xPercent: 10, yPercent: 0, zIndex: 9 },
                { xPercent: 0, yPercent: -100, zIndex: 1, repeat: -1 },
                "-=8"
              );
          },
        },
      },
      o = s,
      c = (n("288e"), n("2877")),
      l = Object(c["a"])(o, a, i, !1, null, null, null);
    e["a"] = l.exports;
  },
  "97f6": function (t, e, n) {},
  "9d19": function (t, e, n) {
    "use strict";
    n("2ca1");
  },
  a609: function (t, e, n) {},
  a7b2: function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      i = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", [
            e("div", { staticClass: "pepe bg-head" }, [
              e("div", { staticClass: "blink" }),
              e("div", { staticClass: "keyboard" }),
              e("div", { staticClass: "minas" }),
              e("div", { staticClass: "rio" }, [
                e("div", { staticClass: "particles" }),
                e("div", { staticClass: "vase" }, [
                  e("div", { staticClass: "bg-rio_vase_foliage_3" }),
                  e("div", { staticClass: "bg-rio_vase_foliage_2" }),
                  e("div", { staticClass: "bg-rio_vase_foliage_1" }),
                  e("div", { staticClass: "bg-rio_vase" }),
                ]),
                e("div", { staticClass: "bg-rio_pao_cristo" }),
                e("div", { staticClass: "waterfall" }),
                e("div", { staticClass: "bg-rio_palmtree_1" }),
                e("div", { staticClass: "bg-rio_palmtree_2" }),
              ]),
              e("div", { staticClass: "am-pa" }, [
                e("div", { staticClass: "bg-ampa_foliage_3" }),
                e("div", { staticClass: "bg-ampa_tree_2" }),
                e("div", { staticClass: "bg-ampa_foliage_2" }),
                e("div", { staticClass: "bg-ampa_parrot_wing" }),
                e("div", { staticClass: "bg-ampa_foliage_1" }),
                e("div", { staticClass: "bg-ampa_ver_o_peso" }),
                e("div", { staticClass: "bg-ampa_tree_1" }),
                e("div", { staticClass: "bg-ampa_oxes" }),
              ]),
              e("div", { staticClass: "metals" }, [
                e("div", { staticClass: "bg-metals_sax" }),
                e("div", { staticClass: "bg-metals_trumpet" }),
                e("div", { staticClass: "bg-metals_trombone" }, [
                  e("div", { staticClass: "bg-metals_trombone_thing" }),
                ]),
              ]),
              e("div", { staticClass: "bonfim-church" }),
              e("div", { staticClass: "bonfim b1" }),
              e("div", { staticClass: "ear bg-head-ear" }),
            ]),
          ]);
        },
      ],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("d25f"),
        n("456d"),
        n("ac6a"),
        n("f3e2"),
        n("bd86")),
      s = n("cffa"),
      o = n("025e"),
      c = n("3762"),
      l = n("5fb0");
    function u(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function d(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? u(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var f = {
        name: "PepeCharacter",
        mixins: [c["a"]],
        data: function () {
          return { particlesLoops: [] };
        },
        methods: {
          initParticles: function () {
            if (!this.$viewport.isMobile) {
              var t = this.$viewport.isTablet ? 10 : 15,
                e = document.querySelector(".pepe .particles");
              if (e)
                for (var n, a = 0; a < t; a++)
                  (n = document.createElement("div")),
                    (n.className = "particle p".concat(a)),
                    e.appendChild(n),
                    (this.particlesLoops[a] = new s["h"]()),
                    this.particlesLoops[a]
                      .delay(Object(o["g"])(0, 7))
                      .to(".particle.p".concat(a), Object(o["g"])(3, 5), {
                        y: Object(o["g"])(100, 1e3),
                        x: Object(o["g"])(100, 500),
                        rotationY: 360 * Object(o["g"])(5, 20),
                        rotationZ: 360 * Object(o["g"])(5, 20),
                        autoAlpha: 0,
                        repeat: -1,
                      });
            }
          },
          init: function () {
            this.initParticles();
            var t = document.querySelector(".bg-ampa_parrot_wing"),
              e = document.querySelector(".bg-metals_sax"),
              n = document.querySelector(".bg-metals_trumpet"),
              a = document.querySelector(".bg-metals_trombone"),
              i = document.querySelector(".bg-metals_trombone_thing"),
              r = document.querySelector(".pepe"),
              s = document.querySelector(".pepe .blink"),
              c = document.querySelector(".bg-head-ear"),
              u = 0.3;
            this.loop
              .addLabel("start", 0)
              .fromTo(
                s,
                0.2,
                { autoAlpha: 1 },
                {
                  autoAlpha: 0,
                  repeat: -1,
                  repeatDelay: Object(o["g"])(1, 2.5),
                },
                "start"
              ),
              this.$viewport.isMobile ||
                this.loop
                  .to(
                    e,
                    u,
                    d(
                      {
                        transformOrigin: "25% 10%",
                        yPercent: Object(o["g"])(-10, 0),
                        rotation: Object(o["g"])(-5, 6),
                      },
                      l["a"]
                    ),
                    "start"
                  )
                  .to(
                    n,
                    2 * u,
                    d(
                      {
                        transformOrigin: "30% 100%",
                        rotation: Object(o["g"])(-20, 25),
                        yPercent: 10,
                      },
                      l["c"]
                    ),
                    "start"
                  )
                  .to(
                    a,
                    4 * u,
                    d(
                      {
                        transformOrigin: "0% 100%",
                        rotation: Object(o["g"])(-40, 45),
                        yPercent: 10,
                      },
                      l["b"]
                    ),
                    "start"
                  )
                  .to(
                    i,
                    u / 2,
                    d(
                      {
                        transformOrigin: "0% 0%",
                        xPercent: Object(o["g"])(-25, 15),
                      },
                      l["a"]
                    ),
                    "start"
                  ),
              this.$viewport.isDesktop &&
                this.loop
                  .to(
                    t,
                    1,
                    d(
                      {
                        transformOrigin: "0% 0%",
                        rotation: Object(o["g"])(-5, 5),
                        xPercent: Object(o["g"])(-5, 0),
                        yPercent: Object(o["g"])(0, 5),
                      },
                      l["d"]
                    ),
                    "start"
                  )
                  .to(
                    c,
                    u,
                    d(
                      {
                        transformOrigin: "40% 50%",
                        rotationY: Object(o["g"])(5, 15),
                      },
                      l["a"]
                    ),
                    "start"
                  )
                  .to(
                    r,
                    3,
                    d({ yPercent: Object(o["g"])(-3, 3) }, l["b"]),
                    "start"
                  );
          },
          toggleGsapAnimations: function (t) {
            t
              ? (this.$el.classList.remove("animationStop"),
                this.loop.play(),
                this.particlesLoops.forEach(function (t) {
                  return t.play();
                }))
              : (this.$el.classList.add("animationStop"),
                this.loop.stop(),
                this.particlesLoops.forEach(function (t) {
                  return t.stop();
                }));
          },
        },
      },
      p = f,
      h = (n("5532"), n("2877")),
      m = Object(h["a"])(p, a, i, !1, null, null, null);
    e["a"] = m.exports;
  },
  aceb: function (t, e, n) {
    "use strict";
    n("f728");
  },
  ad45: function (t, e, n) {
    "use strict";
    n("4ef6");
  },
  ae43: function (t, e, n) {},
  b39a: function (t, e, n) {
    "use strict";
    n("0c45");
  },
  b8c2: function (t, e, n) {},
  b94d: function (t, e, n) {
    "use strict";
    n("ae43");
  },
  bc3b: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [e("div", { class: ["mario", t.state] })]);
      },
      i = [],
      r = { name: "SuperMarioCharacter", props: { state: String } },
      s = r,
      o = (n("3793"), n("2877")),
      c = Object(o["a"])(s, a, i, !1, null, null, null);
    e["default"] = c.exports;
  },
  bd47: function (t, e, n) {},
  c097: function (t, e, n) {},
  c87e: function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "std" }, [t._t("default")], 2);
      },
      i = [],
      r = { name: "TextBlock" },
      s = r,
      o = (n("dfa5"), n("2877")),
      c = Object(o["a"])(s, a, i, !1, null, null, null);
    e["a"] = c.exports;
  },
  cc32: function (t, e, n) {
    "use strict";
    n("1f7b");
  },
  cde9: function (t, e, n) {
    "use strict";
    n("14ca");
  },
  d25c: function (t, e, n) {
    "use strict";
    n("bd47");
  },
  d3a2: function (t, e, n) {
    "use strict";
    n("4cc5");
  },
  d966: function (t, e, n) {
    "use strict";
    n("7684");
  },
  dce6: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", { class: ["mario-coin", { pause: !t.isPlaying }] });
      },
      i = [],
      r = { name: "SuperMarioCoin", props: { isPlaying: Boolean } },
      s = r,
      o = (n("567d"), n("2877")),
      c = Object(o["a"])(s, a, i, !1, null, null, null);
    e["default"] = c.exports;
  },
  df9a: function (t, e, n) {
    t.exports = n.p + "media/smw_keyhole_exit.a8b8504b.ogg";
  },
  dfa5: function (t, e, n) {
    "use strict";
    n("c097");
  },
  e6ad: function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [e("ZenSVG")], 1);
      },
      i = [],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("f3e2"),
        n("d25f"),
        n("ac6a"),
        n("456d"),
        n("bd86")),
      s = n("5fb0"),
      o = n("3762"),
      c = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              id: "zen",
              viewBox: "0 0 100 100",
              "aria-labelledby": "zenDesc",
            },
          },
          [
            e("desc", { attrs: { id: "zenDesc" } }, [
              t._v("A white-bearded monk meditating quietly"),
            ]),
            e("g", { staticClass: "zen-zen" }, [
              e("g", { staticClass: "zen-legs" }, [
                e("path", {
                  staticClass: "zen-l-leg",
                  attrs: {
                    fill: "none",
                    stroke: "#ffae00",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "7.213",
                    d: "M34.4 90s8.1-.4 13.8-5.3",
                  },
                }),
                e("path", {
                  staticClass: "zen-r-leg",
                  attrs: {
                    fill: "none",
                    stroke: "#ffae00",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "7.213",
                    d: "M65.5 90s-8.1-.4-13.8-5.3",
                  },
                }),
              ]),
              e("g", { staticClass: "zen-arms" }, [
                e("path", {
                  staticClass: "zen-l-arm",
                  attrs: {
                    fill: "none",
                    stroke: "#ffae00",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "5.246",
                    d: "M32.8 66.1s-6.4 5.2-10.6-2",
                  },
                }),
                e("path", {
                  staticClass: "zen-r-arm",
                  attrs: {
                    fill: "none",
                    stroke: "#ffae00",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "5.246",
                    d: "M66.8 66.1s6.4 5.2 10.6-2",
                  },
                }),
              ]),
              e("path", {
                staticClass: "zen-body",
                attrs: {
                  fill: "#0cc",
                  d: "M28.8 64.4c-.7 1.9-.5 3.9 4.4 5.4 0 0-1.3 7.7 2.4 11.9 0 0-2.6 2.2-3.7 4.7-1 2.2 15.1-.4 18.2-1 3.9.7 18.9 3.2 17.9 1-1.1-2.5-3.7-4.7-3.7-4.7 3.7-4.2 2.4-11.9 2.4-11.9 4.9-1.5 5.2-3.5 4.5-5.4-1.6-4.1-11.4-7-20.7-7-9.3.1-20.1 3-21.7 7z",
                },
              }),
              e("g", { staticClass: "zen-head" }, [
                e("path", {
                  attrs: {
                    fill: "#ffae00",
                    d: "M27.2 34.4c2.8 0 5 2.3 5 5.2s-2.3 5.2-5 5.2-5-2.3-5-5.2 2.2-5.2 5-5.2z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#ffae00",
                    d: "M72.8 34.4c2.8 0 5 2.3 5 5.2s-2.3 5.2-5 5.2-5-2.3-5-5.2 2.1-5.2 5-5.2z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#fff",
                    d: "M50 10c13.1 0 23.8 12.9 23.8 28.8S63.2 67.6 50 67.6 26.2 54.7 26.2 38.8 36.9 10 50 10z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#ffae00",
                    d: "M50 14.9c11.9 0 21.6 10.4 21.6 23.3S62 61.5 50 61.5 28.4 51.2 28.4 38.3 38.1 14.9 50 14.9z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#fff",
                    d: "M50 47.4c7.5 0 13.5 6 13.5 13.5V66c0 7.5-6 13.5-13.5 13.5s-13.5-6-13.5-13.5v-5.1c-.1-7.5 6-13.5 13.5-13.5z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#fff",
                    d: "M50.1 11.8c4.8 0 8.6-1.6 8.6 3.2v5.7c0 4.8-3.9 8.7-8.7 8.7-4.8 0-8.7-3.9-8.7-8.7V15c0-4.7 4-3.2 8.8-3.2z",
                  },
                }),
                e("g", { staticClass: "zen-mustache" }, [
                  e("path", {
                    staticClass: "zen-r-mustache_1_",
                    attrs: {
                      fill: "#c2e3ed",
                      d: "M50.5 45.8s-1 7.8 6.5 7.8h8s1-7.5-6-7.5-8.5-.3-8.5-.3z",
                    },
                  }),
                  e("path", {
                    staticClass: "zen-l-mustache",
                    attrs: {
                      fill: "#c2e3ed",
                      d: "M49.3 45.8s.9 7.8-6.4 7.8h-8s-1-7.5 6-7.5c6.9 0 8.4-.3 8.4-.3z",
                    },
                  }),
                ]),
                e("path", {
                  staticClass: "zen-nose",
                  attrs: {
                    fill: "#ff3e4b",
                    d: "M53.3 44.3c0 1.8-1.4 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3 0-1.8 3.3-7.3 3.3-7.3s3.3 5.5 3.3 7.3z",
                  },
                }),
                e("g", { staticClass: "zen-eyes" }, [
                  e("path", {
                    attrs: {
                      fill: "none",
                      stroke: "#003359",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": "10",
                      "stroke-width": "1.312",
                      d: "M39.3 35.2c1 .9 2.4 1.4 3.9 1.4 1.4 0 2.8-.5 3.8-1.4",
                    },
                  }),
                  e("path", {
                    attrs: {
                      fill: "none",
                      stroke: "#003359",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": "10",
                      "stroke-width": "1.312",
                      d: "M53 35.2c1 .9 2.4 1.4 3.9 1.4 1.4 0 2.8-.5 3.8-1.4",
                    },
                  }),
                ]),
              ]),
            ]),
          ]
        );
      },
      l = [],
      u = n("2877"),
      d = {},
      f = Object(u["a"])(d, c, l, !1, null, null, null),
      p = f.exports;
    function h(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function m(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? h(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : h(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var b = {
        name: "ZenCharacter",
        components: { ZenSVG: p },
        mixins: [o["a"]],
        methods: {
          init: function () {
            var t = document.querySelector(".zen-zen"),
              e = document.querySelector(".zen-head"),
              n = document.querySelector(".zen-l-arm"),
              a = document.querySelector(".zen-r-arm"),
              i = document.querySelector(".zen-l-mustache"),
              r = document.querySelector(".zen-r-mustache");
            this.loop
              .set(e, { transformOrigin: "50% 90%", rotation: 5 })
              .addLabel("start")
              .to(e, 3, m({ rotation: -5 }, s["b"]), "start")
              .to(
                [n, i],
                2,
                m({ transformOrigin: "90% 50%", rotation: -20 }, s["b"]),
                "start"
              )
              .to(
                [a, r],
                2,
                m({ transformOrigin: "10% 50%", rotation: 20 }, s["b"]),
                "start"
              )
              .to(t, 2, m({ yPercent: -10 }, s["b"]), "start");
          },
        },
      },
      g = b,
      v = Object(u["a"])(g, a, i, !1, null, null, null);
    e["a"] = v.exports;
  },
  e9c4: function (t, e, n) {},
  eead: function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      i = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", [
            e(
              "div",
              {
                staticClass: "castle-container",
                attrs: { role: "img", "aria-labelledby": "castleDesc" },
              },
              [
                e(
                  "p",
                  { staticClass: "ariaLabel", attrs: { id: "castleDesc" } },
                  [
                    t._v(
                      "\n      The castle of Howl's movie Moving Castle, flying over a green lawn and a\n      blue sky.\n    "
                    ),
                  ]
                ),
                e("div", { staticClass: "castle" }, [
                  e("div", { staticClass: "top" }, [
                    e("div", { staticClass: "top-tower" }),
                    e("div", { staticClass: "top-clothes" }),
                    e("div", { staticClass: "top-top" }),
                  ]),
                  e("div", { staticClass: "bucket" }),
                  e("div", { staticClass: "mouth" }, [
                    e("div", { staticClass: "back-lip" }),
                    e("div", { staticClass: "front-lip" }),
                  ]),
                  e("div", { staticClass: "l-leg" }),
                  e("div", { staticClass: "r-leg" }),
                  e("div", { staticClass: "l-arm" }),
                  e("div", { staticClass: "body" }),
                  e("div", { staticClass: "fans" }, [
                    e("div", { staticClass: "fan2" }),
                    e("div", { staticClass: "fan1" }),
                    e("div", { staticClass: "fix-tail" }),
                  ]),
                  e("div", { staticClass: "r-arm-holder" }, [
                    e("div", { staticClass: "r-arm" }),
                    e("div", { staticClass: "fix-shoulder" }),
                  ]),
                  e("div", { staticClass: "ear" }),
                  e("div", { staticClass: "lower-foliage" }, [
                    e("div", { staticClass: "foliage2" }),
                    e("div", { staticClass: "foliage1" }),
                    e("div", { staticClass: "fix-balcony" }),
                  ]),
                  e("div", { staticClass: "wing" }),
                  e("div", { staticClass: "higher-foliage" }, [
                    e("div", { staticClass: "foliage3" }),
                    e("div", { staticClass: "foliage2" }),
                    e("div", { staticClass: "foliage1" }),
                    e("div", { staticClass: "fix-roof" }),
                  ]),
                  e("div", { staticClass: "flag" }),
                ]),
              ]
            ),
          ]);
        },
      ],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("f3e2"),
        n("d25f"),
        n("ac6a"),
        n("456d"),
        n("bd86")),
      s = n("cffa"),
      o = n("5fb0"),
      c = n("025e"),
      l = n("3762");
    function u(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function d(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? u(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var f = {
        name: "HolwsCastleCharacter",
        mixins: [l["a"]],
        methods: {
          init: function () {
            var t = Object(c["d"])(".castle");
            this.loop
              .addLabel("start", 0)
              .to(
                t.topTower,
                2,
                d(
                  {
                    rotation: -15,
                    transformOrigin: "50% 100%",
                    ease: s["f"].ease.config({
                      template: s["b"].easeNone,
                      strength: 0.5,
                      points: 10,
                      taper: "none",
                      randomize: !0,
                      clamp: !1,
                    }),
                  },
                  o["a"]
                ),
                "start"
              )
              .to(
                t.bucket,
                0.6,
                d(
                  { rotationZ: -25, rotationX: -45, transformOrigin: "50% 0%" },
                  o["a"]
                ),
                "start"
              )
              .to(
                [t.frontLip, t.backLip],
                1.6,
                d(
                  {
                    rotation: -20,
                    xPercent: -5,
                    transformOrigin: "100% 0%",
                    ease: s["f"].ease.config({
                      template: s["b"].easeNone,
                      strength: 1,
                      points: 16,
                      taper: "none",
                      randomize: !0,
                      clamp: !1,
                    }),
                  },
                  o["a"]
                ),
                "start"
              )
              .to(
                t.ear,
                2,
                d(
                  {
                    rotation: -25,
                    transformOrigin: "25% 50%",
                    ease: s["f"].ease.config({
                      template: s["b"].easeNone,
                      strength: 1,
                      points: 16,
                      taper: "none",
                      randomize: !0,
                      clamp: !1,
                    }),
                  },
                  o["a"]
                ),
                "start"
              )
              .to(t, 1.6, d({ yPercent: -5 }, o["b"]), "start"),
              this.$viewport.isDesktop &&
                this.loop
                  .to(
                    t.topTower,
                    2,
                    d(
                      {
                        rotation: -15,
                        transformOrigin: "50% 100%",
                        ease: s["f"].ease.config({
                          template: s["b"].easeNone,
                          strength: 0.5,
                          points: 10,
                          taper: "none",
                          randomize: !0,
                          clamp: !1,
                        }),
                      },
                      o["a"]
                    ),
                    "start"
                  )
                  .to(
                    t.lLeg,
                    2,
                    d({ rotation: -15, transformOrigin: "0% 0%" }, o["b"]),
                    "start"
                  )
                  .to(
                    t.rLeg,
                    2.2,
                    d({ rotation: -15, transformOrigin: "0% 0%" }, o["b"]),
                    "start"
                  )
                  .to(
                    t.rArm,
                    1.8,
                    d({ rotation: 15, transformOrigin: "0% 0%" }, o["b"]),
                    "start"
                  )
                  .to(
                    t.lArm,
                    2,
                    d({ rotation: 15, transformOrigin: "0% 0%" }, o["b"]),
                    "start"
                  )
                  .to(
                    t.foliage1,
                    0.7,
                    d({ transformOrigin: "50% 100%", skewX: 10 }, o["a"]),
                    "start"
                  )
                  .to(
                    t.foliage2,
                    0.6,
                    d({ transformOrigin: "50% 100%", skewX: -8 }, o["a"]),
                    "start"
                  )
                  .to(
                    t.foliage3,
                    0.5,
                    d({ transformOrigin: "50% 100%", skewX: 6 }, o["a"]),
                    "start"
                  );
          },
        },
      },
      p = f,
      h = (n("cc32"), n("2877")),
      m = Object(h["a"])(p, a, i, !1, null, null, null);
    e["a"] = m.exports;
  },
  eed5: function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [e("ShrimpSVG", { ref: "svg" })], 1);
      },
      i = [],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("f3e2"),
        n("d25f"),
        n("ac6a"),
        n("456d"),
        n("bd86")),
      s = n("5fb0"),
      o = n("025e"),
      c = n("3762"),
      l = function () {
        var t = this,
          e = t._self._c;
        return e(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              id: "filomena",
              viewBox: "0 0 100 100",
              "aria-labelledby": "filomenaDesc",
            },
          },
          [
            e("desc", { attrs: { id: "filomenaDesc" } }, [
              t._v(
                "\n    A calm orange shrimp, with a smile on her face, swimming with her little\n    legs\n  "
              ),
            ]),
            e("g", { staticClass: "filomena-filomena" }, [
              e("g", { staticClass: "filomena-back-skirt" }, [
                e("path", { attrs: { fill: "#00979d" } }, [
                  e("animate", {
                    attrs: {
                      dur: "3s",
                      repeatCount: "indefinite",
                      attributeName: "d",
                      values:
                        "M53.5 75.5c2.6 8.1-31.3 13.1-37.1-.4-2-4.8 36.5-1.5 37.1.4z;\n                                   M44.3 75.2c-5.7 13.5-39.6 8.5-37.1.4.7-2 39.1-5.3 37.1-.4z;\n                                   M53.5 75.5c2.6 8.1-31.3 13.1-37.1-.4-2-4.8 36.5-1.5 37.1.4z;",
                      calcMode: "spline",
                      keySplines:
                        "0.455 0.03 0.515 0.955;\n                                   0.455 0.03 0.515 0.955",
                    },
                  }),
                ]),
              ]),
              e("path", {
                staticClass: "filomena-l-foot",
                attrs: {
                  fill: "#ff9360",
                  d: "M51.8 93.6l9.2-5.5c1.9-1.2 3.2-3.2 3.3-5.5l.3-8c0-.4-.6-.7-.9-.3L51.2 93c-.3.4.1.9.6.6z",
                },
              }),
              e("path", {
                staticClass: "filomena-l-arm",
                attrs: {
                  fill: "#ff5d39",
                  d: "M45.9 56.3c-.2.1-.1.4.2.3l27-8.9c.3-.1.2-.5-.1-.5l-11.8.1-15.3 9z",
                },
              }),
              e(
                "path",
                {
                  staticClass: "filomena-l-mustache",
                  attrs: {
                    fill: "none",
                    stroke: "#ff5d39",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "1.09",
                  },
                },
                [
                  e("animate", {
                    attrs: {
                      dur: "3s",
                      repeatCount: "indefinite",
                      attributeName: "d",
                      values:
                        "M28.1 18.2c12.8 32.6 53-23 64.7 2.6 3.6 8 0 23.6-16.2 20.2;\n                               M28.1 31.4C51.5 8 81.1-1.6 92.8 24c3.6 8 0 20.3-16.2 16.9;\n                               M28.1 18.2c12.8 32.6 53-23 64.7 2.6 3.6 8 0 23.6-16.2 20.2;",
                      calcMode: "spline",
                      keySplines:
                        "0.455 0.03 0.515 0.955;\n                                   0.455 0.03 0.515 0.955",
                    },
                  }),
                ]
              ),
              e("g", { staticClass: "filomena-body" }, [
                e("path", {
                  attrs: {
                    fill: "#ff6d42",
                    d: "M51.8 91c-3.6 0-8.9-5.2-11.9-12.1-4.9-11.5 3.8-17.7 15.2-23.6 4.7-2.4 10.2-7.1 14.5-9.3 17.7-9 16.2-26.7 14.9-26-1.9 1-11.9 6.1-22.8 11.7l2.9-3.2c.1-.1 0-.1-.1-.1l-14.9 9.3c-5.9 3.1-11.3 5.8-14.6 7.5-9.7 5-12.6 15.2-13.1 18.5-.5 3.3-.5 6.3.1 9.3 1.9 10.4 9.9 17 12.1 18.2 8.3 4.6 14.2 3.9 17.7 3.9 4-.1 3.4-4.1 0-4.1z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#ff9360",
                    d: "M47 59.8c-2.5-3.9-4.5-12.4-5.5-17.9C43.2 41 45 40 47 39.1c3.8 5.9 10.8 9.2 18.6 9.3-3.4 2.3-7.1 5.2-10.5 6.9-2.9 1.3-5.7 2.9-8.1 4.5z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#ff9360",
                    d: "M40.9 65.5c-1.6 2.2-2.5 4.6-2.4 7.4-4.4-.6-12.6-8.5-15.9-11.8 1.1-3.9 3.8-10 9.7-14.1 1.3 5.6 3.8 14.3 8.6 18.5z",
                  },
                }),
              ]),
              e("path", {
                staticClass: "filomena-face",
                attrs: {
                  fill: "none",
                  stroke: "#000",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-miterlimit": "10",
                  "stroke-width": ".545",
                  d: "M61.2 35.7c.4.9 1.5 1.3 2.5.9s1.3-1.5.9-2.5m2-1c.4.9 1.5 1.3 2.5.9.9-.4 1.3-1.5.9-2.5m4.6 3.5c.3.6 1 .8 1.6.5.6-.3.8-1 .5-1.6",
                },
              }),
              e(
                "path",
                {
                  staticClass: "filomena-r-mustache",
                  attrs: {
                    fill: "none",
                    stroke: "#ff9461",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "1.09",
                  },
                },
                [
                  e("animate", {
                    attrs: {
                      dur: "3.4s",
                      repeatCount: "indefinite",
                      attributeName: "d",
                      values:
                        "M18.9 34C37 15.9 92.5-14.6 92.5 22.6c0 12.2-9.3 18.4-18.4 18.4;\n                               M18.9 24.6c25.9 28.5 73.7-39.2 73.7-2 0 12.2-9.3 18.4-18.4 18.4;\n                               M18.9 34C37 15.9 92.5-14.6 92.5 22.6c0 12.2-9.3 18.4-18.4 18.4;",
                      calcMode: "spline",
                      keySplines:
                        "0.455 0.03 0.515 0.955;\n                                   0.455 0.03 0.515 0.955",
                    },
                  }),
                ]
              ),
              e("path", {
                staticClass: "filomena-r-arm",
                attrs: {
                  fill: "#ff9360",
                  d: "M45.7 60.1c-.2.1-.1.4.2.3l27-8.9c.3-.1.2-.5-.1-.5H61l-15.3 9.1z",
                },
              }),
              e("g", { staticClass: "filomena-skirt" }, [
                e("path", { attrs: { fill: "#00C8CA" } }, [
                  e("animate", {
                    attrs: {
                      dur: "3s",
                      repeatCount: "indefinite",
                      attributeName: "d",
                      values:
                        "M29.3 49.3S8.4 61.4 16.7 75.7c2.5 4.3 7.9 5.7 12.9 5.7 6.4 0 20.4-7.6 23.9-5.7-.2-1.4-2.6-2.8-4.7-3.1-2-.3-5.9-.2-7.4-1.9-2.3-2.5.4-6.3.4-6.3L29.3 49.3z;\n                                   M29.3 49.3S-.8 63.4 7.4 77.6c4.9-6.4 16.5 2.7 24.8 2.7 6.4 0 9.7-1.6 12-4.5.9-1.6-.1-3.6-1.1-5.1-1.1-1.7-2.6-3.3-2.1-4.6.3-.8.9-1.8.9-1.8l-12.6-15z;\n                                   M29.3 49.3S8.4 61.4 16.7 75.7c2.5 4.3 7.9 5.7 12.9 5.7 6.4 0 20.4-7.6 23.9-5.7-.2-1.4-2.6-2.8-4.7-3.1-2-.3-5.9-.2-7.4-1.9-2.3-2.5.4-6.3.4-6.3L29.3 49.3z;",
                      calcMode: "spline",
                      keySplines:
                        "0.455 0.03 0.515 0.955;\n                                   0.455 0.03 0.515 0.955",
                    },
                  }),
                ]),
              ]),
              e("path", {
                staticClass: "filomena-r-foot",
                attrs: {
                  fill: "#ff6d42",
                  d: "M72.3 71.7c-5.6 4.9-15.6 14.7-20.6 19.9-1.1 1.2-.7 3.7 1.3 3.2 4-.9 9.3-3.7 14.3-8.6 4.5-4.4 4.9-10.2 5.9-13.9.2-.6-.5-1-.9-.6z",
                },
              }),
            ]),
          ]
        );
      },
      u = [],
      d = n("2877"),
      f = {},
      p = Object(d["a"])(f, l, u, !1, null, null, null),
      h = p.exports;
    function m(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function b(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? m(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : m(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var g = {
        name: "ShrimpCharacter",
        components: { ShrimpSVG: h },
        mixins: [c["a"]],
        methods: {
          init: function () {
            var t = document.querySelector(".filomena-filomena"),
              e = document.querySelector(".filomena-skirt"),
              n = document.querySelector(".filomena-back-skirt"),
              a = document.querySelector(".filomena-l-foot"),
              i = document.querySelector(".filomena-r-foot"),
              r = document.querySelector(".filomena-l-arm"),
              c = document.querySelector(".filomena-r-arm");
            this.loop
              .addLabel("start")
              .to(
                [e, n],
                3,
                b(
                  { skewY: -0.5, skewX: 0.5, transformOrigin: "50% 0%" },
                  s["b"]
                )
              )
              .to(
                a,
                2,
                b({ transformOrigin: "1% 99%", rotation: 80 }, s["b"]),
                "start"
              )
              .to(
                i,
                2,
                b(
                  { transformOrigin: "1% 99%", yPercent: -7, rotation: 50 },
                  s["b"]
                ),
                "-=1.9"
              )
              .to(
                r,
                0.6,
                b(
                  { transformOrigin: "20% 50%", skewY: 20, yPercent: -10 },
                  s["b"]
                ),
                "start"
              )
              .to(
                c,
                0.5,
                b(
                  { transformOrigin: "20% 50%", skewY: 20, yPercent: -20 },
                  s["b"]
                ),
                "start"
              )
              .to(
                t,
                10,
                b(
                  {
                    bezier: {
                      curviness: 1.25,
                      values: [
                        {
                          yPercent: Object(o["g"])(-50, -15),
                          xPercent: Object(o["g"])(-30, 30),
                          rotation: Object(o["g"])(-40, -20),
                        },
                        {
                          yPercent: Object(o["g"])(-50, -15),
                          xPercent: Object(o["g"])(-30, 30),
                          rotation: Object(o["g"])(40, 20),
                        },
                      ],
                      autoRotate: !0,
                    },
                  },
                  s["b"]
                ),
                "start"
              );
          },
        },
      },
      v = g,
      y = Object(d["a"])(v, a, i, !1, null, null, null);
    e["a"] = y.exports;
  },
  f550: function (t, e, n) {},
  f728: function (t, e, n) {},
  f933: function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t._self._c;
        return e("div", [e("ShapesSVG")], 1);
      },
      i = [],
      r =
        (n("1c01"),
        n("58b2"),
        n("8e6e"),
        n("f3e2"),
        n("d25f"),
        n("ac6a"),
        n("456d"),
        n("bd86")),
      s = n("5fb0"),
      o = n("3762"),
      c = function () {
        var t = this,
          e = t._self._c;
        return e("div", [
          e(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 100",
                id: "open",
              },
            },
            [
              e("g", { staticClass: "open-open" }, [
                e("path", {
                  attrs: {
                    fill: "var(--purple)",
                    d: "M90 70.2l-2-44.1c-.5-9.3-8.4-16.5-17.8-16.1l-44.1 2c-9.3.5-16.5 8.4-16.1 17.8l2 44.1c.4 9.3 8.4 16.6 17.7 16.1l44.1-2c9.4-.5 16.6-8.4 16.2-17.8z",
                  },
                }),
              ]),
            ]
          ),
          e("svg", { attrs: { id: "smart" } }, [
            e("g", { staticClass: "smart-smart" }, [
              e("path", {
                attrs: {
                  fill: "var(--purple)",
                  d: "M80.1 39.2L34.2 11.9c-8.8-5.2-19.9 1-20.1 11.2l-.7 53.4c-.1 10.2 10.8 16.7 19.8 11.8l46.6-26.1c8.9-5 9.1-17.8.3-23z",
                },
              }),
            ]),
          ]),
        ]);
      },
      l = [],
      u = n("2877"),
      d = {},
      f = Object(u["a"])(d, c, l, !1, null, null, null),
      p = f.exports;
    function h(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function m(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? h(Object(n), !0).forEach(function (e) {
              Object(r["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : h(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var b = {
        name: "ShapesCharacter",
        components: { ShapesSVG: p },
        mixins: [o["a"]],
        methods: {
          init: function () {
            var t = document.querySelector(".smart-smart"),
              e = document.querySelector(".open-open");
            this.loop
              .clear(!0)
              .addLabel("start")
              .to(
                t,
                8,
                m({ rotation: -360, transformOrigin: "50% 50%" }, s["b"]),
                "start"
              )
              .to(
                e,
                7,
                m({ rotation: 360, transformOrigin: "50% 50%" }, s["b"]),
                "start"
              );
          },
        },
      },
      g = b,
      v = Object(u["a"])(g, a, i, !1, null, null, null);
    e["a"] = v.exports;
  },
  fc7e: function (t, e, n) {
    "use strict";
    n("7a64");
  },
});
//# sourceMappingURL=app.be460178.js.map
