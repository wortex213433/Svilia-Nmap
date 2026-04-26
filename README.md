[Uploading README (1).md…]()
<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=3000&pause=1000&color=39FF14&center=true&vCenter=true&width=600&lines=SVILIA-NMAP;Advanced+Network+Discovery;Recon+%7C+Scan+%7C+Detect" alt="Typing SVG" />

<br/>

![Version](https://img.shields.io/badge/VERSION-v4.9.2--ALPHA-39FF14?style=for-the-badge&labelColor=0d0d0d)
![Platform](https://img.shields.io/badge/PLATFORM-KALI_LINUX-557C94?style=for-the-badge&labelColor=0d0d0d&logo=linux&logoColor=white)
![Stack](https://img.shields.io/badge/STACK-React_+_TypeScript-61DAFB?style=for-the-badge&labelColor=0d0d0d&logo=react&logoColor=61DAFB)
![Engine](https://img.shields.io/badge/ENGINE-NMAP_7.98-FF6B35?style=for-the-badge&labelColor=0d0d0d)

<br/>

> **Svilia-Nmap**, Nmap'in gücünü modern bir web arayüzüyle birleştiren gelişmiş ağ keşif ve recon platformudur. Kinetic Engine Visualizer ile gerçek zamanlı ağ analizi yapın.

<br/>

---

</div>

## ⚡ Özellikler

```
┌─────────────────────────────────────────────────────────────────┐
│  QUICK SCAN     →  Ağdaki aktif cihazları hızlıca keşfeder     │
│  OS DETECT      →  Hedef sistemin işletim sistemini tespit eder │
│  SCRIPT AUDIT   →  NSE scriptleriyle gelişmiş güvenlik denetimi│
│  LIVE STREAM    →  Sonuçları gerçek zamanlı olarak gösterir     │
│  KINETIC VIZ    →  Ağ topolojisini görsel olarak işler          │
│  CIDR SUPPORT   →  192.168.1.0/24 gibi ağ aralığı desteği      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Gereksinimler

| Araç | Minimum Versiyon |
|------|-----------------|
| Nmap | v7.0+ |
| Node.js | v20+ |
| npm | v9+ |
| OS | Kali Linux (önerilir) |

---

## 🚀 Kurulum

**1 — Repoyu klonla**
```bash
git clone https://github.com/wortex213433/Svilia-Nmap.git
cd Svilia-Nmap
```

**2 — Node.js kur (Kali Linux)**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y nodejs
```

**3 — Bağımlılıkları yükle**
```bash
npm install
```

**4 — Ortam değişkenlerini ayarla**
```bash
cp .env.example .env
# .env dosyasını düzenleyip gerekli değerleri doldur
```

**5 — Çalıştır**
```bash
npm run dev
```

**6 — Tarayıcıdan aç**
```
http://localhost:3000
```

---

## 📖 Kullanım

**Hedef gir:**
```
192.168.1.1           # Tekil IP
192.168.1.0/24        # Ağ aralığı (CIDR)
10.0.0.1-50           # IP aralığı
scanme.nmap.org       # Domain
```

**Mod seç ve çalıştır:**

| Buton | Nmap Karşılığı | Açıklama |
|-------|---------------|----------|
| `QUICK SCAN` | `nmap -F` | Hızlı port keşfi |
| `OS DETECT` | `nmap -O` | İşletim sistemi tespiti |
| `SCRIPT AUDIT` | `nmap -sC -sV` | Script + versiyon taraması |

**EXECUTE SVILIA** butonuna bas → **Live Recon Stream** panelinden sonuçları izle.

---

## ⚙️ Tech Stack

```
Frontend  →  React 19 + TypeScript + Vite 6
Styling   →  Tailwind CSS 4
Engine    →  Nmap 7.98
Animasyon →  Motion (Framer Motion)
İkonlar   →  Lucide React
```

---

## ⚠️ Yasal Uyarı

> Bu araç yalnızca **yetkili olduğunuz ağlar ve sistemler** üzerinde kullanım içindir.
> İzinsiz ağ taraması birçok ülkede yasalara aykırıdır.
> Geliştiriciler, aracın kötüye kullanımından sorumlu tutulamaz.

---

## 👨‍💻 Geliştiriciler

<div align="center">
<table>
  <tr>
    <td align="center" width="300">
      <a href="https://github.com/svilia">
        <img src="https://github.com/svilia.png" width="100" height="100" style="border-radius: 50%; border: 3px solid #39FF14;" alt="svilia"/>
        <br/><br/>
        <b>svilia</b>
        <br/>
        <sub>Co-Developer</sub>
      </a>
    </td>
    <td align="center" width="300">
      <a href="https://github.com/wortex213433">
        <img src="https://github.com/wortex213433.png" width="100" height="100" style="border-radius: 50%; border: 3px solid #39FF14;" alt="wortex213433"/>
        <br/><br/>
        <b>wortex213433</b>
        <br/>
        <sub>Co-Developer</sub>
      </a>
    </td>
  </tr>
</table>
</div>

---

<div align="center">
  <sub>Built with ❤️ for the security community · SVILIA-X-VECTOR-SYNC_V4</sub>
</div>
