(function () {
  function $parcel$export(e, n, v) {
    Object.defineProperty(e, n, {
      get: v,
      enumerable: true,
    });
  }
  // ASSET: node_modules/@fluentui/merge-styles/lib/Stylesheet.js
  var $b88747b0759254cb10331a7132fc69c2$exports = {};
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ******************************************************************************/
  /*global Reflect, Promise*/
  var $8cb733925649e6437300d3613e36ae9a$var$extendStatics = function (d, b) {
    $8cb733925649e6437300d3613e36ae9a$var$extendStatics =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (d, b) {
          d.__proto__ = b;
        }) ||
      function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return $8cb733925649e6437300d3613e36ae9a$var$extendStatics(d, b);
  };
  var $8cb733925649e6437300d3613e36ae9a$export$__assign = function () {
    $8cb733925649e6437300d3613e36ae9a$export$__assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return $8cb733925649e6437300d3613e36ae9a$export$__assign.apply(this, arguments);
  };
  function $8cb733925649e6437300d3613e36ae9a$export$__values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o,
          };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function $8cb733925649e6437300d3613e36ae9a$export$__read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function $8cb733925649e6437300d3613e36ae9a$export$__await(v) {
    return this instanceof $8cb733925649e6437300d3613e36ae9a$export$__await
      ? ((this.v = v), this)
      : new $8cb733925649e6437300d3613e36ae9a$export$__await(v);
  }
  var $b88747b0759254cb10331a7132fc69c2$export$InjectionMode = {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    none: 0,
    /**
     * Inserts rules using the insertRule api.
     */
    insertNode: 1,
    /**
     * Appends rules using appendChild.
     */
    appendChild: 2,
  };
  var $b88747b0759254cb10331a7132fc69c2$var$STYLESHEET_SETTING = "__stylesheet__";
  /**
   * MSIE 11 doesn't cascade styles based on DOM ordering, but rather on the order that each style node
   * is created. As such, to maintain consistent priority, IE11 should reuse a single style node.
   */
  var $b88747b0759254cb10331a7132fc69c2$var$REUSE_STYLE_NODE =
    typeof navigator !== "undefined" && /rv:11.0/.test(navigator.userAgent);
  var $b88747b0759254cb10331a7132fc69c2$var$_global = {};
  // Grab window.
  try {
    $b88747b0759254cb10331a7132fc69c2$var$_global = window;
  } catch (_a) {}
  var $b88747b0759254cb10331a7132fc69c2$var$_stylesheet;
  /**
   * Represents the state of styles registered in the page. Abstracts
   * the surface for adding styles to the stylesheet, exposes helpers
   * for reading the styles registered in server rendered scenarios.
   *
   * @public
   */
  var $b88747b0759254cb10331a7132fc69c2$export$Stylesheet =
    /** @class*/
    (function () {
      function Stylesheet(config) {
        this._rules = [];
        this._preservedRules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onResetCallbacks = [];
        this._classNameToArgs = {};
        this._config = $8cb733925649e6437300d3613e36ae9a$export$__assign(
          {
            injectionMode: $b88747b0759254cb10331a7132fc69c2$export$InjectionMode.insertNode,
            defaultPrefix: "css",
            namespace: undefined,
            cspSettings: undefined,
          },
          config
        );
        this._keyToClassName = this._config.classNameCache || {};
      }
      /**
       * Gets the singleton instance.
       */
      Stylesheet.getInstance = function () {
        var _a;
        $b88747b0759254cb10331a7132fc69c2$var$_stylesheet =
          $b88747b0759254cb10331a7132fc69c2$var$_global[$b88747b0759254cb10331a7132fc69c2$var$STYLESHEET_SETTING];
        if (
          !$b88747b0759254cb10331a7132fc69c2$var$_stylesheet ||
          ($b88747b0759254cb10331a7132fc69c2$var$_stylesheet._lastStyleElement &&
            $b88747b0759254cb10331a7132fc69c2$var$_stylesheet._lastStyleElement.ownerDocument !== document)
        ) {
          var fabricConfig =
            ((_a = $b88747b0759254cb10331a7132fc69c2$var$_global) === null || _a === void 0
              ? void 0
              : _a.FabricConfig) || {};
          $b88747b0759254cb10331a7132fc69c2$var$_stylesheet = $b88747b0759254cb10331a7132fc69c2$var$_global[
            $b88747b0759254cb10331a7132fc69c2$var$STYLESHEET_SETTING
          ] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return $b88747b0759254cb10331a7132fc69c2$var$_stylesheet;
      };
      /**
       * Configures the stylesheet.
       */
      Stylesheet.prototype.setConfig = function (config) {
        this._config = $8cb733925649e6437300d3613e36ae9a$export$__assign(
          $8cb733925649e6437300d3613e36ae9a$export$__assign({}, this._config),
          config
        );
      };
      /**
       * Configures a reset callback.
       *
       * @param callback - A callback which will be called when the Stylesheet is reset.
       */
      Stylesheet.prototype.onReset = function (callback) {
        this._onResetCallbacks.push(callback);
      };
      /**
       * Generates a unique classname.
       *
       * @param displayName - Optional value to use as a prefix.
       */
      Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "" + (namespace ? namespace + "-" : "") + prefix + "-" + this._counter++;
      };
      /**
       * Used internally to cache information about a class which was
       * registered with the stylesheet.
       */
      Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
          args: args,
          rules: rules,
        };
      };
      /**
       * Gets the appropriate classname given a key which was previously
       * registered using cacheClassName.
       */
      Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
      };
      /**
       * Gets all classnames cache with the stylesheet.
       */
      Stylesheet.prototype.getClassNameCache = function () {
        return this._keyToClassName;
      };
      /**
       * Gets the arguments associated with a given classname which was
       * previously registered using cacheClassName.
       */
      Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
      };
      /**
       * Gets the arguments associated with a given classname which was
       * previously registered using cacheClassName.
       */
      Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
      };
      /**
       * Inserts a css rule into the stylesheet.
       * @param preserve - Preserves the rule beyond a reset boundary.
       */
      Stylesheet.prototype.insertRule = function (rule, preserve) {
        var injectionMode = this._config.injectionMode;
        var element =
          injectionMode !== $b88747b0759254cb10331a7132fc69c2$export$InjectionMode.none
            ? this._getStyleElement()
            : undefined;
        if (preserve) {
          this._preservedRules.push(rule);
        }
        if (element) {
          switch (this._config.injectionMode) {
            case $b88747b0759254cb10331a7132fc69c2$export$InjectionMode.insertNode:
              var sheet = element.sheet;
              try {
                sheet.insertRule(rule, sheet.cssRules.length);
              } catch (e) {}
              break;
            case $b88747b0759254cb10331a7132fc69c2$export$InjectionMode.appendChild:
              element.appendChild(document.createTextNode(rule));
              break;
          }
        } else {
          this._rules.push(rule);
        }
        if (this._config.onInsertRule) {
          this._config.onInsertRule(rule);
        }
      };
      /**
       * Gets all rules registered with the stylesheet; only valid when
       * using InsertionMode.none.
       */
      Stylesheet.prototype.getRules = function (includePreservedRules) {
        return (
          (includePreservedRules ? this._preservedRules.join("") : "") +
          this._rules.join("") +
          this._rulesToInsert.join("")
        );
      };
      /**
       * Resets the internal state of the stylesheet. Only used in server
       * rendered scenarios where we're using InsertionMode.none.
       */
      Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) {
          return callback();
        });
      };
      // Forces the regeneration of incoming styles without totally resetting the stylesheet.
      Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
      };
      Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== "undefined") {
          this._styleElement = this._createStyleElement();
          if (!$b88747b0759254cb10331a7132fc69c2$var$REUSE_STYLE_NODE) {
            // Reset the style element on the next frame.
            window.requestAnimationFrame(function () {
              _this._styleElement = undefined;
            });
          }
        }
        return this._styleElement;
      };
      Stylesheet.prototype._createStyleElement = function () {
        var head = document.head;
        var styleElement = document.createElement("style");
        styleElement.setAttribute("data-merge-styles", "true");
        var cspSettings = this._config.cspSettings;
        if (cspSettings) {
          if (cspSettings.nonce) {
            styleElement.setAttribute("nonce", cspSettings.nonce);
          }
        }
        if (this._lastStyleElement) {
          // If the `nextElementSibling` is null, then the insertBefore will act as a regular append.
          // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#Syntax
          head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
        } else {
          var placeholderStyleTag = this._findPlaceholderStyleTag();
          if (placeholderStyleTag) {
            head.insertBefore(styleElement, placeholderStyleTag.nextElementSibling);
          } else {
            head.insertBefore(styleElement, head.childNodes[0]);
          }
        }
        this._lastStyleElement = styleElement;
        return styleElement;
      };
      Stylesheet.prototype._findPlaceholderStyleTag = function () {
        var head = document.head;
        if (head) {
          return head.querySelector("style[data-merge-styles]");
        }
        return null;
      };
      return Stylesheet;
    })();
  $parcel$export($b88747b0759254cb10331a7132fc69c2$exports, "Stylesheet", function () {
    return $b88747b0759254cb10331a7132fc69c2$export$Stylesheet;
  });
  // A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
  // this cache is local to the module closure inside this bundle
  var $e45620462d513c3100236f97f94189f7$var$packagesCache = {};
  // Cache access to window to avoid IE11 memory leak.
  var $e45620462d513c3100236f97f94189f7$var$_win = undefined;
  try {
    $e45620462d513c3100236f97f94189f7$var$_win = window;
  } catch (e) {}
  function $e45620462d513c3100236f97f94189f7$export$setVersion(packageName, packageVersion) {
    if (typeof $e45620462d513c3100236f97f94189f7$var$_win !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var packages = ($e45620462d513c3100236f97f94189f7$var$_win.__packages__ =
        $e45620462d513c3100236f97f94189f7$var$_win.__packages__ || {});
      // We allow either the global packages or local packages caches to invalidate so testing can
      // just clear the global to set this state
      if (!packages[packageName] || !$e45620462d513c3100236f97f94189f7$var$packagesCache[packageName]) {
        $e45620462d513c3100236f97f94189f7$var$packagesCache[packageName] = packageVersion;
        var versions = (packages[packageName] = packages[packageName] || []);
        versions.push(packageVersion);
      }
    }
  }
  $e45620462d513c3100236f97f94189f7$export$setVersion("@fluentui/set-version", "6.0.0");
  $e45620462d513c3100236f97f94189f7$export$setVersion("@fluentui/merge-styles", "8.0.2");
  // ASSET: node_modules/@fluentui/utilities/lib/memoize.js
  var $262d9a5958f71c3cb54664fbbf3a1e04$exports = {};
  var $262d9a5958f71c3cb54664fbbf3a1e04$var$_initializedStylesheetResets = false;
  var $262d9a5958f71c3cb54664fbbf3a1e04$var$_resetCounter = 0;
  var $262d9a5958f71c3cb54664fbbf3a1e04$var$_emptyObject = {
    empty: true,
  };
  var $262d9a5958f71c3cb54664fbbf3a1e04$var$_dictionary = {};
  var $262d9a5958f71c3cb54664fbbf3a1e04$var$_weakMap = typeof WeakMap === "undefined" ? null : WeakMap;
  /**
   * Reset memoizations.
   */
  function $262d9a5958f71c3cb54664fbbf3a1e04$export$resetMemoizations() {
    $262d9a5958f71c3cb54664fbbf3a1e04$var$_resetCounter++;
  }
  /**
   * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
   * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
   * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
   * undefined for a value and relying on a default function will execute it the first time, but will not
   * re-evaluate subsequent times which may have been unexpected.
   *
   * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
   * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
   * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
   *
   * @public
   * @param cb - The function to memoize.
   * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
   * @param ignoreNullOrUndefinedResult - Flag to decide whether to cache callback result if it is undefined/null.
   * If the flag is set to true, the callback result is recomputed every time till the callback result is
   * not undefined/null for the first time, and then the non-undefined/null version gets cached.
   * @returns A memoized version of the function.
   */
  function $262d9a5958f71c3cb54664fbbf3a1e04$export$memoizeFunction(cb, maxCacheSize, ignoreNullOrUndefinedResult) {
    if (maxCacheSize === void 0) {
      maxCacheSize = 100;
    }
    if (ignoreNullOrUndefinedResult === void 0) {
      ignoreNullOrUndefinedResult = false;
    }
    // Avoid breaking scenarios which don't have weak map.
    if (!$262d9a5958f71c3cb54664fbbf3a1e04$var$_weakMap) {
      return cb;
    }
    if (!$262d9a5958f71c3cb54664fbbf3a1e04$var$_initializedStylesheetResets) {
      var stylesheet = $b88747b0759254cb10331a7132fc69c2$export$Stylesheet.getInstance();
      if (stylesheet && stylesheet.onReset) {
        $b88747b0759254cb10331a7132fc69c2$export$Stylesheet
          .getInstance()
          .onReset($262d9a5958f71c3cb54664fbbf3a1e04$export$resetMemoizations);
      }
      $262d9a5958f71c3cb54664fbbf3a1e04$var$_initializedStylesheetResets = true;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = $262d9a5958f71c3cb54664fbbf3a1e04$var$_resetCounter;
    return function memoizedFunction() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var currentNode = rootNode;
      if (
        rootNode === undefined ||
        localResetCounter !== $262d9a5958f71c3cb54664fbbf3a1e04$var$_resetCounter ||
        (maxCacheSize > 0 && cacheSize > maxCacheSize)
      ) {
        rootNode = $262d9a5958f71c3cb54664fbbf3a1e04$var$_createNode();
        cacheSize = 0;
        localResetCounter = $262d9a5958f71c3cb54664fbbf3a1e04$var$_resetCounter;
      }
      currentNode = rootNode;
      // Traverse the tree until we find the match.
      for (var i = 0; i < args.length; i++) {
        var arg = $262d9a5958f71c3cb54664fbbf3a1e04$var$_normalizeArg(args[i]);
        if (!currentNode.map.has(arg)) {
          currentNode.map.set(arg, $262d9a5958f71c3cb54664fbbf3a1e04$var$_createNode());
        }
        currentNode = currentNode.map.get(arg);
      }
      if (!currentNode.hasOwnProperty("value")) {
        currentNode.value = cb.apply(void 0, args);
        cacheSize++;
      }
      if (ignoreNullOrUndefinedResult && (currentNode.value === null || currentNode.value === undefined)) {
        currentNode.value = cb.apply(void 0, args);
      }
      return currentNode.value;
    };
  }
  $parcel$export($262d9a5958f71c3cb54664fbbf3a1e04$exports, "memoizeFunction", function () {
    return $262d9a5958f71c3cb54664fbbf3a1e04$export$memoizeFunction;
  });
  function $262d9a5958f71c3cb54664fbbf3a1e04$var$_normalizeArg(val) {
    if (!val) {
      return $262d9a5958f71c3cb54664fbbf3a1e04$var$_emptyObject;
    } else if (typeof val === "object" || typeof val === "function") {
      return val;
    } else if (!$262d9a5958f71c3cb54664fbbf3a1e04$var$_dictionary[val]) {
      $262d9a5958f71c3cb54664fbbf3a1e04$var$_dictionary[val] = {
        val: val,
      };
    }
    return $262d9a5958f71c3cb54664fbbf3a1e04$var$_dictionary[val];
  }
  function $262d9a5958f71c3cb54664fbbf3a1e04$var$_createNode() {
    return {
      map: $262d9a5958f71c3cb54664fbbf3a1e04$var$_weakMap ? new $262d9a5958f71c3cb54664fbbf3a1e04$var$_weakMap() : null,
    };
  }
  $e45620462d513c3100236f97f94189f7$export$setVersion("@fluentui/utilities", "8.0.2");
  /**
   * Internal memoized function which simply takes in the class map and the
   * disable boolean. These immutable values can be memoized.
   */
  const $6b6b1f5002e449015d3dcf893ca56a85$var$_getGlobalClassNames = $262d9a5958f71c3cb54664fbbf3a1e04$export$memoizeFunction(
    (classNames, disableGlobalClassNames) => {
      const styleSheet = $b88747b0759254cb10331a7132fc69c2$export$Stylesheet.getInstance();
      if (disableGlobalClassNames) {
        // disable global classnames
        return Object.keys(classNames).reduce((acc, className) => {
          acc[className] = styleSheet.getClassName(classNames[className]);
          return acc;
        }, {});
      }
      // use global classnames
      return classNames;
    }
  );
  /**
   * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
   * Note that calls to this function are memoized.
   *
   * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
   * the same instance on each call to benefit from memoization.
   * @param theme - The theme to check the flag on
   * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
   */
  function $6b6b1f5002e449015d3dcf893ca56a85$export$getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
    return $6b6b1f5002e449015d3dcf893ca56a85$var$_getGlobalClassNames(
      classNames,
      disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames
    );
  }
  const $a0af4f0d81371ae168dd184f8841bd43$export$classNames = $6b6b1f5002e449015d3dcf893ca56a85$export$getGlobalClassNames(
    {},
    {},
    false
  );
  // This is the only thing that we're ultimately going to try to import into parcel.
  const $a0af4f0d81371ae168dd184f8841bd43$export$aStringExport = "here is a string exported from simple-dependency";
  console.log($a0af4f0d81371ae168dd184f8841bd43$export$aStringExport);
})();

//# sourceMappingURL=index.9ac69ef8.js.map
