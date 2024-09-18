(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-0294ec15"],
  {
    1960: function (t, e, n) {
      "use strict";
      n("78eb");
    },
    "78eb": function (t, e, n) {},
    f820: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("768b"),
        s = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "wrapper", attrs: { id: "about" } }, [
            e("div", { staticClass: "pic" }),
            e(
              "div",
              { staticClass: "static-container" },
              [
                t._m(0),
                e("TextBlock", [
                  e("div", { staticClass: "first-fold" }, [
                    e(
                      "ul",
                      { staticClass: "about-contact" },
                      [
                        t._l(t.data.links, function (n) {
                          return e("li", { key: n.url }, [
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
                                  "\n              " +
                                    t._s(n.label || null) +
                                    "\n              "
                                ),
                                n.icon
                                  ? e(n.icon, { tag: "component" })
                                  : t._e(),
                              ],
                              1
                            ),
                          ]);
                        }),
                        t.data.cv
                          ? e("li", [
                              t._v("\n            Download my\n            "),
                              e(
                                "a",
                                {
                                  staticClass: "bt",
                                  attrs: {
                                    href: "./".concat(t.data.cv.file),
                                    title: t.data.cv.title,
                                    target: "_blank",
                                  },
                                },
                                [
                                  t._v(
                                    "\n              " +
                                      t._s(t.data.cv.label) +
                                      "\n              "
                                  ),
                                  e("CVIcon"),
                                ],
                                1
                              ),
                            ])
                          : t._e(),
                      ],
                      2
                    ),
                    e(
                      "p",
                      { staticClass: "-purple" },
                      t._l(t.data.description, function (n, a) {
                        return e("span", { key: a }, [
                          t._v("\n            " + t._s(n)),
                          e("br"),
                        ]);
                      }),
                      0
                    ),
                    t.data.experiences
                      ? e(
                          "p",
                          { staticClass: "-gray" },
                          [
                            t._l(t.data.subtitles, function (n, a) {
                              return e("span", { key: a }, [
                                t._v("\n            // " + t._s(n)),
                                e("br"),
                              ]);
                            }),
                            t._v(
                              "\n          // " +
                                t._s(t.data.experiences[0].position) +
                                " @\n          " +
                                t._s(t.data.experiences[0].company) +
                                "\n        "
                            ),
                          ],
                          2
                        )
                      : t._e(),
                  ]),
                  e("div", { staticClass: "about-grid" }, [
                    e("h2", [t._v("Main skills")]),
                    e("div", { staticClass: "columns fluent" }, [
                      e(
                        "ul",
                        t._l(t.data.skills, function (n, a) {
                          return e("li", { key: a }, [
                            t._v("\n              " + t._s(n.join(", "))),
                            e("br"),
                          ]);
                        }),
                        0
                      ),
                    ]),
                    e("h2", [t._v("Experience")]),
                    e("div", { staticClass: "columns experience" }, [
                      e(
                        "ul",
                        t._l(t.data.experiences, function (n, a) {
                          return e("li", { key: a }, [
                            e("strong", { staticClass: "-purple" }, [
                              t._v(t._s(n.position)),
                            ]),
                            e("br"),
                            t._v("\n              @ " + t._s(n.company)),
                            e("br"),
                            t._v(
                              "\n              " +
                                t._s(n.time || null) +
                                "\n            "
                            ),
                          ]);
                        }),
                        0
                      ),
                    ]),
                    e("h2", [t._v("Languages")]),
                    e("div", { staticClass: "columns languages" }, [
                      e(
                        "ul",
                        t._l(t.data.languages, function (n, s) {
                          return e(
                            "li",
                            { key: s },
                            [
                              e("span", { staticClass: "-comment" }, [
                                t._v("// " + t._s(s)),
                              ]),
                              e("br"),
                              t._l(n, function (n) {
                                var s = Object(a["a"])(n, 2),
                                  i = s[0],
                                  l = s[1];
                                return e("span", { key: i }, [
                                  e("em", { staticClass: "-purple" }, [
                                    t._v(t._s(i)),
                                  ]),
                                  t._v(" " + t._s(l)),
                                  e("br"),
                                ]);
                              }),
                            ],
                            2
                          );
                        }),
                        0
                      ),
                    ]),
                    e("h2", [t._v("Also busy with")]),
                    e("div", { staticClass: "columns busy" }, [
                      e(
                        "ul",
                        t._l(t.data.busy, function (n) {
                          return e("li", { key: n }, [t._v(t._s(n))]);
                        }),
                        0
                      ),
                    ]),
                  ]),
                ]),
              ],
              1
            ),
          ]);
        },
        i = [
          function () {
            var t = this,
              e = t._self._c;
            return e("h1", { staticClass: "title" }, [
              t._v("about("),
              e("span", { staticClass: "params" }, [t._v("ivan")]),
              t._v(")"),
            ]);
          },
        ],
        l = (n("96cf"), n("3b8d")),
        r = n("cffa"),
        o = n("cd29"),
        c = n("c87e"),
        u = n("031b"),
        d = n("0929"),
        _ = function () {
          var t = this,
            e = t._self._c;
          return e(
            "svg",
            {
              staticClass: "ico",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16",
              },
            },
            [
              e("path", {
                attrs: {
                  fill: "none",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-miterlimit": "10",
                  d: "M8 11.4l3.3-2.9m-6.6 0L8 11.4V.5M.5 10.8v4.7h15v-4.7",
                },
              }),
            ]
          );
        },
        p = [],
        v = { name: "CVIcon" },
        h = v,
        f = n("2877"),
        m = Object(f["a"])(h, _, p, !1, null, null, null),
        b = m.exports,
        g = n("025e"),
        C = {
          name: "AboutView",
          components: {
            TextBlock: c["a"],
            LinkedInIcon: u["a"],
            GithubIcon: d["a"],
            CVIcon: b,
          },
          data: function () {
            return {
              introTimeline: new r["h"](),
              headerTimeline: new r["h"](),
              scrollMagicController: new o["Controller"](),
              data: {},
            };
          },
          mounted: (function () {
            var t = Object(l["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), Object(g["c"])();
                        case 2:
                          (this.data = t.sent),
                            this.playIntro(),
                            this.playHeaderBg();
                        case 5:
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
          beforeUnmount: function () {
            this.scrollMagicController.destroy(),
              (this.scrollMagicController = null),
              this.introTimeline.kill(),
              (this.introTimeline = null),
              this.headerTimeline.kill(),
              (this.headerTimeline = null);
          },
          methods: {
            playIntro: function () {
              this.introTimeline
                .addLabel("enter", 1)
                .from(
                  ".title",
                  2,
                  {
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: "50% 50% -100px",
                    ease: r["e"].easeOut,
                  },
                  "enter"
                )
                .from(
                  ".std",
                  2,
                  { autoAlpha: 0, x: -32, ease: r["e"].easeOut },
                  "enter+=1.5"
                );
            },
            playHeaderBg: function () {
              var t = window.innerHeight;
              this.headerTimeline.to(".header-bg", 4, {
                autoAlpha: 1,
                ease: r["b"].easeNone,
              }),
                new o["Scene"]({
                  triggerElement: "#about",
                  offset: t / 4,
                  duration: t,
                })
                  .setTween(this.headerTimeline)
                  .addTo(this.scrollMagicController)
                  .reverse(!0);
            },
          },
        },
        k = C,
        w = (n("1960"), Object(f["a"])(k, s, i, !1, null, null, null));
      e["default"] = w.exports;
    },
  },
]);
//# sourceMappingURL=chunk-0294ec15.d1182188.js.map
