import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LanguageSelector from "./components/LanguageSelector";
import ParticleBackground from "./components/ParticleBackground";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useI18n } from "./i18n/context";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import type { ThemeKey } from "./utils/constants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./sections/Login";
import { Dashboard } from "./sections/Dashboard";
function App() {
  const [theme, setTheme] = useLocalStorage<ThemeKey>(
    "portfolio-theme",
    "blue",
  );
  const { language, setLanguage } = useI18n();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div className="app-shell">
              <ParticleBackground />
              <Header theme={theme} onThemeChange={setTheme} />
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
              </main>
              <Footer />
              <LanguageSelector language={language} onChange={setLanguage} />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
