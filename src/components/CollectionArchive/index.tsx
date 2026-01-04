import React from 'react'

import { Card, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
  relationTo?: string
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts, relationTo = 'posts' } = props

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts?.map((result, index) => {
        if (typeof result === 'object' && result !== null) {
          return (
            <Card
              className="h-full"
              doc={result}
              relationTo={relationTo}
              key={index}
              title=""
              showCategories
            />
          )
        }

        return null
      })}
    </div>
  )
}
