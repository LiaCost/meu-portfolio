import { useEffect, useRef, useMemo } from 'react'

export default function GalaxyBackground() {
  const containerRef = useRef(null)

  const stars = useMemo(() => Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.2 + 0.4,
    delay: Math.random() * 8,
    dur: Math.random() * 4 + 4,
    // depth único por estrela (0.2 a 3.0) — garante que todas se movam diferente
    depth: Math.random() * 2.8 + 0.2,
  })), [])

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
    const starEls = Array.from(container.querySelectorAll('.star-el'))

    let rafId = null
    // offsets individuais por estrela (paralaxe + explosão combinados)
    const offsets = stars.map(() => ({ x: 0, y: 0, bx: 0, by: 0 }))

    // --- Paralaxe (mouse/touch move) ---
    let mx = 0, my = 0

    const applyAll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        starEls.forEach((el, i) => {
          const d = stars[i].depth
          const px = mx * d * 8 + offsets[i].bx
          const py = my * d * 8 + offsets[i].by
          el.style.transform = `translate(${px}px, ${py}px)`
        })
        rafId = null
      })
    }

    const onMove = (e) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
      applyAll()
    }

    const onTouchMove = (e) => {
      const t = e.touches[0]
      mx = (t.clientX / window.innerWidth  - 0.5) * 2
      my = (t.clientY / window.innerHeight - 0.5) * 2
      applyAll()
    }

    // --- Explosão no toque (tap) ---
    const BLAST_RADIUS_PX = 180  // raio de influência do toque
    const BLAST_FORCE     = 120  // força máxima de repulsão em px
    const DECAY_MS        = 800  // tempo para voltar ao lugar

    const onTouchStart = (e) => {
      const touch = e.touches[0]
      const tx = touch.clientX
      const ty = touch.clientY

      starEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width  / 2
        const cy = rect.top  + rect.height / 2

        const dx = cx - tx
        const dy = cy - ty
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < BLAST_RADIUS_PX && dist > 0) {
          // força inversamente proporcional à distância
          const force = (1 - dist / BLAST_RADIUS_PX) * BLAST_FORCE
          offsets[i].bx = (dx / dist) * force
          offsets[i].by = (dy / dist) * force

          // volta gradualmente ao lugar
          const start = performance.now()
          const startBx = offsets[i].bx
          const startBy = offsets[i].by

          const decay = (now) => {
            const t = Math.min((now - start) / DECAY_MS, 1)
            const ease = 1 - Math.pow(1 - t, 3) // ease-out cubic
            offsets[i].bx = startBx * (1 - ease)
            offsets[i].by = startBy * (1 - ease)
            if (t < 1) requestAnimationFrame(decay)
          }
          requestAnimationFrame(decay)
        }
      })

      applyAll()
    }

    // Reutiliza a mesma lógica de explosão no click (desktop)
    const onMouseClick = (e) => {
      const fakeTouch = { touches: [{ clientX: e.clientX, clientY: e.clientY }] }
      onTouchStart(fakeTouch)
    }

    window.addEventListener('mousemove',  onMove,       { passive: true })
    window.addEventListener('click',      onMouseClick, { passive: true })
    window.addEventListener('touchmove',  onTouchMove,  { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })

    return () => {
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('click',      onMouseClick)
      window.removeEventListener('touchmove',  onTouchMove)
      window.removeEventListener('touchstart', onTouchStart)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [stars])

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