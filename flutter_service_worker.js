'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "88fdae10dff0e01987a6566701593408",
"index.html": "0a5c5ed27d00f9949214ca21959fd421",
"/": "0a5c5ed27d00f9949214ca21959fd421",
"main.dart.js": "8fd5abb4cb85d8e05209938c64d5e84a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "93052940996dac961bdfe7d4a1e56b27",
"assets/AssetManifest.json": "3fc903727439060bdfc0cbeb5aa01493",
"assets/NOTICES": "106f25f3d94ba2db6f5d8d47807d466a",
"assets/FontManifest.json": "aa9caf206f6a35354644368d2e836737",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/res/menu_button.png": "b7b2879453e0faf7757424422f2a3ce4",
"assets/assets/images/res/veggies.png": "c8e9e98cc016212416981a4ac7be77ee",
"assets/assets/images/res/check.png": "2a8848d4aca388f3c7b6e3a835aebbb3",
"assets/assets/images/res/sausage_crack.png": "12a7d39bb3e20d49f48e0bfc2fabda5d",
"assets/assets/images/res/bowl.png": "a30ad16a37c0f18dfef1232b4fc455f7",
"assets/assets/images/res/pen.png": "5fb13c5e9c449bd514da0c51d1e67156",
"assets/assets/images/res/2.0x/menu_button.png": "4f45cac430f9b86776fc17a93f7fbdeb",
"assets/assets/images/res/2.0x/veggies.png": "bef792d76cb9c183b2430f219862c8c4",
"assets/assets/images/res/2.0x/check.png": "9e63dc1aa7125e8484425ea2ea94f918",
"assets/assets/images/res/2.0x/sausage_crack.png": "b8ff7f3c6a288a62c99f8a9415ed6736",
"assets/assets/images/res/2.0x/bowl.png": "6a83a20db1eaf93e08d5aa716c34c19f",
"assets/assets/images/res/2.0x/pen.png": "5132ee6aa42ddcb17c50a96860dab288",
"assets/assets/images/res/2.0x/back_arrow.png": "538912ad7f560e0e39b7b13c44c7a823",
"assets/assets/images/res/2.0x/pain_logo.png": "98fc55b26116d71f7c4d1e73c5a9f8ba",
"assets/assets/images/res/2.0x/seperate.png": "faa9c6c6b442ea4f38f2eb2c2a0deaa8",
"assets/assets/images/res/2.0x/fluffy.png": "fbbf7d44e36ee0ef30b4efdacba166d2",
"assets/assets/images/res/2.0x/tab_ic_gut.png": "b3aa5be6bbd9d8c471937f39a38a3a81",
"assets/assets/images/res/2.0x/gut.png": "4a068f8a7079352ac17f7c530e5e3eb0",
"assets/assets/images/res/2.0x/logo.png": "7dcdfa3fd6cb0aa436e0e1c4f14d03e2",
"assets/assets/images/res/2.0x/meh_regular.png": "ee849099a4e43f5a761364b162bc0b2a",
"assets/assets/images/res/2.0x/running_solid.png": "18181d833a0661f9d8e911d6af6b624e",
"assets/assets/images/res/2.0x/logo_small.png": "95db76faf0a3eb34dc9f26b70b7a032c",
"assets/assets/images/res/2.0x/watery.png": "ff8345c9ddf4241db7ac7aab0de0343c",
"assets/assets/images/res/2.0x/tab_ic_home.png": "94ca84a0cafea54a6a1d136f72f808eb",
"assets/assets/images/res/2.0x/cross_icon.png": "54d343514469c1a8d0d5c921e28344ef",
"assets/assets/images/res/2.0x/pain.png": "79a5689af37f24eec2945943f73af92d",
"assets/assets/images/res/2.0x/soft_blogs.png": "74af1262bbd0b8018c8720e3482026a6",
"assets/assets/images/res/2.0x/cream.png": "de0c73ee88a66d7c67bc51983a996937",
"assets/assets/images/res/2.0x/sausage_lumpy.png": "cea4df8601a77dd6df97084be7ad924d",
"assets/assets/images/res/2.0x/fork.png": "d0a42c414ff294b165a74403a674ea37",
"assets/assets/images/res/2.0x/smile.png": "1d54628b2a1428059997cd80a6ed2e80",
"assets/assets/images/res/2.0x/toilet_solid.png": "9b4a64fe1d9dc810dd605e67144f09f3",
"assets/assets/images/res/2.0x/snake.png": "d92fb5860b3a7062ba35df5f400869ca",
"assets/assets/images/res/back_arrow.png": "23c3c3632acc9938357d484a7a8925f8",
"assets/assets/images/res/pain_logo.png": "b9294fe2774e953681310860f2f134e6",
"assets/assets/images/res/3.0x/menu_button.png": "4b6559046c5ebbba2a3fed7a0dd41713",
"assets/assets/images/res/3.0x/veggies.png": "804645d046bf5b09f841510cf03f62fe",
"assets/assets/images/res/3.0x/check.png": "4e4885a61c0cefc2d9f58aefe98caf9d",
"assets/assets/images/res/3.0x/sausage_crack.png": "357fa0780ba1c557f0761aeb362fa9a9",
"assets/assets/images/res/3.0x/bowl.png": "07f7c164ad6bb603e60dc22945621dd5",
"assets/assets/images/res/3.0x/pen.png": "1fa88b24e44aabc4aa01b5643fd221c1",
"assets/assets/images/res/3.0x/back_arrow.png": "f8cf38ad90729d53e313d1f4e5a42e25",
"assets/assets/images/res/3.0x/pain_logo.png": "fdae6451a10a92ff24b148642bb4b443",
"assets/assets/images/res/3.0x/seperate.png": "e900e1e3d946f974f7df245eab9263bf",
"assets/assets/images/res/3.0x/fluffy.png": "f43c25f6f66fe6007986b05bba8dc164",
"assets/assets/images/res/3.0x/tab_ic_gut.png": "38f3a4a35084dbaa24eda4d4221444af",
"assets/assets/images/res/3.0x/gut.png": "d442ad6c04cf08957ac08d901e30cbd0",
"assets/assets/images/res/3.0x/logo.png": "8d1f60cab978b8b08ab5ee74e9c06135",
"assets/assets/images/res/3.0x/meh_regular.png": "98d2d5ea31b30090842af6e178a0249d",
"assets/assets/images/res/3.0x/running_solid.png": "dd7c9c57eb20c958922d4804a841e1f0",
"assets/assets/images/res/3.0x/logo_small.png": "b383275e6605d13e5f05a8788c91ac05",
"assets/assets/images/res/3.0x/watery.png": "b72cbe39f30066d74d86b7e6aef0ad20",
"assets/assets/images/res/3.0x/tab_ic_home.png": "6327f65246e16ab76289f52fd73b16d1",
"assets/assets/images/res/3.0x/cross_icon.png": "be5745246b9901e025c02e84872fc9f9",
"assets/assets/images/res/3.0x/pain.png": "8c786062bc54dad7322568e27877e381",
"assets/assets/images/res/3.0x/soft_blogs.png": "bb376a24bd2f42221cd55cadfd3e1a92",
"assets/assets/images/res/3.0x/cream.png": "a682c22a99f86bdcf0ac6816c425c854",
"assets/assets/images/res/3.0x/sausage_lumpy.png": "60b7f431b37da05bbe8145a70e7e6fb3",
"assets/assets/images/res/3.0x/fork.png": "b7dd45ccf3a6307071ba83f500f92488",
"assets/assets/images/res/3.0x/smile.png": "1bf91df3f0c8ff6c9f02b59537bf6358",
"assets/assets/images/res/3.0x/toilet_solid.png": "5b069fda43f8bb819cb8b2e9e69cfeb8",
"assets/assets/images/res/3.0x/snake.png": "b551769c0124794a128a49cf1834e7be",
"assets/assets/images/res/seperate.png": "44ece2c9ec98f8aa92f320b6bc2f0ec9",
"assets/assets/images/res/fluffy.png": "d127231e58f7a19ca16835031a3cb5c3",
"assets/assets/images/res/tab_ic_gut.png": "90b9d77770f62d105c93830c63e41966",
"assets/assets/images/res/gut.png": "d8fe17230e25c0ed8eb692bdf0f65b5e",
"assets/assets/images/res/logo.png": "5249ea201af09a05252b6c80c812260c",
"assets/assets/images/res/meh_regular.png": "40814a2c5be0cf64afffb8c0d6769a8d",
"assets/assets/images/res/running_solid.png": "baeb77626adf3cc644d3dac28a02f244",
"assets/assets/images/res/logo_small.png": "ba4cbd953e7dfc9ff953904ebe87fd9e",
"assets/assets/images/res/watery.png": "2aaac810d45a0bc93bdeea90d52ceda7",
"assets/assets/images/res/tab_ic_home.png": "63768ee99340485edf791dddb74868f8",
"assets/assets/images/res/cross_icon.png": "39a6d60a49ee1949b4d65433ad6e91e0",
"assets/assets/images/res/pain.png": "4ed7c2452a2e59c60f1ac1f5e0080e6f",
"assets/assets/images/res/soft_blogs.png": "5c5d8a88d932fa405e7d25f816869497",
"assets/assets/images/res/cream.png": "879fd0530643b08173659d533d71bcec",
"assets/assets/images/res/sausage_lumpy.png": "c90d4609d09941fdc109ca453f760cc8",
"assets/assets/images/res/fork.png": "6eec933a293ef66f5413d6b58a84c8d1",
"assets/assets/images/res/smile.png": "6929212b992235df02a7c42440d797dc",
"assets/assets/images/res/toilet_solid.png": "add88e34641fd8987d0a180e5bcb49a9",
"assets/assets/images/res/snake.png": "4c79b6bb294f036483793483fa02dfc3",
"assets/assets/fonts/Avenir-Bold.ttf": "3dcc34af4774d33c679e24dd4d5ce76f",
"assets/assets/fonts/Avenir-Regular.ttf": "71191a6f94836c21e23f1df0331f8cc8",
"assets/assets/fonts/Avenir-Medium.ttf": "cfd38490c82a7491cc85e907e3d9e92f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
