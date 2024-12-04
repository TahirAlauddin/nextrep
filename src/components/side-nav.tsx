import { Home, BarChart2, Zap, CircleDot } from 'lucide-react'
import Link from "next/link"

export function SideNav() {
  return (
    <div className="w-16 border-r h-full flex flex-col items-center py-4 space-y-4">
      <Link href="#" className="p-2 rounded-lg bg-green-50">
        <Home className="w-5 h-5 text-green-500" />
      </Link>
      <Link href="#" className="p-2 rounded-lg hover:bg-gray-100">
        <BarChart2 className="w-5 h-5 text-gray-500" />
      </Link>
      <Link href="#" className="p-2 rounded-lg hover:bg-gray-100">
        <Zap className="w-5 h-5 text-gray-500" />
      </Link>
      <Link href="#" className="p-2 rounded-lg hover:bg-gray-100">
        <CircleDot className="w-5 h-5 text-gray-500" />
      </Link>
    </div>
  )
}

