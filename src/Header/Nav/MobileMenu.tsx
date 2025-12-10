import React from 'react'
import { CMSLink } from '@/components/Link'

import type { Header as HeaderType } from '@/payload-types'
import { usePathname } from 'next/navigation'

export const MobileMenu = ({
  data,
  open = false,
  close = () => {},
}: {
  data: HeaderType
  open?: boolean
  close?: () => void
}) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()

  return (
    <>
      {open && (
        <nav className="sm:hidden bg-slate-800/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ link }, i) => {
              const { type, url, reference } = link
              const href =
                type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
                  ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
                      reference.value.slug
                    }`
                  : url

              let isActive = false
              if (href) {
                if (href === '/') {
                  isActive = pathname === href
                } else {
                  isActive = pathname?.startsWith(href)
                }
              }

              return (
                <span
                  key={i}
                  onClick={() => {
                    close()
                  }}
                >
                  <CMSLink
                    {...link}
                    appearance="link"
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-purple-400 bg-slate-700'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700'
                    }`}
                  />
                </span>
              )
            })}
          </div>
        </nav>
      )}
    </>
  )
}
