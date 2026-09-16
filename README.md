# Wedding Invitation Website (Static & GitHub Pages Ready)

Template website undangan pernikahan online yang elegan, responsif, modern, dan dioptimalkan untuk perangkat mobile. Dibangun menggunakan **HTML5, CSS3, dan Vanilla JavaScript** tanpa ketergantungan pada backend server atau framework berat.

---

## 🛠️ Cara Menjalankan Secara Lokal
1. Download atau *clone* repository ini ke komputer Anda.
2. Buka folder proyek di teks editor (seperti VS Code).
3. Jalankan file `index.html` menggunakan ekstensi **Live Server** di VS Code atau buka langsung melalui browser web Anda.

---

## ⚙️ Panduan Kustomisasi (`js/config.js`)

Seluruh data undangan (nama pengantin, tanggal, lokasi, hingga nomor rekening) terpusat di file **`js/config.js`**. Anda tidak perlu mengubah kode di dalam `index.html` atau `script.js`.

### 1. Mengganti Nama & Informasi Pengantin
Buka `js/config.js`, cari bagian `couple`, lalu sesuaikan nama pengantin, nama orang tua, serta link Instagram.

### 2. Mengganti Foto
Letakkan foto Anda di folder `assets/images/` dengan format yang sesuai, lalu perbarui path file pada `js/config.js` atau timpa langsung nama file berikut:
- `cover.jpg` (Background Cover & Closing)
- `groom.jpg` (Foto Pria)
- `bride.jpg` (Foto Wanita)
- `gallery-1.jpg` s.d `gallery-4.jpg` (Foto Galeri)

### 3. Mengganti Tanggal & Countdown
Ubah nilai `countdownDate` pada `js/config.js` dengan format `YYYY-MM-DDTHH:MM:SS`.

### 4. Mengganti Lokasi & Google Maps
Sesuaikan informasi pada objek `event` (`akad` dan `reception`), termasuk alamat dan link Google Maps (`mapsUrl`).

### 5. Mengganti Rekening & Kado Digital
Sesuaikan informasi bank, nomor rekening, atas nama, serta alamat pengiriman kado fisik pada objek `gift`.

### 6. Mengganti Musik Latar
Ganti file audio pada `assets/music/music.mp3` dengan lagu pilihan Anda (pastikan format `.mp3`).

---

## 🌐 Cara Deploy ke GitHub Pages
1. Buat repository baru di GitHub (public).
2. Push seluruh file proyek ke branch `main` atau `master` repository tersebut.
3. Buka repository di GitHub -> Masuk ke menu **Settings** -> **Pages**.
4. Pada bagian **Build and deployment**, pilih Source: **Deploy from a branch** dan pilih branch `main` / `master` (folder `/root`).
5. Klik **Save** dan tunggu beberapa saat. Website Anda akan online secara otomatis!

---

## 🔗 Cara Membuat Link Personalized Undangan (Nama Tamu)
Anda dapat mengirimkan undangan dengan menyertakan nama tamu langsung pada URL menggunakan parameter `?to=`:

Contoh:
`https://username.github.io/nama-repo/?to=Bapak%20Andi%20dan%20Keluarga`

Nama tamu akan otomatis muncul di bagian Cover website. Jika parameter `?to` tidak disertakan, sistem akan otomatis menampilkan teks default `"Bapak/Ibu/Saudara/i"`.