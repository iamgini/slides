# CLAUDE.md — slides

Markdown-based presentation system using **reveal-md** (a Markdown wrapper around reveal.js).
Hosted on **Cloudflare Pages** as static HTML. Multiple decks live in one repo.

## Repository Structure

```
slides/
├── CLAUDE.md               # This file
├── package.json            # Root build (node build.js)
├── build.js                # Auto-discovers decks, builds each to dist/<name>/
├── .gitignore              # node_modules/, dist/
└── ansible-use-cases/      # Ansible Automation Use Case Gallery deck
    ├── slides.md           # Markdown source (reveal-md format)
    ├── custom.css          # White theme with red accent, card grid, footer
    └── plugins.js          # Footer injection + RevealSearch registration
```

## Adding a New Deck

Create a subfolder with a `slides.md` — `build.js` discovers it automatically:

```bash
mkdir my-new-deck
# add my-new-deck/slides.md and my-new-deck/custom.css
npm run build   # picks it up, outputs to dist/my-new-deck/
```

## Running Locally

```bash
cd /home/gmadappa/workarea/slides
npm install
npm run dev     # serves ansible-use-cases at http://127.0.0.1:1948
```

To serve a different deck:
```bash
npx reveal-md other-deck/slides.md --watch
```

## Building for Cloudflare Pages

```bash
npm run build   # outputs all decks to dist/  +  dist/index.html listing
```

## Cloudflare Pages Settings

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version env var | `NODE_VERSION = 22` |

GitHub repo: https://github.com/iamgini/slides

## Running via Podman Container

Container is maintained at `/home/gmadappa/workarea/podman-usecases/podman-reveal-js/`.

```bash
cd /home/gmadappa/workarea/slides/ansible-use-cases
podman run --rm -p 1948:1948 -v ${PWD}:/slides:Z reveal-js:latest \
  /slides/slides.md --host 0.0.0.0
# → http://127.0.0.1:1948
```

Pre-flight overflow check:
```bash
podman run --rm -v ${PWD}:/slides:Z reveal-js:latest \
  preflight /slides/slides.md
```

## slides.md Frontmatter Reference

```yaml
---
title: My Deck Title
theme: white          # base reveal.js theme
css: custom.css
scripts:
  - plugin/search/search.js   # enables Ctrl+Shift+F search
  - plugins.js                # footer + search registration
revealOptions:
  transition: slide
  transitionSpeed: fast       # default | fast | slow
  center: false               # top-aligned slides
  slideNumber: true
  controls: true
  progress: true
  width: 1280
  height: 720
  margin: 0.04
---
```

## Slide Authoring Patterns

### Slide separators
- `---` — next horizontal slide
- `--` — next vertical slide (press ↓)

### Section divider slide (centered, with ID for agenda links)
```markdown
<!-- .slide: class="vcenter" id="my-section" -->
# Section Title
```

### Section label (small red text above heading)
```markdown
*Section Name*

## Slide Title
```
Standalone `*italic*` on its own line renders as a small red label. Inline italics in sentences are unaffected.

### Layout quick-reference

| # | Name | Class(es) | Best for |
|---|---|---|---|
| 1 | Card grid 2-col | `.card-grid` | 4–6 named concepts with descriptions |
| 2 | Card grid 3-col | `.card-grid.three-col` | 6–9 short concepts |
| 3 | Numbered pillars | `.pillar-grid` + `.pillar` | Ordered rules — big 01/02 emphasis |
| 4 | Split layout | `.split-layout` + `.split-headline` + `.rule-list` | Big label left, dense list right |
| 5 | Stat row | `.stat-row` + `.stat-item` + `.stat-number` | 3 key metrics |
| 6 | Two-column list | `.two-col-list` | 5–8 text-heavy items |
| 7 | Checklist | `.checklist` + `li.no` | ✓/✗ do/don't lists |
| 8 | Process steps | `.process-steps` + `.step` | 3–5 sequential phases |
| 9 | Highlight band | `.highlight-band` / `.dark` / `.light` | Full-width callout bar |
| 10 | Full-bleed red | `bg-red` + `data-background-color="#EE0000"` | High-impact section transitions |
| 11 | Full-bleed dark | `bg-dark` + `data-background-color="#1a1a1a"` | Closing / premium sections |
| 12 | Two-col with headers | `.col-layout` + `.col-header` | Before/After, Benefits/Risks |
| 13 | Alternating table | automatic on all Markdown tables | 5+ row data slides |

