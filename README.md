[README.md](https://github.com/user-attachments/files/27105117/README.md)

<div align="center">

# ⚡ SVILIA-NMAP
### Advanced Network Discovery & Recon Interface

![Version](https://img.shields.io/badge/version-v4.9.2--ALPHA-brightgreen?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-Kali%20Linux-557C94?style=for-the-badge&logo=linux)
![Tech](https://img.shields.io/badge/built%20with-React%20%2B%20TypeScript-61DAFB?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)

> **Svilia-Nmap**, Nmap'in gücünü modern ve şık bir web arayüzüyle birleştiren gelişmiş bir ağ keşif ve recon aracıdır.

</div>

---

## 🖥️ Arayüz

Svilia-Nmap, **Kinetic Engine Visualizer** adı verilen gerçek zamanlı görselleştirme motoru ve **Live Recon Stream** ile scan sonuçlarını anlık olarak takip etmenizi sağlar.

---

## ✨ Özellikler

- 🔍 **Quick Scan** — Ağdaki cihazları hızlıca keşfeder
- 🖥️ **OS Detect** — Hedef sistemlerin işletim sistemini tespit eder
- 📜 **Script Audit** — Nmap NSE scriptleriyle gelişmiş güvenlik denetimi yapar
- ⚡ **Live Recon Stream** — Scan sonuçlarını gerçek zamanlı akışla gösterir
- 🌐 **Kinetic Engine Visualizer** — Ağ topolojisini görsel olarak işler
- 🎯 **CIDR Desteği** — Tekil IP veya ağ aralığı (örn. `192.168.1.0/24`) taraması

---

## 🛠️ Gereksinimler

- [Nmap](https://nmap.org/) (v7.0+)
- [Node.js](https://nodejs.org/) (v20+)
- npm
- Kali Linux (önerilir) veya herhangi bir Linux dağıtımı

---

## 🚀 Kurulum

**1. Repoyu klonla:**
```bash
git clone https://github.com/wortex213433/Svilia-Nmap.git
cd Svilia-Nmap
```

**2. Node.js kur (Kali Linux):**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y nodejs
```

**3. Bağımlılıkları yükle:**
```bash
npm install
```

**4. Ortam değişkenlerini ayarla:**
```bash
cp .env.example .env
```

**5. Uygulamayı başlat:**
```bash
npm run dev
```

**6. Tarayıcıdan aç:**
```
http://localhost:3000
```

---

## 📖 Kullanım

1. Üstteki arama kutusuna hedef IP veya ağ aralığı gir:
   ```
   192.168.1.1          # Tekil IP
   192.168.1.0/24       # Ağ aralığı
   ```

2. Scan modunu seç:
   | Buton | Açıklama |
   |-------|----------|
   | **QUICK SCAN** | Hızlı port ve host keşfi |
   | **OS DETECT** | İşletim sistemi tespiti (`-O` flag) |
   | **SCRIPT AUDIT** | NSE script tabanlı güvenlik denetimi |

3. **EXECUTE SVILIA** butonuna bas ve **Live Recon Stream** panelinden sonuçları izle.

---

## ⚙️ Tech Stack

| Teknoloji | Kullanım |
|-----------|----------|
| React 19 | UI Framework |
| TypeScript | Tip güvenliği |
| Vite 6 | Build & Dev server |
| Tailwind CSS 4 | Stil |
| Nmap | Ağ tarama motoru |

---

## ⚠️ Yasal Uyarı

Bu araç yalnızca **yetkili olduğunuz ağlar ve sistemler** üzerinde kullanım içindir. İzinsiz ağ taraması yasalara aykırı olabilir. Geliştiriciler, aracın kötüye kullanımından sorumlu tutulamaz.

---

## 👨‍💻 Geliştiriciler

Bu proje iki kişi tarafından geliştirilmiştir.

- [@wortex213433](https://github.com/wortex213433)

---

<div align="center">
  <sub>Built with ❤️ for the security community</sub>
</div>
