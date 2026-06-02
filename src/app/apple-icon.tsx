import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#2a9ac2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 52,
          fontFamily: 'monospace',
          fontWeight: 500,
          color: '#f5f0e6',
          letterSpacing: -2,
        }}
      >
        <span style={{ color: '#d4a03a', fontWeight: 300 }}>{'{'}</span>
        htf
        <span style={{ color: '#d4a03a', fontWeight: 300 }}>{'}'}</span>
      </div>
    ),
    { ...size }
  )
}
