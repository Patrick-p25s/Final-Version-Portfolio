import { useMemo } from 'react'
import type { ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { I18nContext } from './context'
import type { I18nContextValue, Language } from './context'
import { resources } from './translations'

function getByPath(data: unknown, path: string): unknown {
  return path.split('.').reduce((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part]
    }
    return undefined
  }, data)
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useLocalStorage<Language>('portfolio-language', 'en')

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      t: (path) => {
        const langNode = getByPath(resources[language], `translation.${path}`)
        const fallbackNode = getByPath(resources.en, `translation.${path}`)
        const result = langNode ?? fallbackNode
        if (typeof result === 'string' || Array.isArray(result)) {
          return result
        }
        return path
      },
    }),
    [language, setLanguage],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
