import { Code2, Lightbulb, Users } from 'lucide-react'
import { SectionWrapper, GlassCard } from '../ui'
import { useStagger } from '../../hooks/useInView'
import { personal } from '../../data/portfolio'

const values = [
  { icon: Code2,     title:'Full Stack com alma de front', desc:'Da API à interface, com sensibilidade visual e atenção a cada detalhe.' },
  { icon: Lightbulb, title:'Tecnologia com propósito',     desc:'Acessibilidade, inclusão e sustentabilidade guiam cada projeto.' },
  { icon: Users,     title:'Liderança comprovada',         desc:'Liderei squads em hackathons, competições e projetos para empresas reais.' },
]

export default function Sobre() {
  const { ref } = useStagger(130)
  return (
    <SectionWrapper id="sobre">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow">Sobre mim</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-7 leading-tight text-glow">
            De zero ao mercado real
          </h2>
          {personal.about.split('\\n\\n').map((p, i) => (
            <p key={i} className="text-base leading-relaxed mb-5 font-body" style={{ color:'var(--text-muted)' }}>{p.trim()}</p>
          ))}
          <div className="flex flex-wrap gap-2.5 mt-6">
            {['Técnico SENAI','ADS — Último semestre','Porto Digital'].map(b => (
              <span key={b} className="badge-neon">{b}</span>
            ))}
          </div>
        </div>
        <div ref={ref} className="flex flex-col gap-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card stagger-child p-5 flex gap-4 items-start">
              <div className="p-2.5 rounded-lg shrink-0"
                style={{ background:'var(--glow2)', border:'0.5px solid var(--border-h)' }}>
                <Icon size={17} style={{ color:'var(--accent1)' }} />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color:'var(--text-muted)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
