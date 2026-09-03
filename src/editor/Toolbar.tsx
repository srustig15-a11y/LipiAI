import { Editor } from '@tiptap/react'
import {
  Bold, Italic, Underline, Strikethrough, List, ListOrdered,
  AlignLeft, AlignCenter, AlignRight, Undo, Redo, Link as LinkIcon,
} from 'lucide-react'

interface ToolbarProps {
  editor: Editor | null
}

export default function Toolbar({ editor }: ToolbarProps) {
  if (!editor) return null

  const btn = (active: boolean) =>
    `p-2 rounded-btn transition-colors duration-100 ${
      active ? 'bg-brand/10 text-brand' : 'text-ink-secondary hover:bg-surface-bg'
    }`

  return (
    <div className="flex items-center gap-1 border-b border-border-subtle bg-white px-4 py-2 flex-wrap">
      <button onClick={() => editor.chain().focus().undo().run()} className={btn(false)} aria-label="Undo">
        <Undo className="w-4 h-4" />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()} className={btn(false)} aria-label="Redo">
        <Redo className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-border-subtle mx-1" />

      <button onClick={() => editor.chain().focus().toggleBold().run()} className={btn(editor.isActive('bold'))} aria-label="Bold">
        <Bold className="w-4 h-4" />
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className={btn(editor.isActive('italic'))} aria-label="Italic">
        <Italic className="w-4 h-4" />
      </button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={btn(editor.isActive('underline'))} aria-label="Underline">
        <Underline className="w-4 h-4" />
      </button>
      <button onClick={() => editor.chain().focus().toggleStrike().run()} className={btn(editor.isActive('strike'))} aria-label="Strikethrough">
        <Strikethrough className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-border-subtle mx-1" />

      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={btn(editor.isActive('bulletList'))} aria-label="Bullet list">
        <List className="w-4 h-4" />
      </button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btn(editor.isActive('orderedList'))} aria-label="Ordered list">
        <ListOrdered className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-border-subtle mx-1" />

      <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={btn(editor.isActive({ textAlign: 'left' }))} aria-label="Align left">
        <AlignLeft className="w-4 h-4" />
      </button>
      <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={btn(editor.isActive({ textAlign: 'center' }))} aria-label="Align center">
        <AlignCenter className="w-4 h-4" />
      </button>
      <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={btn(editor.isActive({ textAlign: 'right' }))} aria-label="Align right">
        <AlignRight className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-border-subtle mx-1" />

      <button
        onClick={() => {
          const url = window.prompt('Enter URL')
          if (url) editor.chain().focus().setLink({ href: url }).run()
        }}
        className={btn(editor.isActive('link'))}
        aria-label="Link"
      >
        <LinkIcon className="w-4 h-4" />
      </button>
    </div>
  )
}