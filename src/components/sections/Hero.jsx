import { useState, useEffect } from 'react'
import { ArrowDown, ExternalLink, Download } from 'lucide-react'
import { personal } from '../../data/portfolio'

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const roles = [
  'Desenvolvedora Full Stack',
  'Front-end com alma visual',
  'Líder de squads',
  'Tech com propósito social',
]

export default function Hero() {
  const [roleIdx, setRoleIdx]   = useState(0)
  const [displayed, setDisp]    = useState('')
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted]   = useState(false)

  useEffect(() => { setTimeout(() => setMounted(true), 100) }, [])

  useEffect(() => {
    const target = roles[roleIdx]
    let t
    if (!deleting && displayed.length < target.length)
      t = setTimeout(() => setDisp(target.slice(0, displayed.length + 1)), 60)
    else if (!deleting && displayed.length === target.length)
      t = setTimeout(() => setDeleting(true), 2000)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisp(displayed.slice(0, -1)), 32)
    else if (deleting && displayed.length === 0) {
      setDeleting(false); setRoleIdx(i => (i + 1) % roles.length)
    }
    return () => clearTimeout(t)
  }, [displayed, deleting, roleIdx])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className={`relative z-10 text-center max-w-3xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Nome */}
        <h1 className="font-display font-bold leading-none mb-4">
          <span className="block text-6xl md:text-8xl text-glow tracking-tight">
            {personal.name}
          </span>
        </h1>

        {/* Typing */}
        <div className="h-9 mb-6 flex items-center justify-center">
          <span className="font-display text-lg md:text-xl font-medium" style={{ color:'var(--accent1)' }}>
            {displayed}
            <span className="inline-block w-0.5 h-5 ml-0.5 align-middle"
              style={{ background:'var(--accent1)', animation:'glowPulse 1s ease-in-out infinite' }} />
          </span>
        </div>

        <p className="text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto font-body" style={{ color:'var(--text-muted)' }}>
          {personal.tagline}
        </p>

      </div>

      <a href="#sobre" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 hover:text-white transition-colors animate-bounce"
         aria-label="Rolar"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
