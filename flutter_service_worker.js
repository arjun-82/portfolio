'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2f0786d29a7021cc440c9038ccdaedd8",
".git/config": "12405962cd727a776e3d110fb279cdbb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4515b84c0b9adb02f9c9fb28c85c97b0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb24182d26da7e5bc55d6299c6ca3f68",
".git/logs/refs/heads/main": "0bc036262336e9ff253b287ac54e8c45",
".git/logs/refs/remotes/origin/main": "99a5bfc1bdce348a924530512e85d38c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/3fc65d39137ee1c0475f4b4912bf157f068b15": "66a2f329de4b375379033f66bc9fc271",
".git/objects/19/59cc1c747d10004c0baac6f2eb10f2fee25b26": "df285f80401086075298ee466d2074f7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/947f22c9bbcdeb17f9cc5821aba0c34b91a553": "1a8f071d8d097950e42a7f2dc808a493",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/fa82e49a69d785b8b72ab4b429d9b9566ba82c": "c0894a456eacb47d59a461ebfdde00e6",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/cd5e2a87f900442b3a2610310172b066ef646e": "65f841ce289f67e3f27c7b976e549a8e",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/a4df59c2c24c5098c069c5595c30f02a75065e": "a6ae6eebd7f0a3d604d886e4ff440ea7",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4b/a25c17f0b793baf34317b5235da488fc7ebcd4": "92715add0ec382d9190e4e264c431c06",
".git/objects/4b/b4042701a3d40cdde294e999ab50f4498ad77e": "c14da7487448366d731868182fe51130",
".git/objects/4c/01c130933eb22b5c37571eb9f294f3eb45ada0": "2a03d40482a49c621a295d16543ecb7b",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/60/b6b9ef5b7d9998ecab8f447c9d8b45a02be72f": "872166817e562830be222d7aa0a915be",
".git/objects/60/c9a1e43fa553659c687676628f83ac447b68b0": "29a71409fff367af72e50cd5baf11dc8",
".git/objects/61/d44fd69feb8cf786551bfb9f58c869d87b13ba": "c0ef47e6b258be140b8914fc79784353",
".git/objects/6a/446abf787e8ebc76acef13521dc8ef6a1f26bd": "91fccc4b51caee4d3ee5ab38f8f7a32f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/8a0c9e9e46b279e2fb2e2f79adf05b88a7828d": "a5d7eb6f31482e2bee7eadda3ac71027",
".git/objects/6f/351729519a812b7b1783d3a1b348cf7a2fb212": "5d2db3b3062d595a592ab2a12ece3314",
".git/objects/76/42078b515f2a226344fc1ad958d25cf9b2a13f": "60564d16cd7502dc412436d67a50ad7d",
".git/objects/77/4b38210ae7a20f96a778556a68856bd88aafa0": "4301c288da28aea2dac868ebe2ec583b",
".git/objects/78/636683e1b875c9cde6d29cc61c83a89588f76a": "d084300405d4801d09d3624942d1d8b0",
".git/objects/79/0aa28c4ef18156b1bf23b9c6948b577b94c432": "3e93887093d3588f518840c278e0fe5c",
".git/objects/82/6899cfe6a1109ab450ce9a9c9ae6dcbb206447": "f4cd5a1624342ecab9bc8cb560928cb4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/89/ab7175b8c896db6c32556ae7c4d55ce1ec148b": "9b6935a2b0ae6ec67c111359c0c43c42",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/37967a824442915de43324045d1cea0193a9d9": "dd419aee05bc250e76877fe19a15b294",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/a84d84a9cc8e01ea55c2e20d215d19468e3e12": "8ecaebc1e3bb7037148e9d37d4c6daa0",
".git/objects/9d/27563e2fbd7d75d1e1617e19558f30c67dd9ff": "eab25da1103f46bfd65bfcce1f58650c",
".git/objects/a0/df0126a78e87bc105e93109134b9f7530d943e": "64f0af74103437bb0d159ba1ee3f7ce9",
".git/objects/a4/d05fd1e4439c62d4a6a684ecfdd9ef0d066b8f": "025a1edb4a795b5f47e19e382d9db2fb",
".git/objects/b0/1283531ff544a046dc190564bc24a74effbf68": "7ee00ac82b09436afcce4725806ae2fb",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/f096b43a81133818eefbc258b37395a436c220": "9ae1806aab6cdfdb7b34dffd27fed93e",
".git/objects/b7/b02c44a298da386047c22bc75fd532c06dd757": "7d2922362522f36279d48f285dfd554b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/cb/190e1b65f2a259d288610262024be8876d2dd1": "d967e4078cfd2a7d2be2403ce4dc12d2",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/9bfb25b67bef8bd63d70c41447d46405be22f1": "1188e2ad84be2858d1b303bd539384c5",
".git/objects/e1/c976497472cb2a6dc0186271cdb5b6e6e40856": "2bd235d13fed0d8a94a297eed3820d57",
".git/objects/e2/fc9b7c59864b87f4f326c47de1a025c517f686": "443efd79b09ad2fd36cbae0e953cedc4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/d9646aae6a05364bac6d7017c8284ad7725513": "69799af2957e628eb482067ce5532f72",
".git/objects/fe/336bc1bfb432b792363d382469b96e369308ba": "d0b5fe663bdc8a1d413fade409316615",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "fb0bf1fe89bb790784dedbc75760964d",
".git/refs/remotes/origin/main": "fb0bf1fe89bb790784dedbc75760964d",
"assets/AssetManifest.bin": "52c529340e1ce08c8c0a6265789e77ee",
"assets/AssetManifest.bin.json": "a2e2886af1ff4a12e96d6d22c6a7b0bc",
"assets/AssetManifest.json": "4394d04c5571c27c5ed21a002203b8ae",
"assets/assets/svg/avatar.png": "3a8c6e1f313f82f587df254a0a8c3d11",
"assets/assets/svg/contactMe.svg": "27a831f2258b198f520bd9e5c579b5c3",
"assets/assets/svg/darkmodeExp.svg": "f8d4506c9f00201374c54fd254bf14a7",
"assets/assets/svg/dummypro.svg": "ecc784770550f0542cc47f57a9a5c46e",
"assets/assets/svg/Ellipse.svg": "b8c00154149a9251440bdac45031387d",
"assets/assets/svg/Frame%252057.svg": "e92094b498822095c5268f2d2fc5645f",
"assets/assets/svg/FrameDemo.svg": "58d4dda546ad4b5833888299e340a0c6",
"assets/assets/svg/lightmodeExp.svg": "18f0169cbcecc2b7c0c0412cfd33f955",
"assets/FontManifest.json": "0956cb893d0cc21115a659717675424e",
"assets/fonts/DancingScript-Regular.ttf": "949b41b511eeacbbf6884959b6eedc56",
"assets/fonts/GreaterTheory.otf": "164d78cbf4c983c5c8ba443d37a833ad",
"assets/fonts/MaterialIcons-Regular.otf": "72ca6d27d32e080698656be9d24ca6a3",
"assets/fonts/Outfit-Regular.ttf": "9f444021dd670d995f9341982c396a1d",
"assets/fonts/Raleway-Regular.ttf": "6310192cd2011f527e18b1586a1245c8",
"assets/NOTICES": "700d908c4597dfc274a662abc04637cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "2443661b88d224a955a71ac0695957e8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2b8efc0e7dd786aa1c1ce2f4ce37a767",
"icons/Icon-192.png": "2443661b88d224a955a71ac0695957e8",
"icons/Icon-512.png": "2443661b88d224a955a71ac0695957e8",
"icons/Icon-maskable-192.png": "2443661b88d224a955a71ac0695957e8",
"icons/Icon-maskable-512.png": "2443661b88d224a955a71ac0695957e8",
"index.html": "bd46f395e02e99f14f31291641636665",
"/": "bd46f395e02e99f14f31291641636665",
"main.dart.js": "0765cd61205058d486e9f918f91a5465",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
