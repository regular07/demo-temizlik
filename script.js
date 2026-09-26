/* ================================================================
   Koç Temizlik — etkileşimler (kütüphanesiz, vanilla JS)
   1) Önce/sonra sürgüsü  2) Hizmet filtresi  3) Yorum kaydırma
   4) Menü gölgesi + mobilde linke tıklayınca menüyü kapat  5) Yıl
   ================================================================ */
(function () {
  'use strict';

  /* 1) ÖNCE / SONRA SÜRGÜSÜ
     Görünmez range input'un değeri --konum değişkenine yazılır;
     CSS kirli katmanı bu değere göre kırpar. */
  var kutu = document.getElementById('onceSonra');
  var surgu = document.getElementById('surgu');
  if (kutu && surgu) {
    var guncelle = function () { kutu.style.setProperty('--konum', surgu.value + '%'); };
    surgu.addEventListener('input', guncelle);
    guncelle();
  }

  /* 2) HİZMET FİLTRESİ
     Kartın data-kategori'si boşlukla ayrılmış birden çok kategori içerebilir. */
  var filtreler = document.querySelectorAll('.filtre');
  var hizmetler = document.querySelectorAll('.hizmet');
  filtreler.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var secim = btn.getAttribute('data-filtre');
      filtreler.forEach(function (b) { b.classList.toggle('aktif', b === btn); b.setAttribute('aria-pressed', b === btn); });
      hizmetler.forEach(function (h) {
        var kategoriler = h.getAttribute('data-kategori').split(' ');
        h.classList.toggle('gizli', secim !== 'hepsi' && kategoriler.indexOf(secim) === -1);
      });
    });
  });

  /* 3) YORUM ŞERİDİ — ok butonları bir kart genişliği kaydırır */
  var serit = document.getElementById('yorumSerit');
  document.querySelectorAll('.kaydir').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!serit) return;
      var kart = serit.querySelector('.yorum');
      var adim = kart ? kart.getBoundingClientRect().width + 20 : 320;
      serit.scrollBy({ left: adim * Number(btn.getAttribute('data-yon')), behavior: 'smooth' });
    });
  });

  /* 4) MENÜ — kaydırınca gölge, mobilde link seçilince menüyü kapat */
  var menu = document.getElementById('ustMenu');
  var golge = function () { if (menu) menu.classList.toggle('golgeli', window.scrollY > 10); };
  window.addEventListener('scroll', golge, { passive: true });
  golge();
  var acilir = document.getElementById('menu');
  document.querySelectorAll('#menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (acilir && acilir.classList.contains('show') && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(acilir).hide();
      }
    });
  });

  /* 5) FOOTER YILI — sabit yazılmasın */
  var yil = document.getElementById('yil');
  if (yil) yil.textContent = new Date().getFullYear();
})();
