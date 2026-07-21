export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <div
      className="theme-switch"
      title={isDark ? 'Mudar para modo azul' : 'Mudar para modo roxo'}
    >
      <input
        id="theme-toggle"
        type="checkbox"
        checked={!isDark}
        onChange={onToggle}
      />
      <label className="theme-toggle" htmlFor="theme-toggle">
        <i />
      </label>
      <span className="switch__sr">{isDark ? 'Modo roxo' : 'Modo azul'}</span>
    </div>
  )
}