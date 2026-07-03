const techs = ['React','Node.js','C#','ASP.NET','JavaScript','TypeScript','SQL Server','MySQL','MongoDB','Java','Git','GitHub','HTML5','CSS3','Tailwind','Bootstrap','Figma','Swagger','JWT','Entity Framework','Express','Vite','Selenium','JMeter']

export default function TechScroll() {
  const doubled = [...techs, ...techs]
  return (
    <div className="w-full overflow-hidden py-10 relative" style={{ borderTop:'0.5px solid var(--border)', borderBottom:'0.5px solid var(--border)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background:'linear-gradient(90deg,var(--bg),transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background:'linear-gradient(-90deg,var(--bg),transparent)' }} />
      <div className="flex gap-5 scroll-track w-max">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-2.5 px-4 py-1.5 rounded-full whitespace-nowrap"
            style={{ border:'0.5px solid var(--border)', background:'rgba(255,255,255,.02)' }}>
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background:'var(--accent1)', boxShadow:'0 0 6px var(--neon)' }} />
            <span className="text-sm font-code" style={{ color:'var(--text-muted)' }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
