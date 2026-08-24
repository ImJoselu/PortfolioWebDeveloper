import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const width = 1200;
const height = 630;

let hairlines = '';
for (let i = 0; i < 5; i += 1) {
  const y = 90 + i * 110;
  hairlines += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="#2dd4bf" stroke-opacity="0.06" stroke-width="1" />`;
}
for (let i = 0; i < 9; i += 1) {
  const x = 90 + i * 130;
  hairlines += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="#2dd4bf" stroke-opacity="0.06" stroke-width="1" />`;
}

const markScale = 6.5;
const markX = 120;
const markY = height / 2 - (64 * markScale) / 2;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#10151b" />
  ${hairlines}
  <g transform="translate(${markX}, ${markY}) scale(${markScale})">
    <rect x="4" y="4" width="56" height="56" rx="14" fill="#2dd4bf" />
    <circle cx="20" cy="44" r="5.5" fill="#10151b" />
    <circle cx="44" cy="20" r="5.5" fill="#10151b" />
    <path d="M20 44 L20 26 L44 26 L44 20" fill="none" stroke="#10151b" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <rect x="560" y="215" width="4" height="200" fill="#262e38" />
  <text x="610" y="280" font-family="Georgia, 'Times New Roman', serif" font-size="42" fill="#e8eaed">Jose Luis T&#243;rtola Cervera</text>
  <text x="610" y="335" font-family="Georgia, 'Times New Roman', serif" font-size="28" fill="#2dd4bf" letter-spacing="1">Full-Stack Developer</text>
  <text x="610" y="390" font-family="Georgia, 'Times New Roman', serif" font-size="21" fill="#97a2ae">Java / Spring &#183; Angular &#183; Vue.js &#183; SOAP/REST</text>
</svg>
`;

writeFileSync(new URL('./_og-source.svg', import.meta.url), svg);

await sharp(Buffer.from(svg)).png().toFile('public/og-image.png');
await sharp('public/favicon.svg').resize(48, 48).png().toFile('public/favicon-48.png');
await sharp('public/favicon.svg').resize(180, 180).png().toFile('public/apple-touch-icon.png');

console.log('Generated public/og-image.png, public/favicon-48.png, public/apple-touch-icon.png');
