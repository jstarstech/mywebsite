import { Block } from 'payload'
import { Column } from '@/blocks/Column/config'

export const Row: Block = {
  slug: 'row',
  interfaceName: 'Row',
  fields: [
    {
      type: 'text',
      name: 'totalWidth',
      validate: (value: any) => {
        if (value === '100%') {
          return true
        } else {
          return 'Value must equal 100%'
        }
      },
      admin: {
        readOnly: true,
        components: {
          Field: {
            path: '@/collections/fields/ColumnWidth.tsx',
          },
          Error: {
            path: '@/components/Admin/Fields/Error.tsx#Error',
            clientProps: {
              message: 'Value must equal 100%',
            },
          },
        },
      },
    },
    {
      type: 'blocks',
      name: 'columns',
      label: 'Columns',
      blocks: [Column],
      maxRows: 4,
    },
  ],
}
