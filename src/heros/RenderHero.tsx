import React from 'react'

import type { Page } from '@/payload-types'
import type { RequiredDataFromCollectionSlug } from 'payload'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'
import { PageHero } from '@/heros/PageHero'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
  pageHero: PageHero,
}

type RenderHeroType =
  | Page['hero']
  | (Page['hero'] & {
      page: RequiredDataFromCollectionSlug<'pages'>
    })

export const RenderHero: React.FC<RenderHeroType> = (props) => {
  const type = props?.type

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  switch (type) {
    case 'highImpact':
      return <HighImpactHero {...props} />
    case 'lowImpact':
      return <LowImpactHero {...props} />
    case 'mediumImpact':
      return <MediumImpactHero {...props} />
    case 'pageHero':
      return 'page' in props ? <PageHero {...props} /> : null
    default:
      return null
  }
}
