import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import Toolbar from './Toolbar'

export default function DocEditor() {
  const editor = useEditor({
  extensions: [
    StarterKit.configure({
      link: false,
    }),
    Underline,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Link.configure({ openOnClick: false }),
  ],
  content: '<p>Start writing your document here...</p>',
})
  return (
    <div className="w-full">
      <Toolbar editor={editor} />
      <div className="w-full max-w-[794px] min-h-[1123px] bg-surface-card border border-border-subtle rounded-card shadow-sm p-16 mx-auto mt-6">
        <EditorContent editor={editor} className="prose max-w-none focus:outline-none" />
      </div>
    </div>
  )
}
