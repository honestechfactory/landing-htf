import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const GF = 'https://fonts.googleapis.com/css2?family='
const UA =
  'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1'

async function fetchFont(url: string): Promise<ArrayBuffer> {
  const css = await fetch(url, { headers: { 'User-Agent': UA } }).then((r) => r.text())
  const match = css.match(/src: url\(([^)]+)\) format\('truetype'\)/)
  if (!match) throw new Error(`TTF not found: ${url}`)
  return fetch(match[1]).then((r) => r.arrayBuffer())
}

export default async function OgImage() {
  const [mono400, mono700, serifNormal, serifItalic] = await Promise.all([
    fetchFont(`${GF}JetBrains+Mono:wght@400`),
    fetchFont(`${GF}JetBrains+Mono:wght@700`),
    fetchFont(`${GF}Instrument+Serif:ital@0`),
    fetchFont(`${GF}Instrument+Serif:ital@1`),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#2a9ac2',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 72px',
          fontFamily: "'JetBrains Mono', monospace",
          boxSizing: 'border-box',
        }}
      >
        {/* Top row: logo + location */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 64,
          }}
        >
          <span style={{ fontSize: 20, fontWeight: 700, color: '#f5f0e6', letterSpacing: -0.5 }}>
            honest tech factory
            <span style={{ color: '#d4a03a' }}>.</span>
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              fontSize: 13,
              fontWeight: 400,
              color: 'rgba(245,240,230,0.65)',
              lineHeight: 1.7,
              letterSpacing: 0.5,
            }}
          >
            <span>EST. 2026</span>
            <span>España · Argentina</span>
          </div>
        </div>

        {/* Kicker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
          <div style={{ width: 28, height: 1, background: 'rgba(245,240,230,0.5)' }} />
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#d4a03a',
            }}
          >
            Software a medida
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 36 }}>
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 96,
              fontWeight: 400,
              color: '#f5f0e6',
              lineHeight: 0.95,
              letterSpacing: -3,
              display: 'flex',
            }}
          >
            <span>We build the </span>
            <span style={{ fontStyle: 'italic', color: '#f2c87a' }}>boring parts</span>
            <span> of</span>
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 96,
              fontWeight: 400,
              color: '#f5f0e6',
              lineHeight: 0.95,
              letterSpacing: -3,
              marginTop: 8,
            }}
          >
            your business.
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 19,
            fontWeight: 400,
            color: 'rgba(245,240,230,0.75)',
            lineHeight: 1.55,
          }}
        >
          <span>Webs, apps, dashboards y eCommerce —</span>
          <span>pensados con criterio, construidos para funcionar.</span>
        </div>

        {/* URL */}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
          <span style={{ fontSize: 15, fontWeight: 400, color: 'rgba(245,240,230,0.6)', letterSpacing: 0.5 }}>
            honestechfactory.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'JetBrains Mono', data: mono400, weight: 400, style: 'normal' },
        { name: 'JetBrains Mono', data: mono700, weight: 700, style: 'normal' },
        { name: 'Instrument Serif', data: serifNormal, weight: 400, style: 'normal' },
        { name: 'Instrument Serif', data: serifItalic, weight: 400, style: 'italic' },
      ],
    }
  )
}
