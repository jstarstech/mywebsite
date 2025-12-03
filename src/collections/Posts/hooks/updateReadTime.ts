import {
  getEnabledNodes,
  type LexicalRichTextAdapter,
  type SanitizedServerEditorConfig,
  type ServerBlockNode,
} from '@payloadcms/richtext-lexical'
import { $getRoot, ElementNode, type LexicalNode } from '@payloadcms/richtext-lexical/lexical'
import { createHeadlessEditor } from '@payloadcms/richtext-lexical/lexical/headless'
import type { CollectionBeforeChangeHook, RichTextField } from 'payload'

import { findField } from '@/utilities/findField'

export const updateReadTime: (fieldName: string) => CollectionBeforeChangeHook =
  (fieldName) =>
  ({ data, collection }) => {
    const contentField = findField<RichTextField>(collection.fields, fieldName)

    if (contentField) {
      const lexicalAdapter: LexicalRichTextAdapter = contentField.editor as LexicalRichTextAdapter

      const sanitizedServerEditorConfig: SanitizedServerEditorConfig = lexicalAdapter.editorConfig

      const headlessEditor = createHeadlessEditor({
        nodes: getEnabledNodes({
          editorConfig: sanitizedServerEditorConfig,
        }),
      })

      // In case new post is created without content
      if (data?.content === undefined || data.content.length === 0) {
        return
      }

      headlessEditor.setEditorState(headlessEditor.parseEditorState(data.content))

      const textContent = headlessEditor.getEditorState().read(() => {
        return $getRoot().getTextContent()
      })

      let words = textContent
        .replace('Block Field', '') // blockNode.getTextContent() returns `Block Field`
        .replace(/\r?\n|\r/g, ' ')
        .split(' ')
        .filter(Boolean)

      const quotesWords = headlessEditor.getEditorState().read(() => {
        const blocks = getNodesByType<ServerBlockNode>('block')
        let words: string[] = []

        for (const block of blocks) {
          const fields = block.getFields()

          if (fields.blockType !== 'quote') {
            continue
          }

          words = [
            ...words,
            ...fields.author
              .replace(/\r?\n|\r/g, ' ')
              .split(' ')
              .filter(Boolean),
            ...fields.content
              .replace(/\r?\n|\r/g, ' ')
              .split(' ')
              .filter(Boolean),
          ]
        }

        return words
      })

      words = [...words, ...quotesWords]

      return {
        ...data,
        readTime: Math.ceil(words.length / 238),
      }
    }
  }

function getNodesByType<T extends LexicalNode>(type: string): T[] {
  const root = $getRoot()
  const matchingNodes: T[] = []

  function traverse(node: LexicalNode) {
    if (node.getType() === type) {
      matchingNodes.push(node as T)
    }

    if (node instanceof ElementNode) {
      for (const child of node.getChildren()) {
        traverse(child)
      }
    }
  }

  traverse(root)
  return matchingNodes
}
