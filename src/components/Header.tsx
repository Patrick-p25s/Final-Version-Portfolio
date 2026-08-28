import ThemeSwitcher from "./ThemeSwitcher";
import TypingText from "./TypingText";
import { useI18n } from "../i18n/context";
import type { ThemeKey } from "../utils/constants";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  theme: ThemeKey;
  onThemeChange: (theme: ThemeKey) => void;
};

const links = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
] as const;

function Header({ theme, onThemeChange }: HeaderProps) {
  const { t } = useI18n();

  return (
    <header className="header">
      <div className="brand">
        <span className="brand-label">Patrick Nomentsoa </span>
        <TypingText
          words={[String(t("header.role")), ...(t("hero.typing") as string[])]}
          className="brand-typing"
        />
      </div>

      <nav>
        {links.map((link) => (
          <a key={link} href={`#${link}`}>
            {t(`nav.${link}`)}
          </a>
        ))}
      </nav>

      <ThemeSwitcher
        value={theme}
        onChange={onThemeChange}
        label={String(t("theme.label"))}
      />
    </header>
  );
}

export default Header;
