'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/ui'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex space-x-8">
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
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className={cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-white',
              isActive && 'text-purple-400 hover:text-purple-400',
            )}
          />
        )
      })}
      <Link
        href="/search"
        className={cn(
          'px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-white flex items-center gap-2',
          pathname?.startsWith('/search') && 'text-purple-400 hover:text-purple-400',
        )}
      >
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>

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
    </nav>
  )
}
