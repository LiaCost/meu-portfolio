import { useEffect, useRef } from 'react'

const TRAIL_COUNT    = 20
const TRAIL_LIFETIME = 600

export default function Cursor() {
  const dotRef  = useRef(null)
  const pos     = useRef({ x: -100, y: -100 })
  const raf     = useRef(null)
  const trails  = useRef([])
  const lastPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    // Lê a cor do tema no momento de spawnar (respeita troca dark/light)
    const getNeon = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--neon').trim() || '#7c3aed'

    const pool = Array.from({ length: TRAIL_COUNT }, () => {
      const el = document.createElement('div')
      el.style.cssText = `
        position:fixed;pointer-events:none;z-index:9997;
        border-radius:50%;transform:translate(-50%,-50%);
        opacity:0;will-change:transform,opacity;
      `
      document.body.appendChild(el)
      return el
    })
    trails.current = pool

    let trailIdx     = 0
    let lastTrailTime = 0

    const spawnTrail = (x, y) => {
      const now = performance.now()
      if (now - lastTrailTime < 30) return
      lastTrailTime = now

      const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y)
      if (dist < 4) return

      const el   = trails.current[trailIdx % TRAIL_COUNT]
      trailIdx++

      const neon    = getNeon()
      const size    = Math.random() * 5 + 2
      const opacity = Math.random() * 0.5 + 0.5

      el.style.width      = size + 'px'
      el.style.height     = size + 'px'
      el.style.left       = x + 'px'
      el.style.top        = y + 'px'
      el.style.background = `radial-gradient(circle, #fff 0%, ${neon} 40%, transparent 70%)`
      el.style.boxShadow  = `0 0 6px ${neon}, 0 0 12px ${neon}`
      el.style.opacity    = opacity.toString()

      const start = performance.now()
      const fade  = (now) => {
        const p    = Math.min((now - start) / TRAIL_LIFETIME, 1)
        const ease = 1 - Math.pow(p, 2)
        el.style.opacity = (opacity * ease).toString()
        if (p < 1) requestAnimationFrame(fade)
        else el.style.opacity = '0'
      }
      requestAnimationFrame(fade)

      lastPos.current = { x, y }
    }

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      spawnTrail(e.clientX, e.clientY)
    }

    const tick = () => {
      const dot  = dotRef.current
      const neon = getNeon()
      if (dot) {
        dot.style.left       = pos.current.x + 'px'
        dot.style.top        = pos.current.y + 'px'
        dot.style.background = `radial-gradient(circle, #fff 0%, ${neon} 40%, ${neon} 100%)`
        dot.style.boxShadow  = `0 0 8px ${neon}, 0 0 20px ${neon}, 0 0 40px ${neon}40`
      }
      raf.current = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      pool.forEach(el => el.remove())
    }
  }, [])

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        transform: 'translate(-50%,-50%)',
        willChange: 'left, top',
      }}
    />
  )
}