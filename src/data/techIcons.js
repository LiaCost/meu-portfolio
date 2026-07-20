import { KeyRound, Gauge, LayoutTemplate } from 'lucide-react'

const dv = (cls) => ({ type: 'devicon', className: `devicon-${cls}` })
const lc = (Icon) => ({ type: 'lucide', Icon })

export const techIcons = {
  // front-end
  'HTML5':          dv('html5-plain'),
  'CSS3':           dv('css3-plain'),
  'JavaScript':     dv('javascript-plain'),
  'TypeScript':     dv('typescript-plain'),    
  'React':          dv('react-original'),
  'Bootstrap':      dv('bootstrap-plain'),
  'Tailwind CSS':   dv('tailwindcss-original'),
  'Figma':          dv('figma-plain'),
  // back-end
  'Python':         dv('python-plain'),        
  'C#':             dv('csharp-plain'),
  'ASP.NET Core':   dv('dotnetcore-plain'),
  'Node.js':        dv('nodejs-plain'),
  'Express':        dv('express-original'),
  'Java':           dv('java-plain'),
  'Entity Framework': dv('entityframeworkcore-plain'),
  // banco de dados
  'SQL Server':     dv('microsoftsqlserver-plain'),
  'MySQL':          dv('mysql-original'),
  'PostgreSQL':     dv('postgresql-plain'),      
  'MongoDB':        dv('mongodb-plain'),
  // ferramentas
  'Git':            dv('git-plain'),
  'GitHub':         dv('github-original'),
  'Selenium':       dv('selenium-original'),
  'JMeter':         dv('apache-plain'),
  'Jasmine':        dv('jasmine-plain'),
  'Vite':           dv('vitejs-plain'),
}