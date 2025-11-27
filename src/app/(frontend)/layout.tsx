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

          {/* <Header /> */}

          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Maksim
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <Link
                      className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-white"
                      href="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-white"
                      href="/blog"
                    >
                      Blog
                    </Link>
                    <Link
                      className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-white"
                      href="/portfolio"
                    >
                      Portfolio
                    </Link>
                    <Link
                      className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-white"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </div>
                  <button className="md:hidden text-gray-300 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-menu"
                      aria-hidden="true"
                    >
                      <path d="M4 5h16"></path>
                      <path d="M4 12h16"></path>
                      <path d="M4 19h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </nav>

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
