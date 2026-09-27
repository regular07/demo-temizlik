# Koç Temizlik — web sitesi demosu

Gerçek müşteri için hazırlanan **Standart paket** demosu (Hakan Bey, Koç Temizlik).
**Çok sayfalı yapı** (3 sayfa), Bootstrap 5.3 CDN + vanilla JS, derleme adımı yok.

```bash
python3 -m http.server 8110   # http://localhost:8110
```

## Sayfalar
| Dosya | Ne var içinde |
| --- | --- |
| `index.html` | Hero + önce/sonra sürgüsü, 6 hizmetin özet kartları (link → hizmetler.html), kısa "Neden biz", iki sayfaya yönlendiren büyük kartlar, kısa iletişim şeridi |
| `hizmetler.html` | **Filtrelenebilir 6 hizmet** (Tümü / İnşaat sonrası / Ev / İş yeri / Apartman), her kartta "neler dahil" listesi ve hizmet adıyla hazır WhatsApp mesajı |
| `hakkimizda.html` | Neden biz · Nasıl çalışır (3 adım) + hizmet ilçeleri · Yorum şeridi (**örnek yorumlar**) · SSS · İletişim + harita |

Navbar/footer üç sayfada da birebir aynı — menü değişirse hepsini güncelle,
kontrol: `grep -c 'nav-item' *.html` (hepsinde aynı sayı çıkmalı).

## İçerik
- SEO: her sayfada benzersiz title/description/OG/Twitter kartı, canonical,
  JSON-LD (LocalBusiness, sadece `index.html`'de), robots, sitemap (3 sayfa)

## İletişim bilgileri
Gerçek numara kullanıldı: **0538 408 76 86** (`tel:+905384087686`, `wa.me/905384087686`), Instagram `@koctemizlik`.
⚠️ Müşteri siteyi almazsa ve demo portfolyoya taşınırsa numaralar `0532 000 00 00` ile
değiştirilmeli (demo-site kuralı), Instagram linki kaldırılmalı.

## Hakan Bey'le teyit edilecekler
- İşletme adı: "Koç Temizlik" mi, "Koç Temizleme" mi?
- SSS cevapları (malzemeyi kim getiriyor, süre, fiyat mantığı) taslaktır
- Hizmet kartlarındaki "neler dahil" maddeleri genel sektör bilgisidir
- Yorumlar örnektir → gerçek müşteri yorumlarıyla değiştirilecek
- Çalışma saatleri, adres (paylaşılırsa haritaya işlenir)
- Gerçek fotoğraflar: önce/sonra için `assets/img/` + `.yuzey-kirli` / `.yuzey-temiz`

## Kontrol
```bash
grep -rhoE 'tel:\+?[0-9]+|wa\.me/[0-9]+' index.html | sort | uniq -c
```
