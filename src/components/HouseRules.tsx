import { HouseRule } from '@/types'

export default function HouseRules({ rules }: { rules: HouseRule[] }) {
  return (
    <ul className="space-y-4">
      {rules.map((rule, index) => (
        <li key={index} className="flex items-center py-2 border-b border-gray-200">
          <span className="mr-4">{rule.icon}</span>
          <div>
            <strong>{rule.title}</strong> {rule.content}
          </div>
        </li>
      ))}
    </ul>
  )
}