# Malvern Paws — Dog Sitting Service Website

A beautiful, modern, fully responsive static website for Malvern Paws dog sitting service in Melbourne, Australia. Built with pure HTML, CSS, and vanilla JavaScript — no build tools or frameworks required.

## Features

✅ **Fully Responsive** — Mobile-first design using CSS Flexbox and Grid  
✅ **Sticky Navigation** — Easy access to all sections via anchor links  
✅ **Professional Design** — Color palette matching business branding  
✅ **GitHub Pages Ready** — Deploy directly from a GitHub repository  
✅ **Fast & Lightweight** — No dependencies or build process needed  
✅ **Accessibility** — Semantic HTML and keyboard navigation support  
✅ **Font Awesome Icons** — Free, professional service icons  
✅ **Google Fonts** — Nunito font for modern, friendly appearance  

## File Structure

```
malvern-paws/
├── index.html          # Main HTML file with all sections
├── styles.css          # All styling
├── script.js           # Lightweight JavaScript for interactivity
├── README.md           # This file
├── .gitignore          # Git ignore configuration
└── images/
    ├── hero.jpg        # Hero banner image (1200×600)
    ├── profile.jpg     # About section profile photo
    ├── dog1.jpg        # Gallery image
    ├── dog2.jpg        # Gallery image
    ├── dog3.jpg        # Gallery image
    ├── dog4.jpg        # Gallery image
    ├── dog5.jpg        # Gallery image
    └── dog6.jpg        # Gallery image
```

## Setup Instructions

### 1. Download or Clone the Repository

If you don't have Git, simply download the files as a ZIP and extract them.

```bash
git clone https://github.com/yourusername/malvern-paws.git
cd malvern-paws
```

### 2. Add Your Business Photos

Replace placeholder images in the `images/` folder:

- **`hero.jpg`** (1200×600) — Full-width banner image for the hero section. Look for comments `<!-- REPLACE with your photo -->` in `index.html`.
- **`profile.jpg`** (circular, suggested 300×300 or higher) — Your family photo for the About section.
- **`dog1.jpg` through `dog6.jpg`** (400×400 recommended) — Happy dog photos for the gallery. These can be square or any aspect ratio; CSS will maintain the square layout.

**Supported formats:** JPG, PNG, WebP

### 3. Update Business Information

Open `index.html` and search for placeholder text to customize:

- **Phone number**: Replace `(03) XXXX XXXX` with your actual phone number
- **Pricing**: Replace `$XX` with your nightly rate (search for `<!-- ADD YOUR RATE -->`)
- **Social media** (optional): Add links or contact info as needed

### 4. Set Up Formspree for Contact Form

Email submissions use [Formspree](https://formspree.io) — it's free and requires no backend.

1. Go to https://formspree.io
2. Sign up with your email
3. Create a new form
4. Copy your form endpoint ID (looks like: `f/abc123def456`)
5. In `index.html`, find the line with `https://formspree.io/f/YOUR_FORM_ID`
6. Replace `YOUR_FORM_ID` with your actual form ID

Example: `https://formspree.io/f/xyzwqpvr`

Look for the comment `<!-- REPLACE with your Formspree endpoint -->` for easy location.

### 5. (Optional) Add Tidio AI Chat Widget

For a live chat feature:

1. Sign up free at https://tidio.com
2. Create a new chat project
3. Copy the embed code provided by Tidio
4. In `index.html`, find the comment `<!-- TIDIO CHAT WIDGET: Sign up free at tidio.com, then paste your embed script here -->`
5. Paste your Tidio embed code directly below that comment in the Contact section

This is entirely optional — your site works perfectly without it.

### 6. Test Locally

Open `index.html` in your web browser to preview the site. No server required!

For a better local experience (especially if testing forms), you can use Python's built-in server:

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### 7. Deploy to GitHub Pages

**Free hosting with GitHub Pages!**

1. Create a new GitHub repository named `malvern-paws` (or any name)
2. Push your files to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Malvern Paws website"
git branch -M main
git remote add origin https://github.com/yourusername/malvern-paws.git
git push -u origin main
```

3. In your GitHub repository settings:
   - Go to **Settings** → **Pages**
   - Select **Source: Deploy from a branch**
   - Choose **Branch: main** → **Folder: / (root)**
   - Save

4. Your site will be live at: `https://yourusername.github.io/malvern-paws/`

**Note:** Changes may take 1–2 minutes to appear after you push.

## Customization

### Colors

The site uses CSS variables for easy customization. In `styles.css`, update the `--root` values:

```css
:root {
    --primary-color: #4A7C8E;      /* Teal/slate */
    --accent-color: #D4B896;       /* Warm beige */
    --background-color: #FAF8F5;   /* Soft off-white */
    --text-color: #2C2C2C;         /* Dark charcoal */
}
```

### Font

The site uses Google Fonts 'Nunito'. To change the font:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your preferred font
3. Update the `<link>` tag in `index.html` under the "Google Fonts" section

### Layout Changes

All major sections are in `index.html` and styled in `styles.css`. The layout uses CSS Grid and Flexbox for responsive design. Modify as needed!

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Page size:** ~50KB (excluding images)
- **Fully loads:** <1 second on modern connections
- **Mobile-optimized:** Ready for all device sizes

## SEO

The site includes:
- Semantic HTML5 structure
- Meta descriptions and Open Graph tags
- Mobile viewport optimization
- Fast page load times

For better SEO, add:
- Google Analytics (optional)
- Google Search Console verification
- Local business schema markup

## Troubleshooting

### Forms not sending?
- Double-check your Formspree form ID
- Verify your email is confirmed on Formspree
- Check browser console for errors (F12)

### Images not showing?
- Ensure image files are in the `images/` folder
- Verify filenames match exactly (case-sensitive on servers)
- Use JPG, PNG, or WebP formats

### Site not updating on GitHub Pages?
- Hard refresh browser with **Ctrl+Shift+R** (or **Cmd+Shift+R** on Mac)
- Check GitHub Actions for build errors
- Wait 1–2 minutes for deployment

### Navigation links not working?
- Ensure section IDs match the anchor links (e.g., `id="services"` and `href="#services"`)
- Clear browser cache if needed

## License

This template is free for personal and commercial use.

## Support

For questions or issues, refer to the comments in `index.html` and `styles.css` — they mark all placeholder sections clearly.

---

**Happy to have Malvern Paws online! 🐾**