### Card grid (2-column)
```html
<div class="card-grid">
  <div class="card">
    <h4>Card Title</h4>
    <p>Short description — aim for 2 lines max.</p>
  </div>
</div>
```

### Card grid (3-column)
```html
<div class="card-grid three-col">
  <div class="card"><h4>Title</h4><p>Description.</p></div>
</div>
```

### Numbered pillars
```html
<div class="pillar-grid">
  <div class="pillar">
    <span class="pillar-num">01</span>
    <div><div class="pillar-title">Rule Title</div><div class="pillar-desc">Description.</div></div>
  </div>
</div>
```

### Split layout
```html
<div class="split-layout">
  <div class="split-left">
    <div class="split-headline">Big<br>Label</div>
    <div class="split-sub">Optional subtitle.</div>
  </div>
  <div class="split-right">
    <div class="rule-list">
      <div class="rule-item"><strong>Term</strong> — Description.</div>
    </div>
  </div>
</div>
```

### Stat row
```html
<div class="stat-row">
  <div class="stat-item"><span class="stat-number">96%</span><div class="stat-label">Caption.</div></div>
  <div class="stat-item"><span class="stat-number">4×</span><div class="stat-label">Caption.</div></div>
  <div class="stat-item"><span class="stat-number">24h</span><div class="stat-label">Caption.</div></div>
</div>
```

### Two-column list
```html
<div class="two-col-list">
  <div><strong>Term</strong> — Description.</div>
  <div><strong>Term</strong> — Description.</div>
</div>
```

### Checklist
```html
<ul class="checklist">
  <li>Good practice — green tick.</li>
  <li class="no">Violation — red cross.</li>
</ul>
```

### Process steps
```html
<div class="process-steps">
  <div class="step">
    <span class="step-num">01</span>
    <div class="step-title">Phase</div>
    <div class="step-desc">What happens.</div>
  </div>
</div>
```

### Highlight band
```html
<div class="highlight-band">Red band — default.</div>
<div class="highlight-band dark">Dark band.</div>
<div class="highlight-band light">Light band — red text on grey.</div>
```

### Full-bleed colored section
```markdown
<!-- .slide: class="vcenter bg-red" data-background-color="#EE0000" -->
# White Text on Red

<!-- .slide: class="vcenter bg-dark" data-background-color="#1a1a1a" -->
# Red Heading on Dark
```

### Two-column with icon headers
```html
<div class="col-layout">
  <div class="col">
    <span class="col-header">✅ Do</span>
    <ul><li>Item</li></ul>
  </div>
  <div class="col">
    <span class="col-header">✗ Don't</span>
    <ul><li>Item</li></ul>
  </div>
</div>
```

### Blockquote callout
```markdown
> Important note with red left border.
```

### Sub-section grouping (bullets with bold group labels)
```markdown
**Group A**
- **Item**: Description.

**Group B**
- **Item**: Description.
```

## Keyboard Shortcuts (reveal.js)

| Key | Action |
|---|---|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `O` or `Esc` | Overview mode (thumbnail grid) |
| `F` | Fullscreen |
| `S` | Speaker notes |
| `Ctrl+Shift+F` | Search (enabled via plugins.js) |

## Updating the Last-Updated Footer

Edit the date in `plugins.js`:
```js
var LAST_UPDATED = '2026-09-17';
```

## CSS Theme Summary (custom.css)

| Element | Style |
|---|---|
| Font | Red Hat Display (Google Fonts) |
| Base font size | `28px` |
| Accent colour | `#EE0000` (red) |
| `**bold**` | Renders red — use for key terms |
| `h3` | Red, for sub-section headings |
| Bullet `•` | Red dot via CSS `::before` |
| Cards | Red left border, light grey background |
| Footer | Fixed top-right, `12px`, light grey |
| Section slides | `vcenter` class for vertical centering |
| Content slides | `padding-top: 1.2em` for breathing room |
