import { useI18n } from '../i18n/context'
import type { Skill } from '../utils/constants'

type SkillCardProps = {
  skill: Skill
  onClick: () => void
}

function SkillCard({ skill, onClick }: SkillCardProps) {
  const { t } = useI18n()

  return (
    <button className="skill-card" onClick={onClick}>
      <h3>{t(`${skill.key}.name`)}</h3>
      <p>{t(`${skill.key}.description`)}</p>
    </button>
  )
}

export default SkillCard
