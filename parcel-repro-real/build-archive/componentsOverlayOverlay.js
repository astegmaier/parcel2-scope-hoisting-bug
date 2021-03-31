(function () {
  var $parcel$global = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
  function $parcel$export(e, n, v) {
    Object.defineProperty(e, n, {
      get: v,
      enumerable: true
    });
  }
  function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function (key) {
      if (key === 'default' || key === '__esModule') {
        return;
      }
      Object.defineProperty(dest, key, {
        enumerable: true,
        get: function get() {
          return source[key];
        }
      });
    });
    return dest;
  }
  // A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
  // this cache is local to the module closure inside this bundle
  var $88b07b32ddbb6d7734b3f9e72ca6a8ff$var$packagesCache = {};
  // Cache access to window to avoid IE11 memory leak.
  var $88b07b32ddbb6d7734b3f9e72ca6a8ff$var$_win = undefined;
  try {
    $88b07b32ddbb6d7734b3f9e72ca6a8ff$var$_win = window;
  } catch (e) {}
  function $88b07b32ddbb6d7734b3f9e72ca6a8ff$export$setVersion(packageName, packageVersion) {
    if (typeof $88b07b32ddbb6d7734b3f9e72ca6a8ff$var$_win !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var packages = $88b07b32ddbb6d7734b3f9e72ca6a8ff$var$_win.__packages__ = $88b07b32ddbb6d7734b3f9e72ca6a8ff$var$_win.__packages__ || ({});
      // We allow either the global packages or local packages caches to invalidate so testing can
      // just clear the global to set this state
      if (!packages[packageName] || !$88b07b32ddbb6d7734b3f9e72ca6a8ff$var$packagesCache[packageName]) {
        $88b07b32ddbb6d7734b3f9e72ca6a8ff$var$packagesCache[packageName] = packageVersion;
        var versions = packages[packageName] = packages[packageName] || [];
        versions.push(packageVersion);
      }
    }
  }
  $88b07b32ddbb6d7734b3f9e72ca6a8ff$export$setVersion('@fluentui/set-version', '6.0.0');
  $88b07b32ddbb6d7734b3f9e72ca6a8ff$export$setVersion('@fluentui/react', '0.0.0');
  // ASSET: ../fluentui/packages/utilities/lib/classNamesFunction.js
  var $18ce312ff00db69536a6c7a9d9c00af0$exports = {};
  // ASSET: ../fluentui/packages/merge-styles/lib/Stylesheet.js
  var $20233f3e6eb05d273c88b635250f1a84$exports = {};
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ******************************************************************************/
  /*global Reflect, Promise*/
  var $d309954a712b99875da1746509963c49$var$extendStatics = function (d, b) {
    $d309954a712b99875da1746509963c49$var$extendStatics = Object.setPrototypeOf || ({
      __proto__: []
    }) instanceof Array && (function (d, b) {
      d.__proto__ = b;
    }) || (function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    });
    return $d309954a712b99875da1746509963c49$var$extendStatics(d, b);
  };
  function $d309954a712b99875da1746509963c49$export$__extends(d, b) {
    $d309954a712b99875da1746509963c49$var$extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var $d309954a712b99875da1746509963c49$export$__assign = function () {
    $d309954a712b99875da1746509963c49$export$__assign = Object.assign || (function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    });
    return $d309954a712b99875da1746509963c49$export$__assign.apply(this, arguments);
  };
  function $d309954a712b99875da1746509963c49$export$__rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  }
  function $d309954a712b99875da1746509963c49$export$__values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  }
  function $d309954a712b99875da1746509963c49$export$__read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error: error
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
  function $d309954a712b99875da1746509963c49$export$__spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; (j++, k++)) r[k] = a[j];
    return r;
  }
  ;
  function $d309954a712b99875da1746509963c49$export$__await(v) {
    return this instanceof $d309954a712b99875da1746509963c49$export$__await ? (this.v = v, this) : new $d309954a712b99875da1746509963c49$export$__await(v);
  }
  ;
  var $20233f3e6eb05d273c88b635250f1a84$export$InjectionMode = {
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
    appendChild: 2
  };
  var $20233f3e6eb05d273c88b635250f1a84$var$STYLESHEET_SETTING = '__stylesheet__';
  /**
  * MSIE 11 doesn't cascade styles based on DOM ordering, but rather on the order that each style node
  * is created. As such, to maintain consistent priority, IE11 should reuse a single style node.
  */
  var $20233f3e6eb05d273c88b635250f1a84$var$REUSE_STYLE_NODE = typeof navigator !== 'undefined' && (/rv:11.0/).test(navigator.userAgent);
  var $20233f3e6eb05d273c88b635250f1a84$var$_global = {};
  // Grab window.
  try {
    $20233f3e6eb05d273c88b635250f1a84$var$_global = window;
  } catch (_a) {}
  var $20233f3e6eb05d273c88b635250f1a84$var$_stylesheet;
  /**
  * Represents the state of styles registered in the page. Abstracts
  * the surface for adding styles to the stylesheet, exposes helpers
  * for reading the styles registered in server rendered scenarios.
  *
  * @public
  */
  var $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet = /** @class*/
  (function () {
    function Stylesheet(config) {
      this._rules = [];
      this._preservedRules = [];
      this._rulesToInsert = [];
      this._counter = 0;
      this._keyToClassName = {};
      this._onResetCallbacks = [];
      this._classNameToArgs = {};
      this._config = $d309954a712b99875da1746509963c49$export$__assign({
        injectionMode: $20233f3e6eb05d273c88b635250f1a84$export$InjectionMode.insertNode,
        defaultPrefix: 'css',
        namespace: undefined,
        cspSettings: undefined
      }, config);
      this._keyToClassName = this._config.classNameCache || ({});
    }
    /**
    * Gets the singleton instance.
    */
    Stylesheet.getInstance = function () {
      var _a;
      $20233f3e6eb05d273c88b635250f1a84$var$_stylesheet = $20233f3e6eb05d273c88b635250f1a84$var$_global[$20233f3e6eb05d273c88b635250f1a84$var$STYLESHEET_SETTING];
      if (!$20233f3e6eb05d273c88b635250f1a84$var$_stylesheet || $20233f3e6eb05d273c88b635250f1a84$var$_stylesheet._lastStyleElement && $20233f3e6eb05d273c88b635250f1a84$var$_stylesheet._lastStyleElement.ownerDocument !== document) {
        var fabricConfig = ((_a = $20233f3e6eb05d273c88b635250f1a84$var$_global) === null || _a === void 0 ? void 0 : _a.FabricConfig) || ({});
        $20233f3e6eb05d273c88b635250f1a84$var$_stylesheet = $20233f3e6eb05d273c88b635250f1a84$var$_global[$20233f3e6eb05d273c88b635250f1a84$var$STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
      }
      return $20233f3e6eb05d273c88b635250f1a84$var$_stylesheet;
    };
    /**
    * Configures the stylesheet.
    */
    Stylesheet.prototype.setConfig = function (config) {
      this._config = $d309954a712b99875da1746509963c49$export$__assign($d309954a712b99875da1746509963c49$export$__assign({}, this._config), config);
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
      return "" + (namespace ? namespace + '-' : '') + prefix + "-" + this._counter++;
    };
    /**
    * Used internally to cache information about a class which was
    * registered with the stylesheet.
    */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
      this._keyToClassName[key] = className;
      this._classNameToArgs[className] = {
        args: args,
        rules: rules
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
      var element = injectionMode !== $20233f3e6eb05d273c88b635250f1a84$export$InjectionMode.none ? this._getStyleElement() : undefined;
      if (preserve) {
        this._preservedRules.push(rule);
      }
      if (element) {
        switch (this._config.injectionMode) {
          case $20233f3e6eb05d273c88b635250f1a84$export$InjectionMode.insertNode:
            var sheet = element.sheet;
            try {
              sheet.insertRule(rule, sheet.cssRules.length);
            } catch (e) {}
            break;
          case $20233f3e6eb05d273c88b635250f1a84$export$InjectionMode.appendChild:
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
      return (includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('') + this._rulesToInsert.join('');
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
      if (!this._styleElement && typeof document !== 'undefined') {
        this._styleElement = this._createStyleElement();
        if (!$20233f3e6eb05d273c88b635250f1a84$var$REUSE_STYLE_NODE) {
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
      var styleElement = document.createElement('style');
      styleElement.setAttribute('data-merge-styles', 'true');
      var cspSettings = this._config.cspSettings;
      if (cspSettings) {
        if (cspSettings.nonce) {
          styleElement.setAttribute('nonce', cspSettings.nonce);
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
        return head.querySelector('style[data-merge-styles]');
      }
      return null;
    };
    return Stylesheet;
  })();
  $parcel$export($20233f3e6eb05d273c88b635250f1a84$exports, "Stylesheet", function () {
    return $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet;
  });
  /**
  * Separates the classes and style objects. Any classes that are pre-registered
  * args are auto expanded into objects.
  */
  function $358b4f320a668e82e4ceaf5744a50e5a$export$extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet.getInstance();
    function _processArgs(argsList) {
      for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
        var arg = argsList_1[_i];
        if (arg) {
          if (typeof arg === 'string') {
            if (arg.indexOf(' ') >= 0) {
              _processArgs(arg.split(' '));
            } else {
              var translatedArgs = stylesheet.argsFromClassName(arg);
              if (translatedArgs) {
                _processArgs(translatedArgs);
              } else {
                // Avoid adding the same class twice.
                if (classes.indexOf(arg) === -1) {
                  classes.push(arg);
                }
              }
            }
          } else if (Array.isArray(arg)) {
            _processArgs(arg);
          } else if (typeof arg === 'object') {
            objects.push(arg);
          }
        }
      }
    }
    _processArgs(args);
    return {
      classes: classes,
      objects: objects
    };
  }
  /**
  * Sets the current RTL value.
  */
  function $4677c6949bcbd613c2d2b5ef543fd335$export$setRTL(isRTL) {
    if ($4677c6949bcbd613c2d2b5ef543fd335$var$_rtl !== isRTL) {
      $4677c6949bcbd613c2d2b5ef543fd335$var$_rtl = isRTL;
    }
  }
  /**
  * Gets the current RTL value.
  */
  function $4677c6949bcbd613c2d2b5ef543fd335$export$getRTL() {
    if ($4677c6949bcbd613c2d2b5ef543fd335$var$_rtl === undefined) {
      $4677c6949bcbd613c2d2b5ef543fd335$var$_rtl = typeof document !== 'undefined' && !!document.documentElement && document.documentElement.getAttribute('dir') === 'rtl';
    }
    return $4677c6949bcbd613c2d2b5ef543fd335$var$_rtl;
  }
  // This has been split into 2 lines because it was working in Fabric due to the code being transpiled to es5, so this
  // was converted to var while not working in Fluent that uses babel to transpile the code to be es6-like. Splitting the
  // logic into two lines, however, allows it to work in both scenarios.
  var $4677c6949bcbd613c2d2b5ef543fd335$var$_rtl;
  $4677c6949bcbd613c2d2b5ef543fd335$var$_rtl = $4677c6949bcbd613c2d2b5ef543fd335$export$getRTL();
  function $4677c6949bcbd613c2d2b5ef543fd335$export$getStyleOptions() {
    return {
      rtl: $4677c6949bcbd613c2d2b5ef543fd335$export$getRTL()
    };
  }
  var $6cc152c78b481f00bad042b8649e5a6e$var$rules = {};
  function $6cc152c78b481f00bad042b8649e5a6e$export$kebabRules(rulePairs, index) {
    var rule = rulePairs[index];
    if (rule.charAt(0) !== '-') {
      rulePairs[index] = $6cc152c78b481f00bad042b8649e5a6e$var$rules[rule] = $6cc152c78b481f00bad042b8649e5a6e$var$rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
  }
  var $37e780e363df4892247b4ee2a10b4325$var$_vendorSettings;
  function $37e780e363df4892247b4ee2a10b4325$export$getVendorSettings() {
    if (!$37e780e363df4892247b4ee2a10b4325$var$_vendorSettings) {
      var doc = typeof document !== 'undefined' ? document : undefined;
      var nav = typeof navigator !== 'undefined' ? navigator : undefined;
      var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
      if (!doc) {
        $37e780e363df4892247b4ee2a10b4325$var$_vendorSettings = {
          isWebkit: true,
          isMoz: true,
          isOpera: true,
          isMs: true
        };
      } else {
        $37e780e363df4892247b4ee2a10b4325$var$_vendorSettings = {
          isWebkit: !!(doc && ('WebkitAppearance' in doc.documentElement.style)),
          isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
          isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
          isMs: !!(nav && ((/rv:11.0/i).test(nav.userAgent) || (/Edge\/\d./i).test(navigator.userAgent)))
        };
      }
    }
    return $37e780e363df4892247b4ee2a10b4325$var$_vendorSettings;
  }
  var $0db518996bb909d367c3b490f4bbd225$var$autoPrefixNames = {
    'user-select': 1
  };
  function $0db518996bb909d367c3b490f4bbd225$export$prefixRules(rulePairs, index) {
    var vendorSettings = $37e780e363df4892247b4ee2a10b4325$export$getVendorSettings();
    var name = rulePairs[index];
    if ($0db518996bb909d367c3b490f4bbd225$var$autoPrefixNames[name]) {
      var value = rulePairs[index + 1];
      if ($0db518996bb909d367c3b490f4bbd225$var$autoPrefixNames[name]) {
        if (vendorSettings.isWebkit) {
          rulePairs.push('-webkit-' + name, value);
        }
        if (vendorSettings.isMoz) {
          rulePairs.push('-moz-' + name, value);
        }
        if (vendorSettings.isMs) {
          rulePairs.push('-ms-' + name, value);
        }
        if (vendorSettings.isOpera) {
          rulePairs.push('-o-' + name, value);
        }
      }
    }
  }
  var $e726ea44a9cf37238e3e7ef555b6116b$var$NON_PIXEL_NUMBER_PROPS = ['column-count', 'font-weight', 'flex', 'flex-grow', 'flex-shrink', 'fill-opacity', 'opacity', 'order', 'z-index', 'zoom'];
  function $e726ea44a9cf37238e3e7ef555b6116b$export$provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
      var isNonPixelProp = $e726ea44a9cf37238e3e7ef555b6116b$var$NON_PIXEL_NUMBER_PROPS.indexOf(name) > -1;
      var isVariableOrPrefixed = name.indexOf('--') > -1;
      var unit = isNonPixelProp || isVariableOrPrefixed ? '' : 'px';
      rulePairs[index + 1] = "" + value + unit;
    }
  }
  var $0583efbd8e0f24ef3472e891e1352d7d$var$_a;
  var $0583efbd8e0f24ef3472e891e1352d7d$var$LEFT = 'left';
  var $0583efbd8e0f24ef3472e891e1352d7d$var$RIGHT = 'right';
  var $0583efbd8e0f24ef3472e891e1352d7d$var$NO_FLIP = '@noflip';
  var $0583efbd8e0f24ef3472e891e1352d7d$var$NAME_REPLACEMENTS = ($0583efbd8e0f24ef3472e891e1352d7d$var$_a = {}, $0583efbd8e0f24ef3472e891e1352d7d$var$_a[$0583efbd8e0f24ef3472e891e1352d7d$var$LEFT] = $0583efbd8e0f24ef3472e891e1352d7d$var$RIGHT, $0583efbd8e0f24ef3472e891e1352d7d$var$_a[$0583efbd8e0f24ef3472e891e1352d7d$var$RIGHT] = $0583efbd8e0f24ef3472e891e1352d7d$var$LEFT, $0583efbd8e0f24ef3472e891e1352d7d$var$_a);
  var $0583efbd8e0f24ef3472e891e1352d7d$var$VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize'
  };
  /**
  * RTLifies the rulePair in the array at the current index. This mutates the array for performance
  * reasons.
  */
  function $0583efbd8e0f24ef3472e891e1352d7d$export$rtlifyRules(options, rulePairs, index) {
    if (options.rtl) {
      var name_1 = rulePairs[index];
      if (!name_1) {
        return;
      }
      var value = rulePairs[index + 1];
      if (typeof value === 'string' && value.indexOf($0583efbd8e0f24ef3472e891e1352d7d$var$NO_FLIP) >= 0) {
        rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
      } else if (name_1.indexOf($0583efbd8e0f24ef3472e891e1352d7d$var$LEFT) >= 0) {
        rulePairs[index] = name_1.replace($0583efbd8e0f24ef3472e891e1352d7d$var$LEFT, $0583efbd8e0f24ef3472e891e1352d7d$var$RIGHT);
      } else if (name_1.indexOf($0583efbd8e0f24ef3472e891e1352d7d$var$RIGHT) >= 0) {
        rulePairs[index] = name_1.replace($0583efbd8e0f24ef3472e891e1352d7d$var$RIGHT, $0583efbd8e0f24ef3472e891e1352d7d$var$LEFT);
      } else if (String(value).indexOf($0583efbd8e0f24ef3472e891e1352d7d$var$LEFT) >= 0) {
        rulePairs[index + 1] = value.replace($0583efbd8e0f24ef3472e891e1352d7d$var$LEFT, $0583efbd8e0f24ef3472e891e1352d7d$var$RIGHT);
      } else if (String(value).indexOf($0583efbd8e0f24ef3472e891e1352d7d$var$RIGHT) >= 0) {
        rulePairs[index + 1] = value.replace($0583efbd8e0f24ef3472e891e1352d7d$var$RIGHT, $0583efbd8e0f24ef3472e891e1352d7d$var$LEFT);
      } else if ($0583efbd8e0f24ef3472e891e1352d7d$var$NAME_REPLACEMENTS[name_1]) {
        rulePairs[index] = $0583efbd8e0f24ef3472e891e1352d7d$var$NAME_REPLACEMENTS[name_1];
      } else if ($0583efbd8e0f24ef3472e891e1352d7d$var$VALUE_REPLACEMENTS[value]) {
        rulePairs[index + 1] = $0583efbd8e0f24ef3472e891e1352d7d$var$VALUE_REPLACEMENTS[value];
      } else {
        switch (name_1) {
          case 'margin':
          case 'padding':
            rulePairs[index + 1] = $0583efbd8e0f24ef3472e891e1352d7d$var$flipQuad(value);
            break;
          case 'box-shadow':
            rulePairs[index + 1] = $0583efbd8e0f24ef3472e891e1352d7d$var$negateNum(value, 0);
            break;
        }
      }
    }
  }
  /**
  * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
  */
  function $0583efbd8e0f24ef3472e891e1352d7d$var$negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
  }
  /**
  * Given a string quad, flips the left and right values.
  */
  function $0583efbd8e0f24ef3472e891e1352d7d$var$flipQuad(value) {
    if (typeof value === 'string') {
      var parts = value.split(' ');
      if (parts.length === 4) {
        return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
      }
    }
    return value;
  }
  /**
  * Split a string into tokens separated by whitespace, except all text within parentheses
  * is treated as a single token (whitespace is ignored within parentheses).
  *
  * Unlike String.split(' '), multiple consecutive space characters are collapsed and
  * removed from the returned array (including leading and trailing spaces).
  *
  * For example:
  * `tokenizeWithParentheses("3px calc(var(--x) / 2) 9px    0 ")`
  *   => `["3px", "calc(var(--x) / 2)", "9px", "0"]`
  *
  * @returns The array of tokens. Returns an empty array if the string was empty or contained only whitespace.
  */
  function $6d248c5b5854b5b88e3f6adf46812c30$export$tokenizeWithParentheses(value) {
    var parts = [];
    var partStart = 0;
    var parens = 0;
    for (var i = 0; i < value.length; i++) {
      switch (value[i]) {
        case '(':
          parens++;
          break;
        case ')':
          if (parens) {
            parens--;
          }
          break;
        case '\t':
        case ' ':
          if (!parens) {
            // Add the new part if it's not an empty string
            if (i > partStart) {
              parts.push(value.substring(partStart, i));
            }
            partStart = i + 1;
          }
          break;
      }
    }
    // Add the last part
    if (partStart < value.length) {
      parts.push(value.substring(partStart));
    }
    return parts;
  }
  var $97999987dc8ca4a0eb7ec7189b61aaef$var$DISPLAY_NAME = 'displayName';
  function $97999987dc8ca4a0eb7ec7189b61aaef$var$getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
  }
  var $97999987dc8ca4a0eb7ec7189b61aaef$var$globalSelectorRegExp = /\:global\((.+?)\)/g;
  /**
  * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
  * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
  *
  * @param selectorWithGlobals The selector to process
  * @returns The updated selector
  */
  function $97999987dc8ca4a0eb7ec7189b61aaef$var$expandCommaSeparatedGlobals(selectorWithGlobals) {
    // We the selector does not have a :global() we can shortcut
    if (!$97999987dc8ca4a0eb7ec7189b61aaef$var$globalSelectorRegExp.test(selectorWithGlobals)) {
      return selectorWithGlobals;
    }
    var replacementInfo = [];
    var findGlobal = /\:global\((.+?)\)/g;
    var match = null;
    // Create a result list for global selectors so we can replace them.
    while (match = findGlobal.exec(selectorWithGlobals)) {
      // Only if the found selector is a comma separated list we'll process it.
      if (match[1].indexOf(',') > -1) {
        replacementInfo.push([match.index, match.index + match[0].length, // Wrap each of the found selectors in :global()
        match[1].split(',').map(function (v) {
          return ":global(" + v.trim() + ")";
        }).join(', ')]);
      }
    }
    // Replace the found selectors with their wrapped variants in reverse order
    return replacementInfo.reverse().reduce(function (selector, _a) {
      var matchIndex = _a[0], matchEndIndex = _a[1], replacement = _a[2];
      var prefix = selector.slice(0, matchIndex);
      var suffix = selector.slice(matchEndIndex);
      return prefix + replacement + suffix;
    }, selectorWithGlobals);
  }
  function $97999987dc8ca4a0eb7ec7189b61aaef$var$expandSelector(newSelector, currentSelector) {
    if (newSelector.indexOf(':global(') >= 0) {
      return newSelector.replace($97999987dc8ca4a0eb7ec7189b61aaef$var$globalSelectorRegExp, '$1');
    } else if (newSelector.indexOf(':') === 0) {
      return currentSelector + newSelector;
    } else if (newSelector.indexOf('&') < 0) {
      return currentSelector + ' ' + newSelector;
    }
    return newSelector;
  }
  function $97999987dc8ca4a0eb7ec7189b61aaef$var$extractSelector(currentSelector, rules, selector, value) {
    if (rules === void 0) {
      rules = {
        __order: []
      };
    }
    if (selector.indexOf('@') === 0) {
      selector = selector + '{' + currentSelector;
      $97999987dc8ca4a0eb7ec7189b61aaef$var$extractRules([value], rules, selector);
    } else if (selector.indexOf(',') > -1) {
      $97999987dc8ca4a0eb7ec7189b61aaef$var$expandCommaSeparatedGlobals(selector).split(',').map(function (s) {
        return s.trim();
      }).forEach(function (separatedSelector) {
        return $97999987dc8ca4a0eb7ec7189b61aaef$var$extractRules([value], rules, $97999987dc8ca4a0eb7ec7189b61aaef$var$expandSelector(separatedSelector, currentSelector));
      });
    } else {
      $97999987dc8ca4a0eb7ec7189b61aaef$var$extractRules([value], rules, $97999987dc8ca4a0eb7ec7189b61aaef$var$expandSelector(selector, currentSelector));
    }
  }
  function $97999987dc8ca4a0eb7ec7189b61aaef$var$extractRules(args, rules, currentSelector) {
    if (rules === void 0) {
      rules = {
        __order: []
      };
    }
    if (currentSelector === void 0) {
      currentSelector = '&';
    }
    var stylesheet = $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet.getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
      currentRules = {};
      rules[currentSelector] = currentRules;
      rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
      var arg = args_1[_i];
      // If the arg is a string, we need to look up the class map and merge.
      if (typeof arg === 'string') {
        var expandedRules = stylesheet.argsFromClassName(arg);
        if (expandedRules) {
          $97999987dc8ca4a0eb7ec7189b61aaef$var$extractRules(expandedRules, rules, currentSelector);
        }
      } else if (Array.isArray(arg)) {
        $97999987dc8ca4a0eb7ec7189b61aaef$var$extractRules(arg, rules, currentSelector);
      } else {
        for (var prop in arg) {
          if (arg.hasOwnProperty(prop)) {
            var propValue = arg[prop];
            if (prop === 'selectors') {
              // every child is a selector.
              var selectors = arg.selectors;
              for (var newSelector in selectors) {
                if (selectors.hasOwnProperty(newSelector)) {
                  $97999987dc8ca4a0eb7ec7189b61aaef$var$extractSelector(currentSelector, rules, newSelector, selectors[newSelector]);
                }
              }
            } else if (typeof propValue === 'object') {
              // prop is a selector.
              if (propValue !== null) {
                $97999987dc8ca4a0eb7ec7189b61aaef$var$extractSelector(currentSelector, rules, prop, propValue);
              }
            } else {
              if (propValue !== undefined) {
                // Else, add the rule to the currentSelector.
                if (prop === 'margin' || prop === 'padding') {
                  $97999987dc8ca4a0eb7ec7189b61aaef$var$expandQuads(currentRules, prop, propValue);
                } else {
                  currentRules[prop] = propValue;
                }
              }
            }
          }
        }
      }
    }
    return rules;
  }
  function $97999987dc8ca4a0eb7ec7189b61aaef$var$expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? $6d248c5b5854b5b88e3f6adf46812c30$export$tokenizeWithParentheses(value) : [value];
    if (parts.length === 0) {
      parts.push(value);
    }
    if (parts[parts.length - 1] === '!important') {
      // Remove !important from parts, and append it to each part individually
      parts = parts.slice(0, -1).map(function (p) {
        return p + ' !important';
      });
    }
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
  }
  function $97999987dc8ca4a0eb7ec7189b61aaef$var$getKeyForRules(options, rules) {
    var serialized = [options.rtl ? 'rtl' : 'ltr'];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
      var selector = _a[_i];
      serialized.push(selector);
      var rulesForSelector = rules[selector];
      for (var propName in rulesForSelector) {
        if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
          hasProps = true;
          serialized.push(propName, rulesForSelector[propName]);
        }
      }
    }
    return hasProps ? serialized.join('') : undefined;
  }
  function $97999987dc8ca4a0eb7ec7189b61aaef$var$repeatString(target, count) {
    if (count <= 0) {
      return '';
    }
    if (count === 1) {
      return target;
    }
    return target + $97999987dc8ca4a0eb7ec7189b61aaef$var$repeatString(target, count - 1);
  }
  function $97999987dc8ca4a0eb7ec7189b61aaef$export$serializeRuleEntries(options, ruleEntries) {
    if (!ruleEntries) {
      return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
      if (ruleEntries.hasOwnProperty(entry) && entry !== $97999987dc8ca4a0eb7ec7189b61aaef$var$DISPLAY_NAME && ruleEntries[entry] !== undefined) {
        allEntries.push(entry, ruleEntries[entry]);
      }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
      $6cc152c78b481f00bad042b8649e5a6e$export$kebabRules(allEntries, i);
      $e726ea44a9cf37238e3e7ef555b6116b$export$provideUnits(allEntries, i);
      $0583efbd8e0f24ef3472e891e1352d7d$export$rtlifyRules(options, allEntries, i);
      $0db518996bb909d367c3b490f4bbd225$export$prefixRules(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
      allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
  }
  function $97999987dc8ca4a0eb7ec7189b61aaef$export$styleToRegistration(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var rules = $97999987dc8ca4a0eb7ec7189b61aaef$var$extractRules(args);
    var key = $97999987dc8ca4a0eb7ec7189b61aaef$var$getKeyForRules(options, rules);
    if (key) {
      var stylesheet = $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet.getInstance();
      var registration = {
        className: stylesheet.classNameFromKey(key),
        key: key,
        args: args
      };
      if (!registration.className) {
        registration.className = stylesheet.getClassName($97999987dc8ca4a0eb7ec7189b61aaef$var$getDisplayName(rules));
        var rulesToInsert = [];
        for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
          var selector = _b[_a];
          rulesToInsert.push(selector, $97999987dc8ca4a0eb7ec7189b61aaef$export$serializeRuleEntries(options, rules[selector]));
        }
        registration.rulesToInsert = rulesToInsert;
      }
      return registration;
    }
    return undefined;
  }
  /**
  * Insert style to stylesheet.
  * @param registration Style registration.
  * @param specificityMultiplier Number of times classname selector is repeated in the css rule.
  * This is to increase css specificity in case it's needed. Default to 1.
  */
  function $97999987dc8ca4a0eb7ec7189b61aaef$export$applyRegistration(registration, specificityMultiplier) {
    if (specificityMultiplier === void 0) {
      specificityMultiplier = 1;
    }
    var stylesheet = $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet.getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
      // rulesToInsert is an ordered array of selector/rule pairs.
      for (var i = 0; i < rulesToInsert.length; i += 2) {
        var rules = rulesToInsert[i + 1];
        if (rules) {
          var selector = rulesToInsert[i];
          selector = selector.replace(/&/g, $97999987dc8ca4a0eb7ec7189b61aaef$var$repeatString("." + registration.className, specificityMultiplier));
          // Insert. Note if a media query, we must close the query with a final bracket.
          var processedRule = selector + "{" + rules + "}" + (selector.indexOf('@') === 0 ? '}' : '');
          stylesheet.insertRule(processedRule);
        }
      }
      stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
  }
  function $97999987dc8ca4a0eb7ec7189b61aaef$export$styleToClassName(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var registration = $97999987dc8ca4a0eb7ec7189b61aaef$export$styleToRegistration.apply(void 0, $d309954a712b99875da1746509963c49$export$__spreadArrays([options], args));
    if (registration) {
      $97999987dc8ca4a0eb7ec7189b61aaef$export$applyRegistration(registration, options.specificityMultiplier);
      return registration.className;
    }
    return '';
  }
  /**
  * Concatenation helper, which can merge class names together. Skips over falsey values.
  *
  * @public
  */
  function $db0791c6cef81d641f7412d934e18473$export$mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return $db0791c6cef81d641f7412d934e18473$export$mergeCss(args, $4677c6949bcbd613c2d2b5ef543fd335$export$getStyleOptions());
  }
  /**
  * Concatenation helper, which can merge class names together. Skips over falsey values.
  * Accepts a set of options that will be used when calculating styles.
  *
  * @public
  */
  function $db0791c6cef81d641f7412d934e18473$export$mergeCss(args, options) {
    var styleArgs = args instanceof Array ? args : [args];
    var _a = $358b4f320a668e82e4ceaf5744a50e5a$export$extractStyleParts(styleArgs), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
      classes.push($97999987dc8ca4a0eb7ec7189b61aaef$export$styleToClassName(options || ({}), objects));
    }
    return classes.join(' ');
  }
  /**
  * Combine a set of styles together (but does not register css classes).
  * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
  */
  function $3b23de114a4264136f20c63bb3316990$export$concatStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      styleSets[_i] = arguments[_i];
    }
    if (styleSets && styleSets.length === 1 && styleSets[0] && !styleSets[0].subComponentStyles) {
      return styleSets[0];
    }
    var mergedSet = {};
    // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.
    var workingSubcomponentStyles = {};
    for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
      var currentSet = styleSets_1[_a];
      if (currentSet) {
        for (var prop in currentSet) {
          if (currentSet.hasOwnProperty(prop)) {
            if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
              // subcomponent styles - style functions or objects
              var currentComponentStyles = currentSet.subComponentStyles;
              for (var subCompProp in currentComponentStyles) {
                if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                  if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                    workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                  } else {
                    workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                  }
                }
              }
              continue;
            }
            // the as any casts below is a workaround for ts 2.8.
            // todo: remove cast to any in ts 2.9.
            var mergedValue = mergedSet[prop];
            var currentValue = currentSet[prop];
            if (mergedValue === undefined) {
              mergedSet[prop] = currentValue;
            } else {
              mergedSet[prop] = $d309954a712b99875da1746509963c49$export$__spreadArrays(Array.isArray(mergedValue) ? mergedValue : [mergedValue], Array.isArray(currentValue) ? currentValue : [currentValue]);
            }
          }
        }
      }
    }
    if (Object.keys(workingSubcomponentStyles).length > 0) {
      mergedSet.subComponentStyles = {};
      var mergedSubStyles = mergedSet.subComponentStyles;
      var _loop_1 = function (subCompProp) {
        if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
          var workingSet_1 = workingSubcomponentStyles[subCompProp];
          mergedSubStyles[subCompProp] = function (styleProps) {
            return $3b23de114a4264136f20c63bb3316990$export$concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
              return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
            }));
          };
        }
      };
      // now we process the subcomponent styles if there are any
      for (var subCompProp in workingSubcomponentStyles) {
        _loop_1(subCompProp);
      }
    }
    return mergedSet;
  }
  /**
  * Takes in one or more style set objects, each1consisting of a set of areas,
  * each which will produce a class name. Using this is analogous to calling
  * `mergeCss` for each property in the object, but ensures the
  * set ordering when multiple style sets are merged.
  *
  * @param styleSets - One or more style sets to be merged.
  * @param options - (optional) Options to use when creating rules.
  */
  function $863e396531b840b0424bb7c8a7271865$export$mergeCssSets(styleSets, options) {
    var _a, _b;
    var classNameSet = {
      subComponentStyles: {}
    };
    var styleSet = styleSets[0];
    if (!styleSet && styleSets.length <= 1) {
      return {
        subComponentStyles: {}
      };
    }
    var concatenatedStyleSet = $3b23de114a4264136f20c63bb3316990$export$concatStyleSets.apply(void 0, styleSets);
    var registrations = [];
    for (var styleSetArea in concatenatedStyleSet) {
      if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
        if (styleSetArea === 'subComponentStyles') {
          classNameSet.subComponentStyles = concatenatedStyleSet.subComponentStyles || ({});
          continue;
        }
        var styles = concatenatedStyleSet[styleSetArea];
        var _c = $358b4f320a668e82e4ceaf5744a50e5a$export$extractStyleParts(styles), classes = _c.classes, objects = _c.objects;
        if ((_a = objects) === null || _a === void 0 ? void 0 : _a.length) {
          var registration = $97999987dc8ca4a0eb7ec7189b61aaef$export$styleToRegistration(options || ({}), {
            displayName: styleSetArea
          }, objects);
          if (registration) {
            registrations.push(registration);
            classNameSet[styleSetArea] = classes.concat([registration.className]).join(' ');
          }
        } else {
          classNameSet[styleSetArea] = classes.join(' ');
        }
      }
    }
    for (var _i = 0, registrations_1 = registrations; _i < registrations_1.length; _i++) {
      var registration = registrations_1[_i];
      if (registration) {
        $97999987dc8ca4a0eb7ec7189b61aaef$export$applyRegistration(registration, (_b = options) === null || _b === void 0 ? void 0 : _b.specificityMultiplier);
      }
    }
    return classNameSet;
  }
  /**
  * Concatenates style sets into one, but resolves functional sets using the given props.
  * @param styleProps - Props used to resolve functional sets.
  * @param allStyles - Style sets, which can be functions or objects.
  */
  function $ce35b49e34c1a24c9ea2944a469f5ee4$export$concatStyleSetsWithProps(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
      var styles = allStyles_1[_a];
      if (styles) {
        result.push(typeof styles === 'function' ? styles(styleProps) : styles);
      }
    }
    if (result.length === 1) {
      return result[0];
    } else if (result.length) {
      // cliffkoh: I cannot figure out how to avoid the cast to any here.
      // It is something to do with the use of Omit in IStyleSet.
      // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
      // the official version).
      return $3b23de114a4264136f20c63bb3316990$export$concatStyleSets.apply(void 0, result);
    }
    return {};
  }
  /**
  * Registers a font face.
  * @public
  */
  function $3cd50aeaa63e0cf7ad43feb7709f6ca2$export$fontFace(font) {
    $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet.getInstance().insertRule("@font-face{" + $97999987dc8ca4a0eb7ec7189b61aaef$export$serializeRuleEntries($4677c6949bcbd613c2d2b5ef543fd335$export$getStyleOptions(), font) + "}", true);
  }
  $88b07b32ddbb6d7734b3f9e72ca6a8ff$export$setVersion('@fluentui/merge-styles', '0.0.0');
  // ASSET: ../fluentui/packages/utilities/lib/rtl.js
  var $76d06caa5e9aad26d9e180775914c742$exports = {};
  // ASSET: ../fluentui/packages/utilities/lib/KeyCodes.js
  var $a0f7a244c41550783f3a530f6e5f366d$exports = {};
  /**
  * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
  *
  * @public
  * {@docCategory KeyCodes}
  */
  var $a0f7a244c41550783f3a530f6e5f366d$export$KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    /*eslint-disable @typescript-eslint/naming-convention*/
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    /*eslint-enable @typescript-eslint/naming-convention*/
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222
  };
  $parcel$export($a0f7a244c41550783f3a530f6e5f366d$exports, "KeyCodes", function () {
    return $a0f7a244c41550783f3a530f6e5f366d$export$KeyCodes;
  });
  // ASSET: ../fluentui/packages/utilities/lib/dom/getDocument.js
  var $e0af907232a9d9480742211554dbd1c9$exports = {};
  var $be3a58953227f2d98efb243f5a959eb6$export$_isSSR = false;
  /**
  * Helper to get the document object. Note that in popup window cases, document
  * might be the wrong document, which is why we look at ownerDocument for the
  * truth. Also note that the SSR flag is used to test ssr scenarios even if
  * document is defined (from JSDOM for example.)
  *
  * @public
  */
  function $e0af907232a9d9480742211554dbd1c9$export$getDocument(rootElement) {
    if ($be3a58953227f2d98efb243f5a959eb6$export$_isSSR || typeof document === 'undefined') {
      return undefined;
    } else {
      var el = rootElement;
      return el && el.ownerDocument ? el.ownerDocument : document;
    }
  }
  $parcel$export($e0af907232a9d9480742211554dbd1c9$exports, "getDocument", function () {
    return $e0af907232a9d9480742211554dbd1c9$export$getDocument;
  });
  // ASSET: ../fluentui/packages/utilities/lib/dom/getWindow.js
  var $62c532628fe4c01f6dd9e4d122ed2cac$exports = {};
  var $62c532628fe4c01f6dd9e4d122ed2cac$var$_window = undefined;
  // Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
  // hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
  // Caching the window value at the file scope lets us minimize the impact.
  try {
    $62c532628fe4c01f6dd9e4d122ed2cac$var$_window = window;
  } catch (e) {}
  /**
  * Helper to get the window object. The helper will make sure to use a cached variable
  * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
  * window object won't match the "global" window object, and for these scenarios, you should
  * pass in an element hosted within the popup.
  *
  * @public
  */
  function $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow(rootElement) {
    if ($be3a58953227f2d98efb243f5a959eb6$export$_isSSR || typeof $62c532628fe4c01f6dd9e4d122ed2cac$var$_window === 'undefined') {
      return undefined;
    } else {
      var el = rootElement;
      return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : $62c532628fe4c01f6dd9e4d122ed2cac$var$_window;
    }
  }
  $parcel$export($62c532628fe4c01f6dd9e4d122ed2cac$exports, "getWindow", function () {
    return $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow;
  });
  /**
  * Fetches an item from session storage without throwing an exception
  * @param key The key of the item to fetch from session storage
  */
  function $4df42d120a69e1f7cbdee291c27dd0f7$export$getItem(key) {
    var result = null;
    try {
      var win = $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow();
      result = win ? win.sessionStorage.getItem(key) : null;
    } catch (e) {}
    return result;
  }
  /**
  * Inserts an item into session storage without throwing an exception
  * @param key The key of the item to add to session storage
  * @param data The data to put into session storage
  */
  function $4df42d120a69e1f7cbdee291c27dd0f7$export$setItem(key, data) {
    var _a;
    try {
      (_a = $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow()) === null || _a === void 0 ? void 0 : _a.sessionStorage.setItem(key, data);
    } catch (e) {}
  }
  var $76d06caa5e9aad26d9e180775914c742$var$RTL_LOCAL_STORAGE_KEY = 'isRTL';
  // Default to undefined so that we initialize on first read.
  var $76d06caa5e9aad26d9e180775914c742$var$_isRTL;
  /**
  * Gets the rtl state of the page (returns true if in rtl.)
  */
  function $76d06caa5e9aad26d9e180775914c742$export$getRTL(theme) {
    if (theme === void 0) {
      theme = {};
    }
    if (theme.rtl !== undefined) {
      return theme.rtl;
    }
    if ($76d06caa5e9aad26d9e180775914c742$var$_isRTL === undefined) {
      // Fabric supports persisting the RTL setting between page refreshes via session storage
      var savedRTL = $4df42d120a69e1f7cbdee291c27dd0f7$export$getItem($76d06caa5e9aad26d9e180775914c742$var$RTL_LOCAL_STORAGE_KEY);
      if (savedRTL !== null) {
        $76d06caa5e9aad26d9e180775914c742$var$_isRTL = savedRTL === '1';
        $76d06caa5e9aad26d9e180775914c742$export$setRTL($76d06caa5e9aad26d9e180775914c742$var$_isRTL);
      }
      var doc = $e0af907232a9d9480742211554dbd1c9$export$getDocument();
      if ($76d06caa5e9aad26d9e180775914c742$var$_isRTL === undefined && doc) {
        $76d06caa5e9aad26d9e180775914c742$var$_isRTL = (doc.body && doc.body.getAttribute('dir') || doc.documentElement.getAttribute('dir')) === 'rtl';
        $4677c6949bcbd613c2d2b5ef543fd335$export$setRTL($76d06caa5e9aad26d9e180775914c742$var$_isRTL);
      }
    }
    return !!$76d06caa5e9aad26d9e180775914c742$var$_isRTL;
  }
  $parcel$export($76d06caa5e9aad26d9e180775914c742$exports, "getRTL", function () {
    return $76d06caa5e9aad26d9e180775914c742$export$getRTL;
  });
  /**
  * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
  */
  function $76d06caa5e9aad26d9e180775914c742$export$setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) {
      persistSetting = false;
    }
    var doc = $e0af907232a9d9480742211554dbd1c9$export$getDocument();
    if (doc) {
      doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
      $4df42d120a69e1f7cbdee291c27dd0f7$export$setItem($76d06caa5e9aad26d9e180775914c742$var$RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    $76d06caa5e9aad26d9e180775914c742$var$_isRTL = isRTL;
    $4677c6949bcbd613c2d2b5ef543fd335$export$setRTL($76d06caa5e9aad26d9e180775914c742$var$_isRTL);
  }
  var $18ce312ff00db69536a6c7a9d9c00af0$var$MAX_CACHE_COUNT = 50;
  var $18ce312ff00db69536a6c7a9d9c00af0$var$DEFAULT_SPECIFICITY_MULTIPLIER = 5;
  var $18ce312ff00db69536a6c7a9d9c00af0$var$_memoizedClassNames = 0;
  var $18ce312ff00db69536a6c7a9d9c00af0$var$stylesheet = $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet.getInstance();
  if ($18ce312ff00db69536a6c7a9d9c00af0$var$stylesheet && $18ce312ff00db69536a6c7a9d9c00af0$var$stylesheet.onReset) {
    $18ce312ff00db69536a6c7a9d9c00af0$var$stylesheet.onReset(function () {
      return $18ce312ff00db69536a6c7a9d9c00af0$var$_memoizedClassNames++;
    });
  }
  // Note that because of the caching nature within the classNames memoization,
  // I've disabled this rule to simply be able to work with any types.
  /*eslint-disable @typescript-eslint/no-explicit-any*/
  // This represents a prop we attach to each Map to indicate the cached return value
  // associated with the graph node.
  var $18ce312ff00db69536a6c7a9d9c00af0$var$retVal = '__retval__';
  /**
  * Creates a getClassNames function which calls getStyles given the props, and injects them
  * into mergeStyleSets.
  *
  * Note that the props you pass in on every render should be in the same order and
  * immutable (numbers, strings, and booleans). This will allow the results to be memoized. Violating
  * these will cause extra recalcs to occur.
  */
  function $18ce312ff00db69536a6c7a9d9c00af0$export$classNamesFunction(options) {
    // We build a trie where each node is a Map. The map entry key represents an argument
    // value, and the entry value is another node (Map). Each node has a `__retval__`
    // property which is used to hold the cached response.
    if (options === void 0) {
      options = {};
    }
    // To derive the response, we can simply ensure the arguments are added or already
    // exist in the trie. At the last node, if there is a `__retval__` we return that. Otherwise
    // we call the `getStyles` api to evaluate, cache on the property, and return that.
    var map = new Map();
    var styleCalcCount = 0;
    var getClassNamesCount = 0;
    var currentMemoizedClassNames = $18ce312ff00db69536a6c7a9d9c00af0$var$_memoizedClassNames;
    var getClassNames = function (styleFunctionOrObject, styleProps) {
      if (styleProps === void 0) {
        styleProps = {};
      }
      var _a, _b;
      // If useStaticStyles is true, styleFunctionOrObject returns slot to classname mappings.
      // If there is also no style overrides, we can skip merge styles completely and
      // simply return the result from the style funcion.
      if (options.useStaticStyles && typeof styleFunctionOrObject === 'function' && styleFunctionOrObject.__noStyleOverride__) {
        return styleFunctionOrObject(styleProps);
      }
      getClassNamesCount++;
      var current = map;
      var theme = styleProps.theme;
      var rtl = theme && theme.rtl !== undefined ? theme.rtl : $76d06caa5e9aad26d9e180775914c742$export$getRTL();
      var disableCaching = options.disableCaching;
      // On reset of our stylesheet, reset memoized cache.
      if (currentMemoizedClassNames !== $18ce312ff00db69536a6c7a9d9c00af0$var$_memoizedClassNames) {
        currentMemoizedClassNames = $18ce312ff00db69536a6c7a9d9c00af0$var$_memoizedClassNames;
        map = new Map();
        styleCalcCount = 0;
      }
      if (!options.disableCaching) {
        current = $18ce312ff00db69536a6c7a9d9c00af0$var$_traverseMap(map, styleFunctionOrObject);
        current = $18ce312ff00db69536a6c7a9d9c00af0$var$_traverseMap(current, styleProps);
      }
      if (disableCaching || !current[$18ce312ff00db69536a6c7a9d9c00af0$var$retVal]) {
        if (styleFunctionOrObject === undefined) {
          current[$18ce312ff00db69536a6c7a9d9c00af0$var$retVal] = {};
        } else {
          current[$18ce312ff00db69536a6c7a9d9c00af0$var$retVal] = $863e396531b840b0424bb7c8a7271865$export$mergeCssSets([typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject], {
            rtl: !!rtl,
            specificityMultiplier: options.useStaticStyles ? $18ce312ff00db69536a6c7a9d9c00af0$var$DEFAULT_SPECIFICITY_MULTIPLIER : undefined
          });
        }
        if (!disableCaching) {
          styleCalcCount++;
        }
      }
      if (styleCalcCount > (options.cacheSize || $18ce312ff00db69536a6c7a9d9c00af0$var$MAX_CACHE_COUNT)) {
        var win = $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow();
        if ((_b = (_a = win) === null || _a === void 0 ? void 0 : _a.FabricConfig) === null || _b === void 0 ? void 0 : _b.enableClassNameCacheFullWarning) {
          // eslint-disable-next-line no-console
          console.warn("Styles are being recalculated too frequently. Cache miss rate is " + styleCalcCount + "/" + getClassNamesCount + ".");
          // eslint-disable-next-line no-console
          console.trace();
        }
        map.clear();
        styleCalcCount = 0;
        // Mutate the options passed in, that's all we can do.
        options.disableCaching = true;
      }
      // Note: the retVal is an attached property on the Map; not a key in the Map. We use this attached property to
      // cache the return value for this branch of the graph.
      return current[$18ce312ff00db69536a6c7a9d9c00af0$var$retVal];
    };
    return getClassNames;
  }
  $parcel$export($18ce312ff00db69536a6c7a9d9c00af0$exports, "classNamesFunction", function () {
    return $18ce312ff00db69536a6c7a9d9c00af0$export$classNamesFunction;
  });
  function $18ce312ff00db69536a6c7a9d9c00af0$var$_traverseEdge(current, value) {
    value = $18ce312ff00db69536a6c7a9d9c00af0$var$_normalizeValue(value);
    if (!current.has(value)) {
      current.set(value, new Map());
    }
    return current.get(value);
  }
  function $18ce312ff00db69536a6c7a9d9c00af0$var$_traverseMap(current, inputs) {
    if (typeof inputs === 'function') {
      var cachedInputsFromStyled = inputs.__cachedInputs__;
      if (cachedInputsFromStyled) {
        // The styled helper will generate the styles function and will attach the cached
        // inputs (consisting of the default styles, customzied styles, and user provided styles.)
        // These should be used as cache keys for deriving the memoized value.
        for (var _i = 0, _a = inputs.__cachedInputs__; _i < _a.length; _i++) {
          var input = _a[_i];
          current = $18ce312ff00db69536a6c7a9d9c00af0$var$_traverseEdge(current, input);
        }
      } else {
        current = $18ce312ff00db69536a6c7a9d9c00af0$var$_traverseEdge(current, inputs);
      }
    } else if (typeof inputs === 'object') {
      for (var propName in inputs) {
        if (inputs.hasOwnProperty(propName)) {
          current = $18ce312ff00db69536a6c7a9d9c00af0$var$_traverseEdge(current, inputs[propName]);
        }
      }
    }
    return current;
  }
  function $18ce312ff00db69536a6c7a9d9c00af0$var$_normalizeValue(value) {
    switch (value) {
      case undefined:
        return '__undefined__';
      case null:
        return '__null__';
      default:
        return value;
    }
  }
  // ASSET: ../fluentui/packages/utilities/lib/customizations/Customizations.js
  var $020fb4649d01f912887f5a17b3fe9e45$exports = {};
  // ASSET: ../fluentui/packages/utilities/lib/GlobalSettings.js
  var $8357d9b03bf8977ff9a0a35dd0e1b886$exports = {};
  /**
  * Storing global state in local module variables has issues when more than one copy
  * if the module gets loaded on the page (due to a bundling error or simply by consuming
  * a prebundled script.)
  *
  * This file contains helpers to deal with the getting and setting local state, and allows
  * callers to get called back when it mutates.
  */
  var $8357d9b03bf8977ff9a0a35dd0e1b886$var$GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
  var $8357d9b03bf8977ff9a0a35dd0e1b886$var$CALLBACK_STATE_PROP_NAME = '__callbacks__';
  var $8357d9b03bf8977ff9a0a35dd0e1b886$var$_counter = 0;
  /**
  * Global settings helper, which stores settings in the global (window) namespace.
  * If window is not provided, it will store settings in module scope. Provides a
  * way to observe changes as well when their values change.
  *
  * @public
  * {@docCategory GlobalSettings}
  */
  var $8357d9b03bf8977ff9a0a35dd0e1b886$export$GlobalSettings = /** @class*/
  (function () {
    function GlobalSettings() {}
    GlobalSettings.getValue = function (key, defaultValue) {
      var globalSettings = $8357d9b03bf8977ff9a0a35dd0e1b886$var$_getGlobalSettings();
      if (globalSettings[key] === undefined) {
        globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      }
      return globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
      var globalSettings = $8357d9b03bf8977ff9a0a35dd0e1b886$var$_getGlobalSettings();
      var callbacks = globalSettings[$8357d9b03bf8977ff9a0a35dd0e1b886$var$CALLBACK_STATE_PROP_NAME];
      var oldValue = globalSettings[key];
      if (value !== oldValue) {
        globalSettings[key] = value;
        var changeDescription = {
          oldValue: oldValue,
          value: value,
          key: key
        };
        for (var id in callbacks) {
          if (callbacks.hasOwnProperty(id)) {
            callbacks[id](changeDescription);
          }
        }
      }
      return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
      // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
      // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
      var id = cb.__id__;
      var callbacks = $8357d9b03bf8977ff9a0a35dd0e1b886$var$_getCallbacks();
      if (!id) {
        id = cb.__id__ = String($8357d9b03bf8977ff9a0a35dd0e1b886$var$_counter++);
      }
      callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
      var callbacks = $8357d9b03bf8977ff9a0a35dd0e1b886$var$_getCallbacks();
      delete callbacks[cb.__id__];
    };
    return GlobalSettings;
  })();
  $parcel$export($8357d9b03bf8977ff9a0a35dd0e1b886$exports, "GlobalSettings", function () {
    return $8357d9b03bf8977ff9a0a35dd0e1b886$export$GlobalSettings;
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function $8357d9b03bf8977ff9a0a35dd0e1b886$var$_getGlobalSettings() {
    var _a;
    var win = $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var globalObj = win || ({});
    if (!globalObj[$8357d9b03bf8977ff9a0a35dd0e1b886$var$GLOBAL_SETTINGS_PROP_NAME]) {
      globalObj[$8357d9b03bf8977ff9a0a35dd0e1b886$var$GLOBAL_SETTINGS_PROP_NAME] = (_a = {}, _a[$8357d9b03bf8977ff9a0a35dd0e1b886$var$CALLBACK_STATE_PROP_NAME] = {}, _a);
    }
    return globalObj[$8357d9b03bf8977ff9a0a35dd0e1b886$var$GLOBAL_SETTINGS_PROP_NAME];
  }
  function $8357d9b03bf8977ff9a0a35dd0e1b886$var$_getCallbacks() {
    var globalSettings = $8357d9b03bf8977ff9a0a35dd0e1b886$var$_getGlobalSettings();
    return globalSettings[$8357d9b03bf8977ff9a0a35dd0e1b886$var$CALLBACK_STATE_PROP_NAME];
  }
  var $020fb4649d01f912887f5a17b3fe9e45$var$CustomizationsGlobalKey = 'customizations';
  var $020fb4649d01f912887f5a17b3fe9e45$var$NO_CUSTOMIZATIONS = {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false
  };
  var $020fb4649d01f912887f5a17b3fe9e45$var$_allSettings = $8357d9b03bf8977ff9a0a35dd0e1b886$export$GlobalSettings.getValue($020fb4649d01f912887f5a17b3fe9e45$var$CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false
  });
  var $020fb4649d01f912887f5a17b3fe9e45$var$_events = [];
  var $020fb4649d01f912887f5a17b3fe9e45$export$Customizations = /** @class*/
  (function () {
    function Customizations() {}
    Customizations.reset = function () {
      $020fb4649d01f912887f5a17b3fe9e45$var$_allSettings.settings = {};
      $020fb4649d01f912887f5a17b3fe9e45$var$_allSettings.scopedSettings = {};
    };
    /** Apply global Customization settings.
    * @example Customizations.applySettings(\{ theme: \{...\} \});
    */
    Customizations.applySettings = function (settings) {
      $020fb4649d01f912887f5a17b3fe9e45$var$_allSettings.settings = $d309954a712b99875da1746509963c49$export$__assign($d309954a712b99875da1746509963c49$export$__assign({}, $020fb4649d01f912887f5a17b3fe9e45$var$_allSettings.settings), settings);
      Customizations._raiseChange();
    };
    /** Apply Customizations to a particular named scope, like a component.
    * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
    */
    Customizations.applyScopedSettings = function (scopeName, settings) {
      $020fb4649d01f912887f5a17b3fe9e45$var$_allSettings.scopedSettings[scopeName] = $d309954a712b99875da1746509963c49$export$__assign($d309954a712b99875da1746509963c49$export$__assign({}, $020fb4649d01f912887f5a17b3fe9e45$var$_allSettings.scopedSettings[scopeName]), settings);
      Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings) {
      if (localSettings === void 0) {
        localSettings = $020fb4649d01f912887f5a17b3fe9e45$var$NO_CUSTOMIZATIONS;
      }
      var settings = {};
      var localScopedSettings = scopeName && localSettings.scopedSettings[scopeName] || ({});
      var globalScopedSettings = scopeName && $020fb4649d01f912887f5a17b3fe9e45$var$_allSettings.scopedSettings[scopeName] || ({});
      for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var property = properties_1[_i];
        settings[property] = localScopedSettings[property] || localSettings.settings[property] || globalScopedSettings[property] || $020fb4649d01f912887f5a17b3fe9e45$var$_allSettings.settings[property];
      }
      return settings;
    };
    /** Used to run some code that sets Customizations without triggering an update until the end.
    * Useful for applying Customizations that don't affect anything currently rendered, or for
    * applying many customizations at once.
    * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
    */
    Customizations.applyBatchedUpdates = function (code, suppressUpdate) {
      Customizations._suppressUpdates = true;
      try {
        code();
      } catch (_a) {}
      Customizations._suppressUpdates = false;
      if (!suppressUpdate) {
        Customizations._raiseChange();
      }
    };
    Customizations.observe = function (onChange) {
      $020fb4649d01f912887f5a17b3fe9e45$var$_events.push(onChange);
    };
    Customizations.unobserve = function (onChange) {
      $020fb4649d01f912887f5a17b3fe9e45$var$_events = $020fb4649d01f912887f5a17b3fe9e45$var$_events.filter(function (cb) {
        return cb !== onChange;
      });
    };
    Customizations._raiseChange = function () {
      if (!Customizations._suppressUpdates) {
        $020fb4649d01f912887f5a17b3fe9e45$var$_events.forEach(function (cb) {
          return cb();
        });
      }
    };
    return Customizations;
  })();
  $parcel$export($020fb4649d01f912887f5a17b3fe9e45$exports, "Customizations", function () {
    return $020fb4649d01f912887f5a17b3fe9e45$export$Customizations;
  });
  // ASSET: ../fluentui/packages/utilities/lib/initializeComponentRef.js
  var $1e38bedf374e9ab61273a38da8f4e67d$exports = {};
  // ASSET: ../fluentui/packages/utilities/lib/extendComponent.js
  var $16ee3b38671acefc6f52899aa20376d1$exports = {};
  // ASSET: ../fluentui/packages/utilities/lib/appendFunction.js
  var $3929b2d0daeee6853da4a43108c6ca5c$exports = {};
  /*eslint-disable @typescript-eslint/no-explicit-any*/
  /**
  * Returns a single function which will call each of the given functions in the context of the
  * parent.
  */
  function $3929b2d0daeee6853da4a43108c6ca5c$export$appendFunction(parent) {
    var functions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      functions[_i - 1] = arguments[_i];
    }
    if (functions.length < 2) {
      return functions[0];
    }
    return function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      functions.forEach(function (f) {
        return f && f.apply(parent, args);
      });
    };
  }
  $parcel$export($3929b2d0daeee6853da4a43108c6ca5c$exports, "appendFunction", function () {
    return $3929b2d0daeee6853da4a43108c6ca5c$export$appendFunction;
  });
  /**
  * Extends a component's lifetime methods by appending new functions to the existing lifetime functions.
  */
  function $16ee3b38671acefc6f52899aa20376d1$export$extendComponent(parent, methods) {
    for (var name_1 in methods) {
      if (methods.hasOwnProperty(name_1)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        parent[name_1] = $3929b2d0daeee6853da4a43108c6ca5c$export$appendFunction(parent, parent[name_1], methods[name_1]);
      }
    }
  }
  $parcel$export($16ee3b38671acefc6f52899aa20376d1$exports, "extendComponent", function () {
    return $16ee3b38671acefc6f52899aa20376d1$export$extendComponent;
  });
  /**
  * Helper to manage componentRef resolution. Internally appends logic to
  * lifetime methods to resolve componentRef to the passed in object.
  *
  * Usage: call initializeComponentRef(this) in the constructor,
  */
  function $1e38bedf374e9ab61273a38da8f4e67d$export$initializeComponentRef(obj) {
    $16ee3b38671acefc6f52899aa20376d1$export$extendComponent(obj, {
      componentDidMount: $1e38bedf374e9ab61273a38da8f4e67d$var$_onMount,
      componentDidUpdate: $1e38bedf374e9ab61273a38da8f4e67d$var$_onUpdate,
      componentWillUnmount: $1e38bedf374e9ab61273a38da8f4e67d$var$_onUnmount
    });
  }
  $parcel$export($1e38bedf374e9ab61273a38da8f4e67d$exports, "initializeComponentRef", function () {
    return $1e38bedf374e9ab61273a38da8f4e67d$export$initializeComponentRef;
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function $1e38bedf374e9ab61273a38da8f4e67d$var$_onMount() {
    $1e38bedf374e9ab61273a38da8f4e67d$var$_setComponentRef(this.props.componentRef, this);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function $1e38bedf374e9ab61273a38da8f4e67d$var$_onUpdate(prevProps) {
    if (prevProps.componentRef !== this.props.componentRef) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      $1e38bedf374e9ab61273a38da8f4e67d$var$_setComponentRef(prevProps.componentRef, null);
      $1e38bedf374e9ab61273a38da8f4e67d$var$_setComponentRef(this.props.componentRef, this);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function $1e38bedf374e9ab61273a38da8f4e67d$var$_onUnmount() {
    $1e38bedf374e9ab61273a38da8f4e67d$var$_setComponentRef(this.props.componentRef, null);
  }
  function $1e38bedf374e9ab61273a38da8f4e67d$var$_setComponentRef(componentRef, value) {
    if (componentRef) {
      if (typeof componentRef === 'object') {
        componentRef.current = value;
      } else if (typeof componentRef === 'function') {
        componentRef(value);
      }
    }
  }
  // ASSET: ../fluentui/packages/utilities/lib/language.js
  var $6ffbc71392972d2d307c065365c8cfa1$exports = {};
  /**
  * Fetches an item from local storage without throwing an exception
  * @param key The key of the item to fetch from local storage
  */
  function $93fc524bdb809909761046061b8b9176$export$getItem(key) {
    var result = null;
    try {
      var win = $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow();
      result = win ? win.localStorage.getItem(key) : null;
    } catch (e) {}
    return result;
  }
  /**
  * Inserts an item into local storage without throwing an exception
  * @param key The key of the item to add to local storage
  * @param data The data to put into local storage
  */
  function $93fc524bdb809909761046061b8b9176$export$setItem(key, data) {
    try {
      var win = $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow();
      win && win.localStorage.setItem(key, data);
    } catch (e) {}
  }
  // Default to undefined so that we initialize on first read.
  var $6ffbc71392972d2d307c065365c8cfa1$var$_language;
  var $6ffbc71392972d2d307c065365c8cfa1$var$STORAGE_KEY = 'language';
  /**
  * Gets the language set for the page.
  * @param persistenceType - Where to persist the value. Default is `sessionStorage` if available.
  */
  function $6ffbc71392972d2d307c065365c8cfa1$export$getLanguage(persistenceType) {
    if (persistenceType === void 0) {
      persistenceType = 'sessionStorage';
    }
    if ($6ffbc71392972d2d307c065365c8cfa1$var$_language === undefined) {
      var doc = $e0af907232a9d9480742211554dbd1c9$export$getDocument();
      var savedLanguage = persistenceType === 'localStorage' ? $93fc524bdb809909761046061b8b9176$export$getItem($6ffbc71392972d2d307c065365c8cfa1$var$STORAGE_KEY) : persistenceType === 'sessionStorage' ? $4df42d120a69e1f7cbdee291c27dd0f7$export$getItem($6ffbc71392972d2d307c065365c8cfa1$var$STORAGE_KEY) : undefined;
      if (savedLanguage) {
        $6ffbc71392972d2d307c065365c8cfa1$var$_language = savedLanguage;
      }
      if ($6ffbc71392972d2d307c065365c8cfa1$var$_language === undefined && doc) {
        $6ffbc71392972d2d307c065365c8cfa1$var$_language = doc.documentElement.getAttribute('lang');
      }
      if ($6ffbc71392972d2d307c065365c8cfa1$var$_language === undefined) {
        $6ffbc71392972d2d307c065365c8cfa1$var$_language = 'en';
      }
    }
    return $6ffbc71392972d2d307c065365c8cfa1$var$_language;
  }
  $parcel$export($6ffbc71392972d2d307c065365c8cfa1$exports, "getLanguage", function () {
    return $6ffbc71392972d2d307c065365c8cfa1$export$getLanguage;
  });
  // ASSET: ../fluentui/packages/utilities/lib/memoize.js
  var $9372f588c8c4013f0651c8eb435c7bd3$exports = {};
  var $9372f588c8c4013f0651c8eb435c7bd3$var$_initializedStylesheetResets = false;
  var $9372f588c8c4013f0651c8eb435c7bd3$var$_resetCounter = 0;
  var $9372f588c8c4013f0651c8eb435c7bd3$var$_emptyObject = {
    empty: true
  };
  var $9372f588c8c4013f0651c8eb435c7bd3$var$_dictionary = {};
  var $9372f588c8c4013f0651c8eb435c7bd3$var$_weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
  /**
  * Reset memoizations.
  */
  function $9372f588c8c4013f0651c8eb435c7bd3$export$resetMemoizations() {
    $9372f588c8c4013f0651c8eb435c7bd3$var$_resetCounter++;
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
  function $9372f588c8c4013f0651c8eb435c7bd3$export$memoizeFunction(cb, maxCacheSize, ignoreNullOrUndefinedResult) {
    if (maxCacheSize === void 0) {
      maxCacheSize = 100;
    }
    if (ignoreNullOrUndefinedResult === void 0) {
      ignoreNullOrUndefinedResult = false;
    }
    // Avoid breaking scenarios which don't have weak map.
    if (!$9372f588c8c4013f0651c8eb435c7bd3$var$_weakMap) {
      return cb;
    }
    if (!$9372f588c8c4013f0651c8eb435c7bd3$var$_initializedStylesheetResets) {
      var stylesheet = $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet.getInstance();
      if (stylesheet && stylesheet.onReset) {
        $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet.getInstance().onReset($9372f588c8c4013f0651c8eb435c7bd3$export$resetMemoizations);
      }
      $9372f588c8c4013f0651c8eb435c7bd3$var$_initializedStylesheetResets = true;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = $9372f588c8c4013f0651c8eb435c7bd3$var$_resetCounter;
    return function memoizedFunction() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var currentNode = rootNode;
      if (rootNode === undefined || localResetCounter !== $9372f588c8c4013f0651c8eb435c7bd3$var$_resetCounter || maxCacheSize > 0 && cacheSize > maxCacheSize) {
        rootNode = $9372f588c8c4013f0651c8eb435c7bd3$var$_createNode();
        cacheSize = 0;
        localResetCounter = $9372f588c8c4013f0651c8eb435c7bd3$var$_resetCounter;
      }
      currentNode = rootNode;
      // Traverse the tree until we find the match.
      for (var i = 0; i < args.length; i++) {
        var arg = $9372f588c8c4013f0651c8eb435c7bd3$var$_normalizeArg(args[i]);
        if (!currentNode.map.has(arg)) {
          currentNode.map.set(arg, $9372f588c8c4013f0651c8eb435c7bd3$var$_createNode());
        }
        currentNode = currentNode.map.get(arg);
      }
      if (!currentNode.hasOwnProperty('value')) {
        currentNode.value = cb.apply(void 0, args);
        cacheSize++;
      }
      if (ignoreNullOrUndefinedResult && (currentNode.value === null || currentNode.value === undefined)) {
        currentNode.value = cb.apply(void 0, args);
      }
      return currentNode.value;
    };
  }
  $parcel$export($9372f588c8c4013f0651c8eb435c7bd3$exports, "memoizeFunction", function () {
    return $9372f588c8c4013f0651c8eb435c7bd3$export$memoizeFunction;
  });
  function $9372f588c8c4013f0651c8eb435c7bd3$var$_normalizeArg(val) {
    if (!val) {
      return $9372f588c8c4013f0651c8eb435c7bd3$var$_emptyObject;
    } else if (typeof val === 'object' || typeof val === 'function') {
      return val;
    } else if (!$9372f588c8c4013f0651c8eb435c7bd3$var$_dictionary[val]) {
      $9372f588c8c4013f0651c8eb435c7bd3$var$_dictionary[val] = {
        val: val
      };
    }
    return $9372f588c8c4013f0651c8eb435c7bd3$var$_dictionary[val];
  }
  function $9372f588c8c4013f0651c8eb435c7bd3$var$_createNode() {
    return {
      map: $9372f588c8c4013f0651c8eb435c7bd3$var$_weakMap ? new $9372f588c8c4013f0651c8eb435c7bd3$var$_weakMap() : null
    };
  }
  // ASSET: ../fluentui/packages/utilities/lib/merge.js
  var $29b60172e1fe2ea478a5fc216b1a0b5f$exports = {};
  /**
  * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
  * together in the order provided. If an object creates a circular reference, it will assign the
  * original reference.
  */
  function $29b60172e1fe2ea478a5fc216b1a0b5f$export$merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var arg = args_1[_a];
      $29b60172e1fe2ea478a5fc216b1a0b5f$var$_merge(target || ({}), arg);
    }
    return target;
  }
  $parcel$export($29b60172e1fe2ea478a5fc216b1a0b5f$exports, "merge", function () {
    return $29b60172e1fe2ea478a5fc216b1a0b5f$export$merge;
  });
  /**
  * The _merge helper iterates through all props on source and assigns them to target.
  * When the value is an object, we will create a deep clone of the object. However if
  * there is a circular reference, the value will not be deep cloned and will persist
  * the reference.
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function $29b60172e1fe2ea478a5fc216b1a0b5f$var$_merge(target, source, circularReferences) {
    if (circularReferences === void 0) {
      circularReferences = [];
    }
    circularReferences.push(source);
    for (var name_1 in source) {
      if (source.hasOwnProperty(name_1)) {
        if (name_1 !== '__proto__' && name_1 !== 'constructor' && name_1 !== 'prototype') {
          var value = source[name_1];
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            var isCircularReference = circularReferences.indexOf(value) > -1;
            target[name_1] = isCircularReference ? value : $29b60172e1fe2ea478a5fc216b1a0b5f$var$_merge(target[name_1] || ({}), value, circularReferences);
          } else {
            target[name_1] = value;
          }
        }
      }
    }
    circularReferences.pop();
    return target;
  }
  // ASSET: ../fluentui/packages/utilities/lib/properties.js
  var $fafbe2bec0de6c1d68af4da64df9a0f3$exports = {};
  var $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }
    var result = {};
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
      var item = items_1[_a];
      var keys = Array.isArray(item) ? item : Object.keys(item);
      for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
        var key = keys_1[_b];
        result[key] = 1;
      }
    }
    return result;
  };
  /**
  * An array of events that are allowed on every html element type.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$baseElementEvents = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onFocus', 'onFocusCapture', 'onBlur', 'onBlurCapture', 'onChange', 'onInput', 'onSubmit', 'onLoad', 'onError', 'onKeyDown', 'onKeyDownCapture', 'onKeyPress', 'onKeyUp', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onClick', 'onClickCapture', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseDownCapture', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onMouseUpCapture', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onPointerCancel', 'onPointerDown', 'onPointerEnter', 'onPointerLeave', 'onPointerMove', 'onPointerOut', 'onPointerOver', 'onPointerUp', 'onGotPointerCapture', 'onLostPointerCapture']);
  /**
  * An array of element attributes which are allowed on every html element type.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$baseElementProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap(['accessKey', 'children', 'className', 'contentEditable', 'dir', 'draggable', 'hidden', 'htmlFor', 'id', 'lang', 'ref', 'role', 'style', 'tabIndex', 'title', 'translate', 'spellCheck', 'name']);
  /**
  * An array of HTML element properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$baseElementProperties, $fafbe2bec0de6c1d68af4da64df9a0f3$export$baseElementEvents);
  /**
  * An array of LABEL tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$labelProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['form']);
  /**
  * An array of AUDIO tag properties and events.
  
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$audioProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['height', 'loop', 'muted', 'preload', 'src', 'width']);
  /**
  * An array of VIDEO tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$videoProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$audioProperties, ['poster']);
  /**
  * An array of OL tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$olProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['start']);
  /**
  * An array of LI tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$liProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['value']);
  /**
  * An array of A tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$anchorProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['download', 'href', 'hrefLang', 'media', 'rel', 'target', 'type']);
  /**
  * An array of BUTTON tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$buttonProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['autoFocus', 'disabled', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'type', 'value']);
  /**
  * An array of INPUT tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$inputProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$buttonProperties, ['accept', 'alt', 'autoCapitalize', 'autoComplete', 'checked', 'dirname', 'form', 'height', 'inputMode', 'list', 'max', 'maxLength', 'min', 'multiple', 'pattern', 'placeholder', 'readOnly', 'required', 'src', 'step', 'size', 'type', 'value', 'width']);
  /**
  * An array of TEXTAREA tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$textAreaProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$buttonProperties, ['autoCapitalize', 'cols', 'dirname', 'form', 'maxLength', 'placeholder', 'readOnly', 'required', 'rows', 'wrap']);
  /**
  * An array of SELECT tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$selectProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$buttonProperties, ['form', 'multiple', 'required']);
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$optionProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['selected', 'value']);
  /**
  * An array of TABLE tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$tableProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['cellPadding', 'cellSpacing']);
  /**
  * An array of TH tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$thProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['rowSpan', 'scope']);
  /**
  * An array of TD tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$tdProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['colSpan', 'headers', 'rowSpan', 'scope']);
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$colGroupProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['span']);
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$colProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['span']);
  /**
  * An array of FORM tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$formProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['acceptCharset', 'action', 'encType', 'encType', 'method', 'noValidate', 'target']);
  /**
  * An array of IFRAME tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$iframeProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['allow', 'allowFullScreen', 'allowPaymentRequest', 'allowTransparency', 'csp', 'height', 'importance', 'referrerPolicy', 'sandbox', 'src', 'srcDoc', 'width']);
  /**
  * An array of IMAGE tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$imgProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$var$toObjectMap($fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties, ['alt', 'crossOrigin', 'height', 'src', 'srcSet', 'useMap', 'width']);
  /**
  * An array of DIV tag properties and events.
  *
  * @public
  */
  var $fafbe2bec0de6c1d68af4da64df9a0f3$export$divProperties = $fafbe2bec0de6c1d68af4da64df9a0f3$export$htmlElementProperties;
  $parcel$export($fafbe2bec0de6c1d68af4da64df9a0f3$exports, "divProperties", function () {
    return $fafbe2bec0de6c1d68af4da64df9a0f3$export$divProperties;
  });
  /**
  * Gets native supported props for an html element provided the allowance set. Use one of the property
  * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
  * props set. Note that all data- and aria- prefixed attributes will be allowed.
  * NOTE: getNativeProps should always be applied first when adding props to a react component. The
  * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
  * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
  * the component after an onClick function is added, then the getNativeProps onClick will override it.
  *
  * @public
  * @param props - The unfiltered input props
  * @param allowedPropsNames - The array or record of allowed prop names.
  * @returns The filtered props
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function $fafbe2bec0de6c1d68af4da64df9a0f3$export$getNativeProps(// eslint-disable-next-line @typescript-eslint/no-explicit-any
  props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    var _a;
    var isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var keys = Object.keys(props);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
      var key = keys_2[_i];
      var isNativeProp = !isArray && allowedPropNames[key] || isArray && allowedPropNames.indexOf(key) >= 0 || key.indexOf('data-') === 0 || key.indexOf('aria-') === 0;
      if (isNativeProp && (!excludedPropNames || ((_a = excludedPropNames) === null || _a === void 0 ? void 0 : _a.indexOf(key)) === -1)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        result[key] = props[key];
      }
    }
    return result;
  }
  $parcel$export($fafbe2bec0de6c1d68af4da64df9a0f3$exports, "getNativeProps", function () {
    return $fafbe2bec0de6c1d68af4da64df9a0f3$export$getNativeProps;
  });
  // ASSET: ../fluentui/packages/utilities/lib/scroll.js
  var $de24969296e924bd0bf28b8bbdd3fc78$exports = {};
  var $de24969296e924bd0bf28b8bbdd3fc78$var$_scrollbarWidth;
  var $de24969296e924bd0bf28b8bbdd3fc78$var$_bodyScrollDisabledCount = 0;
  var $de24969296e924bd0bf28b8bbdd3fc78$var$DisabledScrollClassName = $db0791c6cef81d641f7412d934e18473$export$mergeStyles({
    overflow: 'hidden !important'
  });
  /**
  * Placing this attribute on scrollable divs optimizes detection to know
  * if the div is scrollable or not (given we can avoid expensive operations
  * like getComputedStyle.)
  *
  * @public
  */
  var $de24969296e924bd0bf28b8bbdd3fc78$export$DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
  var $de24969296e924bd0bf28b8bbdd3fc78$var$_disableIosBodyScroll = function (event) {
    event.preventDefault();
  };
  /**
  * Disables the body scrolling.
  *
  * @public
  */
  function $de24969296e924bd0bf28b8bbdd3fc78$export$disableBodyScroll() {
    var doc = $e0af907232a9d9480742211554dbd1c9$export$getDocument();
    if (doc && doc.body && !$de24969296e924bd0bf28b8bbdd3fc78$var$_bodyScrollDisabledCount) {
      doc.body.classList.add($de24969296e924bd0bf28b8bbdd3fc78$var$DisabledScrollClassName);
      doc.body.addEventListener('touchmove', $de24969296e924bd0bf28b8bbdd3fc78$var$_disableIosBodyScroll, {
        passive: false,
        capture: false
      });
    }
    $de24969296e924bd0bf28b8bbdd3fc78$var$_bodyScrollDisabledCount++;
  }
  $parcel$export($de24969296e924bd0bf28b8bbdd3fc78$exports, "disableBodyScroll", function () {
    return $de24969296e924bd0bf28b8bbdd3fc78$export$disableBodyScroll;
  });
  /**
  * Enables the body scrolling.
  *
  * @public
  */
  function $de24969296e924bd0bf28b8bbdd3fc78$export$enableBodyScroll() {
    if ($de24969296e924bd0bf28b8bbdd3fc78$var$_bodyScrollDisabledCount > 0) {
      var doc = $e0af907232a9d9480742211554dbd1c9$export$getDocument();
      if (doc && doc.body && $de24969296e924bd0bf28b8bbdd3fc78$var$_bodyScrollDisabledCount === 1) {
        doc.body.classList.remove($de24969296e924bd0bf28b8bbdd3fc78$var$DisabledScrollClassName);
        doc.body.removeEventListener('touchmove', $de24969296e924bd0bf28b8bbdd3fc78$var$_disableIosBodyScroll);
      }
      $de24969296e924bd0bf28b8bbdd3fc78$var$_bodyScrollDisabledCount--;
    }
  }
  $parcel$export($de24969296e924bd0bf28b8bbdd3fc78$exports, "enableBodyScroll", function () {
    return $de24969296e924bd0bf28b8bbdd3fc78$export$enableBodyScroll;
  });
  /**
  * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
  * document.body.
  *
  * @public
  */
  function $de24969296e924bd0bf28b8bbdd3fc78$export$findScrollableParent(startingElement) {
    var el = startingElement;
    var doc = $e0af907232a9d9480742211554dbd1c9$export$getDocument(startingElement);
    // First do a quick scan for the scrollable attribute.
    while (el && el !== doc.body) {
      if (el.getAttribute($de24969296e924bd0bf28b8bbdd3fc78$export$DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
        return el;
      }
      el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== doc.body) {
      if (el.getAttribute($de24969296e924bd0bf28b8bbdd3fc78$export$DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
        var computedStyles = getComputedStyle(el);
        var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
        if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
          return el;
        }
      }
      el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === doc.body) {
      el = $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow(startingElement);
    }
    return el;
  }
  // ASSET: ../fluentui/packages/utilities/lib/styled.js
  var $ff2c11dc65d0e1b40037e86c0fd4bc22$exports = {};
  // ASSET: ../fluentui/node_modules/object-assign/index.js
  var $1a23d00bf5687ce4e5e77b927aa46879$exports, $1a23d00bf5687ce4e5e77b927aa46879$var$getOwnPropertySymbols, $1a23d00bf5687ce4e5e77b927aa46879$var$hasOwnProperty, $1a23d00bf5687ce4e5e77b927aa46879$var$propIsEnumerable, $1a23d00bf5687ce4e5e77b927aa46879$executed = false;
  function $1a23d00bf5687ce4e5e77b927aa46879$var$toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function $1a23d00bf5687ce4e5e77b927aa46879$var$shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc');
      // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }
      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }
      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      ('abcdefghijklmnopqrst').split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  function $1a23d00bf5687ce4e5e77b927aa46879$exec() {
    $1a23d00bf5687ce4e5e77b927aa46879$exports = {};
    $1a23d00bf5687ce4e5e77b927aa46879$var$getOwnPropertySymbols = Object.getOwnPropertySymbols;
    $1a23d00bf5687ce4e5e77b927aa46879$var$hasOwnProperty = Object.prototype.hasOwnProperty;
    $1a23d00bf5687ce4e5e77b927aa46879$var$propIsEnumerable = Object.prototype.propertyIsEnumerable;
    $1a23d00bf5687ce4e5e77b927aa46879$exports = $1a23d00bf5687ce4e5e77b927aa46879$var$shouldUseNative() ? Object.assign : function (target, source) {
      var from;
      var to = $1a23d00bf5687ce4e5e77b927aa46879$var$toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if ($1a23d00bf5687ce4e5e77b927aa46879$var$hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if ($1a23d00bf5687ce4e5e77b927aa46879$var$getOwnPropertySymbols) {
          symbols = $1a23d00bf5687ce4e5e77b927aa46879$var$getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if ($1a23d00bf5687ce4e5e77b927aa46879$var$propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
  function $1a23d00bf5687ce4e5e77b927aa46879$init() {
    if (!$1a23d00bf5687ce4e5e77b927aa46879$executed) {
      $1a23d00bf5687ce4e5e77b927aa46879$executed = true;
      $1a23d00bf5687ce4e5e77b927aa46879$exec();
    }
    return $1a23d00bf5687ce4e5e77b927aa46879$exports;
  }
  // ASSET: ../fluentui/node_modules/react/cjs/react.production.min.js
  var $5b6e0eaab4c5bd03d25dd9702032fb99$exports, $5b6e0eaab4c5bd03d25dd9702032fb99$var$k, $5b6e0eaab4c5bd03d25dd9702032fb99$var$n, $5b6e0eaab4c5bd03d25dd9702032fb99$var$p, $5b6e0eaab4c5bd03d25dd9702032fb99$var$q, $5b6e0eaab4c5bd03d25dd9702032fb99$var$r, $5b6e0eaab4c5bd03d25dd9702032fb99$var$t, $5b6e0eaab4c5bd03d25dd9702032fb99$var$u, $5b6e0eaab4c5bd03d25dd9702032fb99$var$v, $5b6e0eaab4c5bd03d25dd9702032fb99$var$w, $5b6e0eaab4c5bd03d25dd9702032fb99$var$x, $5b6e0eaab4c5bd03d25dd9702032fb99$var$y, $5b6e0eaab4c5bd03d25dd9702032fb99$var$z, $5b6e0eaab4c5bd03d25dd9702032fb99$var$aa, $5b6e0eaab4c5bd03d25dd9702032fb99$var$ba, $5b6e0eaab4c5bd03d25dd9702032fb99$var$A, $5b6e0eaab4c5bd03d25dd9702032fb99$var$C, $5b6e0eaab4c5bd03d25dd9702032fb99$var$D, $5b6e0eaab4c5bd03d25dd9702032fb99$var$H, $5b6e0eaab4c5bd03d25dd9702032fb99$var$I, $5b6e0eaab4c5bd03d25dd9702032fb99$var$J, $5b6e0eaab4c5bd03d25dd9702032fb99$var$K, $5b6e0eaab4c5bd03d25dd9702032fb99$var$L, $5b6e0eaab4c5bd03d25dd9702032fb99$var$O, $5b6e0eaab4c5bd03d25dd9702032fb99$var$P, $5b6e0eaab4c5bd03d25dd9702032fb99$var$X, $5b6e0eaab4c5bd03d25dd9702032fb99$var$Y, $5b6e0eaab4c5bd03d25dd9702032fb99$var$Z, $5b6e0eaab4c5bd03d25dd9702032fb99$executed = false;
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$ca(a, b, d, c, e, g, h, f) {
    if (!a) {
      a = void 0;
      if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
        var l = [d, c, e, g, h, f], m = 0;
        a = Error(b.replace(/%s/g, function () {
          return l[m++];
        }));
        a.name = "Invariant Violation";
      }
      a.framesToPop = 1;
      throw a;
    }
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$B(a) {
    for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) d += "&args[]=" + encodeURIComponent(arguments[c + 1]);
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$ca(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$E(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = $5b6e0eaab4c5bd03d25dd9702032fb99$var$D;
    this.updater = d || $5b6e0eaab4c5bd03d25dd9702032fb99$var$C;
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$F() {}
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$G(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = $5b6e0eaab4c5bd03d25dd9702032fb99$var$D;
    this.updater = d || $5b6e0eaab4c5bd03d25dd9702032fb99$var$C;
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$M(a, b, d) {
    var c = void 0, e = {}, g = null, h = null;
    if (null != b) for (c in (void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b)) $5b6e0eaab4c5bd03d25dd9702032fb99$var$K.call(b, c) && !$5b6e0eaab4c5bd03d25dd9702032fb99$var$L.hasOwnProperty(c) && (e[c] = b[c]);
    var f = arguments.length - 2;
    if (1 === f) e.children = d; else if (1 < f) {
      for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];
      e.children = l;
    }
    if (a && a.defaultProps) for (c in (f = a.defaultProps, f)) void 0 === e[c] && (e[c] = f[c]);
    return {
      $$typeof: $5b6e0eaab4c5bd03d25dd9702032fb99$var$p,
      type: a,
      key: g,
      ref: h,
      props: e,
      _owner: $5b6e0eaab4c5bd03d25dd9702032fb99$var$J.current
    };
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$da(a, b) {
    return {
      $$typeof: $5b6e0eaab4c5bd03d25dd9702032fb99$var$p,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    };
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$N(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $5b6e0eaab4c5bd03d25dd9702032fb99$var$p;
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$escape(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + ("" + a).replace(/[=:]/g, function (a) {
      return b[a];
    });
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$Q(a, b, d, c) {
    if ($5b6e0eaab4c5bd03d25dd9702032fb99$var$P.length) {
      var e = $5b6e0eaab4c5bd03d25dd9702032fb99$var$P.pop();
      e.result = a;
      e.keyPrefix = b;
      e.func = d;
      e.context = c;
      e.count = 0;
      return e;
    }
    return {
      result: a,
      keyPrefix: b,
      func: d,
      context: c,
      count: 0
    };
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$R(a) {
    a.result = null;
    a.keyPrefix = null;
    a.func = null;
    a.context = null;
    a.count = 0;
    10 > $5b6e0eaab4c5bd03d25dd9702032fb99$var$P.length && $5b6e0eaab4c5bd03d25dd9702032fb99$var$P.push(a);
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$S(a, b, d, c) {
    var e = typeof a;
    if ("undefined" === e || "boolean" === e) a = null;
    var g = !1;
    if (null === a) g = !0; else switch (e) {
      case "string":
      case "number":
        g = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case $5b6e0eaab4c5bd03d25dd9702032fb99$var$p:
          case $5b6e0eaab4c5bd03d25dd9702032fb99$var$q:
            g = !0;
        }
    }
    if (g) return (d(c, a, "" === b ? "." + $5b6e0eaab4c5bd03d25dd9702032fb99$var$T(a, 0) : b), 1);
    g = 0;
    b = "" === b ? "." : b + ":";
    if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
      e = a[h];
      var f = b + $5b6e0eaab4c5bd03d25dd9702032fb99$var$T(e, h);
      g += $5b6e0eaab4c5bd03d25dd9702032fb99$var$S(e, f, d, c);
    } else if ((null === a || "object" !== typeof a ? f = null : (f = $5b6e0eaab4c5bd03d25dd9702032fb99$var$A && a[$5b6e0eaab4c5bd03d25dd9702032fb99$var$A] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f)) for ((a = f.call(a), h = 0); !(e = a.next()).done; ) (e = e.value, f = b + $5b6e0eaab4c5bd03d25dd9702032fb99$var$T(e, h++), g += $5b6e0eaab4c5bd03d25dd9702032fb99$var$S(e, f, d, c)); else "object" === e && (d = "" + a, $5b6e0eaab4c5bd03d25dd9702032fb99$var$B("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));
    return g;
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$U(a, b, d) {
    return null == a ? 0 : $5b6e0eaab4c5bd03d25dd9702032fb99$var$S(a, "", b, d);
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$T(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $5b6e0eaab4c5bd03d25dd9702032fb99$var$escape(a.key) : b.toString(36);
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$ea(a, b) {
    a.func.call(a.context, b, a.count++);
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$fa(a, b, d) {
    var c = a.result, e = a.keyPrefix;
    a = a.func.call(a.context, b, a.count++);
    Array.isArray(a) ? $5b6e0eaab4c5bd03d25dd9702032fb99$var$V(a, c, d, function (a) {
      return a;
    }) : null != a && ($5b6e0eaab4c5bd03d25dd9702032fb99$var$N(a) && (a = $5b6e0eaab4c5bd03d25dd9702032fb99$var$da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace($5b6e0eaab4c5bd03d25dd9702032fb99$var$O, "$&/") + "/") + d)), c.push(a));
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$V(a, b, d, c, e) {
    var g = "";
    null != d && (g = ("" + d).replace($5b6e0eaab4c5bd03d25dd9702032fb99$var$O, "$&/") + "/");
    b = $5b6e0eaab4c5bd03d25dd9702032fb99$var$Q(b, g, c, e);
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$U(a, $5b6e0eaab4c5bd03d25dd9702032fb99$var$fa, b);
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$R(b);
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$var$W() {
    var a = $5b6e0eaab4c5bd03d25dd9702032fb99$var$I.current;
    null === a ? $5b6e0eaab4c5bd03d25dd9702032fb99$var$B("321") : void 0;
    return a;
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$exec() {
    $5b6e0eaab4c5bd03d25dd9702032fb99$exports = {};
    ($5b6e0eaab4c5bd03d25dd9702032fb99$var$k = $1a23d00bf5687ce4e5e77b927aa46879$init(), $5b6e0eaab4c5bd03d25dd9702032fb99$var$n = "function" === typeof Symbol && Symbol.for, $5b6e0eaab4c5bd03d25dd9702032fb99$var$p = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.element") : 60103, $5b6e0eaab4c5bd03d25dd9702032fb99$var$q = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.portal") : 60106, $5b6e0eaab4c5bd03d25dd9702032fb99$var$r = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.fragment") : 60107, $5b6e0eaab4c5bd03d25dd9702032fb99$var$t = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.strict_mode") : 60108, $5b6e0eaab4c5bd03d25dd9702032fb99$var$u = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.profiler") : 60114, $5b6e0eaab4c5bd03d25dd9702032fb99$var$v = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.provider") : 60109, $5b6e0eaab4c5bd03d25dd9702032fb99$var$w = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.context") : 60110, $5b6e0eaab4c5bd03d25dd9702032fb99$var$x = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.concurrent_mode") : 60111, $5b6e0eaab4c5bd03d25dd9702032fb99$var$y = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.forward_ref") : 60112, $5b6e0eaab4c5bd03d25dd9702032fb99$var$z = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.suspense") : 60113, $5b6e0eaab4c5bd03d25dd9702032fb99$var$aa = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.memo") : 60115, $5b6e0eaab4c5bd03d25dd9702032fb99$var$ba = $5b6e0eaab4c5bd03d25dd9702032fb99$var$n ? Symbol.for("react.lazy") : 60116, $5b6e0eaab4c5bd03d25dd9702032fb99$var$A = "function" === typeof Symbol && Symbol.iterator);
    ($5b6e0eaab4c5bd03d25dd9702032fb99$var$C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    }, $5b6e0eaab4c5bd03d25dd9702032fb99$var$D = {});
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$E.prototype.isReactComponent = {};
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$E.prototype.setState = function (a, b) {
      "object" !== typeof a && "function" !== typeof a && null != a ? $5b6e0eaab4c5bd03d25dd9702032fb99$var$B("85") : void 0;
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$E.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$F.prototype = $5b6e0eaab4c5bd03d25dd9702032fb99$var$E.prototype;
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$H = $5b6e0eaab4c5bd03d25dd9702032fb99$var$G.prototype = new $5b6e0eaab4c5bd03d25dd9702032fb99$var$F();
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$H.constructor = $5b6e0eaab4c5bd03d25dd9702032fb99$var$G;
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$k($5b6e0eaab4c5bd03d25dd9702032fb99$var$H, $5b6e0eaab4c5bd03d25dd9702032fb99$var$E.prototype);
    $5b6e0eaab4c5bd03d25dd9702032fb99$var$H.isPureReactComponent = !0;
    ($5b6e0eaab4c5bd03d25dd9702032fb99$var$I = {
      current: null
    }, $5b6e0eaab4c5bd03d25dd9702032fb99$var$J = {
      current: null
    }, $5b6e0eaab4c5bd03d25dd9702032fb99$var$K = Object.prototype.hasOwnProperty, $5b6e0eaab4c5bd03d25dd9702032fb99$var$L = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    });
    ($5b6e0eaab4c5bd03d25dd9702032fb99$var$O = /\/+/g, $5b6e0eaab4c5bd03d25dd9702032fb99$var$P = []);
    ($5b6e0eaab4c5bd03d25dd9702032fb99$var$X = {
      Children: {
        map: function (a, b, d) {
          if (null == a) return a;
          var c = [];
          $5b6e0eaab4c5bd03d25dd9702032fb99$var$V(a, c, null, b, d);
          return c;
        },
        forEach: function (a, b, d) {
          if (null == a) return a;
          b = $5b6e0eaab4c5bd03d25dd9702032fb99$var$Q(null, null, b, d);
          $5b6e0eaab4c5bd03d25dd9702032fb99$var$U(a, $5b6e0eaab4c5bd03d25dd9702032fb99$var$ea, b);
          $5b6e0eaab4c5bd03d25dd9702032fb99$var$R(b);
        },
        count: function (a) {
          return $5b6e0eaab4c5bd03d25dd9702032fb99$var$U(a, function () {
            return null;
          }, null);
        },
        toArray: function (a) {
          var b = [];
          $5b6e0eaab4c5bd03d25dd9702032fb99$var$V(a, b, null, function (a) {
            return a;
          });
          return b;
        },
        only: function (a) {
          $5b6e0eaab4c5bd03d25dd9702032fb99$var$N(a) ? void 0 : $5b6e0eaab4c5bd03d25dd9702032fb99$var$B("143");
          return a;
        }
      },
      createRef: function () {
        return {
          current: null
        };
      },
      Component: $5b6e0eaab4c5bd03d25dd9702032fb99$var$E,
      PureComponent: $5b6e0eaab4c5bd03d25dd9702032fb99$var$G,
      createContext: function (a, b) {
        void 0 === b && (b = null);
        a = {
          $$typeof: $5b6e0eaab4c5bd03d25dd9702032fb99$var$w,
          _calculateChangedBits: b,
          _currentValue: a,
          _currentValue2: a,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        a.Provider = {
          $$typeof: $5b6e0eaab4c5bd03d25dd9702032fb99$var$v,
          _context: a
        };
        return a.Consumer = a;
      },
      forwardRef: function (a) {
        return {
          $$typeof: $5b6e0eaab4c5bd03d25dd9702032fb99$var$y,
          render: a
        };
      },
      lazy: function (a) {
        return {
          $$typeof: $5b6e0eaab4c5bd03d25dd9702032fb99$var$ba,
          _ctor: a,
          _status: -1,
          _result: null
        };
      },
      memo: function (a, b) {
        return {
          $$typeof: $5b6e0eaab4c5bd03d25dd9702032fb99$var$aa,
          type: a,
          compare: void 0 === b ? null : b
        };
      },
      useCallback: function (a, b) {
        return $5b6e0eaab4c5bd03d25dd9702032fb99$var$W().useCallback(a, b);
      },
      useContext: function (a, b) {
        return $5b6e0eaab4c5bd03d25dd9702032fb99$var$W().useContext(a, b);
      },
      useEffect: function (a, b) {
        return $5b6e0eaab4c5bd03d25dd9702032fb99$var$W().useEffect(a, b);
      },
      useImperativeHandle: function (a, b, d) {
        return $5b6e0eaab4c5bd03d25dd9702032fb99$var$W().useImperativeHandle(a, b, d);
      },
      useDebugValue: function () {},
      useLayoutEffect: function (a, b) {
        return $5b6e0eaab4c5bd03d25dd9702032fb99$var$W().useLayoutEffect(a, b);
      },
      useMemo: function (a, b) {
        return $5b6e0eaab4c5bd03d25dd9702032fb99$var$W().useMemo(a, b);
      },
      useReducer: function (a, b, d) {
        return $5b6e0eaab4c5bd03d25dd9702032fb99$var$W().useReducer(a, b, d);
      },
      useRef: function (a) {
        return $5b6e0eaab4c5bd03d25dd9702032fb99$var$W().useRef(a);
      },
      useState: function (a) {
        return $5b6e0eaab4c5bd03d25dd9702032fb99$var$W().useState(a);
      },
      Fragment: $5b6e0eaab4c5bd03d25dd9702032fb99$var$r,
      StrictMode: $5b6e0eaab4c5bd03d25dd9702032fb99$var$t,
      Suspense: $5b6e0eaab4c5bd03d25dd9702032fb99$var$z,
      createElement: $5b6e0eaab4c5bd03d25dd9702032fb99$var$M,
      cloneElement: function (a, b, d) {
        null === a || void 0 === a ? $5b6e0eaab4c5bd03d25dd9702032fb99$var$B("267", a) : void 0;
        var c = void 0, e = $5b6e0eaab4c5bd03d25dd9702032fb99$var$k({}, a.props), g = a.key, h = a.ref, f = a._owner;
        if (null != b) {
          void 0 !== b.ref && (h = b.ref, f = $5b6e0eaab4c5bd03d25dd9702032fb99$var$J.current);
          void 0 !== b.key && (g = "" + b.key);
          var l = void 0;
          a.type && a.type.defaultProps && (l = a.type.defaultProps);
          for (c in b) $5b6e0eaab4c5bd03d25dd9702032fb99$var$K.call(b, c) && !$5b6e0eaab4c5bd03d25dd9702032fb99$var$L.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
        }
        c = arguments.length - 2;
        if (1 === c) e.children = d; else if (1 < c) {
          l = Array(c);
          for (var m = 0; m < c; m++) l[m] = arguments[m + 2];
          e.children = l;
        }
        return {
          $$typeof: $5b6e0eaab4c5bd03d25dd9702032fb99$var$p,
          type: a.type,
          key: g,
          ref: h,
          props: e,
          _owner: f
        };
      },
      createFactory: function (a) {
        var b = $5b6e0eaab4c5bd03d25dd9702032fb99$var$M.bind(null, a);
        b.type = a;
        return b;
      },
      isValidElement: $5b6e0eaab4c5bd03d25dd9702032fb99$var$N,
      version: "16.8.6",
      unstable_ConcurrentMode: $5b6e0eaab4c5bd03d25dd9702032fb99$var$x,
      unstable_Profiler: $5b6e0eaab4c5bd03d25dd9702032fb99$var$u,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentDispatcher: $5b6e0eaab4c5bd03d25dd9702032fb99$var$I,
        ReactCurrentOwner: $5b6e0eaab4c5bd03d25dd9702032fb99$var$J,
        assign: $5b6e0eaab4c5bd03d25dd9702032fb99$var$k
      }
    }, $5b6e0eaab4c5bd03d25dd9702032fb99$var$Y = {
      default: $5b6e0eaab4c5bd03d25dd9702032fb99$var$X
    }, $5b6e0eaab4c5bd03d25dd9702032fb99$var$Z = $5b6e0eaab4c5bd03d25dd9702032fb99$var$Y && $5b6e0eaab4c5bd03d25dd9702032fb99$var$X || $5b6e0eaab4c5bd03d25dd9702032fb99$var$Y);
    $5b6e0eaab4c5bd03d25dd9702032fb99$exports = $5b6e0eaab4c5bd03d25dd9702032fb99$var$Z.default || $5b6e0eaab4c5bd03d25dd9702032fb99$var$Z;
  }
  function $5b6e0eaab4c5bd03d25dd9702032fb99$init() {
    if (!$5b6e0eaab4c5bd03d25dd9702032fb99$executed) {
      $5b6e0eaab4c5bd03d25dd9702032fb99$executed = true;
      $5b6e0eaab4c5bd03d25dd9702032fb99$exec();
    }
    return $5b6e0eaab4c5bd03d25dd9702032fb99$exports;
  }
  // ASSET: ../fluentui/node_modules/react/index.js
  var $7865d8bc84b1f78883e4d120fd0979d0$exports = {};
  if ("production" === 'production') {
    $7865d8bc84b1f78883e4d120fd0979d0$exports = $5b6e0eaab4c5bd03d25dd9702032fb99$init();
  } else {
    $7865d8bc84b1f78883e4d120fd0979d0$exports = require('./cjs/react.development.js');
  }
  // ASSET: ../fluentui/packages/utilities/lib/customizations/useCustomizationSettings.js
  var $049fffe6f3499450599139f870efd45c$exports = {};
  // ASSET: ../fluentui/packages/utilities/lib/customizations/CustomizerContext.js
  var $045f1c0c791588c888023c77713730f1$exports = {};
  var $045f1c0c791588c888023c77713730f1$export$CustomizerContext = /*#__PURE__*/$7865d8bc84b1f78883e4d120fd0979d0$exports.createContext({
    customizations: {
      inCustomizerContext: false,
      settings: {},
      scopedSettings: {}
    }
  });
  $parcel$export($045f1c0c791588c888023c77713730f1$exports, "CustomizerContext", function () {
    return $045f1c0c791588c888023c77713730f1$export$CustomizerContext;
  });
  /**
  * Hook to get Customizations settings from Customizations singleton or CustomizerContext.
  * It will trigger component state update on settings change observed.
  */
  function $049fffe6f3499450599139f870efd45c$export$useCustomizationSettings(properties, scopeName) {
    var forceUpdate = $049fffe6f3499450599139f870efd45c$var$useForceUpdate();
    var customizations = $7865d8bc84b1f78883e4d120fd0979d0$exports.useContext($045f1c0c791588c888023c77713730f1$export$CustomizerContext).customizations;
    var inCustomizerContext = customizations.inCustomizerContext;
    $7865d8bc84b1f78883e4d120fd0979d0$exports.useEffect(function () {
      if (!inCustomizerContext) {
        $020fb4649d01f912887f5a17b3fe9e45$export$Customizations.observe(forceUpdate);
      }
      return function () {
        if (!inCustomizerContext) {
          $020fb4649d01f912887f5a17b3fe9e45$export$Customizations.unobserve(forceUpdate);
        }
      };
    }, [inCustomizerContext]);
    return $020fb4649d01f912887f5a17b3fe9e45$export$Customizations.getSettings(properties, scopeName, customizations);
  }
  $parcel$export($049fffe6f3499450599139f870efd45c$exports, "useCustomizationSettings", function () {
    return $049fffe6f3499450599139f870efd45c$export$useCustomizationSettings;
  });
  function $049fffe6f3499450599139f870efd45c$var$useForceUpdate() {
    var _a = $7865d8bc84b1f78883e4d120fd0979d0$exports.useState(0), setValue = _a[1];
    return function () {
      return setValue(function (value) {
        return ++value;
      });
    };
  }
  var $ff2c11dc65d0e1b40037e86c0fd4bc22$var$DefaultFields = ['theme', 'styles'];
  function $ff2c11dc65d0e1b40037e86c0fd4bc22$export$styled(Component, baseStyles, getProps, customizable, pure) {
    customizable = customizable || ({
      scope: '',
      fields: undefined
    });
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? $ff2c11dc65d0e1b40037e86c0fd4bc22$var$DefaultFields : _a;
    var Wrapped = /*#__PURE__*/$7865d8bc84b1f78883e4d120fd0979d0$exports.forwardRef(function (props, forwardedRef) {
      var styles = $7865d8bc84b1f78883e4d120fd0979d0$exports.useRef();
      var settings = $049fffe6f3499450599139f870efd45c$export$useCustomizationSettings(fields, scope);
      var customizedStyles = settings.styles, dir = settings.dir, rest = $d309954a712b99875da1746509963c49$export$__rest(settings, ["styles", "dir"]);
      var additionalProps = getProps ? getProps(props) : undefined;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var cache = styles.current && styles.current.__cachedInputs__ || [];
      if (!styles.current || customizedStyles !== cache[1] || props.styles !== cache[2]) {
        // Using styled components as the Component arg will result in nested styling arrays.
        var concatenatedStyles = function (styleProps) {
          return $ce35b49e34c1a24c9ea2944a469f5ee4$export$concatStyleSetsWithProps(styleProps, baseStyles, customizedStyles, props.styles);
        };
        // The __cachedInputs__ array is attached to the function and consumed by the
        // classNamesFunction as a list of keys to include for memoizing classnames.
        concatenatedStyles.__cachedInputs__ = [baseStyles, customizedStyles, props.styles];
        concatenatedStyles.__noStyleOverride__ = !customizedStyles && !props.styles;
        styles.current = concatenatedStyles;
      }
      return (
        /*#__PURE__*/$7865d8bc84b1f78883e4d120fd0979d0$exports.createElement(Component, $d309954a712b99875da1746509963c49$export$__assign({
          ref: forwardedRef
        }, rest, additionalProps, props, {
          styles: styles.current
        }))
      );
    });
    // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
    // able to drop IE 11 support and compile with ES6 libs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
    // This preserves backwards compatibility.
    var pureComponent = pure ? /*#__PURE__*/$7865d8bc84b1f78883e4d120fd0979d0$exports.memo(Wrapped) : Wrapped;
    // Check if the wrapper has a displayName after it has been memoized. Then assign it to the pure component.
    if (Wrapped.displayName) {
      pureComponent.displayName = Wrapped.displayName;
    }
    return pureComponent;
  }
  $parcel$export($ff2c11dc65d0e1b40037e86c0fd4bc22$exports, "styled", function () {
    return $ff2c11dc65d0e1b40037e86c0fd4bc22$export$styled;
  });
  $88b07b32ddbb6d7734b3f9e72ca6a8ff$export$setVersion('@fluentui/utilities', '0.0.0');
  var $e76a8fc82fe27e77c6cbcfa7862f3dac$var$getClassNames = $18ce312ff00db69536a6c7a9d9c00af0$export$classNamesFunction();
  var $e76a8fc82fe27e77c6cbcfa7862f3dac$export$OverlayBase = /** @class*/
  (function (_super) {
    $d309954a712b99875da1746509963c49$export$__extends(OverlayBase, _super);
    function OverlayBase(props) {
      var _this = _super.call(this, props) || this;
      $1e38bedf374e9ab61273a38da8f4e67d$export$initializeComponentRef(_this);
      var _a = _this.props.allowTouchBodyScroll, allowTouchBodyScroll = _a === void 0 ? false : _a;
      _this._allowTouchBodyScroll = allowTouchBodyScroll;
      return _this;
    }
    OverlayBase.prototype.componentDidMount = function () {
      !this._allowTouchBodyScroll && $de24969296e924bd0bf28b8bbdd3fc78$export$disableBodyScroll();
    };
    OverlayBase.prototype.componentWillUnmount = function () {
      !this._allowTouchBodyScroll && $de24969296e924bd0bf28b8bbdd3fc78$export$enableBodyScroll();
    };
    OverlayBase.prototype.render = function () {
      var _a = this.props, isDark = _a.isDarkThemed, className = _a.className, theme = _a.theme, styles = _a.styles;
      var divProps = $fafbe2bec0de6c1d68af4da64df9a0f3$export$getNativeProps(this.props, $fafbe2bec0de6c1d68af4da64df9a0f3$export$divProperties);
      var classNames = $e76a8fc82fe27e77c6cbcfa7862f3dac$var$getClassNames(styles, {
        theme: theme,
        className: className,
        isDark: isDark
      });
      return (
        /*#__PURE__*/$7865d8bc84b1f78883e4d120fd0979d0$exports.createElement("div", $d309954a712b99875da1746509963c49$export$__assign({}, divProps, {
          className: classNames.root
        }))
      );
    };
    return OverlayBase;
  })($7865d8bc84b1f78883e4d120fd0979d0$exports.Component);
  // ASSET: ../fluentui/packages/style-utilities/lib/index.js
  var $ddbc11bb1bf06a101dde7a9e8b33faf5$exports = {};
  $parcel$exportWildcard($ddbc11bb1bf06a101dde7a9e8b33faf5$exports, {});
  /**
  * Internal memoized function which simply takes in the class map and the
  * disable boolean. These immutable values can be memoized.
  */
  var $05cd8062066764a6a85d23591cb88258$var$_getGlobalClassNames = $9372f588c8c4013f0651c8eb435c7bd3$export$memoizeFunction(function (classNames, disableGlobalClassNames) {
    var styleSheet = $20233f3e6eb05d273c88b635250f1a84$export$Stylesheet.getInstance();
    if (disableGlobalClassNames) {
      // disable global classnames
      return Object.keys(classNames).reduce(function (acc, className) {
        acc[className] = styleSheet.getClassName(classNames[className]);
        return acc;
      }, {});
    }
    // use global classnames
    return classNames;
  });
  /**
  * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
  * Note that calls to this function are memoized.
  *
  * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
  * the same instance on each call to benefit from memoization.
  * @param theme - The theme to check the flag on
  * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
  */
  function $05cd8062066764a6a85d23591cb88258$export$getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
    return $05cd8062066764a6a85d23591cb88258$var$_getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
  }
  // ASSET: ../fluentui/packages/style-utilities/lib/styles/CommonStyles.js
  var $e75690e9d7bfd8c1a324b1baf268dacb$exports = {};
  var $e75690e9d7bfd8c1a324b1baf268dacb$export$HighContrastSelector = '@media screen and (-ms-high-contrast: active), (forced-colors: active)';
  $parcel$export($e75690e9d7bfd8c1a324b1baf268dacb$exports, "HighContrastSelector", function () {
    return $e75690e9d7bfd8c1a324b1baf268dacb$export$HighContrastSelector;
  });
  var $e75690e9d7bfd8c1a324b1baf268dacb$export$EdgeChromiumHighContrastSelector = '@media screen and (forced-colors: active)';
  var $e75690e9d7bfd8c1a324b1baf268dacb$export$ScreenWidthMinMedium = 480;
  var $e75690e9d7bfd8c1a324b1baf268dacb$export$ScreenWidthMinLarge = 640;
  var $e75690e9d7bfd8c1a324b1baf268dacb$export$ScreenWidthMinXLarge = 1024;
  var $e75690e9d7bfd8c1a324b1baf268dacb$export$ScreenWidthMinXXLarge = 1366;
  var $e75690e9d7bfd8c1a324b1baf268dacb$export$ScreenWidthMinXXXLarge = 1920;
  $parcel$exportWildcard($ddbc11bb1bf06a101dde7a9e8b33faf5$exports, $b4096c5ae580a5766e02250b3f1a7723$exports);
  $parcel$exportWildcard($ddbc11bb1bf06a101dde7a9e8b33faf5$exports, {});
  $parcel$exportWildcard($ddbc11bb1bf06a101dde7a9e8b33faf5$exports, {});
  $88b07b32ddbb6d7734b3f9e72ca6a8ff$export$setVersion('@fluentui/style-utilities', '0.0.0');
  // ASSET: ../fluentui/node_modules/@microsoft/load-themed-styles/lib-es6/index.js
  var $c768540aaa25f90d9e39a9426054b579$exports = {};
  /**
  * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
  * to use if that slot is not specified by the theme.
  */
  var $c768540aaa25f90d9e39a9426054b579$var$__assign = undefined && undefined.__assign || (function () {
    $c768540aaa25f90d9e39a9426054b579$var$__assign = Object.assign || (function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    });
    return $c768540aaa25f90d9e39a9426054b579$var$__assign.apply(this, arguments);
  });
  // Store the theming state in __themeState__ global scope for reuse in the case of duplicate
  // load-themed-styles hosted on the page.
  var $c768540aaa25f90d9e39a9426054b579$var$_root = typeof window === 'undefined' ? $parcel$global : window;
  // eslint-disable-line @typescript-eslint/no-explicit-any
  // Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
  var $c768540aaa25f90d9e39a9426054b579$var$_styleNonce = $c768540aaa25f90d9e39a9426054b579$var$_root && $c768540aaa25f90d9e39a9426054b579$var$_root.CSPSettings && $c768540aaa25f90d9e39a9426054b579$var$_root.CSPSettings.nonce;
  var $c768540aaa25f90d9e39a9426054b579$var$_themeState = $c768540aaa25f90d9e39a9426054b579$var$initializeThemeState();
  /**
  * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
  */
  var $c768540aaa25f90d9e39a9426054b579$var$_themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
  var $c768540aaa25f90d9e39a9426054b579$var$now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
  };
  function $c768540aaa25f90d9e39a9426054b579$var$measure(func) {
    var start = $c768540aaa25f90d9e39a9426054b579$var$now();
    func();
    var end = $c768540aaa25f90d9e39a9426054b579$var$now();
    $c768540aaa25f90d9e39a9426054b579$var$_themeState.perf.duration += end - start;
  }
  /**
  * initialize global state object
  */
  function $c768540aaa25f90d9e39a9426054b579$var$initializeThemeState() {
    var state = $c768540aaa25f90d9e39a9426054b579$var$_root.__themeState__ || ({
      theme: undefined,
      lastStyleElement: undefined,
      registeredStyles: []
    });
    if (!state.runState) {
      state = $c768540aaa25f90d9e39a9426054b579$var$__assign({}, state, {
        perf: {
          count: 0,
          duration: 0
        },
        runState: {
          flushTimer: 0,
          mode: 0,
          /*sync*/
          buffer: []
        }
      });
    }
    if (!state.registeredThemableStyles) {
      state = $c768540aaa25f90d9e39a9426054b579$var$__assign({}, state, {
        registeredThemableStyles: []
      });
    }
    $c768540aaa25f90d9e39a9426054b579$var$_root.__themeState__ = state;
    return state;
  }
  /**
  * Loads a set of style text. If it is registered too early, we will register it when the window.load
  * event is fired.
  * @param {string | ThemableArray} styles Themable style text to register.
  * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
  */
  function $c768540aaa25f90d9e39a9426054b579$export$loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) {
      loadAsync = false;
    }
    $c768540aaa25f90d9e39a9426054b579$var$measure(function () {
      var styleParts = Array.isArray(styles) ? styles : $c768540aaa25f90d9e39a9426054b579$export$splitStyles(styles);
      var _a = $c768540aaa25f90d9e39a9426054b579$var$_themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
      if (loadAsync || mode === 1) /*async*/
      {
        buffer.push(styleParts);
        if (!flushTimer) {
          $c768540aaa25f90d9e39a9426054b579$var$_themeState.runState.flushTimer = $c768540aaa25f90d9e39a9426054b579$var$asyncLoadStyles();
        }
      } else {
        $c768540aaa25f90d9e39a9426054b579$var$applyThemableStyles(styleParts);
      }
    });
  }
  $parcel$export($c768540aaa25f90d9e39a9426054b579$exports, "loadStyles", function () {
    return $c768540aaa25f90d9e39a9426054b579$export$loadStyles;
  });
  /**
  * Allows for customizable loadStyles logic. e.g. for server side rendering application
  * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
  * a loadStyles callback that gets called when styles are loaded or reloaded
  */
  function $c768540aaa25f90d9e39a9426054b579$export$configureLoadStyles(loadStylesFn) {
    $c768540aaa25f90d9e39a9426054b579$var$_themeState.loadStyles = loadStylesFn;
  }
  /**
  * Configure run mode of load-themable-styles
  * @param mode load-themable-styles run mode, async or sync
  */
  function $c768540aaa25f90d9e39a9426054b579$export$configureRunMode(mode) {
    $c768540aaa25f90d9e39a9426054b579$var$_themeState.runState.mode = mode;
  }
  /**
  * external code can call flush to synchronously force processing of currently buffered styles
  */
  function $c768540aaa25f90d9e39a9426054b579$export$flush() {
    $c768540aaa25f90d9e39a9426054b579$var$measure(function () {
      var styleArrays = $c768540aaa25f90d9e39a9426054b579$var$_themeState.runState.buffer.slice();
      $c768540aaa25f90d9e39a9426054b579$var$_themeState.runState.buffer = [];
      var mergedStyleArray = [].concat.apply([], styleArrays);
      if (mergedStyleArray.length > 0) {
        $c768540aaa25f90d9e39a9426054b579$var$applyThemableStyles(mergedStyleArray);
      }
    });
  }
  /**
  * register async loadStyles
  */
  function $c768540aaa25f90d9e39a9426054b579$var$asyncLoadStyles() {
    return setTimeout(function () {
      $c768540aaa25f90d9e39a9426054b579$var$_themeState.runState.flushTimer = 0;
      $c768540aaa25f90d9e39a9426054b579$export$flush();
    }, 0);
  }
  /**
  * Loads a set of style text. If it is registered too early, we will register it when the window.load event
  * is fired.
  * @param {string} styleText Style to register.
  * @param {IStyleRecord} styleRecord Existing style record to re-apply.
  */
  function $c768540aaa25f90d9e39a9426054b579$var$applyThemableStyles(stylesArray, styleRecord) {
    if ($c768540aaa25f90d9e39a9426054b579$var$_themeState.loadStyles) {
      $c768540aaa25f90d9e39a9426054b579$var$_themeState.loadStyles($c768540aaa25f90d9e39a9426054b579$var$resolveThemableArray(stylesArray).styleString, stylesArray);
    } else {
      $c768540aaa25f90d9e39a9426054b579$var$registerStyles(stylesArray);
    }
  }
  /**
  * Registers a set theme tokens to find and replace. If styles were already registered, they will be
  * replaced.
  * @param {theme} theme JSON object of theme tokens to values.
  */
  function $c768540aaa25f90d9e39a9426054b579$export$loadTheme(theme) {
    $c768540aaa25f90d9e39a9426054b579$var$_themeState.theme = theme;
    // reload styles.
    $c768540aaa25f90d9e39a9426054b579$var$reloadStyles();
  }
  $parcel$export($c768540aaa25f90d9e39a9426054b579$exports, "loadTheme", function () {
    return $c768540aaa25f90d9e39a9426054b579$export$loadTheme;
  });
  /**
  * Clear already registered style elements and style records in theme_State object
  * @param option - specify which group of registered styles should be cleared.
  * Default to be both themable and non-themable styles will be cleared
  */
  function $c768540aaa25f90d9e39a9426054b579$export$clearStyles(option) {
    if (option === void 0) {
      option = 3;
    }
    if (option === 3 || /*all*/
    option === 2) /*onlyNonThemable*/
    {
      $c768540aaa25f90d9e39a9426054b579$var$clearStylesInternal($c768540aaa25f90d9e39a9426054b579$var$_themeState.registeredStyles);
      $c768540aaa25f90d9e39a9426054b579$var$_themeState.registeredStyles = [];
    }
    if (option === 3 || /*all*/
    option === 1) /*onlyThemable*/
    {
      $c768540aaa25f90d9e39a9426054b579$var$clearStylesInternal($c768540aaa25f90d9e39a9426054b579$var$_themeState.registeredThemableStyles);
      $c768540aaa25f90d9e39a9426054b579$var$_themeState.registeredThemableStyles = [];
    }
  }
  function $c768540aaa25f90d9e39a9426054b579$var$clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
      var styleElement = styleRecord && styleRecord.styleElement;
      if (styleElement && styleElement.parentElement) {
        styleElement.parentElement.removeChild(styleElement);
      }
    });
  }
  /**
  * Reloads styles.
  */
  function $c768540aaa25f90d9e39a9426054b579$var$reloadStyles() {
    if ($c768540aaa25f90d9e39a9426054b579$var$_themeState.theme) {
      var themableStyles = [];
      for (var _i = 0, _a = $c768540aaa25f90d9e39a9426054b579$var$_themeState.registeredThemableStyles; _i < _a.length; _i++) {
        var styleRecord = _a[_i];
        themableStyles.push(styleRecord.themableStyle);
      }
      if (themableStyles.length > 0) {
        $c768540aaa25f90d9e39a9426054b579$export$clearStyles(1);
        $c768540aaa25f90d9e39a9426054b579$var$applyThemableStyles([].concat.apply([], themableStyles));
      }
    }
  }
  /**
  * Find theme tokens and replaces them with provided theme values.
  * @param {string} styles Tokenized styles to fix.
  */
  function $c768540aaa25f90d9e39a9426054b579$export$detokenize(styles) {
    if (styles) {
      styles = $c768540aaa25f90d9e39a9426054b579$var$resolveThemableArray($c768540aaa25f90d9e39a9426054b579$export$splitStyles(styles)).styleString;
    }
    return styles;
  }
  /**
  * Resolves ThemingInstruction objects in an array and joins the result into a string.
  * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
  */
  function $c768540aaa25f90d9e39a9426054b579$var$resolveThemableArray(splitStyleArray) {
    var theme = $c768540aaa25f90d9e39a9426054b579$var$_themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
      var themeSlot = currentValue.theme;
      if (themeSlot) {
        themable = true;
        // A theming annotation. Resolve it.
        var themedValue = theme ? theme[themeSlot] : undefined;
        var defaultValue = currentValue.defaultValue || 'inherit';
        // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
        // Allow the themedValue to be undefined to explicitly request the default value.
        if (theme && !themedValue && console && !((themeSlot in theme)) && typeof DEBUG !== 'undefined' && DEBUG) {
          console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
        }
        return themedValue || defaultValue;
      } else {
        // A non-themable string. Preserve it.
        return currentValue.rawString;
      }
    });
    return {
      styleString: resolvedArray.join(''),
      themable: themable
    };
  }
  /**
  * Split tokenized CSS into an array of strings and theme specification objects
  * @param {string} styles Tokenized styles to split.
  */
  function $c768540aaa25f90d9e39a9426054b579$export$splitStyles(styles) {
    var result = [];
    if (styles) {
      var pos = 0;
      // Current position in styles.
      var tokenMatch = void 0;
      // eslint-disable-line no-restricted-syntax
      while (tokenMatch = $c768540aaa25f90d9e39a9426054b579$var$_themeTokenRegex.exec(styles)) {
        var matchIndex = tokenMatch.index;
        if (matchIndex > pos) {
          result.push({
            rawString: styles.substring(pos, matchIndex)
          });
        }
        result.push({
          theme: tokenMatch[1],
          defaultValue: tokenMatch[2]
        });
        // index of the first character after the current match
        pos = $c768540aaa25f90d9e39a9426054b579$var$_themeTokenRegex.lastIndex;
      }
      // Push the rest of the string after the last match.
      result.push({
        rawString: styles.substring(pos)
      });
    }
    return result;
  }
  /**
  * Registers a set of style text. If it is registered too early, we will register it when the
  * window.load event is fired.
  * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
  * @param {IStyleRecord} styleRecord May specify a style Element to update.
  */
  function $c768540aaa25f90d9e39a9426054b579$var$registerStyles(styleArray) {
    if (typeof document === 'undefined') {
      return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = $c768540aaa25f90d9e39a9426054b579$var$resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    styleElement.type = 'text/css';
    if ($c768540aaa25f90d9e39a9426054b579$var$_styleNonce) {
      styleElement.setAttribute('nonce', $c768540aaa25f90d9e39a9426054b579$var$_styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    $c768540aaa25f90d9e39a9426054b579$var$_themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true, /*bubbleEvent*/
    false);
    ev.args = {
      newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
      styleElement: styleElement,
      themableStyle: styleArray
    };
    if (themable) {
      $c768540aaa25f90d9e39a9426054b579$var$_themeState.registeredThemableStyles.push(record);
    } else {
      $c768540aaa25f90d9e39a9426054b579$var$_themeState.registeredStyles.push(record);
    }
  }
  // ASSET: ../fluentui/packages/theme/lib/createTheme.js
  var $18d6fedb1e9a0c9136f1f19113418d89$exports = {};
  // ASSET: ../fluentui/packages/theme/lib/colors/DefaultPalette.js
  var $fa36c7c8fa0fa4c3a543e3ed11701131$exports = {};
  // When adding or removing a color, make sure you keep this consistent with IColorClassNames
  // by adding the color variants.
  var $fa36c7c8fa0fa4c3a543e3ed11701131$export$DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#201f1e',
    neutralPrimary: '#323130',
    neutralPrimaryAlt: '#3b3a39',
    neutralSecondary: '#605e5c',
    neutralSecondaryAlt: '#8a8886',
    neutralTertiary: '#a19f9d',
    neutralTertiaryAlt: '#c8c6c4',
    neutralQuaternary: '#d2d0ce',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralLight: '#edebe9',
    neutralLighter: '#f3f2f1',
    neutralLighterAlt: '#faf9f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellowDark: '#d29200',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a4262c',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a'
  };
  $parcel$export($fa36c7c8fa0fa4c3a543e3ed11701131$exports, "DefaultPalette", function () {
    return $fa36c7c8fa0fa4c3a543e3ed11701131$export$DefaultPalette;
  });
  // ASSET: ../fluentui/packages/theme/lib/effects/DefaultEffects.js
  var $5e3b9b7bb1bd856c0fcd6385c7a0a77e$exports = {};
  var $6d631abe7f96d5e4f28a61e50b9395f1$export$Depths;
  (function (Depths) {
    Depths.depth0 = '0 0 0 0 transparent';
    Depths.depth4 = '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth8 = '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth16 = '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth64 = '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)';
  })($6d631abe7f96d5e4f28a61e50b9395f1$export$Depths || ($6d631abe7f96d5e4f28a61e50b9395f1$export$Depths = {}));
  var $5e3b9b7bb1bd856c0fcd6385c7a0a77e$export$DefaultEffects = {
    elevation4: $6d631abe7f96d5e4f28a61e50b9395f1$export$Depths.depth4,
    elevation8: $6d631abe7f96d5e4f28a61e50b9395f1$export$Depths.depth8,
    elevation16: $6d631abe7f96d5e4f28a61e50b9395f1$export$Depths.depth16,
    elevation64: $6d631abe7f96d5e4f28a61e50b9395f1$export$Depths.depth64,
    roundedCorner2: '2px',
    roundedCorner4: '4px',
    roundedCorner6: '6px'
  };
  $parcel$export($5e3b9b7bb1bd856c0fcd6385c7a0a77e$exports, "DefaultEffects", function () {
    return $5e3b9b7bb1bd856c0fcd6385c7a0a77e$export$DefaultEffects;
  });
  // ASSET: ../fluentui/packages/theme/lib/fonts/DefaultFontStyles.js
  var $2e4650943ca49591d6b38b1122af77d9$exports = {};
  // ASSET: ../fluentui/packages/theme/lib/fonts/FluentFonts.js
  var $937a8e82a53b46251d69b40adbfebb3b$exports = {};
  // Font face names to be registered.
  var $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames;
  $parcel$export($937a8e82a53b46251d69b40adbfebb3b$exports, "LocalizedFontNames", function () {
    return $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames;
  });
  (function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
    LocalizedFontNames.Armenian = 'Segoe UI Web (Armenian)';
    LocalizedFontNames.Georgian = 'Segoe UI Web (Georgian)';
  })($937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames || ($937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames = {}));
  // Font families with fallbacks, for the general regions.
  var $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies;
  $parcel$export($937a8e82a53b46251d69b40adbfebb3b$exports, "LocalizedFontFamilies", function () {
    return $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies;
  });
  (function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.WestEuropean + "'";
    LocalizedFontFamilies.Armenian = "'" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Armenian + "'";
    LocalizedFontFamilies.Georgian = "'" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Georgian + "'";
  })($937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies || ($937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies = {}));
  // Standard font sizes.
  var $937a8e82a53b46251d69b40adbfebb3b$export$FontSizes;
  $parcel$export($937a8e82a53b46251d69b40adbfebb3b$exports, "FontSizes", function () {
    return $937a8e82a53b46251d69b40adbfebb3b$export$FontSizes;
  });
  (function (FontSizes) {
    FontSizes.size10 = '10px';
    FontSizes.size12 = '12px';
    FontSizes.size14 = '14px';
    FontSizes.size16 = '16px';
    FontSizes.size18 = '18px';
    FontSizes.size20 = '20px';
    FontSizes.size24 = '24px';
    FontSizes.size28 = '28px';
    FontSizes.size32 = '32px';
    FontSizes.size42 = '42px';
    FontSizes.size68 = '68px';
    FontSizes.mini = '10px';
    FontSizes.xSmall = '10px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '12px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '16px';
    FontSizes.icon = '16px';
    FontSizes.large = '18px';
    FontSizes.xLarge = '20px';
    FontSizes.xLargePlus = '24px';
    FontSizes.xxLarge = '28px';
    FontSizes.xxLargePlus = '32px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '68px';
  })($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes || ($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes = {}));
  // Standard font weights.
  var $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights;
  $parcel$export($937a8e82a53b46251d69b40adbfebb3b$exports, "FontWeights", function () {
    return $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights;
  });
  (function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
  })($937a8e82a53b46251d69b40adbfebb3b$export$FontWeights || ($937a8e82a53b46251d69b40adbfebb3b$export$FontWeights = {}));
  // Standard Icon Sizes.
  var $937a8e82a53b46251d69b40adbfebb3b$export$IconFontSizes;
  (function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
  })($937a8e82a53b46251d69b40adbfebb3b$export$IconFontSizes || ($937a8e82a53b46251d69b40adbfebb3b$export$IconFontSizes = {}));
  // Fallback fonts, if specified system or web fonts are unavailable.
  var $dcda28de43f9b05643dd6089b79fd6d1$var$FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
  // By default, we favor system fonts for the default.
  // All localized fonts use a web font and never use the system font.
  var $dcda28de43f9b05643dd6089b79fd6d1$var$defaultFontFamily = "'Segoe UI', '" + $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.WestEuropean + "'";
  // Mapping of language prefix to to font family.
  var $dcda28de43f9b05643dd6089b79fd6d1$var$LanguageToFontMap = {
    ar: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Arabic,
    bg: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Cyrillic,
    cs: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    el: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Greek,
    et: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    he: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Hebrew,
    hi: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Hindi,
    hr: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    hu: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    ja: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Japanese,
    kk: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    ko: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Korean,
    lt: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    lv: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    pl: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    ru: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Cyrillic,
    sk: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    'sr-latn': $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    th: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Thai,
    tr: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.EastEuropean,
    uk: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Cyrillic,
    vi: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Vietnamese,
    'zh-hans': $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.ChineseTraditional,
    hy: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Armenian,
    ka: $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Georgian
  };
  function $dcda28de43f9b05643dd6089b79fd6d1$var$_fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + $dcda28de43f9b05643dd6089b79fd6d1$var$FontFamilyFallbacks;
  }
  /**
  * If there is a localized font for this language, return that.
  * Returns undefined if there is no localized font for that language.
  */
  function $dcda28de43f9b05643dd6089b79fd6d1$var$_getLocalizedFontFamily(language) {
    for (var lang in $dcda28de43f9b05643dd6089b79fd6d1$var$LanguageToFontMap) {
      if ($dcda28de43f9b05643dd6089b79fd6d1$var$LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return $dcda28de43f9b05643dd6089b79fd6d1$var$LanguageToFontMap[lang];
      }
    }
    return $dcda28de43f9b05643dd6089b79fd6d1$var$defaultFontFamily;
  }
  function $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont(size, weight, fontFamily) {
    return {
      fontFamily: fontFamily,
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontSize: size,
      fontWeight: weight
    };
  }
  function $dcda28de43f9b05643dd6089b79fd6d1$export$createFontStyles(localeCode) {
    var localizedFont = $dcda28de43f9b05643dd6089b79fd6d1$var$_getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = $dcda28de43f9b05643dd6089b79fd6d1$var$_fontFamilyWithFallbacks(localizedFont);
    var fontStyles = {
      tiny: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.mini, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.regular, fontFamilyWithFallback),
      xSmall: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.xSmall, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.regular, fontFamilyWithFallback),
      small: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.small, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.regular, fontFamilyWithFallback),
      smallPlus: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.smallPlus, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.regular, fontFamilyWithFallback),
      medium: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.medium, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.regular, fontFamilyWithFallback),
      mediumPlus: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.mediumPlus, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.regular, fontFamilyWithFallback),
      large: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.large, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.regular, fontFamilyWithFallback),
      xLarge: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.xLarge, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.semibold, fontFamilyWithFallback),
      xLargePlus: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.xLargePlus, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.semibold, fontFamilyWithFallback),
      xxLarge: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.xxLarge, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.semibold, fontFamilyWithFallback),
      xxLargePlus: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.xxLargePlus, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.semibold, fontFamilyWithFallback),
      superLarge: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.superLarge, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.semibold, fontFamilyWithFallback),
      mega: $dcda28de43f9b05643dd6089b79fd6d1$var$_createFont($937a8e82a53b46251d69b40adbfebb3b$export$FontSizes.mega, $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.semibold, fontFamilyWithFallback)
    };
    return fontStyles;
  }
  // Default urls.
  var $2e4650943ca49591d6b38b1122af77d9$var$DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
  // Standard font styling.
  var $2e4650943ca49591d6b38b1122af77d9$export$DefaultFontStyles = $dcda28de43f9b05643dd6089b79fd6d1$export$createFontStyles($6ffbc71392972d2d307c065365c8cfa1$export$getLanguage());
  $parcel$export($2e4650943ca49591d6b38b1122af77d9$exports, "DefaultFontStyles", function () {
    return $2e4650943ca49591d6b38b1122af77d9$export$DefaultFontStyles;
  });
  function $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    $3cd50aeaa63e0cf7ad43feb7709f6ca2$export$fontFace({
      fontFamily: fontFamily,
      src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
      fontWeight: fontWeight,
      fontStyle: 'normal',
      fontDisplay: 'swap'
    });
  }
  function $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) {
      cdnFontName = 'segoeui';
    }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFace(fontFamily, urlBase + '-light', $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.light, localFontName && localFontName + ' Light');
    $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFace(fontFamily, urlBase + '-semilight', $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.semilight, localFontName && localFontName + ' SemiLight');
    $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFace(fontFamily, urlBase + '-regular', $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.regular, localFontName);
    $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFace(fontFamily, urlBase + '-semibold', $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.semibold, localFontName && localFontName + ' SemiBold');
    $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFace(fontFamily, urlBase + '-bold', $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.bold, localFontName && localFontName + ' Bold');
  }
  function $2e4650943ca49591d6b38b1122af77d9$export$registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
      var fontUrl = baseUrl + "/fonts";
      // Produce @font-face definitions for all supported web fonts.
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Thai, 'leelawadeeui-thai', 'leelawadeeui');
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Arabic, 'segoeui-arabic');
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Cyrillic, 'segoeui-cyrillic');
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.EastEuropean, 'segoeui-easteuropean');
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Greek, 'segoeui-greek');
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Hebrew, 'segoeui-hebrew');
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Vietnamese, 'segoeui-vietnamese');
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontFamilies.Selawik, 'selawik', 'selawik');
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Armenian, 'segoeui-armenian');
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFaceSet(fontUrl, $937a8e82a53b46251d69b40adbfebb3b$export$LocalizedFontNames.Georgian, 'segoeui-georgian');
      // Leelawadee UI (Thai) does not have a 'light' weight, so we override
      // the font-face generated above to use the 'semilight' weight instead.
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.light);
      // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
      // the font-face generated above to use the 'bold' weight instead.
      $2e4650943ca49591d6b38b1122af77d9$var$_registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", $937a8e82a53b46251d69b40adbfebb3b$export$FontWeights.semibold);
    }
  }
  /**
  * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
  */
  function $2e4650943ca49591d6b38b1122af77d9$var$_getFontBaseUrl() {
    var _a, _b, _c;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var fabricConfig = (_a = $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow()) === null || _a === void 0 ? void 0 : _a.FabricConfig;
    return (_c = (_b = fabricConfig) === null || _b === void 0 ? void 0 : _b.fontBaseUrl, _c !== null && _c !== void 0 ? _c : $2e4650943ca49591d6b38b1122af77d9$var$DefaultBaseUrl);
  }
  /**
  * Register the font faces.
  */
  $2e4650943ca49591d6b38b1122af77d9$export$registerDefaultFontFaces($2e4650943ca49591d6b38b1122af77d9$var$_getFontBaseUrl());
  // ASSET: ../fluentui/packages/theme/lib/mergeThemes.js
  var $2796e7987b59ffde84ef8dab9d69ee7e$exports = {};
  /** Generates all the semantic slot colors based on the theme so far
  * We'll use these as fallbacks for semantic slots that the passed in theme did not define.
  * The caller must still mix in the customized semantic slots at the end.
  */
  function $5ed9ec044fb4c06cd17861b8b0ffa6dd$export$makeSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) {
      depComments = false;
    }
    var semanticColors = $d309954a712b99875da1746509963c49$export$__assign({
      primaryButtonBorder: 'transparent',
      errorText: !isInverted ? '#a4262c' : '#F1707B',
      messageText: !isInverted ? '#323130' : '#F3F2F1',
      messageLink: !isInverted ? '#005A9E' : '#6CB8F6',
      messageLinkHovered: !isInverted ? '#004578' : '#82C7FF',
      infoIcon: !isInverted ? '#605e5c' : '#C8C6C4',
      errorIcon: !isInverted ? '#A80000' : '#F1707B',
      blockingIcon: !isInverted ? '#FDE7E9' : '#442726',
      warningIcon: !isInverted ? '#797775' : '#C8C6C4',
      severeWarningIcon: !isInverted ? '#D83B01' : '#FCE100',
      successIcon: !isInverted ? '#107C10' : '#92C353',
      infoBackground: !isInverted ? '#f3f2f1' : '#323130',
      errorBackground: !isInverted ? '#FDE7E9' : '#442726',
      blockingBackground: !isInverted ? '#FDE7E9' : '#442726',
      warningBackground: !isInverted ? '#FFF4CE' : '#433519',
      severeWarningBackground: !isInverted ? '#FED9CC' : '#4F2A0F',
      successBackground: !isInverted ? '#DFF6DD' : '#393D1B',
      // deprecated
      warningHighlight: !isInverted ? '#ffb900' : '#fff100',
      successText: !isInverted ? '#107C10' : '#92c353'
    }, s);
    var fullSemanticColors = $5ed9ec044fb4c06cd17861b8b0ffa6dd$export$getSemanticColors(p, e, semanticColors, isInverted);
    return $5ed9ec044fb4c06cd17861b8b0ffa6dd$var$_fixDeprecatedSlots(fullSemanticColors, depComments);
  }
  /**
  * Map partial platte and effects to partial semantic colors.
  */
  function $5ed9ec044fb4c06cd17861b8b0ffa6dd$export$getSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) {
      depComments = false;
    }
    var _a, _b, _c;
    var result = {};
    // map palette
    var _d = p || ({}), white = _d.white, black = _d.black, themePrimary = _d.themePrimary, themeDark = _d.themeDark, themeDarker = _d.themeDarker, themeDarkAlt = _d.themeDarkAlt, themeLighter = _d.themeLighter, neutralLight = _d.neutralLight, neutralLighter = _d.neutralLighter, neutralDark = _d.neutralDark, neutralQuaternary = _d.neutralQuaternary, neutralQuaternaryAlt = _d.neutralQuaternaryAlt, neutralPrimary = _d.neutralPrimary, neutralSecondary = _d.neutralSecondary, neutralSecondaryAlt = _d.neutralSecondaryAlt, neutralTertiary = _d.neutralTertiary, neutralTertiaryAlt = _d.neutralTertiaryAlt, neutralLighterAlt = _d.neutralLighterAlt, accent = _d.accent;
    if (white) {
      result.bodyBackground = white;
      result.bodyFrameBackground = white;
      result.accentButtonText = white;
      result.buttonBackground = white;
      result.primaryButtonText = white;
      result.primaryButtonTextHovered = white;
      result.primaryButtonTextPressed = white;
      result.inputBackground = white;
      result.inputForegroundChecked = white;
      result.listBackground = white;
      result.menuBackground = white;
      result.cardStandoutBackground = white;
    }
    if (black) {
      result.bodyTextChecked = black;
      result.buttonTextCheckedHovered = black;
    }
    if (themePrimary) {
      result.link = themePrimary;
      result.primaryButtonBackground = themePrimary;
      result.inputBackgroundChecked = themePrimary;
      result.inputIcon = themePrimary;
      result.inputFocusBorderAlt = themePrimary;
      result.menuIcon = themePrimary;
      result.menuHeader = themePrimary;
      result.accentButtonBackground = themePrimary;
    }
    if (themeDark) {
      result.primaryButtonBackgroundPressed = themeDark;
      result.inputBackgroundCheckedHovered = themeDark;
      result.inputIconHovered = themeDark;
    }
    if (themeDarker) {
      result.linkHovered = themeDarker;
    }
    if (themeDarkAlt) {
      result.primaryButtonBackgroundHovered = themeDarkAlt;
    }
    if (themeLighter) {
      result.inputPlaceholderBackgroundChecked = themeLighter;
    }
    if (neutralLight) {
      result.bodyBackgroundChecked = neutralLight;
      result.bodyFrameDivider = neutralLight;
      result.bodyDivider = neutralLight;
      result.variantBorder = neutralLight;
      result.buttonBackgroundCheckedHovered = neutralLight;
      result.buttonBackgroundPressed = neutralLight;
      result.listItemBackgroundChecked = neutralLight;
      result.listHeaderBackgroundPressed = neutralLight;
      result.menuItemBackgroundPressed = neutralLight;
      // eslint-disable-next-line deprecation/deprecation
      result.menuItemBackgroundChecked = neutralLight;
    }
    if (neutralLighter) {
      result.bodyBackgroundHovered = neutralLighter;
      result.buttonBackgroundHovered = neutralLighter;
      result.buttonBackgroundDisabled = neutralLighter;
      result.buttonBorderDisabled = neutralLighter;
      result.primaryButtonBackgroundDisabled = neutralLighter;
      result.disabledBackground = neutralLighter;
      result.listItemBackgroundHovered = neutralLighter;
      result.listHeaderBackgroundHovered = neutralLighter;
      result.menuItemBackgroundHovered = neutralLighter;
    }
    if (neutralQuaternary) {
      result.primaryButtonTextDisabled = neutralQuaternary;
      result.disabledSubtext = neutralQuaternary;
    }
    if (neutralQuaternaryAlt) {
      result.listItemBackgroundCheckedHovered = neutralQuaternaryAlt;
    }
    if (neutralTertiary) {
      result.disabledBodyText = neutralTertiary;
      result.variantBorderHovered = ((_a = s) === null || _a === void 0 ? void 0 : _a.variantBorderHovered) || neutralTertiary;
      result.buttonTextDisabled = neutralTertiary;
      result.inputIconDisabled = neutralTertiary;
      result.disabledText = neutralTertiary;
    }
    if (neutralPrimary) {
      result.bodyText = neutralPrimary;
      result.actionLink = neutralPrimary;
      result.buttonText = neutralPrimary;
      result.inputBorderHovered = neutralPrimary;
      result.inputText = neutralPrimary;
      result.listText = neutralPrimary;
      result.menuItemText = neutralPrimary;
    }
    if (neutralLighterAlt) {
      result.bodyStandoutBackground = neutralLighterAlt;
      result.defaultStateBackground = neutralLighterAlt;
    }
    if (neutralDark) {
      result.actionLinkHovered = neutralDark;
      result.buttonTextHovered = neutralDark;
      result.buttonTextChecked = neutralDark;
      result.buttonTextPressed = neutralDark;
      result.inputTextHovered = neutralDark;
      result.menuItemTextHovered = neutralDark;
    }
    if (neutralSecondary) {
      result.bodySubtext = neutralSecondary;
      result.focusBorder = neutralSecondary;
      result.inputBorder = neutralSecondary;
      result.smallInputBorder = neutralSecondary;
      result.inputPlaceholderText = neutralSecondary;
    }
    if (neutralSecondaryAlt) {
      result.buttonBorder = neutralSecondaryAlt;
    }
    if (neutralTertiaryAlt) {
      result.disabledBodySubtext = neutralTertiaryAlt;
      result.disabledBorder = neutralTertiaryAlt;
      result.buttonBackgroundChecked = neutralTertiaryAlt;
      result.menuDivider = neutralTertiaryAlt;
    }
    if (accent) {
      result.accentButtonBackground = accent;
    }
    // map effects
    if ((_b = e) === null || _b === void 0 ? void 0 : _b.elevation4) {
      result.cardShadow = e.elevation4;
    }
    if (!isInverted && ((_c = e) === null || _c === void 0 ? void 0 : _c.elevation8)) {
      result.cardShadowHovered = e.elevation8;
    } else if (result.variantBorderHovered) {
      result.cardShadowHovered = '0 0 1px ' + result.variantBorderHovered;
    }
    result = $d309954a712b99875da1746509963c49$export$__assign($d309954a712b99875da1746509963c49$export$__assign({}, result), s);
    return result;
  }
  function $5ed9ec044fb4c06cd17861b8b0ffa6dd$var$_fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
      dep = ' /* @deprecated */';
    }
    /*eslint-disable deprecation/deprecation*/
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    s.warningHighlight += dep;
    s.warningText = s.messageText + dep;
    s.successText += dep;
    /*eslint-enable deprecation/deprecation*/
    return s;
  }
  /**
  * Merge a partial/full theme into a full theme and returns a merged full theme.
  */
  function $2796e7987b59ffde84ef8dab9d69ee7e$export$mergeThemes(theme, partialTheme) {
    if (partialTheme === void 0) {
      partialTheme = {};
    }
    var _a, _b, _c, _d;
    var mergedTheme = $29b60172e1fe2ea478a5fc216b1a0b5f$export$merge({}, theme, partialTheme, {
      semanticColors: $5ed9ec044fb4c06cd17861b8b0ffa6dd$export$getSemanticColors(partialTheme.palette, partialTheme.effects, partialTheme.semanticColors, partialTheme.isInverted === undefined ? theme.isInverted : partialTheme.isInverted)
    });
    if (((_a = partialTheme.palette) === null || _a === void 0 ? void 0 : _a.themePrimary) && !((_b = partialTheme.palette) === null || _b === void 0 ? void 0 : _b.accent)) {
      mergedTheme.palette.accent = partialTheme.palette.themePrimary;
    }
    if (partialTheme.defaultFontStyle) {
      for (var _i = 0, _e = Object.keys(mergedTheme.fonts); _i < _e.length; _i++) {
        var fontStyle = _e[_i];
        mergedTheme.fonts[fontStyle] = $29b60172e1fe2ea478a5fc216b1a0b5f$export$merge(mergedTheme.fonts[fontStyle], partialTheme.defaultFontStyle, (_d = (_c = partialTheme) === null || _c === void 0 ? void 0 : _c.fonts) === null || _d === void 0 ? void 0 : _d[fontStyle]);
      }
    }
    return mergedTheme;
  }
  $parcel$export($2796e7987b59ffde84ef8dab9d69ee7e$exports, "mergeThemes", function () {
    return $2796e7987b59ffde84ef8dab9d69ee7e$export$mergeThemes;
  });
  var $27420bc6a86a3e109533595a574c35ba$export$DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px'
  };
  /**
  * Creates a custom theme definition.
  * @param theme - Partial theme object.
  * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
  */
  function $18d6fedb1e9a0c9136f1f19113418d89$export$createTheme(theme, depComments) {
    if (theme === void 0) {
      theme = {};
    }
    if (depComments === void 0) {
      depComments = false;
    }
    var isInverted = !!theme.isInverted;
    var baseTheme = {
      palette: $fa36c7c8fa0fa4c3a543e3ed11701131$export$DefaultPalette,
      effects: $5e3b9b7bb1bd856c0fcd6385c7a0a77e$export$DefaultEffects,
      fonts: $2e4650943ca49591d6b38b1122af77d9$export$DefaultFontStyles,
      spacing: $27420bc6a86a3e109533595a574c35ba$export$DefaultSpacing,
      isInverted: isInverted,
      disableGlobalClassNames: false,
      semanticColors: $5ed9ec044fb4c06cd17861b8b0ffa6dd$export$makeSemanticColors($fa36c7c8fa0fa4c3a543e3ed11701131$export$DefaultPalette, $5e3b9b7bb1bd856c0fcd6385c7a0a77e$export$DefaultEffects, undefined, isInverted, depComments),
      rtl: undefined
    };
    return $2796e7987b59ffde84ef8dab9d69ee7e$export$mergeThemes(baseTheme, theme);
  }
  $parcel$export($18d6fedb1e9a0c9136f1f19113418d89$exports, "createTheme", function () {
    return $18d6fedb1e9a0c9136f1f19113418d89$export$createTheme;
  });
  var $693f9d636bddcb655e102b348adcbc26$var$_theme = $18d6fedb1e9a0c9136f1f19113418d89$export$createTheme({});
  var $693f9d636bddcb655e102b348adcbc26$var$_onThemeChangeCallbacks = [];
  var $693f9d636bddcb655e102b348adcbc26$export$ThemeSettingName = 'theme';
  function $693f9d636bddcb655e102b348adcbc26$export$initializeThemeInCustomizations() {
    var _a;
    var _b, _c;
    if (!$020fb4649d01f912887f5a17b3fe9e45$export$Customizations.getSettings([$693f9d636bddcb655e102b348adcbc26$export$ThemeSettingName]).theme) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var win = $62c532628fe4c01f6dd9e4d122ed2cac$export$getWindow();
      if ((_c = (_b = win) === null || _b === void 0 ? void 0 : _b.FabricConfig) === null || _c === void 0 ? void 0 : _c.theme) {
        $693f9d636bddcb655e102b348adcbc26$var$_theme = $18d6fedb1e9a0c9136f1f19113418d89$export$createTheme(win.FabricConfig.theme);
      }
      // Set the default theme.
      $020fb4649d01f912887f5a17b3fe9e45$export$Customizations.applySettings((_a = {}, _a[$693f9d636bddcb655e102b348adcbc26$export$ThemeSettingName] = $693f9d636bddcb655e102b348adcbc26$var$_theme, _a));
    }
  }
  $693f9d636bddcb655e102b348adcbc26$export$initializeThemeInCustomizations();
  /**
  * Loads font variables into a JSON object.
  * @param theme - The theme object
  */
  function $693f9d636bddcb655e102b348adcbc26$var$_loadFonts(theme) {
    var lines = {};
    for (var _i = 0, _a = Object.keys(theme.fonts); _i < _a.length; _i++) {
      var fontName = _a[_i];
      var font = theme.fonts[fontName];
      for (var _b = 0, _c = Object.keys(font); _b < _c.length; _b++) {
        var propName = _c[_b];
        var name_1 = fontName + propName.charAt(0).toUpperCase() + propName.slice(1);
        var value = font[propName];
        if (propName === 'fontSize' && typeof value === 'number') {
          // if it's a number, convert it to px by default like our theming system does
          value = value + 'px';
        }
        lines[name_1] = value;
      }
    }
    return lines;
  }
  $693f9d636bddcb655e102b348adcbc26$export$initializeThemeInCustomizations();
  var $dc00c3cc02ebb680cc19500c5a2976a9$var$GlobalClassNames = {
    root: 'ms-Overlay',
    rootDark: 'ms-Overlay--dark'
  };
  var $dc00c3cc02ebb680cc19500c5a2976a9$export$getStyles = function (props) {
    var _a;
    var className = props.className, theme = props.theme, isNone = props.isNone, isDark = props.isDark;
    var palette = theme.palette;
    var classNames = $05cd8062066764a6a85d23591cb88258$export$getGlobalClassNames($dc00c3cc02ebb680cc19500c5a2976a9$var$GlobalClassNames, theme);
    return {
      root: [classNames.root, theme.fonts.medium, {
        backgroundColor: palette.whiteTranslucent40,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
        selectors: (_a = {}, _a[$e75690e9d7bfd8c1a324b1baf268dacb$export$HighContrastSelector] = {
          border: '1px solid WindowText',
          opacity: 0
        }, _a)
      }, isNone && ({
        visibility: 'hidden'
      }), isDark && [classNames.rootDark, {
        backgroundColor: palette.blackTranslucent40
      }], className]
    };
  };
  var $c5aeb9981dd14eecdf3bf8b0a538424c$export$Overlay = $ff2c11dc65d0e1b40037e86c0fd4bc22$export$styled($e76a8fc82fe27e77c6cbcfa7862f3dac$export$OverlayBase, $dc00c3cc02ebb680cc19500c5a2976a9$export$getStyles, undefined, {
    scope: 'Overlay'
  });
  var $c5aeb9981dd14eecdf3bf8b0a538424c$export$aStringFromOverlayOverlay = 'here is a string from components/Overlay/Overlay.ts';
  console.log($c5aeb9981dd14eecdf3bf8b0a538424c$export$aStringFromOverlayOverlay);
})();

//# sourceMappingURL=index.9162d158.js.map
