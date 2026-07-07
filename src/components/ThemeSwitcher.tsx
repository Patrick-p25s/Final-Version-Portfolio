import { themes } from '../utils/constants'
import type { ThemeKey } from '../utils/constants'

type ThemeSwitcherProps = {
  value: ThemeKey
  onChange: (theme: ThemeKey) => void
  label: string
}

function ThemeSwitcher({ value, onChange, label }: ThemeSwitcherProps) {
  return (
    <label className="theme-switcher" aria-label={label}>
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value as ThemeKey)}>
        {themes.map((theme) => (
          <option key={theme.key} value={theme.key}>
            {theme.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default ThemeSwitcher
