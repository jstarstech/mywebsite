import React, { Fragment } from 'react'

import {
  Page,
  Section as SectionProps,
  Row as RowProps,
  Column as ColumnProps,
} from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { MainCallToActionBlock } from '@/blocks/MainCallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { Section } from '@/blocks/Section/Component'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CodeBlock } from '@/blocks/Code/Component'
import { ContactsInfoBlock } from './ContactsInfo/Component'
// console.log(JSON.stringify(MediaBlockProps))
const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  mcta: MainCallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  section: Section,
  code: CodeBlock,
  banner: BannerBlock,
  contactInfo: ContactsInfoBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'] | SectionProps['row'] | RowProps['columns'] | ColumnProps['content']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <div className="my-8" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
