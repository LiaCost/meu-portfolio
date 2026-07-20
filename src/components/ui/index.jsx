import { useInView } from '../../hooks/useInView'
import { techIcons } from '../../data/techIcons'

export function SectionWrapper({ id, children, className = '' }) {
  const { ref, inView } = useInView()
  return (
    <section id={id} ref={ref}
      className={`py-28 px-6 max-w-6xl mx-auto transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-5 text-glow leading-tight">{title}</h2>
      {subtitle && <p style={{ color:'var(--text-muted)' }} className="text-base max-w-lg mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  )
}

export function GlassCard({ children, className = '', onMouseMove }) {
  const handleMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px')
    e.currentTarget.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px')
    onMouseMove && onMouseMove(e)
  }
  return <div className={`glass-card p-6 ${className}`} onMouseMove={handleMove}>{children}</div>
}

export function TechPill({ label }) {
  return <span className="tech-pill">{label}</span>
}

export function BadgeNeon({ children, style = {} }) {
  return <span className="badge-neon" style={style}>{children}</span>
}

export function TechIcon({ name }) {
  const icon = techIcons[name]
  if (!icon) return <span className="tech-pill">{name}</span>

  return (
    <div className="tech-icon-box" data-tip={name} aria-label={name}>
      {icon.type === 'devicon'
        ? <i className={icon.className} />
        : <icon.Icon size={20} strokeWidth={1.6} />}
    </div>
  )
}
