/**
 * Script pour créer des icônes PNG basiques
 * Exécuter avec: node create-icons.js
 */

const fs = require('fs');
const path = require('path');

// Créer une icône SVG simple comme placeholder
const createSVGIcon = (size) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6c63ff"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#bg)"/>
  <text x="${size/2}" y="${size/2 + size*0.05}"
        font-family="Arial, sans-serif"
        font-size="${size * 0.55}"
        font-weight="bold"
        fill="white"
        text-anchor="middle"
        dominant-baseline="middle">日</text>
</svg>`;
};

const sizes = [32, 72, 96, 128, 144, 152, 167, 180, 192, 512];
const iconsDir = path.join(__dirname, 'icons');

// Créer les fichiers SVG comme placeholder
sizes.forEach(size => {
    const svg = createSVGIcon(size);
    const filename = path.join(iconsDir, `icon-${size}.svg`);
    fs.writeFileSync(filename, svg);
    console.log(`Created: icon-${size}.svg`);
});

console.log('\\nIcônes SVG créées!');
console.log('Pour convertir en PNG, ouvre generate-icons.html dans un navigateur');
console.log('et télécharge les icônes PNG.');
