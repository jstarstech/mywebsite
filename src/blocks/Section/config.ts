import { Block } from 'payload'
import { Row } from '@/blocks/Row/config'

export const Section: Block = {
  slug: 'section',
  interfaceName: 'Section',
  fields: [
    {
      type: 'blocks',
      name: 'row',
      label: 'Rows',
      blocks: [Row],
    },
    {
      name: 'bg',
      type: 'select',
      label: 'Background Color',
      options: [
        { value: 'none', label: 'None' },
        { value: 'bg-primary', label: 'Primary Color' },
        { value: 'bg-secondary', label: 'Secondary Color' },
        { value: 'bg-black', label: 'Black' },
        { value: 'bg-white', label: 'White' },
      ],
    },
  ],
}
