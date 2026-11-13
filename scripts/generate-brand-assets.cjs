const sharp = require("sharp");

const mark = [
  '<path d="M278 219l-24-33c-35-48-11-101 42-101h92c53 0 77 53 42 101l-24 33" fill="none" stroke="#FFA51F" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>',
  '<path d="M258 218c19-24 48-38 81-41 62-6 112 40 116 102l1 18c2 51-33 89-83 89h-34c7-20 0-49-15-68l-66-100z" fill="#FFA51F"/>',
  '<path d="M226 311l-15-21c-17-24-1-51 28-51h50c29 0 45 27 28 51l-16 21" fill="none" stroke="#000000" stroke-width="25" stroke-linecap="round" stroke-linejoin="round"/>',
  '<path d="M226 311l-15-21c-17-24-1-51 28-51h50c29 0 45 27 28 51l-16 21" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>',
  '<path d="M219 311c12-13 30-21 48-21 36 0 64 28 64 65 0 29-21 51-52 51h-40c-28 0-42-22-39-49 1-19 7-35 19-46z" fill="#FFFFFF" stroke="#000000" stroke-width="8" stroke-linejoin="round"/>',
].join("");

const icon = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 665 566">',
  '<rect width="665" height="566" fill="#000000"/>',
  mark,
  '</svg>',
].join("");

const splash = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="2732" height="2732" viewBox="0 0 1024 1024">',
  '<rect width="1024" height="1024" fill="#17140F"/>',
  `<g transform="translate(79 100) scale(1.3)">${mark}</g>`,
  '<text x="512" y="735" text-anchor="middle" fill="#FFFFFF" font-family="Arial,sans-serif" font-size="72" font-weight="700" letter-spacing="18">FORJA</text>',
  '<text x="512" y="790" text-anchor="middle" fill="#FFA51F" font-family="Arial,sans-serif" font-size="20" letter-spacing="6">TREINO • PERFORMANCE</text>',
  '</svg>',
].join("");

Promise.all([
  sharp(Buffer.from(icon)).png().toFile("assets/icon.png"),
  sharp(Buffer.from(splash)).png().toFile("assets/splash.png"),
]).then(() => console.log("Generated assets/icon.png (1024x1024) and assets/splash.png (2732x2732)."));
