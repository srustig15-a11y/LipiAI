import { useNavigate } from 'react-router-dom'
import {
  Languages,
  Sparkles,
  NotebookPen,
  Table2,
  Image as ImageIcon,
  FileDown,
  Share2,
  CloudCog,
} from 'lucide-react'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'

const features = [
  { icon: Languages, title: 'Smart Kannada Typing', description: 'Type in English letters, get real ಕನ್ನಡ script with live candidate suggestions.' },
  { icon: Languages, title: 'Hindi Typing', description: 'Phonetic हिन्दी typing that understands natural spelling, not just fixed words.' },
  { icon: Sparkles, title: 'AI Assistant', description: 'Fix grammar, rewrite, summarize, and translate — right inside your document.' },
  { icon: NotebookPen, title: 'Study Notes', description: 'Generate notes, flashcards, and questions from your own content.' },
  { icon: Table2, title: 'Tables', description: 'Insert and format tables for reports, schedules, and assignments.' },
  { icon: ImageIcon, title: 'Images', description: 'Upload, resize, crop, and arrange images inside your document.' },
  { icon: FileDown, title: 'PDF/DOCX Export', description: 'Export clean, correctly-encoded PDF, DOCX, TXT, or HTML files.' },
  { icon: Share2, title: 'Easy Sharing', description: 'Share a link with a teacher or classmate as a viewer or editor.' },
  { icon: CloudCog, title: 'Cloud + Local Saving', description: 'Autosaves to the cloud, with local export whenever you need it.' },
]

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface-bg">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="font-semibold text-lg tracking-tight text-ink-primary">LipiAI</div>
        <Button variant="secondary" onClick={() => navigate('/dashboard')}>
          Log In
        </Button>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-ink-primary mb-4">LipiAI</h1>
        <p className="text-xl text-ink-secondary mb-2">Write. Create. Learn. In Your Language.</p>
        <p className="text-base text-ink-secondary max-w-xl mx-auto mb-8">
          A free document editor for students and teachers, with AI assistance and multilingual
          phonetic typing built in from the ground up.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button onClick={() => navigate('/dashboard')}>Create Document</Button>
          <Button variant="secondary" onClick={() => navigate('/editor/demo')}>
            Try Demo
          </Button>
        </div>
      </main>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </section>
    </div>
  )
}
