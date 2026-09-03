import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Share2, Download, Sparkles } from 'lucide-react'
import { useState } from 'react'
import DocEditor from '../editor/DocEditor'

export default function EditorPage() {
  const navigate = useNavigate()
  const { docId } = useParams()
  const [title, setTitle] = useState(docId === 'demo' ? 'Demo Document' : 'Untitled Document')

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col">
      <header className="border-b border-border-subtle bg-white">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/dashboard')} className="text-ink-secondary hover:text-ink-primary">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="font-medium text-ink-primary bg-transparent outline-none"
            />
            <span className="text-xs text-ink-secondary">Saved ✓</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-btn hover:bg-surface-bg text-ink-secondary" aria-label="Share">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-btn hover:bg-surface-bg text-ink-secondary" aria-label="Download">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-btn hover:bg-surface-bg text-brand" aria-label="AI Assistant">
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 px-4">
        <DocEditor />
      </main>
    </div>
  )
}