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
          background: '#13181b',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px',
          fontFamily: 'monospace',
          boxSizing: 'border-box',
        }}
      >
        {/* Blue monogram tile */}
        <div
          style={{
            width: 52,
            height: 52,
            background: '#2a9ac2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            color: '#f5f0e6',
            fontFamily: 'monospace',
            fontWeight: 600,
            letterSpacing: -0.5,
            marginBottom: 56,
          }}
        >
          htf
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 96,
            color: '#f5f0e6',
            lineHeight: 1,
            letterSpacing: -3,
            fontWeight: 500,
            fontFamily: 'monospace',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 36,
          }}
        >
          <span>honest tech</span>
          <span>
            factory
            <span style={{ color: '#d4a03a' }}>.</span>
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: '#f5f0e6',
            opacity: 0.5,
            fontFamily: 'monospace',
            fontWeight: 400,
            letterSpacing: 0,
          }}
        >
          Software a medida para negocios reales.
        </div>

        {/* URL — pushed to bottom */}
        <div
          style={{
            marginTop: 'auto',
            fontSize: 18,
            color: '#2a9ac2',
            fontFamily: 'monospace',
            letterSpacing: 0.5,
          }}
        >
          honestechfactory.com
        </div>
      </div>
    ),
    { ...size }
  )
}
