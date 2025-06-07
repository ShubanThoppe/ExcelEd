import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface SubjectCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function SubjectCard({ icon, title, description }: SubjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#0a2e3b] mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">

      </div>
    </div>
  )
}
