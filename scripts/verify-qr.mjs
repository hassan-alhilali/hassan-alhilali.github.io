// Printable verification label: QR code + verified badge, no URL text.
//
//   npm run verify-qr -- HQ-2026-7F3K9X [HQ-2026-ABC123 ...]
//
// Writes qr-labels/<ID>.svg (vector, prints sharp at any size). The QR points to
// <site>/verify/?id=<ID>, where <site> is read from astro.config.mjs.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import QRCode from 'qrcode';

const ids = process.argv.slice(2).map((s) => s.trim().toUpperCase());
const ID_PATTERN = /^[A-Z0-9][A-Z0-9-]{3,39}$/;

if (!ids.length || ids.some((id) => !ID_PATTERN.test(id))) {
  console.error('Usage: npm run verify-qr -- <CERT-ID> [<CERT-ID> ...]   (A–Z, 0–9 and dashes)');
  process.exit(1);
}

const config = readFileSync('astro.config.mjs', 'utf8');
const site = config.match(/site:\s*'([^']+)'/)?.[1]?.replace(/\/$/, '');
const base = config.match(/^\s*base:\s*'([^']+)'/m)?.[1]?.replace(/\/$/, '') ?? '';
if (!site) {
  console.error('No `site` found in astro.config.mjs');
  process.exit(1);
}

mkdirSync('qr-labels', { recursive: true });

for (const id of ids) {
  const url = `${site}${base}/verify/?id=${encodeURIComponent(id)}`;
  // high error correction so the badge in the middle doesn't break scanning
  const qr = QRCode.create(url, { errorCorrectionLevel: 'H' });
  const n = qr.modules.size;
  const cell = 8;
  const qrSize = n * cell;
  const pad = 24;
  const W = qrSize + pad * 2;
  const H = W + 70;

  let modules = '';
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++)
      if (qr.modules.get(y, x)) modules += `M${pad + x * cell} ${pad + y * cell}h${cell}v${cell}h-${cell}z`;

  const cx = W / 2;
  const cy = pad + qrSize / 2;
  const r = qrSize * 0.11;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" rx="18" fill="#fff"/>
  <path d="${modules}" fill="#141A2E"/>
  <circle cx="${cx}" cy="${cy}" r="${r + 7}" fill="#fff"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#059669"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 0.78}" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="2 3"/>
  <path d="M${cx - r * 0.42} ${cy + r * 0.02}l${r * 0.3} ${r * 0.3} ${r * 0.56} -${r * 0.6}" fill="none" stroke="#fff" stroke-width="${r * 0.2}" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="${cx}" y="${W + 26}" text-anchor="middle" font-family="IBM Plex Sans Arabic, Tahoma, sans-serif" font-size="20" font-weight="700" fill="#059669" direction="rtl">امسح للتحقق من الشهادة</text>
  <text x="${cx}" y="${W + 52}" text-anchor="middle" font-family="IBM Plex Mono, Consolas, monospace" font-size="14" fill="#64748B">${id}</text>
</svg>
`;
  const out = join('qr-labels', `${id}.svg`);
  writeFileSync(out, svg);
  console.log(`${out}  →  ${url}`);
}
