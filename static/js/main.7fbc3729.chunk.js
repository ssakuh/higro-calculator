(this["webpackJsonpcalculator-higro"] =
  this["webpackJsonpcalculator-higro"] || []).push([
  [0],
  {
    125: function (e, t, a) {},
    126: function (e, t, a) {},
    234: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        i = a.n(n),
        r = a(10),
        s = a.n(r),
        l = (a(125), a(126), a(74)),
        o = a(36),
        c = a(98),
        u = a(99),
        d = a(110),
        h = a(109),
        j = a(274),
        b = a(272),
        p = a(266),
        g = a(105),
        f = a.n(g),
        m = a(104),
        x = a.n(m),
        O = a(3),
        v = function (e) {
          return e.change.map(function (t, a) {
            return Object(O.jsx)(
              "div",
              {
                children: Object(O.jsxs)(j.a, {
                  flexDirection: "row",
                  display: "flex",
                  p: 1,
                  m: 1,
                  justifyContent: "center",
                  children: [
                    Object(O.jsx)(j.a, {
                      p: 1,
                      children: Object(O.jsx)(b.a, {
                        type: "number",
                        variant: "outlined",
                        label: "d [m]",
                        id: "d [m]",
                        min: "0",
                        step: "0.001",
                        name: "d",
                        onChange: e.onChange,
                        inputProps: { "data-id": "".concat(a) },
                        defaultValue: e.change[a].d,
                      }),
                    }),
                    Object(O.jsx)(j.a, {
                      p: 1,
                      children: Object(O.jsx)(b.a, {
                        type: "number",
                        variant: "outlined",
                        label: "\u03bb [W/mK]",
                        id: "\u03bb [W/mK]",
                        min: "0",
                        step: "0.001",
                        name: "l",
                        onChange: e.onChange,
                        inputProps: { "data-id": "".concat(a) },
                        defaultValue: e.change[a].l,
                      }),
                    }),
                    Object(O.jsx)(j.a, {
                      p: 1,
                      children: Object(O.jsx)(b.a, {
                        type: "number",
                        variant: "outlined",
                        label: "\u03bc",
                        id: "\u03bc",
                        min: "0",
                        step: "0.001",
                        name: "u",
                        onChange: e.onChange,
                        inputProps: { "data-id": "".concat(a) },
                        defaultValue: e.change[a].u,
                      }),
                    }),
                    0 === a
                      ? Object(O.jsx)(j.a, {
                          p: 1,
                          m: 0.5,
                          children: Object(O.jsx)(p.a, {
                            "aria-label": "delete",
                            onClick: function () {
                              return e.add();
                            },
                            children: Object(O.jsx)(x.a, {}),
                          }),
                        })
                      : Object(O.jsx)(j.a, {
                          p: 1,
                          m: 0.5,
                          children: Object(O.jsx)(p.a, {
                            "aria-label": "delete",
                            onClick: function () {
                              return e.delete(t);
                            },
                            children: Object(O.jsx)(f.a, {}),
                          }),
                        }),
                  ],
                }),
              },
              t.index
            );
          });
        },
        C = a(60),
        w = a(106),
        y = a(267),
        k = a(265),
        P = a(268),
        S = a(269),
        R = a(75),
        W = a.n(R),
        M = a(107),
        A = a(73),
        L = function (e) {
          var t = {
              labels: e.g,
              canvas: { backgroundColor: "rgba(50, 50, 50, 0.5)" },
              datasets: [
                {
                  label: "P",
                  data: e.p,
                  fill: !1,
                  backgroundColor: "rgb(63, 81, 181)",
                  borderColor: "rgba(63, 81, 181, 0.5)",
                  lineTension: 0,
                },
                {
                  label: "Ps",
                  data: e.ps,
                  fill: !1,
                  backgroundColor: "rgb(181, 163, 63)",
                  borderColor: "rgba(181, 163, 63, 0.5)",
                  lineTension: 0,
                },
              ],
            },
            a = Object(n.useRef)(null),
            i = Object(n.useState)(0),
            r = Object(C.a)(i, 2),
            s = r[0],
            l = r[1],
            o = Object(n.useState)(!1),
            c = Object(C.a)(o, 2),
            u = c[0],
            d = c[1],
            h = Object(n.useState)(!1),
            b = Object(C.a)(h, 2),
            p = b[0],
            g = b[1];
          Object(n.useEffect)(
            function () {
              l(a.current.chartInstance.toBase64Image()), e.p && d(!0);
            },
            [e.p]
          );
          var f = "grafic_hidro_" + Date.now();
          return Object(O.jsx)(O.Fragment, {
            children: Object(O.jsxs)(y.a, {
              mt: 10,
              children: [
                Object(O.jsx)(k.a, {
                  elevation: 10,
                  children: Object(O.jsx)(j.a, {
                    p: 1,
                    mb: 5,
                    height: 500,
                    children: Object(O.jsx)(w.Line, {
                      data: t,
                      options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                          xAxes: [
                            {
                              ticks: { beginAtZero: !1 },
                              scaleLabel: {
                                display: !0,
                                labelString: "Grosime [m]",
                              },
                            },
                          ],
                          yAxes: [
                            {
                              ticks: { beginAtZero: !1 },
                              scaleLabel: {
                                display: !0,
                                labelString: "Presiune [Pa]",
                              },
                              gridLines: { display: !1 },
                            },
                          ],
                        },
                      },
                      ref: a,
                    }),
                  }),
                }),
                Object(O.jsx)(k.a, {
                  elevation: 1,
                  children: Object(O.jsx)(j.a, {
                    p: 1,
                    mb: 5,
                    alignItems: "center",
                    children: Object(O.jsx)(P.a, {
                      in: u,
                      children: Object(O.jsxs)(j.a, {
                        justifyContent: "space-around",
                        display: "flex",
                        children: [
                          Object(O.jsx)(j.a, {
                            p: 1,
                            children: Object(O.jsx)(S.a, {
                              variant: "outlined",
                              color: "primary",
                              size: "small",
                              startIcon: Object(O.jsx)(W.a, {}),
                              onClick: function () {
                                return Object(M.triggerBase64Download)(s, f);
                              },
                              children: "png grafic",
                            }),
                          }),
                          p
                            ? Object(O.jsx)(A.CSVDownload, {
                                data: e.output,
                                target: "_self",
                                filename: f,
                              })
                            : function () {
                                return g(!p);
                              },
                          Object(O.jsx)(j.a, {
                            p: 1,
                            children: Object(O.jsx)(S.a, {
                              variant: "outlined",
                              color: "primary",
                              size: "small",
                              startIcon: Object(O.jsx)(W.a, {}),
                              onClick: function () {
                                g(!p) && g(!p);
                              },
                              children: "csv date",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        T = a(5),
        D = a(276),
        V = a(270),
        F = a(271),
        I = a(108),
        N = a.n(I),
        B = a(275),
        z = function (e) {
          return Object(O.jsxs)("span", {
            className: "emoji",
            role: "img",
            "aria-label": e.label ? e.label : "",
            "aria-hidden": e.label ? "false" : "true",
            children: [e.symbol, " "],
          });
        },
        E = (function (e) {
          Object(d.a)(a, e);
          var t = Object(h.a)(a);
          function a(e) {
            var n;
            return (
              Object(c.a)(this, a),
              ((n = t.call(this, e)).round = function (e, t) {
                return Number(Math.round(e + "e" + t) + "e-" + t);
              }),
              (n.compute = function () {
                for (
                  var e = [],
                    t = [],
                    a = [],
                    i = [],
                    r = [],
                    s = [0],
                    l = n.state,
                    c = n.state.values,
                    u = 0,
                    d = 610.5 * Math.exp((17.269 * l.ti) / (237.3 + l.ti)),
                    h = 610.5 * Math.exp((21.875 * l.te) / (265.5 + l.te)),
                    j = (l.fi / 100) * d,
                    b = (l.fe / 100) * h,
                    p = 0;
                  p < c.length;
                  p++
                )
                  a.push(c[p].d),
                    i.push(c[p].l),
                    r.push(c[p].u),
                    0 === c[p].l ? e.push(0) : e.push(c[p].d / c[p].l),
                    t.push(c[p].d * c[p].u),
                    (u += e[p]);
                for (
                  var g = [e[0] + l.rsi], f = [t[0]], m = 1;
                  m < c.length;
                  m++
                ) {
                  var x = Number(parseFloat(s[m - 1]) + parseFloat(c[m].d));
                  s.push(x.toFixed(3)),
                    g.push(g[m - 1] + e[m]),
                    f.push(f[m - 1] + t[m]);
                }
                for (
                  var O = [l.ti - (l.rsi / u) * (l.ti - l.te)], v = [d], C = 1;
                  C <= c.length;
                  C++
                )
                  O.push(l.ti - (g[C - 1] / u) * (l.ti - l.te));
                for (var w = 0; w < O.length; w++)
                  O[w] > 0
                    ? v.push(610.5 * Math.exp((17.269 * O[w]) / (237.3 + O[w])))
                    : v.push(
                        610.5 * Math.exp((21.875 * O[w]) / (265.5 + O[w]))
                      );
                v.push(h);
                for (var y = [j], k = 0; k < f.length; k++)
                  y.push(j - (f[k] / f[t.length - 1]) * (j - b));
                for (var P = 0; P < v.length - c.length; P++) s.push("");
                var S = [
                  ["ti [\xb0C]", n.state.ti],
                  ["te [\xb0C] ", n.state.te],
                  ["Rsi [\xb0C] ", n.state.rsi],
                  ["Rse [\xb0C] ", n.state.rse],
                  ["\u03c6i [%]", n.state.fi],
                  ["\u03c6e [%] ", n.state.fe],
                  ["d [m]"].concat(a),
                  ["\u03bb [W/mK]"].concat(i),
                  ["\u03bc"].concat(r),
                  ["P [Pa]"].concat(Object(o.a)(n.state.P)),
                  ["Ps [Pa]"].concat(Object(o.a)(n.state.Ps)),
                  ["grosime [m]"].concat(Object(o.a)(n.state.g)),
                ];
                console.log(S),
                  console.log(n.transpose(S)),
                  n.setState({ P: y, Ps: v, g: s, output: n.transpose(S) });
              }),
              (n.transpose = function (e) {
                for (var t = [], a = 0; a < e.length; a++) {
                  t.push([]);
                  for (var n = 0; n < e.length; n++) t[a].push(e[n][a]);
                }
                return t;
              }),
              (n.handleChange = function (e) {
                ["d", "l", "u", "r"].includes(e.target.name)
                  ? ((Object(o.a)(n.state.values)[e.target.dataset.id][
                      e.target.name
                    ] = e.target.value),
                    n.compute())
                  : n.setState(
                      Object(l.a)({}, e.target.name, e.target.value),
                      function () {
                        n.compute();
                      }
                    );
              }),
              (n.addNewRow = function (e) {
                n.state.values.length < 20
                  ? (n.setState(function (e) {
                      return {
                        values: [].concat(Object(o.a)(e.values), [
                          { index: Math.random(), d: "", l: "", u: "", r: "" },
                        ]),
                      };
                    }),
                    n.compute())
                  : n.setState({
                      alert: 1,
                      alertText: "Poti avea maxim 10 straturi!",
                    });
              }),
              (n.deleteRow = function (e) {
                n.state.values.length > 2
                  ? (n.setState({
                      values: n.state.values.filter(function (t, a) {
                        return e !== a;
                      }),
                    }),
                    n.compute())
                  : n.setState({
                      alert: !0,
                      alertText: "Poti avea minim 2 straturi!",
                    });
              }),
              (n.rmAlert = function (e) {
                n.setState({ alert: !1, alertText: "" });
              }),
              (n.componentDidMount = function () {
                n.compute();
              }),
              (n.StyledContainer = Object(T.a)(function (e) {
                return {
                  root: Object(l.a)(
                    { paddingRight: "2px", paddingLeft: "2px" },
                    e.breakpoints.only("xs"),
                    {
                      paddingRight: "0",
                      paddingLeft: "0",
                      marginRight: "0",
                      marginLeft: "0",
                    }
                  ),
                };
              })(y.a)),
              (n.state = {
                output: "",
                ti: 20,
                te: -15,
                rsi: 0.125,
                rse: 0.042,
                fi: 60,
                fe: 80,
                P: "",
                Ps: "",
                g: "",
                values: [
                  { index: Math.random(), d: 0.12, l: 1.74, u: 21.3 },
                  { index: Math.random(), d: 2e-4, l: 0, u: 5e4 },
                  { index: Math.random(), d: 0.08, l: 0.04, u: 1 },
                  { index: Math.random(), d: 0.08, l: 1.74, u: 21.3 },
                ],
              }),
              n.compute(),
              n
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: "clickOnDelete",
                value: function (e) {
                  this.state.values.length > 2
                    ? (this.setState({
                        values: this.state.values.filter(function (t) {
                          return t !== e;
                        }),
                      }),
                      this.compute())
                    : this.setState({
                        alert: !0,
                        alertText: "Poti avea minim 2 straturi!",
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.values;
                  return Object(O.jsx)(O.Fragment, {
                    children: Object(O.jsx)(this.StyledContainer, {
                      maxWidth: "xl",
                      children: Object(O.jsxs)("form", {
                        onChange: this.handleChange,
                        children: [
                          Object(O.jsx)(D.a, {
                            open: this.state.alert,
                            autoHideDuration: 6e3,
                            onClose: this.rmAlert,
                            children: Object(O.jsx)(V.a, {
                              in: this.state.alert,
                              children: Object(O.jsx)(B.a, {
                                severity: "error",
                                action: Object(O.jsx)(p.a, {
                                  "aria-label": "close",
                                  color: "inherit",
                                  size: "small",
                                  onClick: this.rmAlert,
                                  children: Object(O.jsx)(N.a, {
                                    fontSize: "inherit",
                                  }),
                                }),
                                children: this.state.alertText,
                              }),
                            }),
                          }),
                          Object(O.jsxs)(y.a, {
                            children: [
                              Object(O.jsx)(j.a, {
                                mb: 3,
                                pt: 5,
                                children: Object(O.jsxs)(F.a, {
                                  variant: "h3",
                                  component: "h3",
                                  align: "center",
                                  children: [
                                    Object(O.jsx)(z, {
                                      symbol: "\ud83e\uddee",
                                      label: "sheep",
                                    }),
                                    "Higrotermica Cl\u0103dirilor",
                                  ],
                                }),
                              }),
                              Object(O.jsx)(L, {
                                g: this.state.g,
                                p: this.state.P,
                                ps: this.state.Ps,
                                output: this.state.output,
                              }),
                              Object(O.jsxs)(k.a, {
                                elevation: 1,
                                children: [
                                  Object(O.jsxs)(j.a, {
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "space-around",
                                    order: "ascending",
                                    display: "flex",
                                    p: 3,
                                    m: 1,
                                    children: [
                                      Object(O.jsx)(j.a, {
                                        p: 1,
                                        children: Object(O.jsx)(b.a, {
                                          type: "number",
                                          variant: "outlined",
                                          label: "ti [\xb0C]",
                                          id: "ti [\xb0C]",
                                          min: "0",
                                          step: "0.001",
                                          name: "ti",
                                          onChange: this.handleChange,
                                          defaultValue: this.state.ti,
                                        }),
                                      }),
                                      Object(O.jsx)(j.a, {
                                        p: 1,
                                        children: Object(O.jsx)(b.a, {
                                          type: "number",
                                          variant: "outlined",
                                          label: "te [\xb0C]",
                                          id: "te [\xb0C]",
                                          min: "0",
                                          step: "0.001",
                                          name: "te",
                                          onChange: this.handleChange,
                                          defaultValue: this.state.te,
                                        }),
                                      }),
                                      Object(O.jsx)(j.a, {
                                        p: 1,
                                        children: Object(O.jsx)(b.a, {
                                          type: "number",
                                          variant: "outlined",
                                          label: "Rsi [\xb0C]",
                                          id: "Rsi [\xb0C]",
                                          min: "0",
                                          step: "0.001",
                                          name: "rsi",
                                          onChange: this.handleChange,
                                          defaultValue: this.state.rsi,
                                        }),
                                      }),
                                      Object(O.jsx)(j.a, {
                                        p: 1,
                                        children: Object(O.jsx)(b.a, {
                                          type: "number",
                                          variant: "outlined",
                                          label: "Rse [\xb0C]",
                                          id: "Rse [\xb0C]",
                                          min: "0",
                                          step: "0.001",
                                          name: "rse",
                                          onChange: this.handleChange,
                                          defaultValue: this.state.rse,
                                        }),
                                      }),
                                      Object(O.jsx)(j.a, {
                                        p: 1,
                                        children: Object(O.jsx)(b.a, {
                                          type: "number",
                                          variant: "outlined",
                                          label: "\u03c6i [%]",
                                          id: "\u03c6i [%]",
                                          min: "0",
                                          step: "0.001",
                                          name: "fi",
                                          onChange: this.handleChange,
                                          defaultValue: this.state.fi,
                                        }),
                                      }),
                                      Object(O.jsx)(j.a, {
                                        p: 1,
                                        children: Object(O.jsx)(b.a, {
                                          type: "number",
                                          variant: "outlined",
                                          label: "\u03c6e [%]",
                                          id: "\u03c6e [%]",
                                          min: "0",
                                          step: "0.001",
                                          name: "fe",
                                          onChange: this.handleChange,
                                          defaultValue: this.state.fe,
                                        }),
                                      }),
                                    ],
                                  }),
                                  Object(O.jsx)(v, {
                                    add: this.addNewRow,
                                    delete: this.clickOnDelete.bind(this),
                                    onChange: this.handleChange,
                                    change: e,
                                  }),
                                ],
                              }),
                              Object(O.jsx)(j.a, {
                                p: 2,
                                children: Object(O.jsx)(F.a, {
                                  variant: "button",
                                  display: "block",
                                  align: "right",
                                  children: "\xa9 Said Sakuh 2021",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            a
          );
        })(i.a.Component);
      a(233);
      var K = function () {
          return Object(O.jsx)(E, {});
        },
        U = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function _(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var a = e.installing;
              null != a &&
                (a.onstatechange = function () {
                  "installed" === a.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      var H = function (e) {
        e &&
          e instanceof Function &&
          a
            .e(3)
            .then(a.bind(null, 278))
            .then(function (t) {
              var a = t.getCLS,
                n = t.getFID,
                i = t.getFCP,
                r = t.getLCP,
                s = t.getTTFB;
              a(e), n(e), i(e), r(e), s(e);
            });
      };
      s.a.render(
        Object(O.jsx)(i.a.StrictMode, { children: Object(O.jsx)(K, {}) }),
        document.getElementById("root")
      ),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var t = "".concat("", "/service-worker.js");
              U
                ? (!(function (e, t) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function (a) {
                        var n = a.headers.get("content-type");
                        404 === a.status ||
                        (null != n && -1 === n.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : _(e, t);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
                    );
                  }))
                : _(t, e);
            });
          }
        })(),
        H();
    },
  },
  [[234, 1, 2]],
]);
//# sourceMappingURL=main.7fbc3729.chunk.js.map