# Memory Lane - Birthday Memories (Next.js)

A beautiful scrapbook-style birthday memory gallery built with **Next.js 14**, TypeScript, and Tailwind CSS.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your photos

Place your photos in `public/photos/`:

```
public/
  photos/
    1.jpg
    2.jpg
    3.jpg
    ...
    10.jpg
```

You can use `.jpg`, `.jpeg`, `.png`, `.gif`, or `.webp` files. Update the `image` paths in `app/page.tsx` if your filenames differ.

### 3. Customize memories

Open `app/page.tsx` and edit the `memories` array to update:
- `image` — path to the photo (relative to `/public`)
- `caption` — the hover caption text
- `rotationAngle` — slight tilt of the card (-3 to 3 recommended)
- `emoji` — the sticker emoji shown on each card

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### 5. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
memory-lane/
├── app/
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── globals.css       # All styles + keyframe animations
│   ├── page.tsx          # Main Memory Lane page
│   └── cake/
│       └── page.tsx      # Placeholder "next surprise" page
├── components/
│   ├── Confetti.tsx      # Animated confetti pieces
│   ├── Balloons.tsx      # Floating balloons
│   ├── FloatingStickers.tsx  # Corner sticker decorations
│   ├── MemoryCard.tsx    # Individual photo card
│   └── MemoryGallery.tsx # Scrollable gallery + slideshow
├── public/
│   └── photos/           # ← Put your photos here
└── ...config files
```

## Customization Tips

- **Title**: Change `"Our Memory Lane"` in `app/page.tsx`
- **Subtitle**: Edit the `<p>` tag in the header section
- **Colors**: All colors are defined as CSS variables in `globals.css`
- **Add more cards**: Just add more objects to the `memories` array
- **Navigation links**: The back button links to `/` and next button to `/cake`
