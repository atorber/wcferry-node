require = (function t(e, r, i) {
  function n(s, a) {
    if (!r[s]) {
      if (!e[s]) {
        var h = 'function' == typeof require && require;
        if (!a && h) return h(s, !0);
        if (o) return o(s, !0);
        var u = new Error("Cannot find module '" + s + "'");
        throw ((u.code = 'MODULE_NOT_FOUND'), u);
      }
      var f = (r[s] = { exports: {} });
      e[s][0].call(
        f.exports,
        function (t) {
          return n(e[s][1][t] || t);
        },
        f,
        f.exports,
        t,
        e,
        r,
        i,
      );
    }
    return r[s].exports;
  }
  for (var o = 'function' == typeof require && require, s = 0; s < i.length; s++) n(i[s]);
  return n;
})(
  {
    './utils': [
      function (t, e, r) {
        var i = t('xxhashjs').h32;
        (r.descriptorChecksum = function (t) {
          return (i(t, 0).toNumber() >> 8) & 255;
        }),
          (r.blockChecksum = function (t) {
            return i(t, 0).toNumber();
          }),
          (r.streamChecksum = function (t, e) {
            return null === t ? e.digest().toNumber() : (null === e && (e = i(0)), e.update(t));
          }),
          (r.readUInt32LE = function (t, e) {
            return (t[e] | (t[e + 1] << 8) | (t[e + 2] << 16) | (t[e + 3] << 24)) >>> 0;
          }),
          (r.bindings = t('./binding'));
      },
      { './binding': 32, xxhashjs: 'xxhashjs' },
    ],
    1: [
      function (t, e, r) {
        'use strict';
        (r.byteLength = function (t) {
          var e = u(t),
            r = e[0],
            i = e[1];
          return (3 * (r + i)) / 4 - i;
        }),
          (r.toByteArray = function (t) {
            var e,
              r,
              i = u(t),
              s = i[0],
              a = i[1],
              h = new o(
                (function (t, e, r) {
                  return (3 * (e + r)) / 4 - r;
                })(0, s, a),
              ),
              f = 0,
              l = a > 0 ? s - 4 : s;
            for (r = 0; r < l; r += 4)
              (e = (n[t.charCodeAt(r)] << 18) | (n[t.charCodeAt(r + 1)] << 12) | (n[t.charCodeAt(r + 2)] << 6) | n[t.charCodeAt(r + 3)]),
                (h[f++] = (e >> 16) & 255),
                (h[f++] = (e >> 8) & 255),
                (h[f++] = 255 & e);
            2 === a && ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)), (h[f++] = 255 & e));
            1 === a && ((e = (n[t.charCodeAt(r)] << 10) | (n[t.charCodeAt(r + 1)] << 4) | (n[t.charCodeAt(r + 2)] >> 2)), (h[f++] = (e >> 8) & 255), (h[f++] = 255 & e));
            return h;
          }),
          (r.fromByteArray = function (t) {
            for (var e, r = t.length, n = r % 3, o = [], s = 0, a = r - n; s < a; s += 16383) o.push(f(t, s, s + 16383 > a ? a : s + 16383));
            1 === n
              ? ((e = t[r - 1]), o.push(i[e >> 2] + i[(e << 4) & 63] + '=='))
              : 2 === n && ((e = (t[r - 2] << 8) + t[r - 1]), o.push(i[e >> 10] + i[(e >> 4) & 63] + i[(e << 2) & 63] + '='));
            return o.join('');
          });
        for (
          var i = [],
            n = [],
            o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
            s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            a = 0,
            h = s.length;
          a < h;
          ++a
        )
          (i[a] = s[a]), (n[s.charCodeAt(a)] = a);
        function u(t) {
          var e = t.length;
          if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
          var r = t.indexOf('=');
          return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
        }
        function f(t, e, r) {
          for (var n, o, s = [], a = e; a < r; a += 3)
            (n = ((t[a] << 16) & 16711680) + ((t[a + 1] << 8) & 65280) + (255 & t[a + 2])),
              s.push(i[((o = n) >> 18) & 63] + i[(o >> 12) & 63] + i[(o >> 6) & 63] + i[63 & o]);
          return s.join('');
        }
        (n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63);
      },
      {},
    ],
    2: [function (t, e, r) {}, {}],
    3: [
      function (t, e, r) {
        (function (t) {
          function e(t) {
            return Object.prototype.toString.call(t);
          }
          (r.isArray = function (t) {
            return Array.isArray ? Array.isArray(t) : '[object Array]' === e(t);
          }),
            (r.isBoolean = function (t) {
              return 'boolean' == typeof t;
            }),
            (r.isNull = function (t) {
              return null === t;
            }),
            (r.isNullOrUndefined = function (t) {
              return null == t;
            }),
            (r.isNumber = function (t) {
              return 'number' == typeof t;
            }),
            (r.isString = function (t) {
              return 'string' == typeof t;
            }),
            (r.isSymbol = function (t) {
              return 'symbol' == typeof t;
            }),
            (r.isUndefined = function (t) {
              return void 0 === t;
            }),
            (r.isRegExp = function (t) {
              return '[object RegExp]' === e(t);
            }),
            (r.isObject = function (t) {
              return 'object' == typeof t && null !== t;
            }),
            (r.isDate = function (t) {
              return '[object Date]' === e(t);
            }),
            (r.isError = function (t) {
              return '[object Error]' === e(t) || t instanceof Error;
            }),
            (r.isFunction = function (t) {
              return 'function' == typeof t;
            }),
            (r.isPrimitive = function (t) {
              return null === t || 'boolean' == typeof t || 'number' == typeof t || 'string' == typeof t || 'symbol' == typeof t || void 0 === t;
            }),
            (r.isBuffer = t.isBuffer);
        }).call(this, { isBuffer: t('../../is-buffer/index.js') });
      },
      { '../../is-buffer/index.js': 7 },
    ],
    4: [
      function (t, e, r) {
        var i =
            Object.create ||
            function (t) {
              var e = function () {};
              return (e.prototype = t), new e();
            },
          n =
            Object.keys ||
            function (t) {
              var e = [];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
              return r;
            },
          o =
            Function.prototype.bind ||
            function (t) {
              var e = this;
              return function () {
                return e.apply(t, arguments);
              };
            };
        function s() {
          (this._events && Object.prototype.hasOwnProperty.call(this, '_events')) || ((this._events = i(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }
        (e.exports = s), (s.EventEmitter = s), (s.prototype._events = void 0), (s.prototype._maxListeners = void 0);
        var a,
          h = 10;
        try {
          var u = {};
          Object.defineProperty && Object.defineProperty(u, 'x', { value: 0 }), (a = 0 === u.x);
        } catch (t) {
          a = !1;
        }
        function f(t) {
          return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners;
        }
        function l(t, e, r) {
          if (e) t.call(r);
          else for (var i = t.length, n = w(t, i), o = 0; o < i; ++o) n[o].call(r);
        }
        function c(t, e, r, i) {
          if (e) t.call(r, i);
          else for (var n = t.length, o = w(t, n), s = 0; s < n; ++s) o[s].call(r, i);
        }
        function p(t, e, r, i, n) {
          if (e) t.call(r, i, n);
          else for (var o = t.length, s = w(t, o), a = 0; a < o; ++a) s[a].call(r, i, n);
        }
        function d(t, e, r, i, n, o) {
          if (e) t.call(r, i, n, o);
          else for (var s = t.length, a = w(t, s), h = 0; h < s; ++h) a[h].call(r, i, n, o);
        }
        function m(t, e, r, i) {
          if (e) t.apply(r, i);
          else for (var n = t.length, o = w(t, n), s = 0; s < n; ++s) o[s].apply(r, i);
        }
        function y(t, e, r, n) {
          var o, s, a;
          if ('function' != typeof r) throw new TypeError('"listener" argument must be a function');
          if (
            ((s = t._events)
              ? (s.newListener && (t.emit('newListener', e, r.listener ? r.listener : r), (s = t._events)), (a = s[e]))
              : ((s = t._events = i(null)), (t._eventsCount = 0)),
            a)
          ) {
            if (('function' == typeof a ? (a = s[e] = n ? [r, a] : [a, r]) : n ? a.unshift(r) : a.push(r), !a.warned && (o = f(t)) && o > 0 && a.length > o)) {
              a.warned = !0;
              var h = new Error(
                'Possible EventEmitter memory leak detected. ' + a.length + ' "' + String(e) + '" listeners added. Use emitter.setMaxListeners() to increase limit.',
              );
              (h.name = 'MaxListenersExceededWarning'),
                (h.emitter = t),
                (h.type = e),
                (h.count = a.length),
                'object' == typeof console && console.warn && console.warn('%s: %s', h.name, h.message);
            }
          } else (a = s[e] = r), ++t._eventsCount;
          return t;
        }
        function g() {
          if (!this.fired)
            switch ((this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), arguments.length)) {
              case 0:
                return this.listener.call(this.target);
              case 1:
                return this.listener.call(this.target, arguments[0]);
              case 2:
                return this.listener.call(this.target, arguments[0], arguments[1]);
              case 3:
                return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
              default:
                for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
                this.listener.apply(this.target, t);
            }
        }
        function _(t, e, r) {
          var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
            n = o.call(g, i);
          return (n.listener = r), (i.wrapFn = n), n;
        }
        function b(t, e, r) {
          var i = t._events;
          if (!i) return [];
          var n = i[e];
          return n
            ? 'function' == typeof n
              ? r
                ? [n.listener || n]
                : [n]
              : r
              ? (function (t) {
                  for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
                  return e;
                })(n)
              : w(n, n.length)
            : [];
        }
        function v(t) {
          var e = this._events;
          if (e) {
            var r = e[t];
            if ('function' == typeof r) return 1;
            if (r) return r.length;
          }
          return 0;
        }
        function w(t, e) {
          for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
          return r;
        }
        a
          ? Object.defineProperty(s, 'defaultMaxListeners', {
              enumerable: !0,
              get: function () {
                return h;
              },
              set: function (t) {
                if ('number' != typeof t || t < 0 || t != t) throw new TypeError('"defaultMaxListeners" must be a positive number');
                h = t;
              },
            })
          : (s.defaultMaxListeners = h),
          (s.prototype.setMaxListeners = function (t) {
            if ('number' != typeof t || t < 0 || isNaN(t)) throw new TypeError('"n" argument must be a positive number');
            return (this._maxListeners = t), this;
          }),
          (s.prototype.getMaxListeners = function () {
            return f(this);
          }),
          (s.prototype.emit = function (t) {
            var e,
              r,
              i,
              n,
              o,
              s,
              a = 'error' === t;
            if ((s = this._events)) a = a && null == s.error;
            else if (!a) return !1;
            if (a) {
              if ((arguments.length > 1 && (e = arguments[1]), e instanceof Error)) throw e;
              var h = new Error('Unhandled "error" event. (' + e + ')');
              throw ((h.context = e), h);
            }
            if (!(r = s[t])) return !1;
            var u = 'function' == typeof r;
            switch ((i = arguments.length)) {
              case 1:
                l(r, u, this);
                break;
              case 2:
                c(r, u, this, arguments[1]);
                break;
              case 3:
                p(r, u, this, arguments[1], arguments[2]);
                break;
              case 4:
                d(r, u, this, arguments[1], arguments[2], arguments[3]);
                break;
              default:
                for (n = new Array(i - 1), o = 1; o < i; o++) n[o - 1] = arguments[o];
                m(r, u, this, n);
            }
            return !0;
          }),
          (s.prototype.addListener = function (t, e) {
            return y(this, t, e, !1);
          }),
          (s.prototype.on = s.prototype.addListener),
          (s.prototype.prependListener = function (t, e) {
            return y(this, t, e, !0);
          }),
          (s.prototype.once = function (t, e) {
            if ('function' != typeof e) throw new TypeError('"listener" argument must be a function');
            return this.on(t, _(this, t, e)), this;
          }),
          (s.prototype.prependOnceListener = function (t, e) {
            if ('function' != typeof e) throw new TypeError('"listener" argument must be a function');
            return this.prependListener(t, _(this, t, e)), this;
          }),
          (s.prototype.removeListener = function (t, e) {
            var r, n, o, s, a;
            if ('function' != typeof e) throw new TypeError('"listener" argument must be a function');
            if (!(n = this._events)) return this;
            if (!(r = n[t])) return this;
            if (r === e || r.listener === e)
              0 == --this._eventsCount ? (this._events = i(null)) : (delete n[t], n.removeListener && this.emit('removeListener', t, r.listener || e));
            else if ('function' != typeof r) {
              for (o = -1, s = r.length - 1; s >= 0; s--)
                if (r[s] === e || r[s].listener === e) {
                  (a = r[s].listener), (o = s);
                  break;
                }
              if (o < 0) return this;
              0 === o
                ? r.shift()
                : (function (t, e) {
                    for (var r = e, i = r + 1, n = t.length; i < n; r += 1, i += 1) t[r] = t[i];
                    t.pop();
                  })(r, o),
                1 === r.length && (n[t] = r[0]),
                n.removeListener && this.emit('removeListener', t, a || e);
            }
            return this;
          }),
          (s.prototype.removeAllListeners = function (t) {
            var e, r, o;
            if (!(r = this._events)) return this;
            if (!r.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = i(null)), (this._eventsCount = 0))
                  : r[t] && (0 == --this._eventsCount ? (this._events = i(null)) : delete r[t]),
                this
              );
            if (0 === arguments.length) {
              var s,
                a = n(r);
              for (o = 0; o < a.length; ++o) 'removeListener' !== (s = a[o]) && this.removeAllListeners(s);
              return this.removeAllListeners('removeListener'), (this._events = i(null)), (this._eventsCount = 0), this;
            }
            if ('function' == typeof (e = r[t])) this.removeListener(t, e);
            else if (e) for (o = e.length - 1; o >= 0; o--) this.removeListener(t, e[o]);
            return this;
          }),
          (s.prototype.listeners = function (t) {
            return b(this, t, !0);
          }),
          (s.prototype.rawListeners = function (t) {
            return b(this, t, !1);
          }),
          (s.listenerCount = function (t, e) {
            return 'function' == typeof t.listenerCount ? t.listenerCount(e) : v.call(t, e);
          }),
          (s.prototype.listenerCount = v),
          (s.prototype.eventNames = function () {
            return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
          });
      },
      {},
    ],
    5: [
      function (t, e, r) {
        (r.read = function (t, e, r, i, n) {
          var o,
            s,
            a = 8 * n - i - 1,
            h = (1 << a) - 1,
            u = h >> 1,
            f = -7,
            l = r ? n - 1 : 0,
            c = r ? -1 : 1,
            p = t[e + l];
          for (l += c, o = p & ((1 << -f) - 1), p >>= -f, f += a; f > 0; o = 256 * o + t[e + l], l += c, f -= 8);
          for (s = o & ((1 << -f) - 1), o >>= -f, f += i; f > 0; s = 256 * s + t[e + l], l += c, f -= 8);
          if (0 === o) o = 1 - u;
          else {
            if (o === h) return s ? NaN : (1 / 0) * (p ? -1 : 1);
            (s += Math.pow(2, i)), (o -= u);
          }
          return (p ? -1 : 1) * s * Math.pow(2, o - i);
        }),
          (r.write = function (t, e, r, i, n, o) {
            var s,
              a,
              h,
              u = 8 * o - n - 1,
              f = (1 << u) - 1,
              l = f >> 1,
              c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              p = i ? 0 : o - 1,
              d = i ? 1 : -1,
              m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
            for (
              e = Math.abs(e),
                isNaN(e) || e === 1 / 0
                  ? ((a = isNaN(e) ? 1 : 0), (s = f))
                  : ((s = Math.floor(Math.log(e) / Math.LN2)),
                    e * (h = Math.pow(2, -s)) < 1 && (s--, (h *= 2)),
                    (e += s + l >= 1 ? c / h : c * Math.pow(2, 1 - l)) * h >= 2 && (s++, (h /= 2)),
                    s + l >= f
                      ? ((a = 0), (s = f))
                      : s + l >= 1
                      ? ((a = (e * h - 1) * Math.pow(2, n)), (s += l))
                      : ((a = e * Math.pow(2, l - 1) * Math.pow(2, n)), (s = 0)));
              n >= 8;
              t[r + p] = 255 & a, p += d, a /= 256, n -= 8
            );
            for (s = (s << n) | a, u += n; u > 0; t[r + p] = 255 & s, p += d, s /= 256, u -= 8);
            t[r + p - d] |= 128 * m;
          });
      },
      {},
    ],
    6: [
      function (t, e, r) {
        'function' == typeof Object.create
          ? (e.exports = function (t, e) {
              e && ((t.super_ = e), (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })));
            })
          : (e.exports = function (t, e) {
              if (e) {
                t.super_ = e;
                var r = function () {};
                (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
              }
            });
      },
      {},
    ],
    7: [
      function (t, e, r) {
        function i(t) {
          return !!t.constructor && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function (t) {
          return (
            null != t &&
            (i(t) ||
              (function (t) {
                return 'function' == typeof t.readFloatLE && 'function' == typeof t.slice && i(t.slice(0, 0));
              })(t) ||
              !!t._isBuffer)
          );
        };
      },
      {},
    ],
    8: [
      function (t, e, r) {
        var i = {}.toString;
        e.exports =
          Array.isArray ||
          function (t) {
            return '[object Array]' == i.call(t);
          };
      },
      {},
    ],
    9: [
      function (t, e, r) {
        (function (t) {
          'use strict';
          void 0 === t || !t.version || 0 === t.version.indexOf('v0.') || (0 === t.version.indexOf('v1.') && 0 !== t.version.indexOf('v1.8.'))
            ? (e.exports = {
                nextTick: function (e, r, i, n) {
                  if ('function' != typeof e) throw new TypeError('"callback" argument must be a function');
                  var o,
                    s,
                    a = arguments.length;
                  switch (a) {
                    case 0:
                    case 1:
                      return t.nextTick(e);
                    case 2:
                      return t.nextTick(function () {
                        e.call(null, r);
                      });
                    case 3:
                      return t.nextTick(function () {
                        e.call(null, r, i);
                      });
                    case 4:
                      return t.nextTick(function () {
                        e.call(null, r, i, n);
                      });
                    default:
                      for (o = new Array(a - 1), s = 0; s < o.length; ) o[s++] = arguments[s];
                      return t.nextTick(function () {
                        e.apply(null, o);
                      });
                  }
                },
              })
            : (e.exports = t);
        }).call(this, t('_process'));
      },
      { _process: 10 },
    ],
    10: [
      function (t, e, r) {
        var i,
          n,
          o = (e.exports = {});
        function s() {
          throw new Error('setTimeout has not been defined');
        }
        function a() {
          throw new Error('clearTimeout has not been defined');
        }
        function h(t) {
          if (i === setTimeout) return setTimeout(t, 0);
          if ((i === s || !i) && setTimeout) return (i = setTimeout), setTimeout(t, 0);
          try {
            return i(t, 0);
          } catch (e) {
            try {
              return i.call(null, t, 0);
            } catch (e) {
              return i.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            i = 'function' == typeof setTimeout ? setTimeout : s;
          } catch (t) {
            i = s;
          }
          try {
            n = 'function' == typeof clearTimeout ? clearTimeout : a;
          } catch (t) {
            n = a;
          }
        })();
        var u,
          f = [],
          l = !1,
          c = -1;
        function p() {
          l && u && ((l = !1), u.length ? (f = u.concat(f)) : (c = -1), f.length && d());
        }
        function d() {
          if (!l) {
            var t = h(p);
            l = !0;
            for (var e = f.length; e; ) {
              for (u = f, f = []; ++c < e; ) u && u[c].run();
              (c = -1), (e = f.length);
            }
            (u = null),
              (l = !1),
              (function (t) {
                if (n === clearTimeout) return clearTimeout(t);
                if ((n === a || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(t);
                try {
                  n(t);
                } catch (e) {
                  try {
                    return n.call(null, t);
                  } catch (e) {
                    return n.call(this, t);
                  }
                }
              })(t);
          }
        }
        function m(t, e) {
          (this.fun = t), (this.array = e);
        }
        function y() {}
        (o.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
          f.push(new m(t, e)), 1 !== f.length || l || h(d);
        }),
          (m.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (o.title = 'browser'),
          (o.browser = !0),
          (o.env = {}),
          (o.argv = []),
          (o.version = ''),
          (o.versions = {}),
          (o.on = y),
          (o.addListener = y),
          (o.once = y),
          (o.off = y),
          (o.removeListener = y),
          (o.removeAllListeners = y),
          (o.emit = y),
          (o.prependListener = y),
          (o.prependOnceListener = y),
          (o.listeners = function (t) {
            return [];
          }),
          (o.binding = function (t) {
            throw new Error('process.binding is not supported');
          }),
          (o.cwd = function () {
            return '/';
          }),
          (o.chdir = function (t) {
            throw new Error('process.chdir is not supported');
          }),
          (o.umask = function () {
            return 0;
          });
      },
      {},
    ],
    11: [
      function (t, e, r) {
        e.exports = t('./lib/_stream_duplex.js');
      },
      { './lib/_stream_duplex.js': 12 },
    ],
    12: [
      function (t, e, r) {
        'use strict';
        var i = t('process-nextick-args'),
          n =
            Object.keys ||
            function (t) {
              var e = [];
              for (var r in t) e.push(r);
              return e;
            };
        e.exports = l;
        var o = Object.create(t('core-util-is'));
        o.inherits = t('inherits');
        var s = t('./_stream_readable'),
          a = t('./_stream_writable');
        o.inherits(l, s);
        for (var h = n(a.prototype), u = 0; u < h.length; u++) {
          var f = h[u];
          l.prototype[f] || (l.prototype[f] = a.prototype[f]);
        }
        function l(t) {
          if (!(this instanceof l)) return new l(t);
          s.call(this, t),
            a.call(this, t),
            t && !1 === t.readable && (this.readable = !1),
            t && !1 === t.writable && (this.writable = !1),
            (this.allowHalfOpen = !0),
            t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1),
            this.once('end', c);
        }
        function c() {
          this.allowHalfOpen || this._writableState.ended || i.nextTick(p, this);
        }
        function p(t) {
          t.end();
        }
        Object.defineProperty(l.prototype, 'writableHighWaterMark', {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(l.prototype, 'destroyed', {
            get: function () {
              return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
            },
            set: function (t) {
              void 0 !== this._readableState && void 0 !== this._writableState && ((this._readableState.destroyed = t), (this._writableState.destroyed = t));
            },
          }),
          (l.prototype._destroy = function (t, e) {
            this.push(null), this.end(), i.nextTick(e, t);
          });
      },
      { './_stream_readable': 14, './_stream_writable': 16, 'core-util-is': 3, inherits: 6, 'process-nextick-args': 9 },
    ],
    13: [
      function (t, e, r) {
        'use strict';
        e.exports = o;
        var i = t('./_stream_transform'),
          n = Object.create(t('core-util-is'));
        function o(t) {
          if (!(this instanceof o)) return new o(t);
          i.call(this, t);
        }
        (n.inherits = t('inherits')),
          n.inherits(o, i),
          (o.prototype._transform = function (t, e, r) {
            r(null, t);
          });
      },
      { './_stream_transform': 15, 'core-util-is': 3, inherits: 6 },
    ],
    14: [
      function (t, e, r) {
        (function (r, i) {
          'use strict';
          var n = t('process-nextick-args');
          e.exports = b;
          var o,
            s = t('isarray');
          b.ReadableState = _;
          t('events').EventEmitter;
          var a = function (t, e) {
              return t.listeners(e).length;
            },
            h = t('./internal/streams/stream'),
            u = t('safe-buffer').Buffer,
            f = i.Uint8Array || function () {};
          var l = Object.create(t('core-util-is'));
          l.inherits = t('inherits');
          var c = t('util'),
            p = void 0;
          p = c && c.debuglog ? c.debuglog('stream') : function () {};
          var d,
            m = t('./internal/streams/BufferList'),
            y = t('./internal/streams/destroy');
          l.inherits(b, h);
          var g = ['error', 'close', 'destroy', 'pause', 'resume'];
          function _(e, r) {
            e = e || {};
            var i = r instanceof (o = o || t('./_stream_duplex'));
            (this.objectMode = !!e.objectMode), i && (this.objectMode = this.objectMode || !!e.readableObjectMode);
            var n = e.highWaterMark,
              s = e.readableHighWaterMark,
              a = this.objectMode ? 16 : 16384;
            (this.highWaterMark = n || 0 === n ? n : i && (s || 0 === s) ? s : a),
              (this.highWaterMark = Math.floor(this.highWaterMark)),
              (this.buffer = new m()),
              (this.length = 0),
              (this.pipes = null),
              (this.pipesCount = 0),
              (this.flowing = null),
              (this.ended = !1),
              (this.endEmitted = !1),
              (this.reading = !1),
              (this.sync = !0),
              (this.needReadable = !1),
              (this.emittedReadable = !1),
              (this.readableListening = !1),
              (this.resumeScheduled = !1),
              (this.destroyed = !1),
              (this.defaultEncoding = e.defaultEncoding || 'utf8'),
              (this.awaitDrain = 0),
              (this.readingMore = !1),
              (this.decoder = null),
              (this.encoding = null),
              e.encoding && (d || (d = t('string_decoder/').StringDecoder), (this.decoder = new d(e.encoding)), (this.encoding = e.encoding));
          }
          function b(e) {
            if (((o = o || t('./_stream_duplex')), !(this instanceof b))) return new b(e);
            (this._readableState = new _(e, this)),
              (this.readable = !0),
              e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)),
              h.call(this);
          }
          function v(t, e, r, i, n) {
            var o,
              s = t._readableState;
            null === e
              ? ((s.reading = !1),
                (function (t, e) {
                  if (e.ended) return;
                  if (e.decoder) {
                    var r = e.decoder.end();
                    r && r.length && (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
                  }
                  (e.ended = !0), C(t);
                })(t, s))
              : (n ||
                  (o = (function (t, e) {
                    var r;
                    (i = e),
                      u.isBuffer(i) || i instanceof f || 'string' == typeof e || void 0 === e || t.objectMode || (r = new TypeError('Invalid non-string/buffer chunk'));
                    var i;
                    return r;
                  })(s, e)),
                o
                  ? t.emit('error', o)
                  : s.objectMode || (e && e.length > 0)
                  ? ('string' == typeof e ||
                      s.objectMode ||
                      Object.getPrototypeOf(e) === u.prototype ||
                      (e = (function (t) {
                        return u.from(t);
                      })(e)),
                    i
                      ? s.endEmitted
                        ? t.emit('error', new Error('stream.unshift() after end event'))
                        : w(t, s, e, !0)
                      : s.ended
                      ? t.emit('error', new Error('stream.push() after EOF'))
                      : ((s.reading = !1), s.decoder && !r ? ((e = s.decoder.write(e)), s.objectMode || 0 !== e.length ? w(t, s, e, !1) : E(t, s)) : w(t, s, e, !1)))
                  : i || (s.reading = !1));
            return (function (t) {
              return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length);
            })(s);
          }
          function w(t, e, r, i) {
            e.flowing && 0 === e.length && !e.sync
              ? (t.emit('data', r), t.read(0))
              : ((e.length += e.objectMode ? 1 : r.length), i ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && C(t)),
              E(t, e);
          }
          Object.defineProperty(b.prototype, 'destroyed', {
            get: function () {
              return void 0 !== this._readableState && this._readableState.destroyed;
            },
            set: function (t) {
              this._readableState && (this._readableState.destroyed = t);
            },
          }),
            (b.prototype.destroy = y.destroy),
            (b.prototype._undestroy = y.undestroy),
            (b.prototype._destroy = function (t, e) {
              this.push(null), e(t);
            }),
            (b.prototype.push = function (t, e) {
              var r,
                i = this._readableState;
              return (
                i.objectMode ? (r = !0) : 'string' == typeof t && ((e = e || i.defaultEncoding) !== i.encoding && ((t = u.from(t, e)), (e = '')), (r = !0)),
                v(this, t, e, !1, r)
              );
            }),
            (b.prototype.unshift = function (t) {
              return v(this, t, null, !0, !1);
            }),
            (b.prototype.isPaused = function () {
              return !1 === this._readableState.flowing;
            }),
            (b.prototype.setEncoding = function (e) {
              return d || (d = t('string_decoder/').StringDecoder), (this._readableState.decoder = new d(e)), (this._readableState.encoding = e), this;
            });
          function S(t, e) {
            return t <= 0 || (0 === e.length && e.ended)
              ? 0
              : e.objectMode
              ? 1
              : t != t
              ? e.flowing && e.length
                ? e.buffer.head.data.length
                : e.length
              : (t > e.highWaterMark &&
                  (e.highWaterMark = (function (t) {
                    return t >= 8388608 ? (t = 8388608) : (t--, (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t++), t;
                  })(t)),
                t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0));
          }
          function C(t) {
            var e = t._readableState;
            (e.needReadable = !1), e.emittedReadable || (p('emitReadable', e.flowing), (e.emittedReadable = !0), e.sync ? n.nextTick(A, t) : A(t));
          }
          function A(t) {
            p('emit readable'), t.emit('readable'), B(t);
          }
          function E(t, e) {
            e.readingMore || ((e.readingMore = !0), n.nextTick(x, t, e));
          }
          function x(t, e) {
            for (var r = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (p('maybeReadMore read 0'), t.read(0), r !== e.length); )
              r = e.length;
            e.readingMore = !1;
          }
          function k(t) {
            p('readable nexttick read 0'), t.read(0);
          }
          function T(t, e) {
            e.reading || (p('resume read 0'), t.read(0)), (e.resumeScheduled = !1), (e.awaitDrain = 0), t.emit('resume'), B(t), e.flowing && !e.reading && t.read(0);
          }
          function B(t) {
            var e = t._readableState;
            for (p('flow', e.flowing); e.flowing && null !== t.read(); );
          }
          function I(t, e) {
            return 0 === e.length
              ? null
              : (e.objectMode
                  ? (r = e.buffer.shift())
                  : !t || t >= e.length
                  ? ((r = e.decoder ? e.buffer.join('') : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length)), e.buffer.clear())
                  : (r = (function (t, e, r) {
                      var i;
                      t < e.head.data.length
                        ? ((i = e.head.data.slice(0, t)), (e.head.data = e.head.data.slice(t)))
                        : (i =
                            t === e.head.data.length
                              ? e.shift()
                              : r
                              ? (function (t, e) {
                                  var r = e.head,
                                    i = 1,
                                    n = r.data;
                                  t -= n.length;
                                  for (; (r = r.next); ) {
                                    var o = r.data,
                                      s = t > o.length ? o.length : t;
                                    if ((s === o.length ? (n += o) : (n += o.slice(0, t)), 0 === (t -= s))) {
                                      s === o.length ? (++i, r.next ? (e.head = r.next) : (e.head = e.tail = null)) : ((e.head = r), (r.data = o.slice(s)));
                                      break;
                                    }
                                    ++i;
                                  }
                                  return (e.length -= i), n;
                                })(t, e)
                              : (function (t, e) {
                                  var r = u.allocUnsafe(t),
                                    i = e.head,
                                    n = 1;
                                  i.data.copy(r), (t -= i.data.length);
                                  for (; (i = i.next); ) {
                                    var o = i.data,
                                      s = t > o.length ? o.length : t;
                                    if ((o.copy(r, r.length - t, 0, s), 0 === (t -= s))) {
                                      s === o.length ? (++n, i.next ? (e.head = i.next) : (e.head = e.tail = null)) : ((e.head = i), (i.data = o.slice(s)));
                                      break;
                                    }
                                    ++n;
                                  }
                                  return (e.length -= n), r;
                                })(t, e));
                      return i;
                    })(t, e.buffer, e.decoder)),
                r);
            var r;
          }
          function M(t) {
            var e = t._readableState;
            if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
            e.endEmitted || ((e.ended = !0), n.nextTick(L, e, t));
          }
          function L(t, e) {
            t.endEmitted || 0 !== t.length || ((t.endEmitted = !0), (e.readable = !1), e.emit('end'));
          }
          function O(t, e) {
            for (var r = 0, i = t.length; r < i; r++) if (t[r] === e) return r;
            return -1;
          }
          (b.prototype.read = function (t) {
            p('read', t), (t = parseInt(t, 10));
            var e = this._readableState,
              r = t;
            if ((0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)))
              return p('read: emitReadable', e.length, e.ended), 0 === e.length && e.ended ? M(this) : C(this), null;
            if (0 === (t = S(t, e)) && e.ended) return 0 === e.length && M(this), null;
            var i,
              n = e.needReadable;
            return (
              p('need readable', n),
              (0 === e.length || e.length - t < e.highWaterMark) && p('length less than watermark', (n = !0)),
              e.ended || e.reading
                ? p('reading or ended', (n = !1))
                : n &&
                  (p('do read'),
                  (e.reading = !0),
                  (e.sync = !0),
                  0 === e.length && (e.needReadable = !0),
                  this._read(e.highWaterMark),
                  (e.sync = !1),
                  e.reading || (t = S(r, e))),
              null === (i = t > 0 ? I(t, e) : null) ? ((e.needReadable = !0), (t = 0)) : (e.length -= t),
              0 === e.length && (e.ended || (e.needReadable = !0), r !== t && e.ended && M(this)),
              null !== i && this.emit('data', i),
              i
            );
          }),
            (b.prototype._read = function (t) {
              this.emit('error', new Error('_read() is not implemented'));
            }),
            (b.prototype.pipe = function (t, e) {
              var i = this,
                o = this._readableState;
              switch (o.pipesCount) {
                case 0:
                  o.pipes = t;
                  break;
                case 1:
                  o.pipes = [o.pipes, t];
                  break;
                default:
                  o.pipes.push(t);
              }
              (o.pipesCount += 1), p('pipe count=%d opts=%j', o.pipesCount, e);
              var h = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? f : b;
              function u(e, r) {
                p('onunpipe'),
                  e === i &&
                    r &&
                    !1 === r.hasUnpiped &&
                    ((r.hasUnpiped = !0),
                    p('cleanup'),
                    t.removeListener('close', g),
                    t.removeListener('finish', _),
                    t.removeListener('drain', l),
                    t.removeListener('error', y),
                    t.removeListener('unpipe', u),
                    i.removeListener('end', f),
                    i.removeListener('end', b),
                    i.removeListener('data', m),
                    (c = !0),
                    !o.awaitDrain || (t._writableState && !t._writableState.needDrain) || l());
              }
              function f() {
                p('onend'), t.end();
              }
              o.endEmitted ? n.nextTick(h) : i.once('end', h), t.on('unpipe', u);
              var l = (function (t) {
                return function () {
                  var e = t._readableState;
                  p('pipeOnDrain', e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && a(t, 'data') && ((e.flowing = !0), B(t));
                };
              })(i);
              t.on('drain', l);
              var c = !1;
              var d = !1;
              function m(e) {
                p('ondata'),
                  (d = !1),
                  !1 !== t.write(e) ||
                    d ||
                    (((1 === o.pipesCount && o.pipes === t) || (o.pipesCount > 1 && -1 !== O(o.pipes, t))) &&
                      !c &&
                      (p('false write response, pause', i._readableState.awaitDrain), i._readableState.awaitDrain++, (d = !0)),
                    i.pause());
              }
              function y(e) {
                p('onerror', e), b(), t.removeListener('error', y), 0 === a(t, 'error') && t.emit('error', e);
              }
              function g() {
                t.removeListener('finish', _), b();
              }
              function _() {
                p('onfinish'), t.removeListener('close', g), b();
              }
              function b() {
                p('unpipe'), i.unpipe(t);
              }
              return (
                i.on('data', m),
                (function (t, e, r) {
                  if ('function' == typeof t.prependListener) return t.prependListener(e, r);
                  t._events && t._events[e] ? (s(t._events[e]) ? t._events[e].unshift(r) : (t._events[e] = [r, t._events[e]])) : t.on(e, r);
                })(t, 'error', y),
                t.once('close', g),
                t.once('finish', _),
                t.emit('pipe', i),
                o.flowing || (p('pipe resume'), i.resume()),
                t
              );
            }),
            (b.prototype.unpipe = function (t) {
              var e = this._readableState,
                r = { hasUnpiped: !1 };
              if (0 === e.pipesCount) return this;
              if (1 === e.pipesCount)
                return (t && t !== e.pipes) || (t || (t = e.pipes), (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1), t && t.emit('unpipe', this, r)), this;
              if (!t) {
                var i = e.pipes,
                  n = e.pipesCount;
                (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
                for (var o = 0; o < n; o++) i[o].emit('unpipe', this, r);
                return this;
              }
              var s = O(e.pipes, t);
              return -1 === s || (e.pipes.splice(s, 1), (e.pipesCount -= 1), 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit('unpipe', this, r)), this;
            }),
            (b.prototype.on = function (t, e) {
              var r = h.prototype.on.call(this, t, e);
              if ('data' === t) !1 !== this._readableState.flowing && this.resume();
              else if ('readable' === t) {
                var i = this._readableState;
                i.endEmitted ||
                  i.readableListening ||
                  ((i.readableListening = i.needReadable = !0), (i.emittedReadable = !1), i.reading ? i.length && C(this) : n.nextTick(k, this));
              }
              return r;
            }),
            (b.prototype.addListener = b.prototype.on),
            (b.prototype.resume = function () {
              var t = this._readableState;
              return (
                t.flowing ||
                  (p('resume'),
                  (t.flowing = !0),
                  (function (t, e) {
                    e.resumeScheduled || ((e.resumeScheduled = !0), n.nextTick(T, t, e));
                  })(this, t)),
                this
              );
            }),
            (b.prototype.pause = function () {
              return (
                p('call pause flowing=%j', this._readableState.flowing),
                !1 !== this._readableState.flowing && (p('pause'), (this._readableState.flowing = !1), this.emit('pause')),
                this
              );
            }),
            (b.prototype.wrap = function (t) {
              var e = this,
                r = this._readableState,
                i = !1;
              for (var n in (t.on('end', function () {
                if ((p('wrapped end'), r.decoder && !r.ended)) {
                  var t = r.decoder.end();
                  t && t.length && e.push(t);
                }
                e.push(null);
              }),
              t.on('data', function (n) {
                (p('wrapped data'), r.decoder && (n = r.decoder.write(n)), r.objectMode && null == n) ||
                  ((r.objectMode || (n && n.length)) && (e.push(n) || ((i = !0), t.pause())));
              }),
              t))
                void 0 === this[n] &&
                  'function' == typeof t[n] &&
                  (this[n] = (function (e) {
                    return function () {
                      return t[e].apply(t, arguments);
                    };
                  })(n));
              for (var o = 0; o < g.length; o++) t.on(g[o], this.emit.bind(this, g[o]));
              return (
                (this._read = function (e) {
                  p('wrapped _read', e), i && ((i = !1), t.resume());
                }),
                this
              );
            }),
            Object.defineProperty(b.prototype, 'readableHighWaterMark', {
              enumerable: !1,
              get: function () {
                return this._readableState.highWaterMark;
              },
            }),
            (b._fromList = I);
        }).call(this, t('_process'), 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : {});
      },
      {
        './_stream_duplex': 12,
        './internal/streams/BufferList': 17,
        './internal/streams/destroy': 18,
        './internal/streams/stream': 19,
        _process: 10,
        'core-util-is': 3,
        events: 4,
        inherits: 6,
        isarray: 8,
        'process-nextick-args': 9,
        'safe-buffer': 20,
        'string_decoder/': 21,
        util: 2,
      },
    ],
    15: [
      function (t, e, r) {
        'use strict';
        e.exports = s;
        var i = t('./_stream_duplex'),
          n = Object.create(t('core-util-is'));
        function o(t, e) {
          var r = this._transformState;
          r.transforming = !1;
          var i = r.writecb;
          if (!i) return this.emit('error', new Error('write callback called multiple times'));
          (r.writechunk = null), (r.writecb = null), null != e && this.push(e), i(t);
          var n = this._readableState;
          (n.reading = !1), (n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark);
        }
        function s(t) {
          if (!(this instanceof s)) return new s(t);
          i.call(this, t),
            (this._transformState = { afterTransform: o.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }),
            (this._readableState.needReadable = !0),
            (this._readableState.sync = !1),
            t && ('function' == typeof t.transform && (this._transform = t.transform), 'function' == typeof t.flush && (this._flush = t.flush)),
            this.on('prefinish', a);
        }
        function a() {
          var t = this;
          'function' == typeof this._flush
            ? this._flush(function (e, r) {
                h(t, e, r);
              })
            : h(this, null, null);
        }
        function h(t, e, r) {
          if (e) return t.emit('error', e);
          if ((null != r && t.push(r), t._writableState.length)) throw new Error('Calling transform done when ws.length != 0');
          if (t._transformState.transforming) throw new Error('Calling transform done when still transforming');
          return t.push(null);
        }
        (n.inherits = t('inherits')),
          n.inherits(s, i),
          (s.prototype.push = function (t, e) {
            return (this._transformState.needTransform = !1), i.prototype.push.call(this, t, e);
          }),
          (s.prototype._transform = function (t, e, r) {
            throw new Error('_transform() is not implemented');
          }),
          (s.prototype._write = function (t, e, r) {
            var i = this._transformState;
            if (((i.writecb = r), (i.writechunk = t), (i.writeencoding = e), !i.transforming)) {
              var n = this._readableState;
              (i.needTransform || n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark);
            }
          }),
          (s.prototype._read = function (t) {
            var e = this._transformState;
            null !== e.writechunk && e.writecb && !e.transforming
              ? ((e.transforming = !0), this._transform(e.writechunk, e.writeencoding, e.afterTransform))
              : (e.needTransform = !0);
          }),
          (s.prototype._destroy = function (t, e) {
            var r = this;
            i.prototype._destroy.call(this, t, function (t) {
              e(t), r.emit('close');
            });
          });
      },
      { './_stream_duplex': 12, 'core-util-is': 3, inherits: 6 },
    ],
    16: [
      function (t, e, r) {
        (function (r, i, n) {
          'use strict';
          var o = t('process-nextick-args');
          function s(t) {
            var e = this;
            (this.next = null),
              (this.entry = null),
              (this.finish = function () {
                !(function (t, e, r) {
                  var i = t.entry;
                  t.entry = null;
                  for (; i; ) {
                    var n = i.callback;
                    e.pendingcb--, n(r), (i = i.next);
                  }
                  e.corkedRequestsFree ? (e.corkedRequestsFree.next = t) : (e.corkedRequestsFree = t);
                })(e, t);
              });
          }
          e.exports = _;
          var a,
            h = !r.browser && ['v0.10', 'v0.9.'].indexOf(r.version.slice(0, 5)) > -1 ? n : o.nextTick;
          _.WritableState = g;
          var u = Object.create(t('core-util-is'));
          u.inherits = t('inherits');
          var f = { deprecate: t('util-deprecate') },
            l = t('./internal/streams/stream'),
            c = t('safe-buffer').Buffer,
            p = i.Uint8Array || function () {};
          var d,
            m = t('./internal/streams/destroy');
          function y() {}
          function g(e, r) {
            (a = a || t('./_stream_duplex')), (e = e || {});
            var i = r instanceof a;
            (this.objectMode = !!e.objectMode), i && (this.objectMode = this.objectMode || !!e.writableObjectMode);
            var n = e.highWaterMark,
              u = e.writableHighWaterMark,
              f = this.objectMode ? 16 : 16384;
            (this.highWaterMark = n || 0 === n ? n : i && (u || 0 === u) ? u : f),
              (this.highWaterMark = Math.floor(this.highWaterMark)),
              (this.finalCalled = !1),
              (this.needDrain = !1),
              (this.ending = !1),
              (this.ended = !1),
              (this.finished = !1),
              (this.destroyed = !1);
            var l = !1 === e.decodeStrings;
            (this.decodeStrings = !l),
              (this.defaultEncoding = e.defaultEncoding || 'utf8'),
              (this.length = 0),
              (this.writing = !1),
              (this.corked = 0),
              (this.sync = !0),
              (this.bufferProcessing = !1),
              (this.onwrite = function (t) {
                !(function (t, e) {
                  var r = t._writableState,
                    i = r.sync,
                    n = r.writecb;
                  if (
                    ((function (t) {
                      (t.writing = !1), (t.writecb = null), (t.length -= t.writelen), (t.writelen = 0);
                    })(r),
                    e)
                  )
                    !(function (t, e, r, i, n) {
                      --e.pendingcb,
                        r
                          ? (o.nextTick(n, i), o.nextTick(A, t, e), (t._writableState.errorEmitted = !0), t.emit('error', i))
                          : (n(i), (t._writableState.errorEmitted = !0), t.emit('error', i), A(t, e));
                    })(t, r, i, e, n);
                  else {
                    var s = S(r);
                    s || r.corked || r.bufferProcessing || !r.bufferedRequest || w(t, r), i ? h(v, t, r, s, n) : v(t, r, s, n);
                  }
                })(r, t);
              }),
              (this.writecb = null),
              (this.writelen = 0),
              (this.bufferedRequest = null),
              (this.lastBufferedRequest = null),
              (this.pendingcb = 0),
              (this.prefinished = !1),
              (this.errorEmitted = !1),
              (this.bufferedRequestCount = 0),
              (this.corkedRequestsFree = new s(this));
          }
          function _(e) {
            if (((a = a || t('./_stream_duplex')), !(d.call(_, this) || this instanceof a))) return new _(e);
            (this._writableState = new g(e, this)),
              (this.writable = !0),
              e &&
                ('function' == typeof e.write && (this._write = e.write),
                'function' == typeof e.writev && (this._writev = e.writev),
                'function' == typeof e.destroy && (this._destroy = e.destroy),
                'function' == typeof e.final && (this._final = e.final)),
              l.call(this);
          }
          function b(t, e, r, i, n, o, s) {
            (e.writelen = i), (e.writecb = s), (e.writing = !0), (e.sync = !0), r ? t._writev(n, e.onwrite) : t._write(n, o, e.onwrite), (e.sync = !1);
          }
          function v(t, e, r, i) {
            r ||
              (function (t, e) {
                0 === e.length && e.needDrain && ((e.needDrain = !1), t.emit('drain'));
              })(t, e),
              e.pendingcb--,
              i(),
              A(t, e);
          }
          function w(t, e) {
            e.bufferProcessing = !0;
            var r = e.bufferedRequest;
            if (t._writev && r && r.next) {
              var i = e.bufferedRequestCount,
                n = new Array(i),
                o = e.corkedRequestsFree;
              o.entry = r;
              for (var a = 0, h = !0; r; ) (n[a] = r), r.isBuf || (h = !1), (r = r.next), (a += 1);
              (n.allBuffers = h),
                b(t, e, !0, e.length, n, '', o.finish),
                e.pendingcb++,
                (e.lastBufferedRequest = null),
                o.next ? ((e.corkedRequestsFree = o.next), (o.next = null)) : (e.corkedRequestsFree = new s(e)),
                (e.bufferedRequestCount = 0);
            } else {
              for (; r; ) {
                var u = r.chunk,
                  f = r.encoding,
                  l = r.callback;
                if ((b(t, e, !1, e.objectMode ? 1 : u.length, u, f, l), (r = r.next), e.bufferedRequestCount--, e.writing)) break;
              }
              null === r && (e.lastBufferedRequest = null);
            }
            (e.bufferedRequest = r), (e.bufferProcessing = !1);
          }
          function S(t) {
            return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
          }
          function C(t, e) {
            t._final(function (r) {
              e.pendingcb--, r && t.emit('error', r), (e.prefinished = !0), t.emit('prefinish'), A(t, e);
            });
          }
          function A(t, e) {
            var r = S(e);
            return (
              r &&
                (!(function (t, e) {
                  e.prefinished ||
                    e.finalCalled ||
                    ('function' == typeof t._final ? (e.pendingcb++, (e.finalCalled = !0), o.nextTick(C, t, e)) : ((e.prefinished = !0), t.emit('prefinish')));
                })(t, e),
                0 === e.pendingcb && ((e.finished = !0), t.emit('finish'))),
              r
            );
          }
          u.inherits(_, l),
            (g.prototype.getBuffer = function () {
              for (var t = this.bufferedRequest, e = []; t; ) e.push(t), (t = t.next);
              return e;
            }),
            (function () {
              try {
                Object.defineProperty(g.prototype, 'buffer', {
                  get: f.deprecate(
                    function () {
                      return this.getBuffer();
                    },
                    '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                    'DEP0003',
                  ),
                });
              } catch (t) {}
            })(),
            'function' == typeof Symbol && Symbol.hasInstance && 'function' == typeof Function.prototype[Symbol.hasInstance]
              ? ((d = Function.prototype[Symbol.hasInstance]),
                Object.defineProperty(_, Symbol.hasInstance, {
                  value: function (t) {
                    return !!d.call(this, t) || (this === _ && t && t._writableState instanceof g);
                  },
                }))
              : (d = function (t) {
                  return t instanceof this;
                }),
            (_.prototype.pipe = function () {
              this.emit('error', new Error('Cannot pipe, not readable'));
            }),
            (_.prototype.write = function (t, e, r) {
              var i,
                n = this._writableState,
                s = !1,
                a = !n.objectMode && ((i = t), c.isBuffer(i) || i instanceof p);
              return (
                a &&
                  !c.isBuffer(t) &&
                  (t = (function (t) {
                    return c.from(t);
                  })(t)),
                'function' == typeof e && ((r = e), (e = null)),
                a ? (e = 'buffer') : e || (e = n.defaultEncoding),
                'function' != typeof r && (r = y),
                n.ended
                  ? (function (t, e) {
                      var r = new Error('write after end');
                      t.emit('error', r), o.nextTick(e, r);
                    })(this, r)
                  : (a ||
                      (function (t, e, r, i) {
                        var n = !0,
                          s = !1;
                        return (
                          null === r
                            ? (s = new TypeError('May not write null values to stream'))
                            : 'string' == typeof r || void 0 === r || e.objectMode || (s = new TypeError('Invalid non-string/buffer chunk')),
                          s && (t.emit('error', s), o.nextTick(i, s), (n = !1)),
                          n
                        );
                      })(this, n, t, r)) &&
                    (n.pendingcb++,
                    (s = (function (t, e, r, i, n, o) {
                      if (!r) {
                        var s = (function (t, e, r) {
                          t.objectMode || !1 === t.decodeStrings || 'string' != typeof e || (e = c.from(e, r));
                          return e;
                        })(e, i, n);
                        i !== s && ((r = !0), (n = 'buffer'), (i = s));
                      }
                      var a = e.objectMode ? 1 : i.length;
                      e.length += a;
                      var h = e.length < e.highWaterMark;
                      h || (e.needDrain = !0);
                      if (e.writing || e.corked) {
                        var u = e.lastBufferedRequest;
                        (e.lastBufferedRequest = { chunk: i, encoding: n, isBuf: r, callback: o, next: null }),
                          u ? (u.next = e.lastBufferedRequest) : (e.bufferedRequest = e.lastBufferedRequest),
                          (e.bufferedRequestCount += 1);
                      } else b(t, e, !1, a, i, n, o);
                      return h;
                    })(this, n, a, t, e, r))),
                s
              );
            }),
            (_.prototype.cork = function () {
              this._writableState.corked++;
            }),
            (_.prototype.uncork = function () {
              var t = this._writableState;
              t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || w(this, t));
            }),
            (_.prototype.setDefaultEncoding = function (t) {
              if (
                ('string' == typeof t && (t = t.toLowerCase()),
                !(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((t + '').toLowerCase()) > -1))
              )
                throw new TypeError('Unknown encoding: ' + t);
              return (this._writableState.defaultEncoding = t), this;
            }),
            Object.defineProperty(_.prototype, 'writableHighWaterMark', {
              enumerable: !1,
              get: function () {
                return this._writableState.highWaterMark;
              },
            }),
            (_.prototype._write = function (t, e, r) {
              r(new Error('_write() is not implemented'));
            }),
            (_.prototype._writev = null),
            (_.prototype.end = function (t, e, r) {
              var i = this._writableState;
              'function' == typeof t ? ((r = t), (t = null), (e = null)) : 'function' == typeof e && ((r = e), (e = null)),
                null != t && this.write(t, e),
                i.corked && ((i.corked = 1), this.uncork()),
                i.ending ||
                  i.finished ||
                  (function (t, e, r) {
                    (e.ending = !0), A(t, e), r && (e.finished ? o.nextTick(r) : t.once('finish', r));
                    (e.ended = !0), (t.writable = !1);
                  })(this, i, r);
            }),
            Object.defineProperty(_.prototype, 'destroyed', {
              get: function () {
                return void 0 !== this._writableState && this._writableState.destroyed;
              },
              set: function (t) {
                this._writableState && (this._writableState.destroyed = t);
              },
            }),
            (_.prototype.destroy = m.destroy),
            (_.prototype._undestroy = m.undestroy),
            (_.prototype._destroy = function (t, e) {
              this.end(), e(t);
            });
        }).call(
          this,
          t('_process'),
          'undefined' != typeof global ? global : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : {},
          t('timers').setImmediate,
        );
      },
      {
        './_stream_duplex': 12,
        './internal/streams/destroy': 18,
        './internal/streams/stream': 19,
        _process: 10,
        'core-util-is': 3,
        inherits: 6,
        'process-nextick-args': 9,
        'safe-buffer': 20,
        timers: 27,
        'util-deprecate': 28,
      },
    ],
    17: [
      function (t, e, r) {
        'use strict';
        var i = t('safe-buffer').Buffer,
          n = t('util');
        (e.exports = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this.head = null),
              (this.tail = null),
              (this.length = 0);
          }
          return (
            (t.prototype.push = function (t) {
              var e = { data: t, next: null };
              this.length > 0 ? (this.tail.next = e) : (this.head = e), (this.tail = e), ++this.length;
            }),
            (t.prototype.unshift = function (t) {
              var e = { data: t, next: this.head };
              0 === this.length && (this.tail = e), (this.head = e), ++this.length;
            }),
            (t.prototype.shift = function () {
              if (0 !== this.length) {
                var t = this.head.data;
                return 1 === this.length ? (this.head = this.tail = null) : (this.head = this.head.next), --this.length, t;
              }
            }),
            (t.prototype.clear = function () {
              (this.head = this.tail = null), (this.length = 0);
            }),
            (t.prototype.join = function (t) {
              if (0 === this.length) return '';
              for (var e = this.head, r = '' + e.data; (e = e.next); ) r += t + e.data;
              return r;
            }),
            (t.prototype.concat = function (t) {
              if (0 === this.length) return i.alloc(0);
              if (1 === this.length) return this.head.data;
              for (var e, r, n, o = i.allocUnsafe(t >>> 0), s = this.head, a = 0; s; ) (e = s.data), (r = o), (n = a), e.copy(r, n), (a += s.data.length), (s = s.next);
              return o;
            }),
            t
          );
        })()),
          n &&
            n.inspect &&
            n.inspect.custom &&
            (e.exports.prototype[n.inspect.custom] = function () {
              var t = n.inspect({ length: this.length });
              return this.constructor.name + ' ' + t;
            });
      },
      { 'safe-buffer': 20, util: 2 },
    ],
    18: [
      function (t, e, r) {
        'use strict';
        var i = t('process-nextick-args');
        function n(t, e) {
          t.emit('error', e);
        }
        e.exports = {
          destroy: function (t, e) {
            var r = this,
              o = this._readableState && this._readableState.destroyed,
              s = this._writableState && this._writableState.destroyed;
            return o || s
              ? (e ? e(t) : !t || (this._writableState && this._writableState.errorEmitted) || i.nextTick(n, this, t), this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(t || null, function (t) {
                  !e && t ? (i.nextTick(n, r, t), r._writableState && (r._writableState.errorEmitted = !0)) : e && e(t);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1), (this._readableState.reading = !1), (this._readableState.ended = !1), (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
        };
      },
      { 'process-nextick-args': 9 },
    ],
    19: [
      function (t, e, r) {
        e.exports = t('events').EventEmitter;
      },
      { events: 4 },
    ],
    20: [
      function (t, e, r) {
        var i = t('buffer'),
          n = i.Buffer;
        function o(t, e) {
          for (var r in t) e[r] = t[r];
        }
        function s(t, e, r) {
          return n(t, e, r);
        }
        n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? (e.exports = i) : (o(i, r), (r.Buffer = s)),
          o(n, s),
          (s.from = function (t, e, r) {
            if ('number' == typeof t) throw new TypeError('Argument must not be a number');
            return n(t, e, r);
          }),
          (s.alloc = function (t, e, r) {
            if ('number' != typeof t) throw new TypeError('Argument must be a number');
            var i = n(t);
            return void 0 !== e ? ('string' == typeof r ? i.fill(e, r) : i.fill(e)) : i.fill(0), i;
          }),
          (s.allocUnsafe = function (t) {
            if ('number' != typeof t) throw new TypeError('Argument must be a number');
            return n(t);
          }),
          (s.allocUnsafeSlow = function (t) {
            if ('number' != typeof t) throw new TypeError('Argument must be a number');
            return i.SlowBuffer(t);
          });
      },
      { buffer: 'buffer' },
    ],
    21: [
      function (t, e, r) {
        'use strict';
        var i = t('safe-buffer').Buffer,
          n =
            i.isEncoding ||
            function (t) {
              switch ((t = '' + t) && t.toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                case 'raw':
                  return !0;
                default:
                  return !1;
              }
            };
        function o(t) {
          var e;
          switch (
            ((this.encoding = (function (t) {
              var e = (function (t) {
                if (!t) return 'utf8';
                for (var e; ; )
                  switch (t) {
                    case 'utf8':
                    case 'utf-8':
                      return 'utf8';
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return 'utf16le';
                    case 'latin1':
                    case 'binary':
                      return 'latin1';
                    case 'base64':
                    case 'ascii':
                    case 'hex':
                      return t;
                    default:
                      if (e) return;
                      (t = ('' + t).toLowerCase()), (e = !0);
                  }
              })(t);
              if ('string' != typeof e && (i.isEncoding === n || !n(t))) throw new Error('Unknown encoding: ' + t);
              return e || t;
            })(t)),
            this.encoding)
          ) {
            case 'utf16le':
              (this.text = h), (this.end = u), (e = 4);
              break;
            case 'utf8':
              (this.fillLast = a), (e = 4);
              break;
            case 'base64':
              (this.text = f), (this.end = l), (e = 3);
              break;
            default:
              return (this.write = c), void (this.end = p);
          }
          (this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = i.allocUnsafe(e));
        }
        function s(t) {
          return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2;
        }
        function a(t) {
          var e = this.lastTotal - this.lastNeed,
            r = (function (t, e, r) {
              if (128 != (192 & e[0])) return (t.lastNeed = 0), '�';
              if (t.lastNeed > 1 && e.length > 1) {
                if (128 != (192 & e[1])) return (t.lastNeed = 1), '�';
                if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return (t.lastNeed = 2), '�';
              }
            })(this, t);
          return void 0 !== r
            ? r
            : this.lastNeed <= t.length
            ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal))
            : (t.copy(this.lastChar, e, 0, t.length), void (this.lastNeed -= t.length));
        }
        function h(t, e) {
          if ((t.length - e) % 2 == 0) {
            var r = t.toString('utf16le', e);
            if (r) {
              var i = r.charCodeAt(r.length - 1);
              if (i >= 55296 && i <= 56319)
                return (this.lastNeed = 2), (this.lastTotal = 4), (this.lastChar[0] = t[t.length - 2]), (this.lastChar[1] = t[t.length - 1]), r.slice(0, -1);
            }
            return r;
          }
          return (this.lastNeed = 1), (this.lastTotal = 2), (this.lastChar[0] = t[t.length - 1]), t.toString('utf16le', e, t.length - 1);
        }
        function u(t) {
          var e = t && t.length ? this.write(t) : '';
          if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return e + this.lastChar.toString('utf16le', 0, r);
          }
          return e;
        }
        function f(t, e) {
          var r = (t.length - e) % 3;
          return 0 === r
            ? t.toString('base64', e)
            : ((this.lastNeed = 3 - r),
              (this.lastTotal = 3),
              1 === r ? (this.lastChar[0] = t[t.length - 1]) : ((this.lastChar[0] = t[t.length - 2]), (this.lastChar[1] = t[t.length - 1])),
              t.toString('base64', e, t.length - r));
        }
        function l(t) {
          var e = t && t.length ? this.write(t) : '';
          return this.lastNeed ? e + this.lastChar.toString('base64', 0, 3 - this.lastNeed) : e;
        }
        function c(t) {
          return t.toString(this.encoding);
        }
        function p(t) {
          return t && t.length ? this.write(t) : '';
        }
        (r.StringDecoder = o),
          (o.prototype.write = function (t) {
            if (0 === t.length) return '';
            var e, r;
            if (this.lastNeed) {
              if (void 0 === (e = this.fillLast(t))) return '';
              (r = this.lastNeed), (this.lastNeed = 0);
            } else r = 0;
            return r < t.length ? (e ? e + this.text(t, r) : this.text(t, r)) : e || '';
          }),
          (o.prototype.end = function (t) {
            var e = t && t.length ? this.write(t) : '';
            return this.lastNeed ? e + '�' : e;
          }),
          (o.prototype.text = function (t, e) {
            var r = (function (t, e, r) {
              var i = e.length - 1;
              if (i < r) return 0;
              var n = s(e[i]);
              if (n >= 0) return n > 0 && (t.lastNeed = n - 1), n;
              if (--i < r || -2 === n) return 0;
              if ((n = s(e[i])) >= 0) return n > 0 && (t.lastNeed = n - 2), n;
              if (--i < r || -2 === n) return 0;
              if ((n = s(e[i])) >= 0) return n > 0 && (2 === n ? (n = 0) : (t.lastNeed = n - 3)), n;
              return 0;
            })(this, t, e);
            if (!this.lastNeed) return t.toString('utf8', e);
            this.lastTotal = r;
            var i = t.length - (r - this.lastNeed);
            return t.copy(this.lastChar, 0, i), t.toString('utf8', e, i);
          }),
          (o.prototype.fillLast = function (t) {
            if (this.lastNeed <= t.length)
              return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), (this.lastNeed -= t.length);
          });
      },
      { 'safe-buffer': 20 },
    ],
    22: [
      function (t, e, r) {
        e.exports = t('./readable').PassThrough;
      },
      { './readable': 23 },
    ],
    23: [
      function (t, e, r) {
        ((r = e.exports = t('./lib/_stream_readable.js')).Stream = r),
          (r.Readable = r),
          (r.Writable = t('./lib/_stream_writable.js')),
          (r.Duplex = t('./lib/_stream_duplex.js')),
          (r.Transform = t('./lib/_stream_transform.js')),
          (r.PassThrough = t('./lib/_stream_passthrough.js'));
      },
      {
        './lib/_stream_duplex.js': 12,
        './lib/_stream_passthrough.js': 13,
        './lib/_stream_readable.js': 14,
        './lib/_stream_transform.js': 15,
        './lib/_stream_writable.js': 16,
      },
    ],
    24: [
      function (t, e, r) {
        e.exports = t('./readable').Transform;
      },
      { './readable': 23 },
    ],
    25: [
      function (t, e, r) {
        e.exports = t('./lib/_stream_writable.js');
      },
      { './lib/_stream_writable.js': 16 },
    ],
    26: [
      function (t, e, r) {
        e.exports = n;
        var i = t('events').EventEmitter;
        function n() {
          i.call(this);
        }
        t('inherits')(n, i),
          (n.Readable = t('readable-stream/readable.js')),
          (n.Writable = t('readable-stream/writable.js')),
          (n.Duplex = t('readable-stream/duplex.js')),
          (n.Transform = t('readable-stream/transform.js')),
          (n.PassThrough = t('readable-stream/passthrough.js')),
          (n.Stream = n),
          (n.prototype.pipe = function (t, e) {
            var r = this;
            function n(e) {
              t.writable && !1 === t.write(e) && r.pause && r.pause();
            }
            function o() {
              r.readable && r.resume && r.resume();
            }
            r.on('data', n), t.on('drain', o), t._isStdio || (e && !1 === e.end) || (r.on('end', a), r.on('close', h));
            var s = !1;
            function a() {
              s || ((s = !0), t.end());
            }
            function h() {
              s || ((s = !0), 'function' == typeof t.destroy && t.destroy());
            }
            function u(t) {
              if ((f(), 0 === i.listenerCount(this, 'error'))) throw t;
            }
            function f() {
              r.removeListener('data', n),
                t.removeListener('drain', o),
                r.removeListener('end', a),
                r.removeListener('close', h),
                r.removeListener('error', u),
                t.removeListener('error', u),
                r.removeListener('end', f),
                r.removeListener('close', f),
                t.removeListener('close', f);
            }
            return r.on('error', u), t.on('error', u), r.on('end', f), r.on('close', f), t.on('close', f), t.emit('pipe', r), t;
          });
      },
      {
        events: 4,
        inherits: 6,
        'readable-stream/duplex.js': 11,
        'readable-stream/passthrough.js': 22,
        'readable-stream/readable.js': 23,
        'readable-stream/transform.js': 24,
        'readable-stream/writable.js': 25,
      },
    ],
    27: [
      function (t, e, r) {
        (function (e, i) {
          var n = t('process/browser.js').nextTick,
            o = Function.prototype.apply,
            s = Array.prototype.slice,
            a = {},
            h = 0;
          function u(t, e) {
            (this._id = t), (this._clearFn = e);
          }
          (r.setTimeout = function () {
            return new u(o.call(setTimeout, window, arguments), clearTimeout);
          }),
            (r.setInterval = function () {
              return new u(o.call(setInterval, window, arguments), clearInterval);
            }),
            (r.clearTimeout = r.clearInterval =
              function (t) {
                t.close();
              }),
            (u.prototype.unref = u.prototype.ref = function () {}),
            (u.prototype.close = function () {
              this._clearFn.call(window, this._id);
            }),
            (r.enroll = function (t, e) {
              clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
            }),
            (r.unenroll = function (t) {
              clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
            }),
            (r._unrefActive = r.active =
              function (t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 &&
                  (t._idleTimeoutId = setTimeout(function () {
                    t._onTimeout && t._onTimeout();
                  }, e));
              }),
            (r.setImmediate =
              'function' == typeof e
                ? e
                : function (t) {
                    var e = h++,
                      i = !(arguments.length < 2) && s.call(arguments, 1);
                    return (
                      (a[e] = !0),
                      n(function () {
                        a[e] && (i ? t.apply(null, i) : t.call(null), r.clearImmediate(e));
                      }),
                      e
                    );
                  }),
            (r.clearImmediate =
              'function' == typeof i
                ? i
                : function (t) {
                    delete a[t];
                  });
        }).call(this, t('timers').setImmediate, t('timers').clearImmediate);
      },
      { 'process/browser.js': 10, timers: 27 },
    ],
    28: [
      function (t, e, r) {
        (function (t) {
          function r(e) {
            try {
              if (!t.localStorage) return !1;
            } catch (t) {
              return !1;
            }
            var r = t.localStorage[e];
            return null != r && 'true' === String(r).toLowerCase();
          }
          e.exports = function (t, e) {
            if (r('noDeprecation')) return t;
            var i = !1;
            return function () {
              if (!i) {
                if (r('throwDeprecation')) throw new Error(e);
                r('traceDeprecation') ? console.trace(e) : console.warn(e), (i = !0);
              }
              return t.apply(this, arguments);
            };
          };
        }).call(this, 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : {});
      },
      {},
    ],
    29: [
      function (t, e, r) {
        'function' == typeof Object.create
          ? (e.exports = function (t, e) {
              (t.super_ = e), (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }));
            })
          : (e.exports = function (t, e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
            });
      },
      {},
    ],
    30: [
      function (t, e, r) {
        e.exports = function (t) {
          return t && 'object' == typeof t && 'function' == typeof t.copy && 'function' == typeof t.fill && 'function' == typeof t.readUInt8;
        };
      },
      {},
    ],
    31: [
      function (t, e, r) {
        (function (e, i) {
          var n = /%[sdj%]/g;
          (r.format = function (t) {
            if (!g(t)) {
              for (var e = [], r = 0; r < arguments.length; r++) e.push(a(arguments[r]));
              return e.join(' ');
            }
            r = 1;
            for (
              var i = arguments,
                o = i.length,
                s = String(t).replace(n, function (t) {
                  if ('%%' === t) return '%';
                  if (r >= o) return t;
                  switch (t) {
                    case '%s':
                      return String(i[r++]);
                    case '%d':
                      return Number(i[r++]);
                    case '%j':
                      try {
                        return JSON.stringify(i[r++]);
                      } catch (t) {
                        return '[Circular]';
                      }
                    default:
                      return t;
                  }
                }),
                h = i[r];
              r < o;
              h = i[++r]
            )
              m(h) || !v(h) ? (s += ' ' + h) : (s += ' ' + a(h));
            return s;
          }),
            (r.deprecate = function (t, n) {
              if (_(i.process))
                return function () {
                  return r.deprecate(t, n).apply(this, arguments);
                };
              if (!0 === e.noDeprecation) return t;
              var o = !1;
              return function () {
                if (!o) {
                  if (e.throwDeprecation) throw new Error(n);
                  e.traceDeprecation ? console.trace(n) : console.error(n), (o = !0);
                }
                return t.apply(this, arguments);
              };
            });
          var o,
            s = {};
          function a(t, e) {
            var i = { seen: [], stylize: u };
            return (
              arguments.length >= 3 && (i.depth = arguments[2]),
              arguments.length >= 4 && (i.colors = arguments[3]),
              d(e) ? (i.showHidden = e) : e && r._extend(i, e),
              _(i.showHidden) && (i.showHidden = !1),
              _(i.depth) && (i.depth = 2),
              _(i.colors) && (i.colors = !1),
              _(i.customInspect) && (i.customInspect = !0),
              i.colors && (i.stylize = h),
              f(i, t, i.depth)
            );
          }
          function h(t, e) {
            var r = a.styles[e];
            return r ? '[' + a.colors[r][0] + 'm' + t + '[' + a.colors[r][1] + 'm' : t;
          }
          function u(t, e) {
            return t;
          }
          function f(t, e, i) {
            if (t.customInspect && e && C(e.inspect) && e.inspect !== r.inspect && (!e.constructor || e.constructor.prototype !== e)) {
              var n = e.inspect(i, t);
              return g(n) || (n = f(t, n, i)), n;
            }
            var o = (function (t, e) {
              if (_(e)) return t.stylize('undefined', 'undefined');
              if (g(e)) {
                var r = "'" + JSON.stringify(e).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return t.stylize(r, 'string');
              }
              if (y(e)) return t.stylize('' + e, 'number');
              if (d(e)) return t.stylize('' + e, 'boolean');
              if (m(e)) return t.stylize('null', 'null');
            })(t, e);
            if (o) return o;
            var s = Object.keys(e),
              a = (function (t) {
                var e = {};
                return (
                  t.forEach(function (t, r) {
                    e[t] = !0;
                  }),
                  e
                );
              })(s);
            if ((t.showHidden && (s = Object.getOwnPropertyNames(e)), S(e) && (s.indexOf('message') >= 0 || s.indexOf('description') >= 0))) return l(e);
            if (0 === s.length) {
              if (C(e)) {
                var h = e.name ? ': ' + e.name : '';
                return t.stylize('[Function' + h + ']', 'special');
              }
              if (b(e)) return t.stylize(RegExp.prototype.toString.call(e), 'regexp');
              if (w(e)) return t.stylize(Date.prototype.toString.call(e), 'date');
              if (S(e)) return l(e);
            }
            var u,
              v = '',
              A = !1,
              E = ['{', '}'];
            (p(e) && ((A = !0), (E = ['[', ']'])), C(e)) && (v = ' [Function' + (e.name ? ': ' + e.name : '') + ']');
            return (
              b(e) && (v = ' ' + RegExp.prototype.toString.call(e)),
              w(e) && (v = ' ' + Date.prototype.toUTCString.call(e)),
              S(e) && (v = ' ' + l(e)),
              0 !== s.length || (A && 0 != e.length)
                ? i < 0
                  ? b(e)
                    ? t.stylize(RegExp.prototype.toString.call(e), 'regexp')
                    : t.stylize('[Object]', 'special')
                  : (t.seen.push(e),
                    (u = A
                      ? (function (t, e, r, i, n) {
                          for (var o = [], s = 0, a = e.length; s < a; ++s) T(e, String(s)) ? o.push(c(t, e, r, i, String(s), !0)) : o.push('');
                          return (
                            n.forEach(function (n) {
                              n.match(/^\d+$/) || o.push(c(t, e, r, i, n, !0));
                            }),
                            o
                          );
                        })(t, e, i, a, s)
                      : s.map(function (r) {
                          return c(t, e, i, a, r, A);
                        })),
                    t.seen.pop(),
                    (function (t, e, r) {
                      if (
                        t.reduce(function (t, e) {
                          return e.indexOf('\n') >= 0 && 0, t + e.replace(/\u001b\[\d\d?m/g, '').length + 1;
                        }, 0) > 60
                      )
                        return r[0] + ('' === e ? '' : e + '\n ') + ' ' + t.join(',\n  ') + ' ' + r[1];
                      return r[0] + e + ' ' + t.join(', ') + ' ' + r[1];
                    })(u, v, E))
                : E[0] + v + E[1]
            );
          }
          function l(t) {
            return '[' + Error.prototype.toString.call(t) + ']';
          }
          function c(t, e, r, i, n, o) {
            var s, a, h;
            if (
              ((h = Object.getOwnPropertyDescriptor(e, n) || { value: e[n] }).get
                ? (a = h.set ? t.stylize('[Getter/Setter]', 'special') : t.stylize('[Getter]', 'special'))
                : h.set && (a = t.stylize('[Setter]', 'special')),
              T(i, n) || (s = '[' + n + ']'),
              a ||
                (t.seen.indexOf(h.value) < 0
                  ? (a = m(r) ? f(t, h.value, null) : f(t, h.value, r - 1)).indexOf('\n') > -1 &&
                    (a = o
                      ? a
                          .split('\n')
                          .map(function (t) {
                            return '  ' + t;
                          })
                          .join('\n')
                          .substr(2)
                      : '\n' +
                        a
                          .split('\n')
                          .map(function (t) {
                            return '   ' + t;
                          })
                          .join('\n'))
                  : (a = t.stylize('[Circular]', 'special'))),
              _(s))
            ) {
              if (o && n.match(/^\d+$/)) return a;
              (s = JSON.stringify('' + n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                ? ((s = s.substr(1, s.length - 2)), (s = t.stylize(s, 'name')))
                : ((s = s
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"')
                    .replace(/(^"|"$)/g, "'")),
                  (s = t.stylize(s, 'string')));
            }
            return s + ': ' + a;
          }
          function p(t) {
            return Array.isArray(t);
          }
          function d(t) {
            return 'boolean' == typeof t;
          }
          function m(t) {
            return null === t;
          }
          function y(t) {
            return 'number' == typeof t;
          }
          function g(t) {
            return 'string' == typeof t;
          }
          function _(t) {
            return void 0 === t;
          }
          function b(t) {
            return v(t) && '[object RegExp]' === A(t);
          }
          function v(t) {
            return 'object' == typeof t && null !== t;
          }
          function w(t) {
            return v(t) && '[object Date]' === A(t);
          }
          function S(t) {
            return v(t) && ('[object Error]' === A(t) || t instanceof Error);
          }
          function C(t) {
            return 'function' == typeof t;
          }
          function A(t) {
            return Object.prototype.toString.call(t);
          }
          function E(t) {
            return t < 10 ? '0' + t.toString(10) : t.toString(10);
          }
          (r.debuglog = function (t) {
            if ((_(o) && (o = e.env.NODE_DEBUG || ''), (t = t.toUpperCase()), !s[t]))
              if (new RegExp('\\b' + t + '\\b', 'i').test(o)) {
                var i = e.pid;
                s[t] = function () {
                  var e = r.format.apply(r, arguments);
                  console.error('%s %d: %s', t, i, e);
                };
              } else s[t] = function () {};
            return s[t];
          }),
            (r.inspect = a),
            (a.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39],
            }),
            (a.styles = { special: 'cyan', number: 'yellow', boolean: 'yellow', undefined: 'grey', null: 'bold', string: 'green', date: 'magenta', regexp: 'red' }),
            (r.isArray = p),
            (r.isBoolean = d),
            (r.isNull = m),
            (r.isNullOrUndefined = function (t) {
              return null == t;
            }),
            (r.isNumber = y),
            (r.isString = g),
            (r.isSymbol = function (t) {
              return 'symbol' == typeof t;
            }),
            (r.isUndefined = _),
            (r.isRegExp = b),
            (r.isObject = v),
            (r.isDate = w),
            (r.isError = S),
            (r.isFunction = C),
            (r.isPrimitive = function (t) {
              return null === t || 'boolean' == typeof t || 'number' == typeof t || 'string' == typeof t || 'symbol' == typeof t || void 0 === t;
            }),
            (r.isBuffer = t('./support/isBuffer'));
          var x = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          function k() {
            var t = new Date(),
              e = [E(t.getHours()), E(t.getMinutes()), E(t.getSeconds())].join(':');
            return [t.getDate(), x[t.getMonth()], e].join(' ');
          }
          function T(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          (r.log = function () {
            console.log('%s - %s', k(), r.format.apply(r, arguments));
          }),
            (r.inherits = t('inherits')),
            (r._extend = function (t, e) {
              if (!e || !v(e)) return t;
              for (var r = Object.keys(e), i = r.length; i--; ) t[r[i]] = e[r[i]];
              return t;
            });
        }).call(this, t('_process'), 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : {});
      },
      { './support/isBuffer': 30, _process: 10, inherits: 29 },
    ],
    32: [
      function (t, e, r) {
        t('cuint').UINT32;
        Math.imul ||
          (Math.imul = function (t, e) {
            var r = 65535 & t,
              i = 65535 & e;
            return (r * i + (((t >>> 16) * i + r * (e >>> 16)) << 16)) | 0;
          }),
          (r.uncompress = function (t, e, r, i) {
            for (var n = (r = r || 0), o = (i = i || t.length - r), s = 0; n < o; ) {
              var a = t[n++],
                h = a >> 4;
              if (h > 0) {
                for (var u = h + 240; 255 === u; ) h += u = t[n++];
                for (var f = n + h; n < f; ) e[s++] = t[n++];
                if (n === o) return s;
              }
              var l = t[n++] | (t[n++] << 8);
              if (0 === l || l > s) return -(n - 2);
              var c = 15 & a;
              for (u = c + 240; 255 === u; ) c += u = t[n++];
              var p = s - l;
              for (f = s + c + 4; s < f; ) e[s++] = e[p++];
            }
            return s;
          });
        function i(t, e, i, n, o, s) {
          var a = o,
            h = s - o,
            u = 0;
          if (t.length >= 2113929216) throw new Error('input too large');
          if (t.length > 12) {
            var f = r.compressBound(t.length);
            if (h < f) throw Error('output too small: ' + h + ' < ' + f);
            for (var l = 67, c = t.length - 12; i + 4 < c; ) {
              var p = (t[i + 1] << 8) | t[i],
                d = (t[i + 3] << 8) | t[i + 2],
                m = Math.imul(p | (d << 16), 2654435761) >>> 16,
                y = n[m] - 1;
              if (((n[m] = i + 1), y < 0 || (i - y) >>> 16 > 0 || ((t[y + 3] << 8) | t[y + 2]) != d || ((t[y + 1] << 8) | t[y]) != p)) i += l++ >> 6;
              else {
                l = 67;
                var g = i - u,
                  _ = i - y;
                y += 4;
                for (var b = (i += 4); i < c && t[i] == t[y]; ) i++, y++;
                var v = (b = i - b) < 15 ? b : 15;
                if (g >= 15) {
                  e[a++] = 240 + v;
                  for (var w = g - 15; w > 254; w -= 255) e[a++] = 255;
                  e[a++] = w;
                } else e[a++] = (g << 4) + v;
                for (var S = 0; S < g; S++) e[a++] = t[u + S];
                if (((e[a++] = _), (e[a++] = _ >> 8), b >= 15)) {
                  for (b -= 15; b >= 255; ) (b -= 255), (e[a++] = 255);
                  e[a++] = b;
                }
                u = i;
              }
            }
          }
          if (0 == u) return 0;
          if ((g = t.length - u) >= 15) {
            e[a++] = 240;
            for (var C = g - 15; C > 254; C -= 255) e[a++] = 255;
            e[a++] = C;
          } else e[a++] = g << 4;
          for (i = u; i < t.length; ) e[a++] = t[i++];
          return a;
        }
        (r.compressBound = function (t) {
          return t > 2113929216 ? 0 : (t + t / 255 + 16) | 0;
        }),
          (r.compress = function (t, e, r, n) {
            for (var o = new Array(65536), s = 0; s < 65536; s++) o[s] = 0;
            return i(t, e, 0, o, r || 0, n || e.length);
          }),
          (r.compressHC = r.compress),
          (r.compressDependent = i);
      },
      { cuint: 38 },
    ],
    33: [
      function (t, e, r) {
        (function (e) {
          var i = t('./decoder_stream');
          r.LZ4_uncompress = function (t, r) {
            var n = [],
              o = new i(r);
            return (
              o.on('data', function (t) {
                n.push(t);
              }),
              o.end(t),
              e.concat(n)
            );
          };
        }).call(this, t('buffer').Buffer);
      },
      { './decoder_stream': 34, buffer: 'buffer' },
    ],
    34: [
      function (t, e, r) {
        (function (r) {
          var i = t('stream').Transform,
            n = t('util').inherits,
            o = t('./static'),
            s = o.utils,
            a = s.bindings,
            h = t('./binding'),
            u = o.STATES,
            f = o.SIZES;
          function l(t) {
            if (!(this instanceof l)) return new l(t);
            i.call(this, t),
              (this.options = t || {}),
              (this.binding = this.options.useJS ? h : a),
              (this.buffer = null),
              (this.pos = 0),
              (this.descriptor = null),
              (this.state = u.MAGIC),
              (this.notEnoughData = !1),
              (this.descriptorStart = 0),
              (this.streamSize = null),
              (this.dictId = null),
              (this.currentStreamChecksum = null),
              (this.dataBlockSize = 0),
              (this.skippableSize = 0);
          }
          n(l, i),
            (l.prototype._transform = function (t, e, i) {
              if (this.skippableSize > 0) {
                if (((this.skippableSize -= t.length), this.skippableSize > 0)) return void i();
                (t = t.slice(-this.skippableSize)), (this.skippableSize = 0), (this.state = u.MAGIC);
              }
              (this.buffer = this.buffer ? r.concat([this.buffer, t], this.buffer.length + t.length) : t), this._main(i);
            }),
            (l.prototype.emit_Error = function (t) {
              this.emit('error', new Error(t + ' @' + this.pos));
            }),
            (l.prototype.check_Size = function (t) {
              var e = this.buffer.length - this.pos;
              return e <= 0 || e < t ? (this.notEnoughData && this.emit_Error('Unexpected end of LZ4 stream'), !0) : ((this.pos += t), !1);
            }),
            (l.prototype.read_MagicNumber = function () {
              var t = this.pos;
              if (this.check_Size(f.MAGIC)) return !0;
              var e = s.readUInt32LE(this.buffer, t);
              if ((4294967280 & e) !== o.MAGICNUMBER_SKIPPABLE)
                return e !== o.MAGICNUMBER
                  ? ((this.pos = t), this.emit_Error('Invalid magic number: ' + e.toString(16).toUpperCase()), !0)
                  : void (this.state = u.DESCRIPTOR);
              this.state = u.SKIP_SIZE;
            }),
            (l.prototype.read_SkippableSize = function () {
              var t = this.pos;
              if (this.check_Size(f.SKIP_SIZE)) return !0;
              (this.state = u.SKIP_DATA), (this.skippableSize = s.readUInt32LE(this.buffer, t));
            }),
            (l.prototype.read_Descriptor = function () {
              var t = this.pos;
              if (this.check_Size(f.DESCRIPTOR)) return !0;
              this.descriptorStart = t;
              var e = this.buffer[t],
                r = e >> 6;
              if (r !== o.VERSION) return (this.pos = t), this.emit_Error('Invalid version: ' + r + ' != ' + o.VERSION), !0;
              if ((e >> 1) & 1) return (this.pos = t), this.emit_Error('Reserved bit set'), !0;
              var i = (this.buffer[t + 1] >> 4) & 7,
                n = o.blockMaxSizes[i];
              if (null === n) return (this.pos = t), this.emit_Error('Invalid block max size: ' + i), !0;
              (this.descriptor = {
                blockIndependence: Boolean((e >> 5) & 1),
                blockChecksum: Boolean((e >> 4) & 1),
                blockMaxSize: n,
                streamSize: Boolean((e >> 3) & 1),
                streamChecksum: Boolean((e >> 2) & 1),
                dict: Boolean(1 & e),
                dictId: 0,
              }),
                (this.state = u.SIZE);
            }),
            (l.prototype.read_Size = function () {
              if (this.descriptor.streamSize) {
                var t = this.pos;
                if (this.check_Size(f.SIZE)) return !0;
                this.streamSize = this.buffer.slice(t, t + 8);
              }
              this.state = u.DICTID;
            }),
            (l.prototype.read_DictId = function () {
              if (this.descriptor.dictId) {
                var t = this.pos;
                if (this.check_Size(f.DICTID)) return !0;
                this.dictId = s.readUInt32LE(this.buffer, t);
              }
              this.state = u.DESCRIPTOR_CHECKSUM;
            }),
            (l.prototype.read_DescriptorChecksum = function () {
              var t = this.pos;
              if (this.check_Size(f.DESCRIPTOR_CHECKSUM)) return !0;
              var e = this.buffer[t];
              if (s.descriptorChecksum(this.buffer.slice(this.descriptorStart, t)) !== e)
                return (this.pos = t), this.emit_Error('Invalid stream descriptor checksum'), !0;
              this.state = u.DATABLOCK_SIZE;
            }),
            (l.prototype.read_DataBlockSize = function () {
              var t = this.pos;
              if (this.check_Size(f.DATABLOCK_SIZE)) return !0;
              var e = s.readUInt32LE(this.buffer, t);
              e !== o.EOS ? ((this.dataBlockSize = e), (this.state = u.DATABLOCK_DATA)) : (this.state = u.EOS);
            }),
            (l.prototype.read_DataBlockData = function () {
              var t = this.pos,
                e = this.dataBlockSize;
              if ((2147483648 & e && (e &= 2147483647), this.check_Size(e))) return !0;
              (this.dataBlock = this.buffer.slice(t, t + e)), (this.state = u.DATABLOCK_CHECKSUM);
            }),
            (l.prototype.read_DataBlockChecksum = function () {
              var t = this.pos;
              if (this.descriptor.blockChecksum) {
                if (this.check_Size(f.DATABLOCK_CHECKSUM)) return !0;
                var e = s.readUInt32LE(this.buffer, this.pos - 4);
                if (s.blockChecksum(this.dataBlock) !== e) return (this.pos = t), this.emit_Error('Invalid block checksum'), !0;
              }
              this.state = u.DATABLOCK_UNCOMPRESS;
            }),
            (l.prototype.uncompress_DataBlock = function () {
              var t;
              if (2147483648 & this.dataBlockSize) t = this.dataBlock;
              else {
                t = r.alloc(this.descriptor.blockMaxSize);
                var e = this.binding.uncompress(this.dataBlock, t);
                if (e < 0) return this.emit_Error('Invalid data block: ' + -e), !0;
                e < this.descriptor.blockMaxSize && (t = t.slice(0, e));
              }
              (this.dataBlock = null),
                this.push(t),
                this.descriptor.streamChecksum && (this.currentStreamChecksum = s.streamChecksum(t, this.currentStreamChecksum)),
                (this.state = u.DATABLOCK_SIZE);
            }),
            (l.prototype.read_EOS = function () {
              if (this.descriptor.streamChecksum) {
                var t = this.pos;
                if (this.check_Size(f.EOS)) return !0;
                var e = s.readUInt32LE(this.buffer, t);
                if (e !== s.streamChecksum(null, this.currentStreamChecksum))
                  return (this.pos = t), this.emit_Error('Invalid stream checksum: ' + e.toString(16).toUpperCase()), !0;
              }
              this.state = u.MAGIC;
            }),
            (l.prototype._flush = function (t) {
              (this.notEnoughData = !0), this._main(t);
            }),
            (l.prototype._main = function (t) {
              for (var e, r = this.pos; !e && this.pos < this.buffer.length; )
                this.state === u.MAGIC && (e = this.read_MagicNumber()),
                  this.state === u.SKIP_SIZE && (e = this.read_SkippableSize()),
                  this.state === u.DESCRIPTOR && (e = this.read_Descriptor()),
                  this.state === u.SIZE && (e = this.read_Size()),
                  this.state === u.DICTID && (e = this.read_DictId()),
                  this.state === u.DESCRIPTOR_CHECKSUM && (e = this.read_DescriptorChecksum()),
                  this.state === u.DATABLOCK_SIZE && (e = this.read_DataBlockSize()),
                  this.state === u.DATABLOCK_DATA && (e = this.read_DataBlockData()),
                  this.state === u.DATABLOCK_CHECKSUM && (e = this.read_DataBlockChecksum()),
                  this.state === u.DATABLOCK_UNCOMPRESS && (e = this.uncompress_DataBlock()),
                  this.state === u.EOS && (e = this.read_EOS());
              this.pos > r && ((this.buffer = this.buffer.slice(this.pos)), (this.pos = 0)), t();
            }),
            (e.exports = l);
        }).call(this, t('buffer').Buffer);
      },
      { './binding': 32, './static': 37, buffer: 'buffer', stream: 26, util: 31 },
    ],
    35: [
      function (t, e, r) {
        (function (e) {
          var i = t('./encoder_stream');
          r.LZ4_compress = function (t, r) {
            var n = [],
              o = new i(r);
            return (
              o.on('data', function (t) {
                n.push(t);
              }),
              o.end(t),
              e.concat(n)
            );
          };
        }).call(this, t('buffer').Buffer);
      },
      { './encoder_stream': 36, buffer: 'buffer' },
    ],
    36: [
      function (t, e, r) {
        (function (r) {
          var i = t('stream').Transform,
            n = t('util').inherits,
            o = t('./static'),
            s = o.utils,
            a = s.bindings,
            h = t('./binding'),
            u = o.STATES,
            f = o.SIZES,
            l = { blockIndependence: !0, blockChecksum: !1, blockMaxSize: 4 << 20, streamSize: !1, streamChecksum: !0, dict: !1, dictId: 0, highCompression: !1 };
          function c(t) {
            if (!(this instanceof c)) return new c(t);
            i.call(this, t);
            var e = t || l;
            e !== l &&
              Object.keys(l).forEach(function (t) {
                e.hasOwnProperty(t) || (e[t] = l[t]);
              }),
              (this.options = e),
              (this.binding = this.options.useJS ? h : a),
              (this.compress = e.highCompression ? this.binding.compressHC : this.binding.compress);
            var r = 0;
            (r |= o.VERSION << 6),
              (r |= (1 & e.blockIndependence) << 5),
              (r |= (1 & e.blockChecksum) << 4),
              (r |= (1 & e.streamSize) << 3),
              (r |= (1 & e.streamChecksum) << 2),
              (r |= 1 & e.dict);
            var n = o.blockMaxSizes.indexOf(e.blockMaxSize);
            if (n < 0) throw new Error('Invalid blockMaxSize: ' + e.blockMaxSize);
            (this.descriptor = { flg: r, bd: (7 & n) << 4 }), (this.buffer = []), (this.length = 0), (this.first = !0), (this.checksum = null);
          }
          n(c, i),
            (c.prototype.headerSize = function () {
              var t = this.options.streamSize ? f.DESCRIPTOR : 0,
                e = this.options.dict ? f.DICTID : 0;
              return f.MAGIC + 1 + 1 + t + e + 1;
            }),
            (c.prototype.header = function () {
              var t = this.headerSize(),
                e = r.alloc(t);
              (this.state = u.MAGIC), e.writeInt32LE(o.MAGICNUMBER, 0), (this.state = u.DESCRIPTOR);
              var i = e.slice(f.MAGIC, e.length - 1);
              i.writeUInt8(this.descriptor.flg, 0), i.writeUInt8(this.descriptor.bd, 1);
              var n = 2;
              return (
                (this.state = u.SIZE),
                this.options.streamSize && (i.writeInt32LE(0, n), i.writeInt32LE(this.size, n + 4), (n += f.SIZE)),
                (this.state = u.DICTID),
                this.options.dict && (i.writeInt32LE(this.dictId, n), (n += f.DICTID)),
                (this.state = u.DESCRIPTOR_CHECKSUM),
                e.writeUInt8(s.descriptorChecksum(i), f.MAGIC + n),
                e
              );
            }),
            (c.prototype.update_Checksum = function (t) {
              (this.state = u.CHECKSUM_UPDATE), this.options.streamChecksum && (this.checksum = s.streamChecksum(t, this.checksum));
            }),
            (c.prototype.compress_DataBlock = function (t) {
              this.state = u.DATABLOCK_COMPRESS;
              var e = this.options.blockChecksum ? f.DATABLOCK_CHECKSUM : 0,
                i = this.binding.compressBound(t.length),
                n = r.alloc(f.DATABLOCK_SIZE + i + e),
                o = n.slice(f.DATABLOCK_SIZE, f.DATABLOCK_SIZE + i),
                a = this.compress(t, o);
              ((this.state = u.DATABLOCK_SIZE),
              a > 0 && a <= this.options.blockMaxSize
                ? (n.writeUInt32LE(a, 0), (n = n.slice(0, f.DATABLOCK_SIZE + a + e)))
                : (n.writeInt32LE(2147483648 | t.length, 0), (n = n.slice(0, f.DATABLOCK_SIZE + t.length + e)), t.copy(n, f.DATABLOCK_SIZE)),
              (this.state = u.DATABLOCK_CHECKSUM),
              this.options.blockChecksum) && n.slice(-e).writeInt32LE(s.blockChecksum(o), 0);
              return this.update_Checksum(t), (this.size += t.length), n;
            }),
            (c.prototype._transform = function (t, e, i) {
              t && (this.buffer.push(t), (this.length += t.length)), this.first && (this.push(this.header()), (this.first = !1));
              var n = this.options.blockMaxSize;
              if (this.length < n) return i();
              for (var o = r.concat(this.buffer, this.length), s = 0, a = o.length; a >= n; a -= n, s += n) this.push(this.compress_DataBlock(o.slice(s, s + n)));
              a > 0 ? ((this.buffer = [o.slice(s)]), (this.length = this.buffer[0].length)) : ((this.buffer = []), (this.length = 0)), i();
            }),
            (c.prototype._flush = function (t) {
              if ((this.first && (this.push(this.header()), (this.first = !1)), this.length > 0)) {
                var e = r.concat(this.buffer, this.length);
                (this.buffer = []), (this.length = 0);
                var i = this.compress_DataBlock(e);
                this.push(i);
              }
              if (this.options.streamChecksum) (this.state = u.CHECKSUM), (n = r.alloc(f.EOS + f.CHECKSUM)).writeUInt32LE(s.streamChecksum(null, this.checksum), f.EOS);
              else var n = r.alloc(f.EOS);
              (this.state = u.EOS), n.writeInt32LE(o.EOS, 0), this.push(n), t();
            }),
            (e.exports = c);
        }).call(this, t('buffer').Buffer);
      },
      { './binding': 32, './static': 37, buffer: 'buffer', stream: 26, util: 31 },
    ],
    37: [
      function (t, e, r) {
        (function (e) {
          (r.MAGICNUMBER = 407708164),
            (r.MAGICNUMBER_BUFFER = e.alloc(4)),
            r.MAGICNUMBER_BUFFER.writeUInt32LE(r.MAGICNUMBER, 0),
            (r.EOS = 0),
            (r.EOS_BUFFER = e.alloc(4)),
            r.EOS_BUFFER.writeUInt32LE(r.EOS, 0),
            (r.VERSION = 1),
            (r.MAGICNUMBER_SKIPPABLE = 407710288),
            (r.blockMaxSizes = [null, null, null, null, 65536, 262144, 1 << 20, 4 << 20]),
            (r.extension = '.lz4'),
            (r.STATES = {
              MAGIC: 0,
              DESCRIPTOR: 1,
              SIZE: 2,
              DICTID: 3,
              DESCRIPTOR_CHECKSUM: 4,
              DATABLOCK_SIZE: 5,
              DATABLOCK_DATA: 6,
              DATABLOCK_CHECKSUM: 7,
              DATABLOCK_UNCOMPRESS: 8,
              DATABLOCK_COMPRESS: 9,
              CHECKSUM: 10,
              CHECKSUM_UPDATE: 11,
              EOS: 90,
              SKIP_SIZE: 101,
              SKIP_DATA: 102,
            }),
            (r.SIZES = {
              MAGIC: 4,
              DESCRIPTOR: 2,
              SIZE: 8,
              DICTID: 4,
              DESCRIPTOR_CHECKSUM: 1,
              DATABLOCK_SIZE: 4,
              DATABLOCK_CHECKSUM: 4,
              CHECKSUM: 4,
              EOS: 4,
              SKIP_SIZE: 4,
            }),
            (r.utils = t('./utils'));
        }).call(this, t('buffer').Buffer);
      },
      { './utils': './utils', buffer: 'buffer' },
    ],
    38: [
      function (t, e, r) {
        (r.UINT32 = t('./lib/uint32')), (r.UINT64 = t('./lib/uint64'));
      },
      { './lib/uint32': 39, './lib/uint64': 40 },
    ],
    39: [
      function (t, e, r) {
        !(function (t) {
          r(Math.pow(36, 5)), r(Math.pow(16, 7)), r(Math.pow(10, 9)), r(Math.pow(2, 30)), r(36), r(16), r(10), r(2);
          function r(t, e) {
            return this instanceof r
              ? ((this._low = 0),
                (this._high = 0),
                (this.remainder = null),
                void 0 === e ? n.call(this, t) : 'string' == typeof t ? o.call(this, t, e) : void i.call(this, t, e))
              : new r(t, e);
          }
          function i(t, e) {
            return (this._low = 0 | t), (this._high = 0 | e), this;
          }
          function n(t) {
            return (this._low = 65535 & t), (this._high = t >>> 16), this;
          }
          function o(t, e) {
            var r = parseInt(t, e || 10);
            return (this._low = 65535 & r), (this._high = r >>> 16), this;
          }
          (r.prototype.fromBits = i),
            (r.prototype.fromNumber = n),
            (r.prototype.fromString = o),
            (r.prototype.toNumber = function () {
              return 65536 * this._high + this._low;
            }),
            (r.prototype.toString = function (t) {
              return this.toNumber().toString(t || 10);
            }),
            (r.prototype.add = function (t) {
              var e = this._low + t._low,
                r = e >>> 16;
              return (r += this._high + t._high), (this._low = 65535 & e), (this._high = 65535 & r), this;
            }),
            (r.prototype.subtract = function (t) {
              return this.add(t.clone().negate());
            }),
            (r.prototype.multiply = function (t) {
              var e,
                r,
                i = this._high,
                n = this._low,
                o = t._high,
                s = t._low;
              return (e = (r = n * s) >>> 16), (e += i * s), (e &= 65535), (e += n * o), (this._low = 65535 & r), (this._high = 65535 & e), this;
            }),
            (r.prototype.div = function (t) {
              if (0 == t._low && 0 == t._high) throw Error('division by zero');
              if (0 == t._high && 1 == t._low) return (this.remainder = new r(0)), this;
              if (t.gt(this)) return (this.remainder = this.clone()), (this._low = 0), (this._high = 0), this;
              if (this.eq(t)) return (this.remainder = new r(0)), (this._low = 1), (this._high = 0), this;
              for (var e = t.clone(), i = -1; !this.lt(e); ) e.shiftLeft(1, !0), i++;
              for (this.remainder = this.clone(), this._low = 0, this._high = 0; i >= 0; i--)
                e.shiftRight(1), this.remainder.lt(e) || (this.remainder.subtract(e), i >= 16 ? (this._high |= 1 << (i - 16)) : (this._low |= 1 << i));
              return this;
            }),
            (r.prototype.negate = function () {
              var t = 1 + (65535 & ~this._low);
              return (this._low = 65535 & t), (this._high = (~this._high + (t >>> 16)) & 65535), this;
            }),
            (r.prototype.equals = r.prototype.eq =
              function (t) {
                return this._low == t._low && this._high == t._high;
              }),
            (r.prototype.greaterThan = r.prototype.gt =
              function (t) {
                return this._high > t._high || (!(this._high < t._high) && this._low > t._low);
              }),
            (r.prototype.lessThan = r.prototype.lt =
              function (t) {
                return this._high < t._high || (!(this._high > t._high) && this._low < t._low);
              }),
            (r.prototype.or = function (t) {
              return (this._low |= t._low), (this._high |= t._high), this;
            }),
            (r.prototype.and = function (t) {
              return (this._low &= t._low), (this._high &= t._high), this;
            }),
            (r.prototype.not = function () {
              return (this._low = 65535 & ~this._low), (this._high = 65535 & ~this._high), this;
            }),
            (r.prototype.xor = function (t) {
              return (this._low ^= t._low), (this._high ^= t._high), this;
            }),
            (r.prototype.shiftRight = r.prototype.shiftr =
              function (t) {
                return (
                  t > 16
                    ? ((this._low = this._high >> (t - 16)), (this._high = 0))
                    : 16 == t
                    ? ((this._low = this._high), (this._high = 0))
                    : ((this._low = (this._low >> t) | ((this._high << (16 - t)) & 65535)), (this._high >>= t)),
                  this
                );
              }),
            (r.prototype.shiftLeft = r.prototype.shiftl =
              function (t, e) {
                return (
                  t > 16
                    ? ((this._high = this._low << (t - 16)), (this._low = 0), e || (this._high &= 65535))
                    : 16 == t
                    ? ((this._high = this._low), (this._low = 0))
                    : ((this._high = (this._high << t) | (this._low >> (16 - t))), (this._low = (this._low << t) & 65535), e || (this._high &= 65535)),
                  this
                );
              }),
            (r.prototype.rotateLeft = r.prototype.rotl =
              function (t) {
                var e = (this._high << 16) | this._low;
                return (e = (e << t) | (e >>> (32 - t))), (this._low = 65535 & e), (this._high = e >>> 16), this;
              }),
            (r.prototype.rotateRight = r.prototype.rotr =
              function (t) {
                var e = (this._high << 16) | this._low;
                return (e = (e >>> t) | (e << (32 - t))), (this._low = 65535 & e), (this._high = e >>> 16), this;
              }),
            (r.prototype.clone = function () {
              return new r(this._low, this._high);
            }),
            'undefined' != typeof define && define.amd
              ? define([], function () {
                  return r;
                })
              : void 0 !== e && e.exports
              ? (e.exports = r)
              : (t.UINT32 = r);
        })(this);
      },
      {},
    ],
    40: [
      function (t, e, r) {
        !(function (t) {
          var r = { 16: n(Math.pow(16, 5)), 10: n(Math.pow(10, 5)), 2: n(Math.pow(2, 5)) },
            i = { 16: n(16), 10: n(10), 2: n(2) };
          function n(t, e, r, i) {
            return this instanceof n
              ? ((this.remainder = null), 'string' == typeof t ? a.call(this, t, e) : void 0 === e ? s.call(this, t) : void o.apply(this, arguments))
              : new n(t, e, r, i);
          }
          function o(t, e, r, i) {
            return void 0 === r
              ? ((this._a00 = 65535 & t), (this._a16 = t >>> 16), (this._a32 = 65535 & e), (this._a48 = e >>> 16), this)
              : ((this._a00 = 0 | t), (this._a16 = 0 | e), (this._a32 = 0 | r), (this._a48 = 0 | i), this);
          }
          function s(t) {
            return (this._a00 = 65535 & t), (this._a16 = t >>> 16), (this._a32 = 0), (this._a48 = 0), this;
          }
          function a(t, e) {
            (e = e || 10), (this._a00 = 0), (this._a16 = 0), (this._a32 = 0), (this._a48 = 0);
            for (var i = r[e] || new n(Math.pow(e, 5)), o = 0, s = t.length; o < s; o += 5) {
              var a = Math.min(5, s - o),
                h = parseInt(t.slice(o, o + a), e);
              this.multiply(a < 5 ? new n(Math.pow(e, a)) : i).add(new n(h));
            }
            return this;
          }
          (n.prototype.fromBits = o),
            (n.prototype.fromNumber = s),
            (n.prototype.fromString = a),
            (n.prototype.toNumber = function () {
              return 65536 * this._a16 + this._a00;
            }),
            (n.prototype.toString = function (t) {
              var e = i[(t = t || 10)] || new n(t);
              if (!this.gt(e)) return this.toNumber().toString(t);
              for (var r = this.clone(), o = new Array(64), s = 63; s >= 0 && (r.div(e), (o[s] = r.remainder.toNumber().toString(t)), r.gt(e)); s--);
              return (o[s - 1] = r.toNumber().toString(t)), o.join('');
            }),
            (n.prototype.add = function (t) {
              var e = this._a00 + t._a00,
                r = e >>> 16,
                i = (r += this._a16 + t._a16) >>> 16,
                n = (i += this._a32 + t._a32) >>> 16;
              return (n += this._a48 + t._a48), (this._a00 = 65535 & e), (this._a16 = 65535 & r), (this._a32 = 65535 & i), (this._a48 = 65535 & n), this;
            }),
            (n.prototype.subtract = function (t) {
              return this.add(t.clone().negate());
            }),
            (n.prototype.multiply = function (t) {
              var e = this._a00,
                r = this._a16,
                i = this._a32,
                n = this._a48,
                o = t._a00,
                s = t._a16,
                a = t._a32,
                h = e * o,
                u = h >>> 16,
                f = (u += e * s) >>> 16;
              (u &= 65535), (f += (u += r * o) >>> 16);
              var l = (f += e * a) >>> 16;
              return (
                (f &= 65535),
                (l += (f += r * s) >>> 16),
                (f &= 65535),
                (l += (f += i * o) >>> 16),
                (l += e * t._a48),
                (l &= 65535),
                (l += r * a),
                (l &= 65535),
                (l += i * s),
                (l &= 65535),
                (l += n * o),
                (this._a00 = 65535 & h),
                (this._a16 = 65535 & u),
                (this._a32 = 65535 & f),
                (this._a48 = 65535 & l),
                this
              );
            }),
            (n.prototype.div = function (t) {
              if (0 == t._a16 && 0 == t._a32 && 0 == t._a48) {
                if (0 == t._a00) throw Error('division by zero');
                if (1 == t._a00) return (this.remainder = new n(0)), this;
              }
              if (t.gt(this)) return (this.remainder = this.clone()), (this._a00 = 0), (this._a16 = 0), (this._a32 = 0), (this._a48 = 0), this;
              if (this.eq(t)) return (this.remainder = new n(0)), (this._a00 = 1), (this._a16 = 0), (this._a32 = 0), (this._a48 = 0), this;
              for (var e = t.clone(), r = -1; !this.lt(e); ) e.shiftLeft(1, !0), r++;
              for (this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0; r >= 0; r--)
                e.shiftRight(1),
                  this.remainder.lt(e) ||
                    (this.remainder.subtract(e),
                    r >= 48 ? (this._a48 |= 1 << (r - 48)) : r >= 32 ? (this._a32 |= 1 << (r - 32)) : r >= 16 ? (this._a16 |= 1 << (r - 16)) : (this._a00 |= 1 << r));
              return this;
            }),
            (n.prototype.negate = function () {
              var t = 1 + (65535 & ~this._a00);
              return (
                (this._a00 = 65535 & t),
                (t = (65535 & ~this._a16) + (t >>> 16)),
                (this._a16 = 65535 & t),
                (t = (65535 & ~this._a32) + (t >>> 16)),
                (this._a32 = 65535 & t),
                (this._a48 = (~this._a48 + (t >>> 16)) & 65535),
                this
              );
            }),
            (n.prototype.equals = n.prototype.eq =
              function (t) {
                return this._a48 == t._a48 && this._a00 == t._a00 && this._a32 == t._a32 && this._a16 == t._a16;
              }),
            (n.prototype.greaterThan = n.prototype.gt =
              function (t) {
                return (
                  this._a48 > t._a48 ||
                  (!(this._a48 < t._a48) && (this._a32 > t._a32 || (!(this._a32 < t._a32) && (this._a16 > t._a16 || (!(this._a16 < t._a16) && this._a00 > t._a00)))))
                );
              }),
            (n.prototype.lessThan = n.prototype.lt =
              function (t) {
                return (
                  this._a48 < t._a48 ||
                  (!(this._a48 > t._a48) && (this._a32 < t._a32 || (!(this._a32 > t._a32) && (this._a16 < t._a16 || (!(this._a16 > t._a16) && this._a00 < t._a00)))))
                );
              }),
            (n.prototype.or = function (t) {
              return (this._a00 |= t._a00), (this._a16 |= t._a16), (this._a32 |= t._a32), (this._a48 |= t._a48), this;
            }),
            (n.prototype.and = function (t) {
              return (this._a00 &= t._a00), (this._a16 &= t._a16), (this._a32 &= t._a32), (this._a48 &= t._a48), this;
            }),
            (n.prototype.xor = function (t) {
              return (this._a00 ^= t._a00), (this._a16 ^= t._a16), (this._a32 ^= t._a32), (this._a48 ^= t._a48), this;
            }),
            (n.prototype.not = function () {
              return (this._a00 = 65535 & ~this._a00), (this._a16 = 65535 & ~this._a16), (this._a32 = 65535 & ~this._a32), (this._a48 = 65535 & ~this._a48), this;
            }),
            (n.prototype.shiftRight = n.prototype.shiftr =
              function (t) {
                return (
                  (t %= 64) >= 48
                    ? ((this._a00 = this._a48 >> (t - 48)), (this._a16 = 0), (this._a32 = 0), (this._a48 = 0))
                    : t >= 32
                    ? ((t -= 32),
                      (this._a00 = 65535 & ((this._a32 >> t) | (this._a48 << (16 - t)))),
                      (this._a16 = (this._a48 >> t) & 65535),
                      (this._a32 = 0),
                      (this._a48 = 0))
                    : t >= 16
                    ? ((t -= 16),
                      (this._a00 = 65535 & ((this._a16 >> t) | (this._a32 << (16 - t)))),
                      (this._a16 = 65535 & ((this._a32 >> t) | (this._a48 << (16 - t)))),
                      (this._a32 = (this._a48 >> t) & 65535),
                      (this._a48 = 0))
                    : ((this._a00 = 65535 & ((this._a00 >> t) | (this._a16 << (16 - t)))),
                      (this._a16 = 65535 & ((this._a16 >> t) | (this._a32 << (16 - t)))),
                      (this._a32 = 65535 & ((this._a32 >> t) | (this._a48 << (16 - t)))),
                      (this._a48 = (this._a48 >> t) & 65535)),
                  this
                );
              }),
            (n.prototype.shiftLeft = n.prototype.shiftl =
              function (t, e) {
                return (
                  (t %= 64) >= 48
                    ? ((this._a48 = this._a00 << (t - 48)), (this._a32 = 0), (this._a16 = 0), (this._a00 = 0))
                    : t >= 32
                    ? ((t -= 32), (this._a48 = (this._a16 << t) | (this._a00 >> (16 - t))), (this._a32 = (this._a00 << t) & 65535), (this._a16 = 0), (this._a00 = 0))
                    : t >= 16
                    ? ((t -= 16),
                      (this._a48 = (this._a32 << t) | (this._a16 >> (16 - t))),
                      (this._a32 = 65535 & ((this._a16 << t) | (this._a00 >> (16 - t)))),
                      (this._a16 = (this._a00 << t) & 65535),
                      (this._a00 = 0))
                    : ((this._a48 = (this._a48 << t) | (this._a32 >> (16 - t))),
                      (this._a32 = 65535 & ((this._a32 << t) | (this._a16 >> (16 - t)))),
                      (this._a16 = 65535 & ((this._a16 << t) | (this._a00 >> (16 - t)))),
                      (this._a00 = (this._a00 << t) & 65535)),
                  e || (this._a48 &= 65535),
                  this
                );
              }),
            (n.prototype.rotateLeft = n.prototype.rotl =
              function (t) {
                if (0 == (t %= 64)) return this;
                if (t >= 32) {
                  var e = this._a00;
                  if (((this._a00 = this._a32), (this._a32 = e), (e = this._a48), (this._a48 = this._a16), (this._a16 = e), 32 == t)) return this;
                  t -= 32;
                }
                var r = (this._a48 << 16) | this._a32,
                  i = (this._a16 << 16) | this._a00,
                  n = (r << t) | (i >>> (32 - t)),
                  o = (i << t) | (r >>> (32 - t));
                return (this._a00 = 65535 & o), (this._a16 = o >>> 16), (this._a32 = 65535 & n), (this._a48 = n >>> 16), this;
              }),
            (n.prototype.rotateRight = n.prototype.rotr =
              function (t) {
                if (0 == (t %= 64)) return this;
                if (t >= 32) {
                  var e = this._a00;
                  if (((this._a00 = this._a32), (this._a32 = e), (e = this._a48), (this._a48 = this._a16), (this._a16 = e), 32 == t)) return this;
                  t -= 32;
                }
                var r = (this._a48 << 16) | this._a32,
                  i = (this._a16 << 16) | this._a00,
                  n = (r >>> t) | (i << (32 - t)),
                  o = (i >>> t) | (r << (32 - t));
                return (this._a00 = 65535 & o), (this._a16 = o >>> 16), (this._a32 = 65535 & n), (this._a48 = n >>> 16), this;
              }),
            (n.prototype.clone = function () {
              return new n(this._a00, this._a16, this._a32, this._a48);
            }),
            'undefined' != typeof define && define.amd
              ? define([], function () {
                  return n;
                })
              : void 0 !== e && e.exports
              ? (e.exports = n)
              : (t.UINT64 = n);
        })(this);
      },
      {},
    ],
    41: [
      function (t, e, r) {
        (function (r) {
          var i = t('cuint').UINT32;
          i.prototype.xxh_update = function (t, e) {
            var r,
              i,
              s = o._low,
              a = o._high;
            (r = (i = t * s) >>> 16), (r += e * s), (r &= 65535), (r += t * a);
            var h = this._low + (65535 & i),
              u = h >>> 16,
              f = ((u += this._high + (65535 & r)) << 16) | (65535 & h);
            (u = (f = (f << 13) | (f >>> 19)) >>> 16),
              (r = (i = (h = 65535 & f) * (s = n._low)) >>> 16),
              (r += u * s),
              (r &= 65535),
              (r += h * (a = n._high)),
              (this._low = 65535 & i),
              (this._high = 65535 & r);
          };
          var n = i('2654435761'),
            o = i('2246822519'),
            s = i('3266489917'),
            a = i('668265263'),
            h = i('374761393');
          function u() {
            return 2 == arguments.length ? new u(arguments[1]).update(arguments[0]).digest() : this instanceof u ? void f.call(this, arguments[0]) : new u(arguments[0]);
          }
          function f(t) {
            return (
              (this.seed = t instanceof i ? t.clone() : i(t)),
              (this.v1 = this.seed.clone().add(n).add(o)),
              (this.v2 = this.seed.clone().add(o)),
              (this.v3 = this.seed.clone()),
              (this.v4 = this.seed.clone().subtract(n)),
              (this.total_len = 0),
              (this.memsize = 0),
              (this.memory = null),
              this
            );
          }
          (u.prototype.init = f),
            (u.prototype.update = function (t) {
              var e,
                i = 'string' == typeof t;
              i &&
                ((t = (function (t) {
                  for (var e = [], r = 0, i = t.length; r < i; r++) {
                    var n = t.charCodeAt(r);
                    n < 128
                      ? e.push(n)
                      : n < 2048
                      ? e.push(192 | (n >> 6), 128 | (63 & n))
                      : n < 55296 || n >= 57344
                      ? e.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n))
                      : (r++,
                        (n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(r)))),
                        e.push(240 | (n >> 18), 128 | ((n >> 12) & 63), 128 | ((n >> 6) & 63), 128 | (63 & n)));
                  }
                  return new Uint8Array(e);
                })(t)),
                (i = !1),
                (e = !0)),
                'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer && ((e = !0), (t = new Uint8Array(t)));
              var n = 0,
                o = t.length,
                s = n + o;
              if (0 == o) return this;
              if (((this.total_len += o), 0 == this.memsize && (this.memory = i ? '' : e ? new Uint8Array(16) : new r(16)), this.memsize + o < 16))
                return i ? (this.memory += t) : e ? this.memory.set(t.subarray(0, o), this.memsize) : t.copy(this.memory, this.memsize, 0, o), (this.memsize += o), this;
              if (this.memsize > 0) {
                i
                  ? (this.memory += t.slice(0, 16 - this.memsize))
                  : e
                  ? this.memory.set(t.subarray(0, 16 - this.memsize), this.memsize)
                  : t.copy(this.memory, this.memsize, 0, 16 - this.memsize);
                var a = 0;
                i
                  ? (this.v1.xxh_update(
                      (this.memory.charCodeAt(a + 1) << 8) | this.memory.charCodeAt(a),
                      (this.memory.charCodeAt(a + 3) << 8) | this.memory.charCodeAt(a + 2),
                    ),
                    (a += 4),
                    this.v2.xxh_update(
                      (this.memory.charCodeAt(a + 1) << 8) | this.memory.charCodeAt(a),
                      (this.memory.charCodeAt(a + 3) << 8) | this.memory.charCodeAt(a + 2),
                    ),
                    (a += 4),
                    this.v3.xxh_update(
                      (this.memory.charCodeAt(a + 1) << 8) | this.memory.charCodeAt(a),
                      (this.memory.charCodeAt(a + 3) << 8) | this.memory.charCodeAt(a + 2),
                    ),
                    (a += 4),
                    this.v4.xxh_update(
                      (this.memory.charCodeAt(a + 1) << 8) | this.memory.charCodeAt(a),
                      (this.memory.charCodeAt(a + 3) << 8) | this.memory.charCodeAt(a + 2),
                    ))
                  : (this.v1.xxh_update((this.memory[a + 1] << 8) | this.memory[a], (this.memory[a + 3] << 8) | this.memory[a + 2]),
                    (a += 4),
                    this.v2.xxh_update((this.memory[a + 1] << 8) | this.memory[a], (this.memory[a + 3] << 8) | this.memory[a + 2]),
                    (a += 4),
                    this.v3.xxh_update((this.memory[a + 1] << 8) | this.memory[a], (this.memory[a + 3] << 8) | this.memory[a + 2]),
                    (a += 4),
                    this.v4.xxh_update((this.memory[a + 1] << 8) | this.memory[a], (this.memory[a + 3] << 8) | this.memory[a + 2])),
                  (n += 16 - this.memsize),
                  (this.memsize = 0),
                  i && (this.memory = '');
              }
              if (n <= s - 16) {
                var h = s - 16;
                do {
                  i
                    ? (this.v1.xxh_update((t.charCodeAt(n + 1) << 8) | t.charCodeAt(n), (t.charCodeAt(n + 3) << 8) | t.charCodeAt(n + 2)),
                      (n += 4),
                      this.v2.xxh_update((t.charCodeAt(n + 1) << 8) | t.charCodeAt(n), (t.charCodeAt(n + 3) << 8) | t.charCodeAt(n + 2)),
                      (n += 4),
                      this.v3.xxh_update((t.charCodeAt(n + 1) << 8) | t.charCodeAt(n), (t.charCodeAt(n + 3) << 8) | t.charCodeAt(n + 2)),
                      (n += 4),
                      this.v4.xxh_update((t.charCodeAt(n + 1) << 8) | t.charCodeAt(n), (t.charCodeAt(n + 3) << 8) | t.charCodeAt(n + 2)))
                    : (this.v1.xxh_update((t[n + 1] << 8) | t[n], (t[n + 3] << 8) | t[n + 2]),
                      (n += 4),
                      this.v2.xxh_update((t[n + 1] << 8) | t[n], (t[n + 3] << 8) | t[n + 2]),
                      (n += 4),
                      this.v3.xxh_update((t[n + 1] << 8) | t[n], (t[n + 3] << 8) | t[n + 2]),
                      (n += 4),
                      this.v4.xxh_update((t[n + 1] << 8) | t[n], (t[n + 3] << 8) | t[n + 2])),
                    (n += 4);
                } while (n <= h);
              }
              return (
                n < s &&
                  (i ? (this.memory += t.slice(n)) : e ? this.memory.set(t.subarray(n, s), this.memsize) : t.copy(this.memory, this.memsize, n, s),
                  (this.memsize = s - n)),
                this
              );
            }),
            (u.prototype.digest = function () {
              var t,
                e,
                r = this.memory,
                u = 'string' == typeof r,
                f = 0,
                l = this.memsize,
                c = new i();
              for (
                (t = this.total_len >= 16 ? this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))) : this.seed.clone().add(h)).add(
                  c.fromNumber(this.total_len),
                );
                f <= l - 4;

              )
                u
                  ? c.fromBits((r.charCodeAt(f + 1) << 8) | r.charCodeAt(f), (r.charCodeAt(f + 3) << 8) | r.charCodeAt(f + 2))
                  : c.fromBits((r[f + 1] << 8) | r[f], (r[f + 3] << 8) | r[f + 2]),
                  t.add(c.multiply(s)).rotl(17).multiply(a),
                  (f += 4);
              for (; f < l; ) c.fromBits(u ? r.charCodeAt(f++) : r[f++], 0), t.add(c.multiply(h)).rotl(11).multiply(n);
              return (
                (e = t.clone().shiftRight(15)),
                t.xor(e).multiply(o),
                (e = t.clone().shiftRight(13)),
                t.xor(e).multiply(s),
                (e = t.clone().shiftRight(16)),
                t.xor(e),
                this.init(this.seed),
                t
              );
            }),
            (e.exports = u);
        }).call(this, t('buffer').Buffer);
      },
      { buffer: 'buffer', cuint: 38 },
    ],
    42: [
      function (t, e, r) {
        (function (r) {
          var i = t('cuint').UINT64,
            n = i('11400714785074694791'),
            o = i('14029467366897019727'),
            s = i('1609587929392839161'),
            a = i('9650029242287828579'),
            h = i('2870177450012600261');
          function u() {
            return 2 == arguments.length ? new u(arguments[1]).update(arguments[0]).digest() : this instanceof u ? void f.call(this, arguments[0]) : new u(arguments[0]);
          }
          function f(t) {
            return (
              (this.seed = t instanceof i ? t.clone() : i(t)),
              (this.v1 = this.seed.clone().add(n).add(o)),
              (this.v2 = this.seed.clone().add(o)),
              (this.v3 = this.seed.clone()),
              (this.v4 = this.seed.clone().subtract(n)),
              (this.total_len = 0),
              (this.memsize = 0),
              (this.memory = null),
              this
            );
          }
          (u.prototype.init = f),
            (u.prototype.update = function (t) {
              var e,
                s = 'string' == typeof t;
              s &&
                ((t = (function (t) {
                  for (var e = [], r = 0, i = t.length; r < i; r++) {
                    var n = t.charCodeAt(r);
                    n < 128
                      ? e.push(n)
                      : n < 2048
                      ? e.push(192 | (n >> 6), 128 | (63 & n))
                      : n < 55296 || n >= 57344
                      ? e.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n))
                      : (r++,
                        (n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(r)))),
                        e.push(240 | (n >> 18), 128 | ((n >> 12) & 63), 128 | ((n >> 6) & 63), 128 | (63 & n)));
                  }
                  return new Uint8Array(e);
                })(t)),
                (s = !1),
                (e = !0)),
                'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer && ((e = !0), (t = new Uint8Array(t)));
              var a = 0,
                h = t.length,
                u = a + h;
              if (0 == h) return this;
              if (((this.total_len += h), 0 == this.memsize && (this.memory = s ? '' : e ? new Uint8Array(32) : new r(32)), this.memsize + h < 32))
                return s ? (this.memory += t) : e ? this.memory.set(t.subarray(0, h), this.memsize) : t.copy(this.memory, this.memsize, 0, h), (this.memsize += h), this;
              if (this.memsize > 0) {
                s
                  ? (this.memory += t.slice(0, 32 - this.memsize))
                  : e
                  ? this.memory.set(t.subarray(0, 32 - this.memsize), this.memsize)
                  : t.copy(this.memory, this.memsize, 0, 32 - this.memsize);
                var f = 0;
                if (s)
                  (c = i(
                    (this.memory.charCodeAt(f + 1) << 8) | this.memory.charCodeAt(f),
                    (this.memory.charCodeAt(f + 3) << 8) | this.memory.charCodeAt(f + 2),
                    (this.memory.charCodeAt(f + 5) << 8) | this.memory.charCodeAt(f + 4),
                    (this.memory.charCodeAt(f + 7) << 8) | this.memory.charCodeAt(f + 6),
                  )),
                    this.v1.add(c.multiply(o)).rotl(31).multiply(n),
                    (f += 8),
                    (c = i(
                      (this.memory.charCodeAt(f + 1) << 8) | this.memory.charCodeAt(f),
                      (this.memory.charCodeAt(f + 3) << 8) | this.memory.charCodeAt(f + 2),
                      (this.memory.charCodeAt(f + 5) << 8) | this.memory.charCodeAt(f + 4),
                      (this.memory.charCodeAt(f + 7) << 8) | this.memory.charCodeAt(f + 6),
                    )),
                    this.v2.add(c.multiply(o)).rotl(31).multiply(n),
                    (f += 8),
                    (c = i(
                      (this.memory.charCodeAt(f + 1) << 8) | this.memory.charCodeAt(f),
                      (this.memory.charCodeAt(f + 3) << 8) | this.memory.charCodeAt(f + 2),
                      (this.memory.charCodeAt(f + 5) << 8) | this.memory.charCodeAt(f + 4),
                      (this.memory.charCodeAt(f + 7) << 8) | this.memory.charCodeAt(f + 6),
                    )),
                    this.v3.add(c.multiply(o)).rotl(31).multiply(n),
                    (f += 8),
                    (c = i(
                      (this.memory.charCodeAt(f + 1) << 8) | this.memory.charCodeAt(f),
                      (this.memory.charCodeAt(f + 3) << 8) | this.memory.charCodeAt(f + 2),
                      (this.memory.charCodeAt(f + 5) << 8) | this.memory.charCodeAt(f + 4),
                      (this.memory.charCodeAt(f + 7) << 8) | this.memory.charCodeAt(f + 6),
                    )),
                    this.v4.add(c.multiply(o)).rotl(31).multiply(n);
                else
                  (c = i(
                    (this.memory[f + 1] << 8) | this.memory[f],
                    (this.memory[f + 3] << 8) | this.memory[f + 2],
                    (this.memory[f + 5] << 8) | this.memory[f + 4],
                    (this.memory[f + 7] << 8) | this.memory[f + 6],
                  )),
                    this.v1.add(c.multiply(o)).rotl(31).multiply(n),
                    (f += 8),
                    (c = i(
                      (this.memory[f + 1] << 8) | this.memory[f],
                      (this.memory[f + 3] << 8) | this.memory[f + 2],
                      (this.memory[f + 5] << 8) | this.memory[f + 4],
                      (this.memory[f + 7] << 8) | this.memory[f + 6],
                    )),
                    this.v2.add(c.multiply(o)).rotl(31).multiply(n),
                    (f += 8),
                    (c = i(
                      (this.memory[f + 1] << 8) | this.memory[f],
                      (this.memory[f + 3] << 8) | this.memory[f + 2],
                      (this.memory[f + 5] << 8) | this.memory[f + 4],
                      (this.memory[f + 7] << 8) | this.memory[f + 6],
                    )),
                    this.v3.add(c.multiply(o)).rotl(31).multiply(n),
                    (f += 8),
                    (c = i(
                      (this.memory[f + 1] << 8) | this.memory[f],
                      (this.memory[f + 3] << 8) | this.memory[f + 2],
                      (this.memory[f + 5] << 8) | this.memory[f + 4],
                      (this.memory[f + 7] << 8) | this.memory[f + 6],
                    )),
                    this.v4.add(c.multiply(o)).rotl(31).multiply(n);
                (a += 32 - this.memsize), (this.memsize = 0), s && (this.memory = '');
              }
              if (a <= u - 32) {
                var l = u - 32;
                do {
                  var c;
                  if (s)
                    (c = i(
                      (t.charCodeAt(a + 1) << 8) | t.charCodeAt(a),
                      (t.charCodeAt(a + 3) << 8) | t.charCodeAt(a + 2),
                      (t.charCodeAt(a + 5) << 8) | t.charCodeAt(a + 4),
                      (t.charCodeAt(a + 7) << 8) | t.charCodeAt(a + 6),
                    )),
                      this.v1.add(c.multiply(o)).rotl(31).multiply(n),
                      (a += 8),
                      (c = i(
                        (t.charCodeAt(a + 1) << 8) | t.charCodeAt(a),
                        (t.charCodeAt(a + 3) << 8) | t.charCodeAt(a + 2),
                        (t.charCodeAt(a + 5) << 8) | t.charCodeAt(a + 4),
                        (t.charCodeAt(a + 7) << 8) | t.charCodeAt(a + 6),
                      )),
                      this.v2.add(c.multiply(o)).rotl(31).multiply(n),
                      (a += 8),
                      (c = i(
                        (t.charCodeAt(a + 1) << 8) | t.charCodeAt(a),
                        (t.charCodeAt(a + 3) << 8) | t.charCodeAt(a + 2),
                        (t.charCodeAt(a + 5) << 8) | t.charCodeAt(a + 4),
                        (t.charCodeAt(a + 7) << 8) | t.charCodeAt(a + 6),
                      )),
                      this.v3.add(c.multiply(o)).rotl(31).multiply(n),
                      (a += 8),
                      (c = i(
                        (t.charCodeAt(a + 1) << 8) | t.charCodeAt(a),
                        (t.charCodeAt(a + 3) << 8) | t.charCodeAt(a + 2),
                        (t.charCodeAt(a + 5) << 8) | t.charCodeAt(a + 4),
                        (t.charCodeAt(a + 7) << 8) | t.charCodeAt(a + 6),
                      )),
                      this.v4.add(c.multiply(o)).rotl(31).multiply(n);
                  else
                    (c = i((t[a + 1] << 8) | t[a], (t[a + 3] << 8) | t[a + 2], (t[a + 5] << 8) | t[a + 4], (t[a + 7] << 8) | t[a + 6])),
                      this.v1.add(c.multiply(o)).rotl(31).multiply(n),
                      (c = i((t[(a += 8) + 1] << 8) | t[a], (t[a + 3] << 8) | t[a + 2], (t[a + 5] << 8) | t[a + 4], (t[a + 7] << 8) | t[a + 6])),
                      this.v2.add(c.multiply(o)).rotl(31).multiply(n),
                      (c = i((t[(a += 8) + 1] << 8) | t[a], (t[a + 3] << 8) | t[a + 2], (t[a + 5] << 8) | t[a + 4], (t[a + 7] << 8) | t[a + 6])),
                      this.v3.add(c.multiply(o)).rotl(31).multiply(n),
                      (c = i((t[(a += 8) + 1] << 8) | t[a], (t[a + 3] << 8) | t[a + 2], (t[a + 5] << 8) | t[a + 4], (t[a + 7] << 8) | t[a + 6])),
                      this.v4.add(c.multiply(o)).rotl(31).multiply(n);
                  a += 8;
                } while (a <= l);
              }
              return (
                a < u &&
                  (s ? (this.memory += t.slice(a)) : e ? this.memory.set(t.subarray(a, u), this.memsize) : t.copy(this.memory, this.memsize, a, u),
                  (this.memsize = u - a)),
                this
              );
            }),
            (u.prototype.digest = function () {
              var t,
                e,
                r = this.memory,
                u = 'string' == typeof r,
                f = 0,
                l = this.memsize,
                c = new i();
              for (
                this.total_len >= 32
                  ? ((t = this.v1.clone().rotl(1)).add(this.v2.clone().rotl(7)),
                    t.add(this.v3.clone().rotl(12)),
                    t.add(this.v4.clone().rotl(18)),
                    t.xor(this.v1.multiply(o).rotl(31).multiply(n)),
                    t.multiply(n).add(a),
                    t.xor(this.v2.multiply(o).rotl(31).multiply(n)),
                    t.multiply(n).add(a),
                    t.xor(this.v3.multiply(o).rotl(31).multiply(n)),
                    t.multiply(n).add(a),
                    t.xor(this.v4.multiply(o).rotl(31).multiply(n)),
                    t.multiply(n).add(a))
                  : (t = this.seed.clone().add(h)),
                  t.add(c.fromNumber(this.total_len));
                f <= l - 8;

              )
                u
                  ? c.fromBits(
                      (r.charCodeAt(f + 1) << 8) | r.charCodeAt(f),
                      (r.charCodeAt(f + 3) << 8) | r.charCodeAt(f + 2),
                      (r.charCodeAt(f + 5) << 8) | r.charCodeAt(f + 4),
                      (r.charCodeAt(f + 7) << 8) | r.charCodeAt(f + 6),
                    )
                  : c.fromBits((r[f + 1] << 8) | r[f], (r[f + 3] << 8) | r[f + 2], (r[f + 5] << 8) | r[f + 4], (r[f + 7] << 8) | r[f + 6]),
                  c.multiply(o).rotl(31).multiply(n),
                  t.xor(c).rotl(27).multiply(n).add(a),
                  (f += 8);
              for (
                f + 4 <= l &&
                (u
                  ? c.fromBits((r.charCodeAt(f + 1) << 8) | r.charCodeAt(f), (r.charCodeAt(f + 3) << 8) | r.charCodeAt(f + 2), 0, 0)
                  : c.fromBits((r[f + 1] << 8) | r[f], (r[f + 3] << 8) | r[f + 2], 0, 0),
                t.xor(c.multiply(n)).rotl(23).multiply(o).add(s),
                (f += 4));
                f < l;

              )
                c.fromBits(u ? r.charCodeAt(f++) : r[f++], 0, 0, 0), t.xor(c.multiply(h)).rotl(11).multiply(n);
              return (
                (e = t.clone().shiftRight(33)),
                t.xor(e).multiply(o),
                (e = t.clone().shiftRight(29)),
                t.xor(e).multiply(s),
                (e = t.clone().shiftRight(32)),
                t.xor(e),
                this.init(this.seed),
                t
              );
            }),
            (e.exports = u);
        }).call(this, t('buffer').Buffer);
      },
      { buffer: 'buffer', cuint: 38 },
    ],
    buffer: [
      function (t, e, r) {
        (function (e) {
          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <https://feross.org>
           * @license  MIT
           */
          'use strict';
          var i = t('base64-js'),
            n = t('ieee754');
          (r.Buffer = e),
            (r.SlowBuffer = function (t) {
              +t != t && (t = 0);
              return e.alloc(+t);
            }),
            (r.INSPECT_MAX_BYTES = 50);
          function o(t) {
            if (t > 2147483647) throw new RangeError('The value "' + t + '" is invalid for option "size"');
            var r = new Uint8Array(t);
            return (r.__proto__ = e.prototype), r;
          }
          function e(t, e, r) {
            if ('number' == typeof t) {
              if ('string' == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
              return h(t);
            }
            return s(t, e, r);
          }
          function s(t, r, i) {
            if ('string' == typeof t)
              return (function (t, r) {
                ('string' == typeof r && '' !== r) || (r = 'utf8');
                if (!e.isEncoding(r)) throw new TypeError('Unknown encoding: ' + r);
                var i = 0 | l(t, r),
                  n = o(i),
                  s = n.write(t, r);
                s !== i && (n = n.slice(0, s));
                return n;
              })(t, r);
            if (ArrayBuffer.isView(t)) return u(t);
            if (null == t) throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof t);
            if (z(t, ArrayBuffer) || (t && z(t.buffer, ArrayBuffer)))
              return (function (t, r, i) {
                if (r < 0 || t.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < r + (i || 0)) throw new RangeError('"length" is outside of buffer bounds');
                var n;
                n = void 0 === r && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, r) : new Uint8Array(t, r, i);
                return (n.__proto__ = e.prototype), n;
              })(t, r, i);
            if ('number' == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
            var n = t.valueOf && t.valueOf();
            if (null != n && n !== t) return e.from(n, r, i);
            var s = (function (t) {
              if (e.isBuffer(t)) {
                var r = 0 | f(t.length),
                  i = o(r);
                return 0 === i.length || t.copy(i, 0, 0, r), i;
              }
              if (void 0 !== t.length) return 'number' != typeof t.length || N(t.length) ? o(0) : u(t);
              if ('Buffer' === t.type && Array.isArray(t.data)) return u(t.data);
            })(t);
            if (s) return s;
            if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof t[Symbol.toPrimitive])
              return e.from(t[Symbol.toPrimitive]('string'), r, i);
            throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof t);
          }
          function a(t) {
            if ('number' != typeof t) throw new TypeError('"size" argument must be of type number');
            if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
          }
          function h(t) {
            return a(t), o(t < 0 ? 0 : 0 | f(t));
          }
          function u(t) {
            for (var e = t.length < 0 ? 0 : 0 | f(t.length), r = o(e), i = 0; i < e; i += 1) r[i] = 255 & t[i];
            return r;
          }
          function f(t) {
            if (t >= 2147483647) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + (2147483647).toString(16) + ' bytes');
            return 0 | t;
          }
          function l(t, r) {
            if (e.isBuffer(t)) return t.length;
            if (ArrayBuffer.isView(t) || z(t, ArrayBuffer)) return t.byteLength;
            if ('string' != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
            var i = t.length,
              n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === i) return 0;
            for (var o = !1; ; )
              switch (r) {
                case 'ascii':
                case 'latin1':
                case 'binary':
                  return i;
                case 'utf8':
                case 'utf-8':
                  return U(t).length;
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return 2 * i;
                case 'hex':
                  return i >>> 1;
                case 'base64':
                  return D(t).length;
                default:
                  if (o) return n ? -1 : U(t).length;
                  (r = ('' + r).toLowerCase()), (o = !0);
              }
          }
          function c(t, e, r) {
            var i = !1;
            if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return '';
            if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return '';
            if ((r >>>= 0) <= (e >>>= 0)) return '';
            for (t || (t = 'utf8'); ; )
              switch (t) {
                case 'hex':
                  return x(this, e, r);
                case 'utf8':
                case 'utf-8':
                  return C(this, e, r);
                case 'ascii':
                  return A(this, e, r);
                case 'latin1':
                case 'binary':
                  return E(this, e, r);
                case 'base64':
                  return S(this, e, r);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return k(this, e, r);
                default:
                  if (i) throw new TypeError('Unknown encoding: ' + t);
                  (t = (t + '').toLowerCase()), (i = !0);
              }
          }
          function p(t, e, r) {
            var i = t[e];
            (t[e] = t[r]), (t[r] = i);
          }
          function d(t, r, i, n, o) {
            if (0 === t.length) return -1;
            if (
              ('string' == typeof i ? ((n = i), (i = 0)) : i > 2147483647 ? (i = 2147483647) : i < -2147483648 && (i = -2147483648),
              N((i = +i)) && (i = o ? 0 : t.length - 1),
              i < 0 && (i = t.length + i),
              i >= t.length)
            ) {
              if (o) return -1;
              i = t.length - 1;
            } else if (i < 0) {
              if (!o) return -1;
              i = 0;
            }
            if (('string' == typeof r && (r = e.from(r, n)), e.isBuffer(r))) return 0 === r.length ? -1 : m(t, r, i, n, o);
            if ('number' == typeof r)
              return (
                (r &= 255),
                'function' == typeof Uint8Array.prototype.indexOf
                  ? o
                    ? Uint8Array.prototype.indexOf.call(t, r, i)
                    : Uint8Array.prototype.lastIndexOf.call(t, r, i)
                  : m(t, [r], i, n, o)
              );
            throw new TypeError('val must be string, number or Buffer');
          }
          function m(t, e, r, i, n) {
            var o,
              s = 1,
              a = t.length,
              h = e.length;
            if (void 0 !== i && ('ucs2' === (i = String(i).toLowerCase()) || 'ucs-2' === i || 'utf16le' === i || 'utf-16le' === i)) {
              if (t.length < 2 || e.length < 2) return -1;
              (s = 2), (a /= 2), (h /= 2), (r /= 2);
            }
            function u(t, e) {
              return 1 === s ? t[e] : t.readUInt16BE(e * s);
            }
            if (n) {
              var f = -1;
              for (o = r; o < a; o++)
                if (u(t, o) === u(e, -1 === f ? 0 : o - f)) {
                  if ((-1 === f && (f = o), o - f + 1 === h)) return f * s;
                } else -1 !== f && (o -= o - f), (f = -1);
            } else
              for (r + h > a && (r = a - h), o = r; o >= 0; o--) {
                for (var l = !0, c = 0; c < h; c++)
                  if (u(t, o + c) !== u(e, c)) {
                    l = !1;
                    break;
                  }
                if (l) return o;
              }
            return -1;
          }
          function y(t, e, r, i) {
            r = Number(r) || 0;
            var n = t.length - r;
            i ? (i = Number(i)) > n && (i = n) : (i = n);
            var o = e.length;
            i > o / 2 && (i = o / 2);
            for (var s = 0; s < i; ++s) {
              var a = parseInt(e.substr(2 * s, 2), 16);
              if (N(a)) return s;
              t[r + s] = a;
            }
            return s;
          }
          function g(t, e, r, i) {
            return j(U(e, t.length - r), t, r, i);
          }
          function _(t, e, r, i) {
            return j(
              (function (t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                return e;
              })(e),
              t,
              r,
              i,
            );
          }
          function b(t, e, r, i) {
            return _(t, e, r, i);
          }
          function v(t, e, r, i) {
            return j(D(e), t, r, i);
          }
          function w(t, e, r, i) {
            return j(
              (function (t, e) {
                for (var r, i, n, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) (r = t.charCodeAt(s)), (i = r >> 8), (n = r % 256), o.push(n), o.push(i);
                return o;
              })(e, t.length - r),
              t,
              r,
              i,
            );
          }
          function S(t, e, r) {
            return 0 === e && r === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, r));
          }
          function C(t, e, r) {
            r = Math.min(t.length, r);
            for (var i = [], n = e; n < r; ) {
              var o,
                s,
                a,
                h,
                u = t[n],
                f = null,
                l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
              if (n + l <= r)
                switch (l) {
                  case 1:
                    u < 128 && (f = u);
                    break;
                  case 2:
                    128 == (192 & (o = t[n + 1])) && (h = ((31 & u) << 6) | (63 & o)) > 127 && (f = h);
                    break;
                  case 3:
                    (o = t[n + 1]),
                      (s = t[n + 2]),
                      128 == (192 & o) && 128 == (192 & s) && (h = ((15 & u) << 12) | ((63 & o) << 6) | (63 & s)) > 2047 && (h < 55296 || h > 57343) && (f = h);
                    break;
                  case 4:
                    (o = t[n + 1]),
                      (s = t[n + 2]),
                      (a = t[n + 3]),
                      128 == (192 & o) &&
                        128 == (192 & s) &&
                        128 == (192 & a) &&
                        (h = ((15 & u) << 18) | ((63 & o) << 12) | ((63 & s) << 6) | (63 & a)) > 65535 &&
                        h < 1114112 &&
                        (f = h);
                }
              null === f ? ((f = 65533), (l = 1)) : f > 65535 && ((f -= 65536), i.push(((f >>> 10) & 1023) | 55296), (f = 56320 | (1023 & f))), i.push(f), (n += l);
            }
            return (function (t) {
              var e = t.length;
              if (e <= 4096) return String.fromCharCode.apply(String, t);
              var r = '',
                i = 0;
              for (; i < e; ) r += String.fromCharCode.apply(String, t.slice(i, (i += 4096)));
              return r;
            })(i);
          }
          (r.kMaxLength = 2147483647),
            (e.TYPED_ARRAY_SUPPORT = (function () {
              try {
                var t = new Uint8Array(1);
                return (
                  (t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function () {
                      return 42;
                    },
                  }),
                  42 === t.foo()
                );
              } catch (t) {
                return !1;
              }
            })()),
            e.TYPED_ARRAY_SUPPORT ||
              'undefined' == typeof console ||
              'function' != typeof console.error ||
              console.error(
                'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
              ),
            Object.defineProperty(e.prototype, 'parent', {
              enumerable: !0,
              get: function () {
                if (e.isBuffer(this)) return this.buffer;
              },
            }),
            Object.defineProperty(e.prototype, 'offset', {
              enumerable: !0,
              get: function () {
                if (e.isBuffer(this)) return this.byteOffset;
              },
            }),
            'undefined' != typeof Symbol &&
              null != Symbol.species &&
              e[Symbol.species] === e &&
              Object.defineProperty(e, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }),
            (e.poolSize = 8192),
            (e.from = function (t, e, r) {
              return s(t, e, r);
            }),
            (e.prototype.__proto__ = Uint8Array.prototype),
            (e.__proto__ = Uint8Array),
            (e.alloc = function (t, e, r) {
              return (function (t, e, r) {
                return a(t), t <= 0 ? o(t) : void 0 !== e ? ('string' == typeof r ? o(t).fill(e, r) : o(t).fill(e)) : o(t);
              })(t, e, r);
            }),
            (e.allocUnsafe = function (t) {
              return h(t);
            }),
            (e.allocUnsafeSlow = function (t) {
              return h(t);
            }),
            (e.isBuffer = function (t) {
              return null != t && !0 === t._isBuffer && t !== e.prototype;
            }),
            (e.compare = function (t, r) {
              if (
                (z(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                z(r, Uint8Array) && (r = e.from(r, r.offset, r.byteLength)),
                !e.isBuffer(t) || !e.isBuffer(r))
              )
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
              if (t === r) return 0;
              for (var i = t.length, n = r.length, o = 0, s = Math.min(i, n); o < s; ++o)
                if (t[o] !== r[o]) {
                  (i = t[o]), (n = r[o]);
                  break;
                }
              return i < n ? -1 : n < i ? 1 : 0;
            }),
            (e.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'latin1':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return !0;
                default:
                  return !1;
              }
            }),
            (e.concat = function (t, r) {
              if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === t.length) return e.alloc(0);
              var i;
              if (void 0 === r) for (r = 0, i = 0; i < t.length; ++i) r += t[i].length;
              var n = e.allocUnsafe(r),
                o = 0;
              for (i = 0; i < t.length; ++i) {
                var s = t[i];
                if ((z(s, Uint8Array) && (s = e.from(s)), !e.isBuffer(s))) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(n, o), (o += s.length);
              }
              return n;
            }),
            (e.byteLength = l),
            (e.prototype._isBuffer = !0),
            (e.prototype.swap16 = function () {
              var t = this.length;
              if (t % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
              for (var e = 0; e < t; e += 2) p(this, e, e + 1);
              return this;
            }),
            (e.prototype.swap32 = function () {
              var t = this.length;
              if (t % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
              for (var e = 0; e < t; e += 4) p(this, e, e + 3), p(this, e + 1, e + 2);
              return this;
            }),
            (e.prototype.swap64 = function () {
              var t = this.length;
              if (t % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
              for (var e = 0; e < t; e += 8) p(this, e, e + 7), p(this, e + 1, e + 6), p(this, e + 2, e + 5), p(this, e + 3, e + 4);
              return this;
            }),
            (e.prototype.toString = function () {
              var t = this.length;
              return 0 === t ? '' : 0 === arguments.length ? C(this, 0, t) : c.apply(this, arguments);
            }),
            (e.prototype.toLocaleString = e.prototype.toString),
            (e.prototype.equals = function (t) {
              if (!e.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
              return this === t || 0 === e.compare(this, t);
            }),
            (e.prototype.inspect = function () {
              var t = '',
                e = r.INSPECT_MAX_BYTES;
              return (
                (t = this.toString('hex', 0, e)
                  .replace(/(.{2})/g, '$1 ')
                  .trim()),
                this.length > e && (t += ' ... '),
                '<Buffer ' + t + '>'
              );
            }),
            (e.prototype.compare = function (t, r, i, n, o) {
              if ((z(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)), !e.isBuffer(t)))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
              if (
                (void 0 === r && (r = 0),
                void 0 === i && (i = t ? t.length : 0),
                void 0 === n && (n = 0),
                void 0 === o && (o = this.length),
                r < 0 || i > t.length || n < 0 || o > this.length)
              )
                throw new RangeError('out of range index');
              if (n >= o && r >= i) return 0;
              if (n >= o) return -1;
              if (r >= i) return 1;
              if (this === t) return 0;
              for (var s = (o >>>= 0) - (n >>>= 0), a = (i >>>= 0) - (r >>>= 0), h = Math.min(s, a), u = this.slice(n, o), f = t.slice(r, i), l = 0; l < h; ++l)
                if (u[l] !== f[l]) {
                  (s = u[l]), (a = f[l]);
                  break;
                }
              return s < a ? -1 : a < s ? 1 : 0;
            }),
            (e.prototype.includes = function (t, e, r) {
              return -1 !== this.indexOf(t, e, r);
            }),
            (e.prototype.indexOf = function (t, e, r) {
              return d(this, t, e, r, !0);
            }),
            (e.prototype.lastIndexOf = function (t, e, r) {
              return d(this, t, e, r, !1);
            }),
            (e.prototype.write = function (t, e, r, i) {
              if (void 0 === e) (i = 'utf8'), (r = this.length), (e = 0);
              else if (void 0 === r && 'string' == typeof e) (i = e), (r = this.length), (e = 0);
              else {
                if (!isFinite(e)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                (e >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === i && (i = 'utf8')) : ((i = r), (r = void 0));
              }
              var n = this.length - e;
              if (((void 0 === r || r > n) && (r = n), (t.length > 0 && (r < 0 || e < 0)) || e > this.length))
                throw new RangeError('Attempt to write outside buffer bounds');
              i || (i = 'utf8');
              for (var o = !1; ; )
                switch (i) {
                  case 'hex':
                    return y(this, t, e, r);
                  case 'utf8':
                  case 'utf-8':
                    return g(this, t, e, r);
                  case 'ascii':
                    return _(this, t, e, r);
                  case 'latin1':
                  case 'binary':
                    return b(this, t, e, r);
                  case 'base64':
                    return v(this, t, e, r);
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return w(this, t, e, r);
                  default:
                    if (o) throw new TypeError('Unknown encoding: ' + i);
                    (i = ('' + i).toLowerCase()), (o = !0);
                }
            }),
            (e.prototype.toJSON = function () {
              return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
            });
          function A(t, e, r) {
            var i = '';
            r = Math.min(t.length, r);
            for (var n = e; n < r; ++n) i += String.fromCharCode(127 & t[n]);
            return i;
          }
          function E(t, e, r) {
            var i = '';
            r = Math.min(t.length, r);
            for (var n = e; n < r; ++n) i += String.fromCharCode(t[n]);
            return i;
          }
          function x(t, e, r) {
            var i = t.length;
            (!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i);
            for (var n = '', o = e; o < r; ++o) n += R(t[o]);
            return n;
          }
          function k(t, e, r) {
            for (var i = t.slice(e, r), n = '', o = 0; o < i.length; o += 2) n += String.fromCharCode(i[o] + 256 * i[o + 1]);
            return n;
          }
          function T(t, e, r) {
            if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
            if (t + e > r) throw new RangeError('Trying to access beyond buffer length');
          }
          function B(t, r, i, n, o, s) {
            if (!e.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (r > o || r < s) throw new RangeError('"value" argument is out of bounds');
            if (i + n > t.length) throw new RangeError('Index out of range');
          }
          function I(t, e, r, i, n, o) {
            if (r + i > t.length) throw new RangeError('Index out of range');
            if (r < 0) throw new RangeError('Index out of range');
          }
          function M(t, e, r, i, o) {
            return (e = +e), (r >>>= 0), o || I(t, 0, r, 4), n.write(t, e, r, i, 23, 4), r + 4;
          }
          function L(t, e, r, i, o) {
            return (e = +e), (r >>>= 0), o || I(t, 0, r, 8), n.write(t, e, r, i, 52, 8), r + 8;
          }
          (e.prototype.slice = function (t, r) {
            var i = this.length;
            (t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), (r = void 0 === r ? i : ~~r) < 0 ? (r += i) < 0 && (r = 0) : r > i && (r = i), r < t && (r = t);
            var n = this.subarray(t, r);
            return (n.__proto__ = e.prototype), n;
          }),
            (e.prototype.readUIntLE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || T(t, e, this.length);
              for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256); ) i += this[t + o] * n;
              return i;
            }),
            (e.prototype.readUIntBE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || T(t, e, this.length);
              for (var i = this[t + --e], n = 1; e > 0 && (n *= 256); ) i += this[t + --e] * n;
              return i;
            }),
            (e.prototype.readUInt8 = function (t, e) {
              return (t >>>= 0), e || T(t, 1, this.length), this[t];
            }),
            (e.prototype.readUInt16LE = function (t, e) {
              return (t >>>= 0), e || T(t, 2, this.length), this[t] | (this[t + 1] << 8);
            }),
            (e.prototype.readUInt16BE = function (t, e) {
              return (t >>>= 0), e || T(t, 2, this.length), (this[t] << 8) | this[t + 1];
            }),
            (e.prototype.readUInt32LE = function (t, e) {
              return (t >>>= 0), e || T(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
            }),
            (e.prototype.readUInt32BE = function (t, e) {
              return (t >>>= 0), e || T(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
            }),
            (e.prototype.readIntLE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || T(t, e, this.length);
              for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256); ) i += this[t + o] * n;
              return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)), i;
            }),
            (e.prototype.readIntBE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || T(t, e, this.length);
              for (var i = e, n = 1, o = this[t + --i]; i > 0 && (n *= 256); ) o += this[t + --i] * n;
              return o >= (n *= 128) && (o -= Math.pow(2, 8 * e)), o;
            }),
            (e.prototype.readInt8 = function (t, e) {
              return (t >>>= 0), e || T(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
            }),
            (e.prototype.readInt16LE = function (t, e) {
              (t >>>= 0), e || T(t, 2, this.length);
              var r = this[t] | (this[t + 1] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (e.prototype.readInt16BE = function (t, e) {
              (t >>>= 0), e || T(t, 2, this.length);
              var r = this[t + 1] | (this[t] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (e.prototype.readInt32LE = function (t, e) {
              return (t >>>= 0), e || T(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
            }),
            (e.prototype.readInt32BE = function (t, e) {
              return (t >>>= 0), e || T(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
            }),
            (e.prototype.readFloatLE = function (t, e) {
              return (t >>>= 0), e || T(t, 4, this.length), n.read(this, t, !0, 23, 4);
            }),
            (e.prototype.readFloatBE = function (t, e) {
              return (t >>>= 0), e || T(t, 4, this.length), n.read(this, t, !1, 23, 4);
            }),
            (e.prototype.readDoubleLE = function (t, e) {
              return (t >>>= 0), e || T(t, 8, this.length), n.read(this, t, !0, 52, 8);
            }),
            (e.prototype.readDoubleBE = function (t, e) {
              return (t >>>= 0), e || T(t, 8, this.length), n.read(this, t, !1, 52, 8);
            }),
            (e.prototype.writeUIntLE = function (t, e, r, i) {
              ((t = +t), (e >>>= 0), (r >>>= 0), i) || B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
              var n = 1,
                o = 0;
              for (this[e] = 255 & t; ++o < r && (n *= 256); ) this[e + o] = (t / n) & 255;
              return e + r;
            }),
            (e.prototype.writeUIntBE = function (t, e, r, i) {
              ((t = +t), (e >>>= 0), (r >>>= 0), i) || B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
              var n = r - 1,
                o = 1;
              for (this[e + n] = 255 & t; --n >= 0 && (o *= 256); ) this[e + n] = (t / o) & 255;
              return e + r;
            }),
            (e.prototype.writeUInt8 = function (t, e, r) {
              return (t = +t), (e >>>= 0), r || B(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
            }),
            (e.prototype.writeUInt16LE = function (t, e, r) {
              return (t = +t), (e >>>= 0), r || B(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
            }),
            (e.prototype.writeUInt16BE = function (t, e, r) {
              return (t = +t), (e >>>= 0), r || B(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
            }),
            (e.prototype.writeUInt32LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || B(this, t, e, 4, 4294967295, 0),
                (this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t),
                e + 4
              );
            }),
            (e.prototype.writeUInt32BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || B(this, t, e, 4, 4294967295, 0),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (e.prototype.writeIntLE = function (t, e, r, i) {
              if (((t = +t), (e >>>= 0), !i)) {
                var n = Math.pow(2, 8 * r - 1);
                B(this, t, e, r, n - 1, -n);
              }
              var o = 0,
                s = 1,
                a = 0;
              for (this[e] = 255 & t; ++o < r && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), (this[e + o] = (((t / s) >> 0) - a) & 255);
              return e + r;
            }),
            (e.prototype.writeIntBE = function (t, e, r, i) {
              if (((t = +t), (e >>>= 0), !i)) {
                var n = Math.pow(2, 8 * r - 1);
                B(this, t, e, r, n - 1, -n);
              }
              var o = r - 1,
                s = 1,
                a = 0;
              for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), (this[e + o] = (((t / s) >> 0) - a) & 255);
              return e + r;
            }),
            (e.prototype.writeInt8 = function (t, e, r) {
              return (t = +t), (e >>>= 0), r || B(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
            }),
            (e.prototype.writeInt16LE = function (t, e, r) {
              return (t = +t), (e >>>= 0), r || B(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
            }),
            (e.prototype.writeInt16BE = function (t, e, r) {
              return (t = +t), (e >>>= 0), r || B(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
            }),
            (e.prototype.writeInt32LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || B(this, t, e, 4, 2147483647, -2147483648),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24),
                e + 4
              );
            }),
            (e.prototype.writeInt32BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || B(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (e.prototype.writeFloatLE = function (t, e, r) {
              return M(this, t, e, !0, r);
            }),
            (e.prototype.writeFloatBE = function (t, e, r) {
              return M(this, t, e, !1, r);
            }),
            (e.prototype.writeDoubleLE = function (t, e, r) {
              return L(this, t, e, !0, r);
            }),
            (e.prototype.writeDoubleBE = function (t, e, r) {
              return L(this, t, e, !1, r);
            }),
            (e.prototype.copy = function (t, r, i, n) {
              if (!e.isBuffer(t)) throw new TypeError('argument should be a Buffer');
              if ((i || (i = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < i && (n = i), n === i)) return 0;
              if (0 === t.length || 0 === this.length) return 0;
              if (r < 0) throw new RangeError('targetStart out of bounds');
              if (i < 0 || i >= this.length) throw new RangeError('Index out of range');
              if (n < 0) throw new RangeError('sourceEnd out of bounds');
              n > this.length && (n = this.length), t.length - r < n - i && (n = t.length - r + i);
              var o = n - i;
              if (this === t && 'function' == typeof Uint8Array.prototype.copyWithin) this.copyWithin(r, i, n);
              else if (this === t && i < r && r < n) for (var s = o - 1; s >= 0; --s) t[s + r] = this[s + i];
              else Uint8Array.prototype.set.call(t, this.subarray(i, n), r);
              return o;
            }),
            (e.prototype.fill = function (t, r, i, n) {
              if ('string' == typeof t) {
                if (
                  ('string' == typeof r ? ((n = r), (r = 0), (i = this.length)) : 'string' == typeof i && ((n = i), (i = this.length)),
                  void 0 !== n && 'string' != typeof n)
                )
                  throw new TypeError('encoding must be a string');
                if ('string' == typeof n && !e.isEncoding(n)) throw new TypeError('Unknown encoding: ' + n);
                if (1 === t.length) {
                  var o = t.charCodeAt(0);
                  (('utf8' === n && o < 128) || 'latin1' === n) && (t = o);
                }
              } else 'number' == typeof t && (t &= 255);
              if (r < 0 || this.length < r || this.length < i) throw new RangeError('Out of range index');
              if (i <= r) return this;
              var s;
              if (((r >>>= 0), (i = void 0 === i ? this.length : i >>> 0), t || (t = 0), 'number' == typeof t)) for (s = r; s < i; ++s) this[s] = t;
              else {
                var a = e.isBuffer(t) ? t : e.from(t, n),
                  h = a.length;
                if (0 === h) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                for (s = 0; s < i - r; ++s) this[s + r] = a[s % h];
              }
              return this;
            });
          var O = /[^+/0-9A-Za-z-_]/g;
          function R(t) {
            return t < 16 ? '0' + t.toString(16) : t.toString(16);
          }
          function U(t, e) {
            var r;
            e = e || 1 / 0;
            for (var i = t.length, n = null, o = [], s = 0; s < i; ++s) {
              if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                if (!n) {
                  if (r > 56319) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (s + 1 === i) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  n = r;
                  continue;
                }
                if (r < 56320) {
                  (e -= 3) > -1 && o.push(239, 191, 189), (n = r);
                  continue;
                }
                r = 65536 + (((n - 55296) << 10) | (r - 56320));
              } else n && (e -= 3) > -1 && o.push(239, 191, 189);
              if (((n = null), r < 128)) {
                if ((e -= 1) < 0) break;
                o.push(r);
              } else if (r < 2048) {
                if ((e -= 2) < 0) break;
                o.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((e -= 3) < 0) break;
                o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else {
                if (!(r < 1114112)) throw new Error('Invalid code point');
                if ((e -= 4) < 0) break;
                o.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
              }
            }
            return o;
          }
          function D(t) {
            return i.toByteArray(
              (function (t) {
                if ((t = (t = t.split('=')[0]).trim().replace(O, '')).length < 2) return '';
                for (; t.length % 4 != 0; ) t += '=';
                return t;
              })(t),
            );
          }
          function j(t, e, r, i) {
            for (var n = 0; n < i && !(n + r >= e.length || n >= t.length); ++n) e[n + r] = t[n];
            return n;
          }
          function z(t, e) {
            return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
          }
          function N(t) {
            return t != t;
          }
        }).call(this, t('buffer').Buffer);
      },
      { 'base64-js': 1, buffer: 'buffer', ieee754: 5 },
    ],
    lz4: [
      function (t, e, r) {
        (e.exports = t('./static')),
          (e.exports.version = '0.5.1'),
          (e.exports.createDecoderStream = t('./decoder_stream')),
          (e.exports.decode = t('./decoder').LZ4_uncompress),
          (e.exports.createEncoderStream = t('./encoder_stream')),
          (e.exports.encode = t('./encoder').LZ4_compress);
        var i = e.exports.utils.bindings;
        (e.exports.decodeBlock = i.uncompress), (e.exports.encodeBound = i.compressBound), (e.exports.encodeBlock = i.compress), (e.exports.encodeBlockHC = i.compressHC);
      },
      { './decoder': 33, './decoder_stream': 34, './encoder': 35, './encoder_stream': 36, './static': 37 },
    ],
    xxhashjs: [
      function (t, e, r) {
        e.exports = { h32: t('./xxhash'), h64: t('./xxhash64') };
      },
      { './xxhash': 41, './xxhash64': 42 },
    ],
  },
  {},
  ['lz4'],
);
