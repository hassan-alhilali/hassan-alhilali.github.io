// Add (or attach a file to) a certificate shown in the Certificates section.
//
//   npm run add-cert -- <file> --en "English title" --ar "العنوان" [--issuer-en ".."] [--issuer-ar ".."] [--year 2024] [--id cert-1]
//
// The file (jpg / png / webp / pdf) is copied into public/certificates/ and an entry is
// added to src/data/certificates.json. Pass --id of an existing entry to attach the file to it.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { basename, extname, join } from 'node:path';

const args = process.argv.slice(2);
const file = args.find((a, i) => !a.startsWith('--') && !args[i - 1]?.startsWith('--'));
const opt = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};

if (!file || !existsSync(file)) {
  console.error('Usage: npm run add-cert -- <file> --en "Title" --ar "العنوان" [--issuer-en ..] [--issuer-ar ..] [--year ..] [--id ..]');
  process.exit(1);
}

const ext = extname(file).toLowerCase();
if (!['.jpg', '.jpeg', '.png', '.webp', '.pdf'].includes(ext)) {
  console.error(`Unsupported file type "${ext}". Use jpg, png, webp or pdf.`);
  process.exit(1);
}

const dataPath = join('src', 'data', 'certificates.json');
const certs = JSON.parse(readFileSync(dataPath, 'utf8'));

const id = opt('id') ?? `cert-${Date.now().toString(36)}`;
const name = `${id}${ext}`;
mkdirSync(join('public', 'certificates'), { recursive: true });
copyFileSync(file, join('public', 'certificates', name));

let entry = certs.find((c) => c.id === id);
if (!entry) {
  entry = {
    id,
    title: { en: basename(file, ext), ar: basename(file, ext) },
    issuer: { en: '', ar: '' },
    year: '',
    file: '',
  };
  certs.push(entry);
}
entry.file = name;
if (opt('en')) entry.title.en = opt('en');
if (opt('ar')) entry.title.ar = opt('ar');
if (opt('issuer-en')) entry.issuer.en = opt('issuer-en');
if (opt('issuer-ar')) entry.issuer.ar = opt('issuer-ar');
if (opt('year')) entry.year = opt('year');

writeFileSync(dataPath, JSON.stringify(certs, null, 2) + '\n');

const site = readFileSync('astro.config.mjs', 'utf8').match(/site:\s*'([^']+)'/)?.[1] ?? '';
console.log(`Added ${name} → ${entry.title.en}`);
console.log(`  File:      ${site}/certificates/${name}`);
console.log(`  QR target: ${site}/cert/${id}/`);
