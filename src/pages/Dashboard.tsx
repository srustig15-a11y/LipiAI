import { useNavigate } from 'react-router-dom'
import { Plus, FileText, Search } from 'lucide-react'
import Button from '../components/Button'

const mockDocs = [
  { id: '1', title: 'Kannada Essay — Environment', updated: '2 hours ago', owner: 'You', shared: false },
  { id: '2', title: 'Project Report — Final', updated: 'Yesterday', owner: 'You', shared: true },
  { id: '3', title: 'Hindi Notes — Chapter 4', updated: '3 days ago', owner: 'You', shared: false },
]

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface-bg">
      <header className="border-b border-border-subtle bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold text-lg text-ink-primary">LipiAI</div>
          <div className="flex items-center gap-2 text-sm text-ink-secondary">
            <Search className="w-4 h-4" />
            <input
              placeholder="Search documents..."
              className="bg-transparent outline-none placeholder:text-ink-secondary"
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-ink-primary">My Documents</h1>
          <Button onClick={() => navigate('/editor/new')}>
            <span className="flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> New Document
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockDocs.map((doc) => (
            <button
              key={doc.id}
              onClick={() => navigate(`/editor/${doc.id}`)}
              className="text-left bg-surface-card border border-border-subtle rounded-card p-5 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
            >
              <FileText className="w-5 h-5 text-brand mb-3" />
              <h3 className="font-medium text-ink-primary mb-1 truncate">{doc.title}</h3>
              <p className="text-xs text-ink-secondary">
                {doc.owner} · Edited {doc.updated}
                {doc.shared && ' · Shared'}
              </p>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
