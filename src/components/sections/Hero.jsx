import { useState, useEffect } from 'react'
import { ArrowDown } from 'lucide-react'
import { personal } from '../../data/portfolio'

const roles = [
  'Desenvolvedora Full Stack',
  'Front-end com alma visual',
  'Líder de squads',
  'Tech com propósito social',
]

const AVATAR_DARK  = '/avatar-dark.svg'
const AVATAR_LIGHT = '/avatar-light.svg'

export default function Hero({ isDark }) {
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

        {/* Avatar */}
       <div className="flex justify-center mb-6">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden"
            style={{ boxShadow: '0 0 32px var(--accent1), 0 0 64px var(--accent1)40' }}>
            <img
              key={isDark ? 'dark' : 'light'}
              src={isDark ? AVATAR_DARK : AVATAR_LIGHT}
              alt="Avatar de Lia Costa"
              className="w-full h-full object-cover object-top transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Nome */}
        <h1 className="font-display font-bold leading-none mb-4">
          <span className="block text-5xl md:text-6xl text-glow tracking-tight">
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
         aria-label="Rolar">
        <ArrowDown size={20} />
      </a>
    </section>
  )
}