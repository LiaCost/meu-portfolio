import { SectionWrapper, SectionHeader, TechPill } from '../ui'
import { useStagger } from '../../hooks/useInView'
import { skills } from '../../data/portfolio'

const cats = [
  { label:'Front-end',     key:'frontend' },
  { label:'Back-end',      key:'backend'  },
  { label:'Banco de dados',key:'database' },
  { label:'Ferramentas',   key:'tools'    },
]

export default function Skills() {
  const { ref } = useStagger(100)
  return (
    <SectionWrapper id="skills">
      <SectionHeader eyebrow="Habilidades" title="Stack técnico"
        subtitle="Tecnologias que já usei em projetos reais, competições e entregas para clientes." />
      <div ref={ref} className="grid md:grid-cols-2 gap-5">
        {cats.map(cat => (
          <div key={cat.key} className="glass-card stagger-child p-6 relative overflow-hidden">
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ background:'radial-gradient(ellipse at top left,var(--glow2) 0%,transparent 70%)' }} />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background:'var(--accent1)', boxShadow:'0 0 8px var(--neon)' }} />
                <h3 className="text-xs font-semibold tracking-widest uppercase font-body" style={{ color:'var(--accent2)' }}>{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map(s => <TechPill key={s} label={s} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
