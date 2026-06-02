import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
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
          fontFamily: '"Courier New", monospace',
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
          <span
            style={{ fontSize: 20, fontWeight: 700, color: '#f5f0e6', letterSpacing: -0.5 }}
          >
            honest tech factory
            <span style={{ color: '#d4a03a' }}>.</span>
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              fontSize: 13,
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 32,
          }}
        >
          <div
            style={{ width: 28, height: 1, background: 'rgba(245,240,230,0.5)' }}
          />
          <span
            style={{
              fontSize: 13,
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
              fontFamily: 'Georgia, serif',
              fontSize: 96,
              fontWeight: 400,
              color: '#f5f0e6',
              lineHeight: 0.95,
              letterSpacing: -3,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0,
            }}
          >
            <span>We build the&nbsp;</span>
            <span style={{ fontStyle: 'italic', color: '#f2c87a' }}>boring parts</span>
            <span>&nbsp;of</span>
          </div>
          <div
            style={{
              fontFamily: 'Georgia, serif',
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
            color: 'rgba(245,240,230,0.75)',
            lineHeight: 1.55,
          }}
        >
          <span>Webs, apps, dashboards y eCommerce —</span>
          <span>pensados con criterio, construidos para funcionar.</span>
        </div>

        {/* URL */}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
          <span
            style={{ fontSize: 15, color: 'rgba(245,240,230,0.6)', letterSpacing: 0.5 }}
          >
            honestechfactory.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
