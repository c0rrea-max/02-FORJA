const sharp = require("sharp");

const mark = [
  '<g stroke-linecap="round" stroke-linejoin="round">',
  '<path d="M310 512h404" fill="none" stroke="#ECE7DE" stroke-width="34"/>',
  '<path d="M288 400v224M356 430v164M668 430v164M736 400v224" fill="none" stroke="#FF5A1F" stroke-width="38"/>',
  '<path d="M288 400h32M288 624h32M356 430h28M356 594h28M640 430h28M640 594h28M720 400h32M720 624h32" fill="none" stroke="#FF5A1F" stroke-width="38"/>',
  '</g>',
].join("");

const icon = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">',
  '<rect width="1024" height="1024" fill="#17140F"/>',
  '<circle cx="512" cy="512" r="335" fill="#211D17" stroke="#3C362C" stroke-width="12"/>',
  `<g transform="translate(0 130)">${mark}</g>`,
  '</svg>',
].join("");

const splash = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="2732" height="2732" viewBox="0 0 1024 1024">',
  '<rect width="1024" height="1024" fill="#17140F"/>',
  `<g transform="translate(196 85) scale(0.62)">${mark}</g>`,
  '<text x="512" y="600" text-anchor="middle" fill="#ECE7DE" font-family="Arial,sans-serif" font-size="72" font-weight="700" letter-spacing="18">FORJA</text>',
  '<text x="512" y="655" text-anchor="middle" fill="#B8B0A0" font-family="Arial,sans-serif" font-size="20" letter-spacing="6">TREINO • PERFORMANCE</text>',
  '</svg>',
].join("");

Promise.all([
  sharp(Buffer.from(icon)).png().toFile("assets/icon.png"),
  sharp(Buffer.from(splash)).png().toFile("assets/splash.png"),
]).then(() => console.log("Generated assets/icon.png (1024x1024) and assets/splash.png (2732x2732)."));
