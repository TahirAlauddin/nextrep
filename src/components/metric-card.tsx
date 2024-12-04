import { type LucideIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface MetricCardProps {
  icon: LucideIcon
  title: string
  value: number
  description: string
  viewText: string
}

export function MetricCard({ icon: Icon, title, value, description, viewText }: MetricCardProps) {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pt-6">
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <Icon className="w-5 h-5" />
          <span>{title}</span>
        </div>
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="text-gray-500 text-sm">{description}</div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <Button variant="ghost" className="w-full justify-center hover:bg-gray-50">
          {viewText}
        </Button>
      </CardFooter>
    </Card>
  )
}

