import QRCode from 'qrcode';
import certificates from '../data/certificates.json';

export type Cert = (typeof certificates)[number];

/** Public folder the certificate files are served from: /public/certificates → /certificates/ */
export const CERT_DIR = '/certificates/';
/** Route of the per-certificate page the QR code points to: /cert/<id>/ */
export const CERT_ROUTE = '/cert/';

export const certs = certificates.map((c) => {
  const src = c.file ? `${CERT_DIR}${c.file}` : '';
  const kind = !src ? ('none' as const) : /\.pdf$/i.test(src) ? ('pdf' as const) : ('image' as const);
  return { ...c, src, kind, page: `${CERT_ROUTE}${c.id}/` };
});

export function absolute(path: string, site: URL | undefined) {
  return new URL(path, site ?? 'https://www-iq-helaly.github.io').href;
}

export function qrSvg(url: string) {
  return QRCode.toString(url, {
    type: 'svg',
    margin: 1,
    errorCorrectionLevel: 'M',
    color: { dark: '#141A2E', light: '#FFFFFF' },
  });
}
