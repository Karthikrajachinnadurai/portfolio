# C. Karthik Raja – Portfolio

Personal portfolio website built with **React + Vite + Tailwind CSS**, deployable to Vercel.

## 📁 Asset Slots

Drop your files into these exact paths — no code changes needed.

### Profile Photo

| Path | Recommended Size | Description |
|------|-----------------|-------------|
| `public/assets/profile/Profile.jpg` | 400×400 px (1:1, square) | Used in Hero section and About section |

### Project Screenshots

| Path | Recommended Size | Description |
|------|-----------------|-------------|
| `public/assets/projects/mental-health.png` | 1280×720 px (16:9) | AI Mental Health Assistant screenshot |
| `public/assets/projects/atm.png` | 1280×720 px (16:9) | ATM Transaction System screenshot |

### Event / Activity Photos

| Path | Recommended Size | Description |
|------|-----------------|-------------|
| `public/assets/events/photo1.jpg` | 800×800 px (square) | TechGeeks 2025 contest photo |
| `public/assets/events/photo2.jpg` | 800×800 px (square) | Council / leadership photo |
| `public/assets/events/photo3.jpg` | 800×800 px (square) | Paper presentation photo |
| `public/assets/events/*.jpg` | 800×800 px (square) | Add as many as you like |

After adding event photos, **update `src/data/content.js`** — add entries to the `eventPhotos` array:

```js
export const eventPhotos = [
  { src: "/assets/events/photo1.jpg", alt: "1st place at TechGeeks 2025 coding event" },
  { src: "/assets/events/photo2.jpg", alt: "Student Council President installation ceremony" },
  // ...
];
```

### Certificate Images (Optional)

| Path | Recommended Size | Description |
|------|-----------------|-------------|
| `public/assets/certificates/ml-cert.jpg` | 1200×850 px | Coursera ML certificate |
| `public/assets/certificates/ibm-cert.jpg` | 1200×850 px | IBM Python certificate |

To link a certificate image to a certification card, update `src/data/content.js`:

```js
{ id: "cert-1", title: "...", issuer: "...", date: "...", image: "/assets/certificates/ml-cert.jpg" },
```

### Resume

| Path | Format | Description |
|------|--------|-------------|
| `public/resume.pdf` | PDF | Your resume — linked from the Download Resume button |

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

## 🌐 Deploying to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

After deployment, update these in `index.html` and `public/sitemap.xml`:
- Replace `https://karthikraja-portfolio.vercel.app/` with your actual Vercel URL

## ✏️ Editing Content

All text content lives in **`src/data/content.js`**. Edit that file to update:
- Personal info, tagline, about text
- Skills categories and items
- Projects (title, description, tech, links)
- Achievements
- Education
- Certifications
- Event photos list

## 📬 Setting Up the Contact Form

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy the form ID (looks like `xabcdefg`)
3. In `src/sections/Contact.jsx`, replace:
   ```js
   const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your actual form ID.
