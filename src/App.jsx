import { useTheme } from './hooks/useTheme'
import Cursor from './components/ui/Cursor'
import GalaxyBackground from './components/ui/GalaxyBackground'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Sobre from './components/sections/Sobre'
import Skills from './components/sections/Skills'
import Projetos from './components/sections/Projetos'
import Conquistas from './components/sections/Conquistas'
import Contato from './components/sections/Contato'

export default function App() {
  const { isDark, toggle } = useTheme()
  return (
    <>
      <Cursor />
      <GalaxyBackground />
      <div style={{ position:'relative', zIndex:1 }}>
        <Navbar isDark={isDark} onToggleTheme={toggle} />
        <main>
          <Hero isDark={isDark}/>
          <Sobre />
          <Skills />
          <Projetos />
          <Conquistas />
          <Contato />
        </main>
      </div>
    </>
  )
}
