import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#2a9ac2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 9,
          fontFamily: 'monospace',
          fontWeight: 600,
          color: '#f5f0e6',
          letterSpacing: -0.3,
        }}
      >
        htf
      </div>
    ),
    { ...size }
  )
}
