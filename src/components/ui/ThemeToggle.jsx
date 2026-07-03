export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <label className="switch" title={isDark ? 'Mudar para modo azul' : 'Mudar para modo roxo'}>
      <input
        className="switch__input"
        type="checkbox"
        role="switch"
        checked={!isDark}
        onChange={onToggle}
      />
      <span className="switch__icon">
        <span className="switch__icon-part switch__icon-part--1" />
        <span className="switch__icon-part switch__icon-part--2" />
        <span className="switch__icon-part switch__icon-part--3" />
        <span className="switch__icon-part switch__icon-part--4" />
        <span className="switch__icon-part switch__icon-part--5" />
        <span className="switch__icon-part switch__icon-part--6" />
        <span className="switch__icon-part switch__icon-part--7" />
        <span className="switch__icon-part switch__icon-part--8" />
        <span className="switch__icon-part switch__icon-part--9" />
        <span className="switch__icon-part switch__icon-part--10" />
        <span className="switch__icon-part switch__icon-part--11" />
      </span>
      <span className="switch__sr">{isDark ? 'Modo escuro roxo' : 'Modo azul'}</span>
    </label>
  )
}
