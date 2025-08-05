# Wildlife Photography Portfolio

A modern, minimalist photography portfolio website built with Next.js, featuring comprehensive image protection and optimized for static hosting.

## Features

- **Minimalist Design**: Clean, charcoal-black matte finish with subtle textures
- **Image Protection**: Multiple layers of protection against unauthorized downloads
  - Disabled right-click context menu
  - Disabled drag-and-drop
  - Canvas-based image rendering
  - Transparent watermark overlays
  - CSS and JavaScript overlays
- **Fullscreen Viewer**: Immersive image viewing experience
- **Responsive Design**: Optimized for all devices
- **Static Export**: Ready for free hosting on GitHub Pages, Vercel, or Netlify
- **Performance Optimized**: Lightweight and fast loading

## Image Protection Features

This portfolio implements multiple deterrents against unauthorized image downloads:

1. **Context Menu Blocking**: Right-click disabled globally
2. **Drag Prevention**: Images cannot be dragged or saved
3. **Canvas Rendering**: Images rendered on canvas instead of `<img>` tags
4. **Watermark Overlay**: Subtle copyright watermarks
5. **Developer Tools Prevention**: Keyboard shortcuts disabled
6. **Print Screen Protection**: Clipboard clearing on print screen
7. **Invisible Overlays**: Transparent layers preventing direct image access

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Heroicons)
- **Language**: TypeScript
- **Deployment**: Static export for hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd photography-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding Your Images

Replace the sample Unsplash images in the following files with your own:

- `src/app/page.tsx` - Featured images on home page
- `src/app/birds/page.tsx` - Bird photography gallery
- `src/app/landscapes/page.tsx` - Landscape photography gallery  
- `src/app/people/page.tsx` - Portrait photography gallery
- `src/app/about/page.tsx` - About page portrait

### Updating Content

1. **Site Title & Metadata**: Edit `src/app/layout.tsx`
2. **Navigation**: Modify `src/components/Navigation.tsx`
3. **Contact Information**: Update `src/app/contact/page.tsx`
4. **About Content**: Edit your story in `src/app/about/page.tsx`

### Customizing Protection

Adjust image protection settings in:
- `src/components/ImageProtection.tsx` - Global protection
- `src/components/ProtectedImage.tsx` - Canvas rendering and watermarks
- `src/app/globals.css` - CSS-based protection

## Deployment

### Static Export

Build the static site:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

### GitHub Pages

1. Enable GitHub Pages in your repository settings
2. Set source to "GitHub Actions"
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. No additional configuration needed

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── birds/             # Birds gallery
│   ├── landscapes/        # Landscapes gallery
│   ├── people/            # People gallery
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── ImageProtection.tsx # Global protection
│   ├── ProtectedImage.tsx # Canvas image component
│   └── ImageSlider.tsx    # Gallery slider
```

## Image Optimization Tips

1. **Size**: Optimize images to 1200px width for web display
2. **Format**: Use WebP or JPEG for best compatibility
3. **Compression**: Balance quality vs file size (80-90% quality recommended)
4. **Alt Text**: Always include descriptive alt text for accessibility

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Copyright Notice

All photographs in this portfolio are protected by copyright. Unauthorized use, reproduction, or distribution is prohibited. The image protection features are deterrents and should be combined with proper legal copyright notices and terms of use.

## Support

For questions or support, please contact through the website's contact form or create an issue in the repository.
