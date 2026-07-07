import { useState } from 'react'
import SkillCard from '../components/SkillCard'
import SkillModal from '../components/SkillModal'
import { useReveal } from '../hooks/useReveal'
import { useI18n } from '../i18n/context'
import { skills } from '../utils/constants'
import type { Skill } from '../utils/constants'

function Skills() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  return (
    <section id="skills" ref={ref} className={`section reveal ${visible ? 'visible' : ''}`}>
      <h2>{t('skills.title')}</h2>
      <p>{t('skills.subtitle')}</p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} onClick={() => setSelectedSkill(skill)} />
        ))}
      </div>
      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </section>
  )
}

export default Skills
