import type { Metadata } from 'next'
import { ArrowLeft, Clock, Calendar, User, Linkedin, X, Facebook } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { Post } from '@/payload-types'
import config from '@/payload.config'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { formatAuthors } from '@/utilities/formatAuthors'
import Link from 'next/link'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/blog/' + decodedSlug
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) return <PayloadRedirects url={url} />

  const hasAuthors =
    post.populatedAuthors &&
    post.populatedAuthors.length > 0 &&
    formatAuthors(post.populatedAuthors) !== ''

  const formattedDate =
    post?.publishedAt === undefined
      ? ''
      : new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(post?.publishedAt || ''))

  const serverURL = process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const message = encodeURIComponent(`Hi, I wanted to share this post with you: ${serverURL + url}`)

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="flex items-center text-purple-400 text-base hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>

        <div className="mb-8 rounded-xl overflow-hidden border border-purple-500/20">
          {post.heroImage && typeof post.heroImage !== 'string' && (
            <Media imgClassName="w-full h-96 object-cover" resource={post.heroImage} />
          )}
        </div>

        <div className="mb-8">
          {post.categories?.map((category, index) => {
            if (typeof category === 'object' && category !== null) {
              const { title: categoryTitle } = category

              const titleToUse = categoryTitle || 'Untitled category'

              return (
                <div
                  key={index}
                  className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-4"
                >
                  {titleToUse}
                </div>
              )
            }
            return null
          })}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            {hasAuthors && (
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{formatAuthors(post.populatedAuthors || [])}</span>
              </div>
            )}

            {post.publishedAt && (
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />

                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
            )}
            {post.readTime !== null && (
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            )}
          </div>
        </div>

        <RichText
          className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-purple-400
                  prose-ul:text-gray-300 prose-ul:my-6
                  prose-li:mb-2
                  prose-pre:bg-slate-900 prose-pre:border prose-pre:border-purple-500/30
                  prose-code:text-purple-400 prose-code:bg-slate-900 prose-code:px-2 prose-code:py-1 prose-code:rounded"
          data={post.content}
          enableGutter={false}
        />

        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-4">Share this post</h3>
          <div className="flex space-x-4">
            <Link href={`https://x.com/intent/tweet?url=${message}`} target="_blank">
              <FaXTwitter className="text-purple-400" size={44} />
            </Link>
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${message}`} target="_blank">
              <FaFacebookF className="text-purple-400" size={44} />
            </Link>
            <Link href={`https://api.whatsapp.com/send?text=${message}`} target="_blank">
              <FaWhatsapp className="text-purple-400" size={44} />
            </Link>
            <Link
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${message}`}
              target="_blank"
            >
              <FaLinkedinIn className="text-purple-400" size={44} />
            </Link>
          </div>
        </div>

        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <RelatedPosts
            className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
            relationTo="blog"
            docs={post.relatedPosts.filter((post) => typeof post === 'object')}
          />
        )}
      </div>
    </section>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
    populate: {
      posts: {
        title: true,
        slug: true,
        categories: true,
        meta: {
          image: true,
          description: true,
        },
        publishedAt: true,
      },
    },
  })

  return result.docs?.[0] || null
})
