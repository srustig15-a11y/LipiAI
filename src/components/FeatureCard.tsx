import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-surface-card border border-border-subtle rounded-card p-6 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md">
      <div className="w-10 h-10 rounded-btn bg-brand/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-brand" />
      </div>
      <h3 className="font-semibold text-ink-primary mb-1.5">{title}</h3>
      <p className="text-sm text-ink-secondary leading-relaxed">{description}</p>
    </div>
  )
}
