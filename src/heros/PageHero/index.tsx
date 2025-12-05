import React from 'react'
import RichText from '@/components/RichText'
import type { Page } from '@/payload-types'
import type { RequiredDataFromCollectionSlug } from 'payload'

type PageHeroType = Page['hero'] & {
  children?: never
  richText?: Page['hero']['richText']
  page: RequiredDataFromCollectionSlug<'pages'>
}

export const PageHero: React.FC<PageHeroType> = (prop) => {
  const { page, subtitle = '', children, richText } = prop

  return (
    <div className="pt-10 pb-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">{page.title}</h2>
        {subtitle !== '' && <p className="text-gray-400 text-center">{subtitle}</p>}
      </div>

      {children || (richText && <RichText data={richText} enableGutter={false} />)}
    </div>
  )
}
