
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.9e38aa1f1ef71052c2dd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/902.latest.en.880f13f22c5853b13457.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/114.latest.en.c10601cb53ddc81e5051.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/991.latest.en.9c44aa3fb5e5c3cd39f5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.812f612f8638c6db4c2e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/845.latest.en.6db36d65de55b15facf0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/569.latest.en.406f42dec60e3e93493f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/462.latest.en.6a6450e5964fa63775f8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/18.latest.en.ff3d817c92cb9c4b0678.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.1fc4223a3fd6704532af.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/902.latest.en.e3249b8edfbd78330bac.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.917d84ea702497c705db.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.b1a85f925b41702ad78f.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/oswald/oswald_n4.a5ee385bde39969d807f7f1297bf51d73fbf3c1e.woff2?h1=a2l4a3pnYWxvcmUuY29t&hmac=d4e193312f4300e25e9b9202f6e3dd278d982c628b8a3e5ff3b0d8a0a57fdc8b","https://fonts.shopifycdn.com/oswald/oswald_n7.f71e68b857a7b8128a7629452b9c6bf9468356a7.woff2?h1=a2l4a3pnYWxvcmUuY29t&hmac=ccc3523eefdcada1ff4005e9e76145a0e557410dfb71d97d1a4b9bc86dffabb7"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0079/4964/7923/files/logo_x320.png?v=1667936994"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  