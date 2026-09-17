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

### Card grid (2-column)
```html
<div class="card-grid">
  <div class="card">
    <h4>Card Title</h4>
    <p>Short description — aim for 2 lines max.</p>
  </div>
  <div class="card">
    <h4>Card Title</h4>
    <p>Short description.</p>
  </div>
</div>
```

### Card grid (3-column)
```html
<div class="card-grid three-col">
  ...9 cards max before text gets too small...
</div>
```

### Blockquote callout
```markdown
> Important note or cross-reference with red left border.
```

### Sub-section grouping (bullets with bold group labels)
```markdown
## Slide Title

**Group A**
- **Item**: Description.

**Group B**
- **Item**: Description.
```
Use this instead of cards when items are grouped under headings.

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
