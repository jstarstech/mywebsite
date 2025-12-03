'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'publishedAt'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts' | string
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  const formattedDate =
    doc?.publishedAt === undefined
      ? ''
      : new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(doc?.publishedAt || ''))

  return (
    <article
      ref={card.ref}
      className={cn(
        'bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 flex flex-col',
        className,
      )}
    >
      {!metaImage && (
        <div className="w-full h-48 bg-linear-to-br/oklab from-indigo-900 via-purple-800 to-rose-900"></div>
      )}
      {metaImage && typeof metaImage !== 'string' && (
        <Media resource={metaImage} htmlElement={null} imgClassName="w-full h-48 object-cover" />
      )}

      <div className="grow flex flex-col p-6">
        <h3 className="text-xl font-bold text-white mb-2">
          {titleToUse && (
            <Link className="not-prose" href={href} ref={link.ref}>
              {titleToUse}
            </Link>
          )}
        </h3>
        <p className="text-gray-300 mb-4">
          {description && <>{description && <>{sanitizedDescription}</>}</>}
        </p>
        <div className="flex flex-wrap gap-2">
          {showCategories && hasCategories && (
            <>
              {showCategories && hasCategories && (
                <>
                  {categories?.map((category, index) => {
                    if (typeof category === 'object') {
                      const { title: titleFromCategory } = category

                      const categoryTitle = titleFromCategory || 'Untitled category'

                      const isLast = index === categories.length - 1

                      return (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                        >
                          {categoryTitle}
                          {!isLast && <Fragment>, &nbsp;</Fragment>}
                        </span>
                      )
                    }

                    return null
                  })}
                </>
              )}
            </>
          )}
        </div>

        {doc?.publishedAt && (
          <>
            <div className="text-gray-400 text-sm mt-auto">{formattedDate}</div>
          </>
        )}
      </div>
    </article>
  )
}
