import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  const pos  = useRef({ x: -100, y: -100 })
  const raf  = useRef(null)

  useEffect(() => {
    const move = e => { pos.current = { x: e.clientX, y: e.clientY } }
    const tick = () => {
      if (dot.current)  { dot.current.style.left  = pos.current.x + 'px'; dot.current.style.top  = pos.current.y + 'px' }
      if (ring.current) { ring.current.style.left = pos.current.x + 'px'; ring.current.style.top = pos.current.y + 'px' }
      raf.current = requestAnimationFrame(tick)
    }
    const enter = () => ring.current?.classList.add('hovering')
    const leave = () => ring.current?.classList.remove('hovering')
    const bind  = () => document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave)
    })
    document.addEventListener('mousemove', move)
    raf.current = requestAnimationFrame(tick)
    bind()
    const mo = new MutationObserver(bind)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { document.removeEventListener('mousemove', move); cancelAnimationFrame(raf.current); mo.disconnect() }
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot"  style={{ position:'fixed', pointerEvents:'none', zIndex:9999, transform:'translate(-50%,-50%)' }} />
      <div ref={ring} className="cursor-ring" style={{ position:'fixed', pointerEvents:'none', zIndex:9998, transform:'translate(-50%,-50%)' }} />
    </>
  )
}
