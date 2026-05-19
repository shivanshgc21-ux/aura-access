const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const assetsDir = path.join(distDir, 'assets');

function findCss() {
  if (!fs.existsSync(assetsDir)) return null;
  const files = fs.readdirSync(assetsDir);
  const css = files.find((f) => f.startsWith('styles-') && f.endsWith('.css'));
  return css ? `/assets/${css}` : null;
}

function findMainJs() {
  if (!fs.existsSync(assetsDir)) return null;
  const files = fs.readdirSync(assetsDir).filter((f) => f.endsWith('.js'));
  if (files.length === 0) return null;
  const indexFiles = files.filter((f) => f.startsWith('index-'));
  const candidates = indexFiles.length ? indexFiles : files;
  let largest = candidates[0];
  let largestSize = fs.statSync(path.join(assetsDir, largest)).size;
  for (const f of candidates.slice(1)) {
    const s = fs.statSync(path.join(assetsDir, f)).size;
    if (s > largestSize) {
      largest = f;
      largestSize = s;
    }
  }
  return `/assets/${largest}`;
}

function getTitle() {
  try {
    const pkg = require(path.resolve(__dirname, '..', 'package.json'));
    return (pkg && pkg.name) ? pkg.name : 'Miturtle';
  } catch (e) {
    return 'Miturtle';
  }
}

function buildIndex() {
  const css = findCss();
  const js = findMainJs();
  if (!js) {
    console.error('No JS entry found in dist/assets.');
    return;
  }
  const title = getTitle();
  const html = `<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1" />\n  <title>${title}</title>\n  ${css ? `<link rel="stylesheet" href="${css}" />` : ''}\n</head>\n<body>\n  <div id="root"></div>\n  <script type="module" src="${js}"></script>\n</body>\n</html>`;
  fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8');
  console.log('Wrote dist/index.html referencing', js, css || '(no css)');
}

buildIndex();
