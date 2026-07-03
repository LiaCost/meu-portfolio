import { useState } from 'react'
import { Trophy, Lightbulb } from 'lucide-react'
import { SectionWrapper, SectionHeader, BadgeNeon } from '../ui'
import { competitions } from '../../data/portfolio'

export default function Conquistas() {
  const [active, setActive] = useState(Math.floor(competitions.length / 2))

  return (
    <SectionWrapper id="conquistas">
      <SectionHeader eyebrow="Conquistas" title="Competições & impacto"
        subtitle="Mais de 5 pódios em competições regionais e nacionais, sempre com foco em impacto social." />

      {/* 3D Coverflow */}
      <div style={{ perspective:'1200px', overflowX:'visible', paddingBlock:40 }}>
        <div className="flex items-center justify-center gap-4 relative" style={{ height:320 }}>
          {competitions.map((c, i) => {
            const offset = i - active
            const absOff = Math.abs(offset)
            const isActive = offset === 0

            const rotateY  = offset * -35
            const translateX = offset * 200
            const translateZ = isActive ? 80 : -absOff * 60
            const scale    = isActive ? 1 : Math.max(0.68, 1 - absOff * 0.12)
            const opacity  = isActive ? 1 : Math.max(0.35, 1 - absOff * 0.28)
            const zIndex   = competitions.length - absOff

            return (
              <div key={c.id}
                onClick={() => setActive(i)}
                style={{
                  position: 'absolute',
                  width: isActive ? 400 : 300,
                  minHeight: isActive ? 280 : 220,
                  cursor: isActive ? 'default' : 'pointer',
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: 'all .5s cubic-bezier(.4,0,.2,1)',
                  transformStyle: 'preserve-3d',
                  borderRadius: 16,
                  background: 'var(--card-bgd)',
                  border: isActive ? '0.5px solid var(--border-h)' : '0.5px solid var(--border)',
                  boxShadow: isActive ? `0 0 40px var(--glow2), 0 0 2px var(--border-h)` : 'none',
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  overflow: 'hidden',
                }}
              >
                {/* Linha superior do card */}
                <div style={{
                  position:'absolute', top:0, left:0, right:0, height:1,
                  background:'linear-gradient(90deg,transparent,var(--card-line),transparent)',
                }} />

                {/* Electric border no ativo */}
                {isActive && (
                  <div style={{ position:'absolute', inset:0, borderRadius:16, overflow:'hidden', zIndex:2, pointerEvents:'none' }}>
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
                  </div>
                )}

                <div style={{ position:'relative', zIndex:1 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                    <BadgeNeon>{c.result}</BadgeNeon>
                    <span style={{ fontSize:10, color:'var(--text-dim)', fontFamily:'JetBrains Mono' }}>{c.year}</span>
                  </div>
                  <h3 style={{ fontFamily:'Space Grotesk', fontWeight:700, color:'#fff', fontSize: isActive ? 16 : 13, marginBottom:4 }}>{c.title}</h3>
                  <p style={{ fontSize:11, color:'var(--text-dim)', marginBottom:8 }}>{c.event}</p>
                  {isActive && (
                    <p style={{ fontSize:12, color:'var(--text-muted)', lineHeight:1.6 }}>{c.description}</p>
                  )}
                  <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:12, paddingTop:10, borderTop:'0.5px solid var(--border)' }}>
                    {c.highlight
                      ? <Lightbulb size={11} style={{ color:'var(--accent2)', flexShrink:0 }} />
                      : <Trophy size={11} style={{ color:'var(--accent1)', flexShrink:0, opacity:.7 }} />}
                    <span style={{ fontSize:11, color:'var(--text-dim)' }}>{c.role}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots navegação */}
      <div className="flex justify-center gap-2 mt-6">
        {competitions.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            cursor:'pointer', border:'none', padding:0,
            width: i===active ? 24 : 8, height:8, borderRadius:4,
            background: i===active ? 'var(--accent1)' : 'var(--border)',
            transition:'all .35s', boxShadow: i===active ? '0 0 8px var(--neon)' : 'none',
          }} />
        ))}
      </div>
    </SectionWrapper>
  )
}
