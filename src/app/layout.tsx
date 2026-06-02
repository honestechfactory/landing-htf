import type { Metadata } from 'next'
import { JetBrains_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mono',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const siteUrl = 'https://honestechfactory.com'
const title = 'Honest Tech Factory — We build the boring parts.'
const description =
  'Software a medida para negocios reales. Webs, apps, dashboards y eCommerce pensados con criterio, construidos para funcionar.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Honest Tech Factory',
  },
  description,
  keywords: [
    'software a medida',
    'desarrollo web',
    'ecommerce',
    'aplicaciones web',
    'dashboards',
    'automatización',
    'Madrid',
    'startup',
    'Next.js',
    'Shopify',
  ],
  authors: [{ name: 'Honest Tech Factory', url: siteUrl }],
  creator: 'Honest Tech Factory',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'Honest Tech Factory',
    title,
    description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Honest Tech Factory — We build the boring parts.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jetBrainsMono.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
