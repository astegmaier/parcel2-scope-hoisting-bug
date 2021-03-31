(function () {
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
  // ASSET: ../fluentui/packages/react/lib/components/Overlay/index.js
  var $b2619511ff07831ab983b91e93e21681$exports = {};
  $parcel$exportWildcard($b2619511ff07831ab983b91e93e21681$exports, {});
  $parcel$exportWildcard($b2619511ff07831ab983b91e93e21681$exports, {});
  var $b2619511ff07831ab983b91e93e21681$export$aStringFromOverlayIndex = 'here is a string from components/Overlay/index.ts';
  $parcel$export($b2619511ff07831ab983b91e93e21681$exports, "aStringFromOverlayIndex", function () {
    return $b2619511ff07831ab983b91e93e21681$export$aStringFromOverlayIndex;
  });
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
  console.log($b2619511ff07831ab983b91e93e21681$export$aStringFromOverlayIndex);
})();

//# sourceMappingURL=index.4e743e27.js.map
