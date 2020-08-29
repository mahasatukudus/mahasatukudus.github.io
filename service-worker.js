const CACHE_NAME = "manuha1-0009876654gvbjhtresc";
var urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/pages/gallery.html",
  "/pages/pramuka.html",
  "/pages/muwadaah.html",
  "/pages/zarkasi.html",
  "/pages/ppdb.html",
  "/pages/ramadhanxips.html",
  "/pages/ramadhanxiips.html",
  "/pages/classmeting.html",
  "/pages/daftaralumni.html",
  "/pages/daftarpesertadidikaktif.html",
  "/pages/grafika.html",
  "/pages/halalbihalal.html",
  "/pages/harisantri.html",
  "/pages/harlahhasyim.html",
  "/pages/harlahnu.html",
  "/pages/hidroponik.html",
  "/pages/hiking.html",
  "/pages/iduladha.html",
  "/pages/idulfitri.html",
  "/pages/isromiroj.html",
  "/pages/kemah.html",
  "/pages/kunjunganpuskesmas.html",
  "/pages/lombainternational.html,
  "/pages/lombakabupaten.html",
  "/pages/lombakecamatan.html",
  "/pages/lombakelas.html",
  "/pages/lombamadrasah.html",
  "/pages/lombanasional.html",
  "/pages/lombaprovinsi.html",
  "/pages/makesta.html",
  "/pages/manaqib.html",
  "/pages/maulidnabi.html",
  "/pages/pbb.html",
  "/pages/pencaksilat.html",
  "/pages/pengkelulusan.html",
  "/pages/pesantrenkilat.html",
  "/pages/pondok.html",
  "/pages/ppha.html.html",
  "/pages/qiroah.html",
  "/pages/salaf.html",
  "/pages/shalatistisqo.html",
  "/pages/tahfidz.html",
  "/pages/tahtiman.html",
  "/pages/temualumni.html",
  "/pages/upacara.html",
  "/pages/workshop.html",
  "/pages/ziarah.html"
  "/images/img_home.jpg",
  "/images/img_muwadaah.jpg",
  "/images/img_dewan_guru.jpg",
  "/images/img_alumni_hadir.jpg",
  "/images/img_zarkasi.jpg",
  "/images/img_pramuka.jpg",
  "/images/img_iklan_1.jpg",
  "/images/img_iklan_2.jpg",
  "/images/img_iklan_3.jpg",
  "/images/img_iklan_4.jpg",
  "/images/img_iklan_5.jpg",
  "/images/img_iklan_6.jpg",
  "/images/img_iklan_7.jpg",
  "/images/img_iklan_8.jpg",
  "/images/img_iklan_9.jpg",
  "/images/img_iklan_10.jpg",
  "/images/img_iklan_11.jpg",
  "/images/img_iklan_12.jpg",
  "/images/img_iklan_13.jpg",
  "/images/img_iklan_14.jpg",
  "/images/img_iklan_15.jpg",
  "/images/img_iklan_16.jpg",
  "/images/img_iklan_17.jpg",
  "/images/img_iklan_madrasah_1.jpg",
  "/images/img_iklan_sosial_1.jpg",
  "/css/materialize.min.css",
  "/css/materialize.css",
  "/js/materialize.min.js",
  "/js/nav.js"
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function(response) {
        if (response) {
          console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
          return response;
        }
 
        console.log(
          "ServiceWorker: Memuat aset dari server: ",
          event.request.url
        );
        return fetch(event.request);
      })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
