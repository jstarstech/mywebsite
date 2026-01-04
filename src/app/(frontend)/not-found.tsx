import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="container mx-auto min-h-screen">
      {/* Main Content Container */}
      <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto animate-float">
        {/* Large 404 Text */}
        <h1 className="text-9xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2">
          404
        </h1>
        {/* Divider/Spacing */}
        <div className="w-16 h-1 bg-purple-500 rounded-full mb-8 opacity-50" />
        {/* Error Message and Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center w-full">
          {/* Message */}
          <div className="text-right md:border-r md:border-white/10 md:pr-6">
            <p className="text-lg md:text-xl text-slate-300 font-light">
              This page could not be found.
            </p>
          </div>
          {/* Mobile Divider (hidden on desktop) */}
          <div className="h-px w-full bg-white/10 md:hidden" />
          {/* Action Button */}
          <div className="text-left md:pl-0">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-purple-200 group-hover:text-white transition-colors">
                Go home
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-purple-300 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
