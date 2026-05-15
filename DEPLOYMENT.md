# Deployment Guide

Deploy your portfolio to GitHub Pages, Vercel, or Netlify for free! Choose the option that works best for you.

## Option 1: GitHub Pages (Recommended for GitHub Users)

GitHub Pages hosts your portfolio directly from your GitHub repository - completely free with a custom domain.

### Steps:

1. **Create a GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it: `portfolio` or `your-username.github.io`
   - Make it Public
   - Click "Create repository"

2. **Push Your Code**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/hasyed97/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be available at: `https://hasyed97.github.io/portfolio`

4. **Custom Domain (Optional)**
   - In Settings > Pages
   - Add your custom domain (e.g., `yourname.dev`)
   - Update DNS records at your domain provider
   - GitHub will provide instructions

## Option 2: Vercel (Recommended for Performance)

Vercel is optimized for fast, modern web hosting with automatic deployments.

### Steps:

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "New Project"
   - Select your portfolio repository
   - Click "Import"

2. **Configure (Keep Defaults)**
   - Root Directory: `./`
   - Framework: "Other"
   - Click "Deploy"

3. **Your site is live!**
   - Vercel assigns a URL: `portfolio-<random>.vercel.app`
   - Every push to main auto-deploys

4. **Add Custom Domain (Optional)**
   - Go to Project Settings > Domains
   - Add your domain
   - Follow DNS configuration

## Option 3: Netlify

Netlify is another great option with excellent performance.

### Steps:

1. **Deploy from Git**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Keep default settings
   - Click "Deploy site"

2. **Your site is live!**
   - Netlify assigns a URL
   - Auto-deploys on push

## Option 4: Traditional Web Hosting

For traditional hosting (shared, VPS, dedicated servers):

1. **Build (if needed)**
   ```bash
   # No build step needed for static HTML
   # Just upload all files to your hosting
   ```

2. **Upload Files**
   - Use FTP/SFTP client (FileZilla, WinSCP)
   - Or use your hosting provider's file manager
   - Upload to `public_html/` or equivalent

3. **Set Index Page**
   - Your hosting should automatically serve `index.html`
   - If not, set it in your hosting control panel

## Domain Setup

### Using Namecheap, GoDaddy, or similar:

1. **DNS Records for GitHub Pages**
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   CNAME: www -> hasyed97.github.io
   ```

2. **DNS Records for Vercel**
   ```
   CNAME: your-domain -> cname.vercel-dns.com
   ```

3. **DNS Records for Netlify**
   ```
   CNAME: your-domain -> your-site.netlify.app
   ```

## Continuous Deployment

All three services support automatic deployment:

- **Make a change** → Push to GitHub
- **GitHub notices** → Automatically rebuilds
- **Site updates** → Within seconds

No manual deployment needed!

## Performance Tips

1. **Minify CSS** (Optional)
   - Use [cssnano](https://cssnano.co/)
   - Reduces file size by ~30%

2. **Optimize Images**
   - Use WebP format
   - Compress before upload
   - Use modern image sizes

3. **Enable Caching**
   - Both Vercel and Netlify do this automatically
   - GitHub Pages uses HTTP cache headers

4. **Monitor Performance**
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Target 90+ scores

## Troubleshooting

**Site not updating?**
- Check GitHub Actions (if using GitHub Pages)
- Clear browser cache (Ctrl+Shift+R)
- Wait 5 minutes for DNS propagation

**404 Errors?**
- Ensure index.html is in root directory
- Check file permissions (644 for files, 755 for dirs)

**Custom domain not working?**
- DNS changes take 24-48 hours to propagate
- Verify records at [mxtoolbox.com](https://mxtoolbox.com/dnscheck.aspx)

**Slow performance?**
- Check file sizes
- Enable compression
- Consider a CDN

## Support

- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)

---

**Recommended Setup**: GitHub Pages (free domain subdomain) + Vercel (faster performance) or GitHub Pages + custom domain from Namecheap (~$8/year).
