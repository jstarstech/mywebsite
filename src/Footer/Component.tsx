import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Footer } from '@/payload-types'

// import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-purple-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">© 2025 Maksim. All rights reserved.</p>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>

        {/* <ThemeSelector /> */}
      </div>
    </footer>
  )
}
