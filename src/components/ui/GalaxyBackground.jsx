import { useEffect, useRef } from 'react'

export default function GalaxyBackground() {
  const containerRef = useRef(null)

  const stars = Array.from({ length: 90 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.2 + 0.4,
    delay: Math.random() * 8,
    dur: Math.random() * 4 + 4,
    ox: Math.random() * 100, // original x para paralaxe
    oy: Math.random() * 100,
  }))

  const shooting = [
    { top: '12%', delay: '0s',   dur: '3s'   },
    { top: '30%', delay: '2.2s', dur: '3.5s' },
    { top: '18%', delay: '4.5s', dur: '2.8s' },
    { top: '45%', delay: '6s',   dur: '3.2s' },
    { top: '8%',  delay: '8.5s', dur: '3s'   },
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const starEls = container.querySelectorAll('.star-el')

    const onMove = (e) => {
      const mx = (e.clientX / window.innerWidth  - 0.5) * 2 // -1 a 1
      const my = (e.clientY / window.innerHeight - 0.5) * 2

      starEls.forEach((el, i) => {
        const depth  = ((i % 5) + 1) * 0.6  // profundidade varia por estrela
        const dx = mx * depth * 8
        const dy = my * depth * 8
        el.style.transform = `translate(${dx}px, ${dy}px)`
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, overflow: 'hidden' }}>
      {/* Gradiente de fundo */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 0%, var(--glow) 0%, transparent 60%)'
      }} />
      {/* Grade sutil */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Estrelas com paralaxe */}
      {stars.map(s => (
        <div key={s.id} className="star-el absolute rounded-full" style={{
          left: `${s.x}%`, top: `${s.y}%`,
          width: s.size, height: s.size,
          background: 'var(--star-color)',
          boxShadow: `0 0 ${s.size * 2}px var(--star-color)`,
          animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
          transition: 'transform 0.3s ease-out',
          willChange: 'transform',
        }} />
      ))}

      {/* Estrelas cadentes */}
      {shooting.map((s, i) => (
        <div key={i} className="absolute" style={{
          top: s.top, left: '-140px',
          width: '120px', height: '1.5px',
          background: 'linear-gradient(90deg, var(--accent1), transparent)',
          boxShadow: '0 0 6px var(--neon)',
          animation: `shoot ${s.dur} ${s.delay} ease-in infinite`,
        }} />
      ))}
    </div>
  )
}