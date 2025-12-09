import type { Metadata } from 'next'

import React from 'react'

import { Footer } from '@/Footer/Component'
import { Providers } from '@/providers'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import LogoImg from '@/components/LogoImg'
import { Header } from '@/Header/Component'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <InitTheme /> */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <Providers>
          {/*           <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          /> */}

          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header />

            {children}

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
