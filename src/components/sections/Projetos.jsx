import { useState, useEffect, useRef } from 'react'
import { ExternalLink, BriefcaseBusiness, GraduationCap, ChevronRight, ChevronLeft, ImageIcon } from 'lucide-react'
import { SectionWrapper, SectionHeader, TechPill, BadgeNeon } from '../ui'
import { projects } from '../../data/portfolio'

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

function ElectricBorder() {
  return (
    <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden" style={{ zIndex:2 }}>
      <span style={{ position:'absolute',top:0,left:'-100%',width:'100%',height:'2px',
        background:'linear-gradient(90deg,transparent,var(--accent1),var(--accent2))',
        animation:'electricTop 2s linear infinite' }} />
      <span style={{ position:'absolute',top:'-100%',right:0,width:'2px',height:'100%',
        background:'linear-gradient(180deg,transparent,var(--accent1),var(--accent2))',
        animation:'electricRight 2s linear infinite .5s' }} />
      <span style={{ position:'absolute',bottom:0,right:'-100%',width:'100%',height:'2px',
        background:'linear-gradient(270deg,transparent,var(--accent1),var(--accent2))',
        animation:'electricBottom 2s linear infinite 1s' }} />
      <span style={{ position:'absolute',bottom:'-100%',left:0,width:'2px',height:'100%',
        background:'linear-gradient(0deg,transparent,var(--accent1),var(--accent2))',
        animation:'electricLeft 2s linear infinite 1.5s' }} />
      <style>{`
        @keyframes electricTop    { to{left:100%} }
        @keyframes electricRight  { to{top:100%} }
        @keyframes electricBottom { to{right:100%} }
        @keyframes electricLeft   { to{bottom:100%} }
      `}</style>
    </div>
  )
}

export default function Projetos() {
  const all = projects
  const [idx, setIdx] = useState(0)
  const timer = useRef(null)

  const go = n => {
    setIdx((n + all.length) % all.length)
    clearInterval(timer.current)
    timer.current = setInterval(() => setIdx(i => (i+1) % all.length), 6000)
  }

  useEffect(() => {
    timer.current = setInterval(() => setIdx(i => (i+1) % all.length), 6000)
    return () => clearInterval(timer.current)
  }, [])

  const p = all[idx]

  const handleMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px')
    e.currentTarget.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px')
  }

  return (
    <SectionWrapper id="projetos">
      <SectionHeader eyebrow="Projetos" title="O que já construí"
        subtitle="Projetos reais, acadêmicos e de competições — todos com código e propósito." />

      <div className="glass-card group relative overflow-hidden mb-6 flex flex-col md:flex-row"
        style={{ minHeight:400, border:'0.5px solid var(--border-h)' }} onMouseMove={handleMove}>
        <ElectricBorder />

        {/* Preview */}
        <div className="relative md:w-5/12 shrink-0" style={{ minHeight:220 }}>
          {p.image ? (
            <img src={p.image} alt={p.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ opacity:.8 }} />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{ background:'var(--glow2)', borderRight:'0.5px solid var(--border)' }}>
              <div className="p-4 rounded-2xl" style={{ background:'rgba(255,255,255,.04)', border:'0.5px solid var(--border)' }}>
                <ImageIcon size={26} style={{ color:'var(--accent2)' }} />
              </div>
              <span className="text-xs font-code px-4 text-center" style={{ color:'var(--text-dim)' }}>
                Adicione em projects[].image
              </span>
            </div>
          )}
          {p.realClient && (
            <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full"
              style={{ background:'rgba(0,0,0,.7)', border:'0.5px solid var(--border-h)', backdropFilter:'blur(6px)' }}>
              <BriefcaseBusiness size={15} style={{ color:'var(--accent1)' }} />
              <span className="text-xs font-code" style={{ color:'var(--accent2)' }}>Cliente real</span>
            </div>
          )}
          {p.realAcademic && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full"
            style={{ background:'rgba(0,0,0,.6)', border:'0.5px solid var(--border-h)', backdropFilter:'blur(6px)' }}>
            <GraduationCap size={18} style={{ color:'var(--accent1)' }} />
            <span className="text-xs font-code" style={{ color:'var(--accent2)' }}>Projeto acadêmico</span>
          </div>
        )}
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1 p-7 justify-between" style={{ position:'relative', zIndex:1 }}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <BadgeNeon>{p.type}</BadgeNeon>
              <span className="text-xs font-code" style={{ color:'var(--text-dim)' }}>{idx+1} / {all.length}</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-3">{p.title}</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color:'var(--text-muted)' }}>{p.description}</p>
            {p.highlight && (
              <p className="text-xs italic mb-5 pl-3 leading-relaxed"
                style={{ color:'var(--accent2)', borderLeft:'2px solid var(--border-h)', opacity:.75 }}>
                {p.highlight}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.techs.map(t => <TechPill key={t} label={t} />)}
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex gap-3">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-glass py-2 px-4 text-xs gap-1.5">
                  <GithubIcon size={13} /> GitHub
                </a>
              )}
              {p.deploy && (
                <a href={p.deploy} target="_blank" rel="noreferrer" className="btn-primary py-2 px-4 text-xs gap-1.5">
                  <ExternalLink size={13} /> Ver site
                </a>
              )}
            </div>
            <div className="flex gap-2">
              <button onClick={() => go(idx-1)} className="btn-glass py-2 px-4 text-sm" style={{ cursor:'pointer' }}>
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => go(idx+1)} className="btn-glass py-2 px-4 text-sm" style={{ cursor:'pointer' }}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {all.map((_, i) => (
          <button key={i} onClick={() => go(i)} style={{
            cursor:'pointer', border:'none', padding:0,
            width: i===idx ? 24 : 8, height:8, borderRadius:4,
            background: i===idx ? 'var(--accent1)' : 'var(--border)',
            transition:'all .35s', boxShadow: i===idx ? '0 0 8px var(--neon)' : 'none',
          }} aria-label={`Projeto ${i+1}`} />
        ))}
      </div>
    </SectionWrapper>
  )
}
