/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark (roxo galáxia)
        dark: {
          bg:      '#07031C',
          surface: '#0D0625',
          card:    'rgba(255,255,255,0.03)',
        },
        // Light (azul espacial)
        light: {
          bg:      '#023859',
          surface: '#011C40',
          card:    'rgba(255,255,255,0.06)',
        },
        // Neons dark (roxos)
        purple: {
          deep:    '#2A123F',
          mid:     '#481F6F',
          bright:  '#7030EF',
          lavender:'#9C86B9',
          soft:    '#C6B6DD',
        },
        // Neons light (azuis)
        blue: {
          deep:    '#011C40',
          mid:     '#023859',
          bright:  '#1D97F1',
          cyan:    '#54ACBF',
          soft:    '#A7EBF2',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':      'fadeUp 0.7s ease forwards',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'float':        'float 4s ease-in-out infinite',
        'shoot':        'shoot 4s ease-in infinite',
        'twinkle':      'twinkle 6s linear infinite',
        'scroll-left':  'scrollLeft 30s linear infinite',
        'shimmer':      'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:     { from:{opacity:0,transform:'translateY(28px)'}, to:{opacity:1,transform:'translateY(0)'} },
        glowPulse:  { '0%,100%':{opacity:.4}, '50%':{opacity:1} },
        float:      { '0%,100%':{transform:'translateY(0)'}, '50%':{transform:'translateY(-10px)'} },
        shoot:      { '0%':{transform:'translateX(-100px) translateY(0) rotate(25deg)',opacity:1}, '100%':{transform:'translateX(120vw) translateY(60vh) rotate(25deg)',opacity:0} },
        twinkle:    { '0%,100%':{opacity:.9}, '50%':{opacity:.3} },
        scrollLeft: { '0%':{transform:'translateX(0)'}, '100%':{transform:'translateX(-50%)'} },
        shimmer:    { '0%,100%':{backgroundPosition:'200% center'}, '50%':{backgroundPosition:'0% center'} },
      },
    },
  },
  plugins: [],
}
