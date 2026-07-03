import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) { root.classList.remove('light') }
    else         { root.classList.add('light') }
  }, [isDark])

  return { isDark, toggle: () => setIsDark(d => !d) }
}
