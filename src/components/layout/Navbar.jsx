import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'
import { personal } from '../../data/portfolio'

const links = [
  { label:'Sobre', href:'#sobre' },
  { label:'Skills', href:'#skills' },
  { label:'Projetos', href:'#projetos' },
  { label:'Conquistas', href:'#conquistas' },
  { label:'Contato', href:'#contato' },
]

export default function Navbar({ isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? { background:'rgba(var(--bg-rgb,7,3,28),.85)', backdropFilter:'blur(20px)', borderBottom:'0.5px solid var(--border)' } : {}}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-base font-bold text-glow tracking-tight">
          LIA COSTA<span style={{ color:'var(--accent1)' }}>.</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-body tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Ações desktop */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <a href={personal.cv} className="btn-glass text-xs py-2 px-4 gap-1.5">
            <Download size={18} /> CV
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button onClick={() => setOpen(o => !o)} style={{ color:'var(--text-muted)', cursor:'pointer' }} aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ background:'var(--bg)', backdropFilter:'blur(20px)', borderBottom:'0.5px solid var(--border)' }}>
          <ul className="flex flex-col px-6 py-5 gap-5">
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)}
                  className="text-sm transition-colors duration-200 font-body tracking-wide"
                  style={{ color:'var(--text-muted)' }}
                  onMouseEnter={e => e.currentTarget.style.color='#fff'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}
                  onTouchStart={e => e.currentTarget.style.color='#fff'}
                  onTouchEnd={e => setTimeout(() => { e.currentTarget.style.color='var(--text-muted)' }, 300)}
                >{l.label}</a>
              </li>
            ))}
            <li><a href={personal.cv} className="btn-glass text-sm py-2 px-4 justify-center"><Download size={13} /> Baixar CV</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}