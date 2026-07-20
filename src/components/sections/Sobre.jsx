import { Code2, Lightbulb, Users } from 'lucide-react'
import { SectionWrapper, GlassCard } from '../ui'
import { useStagger } from '../../hooks/useInView'
import { personal } from '../../data/portfolio'

const values = [
  { icon: Code2,     title:'Full Stack com alma de front', desc:'Mente no código e coração na interface.' },
  { icon: Lightbulb, title:'Tecnologia com propósito',     desc:'Tecnologia que inclui, transforma e respeita o futuro.' },
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
            Do lápis ao código
          </h2>
          {personal.about.split('\\n\\n').map((p, i) => (
            <p key={i} className="text-base leading-relaxed mb-5 font-body" style={{ color:'var(--text-muted)' }}>{p.trim()}</p>
          ))}
         
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
