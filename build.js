const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DIST = 'dist';

// Discover all decks — any subfolder containing slides.md
const decks = fs.readdirSync('.').filter(
  (d) => fs.statSync(d).isDirectory() && fs.existsSync(path.join(d, 'slides.md'))
);

if (decks.length === 0) {
  console.error('No decks found (no subfolder with slides.md)');
  process.exit(1);
}

fs.mkdirSync(DIST, { recursive: true });

// Build each deck into dist/<deck-name>/
for (const deck of decks) {
  console.log(`Building: ${deck}`);
  execSync(
    `npx reveal-md ${deck}/slides.md --static ${DIST}/${deck}`,
    { stdio: 'inherit' }
  );
}

// Generate root index.html listing all decks
const links = decks
  .map((d) => `<li><a href="${d}/">${d.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</a></li>`)
  .join('\n      ');

const index = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide Decks</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 4rem auto; padding: 0 1rem; }
    h1 { font-size: 1.5rem; margin-bottom: 1.5rem; }
    ul { list-style: none; padding: 0; }
    li { margin-bottom: 0.75rem; }
    a { color: #EE0000; text-decoration: none; font-size: 1.1rem; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Slide Decks</h1>
  <ul>
      ${links}
  </ul>
</body>
</html>`;

fs.writeFileSync(path.join(DIST, 'index.html'), index);
console.log(`\nBuilt ${decks.length} deck(s) → ${DIST}/`);
