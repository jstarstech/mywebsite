import { Archive } from '@/blocks/ArchiveBlock/config'
import { Code } from '@/blocks/Code/config'
import { FormBlock } from '@/blocks/Form/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { Banner } from '@/blocks/Banner/config'
import { ContactsInfo } from '@/blocks/ContactsInfo/config'
import { MainCallToAction } from '@/blocks/MainCallToAction/config'
import { Block } from 'payload'

export const Column: Block = {
  slug: 'column',
  interfaceName: 'Column',
  fields: [
    {
      type: 'blocks',
      name: 'content',
      label: 'Content Blocks',
      blocks: [Archive, Code, FormBlock, MediaBlock, Banner, ContactsInfo, MainCallToAction],
      maxRows: 2,
    },
    {
      type: 'select',
      name: 'columnWidth',
      required: true,
      options: [
        { label: 'Auto', value: 'auto' },
        { label: '80%', value: '4/5' },
        { label: '75%', value: '3/4' },
        { label: '66%', value: '2/3' },
        { label: '50%', value: '1/2' },
        { label: '33%', value: '1/3' },
        { label: '25%', value: '1/4' },
        { label: '20%', value: '1/5' },
      ],
      defaultValue: 'auto',
    },
  ],
}
